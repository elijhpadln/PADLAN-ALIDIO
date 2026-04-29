const ANIMATION_ASSETS = {
    // --- VFX EFFECTS ---
    vfx: {
        slash_1: { src: 'assets/Slash_color4_frame1.png', frames: 1 },
        slash_2: { src: 'assets/Slash_color4_frame2.png', frames: 1 },
        slash_3: { src: 'assets/Slash_color4_frame3.png', frames: 1 },
        slash_4: { src: 'assets/Slash_color4_frame4.png', frames: 1 },
        slash_5: { src: 'assets/Slash_color4_frame5.png', frames: 1 },
        slash_6: { src: 'assets/Slash_color4_frame6.png', frames: 1 },
        slash_7: { src: 'assets/Slash_color4_frame7.png', frames: 1 },
        slash_8: { src: 'assets/Slash_color4_frame8.png', frames: 1 },
        slash_9: { src: 'assets/Slash_color4_frame9.png', frames: 1 },
        smoke_1: { src: 'assets/Smoke_VFX_C1.png', frames: 1 },
        smoke_2: { src: 'assets/Smoke_VFX_C2.png', frames: 1 },
        smoke_3: { src: 'assets/Smoke_VFX_C3.png', frames: 1 },
        smoke_4: { src: 'assets/Smoke_VFX_C4.png', frames: 1 },
        smoke_5: { src: 'assets/Smoke_VFX_C5.png', frames: 1 },
        smoke_6: { src: 'assets/Smoke_VFX_C6.png', frames: 1 },
        smoke_7: { src: 'assets/Smoke_VFX_C7.png', frames: 1 },
        smoke_8: { src: 'assets/Smoke_VFX_C8.png', frames: 1 },
        mage_hit_1: { src: 'assets/Hit Effect.png', frames: 5 },
        explosion_1: { src: 'assets/explosioneffect_1.png', frames: 1 },
        explosion_2: { src: 'assets/explosioneffect_2.png', frames: 1 },
        explosion_3: { src: 'assets/explosioneffect_3.png', frames: 1 },
        explosion_4: { src: 'assets/explosioneffect_4.png', frames: 1 },
        explosion_5: { src: 'assets/explosioneffect_5.png', frames: 1 },
        explosion_6: { src: 'assets/explosioneffect_6.png', frames: 1 },
        explosion_7: { src: 'assets/explosioneffect_7.png', frames: 1 },
        explosion_8: { src: 'assets/explosioneffect_8.png', frames: 1 },
        explosion_9: { src: 'assets/explosioneffect_9.png', frames: 1 },
        explosion_10: { src: 'assets/explosioneffect_10.png', frames: 1 },
        explosion_11: { src: 'assets/explosioneffect_11.png', frames: 1 },
        explosion_12: { src: 'assets/explosioneffect_12.png', frames: 1 },
        explosion_13: { src: 'assets/explosioneffect_13.png', frames: 1 },
        explosion_14: { src: 'assets/explosioneffect_14.png', frames: 1 },
        explosion_15: { src: 'assets/explosioneffect_15.png', frames: 1 },
        heal_1: { src: 'assets/heal_1.png', frames: 1 },
        heal_2: { src: 'assets/heal_2.png', frames: 1 },
        heal_3: { src: 'assets/heal_3.png', frames: 1 },
        heal_4: { src: 'assets/heal_4.png', frames: 1 },
        heal_5: { src: 'assets/heal_5.png', frames: 1 },
        heal_6: { src: 'assets/heal_6.png', frames: 1 },
        heal_7: { src: 'assets/heal_7.png', frames: 1 },
        heal_8: { src: 'assets/heal_8.png', frames: 1 },
        heal_9: { src: 'assets/heal_9.png', frames: 1 },
        heal_10: { src: 'assets/heal_10.png', frames: 1 },
        heal_11: { src: 'assets/heal_11.png', frames: 1 },
        heal_12: { src: 'assets/heal_12.png', frames: 1 },
        heal_13: { src: 'assets/heal_13.png', frames: 1 },
        heal_14: { src: 'assets/heal_14.png', frames: 1 },
        heal_15: { src: 'assets/heal_15.png', frames: 1 },
        heal_16: { src: 'assets/heal_16.png', frames: 1 }
    },
    
    // --- HEROES ---
    archer: { 
        arrow: { src: 'assets/archer_arrow.png' }, attack1: { src: 'assets/archer_attack1.png' }, 
        die: { src: 'assets/archer_dead.png' }, hurt: { src: 'assets/archer_hurt.png' }, 
        idle: { src: 'assets/archer_idle.png' }, idle2: { src: 'assets/archer_idle2.png' }, 
        jump: { src: 'assets/archer_jump.png' }, shot1: { src: 'assets/archer_shot1.png' }, 
        shot2: { src: 'assets/archer_shot2.png' }
    },
    swordsman: { 
        attack1: { src: 'assets/swordsman_attack1.png' }, attack2: { src: 'assets/swordsman_attack2.png' }, 
        attack3: { src: 'assets/swordsman_attack3.png' }, die: { src: 'assets/swordsman_dead.png' }, 
        hurt: { src: 'assets/swordsman_hurt.png' }, idle: { src: 'assets/swordsman_idle.png' }, 
        idle2: { src: 'assets/swordsman_idle2.png' }, jump: { src: 'assets/swordsman_jump.png' }
    },
    wizard: { 
        jump: { src: 'assets/wizard_jump.png' }, idle2: { src: 'assets/wizard_idle2.png' }, 
        idle: { src: 'assets/wizard_idle.png' }, hurt: { src: 'assets/wizard_hurt.png' }, 
        die: { src: 'assets/wizard_dead.png' }, attack3: { src: 'assets/wizard_attack3.png' }, 
        attack2: { src: 'assets/wizard_attack2.png' }, attack1: { src: 'assets/wizard_attack1.png' } 
    },
    enchantress: { 
        attack1: { src: 'assets/enchantress_attack1.png' }, attack2: { src: 'assets/enchantress_attack2.png' }, 
        attack3: { src: 'assets/enchantress_attack3.png' }, attack4: { src: 'assets/enchantress_attack4.png' }, 
        die: { src: 'assets/enchantress_dead.png' }, hurt: { src: 'assets/enchantress_hurt.png' }, 
        idle: { src: 'assets/enchantress_idle.png' }, jump: { src: 'assets/enchantress_jump.png' }
    },
    knight: { 
        attack1: { src: 'assets/knight_attack1.png' }, attack2: { src: 'assets/knight_attack2.png' }, 
        attack3: { src: 'assets/knight_attack3.png' }, attack4: { src: 'assets/knight_attack4.png' }, 
        die: { src: 'assets/knight_dead.png' }, hurt: { src: 'assets/knight_hurt.png' }, 
        idle: { src: 'assets/knight_idle.png' }, jump: { src: 'assets/knight_jump.png' }
    },
    musketeer: { 
        attack1: { src: 'assets/musketeer_attack1.png' }, attack2: { src: 'assets/musketeer_attack2.png' }, 
        attack3: { src: 'assets/musketeer_attack3.png' }, attack4: { src: 'assets/musketeer_attack4.png' }, 
        die: { src: 'assets/musketeer_dead.png' }, hurt: { src: 'assets/musketeer_hurt.png' }, 
        idle: { src: 'assets/musketeer_idle.png' }, jump: { src: 'assets/musketeer_jump.png' }
    },
    
    // --- MONSTERS ---
    firespirit: { idle: { src: 'assets/firespirit_idle.png' }, idle2: { src: 'assets/firespirit_idle_2.png' }, attack1: { src: 'assets/firespirit_attack.png' }, shot: { src: 'assets/firespirit_shot.png' }, charge: { src: 'assets/firespirit_charge.png' }, flame: { src: 'assets/firespirit_flame.png' }, explosion: { src: 'assets/firespirit_explosion.png' }, hurt: { src: 'assets/firespirit_hurt.png' }, die: { src: 'assets/firespirit_dead.png' }, jump: { src: 'assets/firespirit_hurt.png' } },
    plent: { idle: { src: 'assets/plent_idle.png' }, attack1: { src: 'assets/plent_attack_1.png' }, attack2: { src: 'assets/plent_attack_2.png' }, attack3: { src: 'assets/plent_attack_3.png' }, poison: { src: 'assets/plent_poison.png' }, cloud_poison: { src: 'assets/plent_cloud_poison.png' }, disguise: { src: 'assets/plent_disguise.png' }, attack_disguise: { src: 'assets/plent_attack_disquise.png' }, hurt: { src: 'assets/plent_hurt.png' }, die: { src: 'assets/plent_dead.png' }, jump: { src: 'assets/plent_hurt.png' } },
    skeleton: { idle: { src: 'assets/skeleton_idle.png' }, attack1: { src: 'assets/skeleton_attack_1.png' }, attack2: { src: 'assets/skeleton_attack_2.png' }, attack3: { src: 'assets/skeleton_attack_3.png' }, special_attack: { src: 'assets/skeleton_special_attack.png' }, jump: { src: 'assets/skeleton_jump.png' }, hurt: { src: 'assets/skeleton_hurt.png' }, die: { src: 'assets/skeleton_dead.png' } }
};

