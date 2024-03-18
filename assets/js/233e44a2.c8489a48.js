"use strict";(self.webpackChunkgee_cryengine_DOC=self.webpackChunkgee_cryengine_DOC||[]).push([[6805],{4899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(5893),r=t(1151);t(893);const i={sidebar_position:2},s="Retrive all Component",c={id:"5.7/C++ API/Component/RetriveAllComponent",title:"Retrive all Component",description:"used to retrive all components of the entity.",source:"@site/docs/5.7/C++ API/Component/RetriveAllComponent.md",sourceDirName:"5.7/C++ API/Component",slug:"/5.7/C++ API/Component/RetriveAllComponent",permalink:"/GEE-Cryengine-Doc/docs/5.7/C++ API/Component/RetriveAllComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/Gamer2030a/GEE-Cryengine-Doc/tree/main/docs/5.7/C++ API/Component/RetriveAllComponent.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create or Retrive Component",permalink:"/GEE-Cryengine-Doc/docs/5.7/C++ API/Component/CreateOrRetriveComponent copy 2"},next:{title:"Retrive Component",permalink:"/GEE-Cryengine-Doc/docs/5.7/C++ API/Component/RetriveComponent"}},p={},a=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"retrive-all-component",children:"Retrive all Component"}),"\n",(0,o.jsx)(n.p,{children:"used to retrive all components of the entity."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",metastring:'title="Engine Function"',children:"virtual void GetComponents(DynArray<IEntityComponent*>& components) const = 0;\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",metastring:'title="Function"',children:"IEntity* m_pEntity; --handle to the entity\r\nm_pEntity->GetComponents();\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",metastring:'title="Example"',children:'IEntity* pCamEntity = gEnv->pEntitySystem->FindEntityByName("basefloor_prefab");\r\nDynArray<IEntityComponent*> components;\r\nif (pCamEntity)\r\n{\r\n    pCamEntity->GetComponents(components);\r\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},893:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var o=t(5893);function r(e){let{children:n,color:t}=e;return(0,o.jsx)("span",{style:{backgroundColor:t,borderRadius:"4px",color:"#fff",padding:"0.2rem 0.5rem",fontWeight:"bold"},children:n})}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(7294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);