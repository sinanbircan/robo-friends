(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o);n(14),n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(1),s=n(2),l=n(4),u=n(3),h=n(5),m=(n(16),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",onChange:t,placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue"}))}),d=(n(17),function(e){return r.a.createElement("div",{className:"scroll"},e.children)}),b=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5"},r.a.createElement("img",{alt:"Robot here",src:"https://robohash.org/".concat(t)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},p=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(b,{key:e.id,id:e.id,name:e.name,email:e.email})}))},f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={hasError:!1},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Opps. There is a problem waiting to be resolved"):this.props.children}}]),t}(a.Component),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchInput:t.target.value})},e.state={searchInput:"",robots:[]},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchInput.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"title f1"},"Hurdy Gurdy"),r.a.createElement(m,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(f,null,r.a.createElement(p,{robots:t}))))}}]),t}(a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.9d3169fb.chunk.js.map