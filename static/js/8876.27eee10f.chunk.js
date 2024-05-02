"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8876],{98876:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(7552),a=n(75785),o=n(68446),l=n(68584),i=n(99546),s=n(48735),c=n(18283),m=n(9555),d=n(36715),u=n(89003);const p=(0,a.n9)()({guide:{pointerEvents:"none",height:"100%",width:1,position:"absolute",zIndex:10},sm:{fontSize:10}}),v=(0,o.observer)((function({model:e,coordX:t}){const{classes:n}=p();return r.createElement(u.A,{open:!0,placement:"top",title:e.views.map((e=>e.pxToBp(t))).map(((e,t)=>r.createElement(d.A,{className:n.sm,key:[JSON.stringify(e),t].join("-")},(0,i.stringify)(e,!0)))),arrow:!0},r.createElement("div",{className:n.guide,style:{left:t,background:"red"}}))})),g=(0,a.n9)()((e=>{const{tertiary:t,primary:n}=e.palette;return{rubberband:{height:"100%",background:t?(0,c.X4)(t.main,.7):(0,c.X4)(n.main,.7),position:"absolute",zIndex:10,textAlign:"center",overflow:"hidden"},rubberbandControl:{cursor:"crosshair",width:"100%",minHeight:8},rubberbandText:{color:t?t.contrastText:n.contrastText},popover:{mouseEvents:"none",cursor:"crosshair"},paper:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}}})),b=(0,o.observer)((function({model:e,ControlComponent:t=r.createElement("div",null)}){const[n,a]=(0,r.useState)(),[o,l]=(0,r.useState)(),[c,u]=(0,r.useState)(),[p,b]=(0,r.useState)(),f=(0,r.useRef)(null),E=(0,r.useRef)(null),{classes:h}=g(),w=void 0!==n&&void 0===c;function y(e){e.preventDefault(),e.stopPropagation();const t=e.clientX-e.target.getBoundingClientRect().left;a(t),l(t)}function C(e){const t=e.target;b(e.clientX-t.getBoundingClientRect().left)}function k(){b(void 0),e.views.forEach((e=>e.setOffsets(void 0,void 0)))}function N(){u(void 0),a(void 0),l(void 0)}(0,r.useEffect)((()=>{function t(e){if(f.current&&w){const t=e.clientX-f.current.getBoundingClientRect().left;l(t)}}function r(t){if(void 0!==n&&f.current){const{clientX:r,clientY:a}=t,o=r-f.current.getBoundingClientRect().left;u({offsetX:o,clientX:r,clientY:a}),e.views.forEach((e=>{const t=function(e,t){if(void 0===n)return;let r=n,a=e;return a<r&&([r,a]=[a,r]),{leftOffset:t.pxToBp(r),rightOffset:t.pxToBp(a)}}(o,e);if(t){const{leftOffset:n,rightOffset:r}=t;e.setOffsets(n,r)}})),b(void 0)}}return w?(window.addEventListener("mousemove",t),window.addEventListener("mouseup",r),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",r)}):()=>{}}),[n,w,c,e]),(0,r.useEffect)((()=>{!w&&void 0!==o&&void 0!==n&&Math.abs(o-n)<=3&&N()}),[w,o,n]);const M=Boolean(c);if(void 0===n)return r.createElement(r.Fragment,null,void 0!==p?r.createElement(v,{model:e,coordX:p}):null,r.createElement("div",{ref:f,className:h.rubberbandControl,onMouseDown:y,onMouseOut:k,onMouseMove:C},t));const x=c?c.offsetX:o||0,B=x<n?x:n,S=Math.abs(x-n),{views:T}=e,A=T.map((e=>e.pxToBp(B))),O=T.map((e=>e.pxToBp(B+S))),R=T.map((e=>Math.ceil(S*e.bpPerPx)));return r.createElement(r.Fragment,null,E.current?r.createElement(r.Fragment,null,r.createElement(m.Ay,{className:h.popover,classes:{paper:h.paper},open:!0,anchorEl:E.current,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},keepMounted:!0,disableRestoreFocus:!0},A.map(((e,t)=>r.createElement(d.A,{key:[JSON.stringify(e),t,"left"].join("-")},(0,i.stringify)(e,!0))))),r.createElement(m.Ay,{className:h.popover,classes:{paper:h.paper},open:!0,anchorEl:E.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,disableRestoreFocus:!0},O.map(((e,t)=>r.createElement(d.A,{key:[JSON.stringify(e),t,"right"].join("-")},(0,i.stringify)(e,!0)))))):null,r.createElement("div",{ref:E,className:h.rubberband,style:{left:B,width:S}},r.createElement(d.A,{variant:"h6",className:h.rubberbandText},R.map(((e,t)=>r.createElement(d.A,{key:`${e}_${t}`},`${e.toLocaleString("en-US")}bp`))))),r.createElement("div",{className:h.rubberbandControl,ref:f,onMouseDown:y,onMouseOut:k,onMouseMove:C},t),c?r.createElement(s.Menu,{anchorReference:"anchorPosition",anchorPosition:{left:c.clientX,top:c.clientY},onMenuItemClick:function(e,t){t(),N()},open:M,onClose:N,menuItems:e.rubberBandMenuItems()}):null)}));var f=n(61723),E=n(68666),h=n(64359),w=n(90542),y=n(23758);const C=(0,a.n9)()((()=>({headerBar:{gridArea:"1/1/auto/span 2",display:"flex"},spacer:{flexGrow:1},iconButton:{margin:5},bp:{display:"flex",alignItems:"center",marginLeft:10},searchContainer:{marginLeft:5},searchBox:{display:"flex"}}))),k=(0,o.observer)((({model:e})=>r.createElement(y.A,{menuItems:[{label:"Synteny track selector",onClick:()=>e.activateTrackSelector()},...e.views.map(((e,t)=>({label:`View ${t+1} track selector`,onClick:()=>e.activateTrackSelector()})))]},r.createElement(w.xU,null)))),N=(0,o.observer)((function({model:e}){const{classes:t}=C(),[n,a]=(0,r.useState)(),o=e.views.some((e=>!e.hideHeader));return r.createElement("div",{className:t.headerBar},r.createElement(k,{model:e}),r.createElement(f.A,{onClick:e=>a(e.currentTarget),className:t.iconButton},r.createElement(h.A,null)),o?null:e.views.map((e=>r.createElement("div",{key:e.id,className:t.searchBox},r.createElement("div",{className:t.searchContainer},r.createElement(E.Gd,{model:e,showHelp:!1})),r.createElement("div",{className:t.bp},r.createElement(d.A,{variant:"body2",color:"textSecondary",className:t.bp},Math.round(e.coarseTotalBp).toLocaleString("en-US")," bp"))))),r.createElement("div",{className:t.spacer}),n?r.createElement(s.Menu,{anchorEl:n,open:!0,onMenuItemClick:(e,t)=>{t(),a(void 0)},menuItems:e.headerMenuItems(),onClose:()=>a(void 0)}):null)})),M=(0,a.n9)()((e=>({container:{display:"grid"},overlay:{zIndex:100,gridArea:"1/1"},content:{gridArea:"1/1",position:"relative"},grid:{display:"grid"},relative:{position:"relative"},rubberbandContainer:{position:"relative",overflow:"hidden"},rubberbandDiv:{width:"100%",background:e.palette.action.disabledBackground,height:15,"&:hover":{background:e.palette.action.selected}}}))),x=(0,o.observer)((({model:e})=>{const{classes:t}=M();return r.createElement(r.Fragment,null,e.tracks.map((n=>{const[a]=n.displays,{RenderingComponent:o}=a,i=(0,l.getConf)(n,"trackId");return o?r.createElement("div",{className:t.overlay,key:i,style:{height:e.middleComparativeHeight,overflow:"hidden"}},r.createElement(o,{model:a})):null})))})),B=(0,o.observer)((({model:e})=>{const{classes:t}=M(),{views:n}=e,{pluginManager:a}=(0,i.getEnv)(e),{ReactComponent:o}=a.getViewType(n[0].type);return r.createElement("div",{className:t.rubberbandContainer},r.createElement(N,{model:e}),r.createElement(b,{model:e,ControlComponent:r.createElement("div",{className:t.rubberbandDiv})}),r.createElement("div",{className:t.container},r.createElement(o,{model:n[0]}),r.createElement("div",{className:t.grid},r.createElement(x,{model:e})),r.createElement(s.ResizeHandle,{onDrag:t=>e.setMiddleComparativeHeight(e.middleComparativeHeight+t),style:{height:4,background:"#ccc"}}),r.createElement(o,{model:n[1]})))})),S=(0,o.observer)((({model:e})=>{const{classes:t}=M(),{views:n}=e,{pluginManager:a}=(0,i.getEnv)(e);return r.createElement("div",{className:t.rubberbandContainer},r.createElement(N,{model:e}),r.createElement(b,{model:e,ControlComponent:r.createElement("div",{className:t.rubberbandDiv})}),r.createElement("div",{className:t.container},r.createElement("div",{className:t.content},r.createElement("div",{className:t.relative},n.map((e=>{const{ReactComponent:t}=a.getViewType(e.type);return r.createElement(t,{key:e.id,model:e})}))),r.createElement(x,{model:e}))))})),T=(0,o.observer)((function(e){const{model:t}=e;return t.tracks.some((({displays:e})=>e.some((e=>(0,l.getConf)(e,"middle")))))?r.createElement(B,e):r.createElement(S,e)}))}}]);
//# sourceMappingURL=8876.27eee10f.chunk.js.map