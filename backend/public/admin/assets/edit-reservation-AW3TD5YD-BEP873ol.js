import{c as w,d as E}from"./chunk-7B63V4WX-BqOQ15wg.js";import{a9 as h,S as R,b as F,e2 as k,b9 as C,j as e,H as I,ac as N,ad as T,t as _,x as s,y as z,B as S,T as q}from"./index-HrqC_Gjd.js";import{K as L}from"./chunk-CEEYZHMN-CG4Za1LL.js";import{b as u,u as M}from"./chunk-MDIOSTKB-RPNiac-A.js";import{S as x}from"./select-DFWt-QMV.js";import{T as V}from"./textarea-L2z7ML-e.js";import"./prompt-DzgdWoNF.js";import"./triangles-mini-CSRaa6iV.js";var A=h.object({location_id:h.string(),description:h.string().optional(),quantity:h.number().min(1)}),p=({title:t,value:r})=>e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(q,{className:"px-2 py-1.5",size:"small",leading:"compact",children:t}),e.jsx(q,{className:"px-2 py-1.5",size:"small",leading:"compact",children:r})]}),B=t=>({quantity:t.quantity,location_id:t.location_id,description:t.description??void 0}),D=({reservation:t,item:r,locations:l})=>{const{t:i}=F(),{handleSuccess:y}=M(),o=N({defaultValues:B(t),resolver:T(A)}),{mutateAsync:a}=E(t.id),j=o.handleSubmit(async n=>{a(n,{onSuccess:()=>{_.success(i("inventory.reservation.updateSuccessToast")),y()},onError:m=>{_.error(m.message)}})}),f=o.watch("quantity"),v=o.watch("location_id"),d=r.location_levels.find(n=>n.location_id===v);return e.jsx(u.Form,{form:o,children:e.jsxs(L,{onSubmit:j,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(u.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-auto",children:[e.jsx(s.Field,{control:o.control,name:"location_id",render:({field:{onChange:n,value:m,ref:g,...b}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("inventory.reservation.location")}),e.jsx(s.Control,{children:e.jsxs(x,{value:m,onValueChange:c=>{n(c)},...b,children:[e.jsx(x.Trigger,{ref:g,children:e.jsx(x.Value,{})}),e.jsx(x.Content,{children:(l||[]).map(c=>e.jsx(x.Item,{value:c.id,children:c.name},c.id))})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsxs("div",{className:"text-ui-fg-subtle shadow-elevation-card-rest grid grid-rows-4 divide-y rounded-lg border",children:[e.jsx(p,{title:i("fields.title"),value:r.title??r.sku}),e.jsx(p,{title:i("fields.sku"),value:r.sku}),e.jsx(p,{title:i("fields.inStock"),value:d.stocked_quantity}),e.jsx(p,{title:i("inventory.available"),value:d.stocked_quantity-(d.reserved_quantity-t.quantity)-f})]}),e.jsx(s.Field,{control:o.control,name:"quantity",render:({field:{onChange:n,value:m,...g}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("inventory.reservation.reservedAmount")}),e.jsx(s.Control,{children:e.jsx(z,{type:"number",min:0,max:(d.available_quantity||0)+(t.quantity||0),value:m||"",onChange:b=>{const c=b.target.value;n(c===""?null:parseFloat(c))},...g})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"description",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:i("fields.description")}),e.jsx(s.Control,{children:e.jsx(V,{...n})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(u.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(u.Close,{asChild:!0,children:e.jsx(S,{variant:"secondary",size:"small",children:i("actions.cancel")})}),e.jsx(S,{type:"submit",size:"small",isLoading:!1,children:i("actions.save")})]})})]})})},O=()=>{var v;const{id:t}=R(),{t:r}=F(),{reservation:l,isPending:i,isError:y,error:o}=w(t),{inventory_item:a}=k(l==null?void 0:l.inventory_item_id,{enabled:!!l}),{stock_locations:j}=C({id:(v=a==null?void 0:a.location_levels)==null?void 0:v.map(d=>d.location_id)},{enabled:!!(a!=null&&a.location_levels)}),f=!i&&l&&a&&j;if(y)throw o;return e.jsxs(u,{children:[e.jsx(u.Header,{children:e.jsx(I,{children:r("inventory.reservation.editItemDetails")})}),f&&e.jsx(D,{locations:j,reservation:l,item:a})]})};export{O as Component};
