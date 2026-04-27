const ANIMATION_ASSETS = {
    archer: { idle: { src: 'assets/archer_idle.png' }, attack1: { src: 'assets/archer_attack1.png' }, attack2: { src: 'assets/archer_attack2.png' }, attack3: { src: 'assets/archer_attack3.png' }, hurt: { src: 'assets/archer_hurt.png' }, die: { src: 'assets/archer_dead.png' } },
    swordsman: { idle: { src: 'assets/swordsman_idle.png' }, attack1: { src: 'assets/swordsman_attack1.png' }, attack2: { src: 'assets/swordsman_attack2.png' }, attack3: { src: 'assets/swordsman_attack3.png' }, hurt: { src: 'assets/swordsman_hurt.png' }, die: { src: 'assets/swordsman_dead.png' } },
    wizard: { idle: { src: 'assets/wizard_idle.png' }, attack1: { src: 'assets/wizard_attack1.png' }, attack2: { src: 'assets/wizard_attack2.png' }, attack3: { src: 'assets/wizard_attack3.png' }, hurt: { src: 'assets/wizard_hurt.png' }, die: { src: 'assets/wizard_dead.png' } },
    enchantress: { idle: { src: 'assets/enchantress_idle.png' }, attack1: { src: 'assets/enchantress_attack1.png' }, attack2: { src: 'assets/enchantress_attack2.png' }, attack3: { src: 'assets/enchantress_attack3.png' }, hurt: { src: 'assets/enchantress_hurt.png' }, die: { src: 'assets/enchantress_dead.png' } },
    knight: { idle: { src: 'assets/knight_idle.png' }, attack1: { src: 'assets/knight_attack1.png' }, attack2: { src: 'assets/knight_attack2.png' }, attack3: { src: 'assets/knight_attack3.png' }, hurt: { src: 'assets/knight_hurt.png' }, die: { src: 'assets/knight_dead.png' } },
    musketeer: { idle: { src: 'assets/musketeer_idle.png' }, attack1: { src: 'assets/musketeer_attack1.png' }, attack2: { src: 'assets/musketeer_attack2.png' }, attack3: { src: 'assets/musketeer_attack3.png' }, hurt: { src: 'assets/musketeer_hurt.png' }, die: { src: 'assets/musketeer_dead.png' } }
};

const CHARACTERS =[
    { id: 0, name: 'Archer', key: 'archer', color: '#2ecc71', maxHp: 280, atk: 40, spd: 85, maxMp: 100, moves:[{ name: 'Volley', power: 65, mpCost: 25, anim: 'attack2' }, { name: 'Piercing Arrow', power: 90, mpCost: 45, anim: 'attack3' }] },
    { id: 1, name: 'Swordsman', key: 'swordsman', color: '#e74c3c', maxHp: 350, atk: 35, spd: 60, maxMp: 80, moves:[{ name: 'Cross Slash', power: 70, mpCost: 30, anim: 'attack2' }, { name: 'Blade Dance', power: 110, mpCost: 55, anim: 'attack3' }] },
    { id: 2, name: 'Wizard', key: 'wizard', color: '#9b59b6', maxHp: 220, atk: 50, spd: 55, maxMp: 150, moves:[{ name: 'Arcane Missiles', power: 80, mpCost: 40, anim: 'attack2' }, { name: 'Meteor', power: 130, mpCost: 80, anim: 'attack3', isAoe: true }] },
    { id: 3, name: 'Enchantress', key: 'enchantress', color: '#e056fd', maxHp: 240, atk: 45, spd: 65, maxMp: 140, moves:[{ name: 'Mystic Orb', power: 75, mpCost: 35, anim: 'attack2' }, { name: 'Astral Storm', power: 115, mpCost: 70, anim: 'attack3', isAoe: true }] },
    { id: 4, name: 'Knight', key: 'knight', color: '#c0c0c0', maxHp: 420, atk: 25, spd: 40, maxMp: 70, moves:[{ name: 'Shield Strike', power: 55, mpCost: 20, anim: 'attack2' }, { name: 'Holy Cleave', power: 85, mpCost: 45, anim: 'attack3' }] },
    { id: 5, name: 'Musketeer', key: 'musketeer', color: '#f1c40f', maxHp: 270, atk: 48, spd: 75, maxMp: 90, moves:[{ name: 'Quick Draw', power: 70, mpCost: 30, anim: 'attack2' }, { name: 'Headshot', power: 120, mpCost: 60, anim: 'attack3' }] }
];

