(this.webpackJsonprecipefinder=this.webpackJsonprecipefinder||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(18),i=n.n(s),o=(n(24),n(3)),u=n(4),l=n.n(u),b=n(5),j=(n(26),n(6)),p="updateState",d="clearAllState",f=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)({Dairy:!1,Egg:!1,"Tree Nut":!1,Peanut:!1,Shellfish:!1}),i=Object(o.a)(s,2),u=i[0],l=i[1],b=Object(a.useContext)(F),d=function(e){var t=u;t[e.target.name]=!t[e.target.name],l(Object(j.a)({},t))};return Object(a.useEffect)((function(){b({type:p,state:"intolerances",value:u}),b({type:p,state:"diet",value:n})}),[b,u,n]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("select",{className:"select-main",value:n||"",onChange:function(e){e.preventDefault(),r(e.target.value)},children:[Object(c.jsx)("option",{value:"",children:"No dietary preference"},"1"),Object(c.jsx)("option",{value:"Vegetarian",children:"Vegetarian"},"2"),Object(c.jsx)("option",{value:"Vegan",children:"Vegan"},"3"),Object(c.jsx)("option",{value:"Gluten Free",children:"Gluten Free"},"4"),Object(c.jsx)("option",{value:"Ketogenic",children:"High Protein"},"5")]},"dropdown"),["Dairy","Egg","Tree Nut","Peanut","Shellfish"].map((function(e){return Object(c.jsxs)("span",{className:"checkbox-container",children:[Object(c.jsx)("input",{className:"checkbox-input",type:"checkbox",name:e,checked:u[e],onChange:d},e),Object(c.jsx)("label",{className:"checkbox-label",children:e},e+1)]},"span"+e)}))]})},O=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),u=i[0],l=i[1],b=Object(a.useContext)(P),j=Object(a.useContext)(F);return Object(c.jsxs)("form",{className:"form",onSubmit:n?function(e){e.preventDefault(),""!==n&&(j({type:p,state:"query",value:n}),r(""))}:function(){return""},children:[Object(c.jsxs)("div",{className:"has-float-label",children:[Object(c.jsx)("input",{className:"form_input form-control",type:"text",value:n||"",onChange:function(e){r(e.target.value)},required:!0}),Object(c.jsx)("label",{className:"form_input-placeholder",htmlFor:"search",children:"Search"})]}),Object(c.jsxs)("div",{className:"btn-container",children:[Object(c.jsx)("button",{type:"submit",className:"form_add-btn btn",style:{visibility:n?"visible":"hidden"},children:"Submit"}),Object(c.jsx)("button",{type:"submit",className:"form_clear-btn btn",style:{visibility:b.foodOptions?"hidden":"visible"},onClick:function(e){e.preventDefault(),r(null),j({type:d})},children:"Clear All"})]}),Object(c.jsx)("button",{className:"form_btn options-btn btn",onClick:function(e){e.preventDefault(),l(!u)},children:u?"Hide options":"Show options"}),u?Object(c.jsx)(f,{}):""]})},h=n(9),v=n.n(h);function x(e){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(l.a.mark((function e(t){var n,c,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:0,e.prev=1,console.log("page",n),c="".concat("http://localhost:8080/api/search","/").concat(t,"&offset=").concat(n),e.next=7,v.a.get(c);case 7:return a=e.sent,e.abrupt("return",{results:a.data.results,total:a.data.totalResults});case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:8080/api/recipe",n="".concat("http://localhost:8080/api/recipe","/").concat(t),e.next=5,v.a.get(n);case 5:return c=e.sent,e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var N=function(e){var t=e.recipe;return console.log(Object.keys(t)),Object(c.jsx)("div",{className:"item_recipe card__face card__face--back overlay",children:Object(c.jsx)("ol",{children:t.value&&t.value.length>1?t.value.map((function(e){return Object(c.jsx)("li",{children:e},e)})):""})})},k=function(e){var t=e.id,n=e.title,r=e.image,s=Object(a.useState)(),i=Object(o.a)(s,2),u=i[0],j=i[1],p=Object(a.useContext)(P),d=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,E(t,p.page,y,j);case 3:n.target.closest(".card").classList.toggle("is-flipped");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"item-container scene",children:Object(c.jsxs)("button",{onClick:d,className:"item btn card",children:[Object(c.jsx)("img",{className:"item_img card__face card__face--front",src:r,alt:n}),Object(c.jsx)("div",{className:"item_desc overlay card__face card__face--front",children:n}),void 0!==u?Object(c.jsx)(N,{recipe:u}):""]})})},C=function(){var e=Object(a.useContext)(P);if(e.foodOptions!==[])return Object(c.jsx)("div",{className:"gallery-container",children:e.foodOptions?e.foodOptions.map((function(e){return Object(c.jsx)(k,{id:e.id,title:e.title,image:e.image},e.id)})):function(){return""}})},q=function(){var e=Object(a.useContext)(P),t=Object(a.useContext)(F),n=Object.keys(e.intolerances).filter((function(t){return e.intolerances[t]})).join("&");return Object(a.useEffect)((function(){console.log("state string",n);var c,a=""!==e.query&&""!==e.diet&&n.length>1,r=""!==e.query&&""!==e.diet,s=""!==e.query&&""!==n,i=""!==e.query;switch(!0){case a:c="".concat(e.query,"&diet=").concat(e.diet,"&intolerances=").concat(n);break;case r:c="".concat(e.query,"&diet=").concat(e.diet);break;case s:c="".concat(e.query,"&intolerances=").concat(n);break;case i:c="".concat(e.query);break;default:c=null}t({type:p,state:"apiQ",value:c})}),[t,n,e.query,e.apiQ,e.diet,e.intolerances,e.page]),null},_=function(){var e=Object(a.useContext)(P),t=Object(a.useContext)(L),n=Object.keys(e.intolerances).filter((function(t){return e.intolerances[t]})).join(", ").replace(/, ([^,]*)$/," and $1");return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:[""===e.diet?"":e.diet,""===e.query?"":" ".concat(e.query,"s"),0===n.length?"":" with no "+n.toLocaleLowerCase()]}),Object(c.jsx)("h3",{children:""===e.query?"":"".concat(t," results")})]})},w=n(7),S=function(e,t){switch(t.type){case p:return function(e,t){var n=t;return Object(j.a)(Object(j.a)({},n),{},Object(w.a)({},e.state,e.value))}(t,e);case d:return{query:null,diet:null,intolerances:null,foodOptions:[]};default:return e}},D=function(){var e=Object(a.useContext)(P),t=Object(a.useContext)(F),n=Object(a.useContext)(L),r=Object(a.useState)(0),s=Object(o.a)(r,2),i=s[0],u=s[1];Object(a.useEffect)((function(){e.foodOptions&&u(e.foodOptions.length)}),[e.foodOptions]);var l=function(n){if(n.preventDefault(),n.target.classList.contains("next-btn")){var c=e.page+10;t({type:p,state:"page",value:c})}else if(n.target.classList.contains("prev-btn")){var a=e.page-10;t({type:p,state:"page",value:a})}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{style:{visibility:0===e.page?"hidden":"visible"},className:"nav-btn prev-btn btn",onClick:l,children:"Previous"}),Object(c.jsx)("button",{style:{visibility:e.page>=n||i===n?"hidden":"visible"},className:"nav-btn next-btn btn",onClick:l,children:"Next"})]})},E=function(){var e=Object(b.a)(l.a.mark((function e(t,n,c,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n);case 2:r=e.sent,a({type:p,state:"foodOptions",value:r});case 4:case"end":return e.stop()}}),e)})));return function(t,n,c,a){return e.apply(this,arguments)}}(),P=Object(a.createContext)(),F=Object(a.createContext)(),L=Object(a.createContext)(),Q={query:"",diet:"",intolerances:{Dairy:!1,Egg:!1,"Tree Nut":!1,Peanut:!1,Shellfish:!1},foodOptions:[],apiQ:"",page:0},V=function(){var e=Object(a.useReducer)(S,Q),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(0),i=Object(o.a)(s,2),u=i[0],j=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n.apiQ,n.page);case 2:return t=e.sent,j(t.total),e.abrupt("return",""!==n.query?r({type:p,state:"foodOptions",value:t.results}):"");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n.query,n.apiQ,n.page]),Object(c.jsx)(P.Provider,{value:n,children:Object(c.jsx)(F.Provider,{value:r,children:Object(c.jsxs)(L.Provider,{value:u,children:[Object(c.jsxs)("section",{className:"main-container",children:[Object(c.jsx)("h1",{children:"My Cookbook App"}),Object(c.jsx)("article",{className:"form-container",children:Object(c.jsx)(O,{})}),Object(c.jsxs)("article",{className:"content-container",children:[null!==n.query?Object(c.jsx)(_,{}):"",Object(c.jsx)(C,{}),n.query&&n.query.length>0?Object(c.jsx)(D,{}):""]})]}),Object(c.jsx)(q,{})]})})})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.09666811.chunk.js.map