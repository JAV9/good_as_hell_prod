(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{4381:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos",function(){return o(5406)}])},8896:function(t,e,o){"use strict";var r=o(5893),n=o(5675),c=o.n(n),i=o(7400),s=o.n(i);let a=t=>{let{name:e,description:o,material:n,price:i,img:a,url:d,id:l,available:_,stock:u,cookieCart:p,setCookieCart:h,showAlert:x}=t,m=()=>{if(!_)return;let t=void 0===p.cart?[]:p.cart;t.push({name:e,price:i,img:a,url:d,id:l}),console.log("New cart: "),console.log(t),h("cart",t,{path:"/",maxAge:3600,sameSite:!0}),x()};return(0,r.jsxs)("div",{className:"product",style:{display:"flex",flexWrap:"wrap"},children:[(0,r.jsx)("div",{className:s().imageDisplay,children:(0,r.jsx)(c(),{src:a,alt:"producto",width:500})}),(0,r.jsxs)("div",{className:s().container,style:{maxWidth:"50%"},children:[(0,r.jsxs)("div",{className:s().productDetails,children:[(0,r.jsx)("h2",{children:e}),(0,r.jsxs)("p",{style:{display:"table",margin:"0 auto",marginTop:"10px",marginBottom:"10px",fontSize:"15px"},children:[i," €"]}),u>0&&u<=20&&(0,r.jsxs)("p",{className:s().stockWarning,children:["Only ",u," in stock!!!"]}),u>20&&(0,r.jsx)("p",{className:s().stockOk,children:"In stock"}),0===u&&(0,r.jsx)("p",{className:s().stockEmpty,children:"Out of stock"}),(0,r.jsx)("button",{type:"button",className:"button "+(_?"":s().disabled),onClick:m,children:"Comprar"})]}),(0,r.jsxs)("div",{className:s().productDescription,children:[(0,r.jsx)("h3",{style:{marginTop:"10px",marginBottom:"15px"},children:"Descripci\xf3n"}),(0,r.jsx)("p",{style:{paddingLeft:"20px",paddingRight:"20px"},children:o})]}),(0,r.jsxs)("div",{className:s().productMaterial,children:[(0,r.jsx)("h3",{style:{marginTop:"10px",marginBottom:"15px"},children:"Materiales"}),(0,r.jsx)("p",{style:{paddingLeft:"20px",paddingRight:"20px"},children:n})]})]})]})};e.Z=a},2596:function(t,e,o){"use strict";o.d(e,{Z:function(){return p}});var r=o(5893),n=o(6017),c=o(5675),i=o.n(c),s=o(1664),a=o.n(s),d=o(2923),l=o.n(d),_=o(918),u=o(7294);function p(t){let{categories:e,sortSelection:o=0,count:c=20,showPages:s=!0,predefinedProds:d=[]}=t,p={data:void 0,error:void 0,isLoading:void 0};d.length>0?(p.data=d,p.isLoading=!1):p=(0,n.Z)(!0);let[h,x]=(0,u.useState)([]),[m,g]=(0,u.useState)(1),[P,j]=(0,u.useState)(1),f=(t,e)=>t.price<e.price?1:t.price>e.price?-1:0,b=(t,e)=>t.price<e.price?-1:t.price>e.price?1:0,v=(t,e)=>t.name.localeCompare(e.name),N=(t,e)=>e.name.localeCompare(t.name);(0,u.useEffect)(()=>{if(!p.isLoading){console.log("ran again");let t=[].concat(p.data);if(e&&Object.keys(e).length>0){let o=Object.values(e).filter(t=>t).length;o>0&&(t=t.filter(t=>{for(let o of t.categories)if(e[o])return!0;return!1}))}console.log("sort selection",o),o==_.r.PRECIO_ALTO_BAJO?t.sort(f):o==_.r.PRECIO_BAJO_ALTO?t.sort(b):o==_.r.NOMBRE_AZ?t.sort(v):o==_.r.NOMBRE_ZA&&t.sort(N),j(Math.ceil(t.length/c)),x(t=t.slice((m-1)*c,Math.min(t.length,(m-1)*c)+c))}},[e,c,m,p.data,p.isLoading,o]);let y=()=>{m>1&&g(m-1)},k=()=>{m<P&&g(m+1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:l().productList,children:h.length>0?h.map(t=>(0,r.jsx)("div",{className:l().card,children:(0,r.jsx)(a(),{href:"/productos/?p=".concat(t.url),children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(i(),{src:t.img,alt:"nombre producto",width:1366,height:1911}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("p",{children:(0,r.jsx)("span",{className:l().productName,children:t.name})}),(0,r.jsxs)("p",{children:[t.price," €"]})]})]})})},t.id)):(0,r.jsx)("h3",{children:"No se encontraron productos"})}),s&&(0,r.jsxs)("div",{className:l().pages,children:[(0,r.jsx)("button",{className:l().button+" "+(m<=1?l().disabled:""),type:"button",onClick:y,children:(0,r.jsx)("span",{children:"<"})}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:m})}),(0,r.jsx)("button",{className:l().button+" "+(m>=P?l().disabled:""),type:"button",onClick:k,children:(0,r.jsx)("span",{children:">"})}),(0,r.jsx)("div",{children:(0,r.jsxs)("span",{children:["de ",P]})})]})]})}},9117:function(t,e,o){"use strict";o.d(e,{Z:function(){return m}});var r=o(5893),n=o(7294),c=o(2596),i=o(1210),s=o.n(i),a=o(8029),d=o.n(a);function l(t){let{label:e,options:o,optionsSelected:n,setOptionsSelected:c}=t;return(0,r.jsxs)("div",{className:d().accordionSection,children:[(0,r.jsx)("input",{type:"checkbox",name:"filter-accordion",id:e,className:d().accordionInput,defaultChecked:!0}),(0,r.jsx)("label",{htmlFor:e,className:d().accordionLabel,children:e}),(0,r.jsx)("div",{className:d().accordionContent,children:o.map(t=>(0,r.jsxs)("div",{className:d().option,children:[(0,r.jsx)("input",{type:"checkbox",id:t,checked:n[t],onChange:()=>{c({...n,[t]:!n[t]})}}),(0,r.jsx)("label",{htmlFor:t,children:t})]},t))})]})}var _=o(3763);function u(t){let{selectedCategories:e,setSelectedCategories:o}=t,[c,i]=(0,n.useState)([]),{data:s,error:a,isLoading:u}=(0,_.Z)();return(0,n.useEffect)(()=>{if(u)i([]),o({});else{let t=s.map(t=>t.name);if(i(t),e&&0===Object.keys(e).length){let e=t.reduce((t,e)=>(t[e]=!1,t),{});o(e)}}},[s,u,e,o]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:d().accordion,children:(0,r.jsx)(l,{label:"Categor\xedas",options:c,optionsSelected:e,setOptionsSelected:o})})})}var p=o(5434),h=o(918);function x(t){let{selection:e,setSelection:o}=t,[c,i]=(0,n.useState)(!0);return(0,r.jsxs)("div",{className:s().dropdown+" "+(c?s().hidden:""),onClick:()=>{i(!c)},children:[(0,r.jsxs)("div",{className:s().dropdownText,children:["Ordenar por: ",(0,r.jsx)("span",{children:h.a[e]})," ",(0,r.jsx)(p.wlS,{className:s().sortIcon})]}),(0,r.jsx)("div",{className:s().dropdownContent,children:(0,r.jsx)("ul",{className:s().list,children:h.a.map((t,n)=>(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"radio",id:n,name:t,value:n,checked:e===n,onChange:t=>{o(t.target.value),i(!0)}}),(0,r.jsx)("label",{htmlFor:n,onClick:()=>{i(!0)},children:t})]},n))})})]})}function m(t){let{predefinedProds:e=[]}=t,[o,i]=(0,n.useState)({}),[a,d]=(0,n.useState)(0);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:s().productNav,children:[(0,r.jsxs)("div",{className:s().toolbar,children:[(0,r.jsxs)("h3",{children:["Categor\xedas seleccionadas: ",(()=>{let t=Object.keys(o).flatMap(t=>o[t]?[t]:[]);return t.length>0?t.join(", "):"Ninguna"})()]}),(0,r.jsx)(x,{selection:a,setSelection:d})]}),(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)("div",{className:s().filters,children:(0,r.jsx)(u,{selectedCategories:o,setSelectedCategories:i})}),(0,r.jsx)("div",{className:s().display,children:(0,r.jsx)(c.Z,{categories:o,sortSelection:a,count:8,predefinedProds:e})})]})]})})}},9156:function(t,e,o){"use strict";o.d(e,{Z:function(){return i}});var r=o(5893),n=o(3736),c=o.n(n);function i(t){let{status:e,message:o,hidden:n,setHidden:i,canExit:s=!0}=t,a="",d="";return"success"===e?(a="\xa1\xc9xito!",d=c().success):"warning"===e&&(a="\xa1Atenci\xf3n!",d=c().warning),(0,r.jsxs)("div",{className:"".concat(c().container," ").concat(d)+" "+(n?c().hidden:""),children:[s&&void(c().closeButton,()=>i(!0)),(0,r.jsx)("strong",{children:a})," ",o]})}o(7294)},4933:function(t,e,o){"use strict";o.d(e,{Z:function(){return n}});var r=o(9734);function n(t){let{data:e,error:o,isLoading:n}=(0,r.ZP)("/api/getProduct.php?url="+t,function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return fetch(...e).then(t=>t.json())});return{data:e,error:o,isLoading:n}}},3763:function(t,e,o){"use strict";o.d(e,{Z:function(){return n}});var r=o(9734);function n(){let{data:t,error:e,isLoading:o}=(0,r.ZP)("/api/listCategories.php",function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return fetch(...e).then(t=>t.json())});return{data:t,error:e,isLoading:o}}},6017:function(t,e,o){"use strict";o.d(e,{Z:function(){return n}});var r=o(9734);function n(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{data:o,error:n,isLoading:c}=(0,r.ZP)(t?"/api/listProducts.php"+(e?"?category=".concat(e):""):null,function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return fetch(...e).then(t=>t.json())});return{data:o,error:n,isLoading:c}}},5406:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return u}});var r=o(5893);o(5675);var n=o(1163),c=o(4933),i=o(8896),s=o(7294),a=o(9156);o(2596);var d=o(9117),l=o(9008),_=o.n(l);function u(t){let{cookieCart:e,setCookieCart:o}=t,l=(0,n.useRouter)();console.log(l.query);let[u,p]=(0,s.useState)(!0),h=()=>{p(!1)},{data:x,error:m,isLoading:g}=(0,c.Z)(l.query.p),P=(0,r.jsx)(_(),{children:(0,r.jsx)("title",{children:"Productos"})}),j=(0,r.jsx)(r.Fragment,{});if(l.query.p){if(g)j=(0,r.jsx)("div",{children:"Cargando..."});else if(void 0!==x){P=(0,r.jsx)(_(),{children:(0,r.jsx)("title",{children:x.name})});let t=x.stock>0;j=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{status:t?"success":"warning",message:t?"Producto a\xf1adido a la cesta":"Producto no disponible",hidden:u&&t,setHidden:p,canExit:t}),(0,r.jsx)(i.Z,{name:x.name,description:x.description,material:x.material,price:x.price,stock:x.stock,img:x.img,id:x.id,url:x.url,available:t,cookieCart:e,setCookieCart:o,showAlert:h})]})}else j=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:"Error al cargar el producto"})})}else j=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{})});return(0,r.jsxs)(r.Fragment,{children:[P,j]})}},918:function(t,e,o){"use strict";o.d(e,{a:function(){return r},r:function(){return n}});let r=["Precio: alto-bajo","Precio: bajo-alto","Nombre: A-Z","Nombre: Z-A"],n={PRECIO_ALTO_BAJO:0,PRECIO_BAJO_ALTO:1,NOMBRE_AZ:2,NOMBRE_ZA:3}},3736:function(t){t.exports={container:"Alert_container__JZ6KE",success:"Alert_success__uY4Zs",warning:"Alert_warning__K19x1",closeButton:"Alert_closeButton__tLxe_",hidden:"Alert_hidden__5MRcS"}},8029:function(t){t.exports={accordion:"FilterPanel_accordion__3lKYd",accordionSection:"FilterPanel_accordionSection__Qwif9",accordionLabel:"FilterPanel_accordionLabel__1ZeCa",accordionContent:"FilterPanel_accordionContent__euwCQ",accordionInput:"FilterPanel_accordionInput__BilOH",option:"FilterPanel_option__7_p3o"}},7400:function(t){t.exports={main:"Product_main__D1T_V",description:"Product_description__gEFO7",code:"Product_code__07tii",grid:"Product_grid__0Nj6T",card:"Product_card__c2BI6",center:"Product_center__pC25y",logo:"Product_logo__nrE2_",thirteen:"Product_thirteen__5EVaS",rotate:"Product_rotate__e1Iy1",content:"Product_content__HNT8V",vercelLogo:"Product_vercelLogo__Tkz5B",main_category:"Product_main_category__Q_z_B",category_overtext:"Product_category_overtext__hfRAg",product:"Product_product__8Nmu7",white_box:"Product_white_box__kOORt",small_white_box:"Product_small_white_box__NLfSE",white_box_medium:"Product_white_box_medium__yAQA0",color_selection:"Product_color_selection__sKmv6",size_selection:"Product_size_selection__hcR69","buy-now-btn":"Product_buy-now-btn__VW7S9",orange_button:"Product_orange_button__2hXWK",option:"Product_option__tJ6hS","option-buttons":"Product_option-buttons__cGeUG","color-buttons":"Product_color-buttons__sytol",color_button_red:"Product_color_button_red__B4geO",color_button_green:"Product_color_button_green__yxtll",color_button_blue:"Product_color_button_blue__NaN0h","color-option":"Product_color-option__X8Qor","size-option":"Product_size-option__pcO3h","button-panel":"Product_button-panel__pkypg","add-to-cart-btn":"Product_add-to-cart-btn__GBOsM",hidden:"Product_hidden__w42X8",form:"Product_form__OaV6h",input:"Product_input__rM0Za",button:"Product_button__Y2bJ_",label:"Product_label___xK8j",checkbox:"Product_checkbox__t1iw_",labelText:"Product_labelText__Qrh_0",asideText:"Product_asideText__qeUY4",registerText:"Product_registerText__xkLAf",registerLink:"Product_registerLink__EsB2b",textarea:"Product_textarea__BmnuD",imageDisplay:"Product_imageDisplay__ezuSf",disabled:"Product_disabled__J3KZN",productTitle:"Product_productTitle__RW_Yd",productImage:"Product_productImage___lQWd",productDetails:"Product_productDetails__YWtRh",stockWarning:"Product_stockWarning__LhgLL",stockOk:"Product_stockOk__Ag7Ga",stockEmpty:"Product_stockEmpty__pYOBD",productButton:"Product_productButton__YaiIO",productDescription:"Product_productDescription__DYizj",productMaterial:"Product_productMaterial__qZequ",whiteBox:"Product_whiteBox__u6pWE",left:"Product_left___u7T_",right:"Product_right__N57Mb",container:"Product_container__zjexK"}},2923:function(t){t.exports={productList:"ProductDisplay_productList___apkz",card:"ProductDisplay_card__KBPSo",productName:"ProductDisplay_productName__7mulg",pages:"ProductDisplay_pages__k46b6",button:"ProductDisplay_button__euEwo",disabled:"ProductDisplay_disabled__4Ji2x"}},1210:function(t){t.exports={productNav:"ProductNav_productNav__o1nF4",container:"ProductNav_container__gx_OQ",filters:"ProductNav_filters__58hDr",toolbar:"ProductNav_toolbar__TQP_L",dropdown:"ProductNav_dropdown__EVX_T",dropdownText:"ProductNav_dropdownText__gphw2",dropdownContent:"ProductNav_dropdownContent__JhGi9",hidden:"ProductNav_hidden__uZM1j",sortIcon:"ProductNav_sortIcon__7fCcK",list:"ProductNav_list__GeV4d"}},9008:function(t,e,o){t.exports=o(2636)},1163:function(t,e,o){t.exports=o(6885)}},function(t){t.O(0,[228,734,774,888,179],function(){return t(t.s=4381)}),_N_E=t.O()}]);