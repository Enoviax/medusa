import{a as f}from"./chunk-U36KR32O-DRlk0i0u.js";import{q as p,a as y,j as t,fb as h,s as b,b as u,db as g,C as j,H as v,T,B as D,L as w,r as C,k as S,A as L,fc as P,t as d}from"./index-HrqC_Gjd.js";import{b as q}from"./chunk-5R4UGQUP-BfJwCDBm.js";import{S as E}from"./chunk-UR2E444G-Dxg_E1qB.js";import"./chunk-3IW4HYUP-B0hjLMKq.js";import{u as A,D as k}from"./chunk-OMP35ZTD-BzF4W0Sz.js";import"./lodash-DnQioFv5.js";import"./chunk-2XYHZG6S-TOWhaigI.js";import"./chunk-E3YGDIJC-Cs2OmRxi.js";import{P as z}from"./pencil-square-m42K-ws3.js";import{T as H}from"./trash-Cj0dULeA.js";import{u as Q}from"./use-prompt-B2nwlCmB.js";import{c as N}from"./index-DZRnaetd.js";import"./chunk-B4FQDBC3-DH6aAkFN.js";import"./chunk-P3UUX2T6-CoxaAzXV.js";import"./format-G2WeL2O3.js";import"./chunk-OI7BBNYW-CqFrQu54.js";import"./chunk-C76H5USB-CPsw4htd.js";import"./Trans-EQ5E-fso.js";import"./x-mark-mini-Q_ZRZRmQ.js";import"./chunk-YEDAFXMB-B43R7CK6.js";import"./chunk-AOFGTNG6-Dh0uMGDi.js";import"./chunk-WX2SMNCD-CTOHXE5S.js";import"./plus-mini-JAMyv6UA.js";import"./command-bar-CQ2ojk6i.js";import"./index-Bm0_N0_B.js";import"./chunk-QAF7PVQE-Dz18IPLi.js";import"./date-picker-B0rw1wqZ.js";import"./popover-sllarloD.js";import"./triangle-left-mini-BifPdMwa.js";import"./prompt-DzgdWoNF.js";var _=e=>({queryKey:h.list(e),queryFn:async()=>b.admin.returnReason.list(e)}),je=async()=>{const e=_();return p.getQueryData(e.queryKey)??await p.fetchQuery(e)},K=({id:e,label:s})=>{const{t:r}=u(),o=Q(),{mutateAsync:a}=P(e);return async()=>{await o({title:r("general.areYouSure"),description:r("returnReasons.delete.confirmation",{label:s}),confirmText:r("actions.delete"),cancelText:r("actions.cancel")})&&await a(void 0,{onSuccess:()=>{d.success(r("returnReasons.delete.successToast",{label:s}))},onError:n=>{d.error(n.message)}})}},i=20,M=()=>{const{t:e}=u(),{searchParams:s,raw:r}=q({pageSize:i}),{return_reasons:o,count:a,isPending:c,isError:l,error:n}=g(s,{placeholderData:S}),m=I(),{table:R}=A({data:o,columns:m,count:a,getRowId:x=>x.id,pageSize:i});if(l)throw n;return t.jsxs(j,{className:"divide-y px-0 py-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{children:[t.jsx(v,{children:e("returnReasons.domain")}),t.jsx(T,{className:"text-ui-fg-subtle",size:"small",children:e("returnReasons.subtitle")})]}),t.jsx(D,{variant:"secondary",size:"small",asChild:!0,children:t.jsx(w,{to:"create",children:e("actions.create")})})]}),t.jsx(k,{table:R,queryObject:r,count:a,isLoading:c,columns:m,pageSize:i,noHeader:!0,pagination:!0,search:!0})]})},O=({returnReason:e})=>{const{t:s}=u(),r=K(e);return t.jsx(L,{groups:[{actions:[{icon:t.jsx(z,{}),label:s("actions.edit"),to:`${e.id}/edit`}]},{actions:[{icon:t.jsx(H,{}),label:s("actions.delete"),onClick:r}]}]})},B=N(),I=()=>{const e=f();return C.useMemo(()=>[...e,B.display({id:"actions",cell:({row:s})=>t.jsx(O,{returnReason:s.original})})],[e])},ve=()=>{const{getWidgets:e}=y();return t.jsx(E,{showMetadata:!1,showJSON:!1,hasOutlet:!0,widgets:{after:e("return_reason.list.after"),before:e("return_reason.list.before")},children:t.jsx(M,{})})};export{ve as Component,je as loader};