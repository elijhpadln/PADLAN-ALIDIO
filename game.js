// ═══ SVG SPRITES ═══
const SVG = {
  // Fire lizard
  0:`<g>
    <rect x="11" y="14" width="10" height="10" fill="#cc4400" rx="2"/>
    <rect x="12" y="16" width="8" height="7" fill="#ff7744" rx="1"/>
    <rect x="10" y="7" width="12" height="9" fill="#cc4400" rx="3"/>
    <rect x="18" y="11" width="5" height="4" fill="#aa3300" rx="1"/>
    <rect x="12" y="9" width="3" height="3" fill="#ffee00" rx="1"/>
    <rect x="13" y="10" width="1" height="1" fill="#000"/>
    <polygon points="14,7 16,2 18,7" fill="#ff9900"/>
    <polygon points="10,7 12,3 14,7" fill="#ffcc00"/>
    <polygon points="5,12 11,14 8,22" fill="#ff5500" opacity=".8"/>
    <polygon points="27,12 21,14 24,22" fill="#ff5500" opacity=".8"/>
    <line x1="7" y1="13" x2="9" y2="20" stroke="#ff9900" stroke-width=".8" opacity=".6"/>
    <line x1="25" y1="13" x2="23" y2="20" stroke="#ff9900" stroke-width=".8" opacity=".6"/>
    <path d="M21,23 Q26,26 24,30 Q22,32 20,30" fill="none" stroke="#cc4400" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="22" cy="30" r="2" fill="#ff9900"/>
    <circle cx="22" cy="30" r="1" fill="#ffee00"/>
    <rect x="11" y="23" width="3" height="5" fill="#aa3300" rx="1"/>
    <rect x="18" y="23" width="3" height="5" fill="#aa3300" rx="1"/>
    <rect x="10" y="27" width="5" height="2" fill="#882200" rx="1"/>
    <rect x="17" y="27" width="5" height="2" fill="#882200" rx="1"/>
  </g>`,
  // Water serpent
  1:`<g>
    <ellipse cx="16" cy="19" rx="7" ry="5" fill="#0077aa"/>
    <ellipse cx="16" cy="19" rx="5" ry="3.5" fill="#00aadd"/>
    <rect x="13" y="11" width="6" height="9" fill="#0077aa" rx="2"/>
    <ellipse cx="16" cy="9" rx="6" ry="5" fill="#0077aa"/>
    <ellipse cx="22" cy="10" rx="3" ry="2" fill="#005588"/>
    <circle cx="14" cy="8" r="2" fill="#00ffcc"/>
    <circle cx="14" cy="8" r="1" fill="#003355"/>
    <circle cx="14.4" cy="7.6" r=".4" fill="#fff"/>
    <polygon points="10,6 8,2 12,5" fill="#00ccff" opacity=".9"/>
    <polygon points="16,4 16,0 20,4" fill="#00ccff" opacity=".9"/>
    <rect x="14" y="13" width="4" height="6" fill="#00ddff" rx="1"/>
    <path d="M22,20 Q28,22 26,27 Q24,30 20,28" fill="none" stroke="#0077aa" stroke-width="3" stroke-linecap="round"/>
    <polygon points="19,28 22,31 25,27" fill="#00aadd" opacity=".8"/>
    <polygon points="9,15 6,12 9,20" fill="#0099cc" opacity=".8"/>
    <polygon points="23,15 26,12 23,20" fill="#0099cc" opacity=".8"/>
    <circle cx="6" cy="10" r="1" fill="#00ccff" opacity=".5"/>
    <circle cx="5" cy="7" r=".7" fill="#00ccff" opacity=".4"/>
  </g>`,
  // Plant turtle
  2:`<g>
    <ellipse cx="16" cy="19" rx="9" ry="7" fill="#2d6a1f"/>
    <polygon points="16,13 20,16 20,21 16,24 12,21 12,16" fill="none" stroke="#4a9a30" stroke-width=".8"/>
    <line x1="16" y1="13" x2="16" y2="24" stroke="#4a9a30" stroke-width=".5" opacity=".6"/>
    <line x1="12" y1="16" x2="20" y2="21" stroke="#4a9a30" stroke-width=".5" opacity=".6"/>
    <line x1="20" y1="16" x2="12" y2="21" stroke="#4a9a30" stroke-width=".5" opacity=".6"/>
    <ellipse cx="14" cy="16" rx="2" ry="1.5" fill="#6abf45" opacity=".3"/>
    <ellipse cx="16" cy="11" rx="5" ry="4" fill="#3d8a2a"/>
    <rect x="19" y="11" width="4" height="3" fill="#2d6a1f" rx="1"/>
    <circle cx="14" cy="10" r="1.8" fill="#ffcc00"/>
    <circle cx="14" cy="10" r=".9" fill="#1a3d10"/>
    <circle cx="14.5" cy="9.5" r=".4" fill="#fff" opacity=".7"/>
    <polygon points="13,12 12,9 15,12" fill="#1a5c10"/>
    <polygon points="17,12 16,8 19,12" fill="#1a5c10"/>
    <polygon points="21,15 22,11 24,15" fill="#1a5c10"/>
    <polygon points="11,15 10,11 8,16" fill="#1a5c10"/>
    <path d="M7,17 Q4,14 5,10 Q6,7 8,8" fill="none" stroke="#4a9a30" stroke-width="1.2" stroke-linecap="round"/>
    <circle cx="8" cy="8" r="1.5" fill="#69db7c"/>
    <ellipse cx="10" cy="24" rx="3" ry="2" fill="#3d8a2a"/>
    <ellipse cx="22" cy="24" rx="3" ry="2" fill="#3d8a2a"/>
    <rect x="13" y="25" width="3" height="3" fill="#3d8a2a" rx="1"/>
    <rect x="16" y="25" width="3" height="3" fill="#3d8a2a" rx="1"/>
  </g>`,
  // Lightning wolf
  3:`<g>
    <ellipse cx="15" cy="19" rx="8" ry="6" fill="#3d3d00"/>
    <ellipse cx="15" cy="18" rx="6" ry="4.5" fill="#5a5500"/>
    <path d="M10,16 L13,19 L11,22 L14,20 L12,23" fill="none" stroke="#ffd60a" stroke-width="1" opacity=".8"/>
    <path d="M18,15 L20,18 L18,21" fill="none" stroke="#ffd60a" stroke-width=".8" opacity=".6"/>
    <rect x="12" y="11" width="7" height="9" fill="#4a4a00" rx="2"/>
    <ellipse cx="16" cy="10" rx="7" ry="6" fill="#3d3d00"/>
    <polygon points="10,6 8,1 13,6" fill="#3d3d00"/>
    <polygon points="11,5 10,2 13,5" fill="#ffd60a" opacity=".5"/>
    <polygon points="22,6 24,1 19,6" fill="#3d3d00"/>
    <polygon points="21,5 22,2 19,5" fill="#ffd60a" opacity=".5"/>
    <circle cx="13" cy="9" r="2.5" fill="#ffd60a"/>
    <circle cx="13" cy="9" r="1.2" fill="#2a2a00"/>
    <circle cx="13.5" cy="8.5" r=".5" fill="#fff" opacity=".8"/>
    <ellipse cx="20" cy="11" rx="3.5" ry="2.5" fill="#2a2a00"/>
    <ellipse cx="20" cy="10.5" rx="2" ry="1.2" fill="#4a4a00"/>
    <circle cx="21" cy="10" r=".6" fill="#1a0000"/>
    <path d="M6,8 L8,5 L7,9 L9,6" fill="none" stroke="#ffd60a" stroke-width=".8" opacity=".7"/>
    <path d="M26,8 L24,5 L25,9 L23,6" fill="none" stroke="#ffd60a" stroke-width=".8" opacity=".7"/>
    <path d="M23,22 Q28,20 27,25 Q26,28 23,27" fill="none" stroke="#4a4a00" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="25,22 23,25 25,24 23,27" fill="#ffd60a" opacity=".9"/>
    <rect x="10" y="23" width="3" height="5" fill="#3d3d00" rx="1"/>
    <rect x="19" y="23" width="3" height="5" fill="#3d3d00" rx="1"/>
    <rect x="9" y="27" width="5" height="2" fill="#2a2a00" rx="1"/>
    <rect x="18" y="27" width="5" height="2" fill="#2a2a00" rx="1"/>
    <path d="M9,29 L8,31 M11,29 L10,31 M13,29 L12,31" stroke="#ffd60a" stroke-width=".7"/>
  </g>`,
  // Ice bear
  4:`<g>
    <ellipse cx="16" cy="20" rx="9" ry="7" fill="#b0d8e8"/>
    <ellipse cx="16" cy="21" rx="6" ry="5" fill="#d8f0f8"/>
    <polygon points="10,13 9,9 12,13" fill="#88ccee" opacity=".8"/>
    <polygon points="15,12 14,7 18,12" fill="#aaddff" opacity=".9"/>
    <polygon points="20,13 21,8 23,13" fill="#88ccee" opacity=".8"/>
    <rect x="12" y="12" width="8" height="9" fill="#b0d8e8" rx="2"/>
    <ellipse cx="16" cy="11" rx="7.5" ry="6" fill="#c8e8f5"/>
    <circle cx="10" cy="7" r="3" fill="#b0d8e8"/>
    <circle cx="10" cy="7" r="1.5" fill="#d8f0f8"/>
    <circle cx="22" cy="7" r="3" fill="#b0d8e8"/>
    <circle cx="22" cy="7" r="1.5" fill="#d8f0f8"/>
    <circle cx="13" cy="10" r="2" fill="#003355"/>
    <circle cx="13" cy="10" r="1" fill="#0066aa"/>
    <circle cx="13.4" cy="9.5" r=".5" fill="#fff"/>
    <ellipse cx="20" cy="12" rx="3" ry="2" fill="#a0c8e0"/>
    <ellipse cx="20" cy="11.5" rx="1.8" ry="1.2" fill="#b8d8f0"/>
    <circle cx="20.5" cy="11" r=".8" fill="#003355"/>
    <circle cx="25" cy="11" r="1.5" fill="#d8f0f8" opacity=".7"/>
    <circle cx="27" cy="10" r="1" fill="#d8f0f8" opacity=".5"/>
    <path d="M14,20 Q16,18 18,20" fill="none" stroke="#88ccee" stroke-width=".8" opacity=".5"/>
    <ellipse cx="10" cy="25" rx="3.5" ry="2.5" fill="#b0d8e8"/>
    <ellipse cx="22" cy="25" rx="3.5" ry="2.5" fill="#b0d8e8"/>
    <rect x="12" y="25" width="4" height="4" fill="#a0c8e0" rx="1"/>
    <rect x="16" y="25" width="4" height="4" fill="#a0c8e0" rx="1"/>
    <path d="M12,29 L11,31 M14,29 L13,31" stroke="#668899" stroke-width=".7"/>
    <path d="M18,29 L19,31 M20,29 L21,31" stroke="#668899" stroke-width=".7"/>
  </g>`,
  // Shadow cat
  5:`<g>
    <ellipse cx="16" cy="22" rx="10" ry="4" fill="#6600aa" opacity=".2"/>
    <ellipse cx="15" cy="19" rx="7" ry="5.5" fill="#1a0033"/>
    <ellipse cx="15" cy="20" rx="4.5" ry="3.5" fill="#2d0055"/>
    <path d="M12,17 Q15,15 18,17" fill="none" stroke="#9933cc" stroke-width=".8" opacity=".7"/>
    <circle cx="15" cy="21" r="1" fill="#9933cc" opacity=".5"/>
    <rect x="12" y="10" width="6" height="10" fill="#1a0033" rx="2"/>
    <ellipse cx="15" cy="9" rx="7" ry="6" fill="#1a0033"/>
    <polygon points="9,5 7,0 12,5" fill="#1a0033"/>
    <polygon points="10,4 9,1 12,4" fill="#6600aa" opacity=".6"/>
    <polygon points="21,5 23,0 18,5" fill="#1a0033"/>
    <polygon points="20,4 21,1 18,4" fill="#6600aa" opacity=".6"/>
    <ellipse cx="12" cy="9" rx="3" ry="2.5" fill="#cc33ff"/>
    <ellipse cx="12" cy="9" rx="1.5" ry="2" fill="#220033"/>
    <ellipse cx="12.3" cy="8.3" rx=".6" ry=".8" fill="#ee66ff" opacity=".8"/>
    <ellipse cx="19" cy="9" rx="3" ry="2.5" fill="#cc33ff"/>
    <ellipse cx="19" cy="9" rx="1.5" ry="2" fill="#220033"/>
    <ellipse cx="19.3" cy="8.3" rx=".6" ry=".8" fill="#ee66ff" opacity=".8"/>
    <line x1="8" y1="11" x2="3" y2="10" stroke="#9933cc" stroke-width=".6" opacity=".7"/>
    <line x1="8" y1="12" x2="3" y2="13" stroke="#9933cc" stroke-width=".6" opacity=".7"/>
    <line x1="22" y1="11" x2="27" y2="10" stroke="#9933cc" stroke-width=".6" opacity=".7"/>
    <line x1="22" y1="12" x2="27" y2="13" stroke="#9933cc" stroke-width=".6" opacity=".7"/>
    <circle cx="5" cy="8" r="1.2" fill="#6600aa" opacity=".5"/>
    <circle cx="4" cy="5" r=".8" fill="#6600aa" opacity=".4"/>
    <path d="M22,21 Q28,19 27,24 Q26,28 22,27 Q20,26 21,24" fill="none" stroke="#1a0033" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="22" cy="27" r="2.5" fill="#6600aa"/>
    <circle cx="22" cy="27" r="1.2" fill="#cc33ff"/>
    <rect x="11" y="23" width="3" height="5" fill="#1a0033" rx="1"/>
    <rect x="18" y="23" width="3" height="5" fill="#1a0033" rx="1"/>
    <ellipse cx="12.5" cy="28" rx="2.5" ry="1.5" fill="#110022"/>
    <ellipse cx="19.5" cy="28" rx="2.5" ry="1.5" fill="#110022"/>
  </g>`,
};

