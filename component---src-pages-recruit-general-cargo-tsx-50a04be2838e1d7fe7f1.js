"use strict";(self.webpackChunkvalek_jp=self.webpackChunkvalek_jp||[]).push([[775],{9427:function(e,t,o){var n=o(4293);t.A=void 0;var i=n(o(369)),r=o(1085);t.A=(0,i.default)([(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,r.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},9088:function(e,t,o){o.r(t),o.d(t,{Head:function(){return se},default:function(){return ae}});var n=o(4041),i=o(7820),r=o(5600),l=o(3789),a=o(3674),s=o(9575),u=o(7502),c=o(4357),p=o(1784),m=o(9193),d=o(6214);var f=n.createContext({}),A=o(9962),v=o(3570);function b(e){return(0,A.Ay)("MuiTimeline",e)}(0,v.A)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);var Y=o(3345);function g(e){return"alternate-reverse"===e?"positionAlternateReverse":`position${(0,Y.A)(e)}`}var x=o(1085);const y=["position","className"],h=(0,m.Ay)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.position&&t[g(o.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1});var w=n.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiTimeline"}),{position:i="right",className:r}=o,l=(0,u.A)(o,y),a=(0,s.A)({},o,{position:i}),m=(e=>{const{position:t,classes:o}=e,n={root:["root",t&&g(t)]};return(0,p.A)(n,b,o)})(a),A=n.useMemo((()=>({position:i})),[i]);return(0,x.jsx)(f.Provider,{value:A,children:(0,x.jsx)(h,(0,s.A)({className:(0,c.A)(m.root,r),ownerState:a,ref:t},l))})})),C=o(3539);function S(e){return(0,A.Ay)("MuiTimelineContent",e)}var R=(0,v.A)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function T(e){return(0,A.Ay)("MuiTimelineOppositeContent",e)}var M=(0,v.A)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function k(e){return(0,A.Ay)("MuiTimelineItem",e)}(0,v.A)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const N=["position","className"],j=(0,m.Ay)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[g(o.position)]]}})((({ownerState:e})=>(0,s.A)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===e.position&&{flexDirection:"row-reverse"},("alternate"===e.position||"alternate-reverse"===e.position)&&{[`&:nth-of-type(${"alternate"===e.position?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${R.root}`]:{textAlign:"right"},[`& .${M.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})));var z=n.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiTimelineItem"}),{position:i,className:r}=o,l=(0,u.A)(o,N),{position:a}=n.useContext(f);let m=!1;n.Children.forEach(o.children,(e=>{(0,C.A)(e,["TimelineOppositeContent"])&&(m=!0)}));const A=(0,s.A)({},o,{position:i||a||"right",hasOppositeContent:m}),v=(e=>{const{position:t,classes:o,hasOppositeContent:n}=e,i={root:["root",g(t),!n&&"missingOppositeContent"]};return(0,p.A)(i,k,o)})(A),b=n.useMemo((()=>({position:A.position})),[A.position]);return(0,x.jsx)(f.Provider,{value:b,children:(0,x.jsx)(j,(0,s.A)({className:(0,c.A)(v.root,r),ownerState:A,ref:t},l))})}));function O(e){return(0,A.Ay)("MuiTimelineSeparator",e)}(0,v.A)("MuiTimelineSeparator",["root"]);const D=["className"],$=(0,m.Ay)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"});var I=n.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiTimelineSeparator"}),{className:n}=o,i=(0,u.A)(o,D),r=o,l=(e=>{const{classes:t}=e;return(0,p.A)({root:["root"]},O,t)})(r);return(0,x.jsx)($,(0,s.A)({className:(0,c.A)(l.root,n),ownerState:r,ref:t},i))}));function L(e){return(0,A.Ay)("MuiTimelineConnector",e)}(0,v.A)("MuiTimelineConnector",["root"]);const E=["className"],F=(0,m.Ay)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})));var G=n.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiTimelineConnector"}),{className:n}=o,i=(0,u.A)(o,E),r=o,l=(e=>{const{classes:t}=e;return(0,p.A)({root:["root"]},L,t)})(r);return(0,x.jsx)(F,(0,s.A)({className:(0,c.A)(l.root,n),ownerState:r,ref:t},i))}));const P=["className"],H=(0,m.Ay)(a.A,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[g(o.position)]]}})((({ownerState:e})=>(0,s.A)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===e.position&&{textAlign:"right"})));var _=n.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiTimelineContent"}),{className:i}=o,r=(0,u.A)(o,P),{position:l}=n.useContext(f),a=(0,s.A)({},o,{position:l||"right"}),m=(e=>{const{position:t,classes:o}=e,n={root:["root",g(t)]};return(0,p.A)(n,S,o)})(a);return(0,x.jsx)(H,(0,s.A)({component:"div",className:(0,c.A)(m.root,i),ownerState:a,ref:t},r))}));function W(e){return(0,A.Ay)("MuiTimelineDot",e)}(0,v.A)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const X=["className","color","variant"],B=(0,m.Ay)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t["inherit"!==o.color&&`${o.variant}${(0,Y.A)(o.color)}`],t[o.variant]]}})((({ownerState:e,theme:t})=>(0,s.A)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},"filled"===e.variant&&(0,s.A)({borderColor:"transparent"},"inherit"!==e.color&&(0,s.A)({},"grey"===e.color?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),"outlined"===e.variant&&(0,s.A)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==e.color&&(0,s.A)({},"grey"===e.color?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main})))));var J=n.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiTimelineDot"}),{className:n,color:i="grey",variant:r="filled"}=o,l=(0,u.A)(o,X),a=(0,s.A)({},o,{color:i,variant:r}),m=(e=>{const{color:t,variant:o,classes:n}=e,i={root:["root",o,"inherit"!==t&&`${o}${(0,Y.A)(t)}`]};return(0,p.A)(i,W,n)})(a);return(0,x.jsx)(B,(0,s.A)({className:(0,c.A)(m.root,n),ownerState:a,ref:t},l))}));const U=["className"],V=(0,m.Ay)(a.A,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[g(o.position)]]}})((({ownerState:e})=>(0,s.A)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===e.position&&{textAlign:"left"}))),q=n.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiTimelineOppositeContent"}),{className:i}=o,r=(0,u.A)(o,U),{position:l}=n.useContext(f),a=(0,s.A)({},o,{position:l||"left"}),m=(e=>{const{position:t,classes:o}=e,n={root:["root",g(t)]};return(0,p.A)(n,T,o)})(a);return(0,x.jsx)(V,(0,s.A)({component:"div",className:(0,c.A)(m.root,i),ownerState:a,ref:t},r))}));q.muiName="TimelineOppositeContent";var K=q,Q=o(9427),Z=o(323),ee=o(4938),te=o(8596),oe=o(9064),ne=o(4788),ie=o(8221),re=o(5428);const le=e=>{const{children:t,title:o}=e;return(0,re.Y)(r.A,{component:"span",sx:{"&::before":{content:`"${o}"`,display:"block",color:"primary.main",mb:0,top:0,left:0,fontSize:"1rem",letterSpacing:2,lineHeight:1}}},t)};var ae=e=>{const[t,s]=n.useState(!1);return n.useEffect((()=>{s(!0)}),[]),(0,re.Y)(Z.P,{menu:[{label:"トップページ",link:"/"},{label:"採用情報",link:"#recruit",isCurrent:!0},{label:"お問い合わせ",link:"#contact"}]},(0,re.Y)(r.A,{sx:{transition:"opacity 2000ms ease-out",opacity:t?1:0,overflow:"hidden"}},(0,re.Y)(r.A,{bgcolor:"background.default",pt:Z.V+"px"},(0,re.Y)(l.A,{maxWidth:"lg"},(0,re.Y)(r.A,{sx:{position:"relative",display:"flex",flexDirection:"column",gap:20}},(0,re.Y)(r.A,{component:"section",id:"recruit"},(0,re.Y)(a.A,{variant:"h1"},(0,re.Y)(le,{title:"RECRUIT"},"採用情報")),(0,re.Y)(r.A,{display:"flex",flexDirection:"column",gap:20},(0,re.Y)(r.A,null,(0,re.Y)(i.S,{src:"../../images/mainvisual-recruit-general-4x1.jpg",alt:"採用情報",aspectRatio:4,style:{width:"100%",filter:"brightness(105%)"},__imageData:o(8732)}),(0,re.Y)(a.A,{variant:"h3",mt:2,color:"primary"},"飲食店・卸売業者専門！ ルート配送ドライバー募集！"),(0,re.Y)(a.A,null,"企業納品専門の配送ドライバーとして、当社の業務委託で働いてみませんか?",(0,re.Y)("br",null),(0,re.Y)(ie.z,null,"必要な免許は準中型以上。"),"神奈川県内の飲食店や卸売業者への固定ルートでの配送業務です。",(0,re.Y)("br",null),(0,re.Y)(ie.z,null,"日曜日固定休み"),"で、車両、ガソリンカード、ETCの貸し出しもあります。",(0,re.Y)("br",null),"配送センターへの直行直帰で、仕事とプライベートを両立させやすい環境を整えています。")),(0,re.Y)(r.A,null,(0,re.Y)(a.A,{variant:"h2"},"一日のスケジュール"),(0,re.Y)(r.A,{display:"flex",alignItems:"flex-start"},(0,re.Y)(w,{sx:{[`& .${M.root}`]:{flex:.2}}},[{time:"7時50分",title:"出席点呼",description:"LINEグループに『おはようございます！』と送信。"},{time:"8時00分",title:"倉庫に着庫・積込",description:(0,re.Y)(n.Fragment,null,"荷物の積み込みを行います。",(0,re.Y)("br",null),(0,re.Y)("small",null,"※アルコールチェック"))},{time:"8時30分",title:"配達先へ出庫",description:"決められた店舗に安全運転で荷物を納品。"},{time:"9時00分〜17時00分",title:"納品先に到着",description:"荷下ろし・納品伝票をもとに検品。"},{time:"17時30分",title:"倉庫に着庫",description:"伝票の整理・回収品の返品。"},{time:"18時00分",title:"業務終了",description:"車庫戻り。LINEグループに『稼働終了しました！』と送信。",isLast:!0}].map(((e,t)=>{let{time:o,title:i,description:r,isLast:l=!1}=e;return(0,re.Y)(z,{key:t},(0,re.Y)(K,{color:"text.secondary"},(0,re.Y)(a.A,{fontSize:{md:18,xs:14}},o)),(0,re.Y)(I,null,(0,re.Y)(J,{sx:{backgroundColor:"background.default"}},(0,re.Y)(Q.A,{color:"primary"})),l?(0,re.Y)(n.Fragment,null):(0,re.Y)(G,null)),(0,re.Y)(_,{sx:{pb:2}},(0,re.Y)(a.A,{fontSize:20,color:"primary",fontWeight:"bold"},i),(0,re.Y)(a.A,null,r)))}))))),(0,re.Y)(r.A,null,(0,re.Y)(a.A,{variant:"h3"},(0,re.Y)(ie.z,null,"募集要項")),(0,re.Y)(ne.X,{data:[{key:"業務内容",value:(0,re.Y)(n.Fragment,null,"一般貨物運送",(0,re.Y)("br",null),(0,re.Y)("br",null),"準中型の車両でルート配送にて荷物を運んでいただきます。",(0,re.Y)("br",null),"また荷物の積み込み・積み下ろしなどの付随業務も担当していただきます。",(0,re.Y)("br",null),(0,re.Y)(ie.z,null,"車両やETCカード、ガソリンカードは弊社から貸し出しますので経費負担もありません。"))},{key:"雇用形態",value:"業務委託"},{key:"募集資格",value:"準中型自動車免許"},{key:"車両",value:"車両は弊社から貸し出します"},{key:"勤務時間",value:(0,re.Y)(n.Fragment,null,"7時50分〜18時00分",(0,re.Y)("br",null),(0,re.Y)("small",null,"※変動あり"))},{key:"勤務場所",value:(0,re.Y)(n.Fragment,null,"神奈川県内",(0,re.Y)("br",null),(0,re.Y)("small",null,"※出社不要です。"))}]})),(0,re.Y)(r.A,null,(0,re.Y)(a.A,{variant:"h3"},(0,re.Y)(ie.z,null,"報酬・福利厚生")),(0,re.Y)(ne.X,{data:[{key:"報酬",value:(0,re.Y)(n.Fragment,null,"完全歩合制",(0,re.Y)("br",null),(0,re.Y)("br",null),"【モデルケース】",(0,re.Y)("br",null),"（日当計算）16,000円 × 25日 ＝ 400,000円")},{key:"諸手当",value:(0,re.Y)(a.A,null,"制服支給、業務利用の駐車場完備")},{key:"休日・休暇",value:(0,re.Y)(a.A,null,"日曜日固定休み、その他1日休み、長期休暇要相談")}]})),(0,re.Y)(r.A,null,(0,re.Y)(a.A,{variant:"h3"},(0,re.Y)(ie.z,null,"応募事項")),(0,re.Y)(ne.X,{data:[{key:"選考プロセス",value:(0,re.Y)(a.A,null,"[応募] → [面接日決定] → [面接] → [内定]")},{key:"応募方法",value:(0,re.Y)(n.Fragment,null,(0,re.Y)(a.A,null,"ページ右上部の電話番号にお電話いただくか",(0,re.Y)("br",null),"以下お問い合わせフォームよりお気軽にお問い合わせください。"),(0,re.Y)("br",null),(0,re.Y)(a.A,null,"数日経過しても折り返しがない場合、システムの不具合によりお問い合わせメールが正常に届いていない可能性がございます。",(0,re.Y)("br",null),"お手数ですが、再度お電話にてご連絡をお願いいたします。"),(0,re.Y)("br",null),(0,re.Y)(a.A,null,"採用担当：谷本"))}]})))),(0,re.Y)(oe.B,null)))),(0,re.Y)(te.w,null)))};const se=()=>(0,re.Y)(ee.G,{title:"採用情報"})},8732:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8f8f8","images":{"fallback":{"src":"/static/8de11ebf6c515e1df0bbc47d3bfa6f55/777d5/mainvisual-recruit-general-4x1.jpg","srcSet":"/static/8de11ebf6c515e1df0bbc47d3bfa6f55/f93f0/mainvisual-recruit-general-4x1.jpg 500w,\\n/static/8de11ebf6c515e1df0bbc47d3bfa6f55/7328a/mainvisual-recruit-general-4x1.jpg 1000w,\\n/static/8de11ebf6c515e1df0bbc47d3bfa6f55/777d5/mainvisual-recruit-general-4x1.jpg 2000w","sizes":"(min-width: 2000px) 2000px, 100vw"},"sources":[{"srcSet":"/static/8de11ebf6c515e1df0bbc47d3bfa6f55/f4762/mainvisual-recruit-general-4x1.webp 500w,\\n/static/8de11ebf6c515e1df0bbc47d3bfa6f55/156a8/mainvisual-recruit-general-4x1.webp 1000w,\\n/static/8de11ebf6c515e1df0bbc47d3bfa6f55/874b2/mainvisual-recruit-general-4x1.webp 2000w","type":"image/webp","sizes":"(min-width: 2000px) 2000px, 100vw"}]},"width":2000,"height":500}')}}]);
//# sourceMappingURL=component---src-pages-recruit-general-cargo-tsx-50a04be2838e1d7fe7f1.js.map