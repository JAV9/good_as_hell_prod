(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{993:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/admin/productos/crear",function(){return o(6121)}])},3763:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var r=o(9734);function c(){let{data:e,error:t,isLoading:o}=(0,r.ZP)("/api/listCategories.php",function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return fetch(...t).then(e=>e.json())});return{data:e,error:t,isLoading:o}}},6121:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return m}});var r=o(5893),c=o(7400),a=o.n(c),n=o(7294),_=o(1664),i=o.n(_),l=o(3748),s=o(9548);let d=e=>{let{name:t,setName:o,stock:c,setStock:n,material:_,setMaterial:i,description:d,setDescription:u,price:p,setPrice:h,img:m,setImg:x,available:g,setAvailable:b,categories:P,categoriesSelected:f,setSelectedCategories:j}=e;console.log("categories",P);let v=[];null==P||P.map(e=>{v.push({label:e.name,value:e.id})});let N=e=>{console.log("selected",e),j(e)};async function k(){console.log(m);let e=new FormData;e.append("name",t),e.append("description",d),e.append("material",_),e.append("price",p),e.append("available",g),e.append("stock",c),e.append("img",m),e.append("categories",JSON.stringify(f)),console.log(e),t.length>0?await fetch("/api/createProduct.php",{method:"POST",body:e}).then(e=>e.json()).then(e=>{200==e.code&&(console.log("producto creado"),alert("Producto creado!"),o(""),h(0),x(""),b(!1))}):alert("El nombre no puede estar vac\xedo")}let y=e=>{k(),e.preventDefault()};return(0,r.jsx)("div",{className:"admin-form",children:(0,r.jsxs)("form",{method:"POST",className:a().form,onSubmit:y,children:[(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:a().input,type:"text",name:"email",value:t,onChange:e=>o(e.target.value),placeholder:"Nombre del producto"})}),(0,r.jsxs)("div",{className:"field half",children:[(0,r.jsx)("span",{children:"Precio"}),(0,r.jsx)("input",{className:a().input,type:"number",name:"price",value:p,onChange:e=>h(e.target.value),placeholder:"Precio"})]}),(0,r.jsxs)("div",{className:"field",children:[(0,r.jsx)("input",{className:a().input,type:"file",name:"img",onChange:e=>{console.log(e.target.files[0]),x(e.target.files[0])},placeholder:"Imagen"}),m&&(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{alt:"not found",width:"250px",src:URL.createObjectURL(m)}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{onClick:()=>x(null),children:"Eliminar imagen"})]})]}),(0,r.jsx)("label",{className:a().label,children:(0,r.jsx)(l.Z,{style:{width:"100%"},direction:"vertical",children:(0,r.jsx)(s.Z,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Selecciona categor\xeda",defaultValue:[],onChange:N,options:v})})}),(0,r.jsxs)("label",{className:a().label,children:[(0,r.jsx)("input",{className:a().checkbox,type:"checkbox",onClick:function(){b(1==g?0:1)}}),(0,r.jsx)("span",{className:a().labelText,children:"Disponible"})]}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("textarea",{name:"description",value:d,onChange:e=>u(e.target.value),placeholder:"Descripci\xf3n",rows:"10",cols:"50",className:a().textarea})}),(0,r.jsx)("div",{className:"field",children:(0,r.jsx)("input",{className:a().input,type:"text",name:"material",value:_,onChange:e=>i(e.target.value),placeholder:"Materiales"})}),(0,r.jsxs)("div",{className:"field half",children:[(0,r.jsx)("span",{children:"Stock"}),(0,r.jsx)("input",{className:a().input,type:"number",name:"stock",value:c,onChange:e=>n(e.target.value),placeholder:"Precio"})]}),(0,r.jsx)("input",{className:"button",type:"submit",value:"Crear producto"})]})})};var u=o(3763),p=o(9008),h=o.n(p);function m(e){var t;let{cookie:o,setCookie:c}=e,[a,_]=(0,n.useState)(""),[l,s]=(0,n.useState)(""),[p,m]=(0,n.useState)(""),[x,g]=(0,n.useState)(0),[b,P]=(0,n.useState)(0),[f,j]=(0,n.useState)(0),[v,N]=(0,n.useState)(null),{data:k,error:y,isLoading:w}=(0,u.Z)(),[S,T]=(0,n.useState)([]),C=(0,r.jsx)(h(),{children:(0,r.jsx)("title",{children:"Crear producto"})}),O=(0,r.jsx)(r.Fragment,{});return O=(null===(t=o.user)||void 0===t?void 0:t.admin)===1?(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{href:"/cuenta/admin/productos",children:(0,r.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,r.jsx)(d,{name:a,setName:_,description:l,setDescription:s,material:p,setMaterial:m,price:x,setPrice:g,available:b,setAvailable:P,stock:f,setStock:j,img:v,setImg:N,categories:k,categoriesSelected:S,setSelectedCategories:T})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})}),(0,r.jsxs)(r.Fragment,{children:[C,O]})}},7400:function(e){e.exports={main:"Product_main__D1T_V",description:"Product_description__gEFO7",code:"Product_code__07tii",grid:"Product_grid__0Nj6T",card:"Product_card__c2BI6",center:"Product_center__pC25y",logo:"Product_logo__nrE2_",thirteen:"Product_thirteen__5EVaS",rotate:"Product_rotate__e1Iy1",content:"Product_content__HNT8V",vercelLogo:"Product_vercelLogo__Tkz5B",main_category:"Product_main_category__Q_z_B",category_overtext:"Product_category_overtext__hfRAg",product:"Product_product__8Nmu7",white_box:"Product_white_box__kOORt",small_white_box:"Product_small_white_box__NLfSE",white_box_medium:"Product_white_box_medium__yAQA0",color_selection:"Product_color_selection__sKmv6",size_selection:"Product_size_selection__hcR69","buy-now-btn":"Product_buy-now-btn__VW7S9",orange_button:"Product_orange_button__2hXWK",option:"Product_option__tJ6hS","option-buttons":"Product_option-buttons__cGeUG","color-buttons":"Product_color-buttons__sytol",color_button_red:"Product_color_button_red__B4geO",color_button_green:"Product_color_button_green__yxtll",color_button_blue:"Product_color_button_blue__NaN0h","color-option":"Product_color-option__X8Qor","size-option":"Product_size-option__pcO3h","button-panel":"Product_button-panel__pkypg","add-to-cart-btn":"Product_add-to-cart-btn__GBOsM",hidden:"Product_hidden__w42X8",form:"Product_form__OaV6h",input:"Product_input__rM0Za",button:"Product_button__Y2bJ_",label:"Product_label___xK8j",checkbox:"Product_checkbox__t1iw_",labelText:"Product_labelText__Qrh_0",asideText:"Product_asideText__qeUY4",registerText:"Product_registerText__xkLAf",registerLink:"Product_registerLink__EsB2b",textarea:"Product_textarea__BmnuD",imageDisplay:"Product_imageDisplay__ezuSf",disabled:"Product_disabled__J3KZN",productTitle:"Product_productTitle__RW_Yd",productImage:"Product_productImage___lQWd",productDetails:"Product_productDetails__YWtRh",stockWarning:"Product_stockWarning__LhgLL",stockOk:"Product_stockOk__Ag7Ga",stockEmpty:"Product_stockEmpty__pYOBD",productButton:"Product_productButton__YaiIO",productDescription:"Product_productDescription__DYizj",productMaterial:"Product_productMaterial__qZequ",whiteBox:"Product_whiteBox__u6pWE",left:"Product_left___u7T_",right:"Product_right__N57Mb",container:"Product_container__zjexK"}},9008:function(e,t,o){e.exports=o(2636)}},function(e){e.O(0,[734,583,774,888,179],function(){return e(e.s=993)}),_N_E=e.O()}]);