const u=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};u();const i=90,d=0,a=15,f=document.querySelector(".bingo-ball-text");let n;const m=()=>(n=_.shuffle(n),n.slice(0,a)),p=()=>{n=_.range(d,i+1),document.querySelectorAll(".player-card").forEach(c=>{let l=m();for(let r of l){let e=document.createElement("div");e.className="card-number",e.classList.add(`number${r}`),e.textContent=r<10?"0"+r:r,c.appendChild(e)}}),n=_.shuffle(n)},y=()=>{let o=n.pop();f.innerHTML=o<10?"0"+o:o,document.querySelectorAll(`.number${o}`).forEach(l=>l.classList.toggle("found"))};p();document.querySelector(".turn-button").addEventListener("click",y);
