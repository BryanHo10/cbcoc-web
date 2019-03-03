(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,n){"use strict";n.r(t);n(158);var a=n(0),i=n.n(a),r=n(153),o=n(157),s=n(7),l=n.n(s),c=n(151),d=function(e){function t(){var t;return(t=e.call(this)||this).state={count:0,staff_list:[]},t}return l()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"container text-center","data-toggle":"modal","data-target":"#"+this.props.id},i.a.createElement("img",{className:"leader-img-card",alt:"",src:Object(c.withPrefix)("img/leadership/"+this.props.id+".jpg")}),i.a.createElement("h3",null,this.props.name),i.a.createElement("p",null,this.props.title)),i.a.createElement("div",{id:this.props.id,className:"modal fade",role:"dialog"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h4",{className:"modal-title"},this.props.name),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"×")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",null,this.props.desc)),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"))))))},t}(i.a.Component),u=JSON.parse('{\n        "leaders":\n            [\n                {\n                    "name":"Tony Leung",\n                    "position":"Senior / Cantonese Pastor",\n                    "id":0,\n                    "image_id":"staff_leung",\n                    "description":"Rev. Tony Leung has a Doctor of Ministry (D. Min.) degree from Truth Theological Seminary. He also has two master\'s degrees from Midwestern Baptist Theological Seminary in Kansas City, Missouri and a Bachelor\'s degree from National Taiwan University from Taipei, Taiwan. Rev. Leung is married to Ying and they live in Los Angeles with three children. He serves as pastor with four services in multiple languages, English, Cantonese, Mandarin and Spanish. Our church is focus on reaching emerging generation. Rev. Leung and his wife are passionate for the Chinese to know and experience God through prayers, worship and learning from the Bible. We also hope you find and know the Lord Jesus Christ through our church."\n                },\n                {\n                    "name":"Ryan Cheung",\n                    "position":"English Pastor",\n                    "id":1,\n                    "image_id":"staff_cheung",\n                    "description":"As a native of the beautiful Bay Area, I was born in Palo Alto, California. The Lord was gracious to save me as I transitioned from middle school to high school. Not long after my conversion, God called me into full time ministry in the middle of high school while on a short term mission trip to Ensenada, Mexico.    After graduation I attended the University of California, San Diego. In 2007 the Lord blessed me with my better half, Natalie. We spent three post graduation years in San Diego before sensing the Lord\'s call to attend the Southern Baptist Theological Seminary in Louisville, Kentucky in 2010."\n                },\n                {\n                    "name":"Paul Yang",\n                    "position":"Mandarin Pastor",\n                    "id":2,\n                    "image_id":"",\n                    "description":""\n                },\n                {\n                    "name":"Eugene Kim",\n                    "position":"Minister of Discipleship and Missions",\n                    "id":3,\n                    "image_id":"staff_kimeugene",\n                    "description":"Eugene is our Minister of Discipleship equiping and mentoring the leaders and future leaders of the many fellowship groups at CBCOC. He is also the Minister of Missions leading the training of workers and coordinating our church\'s mission efforts. Eugene accepted Christ at 17. He studied Electrical Engineering at UC Irvine and worked in the nuclear power industry before being called into ministry. Eugene began his call to ministry by studying at Talbot Seminary. Before currently serving as the Minister of Discipleship and Missions, Eugene served as Youth Pastor of CBCOC for 18 years.         Married wife and best friend, Anna, in 1997. Have three daughters, three dogs and one cat. Currently studying at Golden Gate Seminary. Love to read, play basketball, hiking, biking."\n                },\n                {\n                    "name":"Ken Tan",\n                    "position":"Elder",\n                    "id":4,\n                    "image_id":"",\n                    "description":""\n                },\n                {\n                    "name":"Sam Kwok",\n                    "position":"Elder",\n                    "id":5,\n                    "image_id":"",\n                    "description":""\n                },\n                {\n                    "name":"Shell Joe",\n                    "position":"Elder",\n                    "id":6,\n                    "image_id":"",\n                    "description":""\n                },\n                {\n                    "name":"Daniel Ng",\n                    "position":"Elder",\n                    "id":7,\n                    "image_id":"",\n                    "description":""\n                },\n                {\n                    "name":"Frank Shay",\n                    "position":"Elder",\n                    "id":8,\n                    "image_id":"",\n                    "description":""\n                },\n                {\n                    "name":"Job Yang",\n                    "position":"Elder",\n                    "id":9,\n                    "image_id":"",\n                    "description":""\n                }\n    \n            ]\n    }').leaders;t.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{isSolid:!0}),i.a.createElement("h1",{id:"leader-title",className:"py-3"},"Leadership"),i.a.createElement("div",{id:"leader-info",className:"row container-fluid"},u.map(function(e){return i.a.createElement(d,{name:e.name,title:e.position,id:e.image_id,desc:e.description,index:e.id})})),i.a.createElement(o.a,null))}},150:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=a(n(154)),r=a(n(155)),o=a(n(7)),s=a(n(52)),l=a(n(53)),c=a(n(4)),d=a(n(0)),u=n(16),m=n(151);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var n;n=e.call(this,t)||this,(0,l.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,m.parsePath)(i.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,s=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),f=t.replace,h=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var g=p(n);return d.default.createElement(u.Link,(0,r.default)({to:g,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,m.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),E(n,{state:c,replace:f})),!0}},h))},t}(d.default.Component);h.propTypes=(0,r.default)({},f,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=d.default.forwardRef(function(e,t){return d.default.createElement(h,(0,r.default)({innerRef:t},e))});t.default=g;var E=function(e,t){window.___navigate(p(e),t)};t.navigate=E;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p}),n.d(t,"useStaticQuery",function(){return f});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(150),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(152),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var u=n(32);n.d(t,"parsePath",function(){return u.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){i.a.useContext;var t=i.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},153:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),s=n(151),l=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e="logo_white.png",t={};return this.props.isSolid&&(e="logo_blue.png",t={backgroundColor:"#051C34"}),o.a.createElement("div",{id:"toolbar-container",style:t},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm"},o.a.createElement(s.Link,{to:"/"},o.a.createElement("img",{id:"banner-logo",alt:"",src:Object(s.withPrefix)("img/"+e)}))),o.a.createElement("div",{className:"col-sm"},o.a.createElement("div",{className:"toolbar-links"},o.a.createElement(s.Link,{to:"/about"},"ABOUT"),o.a.createElement(s.Link,{to:"/ministries"},"MINISTRIES"),o.a.createElement(s.Link,{to:"/events-upcoming"},"EVENTS"),o.a.createElement(s.Link,{to:"/sermons"},"SERMONS"),o.a.createElement(s.Link,{to:"/visit"},"VISIT"))))))},t}(o.a.Component);t.a=l},154:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}},155:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},156:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(54),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),s=n(151),l=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"footer-container",className:"container-fluid"},o.a.createElement("div",{id:"footer-nav",className:"container-fluid border-bottom"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{id:"contact-info",className:"col-md"},o.a.createElement("b",null,"CONTACT"),o.a.createElement("br",null),o.a.createElement("br",null),"412 East Broadway ",o.a.createElement("br",null),"Anaheim, California 92805",o.a.createElement("br",null),o.a.createElement("br",null)," 714-533-6681",o.a.createElement("br",null)," secretary.cbcoc.org"),o.a.createElement("div",{className:"col-md"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md"},o.a.createElement("p",{className:"footer-head"},o.a.createElement("b",null,"ABOUT")),o.a.createElement("ul",{className:"sub-list"},o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/vision"},"Vision")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/statement"},"Statement of Faith")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/leadership"},"Leadership")))),o.a.createElement("div",{className:"col-md"},o.a.createElement("p",{className:"footer-head"},o.a.createElement("b",null,"MINISTRIES")),o.a.createElement("ul",{className:"sub-list"},o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/fellowships"},"Fellowship Groups")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/mission"},"Mission Trips")))),o.a.createElement("div",{className:"col-md"},o.a.createElement("p",{className:"footer-head"},o.a.createElement("b",null,"EVENTS")),o.a.createElement("ul",{className:"sub-list"},o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/upcoming"},"Upcoming Events")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/calendar"},"Calendar")))),o.a.createElement("div",{className:"col-md"},o.a.createElement("p",{className:"footer-head"},o.a.createElement("b",null,"SERMONS")),o.a.createElement("ul",{className:"sub-list"},o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/eng-sermon"},"English")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/mand-sermon"},"Mandarin")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/cant-sermon"},"Cantonese/English")))))))))),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md"},o.a.createElement(s.Link,{to:"/"},o.a.createElement("img",{id:"banner-logo",alt:"",src:Object(s.withPrefix)("/img/logo_blue.png")})),o.a.createElement("p",{id:"copyright-cbcoc",className:"py-4"},"Copyright © 2018 Chinese Baptist Church of Orange County. All rights reserved.")),o.a.createElement("div",{className:"col-md pull-right px-4"},o.a.createElement("ul",{id:"social-icons",className:"text-right"},o.a.createElement("li",{className:"px-2"},o.a.createElement("a",{id:"social-icons-b",href:"1"},"")),o.a.createElement("li",{className:"px-2"},o.a.createElement("a",{id:"social-icons-b",href:"2"},"")),o.a.createElement("li",{className:"px-2"},o.a.createElement("a",{id:"social-icons-b",href:"3"},"")),o.a.createElement("li",{className:"px-2"},o.a.createElement("a",{id:"social-icons-r",href:"4"},"")))))))},t}(o.a.Component);t.a=l},158:function(e,t,n){var a=n(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(17)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-leadership-js-adaf4ee0300943a4b65a.js.map