(()=>{"use strict";function t(t,e){Object.keys(e).forEach((function(n){t.style[n]=e[n]}))}const e=function(){const e=document.createElement("div");t(e,{width:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"}),document.body.appendChild(e);const n=document.createElement("h1");n.setAttribute("class","counter_errori"),t(n,{padding:"15px",color:"red",fontSize:"25px",position:"relative"}),e.appendChild(n),this.posizione_errore=e,this.counter_errori=n},n=function(){const e=document.createElement("div");t(e,{width:"100%",position:"absolute",bottom:"3%",display:"flex",alignItems:"center",justifyContent:"center"}),document.body.appendChild(e);const n=document.createElement("button");t(n,{backgroundColor:"#4CAF50",borderRadius:"30px",border:"none",color:"white",padding:"15px 32px",textAlign:"center",fontSize:"16px",position:"relative"}),e.appendChild(n),n.addEventListener("click",(function(){window.location.reload()})),n.addEventListener("mouseover",(function(){t(n,{backgroundColor:"#2c6b2e"})})),n.addEventListener("mouseout",(function(){t(n,{backgroundColor:"#4CAF50"})})),n.innerHTML="Ricomincia",this.posizione_bottone=e,this.ricarica=n},r=function(){const e=[{name:"Atalanta",img:"./src/assets/cards/Atalanta.png"},{name:"Atalanta",img:"./src/assets/cards/Atalanta.png"},{name:"Torino",img:"./src/assets/cards/Torino.png"},{name:"Torino",img:"./src/assets/cards/Torino.png"},{name:"Inter",img:"./src/assets/cards/Inter.png"},{name:"Inter",img:"./src/assets/cards/Inter.png"},{name:"Juventus",img:"./src/assets/cards/Juventus.png"},{name:"Juventus",img:"./src/assets/cards/Juventus.png"},{name:"Milan",img:"./src/assets/cards/Milan.png"},{name:"Milan",img:"./src/assets/cards/Milan.png"},{name:"Parma",img:"./src/assets/cards/Parma.png"},{name:"Parma",img:"./src/assets/cards/Parma.png"}];var n=document.getElementById("mwt_project_game");for(let r=0;r<e.length;r++){const i=document.createElement("div");t(i,{width:"calc(25% - 10px)",height:"calc(33.333% - 10px)",margin:"5px",position:"relative",transform:"scale(1)",transformStyle:"preserve-3d",transition:"transform .5s",boxShadow:"1px 1px 1px rgba(0,0,0,.3)",padding:"0",boxSizing:"border-box"}),i.setAttribute("class","carta-univaq"),i.setAttribute("id",r),i.setAttribute("data-framework",e[r].name);const a=document.createElement("img");t(a,{width:"100%",height:"100%",padding:"20px",position:"absolute",borderRadius:"5px",background:"#1C7CCC",backfaceVisibility:"hidden",transform:"rotateY(180deg)",margin:"0",boxSizing:"border-box"}),a.setAttribute("class","fronte-carta"),a.setAttribute("src",e[r].img),a.setAttribute("alt",e[r].name),i.appendChild(a);const o=document.createElement("img");t(o,{width:"100%",height:"100%",padding:"20px",position:"absolute",borderRadius:"5px",background:"#1C7CCC",backfaceVisibility:"hidden",margin:"0",boxSizing:"border-box"}),o.setAttribute("class","retro-carta"),o.setAttribute("src","./src/assets/cards/Univaq.png"),o.setAttribute("alt","Univaq Logo"),i.appendChild(o),n.appendChild(i)}this.scopri=function(e){t(e,{transform:"rotateY(180deg)"})},this.copri=function(e){t(e,{transform:"rotateY(0)"})},this.array_teams=e};function i(){const i=document.createElement("section");t(i,{width:"640px",height:"640px",margin:"auto",display:"flex",flexWrap:"wrap",perspective:"1000px"}),i.setAttribute("id","mwt_project_game"),document.body.appendChild(i),new n;const a=new e;let o,s,c=!1,d=!1,m=-1;const l=new r,p=document.getElementsByClassName("carta-univaq");function u(t){if(!d&&this!==o){var e=document.getElementById(t.currentTarget.myParam);if(l.scopri(e),!c)return c=!0,void(o=this);s=this,o.dataset.framework===s.dataset.framework?(o.removeEventListener("click",u),s.removeEventListener("click",u),g()):(d=!0,setTimeout((()=>{l.copri(o),l.copri(s),g()}),800),m++,0==m?a.posizione_errore.setAttribute("hidden",!0):b.textContent="Errori: "+m)}}function g(){[c,d]=[!1,!1],[o,s]=[null,null]}Object.entries(p).map((t=>{t[1].addEventListener("click",u,!1),t[1].myParam=t[1].id})),Object.entries(p).map((t=>{let e=Math.floor(12*Math.random());t[1].style.order=e}));let b=a.posizione_errore.querySelector(".counter_errori");this.mwt_project_game=i}const a=function(){t(document.body,{height:"100vh",display:"flex",background:"#060AB2"}),new i};window.addEventListener("load",(function(){new a}))})();