let G = { selectedTeam:[], p: null, c: null, predictedQueue:[], activeEnt: null, pendingMove: null, isAnimating: false, isPaused: false };
let uidCounter = 0;
let globalFrameCount = 0;
let animTick = 0;
const LOADED_IMAGES = {};
let imagesToLoad = 0;
let imagesLoaded = 0;

window.onload = () => {
    document.querySelector('.press-start-text').innerHTML = "LOADING ASSETS...";
    for (let char in ANIMATION_ASSETS) { for (let anim in ANIMATION_ASSETS[char]) imagesToLoad++; }
    if(imagesToLoad === 0) finishLoading();

    for (let char in ANIMATION_ASSETS) {
        for (let anim in ANIMATION_ASSETS[char]) {
            const img = new Image();
            img.src = ANIMATION_ASSETS[char][anim].src;
            img.onload = () => { imagesLoaded++; if (imagesLoaded === imagesToLoad) finishLoading(); };
            img.onerror = () => { console.warn(`Missing: ${img.src}`); imagesLoaded++; if (imagesLoaded === imagesToLoad) finishLoading(); };
            LOADED_IMAGES[`${char}_${anim}`] = img;
        }
    }
};

function finishLoading() {
    document.querySelector('.press-start-text').innerHTML = "<span>&lt;</span> PRESS START <span>&gt;</span>";
    document.getElementById('menuScreen').addEventListener('click', startGame);
    requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
    requestAnimationFrame(gameLoop);
    if (G.isPaused) return;

    const menuScreen = document.getElementById('menuScreen');
    if (menuScreen && menuScreen.classList.contains('active')) {
        const skyLayer = document.getElementById('layer-sky');
        const flowerLayer = document.getElementById('layer-flowers');
        if (skyLayer && flowerLayer) {
            const elapsed = timestamp || performance.now();
            skyLayer.style.transform = `scale(1.05) translateX(${Math.sin(elapsed * 0.0002) * 3}%)`;
            flowerLayer.style.transform = `translate(${Math.sin(elapsed * 0.0015) * 2}px, ${Math.cos(elapsed * 0.002) * 1.5}px)`;
        }
    }

    globalFrameCount++;
    if (globalFrameCount >= 24) { globalFrameCount = 0; animTick++; }

    const allEnts = (G.p && G.c) ?[...G.p.team, ...G.c.team] :[];
    allEnts.forEach(ent => drawModularSprite(`sprite_${ent.uid}`, ent.key, ent.action, !ent.isPlayer, false));
    
    CHARACTERS.forEach(h => drawModularSprite(`select_sprite_${h.id}`, h.key, 'idle', false, true));
    for(let i=0; i<3; i++) { if(G.selectedTeam[i] !== undefined) drawModularSprite(`preview_sprite_${i}`, CHARACTERS[G.selectedTeam[i]].key, 'idle', false, true); }
    if(G.predictedQueue) { G.predictedQueue.forEach((c, i) => drawModularSprite(`tq_icon_${i}_${c.uid}`, c.key, 'idle', !c.isPlayer, true)); }
    if(G.p) { G.p.team.forEach(c => drawModularSprite(`portrait_bg_${c.uid}`, c.key, 'idle', false, true)); }
}

