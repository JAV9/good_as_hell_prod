(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{1613:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/admin/usuarios/editar",function(){return o(6863)}])},6863:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return d}});var n=o(5893),a=o(1163),r=o(7294),_=o(1664),c=o.n(_),u=o(9734),l=o(1553),s=o.n(l);let i=e=>{let{uname:t,uid:o,ulastname:a,uaddress:_,uemail:u,upwd:l,uinfluencer:i}=e,[d,p]=(0,r.useState)(o),[m,x]=(0,r.useState)(u),[h,b]=(0,r.useState)(""),[P,g]=(0,r.useState)(t),[f,v]=(0,r.useState)(a),[N,j]=(0,r.useState)(_),[w,y]=(0,r.useState)(i),[k,C]=(0,r.useState)(!1),S=()=>{C(!k)};async function T(){let e={id:d,name:P,lastname:f,address:N,email:m,influencer:w};""!=h&&(e.pwd=h),console.log("args",e),P.length>0&&m.length>0?await fetch("/api/updateUser.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{200==e.code&&(console.log("user actualizado"),alert("Usuario actualizado!"))}):alert("Nombre, email no puedem estar vac\xedos")}return(0,n.jsxs)("div",{children:[(0,n.jsx)(c(),{href:"/cuenta/admin/usuarios",children:(0,n.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,n.jsxs)("form",{className:s().form,method:"POST",children:[(0,n.jsx)("div",{className:"field",children:(0,n.jsx)("input",{className:s().input,type:"text",name:"name",value:P,onChange:e=>g(e.target.value),placeholder:"Nombre"})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsx)("input",{className:s().input,type:"text",name:"lastname",value:f,onChange:e=>v(e.target.value),placeholder:"Apellido(s)"})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsx)("input",{className:s().input,type:"text",name:"address",value:N,onChange:e=>j(e.target.value),placeholder:"Direcci\xf3n"})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsx)("input",{className:s().input,type:"text",name:"email",value:m,onChange:e=>x(e.target.value),placeholder:"E-mail"})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsx)("input",{className:s().input,type:k?"text":"password",name:"pwd",value:h,onChange:e=>b(e.target.value),placeholder:"Contrase\xf1a - Rellenar solo si deseas modificarla"})}),(0,n.jsxs)("label",{className:s().label,children:[(0,n.jsx)("input",{className:s().checkbox,type:"checkbox",onClick:S}),(0,n.jsx)("span",{className:s().labelText,children:"Muestra contrase\xf1a"})]}),(0,n.jsxs)("label",{className:s().label,children:[(0,n.jsx)("input",{className:s().checkbox,type:"checkbox",onClick:function(){y(1==w?0:1)},checked:1===w}),(0,n.jsx)("span",{className:s().labelText,children:"Influencer"})]}),(0,n.jsx)("input",{className:s().button,type:"button",value:"Actualizar usuario",onClick:T})]})]})};function d(e){var t;let{cookie:o,setCookie:r}=e,_=(0,a.useRouter)();console.log(_.query);let{data:c,error:l,isLoading:s}=function(e){let{data:t,error:o,isLoading:n}=(0,u.ZP)("/api/getUser.php?id="+e,function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return fetch(...t).then(e=>e.json())});return{data:t,error:o,isLoading:n}}(_.query.u);return(console.log("data",c),_.query.u&&(null===(t=o.user)||void 0===t?void 0:t.admin)===1)?s?(0,n.jsx)("div",{children:"Cargando..."}):void 0!==c?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i,{uid:c.id,uname:c.name,ulastname:c.lastname,uaddress:c.address,uemail:c.email,upwd:c.pwd,uinfluencer:c.influencer})}):void 0:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})})}},1553:function(e){e.exports={main:"Product_main__CGPgU",description:"Product_description__wwpon",code:"Product_code__dOlB_",grid:"Product_grid__tv0GF",card:"Product_card__wNsd3",center:"Product_center__WX5WX",logo:"Product_logo__4YH0N",thirteen:"Product_thirteen__YAbZ8",rotate:"Product_rotate__Guoft",content:"Product_content__IoRn4",vercelLogo:"Product_vercelLogo__SWn6_",main_category:"Product_main_category__RaNmT",category_overtext:"Product_category_overtext__0ab7V",product:"Product_product__03_Hw",white_box:"Product_white_box__LLbZz",small_white_box:"Product_small_white_box__fgJ08",white_box_medium:"Product_white_box_medium__ui77B",color_selection:"Product_color_selection__2UPrq",size_selection:"Product_size_selection__Vx_VJ","buy-now-btn":"Product_buy-now-btn__i_mmW",orange_button:"Product_orange_button__aOX4R",option:"Product_option__w3fvy","option-buttons":"Product_option-buttons__nS_Vo","color-buttons":"Product_color-buttons__ZVB1Y",color_button_red:"Product_color_button_red__wForZ",color_button_green:"Product_color_button_green__P56Nq",color_button_blue:"Product_color_button_blue__ikFrk","color-option":"Product_color-option__kM5Ix","size-option":"Product_size-option__eQiwk","button-panel":"Product_button-panel__bV3jA","add-to-cart-btn":"Product_add-to-cart-btn__gdJZ9",hidden:"Product_hidden__TJmD6",form:"Product_form__9oBf2",input:"Product_input__CZJLW",button:"Product_button__O4U5w",label:"Product_label__m45_S",checkbox:"Product_checkbox__aPxwX",labelText:"Product_labelText__NMVH3",asideText:"Product_asideText__CYmXI",registerText:"Product_registerText__Gb7rD",registerLink:"Product_registerLink__MgSyI"}},1163:function(e,t,o){e.exports=o(880)}},function(e){e.O(0,[734,774,888,179],function(){return e(e.s=1613)}),_N_E=e.O()}]);