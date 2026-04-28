const ANIMATION_ASSETS = {
    archer: { idle: { src: 'assets/archer_idle.png' }, attack1: { src: 'assets/archer_attack1.png' }, attack2: { src: 'assets/archer_attack2.png' }, attack3: { src: 'assets/archer_attack3.png' }, hurt: { src: 'assets/archer_hurt.png' }, die: { src: 'assets/archer_dead.png' } },
    swordsman: { idle: { src: 'assets/swordsman_idle.png' }, attack1: { src: 'assets/swordsman_attack1.png' }, attack2: { src: 'assets/swordsman_attack2.png' }, attack3: { src: 'assets/swordsman_attack3.png' }, hurt: { src: 'assets/swordsman_hurt.png' }, die: { src: 'assets/swordsman_dead.png' } },
    wizard: { idle: { src: 'assets/wizard_idle.png' }, attack1: { src: 'assets/wizard_attack1.png' }, attack2: { src: 'assets/wizard_attack2.png' }, attack3: { src: 'assets/wizard_attack3.png' }, hurt: { src: 'assets/wizard_hurt.png' }, die: { src: 'assets/wizard_dead.png' } },
    enchantress: { idle: { src: 'assets/enchantress_idle.png' }, attack1: { src: 'assets/enchantress_attack1.png' }, attack2: { src: 'assets/enchantress_attack2.png' }, attack3: { src: 'assets/enchantress_attack3.png' }, hurt: { src: 'assets/enchantress_hurt.png' }, die: { src: 'assets/enchantress_dead.png' } },
    knight: { idle: { src: 'assets/knight_idle.png' }, attack1: { src: 'assets/knight_attack1.png' }, attack2: { src: 'assets/knight_attack2.png' }, attack3: { src: 'assets/knight_attack3.png' }, hurt: { src: 'assets/knight_hurt.png' }, die: { src: 'assets/knight_dead.png' } },
    musketeer: { idle: { src: 'assets/musketeer_idle.png' }, attack1: { src: 'assets/musketeer_attack1.png' }, attack2: { src: 'assets/musketeer_attack2.png' }, attack3: { src: 'assets/musketeer_attack3.png' }, hurt: { src: 'assets/musketeer_hurt.png' }, die: { src: 'assets/musketeer_dead.png' } }
};