function drawModularSprite(canvasId, charKey, action, flipX, isUI = false) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgKey = `${charKey}_${action}`;
    const img = LOADED_IMAGES[imgKey];

    if (!img || !img.complete || img.naturalWidth === 0) {
        if(!isUI) { ctx.fillStyle = flipX ? '#ff5252' : '#3498db'; ctx.fillRect(20, 20, 56, 56); }
        return;
    }

    const totalFrames = Math.max(1, Math.floor(img.naturalWidth / img.naturalHeight));
    const frameWidth = img.naturalWidth / totalFrames; 
    const frameHeight = img.naturalHeight;
    
    let currentFrame = totalFrames === 1 ? 0 : (animTick % totalFrames);
    if (action === 'die' || action === 'dead') currentFrame = totalFrames - 1; 

    const sourceX = currentFrame * frameWidth;

    ctx.save();
    
    if (isUI) {
        if (flipX) { ctx.translate(canvas.width, 0); ctx.scale(-1, 1); }
        const scale = Math.min(canvas.width / frameWidth, canvas.height / frameHeight) * 1.5;
        const dw = frameWidth * scale;
        const dh = frameHeight * scale;
        const dx = (canvas.width - dw) / 2;
        const dy = (canvas.height - dh) / 2;
        ctx.drawImage(img, sourceX, 0, frameWidth, frameHeight, dx, dy, dw, dh);
    } else {
        const scale = 1.6; 
        const dw = frameWidth * scale;
        const dh = frameHeight * scale;
        const dx = (canvas.width - dw) / 2;
        const dy = canvas.height - dh; 

        if (flipX) {
            ctx.translate(canvas.width / 2, 0);
            ctx.scale(-1, 1);
            ctx.translate(-canvas.width / 2, 0);
        }
        ctx.drawImage(img, sourceX, 0, frameWidth, frameHeight, dx, dy, dw, dh);
    }
    ctx.restore();
}

// --- PAUSE MENU LOGIC ---
function togglePause() {
    if (G.isAnimating || !G.p) return; 
    if (G.isPaused) { resumeGame(); } else { G.isPaused = true; document.getElementById('pauseScreen').classList.remove('hidden'); }
}
function resumeGame() { G.isPaused = false; document.getElementById('pauseScreen').classList.add('hidden'); }
function quitToMenu() {
    resumeGame();
    document.getElementById('pause-btn').classList.add('hidden');
    G.selectedTeam =[]; G.p = null; G.c = null;
    showScreen('menu');
}
function restartBattle() {
    resumeGame();
    const cpuIds =[]; for(let i=0; i<3; i++) cpuIds.push(Math.floor(Math.random() * 6));
    
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.remove('hidden');
    overlay.classList.add('iris-closing');

    setTimeout(() => {
        initBattle(G.selectedTeam, cpuIds, 'none');
        showScreen('battle');
        overlay.classList.remove('iris-closing');
        overlay.classList.add('hidden');
    }, 1000); 
}

function showScreen(n) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(n + 'Screen').classList.add('active'); }
function startGame() { G.selectedTeam =[]; showScreen('team'); renderTeamSelect(); }

function renderTeamSelect() {
    const grid = document.getElementById('creatureGrid');
    grid.innerHTML = '';
    CHARACTERS.forEach(c => {
        const el = document.createElement('div');
        el.className = 'cc';
        el.innerHTML = `<div style="display:flex;justify-content:center"><canvas id="select_sprite_${c.id}" width="80" height="80"></canvas></div><div class="cc-name" style="color:${c.color}">${c.name}</div><div class="cc-stats"><span>❤️${c.maxHp}</span><span>⚔️${c.atk}</span><span>💨${c.spd}</span></div>`;
        el.onclick = () => toggleCreature(c, el);
        grid.appendChild(el);
    });
}

function toggleCreature(c, el) {
    const idx = G.selectedTeam.indexOf(c.id);
    if (idx !== -1) { G.selectedTeam.splice(idx, 1); el.classList.remove('selected'); }
    else if (G.selectedTeam.length < 3) { G.selectedTeam.push(c.id); el.classList.add('selected'); }
    updatePreview();
}

function updatePreview() {
    for (let i = 0; i < 3; i++) {
        const slot = document.getElementById('slot' + i);
        const id = G.selectedTeam[i];
        if(id !== undefined) {
            slot.innerHTML = `<canvas id="preview_sprite_${i}" width="50" height="50"></canvas>`;
            slot.classList.add('filled');
        } else { slot.innerHTML = '?'; slot.classList.remove('filled'); }
    }
    document.getElementById('confirmBtn').disabled = G.selectedTeam.length !== 3;
}

