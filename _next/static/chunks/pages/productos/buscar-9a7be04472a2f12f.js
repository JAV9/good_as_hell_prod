(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[816],{4252:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/buscar",function(){return o(7390)}])},8701:function(e,r,o){"use strict";var t=o(5893);let n=e=>{let{name:r,price:o,img:n,url:c,id:i,cookieCart:s,setCookieCart:_}=e,d=()=>{let e=void 0===s.cart?[]:s.cart;e.push({name:r,price:o,img:n,url:c,id:i}),console.log("New cart: "),console.log(e),_("cart",e,{path:"/",maxAge:3600,sameSite:!0})};return(0,t.jsxs)("div",{className:"product",children:[(0,t.jsx)("div",{children:(0,t.jsx)("img",{alt:"not found",width:"250px",src:n})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:r}),(0,t.jsxs)("p",{children:[o," €"]}),(0,t.jsx)("button",{type:"button",class:"button>",onClick:d,children:"Comprar"})]})]})};r.Z=n},7390:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return l}});var t=o(5893),n=o(5675),c=o.n(n),i=o(1163),s=o(1502),_=o.n(s);o(8701);var d=o(1664),a=o.n(d),u=o(9734);function l(){let e=(0,i.useRouter)();console.log(e.query);let{data:r,error:o,isLoading:n}=function(e){let{data:r,error:o,isLoading:t}=(0,u.ZP)("/api/searchProduct.php?p="+e,function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return fetch(...r).then(e=>e.json())});return{data:r,error:o,isLoading:t}}(e.query.p);if(console.log("data",r),n)return(0,t.jsx)("div",{children:"Cargando..."});if(e.query.p&&void 0!==r)try{return(0,t.jsx)("div",{className:"flex mid_gap",children:null==r?void 0:r.map(e=>(0,t.jsx)(a(),{href:"/productos/?p=".concat(e.url),children:(0,t.jsxs)("div",{className:_().product,children:[(0,t.jsx)(c(),{src:e.img,alt:"imagen producto",width:300,height:420}),(0,t.jsxs)("div",{className:"text",children:[(0,t.jsx)("p",{children:e.name}),(0,t.jsxs)("p",{children:[e.price," €"]})]})]})},e.id))})}catch(e){return(0,t.jsx)("div",{children:"Producto no encontrado"})}return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{children:"Producto no encontrado"})})}},1502:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",splash:"Home_splash__GIYwN",homeProducts:"Home_homeProducts__l_5WY",vercelLogo:"Home_vercelLogo__dtSk9",thirteen:"Home_thirteen__cMI_k",main_category:"Home_main_category__qPMuv",category_overtext:"Home_category_overtext___anDK",product:"Home_product__3VpYV",rotate:"Home_rotate____XsI"}},1163:function(e,r,o){e.exports=o(880)}},function(e){e.O(0,[734,774,888,179],function(){return e(e.s=4252)}),_N_E=e.O()}]);