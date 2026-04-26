const ANIMATION_ASSETS = {
    hero_blue: {
        icon: { src: 'assets/blue_icon.png', frames: 1 }, 
        idle: { src: 'assets/blue_idle.png', frames: 4 }, 
        strike: { src: 'assets/blue_strike.png', frames: 6 },
        skill: { src: 'assets/blue_skill.png', frames: 6 },
        brace: { src: 'assets/blue_brace.png', frames: 4 },
        hurt: { src: 'assets/blue_hurt.png', frames: 4 },
        die: { src: 'assets/blue_death.png', frames: 7 }  
    },
    hero_white: {
        icon: { src: 'assets/white_icon.png', frames: 1 },
        idle: { src: 'assets/white_idle.png', frames: 4 }, 
        strike: { src: 'assets/white_strike.png', frames: 6 },
        skill: { src: 'assets/white_skill.png', frames: 6 },
        brace: { src: 'assets/white_brace.png', frames: 4 },
        hurt: { src: 'assets/white_hurt.png', frames: 4 },
        die: { src: 'assets/white_death.png', frames: 7 }  
    },
    hero_purple: {
        icon: { src: 'assets/purple_icon.png', frames: 1 },
        idle: { src: 'assets/purple_idle.png', frames: 4 }, 
        strike: { src: 'assets/purple_strike.png', frames: 6 },
        skill: { src: 'assets/purple_skill.png', frames: 6 },
        brace: { src: 'assets/purple_brace.png', frames: 4 },
        hurt: { src: 'assets/purple_hurt.png', frames: 4 },
        die: { src: 'assets/purple_death.png', frames: 7 }  
    },
    mon_1: {
        idle: { src: 'assets/mon1_idle.png', frames: 4 },
        strike: { src: 'assets/mon1_strike.png', frames: 6 }, 
        skill: { src: 'assets/mon1_skill.png', frames: 6 }, 
        brace: { src: 'assets/mon1_brace.png', frames: 6 }, 
        hurt: { src: 'assets/mon1_hurt.png', frames: 4 },
        die: { src: 'assets/mon1_die.png', frames: 8 }  
    },
    mon_2: {
        idle: { src: 'assets/mon2_idle.png', frames: 4 },
        strike: { src: 'assets/mon2_strike.png', frames: 6 }, 
        skill: { src: 'assets/mon2_skill.png', frames: 6 }, 
        brace: { src: 'assets/mon2_brace.png', frames: 6 }, 
        hurt: { src: 'assets/mon2_hurt.png', frames: 4 },
        die: { src: 'assets/mon2_die.png', frames: 6 }  
    },
    mon_3: {
        idle: { src: 'assets/mon3_idle.png', frames: 4 },
        strike: { src: 'assets/mon3_strike.png', frames: 6 }, 
        skill: { src: 'assets/mon3_skill.png', frames: 6 }, 
        brace: { src: 'assets/mon3_brace.png', frames: 6 }, 
        hurt: { src: 'assets/mon3_hurt.png', frames: 4 },
        die: { src: 'assets/mon3_die.png', frames: 4 }  
    }
};

const HEROES =[
    { id: 0, name: 'Vanguard', key: 'hero_blue', color: '#687dff', maxHp: 380, atk: 30, spd: 40, maxStamina: 100, skill: { name: 'Heroic Cleave', power: 90, spCost: 40 } },
    { id: 1, name: 'Duelist', key: 'hero_white', color: '#e0e0e0', maxHp: 280, atk: 25, spd: 80, maxStamina: 120, skill: { name: 'Swift Flurry', power: 65, spCost: 30, critChance: 0.5 } },
    { id: 2, name: 'Executioner', key: 'hero_purple', color: '#a854f7', maxHp: 320, atk: 45, spd: 30, maxStamina: 80, skill: { name: `Reaper's Sweep`, power: 70, spCost: 50, isAoe: true } },
];

const MONSTERS =[
    { id: 0, name: 'Void Grunt', key: 'mon_1', color: '#ff5252', maxHp: 200, atk: 25, spd: 50, maxStamina: 100, skill: { name: 'Savage Bite', power: 45, spCost: 30 } },
    { id: 1, name: 'Void Brute', key: 'mon_2', color: '#ff5252', maxHp: 350, atk: 40, spd: 25, maxStamina: 100, skill: { name: 'Crushing Blow', power: 70, spCost: 40 } },
    { id: 2, name: 'Void Weaver', key: 'mon_3', color: '#ff5252', maxHp: 180, atk: 35, spd: 70, maxStamina: 100, skill: { name: 'Dark Burst', power: 55, spCost: 35, isAoe: true } }
];