const CHARACTERS =[
    { id: 0, name: 'Archer', key: 'archer', color: '#2ecc71', isMelee: false, maxHp: 320, atk: 45, spd: 85, maxMp: 150, moves:[
        { name: 'Volley', icon: 'assets/icon_volley.png', power: 50, mpCost: 20, anim: 'attack2' },
        { name: 'Piercing Arrow', icon: 'assets/icon_pierce.png', power: 75, mpCost: 35, anim: 'attack3' },
        { name: 'Rain of Arrows', icon: 'assets/icon_arrow_rain.png', power: 60, mpCost: 40, anim: 'attack3', isAoe: true }
    ] },
    { id: 1, name: 'Swordsman', key: 'swordsman', color: '#e74c3c', isMelee: true, maxHp: 400, atk: 55, spd: 60, maxMp: 100, moves:[
        { name: 'Cross Slash', icon: 'assets/icon_cross_slash.png', power: 60, mpCost: 25, anim: 'attack2' },
        { name: 'Blade Dance', icon: 'assets/icon_blade_dance.png', power: 85, mpCost: 50, anim: 'attack3', isAoe: true },
        { name: 'Defensive Stance', icon: 'assets/icon_defense.png', power: 0, mpCost: 20, anim: 'idle', effect: 'defenseUp' }
    ] },
    { id: 2, name: 'Wizard', key: 'wizard', color: '#9b59b6', isMelee: false, maxHp: 240, atk: 65, spd: 55, maxMp: 200, moves:[
        { name: 'Arcane Missiles', icon: 'assets/icon_arcane_missiles.png', power: 70, mpCost: 30, anim: 'attack2' },
        { name: 'Meteor', icon: 'assets/icon_meteor.png', power: 110, mpCost: 70, anim: 'attack3', isAoe: true },
        { name: 'Healing Light', icon: 'assets/icon_healing_light.png', power: 80, mpCost: 40, anim: 'attack1', isHeal: true }
    ] },
    { id: 3, name: 'Enchantress', key: 'enchantress', color: '#e056fd', isMelee: false, maxHp: 260, atk: 60, spd: 65, maxMp: 180, moves:[
        { name: 'Mystic Orb', icon: 'assets/icon_mystic_orb.png', power: 65, mpCost: 30, anim: 'attack2' },
        { name: 'Astral Storm', icon: 'assets/icon_astral_storm.png', power: 95, mpCost: 60, anim: 'attack3', isAoe: true },
        { name: 'Rejuvenation', icon: 'assets/icon_rejuvenation.png', power: 70, mpCost: 35, anim: 'attack1', isHeal: true }
    ] },
    { id: 4, name: 'Knight', key: 'knight', color: '#c0c0c0', isMelee: true, maxHp: 500, atk: 40, spd: 40, maxMp: 90, moves:[
        { name: 'Shield Strike', icon: 'assets/icon_shield_strike.png', power: 50, mpCost: 15, anim: 'attack2' },
        { name: 'Holy Cleave', icon: 'assets/icon_holy_cleave.png', power: 70, mpCost: 40, anim: 'attack3', isAoe: true },
        { name: 'Fortify', icon: 'assets/icon_fortify.png', power: 0, mpCost: 30, anim: 'idle', effect: 'defenseUp' }
    ] },
    { id: 5, name: 'Musketeer', key: 'musketeer', color: '#f1c40f', isMelee: false, maxHp: 280, atk: 55, spd: 75, maxMp: 120, moves:[
        { name: 'Quick Draw', icon: 'assets/icon_quick_draw.png', power: 60, mpCost: 25, anim: 'attack2' },
        { name: 'Headshot', icon: 'assets/icon_headshot.png', power: 100, mpCost: 50, anim: 'attack3' },
        { name: 'Explosive Shot', icon: 'assets/icon_explosive_shot.png', power: 80, mpCost: 60, anim: 'attack3', isAoe: true }
    ] }
];

let G = { selectedTeam:[], p: null, c: null, predictedQueue:[], activeEnt: null, pendingMove: null, isAnimating: false, isPaused: false, activeTimers: new Set(), activeAnimations:[], lastBattleParams: null };
let uidCounter = 0;
let globalFrameCount = 0;
let animTick = 0;
const LOADED_IMAGES = {};
let imagesToLoad = 0;
let imagesLoaded = 0;

