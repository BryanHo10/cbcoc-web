(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(161),l=t(163),s=t(175),i=t(176),o=t(162);a.default=function(e){e.location;return r.a.createElement("div",null,r.a.createElement(o.a,{tabTitle:"Past Events | CBCOC"}),r.a.createElement(c.a,{isSolid:!0}),r.a.createElement("h1",{id:"leader-title",className:"py-3"},"Past Events"),r.a.createElement(s.a,{name:"Event Name",date:"December 8-9, 2018",loc:"CBCOC",img:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte.",id:"N/A"}),r.a.createElement(s.a,{name:"Event Name",date:"December 8-9, 2018",loc:"CBCOC",img:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte.",id:"N/A"}),r.a.createElement(s.a,{name:"Event Name",date:"December 8-9, 2018",loc:"CBCOC",img:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte.",id:"N/A"}),r.a.createElement(i.a,null),r.a.createElement(l.a,null))}},158:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(32),i=t.n(s);t.d(a,"a",function(){return i.a}),t.d(a,"b",function(){return s.withPrefix});t(159),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},159:function(e,a,t){var n;e.exports=(n=t(160))&&n.default||n},160:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},161:function(e,a,t){"use strict";var n=t(7),r=t.n(n),c=t(0),l=t.n(c),s=t(158),i=(t(73),t(54),t(164),t(33)),o=t.n(i),m=t(222),d=t(215),u=t(216),p=t(217),h=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggle=t.toggle.bind(o()(t)),t.state={dropdownOpen:!1},t}r()(a,e);var t=a.prototype;return t.toggle=function(){this.setState({dropdownOpen:!this.state.dropdownOpen})},t.render=function(){var e=this;return l.a.createElement(m.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,id:"drop-toggle"},l.a.createElement(d.a,{size:"lg",id:"drop-toggle"},this.props.header),l.a.createElement(u.a,{id:"drop-menu"},Object.keys(this.props.menuItems).map(function(a){return l.a.createElement(s.a,{to:e.props.menuItems[a],state:{currentPage:1}},l.a.createElement(p.a,{className:"py-2",id:"drop-menu-item"},a))})))},a}(l.a.Component),E=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e="logo_white.png",a={};return this.props.isSolid&&(e="logo_blue.png",a={backgroundColor:"#051C34"}),l.a.createElement("div",{id:"toolbar-container",style:a},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement(s.a,{to:"/"},l.a.createElement("img",{id:"banner-logo",alt:"",src:Object(s.b)("img/"+e)}))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"toolbar-links"},l.a.createElement(h,{header:"About",menuItems:{Vision:"/vision","Statement of Faith":"/statement",Leadership:"/leadership"}}),l.a.createElement(h,{header:"Ministries",menuItems:{"Fellowship Groups":"/fellowships","Mission Trips":"missions"}}),l.a.createElement(h,{header:"Events",menuItems:{Upcoming:"/events-upcoming",Calendar:"/calendar"}}),l.a.createElement(h,{header:"Sermons",menuItems:{English:"/sermon-eng?page=1",Mandarin:"/sermon-mand?page=1",Cantonese:"/sermon-cant?page=1"}}),l.a.createElement(s.a,{to:"/visit"},l.a.createElement("button",{id:"visit-btn",type:"button",className:"btn btn-lg btn-primary"},"Visit")))))))},a}(l.a.Component);a.a=E},162:function(e,a,t){"use strict";var n=t(7),r=t.n(n),c=t(0),l=t.n(c),s=t(168),i=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement(s.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,this.props.tabTitle)))},a}(l.a.Component);a.a=i},163:function(e,a,t){"use strict";var n=t(7),r=t.n(n),c=t(0),l=t.n(c),s=t(158),i=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){return l.a.createElement("div",{id:"footer-container",className:"container-fluid"},l.a.createElement("div",{id:"footer-nav",className:"container-fluid border-bottom"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"contact-info",className:"col-md"},l.a.createElement("p",{className:"gotham-med"},"CONTACT"),"412 East Broadway ",l.a.createElement("br",null),"Anaheim, California 92805",l.a.createElement("br",null),l.a.createElement("br",null)," 714-533-6681",l.a.createElement("br",null)," secretary.cbcoc.org"),l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},"ABOUT"),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/vision"},"Vision")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/statement"},"Statement of Faith")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/leadership"},"Leadership")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},"MINISTRIES"),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/fellowships"},"Fellowship Groups")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/missions"},"Mission Trips")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},"EVENTS"),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/events-upcoming"},"Upcoming Events")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/calendar"},"Calendar")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},"SERMONS"),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/sermon-eng?page=1",state:{currentPage:1}},"English")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/mand-sermon"},"Mandarin")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/cant-sermon"},"Cantonese/English")))))))))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(s.a,{to:"/"},l.a.createElement("img",{id:"banner-logo",alt:"",src:Object(s.b)("/img/logo_blue.png")})),l.a.createElement("p",{id:"copyright-cbcoc",className:"py-4"},"Copyright © 2018 Chinese Baptist Church of Orange County. All rights reserved.")),l.a.createElement("div",{className:"col-md pull-right px-4"},l.a.createElement("ul",{id:"social-icons",className:"text-right"},l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"1"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"2"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"3"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-r",href:"4"},"")))))))},a}(l.a.Component);a.a=i},167:function(e,a,t){var n=t(25).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||t(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},175:function(e,a,t){"use strict";t(167);var n=t(7),r=t.n(n),c=t(0),l=t.n(c),s=t(158),i=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={uri:"img/"+t.props.id+".png"},t}return r()(a,e),a.prototype.render=function(){var e=this;return l.a.createElement("div",{id:"event-preview",className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 text-center py-5"},l.a.createElement("img",{className:"event-img-card",alt:"",src:Object(s.b)(this.state.uri),onError:function(){return e.setState({uri:"img/unavailable.png"})}})),l.a.createElement("div",{className:"col-md-6 py-5"},l.a.createElement("h5",{className:"gotham-med"},this.props.name),l.a.createElement("p",{className:"gotham-book color-gray"},this.props.date,l.a.createElement("br",null),this.props.loc),l.a.createElement("p",{className:"serifpro",id:"short-desc"},this.props.desc),l.a.createElement(s.a,{id:"backtrack-events",to:"/event-show",state:{eventName:this.props.name,eventDesc:this.props.desc,eventLoc:this.props.loc,eventDate:this.props.date}},l.a.createElement("h6",{className:"gotham-med",id:"attach-icon"},"View Event Details  "),l.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},"")))))},a}(l.a.Component);a.a=i},176:function(e,a,t){"use strict";var n=t(7),r=t.n(n),c=t(0),l=t.n(c),s=t(158),i=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"mr-auto px-5 py-4"},l.a.createElement(s.a,{id:"backtrack-events",to:"/events-past"},l.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},""),l.a.createElement("h6",{id:"attach-icon"}," Previous Events  "))),l.a.createElement("div",{className:"px-5 py-4"},l.a.createElement(s.a,{id:"backtrack-events",to:"/events-upcoming"},l.a.createElement("h6",{id:"attach-icon"},"Upcoming Events  "),l.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},"")))))},a}(l.a.Component);a.a=i}}]);
//# sourceMappingURL=component---src-pages-events-past-js-1db0bc0b726b2bed8813.js.map