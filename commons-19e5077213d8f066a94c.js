"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return w},P:function(){return E},S:function(){return z},_:function(){return i},a:function(){return l},b:function(){return c},g:function(){return m},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const m=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const d=["children"],u=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${n}' width='${a}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,d);return r.createElement(r.Fragment,null,r.createElement(u,l({},a)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,p);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,v);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},f.displayName="Picture",f.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const y=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,y);return t?r.createElement(f,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=f.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const w=function(e){return r.createElement(r.Fragment,null,r.createElement(f,l({},e)),r.createElement("noscript",null,r.createElement(f,l({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=f.propTypes;const N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:s().object.isRequired,alt:N},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],L=new Set;let S,T;const x=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:m,class:d,onStartLoad:u,onLoad:g,onError:p}=e,v=i(e,k);const{width:h,height:f,layout:b}=n,y=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(h,f,b),{style:E,className:w}=y,N=i(y,_),C=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(m=d);const U=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${a}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,h,f);return(0,r.useEffect)((()=>{S||(S=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(x);if(T&&L.has(x))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;C.current&&(C.current.innerHTML=a(l({isLoading:!0,isLoaded:L.has(x),image:n},v)),L.has(x)||(t=requestAnimationFrame((()=>{C.current&&(r=i(C.current,x,L,s,u,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{L.has(x)&&T&&(C.current.innerHTML=T(l({isLoading:L.has(x),isLoaded:L.has(x),image:n},v)),null==u||u({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},N,{style:l({},E,s,{backgroundColor:c}),className:`${w}${m?` ${m}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:U},suppressHydrationWarning:!0}))},U=(0,r.memo)((function(e){return e.image?(0,r.createElement)(x,e):null}));U.propTypes=C,U.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],A=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},$=new Set(["fixed","fullWidth","constrained"]),I={src:s().string.isRequired,alt:N,width:A,height:A,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!$.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},z=(q=U,function(e){let{src:t,__imageData:a,__error:n}=e,s=i(e,O);return n&&console.warn(n),a?r.createElement(q,l({image:a},s)):(console.warn("Image not loaded",t),null)});var q;z.displayName="StaticImage",z.propTypes=I},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},938:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(1082),s=a(3723);var l=()=>r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"nav-center"},r.createElement("div",{className:"nav-header"},r.createElement(s.S,{src:"../assets/images/logo.jpg",alt:"Belles Artz",className:"nav-logo",__imageData:a(413)}),r.createElement("ul",{className:"nav-items"},r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",exact:!0,activeClassName:"active",to:"/",eventKey:"1"},"HOME")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",activeClassName:"active",to:"/about",as:n.rU,eventKey:"2"},"OUR STORY")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",activeClassName:"active",to:"/services",as:n.rU,eventKey:"3"},"SERVICES")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",activeClassName:"active",to:"/team",as:n.rU,eventKey:"4"},"MEET THE TEAM")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",activeClassName:"active",to:"/quote",as:n.rU,eventKey:"5"},"GET A QUOTE")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",activeClassName:"active",to:"/contact",as:n.rU,eventKey:"6"},"CONTACT INFO"))))));var i=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("nav",{className:"mobile-navbar"},r.createElement("div",{className:"nav-header"},r.createElement(s.S,{src:"../assets/images/logo.jpg",alt:"Belles Artz",className:"nav-logo",__imageData:a(413)}),r.createElement("button",{className:"toggle-button",onClick:()=>t(!e)},r.createElement("span",{className:e?"toggle-button__bar bar-open":"toggle-button__bar bar-close"}),r.createElement("span",{className:e?"toggle-button__bar bar-open":"toggle-button__bar bar-close"}),r.createElement("span",{className:e?"toggle-button__bar bar-open":"toggle-button__bar bar-close"}))),r.createElement("ul",{className:e?"nav-items show-nav-items":"nav-items"},r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",exact:!0,activeClassName:"active",to:"/",eventKey:"1"},"About")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",activeClassName:"active",to:"/portfolio",as:n.rU,eventKey:"2"},"Brand Portfolio")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",activeClassName:"active",to:"/services",as:n.rU,eventKey:"3"},"Services")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link",activeClassName:"active",to:"/contact",as:n.rU,eventKey:"4"},"Contact Us")))))};var o=()=>r.createElement("footer",null,r.createElement("small",null,"© ",(new Date).getFullYear()," BellesArtz"));var c=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(l,null),r.createElement(i,null),t,r.createElement(o,null))}},413:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bellesite/static/698e55dba5628459072c3e8231cbefec/871b9/logo.png","srcSet":"/bellesite/static/698e55dba5628459072c3e8231cbefec/ce1f7/logo.png 146w,\\n/bellesite/static/698e55dba5628459072c3e8231cbefec/ae7fc/logo.png 293w,\\n/bellesite/static/698e55dba5628459072c3e8231cbefec/871b9/logo.png 585w","sizes":"(min-width: 585px) 585px, 100vw"},"sources":[{"srcSet":"/bellesite/static/698e55dba5628459072c3e8231cbefec/f2830/logo.webp 146w,\\n/bellesite/static/698e55dba5628459072c3e8231cbefec/8f5d0/logo.webp 293w,\\n/bellesite/static/698e55dba5628459072c3e8231cbefec/0ae3a/logo.webp 585w","type":"image/webp","sizes":"(min-width: 585px) 585px, 100vw"}]},"width":585,"height":726}')}}]);
//# sourceMappingURL=commons-19e5077213d8f066a94c.js.map