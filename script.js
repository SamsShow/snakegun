(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let f=confirm("Press OK to start a game");f==!0&&(alert("Snake beat water, water beat gun,gun beat snake"),alert('press "g" for GUN , "w" for WATER and "s" for SNAKE'));let n=["s","w","g"],c=Math.floor(Math.random()*3),o=n[c],r=prompt("SNAKE! WATER! GUN!");r.toLowerCase();alert(o);o==r?alert("MATCH TIED"):o=="s"?r=="g"?alert("YOU WON"):r=="w"&&alert("COMPUTER WON"):o=="w"?r=="s"?alert("YOU WON"):r=="g"&&alert("COMPUTER WON"):o=="g"&&(r=="w"?alert("YOU WON"):r=="s"&&alert("COMPUTER WON"));