// ===============================================
// INTEGRATED RPS MINIGAME
// ===============================================
const pickHands = document.querySelectorAll(".pick-hand");
const pickHandMenu = document.querySelector(".pick-hand-container");
const rpsOverlay = document.querySelector(".pick-hand-menu");
const playerHandImg = document.querySelector(".player-hand");
const cpuHandImg = document.querySelector(".cpu-hand");
const newGameMenu = document.querySelector(".new-game-overlay");

let rpsIsLocked = false;
let playerLives = 5;
let cpuLives = 5;

pickHands.forEach(hand => hand.addEventListener("click", onPick));

function confirmTeam() {
    // Reset RPS UI
    playerLives = 5;
    cpuLives = 5;
    document.querySelectorAll(".player-hearts img, .cpu-hearts img").forEach(img => {
        img.style.opacity = 1;
        img.classList.remove("heart-damage");
    });
    newGameMenu.classList.add("hide-new-game-menu");
    rpsIsLocked = false;
    
    // Jump to RPS screen
    showScreen('rps');
}

async function onPick(e) {
    if (rpsIsLocked) return;
    rpsIsLocked = true;

    let playerHand = e.currentTarget.dataset.hand;
    let cpuHand = pickCpuHand();

    await exitMenu();
    await revealHand(playerHand, cpuHand);

    let roundWinner = determineRoundWinner(playerHand, cpuHand);
    await removeLifeFromLoser(roundWinner);

    if (playerLives == 0 || cpuLives == 0) {
        endRPSGame();
    } else {
        openMenu();
        rpsIsLocked = false;
    }
}

async function exitMenu() {
    pickHandMenu.classList.add("menu-exit");
    await waitTransition(pickHandMenu);
    rpsOverlay.classList.add("overlay-exit");
    await waitTransition(rpsOverlay);
}

async function openMenu() {
    pickHandMenu.classList.remove("menu-exit");
    rpsOverlay.classList.remove("overlay-exit");
}

async function shakeAnimation() {
    setTimeout(() => { cpuHandImg.classList.add("shake"); }, 500);
    setTimeout(() => { playerHandImg.classList.add("shake"); }, 500);
    await waitAnimation(playerHandImg);
    cpuHandImg.classList.remove("shake");
    playerHandImg.classList.remove("shake");
}

async function revealHand(playerHand, cpuHand) {
    await shakeAnimation();
    return new Promise(resolve => {
        const playerOriginalImage = playerHandImg.src;
        const cpuOriginalImage = cpuHandImg.src;
        playerHandImg.src = `assets/player-${playerHand}.png`;
        cpuHandImg.src = `assets/cpu-${cpuHand}.png`;
        setTimeout(() => {
            playerHandImg.src = playerOriginalImage;
            cpuHandImg.src = cpuOriginalImage;
            resolve();
        }, 1500);
    });
}

const determineRoundWinner = (playerHand, cpuHand) => {
    if (playerHand == "rock") playerHand = 1; else if (playerHand == "paper") playerHand = 2; else if (playerHand == "scissor") playerHand = 3;
    if (cpuHand == "rock") cpuHand = 1; else if (cpuHand == "paper") cpuHand = 2; else if (cpuHand == "scissor") cpuHand = 3;
    const result = ((playerHand - cpuHand + 3) % 3);
    if (result == 1) return "player";
    else if (result == 2) return "cpu";
    else return "draw";
}

async function removeLifeFromLoser(roundWinner) {
    if (roundWinner === "player") { await removeALife("cpu"); cpuLives--; } 
    else if (roundWinner === "cpu") { await removeALife("player"); playerLives--; }
}

async function removeALife(loser) {
    const playerHearts = [...document.querySelectorAll(".player-hearts img")];
    const cpuHearts = [...document.querySelectorAll(".cpu-hearts img")];

    if (loser === "player") {
        playerHandImg.classList.add("hand-damage");
        const heart = playerHearts.reverse().find(h => !h.classList.contains("heart-damage"));
        if(heart) {
            heart.classList.add("heart-damage");
            await waitAnimation(heart);
            heart.style.opacity = 0;
        }
        playerHandImg.classList.remove("hand-damage");
    } else if (loser === "cpu") {
        cpuHandImg.classList.add("hand-damage");
        const heart = cpuHearts.reverse().find(h => !h.classList.contains("heart-damage"));
        if(heart) {
            heart.classList.add("heart-damage");
            await waitAnimation(heart);
            heart.style.opacity = 0;
        }
        cpuHandImg.classList.remove("hand-damage");
    }
}

