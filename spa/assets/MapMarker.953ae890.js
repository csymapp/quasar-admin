import{Q as e}from"./QPage.ad66783f.js";import{_ as t,j as o,r as s,k as n,v as p,m as r,p as m}from"./index.b0880704.js";import"./render.3075bf0b.js";const i=o({name:"Map",setup(){return{mapData:s(""),initMap(){var a={lat:-25.363,lng:131.044};this.mapData=new google.maps.Map(document.getElementById("myMap"),{center:{lat:-25.363,lng:131.044},zoom:7}),new google.maps.Marker({position:a,map:this.mapData,title:"Hello World!"})}}},mounted(){this.initMap()}}),l=m("div",{id:"myMap",style:{height:"85vh"}},null,-1);function c(a,d,_,f,g,u){return n(),p(e,{class:"q-pa-sm"},{default:r(()=>[l]),_:1})}var v=t(i,[["render",c]]);export{v as default};
