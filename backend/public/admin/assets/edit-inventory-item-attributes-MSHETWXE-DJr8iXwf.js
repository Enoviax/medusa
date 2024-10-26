import{C as y}from"./chunk-MW4K5NNY-BNmZRctL.js";import{K as b}from"./chunk-CEEYZHMN-CG4Za1LL.js";import{b as h,u as I}from"./chunk-MDIOSTKB-RPNiac-A.js";import{a9 as a,S as F,b as f,e2 as w,j as e,H as C,ac as E,ad as _,e7 as L,t as p,x as r,y as u,B as v}from"./index-HrqC_Gjd.js";import"./triangles-mini-CSRaa6iV.js";import"./prompt-DzgdWoNF.js";var M=a.object({height:a.number().positive().optional(),width:a.number().positive().optional(),length:a.number().positive().optional(),weight:a.number().positive().optional(),mid_code:a.string().optional(),hs_code:a.string().optional(),origin_country:a.string().optional()}),S=s=>({height:s.height??void 0,width:s.width??void 0,length:s.length??void 0,weight:s.weight??void 0,mid_code:s.mid_code??void 0,hs_code:s.hs_code??void 0,origin_country:s.origin_country??void 0}),A=({item:s})=>{const{t:o}=f(),{handleSuccess:x}=I(),n=E({defaultValues:S(s),resolver:_(M)}),{mutateAsync:m,isPending:j}=L(s.id),g=n.handleSubmit(async t=>{await m(t,{onSuccess:()=>{p.success(o("inventory.toast.updateItem")),x()},onError:l=>p.error(l.message)})});return e.jsx(h.Form,{form:n,children:e.jsxs(b,{onSubmit:g,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(h.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[e.jsx(r.Field,{control:n.control,name:"height",render:({field:{onChange:t,value:l,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.height")}),e.jsx(r.Control,{children:e.jsx(u,{type:"number",min:0,value:l||"",onChange:c=>{const i=c.target.value;t(i===""?null:parseFloat(i))},...d})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:n.control,name:"width",render:({field:{onChange:t,value:l,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.width")}),e.jsx(r.Control,{children:e.jsx(u,{type:"number",min:0,value:l||"",onChange:c=>{const i=c.target.value;t(i===""?null:parseFloat(i))},...d})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:n.control,name:"length",render:({field:{onChange:t,value:l,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.length")}),e.jsx(r.Control,{children:e.jsx(u,{type:"number",min:0,value:l||"",onChange:c=>{const i=c.target.value;t(i===""?null:parseFloat(i))},...d})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:n.control,name:"weight",render:({field:{onChange:t,value:l,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.weight")}),e.jsx(r.Control,{children:e.jsx(u,{type:"number",min:0,value:l||"",onChange:c=>{const i=c.target.value;t(i===""?null:parseFloat(i))},...d})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:n.control,name:"mid_code",render:({field:t})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.midCode")}),e.jsx(r.Control,{children:e.jsx(u,{...t})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:n.control,name:"hs_code",render:({field:t})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.hsCode")}),e.jsx(r.Control,{children:e.jsx(u,{...t})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:n.control,name:"origin_country",render:({field:t})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.countryOfOrigin")}),e.jsx(r.Control,{children:e.jsx(y,{...t})}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(h.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(h.Close,{asChild:!0,children:e.jsx(v,{variant:"secondary",size:"small",children:o("actions.cancel")})}),e.jsx(v,{type:"submit",size:"small",isLoading:j,children:o("actions.save")})]})})]})})},D=()=>{const{id:s}=F(),{t:o}=f(),{inventory_item:x,isPending:n,isError:m,error:j}=w(s),g=!n&&x;if(m)throw j;return e.jsxs(h,{children:[e.jsx(h.Header,{children:e.jsx(C,{children:o("products.editAttributes")})}),g&&e.jsx(A,{item:x})]})};export{D as Component};