const CHARACTERS =[
    { id: 0, name: 'Archer', key: 'archer', color: '#2ecc71', isMelee: false, maxHp: 560, atk: 45, spd: 85, maxMp: 150, 
      desc: "A nimble marksman who strikes from afar with deadly precision. Prefers to stay at range to unleash a storm of arrows.", 
      moves:[
        { name: 'Volley', icon: 'assets/icon_volley.png', power: 75, mpCost: 20, anim: 'shot1' },
        { name: 'Piercing Arrow', icon: 'assets/icon_pierce.png', power: 110, mpCost: 35, anim: 'shot2' },
        { name: 'Rain of Arrows', icon: 'assets/icon_arrow_rain.png', power: 90, mpCost: 40, anim: 'jump', isAoe: true }
    ] },
    { id: 1, name: 'Swordsman', key: 'swordsman', color: '#e74c3c', isMelee: true, maxHp: 700, atk: 55, spd: 60, maxMp: 100, 
      desc: "A courageous frontline fighter excelling in close-quarters combat. Balanced heavily between raw damage and physical defense.",
      moves:[
        { name: 'Cross Slash', icon: 'assets/icon_cross_slash.png', power: 90, mpCost: 25, anim: 'attack2' },
        { name: 'Blade Dance', icon: 'assets/icon_blade_dance.png', power: 120, mpCost: 50, anim: 'attack3', isAoe: true },
        { name: 'Defensive Stance', icon: 'assets/icon_defense.png', power: 0, mpCost: 20, anim: 'idle2', effect: 'defenseUp' }
    ] },
    { id: 2, name: 'Wizard', key: 'wizard', color: '#9b59b6', isMelee: false, maxHp: 420, atk: 65, spd: 55, maxMp: 200, 
      desc: "A master of the arcane arts, capable of unleashing devastating area magic or shifting the tide with powerful single-target spells.",
      moves:[
        { name: 'Arcane Missiles', icon: 'assets/icon_arcane_missiles.png', power: 100, mpCost: 30, anim: 'attack2' },
        { name: 'Meteor', icon: 'assets/icon_meteor.png', power: 150, mpCost: 70, anim: 'attack3', isAoe: true },
        { name: 'Healing Light', icon: 'assets/icon_healing_light.png', power: 250, mpCost: 40, anim: 'jump', isHeal: true }
    ] },
    { id: 3, name: 'Enchantress', key: 'enchantress', color: '#e056fd', isMelee: false, maxHp: 455, atk: 60, spd: 65, maxMp: 180, 
      desc: "A mystical support caster who disrupts enemy formations and mends the wounds of her allies using ancient rejuvenation magic.",
      moves:[
        { name: 'Mystic Orb', icon: 'assets/icon_mystic_orb.png', power: 95, mpCost: 30, anim: 'attack2' },
        { name: 'Astral Storm', icon: 'assets/icon_astral_storm.png', power: 130, mpCost: 60, anim: 'attack4', isAoe: true },
        { name: 'Rejuvenation', icon: 'assets/icon_rejuvenation.png', power: 220, mpCost: 35, anim: 'jump', isHeal: true }
    ] },
    { id: 4, name: 'Knight', key: 'knight', color: '#c0c0c0', isMelee: true, maxHp: 875, atk: 40, spd: 40, maxMp: 90, 
      desc: "An armored bulwark who protects the team and absorbs heavy damage. His attacks are slow, but hit with staggering, weighty force.",
      moves:[
        { name: 'Shield Strike', icon: 'assets/icon_shield_strike.png', power: 80, mpCost: 15, anim: 'attack2' },
        { name: 'Holy Cleave', icon: 'assets/icon_holy_cleave.png', power: 100, mpCost: 40, anim: 'attack3', isAoe: true },
        { name: 'Fortify', icon: 'assets/icon_fortify.png', power: 0, mpCost: 30, anim: 'attack4', effect: 'defenseUp' }
    ] },
    { id: 5, name: 'Musketeer', key: 'musketeer', color: '#f1c40f', isMelee: true, maxHp: 490, atk: 55, spd: 75, maxMp: 120, 
      desc: "A cunning duelist blending quick swordplay with explosive firearms. High mobility allows her to quickly close gaps on targets.",
      moves:[
        { name: 'Swift Strike', icon: 'assets/icon_quick_draw.png', power: 90, mpCost: 25, anim: 'attack2' },
        { name: 'Vital Point', icon: 'assets/icon_headshot.png', power: 140, mpCost: 50, anim: 'attack3' },
        { name: 'Blade Fury', icon: 'assets/icon_explosive_shot.png', power: 110, mpCost: 60, anim: 'attack4', isAoe: true }
    ] },

    { id: 6, name: 'Fire Spirit', key: 'firespirit', color: '#e67e22', isMelee: false, isEnemy: true, maxHp: 350, atk: 70, spd: 80, maxMp: 150, 
      desc: "A volatile elemental entity composed of pure, scorching flames. It lashes out indiscriminately against any living targets.",
      moves:[
        { name: 'Fireball', power: 55, mpCost: 20, anim: 'shot' }, { name: 'Flame Dash', power: 75, mpCost: 35, anim: 'charge' }, { name: 'Inferno', power: 85, mpCost: 45, anim: 'flame' }, { name: 'Supernova', power: 90, mpCost: 60, anim: 'explosion', isAoe: true }
    ] },
    { id: 7, name: 'Plent', key: 'plent', color: '#27ae60', isMelee: true, isEnemy: true, maxHp: 960, atk: 45, spd: 45, maxMp: 100, 
      desc: "A mutated plant monster possessing tremendous vitality. It relies on natural camouflage and spreading toxic, suffocating spores.",
      moves:[
        { name: 'Vine Whip', power: 45, mpCost: 15, anim: 'attack2' }, { name: 'Toxic Spit', power: 65, mpCost: 30, anim: 'poison' }, { name: 'Camouflage', power: 0, mpCost: 20, anim: 'disguise', effect: 'defenseUp' }, { name: 'Sneak Attack', power: 90, mpCost: 45, anim: 'attack_disguise' }, { name: 'Poison Cloud', power: 65, mpCost: 55, anim: 'cloud_poison', isAoe: true }
    ] },
    { id: 8, name: 'Skeleton', key: 'skeleton', color: '#ecf0f1', isMelee: true, isEnemy: true, maxHp: 560, atk: 60, spd: 65, maxMp: 120, 
      desc: "An undead warrior reanimated by dark magic. It attacks with relentless, tireless fury, feeling no pain as its bones are shattered.",
      moves:[
        { name: 'Bone Slash', power: 55, mpCost: 20, anim: 'attack2' }, { name: 'Fatal Strike', power: 80, mpCost: 40, anim: 'attack3' }, { name: 'Leaping Strike', power: 75, mpCost: 35, anim: 'jump' }, { name: 'Bone Storm', power: 70, mpCost: 50, anim: 'special_attack', isAoe: true }
    ] }
];

