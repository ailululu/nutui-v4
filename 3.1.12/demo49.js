var B=Object.defineProperty,C=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var a=(e,s,n)=>s in e?B(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,p=(e,s)=>{for(var n in s||(s={}))E.call(s,n)&&a(e,n,s[n]);if(l)for(var n of l(s))D.call(s,n)&&a(e,n,s[n]);return e},A=(e,s)=>C(e,h(s));import{c as f}from"./mobile.js";import{_ as v}from"./index.js";import{a as m,B as g,r as i,e as x,g as c,j as u,k as t,o as y,l as _}from"./vendor.js";const{createDemo:w}=f("steps"),$=w({props:{},setup(){const e=m({current1:1,current2:1,current3:1,current4:1,current5:1}),s=n=>{e[n]>=3?e[n]=1:e[n]+=1};return A(p({},g(e)),{handleStep:s})}}),b={class:"demo padding"},k=c("h2",null,"\u57FA\u672C\u7528\u6CD5",-1),j={class:"steps-wrapper"},N=_("1"),S=_("2"),V=_("3"),R={class:"steps-button"},T=_("\u4E0B\u4E00\u6B65"),q=c("h2",null,"\u6807\u9898\u548C\u63CF\u8FF0\u4FE1\u606F",-1),z={class:"steps-wrapper"},G=_("1"),H={class:"steps-button",style:{"margin-top":"10px"}},I=_("\u4E0B\u4E00\u6B65"),J=c("h2",null,"\u81EA\u5B9A\u4E49\u56FE\u6807",-1),K={class:"steps-wrapper"},L=_("1"),M=_("2"),O=_("3"),P=c("h2",null,"\u7AD6\u5411\u6B65\u9AA4\u6761",-1),Q={class:"steps-wrapper",style:{height:"300px",padding:"15px 30px"}},U=_("1"),W=_("2"),X=_("3"),Y=c("h2",null,"\u7AD6\u5411\u6B65\u9AA4\u6761",-1),Z={class:"steps-wrapper",style:{height:"300px",padding:"15px 40px"}},uu=_("1"),tu=_("2"),eu=_("3");function su(e,s,n,nu,ou,_u){const o=i("nut-step"),d=i("nut-steps"),r=i("nut-button");return y(),x("div",b,[k,c("div",j,[u(d,{current:e.current1},{default:t(()=>[u(o,{title:"\u6B65\u9AA4\u4E00"},{default:t(()=>[N]),_:1}),u(o,{title:"\u6B65\u9AA4\u4E8C"},{default:t(()=>[S]),_:1}),u(o,{title:"\u6B65\u9AA4\u4E09"},{default:t(()=>[V]),_:1})]),_:1},8,["current"]),c("div",R,[u(r,{type:"danger",onClick:s[0]||(s[0]=F=>e.handleStep("current1"))},{default:t(()=>[T]),_:1})])]),q,c("div",z,[u(d,{current:e.current2},{default:t(()=>[u(o,{title:"\u6B65\u9AA4\u4E00",content:"\u6B65\u9AA4\u63CF\u8FF0"},{default:t(()=>[G]),_:1}),u(o,{title:"\u6B65\u9AA4\u4E8C",content:"\u6B65\u9AA4\u63CF\u8FF0"}),u(o,{title:"\u6B65\u9AA4\u4E09",content:"\u6B65\u9AA4\u63CF\u8FF0"})]),_:1},8,["current"]),c("div",H,[u(r,{type:"danger",onClick:s[1]||(s[1]=F=>e.handleStep("current2"))},{default:t(()=>[I]),_:1})])]),J,c("div",K,[u(d,{current:"1"},{default:t(()=>[u(o,{title:"\u5DF2\u5B8C\u6210",icon:"service"},{default:t(()=>[L]),_:1}),u(o,{title:"\u8FDB\u884C\u4E2D",icon:"people"},{default:t(()=>[M]),_:1}),u(o,{title:"\u672A\u5F00\u59CB",icon:"location2"},{default:t(()=>[O]),_:1})]),_:1})]),P,c("div",Q,[u(d,{direction:"vertical",current:"2"},{default:t(()=>[u(o,{title:"\u5DF2\u5B8C\u6210",content:"\u60A8\u7684\u8BA2\u5355\u5DF2\u7ECF\u6253\u5305\u5B8C\u6210\uFF0C\u5546\u54C1\u5DF2\u53D1\u51FA"},{default:t(()=>[U]),_:1}),u(o,{title:"\u8FDB\u884C\u4E2D",content:"\u60A8\u7684\u8BA2\u5355\u6B63\u5728\u914D\u9001\u9014\u4E2D"},{default:t(()=>[W]),_:1}),u(o,{title:"\u672A\u5F00\u59CB",content:"\u6536\u8D27\u5730\u5740\u4E3A\uFF1A\u5317\u4EAC\u5E02\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A\u79D1\u521B\u5341\u4E00\u885718\u53F7\u9662\u4EAC\u4E1C\u5927\u53A6"},{default:t(()=>[X]),_:1})]),_:1})]),Y,c("div",Z,[u(d,{direction:"vertical","progress-dot":"",current:"2"},{default:t(()=>[u(o,{title:"\u5DF2\u5B8C\u6210",content:"\u60A8\u7684\u8BA2\u5355\u5DF2\u7ECF\u6253\u5305\u5B8C\u6210\uFF0C\u5546\u54C1\u5DF2\u53D1\u51FA"},{default:t(()=>[uu]),_:1}),u(o,{title:"\u8FDB\u884C\u4E2D",content:"\u60A8\u7684\u8BA2\u5355\u6B63\u5728\u914D\u9001\u9014\u4E2D"},{default:t(()=>[tu]),_:1}),u(o,{title:"\u672A\u5F00\u59CB",content:"<p>\u6536\u8D27\u5730\u5740\u4E3A\uFF1A</p><p>\u5317\u4EAC\u5E02\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A\u79D1\u521B\u5341\u4E00\u885718\u53F7\u9662\u4EAC\u4E1C\u5927\u53A6</p>"},{default:t(()=>[eu]),_:1})]),_:1})])])}var lu=v($,[["render",su]]);export{lu as default};
