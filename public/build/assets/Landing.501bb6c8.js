import{r as a,k as c,o as i,c as n,w as t,_ as l,a as p,b as s,h as d,E as m}from"./app.627173e4.js";import{t as _}from"./throttle.db527247.js";import f from"./Cards.8df30c6b.js";import h from"./SimplePagination.97b4362e.js";import"./FullImage.46aabbd7.js";const u=d(" Public "),b={class:"border-b border-gray-200 dark:border-dim-200 min-h-screen border-l border-r"},V={__name:"Landing",props:{canLogin:Boolean,canRegister:Boolean,posts:Object,filters:Object},setup(e){let o=a(e.filters.search);return c(o,_(function(r){m.Inertia.get("/",{search:r},{preserveState:!0,replace:!0,preserveScroll:!0})},1e3)),(r,x)=>(i(),n(l,{title:"Explore & Discover"},{header:t(()=>[u]),default:t(()=>[p("div",b,[s(f,{posts:e.posts},null,8,["posts"]),s(h,{posts:e.posts},null,8,["posts"])])]),_:1}))}};export{V as default};