(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),l=a(156),o=a(159);t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{isSolid:!0}),r.a.createElement(o.a,{name:"Event Name",date:"December 8-9, 2018",loc:"CBCOC",id:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."}),r.a.createElement(o.a,{name:"Event Name",date:"December 8-9, 2018",loc:"CBCOC",id:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."}),r.a.createElement(o.a,{name:"Event Name",date:"December 8-9, 2018",loc:"CBCOC",id:"bible",desc:"Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."}),r.a.createElement(l.a,null))}},149:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(153)),i=n(a(154)),l=n(a(7)),o=n(a(52)),c=n(a(53)),s=n(a(4)),u=n(a(0)),m=a(16),d=a(150);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,c.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,l=void 0===n?this.defaultGetProps:n,o=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var E=p(a);return u.default.createElement(m.Link,(0,i.default)({to:E,state:s,getProps:l,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:s,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},f,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var E=u.default.forwardRef(function(e,t){return u.default.createElement(h,(0,i.default)({innerRef:t},e))});t.default=E;var v=function(e,t){window.___navigate(p(e),t)};t.navigate=v;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p}),a.d(t,"useStaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(149),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(151),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},151:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},152:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(150),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="logo_white.png",t={};return this.props.isSolid&&(e="logo_blue.png",t={backgroundColor:"#051C34"}),l.a.createElement("div",{id:"toolbar-container",style:t},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement(o.Link,{to:"/"},l.a.createElement("img",{id:"banner-logo",alt:"",src:Object(o.withPrefix)("img/"+e)}))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"toolbar-links"},l.a.createElement(o.Link,{to:"/about"},"ABOUT"),l.a.createElement(o.Link,{to:"/ministries"},"MINISTRIES"),l.a.createElement(o.Link,{to:"/events-upcoming"},"EVENTS"),l.a.createElement(o.Link,{to:"/sermons"},"SERMONS"),l.a.createElement(o.Link,{to:"/visit"},"VISIT"))))))},t}(l.a.Component);t.a=c},153:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},154:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(150),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{id:"footer-container",className:"container-fluid"},l.a.createElement("div",{id:"footer-nav",className:"container-fluid border-bottom"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"contact-info",className:"col-md"},l.a.createElement("b",null,"CONTACT"),l.a.createElement("br",null),l.a.createElement("br",null),"412 East Broadway ",l.a.createElement("br",null),"Anaheim, California 92805",l.a.createElement("br",null),l.a.createElement("br",null)," 714-533-6681",l.a.createElement("br",null)," secretary.cbcoc.org"),l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},l.a.createElement("b",null,"ABOUT")),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/vision"},"Vision")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/statement"},"Statement of Faith")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/leadership"},"Leadership")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},l.a.createElement("b",null,"MINISTRIES")),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/fellowships"},"Fellowship Groups")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/mission"},"Mission Trips")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},l.a.createElement("b",null,"EVENTS")),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/upcoming"},"Upcoming Events")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/calendar"},"Calendar")))),l.a.createElement("div",{className:"col-md"},l.a.createElement("p",{className:"footer-head"},l.a.createElement("b",null,"SERMONS")),l.a.createElement("ul",{className:"sub-list"},l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/eng-sermon"},"English")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/mand-sermon"},"Mandarin")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/cant-sermon"},"Cantonese/English")))))))))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(o.Link,{to:"/"},l.a.createElement("img",{id:"banner-logo",alt:"",src:Object(o.withPrefix)("/img/logo_blue.png")})),l.a.createElement("p",{id:"copyright-cbcoc",className:"py-4"},"Copyright © 2018 Chinese Baptist Church of Orange County. All rights reserved.")),l.a.createElement("div",{className:"col-md pull-right px-4"},l.a.createElement("ul",{id:"social-icons",className:"text-right"},l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"1"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"2"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-b",href:"3"},"")),l.a.createElement("li",{className:"px-2"},l.a.createElement("a",{id:"social-icons-r",href:"4"},"")))))))},t}(l.a.Component);t.a=c},157:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},159:function(e,t,a){"use strict";a(157);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(150),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{id:"event-preview",className:"container-fluid"},l.a.createElement("div",{className:"row border-bottom border-secondary"},l.a.createElement("div",{className:"col-md-6 text-center py-5"},l.a.createElement("img",{className:"event-img-card",alt:"",src:Object(o.withPrefix)("img/"+this.props.id+".png")})),l.a.createElement("div",{className:"col-md-6 py-5"},l.a.createElement("h5",null,this.props.name),l.a.createElement("p",null,this.props.date,l.a.createElement("br",null),this.props.loc),l.a.createElement("p",{id:"short-desc"},this.props.desc),l.a.createElement(o.Link,{id:"backtrack-events",to:"/event-show",state:{eventName:this.props.name,eventDesc:this.props.desc,eventLoc:this.props.loc,eventDate:this.props.date}},l.a.createElement("h6",{id:"attach-icon"},"View Event Details  "),l.a.createElement("h6",{className:"fa-solid",id:"attach-icon"},"")))))},t}(l.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-events-past-js-ab3aaf0605d33171ca6d.js.map