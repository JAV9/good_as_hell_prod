(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{9133:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/influencer/misDatos",function(){return o(6677)}])},1430:function(t,e,o){"use strict";var r=o(5893),_=o(7400),n=o.n(_),a=o(7294);o(1664);let c=t=>{let{uname:e,uid:o,ulastname:_,uaddress:c,uemail:u,upwd:s,uinfluencer:i}=t,[l,d]=(0,a.useState)(o),[p,h]=(0,a.useState)(u),[m,x]=(0,a.useState)(""),[P,b]=(0,a.useState)(e),[g,f]=(0,a.useState)(_),[j,N]=(0,a.useState)(c),[v,y]=(0,a.useState)(i),[k,w]=(0,a.useState)(!1),T=()=>{w(!k)};async function S(){let t={id:l,name:P,lastname:g,address:j,email:p,influencer:v};""!=m&&(t.pwd=m),console.log("args",t),P.length>0&&p.length>0?await fetch("/api/updateUser.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>{200==t.code&&(console.log("user actualizado"),alert("Usuario actualizado!"))}):alert("Nombre, email no puedem estar vac\xedos")}let O=t=>{S(),t.preventDefault()};return(0,r.jsx)("div",{className:"admin-form",children:(0,r.jsxs)("form",{className:n().form,method:"POST",onSubmit:O,children:[(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:n().input,type:"text",name:"name",value:P,onChange:t=>b(t.target.value),placeholder:"Nombre"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:n().input,type:"text",name:"lastname",value:g,onChange:t=>f(t.target.value),placeholder:"Apellido(s)"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:n().input,type:"text",name:"address",value:j,onChange:t=>N(t.target.value),placeholder:"Direcci\xf3n"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:n().input,type:"text",name:"email",value:p,onChange:t=>h(t.target.value),placeholder:"E-mail"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:n().input,type:k?"text":"password",name:"pwd",value:m,onChange:t=>x(t.target.value),placeholder:"Contrase\xf1a - Rellenar solo si deseas modificarla"})}),(0,r.jsxs)("label",{className:n().label,children:[(0,r.jsx)("input",{className:n().checkbox,type:"checkbox",onClick:T}),(0,r.jsx)("span",{className:n().labelText,children:"Muestra contrase\xf1a"})]}),(0,r.jsxs)("label",{className:n().label,children:[(0,r.jsx)("input",{className:n().checkbox,type:"checkbox",onClick:function(){y(1==v?0:1)},checked:1===v}),(0,r.jsx)("span",{className:n().labelText,children:"Influencer"})]}),(0,r.jsx)("input",{className:n().button,type:"submit",value:"Actualizar usuario"})]})})};e.Z=c},9372:function(t,e,o){"use strict";o.d(e,{Z:function(){return _}});var r=o(9734);function _(t){let{data:e,error:o,isLoading:_}=(0,r.ZP)("/api/getUser.php?id="+t,function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return fetch(...e).then(t=>t.json())});return{data:e,error:o,isLoading:_}}},6677:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return l}});var r=o(5893),_=o(1163);o(7294);var n=o(1664),a=o.n(n),c=o(9372),u=o(1430),s=o(9008),i=o.n(s);function l(t){let{cookie:e,setCookie:o}=t,n=(0,_.useRouter)();console.log(n.query);let{data:s,error:l,isLoading:d}=(0,c.Z)(n.query.u);console.log("data",s);let p=(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Mis datos"})}),h=(0,r.jsx)(r.Fragment,{});return n.query.u?d?h=(0,r.jsx)("div",{children:"Cargando..."}):void 0!==s&&(h=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{href:"/cuenta/admin/usuarios",children:(0,r.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,r.jsx)(u.Z,{uid:s.id,uname:s.name,ulastname:s.lastname,uaddress:s.address,uemail:s.email,upwd:s.pwd})]})):h=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})}),(0,r.jsxs)(r.Fragment,{children:[p,h]})}},7400:function(t){t.exports={main:"Product_main__D1T_V",description:"Product_description__gEFO7",code:"Product_code__07tii",grid:"Product_grid__0Nj6T",card:"Product_card__c2BI6",center:"Product_center__pC25y",logo:"Product_logo__nrE2_",thirteen:"Product_thirteen__5EVaS",rotate:"Product_rotate__e1Iy1",content:"Product_content__HNT8V",vercelLogo:"Product_vercelLogo__Tkz5B",main_category:"Product_main_category__Q_z_B",category_overtext:"Product_category_overtext__hfRAg",product:"Product_product__8Nmu7",white_box:"Product_white_box__kOORt",small_white_box:"Product_small_white_box__NLfSE",white_box_medium:"Product_white_box_medium__yAQA0",color_selection:"Product_color_selection__sKmv6",size_selection:"Product_size_selection__hcR69","buy-now-btn":"Product_buy-now-btn__VW7S9",orange_button:"Product_orange_button__2hXWK",option:"Product_option__tJ6hS","option-buttons":"Product_option-buttons__cGeUG","color-buttons":"Product_color-buttons__sytol",color_button_red:"Product_color_button_red__B4geO",color_button_green:"Product_color_button_green__yxtll",color_button_blue:"Product_color_button_blue__NaN0h","color-option":"Product_color-option__X8Qor","size-option":"Product_size-option__pcO3h","button-panel":"Product_button-panel__pkypg","add-to-cart-btn":"Product_add-to-cart-btn__GBOsM",hidden:"Product_hidden__w42X8",form:"Product_form__OaV6h",input:"Product_input__rM0Za",button:"Product_button__Y2bJ_",label:"Product_label___xK8j",checkbox:"Product_checkbox__t1iw_",labelText:"Product_labelText__Qrh_0",asideText:"Product_asideText__qeUY4",registerText:"Product_registerText__xkLAf",registerLink:"Product_registerLink__EsB2b",textarea:"Product_textarea__BmnuD",imageDisplay:"Product_imageDisplay__ezuSf",disabled:"Product_disabled__J3KZN",productTitle:"Product_productTitle__RW_Yd",productImage:"Product_productImage___lQWd",productDetails:"Product_productDetails__YWtRh",stockWarning:"Product_stockWarning__LhgLL",stockOk:"Product_stockOk__Ag7Ga",stockEmpty:"Product_stockEmpty__pYOBD",productButton:"Product_productButton__YaiIO",productDescription:"Product_productDescription__DYizj",productMaterial:"Product_productMaterial__qZequ",whiteBox:"Product_whiteBox__u6pWE",left:"Product_left___u7T_",right:"Product_right__N57Mb",container:"Product_container__zjexK"}},9008:function(t,e,o){t.exports=o(2636)},1163:function(t,e,o){t.exports=o(6885)}},function(t){t.O(0,[734,774,888,179],function(){return t(t.s=9133)}),_N_E=t.O()}]);