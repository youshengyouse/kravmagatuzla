(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(168),i=a(152),s=a(160),l=(a(172),a(34)),c=a.n(l),m=a(7),u=a.n(m),d=a(171),p=a.n(d),f=(a(149),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={textarea:0,nameError:!1,emailError:!1,subjectError:!1,messageError:!1},a.countTextArea=a.countTextArea.bind(c()(a)),a.formValidation=a.formValidation.bind(c()(a)),a.sendForm=a.sendForm.bind(c()(a)),a}u()(t,e);var a=t.prototype;return a.sendForm=function(e){var t=this;e.preventDefault();var a=e.target.email,r=e.target.imeiprezime,n=e.target.subject,o=e.target.poruka;if(this.formValidation(a,!0)&&this.formValidation(o,!0)&&this.formValidation(r,!0)&&this.formValidation(n,!0)){var i=a.value.trim(),s=r.value.trim(),l=n.value.trim(),c=o.value.trim();this.setState({messageError:!1}),a.disabled=!0,r.disabled=!0,n.disabled=!0,o.disabled=!0,p.a.post("/mail",{email:i,name:s,subject:l,message:c},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){e.data.nameError&&t.setState({nameError:!0}),e.data.emailError&&t.setState({emailError:!0}),e.data.nameError&&t.setState({subjectError:!0}),e.data.messageError&&t.setState({messageError:!0}),e.data.sent&&(a.disabled=!1,r.disabled=!1,n.disabled=!1,o.disabled=!1,a.value="",r.value="",n.value="",o.value="")}).catch(function(e){a.disabled=!1,r.disabled=!1,n.disabled=!1,o.disabled=!1,t.setState({nameError:!0,emailError:!0,subjectError:!0,messageError:!0})})}},a.countTextArea=function(e){var t=e.target;this.setState({textarea:t.value.length})},a.formValidation=function(e,t){var a;if(t&&(a=e),t||(a=e.target),"imeiprezime"===a.name||"subject"===a.name){var r=a.value.trim();if("imeiprezime"===a.name){if(!(r.length>100||0===r.length||""===r))return this.setState({nameError:!1}),!0;this.setState({nameError:!0})}if("subject"===a.name){if(!(r.length>500||0===r.length||""===r))return this.setState({subjectError:!1}),!0;this.setState({subjectError:!0})}}if("email"===a.name){if(!(a.value.length>100||!1===/^([^\s-])+([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(a.value)||0===a.value.length))return this.setState({emailError:!1}),!0;this.setState({emailError:!0})}if("poruka"===a.name){var n=a.value.trim();if(!(n.length>=5e3||0===n.length||""===n.trim()))return this.setState({messageError:!1}),!0;this.setState({messageError:!0})}},a.render=function(){var e,t,a,r;return(this.state.textarea>5e3||this.state.messageError)&&(e={color:"red"}),this.state.nameError&&(t={color:"red"}),this.state.emailError&&(a={color:"red"}),this.state.subjectError&&(r={color:"red"}),n.a.createElement("div",{className:"kontakt-container"},n.a.createElement("div",{className:"kontakt-objasnjenje"},n.a.createElement("span",null,"Kontaktirati nas možete:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Pozivom na broj telefona: ",n.a.createElement("span",{style:{fontWeight:"bold"}},"+387 61 998 742 (Mirza)")),n.a.createElement("li",null,"E-mail: ",n.a.createElement("span",{style:{fontWeight:"bold"}},n.a.createElement("a",{style:{color:"black",textDecoration:"none"},"aria-label":"mail-to",className:"mail-to",href:"mailto:mirza@kravmagatuzla.ba",target:"_blank",rel:"noopener noreferrer"},"mirza@kravmagatuzla.ba"))),n.a.createElement("li",null,"Preko kontakt forme"),n.a.createElement("li",null,n.a.createElement("span",{style:{fontWeight:"bold"}},n.a.createElement("a",{style:{color:"black",textDecoration:"none"},"aria-label":"mail-to",className:"mail-to",href:"https://www.facebook.com/408588132922283/",target:"_blank",rel:"noopener noreferrer"},"Facebook"))," ili ",n.a.createElement("span",{style:{fontWeight:"bold"}},n.a.createElement("a",{style:{color:"black",textDecoration:"none"},"aria-label":"mail-to",className:"mail-to",href:"https://www.instagram.com/krav_maga_tuzla/",target:"_blank",rel:"noopener noreferrer"},"Instagram")))),n.a.createElement("iframe",{title:"facebook krav maga tuzla",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FSports-Team%2FKRAV-MAGA-IKMI-Tuzla-408588132922283%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=372257280226790",width:"300",height:"500",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})),n.a.createElement("div",{className:"kontakt-form"},n.a.createElement("form",{onSubmit:this.sendForm},n.a.createElement("label",{className:"five-k-error",style:t},"Ime i Prezime*"),n.a.createElement("input",{onBlur:this.formValidation,required:!0,type:"text",name:"imeiprezime"}),n.a.createElement("label",{className:"five-k-error",style:a},"E-Mail*"),n.a.createElement("input",{onBlur:this.formValidation,required:!0,type:"text",name:"email"}),n.a.createElement("label",{className:"five-k-error",style:r},"Naslov*"),n.a.createElement("input",{onBlur:this.formValidation,required:!0,type:"text",name:"subject"}),n.a.createElement("label",{className:"five-k-error",style:e},"Poruka*"),n.a.createElement("textarea",{onBlur:this.formValidation,required:!0,onKeyUp:this.countTextArea,name:"poruka",style:{margin:"0px",width:"100%"}}),n.a.createElement("label",{className:"five-k-error",style:e},n.a.createElement("span",null,this.state.textarea),"/5000"),n.a.createElement("input",{className:"submit-button",type:"submit",value:"Posalji"}))))},t}(r.Component));t.default=function(e){e.data;return n.a.createElement("div",null,n.a.createElement(i.a,{store:s.a},n.a.createElement(o.a,{title:"Kontakt",location:"Krav Maga Tuzla | Kontakt"},n.a.createElement(f,null))))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(151);var c=n.a.createContext({}),m=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,a){var r;e.exports=(r=a(154))&&r.default||r},154:function(e,t,a){"use strict";a.r(t);a(35);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(56),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){"use strict";var r=a(158),n=a(0),o=a.n(n),i=a(169),s=a(150);t.a=function(e){var t=e.pathname;return o.a.createElement(s.b,{query:"4287285486",render:function(e){var a=e.site.siteMetadata,r=a.siteUrl,n=a.title2;return a.facebook,a.instagram,o.a.createElement(i.Helmet,null,o.a.createElement("html",{lang:"ba"}),o.a.createElement("link",{rel:"canonical",href:""+r+t}),o.a.createElement("link",{rel:"icon",href:"/favicon.png"}),o.a.createElement("meta",{name:"docsearch:version",content:"2.0"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"}),o.a.createElement("meta",{property:"og:url",content:""+r+t}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:locale",content:"ba"}),o.a.createElement("meta",{property:"og:site_name",content:n}),o.a.createElement("meta",{property:"og:title",content:"Krav Maga Tuzla"}),o.a.createElement("meta",{property:"og:image",content:r+"/slideshow/0-small.jpg"}),o.a.createElement("meta",{property:"og:image:width",content:"672"}),o.a.createElement("meta",{property:"og:image:height",content:"504"}))},data:r})}},156:function(e,t,a){var r=a(5),n=a(20),o=a(37),i=a(157),s=a(25).f;e.exports=function(e){var t=n.Symbol||(n.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:i.f(e)})}},157:function(e,t,a){t.f=a(3)},158:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://kravmagatuzla.ba/",title2:"Krav Maga Tuzla",facebook:"https://www.facebook.com/408588132922283",instagram:"https://www.instagram.com/krav_maga_tuzla/"}}}}},160:function(e,t,a){"use strict";var r,n=a(161),o=(a(76),a(35),{slideshow:{number:0,ready:!1,zIndex:1e4},information:{place:"kravMagaTuzla"},large:{status:!1,post:!1},instagramPostRegistration:{register:[],len:0},editorPosts:{posts:[],length:0,per_page:5,current_page:1,ran:!1,last:!1,total:0,search:!1}}),i=function(e,t){switch(void 0===e&&(e=o),t.type){case"REGISTER_INSTAGRAM_ITEM":var a=e.instagramPostRegistration.register.slice();return a.push(t.post),Object.assign({},e,{instagramPostRegistration:{register:a,len:a.length}});case"TOGGLE_SLIDESHOW":return Object.assign({},e,{large:{status:t.status,post:t.id}});case"UPDATE_INFORMATION":return Object.assign({},e,{information:{place:t.place}});case"UPDATE_NUMBER":return Object.assign({},e,{slideshow:Object.assign({},e.slideshow,{number:t.number})});case"SLIDESHOW_LOADED":return Object.assign({},e,{slideshow:Object.assign({},e.slideshow,{ready:!0})});case"ZINDEX":return Object.assign({},e,{slideshow:Object.assign({},e.slideshow,{zIndex:-1e4})});case"GET_POSTS":return console.log(t),Object.assign({},e,{editorPosts:{posts:t.posts,length:t.posts.length,current_page:t.current_page,per_page:e.editorPosts.per_page,ran:t.ran,total:t.total,search:t.search}});case"REMOVE_IMAGE":var r=e.editorPosts.posts.map(function(e,a){return e.id===t.galleryId?Object.assign({},e,{items:e.items.filter(function(e){return e.id!==t.id})}):e});return Object.assign({},e,{editorPosts:{posts:r,length:r.length}});case"REMOVE_GALLERY":var n=e.editorPosts.posts.filter(function(e){return e.id!==t.id});return Object.assign({},e,{editorPosts:{posts:n,length:n.length}});case"EDIT_TITLE":var i=e.editorPosts.posts.map(function(e){var a=e;return e.id===t.id&&(a.title=t.title),a});return Object.assign({},e,{editorPosts:{posts:i,length:i.length}});case"EDIT_DESCRIPTION":var s=e.editorPosts.posts.map(function(e){var a=e;return e.id===t.id&&(a.description=t.description),a});return Object.assign({},e,{editorPosts:{posts:s,length:s.length}});case"ADD_IMAGE":console.log(t);var l=e.editorPosts.posts.map(function(e){var a=e;return e.id===t.id&&a.items.push(t.item),a});return console.log(l),Object.assign({},e,{editorPosts:Object.assign({},e.edtiroPosts,{posts:l,length:l.length})});default:return e}},s="undefined"!=typeof window&&window;s&&(r=Object(n.b)(i,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),s||(r=Object(n.b)(i));t.a=r},163:function(e,t,a){a(156)("asyncIterator")},164:function(e,t,a){"use strict";var r=a(5),n=a(26),o=a(19),i=a(12),s=a(14),l=a(165).KEY,c=a(18),m=a(40),u=a(41),d=a(38),p=a(3),f=a(157),h=a(156),g=a(166),b=a(79),E=a(6),v=a(11),y=a(36),w=a(77),k=a(55),N=a(78),_=a(167),S=a(162),j=a(25),O=a(39),I=S.f,x=j.f,P=_.f,z=r.Symbol,T=r.JSON,A=T&&T.stringify,D=p("_hidden"),C=p("toPrimitive"),F={}.propertyIsEnumerable,M=m("symbol-registry"),R=m("symbols"),K=m("op-symbols"),L=Object.prototype,V="function"==typeof z,W=r.QObject,q=!W||!W.prototype||!W.prototype.findChild,U=o&&c(function(){return 7!=N(x({},"a",{get:function(){return x(this,"a",{value:7}).a}})).a})?function(e,t,a){var r=I(L,t);r&&delete L[t],x(e,t,a),r&&e!==L&&x(L,t,r)}:x,G=function(e){var t=R[e]=N(z.prototype);return t._k=e,t},B=V&&"symbol"==typeof z.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof z},X=function(e,t,a){return e===L&&X(K,t,a),E(e),t=w(t,!0),E(a),n(R,t)?(a.enumerable?(n(e,D)&&e[D][t]&&(e[D][t]=!1),a=N(a,{enumerable:k(0,!1)})):(n(e,D)||x(e,D,k(1,{})),e[D][t]=!0),U(e,t,a)):x(e,t,a)},J=function(e,t){E(e);for(var a,r=g(t=y(t)),n=0,o=r.length;o>n;)X(e,a=r[n++],t[a]);return e},Z=function(e){var t=F.call(this,e=w(e,!0));return!(this===L&&n(R,e)&&!n(K,e))&&(!(t||!n(this,e)||!n(R,e)||n(this,D)&&this[D][e])||t)},H=function(e,t){if(e=y(e),t=w(t,!0),e!==L||!n(R,t)||n(K,t)){var a=I(e,t);return!a||!n(R,t)||n(e,D)&&e[D][t]||(a.enumerable=!0),a}},Y=function(e){for(var t,a=P(y(e)),r=[],o=0;a.length>o;)n(R,t=a[o++])||t==D||t==l||r.push(t);return r},Q=function(e){for(var t,a=e===L,r=P(a?K:y(e)),o=[],i=0;r.length>i;)!n(R,t=r[i++])||a&&!n(L,t)||o.push(R[t]);return o};V||(s((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(a){this===L&&t.call(K,a),n(this,D)&&n(this[D],e)&&(this[D][e]=!1),U(this,e,k(1,a))};return o&&q&&U(L,e,{configurable:!0,set:t}),G(e)}).prototype,"toString",function(){return this._k}),S.f=H,j.f=X,a(159).f=_.f=Y,a(74).f=Z,a(75).f=Q,o&&!a(37)&&s(L,"propertyIsEnumerable",Z,!0),f.f=function(e){return G(p(e))}),i(i.G+i.W+i.F*!V,{Symbol:z});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)p($[ee++]);for(var te=O(p.store),ae=0;te.length>ae;)h(te[ae++]);i(i.S+i.F*!V,"Symbol",{for:function(e){return n(M,e+="")?M[e]:M[e]=z(e)},keyFor:function(e){if(!B(e))throw TypeError(e+" is not a symbol!");for(var t in M)if(M[t]===e)return t},useSetter:function(){q=!0},useSimple:function(){q=!1}}),i(i.S+i.F*!V,"Object",{create:function(e,t){return void 0===t?N(e):J(N(e),t)},defineProperty:X,defineProperties:J,getOwnPropertyDescriptor:H,getOwnPropertyNames:Y,getOwnPropertySymbols:Q}),T&&i(i.S+i.F*(!V||c(function(){var e=z();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){for(var t,a,r=[e],n=1;arguments.length>n;)r.push(arguments[n++]);if(a=t=r[1],(v(t)||void 0!==e)&&!B(e))return b(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!B(t))return t}),r[1]=t,A.apply(T,r)}}),z.prototype[C]||a(13)(z.prototype,C,z.prototype.valueOf),u(z,"Symbol"),u(Math,"Math",!0),u(r.JSON,"JSON",!0)},165:function(e,t,a){var r=a(38)("meta"),n=a(11),o=a(26),i=a(25).f,s=0,l=Object.isExtensible||function(){return!0},c=!a(18)(function(){return l(Object.preventExtensions({}))}),m=function(e){i(e,r,{value:{i:"O"+ ++s,w:{}}})},u=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!l(e))return"F";if(!t)return"E";m(e)}return e[r].i},getWeak:function(e,t){if(!o(e,r)){if(!l(e))return!0;if(!t)return!1;m(e)}return e[r].w},onFreeze:function(e){return c&&u.NEED&&l(e)&&!o(e,r)&&m(e),e}}},166:function(e,t,a){var r=a(39),n=a(75),o=a(74);e.exports=function(e){var t=r(e),a=n.f;if(a)for(var i,s=a(e),l=o.f,c=0;s.length>c;)l.call(e,i=s[c++])&&t.push(i);return t}},167:function(e,t,a){var r=a(36),n=a(159).f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return n(e)}catch(t){return i.slice()}}(e):n(r(e))}},168:function(e,t,a){"use strict";a(170),a(163),a(164),a(80);var r=a(34),n=a.n(r),o=a(7),i=a.n(o),s=a(0),l=a.n(s),c=(a(149),a(150)),m=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",null,"Made with ",l.a.createElement("a",{"aria-label":"gatsby",target:"__blank",rel:"noopener noreferrer",href:"https://www.gatsbyjs.org/"},"Gatsby.js")),l.a.createElement("span",{className:"seperator"},"|"),l.a.createElement("span",null,l.a.createElement("a",{"aria-label":"privacy-policy",className:"privacy-policy",target:"__blank",rel:"noopener noreferrer",href:"https://drive.google.com/open?id=17hPzTo3gtvwgsYRuXoLlFF5KCNcIh6gG"},"Privacy Policy")),l.a.createElement("span",{className:"seperator"},"|"),l.a.createElement("span",null,"+387 61 998 742"),l.a.createElement("span",{className:"seperator"},"|"),l.a.createElement("span",null,l.a.createElement("a",{"aria-label":"mail-to",className:"mail-to",href:"mailto:mirza@kravmagatuzla.ba",target:"_top"},"mirza@kravmagatuzla.ba")),l.a.createElement("div",{className:"social-media-footer"},l.a.createElement("a",{title:"Facebook","aria-label":"facebook",className:"facebook",href:"https://www.facebook.com/408588132922283/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook-square"}))," ",l.a.createElement("a",{title:"krav_maga_tuzla","aria-label":"instagram",className:"instagram",href:"https://www.instagram.com/krav_maga_tuzla/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-instagram"}))))},u=a(152),d=a(155),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={images:["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],number:!1,text:!1,ready:!1,innerWidth:!1},a.changePicture=a.changePicture.bind(n()(a)),a.dotContainer=l.a.createRef(),a.startInterval=a.startInterval.bind(n()(a)),a.showComponent=a.showComponent.bind(n()(a)),a}i()(t,e);var a=t.prototype;return a.showComponent=function(){this.state.ready||this.setState({ready:!0})},a.changePicture=function(e){var t=e.target;if(clearInterval(this.intervalId),this.dotContainer.current){var a=this.dotContainer.current.children,r=Array.isArray(a),n=0;for(a=r?a:a[Symbol.iterator]();;){var o;if(r){if(n>=a.length)break;o=a[n++]}else{if((n=a.next()).done)break;o=n.value}var i=o;Number(i.id)===Number(t.id)?i.className="active-dot":i.className="dot"}}this.props.dispatch({type:"UPDATE_NUMBER",number:Number(t.id)}),this.startInterval()},a.startInterval=function(){var e=this;this.intervalId=setInterval(function(){var t=e.state.number+1;if(e.state.number===e.state.images.length-1&&(t=0),e.props.dispatch({type:"UPDATE_NUMBER",number:t}),e.dotContainer.current){var a=e.dotContainer.current.children,r=Array.isArray(a),n=0;for(a=r?a:a[Symbol.iterator]();;){var o;if(r){if(n>=a.length)break;o=a[n++]}else{if((n=a.next()).done)break;o=n.value}var i=o,s=t;Number(i.id)===s?i.className="active-dot":i.className="dot"}}e.setState({number:t})},5e3)},t.getDerivedStateFromProps=function(e,t){return t.number!==e.number||t.ready!==e.ready||t.zIndex!==e.zIndex?{number:e.number,ready:e.ready,zIndex:e.zIndex}:null},a.componentDidMount=function(){if(document.title=this.props.location,this.startInterval(),this.dotContainer.current){var e=this.dotContainer.current.children,t=Array.isArray(e),a=0;for(e=t?e:e[Symbol.iterator]();;){var r;if(t){if(a>=e.length)break;r=e[a++]}else{if((a=e.next()).done)break;r=a.value}var n=r,o=this.state.number;Number(n.id)===o?n.className="active-dot":n.className="dot"}}this.setState({text:!0,innerWidth:window.innerWidth})},a.componentWillUnmount=function(){clearInterval(this.intervalId)},a.componentDidUpdate=function(){var e=this;this.state.ready&&1e4===this.state.zIndex&&window.setTimeout(function(){e.props.dispatch({type:"ZINDEX"})},1e3)},a.render=function(){var e,t,a,r,n,o,i=this,s="flex",u=1;return this.state.innerWidth&&(o=this.state.innerWidth<501?l.a.createElement("img",{alt:"/slideshow/0-small.jpg",src:"/slideshow/0-small.jpg",onLoad:function(){i.props.dispatch({type:"SLIDESHOW_LOADED"})},style:{width:"0px",height:"0px",display:"none"}}):l.a.createElement("img",{alt:"/slideshow/0-small.jpg",src:"/slideshow/0.jpg",onLoad:function(){i.props.dispatch({type:"SLIDESHOW_LOADED"})},style:{width:"0px",height:"0px",display:"none"}})),this.state.ready&&(r={opacity:1},u=0,-1e4===this.state.zIndex&&(s="none")),this.state.text&&(e={transform:"translateY(0px)",opacity:1}),"Termini"===this.props.title&&{backgroundColor:"white",color:"black"},"Kontakt"===this.props.title&&(t={backgroundColor:"white",color:"black"}),"Informacije"===this.props.title&&(a={backgroundColor:"white",color:"black"}),n=l.a.createElement(l.a.Fragment,null,o,l.a.createElement(d.a,null),l.a.createElement("div",{className:"logo-container"},l.a.createElement("div",{className:"logo-cont"},l.a.createElement(c.a,{className:"logo",to:"/"},"KRAV MAGA TUZLA")),l.a.createElement("nav",null,l.a.createElement(c.a,{style:a,to:"/informacije"},"Info"),l.a.createElement(c.a,{style:t,to:"/contact"},"Kontakt"))),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"introduction"},l.a.createElement("div",{className:"welcome-text"},l.a.createElement("span",{style:e,className:"slogan"},l.a.createElement("span",{style:e,className:"small-logo"},"Krav Maga IKMI Tuzla"),this.props.title),l.a.createElement("div",{className:"social-media"},l.a.createElement("a",{title:"Facebook","aria-label":"facebook",className:"facebook",href:"https://www.facebook.com/408588132922283/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook-square"}))," ",l.a.createElement("a",{"aria-label":"instagram",className:"instagram",title:"krav_maga_tuzla",href:"https://www.instagram.com/krav_maga_tuzla/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-instagram"})))," ")),l.a.createElement("div",{className:"slideshow"},l.a.createElement("div",{style:r,className:"slideshow-container"},this.state.images.map(function(e,t){var a,r=e;return i.state.number===t&&(a=1),i.state.number!==t&&(a=0),l.a.createElement("div",{className:"slideshow-image slideshow-image"+t,key:r,style:{opacity:a}})})),l.a.createElement("div",{ref:this.dotContainer,className:"dots"},l.a.createElement("span",{onClick:this.changePicture,id:"0",className:"active-dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"1",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"2",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"3",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"4",className:"dot"}),l.a.createElement("span",{onClick:this.changePicture,id:"5",className:"dot"})),l.a.createElement("div",{className:"social-media-small"},l.a.createElement("a",{title:"facebook","aria-label":"facebook",className:"facebook",href:"https://www.facebook.com/408588132922283/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook-square"}))," ",l.a.createElement("a",{title:"krav_maga_tuzla","aria-label":"instagram",className:"instagram",href:"https://www.instagram.com/krav_maga_tuzla/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-instagram"}))))),this.props.children,l.a.createElement(m,null),l.a.createElement("div",{style:{background:"linear-gradient(65deg, rgba(14,14,17,1) 0%, rgba(17,15,15,1) 49%, rgba(10,9,9,1) 100%)",opacity:u,transitionDuration:"1s",transitionProperty:"opacity",textAling:"center",justifyContent:"center",position:"fixed",top:"0px",bottom:"0px",right:"0px",left:"0px",backgroundColor:"black",zIndex:this.state.zIndex,display:s}},l.a.createElement("div",{style:{position:"relative",top:"40%"},className:"lds-facebook"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))),l.a.createElement(l.a.Fragment,null,n)},t}(s.Component),f=Object(u.b)(function(e){return{number:e.slideshow.number,ready:e.slideshow.ready,zIndex:e.slideshow.zIndex}})(p);t.a=f}}]);
//# sourceMappingURL=component---src-pages-contact-js-dad5e8fae93767a6acc7.js.map