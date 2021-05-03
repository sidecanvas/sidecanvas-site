(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{40:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(13),a=n.n(o),i=(n(40),n(16)),s=n(3),l=n.n(s),d=n(6),u=n(11),j=n(5),b=n(14),p=n(1),f=function(e){var t=e.onSave,n=e.info,c=void 0===n?{title:"",description:""}:n;return Object(p.jsxs)("header",{className:"palette-collection-header",children:[Object(p.jsx)("div",{style:{marginBottom:"1rem"},children:Object(p.jsx)("div",{className:"icon clickable-icon",children:Object(p.jsx)(b.b,{to:"/palette-collection",children:Object(p.jsxs)("div",{className:"link-button",children:[Object(p.jsx)(j.a,{})," ",Object(p.jsx)("div",{style:{margin:"auto",padding:"0rem 0.5rem",whiteSpace:"nowrap",fontWeight:"bold"},children:"Color Palettes"})]})})})}),Object(p.jsx)("h2",{children:Object(p.jsx)("input",{name:"title-info",defaultValue:c.title,placeholder:"Color palette name",onBlur:t})}),Object(p.jsx)("h3",{children:Object(p.jsx)("input",{name:"description-info",defaultValue:c.description,placeholder:"Color palette description",onBlur:t})})]})},x=n(10),h=function(e){var t=e.color;return Object(p.jsx)("div",{className:"color-box",style:{backgroundColor:t}})},O=n(28),v=n.n(O);n(64);function m(e){var t=e.width,n=e.color,c=e.text,r=void 0===c?null:c,o=e.icon,a=void 0===o?null:o,i=e.onClick;return Object(p.jsxs)("button",{className:"btn",onClick:i,style:{backgroundColor:n,width:t},children:[null!==a&&a,Object(p.jsx)("br",{}),null!==r&&r]})}m.defaultProps={color:"gray"};var g=m,N=n(31);var C=function(e){var t=e.color,n=void 0===t?{id:"add",hex:"#999999"}:t,r=e.onSave,o=void 0===r?null:r,a=e.onUpdate,i=void 0===a?null:a,s=e.setActiveColorSelector,l=void 0===s?null:s,d=Object(N.a)(),b=d.width,f=d.ref;Object(c.useEffect)((function(){document.querySelector(".rcp").style.display="block"}));var x=Object(O.useColor)("hex",n.hex),m=Object(u.a)(x,2),C=m[0],w=m[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{color:C.hex}),Object(p.jsx)("h4",{children:"Color Selector"}),Object(p.jsx)("div",{className:"color-picker",ref:f,children:Object(p.jsx)(v.a,{width:isNaN(b)?0:b,height:125,color:C,onChange:w})}),null!==o&&Object(p.jsx)("div",{className:"wide-btn",children:Object(p.jsx)(g,{width:"100%",color:"#1a8917",icon:Object(p.jsx)(j.f,{className:"button-icon-btn btn-icon"}),onClick:function(){o(C)}})}),null!==i&&null!==l&&Object(p.jsxs)("div",{className:"wide-btn",children:[Object(p.jsx)(g,{width:"50%",color:"#1a8917",icon:Object(p.jsx)(j.f,{className:"button-icon-btn btn-icon"}),text:"SAVE COLOR",onClick:function(){i(n.id,C)}}),Object(p.jsx)(g,{width:"50%",color:"#888888",icon:Object(p.jsx)(j.g,{className:"button-icon-btn btn-icon"}),text:"CANCEL",onClick:function(){l(null)}})]})]})},w=n(15);var S=function(e){var t=e.colors,n=e.activeColorSelector,c=e.setActiveColorSelector,r=e.onDelete,o=e.onUpdate,a=e.onClone,i=e.handleOnDragEnd;return Object(p.jsx)(w.a,{onDragEnd:i,children:Object(p.jsx)(w.c,{droppableId:"color-list",children:function(e){return Object(p.jsxs)("div",Object(x.a)(Object(x.a)({className:"color-list"},e.droppableProps),{},{ref:e.innerRef,children:[t.map((function(e,t){return Object(p.jsx)(w.b,{draggableId:e.id,index:t,children:function(t){return Object(p.jsx)("div",Object(x.a)(Object(x.a)({className:"draggable",ref:t.innerRef},t.draggableProps),{},{children:Object(p.jsxs)("div",{className:"box-wrapper card",children:[Object(p.jsxs)("div",{className:"color-header",children:[Object(p.jsx)("div",{className:"color-box-icons left-icons",children:Object(p.jsx)("div",Object(x.a)(Object(x.a)({className:"small-icon-btn icon"},t.dragHandleProps),{},{children:Object(p.jsx)(j.c,{})}))}),Object(p.jsxs)("div",{className:"color-box-icons right-icons",children:[Object(p.jsx)(j.d,{className:"small-icon-btn icon clickable-icon",onClick:function(){c(n===e.id?null:e.id)}}),Object(p.jsx)(j.b,{className:"small-icon-btn icon clickable-icon",onClick:function(){a(e.id)}}),Object(p.jsx)(j.h,{className:"small-icon-btn icon clickable-icon delete-icon",onClick:function(){r(e.id)}})]})]}),Object(p.jsx)("div",{className:"color-box-wrapper",children:n===e.id?Object(p.jsx)(C,{color:e,onUpdate:o,setActiveColorSelector:c}):Object(p.jsx)(h,{color:e.hex})})]})}))}},e.id)})),e.placeholder]}))}})})},k=function(e){var t=e.activeColorSelector,n=e.setActiveColorSelector,c=e.saveColor;return Object(p.jsx)("div",{className:"add-box",children:Object(p.jsxs)("div",{className:"color-box-wrapper card",children:[Object(p.jsxs)("div",{className:"color-header",children:[Object(p.jsx)("div",{className:"color-box-icons left-icons"}),Object(p.jsx)("div",{className:"color-box-icons right-icons",children:"add"===t?Object(p.jsx)(j.g,{className:"small-icon-btn icon clickable-icon",onClick:function(){n(null)}}):Object(p.jsx)(j.e,{className:"small-icon-btn icon clickable-icon",onClick:function(){n("add")}})})]}),"add"===t&&Object(p.jsx)("div",{className:"color-box-wrapper",children:Object(p.jsx)(C,{onSave:c,setActiveColorSelector:n})})]})})},y=n(67),I=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var c,r,o,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.id,r=t.title,o=t.description,(a={}).id=c,a.title=r,a.description=o,e.next=7,JSON.parse(localStorage.getItem(c)).sort_order;case 7:a.sort_order=e.sent,a.colors=n.map((function(e){return e.hex})),localStorage.setItem(c,JSON.stringify(a));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P="http://localhost:5000/palettes",A=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(P,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e,t){var n=e.id,c=e.title,r=e.description,o={};o.id=n,o.title=c,o.description=r,o.colors=t.map((function(e){return e.hex})),fetch("".concat(P,"/").concat(n),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(o)})},J=function(e){var t=e.databaseEnabled,n=e.paletteId,r=I,o=E;t&&(r=A,o=D);var a=Object(c.useState)({id:"",title:"",description:""}),s=Object(u.a)(a,2),j=s[0],b=s[1],x=Object(c.useState)(null),h=Object(u.a)(x,2),O=h[0],v=h[1],m=Object(c.useState)([]),g=Object(u.a)(m,2),N=g[0],C=g[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,o,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:t=e.sent,c=t.id,o=t.title,a=t.description,i=t.colors,b({id:c,title:o,description:a}),C(i.map((function(e){return{id:Object(y.a)(),hex:e}})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=N.filter((function(e){return e.id!==t})),C(n),v(null),o(j,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={id:Object(y.a)(),hex:t.hex,order:0},c=[n].concat(Object(i.a)(N)),C(c),v(null),o(j,c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{info:j,onSave:function(e){var t=e.target.name,n=e.target.value,c={};c="title-info"===t?{id:j.id,title:n,description:j.description}:"description-info"===t?{id:j.id,title:j.title,description:n}:j,b(c),o(c,N)}}),Object(p.jsx)(k,{activeColorSelector:O,setActiveColorSelector:v,saveColor:P}),N.length>0?Object(p.jsx)(S,{colors:N,activeColorSelector:O,setActiveColorSelector:v,onDelete:w,onUpdate:function(e,t){var n=N.map((function(n){return n.id!==e?n:{id:n.id,hex:t.hex,order:n.order}}));C(n),v(null),o(j,n)},onClone:function(e){var t=N.findIndex((function(t){return t.id===e})),n={id:Object(y.a)(),hex:N[t].hex},c=[].concat(Object(i.a)(N.slice(0,t)),[n],Object(i.a)(N.slice(t)));C(c),o(j,c)},handleOnDragEnd:function(e){if(e.destination){var t=Array.from(N),n=t.splice(e.source.index,1),c=Object(u.a)(n,1)[0];t.splice(e.destination.index,0,c),C(t),o(j,t)}}}):Object(p.jsx)("div",{className:"no-colors color-box-wrapper",children:Object(p.jsx)("h3",{children:Object(p.jsx)("center",{children:"No colors to show"})})})]})},_=function(){return Object(p.jsx)("header",{className:"palette-collection-header",children:Object(p.jsx)("h2",{children:"Palette Collection"})})};var T=function(e){var t=e.palettes,n=e.onDelete,c=e.onClone,r=e.handleOnDragEnd;return Object(p.jsx)(w.a,{onDragEnd:r,children:Object(p.jsx)(w.c,{droppableId:"list",children:function(e){return Object(p.jsxs)("div",Object(x.a)(Object(x.a)({className:"list"},e.droppableProps),{},{ref:e.innerRef,children:[t.map((function(e,t){return Object(p.jsx)(w.b,{draggableId:e.id,index:t,children:function(t){return Object(p.jsx)("div",Object(x.a)(Object(x.a)({className:"draggable",ref:t.innerRef},t.draggableProps),{},{children:Object(p.jsxs)("div",{className:"box-wrapper card",children:[Object(p.jsxs)("div",{className:"color-header",children:[Object(p.jsx)("div",{className:"color-box-icons left-icons",children:Object(p.jsx)("div",Object(x.a)(Object(x.a)({className:"small-icon-btn icon"},t.dragHandleProps),{},{children:Object(p.jsx)(j.c,{})}))}),Object(p.jsxs)("div",{className:"color-box-icons right-icons",children:[Object(p.jsx)(j.b,{className:"small-icon-btn icon clickable-icon",onClick:function(){c(e.id)}}),Object(p.jsx)(j.h,{className:"small-icon-btn icon clickable-icon delete-icon",onClick:function(){n(e.id)}})]})]}),Object(p.jsx)(b.b,{to:"/palette-collection/palettes/".concat(e.id),children:Object(p.jsxs)("div",{className:"color-box-wrapper",children:[Object(p.jsx)("h3",{children:e.title?e.title:"Untitled"}),Object(p.jsx)("div",{style:{marginTop:"0.5rem"},children:e.colors&&e.colors.map((function(e,t){return Object(p.jsx)(h,{color:e},t)}))})]})})]})}))}},e.id)})),e.placeholder]}))}})})};var U=function(e){var t=e.items,n=e.updatedIndex,c=n-1>-1?t[n-1].sort_order:[0,1],r=n+1<t.length?t[n+1].sort_order:[1,0];return t[n].sort_order=function(e){var t=Object(u.a)(e,2),n=t[0],c=t[1],r=function e(t,n){return n?e(n,t%n):t};return[n/(r=r(n,c)),c/r]}([c[0]+r[0],c[1]+r[1]]),t},B=function(e){var t=e.newPaletteId,n=e.onCreate;return Object(p.jsx)("div",{className:"add-box",children:Object(p.jsx)("div",{className:"color-box-wrapper card",children:Object(p.jsxs)("div",{className:"color-header",children:[Object(p.jsx)("div",{className:"color-box-icons left-icons"}),Object(p.jsx)("div",{className:"color-box-icons right-icons",children:Object(p.jsx)(j.e,{className:"small-icon-btn icon clickable-icon",onClick:function(){return n(t)}})})]})})})},L=n(4),R=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],Object.keys(localStorage).forEach((function(e){var n=JSON.parse(localStorage.getItem(e));t.push(n)})),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){localStorage.setItem(e.id,JSON.stringify(e))},H=function(e){localStorage.removeItem(e.id)},V=function(e){localStorage.setItem(e.id,JSON.stringify(e))},q="http://localhost:5000/palettes",M=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(q));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){fetch("".concat(q),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})},z=function(e){fetch(q,{method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})},G=function(e){fetch(q,{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})},K=Object(L.g)((function(e){var t=e.history,n=e.databaseEnabled,r=R,o=F,a=H,s=V;n&&(r=M,o=W,a=z,s=G);var j=Object(c.useState)([]),b=Object(u.a)(j,2),f=b[0],x=b[1],h=Object(y.a)();Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:(t=e.sent).sort((function(e,t){return e.sort_order[0]/e.sort_order[1]-t.sort_order[0]/t.sort_order[1]})),x(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(d.a)(l.a.mark((function e(){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(y.a)(),"","",r=U({items:[c={id:n,title:"",description:"",colors:[],sort_order:[]}].concat(Object(i.a)(f)),updatedIndex:0}),x(r),e.next=10,o(c);case 10:return e.abrupt("return",t.push("/palette-collection/palettes/".concat(n)));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.find((function(e){return e.id===t})),c=f.filter((function(e){return e.id!==t})),x(c),e.next=5,a(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)(_,{}),Object(p.jsx)(B,{newPaletteId:h,onCreate:O}),f.length>0?Object(p.jsx)(T,{palettes:f,handleOnDragEnd:function(e){if(e.destination){var t=Array.from(f),n=t.splice(e.source.index,1),c=Object(u.a)(n,1)[0];t.splice(e.destination.index,0,c);var r=U({items:t,updatedIndex:e.destination.index});x(r),console.log(r[e.destination.index]),s(r[e.destination.index])}},onClone:function(e){var t=f.findIndex((function(t){return t.id===e})),n=Object(y.a)(),c="Copy of ".concat(f[t].title),r=f[t].description,a=f[t].colors,s={id:n,title:c,description:r,colors:a,sort_order:[]},l=[].concat(Object(i.a)(f.slice(0,t)),[s],Object(i.a)(f.slice(t)));l=U({items:l,updatedIndex:l.findIndex((function(e){return e.id===n}))}),x(l),o(s)},onDelete:v}):Object(p.jsx)("div",{className:"no-colors color-box-wrapper",children:Object(p.jsx)("h3",{children:Object(p.jsx)("center",{children:"No color schemes to show"})})})]})}));var Q=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(L.c,{children:[Object(p.jsx)(L.a,{path:"/palette-collection",exact:!0,children:Object(p.jsx)(K,{databaseEnabled:false})}),Object(p.jsx)(L.a,{path:"/palette-collection/palettes/:id",children:Object(p.jsx)(X,{databaseEnabled:false})})]})})};function X(e){var t=e.databaseEnabled,n=Object(L.f)().id;return Object(p.jsx)(J,{paletteId:n,databaseEnabled:t})}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(Q,{})})}),document.getElementById("palette-collection")),Y()}},[[66,1,2]]]);
//# sourceMappingURL=main.6bf1a68c.chunk.js.map