function pausableTimeout(cb, delay) {
    let start = Date.now();
    let remaining = delay;
    let timerId;
    let pt = {
        pause: () => { clearTimeout(timerId); remaining -= (Date.now() - start); },
        resume: () => { start = Date.now(); clearTimeout(timerId); if (remaining <= 0) remaining = 0; timerId = setTimeout(() => { cb(); G.activeTimers.delete(pt); }, remaining); },
        clear: () => { clearTimeout(timerId); G.activeTimers.delete(pt); }
    };
    G.activeTimers.add(pt);
    if (!G.isPaused) { pt.resume(); }
    return pt;
}

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
    if (globalFrameCount >= 8) { globalFrameCount = 0; animTick++; }

    const allEnts = (G.p && G.c) ?[...G.p.team, ...G.c.team] :[];
    allEnts.forEach(ent => drawModularSprite(`sprite_${ent.uid}`, ent.key, ent.action, !ent.isPlayer, false));
    
    CHARACTERS.forEach(h => {
        drawModularSprite(`select_sprite_${h.id}`, h.key, 'idle', false, true);
        if(!document.getElementById('infoModal').classList.contains('hidden')) {
             const mCanvas = document.getElementById(`modal_sprite_${h.id}`);
             if(mCanvas) drawModularSprite(`modal_sprite_${h.id}`, h.key, 'idle', false, true);
        }
    });
    for(let i=0; i<3; i++) { if(G.selectedTeam[i] !== undefined) drawModularSprite(`preview_sprite_${i}`, CHARACTERS[G.selectedTeam[i]].key, 'idle', false, true); }
    if(G.predictedQueue) { G.predictedQueue.forEach((c, i) => drawModularSprite(`tq_icon_${i}_${c.uid}`, c.key, 'idle', !c.isPlayer, true)); }
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
        if(!isUI) { ctx.fillStyle = flipX ? '#ff5252' : '#3498db'; ctx.fillRect(canvas.width/2 - 28, canvas.height - 56, 56, 56); }
        return;
    }

    const totalFrames = Math.max(1, Math.floor(img.naturalWidth / img.naturalHeight));
    const frameWidth = Math.floor(img.naturalWidth / totalFrames); 
    const frameHeight = img.naturalHeight;
    
    let currentFrame = totalFrames === 1 ? 0 : (animTick % totalFrames);
    if (action === 'die' || action === 'dead') currentFrame = totalFrames - 1; 

    const sourceX = currentFrame * frameWidth;
    const clipW = frameWidth;

    ctx.save();

    if (isUI) {
        if (flipX) { ctx.translate(canvas.width, 0); ctx.scale(-1, 1); }
        const scale = Math.min(canvas.width / frameWidth, canvas.height / frameHeight);
        const dw = clipW * scale;
        const dh = frameHeight * scale;
        const dx = (canvas.width - dw) / 2;
        const dy = (canvas.height - dh) / 2;
        ctx.drawImage(img, sourceX, 0, clipW, frameHeight, dx, dy, dw, dh);
    } else {
        // Reduced scale from 2.5 to 1.8 so the models are smaller
        let scale = 1.8; 
        if (clipW * scale > canvas.width) scale = canvas.width / clipW;
        if (frameHeight * scale > canvas.height) scale = canvas.height / frameHeight;
        const dw = clipW * scale;
        const dh = frameHeight * scale;
        const dx = (canvas.width - dw) / 2;
        const dy = canvas.height - dh; 

        if (flipX) {
            ctx.translate(canvas.width / 2, 0);
            ctx.scale(-1, 1);
            ctx.translate(-canvas.width / 2, 0);
        }
        ctx.drawImage(img, sourceX, 0, clipW, frameHeight, dx, dy, dw, dh);
    }
    ctx.restore();
}

function togglePause() {
    if (!G.p) return; 
    if (G.isPaused) { 
        resumeGame(); 
    } else { 
        G.isPaused = true; 
        document.getElementById('pauseScreen').classList.remove('hidden');
        document.body.classList.add('paused-anim'); 
        G.activeAnimations.forEach(a => a.pause()); 
        G.activeTimers.forEach(t => t.pause());     
    }
}
function resumeGame() { 
    G.isPaused = false; 
    document.getElementById('pauseScreen').classList.add('hidden');
    document.body.classList.remove('paused-anim');
    G.activeAnimations.forEach(a => a.play());
    G.activeTimers.forEach(t => t.resume());
}
function quitToMenu() {
    G.activeTimers.forEach(t => t.clear());
    G.activeAnimations.forEach(a => a.cancel());
    G.activeAnimations =[];
    resumeGame();
    document.getElementById('pause-btn').classList.add('hidden');
    G.selectedTeam =[]; G.p = null; G.c = null;
    showScreen('menu');
}

function restartBattle() {
    G.activeTimers.forEach(t => t.clear());
    G.activeAnimations.forEach(a => a.cancel());
    G.activeAnimations =[];
    resumeGame();
    G.pendingMove = null;
    G.isAnimating = false;
    
    initBattle(G.lastBattleParams.pIds, G.lastBattleParams.cIds, G.lastBattleParams.bonus);
    showScreen('battle');
    document.getElementById('pause-btn').classList.remove('hidden');
}