// ═══ CREATURE DATA ═══
const CREATURES = [
  { id:0, name:'Emberwing',    type:'Fire',      color:'#ff6b35', maxHp:420, atk:10, spd:8,
    moves:[
      {id:'0_0',name:'Flame Slash', type:'attack',cost:1,power:80,  emoji:'⚔️',desc:'80 fire dmg'},
      {id:'0_1',name:'Inferno',     type:'attack',cost:3,power:160, emoji:'🔥',desc:'160 blast'},
      {id:'0_2',name:'Dragonscale', type:'shield', cost:1,power:60,  emoji:'🛡️',desc:'+60 shield'},
      {id:'0_3',name:'Ember Surge', type:'aoe',   cost:2,power:45,  emoji:'💥',desc:'45 AOE all'},
    ]},
  { id:1, name:'Tidecaller',  type:'Water',     color:'#4ecdc4', maxHp:380, atk:5,  spd:6,
    moves:[
      {id:'1_0',name:'Tidal Wave',   type:'attack',cost:2,power:110,emoji:'🌊',desc:'110 wave dmg'},
      {id:'1_1',name:'Heal Spring',  type:'heal',  cost:1,power:90, emoji:'💚',desc:'+90 HP'},
      {id:'1_2',name:'Aqua Barrier', type:'shield',cost:1,power:55, emoji:'🛡️',desc:'+55 shield'},
      {id:'1_3',name:'Flood',        type:'aoe',   cost:3,power:55, emoji:'💦',desc:'55 AOE all'},
    ]},
  { id:2, name:'Thornback',   type:'Plant',     color:'#56ab2f', maxHp:520, atk:0,  spd:4,
    moves:[
      {id:'2_0',name:'Vine Whip',     type:'attack',cost:1,power:70, emoji:'🌱',desc:'70 dmg'},
      {id:'2_1',name:'Natures Grasp', type:'aoe',   cost:3,power:55, emoji:'🌲',desc:'55 AOE all'},
      {id:'2_2',name:'Photosynthesis',type:'heal',  cost:1,power:120,emoji:'💚',desc:'+120 HP'},
      {id:'2_3',name:'Thorn Armor',   type:'shield',cost:2,power:90, emoji:'🛡️',desc:'+90 shield'},
    ]},
  { id:3, name:'Stormclaw',   type:'Lightning', color:'#f7971e', maxHp:360, atk:15, spd:10,
    moves:[
      {id:'3_0',name:'Thunder Strike',type:'attack',cost:1,power:95, emoji:'⚡',desc:'95 dmg'},
      {id:'3_1',name:'Volt Chain',    type:'aoe',   cost:2,power:45, emoji:'🌩️',desc:'45 AOE all'},
      {id:'3_2',name:'Power Surge',   type:'buff',  cost:1,power:0,  emoji:'💪',atkBoost:25,desc:'+25 ATK'},
      {id:'3_3',name:'Overcharge',    type:'attack',cost:3,power:180,emoji:'🔱',desc:'180 dmg'},
    ]},
  { id:4, name:'Frostmane',   type:'Ice',       color:'#a8edea', maxHp:460, atk:8,  spd:5,
    moves:[
      {id:'4_0',name:'Blizzard',  type:'aoe',   cost:2,power:60, emoji:'❄️',desc:'60 AOE all'},
      {id:'4_1',name:'Ice Fang',  type:'attack',cost:1,power:90, emoji:'🐺',desc:'90 dmg'},
      {id:'4_2',name:'Frost Armor',type:'shield',cost:1,power:85, emoji:'🛡️',desc:'+85 shield'},
      {id:'4_3',name:'Glacial Ray',type:'attack',cost:3,power:150,emoji:'🌨️',desc:'150 dmg'},
    ]},
  { id:5, name:'Shadowpounce',type:'Dark',      color:'#7c3aed', maxHp:340, atk:20, spd:12,
    moves:[
      {id:'5_0',name:'Dark Slash', type:'attack',cost:1,power:115,emoji:'🌑',desc:'115 dmg'},
      {id:'5_1',name:'Soul Drain', type:'heal',  cost:2,power:70, emoji:'💜',desc:'+70 HP'},
      {id:'5_2',name:'Nightmare',  type:'attack',cost:3,power:170,emoji:'👁️',desc:'170 dmg'},
      {id:'5_3',name:'Void Shield',type:'shield',cost:1,power:50, emoji:'🛡️',desc:'+50 shield'},
    ]},
];

