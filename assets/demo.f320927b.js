var e=Object.defineProperty,s=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,a=(s,l,t)=>l in s?e(s,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[l]=t,o=(e,o)=>{for(var i in o||(o={}))s.call(o,i)&&a(e,i,o[i]);if(l)for(var i of l(o))t.call(o,i)&&a(e,i,o[i]);return e};import{c as i}from"./mobile.b1973cdf.js";import{a as d,z as n,s as c,x as u,r,o as b,c as h,f,q as v}from"./vendor.80bf15c7.js";import"./index.42d325ee.js";const{createDemo:p}=i("calendar");var C=p({props:{},setup(){const e=d({isVisible:!1,date:"",dateWeek:"",isVisible1:!1,date1:["2019-12-23","2019-12-26"],date2:"2020-07-08",isVisible3:!1,date3:""});return o(o({},n(e)),{openSwitch:s=>{e[`${s}`]=!0},closeSwitch:s=>{e[`${s}`]=!1},setChooseValue:s=>{e.date=s[3],e.dateWeek=s[4]},setChooseValue1:s=>{e.date1=[s[0][3],s[1][3]]},setChooseValue2:s=>{e.date2=s[3],console.log(e.date2)},setChooseValue3:s=>{e.date3=s[3]}})}});const V=v("data-v-f5f7c93e");c("data-v-f5f7c93e");const w={class:"demo"},m=f("h2",null,"基础用法",-1),S=f("h2",null,"自定义日历-自动回填",-1),k=f("h2",null,"平铺展示",-1),y={class:"test-calendar-wrapper"};u();const j=V(((e,s,l,t,a,o)=>{const i=r("nut-cell"),d=r("nut-calendar");return b(),h("div",w,[m,f("div",null,[f(i,{showIcon:!0,title:"选择单个日期",desc:e.date?`${e.date} ${e.dateWeek}`:"请选择",onClick:s[1]||(s[1]=s=>e.openSwitch("isVisible"))},null,8,["desc"]),f(d,{"is-visible":e.isVisible,"default-value":e.date,onClose:s[2]||(s[2]=s=>e.closeSwitch("isVisible")),onChoose:e.setChooseValue,"start-date":"2019-10-11","end-date":"2022-11-11"},null,8,["is-visible","default-value","onChoose"])]),f("div",null,[f(i,{showIcon:!0,title:"选择日期区间",desc:e.date1?`${e.date1[0]}至${e.date1[1]}`:"请选择",onClick:s[3]||(s[3]=s=>e.openSwitch("isVisible1"))},null,8,["desc"]),f(d,{"is-visible":e.isVisible1,"default-value":e.date1,type:"range","start-date":"2019-12-22","end-date":"2021-01-08",onClose:s[4]||(s[4]=s=>e.closeSwitch("isVisible1")),onChoose:e.setChooseValue1},null,8,["is-visible","default-value","onChoose"])]),S,f("div",null,[f(i,{showIcon:!0,title:"选择日期",desc:e.date3?e.date3:"请选择",onClick:s[5]||(s[5]=s=>e.openSwitch("isVisible3"))},null,8,["desc"]),f(d,{"is-visible":e.isVisible3,onClose:s[6]||(s[6]=s=>e.closeSwitch("isVisible3")),onChoose:e.setChooseValue3,"default-value":e.date3,"start-date":null,"end-date":null,"is-auto-back-fill":!0},null,8,["is-visible","onChoose","default-value"])]),k,f("div",y,[f(d,{poppable:!1,"default-value":e.date2,"is-auto-back-fill":!0,onChoose:e.setChooseValue2},null,8,["default-value","onChoose"])])])}));C.render=j,C.__scopeId="data-v-f5f7c93e";export default C;
