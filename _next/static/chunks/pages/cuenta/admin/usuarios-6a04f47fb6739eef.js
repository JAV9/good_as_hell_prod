(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{7226:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/admin/usuarios",function(){return r(6772)}])},6772:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var s=r(5893),t=r(7294),i=r(1664),a=r.n(i),o=r(9734),d=r(9629),l=r(8193);function c(){let{data:e,error:n,isLoading:r}=function(){let{data:e,error:n,isLoading:r}=(0,o.ZP)("/api/listUsers.php",function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return fetch(...n).then(e=>e.json())});return{data:e,error:n,isLoading:r}}(),[i,c]=(0,t.useState)(e);console.log(i),(0,t.useEffect)(()=>{c(e)},[e]);let u=[{title:"Nombre",dataIndex:"name",key:"name",render:(e,n,r)=>(0,s.jsxs)("span",{children:[e," ",n.lastname]}),onFilter:(e,n)=>n.name.includes(e)},{title:"Editar",dataIndex:"id",key:"edit",render:(e,n,r)=>(0,s.jsx)(a(),{href:"/cuenta/admin/usuarios/editar?u="+n.id,children:(0,s.jsx)(l.$iz,{size:"2em"})})},{title:"Borrar",dataIndex:"id",key:"delete",render:(e,n,r)=>(0,s.jsx)("span",{onClick:()=>{window.confirm("\xbfEst\xe1s seguro de borrar el usuario "+n.name+" "+n.lastname+"?")&&h(e,n,r)},className:"pointer",children:(0,s.jsx)(l.VPh,{size:"2em"})})}];async function h(n,r,s){let t={id:n};console.log(t),await fetch("/api/deleteUser.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(r=>{if(200==r.code){alert("Usuario borrado");let r=e.filter(e=>e.id!=n);console.log("newData",r),c(r)}else console.log("res",r)})}return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"max-250 margin-tb-1",children:(0,s.jsx)(a(),{href:"/cuenta/admin/usuarios/crear",children:(0,s.jsx)("button",{className:"button",children:" Crear usuario"})})}),(0,s.jsx)(d.Z,{columns:u,rowKey:"id",dataSource:i})]})})})}var u=r(9008),h=r.n(u);function x(e){var n;let{cookie:r,setCookie:t}=e,i=(0,s.jsx)(h(),{children:(0,s.jsx)("title",{children:"Gestionar usuarios"})}),o=(0,s.jsx)(s.Fragment,{});return o=(null===(n=r.user)||void 0===n?void 0:n.admin)===1?(0,s.jsxs)("div",{className:"w-100",children:[(0,s.jsx)(a(),{href:"/cuenta/admin",children:(0,s.jsx)("button",{className:"nav-button",children:"Atr\xe1s"})}),(0,s.jsx)(c,{})]}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})}),(0,s.jsxs)(s.Fragment,{children:[i,o]})}}},function(e){e.O(0,[734,583,264,774,888,179],function(){return e(e.s=7226)}),_N_E=e.O()}]);