let G = { selectedTeam:[], p: null, c: null, predictedQueue:[], activeEnt: null, pendingMove: null, isAnimating: false };
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

function gameLoop() {
    requestAnimationFrame(gameLoop);
    globalFrameCount++;
    if (globalFrameCount >= 18) { globalFrameCount = 0; animTick++; }
    const allEnts = (G.p && G.c) ?[...G.p.team, ...G.c.team] :[];
    allEnts.forEach(ent => drawModularSprite(`sprite_${ent.uid}`, ent.key, ent.action));
    HEROES.forEach(h => drawModularSprite(`select_sprite_${h.id}`, h.key, 'idle'));
    for(let i=0; i<3; i++) { if(G.selectedTeam[i] !== undefined) drawModularSprite(`preview_sprite_${i}`, HEROES[G.selectedTeam[i]].key, 'icon'); }
    if(G.predictedQueue) { G.predictedQueue.forEach((c, i) => drawModularSprite(`tq_icon_${i}_${c.uid}`, c.key, c.isPlayer ? 'icon' : 'idle')); }
    if(G.p) { G.p.team.forEach(c => drawModularSprite(`portrait_bg_${c.uid}`, c.key, 'icon')); }
}

function drawModularSprite(canvasId, charKey, action) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const imgKey = `${charKey}_${action}`;
    const img = LOADED_IMAGES[imgKey];
    const animData = ANIMATION_ASSETS[charKey]?.[action];
    if (!img || !img.complete || img.naturalWidth === 0 || !animData) return;
    const totalFrames = animData.frames;
    const frameWidth = img.naturalWidth / totalFrames; 
    const frameHeight = img.naturalHeight;
    let currentFrame = animTick % totalFrames;
    if (action === 'die') currentFrame = totalFrames - 1; 
    ctx.drawImage(img, currentFrame * frameWidth, 0, frameWidth, frameHeight, 0, 0, canvas.width, canvas.height);
}

function showScreen(n) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(n + 'Screen').classList.add('active'); }
function startGame() { G.selectedTeam =[]; showScreen('team'); renderTeamSelect(); }

