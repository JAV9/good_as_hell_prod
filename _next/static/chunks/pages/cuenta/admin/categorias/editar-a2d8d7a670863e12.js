(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{6545:function(t,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/admin/categorias/editar",function(){return e(3139)}])},3139:function(t,o,e){"use strict";e.r(o),e.d(o,{default:function(){return P}});var _=e(5893),r=e(1163),c=e(7294),n=e(1664),u=e.n(n),a=e(9734),d=e(7400),i=e.n(d);let l=t=>{let{cname:o,cid:e}=t,[r,n]=(0,c.useState)(e),[a,d]=(0,c.useState)(o);async function l(){let t=new FormData;t.append("name",a),t.append("id",r),console.log(t),a.length>0?await fetch("/api/updateCategory.php",{method:"POST",body:t}).then(t=>t.json()).then(t=>{200==t.code&&(console.log("categoria actualizada"),alert("Categor\xeda actualizada!"))}):alert("El nombre no puede estar vac\xedo")}let s=t=>{l(),t.preventDefault()};return(0,_.jsxs)("div",{className:"admin-form",children:[(0,_.jsx)(u(),{href:"/cuenta/admin/categorias",children:(0,_.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,_.jsxs)("form",{method:"POST",className:i().form,onSubmit:s,children:[(0,_.jsx)("div",{className:"field",children:(0,_.jsx)("input",{className:i().input,type:"text",name:"name",value:a,onChange:t=>d(t.target.value),placeholder:"Nombre de la categor\xeda"})}),(0,_.jsx)("input",{className:"button",type:"submit",value:"Actualizar categor\xeda"})]})]})};var s=e(9008),p=e.n(s);function P(t){var o;let{cookie:e,setCookie:c}=t,n=(0,r.useRouter)();console.log(n.query);let{data:u,error:d,isLoading:i}=function(t){let{data:o,error:e,isLoading:_}=(0,a.ZP)("/api/getCategory.php?url="+t,function(){for(var t=arguments.length,o=Array(t),e=0;e<t;e++)o[e]=arguments[e];return fetch(...o).then(t=>t.json())});return{data:o,error:e,isLoading:_}}(n.query.c);console.log("data",u);let s=(0,_.jsx)(p(),{children:(0,_.jsx)("title",{children:"Editar categoria"})}),P=(0,_.jsx)(_.Fragment,{});return n.query.c&&(null===(o=e.user)||void 0===o?void 0:o.admin)===1?i?P=(0,_.jsx)("div",{children:"Cargando..."}):void 0!==u&&(P=(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(l,{cid:u.id,cname:u.name})})):P=(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})}),(0,_.jsxs)(_.Fragment,{children:[s,P]})}},7400:function(t){t.exports={main:"Product_main__D1T_V",description:"Product_description__gEFO7",code:"Product_code__07tii",grid:"Product_grid__0Nj6T",card:"Product_card__c2BI6",center:"Product_center__pC25y",logo:"Product_logo__nrE2_",thirteen:"Product_thirteen__5EVaS",rotate:"Product_rotate__e1Iy1",content:"Product_content__HNT8V",vercelLogo:"Product_vercelLogo__Tkz5B",main_category:"Product_main_category__Q_z_B",category_overtext:"Product_category_overtext__hfRAg",product:"Product_product__8Nmu7",white_box:"Product_white_box__kOORt",small_white_box:"Product_small_white_box__NLfSE",white_box_medium:"Product_white_box_medium__yAQA0",color_selection:"Product_color_selection__sKmv6",size_selection:"Product_size_selection__hcR69","buy-now-btn":"Product_buy-now-btn__VW7S9",orange_button:"Product_orange_button__2hXWK",option:"Product_option__tJ6hS","option-buttons":"Product_option-buttons__cGeUG","color-buttons":"Product_color-buttons__sytol",color_button_red:"Product_color_button_red__B4geO",color_button_green:"Product_color_button_green__yxtll",color_button_blue:"Product_color_button_blue__NaN0h","color-option":"Product_color-option__X8Qor","size-option":"Product_size-option__pcO3h","button-panel":"Product_button-panel__pkypg","add-to-cart-btn":"Product_add-to-cart-btn__GBOsM",hidden:"Product_hidden__w42X8",form:"Product_form__OaV6h",input:"Product_input__rM0Za",button:"Product_button__Y2bJ_",label:"Product_label___xK8j",checkbox:"Product_checkbox__t1iw_",labelText:"Product_labelText__Qrh_0",asideText:"Product_asideText__qeUY4",registerText:"Product_registerText__xkLAf",registerLink:"Product_registerLink__EsB2b",textarea:"Product_textarea__BmnuD",imageDisplay:"Product_imageDisplay__ezuSf",disabled:"Product_disabled__J3KZN",productTitle:"Product_productTitle__RW_Yd",productImage:"Product_productImage___lQWd",productDetails:"Product_productDetails__YWtRh",stockWarning:"Product_stockWarning__LhgLL",stockOk:"Product_stockOk__Ag7Ga",stockEmpty:"Product_stockEmpty__pYOBD",productButton:"Product_productButton__YaiIO",productDescription:"Product_productDescription__DYizj",productMaterial:"Product_productMaterial__qZequ",whiteBox:"Product_whiteBox__u6pWE",left:"Product_left___u7T_",right:"Product_right__N57Mb",container:"Product_container__zjexK"}},9008:function(t,o,e){t.exports=e(2636)},1163:function(t,o,e){t.exports=e(6885)}},function(t){t.O(0,[734,774,888,179],function(){return t(t.s=6545)}),_N_E=t.O()}]);