// ═══ TYPE COLORS for move badges ═══
// ═══ TYPE COLORS ═══
const TYPE_COLORS={
  attack:'#c0392b', aoe:'#8e44ad', heal:'#27ae60',
  shield:'#2980b9', buff:'#f39c12'
};

// ═══ STATE ═══
let G={};
let isAnimating=false;
let cpuQueue=[];
let bStats={pm:0,cm:0,dmg:0};

// ═══ UTILS ═══
const clone=x=>JSON.parse(JSON.stringify(x));
const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=rnd(0,i);[a[i],a[j]]=[a[j],a[i]]}; return a;};

function buildCreature(base){return{...clone(base),currentHp:base.maxHp,shield:0,atkBonus:0,alive:true};}
function buildDeck(c){let d=[];c.moves.forEach(m=>{for(let i=0;i<4;i++)d.push(clone(m))});return shuffle(d);}
function drawCards(st,n=1){
  for(let i=0;i<n;i++){
    if(st.deck.length===0){st.deck=shuffle([...st.discard]);st.discard=[];}
    if(st.deck.length>0&&st.hand.length<6)st.hand.push(st.deck.shift());
  }
}
function aliveOf(team){return team.filter(c=>c.currentHp>0);}

// ═══ BACKGROUND SCENERY ═══
function buildScenery(){
  const svg=document.getElementById('scenerySvg');
  const stageEl=document.getElementById('stage');
  const W=stageEl.offsetWidth||800;
  const H=stageEl.offsetHeight||280;
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio','xMidYMid slice');
  const groundY=H*0.42;

  // Distant mountains — 3 layers for depth
  const mountains=`
    <polygon points="0,${groundY} ${W*0.08},${groundY*0.45} ${W*0.18},${groundY*0.72} ${W*0.28},${groundY*0.32} ${W*0.38},${groundY*0.6} ${W*0.5},${groundY*0.18} ${W*0.62},${groundY*0.5} ${W*0.72},${groundY*0.28} ${W*0.82},${groundY*0.55} ${W*0.9},${groundY*0.38} ${W},${groundY*0.62} ${W},${groundY} 0,${groundY}" fill="#1a3860" opacity=".7"/>
    <polygon points="0,${groundY} ${W*0.05},${groundY*0.58} ${W*0.14},${groundY*0.8} ${W*0.22},${groundY*0.48} ${W*0.32},${groundY*0.7} ${W*0.44},${groundY*0.35} ${W*0.56},${groundY*0.65} ${W*0.65},${groundY*0.45} ${W*0.76},${groundY*0.68} ${W*0.86},${groundY*0.5} ${W*0.95},${groundY*0.72} ${W},${groundY*0.62} ${W},${groundY} 0,${groundY}" fill="#0f2548" opacity=".55"/>
    <polygon points="0,${groundY} ${W*0.1},${groundY*0.7} ${W*0.2},${groundY*0.88} ${W*0.3},${groundY*0.62} ${W*0.42},${groundY*0.82} ${W*0.54},${groundY*0.55} ${W*0.66},${groundY*0.78} ${W*0.75},${groundY*0.6} ${W*0.88},${groundY*0.8} ${W},${groundY*0.72} ${W},${groundY} 0,${groundY}" fill="#0a1830" opacity=".4"/>
    <line x1="0" y1="${groundY}" x2="${W}" y2="${groundY}" stroke="rgba(255,200,80,.12)" stroke-width="2"/>
  `;

  // Tall pine tree
  function pine(x,y,s){
    return `<g transform="translate(${x},${y}) scale(${s||1})">
      <rect x="-4" y="15" width="8" height="12" fill="#4a2e0e" rx="1"/>
      <polygon points="0,-28 -16,0 16,0" fill="#174d10"/>
      <polygon points="0,-38 -13,-10 13,-10" fill="#1d5e14"/>
      <polygon points="0,-46 -10,-20 10,-20" fill="#22701a"/>
      <polygon points="0,-52 -7,-30 7,-30" fill="#278020"/>
      <polygon points="-4,-28 -16,0 0,-6" fill="#0e3008" opacity=".5"/>
      <polygon points="-3,-38 -13,-10 0,-14" fill="#0e3008" opacity=".4"/>
    </g>`;
  }
  // Broad deciduous tree
  function broadtree(x,y,s){
    return `<g transform="translate(${x},${y}) scale(${s||1})">
      <rect x="-5" y="10" width="10" height="18" fill="#5a3a1a" rx="2"/>
      <ellipse cx="0" cy="-10" rx="22" ry="18" fill="#1e6e12"/>
      <ellipse cx="-10" cy="-5" rx="16" ry="13" fill="#175a0e"/>
      <ellipse cx="10" cy="-8" rx="18" ry="15" fill="#238a18"/>
      <ellipse cx="0" cy="-18" rx="14" ry="12" fill="#2a9a1e"/>
    </g>`;
  }
  // Bush
  function bush(x,y,s){
    return `<g transform="translate(${x},${y}) scale(${s||1})">
      <ellipse cx="0" cy="0" rx="20" ry="13" fill="#246618"/>
      <ellipse cx="-11" cy="2" rx="13" ry="10" fill="#1c5212"/>
      <ellipse cx="12" cy="1" rx="15" ry="11" fill="#2a7a1e"/>
      <ellipse cx="0" cy="-5" rx="11" ry="9" fill="#32901e"/>
    </g>`;
  }
  // Tall grass tuft
  function grass(x,y,s){
    return `<g transform="translate(${x},${y}) scale(${s||1})">
      <line x1="0" y1="0" x2="-4" y2="-14" stroke="#4a9830" stroke-width="2" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="0" y2="-18" stroke="#58a838" stroke-width="2" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="5" y2="-15" stroke="#4a9830" stroke-width="2" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="-7" y2="-10" stroke="#3a7820" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="8" y2="-11" stroke="#3a7820" stroke-width="1.5" stroke-linecap="round"/>
    </g>`;
  }
  // Rock
  function rock(x,y,s){
    return `<g transform="translate(${x},${y}) scale(${s||1})">
      <ellipse cx="0" cy="0" rx="18" ry="10" fill="#3a4050"/>
      <ellipse cx="-4" cy="-3" rx="14" ry="8" fill="#4a5060"/>
      <ellipse cx="4" cy="-4" rx="10" ry="6" fill="#565c6e"/>
      <ellipse cx="-6" cy="-2" rx="5" ry="3" fill="#6a7080" opacity=".4"/>
    </g>`;
  }
  // Flowers
  function flowers(x,y,s){
    return `<g transform="translate(${x},${y}) scale(${s||1})">
      <circle cx="0" cy="-5" r="3.5" fill="#ffee44" opacity=".9"/>
      <circle cx="10" cy="-3" r="3" fill="#ff88aa" opacity=".9"/>
      <circle cx="-8" cy="-2" r="2.5" fill="#88aaff" opacity=".9"/>
      <circle cx="5" cy="-8" r="2" fill="#ff9944" opacity=".85"/>
      <line x1="0" y1="0" x2="0" y2="-4" stroke="#5a9830" stroke-width="1.2"/>
      <line x1="10" y1="0" x2="10" y2="-2" stroke="#5a9830" stroke-width="1.2"/>
      <line x1="-8" y1="0" x2="-8" y2="-1" stroke="#5a9830" stroke-width="1.2"/>
    </g>`;
  }

  let c = mountains;

  // === FAR BACKGROUND TREES (behind horizon, very small) ===
  c+=pine(W*0.05,groundY+1,0.45);
  c+=pine(W*0.09,groundY-2,0.52);
  c+=pine(W*0.87,groundY+1,0.48);
  c+=pine(W*0.91,groundY-1,0.55);
  c+=pine(W*0.95,groundY+2,0.42);
  c+=broadtree(W*0.13,groundY+2,0.5);
  c+=broadtree(W*0.83,groundY+1,0.5);

  // === MID TREES ===
  c+=pine(W*0.28,groundY+10,0.85);
  c+=pine(W*0.34,groundY+6,0.95);
  c+=pine(W*0.4,groundY+8,0.78);
  c+=broadtree(W*0.45,groundY+10,0.75);
  c+=pine(W*0.62,groundY+7,0.82);
  c+=pine(W*0.68,groundY+5,0.92);
  c+=broadtree(W*0.74,groundY+9,0.8);
  c+=pine(W*0.79,groundY+6,0.88);

  // === FOREGROUND ROCKS ===
  c+=rock(W*0.07,H*0.53,0.7);
  c+=rock(W*0.88,H*0.52,0.65);
  c+=rock(W*0.5,H*0.51,0.5);

  // === FOREGROUND BUSHES ===
  c+=bush(W*0.02,H*0.56,0.8);
  c+=bush(W*0.1,H*0.57,0.65);
  c+=bush(W*0.18,H*0.55,0.58);
  c+=bush(W*0.43,H*0.54,0.72);
  c+=bush(W*0.57,H*0.55,0.82);
  c+=bush(W*0.82,H*0.54,0.7);
  c+=bush(W*0.9,H*0.56,0.62);
  c+=bush(W*0.97,H*0.55,0.55);

  // === GRASS TUFTS ===
  for(let gx=0.03;gx<1;gx+=0.06){
    if(gx>0.19&&gx<0.28) continue; // gap for player
    if(gx>0.58&&gx<0.66) continue; // gap for enemy
    c+=grass(W*gx,H*0.59,0.7+Math.random()*0.4);
  }

  // === FLOWERS ===
  c+=flowers(W*0.05,H*0.62,0.9);
  c+=flowers(W*0.16,H*0.61,0.8);
  c+=flowers(W*0.47,H*0.60,1.0);
  c+=flowers(W*0.8,H*0.62,0.85);
  c+=flowers(W*0.93,H*0.61,0.75);

  svg.innerHTML=c;
}