const pickCpuHand = () => {
    const cpuHand = Math.floor((Math.random() * 3) + 1);
    if (cpuHand == 1) return "rock"; else if (cpuHand == 2) return "paper"; else if (cpuHand == 3) return "scissor";
}

function endRPSGame() {
    let winStatus = document.querySelector(".new-game-content h1");
    let winDisplay = document.querySelector(".win-display");
    let bonus = 'none';
    
    if (playerLives == 0) {
        winStatus.textContent = "YOU LOST!";
        winDisplay.src = "assets/losing-hand.png";
        bonus = 'enemy';
    } else {
        winStatus.textContent = "PREEMPTIVE STRIKE!";
        winDisplay.src = "assets/game-winner.png";
        bonus = 'player';
    }
    newGameMenu.classList.remove("hide-new-game-menu");

    // Override the button to go to Battle
    const nextBtn = document.getElementById("new-game-btn");
    nextBtn.onclick = (e) => {
        e.preventDefault();
        const cpuIds =[]; for(let i=0; i<3; i++) cpuIds.push(Math.floor(Math.random() * 6));
        
        const overlay = document.getElementById('transition-overlay');
        overlay.classList.remove('hidden');
        overlay.classList.add('iris-closing');

        setTimeout(() => {
            initBattle(G.selectedTeam, cpuIds, bonus);
            showScreen('battle');
            document.getElementById('pause-btn').classList.remove('hidden');
            overlay.classList.remove('iris-closing');
            overlay.classList.add('hidden'); // Removed Iris Opening per request
        }, 1000);
    };
}

function waitTransition(element) {
    return new Promise(resolve => {
        element.addEventListener("transitionend", handler);
        function handler(e) {
            const expectedProperties =["opacity", "transform", "background-color"];
            if (e.target === element && expectedProperties.includes(e.propertyName)) {
                element.removeEventListener("transitionend", handler);
                resolve();
            }
        }
    });
}
function waitAnimation(element) {
    return new Promise(resolve => {
        element.addEventListener("animationend", (e) => { if (e.target == element) { resolve(); } });
    }, { once: true });
}

// ===============================================
// BATTLE ENGINE
// ===============================================
function initBattle(pIds, cIds, bonus = 'none') {
    const mkP = ids => ids.map(id => { 
        const b = CHARACTERS.find(h=>h.id===id); 
        const startCT = bonus === 'player' ? 1000 : (bonus === 'enemy' ? 0 : Math.random()*200);
        return { ...b, uid: 'u' + (uidCounter++), currentHp: b.maxHp, mp: b.maxMp, isPlayer: true, action: 'idle', ct: startCT }; 
    });
    const mkC = ids => ids.map(id => { 
        const b = CHARACTERS.find(m=>m.id===id); 
        const startCT = bonus === 'enemy' ? 1000 : (bonus === 'player' ? 0 : Math.random()*200);
        return { ...b, name:`Enemy ${b.name}`, uid: 'u' + (uidCounter++), currentHp: b.maxHp, mp: b.maxMp, isPlayer: false, action: 'idle', ct: startCT }; 
    });
    
    G.p = { team: mkP(pIds) };
    G.c = { team: mkC(cIds) };
    G.turnQueue =[];
    
    renderEntities(); renderHUD(); setTimeout(advanceTurn, 100);
}

function renderEntities() {
    const layer = document.getElementById('entitiesLayer');
    layer.innerHTML = '';
    const pPos =[{x: 22, y: 22}, {x: 14, y: 12}, {x: 24, y: 4}];
    const cPos =[{x: 78, y: 22}, {x: 86, y: 12}, {x: 76, y: 4}];

    G.p.team.forEach((c, i) => createEntityHTML(layer, c, pPos[i].x, pPos[i].y, 100 - pPos[i].y));
    G.c.team.forEach((c, i) => createEntityHTML(layer, c, cPos[i].x, cPos[i].y, 100 - cPos[i].y));
}

