import{B as n,o as e,d as o,c as d,w as l,h as s}from"./app.627173e4.js";const b={class:"btn-group grid grid-cols-2 my-4"},a=s(" Previous"),u={key:1,class:"btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled"},i=s(" Next"),c={key:3,class:"btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled"},g={__name:"SimplePagination",props:{posts:Object},setup(t){return(p,_)=>{const r=n("InertiaLink");return e(),o("div",b,[t.posts.prev_page_url!==null?(e(),d(r,{key:0,href:t.posts.prev_page_url,class:"btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"},{default:l(()=>[a]),_:1},8,["href"])):(e(),o("button",u,"Previous")),t.posts.next_page_url!==null?(e(),d(r,{key:2,href:t.posts.next_page_url,class:"btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"},{default:l(()=>[i]),_:1},8,["href"])):(e(),o("button",c,"Next"))])}}};export{g as default};
