import{r as f,k as m,B as x,o as r,c as n,w as s,_ as g,h as i,t as c,a as e,i as _,D as y,f as k,z as p,d as u,g as w,b as v,e as b,F as C,E as B}from"./app.627173e4.js";import{t as N}from"./throttle.db527247.js";const S={class:"border-b border-gray-200 dark:border-dim-200 min-h-screen border-l border-r"},F={class:"relative"},V=e("div",{class:"absolute text-gray-600 flex items-center pl-4 h-full cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-mail",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})])],-1),j={class:"bg-gray-50 dark:bg-dim-700 rounded-2xl my-2"},z=e("h1",{class:"text-gray-900 dark:text-white text-md font-bold p-3 border-b border-gray-200 dark:border-dim-200"}," Who to follow ",-1),D={class:"flex flex-row justify-between p-2"},I={class:"flex flex-row"},L=["src","alt"],M={class:"flex flex-col ml-2"},E={class:"text-gray-900 dark:text-white font-bold text-sm"},O={class:"text-gray-400 text-sm"},P={class:""},T={class:"flex items-center h-full text-gray-800 dark:text-white"},U=i(" + Follow "),R=i(" - Unfollow "),W={key:0,class:"text-blue-400 text-sm font-normal p-3 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out"},q=i(" Previous "),A={key:1,class:"btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled"},G=i(" Next "),H={key:3,class:"btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled"},X={__name:"Community",props:{users:Object,filters:Object,usercount:String},setup(o){let l=f(o.filters.search);return m(l,N(function(d){B.Inertia.get("/community",{search:d},{preserveState:!0,replace:!0})},500)),(d,h)=>{const a=x("InertiaLink");return r(),n(g,{title:"Community"},{header:s(()=>[i(" Community ("+c(o.usercount)+" users) ",1)]),default:s(()=>[e("div",S,[e("div",F,[V,_(e("input",{"onUpdate:modelValue":h[0]||(h[0]=t=>p(l)?l.value=t:l=t),class:"w-full bg-gray-200 dark:bg-dim-400 border-gray-200 dark:border-dim-400 text-gray-500 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 font-normal h-9 flex items-center pl-12 text-sm rounded-full border shadow",placeholder:"Search"},null,512),[[y,k(l)]])]),e("div",j,[z,(r(!0),u(C,null,w(o.users.data,t=>(r(),u("div",{key:t.id,class:"text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out"},[v(a,{href:d.route("user-profile",{id:t.username})},{default:s(()=>[e("div",D,[e("div",I,[e("img",{class:"w-10 h-10 rounded-full",src:t.pic,alt:t.name},null,8,L),e("div",M,[e("h1",E,c(t.name),1),e("p",O,"@"+c(t.name),1)])]),e("div",P,[e("div",T,[t.isFollowing===!1&&t.followbutton===!1?(r(),n(a,{key:0,preserveScroll:"",method:"post",as:"button",type:"button",class:"text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400",href:d.route("follow",{id:t.username})},{default:s(()=>[U]),_:2},1032,["href"])):b("",!0),t.isFollowing===!0&&t.followbutton===!1?(r(),n(a,{key:1,preserveScroll:"",method:"post",as:"button",type:"button",class:"text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400",href:d.route("follow",{id:t.username})},{default:s(()=>[R]),_:2},1032,["href"])):b("",!0)])])])]),_:2},1032,["href"])]))),128)),o.users.next_page_url!==null?(r(),u("div",W,[o.users.prev_page_url!==null?(r(),n(a,{key:0,href:o.users.prev_page_url,class:"btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"},{default:s(()=>[q]),_:1},8,["href"])):(r(),u("button",A," Previous ")),o.users.next_page_url!==null?(r(),n(a,{key:2,href:o.users.next_page_url,class:"btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"},{default:s(()=>[G]),_:1},8,["href"])):(r(),u("button",H," Next "))])):b("",!0)])])]),_:1})}}};export{X as default};