(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{993:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/admin/productos/crear",function(){return o(9122)}])},5827:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var r=o(9734);function n(){let{data:e,error:t,isLoading:o}=(0,r.ZP)("/api/listCategories.php",function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return fetch(...t).then(e=>e.json())});return{data:e,error:t,isLoading:o}}},9122:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return p}});var r=o(5893),n=o(5969),c=o.n(n),_=o(7294),a=o(1664),l=o.n(a),i=o(3748),u=o(9548);let d=e=>{let{name:t,setName:o,price:n,setPrice:_,img:a,setImg:l,available:d,setAvailable:s,categories:p,categoriesSelected:h,setSelectedCategories:b}=e;console.log("categories",p);let m=[];null==p||p.map(e=>{m.push({label:e.name,value:e.id})});let g=e=>{console.log("selected",e),b(e)};async function x(){console.log(a);let e=new FormData;e.append("name",t),e.append("price",n),e.append("img",a),e.append("available",d),e.append("categories",JSON.stringify(h)),console.log(e),t.length>0?await fetch("/api/createProduct.php",{method:"POST",body:e}).then(e=>e.json()).then(e=>{200==e.code&&(console.log("producto creado"),alert("Producto creado!"),o(""),_(0),l(""),s(!1))}):alert("El nombre no puede estar vac\xedo")}return(0,r.jsx)("div",{children:(0,r.jsxs)("form",{method:"POST",className:c().form,children:[(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:c().input,type:"text",name:"email",value:t,onChange:e=>o(e.target.value),placeholder:"Nombre del producto"})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:c().input,type:"number",name:"price",value:n,onChange:e=>_(e.target.value),placeholder:"Precio"})}),(0,r.jsxs)("div",{className:"field",children:[(0,r.jsx)("input",{className:c().input,type:"file",name:"img",onChange:e=>{console.log(e.target.files[0]),l(e.target.files[0])},placeholder:"Imagen"}),a&&(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{alt:"not found",width:"250px",src:URL.createObjectURL(a)}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{onClick:()=>l(null),children:"Eliminar imagen"})]})]}),(0,r.jsx)("label",{className:c().label,children:(0,r.jsx)(i.Z,{style:{width:"100%"},direction:"vertical",children:(0,r.jsx)(u.Z,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Selecciona categor\xeda",defaultValue:[],onChange:g,options:m})})}),(0,r.jsxs)("label",{className:c().label,children:[(0,r.jsx)("input",{className:c().checkbox,type:"checkbox",onClick:function(){s(1==d?0:1)}}),(0,r.jsx)("span",{className:c().labelText,children:"Disponible"})]}),(0,r.jsx)("input",{className:"button",type:"button",value:"Crear producto",onClick:x})]})})};var s=o(5827);function p(e){var t;let{cookie:o,setCookie:n}=e,[c,a]=(0,_.useState)(""),[i,u]=(0,_.useState)(0),[p,h]=(0,_.useState)(null),[b,m]=(0,_.useState)(0),{data:g,error:x,isLoading:P}=(0,s.Z)(),[f,v]=(0,_.useState)([]);return(null===(t=o.user)||void 0===t?void 0:t.admin)===1?(0,r.jsxs)("div",{children:[(0,r.jsx)(l(),{href:"/cuenta/admin/productos",children:(0,r.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,r.jsx)(d,{name:c,setName:a,price:i,setPrice:u,img:p,setImg:h,available:b,setAvailable:m,categories:g,categoriesSelected:f,setSelectedCategories:v})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})})}},5969:function(e){e.exports={main:"Product_main__D1T_V",description:"Product_description__gEFO7",code:"Product_code__07tii",grid:"Product_grid__0Nj6T",card:"Product_card__c2BI6",center:"Product_center__pC25y",logo:"Product_logo__nrE2_",thirteen:"Product_thirteen__5EVaS",rotate:"Product_rotate__e1Iy1",content:"Product_content__HNT8V",vercelLogo:"Product_vercelLogo__Tkz5B",main_category:"Product_main_category__Q_z_B",category_overtext:"Product_category_overtext__hfRAg",product:"Product_product__8Nmu7",white_box:"Product_white_box__kOORt",small_white_box:"Product_small_white_box__NLfSE",white_box_medium:"Product_white_box_medium__yAQA0",color_selection:"Product_color_selection__sKmv6",size_selection:"Product_size_selection__hcR69","buy-now-btn":"Product_buy-now-btn__VW7S9",orange_button:"Product_orange_button__2hXWK",option:"Product_option__tJ6hS","option-buttons":"Product_option-buttons__cGeUG","color-buttons":"Product_color-buttons__sytol",color_button_red:"Product_color_button_red__B4geO",color_button_green:"Product_color_button_green__yxtll",color_button_blue:"Product_color_button_blue__NaN0h","color-option":"Product_color-option__X8Qor","size-option":"Product_size-option__pcO3h","button-panel":"Product_button-panel__pkypg","add-to-cart-btn":"Product_add-to-cart-btn__GBOsM",hidden:"Product_hidden__w42X8",form:"Product_form__OaV6h",input:"Product_input__rM0Za",button:"Product_button__Y2bJ_",label:"Product_label___xK8j",checkbox:"Product_checkbox__t1iw_",labelText:"Product_labelText__Qrh_0",asideText:"Product_asideText__qeUY4",registerText:"Product_registerText__xkLAf",registerLink:"Product_registerLink__EsB2b"}}},function(e){e.O(0,[734,583,774,888,179],function(){return e(e.s=993)}),_N_E=e.O()}]);