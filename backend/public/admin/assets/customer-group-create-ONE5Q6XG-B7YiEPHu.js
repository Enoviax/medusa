import{a5 as x,a7 as h,j as e,b as j,ac as p,ad as f,dZ as C,t as l,H as g,T as y,x as a,y as v,B as i}from"./index-HrqC_Gjd.js";import{K as b}from"./chunk-CEEYZHMN-CG4Za1LL.js";import{R as s,u as F}from"./chunk-MDIOSTKB-RPNiac-A.js";import"./prompt-DzgdWoNF.js";var G=x({name:h().min(1)}),T=()=>{const{t:r}=j(),{handleSuccess:c}=F(),o=p({defaultValues:{name:""},resolver:f(G)}),{mutateAsync:m,isPending:d}=C(),u=o.handleSubmit(async n=>{await m({name:n.name},{onSuccess:({customer_group:t})=>{l.success(r("customerGroups.create.successToast",{name:t.name})),c(`/customer-groups/${t.id}`)},onError:t=>{l.error(t.message)}})});return e.jsx(s.Form,{form:o,children:e.jsxs(b,{className:"flex h-full flex-col overflow-hidden",onSubmit:u,children:[e.jsx(s.Header,{}),e.jsx(s.Body,{className:"flex flex-col items-center pt-[72px]",children:e.jsxs("div",{className:"flex size-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(s.Title,{asChild:!0,children:e.jsx(g,{children:r("customerGroups.create.header")})}),e.jsx(s.Description,{asChild:!0,children:e.jsx(y,{size:"small",className:"text-ui-fg-subtle",children:r("customerGroups.create.hint")})})]}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:e.jsx(a.Field,{control:o.control,name:"name",render:({field:n})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("fields.name")}),e.jsx(a.Control,{children:e.jsx(v,{...n})}),e.jsx(a.ErrorMessage,{})]})})})]})}),e.jsxs(s.Footer,{children:[e.jsx(s.Close,{asChild:!0,children:e.jsx(i,{variant:"secondary",size:"small",children:r("actions.cancel")})}),e.jsx(i,{type:"submit",variant:"primary",size:"small",isLoading:d,children:r("actions.create")})]})]})})},w=()=>e.jsx(s,{children:e.jsx(T,{})});export{w as Component};