import{u as x,a as g,b}from"./chunk-VELNOPU6--q_3zpBh.js";import{a as C,j as a,b as u,M as j,C as S,H as T,T as v,L as y,B as P,r as D,k,eo as w,A,t as p}from"./index-HrqC_Gjd.js";import{S as E}from"./chunk-UR2E444G-Dxg_E1qB.js";import"./chunk-3IW4HYUP-B0hjLMKq.js";import{u as _,D as z}from"./chunk-OMP35ZTD-BzF4W0Sz.js";import"./lodash-DnQioFv5.js";import"./chunk-2XYHZG6S-TOWhaigI.js";import"./chunk-E3YGDIJC-Cs2OmRxi.js";import{P as L}from"./pencil-square-m42K-ws3.js";import{T as H}from"./trash-Cj0dULeA.js";import{u as B}from"./use-prompt-B2nwlCmB.js";import{c as I}from"./index-DZRnaetd.js";import"./chunk-GA34GXNI-C-K0npsn.js";import"./chunk-P3UUX2T6-CoxaAzXV.js";import"./chunk-OI7BBNYW-CqFrQu54.js";import"./chunk-ADOCJB6L-oyws-Ex1.js";import"./chunk-C76H5USB-CPsw4htd.js";import"./Trans-EQ5E-fso.js";import"./x-mark-mini-Q_ZRZRmQ.js";import"./chunk-YEDAFXMB-B43R7CK6.js";import"./chunk-AOFGTNG6-Dh0uMGDi.js";import"./chunk-WX2SMNCD-CTOHXE5S.js";import"./plus-mini-JAMyv6UA.js";import"./command-bar-CQ2ojk6i.js";import"./index-Bm0_N0_B.js";import"./chunk-QAF7PVQE-Dz18IPLi.js";import"./format-G2WeL2O3.js";import"./date-picker-B0rw1wqZ.js";import"./popover-sllarloD.js";import"./triangle-left-mini-BifPdMwa.js";import"./prompt-DzgdWoNF.js";var l=20,M=()=>{const{t:e}=u(),{raw:s,searchParams:n}=x({pageSize:l}),{sales_channels:r,count:t,isPending:c,isError:i,error:d}=j(n,{placeholderData:k}),m=O(),h=g(),{table:f}=_({data:r??[],columns:m,count:t,enablePagination:!0,getRowId:o=>o.id,pageSize:l});if(i)throw d;return a.jsxs(S,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(T,{children:e("salesChannels.domain")}),a.jsx(v,{className:"text-ui-fg-subtle",size:"small",children:e("salesChannels.subtitle")})]}),a.jsx(y,{to:"/settings/sales-channels/create",children:a.jsx(P,{size:"small",variant:"secondary",children:e("actions.create")})})]}),a.jsx(z,{table:f,columns:m,count:t,pageSize:l,filters:h,pagination:!0,search:!0,navigateTo:o=>o.id,isLoading:c,queryObject:s,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]})]})},N=({salesChannel:e})=>{const{t:s}=u(),n=B(),{mutateAsync:r}=w(e.id),t=async()=>{await n({title:s("general.areYouSure"),description:s("salesChannels.deleteSalesChannelWarning",{name:e.name}),verificationInstruction:s("general.typeToConfirm"),verificationText:e.name,confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await r(void 0,{onSuccess:()=>{p.success(s("salesChannels.toast.delete"))},onError:i=>{p.error(i.message)}})};return a.jsx(A,{groups:[{actions:[{icon:a.jsx(L,{}),label:s("actions.edit"),to:`/settings/sales-channels/${e.id}/edit`}]},{actions:[{icon:a.jsx(H,{}),label:s("actions.delete"),onClick:t}]}]})},q=I(),O=()=>{const e=b();return D.useMemo(()=>[...e,q.display({id:"actions",cell:({row:s})=>a.jsx(N,{salesChannel:s.original})})],[e])},be=()=>{const{getWidgets:e}=C();return a.jsx(E,{widgets:{before:e("sales_channel.list.before"),after:e("sales_channel.list.after")},hasOutlet:!0,children:a.jsx(M,{})})};export{be as Component};
