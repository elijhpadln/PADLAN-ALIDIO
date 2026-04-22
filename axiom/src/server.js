const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// ✅ Serve static files correctly
app.use(express.static(path.join(__dirname, '../public')));

// Game state store
const games = new Map();
const waitingPlayers = [];

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

wss.on('connection', (ws) => {
  const playerId = generateId();
  ws.playerId = playerId;
  console.log(`Player connected: ${playerId}`);

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data);
      handleMessage(ws, msg);
    } catch (e) {
      console.error('Error parsing message:', e);
    }
  });

  ws.on('close', () => {
    console.log(`Player disconnected: ${playerId}`);
    const idx = waitingPlayers.findIndex(p => p.playerId === playerId);
    if (idx !== -1) waitingPlayers.splice(idx, 1);

    for (const [gameId, game] of games.entries()) {
      if (game.players[0]?.id === playerId || game.players[1]?.id === playerId) {
        const other = game.players.find(p => p.id !== playerId);
        if (other?.ws?.readyState === WebSocket.OPEN) {
          other.ws.send(JSON.stringify({ type: 'OPPONENT_DISCONNECTED' }));
        }
        games.delete(gameId);
        break;
      }
    }
  });

  ws.send(JSON.stringify({ type: 'CONNECTED', playerId }));
});

function handleMessage(ws, msg) {
  switch (msg.type) {
    case 'JOIN_QUEUE': joinQueue(ws, msg); break;
    case 'SELECT_TEAM': selectTeam(ws, msg); break;
    case 'PLAY_CARD': playCard(ws, msg); break;
    case 'END_TURN': endTurn(ws, msg); break;
    case 'SINGLE_PLAYER': startSinglePlayer(ws, msg); break;
  }
}

function joinQueue(ws, msg) {
  if (waitingPlayers.length > 0) {
    const opponent = waitingPlayers.shift();
    const gameId = generateId();
    startGame(gameId, opponent, { ws, playerId: ws.playerId, name: msg.name });
  } else {
    waitingPlayers.push({ ws, playerId: ws.playerId, name: msg.name });
    ws.send(JSON.stringify({ type: 'WAITING' }));
  }
}

function startSinglePlayer(ws, msg) {
  const gameId = generateId();
  const aiPlayer = { ws: null, playerId: 'AI', name: 'AI Trainer', isAI: true };
  startGame(gameId, { ws, playerId: ws.playerId, name: msg.name }, aiPlayer);
}

function startGame(gameId, player1, player2) {
  const game = {
    id: gameId,
    players: [
      { id: player1.playerId, name: player1.name, ws: player1.ws, isAI: false },
      { id: player2.playerId, name: player2.name, ws: player2.ws, isAI: player2.isAI || false }
    ],
    state: 'TEAM_SELECT',
    currentTurn: 0,
    round: 1
  };
  games.set(gameId, game);

  game.players.forEach((p, idx) => {
    if (p.ws) {
      p.ws.gameId = gameId;
      p.ws.playerIndex = idx;
      p.ws.send(JSON.stringify({
        type: 'GAME_START',
        gameId,
        playerIndex: idx,
        opponentName: game.players[1 - idx].name,
        state: 'TEAM_SELECT'
      }));
    }
  });

  if (player2.isAI) {
    setTimeout(() => aiSelectTeam(gameId), 500);
  }
}

function selectTeam(ws, msg) {
  const game = games.get(ws.gameId);
  if (!game) return;

  const player = game.players[ws.playerIndex];
  player.team = buildTeam(msg.creatureIds);
  player.hand = [];
  player.energy = 3;
  player.maxEnergy = 10;
  player.teamReady = true;

  const bothReady = game.players.every(p => p.teamReady || p.isAI);
  if (bothReady) {
    const ai = game.players.find(p => p.isAI);
    if (ai && !ai.teamReady) {
      ai.team = buildTeam([0, 1, 2]);
      ai.hand = [];
      ai.energy = 3;
      ai.maxEnergy = 10;
      ai.teamReady = true;
    }
    beginBattle(game);
  }
}

function aiSelectTeam(gameId) {
  const game = games.get(gameId);
  if (!game) return;
  const ai = game.players.find(p => p.isAI);
  if (ai) {
    ai.team = buildTeam([3, 4, 5]);
    ai.hand = [];
    ai.energy = 3;
    ai.maxEnergy = 10;
    ai.teamReady = true;

    const human = game.players.find(p => !p.isAI);
    if (human && human.teamReady) {
      beginBattle(game);
    }
  }
}

function buildTeam(ids) {
  return ids.map(id => {
    const template = CREATURES[id % CREATURES.length];
    return {
      ...JSON.parse(JSON.stringify(template)),
      id: generateId(),
      currentHp: template.maxHp,
      shield: 0,
      statusEffects: [],
      cards: template.cards.map(c => ({ ...c, id: generateId() }))
    };
  });
}

function beginBattle(game) {
  game.state = 'BATTLE';
  game.currentTurn = 0;

  game.players.forEach(p => {
    p.hand = drawCards(p, 3);
  });

  broadcastGameState(game, 'BATTLE_START');

  if (game.players[0].isAI) {
    setTimeout(() => doAITurn(game), 1500);
  }
}

function drawCards(player, count) {
  const allCards = [];
  player.team.forEach(creature => {
    if (creature.currentHp > 0) {
      creature.cards.forEach(card => allCards.push({ ...card, creatureId: creature.id }));
    }
  });

  const drawn = [];
  for (let i = 0; i < count && allCards.length > 0; i++) {
    const idx = Math.floor(Math.random() * allCards.length);
    drawn.push(allCards[idx]);
    allCards.splice(idx, 1);
  }
  return [...(player.hand || []), ...drawn].slice(0, 8);
}

// ... (rest of the game logic remains unchanged)

const CREATURES = [
  {
    name: 'Emberwing',
    type: 'Fire',
    maxHp: 420,
    atk: 10,
    spd: 8,
    emoji: '🔥',
    color: '#ff6b35',
    description: 'A fierce fire dragon with burning attacks',
    cards: [
      { name: 'Flame Slash', type: 'attack', cost: 1, power: 80, description: 'Deal 80 damage', emoji: '⚔️' },
      { name: 'Inferno', type: 'attack', cost: 2, power: 130, description: 'Deal 130 damage', emoji: '🔥' },
      { name: 'Dragon Scale', type: 'shield', cost: 1, power: 60, description: 'Gain 60 shield', emoji: '🛡️' },
    ]
  },
  // ... (other creatures unchanged)
];

CREATURES.forEach((c, i) => {
  c.id = i;
  c.cards.forEach((card, j) => {
    card.id = `${i}_${j}`;
    card.cost = card.cost || 1;
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n🎮 Axiom Clash server running!`);
  console.log(`🌐 Open http://localhost:${PORT} in your browser`);
  console.log(`\nPress Ctrl+C to stop.\n`);
});
