"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[31],{6031:function(e,n,r){r.r(n),r.d(n,{default:function(){return E}});var t,i,o,a,s,l=r(2791),u=r(9434),c=r(4270),d=function(e){return e.contacts.loading},m=function(e){return e.filter},x=function(e){return e.contacts.items},f=r(3634),h=r(8007),p=r(5218),b=r(5705),j=r(168),g=r(7691),v=g.ZP.label(t||(t=(0,j.Z)(["\n  display: block;\n  margin: 1em;\n  font-size: 1.5em;\n  font-weight: bolder;\n"]))),w=(0,g.ZP)(b.l0)(i||(i=(0,j.Z)(["\n  padding: 0 5em 0 5em;\n  text-align: left;\n"]))),k=g.ZP.div(o||(o=(0,j.Z)(["\n  width: 30%;\n  color: white;\n  font-size: 1.2rem;\n  padding: 0.6rem;\n  background-color: red;\n  text-align: center;\n  border-radius: 0.3em;\n  margin-top: 0.5em;\n"]))),C=(0,g.ZP)(b.gN)(a||(a=(0,j.Z)(["\n  box-shadow: inset #abacaf 0 0 0 1px;\n  border: 0;\n  background: rgba(0, 0, 0, 0);\n  width: 30%;\n  appearance: none;\n  position: relative;\n  border-radius: 3px;\n  padding: 9px 12px;\n  line-height: 1.4;\n  color: rgb(0, 0, 0);\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  transition: all 0.2s ease;\n  :hover {\n    box-shadow: 0 0 0 0 #fff inset, silver 0 0 0 1px;\n  }\n  :focus {\n    background: #fff;\n    outline: 0;\n    box-shadow: 0 0 0 0 #fff inset, lime 0 0 0 2px;\n  }\n"]))),Z=r(4224),y=r(184),z=h.Ry().shape({number:h.Z_().trim().matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/,"+380xxxxxxxxx").required("required"),name:h.Z_().min(3,"at least 3 symbols").max(40,"at most 40 symbols").required("required")}),I={number:"",name:""},q=function(e,n){return n.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))},B=function(){var e=(0,u.I0)(),n=(0,u.v9)(x);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(b.J9,{initialValues:I,validationSchema:z,onSubmit:function(r,t){var i=t.resetForm,o=r.name,a=r.number;q(o,n)?p.Am.error("contact already exist"):(e((0,f.uK)({name:o,number:a})),i())},children:(0,y.jsxs)(w,{children:[(0,y.jsx)(v,{children:"Name"}),(0,y.jsx)(C,{type:"text",name:"name"}),(0,y.jsx)(b.Bc,{component:k,name:"name"}),(0,y.jsx)(v,{children:"Number"}),(0,y.jsx)(C,{type:"tel",name:"number"}),(0,y.jsx)(b.Bc,{component:k,name:"number"}),(0,y.jsx)(v,{htmlFor:"",children:(0,y.jsx)(Z.z,{type:"submit",colorScheme:"purple",size:"lg",children:"Add contact"})})]})})})},F=r(5232),S=r(7697),_=function(e){var n=e.name,r=e.number,t=e.id,i=(0,u.I0)(),o=(0,u.v9)(x),a=(0,l.useRef)(null),s=(0,l.useRef)(null);return(0,y.jsxs)("li",{children:[(0,y.jsxs)(F.K,{direction:"row",spacing:4,align:"center",children:[(0,y.jsx)(S.I,{ref:a,defaultValue:n,focusBorderColor:"lime"}),(0,y.jsx)(S.I,{ref:s,defaultValue:r,focusBorderColor:"lime"}),(0,y.jsx)(Z.z,{colorScheme:"purple",variant:"solid",onClick:function(){i((0,f.GK)(t))},children:"Delete"}),(0,y.jsx)(Z.z,{colorScheme:"purple",variant:"solid",onClick:function(){q(a.current.value,o)?p.Am.error("Contact alredy exists"):i((0,f.Tk)({name:a.current.value,number:s.current.value,id:t}))},children:"Save"})]}),(0,y.jsx)("br",{})]})},P=g.ZP.div(s||(s=(0,j.Z)(["\n  padding: 1em 0;\n"]))),R=function(){var e=function(e,n){return e.length?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.number.includes(n)})):[]}((0,u.v9)(x),(0,u.v9)(m));return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(P,{children:(0,y.jsx)("ul",{children:e.map((function(e){return(0,y.jsx)(_,{id:e.id,name:e.name,number:e.number},e.id)}))})})})},L=r(5623),A=r(311),K=r(7806),N=r(2831);function V(){var e=(0,u.I0)(),n=(0,l.useRef)();return(0,y.jsx)("div",{children:(0,y.jsxs)(A.B,{children:[(0,y.jsx)(K.Z,{pointerEvents:"none",children:(0,y.jsx)(N.W,{color:"gray.300"})}),(0,y.jsx)(S.I,{ref:n,focusBorderColor:"lime",type:"text",placeholder:"Contact name or number",onChange:function(){return e((0,L.b)(n.current.value))}})]})})}function E(){var e=(0,u.I0)(),n=(0,u.v9)(d);return(0,l.useEffect)((function(){e((0,f.yF)())}),[e]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c.q,{children:(0,y.jsx)("title",{children:"Your tasks"})}),(0,y.jsx)(B,{}),(0,y.jsx)("div",{children:n&&"Request in progress..."}),(0,y.jsx)(V,{}),(0,y.jsx)(R,{})]})}}}]);
//# sourceMappingURL=31.4d1d56d1.chunk.js.map