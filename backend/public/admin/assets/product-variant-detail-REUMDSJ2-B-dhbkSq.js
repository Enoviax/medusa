import{g as q}from"./chunk-FSMQADBD-DQ6u7KYm.js";import{V as b}from"./chunk-EUTK2A3J-CZpwcbuN.js";import{L as C}from"./chunk-6WKBBTKM-BjFrIEwo.js";import{S as v}from"./chunk-ULQT3HE4-S8VpexHp.js";import{J as y}from"./chunk-3IW4HYUP-B0hjLMKq.js";import{P as x}from"./chunk-P3UUX2T6-CoxaAzXV.js";import{u as P,D}from"./chunk-OMP35ZTD-BzF4W0Sz.js";import{q as g,d as I,S as T,ax as V,j as e,O as k,ay as z,s as A,b as d,u as L,a2 as E,C as p,H as f,A as h,_ as K,a3 as w,r as _,az as M,B}from"./index-HrqC_Gjd.js";import"./lodash-DnQioFv5.js";import{N as Q}from"./chunk-WX2SMNCD-CTOHXE5S.js";import"./chunk-2XYHZG6S-TOWhaigI.js";import"./chunk-E3YGDIJC-Cs2OmRxi.js";import{C as S}from"./component-7fj7ssjE.js";import{P as R}from"./pencil-square-m42K-ws3.js";import{T as H}from"./trash-Cj0dULeA.js";import{u as $}from"./use-prompt-B2nwlCmB.js";import{c as O}from"./index-DZRnaetd.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./Trans-EQ5E-fso.js";import"./x-mark-mini-Q_ZRZRmQ.js";import"./chunk-YEDAFXMB-B43R7CK6.js";import"./chunk-AOFGTNG6-Dh0uMGDi.js";import"./command-bar-CQ2ojk6i.js";import"./index-Bm0_N0_B.js";import"./plus-mini-JAMyv6UA.js";import"./chunk-QAF7PVQE-Dz18IPLi.js";import"./format-G2WeL2O3.js";import"./date-picker-B0rw1wqZ.js";import"./popover-sllarloD.js";import"./triangle-left-mini-BifPdMwa.js";import"./prompt-DzgdWoNF.js";var F=(t,s)=>({queryKey:z.detail(s),queryFn:async()=>A.admin.product.retrieveVariant(t,s,{fields:b})}),Ie=async({params:t})=>{const s=t.id,a=t.variant_id,i=F(s,a);return g.getQueryData(i.queryKey)??await g.fetchQuery(i)};function G({variant:t}){var c;const{t:s}=d(),a=$(),i=L(),n=((c=t.inventory)==null?void 0:c.length)>1,{mutateAsync:l}=E(t.product_id,t.id),o=async()=>{await a({title:s("general.areYouSure"),description:s("products.variant.deleteWarning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await l(void 0,{onSuccess:()=>{i("..",{replace:!0})}})};return e.jsxs(p,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(f,{children:t.title}),n&&e.jsx("span",{className:"text-ui-fg-muted font-normal",children:e.jsx(S,{})})]}),e.jsx("span",{className:"text-ui-fg-subtle txt-small mt-2",children:s("labels.productVariant")})]}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(h,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:e.jsx(R,{})}]},{actions:[{label:s("actions.delete"),onClick:o,icon:e.jsx(H,{})}]}]})})]}),e.jsx(v,{title:s("fields.sku"),value:t.sku}),t.options.map(r=>{var m;return e.jsx(v,{title:(m=r.option)==null?void 0:m.title,value:e.jsx(K,{size:"2xsmall",children:r.value})},r.id)})]})}var J=({item:t})=>{const{t:s}=d();return e.jsx(h,{groups:[{actions:[{icon:e.jsx(w,{}),label:s("products.variant.inventory.navigateToItem"),to:`/inventory/${t.id}`}]}]})},u=O(),U=()=>{const{t}=d();return _.useMemo(()=>[u.accessor("title",{header:t("fields.title"),cell:({getValue:s})=>{const a=s();return a?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})}):e.jsx(x,{})}}),u.accessor("sku",{header:t("fields.sku"),cell:({getValue:s})=>{const a=s();return a?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})}):e.jsx(x,{})}}),u.accessor("required_quantity",{header:t("fields.requiredQuantity"),cell:({getValue:s})=>{const a=s();return Number.isNaN(a)?e.jsx(x,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})})}}),u.display({id:"inventory_quantity",header:t("fields.inventory"),cell:({getValue:s,row:{original:a}})=>{var l;if(!((l=a.location_levels)!=null&&l.length))return e.jsx(x,{});let i=0,n=0;return a.location_levels.forEach(o=>{i+=o.available_quantity,n+=1}),e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:t("products.variant.tableItem",{availableCount:i,locationCount:n,count:n})})})}}),u.display({id:"actions",cell:({row:s})=>e.jsx(J,{item:s.original})})],[t])},N=20;function W({inventoryItems:t}){const{t:s}=d(),a=U(),{table:i}=P({data:t??[],columns:a,count:t.length,enablePagination:!0,getRowId:l=>l.id,pageSize:N}),n=t.length>1;return e.jsxs(p,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(f,{level:"h2",children:s("fields.inventoryItems")})}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(h,{groups:[{actions:[{label:s(n?"products.variant.inventory.manageKit":"products.variant.inventory.manageItems"),to:"manage-items",icon:n?e.jsx(S,{}):e.jsx(w,{})}]}]})})]}),e.jsx(D,{table:i,columns:a,pageSize:N,count:t.length,navigateTo:l=>`/inventory/${l.id}`})]})}function Y(){const{t}=d();return e.jsx(p,{className:"divide-y p-0",children:e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(f,{level:"h2",children:t("fields.inventoryItems")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("products.variant.inventory.notManagedDesc")})]}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(C,{to:"edit",children:t("products.variant.edit.header")})})]})})}function Z({variant:t}){const{t:s}=d(),a=t.prices.filter(r=>!Object.keys(r.rules||{}).length).sort((r,m)=>{var j;return(j=r.currency_code)==null?void 0:j.localeCompare(m.currency_code)}),i=!!a.length,[n,l]=_.useState(3),o=a.slice(0,n),c=()=>{l(n+3)};return e.jsxs(p,{className:"flex flex-col divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(f,{level:"h2",children:s("labels.prices")}),e.jsx(h,{groups:[{actions:[{label:s("actions.edit"),to:`/products/${t.product_id}/variants/${t.id}/prices`,icon:e.jsx(M,{})}]}]})]}),!i&&e.jsx(Q,{className:"h-60"}),o.map(r=>e.jsxs("div",{className:"txt-small text-ui-fg-subtle flex justify-between px-6 py-4",children:[e.jsx("span",{className:"font-medium",children:r.currency_code.toUpperCase()}),e.jsx("span",{children:q(r.amount,r.currency_code)})]},r.id)),i&&e.jsxs("div",{className:"txt-small text-ui-fg-subtle flex items-center justify-between px-6 py-4",children:[e.jsx("span",{className:"font-medium",children:s("products.variant.pricesPagination",{total:a.length,current:Math.min(n,a.length)})}),e.jsx(B,{onClick:c,disabled:n>=a.length,className:"-mr-3 text-blue-500",variant:"transparent",children:s("actions.showMore")})]})]})}var Te=()=>{const t=I(),{id:s,variant_id:a}=T(),{variant:i,isLoading:n,isError:l,error:o}=V(s,a,{fields:b},{initialData:t});if(n||!i)return e.jsx("div",{children:"Loading..."});if(l)throw o;return e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsxs("div",{className:"flex flex-col gap-x-4 gap-y-3 xl:flex-row xl:items-start",children:[e.jsxs("div",{className:"flex w-full flex-col gap-y-3",children:[e.jsx(G,{variant:i}),i.manage_inventory?e.jsx(W,{inventoryItems:i.inventory_items.map(c=>({...c.inventory,required_quantity:c.required_quantity,variant:i}))}):e.jsx(Y,{}),e.jsx("div",{className:"hidden xl:block",children:e.jsx(y,{data:i,root:"product"})})]}),e.jsxs("div",{className:"flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[400px]",children:[e.jsx(Z,{variant:i}),e.jsx("div",{className:"xl:hidden",children:e.jsx(y,{data:i})})]})]}),e.jsx(k,{})]})};export{Te as Component,Ie as loader};