// ═══ CLOUD GENERATOR ═══
function buildClouds(){
  const layer=document.getElementById('cloudLayer');
  if(!layer)return;
  layer.innerHTML='';
  // Build double-width of SVG clouds
  for(let pass=0;pass<2;pass++){
    const offX=pass===1?50:0; // second set offset by 50%
    [
      {x:5+offX,y:18,w:180,h:55},
      {x:22+offX,y:28,w:220,h:65},
      {x:14+offX,y:55,w:150,h:40},
      {x:38+offX,y:10,w:160,h:50},
      {x:55+offX,y:35,w:200,h:60},
      {x:68+offX,y:15,w:170,h:52},
      {x:82+offX,y:42,w:140,h:45},
    ].forEach(c=>{
      const el=document.createElement('div');
      el.style.cssText=`
        position:absolute;
        left:${c.x}%;top:${c.y}%;
        width:${c.w}px;height:${c.h}px;
        background:rgba(255,255,255,${0.55+Math.random()*0.2});
        border-radius:50px;
        filter:blur(${6+Math.random()*4}px);
        pointer-events:none;
      `;
      layer.appendChild(el);
    });
  }
}

// ═══ INIT ═══
function startGame(){
  G.playerName=document.getElementById('playerName').value.trim()||'Trainer';
  G.selectedTeam=[];
  showScreen('team');
  renderTeamSelect();
}

