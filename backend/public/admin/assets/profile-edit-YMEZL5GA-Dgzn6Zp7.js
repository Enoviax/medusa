import{a5 as E,a7 as x,ea as F,b as f,j as e,H as L,ac as N,ad as S,bK as h,eb as I,t as j,x as s,y as u,B as p}from"./index-HrqC_Gjd.js";import{K as P}from"./chunk-CEEYZHMN-CG4Za1LL.js";import{b as t,u as w}from"./chunk-MDIOSTKB-RPNiac-A.js";import{S as d}from"./select-DFWt-QMV.js";import"./prompt-DzgdWoNF.js";import"./triangles-mini-CSRaa6iV.js";var H=E({first_name:x().optional(),last_name:x().optional(),language:x()}),M=({user:i})=>{const{t:r,i18n:c}=f(),{handleSuccess:m}=w(),n=N({defaultValues:{first_name:i.first_name??"",last_name:i.last_name??"",language:c.language},resolver:S(H)}),y=async a=>{await c.changeLanguage(a)},_=h.sort((a,l)=>a.display_name.localeCompare(l.display_name)),{mutateAsync:b,isPending:v}=I(i.id),C=n.handleSubmit(async a=>{await b({first_name:a.first_name,last_name:a.last_name},{onError:l=>{j.error(l.message)}}),await y(a.language),j.success(r("profile.toast.edit")),m()});return e.jsx(t.Form,{form:n,children:e.jsxs(P,{onSubmit:C,className:"flex flex-1 flex-col",children:[e.jsx(t.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(s.Field,{control:n.control,name:"first_name",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.firstName")}),e.jsx(s.Control,{children:e.jsx(u,{...a})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"last_name",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.lastName")}),e.jsx(s.Control,{children:e.jsx(u,{...a})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(s.Field,{control:n.control,name:"language",render:({field:{ref:a,...l}})=>{var g;return e.jsxs(s.Item,{className:"gap-y-4",children:[e.jsxs("div",{children:[e.jsx(s.Label,{children:r("profile.fields.languageLabel")}),e.jsx(s.Hint,{children:r("profile.edit.languageHint")})]}),e.jsxs("div",{children:[e.jsx(s.Control,{children:e.jsxs(d,{...l,onValueChange:l.onChange,children:[e.jsx(d.Trigger,{ref:a,className:"py-1 text-[13px]",children:e.jsx(d.Value,{placeholder:r("profile.edit.languagePlaceholder"),children:(g=_.find(o=>o.code===l.value))==null?void 0:g.display_name})}),e.jsx(d.Content,{children:h.map(o=>e.jsx(d.Item,{value:o.code,children:o.display_name},o.code))})]})}),e.jsx(s.ErrorMessage,{})]})]})}})]})}),e.jsx(t.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(t.Close,{asChild:!0,children:e.jsx(p,{size:"small",variant:"secondary",children:r("actions.cancel")})}),e.jsx(p,{size:"small",type:"submit",isLoading:v,children:r("actions.save")})]})})]})})},U=()=>{const{user:i,isPending:r,isError:c,error:m}=F(),{t:n}=f();if(c)throw m;return e.jsxs(t,{children:[e.jsx(t.Header,{className:"capitalize",children:e.jsx(L,{children:n("profile.edit.header")})}),!r&&i&&e.jsx(M,{user:i,usageInsights:!1})]})};export{U as Component};
