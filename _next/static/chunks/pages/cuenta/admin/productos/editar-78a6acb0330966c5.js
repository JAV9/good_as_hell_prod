(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{5263:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/admin/productos/editar",function(){return n(9069)}])},3428:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(9734);function r(e){let{data:t,error:n,isLoading:r}=(0,a.ZP)("/api/getProduct.php?url="+e,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())});return{data:t,error:n,isLoading:r}}},9069:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(5893);n(5675);var r=n(1163),o=n(1553),l=n.n(o),i=n(7294),c=n(1664),s=n.n(c);let u=e=>{let{pname:t,pprice:n,pavailable:r,poldImg:o,pid:c}=e,[u,d]=(0,i.useState)(c),[p,m]=(0,i.useState)(t),[h,x]=(0,i.useState)(n),[_,g]=(0,i.useState)(o),[f,b]=(0,i.useState)(r),[j,v]=(0,i.useState)(null);async function N(){console.log(j);let e=new FormData;e.append("name",p),e.append("price",h),e.append("img",j),e.append("available",f),e.append("id",u),console.log(e),p.length>0?await fetch("/api/updateProduct.php",{method:"POST",body:e}).then(e=>e.json()).then(e=>{200==e.code&&(console.log("producto actualizado"),alert("Producto actualizado!"))}):alert("El nombre no puede estar vac\xedo")}return console.log(_),(0,a.jsxs)("div",{children:[(0,a.jsx)(s(),{href:"/cuenta/admin/productos",children:(0,a.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,a.jsxs)("form",{method:"POST",className:l().form,children:[(0,a.jsx)("div",{className:"field",children:(0,a.jsx)("input",{className:l().input,type:"text",name:"email",value:p,onChange:e=>m(e.target.value),placeholder:"Nombre del producto"})}),(0,a.jsx)("div",{className:"field",children:(0,a.jsx)("input",{className:l().input,type:"number",name:"price",value:h,onChange:e=>x(e.target.value),placeholder:"Precio"})}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("input",{className:l().input,type:"file",name:"img",onChange:e=>{console.log(e.target.files[0]),v(e.target.files[0])},placeholder:"Imagen"}),""!=_?(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{alt:"Imagen actual",width:"250px",src:_}),(0,a.jsx)("br",{})]}):"",j&&(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{alt:"not found",width:"250px",src:URL.createObjectURL(j)}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{onClick:()=>v(null),children:"Eliminar imagen"})]})]}),(0,a.jsxs)("label",{className:l().label,children:[(0,a.jsx)("input",{className:l().checkbox,type:"checkbox",onClick:function(){b(1==f?0:1)},checked:1===f}),(0,a.jsx)("span",{className:l().labelText,children:"Disponible"})]}),(0,a.jsx)("input",{className:"button",type:"button",value:"Actualizar producto",onClick:N})]})]})};var d=n(3428);function p(e){var t;let{cookie:n,setCookie:o}=e,l=(0,r.useRouter)();console.log(l.query);let{data:i,error:c,isLoading:s}=(0,d.Z)(l.query.p);return(console.log("data",i),l.query.p&&(null===(t=n.user)||void 0===t?void 0:t.admin)===1)?s?(0,a.jsx)("div",{children:"Cargando..."}):void 0!==i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u,{pid:i.id,pname:i.name,pprice:i.price,poldImg:i.img,pavailable:i.available})}):void 0:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})})}},1553:function(e){e.exports={hidden:"Product_hidden__TJmD6",form:"Product_form__9oBf2",input:"Product_input__CZJLW",button:"Product_button__O4U5w",label:"Product_label__m45_S",checkbox:"Product_checkbox__aPxwX",labelText:"Product_labelText__NMVH3",asideText:"Product_asideText__CYmXI",registerText:"Product_registerText__Gb7rD",registerLink:"Product_registerLink__MgSyI"}},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[734,774,888,179],function(){return e(e.s=5263)}),_N_E=e.O()}]);