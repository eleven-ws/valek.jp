"use strict";(self.webpackChunkvalek_jp=self.webpackChunkvalek_jp||[]).push([[456],{5832:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),s=new RegExp(n.source+o.source,"gu"),l=new RegExp("\\d+"+o.source,"gu"),c=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),c=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,o)=>{let n=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];n&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,s=i,i=!0,l++):i&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,n=!0):(n=r(c)===c&&o(c)!==c,s=i,i=o(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=o.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),o.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},6193:function(e,t,a){a.d(t,{G:function(){return j},L:function(){return y},M:function(){return C},P:function(){return k},S:function(){return D},_:function(){return s},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return p},h:function(){return l}});var r=a(4041),o=(a(5832),a(9067)),n=a.n(o);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(o[a]=e[a]);return o}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let o="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,o){return void 0===o&&(o={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function p(e,t,a,r,o,n,s,l){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=o,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],m=function(e){let{layout:t,width:a,height:o}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${o}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(e){let{children:t}=e,a=s(e,g);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:o,alt:n="",shouldLoad:l}=e,c=s(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:o,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:o=!0}=e,n=s(e,f);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,i({},n,t,{sizes:l,shouldLoad:o}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:`${t}-${n}-${a}`,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:l})})),c):c};var w;v.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},b.displayName="Picture",b.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const x=["fallback"],k=function(e){let{fallback:t}=e,a=s(e,x);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:o.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const C=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=b.propTypes;const A=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],T=["style","className"],S=e=>e.replace(/\n/g,""),E=function(e,t,a){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(o)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},$={image:n().object.isRequired,alt:E},R=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],N=new Set;let M,z;const I=function(e){let{as:t="div",image:o,style:n,backgroundColor:c,className:u,class:p,onStartLoad:g,onLoad:m,onError:y}=e,h=s(e,R);const{width:f,height:v,layout:b}=o,w=d(f,v,b),{style:x,className:k}=w,C=s(w,L),A=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(o.images)),[o.images]);p&&(u=p);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,f,v);return(0,r.useEffect)((()=>{M||(M=a.e(511).then(a.bind(a,9511)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(T);if(z&&N.has(T))return;let t,r;return M.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;A.current&&(A.current.innerHTML=a(i({isLoading:!0,isLoaded:N.has(T),image:o},h)),N.has(T)||(t=requestAnimationFrame((()=>{A.current&&(r=s(A.current,T,N,n,g,m,y))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[o]),(0,r.useLayoutEffect)((()=>{N.has(T)&&z&&(A.current.innerHTML=z(i({isLoading:N.has(T),isLoaded:N.has(T),image:o},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,r.createElement)(t,i({},C,{style:i({},x,n,{backgroundColor:c}),className:`${k}${u?` ${u}`:""}`,ref:A,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));j.propTypes=$,j.displayName="GatsbyImage";const H=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function O(e){return function(t){let{src:a,__imageData:o,__error:n}=t,l=s(t,H);return n&&console.warn(n),o?r.createElement(e,i({image:o},l)):(console.warn("Image not loaded",a),null)}}const _=O((function(e){let{as:t="div",className:a,class:o,style:n,image:l,loading:c="lazy",imgClassName:g,imgStyle:m,backgroundColor:h,objectFit:f,objectPosition:v}=e,b=s(e,A);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(a=o),m=i({objectFit:f,objectPosition:v,backgroundColor:h},m);const{width:w,height:x,layout:E,images:$,placeholder:R,backgroundColor:L}=l,N=d(w,x,E),{style:M,className:z}=N,I=s(N,T),j={fallback:void 0,sources:[]};return $.fallback&&(j.fallback=i({},$.fallback,{srcSet:$.fallback.srcSet?S($.fallback.srcSet):void 0})),$.sources&&(j.sources=$.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,i({},I,{style:i({},M,n,{backgroundColor:h}),className:`${z}${a?` ${a}`:""}`}),r.createElement(y,{layout:E,width:w,height:x},r.createElement(k,i({},p(R,!1,E,w,x,L,f,v))),r.createElement(C,i({"data-gatsby-image-ssr":"",className:g},b,u("eager"===c,!1,j,c,m)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},P=new Set(["fixed","fullWidth","constrained"]),W={src:n().string.isRequired,alt:E,width:q,height:q,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};_.displayName="StaticImage",_.propTypes=W;const D=O(j);D.displayName="StaticImage",D.propTypes=W},3263:function(e,t,a){a.d(t,{X:function(){return D}});var r=a(7164),o=a(4041),n=a(4357),i=a(28);var s=o.createContext(),l=a(1848),c=a(9077),d=a(5669),u=a(6310),p=a(8526);function g(e){return(0,p.Ay)("MuiTable",e)}(0,u.A)("MuiTable",["root","stickyHeader"]);var m=a(1085);const y=(0,l.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((0,c.A)((({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:e})=>e.stickyHeader,style:{borderCollapse:"separate"}}]})))),h="table";var f=o.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiTable"}),{className:r,component:l=h,padding:c="normal",size:u="medium",stickyHeader:p=!1,...f}=a,v={...a,component:l,padding:c,size:u,stickyHeader:p},b=(e=>{const{classes:t,stickyHeader:a}=e,r={root:["root",a&&"stickyHeader"]};return(0,i.A)(r,g,t)})(v),w=o.useMemo((()=>({padding:c,size:u,stickyHeader:p})),[c,u,p]);return(0,m.jsx)(s.Provider,{value:w,children:(0,m.jsx)(y,{as:l,role:l===h?null:"table",ref:t,className:(0,n.A)(b.root,r),ownerState:v,...f})})}));var v=o.createContext();function b(e){return(0,p.Ay)("MuiTableBody",e)}(0,u.A)("MuiTableBody",["root"]);const w=(0,l.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),x={variant:"body"},k="tbody";var C=o.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiTableBody"}),{className:r,component:o=k,...s}=a,l={...a,component:o},c=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"]},b,t)})(l);return(0,m.jsx)(v.Provider,{value:x,children:(0,m.jsx)(w,{className:(0,n.A)(c.root,r),as:o,ref:t,role:o===k?null:"rowgroup",ownerState:l,...s})})})),A=a(5703),T=a(8466);function S(e){return(0,p.Ay)("MuiTableCell",e)}var E=(0,u.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const $=(0,l.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,T.A)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,T.A)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,T.A)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})((0,c.A)((({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,A.a)((0,A.X4)(e.palette.divider,1),.88):(0,A.e$)((0,A.X4)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${E.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:e})=>e.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]})))),R=o.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiTableCell"}),{align:r="inherit",className:l,component:c,padding:u,scope:p,size:g,sortDirection:y,variant:h,...f}=a,b=o.useContext(s),w=o.useContext(v),x=w&&"head"===w.variant;let k;k=c||(x?"th":"td");let C=p;"td"===k?C=void 0:!C&&x&&(C="col");const A=h||w&&w.variant,E={...a,align:r,component:k,padding:u||(b&&b.padding?b.padding:"normal"),size:g||(b&&b.size?b.size:"medium"),sortDirection:y,stickyHeader:"head"===A&&b&&b.stickyHeader,variant:A},R=(e=>{const{classes:t,variant:a,align:r,padding:o,size:n,stickyHeader:s}=e,l={root:["root",a,s&&"stickyHeader","inherit"!==r&&`align${(0,T.A)(r)}`,"normal"!==o&&`padding${(0,T.A)(o)}`,`size${(0,T.A)(n)}`]};return(0,i.A)(l,S,t)})(E);let L=null;return y&&(L="asc"===y?"ascending":"descending"),(0,m.jsx)($,{as:k,ref:t,className:(0,n.A)(R.root,l),"aria-sort":L,scope:C,ownerState:E,...f})}));var L=R;function N(e){return(0,p.Ay)("MuiTableContainer",e)}(0,u.A)("MuiTableContainer",["root"]);const M=(0,l.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var z=o.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiTableContainer"}),{className:r,component:o="div",...s}=a,l={...a,component:o},c=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"]},N,t)})(l);return(0,m.jsx)(M,{ref:t,as:o,className:(0,n.A)(c.root,r),ownerState:l,...s})}));function I(e){return(0,p.Ay)("MuiTableRow",e)}var j=(0,u.A)("MuiTableRow",["root","selected","hover","head","footer"]);const H=(0,l.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((0,c.A)((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${j.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${j.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,A.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,A.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})))),O="tr",_=o.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiTableRow"}),{className:r,component:s=O,hover:l=!1,selected:c=!1,...u}=a,p=o.useContext(v),g={...a,component:s,hover:l,selected:c,head:p&&"head"===p.variant,footer:p&&"footer"===p.variant},y=(e=>{const{classes:t,selected:a,hover:r,head:o,footer:n}=e,s={root:["root",a&&"selected",r&&"hover",o&&"head",n&&"footer"]};return(0,i.A)(s,I,t)})(g);return(0,m.jsx)(H,{as:s,ref:t,className:(0,n.A)(y.root,r),role:s===O?null:"row",ownerState:g,...u})}));var q=_,P=a(3551),W=a(7437);const D=e=>{const{data:t}=e;return(0,W.Y)(r.A,{bgcolor:"background.paper",py:4},(0,W.Y)(r.A,{maxWidth:"md",mx:"auto"},(0,W.Y)(z,e,(0,W.Y)(f,null,(0,W.Y)(C,null,t.map(((e,t)=>{let{key:a,value:r}=e;return(0,W.Y)(q,{key:t},(0,W.Y)(L,{sx:{width:"25%"}},(0,W.Y)(P.A,{fontWeight:"bold"},a)),(0,W.Y)(L,{sx:{fontSize:16}},r))})))))))}}}]);
//# sourceMappingURL=ad89ba7e7516f41187e409b543f25d0fc6c36703-438c5a6cbe8838809d4b.js.map