function showScreen(n) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(n + 'Screen').classList.add('active'); }
function startGame() { G.selectedTeam =[]; showScreen('team'); renderTeamSelect(); }

function renderTeamSelect() {
    const grid = document.getElementById('creatureGrid');
    grid.innerHTML = '';
    CHARACTERS.forEach(c => {
        const el = document.createElement('div');
        el.className = 'cc';
        el.innerHTML = `
            <div class="info-icon" onclick="event.stopPropagation(); showCharacterInfoModal(${c.id})">i</div>
            <div style="display:flex;justify-content:center;align-items:center;height:100px;"><canvas id="select_sprite_${c.id}" width="100" height="100"></canvas></div>
            <div class="cc-name" style="color:${c.color}">${c.name}</div>
        `;
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
            slot.innerHTML = `<canvas id="preview_sprite_${i}" width="80" height="80"></canvas>`;
            slot.classList.add('filled');
        } else { slot.innerHTML = '?'; slot.classList.remove('filled'); }
    }
    document.getElementById('confirmBtn').disabled = G.selectedTeam.length !== 3;
}

// ===============================================
// RPS MINIGAME
// ===============================================
const pickHands = document.querySelectorAll(".pick-hand");
const pickHandMenu = document.querySelector(".pick-hand-container");
const rpsOverlay = document.querySelector(".pick-hand-menu");
const playerHandImg = document.querySelector(".player-hand");
const cpuHandImg = document.querySelector(".cpu-hand");
const newGameMenu = document.querySelector(".new-game-overlay");
let rpsIsLocked = false;
pickHands.forEach(hand => hand.addEventListener("click", onPick));

function confirmTeam() {
    document.querySelector('.player-container .hearts').innerHTML = '<img src="assets/life-heart.svg" width="40" alt="heart">';
    document.querySelector('.cpu-container .hearts').innerHTML = '<img src="assets/life-heart.svg" width="40" alt="heart">';
    newGameMenu.classList.add("hide-new-game-menu");
    rpsIsLocked = false;
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
    if (roundWinner === 'draw') {
        setTimeout(async () => { await openMenu(); rpsIsLocked = false; }, 1000);
    } else {
        if (roundWinner === 'player') {
            const hearts = document.querySelectorAll(".cpu-container .hearts img");
            if (hearts.length > 0) {
                let heart = hearts[hearts.length - 1];
                heart.classList.add("heart-damage");
                await waitAnimation(heart);
                heart.remove();
            }
            cpuHandImg.classList.add("hand-damage");
            await waitAnimation(cpuHandImg);
            cpuHandImg.classList.remove("hand-damage");
        } else {
            const hearts = document.querySelectorAll(".player-container .hearts img");
            if (hearts.length > 0) {
                let heart = hearts[hearts.length - 1];
                heart.classList.add("heart-damage");
                await waitAnimation(heart);
                heart.remove();
            }
            playerHandImg.classList.add("hand-damage");
            await waitAnimation(playerHandImg);
            playerHandImg.classList.remove("hand-damage");
        }
        setTimeout(() => { endRPSGame(roundWinner); }, 500);
    }
}

async function exitMenu() { pickHandMenu.classList.add("menu-exit"); await waitTransition(pickHandMenu); rpsOverlay.classList.add("overlay-exit"); await waitTransition(rpsOverlay); }
async function openMenu() { pickHandMenu.classList.remove("menu-exit"); rpsOverlay.classList.remove("overlay-exit"); }

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

const pickCpuHand = () => { const cpuHand = Math.floor((Math.random() * 3) + 1); if (cpuHand == 1) return "rock"; else if (cpuHand == 2) return "paper"; else if (cpuHand == 3) return "scissor"; }

