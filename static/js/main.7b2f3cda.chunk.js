(this.webpackJsonpreactwebsite=this.webpackJsonpreactwebsite||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),s=a(3),o=a(2),i=a(5),m=a(4),u=(a(23),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"col"},r.a.createElement("iframe",{allowfullscreen:"",frameborder:"0",src:"https://cdn.bootstrapstudio.io/placeholders/map.html",id:"map",width:"100%",height:"400"}))}}]),a}(n.Component)),d=a(6),p=a(17),b=a.n(p).a.create({baseURL:"https://backend-dot-prime-poetry-277413.uc.r.appspot.com"}),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).renderTop=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-shopping-cart icon",style:{color:n.props.color,marginBottom:15}}),r.a.createElement("h3",{className:"name"},"Products in Stock"),r.a.createElement("input",{type:"search",id:"search-bar-2",style:{padding:1,marginBottom:16,marginRight:12,marginTop:7},onChange:function(e){n.setState({form:e.target.value})}}),r.a.createElement("button",{className:"btn btn-primary border rounded-circle",id:"search-button-2",type:"submit",style:{backgroundColor:n.props.color}},r.a.createElement("i",{className:"fa fa-search"})))},n.renderTable=function(){return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table",id:"table-1"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:26}}),r.a.createElement("th",{style:{width:188}},"Item Name"),r.a.createElement("th",null,"# in Stock"),r.a.createElement("th",{style:{width:60}}))),r.a.createElement("tbody",null,n.props.items.filter((function(e){return e.name.includes(n.state.form)})).map((function(e){return r.a.createElement("tr",{id:e.name},r.a.createElement("td",null,r.a.createElement("i",{className:e.icon})),r.a.createElement("td",{style:{width:129}},e.name),r.a.createElement("td",null,e.supply),r.a.createElement("td",null,r.a.createElement("input",{type:"number",style:{width:50},onChange:function(t){var a={};t.target.value>0?a[e.name]=t.target.value:a[e.name]=0,n.setState(a)}})))})))))},n.state={form:""},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){if(e!==this.props){var t,a,n={},r=Object(d.a)(this.props.items);try{for(r.s();!(a=r.n()).done;)n[(t=a.value).name]=t.supply}catch(c){r.e(c)}finally{r.f()}this.setState(n)}}}]),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-sm-6 col-md-5 col-lg-4 col-xl-6 item"},r.a.createElement("div",{className:"box"},this.renderTop(),this.renderTable(),r.a.createElement("p",{className:"description"}),r.a.createElement("button",{className:"btn btn-primary",id:"edit-supply",type:"button",style:{backgroundColor:this.props.color},onClick:function(){var t,a,n=Object(d.a)(e.props.items);try{for(n.s();!(a=n.n()).done;)t=a.value,e.state[t.name]&&b.post("/dashboard/update-supply/?place_id=".concat(e.props.storeID,"&item=").concat(t.name,"&supply=").concat(e.state[t.name]))}catch(r){n.e(r)}finally{n.f()}e.props.refresh()}},"Edit Supply")))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-sm-6 col-md-5 col-lg-4 col-xl-8 item"},r.a.createElement("div",{class:"box"},r.a.createElement("i",{class:"fas fa-store-alt icon",style:{color:this.props.color,marginBottom:15}}),r.a.createElement("h1",{id:"store-name",class:"name"},this.props.name||"Home Depot"),r.a.createElement("p",{id:"store-desc",class:"description"},this.props.desc||"1013 Maple Avenue, Milton"),r.a.createElement("a",{class:"learn-more",href:"#"})))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).renderTable=function(){return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table",id:"table-2"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:26}}),r.a.createElement("th",null,"Item Name "),r.a.createElement("th",null,"# of Request"))),r.a.createElement("tbody",null,n.props.items.filter((function(e){return e.name.includes(n.state.form)})).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("i",{className:e.icon})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.demand))})))))},n.renderHeader=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-question-circle icon",style:{color:n.props.color,marginBottom:15}}),r.a.createElement("h3",{className:"name"},"Items Requests at this Location"),r.a.createElement("input",{type:"search",id:"search-bar-3",style:{marginTop:7,marginRight:12,marginBottom:16,padding:1},onChange:function(e){n.setState({form:e.target.value})}}),r.a.createElement("button",{className:"btn btn-primary border rounded-circle",id:"search-button-3",type:"button",style:{backgroundColor:n.props.color}},r.a.createElement("i",{className:"fa fa-search"})))},n.state={form:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}}]),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-6 col-md-5 col-lg-4 col-xl-6 item"},r.a.createElement("div",{className:"box"},this.renderHeader(),this.renderTable()))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).refresh=function(){b.post("dashboard/get-products/?place_id=".concat(n.state.currentStore),{}).then((function(e){var t=e.data;n.setState({items:t})}))},n.state={items:[],currentStore:"ChIJqTmMY_9uK4gR_qBXJtlL8KA"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.post("dashboard/get-products/?place_id=".concat(this.state.currentStore),{}).then((function(t){var a=t.data;e.setState({items:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"features-boxed"},r.a.createElement("div",{class:"container"},r.a.createElement("nav",{class:"navbar navbar-light navbar-expand-md navigation-clean-search"},r.a.createElement("div",{class:"container"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"Inventory Investigator"),r.a.createElement("button",{"data-toggle":"collapse",class:"navbar-toggler","data-target":"#navcol-1"},r.a.createElement("span",{class:"sr-only"},"Toggle navigation"),r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navcol-1"},r.a.createElement("ul",{class:"nav navbar-nav"}),r.a.createElement("form",{class:"form-inline mr-auto",target:"_self"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"search-field"})))))),r.a.createElement("div",{class:"intro"},r.a.createElement("p",{class:"text-center"})),r.a.createElement("div",{class:"row justify-content-center features"},r.a.createElement(f,{color:"#70c1b3"}),r.a.createElement(u,{color:"#70c1b3"}),r.a.createElement(h,{refresh:this.refresh,storeID:this.state.currentStore,color:"#70c1b3",items:this.state.items}),r.a.createElement(E,{color:"#70c1b3",items:this.state.items}),r.a.createElement("div",{class:"clearfix"})))))}}]),a}(n.Component);a(41),a(42),a(43);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7b2f3cda.chunk.js.map