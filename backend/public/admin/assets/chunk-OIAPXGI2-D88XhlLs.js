import{d0 as m,d1 as y}from"./index-HrqC_Gjd.js";var v=(s,e)=>!s||!e?!1:s.first_name===e.first_name&&s.last_name===e.last_name&&s.address_1===e.address_1&&s.address_2===e.address_2&&s.city===e.city&&s.postal_code===e.postal_code&&s.province===e.province&&s.country_code===e.country_code,g=({address:s})=>{if(!s)return[];const{first_name:e,last_name:r,company:n,address_1:a,address_2:i,city:u,postal_code:f,province:l,country:d,country_code:o}=s,c=[e,r].filter(Boolean).join(" "),t=[];c&&t.push(c),n&&t.push(n),a&&t.push(a),i&&t.push(i);const p=[u,l,f].filter(Boolean).join(" ");if(p&&t.push(p),d)t.push(d.display_name);else if(o){const _=m(o);_?t.push(_.display_name):t.push(o.toUpperCase())}return t},A=s=>{if(!s)return"";const e=y.find(r=>r.iso_2===s);return e?e.display_name:s};export{g as a,A as g,v as i};
