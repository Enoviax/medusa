import{r as a,ch as re,ci as se,m as v,ck as oe,co as b,I as ne,X as de,be as ce,cm as le,cq as ie,cQ as ue,cn as pe,bd as c,j as d,u as F,b as me,cR as ve,x as fe}from"./index-HrqC_Gjd.js";import{P as g}from"./prompt-DzgdWoNF.js";const C=e=>a.createElement(ie,{...e});C.displayName="FocusModal";const N=a.forwardRef((e,r)=>a.createElement(re,{ref:r,...e}));N.displayName="FocusModal.Trigger";const S=b;S.displayName="FocusModal.Close";const D=e=>a.createElement(ue,{...e});D.displayName="FocusModal.Portal";const j=a.forwardRef(({className:e,...r},s)=>a.createElement(se,{ref:s,className:v("bg-ui-bg-overlay fixed inset-0","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...r}));j.displayName="FocusModal.Overlay";const w=a.forwardRef(({className:e,overlayProps:r,portalProps:s,...t},o)=>a.createElement(D,{...s},a.createElement(j,{...r}),a.createElement(oe,{ref:o,className:v("bg-ui-bg-base shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-in-from-bottom-2  duration-200",e),...t})));w.displayName="FocusModal.Content";const O=a.forwardRef(({children:e,className:r,...s},t)=>a.createElement("div",{ref:t,className:v("border-ui-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2",r),...s},a.createElement("div",{className:"flex items-center gap-x-2"},a.createElement(b,{asChild:!0},a.createElement(ne,{size:"small",type:"button",variant:"transparent"},a.createElement(de,null))),a.createElement(ce,null,"esc")),e));O.displayName="FocusModal.Header";const T=a.forwardRef(({children:e,className:r,...s},t)=>a.createElement("div",{ref:t,className:v("border-ui-border-base flex items-center justify-end gap-x-2 border-t p-4",r),...s},e));T.displayName="FocusModal.Footer";const E=a.forwardRef(({className:e,...r},s)=>a.createElement(le,{ref:s,...r}));E.displayName="FocusModal.Title";const k=pe;k.displayName="FocusModal.Description";const R=a.forwardRef(({className:e,...r},s)=>a.createElement("div",{ref:s,className:v("flex-1",e),...r}));R.displayName="FocusModal.Body";const l=Object.assign(C,{Trigger:N,Title:E,Description:k,Content:w,Header:O,Body:R,Close:S,Footer:T});var B=({form:e,blockSearch:r=!1,children:s,onClose:t})=>{const{t:o}=me(),{formState:{isDirty:u}}=e,n=ve(({currentLocation:p,nextLocation:f})=>{const{isSubmitSuccessful:y}=f.state||{};if(y)return t==null||t(!0),!1;const M=p.pathname!==f.pathname,te=p.search!==f.search;if(r){const h=u&&(M||te);return h||t==null||t(y),h}const x=u&&M;return x||t==null||t(y),x}),m=()=>{var p;(p=n==null?void 0:n.reset)==null||p.call(n)},i=()=>{var p;(p=n==null?void 0:n.proceed)==null||p.call(n),t==null||t(!1)};return d.jsxs(fe,{...e,children:[s,d.jsx(g,{open:n.state==="blocked",variant:"confirmation",children:d.jsxs(g.Content,{children:[d.jsxs(g.Header,{children:[d.jsx(g.Title,{children:o("general.unsavedChangesTitle")}),d.jsx(g.Description,{children:o("general.unsavedChangesDescription")})]}),d.jsxs(g.Footer,{children:[d.jsx(g.Cancel,{onClick:m,type:"button",children:o("actions.cancel")}),d.jsx(g.Action,{onClick:i,type:"button",children:o("actions.continue")})]})]})})]})},H=a.createContext(null),P=({prev:e,children:r})=>{const s=F(),[t,o]=a.useState(!0),u=a.useCallback(m=>{s(m||e,{replace:!0,state:{isSubmitSuccessful:!0}})},[s,e]),n=a.useMemo(()=>({handleSuccess:u,setCloseOnEscape:o,__internal:{closeOnEscape:t}}),[u,o,t]);return d.jsx(H.Provider,{value:n,children:r})},I=a.createContext(null),$=({children:e,onOpenChange:r})=>{const[s,t]=a.useState({}),o=i=>s[i]||!1,u=(i,p)=>{t(f=>({...f,[i]:p})),r(p)},n=i=>{t(p=>({...p,[i]:!1}))},m=i=>{t(p=>{const f={...p};return delete f[i],f})};return d.jsx(I.Provider,{value:{getIsOpen:o,setIsOpen:u,register:n,unregister:m},children:e})},_=()=>{const e=a.useContext(I);if(!e)throw new Error("useStackedModal must be used within a StackedModalProvider");return e},ge=({prev:e="..",children:r})=>{const s=F(),[t,o]=a.useState(!1),[u,n]=a.useState(!1);a.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const m=i=>{if(!i){document.body.style.pointerEvents="auto",s(e,{replace:!0});return}o(i)};return d.jsx(c,{open:t,onOpenChange:m,children:d.jsx(P,{prev:e,children:d.jsx($,{onOpenChange:n,children:d.jsx(c.Content,{"aria-describedby":void 0,className:v({"!bg-ui-bg-disabled !inset-y-5 !right-5":u}),children:r})})})})},ye=c.Header,Fe=c.Title,Me=c.Description,xe=c.Body,he=c.Footer,be=c.Close,Ce=B,$e=Object.assign(ge,{Header:ye,Title:Fe,Body:xe,Description:Me,Footer:he,Close:be,Form:Ce}),Ne=()=>{const e=a.useContext(H);if(!e)throw new Error("useRouteModal must be used within a RouteModalProvider");return e},Se=({prev:e="..",children:r})=>{const s=F(),[t,o]=a.useState(!1),[u,n]=a.useState(!1);a.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const m=i=>{if(!i){document.body.style.pointerEvents="auto",s(e,{replace:!0});return}o(i)};return d.jsx(l,{open:t,onOpenChange:m,children:d.jsx(P,{prev:e,children:d.jsx($,{onOpenChange:n,children:d.jsx(De,{stackedModalOpen:u,children:r})})})})},De=({stackedModalOpen:e,children:r})=>{const{__internal:s}=Ne(),t=!s.closeOnEscape;return d.jsx(l.Content,{onEscapeKeyDown:t?o=>{o.preventDefault()}:void 0,className:v({"!bg-ui-bg-disabled !inset-x-5 !inset-y-3":e}),children:r})},je=l.Header,we=l.Title,Oe=l.Description,Te=l.Footer,Ee=l.Body,ke=l.Close,Re=B,_e=Object.assign(Se,{Header:je,Title:we,Body:Ee,Description:Oe,Footer:Te,Close:ke,Form:Re}),Be=({id:e,children:r})=>{const{register:s,unregister:t,getIsOpen:o,setIsOpen:u}=_();return a.useEffect(()=>(s(e),()=>t(e)),[]),d.jsx(c,{open:o(e),onOpenChange:n=>u(e,n),children:r})},K=c.Close;K.displayName="StackedDrawer.Close";var X=c.Header;X.displayName="StackedDrawer.Header";var q=c.Body;q.displayName="StackedDrawer.Body";var z=c.Trigger;z.displayName="StackedDrawer.Trigger";var A=c.Footer;A.displayName="StackedDrawer.Footer";var Q=c.Title;Q.displayName="StackedDrawer.Title";var G=c.Description;G.displayName="StackedDrawer.Description";var J=a.forwardRef(({className:e,...r},s)=>d.jsx(c.Content,{ref:s,className:v(e),overlayProps:{className:"bg-transparent"},...r}));J.displayName="StackedDrawer.Content";var Ke=Object.assign(Be,{Close:K,Header:X,Body:q,Content:J,Trigger:z,Footer:A,Description:G,Title:Q}),He=({id:e,children:r})=>{const{register:s,unregister:t,getIsOpen:o,setIsOpen:u}=_();return a.useEffect(()=>(s(e),()=>t(e)),[]),d.jsx(l,{open:o(e),onOpenChange:n=>u(e,n),children:r})},U=l.Close;U.displayName="StackedFocusModal.Close";var V=l.Header;V.displayName="StackedFocusModal.Header";var W=l.Body;W.displayName="StackedFocusModal.Body";var Y=l.Trigger;Y.displayName="StackedFocusModal.Trigger";var Z=l.Footer;Z.displayName="StackedFocusModal.Footer";var L=l.Title;L.displayName="StackedFocusModal.Title";var ee=l.Description;ee.displayName="StackedFocusModal.Description";var ae=a.forwardRef(({className:e,...r},s)=>d.jsx(l.Content,{ref:s,className:v("!top-6",e),overlayProps:{className:"bg-transparent"},...r}));ae.displayName="StackedFocusModal.Content";var Xe=Object.assign(He,{Close:U,Header:V,Body:W,Content:ae,Trigger:Y,Footer:Z,Description:ee,Title:L});export{_e as R,Xe as S,_ as a,$e as b,Ke as c,Ne as u};