function confirmTeam(){
  if(G.selectedTeam.length!==3)return;
  const cpuIds=getCpuTeam(G.selectedTeam);
  initBattle(G.selectedTeam,cpuIds);
  showScreen('battle');
}

function getCpuTeam(pIds){
  const o=CREATURES.filter(c=>!pIds.includes(c.id)).map(c=>c.id);
  return shuffle(o.length>=3?o:CREATURES.map(c=>c.id)).slice(0,3);
}

function initBattle(pIds,cIds){
  const mk=ids=>{
    const team=ids.map(id=>buildCreature(CREATURES[id]));
    const active=team[0];
    return{team,active,deck:buildDeck(active),hand:[],discard:[],energy:3,maxEnergy:3};
  };
  G.p=mk(pIds); G.c=mk(cIds);
  G.round=1; G.turn='player'; G.over=false;
  bStats={pm:0,cm:0,dmg:0};
  G.cpuName=['Rival Zed','Shadow Kai','Storm Nova','Chaos Rex'][rnd(0,3)];

  drawCards(G.p,3); drawCards(G.c,3);

  document.getElementById('cpuThinkName').textContent=G.cpuName;

  setSprite('playerSvg',G.p.active.id);
  setSprite('enemySvg',G.c.active.id);
  renderBattleUI();
  typeText(`A wild ${G.c.active.name} appeared!\nGo, ${G.p.active.name}!`);
}

// ═══ SPRITE with 3D lighting overlay ═══
function setSprite(svgId,cid){
  const svg=document.getElementById(svgId);
  const c=CREATURES[cid];
  svg.innerHTML=SVG[cid]+`
    <radialGradient id="light3d_${svgId}" cx="35%" cy="25%" r="65%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.35"/>
    </radialGradient>
    <rect x="0" y="0" width="32" height="32" fill="url(#light3d_${svgId})" rx="2"/>
  `;
  svg.style.filter=`drop-shadow(0 6px 18px ${c.color}cc) drop-shadow(-3px -3px 6px rgba(255,255,255,.1))`;
  const dotId=svgId==='playerSvg'?'playerTypeDot':'enemyTypeDot';
  const dot=document.getElementById(dotId);
  if(dot)dot.style.background=c.color;
  // Also update portrait
  const isPlayer=svgId==='playerSvg';
  const psvg=document.getElementById(isPlayer?'playerPortrait':'enemyPortrait');
  const pname=document.getElementById(isPlayer?'playerPortraitName':'enemyPortraitName');
  if(psvg){psvg.innerHTML=SVG[cid];psvg.style.filter=`drop-shadow(0 3px 10px ${c.color}99)`;}
  if(pname)pname.textContent=c.type.toUpperCase();
}

