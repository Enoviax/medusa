import{r as n,j as i,m as l,_ as V}from"./index-HrqC_Gjd.js";import{A as K}from"./index-7shdQOaz.js";import{m as M}from"./proxy-DH5DQgt1.js";import{X as S}from"./x-mark-mini-Q_ZRZRmQ.js";var X=n.forwardRef(({value:d,onChange:a,onBlur:o,disabled:j,name:y,showRemove:c=!0,variant:f="base",allowDuplicates:k=!1,placeholder:I,className:R},N)=>{const r=n.useRef(null),u=n.useRef(typeof d<"u").current,[D,p]=n.useState([]);n.useImperativeHandle(N,()=>r.current);const[m,b]=n.useState(null),s=u?d:D,x=e=>{const t=e.trim();if(t){if(!k&&s.includes(t)){b(s.indexOf(t)),setTimeout(()=>{b(null)},300);return}a==null||a([...s,t]),u||p([...s,t])}},h=e=>{a==null||a(s.filter(t=>t!==e)),u||p(s.filter(t=>t!==e))},A=e=>{o==null||o(),e.target.value&&(x(e.target.value),e.target.value="")},C=e=>{var t,g,v,w;if(e.key==="Enter"||e.key===","){if(e.preventDefault(),!((t=r.current)!=null&&t.value))return;x(((g=r.current)==null?void 0:g.value)??""),r.current.value="",(v=r.current)==null||v.focus()}e.key==="Backspace"&&((w=r.current)==null?void 0:w.value)===""&&h(s[s.length-1])},E={x:[0,-2,2,-2,2,0],transition:{duration:.3}};return i.jsxs("div",{className:l("shadow-borders-base flex min-h-8 flex-wrap items-center gap-1 rounded-md px-2 py-1.5","transition-fg focus-within:shadow-borders-interactive-with-active","has-[input:disabled]:bg-ui-bg-disabled has-[input:disabled]:text-ui-fg-disabled has-[input:disabled]:cursor-not-allowed",{"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover":f==="contrast","bg-ui-bg-field hover:bg-ui-bg-field-hover":f==="base"},R),tabIndex:-1,onClick:()=>{var e;return(e=r.current)==null?void 0:e.focus()},children:[s.map((e,t)=>i.jsx(K,{children:i.jsx(V,{size:"2xsmall",className:l("gap-x-0.5 pl-1.5 pr-1.5",{"transition-fg pr-1":c,"shadow-borders-focus":t===m}),asChild:!0,children:i.jsxs(M.div,{animate:t===m?E:void 0,children:[e,c&&i.jsx("button",{tabIndex:-1,type:"button",onClick:()=>h(e),className:l("text-ui-fg-subtle transition-fg outline-none"),children:i.jsx(S,{})})]})})},`${e}-${t}`)),i.jsx("input",{className:l("caret-ui-fg-base text-ui-fg-base txt-compact-small flex-1 appearance-none bg-transparent","disabled:text-ui-fg-disabled disabled:cursor-not-allowed","focus:outline-none","placeholder:text-ui-fg-muted"),onKeyDown:C,onBlur:A,disabled:j,name:y,ref:r,placeholder:s.length===0?I:void 0,autoComplete:"off"})]})});X.displayName="ChipInput";export{X as C};