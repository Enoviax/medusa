import{S as t}from"./chunk-ULQT3HE4-S8VpexHp.js";import{b as n,j as e,C as c,H as d,A as u}from"./index-HrqC_Gjd.js";import{P as x}from"./pencil-square-m42K-ws3.js";var p=({inventoryItem:s})=>{var i,o,r;const{t:a}=n();return e.jsxs(c,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs(d,{children:[s.title??s.sku," ",a("fields.details")]}),e.jsx(u,{groups:[{actions:[{icon:e.jsx(x,{}),label:a("actions.edit"),to:"edit"}]}]})]}),e.jsx(t,{title:a("fields.sku"),value:s.sku??"-"}),e.jsx(t,{title:a("fields.inStock"),value:l(s.stocked_quantity,(i=s.location_levels)==null?void 0:i.length)}),e.jsx(t,{title:a("inventory.reserved"),value:l(s.reserved_quantity,(o=s.location_levels)==null?void 0:o.length)}),e.jsx(t,{title:a("inventory.available"),value:l(s.stocked_quantity-s.reserved_quantity,(r=s.location_levels)==null?void 0:r.length)})]})},l=(s,a)=>s!==void 0&&!isNaN(s)?`${s} across ${a??"-"} locations`:"-";export{p as I};