// ═══ TYPEWRITER dialogue ═══
let _typeTimer=null;
function typeText(txt){
  const el=document.getElementById('dlgTxt');
  if(_typeTimer)clearInterval(_typeTimer);
  el.textContent='';
  let i=0;
  const flat=txt.replace(/\n/g,' ');
  _typeTimer=setInterval(()=>{
    el.textContent+=flat[i];i++;
    if(i>=flat.length)clearInterval(_typeTimer);
  },28);
}
function say(t){typeText(t);}

// ═══ UI ═══
function renderBattleUI(){
  if(!G.p)return;
  const isMine=G.turn==='player'&&!G.over;

  const gems=document.getElementById('eGems'); gems.innerHTML='';
  const show=Math.min(G.p.maxEnergy,10);
  for(let i=0;i<show;i++){const g=document.createElement('div');g.className='e-gem'+(i<G.p.energy?' lit':'');gems.appendChild(g);}
  document.getElementById('eCnt').textContent=`${G.p.energy}/${G.p.maxEnergy}`;

  renderMoves(G.p.hand,G.p.energy,isMine);
  document.getElementById('endTurnBtn').disabled=!isMine||isAnimating;
  document.getElementById('actionMenu').style.display=isMine?'flex':'none';
  document.getElementById('dialogueBox').style.flex=isMine?'0 0 58%':'1';

  updateHpBars();
  renderTeamDots();

  document.getElementById('playerLevel').textContent=`Lv.${G.p.active.spd+5}`;
  document.getElementById('enemyLevel').textContent=`Lv.${G.c.active.spd+5}`;
}

function updateHpBars(){
  const p=G.p.active,e=G.c.active;
  const col=pct=>pct>60?'var(--hp-green)':pct>25?'var(--hp-yellow)':'var(--hp-red)';
  const pp=Math.max(0,p.currentHp/p.maxHp*100), ep=Math.max(0,e.currentHp/e.maxHp*100);

  document.getElementById('playerCName').textContent=p.name;
  document.getElementById('playerFill').style.cssText=`width:${pp}%;background:${col(pp)}`;
  document.getElementById('playerNums').textContent=`${p.currentHp} / ${p.maxHp}`;
  let ps=''; if(p.shield>0)ps+=`<span style="color:#90caf9">🛡️${p.shield}</span> `;
  if(p.atkBonus>0)ps+=`<span style="color:var(--gold)">+${p.atkBonus}ATK</span>`;
  document.getElementById('playerStat').innerHTML=ps;

  document.getElementById('enemyName').textContent=e.name;
  document.getElementById('enemyFill').style.cssText=`width:${ep}%;background:${col(ep)}`;
  let es=''; if(e.shield>0)es+=`<span style="color:#90caf9">🛡️${e.shield}</span> `;
  if(e.atkBonus>0)es+=`<span style="color:var(--gold)">+${e.atkBonus}ATK</span>`;
  document.getElementById('enemyStat').innerHTML=es;

  // Stat rows
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  set('pStatDef',Math.round(p.maxHp/50)); set('pStatAcc',100); set('pStatDmg',p.atk+(p.atkBonus||0)); set('pStatSpd',p.spd);
  set('eStatDef',Math.round(e.maxHp/50)); set('eStatAcc',100); set('eStatDmg',e.atk+(e.atkBonus||0)); set('eStatSpd',e.spd);
}

function renderTeamDots(){
  const render=(cid,state)=>{
    const el=document.getElementById(cid); el.innerHTML='';
    state.team.forEach(c=>{
      const d=document.createElement('div'); d.className='t-dot';
      if(c.currentHp<=0)d.classList.add('fainted');
      else if(c===state.active)d.classList.add('active');
      el.appendChild(d);
    });
  };
  render('playerDots',G.p);
  render('enemyDots',G.c);
}

function renderMoves(hand,energy,isMine){
  const row=document.getElementById('movesRow'); row.innerHTML='';
  if(!hand)return;
  const seen=new Set();
  hand.forEach(card=>{
    if(seen.has(card.name))return; seen.add(card.name);
    const ok=card.cost<=energy&&isMine;
    const btn=document.createElement('button');
    btn.className='mv-btn'+(ok?'':' nrg');
    const typeBg=TYPE_COLORS[card.type]||'#555';
    const c=CREATURES.find(cr=>cr.moves.find(m=>m.id===card.id));
    btn.style.setProperty('--mv-color',typeBg);
    btn.innerHTML=`
      <div class="mv-cost">${card.cost}</div>
      <span class="mv-emoji">${card.emoji||'⚔️'}</span>
      <div class="mv-name">${card.name}</div>
      <div class="mv-desc">${card.desc}</div>
      <span class="mv-type-badge" style="background:${typeBg}">${card.type.toUpperCase()}</span>`;
    if(ok)btn.onclick=()=>playerUseMove(card);
    row.appendChild(btn);
  });
}

// ═══ TURN FLOW ═══
function playerUseMove(card){
  if(G.turn!=='player'||isAnimating||G.over)return;
  if(card.cost>G.p.energy)return;
  executeMove('player',card);
}

function playerEndTurn(){
  if(G.turn!=='player'||isAnimating||G.over)return;
  G.turn='cpu';
  say(`${G.p.active.name} is waiting...`);
  renderBattleUI();
  setTimeout(()=>doCpuTurn(),700);
}

function startPlayerTurn(){
  G.turn='player'; G.round++;
  G.p.maxEnergy=Math.min(G.p.maxEnergy+1,10);
  G.p.energy=G.p.maxEnergy;
  G.p.active.atkBonus=0; G.c.active.atkBonus=0;
  drawCards(G.p,2);
  say(`Round ${G.round} — What will ${G.p.active.name} do?`);
  renderBattleUI();
  if(checkOver())return;
}

