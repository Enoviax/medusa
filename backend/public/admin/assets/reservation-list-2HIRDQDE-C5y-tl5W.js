import{a as v}from"./chunk-B4FQDBC3-DH6aAkFN.js";import{u as h,b as j}from"./chunk-7B63V4WX-BqOQ15wg.js";import{a as b,j as e,b as d,C as g,H as y,T,B as _,L as N,r as P,b9 as w,A as S}from"./index-HrqC_Gjd.js";import{S as k}from"./chunk-UR2E444G-Dxg_E1qB.js";import"./chunk-3IW4HYUP-B0hjLMKq.js";import{P as x}from"./chunk-P3UUX2T6-CoxaAzXV.js";import{u as C,D as R}from"./chunk-OMP35ZTD-BzF4W0Sz.js";import"./lodash-DnQioFv5.js";import{u as z}from"./chunk-C76H5USB-CPsw4htd.js";import"./chunk-2XYHZG6S-TOWhaigI.js";import"./chunk-E3YGDIJC-Cs2OmRxi.js";import{P as D}from"./pencil-square-m42K-ws3.js";import{T as L}from"./trash-Cj0dULeA.js";import{u as q}from"./use-prompt-B2nwlCmB.js";import{c as A}from"./index-DZRnaetd.js";import"./format-G2WeL2O3.js";import"./Trans-EQ5E-fso.js";import"./x-mark-mini-Q_ZRZRmQ.js";import"./chunk-YEDAFXMB-B43R7CK6.js";import"./chunk-AOFGTNG6-Dh0uMGDi.js";import"./chunk-WX2SMNCD-CTOHXE5S.js";import"./plus-mini-JAMyv6UA.js";import"./command-bar-CQ2ojk6i.js";import"./index-Bm0_N0_B.js";import"./chunk-QAF7PVQE-Dz18IPLi.js";import"./date-picker-B0rw1wqZ.js";import"./popover-sllarloD.js";import"./triangle-left-mini-BifPdMwa.js";import"./prompt-DzgdWoNF.js";var E=({reservation:a})=>{const{t}=d(),s=q(),{mutateAsync:i}=j(a.id),r=async()=>{await s({title:t("general.areYouSure"),description:t("reservations.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await i()};return e.jsx(S,{groups:[{actions:[{label:t("actions.edit"),to:`${a.id}/edit`,icon:e.jsx(D,{})}]},{actions:[{label:t("actions.delete"),onClick:r,icon:e.jsx(L,{})}]}]})},n=A(),I=()=>{const{t:a}=d();return P.useMemo(()=>[n.accessor("inventory_item",{header:a("fields.sku"),cell:({getValue:t})=>{const s=t();return!s||!s.sku?e.jsx(x,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s.sku})})}}),n.accessor("description",{header:a("fields.description"),cell:({getValue:t})=>{const s=t();return s?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})}):e.jsx(x,{})}}),n.accessor("created_at",{header:a("fields.created"),cell:({getValue:t})=>{const s=t();return e.jsx(v,{date:s})}}),n.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:a("fields.quantity")})}),cell:({getValue:t})=>{const s=t();return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:s})})}}),n.display({id:"actions",cell:({row:t})=>{const s=t.original;return e.jsx(E,{reservation:s})}})],[a])},H=()=>{const{t:a}=d(),{stock_locations:t}=w({limit:1e3}),s=[];if(t){const i={type:"select",options:t.map(r=>({label:r.name,value:r.id})),key:"location_id",searchable:!0,label:a("fields.location")};s.push(i)}return s.push({type:"date",key:"created_at",label:a("fields.createdAt")}),s},B=({pageSize:a=20,prefix:t})=>{const s=z(["location_id","offset","created_at","quantity","updated_at","order"],t),{location_id:i,created_at:r,updated_at:o,quantity:p,offset:c,...l}=s;return{searchParams:{limit:a,offset:c?parseInt(c):void 0,location_id:i,created_at:r?JSON.parse(r):void 0,updated_at:o?JSON.parse(o):void 0,...l},raw:s}},u=20,F=()=>{const{t:a}=d(),{searchParams:t}=B({pageSize:u}),{reservations:s,count:i,isPending:r,isError:o,error:p}=h({...t}),c=H(),l=I(),{table:f}=C({data:s||[],columns:l,count:i,enablePagination:!0,getRowId:m=>m.id,pageSize:u});if(o)throw p;return e.jsxs(g,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(y,{children:a("reservations.domain")}),e.jsx(T,{className:"text-ui-fg-subtle",size:"small",children:a("reservations.subtitle")})]}),e.jsx(_,{variant:"secondary",size:"small",asChild:!0,children:e.jsx(N,{to:"create",children:a("actions.create")})})]}),e.jsx(R,{table:f,columns:l,pageSize:u,count:i,isLoading:r,filters:c,pagination:!0,navigateTo:m=>m.id,search:!1})]})},ve=()=>{const{getWidgets:a}=b();return e.jsx(k,{widgets:{before:a("reservation.list.before"),after:a("reservation.list.after")},children:e.jsx(F,{})})};export{ve as Component};