function renderTeamSelect() {
    const grid = document.getElementById('creatureGrid');
    grid.innerHTML = '';
    HEROES.forEach(c => {
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

function confirmTeam() {
    const cpuIds = [0, 1, 2].sort(() => Math.random() - 0.5); 
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.remove('hidden', 'iris-opening');
    overlay.classList.add('iris-closing');
    setTimeout(() => {
        initBattle(G.selectedTeam, cpuIds);
        showScreen('battle');
        requestAnimationFrame(() => {
            overlay.classList.remove('iris-closing');
            overlay.classList.add('iris-opening');
            setTimeout(() => { overlay.classList.add('hidden'); }, 900);
        });
    }, 1000); 
}

function initBattle(pIds, cIds) {
    const mkP = ids => ids.map(id => { const b = HEROES.find(h=>h.id===id); return { ...b, uid: 'u' + (uidCounter++), currentHp: b.maxHp, stamina: b.maxStamina, statuses:[], isPlayer: true, action: 'idle', ct: Math.random()*200 }; });
    const mkC = ids => ids.map(id => { const b = MONSTERS[id]; return { ...b, uid: 'u' + (uidCounter++), currentHp: b.maxHp, stamina: b.maxStamina, statuses:[], isPlayer: false, action: 'idle', ct: Math.random()*200 }; });
    G.p = { team: mkP(pIds) };
    G.c = { team: mkC(cIds) };
    renderEntities(); renderHUD(); setTimeout(advanceTurn, 1500);
}

function renderEntities() {
    const layer = document.getElementById('entitiesLayer');
    layer.innerHTML = '';
    const pPos =[{x: 20, y: 15}, {x: 10, y: 40}, {x: 20, y: 65}];
    const cPos =[{x: 80, y: 15}, {x: 90, y: 40}, {x: 80, y: 65}];
    G.p.team.forEach((c, i) => createEntityHTML(layer, c, pPos[i].x, pPos[i].y, true, 100 - pPos[i].y));
    G.c.team.forEach((c, i) => createEntityHTML(layer, c, cPos[i].x, cPos[i].y, false, 100 - cPos[i].y));
}

function createEntityHTML(layer, c, x, y, isPlayer, z) {
    const scale = isPlayer ? '1' : '1.5';
    layer.innerHTML += `<div class="entity-wrap" id="wrap_${c.uid}" style="left:${x}%; bottom:${y}%; z-index:${z}; transform:translateX(-50%) scale(${scale})"><div class="platform"></div><canvas class="sprite ${!isPlayer ? 'flip' : ''}" id="sprite_${c.uid}" width="96" height="96"></canvas></div>`;
}

function renderHUD() {
    const panel = document.getElementById('party-panel');
    panel.innerHTML = '';
    G.p.team.forEach(c => {
        panel.innerHTML += `
        <div class="portrait-slot">
            <div class="portrait-bg"><canvas id="portrait_bg_${c.uid}" width="120" height="120"></canvas></div>
            <div class="hero-header"><span class="orb"></span> ${c.name}</div>
            <div class="bars-container">
                <div class="bar-row"><span class="bar-label">HP</span><div class="bar-bg"><div id="hp_${c.uid}" class="hp-fill"></div></div><span id="hp_txt_${c.uid}" class="bar-val"></span></div>
                <div class="bar-row"><span class="bar-label">SP</span><div class="bar-bg"><div id="sp_${c.uid}" class="sp-fill"></div></div><span id="sp_txt_${c.uid}" class="bar-val"></span></div>
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
        for(let e of sim) { let time = (1000 - e.ct) / e.spd; if(time < minTime) { minTime = time; nextUnit = e; } }
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
        const spPct = Math.max(0, (c.stamina / c.maxStamina) * 100);
        const readyText = i === 0 ? '<div class="tq-ready-text">READY!</div>' : '';
        const enemyIconClass = !isP ? 'enemy-icon' : '';
        qBox.innerHTML += `<div class="tq-item" style="border-color: ${borderColor}; ${i===0 ? 'order:-1; width:72px; height:72px; margin-left:20px;' : ''}"><canvas class="tq-icon ${enemyIconClass}" id="tq_icon_${i}_${c.uid}" width="100%" height="100%"></canvas>${readyText}<div class="tq-mini-bars"><div class="tq-bar-bg"><div class="tq-hp-fill" style="width:${hpPct}%"></div></div><div class="tq-bar-bg"><div class="tq-sp-fill" style="width:${spPct}%"></div></div></div></div>`;
    });
}

function advanceTurn() {
    if (checkGameOver()) return;
    let alive = [...G.p.team, ...G.c.team].filter(e => e.currentHp > 0);
    if(alive.length === 0) return;
    let minTime = Infinity, nextUnit = null;
    for(let e of alive) { let time = (1000 - e.ct) / e.spd; if(time < minTime) { minTime = time; nextUnit = e; } }
    alive.forEach(e => { e.ct += e.spd * minTime; });
    G.activeEnt = nextUnit;
    G.activeEnt.ct = 0; 
    updateTurnQueueUI();
    G.activeEnt.stamina = Math.min(G.activeEnt.maxStamina, G.activeEnt.stamina + 15);
    G.activeEnt.statuses = G.activeEnt.statuses.filter(s => s.type !== 'braced');
    updateBars();
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
    clearTargeting(); 
    const skillBtn = document.getElementById('skill-btn');
    if (G.activeEnt.stamina < G.activeEnt.skill.spCost) skillBtn.classList.add('disabled');
    else skillBtn.classList.remove('disabled');
}
function handleStrike() { if(G.isAnimating) return; G.pendingMove = { name: 'Strike', power: G.activeEnt.atk, spCost: 0, type: 'strike' }; startTargeting(); }
function handleSkill() { if(G.isAnimating) return; G.pendingMove = { ...G.activeEnt.skill, type: 'skill' }; if(G.activeEnt.stamina < G.pendingMove.spCost) return; startTargeting(); }
function handleBrace() { if(G.isAnimating) return; executeMove(G.activeEnt, G.activeEnt, { type: 'brace' }); }

function startTargeting() {
    document.getElementById('targetMenuOverlay').classList.remove('hidden');
    G.c.team.forEach(c => {
        if(c.currentHp > 0) {
            const wrap = document.getElementById(`wrap_${c.uid}`);
            wrap.classList.add('targetable');
            wrap.onclick = () => { clearTargeting(); executeMove(G.activeEnt, c, G.pendingMove); };
        }
    });
}
function cancelTargeting() { clearTargeting(); showMainMenu(); }
function clearTargeting() { document.getElementById('targetMenuOverlay').classList.add('hidden'); G.c.team.forEach(c => { const w = document.getElementById(`wrap_${c.uid}`); if(w) { w.classList.remove('targetable'); w.onclick = null; }}); }

function cpuTurn() {
    setTimeout(() => {
        const targets = G.p.team.filter(c => c.currentHp > 0);
        if (targets.length === 0) return;
        const target = targets[Math.floor(Math.random() * targets.length)];
        const move = G.activeEnt.stamina >= G.activeEnt.skill.spCost && Math.random() > 0.5 ? G.activeEnt.skill : { name: 'Strike', power: G.activeEnt.atk, spCost: 0 };
        executeMove(G.activeEnt, target, move);
    }, 1000);
}

function executeMove(actor, target, move) {
    G.isAnimating = true;
    document.getElementById('command-panel').classList.remove('active-turn');
    
    actor.stamina = Math.max(0, actor.stamina - (move.spCost || 0));
    updateBars();
    
    actor.action = move.type || 'strike';
    animTick = 0;
    
    const wrap = document.getElementById(`wrap_${actor.uid}`);
    wrap.style.animation = actor.isPlayer ? 'lunge 0.5s' : 'lungeE 0.5s';
    
    setTimeout(() => {
        if (move.type === 'brace') {
            actor.stamina = Math.min(actor.maxStamina, actor.stamina + 40);
            actor.statuses.push({ type: 'braced' });
            spawnNum('BRACED', actor.uid, 'shld');
        } else if (move.isAoe) {
            (actor.isPlayer ? G.c.team : G.p.team).filter(t => t.currentHp > 0).forEach(t => applyDamage(actor, t, move));
        } else {
            applyDamage(actor, target, move);
        }
        
        updateBars();
        
        setTimeout(() => {
            wrap.style.animation = ''; 
            actor.action = 'idle';
            if(target.currentHp <= 0) target.action = 'die';
            G.isAnimating = false;
            setTimeout(advanceTurn, 500); 
        }, 800);
    }, 250);
}

function applyDamage(actor, target, move) {
    target.action = 'hurt';
    let dmg = move.power;
    if (target.statuses.some(s => s.type === 'braced')) dmg = Math.floor(dmg * 0.5); 
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

function doHitAnim(uid, isPlayer) { 
    const w = document.getElementById(`wrap_${uid}`); 
    if (w) { 
        w.style.animation = isPlayer ? 'hit 0.4s' : 'hitE 0.4s'; 
        setTimeout(() => w.style.animation = '', 400); 
    } 
}

function updateBars() {
    G.p.team.forEach(c => {
        const hB = document.getElementById(`hp_${c.uid}`); if(hB) { hB.style.width = Math.max(0, (c.currentHp / c.maxHp)*100) + '%'; document.getElementById(`hp_txt_${c.uid}`).innerText = Math.ceil(Math.max(0, c.currentHp)); }
        const sB = document.getElementById(`sp_${c.uid}`); if(sB) { sB.style.width = Math.max(0, (c.stamina / c.maxStamina)*100) + '%'; document.getElementById(`sp_txt_${c.uid}`).innerText = Math.floor(c.stamina); }
    });
}

function showInfoModal() {
    const renderCol = (title, team) => {
        let html = `<div class="info-col"><h3>${title}</h3>`;
        team.forEach(c => { html += `<div class="info-row"><strong>${c.name}</strong><br>HP: ${Math.ceil(c.currentHp)}/${c.maxHp} | SP: ${c.stamina}/${c.maxStamina}</div>`; });
        return html + `</div>`;
    };
    document.getElementById('infoModalBody').innerHTML = renderCol("YOUR PARTY", G.p.team) + renderCol("ENEMY MONSTERS", G.c.team);
    document.getElementById('infoModal').classList.remove('hidden');
}
function closeModals() { document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden')); }

function checkGameOver() {
    const pAlive = G.p.team.some(c => c.currentHp > 0);
    const cAlive = G.c.team.some(c => c.currentHp > 0);
    if (!pAlive || !cAlive) {
        document.getElementById('goTitle').innerText = pAlive ? "VICTORY!" : "DEFEAT";
        document.getElementById('goTitle').style.color = pAlive ? "var(--pixel-gold)" : "#ff5252";
        document.getElementById('goSub').innerText = pAlive ? "You crushed the monsters." : "Your party was wiped out.";
        setTimeout(() => showScreen('gameover'), 1500);
        return true;
    }
    return false;
}