let G = { selectedTeam:[], p: null, c: null, predictedQueue:[], activeEnt: null, pendingMove: null, isAnimating: false, isPaused: false, activeTimers: new Set(), activeAnimations:[], lastBattleParams: null };
let uidCounter = 0;
let globalFrameCount = 0;
let animTick = 0;
const LOADED_IMAGES = {};
let imagesToLoad = 0;
let imagesLoaded = 0;

const SFX = {
    btn: new Audio('assets/buttons.mp3'),
    lose: new Audio('assets/lose.mp3'),
    die: new Audio('assets/die.mp3'),
    hurt: new Audio('assets/hurt.mp3'),
    heal: new Audio('assets/healed.mp3'),
    victoryRps: new Audio('assets/victory minigame.mp3')
};
function playSFX(name) {
    if (SFX[name]) {
        let snd = SFX[name].cloneNode();
        snd.volume = 0.5;
        snd.play().catch(e => console.log('Audio blocked:', e));
    }
}
document.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('.menu-item') || e.target.closest('.pause-menu-item') || e.target.closest('.btn-start') || e.target.closest('.cc') || e.target.closest('.pick-hand') || e.target.closest('.close-x') || e.target.closest('#pause-btn') || e.target.closest('.cancel-target') || e.target.closest('.press-start-text')) {
        playSFX('btn');
    }
});

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
    const teamScreen = document.getElementById('teamScreen');
    const isMenu = (menuScreen && menuScreen.classList.contains('active')) || (teamScreen && teamScreen.classList.contains('active'));
    
    const tickThreshold = isMenu ? 14 : 9;

    if (isMenu && menuScreen && menuScreen.classList.contains('active')) {
        const skyLayer = document.getElementById('layer-sky');
        const flowerLayer = document.getElementById('layer-flowers');
        if (skyLayer && flowerLayer) {
            const elapsed = timestamp || performance.now();
            skyLayer.style.transform = `scale(1.05) translateX(${Math.sin(elapsed * 0.0002) * 3}%)`;
            flowerLayer.style.transform = `translate(${Math.sin(elapsed * 0.0015) * 2}px, ${Math.cos(elapsed * 0.002) * 1.5}px)`;
        }
    }

    globalFrameCount++;
    if (globalFrameCount >= tickThreshold) { 
        globalFrameCount = 0; 
        animTick++; 
    }

    const allEnts = (G.p && G.c) ?[...G.p.team, ...G.c.team] :[];
    allEnts.forEach(ent => {
        drawModularSprite(`sprite_${ent.uid}`, ent.key, ent.action, !ent.isPlayer, false, ent);
    });
    
    CHARACTERS.forEach(h => drawModularSprite(`select_sprite_${h.id}`, h.key, 'idle', false, true));
    
    for(let i=0; i<3; i++) { 
        if(G.selectedTeam[i] !== undefined) {
            const charObj = CHARACTERS.find(c => c.id === G.selectedTeam[i]);
            if (charObj) drawModularSprite(`preview_sprite_${i}`, charObj.key, 'idle', false, true); 
        }
    }

    if(!document.getElementById('infoModal').classList.contains('hidden')) {
        const modalEnts = (G.p && G.c) ?[...G.p.team, ...G.c.team] :[];
        modalEnts.forEach(c => { 
            if (document.getElementById(`info_icon_${c.uid}`)) {
                drawModularSprite(`info_icon_${c.uid}`, c.key, 'idle', !c.isPlayer, true, c); 
            }
        });
    }
}

