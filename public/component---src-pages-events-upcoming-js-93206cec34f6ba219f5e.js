(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(161),l=a(163),s=a(165),i=a(175),o=a(176),m=a(162);t.default=function(e){e.location;return r.a.createElement("div",null,r.a.createElement(m.a,{tabTitle:"Upcoming | CBCOC"}),r.a.createElement(c.a,{isSolid:!1}),r.a.createElement(s.a,{desc:"",image:"upcoming.png",title:"Upcoming Events",title2:""}),r.a.createElement(i.a,{name:"Cheesey Party",date:"December 8-9, 2018",loc:"CBCOC",img:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte.",id:"N/A"}),r.a.createElement(i.a,{name:"Event Name",date:"December 8-9, 2018",loc:"CBCOC",img:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte.",id:"N/A"}),r.a.createElement(i.a,{name:"Event Name",date:"December 8-9, 2018",loc:"CBCOC",img:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte.",id:"N/A"}),r.a.createElement(o.a,null),r.a.createElement(l.a,null))}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=a(32),i=a.n(s);a.d(t,"a",function(){return i.a}),a.d(t,"b",function(){return s.withPrefix});a(159),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},159:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},160:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=a(55),i=a(2),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(158),i=(a(73),a(54),a(164),a(33)),o=a.n(i),m=a(222),d=a(215),u=a(216),p=a(217),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(o()(a)),a.state={dropdownOpen:!1},a}r()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({dropdownOpen:!this.state.dropdownOpen})},a.render=function(){var e=this;return l.a.createElement(m.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,id:"drop-toggle"},l.a.createElement(d.a,{size:"lg",id:"drop-toggle"},this.props.header),l.a.createElement(u.a,{id:"drop-menu"},Object.keys(this.props.menuItems).map(function(t){return l.a.createElement(s.a,{to:e.props.menuItems[t],state:{currentPage:1}},l.a.createElement(p.a,{className:"py-2",id:"drop-menu-item"},t))})))},t}(l.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="logo_white.png",t={};return this.props.isSolid&&(e="logo_blue.png",t={backgroundColor:"#051C34"}),l.a.createElement("div",{id:"toolbar-container",style:t},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement(s.a,{to:"/"},l.a.createElement("img",{id:"banner-logo",alt:"",src:Object(s.b)("img/"+e)}))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"toolbar-links"},l.a.createElement(h,{header:"About",menuItems:{Vision:"/vision","Statement of Faith":"/statement",Leadership:"/leadership"}}),l.a.createElement(h,{header:"Ministries",menuItems:{"Fellowship Groups":"/fellowships","Mission Trips":"missions"}}),l.a.createElement(h,{header:"Events",menuItems:{Upcoming:"/events-upcoming",Calendar:"/calendar"}}),l.a.createElement(h,{header:"Sermons",menuItems:{English:"/sermon-eng?page=1",Mandarin:"/sermon-mand?page=1",Cantonese:"/sermon-cant?page=1"}}),l.a.createElement(s.a,{to:"/visit"},l.a.createElement("button",{id:"visit-btn",type:"button",className:"btn btn-lg btn-primary"},"Visit")))))))},t}(l.a.Component);t.a=E},162:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(168),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement(s.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,this.props.tabTitle)))},t}(l.a.Component);t.a=i},163:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(158),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{id:"footer-container",className:"container-fluid"},l.a.createElement("div",{id:"footer-nav",className:"container-fluid border-bottom"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"contact-info",className:"col-md"},l.a.createElement("p",{className:"gotham-med"},"CONTACT"),"412 East Broadway ",l.a.createElement("br",null),"Anaheim, California 92805",l.a.createElement("br",null),l.a.createElement("br",null)," 714-533-6681",l.a.createElement("br",null)," secretary.cbcoc.org"),l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},"ABOUT"),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/vision"},"Vision")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/statement"},"Statement of Faith")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/leadership"},"Leadership")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},"MINISTRIES"),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/fellowships"},"Fellowship Groups")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/missions"},"Mission Trips")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},"EVENTS"),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/events-upcoming"},"Upcoming Events")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/calendar"},"Calendar")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},"SERMONS"),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/sermon-eng?page=1",state:{currentPage:1}},"English")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/mand-sermon"},"Mandarin")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/cant-sermon"},"Cantonese/English")))))))))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(s.a,{to:"/"},l.a.createElement("img",{id:"banner-logo",alt:"",src:Object(s.b)("/img/logo_blue.png")})),l.a.createElement("p",{id:"copyright-cbcoc",className:"py-4"},"Copyright © 2018 Chinese Baptist Church of Orange County. All rights reserved.")),l.a.createElement("div",{className:"col-md pull-right px-4"},l.a.createElement("ul",{id:"social-icons",className:"text-right"},l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"1"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"2"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"3"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-r",href:"4"},"")))))))},t}(l.a.Component);t.a=i},165:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(158),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={uri:"img/"+a.props.image},a}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("div",{id:"jumbo-container"},l.a.createElement("div",{className:"jumbo"},l.a.createElement("img",{id:"jumbo-image",alt:"",src:Object(s.b)(this.state.uri),onError:function(){return e.setState({uri:"img/no-cover.png"})}}),l.a.createElement("h2",{className:"gotham-bold"},this.props.title),l.a.createElement("h2",null,this.props.title2),l.a.createElement("h3",{className:"gotham-book"},this.props.desc)))},t}(l.a.Component);t.a=i},167:function(e,t,a){var n=a(25).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},175:function(e,t,a){"use strict";a(167);var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(158),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={uri:"img/"+a.props.id+".png"},a}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("div",{id:"event-preview",className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 text-center py-5"},l.a.createElement("img",{className:"event-img-card",alt:"",src:Object(s.b)(this.state.uri),onError:function(){return e.setState({uri:"img/unavailable.png"})}})),l.a.createElement("div",{className:"col-md-6 py-5"},l.a.createElement("h5",{className:"gotham-med"},this.props.name),l.a.createElement("p",{className:"gotham-book color-gray"},this.props.date,l.a.createElement("br",null),this.props.loc),l.a.createElement("p",{className:"serifpro",id:"short-desc"},this.props.desc),l.a.createElement(s.a,{id:"backtrack-events",to:"/event-show",state:{eventName:this.props.name,eventDesc:this.props.desc,eventLoc:this.props.loc,eventDate:this.props.date}},l.a.createElement("h6",{className:"gotham-med",id:"attach-icon"},"View Event Details  "),l.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},"")))))},t}(l.a.Component);t.a=i},176:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(158),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"mr-auto px-5 py-4"},l.a.createElement(s.a,{id:"backtrack-events",to:"/events-past"},l.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},""),l.a.createElement("h6",{id:"attach-icon"}," Previous Events  "))),l.a.createElement("div",{className:"px-5 py-4"},l.a.createElement(s.a,{id:"backtrack-events",to:"/events-upcoming"},l.a.createElement("h6",{id:"attach-icon"},"Upcoming Events  "),l.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},"")))))},t}(l.a.Component);t.a=i}}]);
//# sourceMappingURL=component---src-pages-events-upcoming-js-93206cec34f6ba219f5e.js.map