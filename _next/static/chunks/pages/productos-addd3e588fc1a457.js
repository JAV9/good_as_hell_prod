(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{4381:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos",function(){return t(1505)}])},3428:function(n,r,t){"use strict";t.d(r,{Z:function(){return u}});var e=t(9734);function u(n){let{data:r,error:t,isLoading:u}=(0,e.ZP)("/api/getProduct.php?url="+n,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return fetch(...r).then(n=>n.json())});return{data:r,error:t,isLoading:u}}},1505:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var e=t(5893);t(5675);var u=t(1163),i=t(3428);let o=n=>{let{name:r,price:t,img:u,url:i,id:o}=n;return(0,e.jsxs)("div",{className:"product",children:[(0,e.jsx)("div",{children:(0,e.jsx)("img",{alt:"not found",width:"250px",src:u})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:r}),(0,e.jsxs)("p",{children:[t," €"]}),(0,e.jsx)("button",{type:"button",class:"button>",children:"Comprar"})]})]})};function c(){let n=(0,u.useRouter)();console.log(n.query);let{data:r,error:t,isLoading:c}=(0,i.Z)(n.query.p);return(console.log(r),c)?(0,e.jsx)("div",{children:"Cargando..."}):n.query.p&&void 0!==r?(0,e.jsx)(o,{name:r.name,price:r.price,img:r.img,id:r.id,url:r.url}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{children:"Error al cargar el producto"})})}},1163:function(n,r,t){n.exports=t(880)}},function(n){n.O(0,[734,774,888,179],function(){return n(n.s=4381)}),_N_E=n.O()}]);