function drawModularSprite(canvasId, charKey, action, flipX, isUI = false, ent = null) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let usingIdle2 = false;
    if (action === 'idle' && LOADED_IMAGES[`${charKey}_idle2`]) {
        if (ent && ent.idleSwapTime === undefined) {
            ent.idleSwapTime = animTick + 40 + Math.floor(Math.random() * 60); 
            ent.playingIdle2 = false;
        }
        
        if (ent && !ent.playingIdle2 && animTick >= ent.idleSwapTime) {
            ent.playingIdle2 = true;
            ent.idle2StartTick = animTick;
        }
        
        if (ent && ent.playingIdle2) {
            const tempImg = LOADED_IMAGES[`${charKey}_idle2`];
            if (tempImg && tempImg.complete && tempImg.naturalWidth > 0) {
                const tempFrames = Math.max(1, Math.floor(tempImg.naturalWidth / tempImg.naturalHeight));
                let ticksPassed = animTick - ent.idle2StartTick;
                let frameCalc = Math.floor(ticksPassed / 2.5);
                
                if (frameCalc >= tempFrames) { 
                    ent.playingIdle2 = false;
                    ent.idleSwapTime = animTick + 40 + Math.floor(Math.random() * 60);
                } else {
                    usingIdle2 = true;
                    action = 'idle2';
                }
            }
        }
    }

    const imgKey = `${charKey}_${action}`;
    const img = LOADED_IMAGES[imgKey];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const totalFrames = Math.max(1, Math.floor(img.naturalWidth / img.naturalHeight));
    const frameWidth = Math.floor(img.naturalWidth / totalFrames); 
    const frameHeight = img.naturalHeight;
    
    let currentFrame = 0;
    const isAttack =['attack1', 'attack2', 'attack3', 'attack4', 'shot', 'shot1', 'shot2', 'charge', 'flame', 'explosion', 'poison', 'cloud_poison', 'special_attack', 'jump'].includes(action);

    if (usingIdle2 && ent) {
        let ticksPassed = animTick - ent.idle2StartTick;
        currentFrame = Math.floor(ticksPassed / 2.5);
    } 
    else if (isAttack) {
        if (ent && ent.action !== ent.lastAction) {
            ent.actionStartTick = animTick;
        }
        let ticksPassed = animTick - (ent ? (ent.actionStartTick || animTick) : animTick);
        currentFrame = Math.min(ticksPassed, totalFrames - 1);
    } 
    else if (action === 'die' || action === 'dead') {
        if (ent && ent.dieTick !== undefined) {
            let ticksPassed = animTick - ent.dieTick;
            currentFrame = Math.min(Math.floor(ticksPassed / 1.5), totalFrames - 1);
        } else {
            currentFrame = totalFrames - 1;
        }
    } 
    else {
        if (charKey === 'enchantress' && action === 'idle') {
            currentFrame = totalFrames === 1 ? 0 : (Math.floor(animTick / 1.5) % totalFrames);
        } else {
            currentFrame = totalFrames === 1 ? 0 : (animTick % totalFrames);
        }
    }

    if (ent) ent.lastAction = action; 

    const sourceX = currentFrame * frameWidth;
    const clipW = frameWidth;
    ctx.save();

    if (isUI) {
        if (flipX) { ctx.translate(canvas.width, 0); ctx.scale(-1, 1); }
        let scale = Math.min(canvas.width / frameWidth, canvas.height / frameHeight);
        
        let dy;
        if (canvasId.includes('select_sprite') || canvasId.includes('preview_sprite')) {
            const bottomPadding = (canvasId.includes('select_sprite')) ? 25 : 20; 
            const safeDrawHeight = canvas.height - bottomPadding;
            scale = safeDrawHeight / frameHeight;
            dy = canvas.height - (frameHeight * scale) - bottomPadding;
        } else if (canvasId.includes('info_icon')) {
            scale *= 1.25;
            dy = (canvas.height - (frameHeight * scale)) / 2;
        } else {
            dy = (canvas.height - (frameHeight * scale)) / 2;
        }
        
        const dw = clipW * scale;
        const dh = frameHeight * scale;
        const dx = (canvas.width - dw) / 2;
        
        ctx.drawImage(img, sourceX, 0, clipW, frameHeight, dx, dy, dw, dh);
    } else {
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
    window.location.reload();
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

function playAgain() {
    G.activeTimers.forEach(t => t.clear());
    G.activeAnimations.forEach(a => a.cancel());
    G.activeAnimations =[];
    resumeGame();
    G.pendingMove = null;
    G.isAnimating = false;
    G.p = null;
    G.c = null;
    G.selectedTeam =[];
    document.getElementById('pause-btn').classList.add('hidden');
    showScreen('team');
    renderTeamSelect();
    updatePreview();
}

function showScreen(n) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(n + 'Screen').classList.add('active'); }
function startGame() { G.selectedTeam =[]; showScreen('team'); renderTeamSelect(); }

function renderTeamSelect() {
    const grid = document.getElementById('creatureGrid');
    grid.innerHTML = '';
    CHARACTERS.filter(c => !c.isEnemy).forEach(c => {
        const el = document.createElement('div');
        el.className = 'cc';
        el.innerHTML = `
            <div class="portrait-frame">
                <canvas id="select_sprite_${c.id}" width="110" height="154"></canvas>
            </div>
            <div class="cc-name" style="color:${c.color}">${c.name}</div>
        `;
        el.onclick = () => toggleCreature(c, el);
        grid.appendChild(el);
    });
}

function toggleCreature(c, el) {
    const idx = G.selectedTeam.indexOf(c.id);
    if (idx !== -1) { 
        G.selectedTeam.splice(idx, 1); 
    } else if (G.selectedTeam.length < 3) { 
        G.selectedTeam.push(c.id); 
    } else {
        G.selectedTeam.shift();
        G.selectedTeam.push(c.id);
    }
    
    document.querySelectorAll('.cc').forEach(card => {
        const cardCanvas = card.querySelector('canvas');
        if (cardCanvas) {
            const cardId = parseInt(cardCanvas.id.split('_').pop());
            if (G.selectedTeam.includes(cardId)) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        }
    });

    updatePreview();
}

function updatePreview() {
    for (let i = 0; i < 3; i++) {
        const slot = document.getElementById('slot' + i);
        const id = G.selectedTeam[i];
        if(id !== undefined) {
            slot.innerHTML = `<canvas id="preview_sprite_${i}" width="75" height="105"></canvas>`;
            slot.classList.add('filled');
        } else { 
            slot.innerHTML = '?'; 
            slot.classList.remove('filled'); 
        }
    }
    document.getElementById('confirmBtn').disabled = G.selectedTeam.length !== 3;
}

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
    
    pickHandMenu.classList.remove("menu-exit");
    rpsOverlay.classList.remove("overlay-exit");
    playerHandImg.classList.remove("hand-damage", "shake");
    cpuHandImg.classList.remove("hand-damage", "shake");

    rpsIsLocked = false;
    showScreen('rps');
}

function waitTransition(element, timeout = 1000) { 
    return new Promise(resolve => { 
        let isResolved = false;
        const timer = setTimeout(() => { 
            if (!isResolved) { isResolved = true; element.removeEventListener("transitionend", handler); resolve(); } 
        }, timeout);
        function handler(e) { 
            if (e.target === element && !isResolved) { 
                isResolved = true; clearTimeout(timer); element.removeEventListener("transitionend", handler); resolve(); 
            } 
        } 
        element.addEventListener("transitionend", handler); 
    }); 
}

function waitAnimation(element, timeout = 2000) { 
    return new Promise(resolve => { 
        let isResolved = false;
        const timer = setTimeout(() => { 
            if (!isResolved) { isResolved = true; element.removeEventListener("animationend", handler); resolve(); } 
        }, timeout);
        function handler(e) { 
            if (e.target === element && !isResolved) { 
                isResolved = true; clearTimeout(timer); element.removeEventListener("animationend", handler); resolve(); 
            } 
        } 
        element.addEventListener("animationend", handler); 
    }); 
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
                cpuHandImg.classList.add("hand-damage");
                heart.classList.add("heart-damage"); 
                await waitAnimation(heart, 2000); 
                heart.remove(); 
            } else {
                cpuHandImg.classList.add("hand-damage"); await waitAnimation(cpuHandImg);
            }
            cpuHandImg.classList.remove("hand-damage");
        } else {
            const hearts = document.querySelectorAll(".player-container .hearts img");
            if (hearts.length > 0) { 
                let heart = hearts[hearts.length - 1]; 
                playerHandImg.classList.add("hand-damage");
                heart.classList.add("heart-damage"); 
                await waitAnimation(heart, 2000); 
                heart.remove(); 
            } else {
                playerHandImg.classList.add("hand-damage"); await waitAnimation(playerHandImg);
            }
            playerHandImg.classList.remove("hand-damage");
        }
        setTimeout(() => { endRPSGame(roundWinner); }, 500);
    }
}

