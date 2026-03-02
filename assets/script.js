/* ═══════════════════════════
   LOADER
═══════════════════════════ */
const msgs=['A preparar a tua oportunidade...','A analisar o teu perfil...','Quase pronto! 🚀'];
let lp=0;
const lf=document.getElementById('lf');
const lt=document.getElementById('lt');
function runLoader(){
  let p=0;
  const iv=setInterval(()=>{
    p=Math.min(p+Math.random()*8+2,100);
    lf.style.width=p+'%';
    if(p>30&&lp===0){lt.textContent=msgs[1];lp=1;}
    if(p>70&&lp===1){lt.textContent=msgs[2];lp=2;}
    if(p>=100){
      clearInterval(iv);
      setTimeout(()=>document.getElementById('loader').classList.add('hide'),400);
    }
  },60);
}
window.addEventListener('load',runLoader);

/* ═══════════════════════════
   PARTICLES
═══════════════════════════ */
(function(){
  const c=document.getElementById('pts');
  const cols=['rgba(245,166,35,.55)','rgba(245,166,35,.3)','rgba(0,200,150,.4)','rgba(0,200,150,.2)','rgba(114,65,255,.35)','rgba(255,255,255,.1)'];
  for(let i=0;i<24;i++){
    const el=document.createElement('div');
    el.className='pt';
    const s=Math.random()*4+2;
    el.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;background:${cols[~~(Math.random()*cols.length)]};animation-duration:${Math.random()*14+10}s;animation-delay:${Math.random()*14}s;`;
    c.appendChild(el);
  }
})();

/* ═══════════════════════════
   TYPEWRITER
═══════════════════════════ */
const twPhrases=[
  'máquina de fazer dinheiro',
  'fonte de renda online',
  'negócio a funcionar 24h',
  'máquina de fazer dinheiro'
];
let twIdx=0,twChar=0,twDel=false;
const twEl=document.getElementById('tw-span');
function typewriter(){
  const phrase=twPhrases[twIdx];
  if(!twDel){
    twChar++;
    twEl.textContent=phrase.slice(0,twChar);
    if(twChar===phrase.length){twDel=true;setTimeout(typewriter,2200);return;}
    setTimeout(typewriter,60);
  } else {
    twChar--;
    twEl.textContent=phrase.slice(0,twChar);
    if(twChar===0){twDel=false;twIdx=(twIdx+1)%twPhrases.length;setTimeout(typewriter,400);return;}
    setTimeout(typewriter,35);
  }
}
setTimeout(typewriter,1500);

/* ═══════════════════════════
   VAGAS COUNTER (fake decrements)
═══════════════════════════ */
let vagas=8;
setInterval(()=>{
  if(vagas>3&&Math.random()>.75){
    vagas--;
    const el=document.getElementById('vagas-n');
    if(el){el.textContent=vagas;el.style.animation='none';requestAnimationFrame(()=>{el.style.animation='';});}
  }
},12000);

/* ═══════════════════════════
   RIPPLE EFFECT
═══════════════════════════ */
document.querySelectorAll('.cta-btn,.btn-next').forEach(btn=>{
  btn.addEventListener('pointerdown',function(e){
    const r=document.createElement('span');
    r.className='ripple';
    const rect=this.getBoundingClientRect();
    const size=Math.max(rect.width,rect.height)*2;
    r.style.cssText=`width:${size}px;height:${size}px;top:${e.clientY-rect.top-size/2}px;left:${e.clientX-rect.left-size/2}px;`;
    this.appendChild(r);
    setTimeout(()=>r.remove(),600);
  });
});

/* ═══════════════════════════
   PAGE TRANSITIONS
═══════════════════════════ */
function showPage(id){
  const ov=document.getElementById('overlay');
  ov.classList.add('in');
  setTimeout(()=>{
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({top:0,behavior:'instant'});
    setTimeout(()=>ov.classList.remove('in'),50);
  },220);
}

/* ═══════════════════════════
   QUIZ DATA
═══════════════════════════ */
const Qs=[
  {q:'Qual é o teu nome?',sub:'Para personalizarmos o teu plano 😊',type:'text',ph:'Escreve o teu primeiro nome...'},
  {q:'Qual é a tua situação actual?',sub:'Escolhe a que melhor te descreve',opts:[
    {icon:'fa-solid fa-graduation-cap',t:'Sou estudante e quero ganhar dinheiro extra'},
    {icon:'fa-solid fa-briefcase',t:'Tenho emprego mas o salário não chega'},
    {icon:'fa-solid fa-house',t:'Estou desempregado e preciso de renda urgente'},
    {icon:'fa-solid fa-rocket',t:'Já tenho negócio mas quero crescer online'},
  ]},
  {q:'Quanto tempo tens disponível por dia?',sub:'Sê honesto — define o teu plano ideal',opts:[
    {icon:'fa-solid fa-bolt',t:'Menos de 1 hora por dia'},
    {icon:'fa-solid fa-hourglass-half',t:'1 a 2 horas por dia'},
    {icon:'fa-solid fa-clock',t:'2 a 4 horas por dia'},
    {icon:'fa-solid fa-fire',t:'Mais de 4 horas — 100% comprometido'},
  ]},
  {q:'Qual é a tua maior dificuldade agora?',sub:'Escolhe o teu principal obstáculo',opts:[
    {icon:'fa-solid fa-circle-question',t:'Não sei por onde começar'},
    {icon:'fa-solid fa-hand-holding-dollar',t:'Não tenho capital para investir'},
    {icon:'fa-solid fa-face-sad-tear',t:'Tenho medo de não conseguir vender'},
    {icon:'fa-solid fa-wifi',t:'Não sei usar redes sociais para negócios'},
  ]},
  {q:'Qual é a tua meta de faturamento mensal?',sub:'Quanto queres ganhar todos os meses?',opts:[
    {icon:'fa-solid fa-money-bill',t:'5.000 a 15.000 MT/mês'},
    {icon:'fa-solid fa-money-bills',t:'15.000 a 30.000 MT/mês'},
    {icon:'fa-solid fa-sack-dollar',t:'30.000 a 60.000 MT/mês'},
    {icon:'fa-solid fa-gem',t:'+60.000 MT/mês — ambição máxima!'},
  ]},
  {q:'Tens smartphone com acesso à internet?',sub:'É tudo o que precisas para começar!',opts:[
    {icon:'fa-solid fa-mobile-screen-button',t:'Sim, tenho smartphone e internet boa'},
    {icon:'fa-solid fa-signal',t:'Sim, mas com internet limitada'},
    {icon:'fa-solid fa-laptop',t:'Tenho computador também'},
    {icon:'fa-solid fa-screwdriver-wrench',t:'Estou a resolver isso agora'},
  ]},
];

let cur=0,answers={},userName='';

function startQuiz(){showPage('page-quiz');render(0);}

function render(idx){
  const q=Qs[idx],total=Qs.length;
  document.getElementById('pf').style.width=(idx/total*100)+'%';
  document.getElementById('pc').textContent=`${idx+1} / ${total}`;
  document.getElementById('btn-back').style.visibility=idx===0?'hidden':'visible';

  let html=`<div class="q-title">${q.q}</div><div class="q-sub">${q.sub}</div>`;
  if(q.type==='text'){
    html+=`<input class="txt-input" id="ti" type="text" placeholder="${q.ph}" value="${answers[idx]||''}" oninput="handleTxt(this.value)" onkeydown="if(event.key==='Enter')nextQ()" autocomplete="given-name">`;
    setNext(!!(answers[idx]));
  } else {
    html+='<div class="options">';
    q.opts.forEach((o,i)=>{
      const s=answers[idx]===i?'sel':'';
      const delay=(i*.06).toFixed(2)+'s';
      html+=`<div class="opt ${s}" style="--d:${delay}" onclick="pick(${i})">
        <div class="opt-ico"><i class="${o.icon}"></i></div>
        <span class="opt-text">${o.t}</span>
        <div class="opt-check">${s?'<i class="fa-solid fa-check"></i>':''}</div>
      </div>`;
    });
    html+='</div>';
    setNext(answers[idx]!==undefined);
  }

  const qc=document.getElementById('qc');
  qc.style.cssText='opacity:0;transform:translateX(22px);transition:none';
  qc.innerHTML=html;
  requestAnimationFrame(()=>{
    qc.style.cssText='opacity:1;transform:translateX(0);transition:opacity .32s ease,transform .38s cubic-bezier(.34,1.56,.64,1)';
  });
  if(q.type==='text') setTimeout(()=>{const el=document.getElementById('ti');if(el)el.focus();},280);
}

function setNext(r){document.getElementById('btn-next').classList.toggle('on',r);}
function handleTxt(v){answers[cur]=v.trim();setNext(v.trim().length>0);}

function pick(i){
  answers[cur]=i;render(cur);
  setTimeout(()=>{if(document.getElementById('btn-next').classList.contains('on'))nextQ();},360);
}

function nextQ(){
  if(!document.getElementById('btn-next').classList.contains('on'))return;
  if(Qs[cur].type==='text') userName=answers[cur]||'amigo';
  if(cur<Qs.length-1){cur++;render(cur);if(navigator.vibrate)navigator.vibrate(18);}
  else showResult();
}

function prevQ(){
  if(cur>0){cur--;render(cur);}else showPage('page-landing');
}

/* ═══════════════════════════
   RESULT
═══════════════════════════ */
function showResult(){
  showPage('page-result');
  fireConfetti();

  const name=userName||'amigo';
  document.getElementById('uname').textContent=name;

  // Personalised WA link
  const waMsg=encodeURIComponent(`Olá HDMZN-10! Sou ${name} e acabei de fazer o quiz. Quero começar a faturar online! 🇲🇿🔥`);
  document.getElementById('res-cta-link').href=`https://wa.me/258833928376?text=${waMsg}`;
  document.querySelector('.wa-float').href=`https://wa.me/258833928376?text=${waMsg}`;

  const subs=[
    'Começar com 5K a 15K MT é uma excelente meta! Com o nosso método vais chegar lá em semanas.',
    'Óptimo! 30K MT por mês é totalmente possível. Temos alunos que já ultrapassaram isso!',
    'Incrível! 60K MT — exactamente o que os nossos top alunos fazem. Estás pronto!',
    `+60K MT, ${name}? Ambição máxima! O perfil exacto que procuramos. Nível elite!`
  ];
  const goalIdx=answers[4];
  const scores=[74,83,92,98];
  const score=goalIdx!==undefined?scores[goalIdx]:88;
  if(goalIdx!==undefined) document.getElementById('rsub').textContent=subs[goalIdx];

  setTimeout(()=>{
    document.getElementById('sb').style.width=score+'%';
    let n=0;
    const iv=setInterval(()=>{
      n=Math.min(n+2,score);
      document.getElementById('spct').textContent=n+'%';
      if(n>=score)clearInterval(iv);
    },18);
  },350);

  countdown(23*3600+59*60+42);
}

/* ═══════════════════════════
   COUNTDOWN
═══════════════════════════ */
function countdown(secs){
  function tick(){
    const h=~~(secs/3600),m=~~((secs%3600)/60),s=secs%60;
    document.getElementById('cdh').textContent=String(h).padStart(2,'0');
    document.getElementById('cdm').textContent=String(m).padStart(2,'0');
    document.getElementById('cds').textContent=String(s).padStart(2,'0');
    if(secs-->0)setTimeout(tick,1000);
  }
  tick();
}

/* ═══════════════════════════
   CONFETTI
═══════════════════════════ */
function fireConfetti(){
  const cols=['#F5A623','#FFD166','#00C896','#7241FF','#FF6B6B','#00E5FF','#FF5BB5','#fff'];
  for(let i=0;i<75;i++){
    setTimeout(()=>{
      const el=document.createElement('div');
      el.className='cfti';
      const w=Math.random()*9+4;
      const isCircle=Math.random()>.5;
      el.style.cssText=`left:${Math.random()*100}vw;top:-10px;width:${w}px;height:${isCircle?w:w*(Math.random()*.5+.2)}px;background:${cols[~~(Math.random()*cols.length)]};animation-duration:${Math.random()*2+1.4}s;border-radius:${isCircle?'50%':'2px'};`;
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),3800);
    },i*42);
  }
}

/* ═══════════════════════════
   3D TILT on feature cards
═══════════════════════════ */
document.querySelectorAll('.feat').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*10;
    const y=((e.clientY-r.top)/r.height-.5)*-10;
    card.style.transform=`perspective(400px) rotateX(${y}deg) rotateY(${x}deg) translateY(-3px)`;
  });
  card.addEventListener('pointerleave',()=>{
    card.style.transition='transform .4s ease';
    card.style.transform='';
    setTimeout(()=>card.style.transition='',400);
  });
});