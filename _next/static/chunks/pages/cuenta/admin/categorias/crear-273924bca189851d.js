(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{9336:function(t,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/admin/categorias/crear",function(){return e(2372)}])},2372:function(t,o,e){"use strict";e.r(o),e.d(o,{default:function(){return i}});var _=e(5893),r=e(7294),n=e(1664),c=e.n(n),u=e(1553),d=e.n(u);let a=t=>{let{name:o,setName:e}=t;async function r(){let t=new FormData;t.append("name",o),console.log(t),o.length>0?await fetch("/api/createCategory.php",{method:"POST",body:t}).then(t=>t.json()).then(t=>{200==t.code&&(console.log("categoria creada"),alert("Categor\xeda creada!"),e(""))}):alert("El nombre no puede estar vac\xedo")}return(0,_.jsx)("div",{children:(0,_.jsxs)("form",{method:"POST",className:d().form,children:[(0,_.jsx)("div",{className:"field",children:(0,_.jsx)("input",{className:d().input,type:"text",name:"email",value:o,onChange:t=>e(t.target.value),placeholder:"Nombre de la categor\xeda"})}),(0,_.jsx)("input",{className:"button",type:"button",value:"Crear categor\xeda",onClick:r})]})})};function i(t){var o;let{cookie:e,setCookie:n}=t,[u,d]=(0,r.useState)("");return(null===(o=e.user)||void 0===o?void 0:o.admin)===1?(0,_.jsxs)("div",{children:[(0,_.jsx)(c(),{href:"/cuenta/admin/categorias",children:(0,_.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,_.jsx)(a,{name:u,setName:d})]}):(0,_.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})}},1553:function(t){t.exports={main:"Product_main__CGPgU",description:"Product_description__wwpon",code:"Product_code__dOlB_",grid:"Product_grid__tv0GF",card:"Product_card__wNsd3",center:"Product_center__WX5WX",logo:"Product_logo__4YH0N",thirteen:"Product_thirteen__YAbZ8",rotate:"Product_rotate__Guoft",content:"Product_content__IoRn4",vercelLogo:"Product_vercelLogo__SWn6_",main_category:"Product_main_category__RaNmT",category_overtext:"Product_category_overtext__0ab7V",product:"Product_product__03_Hw",white_box:"Product_white_box__LLbZz",small_white_box:"Product_small_white_box__fgJ08",white_box_medium:"Product_white_box_medium__ui77B",color_selection:"Product_color_selection__2UPrq",size_selection:"Product_size_selection__Vx_VJ","buy-now-btn":"Product_buy-now-btn__i_mmW",orange_button:"Product_orange_button__aOX4R",option:"Product_option__w3fvy","option-buttons":"Product_option-buttons__nS_Vo","color-buttons":"Product_color-buttons__ZVB1Y",color_button_red:"Product_color_button_red__wForZ",color_button_green:"Product_color_button_green__P56Nq",color_button_blue:"Product_color_button_blue__ikFrk","color-option":"Product_color-option__kM5Ix","size-option":"Product_size-option__eQiwk","button-panel":"Product_button-panel__bV3jA","add-to-cart-btn":"Product_add-to-cart-btn__gdJZ9",hidden:"Product_hidden__TJmD6",form:"Product_form__9oBf2",input:"Product_input__CZJLW",button:"Product_button__O4U5w",label:"Product_label__m45_S",checkbox:"Product_checkbox__aPxwX",labelText:"Product_labelText__NMVH3",asideText:"Product_asideText__CYmXI",registerText:"Product_registerText__Gb7rD",registerLink:"Product_registerLink__MgSyI"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=9336)}),_N_E=t.O()}]);