"use strict";(self.webpackChunkvalek_jp=self.webpackChunkvalek_jp||[]).push([[347],{8783:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),s=new RegExp(n.source+o.source,"gu"),l=new RegExp("\\d+"+o.source,"gu"),c=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),c=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,o)=>{let n=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];n&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,s=i,i=!0,l++):i&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,n=!0):(n=r(c)===c&&o(c)!==c,s=i,i=o(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=o.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),o.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return I},L:function(){return h},M:function(){return Z},P:function(){return k},S:function(){return W},_:function(){return s},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return p},h:function(){return l}});var r=a(2784),o=(a(8783),a(3980)),n=a.n(o);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(o[a]=e[a]);return o}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let o="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,o){return void 0===o&&(o={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function p(e,t,a,r,o,n,s,l){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=o,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],m=function(e){let{layout:t,width:a,height:o}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${o}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,g);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:o,alt:n="",shouldLoad:l}=e,c=s(e,y);return r.createElement("img",i({},c,{decoding:"async",loading:o,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:o=!0}=e,n=s(e,f);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,i({},n,t,{sizes:l,shouldLoad:o}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:`${t}-${n}-${a}`,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:l})})),c):c};var w;v.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},b.displayName="Picture",b.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const x=["fallback"],k=function(e){let{fallback:t}=e,a=s(e,x);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:o.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const Z=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};Z.displayName="MainImage",Z.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],T=["style","className"],S=e=>e.replace(/\n/g,""),E=function(e,t,a){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(o)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},$={image:n().object.isRequired,alt:E},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],R=["style","className"],L=new Set;let M,z;const j=function(e){let{as:t="div",image:o,style:n,backgroundColor:c,className:u,class:p,onStartLoad:g,onLoad:m,onError:h}=e,y=s(e,N);const{width:f,height:v,layout:b}=o,w=d(f,v,b),{style:x,className:k}=w,Z=s(w,R),C=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(o.images)),[o.images]);p&&(u=p);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,f,v);return(0,r.useEffect)((()=>{M||(M=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(T);if(z&&L.has(T))return;let t,r;return M.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=a(i({isLoading:!0,isLoaded:L.has(T),image:o},y)),L.has(T)||(t=requestAnimationFrame((()=>{C.current&&(r=s(C.current,T,L,n,g,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[o]),(0,r.useLayoutEffect)((()=>{L.has(T)&&z&&(C.current.innerHTML=z(i({isLoading:L.has(T),isLoaded:L.has(T),image:o},y)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,r.createElement)(t,i({},Z,{style:i({},x,n,{backgroundColor:c}),className:`${k}${u?` ${u}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));I.propTypes=$,I.displayName="GatsbyImage";const H=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:o,__error:n}=t,l=s(t,H);return n&&console.warn(n),o?r.createElement(e,i({image:o},l)):(console.warn("Image not loaded",a),null)}}const O=P((function(e){let{as:t="div",className:a,class:o,style:n,image:l,loading:c="lazy",imgClassName:g,imgStyle:m,backgroundColor:y,objectFit:f,objectPosition:v}=e,b=s(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(a=o),m=i({objectFit:f,objectPosition:v,backgroundColor:y},m);const{width:w,height:x,layout:E,images:$,placeholder:N,backgroundColor:R}=l,L=d(w,x,E),{style:M,className:z}=L,j=s(L,T),I={fallback:void 0,sources:[]};return $.fallback&&(I.fallback=i({},$.fallback,{srcSet:$.fallback.srcSet?S($.fallback.srcSet):void 0})),$.sources&&(I.sources=$.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,i({},j,{style:i({},M,n,{backgroundColor:y}),className:`${z}${a?` ${a}`:""}`}),r.createElement(h,{layout:E,width:w,height:x},r.createElement(k,i({},p(N,!1,E,w,x,R,f,v))),r.createElement(Z,i({"data-gatsby-image-ssr":"",className:g},b,u("eager"===c,!1,I,c,m)))))})),A=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},q=new Set(["fixed","fullWidth","constrained"]),_={src:n().string.isRequired,alt:E,width:A,height:A,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};O.displayName="StaticImage",O.propTypes=_;const W=P(I);W.displayName="StaticImage",W.propTypes=_},106:function(e,t,a){a.d(t,{i:function(){return V}});var r=a(3906),o=a(1461),n=a(7896),i=a(2784),s=a(489),l=a(4780);var c=i.createContext(),d=a(1657),u=a(948),p=a(1588),g=a(4867);function m(e){return(0,g.ZP)("MuiTable",e)}(0,p.Z)("MuiTable",["root","stickyHeader"]);var h=a(2322);const y=["className","component","padding","size","stickyHeader"],f=(0,u.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,n.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),v="table";var b=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiTable"}),{className:r,component:u=v,padding:p="normal",size:g="medium",stickyHeader:b=!1}=a,w=(0,o.Z)(a,y),x=(0,n.Z)({},a,{component:u,padding:p,size:g,stickyHeader:b}),k=(e=>{const{classes:t,stickyHeader:a}=e,r={root:["root",a&&"stickyHeader"]};return(0,l.Z)(r,m,t)})(x),Z=i.useMemo((()=>({padding:p,size:g,stickyHeader:b})),[p,g,b]);return(0,h.jsx)(c.Provider,{value:Z,children:(0,h.jsx)(f,(0,n.Z)({as:u,role:u===v?null:"table",ref:t,className:(0,s.Z)(k.root,r),ownerState:x},w))})}));var w=i.createContext();function x(e){return(0,g.ZP)("MuiTableBody",e)}(0,p.Z)("MuiTableBody",["root"]);const k=["className","component"],Z=(0,u.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),C={variant:"body"},T="tbody";var S=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiTableBody"}),{className:r,component:i=T}=a,c=(0,o.Z)(a,k),u=(0,n.Z)({},a,{component:i}),p=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},x,t)})(u);return(0,h.jsx)(w.Provider,{value:C,children:(0,h.jsx)(Z,(0,n.Z)({className:(0,s.Z)(p.root,r),as:i,ref:t,role:i===T?null:"rowgroup",ownerState:u},c))})})),E=a(2283),$=a(8216);function N(e){return(0,g.ZP)("MuiTableCell",e)}var R=(0,p.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const L=["align","className","component","padding","scope","size","sortDirection","variant"],M=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,$.Z)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,$.Z)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,$.Z)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,E.$n)((0,E.Fq)(e.palette.divider,1),.88):(0,E._j)((0,E.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${R.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}))),z=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiTableCell"}),{align:r="inherit",className:u,component:p,padding:g,scope:m,size:y,sortDirection:f,variant:v}=a,b=(0,o.Z)(a,L),x=i.useContext(c),k=i.useContext(w),Z=k&&"head"===k.variant;let C;C=p||(Z?"th":"td");let T=m;"td"===C?T=void 0:!T&&Z&&(T="col");const S=v||k&&k.variant,E=(0,n.Z)({},a,{align:r,component:C,padding:g||(x&&x.padding?x.padding:"normal"),size:y||(x&&x.size?x.size:"medium"),sortDirection:f,stickyHeader:"head"===S&&x&&x.stickyHeader,variant:S}),R=(e=>{const{classes:t,variant:a,align:r,padding:o,size:n,stickyHeader:i}=e,s={root:["root",a,i&&"stickyHeader","inherit"!==r&&`align${(0,$.Z)(r)}`,"normal"!==o&&`padding${(0,$.Z)(o)}`,`size${(0,$.Z)(n)}`]};return(0,l.Z)(s,N,t)})(E);let z=null;return f&&(z="asc"===f?"ascending":"descending"),(0,h.jsx)(M,(0,n.Z)({as:C,ref:t,className:(0,s.Z)(R.root,u),"aria-sort":z,scope:T,ownerState:E},b))}));var j=z;function I(e){return(0,g.ZP)("MuiTableContainer",e)}(0,p.Z)("MuiTableContainer",["root"]);const H=["className","component"],P=(0,u.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var O=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:i="div"}=a,c=(0,o.Z)(a,H),u=(0,n.Z)({},a,{component:i}),p=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},I,t)})(u);return(0,h.jsx)(P,(0,n.Z)({ref:t,as:i,className:(0,s.Z)(p.root,r),ownerState:u},c))}));function A(e){return(0,g.ZP)("MuiTableRow",e)}var q=(0,p.Z)("MuiTableRow",["root","selected","hover","head","footer"]);const _=["className","component","hover","selected"],W=(0,u.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${q.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${q.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,E.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,E.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),F="tr",D=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:r,component:c=F,hover:u=!1,selected:p=!1}=a,g=(0,o.Z)(a,_),m=i.useContext(w),y=(0,n.Z)({},a,{component:c,hover:u,selected:p,head:m&&"head"===m.variant,footer:m&&"footer"===m.variant}),f=(e=>{const{classes:t,selected:a,hover:r,head:o,footer:n}=e,i={root:["root",a&&"selected",r&&"hover",o&&"head",n&&"footer"]};return(0,l.Z)(i,A,t)})(y);return(0,h.jsx)(W,(0,n.Z)({as:c,ref:t,className:(0,s.Z)(f.root,r),role:c===F?null:"row",ownerState:y},g))}));var B=D,U=a(2658),G=a(8165);const V=e=>{const{data:t}=e;return(0,G.tZ)(r.Z,{bgcolor:"background.paper",py:4},(0,G.tZ)(r.Z,{maxWidth:"md",mx:"auto"},(0,G.tZ)(O,e,(0,G.tZ)(b,null,(0,G.tZ)(S,null,t.map(((e,t)=>{let{key:a,value:r}=e;return(0,G.tZ)(B,{key:t},(0,G.tZ)(j,{sx:{width:"25%"}},(0,G.tZ)(U.Z,{fontWeight:"bold"},a)),(0,G.tZ)(j,{sx:{fontSize:16}},r))})))))))}}}]);
//# sourceMappingURL=9ac084b2d98f8b69916bfe86551fce59991a69cc-ee6769ea65c729abeffb.js.map