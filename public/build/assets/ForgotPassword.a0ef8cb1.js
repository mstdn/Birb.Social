import{u,o as r,d as m,b as s,f as a,w as o,F as c,H as _,t as f,e as p,a as t,n as w,s as g,h as b}from"./app.627173e4.js";import{J as h}from"./AuthenticationCard.811a5738.js";import{_ as y}from"./AuthenticationCardLogo.e89903a8.js";import{_ as x}from"./Button.fa05a46f.js";import{_ as k,a as V}from"./InputError.8df2dd38.js";import{_ as v}from"./Label.2791852a.js";const F=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},S=b(" Email Password Reset Link "),z={__name:"ForgotPassword",props:{status:String},setup(l){const e=u({email:""}),n=()=>{e.post(route("password.email"))};return(B,i)=>(r(),m(c,null,[s(a(_),{title:"Forgot Password"}),s(h,null,{logo:o(()=>[s(y)]),default:o(()=>[F,l.status?(r(),m("div",N,f(l.status),1)):p("",!0),t("form",{onSubmit:g(n,["prevent"])},[t("div",null,[s(v,{for:"email",value:"Email"}),s(k,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":i[0]||(i[0]=d=>a(e).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),s(V,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),t("div",C,[s(x,{class:w({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:o(()=>[S]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{z as default};
