import{Q as i}from"./QTooltip.c7d0c5ad.js";import{Q as m}from"./QBtn.bac35353.js";import{Q as r}from"./QCardSection.a05d92e6.js";import{Q as l}from"./QCard.7b819f93.js";import"./index.0533210e.js";import{S as p}from"./index.esm.min.92dca00f.js";import{_ as d,j as c,N as u,k as f,l as h,d as e,m as o,t as n}from"./index.b0880704.js";import"./position-engine.1c5a1552.js";import"./selection.8c909102.js";import"./use-router-link.bf3751cb.js";import"./focus-manager.d6507951.js";import"./scroll.f7331efc.js";import"./dom.30c7df43.js";import"./use-timeout.c76c0710.js";import"./render.3075bf0b.js";import"./QIcon.dfcc865e.js";import"./use-size.d11174ce.js";import"./QSpinner.b9a97cc8.js";import"./use-dark.1d74980c.js";const g=c({name:"GuageChart",data(){return{options:{tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",progress:{show:!0},detail:{valueAnimation:!0,formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]}}},components:{ECharts:p},methods:{SaveImage(){const a=this.$refs.guagechart.getDataURL(),t=document.createElement("a");document.body.appendChild(t),t.href=a,t.target="_self",t.download="GuageChart.png",t.click()}}});function C(a,t,_,k,v,Q){const s=u("ECharts");return f(),h("div",null,[e(l,{class:"no-shadow",bordered:""},{default:o(()=>[e(r,{class:"text-h6"},{default:o(()=>[n(" Guage Chart "),e(m,{icon:"fa fa-download",class:"float-right",onClick:a.SaveImage,flat:"",dense:""},{default:o(()=>[e(i,null,{default:o(()=>[n("Download PNG")]),_:1})]),_:1},8,["onClick"])]),_:1}),e(r,null,{default:o(()=>[e(s,{option:a.options,class:"q-mt-md",resizable:!0,autoresize:"",style:{height:"285px"},ref:"guagechart"},null,8,["option"])]),_:1})]),_:1})])}var q=d(g,[["render",C]]);export{q as default};
