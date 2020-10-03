(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(6),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u,d=n(1),p=n(5),f=n(3),m=n(7);!function(e){e.ADD_TASK="ADD_TASK",e.REMOVE_TASK="REMOVE_TASK",e.COMPLETE_TASK="COMPLETE_TASK",e.CHANGE_FILTER="CHANGE_FILTER"}(u||(u={}));var v,k=[{text:"All",id:"all"},{text:"Active",id:"active"},{text:"Completed",id:"completed"}],h=Object(p.load)({namespace:"task-app"}),E=(null===h||void 0===h?void 0:h.tasks)||[],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.ADD_TASK:return[].concat(Object(m.a)(e),[{id:t.payload.id,text:t.payload.text,isCompleted:t.payload.isCompleted}]);case u.REMOVE_TASK:return Object(m.a)(e).filter((function(e){return e.id!==t.payload.id}));case u.COMPLETE_TASK:return Object(m.a)(e).map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),{},{isCompleted:!e.isCompleted}):e}));default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case u.CHANGE_FILTER:return a.activeFilter;default:return e}},C=Object(d.c)({tasks:T,filters:g}),A=d.d,y=(v={},Object(d.e)(C,v,A(Object(d.a)(Object(p.save)({namespace:"task-app"}))))),w=n(13),b=n(14),O=n(16),N=n(15),S=(n(31),function(e){var t=e.value,n=void 0===t?"":t,a=e.onChange,i=void 0===a?function(){}:a,r=e.onKeyPress,c=void 0===r?function(){}:r;return o.a.createElement("div",{className:"todo-input-wrapper"},o.a.createElement("i",{className:"fas fa-plus"}),o.a.createElement("input",{className:"todo-input",onChange:i,onKeyPress:c,placeholder:"Click to add task",value:n}))}),j=n(2),x=n.n(j),_=(n(32),function(e){var t=e.text,n=void 0===t?"":t,a=e.isCompleted,i=void 0!==a&&a,r=e.removeTask,c=void 0===r?function(){}:r,s=e.id,l=void 0===s?0:s,u=e.completeTask,d=void 0===u?function(){}:u,p=x()("mark far",{"fa-check-circle":i},{"fa-circle":!i}),f=x()("text",{completed:i});return o.a.createElement("li",{className:"todo-item"},o.a.createElement("i",{className:p,onClick:function(){d(l)}}),o.a.createElement("span",{className:f},n),o.a.createElement("i",{className:"fas fa-times",onClick:function(){c(l)}}))}),K=(n(33),function(e){var t=e.tasksList,n=void 0===t?[]:t,a=e.removeTask,i=e.completeTask;return o.a.createElement("ul",{className:"todo-list"},n.map((function(e){var t=e.id,n=e.text,r=e.isCompleted;return o.a.createElement(_,{key:t,completeTask:i,id:t,isCompleted:r,removeTask:a,text:n})})))}),F=(n(34),function(e){var t=e.amount,n=void 0===t?0:t,a=e.activeFilter,i=void 0===a?"all":a,r=e.changeFilter,c=void 0===r?function(){}:r;return o.a.createElement("div",{className:"footer"},o.a.createElement("span",{className:"amount"},"".concat(n," Tasks left")),o.a.createElement("div",{className:"btn-group"},k.map((function(e){var t=e.text,n=e.id,a=x()("filter-btn",{active:n===i});return o.a.createElement("button",{key:n,className:a,onClick:function(){c(n)}},t)}))))}),L=(n(35),Object(c.b)((function(e){return{tasks:e.tasks,filters:e.filters}}),{addTask:function(e){return{type:u.ADD_TASK,payload:Object(f.a)({},e)}},removeTask:function(e){return{type:u.REMOVE_TASK,payload:{id:e}}},completeTask:function(e){return{type:u.COMPLETE_TASK,payload:{id:e}}},changeFilter:function(e){return{type:u.CHANGE_FILTER,payload:{activeFilter:e}}}})(function(e){Object(O.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={taskText:""},e.handleInputChange=function(t){var n=t.target.value;e.setState({taskText:n})},e.addTask=function(t){var n=t.key,a=e.state.taskText;a.length>3&&"Enter"===n&&((0,e.props.addTask)({id:(new Date).getTime(),text:a,isCompleted:!1}),e.setState({taskText:""}))},e.filterTasks=function(e,t){switch(t){case"completed":return e.filter((function(e){return e.isCompleted}));case"active":return e.filter((function(e){return!e.isCompleted}));default:return e}},e.getActiveTasksCounter=function(e){return e.filter((function(e){return!e.isCompleted})).length},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.taskText,t=this.props,n=t.tasks,a=void 0===n?[]:n,i=t.removeTask,r=t.completeTask,c=t.filters,s=t.changeFilter,l=a.length>0,u=this.filterTasks(a,c),d=this.getActiveTasksCounter(a);return o.a.createElement("div",{className:"todo-wrapper"},o.a.createElement(S,{onChange:this.handleInputChange,onKeyPress:this.addTask,value:e}),l&&o.a.createElement(o.a.Fragment,null,o.a.createElement(K,{completeTask:r,removeTask:i,tasksList:u}),o.a.createElement(F,{activeFilter:c,amount:d,changeFilter:s})))}}]),n}(a.Component))),R=(n(36),function(e){var t=e.title,n=void 0===t?"Simple title":t;return o.a.createElement("h1",{className:"title"},n)}),D=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(R,{title:"Task App"}),o.a.createElement(L,null))};n(37);r.a.render(o.a.createElement(a.StrictMode,null,o.a.createElement(c.a,{store:y},o.a.createElement(D,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TaskApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/TaskApp","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&!a.includes("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.bd93ba89.chunk.js.map