function endRPSGame(winner) {
    let winStatus = document.getElementById("rpsWinStatus");
    let bonus = 'none';
    if (winner === "cpu") {
        winStatus.textContent = "AMBUSHED!";
        winStatus.style.color = "#ff5252";
        document.getElementById("rpsBonusDesc").textContent = "The enemy strikes first!";
        bonus = 'enemy';
    } else {
        winStatus.textContent = "PREEMPTIVE STRIKE!";
        winStatus.style.color = "#2ecc71";
        document.getElementById("rpsBonusDesc").textContent = "Your party attacks first!";
        bonus = 'player';
    }
    newGameMenu.classList.remove("hide-new-game-menu");
    const nextBtn = document.getElementById("new-game-btn");
    nextBtn.onclick = (e) => {
        e.preventDefault();
        const cpuIds =[]; for(let i=0; i<3; i++) cpuIds.push(Math.floor(Math.random() * 6));
        const overlay = document.getElementById('transition-overlay');
        overlay.classList.remove('hidden', 'iris-opening');
        overlay.classList.add('iris-closing');
        setTimeout(() => {
            initBattle(G.selectedTeam, cpuIds, bonus);
            showScreen('battle');
            document.getElementById('pause-btn').classList.remove('hidden');
            overlay.classList.remove('iris-closing');
            overlay.classList.add('iris-opening');
            setTimeout(() => { overlay.classList.add('hidden'); }, 800);
        }, 800);
    };
}

function waitTransition(element) { return new Promise(resolve => { element.addEventListener("transitionend", function handler(e) { const expected =["opacity", "transform", "background-color"]; if (e.target === element && expected.includes(e.propertyName)) { element.removeEventListener("transitionend", handler); resolve(); } }); }); }
function waitAnimation(element) { return new Promise(resolve => { element.addEventListener("animationend", (e) => { if (e.target == element) { resolve(); } }); }); }

// ===============================================
// BATTLE ENGINE
// ===============================================
function initBattle(pIds, cIds, bonus = 'none') {
    G.lastBattleParams = { pIds, cIds, bonus };
    const mkP = ids => ids.map(id => { const b = CHARACTERS.find(h=>h.id===id); const startCT = bonus === 'player' ? 1000 : (bonus === 'enemy' ? 0 : Math.random()*200); return { ...b, uid: 'u' + (uidCounter++), currentHp: b.maxHp, mp: b.maxMp, isPlayer: true, action: 'idle', ct: startCT }; });
    const mkC = ids => ids.map(id => { const b = CHARACTERS.find(m=>m.id===id); const startCT = bonus === 'enemy' ? 1000 : (bonus === 'player' ? 0 : Math.random()*200); return { ...b, name:`Enemy ${b.name}`, uid: 'u' + (uidCounter++), currentHp: b.maxHp, mp: b.maxMp, isPlayer: false, action: 'idle', ct: startCT }; });
    G.p = { team: mkP(pIds) };
    G.c = { team: mkC(cIds) };
    G.turnQueue =[];
    renderEntities(); 
    renderHUD(); 
    pausableTimeout(advanceTurn, 100);
}

function renderEntities() {
    const layer = document.getElementById('entitiesLayer');
    layer.innerHTML = '';
    const pPos =[{x: 35, y: 28}, {x: 22, y: 18}, {x: 9, y: 8}];
    const cPos =[{x: 65, y: 28}, {x: 78, y: 18}, {x: 91, y: 8}];
    
    G.p.team.forEach((c, i) => createEntityHTML(layer, c, pPos[i].x, pPos[i].y, 100 - pPos[i].y));
    G.c.team.forEach((c, i) => createEntityHTML(layer, c, cPos[i].x, cPos[i].y, 100 - cPos[i].y));
}

function createEntityHTML(layer, c, x, y, z) {
    let ehpHTML = '';
    if (!c.isPlayer) { ehpHTML = `<div class="ehp-bar" id="ehp_${c.uid}"><div class="ehp-fill" id="ehp_fill_${c.uid}"></div></div>`; }
    layer.innerHTML += `<div class="entity-wrap" id="wrap_${c.uid}" style="left:${x}%; bottom:${y}%; z-index:${z}; transform:translateX(-50%)">
        ${ehpHTML}
        <div class="platform"></div><canvas class="sprite" id="sprite_${c.uid}" width="350" height="350"></canvas>
    </div>`;
}

