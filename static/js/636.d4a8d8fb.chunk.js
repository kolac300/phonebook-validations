"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[636],{9636:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,a,o,u,c=t(2791),s=t(9434),l=t(4270),d=function(n){return n.contacts.loading},m=function(n){return n.filter},x=function(n){return n.contacts.items},h=t(168),f=t(6444),b=f.ZP.li(r||(r=(0,h.Z)(["\n  padding: 0.3em;\n  list-style: none;\n"]))),j=t(3634),p=t(6727),v=t(5218),g=t(5705),k=f.ZP.label(i||(i=(0,h.Z)(["\n  display: block;\n  margin: 1em;\n  font-size: 1.5em;\n  font-weight: bolder;\n\n  button {\n    border: none;\n    border-radius: 5px;\n    background-color: silver;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    display: inline-block;\n    font-size: 16px;\n    -webkit-transition-duration: 0.4s;\n    transition-duration: 0.4s;\n  }\n\n  button:hover {\n    background-color: #4caf50;\n    color: white;\n  }\n"]))),y=(0,f.ZP)(g.l0)(a||(a=(0,h.Z)(["\n  padding: 0 5em 0 5em;\n  text-align: center;\n"]))),w=f.ZP.div(o||(o=(0,h.Z)(["\n  background-color: red;\n  text-align: center;\n  border-radius: 0.6em;\n  margin-top: 0.5em;\n"]))),Z=t(184),C=p.Ry().shape({number:p.Z_().trim().matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/,"add correct format phone +380\u0445\u0445\u0445\u0445\u0445\u0445\u0445\u0445\u0445").required(),name:p.Z_().min(3).max(40).required()}),F={number:"",name:""},P=function(n,e){return e.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))},_=function(){var n=(0,s.I0)(),e=(0,s.v9)(x);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h1",{children:"Phone Book"}),(0,Z.jsx)(g.J9,{initialValues:F,validationSchema:C,onSubmit:function(t,r){var i=r.resetForm,a=t.name,o=t.number;P(a,e)?v.Am.error("contact already exist"):(n((0,j.uK)({name:a,number:o})),i())},children:(0,Z.jsxs)(y,{children:[(0,Z.jsx)(k,{children:"Name"}),(0,Z.jsx)(g.gN,{type:"text",name:"name"}),(0,Z.jsx)(g.Bc,{component:w,name:"name"}),(0,Z.jsx)(k,{children:"Number"}),(0,Z.jsx)(g.gN,{type:"tel",name:"number"}),(0,Z.jsx)(g.Bc,{component:w,name:"number"}),(0,Z.jsx)(k,{htmlFor:"",children:(0,Z.jsx)("button",{type:"submit",children:"Add contact"})})]})})]})},q=function(n){var e=n.name,t=n.number,r=n.id,i=(0,s.I0)(),a=(0,s.v9)(x),o=(0,c.useRef)(null),u=(0,c.useRef)(null);return(0,Z.jsxs)(b,{children:[(0,Z.jsx)("input",{ref:o,defaultValue:e,type:"text"}),":",(0,Z.jsx)("input",{ref:u,defaultValue:t,type:"text"}),(0,Z.jsx)("button",{onClick:function(){i((0,j.GK)(r))},children:"Delete"}),(0,Z.jsx)("button",{onClick:function(){P(o.current.value,a)?v.Am.error("Contact alredy exists"):i((0,j.Tk)({name:o.current.value,number:u.current.value,id:r}))},children:"Save changes"})]})},I=f.ZP.div(u||(u=(0,h.Z)(["\n  padding: 1em;\n"]))),L=function(){var n=function(n,e){return n.length?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):[]}((0,s.v9)(x),(0,s.v9)(m));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(I,{children:(0,Z.jsx)("ul",{children:n.map((function(n){return(0,Z.jsx)(q,{id:n.id,name:n.name,number:n.number},n.id)}))})})})},N=t(5623);function R(){var n=(0,s.I0)(),e=(0,s.v9)(m);return(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h1",{children:"Search"}),(0,Z.jsx)("input",{type:"text",value:e,onChange:function(e){return n((0,N.b)(e.target.value))}})]})}function S(){var n=(0,s.I0)(),e=(0,s.v9)(d);return(0,c.useEffect)((function(){n((0,j.yF)())}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l.q,{children:(0,Z.jsx)("title",{children:"Your tasks"})}),(0,Z.jsx)(_,{}),(0,Z.jsx)("div",{children:e&&"Request in progress..."}),(0,Z.jsx)(R,{}),(0,Z.jsx)(L,{})]})}}}]);
//# sourceMappingURL=636.d4a8d8fb.chunk.js.map