import{C as H}from"./chunk-MW4K5NNY-BNmZRctL.js";import{C as K}from"./chunk-BNH57GBH-BDUDjMql.js";import{o as f}from"./chunk-QRQHBXSL-BxwxBlfm.js";import{a9 as i,d as z,b as k,S as B,aa as Q,U as R,ab as U,j as e,H as C,q as F,ac as $,ad as O,ae as A,t as _,x as r,y as d,D as I,af as L,B as E,p as T,s as G}from"./index-HrqC_Gjd.js";import{t as J,a as y}from"./chunk-3ISBJK7K-BDgyZg6W.js";import{K as W}from"./chunk-CEEYZHMN-CG4Za1LL.js";import{b as j,u as X}from"./chunk-MDIOSTKB-RPNiac-A.js";import"./triangles-mini-CSRaa6iV.js";import"./x-mark-mini-Q_ZRZRmQ.js";import"./plus-mini-JAMyv6UA.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./prompt-DzgdWoNF.js";var Y=i.object({title:i.string().min(1),material:i.string().optional(),sku:i.string().optional(),ean:i.string().optional(),upc:i.string().optional(),barcode:i.string().optional(),manage_inventory:i.boolean(),allow_backorder:i.boolean(),weight:f,height:f,width:f,length:f,mid_code:i.string().optional(),hs_code:i.string().optional(),origin_country:i.string().optional(),options:i.record(i.string())}),Z=({product:l,variant:t})=>{var g,p;const{t:n}=k(),{handleSuccess:m}=X(),b=(g=l.options)==null?void 0:g.reduce((s,a)=>{var x;const c=(x=t.options)==null?void 0:x.find(h=>h.option_id===a.id);return s[a.title]=c==null?void 0:c.value,s},{}),o=$({defaultValues:{title:t.title||"",material:t.material||"",sku:t.sku||"",ean:t.ean||"",upc:t.upc||"",barcode:t.barcode||"",inventory_quantity:t.inventory_quantity||"",manage_inventory:t.manage_inventory||!1,allow_backorder:t.allow_backorder||!1,weight:t.weight||"",height:t.height||"",width:t.width||"",length:t.length||"",mid_code:t.mid_code||"",hs_code:t.hs_code||"",origin_country:t.origin_country||"",options:b},resolver:O(Y)}),{mutateAsync:u,isPending:v}=A(l.id,t.id),w=o.handleSubmit(async s=>{const{title:a,weight:c,height:x,width:h,length:M,allow_backorder:N,manage_inventory:P,options:S,...q}=s,D=J(q);await u({id:t.id,weight:y(c),height:y(x),width:y(h),length:y(M),title:a,allow_backorder:N,manage_inventory:P,options:S,...D},{onSuccess:()=>{m("../"),_.success(n("products.variant.edit.success"))},onError:V=>{_.error(V.message)}})});return e.jsx(j.Form,{form:o,children:e.jsxs(W,{onSubmit:w,className:"flex size-full flex-col overflow-hidden",children:[e.jsxs(j.Body,{className:"flex size-full flex-col gap-y-8 overflow-auto",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(r.Field,{control:o.control,name:"title",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:n("fields.title")}),e.jsx(r.Control,{children:e.jsx(d,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"material",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.material")}),e.jsx(r.Control,{children:e.jsx(d,{...s})}),e.jsx(r.ErrorMessage,{})]})}),(p=l.options)==null?void 0:p.map(s=>e.jsx(r.Field,{control:o.control,name:`options.${s.title}`,render:({field:{value:a,onChange:c,...x}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:s.title}),e.jsx(r.Control,{children:e.jsx(K,{value:a,onChange:h=>{c(h)},...x,options:s.values.map(h=>({label:h.value,value:h.value}))})})]})},s.id))]}),e.jsx(I,{}),e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(C,{level:"h2",children:n("products.variant.inventory.header")}),e.jsx(r.Field,{control:o.control,name:"sku",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.sku")}),e.jsx(r.Control,{children:e.jsx(d,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"ean",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.ean")}),e.jsx(r.Control,{children:e.jsx(d,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"upc",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.upc")}),e.jsx(r.Control,{children:e.jsx(d,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"barcode",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.barcode")}),e.jsx(r.Control,{children:e.jsx(d,{...s})}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(r.Field,{control:o.control,name:"manage_inventory",render:({field:{value:s,onChange:a,...c}})=>e.jsxs(r.Item,{children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r.Label,{children:n("products.variant.inventory.manageInventoryLabel")}),e.jsx(r.Control,{children:e.jsx(L,{checked:s,onCheckedChange:x=>a(!!x),...c})})]}),e.jsx(r.Hint,{children:n("products.variant.inventory.manageInventoryHint")})]}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"allow_backorder",render:({field:{value:s,onChange:a,...c}})=>e.jsxs(r.Item,{children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r.Label,{children:n("products.variant.inventory.allowBackordersLabel")}),e.jsx(r.Control,{children:e.jsx(L,{checked:s,onCheckedChange:x=>a(!!x),...c})})]}),e.jsx(r.Hint,{children:n("products.variant.inventory.allowBackordersHint")})]}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(I,{}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(C,{level:"h2",children:n("products.attributes")}),e.jsx(r.Field,{control:o.control,name:"weight",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.weight")}),e.jsx(r.Control,{children:e.jsx(d,{type:"number",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"width",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.width")}),e.jsx(r.Control,{children:e.jsx(d,{type:"number",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"length",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.length")}),e.jsx(r.Control,{children:e.jsx(d,{type:"number",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"height",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.height")}),e.jsx(r.Control,{children:e.jsx(d,{type:"number",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"mid_code",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.midCode")}),e.jsx(r.Control,{children:e.jsx(d,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"hs_code",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.hsCode")}),e.jsx(r.Control,{children:e.jsx(d,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"origin_country",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:n("fields.countryOfOrigin")}),e.jsx(r.Control,{children:e.jsx(H,{...s})}),e.jsx(r.ErrorMessage,{})]})})]})]}),e.jsx(j.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(j.Close,{asChild:!0,children:e.jsx(E,{variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(E,{type:"submit",size:"small",isLoading:v,children:n("actions.save")})]})})]})})},me=()=>{const l=z(),{t}=k(),{id:n,variant_id:m}=B(),[b]=Q(),o=b.get("variant_id"),{product:u,isPending:v,isFetching:w,isError:g,error:p}=R(n,void 0,{initialData:l}),s=u==null?void 0:u.variants.find(a=>a.id===(m||o));if(!v&&!w&&!s)throw U({status:404,message:`Variant with ID ${m||o} was not found.`});if(g)throw p;return e.jsxs(j,{children:[e.jsx(j.Header,{children:e.jsx(C,{children:t("products.variant.edit.header")})}),s&&e.jsx(Z,{product:u,variant:s})]})},ee=l=>[T.detail(l)],re=async l=>await G.admin.product.retrieve(l),se=l=>({queryKey:ee(l),queryFn:async()=>re(l)}),ge=async({params:l})=>{const t=l.id,n=se(t);return F.getQueryData(n.queryKey)??await F.fetchQuery(n)};export{me as Component,ge as loader};