function createEntityHTML(layer, c, x, y, z) {
    layer.innerHTML += `<div class="entity-wrap" id="wrap_${c.uid}" style="left:${x}%; bottom:${y}%; z-index:${z}; transform:translateX(-50%)"><div class="platform"></div><canvas class="sprite" id="sprite_${c.uid}" width="150" height="150"></canvas></div>`;
}

function renderHUD() {
    const panel = document.getElementById('party-panel');
    panel.innerHTML = '';
    G.p.team.forEach(c => {
        panel.innerHTML += `
        <div class="portrait-slot" id="hud_slot_${c.uid}">
            <div class="portrait-bg"><canvas id="portrait_bg_${c.uid}" width="120" height="120"></canvas></div>
            <div class="hero-header"><span class="orb"></span> ${c.name}</div>
            <div class="bars-container">
                <div class="bar-row"><span class="bar-label">HP</span><div class="bar-bg"><div id="hp_${c.uid}" class="hp-fill"></div></div><span id="hp_txt_${c.uid}" class="bar-val"></span></div>
                <div class="bar-row"><span class="bar-label">MP</span><div class="bar-bg"><div id="mp_${c.uid}" class="mp-fill"></div></div><span id="mp_txt_${c.uid}" class="bar-val"></span></div>
            </div>
        </div>`;
    });
    updateBars();
}

function predictTimeline(count) {
    let sim =[...G.p.team, ...G.c.team].filter(e => e.currentHp > 0).map(e => ({...e}));
    let timeline =[];
    while(timeline.length < count && sim.length > 0) {
        let minTime = Infinity, nextUnit = null;
        for(let e of sim) { let timeNeeded = (1000 - e.ct) / e.spd; if(timeNeeded < minTime) { minTime = timeNeeded; nextUnit = e; } }
        for(let e of sim) { e.ct += e.spd * minTime; }
        timeline.push({...nextUnit});
        nextUnit.ct = 0; 
    }
    return timeline;
}

function updateTurnQueueUI() {
    const qBox = document.getElementById('turn-queue');
    qBox.innerHTML = '';
    G.predictedQueue = predictTimeline(8);
    
    G.predictedQueue.forEach((c, i) => {
        const isP = c.isPlayer;
        const borderColor = isP ? 'var(--pixel-gold)' : '#ff5252'; 
        const hpPct = Math.max(0, (c.currentHp / c.maxHp) * 100);
        const mpPct = Math.max(0, (c.mp / c.maxMp) * 100);
        const activeClass = i === 0 ? 'tq-active' : '';
        const readyText = i === 0 ? '<div class="tq-ready-text">READY!</div>' : '';
        const enemyIconClass = !isP ? 'enemy-icon' : '';

        qBox.innerHTML += `
            <div class="tq-item ${activeClass}" style="border-color: ${borderColor};">
                <canvas class="tq-icon ${enemyIconClass}" id="tq_icon_${i}_${c.uid}" width="48" height="48"></canvas>
                ${readyText}
                <div class="tq-mini-bars"><div class="tq-bar-bg"><div class="tq-hp-fill" style="width:${hpPct}%"></div></div><div class="tq-bar-bg"><div class="tq-mp-fill" style="width:${mpPct}%"></div></div></div>
            </div>
        `;
    });
}

function advanceTurn() {
    if (G.isPaused) { setTimeout(advanceTurn, 500); return; }
    if (checkGameOver()) return;
    
    let alive =[...G.p.team, ...G.c.team].filter(e => e.currentHp > 0);
    if(alive.length === 0) return;

    let minTime = Infinity, nextUnit = null;
    for(let e of alive) { let timeNeeded = (1000 - e.ct) / e.spd; if(timeNeeded < minTime) { minTime = timeNeeded; nextUnit = e; } }
    alive.forEach(e => { e.ct += e.spd * minTime; });

    G.activeEnt = nextUnit;
    G.activeEnt.ct = 0; 
    updateTurnQueueUI();

    G.activeEnt.mp = Math.min(G.activeEnt.maxMp, G.activeEnt.mp + 20); 
    updateBars();

    document.querySelectorAll('.portrait-slot').forEach(e => e.classList.remove('active-hud'));
    if (G.activeEnt.isPlayer) {
        const activeHud = document.getElementById(`hud_slot_${G.activeEnt.uid}`);
        if (activeHud) activeHud.classList.add('active-hud');
    }

    document.querySelectorAll('.entity-wrap').forEach(e => e.classList.remove('is-active'));
    document.getElementById(`wrap_${G.activeEnt.uid}`).classList.add('is-active');

    if (G.activeEnt.isPlayer) {
        document.getElementById('command-panel').classList.add('active-turn');
        showMainMenu();
    } else {
        document.getElementById('command-panel').classList.remove('active-turn');
        setTimeout(cpuTurn, 1000);
    }
}

