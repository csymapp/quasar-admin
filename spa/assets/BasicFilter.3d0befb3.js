import{Q as p}from"./QSpace.23ea46bd.js";import{Q as g}from"./QSelect.ea52f11b.js";import{Q as s}from"./QCardSection.a05d92e6.js";import{Q as f}from"./QImg.92229be1.js";import{Q as x}from"./QSeparator.cf4679c4.js";import{Q as n}from"./QBtn.bac35353.js";import{Q as q}from"./QCardActions.d3cfd638.js";import{Q as d}from"./QCard.7b819f93.js";import{_ as h,j as b,r as _,k as m,v as y,m as e,d as t,p as o,l as c,F as v,q as Q,t as L,u}from"./index.b0880704.js";import"./render.3075bf0b.js";import"./use-key-composition.9bd8685b.js";import"./QIcon.dfcc865e.js";import"./use-size.d11174ce.js";import"./QSpinner.b9a97cc8.js";import"./use-dark.1d74980c.js";import"./uid.42677368.js";import"./focus-manager.d6507951.js";import"./QChip.9a423812.js";import"./QItem.fe02b4cc.js";import"./use-router-link.bf3751cb.js";import"./QItemLabel.0f4519f1.js";import"./QMenu.a2cd3b19.js";import"./position-engine.1c5a1552.js";import"./selection.8c909102.js";import"./scroll.f7331efc.js";import"./dom.30c7df43.js";import"./use-timeout.c76c0710.js";import"./use-prevent-scroll.8e9abb27.js";import"./rtl.b51694b1.js";import"./use-form.f8b3f6f8.js";import"./format.a33550d6.js";const l=[{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 1"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"paid",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 2"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 3"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 4"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"paid",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 5"},{img:"https://placeimg.com/500/300/nature?t="+Math.random(),type:"free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",title:"Title 6"}],w=b({name:"BasicFilter",setup(){return{type:_("All"),cards_data:l,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},computed:{getData(){if(this.type=="All")return l;{let i=this;return l.filter(function(a){return a.type.toLowerCase()==i.type.toLowerCase()})}}}}),C={class:"col-lg-12 col-sm-12 col-xs-12 col-md-12"},U=o("div",{class:"text-h6 float-left q-ml-md q-mt-sm"},"Filters",-1),B={class:"row q-col-gutter-lg"},T={class:"col-lg-3 col-sm-12 col-xs-12 col-md-3"},V={class:"float-right"};function F(i,a,M,k,S,A){return m(),y(d,{class:"bg-transparent no-shadow no-border"},{default:e(()=>[t(s,{class:"row"},{default:e(()=>[o("div",C,[U,t(p),t(g,{dense:"",outlined:"",style:{"min-width":"200px"},modelValue:i.type,"onUpdate:modelValue":a[0]||(a[0]=r=>i.type=r),options:["All","Free","Paid"],class:"float-right",label:"Category"},null,8,["modelValue"])])]),_:1}),t(s,{class:"q-mx-sm"},{default:e(()=>[o("div",B,[(m(!0),c(v,null,Q(i.getData,r=>(m(),c("div",T,[t(d,{style:{"background-color":"#292845"},class:"text-white"},{default:e(()=>[t(f,{src:r.img},null,8,["src"]),t(x),t(s,{class:"text-h5 text-center"},{default:e(()=>[L(u(r.title),1)]),_:2},1024),t(s,{class:"text-justify"},{default:e(()=>[o("div",null,u(i.text),1)]),_:1}),t(q,{align:"around",class:"text-subtitle1"},{default:e(()=>[t(n,{color:"",icon:"remove_red_eye",class:"bg-transparent text-capitalize",flat:"",label:"200 Views"}),o("div",V,[t(n,{color:"",icon:"chat_bubble",class:"bg-transparent",flat:"",label:"56"})])]),_:1})]),_:2},1024)]))),256))])]),_:1})]),_:1})}var pt=h(w,[["render",F]]);export{pt as default};
