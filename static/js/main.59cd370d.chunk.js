(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),a=n(4),o=n(5),c=n(7),d=n(6),i=n(1),u=n(0),p=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pressedKey:"Nothing was pressed yet"},e.handleKeyboardEvent=function(t){console.log(t.key),e.setState({pressedKey:t.key})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyboardEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyboardEvent)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(u.jsx)("div",{className:"App",children:"Nothing was pressed yet"===e?Object(u.jsx)("p",{children:e}):Object(u.jsxs)("p",{children:["The last pressed key is"," ",'"'.concat(e,'"')]})})}}]),n}(i.Component);n(13);r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.59cd370d.chunk.js.map