// ═══ MOVE EXECUTION ═══
function executeMove(who,card){
  isAnimating=true;
  const isP=who==='player';
  const actor=isP?G.p:G.c;
  const enemy=isP?G.c:G.p;

  actor.energy-=card.cost;
  const idx=actor.hand.findIndex(c=>c.id===card.id);
  if(idx!==-1){actor.discard.push(actor.hand.splice(idx,1)[0]);}
  if(isP)bStats.pm++; else bStats.cm++;

  const atkSvg=document.getElementById(isP?'playerSvg':'enemySvg');
  const defSvg=document.getElementById(isP?'enemySvg':'playerSvg');

  if(card.type==='attack'||card.type==='aoe'){
    atkSvg.style.animation='none'; void atkSvg.offsetWidth;
    atkSvg.style.animation=isP?'lunge .55s ease':'lungeE .55s ease';
    setTimeout(()=>atkSvg.style.animation='',650);
  }

  setTimeout(()=>{
    const stage=document.getElementById('stage');
    const sr=stage.getBoundingClientRect();
    let msg='';

    if(card.type==='attack'){
      const dmg=calcDmg(card.power+actor.active.atkBonus,enemy.active);
      enemy.active.currentHp=Math.max(0,enemy.active.currentHp-dmg);
      bStats.dmg+=dmg;
      doHitAnim(defSvg,isP?'enemy':'player');
      spawnNum(`-${dmg}`,defSvg,sr,'dmg');
      spawnFx(card.emoji,defSvg,sr);
      msg=`${actor.active.name} used ${card.name}! ${dmg} damage!`;

    } else if(card.type==='aoe'){
      // ✅ AOE hits ALL alive enemies
      let totalDmg=0;
      enemy.team.forEach(target=>{
        if(target.currentHp>0){
          const dmg=calcDmg(card.power+actor.active.atkBonus,target);
          target.currentHp=Math.max(0,target.currentHp-dmg);
          bStats.dmg+=dmg; totalDmg+=dmg;
        }
      });
      const flash=document.createElement('div');
      flash.className='aoe-flash'; stage.appendChild(flash);
      setTimeout(()=>flash.remove(),550);
      doHitAnim(defSvg,isP?'enemy':'player');
      spawnNum(`-${totalDmg}`,defSvg,sr,'dmg');
      spawnFx(card.emoji,defSvg,sr);
      msg=`${actor.active.name} used ${card.name}! Hit all for ${totalDmg} total!`;

    } else if(card.type==='heal'){
      const old=actor.active.currentHp;
      actor.active.currentHp=Math.min(actor.active.maxHp,actor.active.currentHp+card.power);
      const actual=actor.active.currentHp-old;
      doHealAnim(atkSvg,isP);
      spawnNum(`+${actual}`,atkSvg,sr,'heal');
      spawnFx(card.emoji,atkSvg,sr);
      msg=`${actor.active.name} used ${card.name}! +${actual} HP!`;

    } else if(card.type==='shield'){
      actor.active.shield+=card.power;
      doHealAnim(atkSvg,isP);
      spawnNum(`🛡️+${card.power}`,atkSvg,sr,'shld');
      spawnFx(card.emoji,atkSvg,sr);
      msg=`${actor.active.name} used ${card.name}! +${card.power} DEF!`;

    } else if(card.type==='buff'){
      actor.active.atkBonus=(actor.active.atkBonus||0)+(card.atkBoost||0);
      doHealAnim(atkSvg,isP);
      spawnNum(`⚡+${card.atkBoost}`,atkSvg,sr,'buff');
      spawnFx(card.emoji,atkSvg,sr);
      msg=`${actor.active.name} used ${card.name}! +${card.atkBoost} ATK!`;
    }

    say(msg);
    updateHpBars();
    renderTeamDots();

    setTimeout(()=>{
      isAnimating=false;
      if(enemy.active.currentHp<=0){
        handleFaint(enemy,isP?'enemy':'player');
      } else {
        renderBattleUI();
        if(who==='cpu') setTimeout(()=>continueCpu(),600);
      }
    },480);
  },330);
}

function calcDmg(power,target){
  let d=power;
  if(target.shield>0){const abs=Math.min(target.shield,d);target.shield-=abs;d-=abs;}
  return Math.max(1,d);
}

// ═══ FAINT ═══
function handleFaint(state,side){
  const svgId=side==='enemy'?'enemySvg':'playerSvg';
  const svg=document.getElementById(svgId);
  svg.style.animation='none'; void svg.offsetWidth;
  svg.style.animation=side==='enemy'?'deathFallE .9s ease forwards':'deathFall .9s ease forwards';
  say(`${state.active.name} fainted!`);
  renderTeamDots();

  setTimeout(()=>{
    const next=state.team.find(c=>c.id!==state.active.id&&c.currentHp>0);
    if(next){
      state.active=next;
      state.deck=buildDeck(next);
      state.discard=[];
      drawCards(state,2);
      svg.style.animation='';
      setSprite(svgId,next.id);
      if(side==='player')document.getElementById('playerLevel').textContent=`Lv.${next.spd+5}`;
      else document.getElementById('enemyLevel').textContent=`Lv.${next.spd+5}`;
      say(`Go, ${next.name}!`);
      setTimeout(()=>{
        if(checkOver())return;
        renderBattleUI();
        if(G.turn==='cpu')setTimeout(()=>continueCpu(),600);
      },600);
    } else {
      checkOver();
    }
  },950);
}

// ═══ ANIMATIONS ═══
function doHitAnim(svg,side){
  svg.style.animation='none'; void svg.offsetWidth;
  svg.style.animation=side==='enemy'?'hitE .5s ease':'hit .5s ease';
  setTimeout(()=>svg.style.animation='',600);
  const hudId=side==='enemy'?'enemyHud':'playerHud';
  const box=document.getElementById(hudId);
  box.style.animation='hudFlash .4s ease';
  setTimeout(()=>box.style.animation='',450);
}

function doHealAnim(svg,isPlayer){
  svg.style.animation='none'; void svg.offsetWidth;
  svg.style.animation=isPlayer?'healPop .5s ease':'healPopE .5s ease';
  setTimeout(()=>svg.style.animation='',600);
}

function spawnNum(text,anchorSvg,stageRect,type){
  const r=anchorSvg.getBoundingClientRect();
  const el=document.createElement('div');
  el.className='fnum '+type; el.textContent=text;
  el.style.left=(r.left+r.width/2-stageRect.left)+'px';
  el.style.top=(r.top+r.height/3-stageRect.top)+'px';
  document.getElementById('stage').appendChild(el);
  setTimeout(()=>el.remove(),1500);
}

