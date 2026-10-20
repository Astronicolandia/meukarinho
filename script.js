// ===== pétalas =====
const cv=document.getElementById("p"),x=cv.getContext("2d");let W,H;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener("resize",rs);
const P=Array.from({length:32},()=>({x:Math.random()*W,y:Math.random()*H,s:6+Math.random()*10,v:.4+Math.random()*.9,a:Math.random()*6,w:Math.random()*2,c:["#e9d5ff","#c9a2ff","#ffe3f0","#fff"][Math.floor(Math.random()*4)]}));
(function f(){x.clearRect(0,0,W,H);for(const p of P){p.y+=p.v;p.a+=.02;p.x+=Math.sin(p.a)*.8+p.w*.1;if(p.y>H+20){p.y=-20;p.x=Math.random()*W}
x.save();x.translate(p.x,p.y);x.rotate(p.a);x.globalAlpha=.75;x.fillStyle=p.c;x.beginPath();x.ellipse(0,0,p.s/2,p.s,0,0,6.3);x.fill();x.restore()}requestAnimationFrame(f)})();

// ===== flor que cresce =====
const pt=document.getElementById("pt");
for(let i=0;i<6;i++)pt.innerHTML+=`<ellipse cx="150" cy="125" rx="20" ry="55" fill="url(#pg)" stroke="#c9a2ff" stroke-width="1.5" transform="rotate(${i*60} 150 180)"/>`;
const gr=document.getElementById("grow"),st=document.getElementById("st"),bl=document.getElementById("bl"),lv=document.getElementById("lv"),cap=document.getElementById("cap");
function sc(){const r=gr.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(r.height-innerHeight)));
st.style.strokeDashoffset=1-Math.min(1,p*2);lv.style.opacity=p>.3?1:0;
bl.style.transform=`scale(${Math.max(0,(p-.5)*2)})`;
cap.textContent=p<.2?"uma sementinha…":p<.5?"crescendo…":p<.9?"quase…":"você floresceu 💜"}
addEventListener("scroll",sc);sc();

// ===== 20 motivos =====
const rsEl=document.getElementById("rs");
RS.forEach((r,i)=>{const d=document.createElement("div");d.className="fc";d.innerHTML=`<div class="fi"><div class="fa">${i+1}</div><div class="fb">${r}</div></div>`;d.onclick=()=>d.classList.toggle("on");rsEl.appendChild(d)});


// ===== revelar =====
const io=new IntersectionObserver(e=>e.forEach(i=>i.isIntersecting&&i.target.classList.add("on")),{threshold:.2});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));

// ===== caça-palavras =====
const N=innerWidth<600?13:15; // grade 13x13 no celular (letras maiores), 15x15 no computador
const dirs=[[0,1],[1,0],[1,1],[-1,1],[0,-1],[-1,0],[-1,-1],[1,-1]];
const AL="ABCDEFGHIJLMNOPQRSTUVXZAEIOLRS";
let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
let grid;
for(let tries=0;tries<300&&!grid;tries++){ // tenta de novo ate todas as palavras caberem
const g2=Array.from({length:N},()=>Array(N).fill(""));let all=true;
for(const w of [...WORDS].sort((a,b)=>b.length-a.length)){let placed=false;
for(let t=0;t<3000&&!placed;t++){const d=dirs[Math.floor(rnd()*8)],r=Math.floor(rnd()*N),c=Math.floor(rnd()*N);
const er=r+d[0]*(w.length-1),ec=c+d[1]*(w.length-1);if(er<0||er>=N||ec<0||ec>=N)continue;
let ok=true;for(let i=0;i<w.length;i++){const v=g2[r+d[0]*i][c+d[1]*i];if(v&&v!==w[i])ok=false}
if(!ok)continue;for(let i=0;i<w.length;i++)g2[r+d[0]*i][c+d[1]*i]=w[i];placed=true}
if(!placed){all=false;break}}
if(all)grid=g2}
const g=document.getElementById("g"),wl=document.getElementById("wl");
g.style.setProperty("--n",N);
for(let r=0;r<N;r++)for(let c=0;c<N;c++){const d=document.createElement("div");d.className="c";d.textContent=grid[r][c]||=AL[Math.floor(rnd()*AL.length)];d.dataset.r=r;d.dataset.c=c;g.appendChild(d)}
WORDS.forEach(w=>{const s=document.createElement("span");s.id="w"+w;s.textContent=w;wl.appendChild(s)});
let a=null,found=0;
g.addEventListener("click",e=>{const el=e.target.closest(".c");if(!el)return;
if(!a){a=el;el.classList.add("s");return}
const r1=+a.dataset.r,c1=+a.dataset.c,r2=+el.dataset.r,c2=+el.dataset.c,dr=r2-r1,dc=c2-c1,n=Math.max(Math.abs(dr),Math.abs(dc));
a.classList.remove("s");a=null;
if(!(dr===0||dc===0||Math.abs(dr)===Math.abs(dc)))return;
const sr=Math.sign(dr),sc2=Math.sign(dc),cells=[];let s="";
for(let i=0;i<=n;i++){const rr=r1+sr*i,cc=c1+sc2*i;cells.push(g.children[rr*N+cc]);s+=grid[rr][cc]}
const w=WORDS.find(w=>w===s||w===[...s].reverse().join(""));
if(w&&!document.getElementById("w"+w).classList.contains("d")){cells.forEach(k=>k.classList.add("f"));document.getElementById("w"+w).classList.add("d");
if(++found===WORDS.length){document.getElementById("win").textContent="Achou tudo, Karinho! Eu sabia que você ia achar. Esse poema é só seu 💜";const pm=document.getElementById("poem");pm.style.display="block";pm.scrollIntoView({behavior:"smooth",block:"center"})}}});

// ===== máquina do tempo =====
const tl=document.getElementById("tl");
SONGS.forEach(s=>{tl.innerHTML+=`<div class="card rv"><span class="hand">${s.d}</span><b>${s.t}</b>${s.n}<br><a target="_blank" rel="noopener" href="https://open.spotify.com/search/${encodeURIComponent(s.t)}">ouvir no Spotify ↗</a></div>`});
document.querySelectorAll("#tl .rv").forEach(e=>io.observe(e));

// poema escondido
document.getElementById("poem").textContent=POEMA;

