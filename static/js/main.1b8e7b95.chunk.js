(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),i=(n(14),n(8)),s=n(5),o=n(1),u=n(4),m=function(e){var t=e.items,n=e.removeItem,a=e.editItem;return r.a.createElement("div",{className:"grocery-list"},t.map((function(e){var t=e.id,c=e.title;return r.a.createElement("article",{key:t,className:"grocery-item"},r.a.createElement("p",{className:"title"},c),r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{type:"button",className:"edit-btn",onClick:function(){return a(t)}},r.a.createElement(u.a,null)),r.a.createElement("button",{type:"button",className:"delete-btn",onClick:function(){return n(t)}},r.a.createElement(u.b,null))))})))},f=function(e){var t=e.type,n=e.msg,c=e.removeAlert,l=e.list;return Object(a.useEffect)((function(){var e=setTimeout((function(){c()}),3e3);return function(){return clearTimeout(e)}}),[l]),r.a.createElement("p",{className:"alert alert-".concat(t)},n)};var b=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(function(){var e=localStorage.getItem("list");return e?JSON.parse(e):[]}()),u=Object(o.a)(l,2),b=u[0],d=u[1],g=Object(a.useState)(!1),v=Object(o.a)(g,2),E=v[0],p=v[1],y=Object(a.useState)(null),O=Object(o.a)(y,2),j=O[0],N=O[1],h=Object(a.useState)({show:!1,msg:"",type:""}),S=Object(o.a)(h,2),I=S[0],k=S[1],w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";k({show:e,type:t,msg:n})};return Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(b))}),[b]),r.a.createElement("section",{className:"section-center"},r.a.createElement("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),n.trim())if(n&&E)d(b.map((function(e){return j===e.id?Object(s.a)(Object(s.a)({},e),{},{title:n}):e}))),c(""),p(!1),N(null),w(!0,"success","value change");else{w(!0,"success","Item added successfully");var t={id:(new Date).getTime().toString(),title:n};d([].concat(Object(i.a)(b),[t])),c("")}else w(!0,"danger","Please enter a value")}},I.show&&r.a.createElement(f,Object.assign({},I,{list:b,removeAlert:w})),r.a.createElement("h3",null,"Grocery bud"),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"text",className:"grocery",placeholder:"e.g eggs",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"submit-btn"},E?"edit":"submit"))),b.length>0&&r.a.createElement("div",{className:"grocery-container"},r.a.createElement(m,{items:b,removeItem:function(e){w(!0,"danger","Item removed");var t=b.filter((function(t){return t.id!==e}));d(t)},editItem:function(e){var t=b.find((function(t){return t.id===e}));p(!0),N(e),c(t.title)}}),r.a.createElement("button",{className:"clear-btn",onClick:function(){w(!0,"danger","Empty list"),d([])}},"clear items")))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1b8e7b95.chunk.js.map