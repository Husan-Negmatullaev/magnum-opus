"use strict";(self.webpackChunkmagnum_opus=self.webpackChunkmagnum_opus||[]).push([[780],{1780:(e,n,r)=>{r.r(n),r.d(n,{default:()=>_});var t=r(5893),o=r(7294),a=r(987),s=r(7768),u=r(6510);var i=function(){return i=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c=o.memo((function(e){var n=e.className,r=e.value,a=e.type,u=void 0===a?"text":a,c=e.onChange,l=e.autoFocus,f=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r}(e,["className","value","type","onChange","autoFocus"]),d=o.useRef(null);return o.useEffect((function(){var e;l&&(null===(e=null==d?void 0:d.current)||void 0===e||e.focus())}),[l]),(0,t.jsx)("input",i({ref:d,type:u,value:r,onChange:function(e){null==c||c(e.target.value)},className:(0,s.A)("LVdIPwcx",{},[n])},f))})),l=r(7007);const f={block:"NMyEcCPZ",title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4"};var d,p=function(){return p=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},p.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(d||(d={}));var v=function(e){var n,r=e.className,o=e.text,a=e.title,u=e.themes,i=void 0===u?d.PRIMARY:u;return(0,t.jsxs)("div",p({className:(0,s.A)(f.block,(n={},n[f[i]]=!0,n),[r])},{children:[a&&(0,t.jsx)("h3",p({className:f.title},{children:a})),o&&(0,t.jsx)("p",p({className:f.text},{children:o}))]}))},h=function(e){var n=e.children,r=e.reducers,a=e.removeAfterUnmount,s=void 0!==a&&a,u=(0,l.I0)(),i=(0,l.oR)();return o.useEffect((function(){return Object.entries(r).forEach((function(e){var n=e[0],r=e[1];i.reducerManager.add(n,r),u({type:"@INIT ".concat(n," reducer")})})),function(){s&&Object.entries(r).forEach((function(e){var n=e[0];i.reducerManager.remove(n),u({type:"@DESTROY ".concat(n," reducer")})}))}}),[]),(0,t.jsx)(t.Fragment,{children:n})},m=function(e){var n;return(null===(n=e.login)||void 0===n?void 0:n.password)||""},y=function(e){var n;return(null===(n=e.login)||void 0===n?void 0:n.username)||""},g=function(e){var n;return(null===(n=e.login)||void 0===n?void 0:n.isLoading)||!1},b=function(e){var n;return null===(n=e.login)||void 0===n?void 0:n.error},x=r(7168),w=r(2400),j=r(9669),O=r.n(j),N=r(266),C=(0,x.hg)("login/loginByUsername",(function(e,n){return r=void 0,t=void 0,a=function(){var r,t;return function(e,n){var r,t,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(s=0)),s;)try{if(r=1,t&&(o=2&u[0]?t.return:u[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,t=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=n.call(e,s)}catch(e){u=[6,e],t=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,O().post("http://localhost:8000/login",e)];case 1:if(!(r=o.sent()).data)throw new Error(r.statusText);return localStorage.setItem(N.z,JSON.stringify(r.data)),n.dispatch(w.h.setAuthUser(r.data)),[2,r.data];case 2:return t=o.sent(),console.log(t),[2,n.rejectWithValue("error")];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function s(e){try{i(a.next(e))}catch(e){n(e)}}function u(e){try{i(a.throw(e))}catch(e){n(e)}}function i(n){var r;n.done?e(n.value):(r=n.value,r instanceof o?r:new o((function(e){e(r)}))).then(s,u)}i((a=a.apply(r,t||[])).next())}));var r,t,o,a})),k=(0,x.oM)({name:"login",initialState:{username:"",password:"",isLoading:!1,error:""},reducers:{setUsername:function(e,n){e.username=n.payload},setPassword:function(e,n){e.password=n.payload}},extraReducers:function(e){e.addCase(C.pending,(function(e){e.isLoading=!0,e.error=void 0})),e.addCase(C.fulfilled,(function(e,n){e.username=n.payload.username,e.isLoading=!1})),e.addCase(C.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),P=k.actions,R=k.reducer;const E={form:"EfqL5339",form__btn:"Dan5xijn"};var I=function(){return I=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},I.apply(this,arguments)},L={login:R};const _=function(e){var n=e.className,r=(0,a.$)().t,i=(0,l.I0)(),f=(0,l.v9)(m),p=(0,l.v9)(y),x=(0,l.v9)(g),w=(0,l.v9)(b),j=o.useCallback((function(e){i(P.setUsername(e))}),[i]),O=o.useCallback((function(e){i(P.setPassword(e))}),[i]),N=o.useCallback((function(e){e.preventDefault(),x||i(C({username:p,password:f}))}),[i,f,p,x]);return(0,t.jsx)(h,I({reducers:L},{children:(0,t.jsxs)("form",I({className:(0,s.A)(E.form,{},[n]),onSubmit:N},{children:[(0,t.jsx)(v,{title:r("login-form-title")}),w&&(0,t.jsx)(v,{themes:d.ERROR,text:r("form-error")}),(0,t.jsx)(c,{type:"text",className:E.form__input,placeholder:r("placeholder-username"),autoFocus:!0,onChange:j,value:p}),(0,t.jsx)(c,{type:"text",className:E.form__input,placeholder:r("placeholder-password"),onChange:O,value:f}),(0,t.jsx)(u.zx,I({type:"submit",disabled:x,theme:u.lq.OUTLINE,className:E.form__btn},{children:r("sign-in")}))]}))}))}}}]);