"use strict";(self.webpackChunkproject_cards=self.webpackChunkproject_cards||[]).push([[852],{8597:function(e,a,r){r(2791);a.Z=r.p+"static/media/arrow.9c43ee4473c188dca31578cbfa023bb9.svg"},9852:function(e,a,r){r.r(a),r.d(a,{default:function(){return z}});var n=r(2791),s=r(7689),c=r(799),t=r(1413),i=r(9439),o={userNameContainer:"EditableSpan_userNameContainer__FbiXk",userName:"EditableSpan_userName__FKaO0",iconPen:"EditableSpan_iconPen__U+7A8",inputWrapper:"EditableSpan_inputWrapper__zQhmo",labelInput:"EditableSpan_labelInput__zaYQe",input:"EditableSpan_input__QwGa7",errorInput:"EditableSpan_errorInput__boSCM",iconShowPassword:"EditableSpan_iconShowPassword__Dxylj",errorText:"EditableSpan_errorText__ctlw+",errorName:"EditableSpan_errorName__23MZ4",confirmName:"EditableSpan_confirmName__GQuoj",updateIcon:"EditableSpan_updateIcon__RlNpS"};var l=r.p+"static/media/pen.14cfa330cce6f5cbb9f53dbb63a16248.svg";var u=r.p+"static/media/submit.2905d30ce01ddc8d77018bdccb7b61cc.svg",d=r(741),m=r(7577),_=r(1974),p=r(184),f=function(e){var a=e.value,r=(0,d.TL)(),s=(0,n.useState)(!1),c=(0,i.Z)(s,2),f=c[0],b=c[1],h=(0,n.useState)(a),N=(0,i.Z)(h,2),v=N[0],g=N[1],x=(0,m.hV)("name"),j=x.errorName,w=x.register,S=(x.reset,x.isValid),A=x.handleSubmit;return f?(0,p.jsxs)("div",{className:o.inputWrapper,children:[(0,p.jsx)("form",{className:o.form,onSubmit:A((function(e){r((0,_.i3)(e.name)),b(!1)})),children:(0,p.jsxs)("label",{className:o.labelInput,children:["Nickname",(0,p.jsx)("input",(0,t.Z)((0,t.Z)({},w("name")),{},{value:v,onChange:function(e){g(e.currentTarget.value)},className:j?"".concat(o.input," ").concat(o.errorInput):o.input})),(0,p.jsx)("button",{disabled:!S,type:"submit",className:o.confirmName,children:(0,p.jsx)("img",{className:o.updateIcon,src:u,alt:"submit icon"})})]})}),j&&(0,p.jsx)("div",{className:o.errorName,children:j})]}):(0,p.jsxs)("div",{className:o.userNameContainer,children:[(0,p.jsx)("h3",{className:o.userName,children:a}),(0,p.jsx)("img",{onClick:function(){return b(!0)},className:o.iconPen,src:l,alt:"icon pen for redaction name"})]})},b="UserAccount_container__tmXgx",h="UserAccount_wrapper__r6QcP",N="UserAccount_linkBackward__7A0ru",v="UserAccount_arrow__UZ88e",g="UserAccount_backwardText__sy9Cy",x="UserAccount_profileContainer__-hngy",j="UserAccount_title__goEV4",w="UserAccount_avatarContainer__XIGEP",S="UserAccount_innerAvaContainer__r2W+6",A="UserAccount_avatar__PXqHi",E="UserAccount_decoration__Dhy8o",U="UserAccount_label__AFr3-",C="UserAccount_cameraIcon__Cyex2",I="UserAccount_emailText__B-B4-",k="UserAccount_logOut__rJ0ax",P="UserAccount_logOutIcon__LG4Ok",Z="UserAccount_logOutText__Yj+5F",y=r(8597);var T=r.p+"static/media/cameraIcon.4af1fced404c49e4531e240197d1c0b6.svg",O=r(1232);var Q=r.p+"static/media/logout.819881059549eb959ed296b6cbf2861e.svg",F=r(8887),G=r(337),L=r(109),z=function(){var e=(0,d.TL)(),a=(0,s.s0)(),r=(0,d.CG)(L.dd),n=(0,d.CG)(L.Xk),t=(0,G.Q)(n.name,26),i=n.avatar?n.avatar:O,o=function(e,a){var r=new FileReader;r.onloadend=function(){var e=r.result;a(e)},r.readAsDataURL(e)};return r?(0,p.jsx)("div",{className:b,children:(0,p.jsxs)("div",{className:h,children:[(0,p.jsxs)("div",{onClick:function(){return a(-1)},className:N,children:[(0,p.jsx)("img",{className:v,src:y.Z,alt:"arrow backward"}),(0,p.jsx)("span",{className:g,children:"Back to Packs List"})]}),(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)("h2",{className:j,children:"Personal Information"}),(0,p.jsxs)("div",{className:w,children:[(0,p.jsxs)("div",{className:E,children:[(0,p.jsx)("img",{className:C,src:T,alt:"camera icon"}),(0,p.jsx)("label",{className:U,children:(0,p.jsx)("input",{accept:".png, .jpg, .jpeg, .gif",style:{display:"none"},type:"file",onChange:function(a){if(a.target.files&&a.target.files.length){var r=a.target.files[0];r.size<4e6?o(r,(function(a){console.log(a),e((0,_.i3)({name:t,avatar:a}))})):console.error("Error: ","\u0424\u0430\u0439\u043b \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430")}}})})]}),(0,p.jsx)("div",{className:S,children:(0,p.jsx)("img",{className:A,src:i,alt:"",onError:function(){i=O}})})]}),(0,p.jsx)(f,{value:t}),(0,p.jsx)("span",{className:I,children:n.email}),(0,p.jsxs)(c.z,{onClick:function(){e((0,_.$F)())},className:k,children:[(0,p.jsx)("img",{className:P,src:Q,alt:"button logout"}),(0,p.jsx)("span",{className:Z,children:"Log out"})]})]})]})}):(0,p.jsx)(s.Fg,{to:F.m.LOGIN})}},3117:function(e,a,r){r.d(a,{r:function(){return c}});var n=r(7892),s=r.n(n),c=function(e){return s()(e).format("DD.MM.YYYY HH:mm:ss")}},7577:function(e,a,r){r.d(a,{rN:function(){return n.r},hV:function(){return o},Q7:function(){return l.Q}});var n=r(3117),s=(r(8923),r(4695)),c=r(1134),t=r(2797),i={email:t.Z_().required("No email provided").email("Incorrect email").matches(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Incorrect email"),password:t.Z_().required("No password provided"),confirmPwd:t.Z_().oneOf([t.iH("password")],"Passwords does not match"),name:t.Z_().required("Enter your name").min(3,"At least 3 characters").max(22,"Maximum number of characters 22")},o=function(){for(var e={},a=Object.entries(i),r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];n.forEach((function(r){return a.forEach((function(a){return a.includes(r)?e[r]=a[1]:null}))}));var l=t.Ry().shape(e),u=(0,c.cI)({resolver:(0,s.X)(l),mode:"onTouched"}),d=u.register,m=u.formState,_=m.errors,p=m.isValid;return{register:d,handleSubmit:u.handleSubmit,reset:u.reset,isValid:p,errorEmail:_.email?String(_.email.message):void 0,errorPassword:_.password?String(_.password.message):void 0,errorConfirmPwd:_.confirmPwd?String(_.confirmPwd.message):void 0,errorName:_.name?String(_.name.message):void 0}},l=(r(1945),r(337))}}]);
//# sourceMappingURL=852.446df472.chunk.js.map