import{L as g}from"./chunk-I3VB6NM2-DuUwimvF.js";import{f as y}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{b as i,r as v,j as s,d1 as P,a as T,i as _,k as C,C as N,H as R,T as w,L as S,B as k,ec as z,A,t as x}from"./index-HrqC_Gjd.js";import{P as h}from"./chunk-P3UUX2T6-CoxaAzXV.js";import{c as j}from"./index-DZRnaetd.js";import{u as D}from"./chunk-C76H5USB-CPsw4htd.js";import{S as H}from"./chunk-UR2E444G-Dxg_E1qB.js";import"./chunk-3IW4HYUP-B0hjLMKq.js";import{u as E,D as L}from"./chunk-OMP35ZTD-BzF4W0Sz.js";import"./lodash-DnQioFv5.js";import"./chunk-2XYHZG6S-TOWhaigI.js";import"./chunk-E3YGDIJC-Cs2OmRxi.js";import{P as q}from"./pencil-square-m42K-ws3.js";import{T as M}from"./trash-Cj0dULeA.js";import{u as O}from"./use-prompt-B2nwlCmB.js";import"./Trans-EQ5E-fso.js";import"./x-mark-mini-Q_ZRZRmQ.js";import"./chunk-YEDAFXMB-B43R7CK6.js";import"./chunk-AOFGTNG6-Dh0uMGDi.js";import"./chunk-WX2SMNCD-CTOHXE5S.js";import"./plus-mini-JAMyv6UA.js";import"./command-bar-CQ2ojk6i.js";import"./index-Bm0_N0_B.js";import"./chunk-QAF7PVQE-Dz18IPLi.js";import"./format-G2WeL2O3.js";import"./date-picker-B0rw1wqZ.js";import"./popover-sllarloD.js";import"./triangle-left-mini-BifPdMwa.js";import"./prompt-DzgdWoNF.js";var B=({prefix:e,pageSize:r=20})=>{const t=D(["offset","q","order","created_at","updated_at"],e),{offset:a,q:n,order:l,created_at:o,updated_at:c}=t;return{searchParams:{limit:r,offset:a?Number(a):0,order:l,created_at:o?JSON.parse(o):void 0,updated_at:c?JSON.parse(c):void 0,q:n},raw:t}},F=()=>{const{t:e}=i();return[...[{label:e("fields.createdAt"),key:"created_at"},{label:e("fields.updatedAt"),key:"updated_at"}].map(a=>({key:a.key,label:a.label,type:"date"}))]},I=({countries:e})=>(i(),!e||e.length===0?s.jsx(h,{}):s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx(g,{list:e.map(r=>P.find(t=>t.iso_2===r.iso_2).display_name)})})),$=()=>{const{t:e}=i();return s.jsx("div",{className:"flex size-full items-center",children:s.jsx("span",{children:e("fields.countries")})})},J=({paymentProviders:e})=>{if(!e||e.length===0)return s.jsx(h,{});const r=e.map(t=>y(t.id));return s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx(g,{list:r})})},Q=()=>{const{t:e}=i();return s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:e("fields.paymentProviders")})})},W=({name:e})=>s.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:e})}),G=()=>{const{t:e}=i();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.name")})})},m=j(),V=()=>v.useMemo(()=>[m.accessor("name",{header:()=>s.jsx(G,{}),cell:({getValue:e})=>s.jsx(W,{name:e()})}),m.accessor("countries",{header:()=>s.jsx($,{}),cell:({getValue:e})=>s.jsx(I,{countries:e()})}),m.accessor("payment_providers",{header:()=>s.jsx(Q,{}),cell:({getValue:e})=>s.jsx(J,{paymentProviders:e()})})],[]),u=20,Y=()=>{const{t:e}=i(),{searchParams:r,raw:t}=B({pageSize:u}),{regions:a,count:n,isPending:l,isError:o,error:c}=_({...r,fields:"*payment_providers"},{placeholderData:C}),p=F(),f=U(),{table:b}=E({data:a??[],columns:f,count:n,enablePagination:!0,getRowId:d=>d.id,pageSize:u});if(o)throw c;return s.jsxs(N,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(R,{children:e("regions.domain")}),s.jsx(w,{className:"text-ui-fg-subtle",size:"small",children:e("regions.subtitle")})]}),s.jsx(S,{to:"/settings/regions/create",children:s.jsx(k,{size:"small",variant:"secondary",children:e("actions.create")})})]}),s.jsx(L,{table:b,columns:f,count:n,pageSize:u,isLoading:l,filters:p,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],navigateTo:d=>`${d.original.id}`,pagination:!0,search:!0,queryObject:t,noRecords:{message:e("regions.list.noRecordsMessage")}})]})},Z=({region:e})=>{const{t:r}=i(),t=O(),{mutateAsync:a}=z(e.id),n=async()=>{await t({title:r("general.areYouSure"),description:r("regions.deleteRegionWarning",{name:e.name}),verificationText:e.name,verificationInstruction:r("general.typeToConfirm"),confirmText:r("actions.delete"),cancelText:r("actions.cancel")})&&await a(void 0,{onSuccess:()=>{x.success(r("regions.toast.delete"))},onError:o=>{x.error(o.message)}})};return s.jsx(A,{groups:[{actions:[{label:r("actions.edit"),to:`/settings/regions/${e.id}/edit`,icon:s.jsx(q,{})}]},{actions:[{label:r("actions.delete"),onClick:n,icon:s.jsx(M,{})}]}]})},K=j(),U=()=>{const e=V();return v.useMemo(()=>[...e,K.display({id:"actions",cell:({row:r})=>s.jsx(Z,{region:r.original})})],[e])},we=()=>{const{getWidgets:e}=T();return s.jsx(H,{widgets:{before:e("region.list.before"),after:e("region.list.after")},children:s.jsx(Y,{})})};export{we as Component};