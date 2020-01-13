(this["webpackJsonpcharades-app"]=this["webpackJsonpcharades-app"]||[]).push([[0],{48:function(n,e,t){n.exports=t(94)},88:function(n,e){},94:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(40),i=t(4),o=t(3),c=t(2);function u(){var n=Object(o.a)([""]);return u=function(){return n},n}var l=c.default.div(u()),f=function(n){var e=n.children;return r.createElement(l,null,e)},d=t(43);function s(){var n=Object(o.a)(["\n  ",'\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  :root {\n    --main-font: "Roboto", sans-serif;\n    --title-font: "Roboto", sans-serif;\n    --primary: #2B50EF;\n    --secondary: #fff;\n    --warning: #FE2B29;\n    --highlight: #F9F6DF;\n    --text-color: #848B97;\n    --text-color--secondary: #C4C9D5;\n    --title-color: #404346;\n    --link-active: #03a9f4;\n    --link-hover: #2196f3;\n    --border-color: #E3E4EC;\n    --body-bg: #F5F6FA;\n    --block-bg: #fff;\n    --red: #CD4040;\n    --green: #64CA95;\n    --blue: #157efb;\n    --box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);\n  }\n\n  body,\n  html {\n    font-family: var(--main-font);\n    color: var(--text-color);\n    background-color: var(--body-bg);\n    font-size: 62.5%;\n    line-height: 1.4;\n    font-weight: 400;\n    min-width: 320px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  section {\n    font-size: 1.6rem;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4 {\n    font-family: var(--main-font);\n    line-height: 1.1;\n    color: var(--text-color);\n  }\n\n  p {\n    font-family: var(--text-font);\n  }\n\n  button {\n    border: 0;\n  }\n\n  input {\n    border: 0;\n  }\n\n  a {\n    border: 0;\n    transition: 0.2s;\n    text-decoration: none;\n    color: var(--black);\n  }\n\n  a:visited,\n  a:focus,\n  a:active,\n  a:hover {\n    outline: 0 none;\n  }\n\n  img {\n    border: 0;\n  }\n\n  menu,\n  ol,\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  section,\n  header,\n  footer {\n    font-size: 1.6rem;\n  }\n \n  \n']);return s=function(){return n},n}var m=Object(c.createGlobalStyle)(s(),d.normalize);function b(){var n=Object(o.a)(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.35);\n  opacity: 0;\n  z-index: -1;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n\n  &[aria-hidden="true"] {\n    opacity: 1;\n    z-index: 999;\n  }\n']);return b=function(){return n},n}var p=c.default.div(b()),v=function(n){return r.createElement(p,n)};function g(){var n=Object(o.a)(["\n  width: 100%;\n  text-align: center;\n  font-size: 1.2rem;\n  line-height: 1;\n  margin-top: 12px;\n"]);return g=function(){return n},n}var h=function(n){var e=n.store,t=n.config,a=n.className,o=t.label,c=t.name,u=t.placeholder,l=t.autofocus,f=t.isDisabled,d=void 0!==f&&f,s=e.$value,m=e.changed,b={autoFocus:l,value:Object(i.a)(s),type:c,name:c,placeholder:u,onChange:m};return r.createElement("div",{className:a},o&&r.createElement("label",null,o),r.createElement("input",Object.assign({},b,{disabled:d,autoComplete:"off"})))};c.default.div(g());function x(){var n=Object(o.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-height: 230px;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--block-bg);\n  display: flex;\n  align-items: center;\n  min-height: 8vh;\n  transition: 0.3s;\n"]);return x=function(){return n},n}var j=c.default.form(x()),O=function(n){var e=n.handleSubmit,t=n.children;return r.createElement(j,{onSubmit:function(n){n.preventDefault(),e&&e()}},t)};function y(){var n=Object(o.a)(["\n  svg {\n    width: 80px;\n    height: 80px;\n    transform: rotateY(-180deg) rotateZ(-90deg);\n  }\n\n  circle {\n    stroke-dasharray: ","px;\n    stroke-linecap: round;\n    stroke-width: 6px;\n    stroke: var(--green);\n    fill: none;\n    transition: 0.3s all;\n  }\n\n  span {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n  }\n"]);return y=function(){return n},n}var E=c.default.div(y(),226),w=t(11);function k(){var n=Object(o.a)(["\n  position: absolute;\n  font-size: 1.6rem;\n  margin: auto;\n  height: calc(100vh - 128px);\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  padding: 0 36px;\n  text-align: center;\n\n  span {\n    width: 100%;\n    text-align: center;\n    font-size: 3.6rem;\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(o.a)(["\n  width: 70%;\n  padding: 6px 30px 7px 0;\n  font-size: 1.4rem;\n  color: #000;\n"]);return S=function(){return n},n}function z(){var n=Object(o.a)(["\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  border-radius: 3px;\n  background-color: var(--body-bg);\n  letter-spacing: -2px;\n  margin-right: 12px;\n"]);return z=function(){return n},n}function N(){var n=Object(o.a)(["\n  display: flex;\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 0;\n"]);return N=function(){return n},n}function R(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n  height: calc(100vh - 128px);\n  padding-top: 18px;\n  padding-bottom: 18px;\n  width: 100%;\n  overflow-y: auto;\n"]);return R=function(){return n},n}function T(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n"]);return T=function(){return n},n}var C=c.default.div(T()),D=c.default.div(R()),F=c.default.div(N()),L=c.default.div(z()),$=c.default.div(S()),I=c.default.div(k()),_=function(n){var e=n.name,t=(n.ts,n.msg),a=r.useState(!1),i=Object(w.a)(a,2),o=i[0],c=i[1];return r.useEffect((function(){c(!0)}),[]),r.createElement(F,{"aria-hidden":o},r.createElement(L,null,e),r.createElement($,null,t))},U=function(){return r.createElement(I,null,r.createElement("span",{role:"img","aria-label":"No messages"},"\ud83d\ude42"),"\u0412 \u0447\u0430\u0442\u0435 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439, \u0431\u0443\u0434\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u043c!")},A=function(n){var e=n.history,t=n.children;return r.createElement(C,null,r.createElement(D,null,e.length>0?e.map((function(n,e){return r.createElement(_,Object.assign({key:e},n))})):r.createElement(U,null)),t)};function G(){var n=Object(o.a)(["\n  width: 100%;\n  min-height: 100vh;\n"]);return G=function(){return n},n}function P(){var n=Object(o.a)(["\n  display: flex;\n"]);return P=function(){return n},n}var W=c.default.div(P()),V=c.default.canvas(G()),Y=t(1),B=t(5),H=Object(Y.f)(),J=(Object(Y.f)(),Object(Y.f)()),M=Object(Y.g)([]);M.on(J,(function(n,e){return e})),M.on(H,(function(n,e){return[e].concat(Object(B.a)(n))}));var X=Object(Y.f)(),Z=Object(Y.f)(),q=Object(Y.f)(),K=Object(Y.g)([]),Q=Object(Y.g)([]);K.on(X,(function(n,e){return e})),Q.on(Z,(function(n,e){if(!n.includes(e))return[].concat(Object(B.a)(n),[e])})),Z.watch(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,t=0;return function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];clearTimeout(t),t=setTimeout((function(){return n.apply(void 0,a)}),e)}}(q,1e3)),Q.on(q,(function(n,e){return n.filter((function(n){return n!==e}))}));var nn=Object(Y.f)(),en=Object(Y.g)(0);en.on(nn,(function(n,e){return e}));t(18);var tn=t(59)("https://sharades-server.herokuapp.com"),rn=Object(Y.e)({handler:function(n){tn.emit("USER_MESSAGE",n)}}),an=Object(Y.e)({handler:function(){tn.emit("USER_TYPING")}}),on=Object(Y.e)({handler:function(n){tn.emit("USER_DRAWNING",n)}});tn.on("USER_MESSAGE",(function(n){H(n)})),tn.on("USER_TYPING",(function(n){Z(n)})),tn.on("USER_DRAWNING",(function(n){return cn(n)})),tn.on("ROUND_COUNTDOWN",(function(n){return nn(n)})),tn.on("USERS_ONLINE",(function(n){return X(n)})),tn.on("CHAT_HISTORY",(function(n){J(n)}));var cn=Object(Y.e)(),un=Object(Y.g)({x1:0,y1:0,x2:0,y2:0});un.on(cn,(function(n,e){return e})),cn.use(on);var ln=window.devicePixelRatio,fn=function(n,e,t){var r=t.getContext("2d");r&&(r.strokeStyle="#2b50ef",r.lineJoin="round",r.lineWidth=12,r.beginPath(),r.moveTo(n.x*ln,n.y*ln),r.lineTo(e.x*ln,e.y*ln),r.closePath(),r.stroke())},dn=function(n,e){return{x:n.pageX-e.offsetLeft,y:n.pageY-e.offsetTop}},sn=function(){var n=r.useRef(null),e=Object(i.a)(un),t=r.useState(!1),a=Object(w.a)(t,2),o=a[0],c=a[1],u=r.useState(null),l=Object(w.a)(u,2),f=l[0],d=l[1];r.useEffect((function(){var t=n.current;t&&fn({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},t)}),[e]),r.useEffect((function(){var e=n.current;e&&(e.width=e.scrollWidth*ln,e.height=e.scrollHeight*ln)}),[]);var s=r.useCallback((function(e){var t=n.current;if(t){var r=dn(e,t);r&&(c(!0),d(r))}}),[]);r.useEffect((function(){var e=n.current;if(e)return e.addEventListener("mousedown",s),function(){e.removeEventListener("mousedown",s)}}),[s]);var m=r.useCallback((function(e){var t=n.current;if(t&&o){var r=dn(e,t);f&&r&&(fn(f,r,t),cn({x1:f.x,y1:f.y,x2:r.x,y2:r.y}),d(r))}}),[o,f]);r.useEffect((function(){var e=n.current;if(e)return e.addEventListener("mousemove",m),function(){e.removeEventListener("mousemove",m)}}),[m]);var b=r.useCallback((function(){c(!1),d(null)}),[]);return r.useEffect((function(){var e=n.current;if(e)return e.addEventListener("mouseup",b),e.addEventListener("mouseleave",b),function(){e.removeEventListener("mouseup",b),e.removeEventListener("mouseleave",b)}}),[b]),r.createElement(W,null,r.createElement(V,{ref:n}))};function mn(){var n=Object(o.a)(['\n  position: relative;\n\n  &:before {\n    content: "\ud83d\udc51";\n    position: absolute;\n    top: -17px;\n    font-size: 3rem;\n    left: auto;\n    right: auto;\n    margin: 0 auto;\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    bottom: -16px;\n    width: 100%;\n    height: 1px;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n\n  width: 5.6rem;\n  height: 5.6rem;\n  font-size: 3.6rem;\n  margin-bottom: 24px;\n']);return mn=function(){return n},n}function bn(){var n=Object(o.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3.6rem;\n  height: 3.6rem;\n  background: rgba(0, 0, 0, 0.1);\n  margin: 0.6rem;\n  border-radius: 3px;\n  font-size: 2.4rem;\n  letter-spacing: -2px;\n  position: relative;\n\n  &:before {\n    content: "\ud83d\udcac";\n    position: absolute;\n    top: -8px;\n    right: -12px;\n    font-size: 1.6rem;\n    transition: 0.1s;\n  }\n\n  &[data-typing="false"] {\n    &:before {\n      opacity: 0;\n    }\n  }\n\n  &[data-typing="true"] {\n    &:before {\n      opacity: 1;\n    }\n  }\n']);return bn=function(){return n},n}function pn(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 12px;\n"]);return pn=function(){return n},n}var vn=c.default.div(pn()),gn=c.default.div(bn()),hn=Object(c.default)(gn)(mn()),xn=function(n){var e=n.users,t=n.typing,a=n.host;return r.createElement(vn,null,r.createElement(hn,null,a),e.map((function(n,e){var a=n.name,i=n.id;return r.createElement(gn,{key:e,"data-typing":t.includes(i)},a)})))};function jn(){var n=Object(o.a)(['\n  margin-top: 24px;\n  font-size: 1.6rem;\n  line-height: 3.6rem;\n  background-color: var(--primary);\n  color: #fff;\n  padding: 0 24px;\n  border-radius: 3px;\n\n  &[data-disabled="true"] {\n    opacity: 0.7;\n  }\n']);return jn=function(){return n},n}function On(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: var(--block-bg);\n  border-radius: 6px;\n  padding: 24px;\n  max-width: 350px;\n"]);return On=function(){return n},n}var yn=c.default.form(On()),En=c.default.button(jn()),wn=function(n){var e=n.children,t=n.isError,a=void 0!==t&&t,i=n.handleSubmit,o=n.isLoading,c=void 0!==o&&o;return r.createElement(yn,{onSubmit:function(n){n.preventDefault(),i&&i(n)},"aria-disabled":c},e,r.createElement(En,{type:"submit",name:"submit","data-disabled":a},"\u0412\u043e\u0439\u0442\u0438"))};function kn(){var n=Object(o.a)(["\n  position: absolute;\n  bottom: 36px;\n  left: 36px;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(o.a)(['\n  font-size: 1.4rem;\n  line-height: 1em;\n  min-height: 5vh;\n  background-color: var(--primary);\n  color: #fff;\n  padding: 0 12px;\n  border-radius: 3px;\n  position: absolute;\n  right: 12px;\n  transition: 0.3s;\n\n  &[aria-disabled="true"] {\n    opacity: 0.7;\n  }\n\n  &[aria-disabled="false"] {\n    opacity: 1;\n  }\n']);return Sn=function(){return n},n}function zn(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3.6rem;\n  height: 3.6rem;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 3px;\n  font-size: 2.4rem;\n  letter-spacing: -2px;\n  position: absolute;\n  z-index: 100;\n  top: 12px;\n  left: 12px;\n"]);return zn=function(){return n},n}function Nn(){var n=Object(o.a)(["\n  font-size: 1.6rem;\n  line-height: 8vh;\n  padding: 0 24px 0 60px;\n  width: 100%;\n"]);return Nn=function(){return n},n}function Rn(){var n=Object(o.a)(["\n  width: 96px;\n  height: calc(100vh - 124px);\n  background-color: var(--primary);\n  position: absolute;\n  right: 0;\n  margin: 62px 36px;\n  border-radius: 0 5px 5px 0;\n  box-shadow: var(--box-shadow);\n"]);return Rn=function(){return n},n}function Tn(){var n=Object(o.a)(["\n  width: 100%;\n  max-width: 320px;\n  height: calc(100vh - 72px);\n  background-color: var(--block-bg);\n  position: absolute;\n  right: 96px;\n  top: 0;\n  bottom: 0;\n  margin: 36px;\n  border-radius: 5px;\n  box-shadow: var(--box-shadow);\n  z-index: 100;\n"]);return Tn=function(){return n},n}function Cn(){var n=Object(o.a)(["\n  width: 100%;\n  min-height: 100vh;\n  position: relative;\n"]);return Cn=function(){return n},n}function Dn(){var n=Object(o.a)(["\n  display: flex;\n"]);return Dn=function(){return n},n}var Fn=c.default.div(Dn()),Ln=c.default.main(Cn()),$n=c.default.aside(Tn()),In=c.default.div(Rn()),_n=Object(c.default)(h)(Nn()),Un=c.default.div(zn()),An=c.default.input(Sn()),Gn=Object(c.default)((function(n){var e=n.className,t=n.time;return r.createElement(E,{time:t,className:e},r.createElement("span",null,t),r.createElement("svg",null,r.createElement("circle",{r:"36",cx:"40",cy:"40",style:{strokeDashoffset:"-".concat(2.26*t,"px")}})))}))(kn()),Pn=Object(Y.e)();Pn.use((function(n){return e={name:n},void tn.emit("INIT_SESSION",e);var e}));var Wn=Object(Y.g)({name:null});Wn.on(Pn,(function(n,e){return{name:e}}));var Vn=t(8),Yn=t(45),Bn=function(n){var e=n.name,t=n.length,r=n.initialValue,a=void 0===r?"":r,i=n.validator,o=n.handleReset,c=Object(Y.f)("".concat(e,"Changed")),u=Object(Y.g)(a,{name:"".concat(e,"Store")}),l=i?u.map(i):Object(Y.g)(null);return u.on(c,(function(n,e){return e.currentTarget.value.substring(0,t)})),o&&u.on(o,(function(){return""})),{name:e,$value:u,$error:l,changed:c}},Hn=function(n){var e=n.name,t=n.fields,r=n.validator||Jn(t);return{name:e,$values:Object(Y.b)(t.reduce((function(n,e){var t=e.$value,r=e.name;return Object(Yn.a)({},n,{},Object(Vn.a)({},r,t))}),{})),$isValid:r}},Jn=function(n){var e=n.map((function(n){return n.$error}));return Object(Y.b)(e,(function(n){return n.every((function(n){return!n}))}))},Mn=Object(Y.f)(),Xn=Object(Y.f)(),Zn=Object(Y.f)(),qn=Object(Y.g)(0),Kn=Object(Y.g)(!0),Qn=Bn({name:"message",handleReset:Xn,validator:function(n){return n.length<1?"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435":null}}),ne=Hn({name:"messageForm",fields:[Qn]}),ee=function(n,e){var t=e.start,r=e.abort,a=void 0===r?Object(Y.f)("".concat(n,"Reset")):r,i=e.timeout,o=void 0===i?1e3:i,c=Object(Y.f)("".concat(n,"Tick")),u=Object(Y.e)("".concat(n,"Timer")).use((function(){return n=o,new Promise((function(e){setTimeout(e,n)}));var n})),l=Object(Y.g)(!0,{name:"".concat(n,"Working")});return l.on(u,(function(n,e){return e>0})).on(a,(function(){return!1})).on(t,(function(){return!0})),Object(Y.j)({source:t,filter:u.pending.map((function(n){return!n})),target:c}),Object(Y.i)({from:c,to:u}),Object(Y.j)({source:u.done.map((function(n){return n.params-1})),filter:l,target:c}),{tick:c}}("formSubmit",{start:Zn});qn.on(ee.tick,(function(n,e){return e})),Kn.on(ee.tick,(function(n,e){return e<=0}));var te=Object(Y.b)(Qn.$value,Wn,(function(n,e){return{name:e.name,ts:(new Date).getTime(),msg:n}})),re=Object(Y.b)(ne.$isValid,Kn,(function(n,e){return n&&e}));Object(Y.j)({source:Object(Y.l)(te,Mn),filter:re,target:rn}),Object(Y.i)({from:Qn.changed,to:an}),Object(Y.i)({from:rn,to:Xn}),Object(Y.i)({from:rn,to:Zn.prepend((function(){return 5}))});var ae=function(){var n=Object(i.a)(M),e=Object(i.a)(Wn),t=Object(i.a)(K),a=Object(i.a)(Q),o=Object(i.a)(qn),c=Object(i.a)(re),u=Object(i.a)(en);return r.createElement(Fn,null,r.createElement(Ln,null,r.createElement(Gn,{time:u}),r.createElement(sn,null)),r.createElement($n,null,r.createElement(A,{history:n},r.createElement(O,{handleSubmit:function(){Mn()}},r.createElement(Un,null,e.name),r.createElement(_n,{store:Qn,config:{name:"message",placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",autofocus:!0}}),r.createElement(An,{type:"submit",value:o<=0?"Send":"00: 0".concat(o),"aria-disabled":!c})))),r.createElement(In,null,r.createElement(xn,{users:t,typing:a,host:"\ud83d\ude31"})))},ie=t(91),oe=Object(Y.f)(),ce=Bn({name:"name",initialValue:ie.random({count:1})[0].character,validator:function(n){return/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(n)?null:"\u0422\u043e\u043b\u044c\u043a\u043e Emoji"}}),ue=Hn({name:"loginForm",fields:[ce]});function le(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n\n  input {\n    text-align: center;\n    width: 64px;\n    height: 64px;\n    font-size: 3.2rem;\n    line-height: 64px;\n    background-color: rgba(0, 0, 0, 0.05);\n    border-radius: 3px;\n    margin: 0 6px;\n    transition: 0.3s;\n    cursor: pointer;\n\n    &:hover {\n      background-color: var(--primary);\n    }\n  }\n\n  label {\n    width: 100%;\n    text-align: center;\n    font-size: 1.6rem;\n    margin-bottom: 12px;\n  }\n"]);return le=function(){return n},n}function fe(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--primary);\n"]);return fe=function(){return n},n}Object(Y.j)({source:Object(Y.l)(ce.$value,oe),filter:ue.$isValid,target:Pn});var de=c.default.div(fe()),se=Object(c.default)(h)(le()),me=function(){return r.createElement(de,null,r.createElement(v,{"aria-hidden":"true"},r.createElement(wn,{handleSubmit:oe,isLoading:!1},r.createElement(se,{store:ce,config:{label:"\u0418\u043c\u044f:",name:"name"}}))))};a.render(r.createElement((function(){var n=Object(i.a)(Wn);return r.createElement(r.Fragment,null,r.createElement(m,null),r.createElement(f,null,n.name?r.createElement(ae,null):r.createElement(me,null)))}),null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.aa052f6d.chunk.js.map