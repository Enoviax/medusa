import{D as g}from"./chunk-YRY2CZ6I-vUJGRCaI.js";import{g as b}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{a5 as C,a7 as p,a6 as x,ai as _,S as F,b as j,dr as T,j as e,H as S,ac as I,ad as B,v as E,dk as N,x as o,y as w,T as L,B as h}from"./index-HrqC_Gjd.js";import{K as P}from"./chunk-CEEYZHMN-CG4Za1LL.js";import{b as n,u as V}from"./chunk-MDIOSTKB-RPNiac-A.js";import{T as D}from"./Trans-EQ5E-fso.js";import{R as r}from"./radio-group-DC4s3QKp.js";import{C as M}from"./currency-input-DtsFJK1s.js";import"./index.esm-BA_4hYlD.js";import"./prompt-DzgdWoNF.js";var R=C({is_automatic:p().toLowerCase(),code:p().min(1),value_type:x(["fixed","percentage"]),value:_(),allocation:x(["each","across"])}),z=({promotion:l})=>{const{t:a}=j(),{handleSuccess:c}=V(),t=I({defaultValues:{is_automatic:l.is_automatic.toString(),code:l.code,value:l.application_method.value,allocation:l.application_method.allocation,value_type:l.application_method.type},resolver:B(R)}),m=E({control:t.control,name:"value_type"})==="fixed",{mutateAsync:f,isPending:v}=N(l.id),y=t.handleSubmit(async s=>{await f({is_automatic:s.is_automatic==="true",code:s.code,application_method:{value:s.value,type:s.value_type,allocation:s.allocation}},{onSuccess:()=>{c()}})});return e.jsx(n.Form,{form:t,children:e.jsxs(P,{onSubmit:y,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(n.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsx(o.Field,{control:t.control,name:"is_automatic",render:({field:s})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.form.method.label")}),e.jsx(o.Control,{children:e.jsxs(r,{className:"flex-col gap-y-3",...s,value:s.value,onValueChange:s.onChange,children:[e.jsx(r.ChoiceBox,{value:"false",label:a("promotions.form.method.code.title"),description:a("promotions.form.method.code.description")}),e.jsx(r.ChoiceBox,{value:"true",label:a("promotions.form.method.automatic.title"),description:a("promotions.form.method.automatic.description")})]})}),e.jsx(o.ErrorMessage,{})]})}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(o.Field,{control:t.control,name:"code",render:({field:s})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.form.code.title")}),e.jsx(o.Control,{children:e.jsx(w,{...s})})]})}),e.jsx(L,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:e.jsx(D,{t:a,i18nKey:"promotions.form.code.description",components:[e.jsx("br",{},"break")]})})]}),e.jsx(o.Field,{control:t.control,name:"value_type",render:({field:s})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.fields.value_type")}),e.jsx(o.Control,{children:e.jsxs(r,{className:"flex-col gap-y-3",...s,onValueChange:s.onChange,children:[e.jsx(r.ChoiceBox,{value:"fixed",label:a("promotions.form.value_type.fixed.title"),description:a("promotions.form.value_type.fixed.description")}),e.jsx(r.ChoiceBox,{value:"percentage",label:a("promotions.form.value_type.percentage.title"),description:a("promotions.form.value_type.percentage.description")})]})}),e.jsx(o.ErrorMessage,{})]})}),e.jsx(o.Field,{control:t.control,name:"value",render:({field:{onChange:s,...d}})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a(m?"fields.amount":"fields.percentage")}),e.jsx(o.Control,{children:m?e.jsx(M,{min:0,onValueChange:i=>s(i?parseInt(i):null),code:"USD",symbol:b("USD"),...d,value:d.value}):e.jsx(g,{min:0,max:100,...d,value:d.value||"",onChange:i=>{s(i.target.value===""?null:parseInt(i.target.value))}},"amount")}),e.jsx(o.ErrorMessage,{})]})}),e.jsx(o.Field,{control:t.control,name:"allocation",render:({field:s})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.fields.allocation")}),e.jsx(o.Control,{children:e.jsxs(r,{className:"flex-col gap-y-3",...s,onValueChange:s.onChange,children:[e.jsx(r.ChoiceBox,{value:"each",label:a("promotions.form.allocation.each.title"),description:a("promotions.form.allocation.each.description")}),e.jsx(r.ChoiceBox,{value:"across",label:a("promotions.form.allocation.across.title"),description:a("promotions.form.allocation.across.description")})]})}),e.jsx(o.ErrorMessage,{})]})})]})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(h,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(h,{size:"small",type:"submit",isLoading:v,children:a("actions.save")})]})})]})})},O=()=>{const{id:l}=F(),{t:a}=j(),{promotion:c,isLoading:t,isError:u,error:m}=T(l);if(u)throw m;return e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsx(S,{children:a("promotions.edit.title")})}),!t&&c&&e.jsx(z,{promotion:c})]})};export{O as Component};