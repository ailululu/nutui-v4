var p=Object.defineProperty;var d=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var i=(e,u,a)=>u in e?p(e,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[u]=a,c=(e,u)=>{for(var a in u||(u={}))f.call(u,a)&&i(e,a,u[a]);if(d)for(var a of d(u))C.call(u,a)&&i(e,a,u[a]);return e};import{c as F,T as m}from"./mobile.js";import{_ as D}from"./index.js";import{a as E,B as g,r as V,e as k,j as l,k as n,g as t,o as B,l as _}from"./vendor.js";const{createDemo:A}=F("searchbar"),b=A({props:{},setup(){const e=E({searchValue:"",searchValue1:"",searchValue2:"",searchValue3:"",searchValue4:"",searchValue5:""});return c({clickLeft:function(){m.text("\u70B9\u51FB\u56DE\u9000\u6309\u94AE")},search:function(h){m.text("\u641C\u7D22\u89E6\u53D1")}},g(e))}}),U={class:"demo full"},v=t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),z=t("h2",null,"\u641C\u7D22\u4E8B\u4EF6\u76D1\u542C",-1),j=t("h2",null,"\u663E\u793A\u641C\u7D22 icon",-1),$=t("h2",null,"\u53F3\u4FA7\u6DFB\u52A0\u641C\u7D22\u6587\u5B57",-1),L=_(" \u641C\u7D22 "),N=t("h2",null,"\u66F4\u6539\u8F93\u5165\u6846\u5185\u90E8\u53CA\u5916\u90E8\u7684\u80CC\u666F\u6837\u5F0F",-1),T=t("h2",null,"\u663E\u793A\u5168\u90E8 icon",-1);function S(e,u,a,h,w,R){const s=V("nut-searchbar"),r=V("nut-icon");return B(),k("div",U,[v,l(s,{modelValue:e.searchValue,"onUpdate:modelValue":u[0]||(u[0]=o=>e.searchValue=o)},null,8,["modelValue"]),z,l(s,{modelValue:e.searchValue1,"onUpdate:modelValue":u[1]||(u[1]=o=>e.searchValue1=o),onSearch:e.search},null,8,["modelValue","onSearch"]),j,l(s,{modelValue:e.searchValue2,"onUpdate:modelValue":u[2]||(u[2]=o=>e.searchValue2=o)},{leftin:n(()=>[l(r,{size:"14",name:"search2"})]),_:1},8,["modelValue"]),$,l(s,{modelValue:e.searchValue3,"onUpdate:modelValue":u[3]||(u[3]=o=>e.searchValue3=o)},{rightout:n(()=>[L]),_:1},8,["modelValue"]),N,l(s,{modelValue:e.searchValue4,"onUpdate:modelValue":u[4]||(u[4]=o=>e.searchValue4=o),background:"linear-gradient(to right, #9866F0, #EB4D50)","input-background":"#fff"},null,8,["modelValue"]),T,l(s,{modelValue:e.searchValue5,"onUpdate:modelValue":u[5]||(u[5]=o=>e.searchValue5=o)},{leftout:n(()=>[l(r,{onClick:e.clickLeft,size:"20",name:"left"},null,8,["onClick"])]),leftin:n(()=>[l(r,{size:"14",name:"search2"})]),rightin:n(()=>[l(r,{size:"20",name:"photograph"})]),rightout:n(()=>[l(r,{size:"20",name:"message"})]),_:1},8,["modelValue"])])}var I=D(b,[["render",S]]);export{I as default};