function showMainMenu() { 
    document.getElementById('targetMenuOverlay').classList.add('hidden');
    document.getElementById('skillsMenuBox').classList.add('hidden');
    document.getElementById('mainMenuBox').classList.remove('hidden');
    clearTargeting(); 
    
    const skillBtn = document.getElementById('skill-btn');
    if (G.activeEnt.moves.some(m => G.activeEnt.mp >= m.mpCost)) skillBtn.classList.remove('disabled');
    else skillBtn.classList.add('disabled');
}

function handleStrike() { if(G.isAnimating) return; G.pendingMove = { name: 'Strike', power: G.activeEnt.atk, mpCost: 0, anim: 'attack1' }; startTargeting(); }

function showSkillsMenu() {
    document.getElementById('mainMenuBox').classList.add('hidden');
    document.getElementById('skillsMenuBox').classList.remove('hidden');
    const list = document.getElementById('skillsList');
    list.innerHTML = '';
    
    G.activeEnt.moves.forEach(m => {
        const canUse = G.activeEnt.mp >= m.mpCost;
        const item = document.createElement('div');
        item.className = `menu-item ${!canUse ? 'disabled' : ''}`;
        item.innerHTML = `${m.name} <small>MP:${m.mpCost}</small>`;
        if (canUse) { item.onclick = () => { G.pendingMove = m; startTargeting(); }; }
        list.appendChild(item);
    });
}

function startTargeting() {
    document.getElementById('targetMenuOverlay').classList.remove('hidden');
    const targets = G.pendingMove.isAoe ? (G.activeEnt.isPlayer ? G.c.team : G.p.team) : G.c.team;
    
    targets.forEach(c => {
        if(c.currentHp > 0) {
            const wrap = document.getElementById(`wrap_${c.uid}`);
            wrap.classList.add('targetable');
            wrap.onclick = () => { clearTargeting(); executeMove(G.activeEnt, c, G.pendingMove); };
        }
    });
}
function cancelTargeting() { clearTargeting(); showMainMenu(); }
function clearTargeting() { document.getElementById('targetMenuOverlay').classList.add('hidden'); [...G.p.team, ...G.c.team].forEach(c => { const w = document.getElementById(`wrap_${c.uid}`); if(w) { w.classList.remove('targetable'); w.onclick = null; }}); }

function cpuTurn() {
    if (G.isPaused) { setTimeout(cpuTurn, 500); return; }
    const targets = G.p.team.filter(c => c.currentHp > 0);
    if (targets.length === 0) return;
    const target = targets[Math.floor(Math.random() * targets.length)];
    
    const validMoves = G.activeEnt.moves.filter(m => m.mpCost <= G.activeEnt.mp);
    let move = { name: 'Strike', power: G.activeEnt.atk, mpCost: 0, anim: 'attack1' };
    if (validMoves.length > 0 && Math.random() > 0.5) { move = validMoves[Math.floor(Math.random() * validMoves.length)]; }
    
    executeMove(G.activeEnt, target, move);
}

