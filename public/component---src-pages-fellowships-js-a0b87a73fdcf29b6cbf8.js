(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,a){"use strict";a.r(t);a(159),a(34);var n=a(0),r=a.n(n),i=a(154),o=a(158),l=a(160),s=a(163),c=a(164),u=c.fellowships;t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{isSolid:!1}),r.a.createElement(l.a,{desc:"Pursuing Jesus in community",image:"fellowship.png",title:"Fellowship Groups",title2:""}),r.a.createElement("div",{className:"row container-fluid"},u.map(function(e){return r.a.createElement(s.a,{target_aud:e.target_aud,id:e.target_aud.toLowerCase().replace(/ |\//g,"_"),name:e.name,abbrev:e.abbrev,desc:e.description,meetings:e.meetings,times:e.times,loc:e.location,contact:e.contact,audience:e.audience})})),r.a.createElement(o.a,null))}},151:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(155)),i=n(a(156)),o=n(a(7)),l=n(a(52)),s=n(a(53)),c=n(a(4)),u=n(a(0)),m=a(16),d=a(152);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var g=p(a);return u.default.createElement(m.Link,(0,i.default)({to:g,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),E(a,{state:c,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},f,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=u.default.forwardRef(function(e,t){return u.default.createElement(h,(0,i.default)({innerRef:t},e))});t.default=g;var E=function(e,t){window.___navigate(p(e),t)};t.navigate=E;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p}),a.d(t,"useStaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(151),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(153),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(152),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="logo_white.png",t={};return this.props.isSolid&&(e="logo_blue.png",t={backgroundColor:"#051C34"}),o.a.createElement("div",{id:"toolbar-container",style:t},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm"},o.a.createElement(l.Link,{to:"/"},o.a.createElement("img",{id:"banner-logo",alt:"",src:Object(l.withPrefix)("img/"+e)}))),o.a.createElement("div",{className:"col-sm"},o.a.createElement("div",{className:"toolbar-links"},o.a.createElement(l.Link,{to:"/about"},"ABOUT"),o.a.createElement(l.Link,{to:"/ministries"},"MINISTRIES"),o.a.createElement(l.Link,{to:"/events-upcoming"},"EVENTS"),o.a.createElement(l.Link,{to:"/sermons"},"SERMONS"),o.a.createElement(l.Link,{to:"/visit"},"VISIT"))))))},t}(o.a.Component);t.a=s},155:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},156:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(152),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"footer-container",className:"container-fluid"},o.a.createElement("div",{id:"footer-nav",className:"container-fluid border-bottom"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{id:"contact-info",className:"col-md"},o.a.createElement("b",null,"CONTACT"),o.a.createElement("br",null),o.a.createElement("br",null),"412 East Broadway ",o.a.createElement("br",null),"Anaheim, California 92805",o.a.createElement("br",null),o.a.createElement("br",null)," 714-533-6681",o.a.createElement("br",null)," secretary.cbcoc.org"),o.a.createElement("div",{className:"col-md"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md"},o.a.createElement("p",{className:"footer-head"},o.a.createElement("b",null,"ABOUT")),o.a.createElement("ul",{className:"sub-list"},o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/vision"},"Vision")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/statement"},"Statement of Faith")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/leadership"},"Leadership")))),o.a.createElement("div",{className:"col-md"},o.a.createElement("p",{className:"footer-head"},o.a.createElement("b",null,"MINISTRIES")),o.a.createElement("ul",{className:"sub-list"},o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/fellowships"},"Fellowship Groups")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/mission"},"Mission Trips")))),o.a.createElement("div",{className:"col-md"},o.a.createElement("p",{className:"footer-head"},o.a.createElement("b",null,"EVENTS")),o.a.createElement("ul",{className:"sub-list"},o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/upcoming"},"Upcoming Events")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/calendar"},"Calendar")))),o.a.createElement("div",{className:"col-md"},o.a.createElement("p",{className:"footer-head"},o.a.createElement("b",null,"SERMONS")),o.a.createElement("ul",{className:"sub-list"},o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/eng-sermon"},"English")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/mand-sermon"},"Mandarin")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/cant-sermon"},"Cantonese/English")))))))))),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md"},o.a.createElement(l.Link,{to:"/"},o.a.createElement("img",{id:"banner-logo",alt:"",src:Object(l.withPrefix)("/img/logo_blue.png")})),o.a.createElement("p",{id:"copyright-cbcoc",className:"py-4"},"Copyright © 2018 Chinese Baptist Church of Orange County. All rights reserved.")),o.a.createElement("div",{className:"col-md pull-right px-4"},o.a.createElement("ul",{id:"social-icons",className:"text-right"},o.a.createElement("li",{className:"px-2"},o.a.createElement("a",{id:"social-icons-b",href:"1"},"")),o.a.createElement("li",{className:"px-2"},o.a.createElement("a",{id:"social-icons-b",href:"2"},"")),o.a.createElement("li",{className:"px-2"},o.a.createElement("a",{id:"social-icons-b",href:"3"},"")),o.a.createElement("li",{className:"px-2"},o.a.createElement("a",{id:"social-icons-r",href:"4"},"")))))))},t}(o.a.Component);t.a=s},159:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(152),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"jumbo-container"},o.a.createElement("div",{className:"jumbo"},o.a.createElement("img",{id:"jumbo-image",alt:"",src:Object(l.withPrefix)("img/"+this.props.image)}),o.a.createElement("h2",null,this.props.title),o.a.createElement("h2",null,this.props.title2),o.a.createElement("h3",null,this.props.desc)))},t}(o.a.Component);t.a=s},163:function(e,t,a){"use strict";a(159);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(152),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"col-md-6 text-center"},o.a.createElement("img",{id:"group-img-card",alt:"",src:Object(l.withPrefix)("img/"+this.props.id)+".jpg"}),o.a.createElement(l.Link,{to:"/fellowship-show",state:{groupName:this.props.name,groupDesc:this.props.desc,groupLoc:this.props.loc,groupTime:this.props.times,groupMeet:this.props.meetings,groupContact:this.props.contact,groupDate:this.props.date,groupAudience:this.props.audience,groupAbbrev:this.props.abbrev}},o.a.createElement("h3",null,this.props.target_aud)))},t}(o.a.Component);t.a=s},164:function(e){e.exports={fellowships:[{target_aud:"Children",name:"Blast",abbrev:"BLAST",description:"",meetings:"Second & Third Fridays of the Month",times:"7:30 PM",location:"CBCOC",contact:[{name:"Samuel Leung",email:"fireelements@gmail.com"}],audience:"Elementary School"},{target_aud:"Middle/High School",name:"Christian Youth Fellowship",abbrev:"CYF",description:"",meetings:"Every Friday",times:"7:30 PM",location:"CBCOC",contact:[{name:"Eugene Kim",email:"eugene.s.kim1@gmail.com"}],audience:"Junior High & High School"},{target_aud:"College",name:"Crosstrainers",abbrev:"CT",description:"",meetings:"Every Friday",times:"7:30 PM",location:"CBCOC",contact:[{name:"Matthew Yang",email:"matthewsyang@gmail.com"},{name:"Donna Wong",email:"dw2107@gmail.com"}],audience:"College"},{target_aud:"English Young Adult",name:"Clay",abbrev:"CLAY",description:"",meeting:"",times:"",location:"",contact:[{name:"",email:""}],audience:"English Young Adult"},{target_aud:"Young Families",name:"Young Family Fellowship",abbrev:"YYF",description:"",meetings:"TBD",times:"TBD",location:"TBD",contact:[{name:"Anne Yip",email:"anneyip@gmail.com"}],audience:"Families with young children"},{target_aud:"English Adult",name:"English Adult Fellowship",abbrev:"EAF",description:"",meetings:"TBD",times:"TBD",location:"TBD",contact:[{name:"Lana Woo",email:"lanalwoo@gmail.com"}],audience:"English Adult"},{target_aud:"Cantonese Adult",name:"Friends of Jesus",abbrev:"FOJ",description:"",meetings:"Second Fridays of the month",times:"7:30 PM",location:"CBCOC",contact:[{name:"Samuel Kwok",email:"samkwok_91773@yahoo.com"}],audience:"Cantonese Adult"},{target_aud:"Mandarin Adult",name:"Mandarin Fellowship",abbrev:"N/A",description:"",meeting:"TBD",times:"TBD",location:"",contact:[{name:"",email:""}],audience:""},{target_aud:"Mandarin Young Adult",name:"ZION",abbrev:"ZION",description:"",meeting:"Every Friday",times:"7:30PM",location:"CBCOC",contact:[{name:"Bob Gao",email:"gaohezhu@gmail.com"}],audience:"Mandarin Young Adult"}]}}}]);
//# sourceMappingURL=component---src-pages-fellowships-js-a0b87a73fdcf29b6cbf8.js.map