async function exitMenu() { pickHandMenu.classList.add("menu-exit"); await waitTransition(pickHandMenu); rpsOverlay.classList.add("overlay-exit"); await waitTransition(rpsOverlay); }
async function openMenu() { pickHandMenu.classList.remove("menu-exit"); rpsOverlay.classList.remove("overlay-exit"); }

async function shakeAnimation() {
    return new Promise(resolve => {
        setTimeout(() => { cpuHandImg.classList.add("shake"); }, 500);
        setTimeout(() => { playerHandImg.classList.add("shake"); }, 500);

        setTimeout(async () => {
            await waitAnimation(playerHandImg, 1000);
            cpuHandImg.classList.remove("shake");
            playerHandImg.classList.remove("shake");
            resolve();
        }, 500);
    });
}

async function revealHand(playerHand, cpuHand) {
    await shakeAnimation();
    return new Promise(resolve => {
        const playerOriginalImage = playerHandImg.src;
        const cpuOriginalImage = cpuHandImg.src;
        playerHandImg.src = `assets/player-${playerHand}.png`;
        cpuHandImg.src = `assets/cpu-${cpuHand}.png`;
        setTimeout(() => { playerHandImg.src = playerOriginalImage; cpuHandImg.src = cpuOriginalImage; resolve(); }, 1500);
    });
}
const determineRoundWinner = (playerHand, cpuHand) => {
    if (playerHand === "rock") playerHand = 1; else if (playerHand === "paper") playerHand = 2; else if (playerHand === "scissor") playerHand = 3;
    if (cpuHand === "rock") cpuHand = 1; else if (cpuHand === "paper") cpuHand = 2; else if (cpuHand === "scissor") cpuHand = 3;
    const result = ((playerHand - cpuHand + 3) % 3);
    if (result === 1) return "player"; else if (result === 2) return "cpu"; else return "draw";
}
const pickCpuHand = () => { const cpuHand = Math.floor((Math.random() * 3) + 1); if (cpuHand === 1) return "rock"; else if (cpuHand === 2) return "paper"; else return "scissor"; }

function endRPSGame(winner) {
    let winStatus = document.getElementById("rpsWinStatus");
    let bonus = 'none';
    if (winner === "cpu") {
        winStatus.textContent = "AMBUSHED!";
        winStatus.style.color = "#ff5252";
        document.getElementById("rpsBonusDesc").textContent = "The enemy strikes first!";
        bonus = 'enemy';
        playSFX('lose');
    } else {
        winStatus.textContent = "PREEMPTIVE STRIKE!";
        winStatus.style.color = "#2ecc71";
        document.getElementById("rpsBonusDesc").textContent = "Your party attacks first!";
        bonus = 'player';
        playSFX('victoryRps');
    }
    newGameMenu.classList.remove("hide-new-game-menu");
    const nextBtn = document.getElementById("new-game-btn");
    nextBtn.onclick = (e) => {
        e.preventDefault();
        const enemyRoster = CHARACTERS.filter(c => c.isEnemy);
        const cpuIds =[]; for(let i=0; i<3; i++) { const randomMonster = enemyRoster[Math.floor(Math.random() * enemyRoster.length)]; cpuIds.push(randomMonster.id); }
        const overlay = document.getElementById('transition-overlay');
        overlay.classList.remove('hidden', 'iris-opening');
        overlay.classList.add('iris-closing'); // Iris out to black screen
        setTimeout(() => {
            initBattle(G.selectedTeam, cpuIds, bonus);
            showScreen('battle');
            document.getElementById('pause-btn').classList.remove('hidden');
            overlay.classList.remove('iris-closing');
            overlay.classList.add('iris-opening'); // Iris in revealing the battlefield
            setTimeout(() => { overlay.classList.add('hidden'); }, 800);
        }, 800);
    };
}

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
    const pPos =[{x: 30, y: 15}, {x: 18, y: 15}, {x: 6, y: 15}];
    const cPos =[{x: 70, y: 15}, {x: 82, y: 15}, {x: 94, y: 15}];
    G.p.team.forEach((c, i) => createEntityHTML(layer, c, pPos[i].x, pPos[i].y, 100 - i));
    G.c.team.forEach((c, i) => createEntityHTML(layer, c, cPos[i].x, cPos[i].y, 100 - i));
}

function createEntityHTML(layer, c, x, y, z) {
    layer.innerHTML += `<div class="entity-wrap" id="wrap_${c.uid}" style="left:${x}%; bottom:${y}%; z-index:${z}; transform:translateX(-50%)"><div class="platform"></div><canvas class="sprite" id="sprite_${c.uid}" width="350" height="350"></canvas></div>`;
}

function renderHUD() {
    const allyHud = document.getElementById('ally-hud');
    const enemyHud = document.getElementById('enemy-hud');
    
    // Creates the stat blocks for the TOP-HUD layout
    const createBarHTML = (c) => {
        const cleanName = (c.isPlayer ? c.name : c.name.replace(/^Enemy\s+/i, '')).toUpperCase();
        const turnIndicatorHtml = `<div class="turn-indicator" id="turn_indicator_${c.uid}"></div>`;
        
        return `
            <div class="entity-stats ${c.isPlayer ? 'ally' : 'enemy'}" id="stats_${c.uid}">
                <div class="entity-stat-name">
                    ${c.isPlayer ? turnIndicatorHtml : ''}
                    <span>${cleanName}</span>
                    ${!c.isPlayer ? turnIndicatorHtml : ''}
                </div>
                <div class="entity-stat-bar hp">
                    <div class="entity-stat-track"><div class="entity-stat-fill hp-fill" id="hp_fill_${c.uid}"></div></div>
                    <div class="stat-bar-text" id="hp_text_${c.uid}">${Math.ceil(c.currentHp)}/${c.maxHp}</div>
                </div>
                <div class="entity-stat-bar mp">
                    <div class="entity-stat-track"><div class="entity-stat-fill mp-fill" id="mp_fill_${c.uid}"></div></div>
                    <div class="stat-bar-text" id="mp_text_${c.uid}">${Math.floor(c.mp)}/${c.maxMp}</div>
                </div>
            </div>`;
    };
    
    // Populate both sides of the top HUD
    allyHud.innerHTML = G.p.team.map(createBarHTML).join('');
    enemyHud.innerHTML = G.c.team.map(createBarHTML).join('');
    
    updateBars();
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
    
    G.activeEnt.immunity = false;
    G.activeEnt.mp = Math.min(G.activeEnt.maxMp, G.activeEnt.mp + 20); 
    updateBars();
    
    document.querySelectorAll('.entity-wrap').forEach(e => e.classList.remove('is-active'));
    document.getElementById(`wrap_${G.activeEnt.uid}`).classList.add('is-active');

    // Turn Indicator logic
    document.querySelectorAll('.turn-indicator').forEach(ind => ind.classList.remove('active'));
    const indicator = document.getElementById(`turn_indicator_${G.activeEnt.uid}`);
    if (indicator) indicator.classList.add('active');

    const commandPanel = document.getElementById('command-panel');
    const heroDisplay = document.getElementById('active-hero-display');

    // Update the selector to show whose turn it is
    if (heroDisplay) {
        if (G.activeEnt.isPlayer) {
            heroDisplay.innerText = `${G.activeEnt.name.toUpperCase()}'S TURN`;
            heroDisplay.style.visibility = 'visible';
        } else {
            heroDisplay.innerText = ""; // Hide name when it's enemy turn
            heroDisplay.style.visibility = 'hidden';
        }
    }

    commandPanel.classList.remove('hidden'); 
    if (G.activeEnt.isPlayer) {
        commandPanel.classList.add('active-turn');
        showMainMenu();
    } else {
        commandPanel.classList.remove('active-turn');
        pausableTimeout(cpuTurn, 1000);
    }
}


