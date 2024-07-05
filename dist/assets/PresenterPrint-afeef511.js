import{d as _,u as d,a as p,c as m,b as u,r as h,e as a,f as t,t as s,g as r,F as f,h as v,n as g,i as x,o as n,j as y,k as b,l as N,m as k,_ as P}from"./index-e55dd263.js";import{N as w}from"./NoteDisplay-7cfd2388.js";const L={class:"m-4"},S={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",{id:"page-root",style:g(r(x))},[t("div",L,[t("div",S,[t("h1",V,s(r(m).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(r(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",j)):k("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","C:/Users/Lenovo/OneDrive/Slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
