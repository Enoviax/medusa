import{g as v}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{a5 as S,ai as E,b as f,S as F,dw as B,j as e,H as I,ac as T,ad as w,dz as N,t as b,x as l,y as z,B as y}from"./index-HrqC_Gjd.js";import{K as H}from"./chunk-CEEYZHMN-CG4Za1LL.js";import{b as r,u as L}from"./chunk-MDIOSTKB-RPNiac-A.js";import{C as R}from"./currency-input-DtsFJK1s.js";import"./prompt-DzgdWoNF.js";import"./index.esm-BA_4hYlD.js";var _=S({limit:E().min(0).optional().nullable()}),K=({campaign:s})=>{var u;const{t}=f(),{handleSuccess:d}=L(),i=T({defaultValues:{limit:((u=s==null?void 0:s.budget)==null?void 0:u.limit)||void 0},resolver:w(_)}),{mutateAsync:c,isPending:m}=N(s.id),C=i.handleSubmit(async n=>{await c({budget:{limit:n.limit?n.limit:null}},{onSuccess:({campaign:a})=>{b.success(t("campaigns.edit.successToast",{name:a.name})),d()},onError:a=>{b.error(a.message)}})});return e.jsx(r.Form,{form:i,children:e.jsxs(H,{onSubmit:C,className:"flex flex-1 flex-col",children:[e.jsx(r.Body,{children:e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsx(l.Field,{control:i.control,name:"limit",render:({field:{onChange:n,value:a,...x}})=>{var g,h,j,p;return e.jsxs(l.Item,{className:"basis-1/2",children:[e.jsx(l.Label,{children:t("campaigns.budget.fields.limit")}),e.jsx(l.Control,{children:((g=s.budget)==null?void 0:g.type)==="spend"?e.jsx(R,{min:0,onValueChange:o=>n(o?parseInt(o):null),code:(h=s.budget)==null?void 0:h.currency_code,symbol:(j=s.budget)!=null&&j.currency_code?v((p=s.budget)==null?void 0:p.currency_code):"",...x,value:a||void 0}):e.jsx(z,{min:0,...x,value:a,onChange:o=>{n(o.target.value===""?null:parseInt(o.target.value))}},"usage")}),e.jsx(l.ErrorMessage,{})]})}})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(y,{variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(y,{isLoading:m,type:"submit",variant:"primary",size:"small",children:t("actions.save")})]})})]})})},k=()=>{const{t:s}=f(),{id:t}=F(),{campaign:d,isLoading:i,isError:c,error:m}=B(t);if(c)throw m;return e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(r.Title,{asChild:!0,children:e.jsx(I,{children:s("campaigns.budget.edit.header")})})}),!i&&d&&e.jsx(K,{campaign:d})]})};export{k as Component};