function showMainMenu() { 
    document.getElementById('targetMenuOverlay').classList.add('hidden');
    document.getElementById('skillsMenuBox').classList.add('hidden');
    document.getElementById('mainMenuBox').classList.remove('hidden');
    document.getElementById('command-panel').classList.remove('hidden');
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
        const item = document.createElement('button');
        item.className = `menu-item ${!canUse ? 'disabled' : ''}`;
        const iconHtml = m.icon ? `<img src="${m.icon}" class="skill-icon" alt="${m.name} icon">` : '<span class="skill-icon-placeholder"></span>';
        item.innerHTML = `${iconHtml}<span>${m.name}</span><span class="skill-mp-cost">${m.mpCost} MP</span>`;
        if (canUse) { item.onclick = () => { G.pendingMove = m; startTargeting(); }; }
        list.appendChild(item);
    });
}

function startTargeting() {
    document.getElementById('targetMenuOverlay').classList.remove('hidden');
    document.getElementById('skillsMenuBox').classList.add('hidden'); 
    document.getElementById('command-panel').classList.add('hidden'); 
    
    const heroDisplay = document.getElementById('active-hero-display');
    if (heroDisplay) heroDisplay.style.visibility = 'hidden';

    let targets;
    if (G.pendingMove.isHeal) { targets = G.activeEnt.isPlayer ? G.p.team : G.c.team; } 
    else { targets = (G.activeEnt.isPlayer ? G.c.team : G.p.team); }
    targets.forEach(c => {
        if(c.currentHp > 0) {
            const wrap = document.getElementById(`wrap_${c.uid}`);
            wrap.classList.add('targetable');
            wrap.onclick = () => { clearTargeting(); executeMove(G.activeEnt, c, G.pendingMove); };
        }
    });
}

function cancelTargeting() { 
    clearTargeting(); 
    document.getElementById('command-panel').classList.remove('hidden'); 
    showMainMenu(); 
}

function clearTargeting() { 
    document.getElementById('targetMenuOverlay').classList.add('hidden');[...G.p.team, ...G.c.team].forEach(c => { 
        const w = document.getElementById(`wrap_${c.uid}`); 
        if(w) { w.classList.remove('targetable'); w.onclick = null; }
    }); 
}

function cpuTurn() {
    const validMoves = G.activeEnt.moves.filter(m => m.mpCost <= G.activeEnt.mp);
    let move = { name: 'Strike', power: G.activeEnt.atk, mpCost: 0, anim: 'attack1' };
    if (validMoves.length > 0 && Math.random() > 0.5) { move = validMoves[Math.floor(Math.random() * validMoves.length)]; }
    let targets = move.isHeal ? G.c.team.filter(c => c.currentHp > 0) : G.p.team.filter(c => c.currentHp > 0);
    if (targets.length === 0) { pausableTimeout(advanceTurn, 200); return; }
    const target = targets[Math.floor(Math.random() * targets.length)];
    executeMove(G.activeEnt, target, move);
}

let logTimeout;
function updateBattleLog(message, duration = 4000) { 
    const logEl = document.getElementById('battle-log');
    if (!logEl) return;

    clearTimeout(logTimeout); 

    logEl.innerHTML = message;
    logEl.style.opacity = 1;

    logTimeout = pausableTimeout(() => {
        logEl.style.opacity = 0;
    }, duration);
}

function executeMove(actor, target, move) {
    G.isAnimating = true;
    document.getElementById('command-panel').classList.remove('active-turn');
    document.getElementById('command-panel').classList.add('hidden'); 
    
    const displayName = actor.name.replace(/^Enemy\s+/i, '');
    updateBattleLog(`${displayName} used ${move.name}!`);

    if (move.effect === 'defenseUp') {
        actor.immunity = true;
    }

    actor.mp = Math.max(0, actor.mp - (move.mpCost || 0));
    updateBars();
    
    actor.lastAction = actor.action; 
    actor.action = move.anim || 'attack1';
    actor.actionStartTick = animTick; 
    
    let animDuration = 1200; 
    let stepDuration = Math.max(animDuration, 600); 
    let attackDelay = stepDuration * 0.5; 
    let totalWait = Math.max(stepDuration + 500, 1000); 
    
    const wrap = document.getElementById(`wrap_${actor.uid}`);
    let dir = actor.isPlayer ? 40 : -40;
    
    let anim;
    if (actor.isMelee) { 
        anim = wrap.animate([
            { transform: `translateX(-50%) translate(0px, 0px)` },
            { transform: `translateX(-50%) translate(${dir}px, 0px)`, offset: 0.3 },
            { transform: `translateX(-50%) translate(${dir}px, 0px)`, offset: 0.7 },
            { transform: `translateX(-50%) translate(0px, 0px)` }
        ], { duration: stepDuration, easing: 'ease-in-out' });
        
        G.activeAnimations.push(anim);
        anim.onfinish = () => { G.activeAnimations = G.activeAnimations.filter(a => a !== anim); wrap.style.transform = `translateX(-50%)`; };
        if (G.isPaused) anim.pause();
        
        spawnSmokeVFX(actor.uid);
    }
    
    pausableTimeout(() => {
        if (move.isAoe) { (actor.isPlayer ? G.c.team : G.p.team).filter(t => t.currentHp > 0).forEach(t => applyDamage(actor, t, move)); } 
        else { applyDamage(actor, target, move); }
        updateBars();
    }, actor.isMelee ? attackDelay : 200); 
    
    pausableTimeout(() => {
        if(actor.currentHp > 0) actor.action = 'idle';
        G.isAnimating = false;
        pausableTimeout(advanceTurn, 200); 
    }, totalWait); 
}

