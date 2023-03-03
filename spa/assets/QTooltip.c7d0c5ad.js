import{r as O,c as f,w as k,E as C,B as E,A as x,h as H,I as ee,g as te,H as oe}from"./index.b0880704.js";import{u as ae,a as ne,b as ie,v as A,c as le,d as se,e as re,f as ue,g as ce,h as de,i as fe,r as q,s as ve,p as D,k as he}from"./position-engine.1c5a1552.js";import{u as me,a as ge}from"./use-timeout.c76c0710.js";import{c as pe,h as ye}from"./render.3075bf0b.js";import{g as Te}from"./scroll.f7331efc.js";import{c as M}from"./selection.8c909102.js";var Ce=pe({name:"QTooltip",inheritAttrs:!1,props:{...ae,...ne,...ie,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:le},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...se],setup(e,{slots:j,emit:p,attrs:v}){let i,l;const h=te(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,a.lang.rtl)),Q=f(()=>D(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:B,removeTick:I}=me(),{registerTimeout:d}=ge(),{transitionProps:N,transitionStyle:R}=re(e),{localScrollTarget:y,changeScrollEvent:_,unconfigureScrollTarget:U}=ue(e,P),{anchorEl:o,canShow:V,anchorEvents:r}=ce({showing:c,configureAnchorEl:X}),{show:$,hide:m}=de({showing:c,canShow:V,handleShow:F,handleHide:G,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:T,hidePortal:b,renderPortal:z}=fe(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&oe(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(g,n=>{(n===!0?he:q)(t)}),C(()=>{q(t)})}function F(t){T(),B(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{T(!0),p("show",t)},e.transitionDuration)}function G(t){I(),b(),S(),d(()=>{b(!0),p("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),U(),E(r,"tooltipTemp")}function u(){const t=s.value;o.value===null||!t||ve({el:t,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(a.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{$(t)},e.delay)}function K(t){a.platform.is.mobile===!0&&(E(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){y.value=Te(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;_(y.value,t)}}function Y(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,R.value],role:"tooltip"},ye(j.default)):null}function Z(){return H(ee,N.value,Y)}return C(S),Object.assign(h.proxy,{updatePosition:u}),z}});export{Ce as Q};