function executeMove(actor, target, move) {
    G.isAnimating = true;
    document.getElementById('command-panel').classList.remove('active-turn');
    
    actor.mp = Math.max(0, actor.mp - (move.mpCost || 0));
    updateBars();
    actor.action = move.anim || 'attack1';
    animTick = 0;
    
    const wrap = document.getElementById(`wrap_${actor.uid}`);
    wrap.style.animation = actor.isPlayer ? 'lunge 1.2s ease-in-out' : 'lungeE 1.2s ease-in-out';
    
    setTimeout(() => {
        if (move.isAoe) {
            const targets = actor.isPlayer ? G.c.team : G.p.team;
            targets.filter(t => t.currentHp > 0).forEach(t => applyDamage(actor, t, move));
        } else {
            applyDamage(actor, target, move);
        }
        updateBars();
    }, 600); 
    
    setTimeout(() => {
        wrap.style.animation = ''; 
        actor.action = 'idle';
        
        const allTargets = actor.isPlayer ? G.c.team : G.p.team;
        allTargets.forEach(t => {
            if(t.currentHp <= 0) t.action = 'die';
        });
        
        G.isAnimating = false;
        setTimeout(advanceTurn, 200); 
    }, 1200); 
}

function applyDamage(actor, target, move) {
    target.action = 'hurt';
    let dmg = Math.floor(move.power + (actor.atk * 0.2));
    if (Math.random() < (move.critChance || 0)) { dmg = Math.floor(dmg * 1.5); spawnNum(`CRIT ${dmg}`, target.uid, 'crit'); }
    else { spawnNum(`-${dmg}`, target.uid, 'dmg'); }
    
    target.currentHp = Math.max(0, target.currentHp - dmg);
    doHitAnim(target.uid, target.isPlayer);
    
    setTimeout(() => { if (target.currentHp > 0) target.action = 'idle'; }, 400);
}

function spawnNum(txt, uid, type) {
    const w = document.getElementById(`wrap_${uid}`); if(!w) return;
    const s = document.getElementById('stage'), r = w.getBoundingClientRect(), sr = s.getBoundingClientRect();
    const el = document.createElement('div');
    el.className = `fnum ${type}`; el.innerText = txt;
    el.style.left = (r.left + r.width/2 - sr.left) + 'px'; el.style.top = (r.top - sr.top) + 'px';
    s.appendChild(el); setTimeout(() => el.remove(), 1200);
}

function doHitAnim(uid, isPlayer) { const w = document.getElementById(`wrap_${uid}`); if (w) { w.style.animation = isPlayer ? 'hit 0.4s' : 'hitE 0.4s'; setTimeout(() => w.style.animation = '', 400); } }

function updateBars() {
    G.p.team.forEach(c => {
        const hB = document.getElementById(`hp_${c.uid}`); if(hB) { hB.style.width = Math.max(0, (c.currentHp / c.maxHp)*100) + '%'; document.getElementById(`hp_txt_${c.uid}`).innerText = `${Math.ceil(Math.max(0, c.currentHp))}/${c.maxHp}`; }
        const mB = document.getElementById(`mp_${c.uid}`); if(mB) { mB.style.width = Math.max(0, (c.mp / c.maxMp)*100) + '%'; document.getElementById(`mp_txt_${c.uid}`).innerText = `${Math.floor(c.mp)}/${c.maxMp}`; }
    });
}

function showInfoModal() {
    const renderCol = (title, team) => {
        let html = `<div class="info-col"><h3>${title}</h3>`;
        team.forEach(c => { html += `<div class="info-row"><strong>${c.name}</strong><br>HP: ${Math.ceil(c.currentHp)}/${c.maxHp} | MP: ${c.mp}/${c.maxMp}</div>`; });
        return html + `</div>`;
    };
    document.getElementById('infoModalBody').innerHTML = renderCol("YOUR PARTY", G.p.team) + renderCol("ENEMY TEAM", G.c.team);
    document.getElementById('infoModal').classList.remove('hidden');
}
function closeModals() { document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden')); }

function checkGameOver() {
    const pAlive = G.p.team.some(c => c.currentHp > 0);
    const cAlive = G.c.team.some(c => c.currentHp > 0);
    if (!pAlive || !cAlive) {
        document.getElementById('pause-btn').classList.add('hidden');
        document.getElementById('goTitle').innerText = pAlive ? "VICTORY!" : "DEFEAT";
        document.getElementById('goTitle').style.color = pAlive ? "var(--pixel-gold)" : "#ff5252";
        document.getElementById('goSub').innerText = pAlive ? "You crushed the enemy." : "Your party was wiped out.";
        setTimeout(() => showScreen('gameover'), 1500);
        return true;
    }
    return false;
}