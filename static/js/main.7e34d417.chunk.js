(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(5),i=n.n(o),c=(n(19),n(11)),s=n(6),l=n(7),u=n(12),m=n(8),d=n(13),f=(n(20),n(21),n(9));var h=function(e){console.log(e);var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(f.a,{className:"faicons",onClick:function(){e.deleteItem(t.key)},icon:"trash"}))))}));return r.a.createElement("div",null,t)},p=n(2),v=n(10);p.b.add(v.a);var k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){n.setState({currentItem:{text:e.target.value,key:Date.now()}})},n.deleteItem=function(e){var t=n.state.items.filter((function(t){return t.key!==e}));n.setState({items:t})},n.updateItem=function(e,t){var a=n.state.items;a.map((function(n){n.key===t&&(n.text=e)})),n.setState({items:a})},n.addItem=function(e){e.preventDefault();var t=n.state.currentItem;if(""!==t.text){var a=[].concat(Object(c.a)(n.state.items),[t]);n.setState({items:a,currentItem:{text:"",key:""}})}},n.state={items:[],currentItem:{text:"",key:""}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(h,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.updateItem}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.7e34d417.chunk.js.map