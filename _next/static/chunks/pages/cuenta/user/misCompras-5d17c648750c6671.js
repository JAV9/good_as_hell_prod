(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{191:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/user/misCompras",function(){return n(987)}])},9372:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9734);function s(e){let{data:t,error:n,isLoading:s}=(0,r.ZP)("/api/getUser.php?id="+e,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())});return{data:t,error:n,isLoading:s}}},5831:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9734);function s(){let{data:e,error:t,isLoading:n}=(0,r.ZP)("/api/listPayment.php",function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())});return{data:e,error:t,isLoading:n}}},987:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),s=n(1163);n(7294),n(1664);var i=n(9372);n(5831);var o=n(9008),a=n.n(o);function u(e){let{cookie:t,setCookie:n}=e,o=(0,s.useRouter)();console.log(o.query);let{data:u,error:c,isLoading:l}=(0,i.Z)(o.query.u);console.log("data",u);let d=[{id:46,user:87,total:47,state:"COMENZADO",createdAt:"2023-04-16 16:24:48",done:0,doneAt:"0000-00-00 00:00:00"},{id:45,user:87,total:47,state:"COMENZADO",createdAt:"2023-04-16 16:22:38",done:0,doneAt:"0000-00-00 00:00:00"},{id:44,user:87,total:547,state:"COMENZADO",createdAt:"2023-04-16 16:20:20",done:0,doneAt:"0000-00-00 00:00:00"}],f=(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Mis compras"})}),h=(0,r.jsx)(r.Fragment,{});if(o.query.u){if(l)h=(0,r.jsx)("div",{children:"Cargando..."});else if(void 0!==u){let e=[];for(let t=0;t<d.length;t++){let n=d[t];e.push(n)}h=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("b",{children:"Has realizado las siguientes compras:"})}),(0,r.jsx)("ul",{children:e.map(e=>(0,r.jsxs)("li",{children:["Fecha: ",e.createdAt,", Importe: ",e.total,", Estado: ",e.state]},e.id))})]})}}else h=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:"No tienes permiso para ver esta p\xe1gina."})});return(0,r.jsxs)(r.Fragment,{children:[f,h]})}},9008:function(e,t,n){e.exports=n(2636)},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[734,774,888,179],function(){return e(e.s=191)}),_N_E=e.O()}]);