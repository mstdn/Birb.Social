import{o,c,w as n,_ as p,a as i,d as s,b as t,e as r,F as l}from"./app.627173e4.js";import f from"./DeleteUserForm.2418b1fb.js";import{J as a}from"./SectionBorder.bf66b774.js";import u from"./LogoutOtherBrowserSessionsForm.c42d8f74.js";import d from"./TwoFactorAuthenticationForm.383c3ed3.js";import _ from"./UpdatePasswordForm.e01b17e7.js";import h from"./UpdateProfileInformationForm.e1181c01.js";import"./Modal.1880013c.js";import"./SectionTitle.5ee5117d.js";import"./DialogModal.039b5bf2.js";import"./DangerButton.9f59c9f0.js";import"./InputError.8df2dd38.js";import"./SecondaryButton.349f1458.js";import"./ActionMessage.01fb3c25.js";import"./Button.fa05a46f.js";import"./Label.2791852a.js";import"./FormSection.74554e57.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},I={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),c(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),s("div",w,[t(h,{user:e.$page.props.user},null,8,["user"]),t(a)])):r("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),s("div",k,[t(_,{class:"mt-10 sm:mt-0"}),t(a)])):r("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),s("div",y,[t(d,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(a)])):r("",!0),t(u,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),s(l,{key:3},[t(a),t(f,{class:"mt-10 sm:mt-0"})],64)):r("",!0)])])]),_:1}))}};export{I as default};