"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9483],{1931:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(7294),c=r(7961);const s={container:"container_pqwF",box:"box_cs6b"};function a(e){let{cardBackground:t}=e;const r=(0,n.useRef)(null),c=(0,n.useRef)(null),a=(0,n.useRef)(!1),u=(0,n.useRef)({startX:0,startY:0,lastX:0,lastY:0});return(0,n.useEffect)((()=>{if(!c.current||!r.current)return;console.log(img);const e=c.current,t=r.current,n=e=>{a.current=!0,u.current.startX=e.clientX,u.current.startY=e.clientY},s=t=>{a.current=!1,u.current.lastX=e.offsetLeft,u.current.lastY=e.offsetTop},l=t=>{if(!a.current)return;const r=t.clientX-u.current.startX+u.current.lastX,n=t.clientY-u.current.startY+u.current.lastY;e.style.top=`${n}px`,e.style.left=`${r}px`};e.addEventListener("mousedown",n),e.addEventListener("mouseup",s),t.addEventListener("mousemove",l),t.addEventListener("mouseleave",s);return()=>{e.removeEventListener("mousedown",n),e.removeEventListener("mouseup",s),t.removeEventListener("mousemove",l),t.removeEventListener("mouseleave",s)}}),[]),n.createElement("main",null,n.createElement("div",{ref:r,className:s.container},n.createElement("div",{ref:c,className:s.box},n.createElement("img",{alt:"card",src:t}))))}function u(){const e=[];return(0,n.useEffect)((()=>{for(let t=0;t<3;t++){document.createElement("div").className="card",e.push(`@site/static/img/cards/${t+1}.png`)}}),[]),n.createElement(c.Z,null,n.createElement(a,{cardBackground:e[0]}),n.createElement(a,{cardBackground:e[1]}),e.map(((e,t)=>n.createElement(a,{cardBackground:{backgroundImage:e}}))))}}}]);