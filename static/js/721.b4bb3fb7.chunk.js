"use strict";(self.webpackChunkproject_cards=self.webpackChunkproject_cards||[]).push([[721],{5715:function(e,r,a){a.d(r,{I:function(){return b}});var n=a(1413),t=a(9439),s=a(5987),o=a(2791),i="Input_labelInput__KDuW1",l="Input_input__jmt00",c="Input_errorInput__VKmyw",m="Input_iconShowPassword__MtYpi",d="Input_errorText__1dOdq";var u=a.p+"static/media/eye-close.27cbb7284ab275283eb5b100055ab46e.svg";var p=a.p+"static/media/eye.1348276d9deebf9199ef47e5a381515c.svg",f=a(184),h=["type","label","placeholder","error","register","nameForValidate"],b=(0,o.memo)((function(e){var r=e.type,a=e.label,b=e.placeholder,_=e.error,g=e.register,w=e.nameForValidate,x=((0,s.Z)(e,h),(0,o.useState)(r)),v=(0,t.Z)(x,2),j=v[0],I=v[1],S="password"===j?p:u;return(0,f.jsxs)("label",{className:i,children:[a,(0,f.jsx)("input",(0,n.Z)((0,n.Z)({},g(w)),{},{className:_?"".concat(l," ").concat(c):l,type:j,placeholder:b})),"password"===r&&(0,f.jsx)("img",{onClick:function(){I("password"===j?"text":"password")},className:m,src:S,alt:"icon eye"}),_&&(0,f.jsx)("div",{className:d,children:_})]})}))},3117:function(e,r,a){a.d(r,{r:function(){return s}});var n=a(7892),t=a.n(n),s=function(e){return t()(e).format("DD.MM.YYYY HH:mm:ss")}},7577:function(e,r,a){a.d(r,{rN:function(){return n.r},hV:function(){return l},Q7:function(){return c.Q}});var n=a(3117),t=(a(8923),a(4695)),s=a(1134),o=a(2797),i={email:o.Z_().required("No email provided").email("Incorrect email").matches(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Incorrect email"),password:o.Z_().required("No password provided"),confirmPwd:o.Z_().oneOf([o.iH("password")],"Passwords does not match"),name:o.Z_().required("Enter your name").min(3,"At least 3 characters").max(22,"Maximum number of characters 22")},l=function(){for(var e={},r=Object.entries(i),a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];n.forEach((function(a){return r.forEach((function(r){return r.includes(a)?e[a]=r[1]:null}))}));var c=o.Ry().shape(e),m=(0,s.cI)({resolver:(0,t.X)(c),mode:"onTouched"}),d=m.register,u=m.formState,p=u.errors,f=u.isValid;return{register:d,handleSubmit:m.handleSubmit,reset:m.reset,isValid:f,errorEmail:p.email?String(p.email.message):void 0,errorPassword:p.password?String(p.password.message):void 0,errorConfirmPwd:p.confirmPwd?String(p.confirmPwd.message):void 0,errorName:p.name?String(p.name.message):void 0}},c=(a(1945),a(337))},7721:function(e,r,a){a.r(r),a.d(r,{default:function(){return x}});var n=a(7689),t=a(109),s=a(1974),o="Login_loginBtn__Ga5G1",i=a(799),l=a(1413),c=a(2791),m="CheckBox_labelCheckbox__P2pKn",d="CheckBox_checkbox__YJlma",u=a(184),p=(0,c.memo)((function(e){var r=e.register,a=e.nameForValidate,n=e.label;return(0,u.jsxs)("label",{className:m,children:[(0,u.jsx)("input",(0,l.Z)((0,l.Z)({},r(a)),{},{className:d,type:"checkbox"})),n]})})),f=a(1981),h=a(9873),b=a(5715),_=a(8887),g=a(741),w=a(7577),x=function(){var e=(0,g.TL)(),r=(0,g.CG)(t.dd),a=(0,w.hV)("email","password"),l=a.errorEmail,c=a.errorPassword,m=a.handleSubmit,d=a.isValid,x=a.register;return r?(0,u.jsx)(n.Fg,{to:_.m.PACK_LIST}):(0,u.jsx)(f.n,{title:"Sign In",forgot:!0,recoveryPath:_.m.RECOVERY,questionText:"Do not have an account?",linkPath:_.m.REGISTER,linkTitle:"Sign Up",children:(0,u.jsxs)("form",{className:h.Z.form,onSubmit:m((function(r){e((0,s.YJ)(r))})),children:[(0,u.jsx)(b.I,{type:"email",label:"Email",placeholder:"example@gmail.com",register:x,error:l,nameForValidate:"email"}),(0,u.jsx)(b.I,{type:"password",label:"Password",placeholder:"example12",register:x,error:c,nameForValidate:"password"}),(0,u.jsx)(p,{label:"Remember Me",nameForValidate:"rememberMe",register:x}),(0,u.jsx)(i.z,{className:o,isValid:d,type:"submit",children:"Sign In"})]})})}}}]);
//# sourceMappingURL=721.b4bb3fb7.chunk.js.map