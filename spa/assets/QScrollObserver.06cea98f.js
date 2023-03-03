import{c as b}from"./render.3075bf0b.js";import{g as h,c as S,b as T}from"./scroll.f7331efc.js";import{w as m,o as x,E as C,a4 as E,g as P,J as w}from"./index.b0880704.js";const{passive:p}=w,M=["both","horizontal","vertical"];var q=b({name:"QScrollObserver",props:{axis:{type:String,validator:e=>M.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:v}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,i,u;m(()=>e.scrollTarget,()=>{d(),f()});function l(){n!==null&&n();const a=Math.max(0,S(i)),c=T(i),o={top:a-t.position.top,left:c-t.position.left};if(e.axis==="vertical"&&o.top===0||e.axis==="horizontal"&&o.left===0)return;const g=Math.abs(o.top)>=Math.abs(o.left)?o.top<0?"up":"down":o.left<0?"left":"right";t.position={top:a,left:c},t.directionChanged=t.direction!==g,t.delta=o,t.directionChanged===!0&&(t.direction=g,t.inflectionPoint=t.position),v("scroll",{...t})}function f(){i=h(u,e.scrollTarget),i.addEventListener("scroll",r,p),r(!0)}function d(){i!==void 0&&(i.removeEventListener("scroll",r,p),i=void 0)}function r(a){if(a===!0||e.debounce===0||e.debounce==="0")l();else if(n===null){const[c,o]=e.debounce?[setTimeout(l,e.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];n=()=>{o(c),n=null}}}const{proxy:s}=P();return m(()=>s.$q.lang.rtl,l),x(()=>{u=s.$el.parentNode,f()}),C(()=>{n!==null&&n(),d()}),Object.assign(s,{trigger:r,getPosition:()=>t}),E}});export{q as Q};
