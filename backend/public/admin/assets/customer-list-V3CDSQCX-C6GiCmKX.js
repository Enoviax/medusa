import{u as f,a as g,b as x}from"./chunk-DJPQV344-CU-3sB7U.js";import{a as j,j as s,b as m,dR as y,C,H as h,L as v,B as k,r as T,k as A,A as P}from"./index-HrqC_Gjd.js";import{S}from"./chunk-UR2E444G-Dxg_E1qB.js";import"./chunk-3IW4HYUP-B0hjLMKq.js";import{u as D,D as E}from"./chunk-OMP35ZTD-BzF4W0Sz.js";import"./lodash-DnQioFv5.js";import"./chunk-2XYHZG6S-TOWhaigI.js";import"./chunk-E3YGDIJC-Cs2OmRxi.js";import{P as _}from"./pencil-square-m42K-ws3.js";import{c as w}from"./index-DZRnaetd.js";import"./chunk-C76H5USB-CPsw4htd.js";import"./chunk-B4FQDBC3-DH6aAkFN.js";import"./chunk-P3UUX2T6-CoxaAzXV.js";import"./format-G2WeL2O3.js";import"./chunk-ADOCJB6L-oyws-Ex1.js";import"./Trans-EQ5E-fso.js";import"./x-mark-mini-Q_ZRZRmQ.js";import"./chunk-YEDAFXMB-B43R7CK6.js";import"./chunk-AOFGTNG6-Dh0uMGDi.js";import"./chunk-WX2SMNCD-CTOHXE5S.js";import"./plus-mini-JAMyv6UA.js";import"./command-bar-CQ2ojk6i.js";import"./index-Bm0_N0_B.js";import"./chunk-QAF7PVQE-Dz18IPLi.js";import"./date-picker-B0rw1wqZ.js";import"./popover-sllarloD.js";import"./triangle-left-mini-BifPdMwa.js";var a=20,L=()=>{const{t:e}=m(),{searchParams:t,raw:n}=f({pageSize:a}),{customers:l,count:o,isLoading:c,isError:u,error:p}=y({...t},{placeholderData:A}),d=g(),i=H(),{table:b}=D({data:l??[],columns:i,count:o,enablePagination:!0,getRowId:r=>r.id,pageSize:a});if(u)throw p;return s.jsxs(C,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(h,{children:e("customers.domain")}),s.jsx(v,{to:"/customers/create",children:s.jsx(k,{size:"small",variant:"secondary",children:e("actions.create")})})]}),s.jsx(E,{table:b,columns:i,pageSize:a,count:o,filters:d,orderBy:[{key:"email",label:e("fields.email")},{key:"first_name",label:e("fields.firstName")},{key:"last_name",label:e("fields.lastName")},{key:"has_account",label:e("customers.hasAccount")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],isLoading:c,navigateTo:r=>r.original.id,search:!0,queryObject:n,noRecords:{message:e("customers.list.noRecordsMessage")}})]})},R=({customer:e})=>{const{t}=m();return s.jsx(P,{groups:[{actions:[{icon:s.jsx(_,{}),label:t("actions.edit"),to:`/customers/${e.id}/edit`}]}]})},z=w(),H=()=>{const e=x();return T.useMemo(()=>[...e,z.display({id:"actions",cell:({row:t})=>s.jsx(R,{customer:t.original})})],[e])},le=()=>{const{getWidgets:e}=j();return s.jsx(S,{widgets:{after:e("customer.list.after"),before:e("customer.list.before")},children:s.jsx(L,{})})};export{le as Component};
