(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(4369)}])},6087:function(e,r,o){"use strict";o.d(r,{Z:function(){return l}});var t=o(5893),c=o(4927),s=o(5675),n=o.n(s),i=o(1664),a=o.n(i),_=o(8210),d=o.n(_);function l(e){let{category:r,count:o}=e,{data:s,error:i,isLoading:_}=(0,c.Z)(!0,r);return console.log("PRODUCTS"),null==s||s.forEach(e=>{console.log(e)}),(0,t.jsx)("div",{className:d().productList,children:s?s.map(e=>(0,t.jsx)("div",{className:d().card,children:(0,t.jsx)(a(),{href:"/productos/?p=".concat(e.url),children:(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)(n(),{src:e.img,alt:"nombre producto",width:300,height:420}),(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:d().productName,children:e.name})}),(0,t.jsxs)("p",{children:[e.price," €"]})]})]})})},e.id)):(0,t.jsx)("h3",{children:"No se encontraron productos"})})}},4927:function(e,r,o){"use strict";o.d(r,{Z:function(){return c}});var t=o(9734);function c(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{data:o,error:c,isLoading:s}=(0,t.ZP)(e?"/api/listProducts.php"+(r?"?category=".concat(r):""):null,function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return fetch(...r).then(e=>e.json())});return{data:o,error:c,isLoading:s}}},4369:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return l}});var t=o(5893),c=o(5675),s=o.n(c),n=o(1502),i=o.n(n),a=o(1664),_=o.n(a);o(4927);var d=o(6087);function l(e){let{cookie:r,setCookie:o}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"".concat(i().splash),children:[(0,t.jsx)("div",{className:i().main_category,children:(0,t.jsxs)(_(),{href:"productos/mujer",children:[(0,t.jsx)(s(),{className:i().logo,src:"/images/categoria-mujer.jpg",alt:"Next.js Logo",width:650,height:720,priority:!0}),(0,t.jsx)("div",{className:i().category_overtext,children:(0,t.jsx)("p",{children:"Mujer"})})]})}),(0,t.jsx)("div",{className:i().main_category,children:(0,t.jsxs)(_(),{href:"productos/hombre",children:[(0,t.jsx)(s(),{className:i().logo,src:"/images/categoria-hombre.jpg",alt:"Next.js Logo",width:650,height:720,priority:!0}),(0,t.jsx)("div",{className:i().category_overtext,children:(0,t.jsx)("p",{children:"Hombre"})})]})})]}),(0,t.jsx)("div",{className:"separator"}),(0,t.jsx)("div",{className:i().homeProducts,children:(0,t.jsx)(d.Z,{count:20})})]})})}},1502:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",splash:"Home_splash__GIYwN",homeProducts:"Home_homeProducts__l_5WY",vercelLogo:"Home_vercelLogo__dtSk9",thirteen:"Home_thirteen__cMI_k",main_category:"Home_main_category__qPMuv",category_overtext:"Home_category_overtext___anDK",product:"Home_product__3VpYV",rotate:"Home_rotate____XsI"}},8210:function(e){e.exports={productList:"ProductDisplay_productList___apkz",card:"ProductDisplay_card__KBPSo",productName:"ProductDisplay_productName__7mulg"}}},function(e){e.O(0,[734,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);