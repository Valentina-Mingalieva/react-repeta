(this["webpackJsonpreact-repeta"]=this["webpackJsonpreact-repeta"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={container:"Container_container__1w4x9"}},function(e,t,n){e.exports={alert:"Alert_alert__13pN0",error:"Alert_error__lvEY_ Alert_alert__13pN0",warning:"Alert_warning__5St64 Alert_alert__13pN0",success:"Alert_success__2dmtK Alert_alert__13pN0"}},,function(e){e.exports=JSON.parse('[{"id":"id-1","text":"Learn react","completed":true},{"id":"id-2","text":"Learn react router","completed":false},{"id":"id-3","text":"Learn redux","completed":false}]')},,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(9),a=n.n(c),s=(n(20),n(15)),i=n(8),l=n(2),u=n(3),d=n(5),j=n(4),b=(n(21),n(10)),h=n.n(b),p=n(11),O=n.n(p),m=n(0);var x=function(e){var t=e.children;return Object(m.jsx)("div",{className:O.a.container,children:t})},v=(n(31),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeOptionIdx:2},e.setActiveIdx=function(t){e.setState({activeOptionIdx:t})},e.makeOptionClassName=function(t){var n=["ColorPicker__option"];return t===e.state.activeOptionIdx&&n.push("ColorPicker__option--active"),n.join(" ")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeOptionIdx,n=this.props.options,o=n[t].label;return Object(m.jsxs)("div",{className:"ColorPicker",children:[Object(m.jsx)("h2",{className:"ColorPicker__title",children:"Color Picker"}),Object(m.jsxs)("p",{children:["Chosen color: ",o]}),Object(m.jsx)("div",{children:n.map((function(t,n){var o=t.label,r=t.color;return Object(m.jsx)("button",{className:e.makeOptionClassName(n),style:{backgroundColor:r},onClick:function(){return e.setActiveIdx(n)}},o)}))})]})}}]),n}(o.Component)),f=v,_=n(12),g=n.n(_);function C(e){var t=e.text,n=e.type;return Object(m.jsx)("p",{role:"alert",className:g.a[n],children:t})}n(32);var y=function(e){var t=e.type,n=void 0===t?"small":t,o=e.classNames,r=void 0===o?"":o;return Object(m.jsx)("div",{className:"box box-".concat(n," ").concat(r),children:"Box"})},T=(n(33),function(e){var t=e.onIncrement,n=e.onDecrement;return Object(m.jsxs)("div",{className:"Counter__controls",children:[Object(m.jsx)("button",{type:"button",onClick:t,children:"Increment"}),Object(m.jsx)("button",{type:"button",onClick:n,children:"Decrement"})]})}),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.initialValue},e.handleIncrement=function(){e.setState((function(e){return{value:e.value+1}}))},e.handleDecrement=function(){e.setState((function(e){return{value:e.value-1}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Counter",children:[Object(m.jsx)("span",{className:"Counter__value",children:this.state.value}),Object(m.jsx)(T,{onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})]})}}]),n}(r.a.Component);N.defaultProps={initialValue:10};var k=N,S=(n(34),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.toggle=function(){e.setState((function(e){return{visible:!e.visible}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Dropdown",children:[Object(m.jsx)("button",{type:"button",className:"Dropdown__toggle",onClick:this.toggle,children:this.state.visible?"Hide":"Show"}),this.state.visible&&Object(m.jsx)("div",{className:"Dropdown__menu",children:"Dropdown menu"})]})}}]),n}(o.Component)),A=S,D=n(13),w=n.n(D),L=(n(35),function(e){var t=e.todos,n=e.onDeleteTodo,o=e.onToggleCompleted;return Object(m.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,r=e.text,c=e.completed;return Object(m.jsxs)("li",{className:w()("TodoList__item",{"TodoList__item--completed":c}),children:[Object(m.jsx)("input",{type:"checkbox",className:"TodoLiz__checkbox",checked:c,onChange:function(){return o(t)}}),Object(m.jsx)("p",{className:"TodoList__text",children:r}),Object(m.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}),I=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.message),e.setState({message:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(m.jsx)("textarea",{className:"TodoEditor<__textarea",value:this.state.message,onChange:this.handleChange}),Object(m.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"Save"})]})}}]),n}(o.Component),E=I,F=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{children:["Filter on name",Object(m.jsx)("input",{type:"text",value:t,onChange:n})]})},P=n(14),B=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}],V=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:P,filter:""},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e}))}}))},e.addTodo=function(t){var n={id:h.a.generate(),text:t,completed:!1};e.setState((function(e){var t=e.todos;return{todos:[n].concat(Object(s.a)(t))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodos=function(){var t=e.state,n=t.filter,o=t.todos,r=n.toLowerCase();return o.filter((function(e){return e.text.toLowerCase().includes(r)}))},e.calcCompletedTodos=function(){return e.state.todos.reduce((function(e,t){return t.completed?e+1:e}),0)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,o=t.length,r=this.calcCompletedTodos(),c=this.getVisibleTodos();return Object(m.jsxs)(x,{children:[Object(m.jsx)("h2",{children:"ColorPicker"}),Object(m.jsx)(f,{options:B}),Object(m.jsx)("h2",{children:"Alerts"}),Object(m.jsx)(C,{text:"LOST DATA",type:"success"}),Object(m.jsx)(C,{text:"LOST DATA",type:"warning"}),Object(m.jsx)(C,{text:"LOST DATA",type:"error"}),Object(m.jsx)("h2",{children:"Custom Boxes"}),Object(m.jsx)(y,{type:"small"}),Object(m.jsx)(y,{type:"medium"}),Object(m.jsx)(y,{type:"large"}),Object(m.jsx)("h2",{children:"Counter"}),Object(m.jsx)(k,{}),Object(m.jsx)("h2",{children:"Dropdown"}),Object(m.jsx)(A,{}),Object(m.jsx)("h2",{children:"ToDoList"}),Object(m.jsx)(E,{onSubmit:this.addTodo}),Object(m.jsx)(F,{value:n,onChange:this.changeFilter}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{children:["Total: ",o]}),Object(m.jsxs)("span",{children:["Done: ",r]})]}),Object(m.jsx)(L,{todos:c,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted})]})}}]),n}(o.Component),J=V;a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.26ee4aa0.chunk.js.map