function applyDamage(actor, target, move) {
    if(target.currentHp <= 0) return;

    if (!move.isHeal && target.immunity) {
        spawnNum(`BLOCKED`, target.uid, 'shld');
        return; 
    }

    document.getElementById('stage').classList.add('screen-shake');
    setTimeout(() => document.getElementById('stage').classList.remove('screen-shake'), 300);

    let dmg = Math.floor(move.power + (actor.atk * 0.25));
    if (move.power === 0 && !move.isHeal) dmg = 0; 
    
    if (move.isHeal) {
        target.action = 'idle';
        let healAmt = Math.abs(move.power); 
        spawnNum(`+${healAmt}`, target.uid, 'heal');
        spawnHealVFX(target.uid);
        playSFX('heal');
        target.currentHp = Math.min(target.maxHp, target.currentHp + healAmt);
        pausableTimeout(() => { if (target.currentHp > 0) target.action = 'idle'; }, 400);
    } else {
        if (actor.isMelee) {
            spawnHitVFX(target.uid);
        }
        
        if ((actor.key === 'wizard' || actor.key === 'enchantress') && !move.isAoe) {
            spawnMageHitVFX(target.uid);
        }
        
        if ((actor.key === 'wizard' && move.name === 'Meteor') || (actor.key === 'enchantress' && move.name === 'Mystic Orb') || actor.key === 'firespirit') {
            spawnExplosionVFX(target.uid);
        }
        
        if (Math.random() < (move.critChance || 0.05)) { dmg = Math.floor(dmg * 1.5); spawnNum(`CRIT ${dmg}`, target.uid, 'crit'); } 
        else { spawnNum(`-${dmg}`, target.uid, 'dmg'); }
        
        target.currentHp = Math.max(0, target.currentHp - dmg);
        doHitAnim(target.uid, target.isPlayer);
        
        if (target.currentHp <= 0) {
            if (target.action !== 'die' && target.action !== 'jump') {
                playSFX('die');
                target.action = 'jump';
                target.lastAction = null;
                pausableTimeout(() => { 
                    target.action = 'die'; 
                    target.lastAction = null;
                    target.dieTick = animTick;
                }, 600);
            }
        } else {
            playSFX('hurt');
            target.action = 'hurt';
            pausableTimeout(() => { if (target.currentHp > 0) target.action = 'idle'; }, 400);
        }
    }
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

function spawnHealVFX(uid) {
    const w = document.getElementById(`wrap_${uid}`);
    if (!w) { return; }
    const s = document.getElementById('stage');
    if (!s) { return; }
    
    const r = w.getBoundingClientRect();
    const sr = s.getBoundingClientRect();
    
    const centerX = r.left + r.width/2 - sr.left;
    const centerY = r.top + r.height * 0.85 - sr.top;
    
    const vfxContainer = document.createElement('div');
    vfxContainer.className = 'vfx-sprite heal';
    vfxContainer.style.left = centerX + 'px';
    vfxContainer.style.top = centerY + 'px';
    vfxContainer.style.transform = 'translate(-50%, -50%)';
    vfxContainer.style.backgroundSize = '100% 100%';
    vfxContainer.style.backgroundRepeat = 'no-repeat';
    vfxContainer.style.backgroundPosition = 'center';
    
    s.appendChild(vfxContainer);
    
    let currentFrame = 1;
    const imagePath = ANIMATION_ASSETS.vfx[`heal_${currentFrame}`].src;
    vfxContainer.style.backgroundImage = `url('${imagePath}')`;
    
    const frameInterval = setInterval(() => {
        currentFrame++;
        if (currentFrame > 16) {
            clearInterval(frameInterval);
            vfxContainer.remove();
            return;
        }
        
        const newImagePath = ANIMATION_ASSETS.vfx[`heal_${currentFrame}`].src;
        vfxContainer.style.backgroundImage = `url('${newImagePath}')`;
    }, 75);
}

function spawnHitVFX(uid) {
    const w = document.getElementById(`wrap_${uid}`);
    if (!w) { return; }
    const s = document.getElementById('stage');
    if (!s) { return; }
    
    const r = w.getBoundingClientRect();
    const sr = s.getBoundingClientRect();
    
    const centerX = r.left + r.width/2 - sr.left;
    const centerY = r.top + r.height * 0.85 - sr.top;
    
    const vfxContainer = document.createElement('div');
    vfxContainer.className = 'vfx-sprite slash';
    vfxContainer.style.left = centerX + 'px';
    vfxContainer.style.top = centerY + 'px';
    vfxContainer.style.transform = 'translate(-50%, -50%)';
    vfxContainer.style.backgroundSize = '100% 100%';
    vfxContainer.style.backgroundRepeat = 'no-repeat';
    vfxContainer.style.backgroundPosition = 'center';
    
    s.appendChild(vfxContainer);
    
    let currentFrame = 1;
    const imagePath = ANIMATION_ASSETS.vfx[`slash_${currentFrame}`].src;
    vfxContainer.style.backgroundImage = `url('${imagePath}')`;
    
    const frameInterval = setInterval(() => {
        currentFrame++;
        if (currentFrame > 9) {
            clearInterval(frameInterval);
            vfxContainer.remove();
            return;
        }
        
        const newImagePath = ANIMATION_ASSETS.vfx[`slash_${currentFrame}`].src;
        vfxContainer.style.backgroundImage = `url('${newImagePath}')`;
    }, 75);
}

function spawnSmokeVFX(uid) {
    const w = document.getElementById(`wrap_${uid}`);
    if (!w) { return; }
    const s = document.getElementById('stage');
    if (!s) { return; }
    
    const r = w.getBoundingClientRect();
    const sr = s.getBoundingClientRect();
    
    const centerX = r.left + r.width/2 - sr.left;
    const centerY = r.top + r.height * 0.95 - sr.top;
    
    const vfxContainer = document.createElement('div');
    vfxContainer.className = 'vfx-sprite smoke';
    vfxContainer.style.left = centerX + 'px';
    vfxContainer.style.top = centerY + 'px';
    vfxContainer.style.transform = 'translate(-50%, -50%)';
    vfxContainer.style.backgroundSize = '100% 100%';
    vfxContainer.style.backgroundRepeat = 'no-repeat';
    vfxContainer.style.backgroundPosition = 'center';
    
    s.appendChild(vfxContainer);
    
    let currentFrame = 1;
    const imagePath = ANIMATION_ASSETS.vfx[`smoke_${currentFrame}`].src;
    vfxContainer.style.backgroundImage = `url('${imagePath}')`;
    
    const frameInterval = setInterval(() => {
        currentFrame++;
        if (currentFrame > 8) {
            clearInterval(frameInterval);
            vfxContainer.remove();
            return;
        }
        
        const newImagePath = ANIMATION_ASSETS.vfx[`smoke_${currentFrame}`].src;
        vfxContainer.style.backgroundImage = `url('${newImagePath}')`;
    }, 100);
}

function spawnMageHitVFX(uid) {
    const w = document.getElementById(`wrap_${uid}`);
    if (!w) { return; }
    const s = document.getElementById('stage');
    if (!s) { return; }
    
    const r = w.getBoundingClientRect();
    const sr = s.getBoundingClientRect();
    
    const centerX = r.left + r.width/2 - sr.left;
    const centerY = r.top + r.height * 0.85 - sr.top;
    
    const vfxContainer = document.createElement('div');
    vfxContainer.className = 'vfx-sprite mage-hit';
    vfxContainer.style.left = centerX + 'px';
    vfxContainer.style.top = centerY + 'px';
    vfxContainer.style.transform = 'translate(-50%, -50%)';
    vfxContainer.style.backgroundSize = 'cover';
    vfxContainer.style.backgroundRepeat = 'no-repeat';
    vfxContainer.style.backgroundPosition = 'center';
    vfxContainer.style.width = '300px';
    vfxContainer.style.height = '300px';
    
    s.appendChild(vfxContainer);
    
    let currentFrame = 1;
    const spriteSheet = ANIMATION_ASSETS.vfx.mage_hit_1.src;
    const frameWidth = 100;
    
    const updateFrame = (frame) => {
        const xOffset = (frame - 1) * frameWidth;
        vfxContainer.style.backgroundImage = `url('${spriteSheet}')`;
        vfxContainer.style.backgroundPosition = `-${xOffset}px 0`;
        vfxContainer.style.backgroundSize = '500px 100px';
    };
    
    updateFrame(currentFrame);
    
    const frameInterval = setInterval(() => {
        currentFrame++;
        if (currentFrame > 5) {
            clearInterval(frameInterval);
            vfxContainer.remove();
            return;
        }
        updateFrame(currentFrame);
    }, 75);
}

function spawnExplosionVFX(uid) {
    const w = document.getElementById(`wrap_${uid}`);
    if (!w) { return; }
    const s = document.getElementById('stage');
    if (!s) { return; }
    
    const r = w.getBoundingClientRect();
    const sr = s.getBoundingClientRect();
    
    const centerX = r.left + r.width/2 - sr.left;
    const centerY = r.top + r.height * 0.95 - sr.top;
    
    const vfxContainer = document.createElement('div');
    vfxContainer.className = 'vfx-sprite explosion';
    vfxContainer.style.left = centerX + 'px';
    vfxContainer.style.top = centerY + 'px';
    vfxContainer.style.transform = 'translate(-50%, -50%)';
    vfxContainer.style.backgroundSize = '100% 100%';
    vfxContainer.style.backgroundRepeat = 'no-repeat';
    vfxContainer.style.backgroundPosition = 'center';
    vfxContainer.style.width = '200px';
    vfxContainer.style.height = '200px';
    
    s.appendChild(vfxContainer);
    
    let currentFrame = 1;
    const imagePath = ANIMATION_ASSETS.vfx[`explosion_${currentFrame}`].src;
    vfxContainer.style.backgroundImage = `url('${imagePath}')`;
    
    const frameInterval = setInterval(() => {
        currentFrame++;
        if (currentFrame > 15) {
            clearInterval(frameInterval);
            vfxContainer.remove();
            return;
        }
        
        const newImagePath = ANIMATION_ASSETS.vfx[`explosion_${currentFrame}`].src;
        vfxContainer.style.backgroundImage = `url('${newImagePath}')`;
    }, 75);
}

function updateBars() {
    if (!G.p) return;
    
    const updateEntityBars = (c) => {
        const hpPct = Math.max(0, (c.currentHp / c.maxHp) * 100);
        const mpPct = Math.max(0, (c.mp / c.maxMp) * 100);

        const hpFill = document.getElementById(`hp_fill_${c.uid}`);
        const mpFill = document.getElementById(`mp_fill_${c.uid}`);
        const hpText = document.getElementById(`hp_text_${c.uid}`);
        const mpText = document.getElementById(`mp_text_${c.uid}`);
        const statBlock = document.getElementById(`stats_${c.uid}`);

        if (hpFill) hpFill.style.width = hpPct + '%';
        if (mpFill) mpFill.style.width = mpPct + '%';
        if (hpText) hpText.textContent = `${Math.ceil(c.currentHp)}/${c.maxHp}`;
        if (mpText) mpText.textContent = `${Math.floor(c.mp)}/${c.maxMp}`;

        if (statBlock) {
            if (c.currentHp <= 0) statBlock.classList.add('dead');
            else statBlock.classList.remove('dead');
        }
    };

    G.p.team.forEach(updateEntityBars);
    G.c.team.forEach(updateEntityBars);
}

function showInfoModal() {
    const renderCol = (title, team) => {
        let html = `<div class="info-col"><h3>${title}</h3><div class="info-col-scroll">`;
        team.forEach(c => { 
            const displayName = c.isPlayer ? c.name : c.name.replace(/^Enemy\s+/i, '');
            const skillsHTML = c.moves.map(m => `<span class="info-skill-badge">${m.name}</span>`).join('');
            
            html += `
            <div class="info-row" style="display:flex; align-items:flex-start; gap: 15px;">
                <div class="info-icon-frame"><canvas id="info_icon_${c.uid}" width="80" height="80"></canvas></div>
                <div class="info-details" style="flex:1;">
                    <strong style="font-size:1.2rem; color:var(--pixel-gold);">${displayName}</strong><br>
                    <span style="color:#e74c3c;">HP:</span> ${Math.ceil(c.currentHp)}/${c.maxHp} 
                    ${c.isPlayer ? ` | <span style="color:#3498db;">MP:</span> ${Math.floor(c.mp)}/${c.maxMp}` : ''}
                    <p style="font-size:0.8rem; color:#ccc; margin: 8px 0; line-height: 1.3;">${c.desc}</p>
                    <div style="display:flex; flex-wrap:wrap; gap:5px; margin-top:5px;">${skillsHTML}</div>
                </div>
            </div>`; 
        });
        return html + `</div></div>`;
    };
    document.getElementById('infoModalBody').innerHTML = renderCol("YOUR PARTY", G.p.team) + renderCol("ENEMY TEAM", G.c.team);
    document.getElementById('infoModal').classList.remove('hidden');
}

function closeModals() { document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden')); }

function checkGameOver() {
    if (!G.p || !G.c) return false;
    const pAlive = G.p.team.some(c => c.currentHp > 0);
    const cAlive = G.c.team.some(c => c.currentHp > 0);
    if (!pAlive || !cAlive) {
        document.getElementById('pause-btn').classList.add('hidden');
        document.getElementById('command-panel').classList.remove('active-turn');
        document.getElementById('goTitle').innerText = pAlive ? "VICTORY!" : "DEFEAT";
        document.getElementById('goTitle').style.color = pAlive ? "var(--pixel-gold)" : "#ff5252";
        document.getElementById('goSub').innerText = pAlive ? "You crushed the enemy." : "Your party was wiped out.";
        
        if (!pAlive) playSFX('lose');
        
        pausableTimeout(() => showScreen('gameover'), 1500);
        return true;
    }
    return false;
}