function renderHUD() {
    const panel = document.getElementById('party-panel');
    panel.innerHTML = '';
    G.p.team.forEach(c => {
        panel.innerHTML += `
        <div class="hud-column" id="hud_slot_${c.uid}">
            <div class="hud-name">${c.name.toUpperCase()}</div>
            <div class="hud-bars">
                <div class="hud-bar-wrap">
                    <div class="hud-bar-bg"><div id="hp_${c.uid}" class="hud-bar-fill hp-fill"></div></div>
                    <div class="hud-bar-text" id="hp_txt_${c.uid}"></div>
                </div>
                <div class="hud-bar-wrap">
                    <div class="hud-bar-bg"><div id="mp_${c.uid}" class="hud-bar-fill mp-fill"></div></div>
                    <div class="hud-bar-text" id="mp_txt_${c.uid}"></div>
                </div>
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
        qBox.innerHTML += `<div class="tq-item ${activeClass}" style="border-color: ${borderColor};"><canvas class="tq-icon ${enemyIconClass}" id="tq_icon_${i}_${c.uid}" width="48" height="48"></canvas>${readyText}<div class="tq-mini-bars"><div class="tq-bar-bg"><div class="tq-hp-fill" style="width:${hpPct}%"></div></div><div class="tq-bar-bg"><div class="tq-mp-fill" style="width:${mpPct}%"></div></div></div></div>`;
    });
}

function advanceTurn() {
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
    document.querySelectorAll('.hud-column').forEach(e => e.classList.remove('active-hud'));
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
        pausableTimeout(cpuTurn, 1000);
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
        const iconHtml = m.icon ? `<img src="${m.icon}" class="skill-icon" alt="icon">` : '';
        item.innerHTML = `<div style="display:flex; align-items:center;">${iconHtml}<div style="display:flex; flex-direction:column; align-items:flex-start; line-height:1.2;"><span>${m.name}</span><small style="font-size:0.7rem; color:${canUse ? 'var(--pixel-mp)' : '#888'};">MP: ${m.mpCost}</small></div></div>`;
        if (canUse) { item.onclick = () => { G.pendingMove = m; startTargeting(); }; }
        list.appendChild(item);
    });
}

function startTargeting() {
    document.getElementById('targetMenuOverlay').classList.remove('hidden');
    let targets;
    if (G.pendingMove.isHeal) { targets = G.activeEnt.isPlayer ? G.p.team : G.c.team; } 
    else { targets = G.pendingMove.isAoe ? (G.activeEnt.isPlayer ? G.c.team : G.p.team) : (G.activeEnt.isPlayer ? G.c.team : G.p.team); }
    targets.forEach(c => {
        if(c.currentHp > 0) {
            const wrap = document.getElementById(`wrap_${c.uid}`);
            wrap.classList.add('targetable');
            wrap.onclick = () => { clearTargeting(); executeMove(G.activeEnt, c, G.pendingMove); };
        }
    });
}

function cancelTargeting() { clearTargeting(); showMainMenu(); }
function clearTargeting() { document.getElementById('targetMenuOverlay').classList.add('hidden');[...G.p.team, ...G.c.team].forEach(c => { const w = document.getElementById(`wrap_${c.uid}`); if(w) { w.classList.remove('targetable'); w.onclick = null; }}); }

function cpuTurn() {
    const validMoves = G.activeEnt.moves.filter(m => m.mpCost <= G.activeEnt.mp);
    let move = { name: 'Strike', power: G.activeEnt.atk, mpCost: 0, anim: 'attack1' };
    if (validMoves.length > 0 && Math.random() > 0.5) { move = validMoves[Math.floor(Math.random() * validMoves.length)]; }
    let targets = move.isHeal ? G.c.team.filter(c => c.currentHp > 0) : G.p.team.filter(c => c.currentHp > 0);
    if (targets.length === 0) return;
    const target = targets[Math.floor(Math.random() * targets.length)];
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
    let animDuration = 800; 
    let attackDelay = animDuration * 0.4; 
    let dir = actor.isPlayer ? 30 : -30;
    
    let anim = wrap.animate([
        { transform: `translateX(-50%) translate(0px, 0px)` },
        { transform: `translateX(-50%) translate(${dir}px, 0px)`, offset: 0.3 },
        { transform: `translateX(-50%) translate(${dir}px, 0px)`, offset: 0.7 },
        { transform: `translateX(-50%) translate(0px, 0px)` }
    ], { duration: animDuration, easing: 'ease-in-out' });

    G.activeAnimations.push(anim);
    anim.onfinish = () => { G.activeAnimations = G.activeAnimations.filter(a => a !== anim); wrap.style.transform = `translateX(-50%)`; };
    if (G.isPaused) anim.pause();
    
    pausableTimeout(() => {
        if (move.isAoe) { (actor.isPlayer ? G.c.team : G.p.team).filter(t => t.currentHp > 0).forEach(t => applyDamage(actor, t, move)); } 
        else { applyDamage(actor, target, move); }
        updateBars();
    }, attackDelay); 
    
    pausableTimeout(() => {
        actor.action = 'idle';
        (actor.isPlayer ? G.c.team : G.p.team).forEach(t => { if(t.currentHp <= 0) t.action = 'die'; });
        G.isAnimating = false;
        pausableTimeout(advanceTurn, 200); 
    }, animDuration); 
}

function applyDamage(actor, target, move) {
    target.action = 'hurt';
    let dmg = Math.floor(move.power + (actor.atk * 0.4));
    if (move.power === 0 && !move.isHeal) dmg = 0; 
    
    if (move.isHeal) {
        target.action = 'idle';
        let healAmt = Math.abs(dmg);
        spawnNum(`+${healAmt}`, target.uid, 'heal');
        target.currentHp = Math.min(target.maxHp, target.currentHp + healAmt);
    } else {
        if (Math.random() < (move.critChance || 0.05)) { dmg = Math.floor(dmg * 1.5); spawnNum(`CRIT ${dmg}`, target.uid, 'crit'); } 
        else { spawnNum(`-${dmg}`, target.uid, 'dmg'); }
        target.currentHp = Math.max(0, target.currentHp - dmg);
        doHitAnim(target.uid, target.isPlayer);
    }
    pausableTimeout(() => { if (target.currentHp > 0) target.action = 'idle'; }, 400);
}

function spawnNum(txt, uid, type) {
    const w = document.getElementById(`wrap_${uid}`); if(!w) return;
    const s = document.getElementById('stage'), r = w.getBoundingClientRect(), sr = s.getBoundingClientRect();
    const el = document.createElement('div');
    el.className = `fnum ${type}`; el.innerText = txt;
    el.style.left = (r.left + r.width/2 - sr.left) + 'px'; el.style.top = (r.top - sr.top) + 'px';
    s.appendChild(el); pausableTimeout(() => el.remove(), 1200);
}

function doHitAnim(uid, isPlayer) { 
    const w = document.getElementById(`wrap_${uid}`); 
    if (w) { w.style.animation = isPlayer ? 'hit 0.4s' : 'hitE 0.4s'; pausableTimeout(() => w.style.animation = '', 400); } 
}

function updateBars() {
    G.p.team.forEach(c => {
        const hB = document.getElementById(`hp_${c.uid}`); if(hB) { hB.style.width = Math.max(0, (c.currentHp / c.maxHp)*100) + '%'; document.getElementById(`hp_txt_${c.uid}`).innerText = `${Math.ceil(Math.max(0, c.currentHp))}/${c.maxHp}`; }
        const mB = document.getElementById(`mp_${c.uid}`); if(mB) { mB.style.width = Math.max(0, (c.mp / c.maxMp)*100) + '%'; document.getElementById(`mp_txt_${c.uid}`).innerText = `${Math.floor(c.mp)}/${c.maxMp}`; }
    });
    G.c.team.forEach(c => {
        const ehB = document.getElementById(`ehp_fill_${c.uid}`); 
        const wrap = document.getElementById(`ehp_${c.uid}`);
        if(ehB) ehB.style.width = Math.max(0, (c.currentHp / c.maxHp)*100) + '%';
        if(wrap && c.currentHp <= 0) wrap.style.display = 'none';
    });
}

function showInfoModal() {
    const renderCol = (title, team) => {
        let html = `<div class="info-col"><h3>${title}</h3>`;
        team.forEach(c => { html += `<div class="info-row"><strong>${c.name}</strong><br>HP: ${Math.ceil(c.currentHp)}/${c.maxHp} | MP: ${c.mp}/${c.maxMp}</div>`; });
        return html + `</div>`;
    };
    document.querySelector('#infoModal .modal-header').innerText = "BATTLEFIELD INFO";
    document.getElementById('infoModalBody').innerHTML = renderCol("YOUR PARTY", G.p.team) + renderCol("ENEMY TEAM", G.c.team);
    document.getElementById('infoModal').classList.remove('hidden');
}
function closeModals() { document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden')); }

function showCharacterInfoModal(id) {
    const c = CHARACTERS.find(x => x.id === id);
    if (!c) return;
    document.querySelector('#infoModal .modal-header').innerText = c.name.toUpperCase() + " INFO";
    let movesHtml = c.moves.map(m => { const iconHtml = m.icon ? `<img src="${m.icon}" class="skill-icon" alt="icon">` : ''; return `<li>${iconHtml}<strong>${m.name}</strong> <span style="color:#aaa;">(Pwr:${m.power}, MP:${m.mpCost})</span> ${m.isAoe ? '<span style="color:#e74c3c;">[AOE]</span>' : ''}</li>`; }).join('');
    document.getElementById('infoModalBody').innerHTML = `
        <div class="info-col" style="flex: 1; display:flex; flex-direction:column; align-items:center;">
            <div style="display:flex;justify-content:center;margin-bottom:15px; background:rgba(0,0,0,0.5); border-radius:8px; border:2px solid #555;">
                <canvas id="modal_sprite_${c.id}" width="100" height="100"></canvas>
            </div>
            <div style="width: 100%;"><div class="info-row"><strong>❤️ HP:</strong> ${c.maxHp}</div><div class="info-row"><strong>🔷 MP:</strong> ${c.maxMp}</div><div class="info-row"><strong>⚔️ ATK:</strong> ${c.atk}</div><div class="info-row"><strong>💨 SPD:</strong> ${c.spd}</div></div>
        </div>
        <div class="info-col" style="flex: 2;">
            <h3 style="font-size:1.2rem; border-bottom:2px solid #555; padding-bottom:5px; margin-bottom: 10px;">SKILLS</h3>
            <ul style="padding-left: 10px; font-size: 1rem; line-height: 2; margin-top:10px; list-style-type:none;">${movesHtml}</ul>
        </div>`;
    document.getElementById('infoModal').classList.remove('hidden');
    drawModularSprite(`modal_sprite_${c.id}`, c.key, 'idle', false, true);
}

function checkGameOver() {
    const pAlive = G.p.team.some(c => c.currentHp > 0);
    const cAlive = G.c.team.some(c => c.currentHp > 0);
    if (!pAlive || !cAlive) {
        document.getElementById('pause-btn').classList.add('hidden');
        document.getElementById('goTitle').innerText = pAlive ? "VICTORY!" : "DEFEAT";
        document.getElementById('goTitle').style.color = pAlive ? "var(--pixel-gold)" : "#ff5252";
        document.getElementById('goSub').innerText = pAlive ? "You crushed the enemy." : "Your party was wiped out.";
        pausableTimeout(() => showScreen('gameover'), 1500);
        return true;
    }
    return false;
}