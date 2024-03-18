"use strict";(self.webpackChunkgee_cryengine_DOC=self.webpackChunkgee_cryengine_DOC||[]).push([[7342],{8870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var i=n(5893),r=n(1151);const s={sidebar_position:4},o="SetTimer",a={id:"5.7/C++ API/IEntityComponent/public/SetTimer",title:"SetTimer",description:"Starts a timer for this component instance",source:"@site/docs/5.7/C++ API/IEntityComponent/public/SetTimer.md",sourceDirName:"5.7/C++ API/IEntityComponent/public",slug:"/5.7/C++ API/IEntityComponent/public/SetTimer",permalink:"/GEE-Cryengine-Doc/docs/5.7/C++ API/IEntityComponent/public/SetTimer",draft:!1,unlisted:!1,editUrl:"https://github.com/Gamer2030a/GEE-Cryengine-Doc/tree/main/docs/5.7/C++ API/IEntityComponent/public/SetTimer.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SetName",permalink:"/GEE-Cryengine-Doc/docs/5.7/C++ API/IEntityComponent/public/SetName"},next:{title:"SetTransformMatrix",permalink:"/GEE-Cryengine-Doc/docs/5.7/C++ API/IEntityComponent/public/SetTransformMatrix"}},c={},m=[{value:"First Parameter",id:"first-parameter",level:3},{value:"Second Parameter",id:"second-parameter",level:3}];function l(e){const t={code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"settimer",children:"SetTimer"}),"\n",(0,i.jsx)(t.p,{children:"Starts a timer for this component instance"}),"\n",(0,i.jsx)(t.p,{children:"Entity timers are owned by the component, and each component can have its own independent timers with identifiers that are unique to that instance"}),"\n",(0,i.jsxs)(t.p,{children:["When timer finishes entity system will signal to the component ",(0,i.jsx)(t.em,{children:"once"})," with an event ENTITY_EVENT_TIMER."]}),"\n",(0,i.jsx)(t.p,{children:"Multiple timers can be started simultaneously with different timer ids."}),"\n",(0,i.jsx)(t.p,{children:"If some timer is not yet finished and another timer with the same timerID is set, the new one"}),"\n",(0,i.jsx)(t.p,{children:"will override old timer, and old timer will not send finish event."}),"\n",(0,i.jsx)(t.p,{children:"The timer will automatically be serialized to disk and restored for save games, assuming that a component with the same instance GUID exists at deserialization time."}),"\n",(0,i.jsx)(t.h3,{id:"first-parameter",children:"First Parameter"}),"\n",(0,i.jsx)(t.p,{children:"timerId Timer ID, multiple timers with different IDs are possible."}),"\n",(0,i.jsx)(t.h3,{id:"second-parameter",children:"Second Parameter"}),"\n",(0,i.jsx)(t.p,{children:"timeInMilliseconds Timer timeout time in milliseconds."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",metastring:'title="SetTimer"',children:"void SetTimer(uint32 timerId, int timeInMilliseconds);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);