"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[115],{115:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var a=r(7552),s=r(36422),n=r(68446),o=r(48735),l=r(1343),c=r(29499),i=r(99123),u=r(61723),h=r(36715),d=r(58507),m=r(5401),w=r(31409),p=r.n(w),E=r(430),S=r(27820),b=r(90542),C=r(50914),f=r(49409),g=r(17765);const k=(0,a.lazy)((()=>r.e(9531).then(r.bind(r,39531))));function A({url:e}){return a.createElement(l.A,{label:"URL",value:e,InputProps:{readOnly:!0},variant:"filled",fullWidth:!0,onClick:e=>{e.target.select()}})}const y=(0,n.observer)((function({handleClose:e,session:t}){const[r,n]=(0,a.useState)(""),[l,w]=(0,a.useState)(""),[y,v]=(0,a.useState)(""),[L,R]=(0,a.useState)(""),[P,U]=(0,a.useState)(!0),[I,j]=(0,a.useState)(),[B,D]=(0,a.useState)(!1),[,J]=(0,E.useQueryParam)("password",E.StringParam),[,M]=(0,E.useQueryParam)("session",E.StringParam),V=t.shareURL,$=localStorage.getItem("jbrowse-shareURL")||"short",_=(0,s.getSnapshot)(t);(0,a.useEffect)((()=>{(async()=>{if(!I)try{if("short"===$){U(!0);const e=new URL(window.location.href),t=await(0,g.J)(_,V,e.href),r=new URLSearchParams(e.search);r.set("session",`share-${t.json.sessionId}`),r.set("password",t.password),e.search=r.toString(),v(e.href),n(`share-${t.json.sessionId}`),w(t.password)}else{const e=await(0,f.eW)(JSON.stringify((0,s.getSnapshot)(t))),r=new URL(window.location.href),a=new URLSearchParams(r.search);a.set("session",`encoded-${e}`),n(`encoded-${e}`),r.search=a.toString(),R(r.toString())}}catch(e){j(e)}finally{U(!1)}})()}),[$,I,t,V,_]);const x="short"===$&&P||!!I;return a.createElement(a.Fragment,null,a.createElement(o.Dialog,{maxWidth:"xl",open:!0,onClose:e,title:"JBrowse Shareable Link"},a.createElement(c.A,null,a.createElement(i.A,null,"Copy the URL below to share your current JBrowse session.",a.createElement(u.A,{onClick:()=>D(!0)},a.createElement(S.A,null))),"short"===$?I?a.createElement(o.ErrorMessage,{error:I,onReset:()=>j(void 0)}):P?a.createElement(h.A,null,"Generating short URL..."):a.createElement(A,{url:y}):a.createElement(A,{url:L})),a.createElement(d.A,null,a.createElement(m.A,{startIcon:a.createElement(C.A,null),disabled:x,onClick:e=>{e.preventDefault(),J(l,"replaceIn"),M(r,"replaceIn"),alert("Now press Ctrl+D (PC) or Cmd+D (Mac)")}},"Create browser Bookmark"),a.createElement(m.A,{onClick:()=>{p()(y||L),t.notify("Copied to clipboard","success")},startIcon:a.createElement(b.PM,null),disabled:x},"Copy to Clipboard"),a.createElement(m.A,{onClick:e,autoFocus:!0},"Close"))),a.createElement(k,{open:B,onClose:()=>D(!1),currentSetting:$}))}))},50914:(e,t,r)=>{var a=r(92120);t.A=void 0;var s=a(r(33380)),n=r(69500);t.A=(0,s.default)((0,n.jsx)("path",{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1z"}),"BookmarkAdd")}}]);
//# sourceMappingURL=115.cbc0cc6d.chunk.js.map