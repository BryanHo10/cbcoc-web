(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(154),i=a(158),c=a(160),o=a(7),s=a.n(o),u=a(152),m=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return console.log(this.props.location),r.a.createElement("div",{id:"event-info"},r.a.createElement("div",{className:"container-fluid bg-white py-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"column-info",className:"col-md-3"},r.a.createElement("div",{className:"py-2"},r.a.createElement("h5",{className:"darkblue-tag"},"Date & Time"),r.a.createElement("p",null,this.props.date,r.a.createElement("br",null),this.props.time)),r.a.createElement("div",{className:"py-2"},r.a.createElement("h5",{className:"darkblue-tag"},"Location"),r.a.createElement("p",null,this.props.loc))),r.a.createElement("div",{id:"column-info",className:"col-md-7"},r.a.createElement("div",{className:"py-2"},r.a.createElement("h5",{className:"darkblue-tag"},"Description"),r.a.createElement("p",null,this.props.desc)),r.a.createElement("div",{className:"py-2"},r.a.createElement(u.Link,{id:"backtrack-events",to:"/upcoming"},r.a.createElement("h6",{id:"attach-icon"},"Back to Events  "),r.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},"")))))))},t}(r.a.Component),d=a(161);t.default=function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(l.a,{isSolid:!1}),console.log(t),r.a.createElement(c.a,{desc:"",image:"upcoming.png",title:t.state.eventName,title2:""}),r.a.createElement(m,{date:"December 31, 2018",time:"1:00PM",loc:"CBCOC",desc:"Everyone loves fromage frais edam. Emmental cottage cheese chalk and cheese squirty cheese cheesecake cottage cheese cheese strings emmental. Monterey jack cheese on toast bavarian bergkase cheese on toast fromage frais who moved my cheese feta cow. Bocconcini pecorino fondue. Fondue cream cheese jarlsberg. Caerphilly cauliflower cheese the big cheese cheese and wine gouda blue castello edam airedale. Goat croque monsieur airedale cheesy grin red leicester babybel paneer st. agur blue cheese. Edam mozzarella.",id:1}),r.a.createElement(d.a,null),r.a.createElement(i.a,null))}},151:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(155)),l=n(a(156)),i=n(a(7)),c=n(a(52)),o=n(a(53)),s=n(a(4)),u=n(a(0)),m=a(16),d=a(152);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,o.default)((0,c.default)((0,c.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,l.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,c.default)((0,c.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,c=t.onClick,o=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var E=p(a);return u.default.createElement(m.Link,(0,l.default)({to:E,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){o&&o(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return c&&c(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:s,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,l.default)({},f,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var E=u.default.forwardRef(function(e,t){return u.default.createElement(h,(0,l.default)({innerRef:t},e))});t.default=E;var v=function(e,t){window.___navigate(p(e),t)};t.navigate=v;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p}),a.d(t,"useStaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(151),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(153),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(152),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="logo_white.png",t={};return this.props.isSolid&&(e="logo_blue.png",t={backgroundColor:"#051C34"}),i.a.createElement("div",{id:"toolbar-container",style:t},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"},i.a.createElement(c.Link,{to:"/"},i.a.createElement("img",{id:"banner-logo",alt:"",src:Object(c.withPrefix)("img/"+e)}))),i.a.createElement("div",{className:"col-sm"},i.a.createElement("div",{className:"toolbar-links"},i.a.createElement(c.Link,{to:"/about"},"ABOUT"),i.a.createElement(c.Link,{to:"/ministries"},"MINISTRIES"),i.a.createElement(c.Link,{to:"/events-upcoming"},"EVENTS"),i.a.createElement(c.Link,{to:"/sermons"},"SERMONS"),i.a.createElement(c.Link,{to:"/visit"},"VISIT"))))))},t}(i.a.Component);t.a=o},155:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},156:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(54),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(152),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"footer-container",className:"container-fluid"},i.a.createElement("div",{id:"footer-nav",className:"container-fluid border-bottom"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{id:"contact-info",className:"col-md"},i.a.createElement("b",null,"CONTACT"),i.a.createElement("br",null),i.a.createElement("br",null),"412 East Broadway ",i.a.createElement("br",null),"Anaheim, California 92805",i.a.createElement("br",null),i.a.createElement("br",null)," 714-533-6681",i.a.createElement("br",null)," secretary.cbcoc.org"),i.a.createElement("div",{className:"col-md"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md"},i.a.createElement("p",{className:"footer-head"},i.a.createElement("b",null,"ABOUT")),i.a.createElement("ul",{className:"sub-list"},i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/vision"},"Vision")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/statement"},"Statement of Faith")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/leadership"},"Leadership")))),i.a.createElement("div",{className:"col-md"},i.a.createElement("p",{className:"footer-head"},i.a.createElement("b",null,"MINISTRIES")),i.a.createElement("ul",{className:"sub-list"},i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/fellowships"},"Fellowship Groups")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/mission"},"Mission Trips")))),i.a.createElement("div",{className:"col-md"},i.a.createElement("p",{className:"footer-head"},i.a.createElement("b",null,"EVENTS")),i.a.createElement("ul",{className:"sub-list"},i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/upcoming"},"Upcoming Events")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/calendar"},"Calendar")))),i.a.createElement("div",{className:"col-md"},i.a.createElement("p",{className:"footer-head"},i.a.createElement("b",null,"SERMONS")),i.a.createElement("ul",{className:"sub-list"},i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/eng-sermon"},"English")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/mand-sermon"},"Mandarin")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/cant-sermon"},"Cantonese/English")))))))))),i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md"},i.a.createElement(c.Link,{to:"/"},i.a.createElement("img",{id:"banner-logo",alt:"",src:Object(c.withPrefix)("/img/logo_blue.png")})),i.a.createElement("p",{id:"copyright-cbcoc",className:"py-4"},"Copyright © 2018 Chinese Baptist Church of Orange County. All rights reserved.")),i.a.createElement("div",{className:"col-md pull-right px-4"},i.a.createElement("ul",{id:"social-icons",className:"text-right"},i.a.createElement("li",{className:"px-2"},i.a.createElement("a",{id:"social-icons-b",href:"1"},"")),i.a.createElement("li",{className:"px-2"},i.a.createElement("a",{id:"social-icons-b",href:"2"},"")),i.a.createElement("li",{className:"px-2"},i.a.createElement("a",{id:"social-icons-b",href:"3"},"")),i.a.createElement("li",{className:"px-2"},i.a.createElement("a",{id:"social-icons-r",href:"4"},"")))))))},t}(i.a.Component);t.a=o},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(152),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"jumbo-container"},i.a.createElement("div",{className:"jumbo"},i.a.createElement("img",{id:"jumbo-image",alt:"",src:Object(c.withPrefix)("img/"+this.props.image)}),i.a.createElement("h2",null,this.props.title),i.a.createElement("h2",null,this.props.title2),i.a.createElement("h3",null,this.props.desc)))},t}(i.a.Component);t.a=o},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(152),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement(c.Link,{id:"backtrack-events",to:"/upcoming",className:"col-md-6"},i.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},""),i.a.createElement("h6",{id:"attach-icon"},"Previous Events  ")),i.a.createElement(c.Link,{id:"backtrack-events",to:"/upcoming",className:"col-md-6"},i.a.createElement("h6",{id:"attach-icon"},"Upcoming Events  "),i.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},""))))},t}(i.a.Component);t.a=o}}]);
//# sourceMappingURL=component---src-pages-event-show-js-13d2c9f8e1a92263c5bd.js.map