import{o as m,c as i,w as s,_ as o,a,b as t,d as r,F as l,e as n}from"./app.627173e4.js";import c from"./DeleteTeamForm.eea4c154.js";import{J as p}from"./SectionBorder.bf66b774.js";import d from"./TeamMemberManager.35f01d97.js";import f from"./UpdateTeamNameForm.5132738f.js";import"./Modal.1880013c.js";import"./SectionTitle.5ee5117d.js";import"./ConfirmationModal.15d52c93.js";import"./DangerButton.9f59c9f0.js";import"./SecondaryButton.349f1458.js";import"./ActionMessage.01fb3c25.js";import"./Button.fa05a46f.js";import"./DialogModal.039b5bf2.js";import"./FormSection.74554e57.js";import"./InputError.8df2dd38.js";import"./Label.2791852a.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},O={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(m(),i(o,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(f,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(d,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),r(l,{key:0},[t(p),t(c,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):n("",!0)])])]),_:1}))}};export{O as default};