function spawnFx(emoji,anchorSvg,stageRect){
  const r=anchorSvg.getBoundingClientRect();
  const el=document.createElement('div');
  el.className='spell-fx'; el.textContent=emoji;
  el.style.left=(r.left+r.width/2-stageRect.left-18)+'px';
  el.style.top=(r.top+r.height/2-stageRect.top-18)+'px';
  document.getElementById('stage').appendChild(el);
  setTimeout(()=>el.remove(),750);
}

// ═══ CPU AI ═══
function doCpuTurn(){
  showCpuThink(true);
  G.c.maxEnergy=Math.min(G.c.maxEnergy+1,10);
  G.c.energy=G.c.maxEnergy;
  drawCards(G.c,2);
  if(checkOver()){showCpuThink(false);return;}
  cpuQueue=[];
  const sorted=[...G.c.hand].sort((a,b)=>cpuPri(b)-cpuPri(a));
  let sim=G.c.energy;
  for(const c of sorted){if(c.cost<=sim){cpuQueue.push(c);sim-=c.cost;if(sim<=0)break;}}
  setTimeout(()=>{showCpuThink(false);continueCpu();},900);
}

function cpuPri(card){
  if(card.type==='aoe')return 4;
  if(card.type==='attack')return 3;
  if(card.type==='heal'){return G.c.active.currentHp/G.c.active.maxHp<.4?5:1;}
  return 2;
}

function continueCpu(){
  if(G.over)return;
  if(cpuQueue.length===0){
    say(`${G.c.active.name} is waiting...`);
    setTimeout(()=>startPlayerTurn(),500);
    return;
  }
  const card=cpuQueue.shift();
  const idx=G.c.hand.findIndex(c=>c.id===card.id);
  if(idx===-1){setTimeout(()=>continueCpu(),300);return;}
  executeMove('cpu',card);
}

// ═══ GAME OVER ═══
function checkOver(){
  const pa=aliveOf(G.p.team).length, ca=aliveOf(G.c.team).length;
  if(pa===0||ca===0){
    G.over=true;
    setTimeout(()=>showGameOver(ca===0),1500);
    return true;
  }
  return false;
}

function showGameOver(won){
  document.getElementById('goTitle').textContent=won?'🏆 VICTORY!':'💀 DEFEAT';
  document.getElementById('goTitle').className='go-title '+(won?'win':'lose');
  document.getElementById('goSub').textContent=won?`You defeated ${G.cpuName}!`:`${G.cpuName} won!`;
  document.getElementById('goStats').innerHTML=`
    <div class="sr"><span class="lbl">Rounds</span><span class="val">${G.round}</span></div>
    <div class="sr"><span class="lbl">Moves played</span><span class="val">${bStats.pm}</span></div>
    <div class="sr"><span class="lbl">Damage dealt</span><span class="val">${bStats.dmg}</span></div>
    <div class="sr"><span class="lbl">Result</span><span class="val" style="color:${won?'var(--gold)':'#f85149'}">${won?'WIN':'LOSS'}</span></div>`;
  showScreen('gameover');
}

// ═══ TEAM SELECT UI ═══
function renderTeamSelect(){
  G.selectedTeam=[];
  const grid=document.getElementById('creatureGrid'); grid.innerHTML='';
  CREATURES.forEach(c=>{
    const el=document.createElement('div');
    el.className='cc'; el.style.setProperty('--acc',c.color); el.dataset.id=c.id;
    el.innerHTML=`
      <div class="cc-sprite">
        <svg width="60" height="60" viewBox="0 0 32 32" style="filter:drop-shadow(0 2px 8px ${c.color}88)">${SVG[c.id]}</svg>
      </div>
      <div class="cc-name">${c.name}</div>
      <div class="cc-type" style="color:${c.color}">${c.type}</div>
      <div class="cc-stats">
        <div>❤️<span>${c.maxHp}</span></div>
        <div>⚔️<span>${c.atk}</span></div>
        <div>💨<span>${c.spd}</span></div>
      </div>`;
    el.onclick=()=>toggleCreature(c.id);
    grid.appendChild(el);
  });
}

function toggleCreature(id){
  const idx=G.selectedTeam.indexOf(id);
  if(idx!==-1){G.selectedTeam.splice(idx,1);}
  else{if(G.selectedTeam.length>=3){showToast('Max 3!');return;}G.selectedTeam.push(id);}
  updateTeamPreview();
}

function updateTeamPreview(){
  document.querySelectorAll('.cc').forEach(el=>el.classList.toggle('selected',G.selectedTeam.includes(parseInt(el.dataset.id))));
  for(let i=0;i<3;i++){
    const slot=document.getElementById('slot'+i);
    const cid=G.selectedTeam[i];
    if(cid!==undefined){
      slot.innerHTML=`<svg width="36" height="36" viewBox="0 0 32 32">${SVG[cid]}</svg>`;
      slot.classList.add('filled');
    } else {
      slot.innerHTML='<span style="opacity:.3;font-size:.8rem">?</span>';
      slot.classList.remove('filled');
    }
  }
  document.getElementById('confirmBtn').disabled=G.selectedTeam.length!==3;
}

// ═══ MISC ═══
function showCpuThink(s){document.getElementById('cpuOv').classList.toggle('show',s);}
function showToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2200);}
function showScreen(n){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(n+'Screen').classList.add('active');
  if(n==='battle'){
    renderBattleUI();
    // Build scenery after screen is visible
    setTimeout(()=>{buildScenery();buildClouds();},50);
  }
}
function playAgain(){startGame();}
function goMenu(){G={};showScreen('menu');}

// Stars
function makeStars(){
  const el=document.getElementById('starsEl');
  for(let i=0;i<120;i++){
    const s=document.createElement('div'); s.className='star';
    const sz=Math.random()*2+.6;
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;--delay:${Math.random()*4}s`;
    el.appendChild(s);
  }
}

function buildMenuCreatures(){
  const wrap=document.getElementById('menuCreatures');
  CREATURES.forEach((c,i)=>{
    const w=document.createElement('div'); w.className='mc-wrap';
    w.style.setProperty('--d2',`${i*0.4}s`);
    w.innerHTML=`
      <svg width="55" height="55" viewBox="0 0 32 32" style="filter:drop-shadow(0 0 8px ${c.color}99)">${SVG[c.id]}</svg>
      <div class="mc-label" style="color:${c.color}">${c.name}</div>`;
    wrap.appendChild(w);
  });
}

makeStars();
buildMenuCreatures();
showScreen('menu');
