import{u as k}from"./chunk-4L5I5U7R-BhzZAsCe.js";import{D as A}from"./chunk-BTWRDYKW-D-YKBkDK.js";import{a5 as G,as as E,a7 as f,ai as _,S as H,ab as U,j as r,b as V,ac as Z,ad as q,g as J,r as S,i as Q,l as W,t as v,B as P}from"./index-HrqC_Gjd.js";import{d as X,c as Y}from"./chunk-VDODP7YI-D5xdtjUz.js";import{c as b}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as rr}from"./chunk-CEEYZHMN-CG4Za1LL.js";import{R as u,u as w}from"./chunk-MDIOSTKB-RPNiac-A.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./index.esm-BA_4hYlD.js";import"./index-DZRnaetd.js";import"./checkbox-DsQ4hJO_.js";import"./prompt-DzgdWoNF.js";var er=e=>{const o={};return e.forEach(s=>{s.price_rules.length||(o[s.currency_code]=s.amount)}),o},sr=e=>{const o={};return e.forEach(s=>{if(s.price_rules.length){const n=s.price_rules[0].value;o[n]=s.amount}}),o},ir=G({region_prices:E(f(),f().or(_()).optional()),currency_prices:E(f(),f().or(_()).optional())});function or({shippingOption:e}){const{t:o}=V(),{handleSuccess:s}=w(),n=Z({defaultValues:{region_prices:sr(e.prices),currency_prices:er(e.prices)},resolver:q(ir)}),{mutateAsync:g,isPending:R}=Y(e.id),{store:d,isLoading:C,isError:L,error:O}=J(),p=S.useMemo(()=>{var t;return((t=d==null?void 0:d.supported_currencies)==null?void 0:t.map(h=>h.currency_code))||[]},[d]),{regions:c,isLoading:F,isError:N,error:T}=Q({fields:"id,name,currency_code",limit:999}),{price_preferences:I}=W({}),{setCloseOnEscape:M}=w(),z=k({name:e.name,currencies:p,regions:c,pricePreferences:I}),B=S.useMemo(()=>[[...p||[],...c||[]]],[p,c]),j=n.handleSubmit(async t=>{const h=Object.entries(t.currency_prices).map(([i,a])=>{if(a===""||a===void 0||!p.some(m=>m.toLowerCase()==i.toLowerCase()))return;const x=b(a),y={currency_code:i,amount:x},l=e.prices.find(m=>m.currency_code===i&&!m.price_rules.length);return l&&(y.id=l.id),y}).filter(i=>!!i),K=Object.entries(t.region_prices).map(([i,a])=>{if(a===""||a===void 0||!(c==null?void 0:c.some(l=>l.id===i)))return;const x=b(a);return{region_id:i,amount:x}}).filter(i=>!!i);await g({prices:[...h,...K]},{onSuccess:()=>{v.success(o("general.success")),s()},onError:i=>{v.error(i.message)}})}),D=C||F||!p||!c;if(L)throw O;if(N)throw T;return r.jsx(u.Form,{form:n,children:r.jsxs(rr,{className:"flex h-full flex-col overflow-hidden",onSubmit:j,children:[r.jsx(u.Header,{}),r.jsx(u.Body,{children:r.jsx("div",{className:"flex size-full flex-col divide-y overflow-hidden",children:r.jsx(A,{isLoading:D,data:B,columns:z,state:n,onEditingChange:t=>M(!t)})})}),r.jsx(u.Footer,{children:r.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[r.jsx(u.Close,{asChild:!0,children:r.jsx(P,{variant:"secondary",size:"small",children:o("actions.cancel")})}),r.jsx(P,{size:"small",className:"whitespace-nowrap",isLoading:R,onClick:j,type:"button",children:o("actions.save")})]})})]})})}function xr(){const{so_id:e,location_id:o}=H();if(!e)throw U({message:"Shipping Option ID paramater is missing",status:404});const{shipping_option:s,isError:n,error:g}=X(e,{fields:"*prices,*prices.price_rules"});if(n)throw g;return r.jsx(u,{prev:`/settings/locations/${o}`,children:s&&r.jsx(or,{shippingOption:s})})}export{xr as Component};
