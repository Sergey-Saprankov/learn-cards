"use strict";(self.webpackChunkproject_cards=self.webpackChunkproject_cards||[]).push([[561],{5715:function(e,r,a){a.d(r,{I:function(){return w}});var n=a(1413),t=a(9439),s=a(5987),i=a(2791),o="Input_labelInput__KDuW1",c="Input_input__jmt00",l="Input_errorInput__VKmyw",d="Input_iconShowPassword__MtYpi",m="Input_errorText__1dOdq";var u=a.p+"static/media/eye-close.27cbb7284ab275283eb5b100055ab46e.svg";var p=a.p+"static/media/eye.1348276d9deebf9199ef47e5a381515c.svg",f=a(184),h=["type","label","placeholder","error","register","nameForValidate"],w=(0,i.memo)((function(e){var r=e.type,a=e.label,w=e.placeholder,_=e.error,g=e.register,b=e.nameForValidate,v=((0,s.Z)(e,h),(0,i.useState)(r)),y=(0,t.Z)(v,2),x=y[0],I=y[1],j="password"===x?p:u;return(0,f.jsxs)("label",{className:o,children:[a,(0,f.jsx)("input",(0,n.Z)((0,n.Z)({},g(b)),{},{className:_?"".concat(c," ").concat(l):c,type:x,placeholder:w})),"password"===r&&(0,f.jsx)("img",{onClick:function(){I("password"===x?"text":"password")},className:d,src:j,alt:"icon eye"}),_&&(0,f.jsx)("div",{className:m,children:_})]})}))},3117:function(e,r,a){a.d(r,{r:function(){return s}});var n=a(7892),t=a.n(n),s=function(e){return t()(e).format("DD.MM.YYYY HH:mm:ss")}},7577:function(e,r,a){a.d(r,{rN:function(){return n.r},hV:function(){return c},Q7:function(){return l.Q}});var n=a(3117),t=(a(8923),a(4695)),s=a(1134),i=a(2797),o={email:i.Z_().required("No email provided").email("Incorrect email").matches(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Incorrect email"),password:i.Z_().required("No password provided"),confirmPwd:i.Z_().oneOf([i.iH("password")],"Passwords does not match"),name:i.Z_().required("Enter your name").min(3,"At least 3 characters").max(22,"Maximum number of characters 22")},c=function(){for(var e={},r=Object.entries(o),a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];n.forEach((function(a){return r.forEach((function(r){return r.includes(a)?e[a]=r[1]:null}))}));var l=i.Ry().shape(e),d=(0,s.cI)({resolver:(0,t.X)(l),mode:"onTouched"}),m=d.register,u=d.formState,p=u.errors,f=u.isValid;return{register:m,handleSubmit:d.handleSubmit,reset:d.reset,isValid:f,errorEmail:p.email?String(p.email.message):void 0,errorPassword:p.password?String(p.password.message):void 0,errorConfirmPwd:p.confirmPwd?String(p.confirmPwd.message):void 0,errorName:p.name?String(p.name.message):void 0}},l=(a(1945),a(337))},5561:function(e,r,a){a.r(r),a.d(r,{default:function(){return h}});a(2791);var n=a(7689),t=a(109),s=a(1974),i="Recovery_btn__KyNhZ",o=a(799),c=a(1981),l=a(9873),d=a(5715),m=a(8887),u=a(741),p=a(7577),f=a(184),h=function(){var e=(0,u.CG)(t.KB),r=(0,u.TL)(),a=(0,p.hV)("email"),h=a.errorEmail,w=a.handleSubmit,_=a.isValid,g=a.register;return e?(0,f.jsx)(n.Fg,{to:m.m.RECOVERY_INFO}):(0,f.jsx)(c.n,{title:"Forgot your password?",recoveryPath:m.m.RECOVERY,questionText:"Did you remember your password??",linkPath:m.m.LOGIN,linkTitle:"Try logging in",children:(0,f.jsxs)("form",{className:l.Z.form,onSubmit:w((function(e){var a=e.email;r((0,s.d7)(a))})),children:[(0,f.jsx)(d.I,{type:"email",label:"Email",placeholder:"example@gmail.com",register:g,error:h,nameForValidate:"email"}),"Enter your email address and we will send you further instructions",(0,f.jsx)(o.z,{className:i,type:"submit",isValid:_,children:"Send Instructions"})]})})}}}]);
//# sourceMappingURL=561.f8c4f772.chunk.js.map