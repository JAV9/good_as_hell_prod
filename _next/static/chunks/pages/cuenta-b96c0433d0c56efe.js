(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{9876:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta",function(){return n(4159)}])},2308:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bailoutToClientRendering=function(){let e=a.staticGenerationAsyncStorage.getStore();return null!=e&&!!e.forceStatic||((null==e?void 0:e.isStaticGeneration)&&r.suspense(),!1)};var r=n(4564),a=n(2437);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1993:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clientHookInServerComponentError=function(e){},(0,n(2648).Z)(n(7294)),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSearchParams=function(){i.clientHookInServerComponentError("useSearchParams");let e=r.useContext(o.SearchParamsContext),t=r.useMemo(()=>new h(e||new URLSearchParams),[e]);if(s.bailoutToClientRendering())return t;if(!e)throw Error("invariant expected search params to be mounted");return t},t.usePathname=function(){return i.clientHookInServerComponentError("usePathname"),r.useContext(o.PathnameContext)},Object.defineProperty(t,"ServerInsertedHTMLContext",{enumerable:!0,get:function(){return l.ServerInsertedHTMLContext}}),Object.defineProperty(t,"useServerInsertedHTML",{enumerable:!0,get:function(){return l.useServerInsertedHTML}}),t.useRouter=function(){i.clientHookInServerComponentError("useRouter");let e=r.useContext(a.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e},t.useSelectedLayoutSegments=p,t.useSelectedLayoutSegment=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";i.clientHookInServerComponentError("useSelectedLayoutSegment");let t=p(e);return 0===t.length?null:t[0]},Object.defineProperty(t,"redirect",{enumerable:!0,get:function(){return u.redirect}}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return d.notFound}});var r=n(7294),a=n(8245),o=n(8914),s=n(2308),i=n(1993),l=n(671),u=n(761),d=n(8739);let c=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class h{[Symbol.iterator](){return this[c][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[c]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";i.clientHookInServerComponentError("useSelectedLayoutSegments");let{tree:t}=r.useContext(a.LayoutRouterContext);return function e(t,n){let r,a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(a)r=t[1][n];else{var s;let e=t[1];r=null!=(s=e.children)?s:Object.values(e)[0]}if(!r)return o;let i=r[0],l=Array.isArray(i)?i[1]:i;return l?(o.push(l),e(r,n,!1,o)):o}(t,e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8739:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notFound=function(){let e=Error(n);throw e.digest=n,e},t.NOT_FOUND_ERROR_CODE=void 0;let n="NEXT_NOT_FOUND";t.NOT_FOUND_ERROR_CODE=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},761:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.redirect=function(e){let t=Error(n);throw t.digest=n+";"+e,t},t.REDIRECT_ERROR_CODE=void 0;let n="NEXT_REDIRECT";t.REDIRECT_ERROR_CODE=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suspense=function(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},t.NoSSR=function(e){let{children:t}=e;return t},(0,n(2648).Z)(n(7294));var r=n(2983)},671:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useServerInsertedHTML=function(e){let t=r.useContext(a);t&&t(e)},t.ServerInsertedHTMLContext=void 0;var r=(0,n(1598).Z)(n(7294));let a=r.default.createContext(null);t.ServerInsertedHTMLContext=a},4159:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893);n(5675);var a=n(9332),o=n(7294),s=n(6803),i=n.n(s),l=n(1664),u=n.n(l);let d=e=>{let{hidden:t,onRegisterClick:n,email:a,setEmail:o,pwd:s,setPwd:l,address:d,setAddress:c,name:f,setName:h,lastname:p,setLastname:m,signUp:g}=e;return(0,r.jsx)("div",{className:t?i().hidden:"",children:(0,r.jsxs)("form",{className:i().form,method:"POST",children:[(0,r.jsx)("h2",{children:"Crea tu cuenta"}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:i().input,type:"text",name:"name",value:f,onChange:e=>h(e.target.value),placeholder:"Nombre"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:i().input,type:"text",name:"lastname",value:p,onChange:e=>m(e.target.value),placeholder:"Apellido(s)"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:i().input,type:"text",name:"address",value:d,onChange:e=>c(e.target.value),placeholder:"Direcci\xf3n"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:i().input,type:"text",name:"email",value:a,onChange:e=>o(e.target.value),placeholder:"E-mail"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:i().input,type:"password",name:"pwd",value:s,onChange:e=>l(e.target.value),placeholder:"Contrase\xf1a"})}),(0,r.jsx)("input",{className:i().button,type:"button",value:"Registrarme",onClick:g}),(0,r.jsxs)("span",{className:i().registerText+" "+i().asideText,children:["\xbfYa tienes cuenta?"," ",(0,r.jsx)(u(),{className:i().registerLink,href:"",onClick:n,children:"Login"})]})]})})},c=e=>{let{hidden:t,onRegisterClick:n,email:a,setEmail:s,pwd:l,setPwd:d,signIn:c}=e,[f,h]=(0,o.useState)(!1),p=()=>{h(!f)};return(0,r.jsxs)("div",{className:t?i().hidden:"",children:[(0,r.jsxs)("div",{className:"help",children:["Para loguearte como admin, puedes hacerlo con los siguientes datos:",(0,r.jsx)("p",{children:"email: admin@admin.com"}),(0,r.jsx)("p",{children:"contrase\xf1a: admin"})]}),(0,r.jsxs)("form",{method:"POST",className:i().form,children:[(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:i().input,type:"text",name:"email",value:a,onChange:e=>s(e.target.value),placeholder:"E-mail"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:i().input,type:f?"text":"password",name:"pwd",value:l,onChange:e=>d(e.target.value),placeholder:"Contrase\xf1a"})}),(0,r.jsxs)("label",{className:i().label,children:[(0,r.jsx)("input",{className:i().checkbox,type:"checkbox",onClick:p}),(0,r.jsx)("span",{className:i().labelText,children:"Muesta contrase\xf1a"})]}),(0,r.jsx)("input",{className:i().button,type:"button",value:"Iniciar sesi\xf3n",onClick:c}),(0,r.jsxs)("span",{className:i().registerText+" "+i().asideText,children:["\xbfNo tienes cuenta?"," ",(0,r.jsx)(u(),{className:i().registerLink,href:"",onClick:n,children:"Reg\xedstrate"})]})]})]})};function f(e){let{cookie:t,setCookie:n,signOut:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:["Hola, usuario normal",(0,r.jsx)("button",{type:"button",onClick:()=>a(),className:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",children:"Logout"})]})})}function h(e){let{cookie:t,setCookie:n,signOut:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:["Hola, influencer",(0,r.jsx)("button",{type:"button",onClick:()=>a(),className:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",children:"Logout"})]})})}n(9008);var p=n(1163);function m(e){let{cookie:t,setCookie:n}=e,[s,i]=(0,o.useState)(""),[l,u]=(0,o.useState)(""),[m,g]=(0,o.useState)(""),[x,_]=(0,o.useState)(""),[v,b]=(0,o.useState)(""),[j,y]=(0,o.useState)(!1),S=(0,p.useRouter)(),C=()=>{y(!j),console.log("Click")};async function O(){await fetch("/api/login.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,pwd:l})}).then(e=>e.json()).then(e=>{401!==e.code&&(n("user",e,{path:"/",maxAge:3600,sameSite:!0}),n("authenticated",!0,{path:"/",maxAge:3600,sameSite:!0}))})}function N(){console.log("logout"),n("authenticated",!1,{path:"/",maxAge:3600,sameSite:!0}),n("user",{},{path:"/",maxAge:3600,sameSite:!0}),S.push("/cuenta")}async function E(){await fetch("/api/signUp.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:m,lastname:x,address:v,email:s,pwd:l})}).then(e=>e.json()).then(e=>{200==e.code&&(n("user",e,{path:"/",maxAge:3600,sameSite:!0}),n("authenticated",!0,{path:"/",maxAge:3600,sameSite:!0}),(0,a.redirect)("/cuenta"))})}return((0,o.useEffect)(()=>{void 0!==t.user&&1===t.user.admin&&S.push("/cuenta/admin")}),"true"!==t.authenticated)?(0,r.jsxs)("div",{children:[(0,r.jsx)(d,{onRegisterClick:C,hidden:!j,name:m,setName:g,lastname:x,setLastname:_,address:v,setAddress:b,email:s,setEmail:i,pwd:l,setPwd:u,signUp:E}),(0,r.jsx)("div",{}),(0,r.jsx)(c,{onRegisterClick:C,hidden:j,email:s,setEmail:i,pwd:l,setPwd:u,signIn:O})]}):1===t.user.influencer?(0,r.jsx)(h,{signOut:N}):(0,r.jsx)(f,{signOut:N})}},6803:function(e){e.exports={hidden:"Login_hidden__UWOAC",form:"Login_form__Lnts1",input:"Login_input__r_1vS",button:"Login_button__ejJ5H",label:"Login_label__wToWk",checkbox:"Login_checkbox__JRO0W",labelText:"Login_labelText__CiEjv",asideText:"Login_asideText__2YKrt",registerText:"Login_registerText__sluZP",registerLink:"Login_registerLink__s_Fb7"}},9008:function(e,t,n){n(3121)},9332:function(e,t,n){e.exports=n(3897)},1163:function(e,t,n){e.exports=n(880)},2852:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAsyncLocalStorage=function(){return globalThis.AsyncLocalStorage?new globalThis.AsyncLocalStorage:new n};class n{disable(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}getStore(){}run(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}exit(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}enterWith(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.staticGenerationAsyncStorage=void 0;var r=n(2852);let a=r.createAsyncLocalStorage();t.staticGenerationAsyncStorage=a,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9876)}),_N_E=e.O()}]);