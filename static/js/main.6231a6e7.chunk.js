(this["webpackJsonpreact-repeta"]=this["webpackJsonpreact-repeta"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={container:"Container_container__1w4x9"}},function(e,t,n){e.exports={alert:"Alert_alert__13pN0",error:"Alert_error__lvEY_ Alert_alert__13pN0",warning:"Alert_warning__5St64 Alert_alert__13pN0",success:"Alert_success__2dmtK Alert_alert__13pN0"}},function(e){e.exports=JSON.parse('[{"id":"id-1","text":"Learn react","completed":true},{"id":"id-2","text":"Learn react router","completed":false},{"id":"id-3","text":"Learn redux"}]')},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),a=n.n(o),i=(n(15),n(2)),s=n(3),l=n(5),u=n(4),j=(n(16),n(8)),d=n.n(j),b=n(0);var h=function(e){var t=e.children;return Object(b.jsx)("div",{className:d.a.container,children:t})},p=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={activeOptionIdx:2},e.setActiveIdx=function(t){e.setState({activeOptionIdx:t})},e.makeOptionClassName=function(t){var n=["ColorPicker__option"];return t===e.state.activeOptionIdx&&n.push("ColorPicker__option--active"),n.join(" ")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeOptionIdx,n=this.props.options,r=n[t].label;return Object(b.jsxs)("div",{className:"ColorPicker",children:[Object(b.jsx)("h2",{className:"ColorPicker__title",children:"Color Picker"}),Object(b.jsxs)("p",{children:["Chosen color: ",r]}),Object(b.jsx)("div",{children:n.map((function(t,n){var r=t.label,c=t.color;return Object(b.jsx)("button",{className:e.makeOptionClassName(n),style:{backgroundColor:c},onClick:function(){return e.setActiveIdx(n)}},r)}))})]})}}]),n}(r.Component)),O=p,x=n(9),v=n.n(x);function f(e){var t=e.text,n=e.type;return Object(b.jsx)("p",{role:"alert",className:v.a[n],children:t})}n(19);var m=function(e){var t=e.type,n=void 0===t?"small":t,r=e.classNames,c=void 0===r?"":r;return Object(b.jsx)("div",{className:"box box-".concat(n," ").concat(c),children:"Box"})},_=(n(20),function(e){var t=e.onIncrement,n=e.onDecrement;return Object(b.jsxs)("div",{className:"Counter__controls",children:[Object(b.jsx)("button",{type:"button",onClick:t,children:"Increment"}),Object(b.jsx)("button",{type:"button",onClick:n,children:"Decrement"})]})}),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:e.props.initialValue},e.handleIncrement=function(){e.setState((function(e){return{value:e.value+1}}))},e.handleDecrement=function(){e.setState((function(e){return{value:e.value-1}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Counter",children:[Object(b.jsx)("span",{className:"Counter__value",children:this.state.value}),Object(b.jsx)(_,{onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})]})}}]),n}(c.a.Component);y.defaultProps={initialValue:10};var C=y,N=(n(21),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={visible:!1},e.toggle=function(){e.setState((function(e){return{visible:!e.visible}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Dropdown",children:[Object(b.jsx)("button",{type:"button",className:"Dropdown__toggle",onClick:this.toggle,children:this.state.visible?"Hide":"Show"}),this.state.visible&&Object(b.jsx)("div",{className:"Dropdown__menu",children:"Dropdown menu"})]})}}]),n}(r.Component)),k=N,A=(n(22),function(e){var t=e.todos,n=e.onDeleteTodo;return Object(b.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,r=e.text;return Object(b.jsxs)("li",{className:"TodoList__item",children:[Object(b.jsx)("p",{className:"TodoList__text",children:r}),Object(b.jsx)("button",{onClick:function(){return n(t)},children:"Delete"})]},t)}))})}),g=n(10),D=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}],w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={todos:g},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.todos,t=e.length,n=e.reduce((function(e,t){return t.completed?e+1:e}),0);return Object(b.jsxs)(h,{children:[Object(b.jsx)("h2",{children:"ColorPicker"}),Object(b.jsx)(O,{options:D}),Object(b.jsx)("h2",{children:"Alerts"}),Object(b.jsx)(f,{text:"LOST DATA",type:"success"}),Object(b.jsx)(f,{text:"LOST DATA",type:"warning"}),Object(b.jsx)(f,{text:"LOST DATA",type:"error"}),Object(b.jsx)("h2",{children:"Custom Boxes"}),Object(b.jsx)(m,{type:"small"}),Object(b.jsx)(m,{type:"medium"}),Object(b.jsx)(m,{type:"large"}),Object(b.jsx)("h2",{children:"Counter"}),Object(b.jsx)(C,{}),Object(b.jsx)("h2",{children:"Dropdown"}),Object(b.jsx)(k,{}),Object(b.jsx)("h2",{children:"ToDoList"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:["Total: ",t]}),Object(b.jsxs)("span",{children:["Done: ",n]})]}),Object(b.jsx)(A,{todos:e,onDeleteTodo:this.deleteTodo})]})}}]),n}(r.Component),T=w;a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.6231a6e7.chunk.js.map