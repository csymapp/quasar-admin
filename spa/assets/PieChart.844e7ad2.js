import{Q as a}from"./QCardSection.a05d92e6.js";import{Q as s}from"./QCard.7b819f93.js";import{S as n}from"./index.esm.min.92dca00f.js";import{_ as i,j as l,N as m,k as d,l as c,d as e,m as t,t as p}from"./index.b0880704.js";import"./render.3075bf0b.js";import"./use-dark.1d74980c.js";const f=l({name:"PieChart",components:{ECharts:n},data(){return{options:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{top:"bottom",bottom:"5%",left:"center"},series:[{name:"Access source",type:"pie",radius:["40%","70%"],center:["50%","35%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct access"},{value:580,name:"Email marketing"},{value:484,name:"Affiliate Advertising"},{value:300,name:"Video ad"}]}]}}}});function u(o,h,b,_,C,v){const r=m("ECharts");return d(),c("div",null,[e(s,{class:"no-shadow",bordered:""},{default:t(()=>[e(a,{class:"text-h6"},{default:t(()=>[p(" Pie Chart ")]),_:1}),e(a,null,{default:t(()=>[e(r,{option:o.options,class:"q-mt-md",resizable:!0,autoresize:"",style:{height:"285px"}},null,8,["option"])]),_:1})]),_:1})])}var Q=i(f,[["render",u]]);export{Q as default};
