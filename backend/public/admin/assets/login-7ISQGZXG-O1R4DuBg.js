import{A as S}from"./chunk-ZSTDLFYU-BeC4QuEu.js";import{a5 as L,a7 as h,b as T,c as A,u as C,a as F,ac as I,fg as B,w as H,j as e,H as P,T as W,x as r,y as j,J as k,B as z,L as D,ad as J}from"./index-HrqC_Gjd.js";import{T as K}from"./Trans-EQ5E-fso.js";import{A as R}from"./alert-QeTB5x2-.js";import"./chunk-EQTBJSBZ-OwKj9_dY.js";import"./proxy-DH5DQgt1.js";import"./x-mark-mini-Q_ZRZRmQ.js";var V=L({email:h().email(),password:h()}),X=()=>{var c,d,x,u,f,p,g;const{t}=T(),v=A(),b=C(),{getWidgets:n}=F(),w=((d=(c=v.state)==null?void 0:c.from)==null?void 0:d.pathname)||"/orders",s=I({resolver:J(V),defaultValues:{email:"",password:""}}),{mutateAsync:N,isPending:y}=B(),E=s.handleSubmit(async({email:a,password:o})=>{await N({email:a,password:o},{onError:i=>{if(H(i)&&i.status===401){s.setError("email",{type:"manual",message:i.message});return}s.setError("root.serverError",{type:"manual",message:i.message})},onSuccess:()=>{b(w,{replace:!0})}})}),l=(f=(u=(x=s.formState.errors)==null?void 0:x.root)==null?void 0:u.serverError)==null?void 0:f.message,m=((p=s.formState.errors.email)==null?void 0:p.message)||((g=s.formState.errors.password)==null?void 0:g.message);return e.jsx("div",{className:"bg-ui-bg-subtle flex min-h-dvh w-dvw items-center justify-center",children:e.jsxs("div",{className:"m-4 flex w-full max-w-[280px] flex-col items-center",children:[e.jsx(S,{}),e.jsxs("div",{className:"mb-4 flex flex-col items-center",children:[e.jsx(P,{children:t("login.title")}),e.jsx(W,{size:"small",className:"text-ui-fg-subtle text-center",children:t("login.hint")})]}),e.jsxs("div",{className:"flex w-full flex-col gap-y-3",children:[n("login.before").map((a,o)=>e.jsx(a,{},o)),e.jsx(r,{...s,children:e.jsxs("form",{onSubmit:E,className:"flex w-full flex-col gap-y-6",children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx(r.Field,{control:s.control,name:"email",render:({field:a})=>e.jsx(r.Item,{children:e.jsx(r.Control,{children:e.jsx(j,{autoComplete:"email",...a,className:"bg-ui-bg-field-component",placeholder:t("fields.email")})})})}),e.jsx(r.Field,{control:s.control,name:"password",render:({field:a})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{}),e.jsx(r.Control,{children:e.jsx(j,{type:"password",autoComplete:"current-password",...a,className:"bg-ui-bg-field-component",placeholder:t("fields.password")})})]})})]}),m&&e.jsx("div",{className:"text-center",children:e.jsx(k,{className:"inline-flex",variant:"error",children:m})}),l&&e.jsx(R,{className:"bg-ui-bg-base items-center p-2",dismissible:!0,variant:"error",children:l}),e.jsx(z,{className:"w-full",type:"submit",isLoading:y,children:t("actions.continueWithEmail")})]})}),n("login.after").map((a,o)=>e.jsx(a,{},o))]}),e.jsx("span",{className:"text-ui-fg-muted txt-small my-6",children:e.jsx(K,{i18nKey:"login.forgotPassword",components:[e.jsx(D,{to:"/reset-password",className:"text-ui-fg-interactive transition-fg hover:text-ui-fg-interactive-hover focus-visible:text-ui-fg-interactive-hover font-medium outline-none"},"reset-password-link")]})})]})})};export{X as Component};
