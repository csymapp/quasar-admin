import{Q as p}from"./QAvatar.488e00c1.js";import{Q as s}from"./QCardSection.a05d92e6.js";import{Q as m}from"./QIcon.dfcc865e.js";import{Q as n}from"./QInput.ba772abc.js";import{Q as d}from"./QBtn.bac35353.js";import{Q as f}from"./QCardActions.d3cfd638.js";import{Q as c}from"./QCard.7b819f93.js";import{Q as u}from"./QPage.ad66783f.js";import{Q,a as _}from"./QLayout.798790ec.js";import{_ as w,j as y,r as i,k as v,v as P,m as t,d as e,y as g,p as l}from"./index.b0880704.js";import"./use-size.d11174ce.js";import"./render.3075bf0b.js";import"./use-key-composition.9bd8685b.js";import"./QSpinner.b9a97cc8.js";import"./use-dark.1d74980c.js";import"./uid.42677368.js";import"./focus-manager.d6507951.js";import"./use-form.f8b3f6f8.js";import"./dom.30c7df43.js";import"./use-router-link.bf3751cb.js";import"./QScrollObserver.06cea98f.js";import"./scroll.f7331efc.js";import"./QResizeObserver.eafe9602.js";const k=y({name:"LockScreen",setup(){return{password:i(""),isPwd:i("password")}}}),C=l("img",{src:"profile.svg"},null,-1),b=l("div",{class:"text-h6 text-center"}," Pratik Patel ",-1);function h(o,r,$,x,S,V){return v(),P(Q,{class:"bg-image"},{default:t(()=>[e(_,null,{default:t(()=>[e(u,{class:"flex flex-center"},{default:t(()=>[e(c,{class:"login-form",style:g(o.$q.platform.is.mobile?{width:"60%"}:{width:"20%"})},{default:t(()=>[e(s,null,{default:t(()=>[e(p,{size:"74px",class:"absolute-center shadow-10"},{default:t(()=>[C]),_:1})]),_:1}),e(s,{class:"q-mt-md"},{default:t(()=>[b,e(n,{modelValue:o.password,"onUpdate:modelValue":r[1]||(r[1]=a=>o.password=a),type:o.isPwd?"password":"text",placeholder:"Enter Password"},{append:t(()=>[e(m,{name:o.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:r[0]||(r[0]=a=>o.isPwd=!o.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),e(f,{align:"center"},{default:t(()=>[e(d,{push:"",label:"Unlock",class:"text-capitalize",color:"primary"})]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})]),_:1})}var Z=w(k,[["render",h]]);export{Z as default};
