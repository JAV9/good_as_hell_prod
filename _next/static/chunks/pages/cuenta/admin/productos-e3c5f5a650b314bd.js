(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{9311:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/admin/productos",function(){return t(973)}])},4927:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(9734);function i(){let{data:e,error:n,isLoading:t}=(0,r.ZP)("/api/listProducts.php",function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())});return{data:e,error:n,isLoading:t}}},973:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),i=t(1664),o=t.n(i),s=t(7294),a=t(4927),d=t(9629),c=t(8193);function l(){let{data:e,error:n,isLoading:t}=(0,a.Z)(),[i,l]=(0,s.useState)(e);console.log(i),(0,s.useEffect)(()=>{l(e)});let u=[{title:"Nombre",dataIndex:"name",key:"name",render:e=>(0,r.jsx)("span",{children:e}),onFilter:(e,n)=>n.name.includes(e)},{title:"Editar",dataIndex:"url",key:"edit",render:e=>(0,r.jsx)(o(),{href:"/cuenta/admin/productos/editar?p="+e,children:(0,r.jsx)(c.$iz,{size:"2em"})})},{title:"Borrar",dataIndex:"id",key:"delete",render:(e,n,t)=>(0,r.jsx)("span",{onClick:()=>{window.confirm("\xbfEst\xe1s seguro de borrar el producto "+n.name+"?")&&h(e,n,t)},className:"pointer",children:(0,r.jsx)(c.VPh,{size:"2em"})})}];async function h(n,t,r){let i={id:n};console.log(i),await fetch("/api/deleteProduct.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(e=>e.json()).then(t=>{if(200==t.code){alert("Producto borrado");let t=e.filter(e=>e.id!=n);console.log("newData",t),l(t)}else console.log("res",t)})}return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"max-250 margin-tb-1",children:(0,r.jsx)(o(),{href:"/cuenta/admin/productos/crear",children:(0,r.jsx)("button",{className:"button",children:" Crear producto"})})}),(0,r.jsx)(d.Z,{columns:u,rowKey:"id",dataSource:i})]})})})}function u(e){var n;let{cookie:t,setCookie:i}=e;return(null===(n=t.user)||void 0===n?void 0:n.admin)===1?(0,r.jsxs)("div",{className:"w-100",children:[(0,r.jsx)(o(),{href:"/cuenta/admin",children:(0,r.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,r.jsx)(l,{})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})})}}},function(e){e.O(0,[734,583,629,774,888,179],function(){return e(e.s=9311)}),_N_E=e.O()}]);