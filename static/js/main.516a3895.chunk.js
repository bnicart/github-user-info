(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),s=a.n(c),r=(a(16),a(17),a(9)),i=a(2),o=a(3),m=a(5),h=a(4),u=a(1),d=a(6),f=(a(18),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).GITHUB_BASE_USER_API_URL="https://api.github.com/users",a.state={login:"",avatar_url:"",name:"",joined_date:"",bio:"",location:"",public_repos:0,followers:0},a.handleSearch=a.handleSearch.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.initializeUserInfo(this.state.login)}},{key:"initializeUserInfo",value:function(e){var t=this;this.setState({login:""}),e&&this.fetchApi("".concat(this.GITHUB_BASE_USER_API_URL,"/").concat(e)).then(function(e){t.setState(Object(r.a)({},e)),t.setState({joined_date:new Date(e.created_at).toDateString()})})}},{key:"handleSearch",value:function(e){this.initializeUserInfo(e)}},{key:"fetchApi",value:function(e){return fetch(e).then(function(e){return e.json()})}},{key:"render",value:function(){var e=this.state,t=e.login,a=e.message,n=l.a.createElement("div",{className:"card mb-3 p-2"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"inline"},l.a.createElement("img",{src:this.state.avatar_url,className:"card-img",alt:"Github Avatar"}))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},this.state.name,l.a.createElement("div",null,l.a.createElement("small",null,"(",l.a.createElement("a",{href:this.state.html_url,target:"_blank",rel:"noopener noreferrer"},this.state.login),")"))),l.a.createElement("div",{className:"card-text text-left"},l.a.createElement("span",{className:"font-weight-bold"},"Joined date:"),l.a.createElement("span",null," ",this.state.joined_date," ")),l.a.createElement("div",{className:"card-text text-left"},l.a.createElement("span",{className:"font-weight-bold"},"Bio:"),l.a.createElement("span",null," ",this.state.bio," ")),l.a.createElement("div",{className:"card-text text-left"},l.a.createElement("span",{className:"font-weight-bold"},"Location:"),l.a.createElement("span",null," ",this.state.location," ")),l.a.createElement("div",{className:"card-text text-left"},l.a.createElement("span",{className:"font-weight-bold"},"Public repositories:"),l.a.createElement("span",null," ",this.state.public_repos," ")),l.a.createElement("div",{className:"card-text text-left"},l.a.createElement("span",{className:"font-weight-bold"},"Followers:"),l.a.createElement("span",null," ",this.state.followers," ")))))),c=l.a.createElement("div",null,l.a.createElement("h3",{className:"center"},"No user found..."));return l.a.createElement("div",{className:"container-flex text-monospace"},l.a.createElement("div",{className:"row whole-page-height"},l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"col align-self-center"},l.a.createElement(v,{handleSearch:this.handleSearch}),t?n:"Not Found"===a?c:null),l.a.createElement("div",{className:"col"})))}}]),t}(l.a.Component)),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value||""})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSearch(this.state.value)}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group mx-auto"},l.a.createElement("label",{htmlFor:"search",className:"sr-only"},"Search"),l.a.createElement("input",{"data-search":"search",type:"text",className:"form-control search-field",value:this.state.value,onChange:this.handleChange,name:"search",id:"search",placeholder:"Search github user..."})),l.a.createElement("button",{type:"submit",className:"btn btn-primary invisible"},"Search"))}}]),t}(l.a.Component);var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.516a3895.chunk.js.map