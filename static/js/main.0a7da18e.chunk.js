(window.webpackJsonpd2d=window.webpackJsonpd2d||[]).push([[0],{144:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return doTransform}));var _converters__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(39),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(145),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__),ramda__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(147);function doTransform(sourceType,source,transform,destType){var input;try{input=_converters__WEBPACK_IMPORTED_MODULE_0__.b[sourceType](source)}catch(error){return{error:error,type:"error",phase:"input"}}var data=input;if(transform.trim().length)try{var _=lodash__WEBPACK_IMPORTED_MODULE_1___default.a,R=ramda__WEBPACK_IMPORTED_MODULE_2__;eval(transform)}catch(error){return{error:error,type:"error",phase:"transform"}}try{return _converters__WEBPACK_IMPORTED_MODULE_0__.a[destType](data)}catch(error){return{error:error,type:"error",phase:"output"}}}},157:function(e,t,r){e.exports=r(332)},162:function(e,t,r){},332:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(25),c=r.n(o),l=(r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(52)),u=r(68),s=r(39),i=r(144),m=r(338),_=r(50),d=r(96),p=function(e){var t=e.value,r=e.options,a=e.onChange,o=e.style,c=function(e,t){var r=t.name;return r&&a(r)};return n.a.createElement(m.a,{fluid:!0,size:"mini",style:o},r.map((function(e){return n.a.createElement(m.a.Item,{name:e,active:t===e,onClick:c})})))},f=function(e){var t=e.sourceType,r=e.source,a=e.onChangeSource,o=e.style;return n.a.createElement("div",{className:"codebox-wrapper",style:o},n.a.createElement(u.Controlled,{className:"code-editor",value:r,options:{mode:t,theme:"solarized light",lineNumbers:!0,placeholder:"Paste or type in ".concat(t," data here.")},onBeforeChange:function(e,t,r){return a(r)}}))},E="\n// Feel free to modify `data` using JavaScript here.\n// * Lodash is available as `_`\n// * Ramda is available as `R`\n".trim(),h=function(e){var t=e.transform,r=e.onChangeTransform,a=e.style;return n.a.createElement("div",{className:"codebox-wrapper",style:a},n.a.createElement(u.Controlled,{className:"code-editor",value:t,options:{mode:"javascript",theme:"solarized dark",lineNumbers:!0,placeholder:E},onBeforeChange:function(e,t,a){return r(a)}}))},v=function(e){var t=e.destType,r=e.result,a=e.style,o=null;switch(r.type){case"element":o=r.element;break;case"string":o=n.a.createElement(u.Controlled,{value:r.value,className:"code-editor",options:{mode:t,theme:"solarized light",lineNumbers:!0,readOnly:!0,placeholder:"Output will appear here in ".concat(t,".")},onBeforeChange:function(){}});break;case"error":o=n.a.createElement(_.a,{result:r})}return n.a.createElement("div",{className:"codebox-wrapper",style:a},o)},y=function(){var e=n.a.useState(""),t=Object(l.a)(e,2),r=t[0],a=t[1],o=n.a.useState("text"),c=Object(l.a)(o,2),u=c[0],m=c[1],_=n.a.useState("text"),E=Object(l.a)(_,2),y=E[0],b=E[1],O=n.a.useState(""),g=Object(l.a)(O,2),w=g[0],C=g[1],k=n.a.useMemo((function(){return Object(i.a)(u,r,w,y)}),[u,r,w,y]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"settings"},n.a.createElement("div",null,"Input Format",n.a.createElement(p,{value:u,options:Object.keys(s.b),onChange:m})),n.a.createElement("div",null,"Output Format",n.a.createElement(p,{value:y,options:Object.keys(s.a),onChange:b}))),n.a.createElement("div",{id:"main-panes"},n.a.createElement(d.a,{split:"vertical",defaultSize:"35%"},n.a.createElement(f,{source:r,sourceType:u,onChangeSource:a}),n.a.createElement(d.a,{split:"vertical",defaultSize:"40%"},n.a.createElement(h,{transform:w,onChangeTransform:C}),n.a.createElement(v,{destType:y,result:k})))))};c.a.render(n.a.createElement(y,null),document.getElementById("root"))},39:function(e,t,r){"use strict";var a=r(51),n=r(132),o=r.n(n),c=r(92),l=r.n(c),u=r(32),s=r(33),i=r(34),m=r(36),_=r(37),d=r(0),p=r.n(d),f=function(e,t,r){return p.a.createElement("div",null,"Oops! An error occurred: $",e.toString(),p.a.createElement("br",null),p.a.createElement("a",{href:"#",onClick:r},"Try again"))},E=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={},r.resetError=function(){r.setState({error:void 0,errorInfo:void 0})},r}return Object(_.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.error?(this.props.renderError||f)(this.state.error,this.state.errorInfo,this.resetError):this.props.render()}}]),t}(p.a.Component),h=r(50);var v=r(133),y=r.n(v)()({loader:function(){return r.e(5).then(r.bind(null,346))},loading:function(){return p.a.createElement("div",null,"Loading table")}}),b=function(e){var t=e.value;if("object"===typeof t)try{t=JSON.stringify(t)}catch(r){t="<unrenderable>"}return p.a.createElement(p.a.Fragment,null,t)},O=p.a.memo((function(e){var t=e.data;try{var r=Array.from(t),a=function(e){var t=[],r=new Set;return e.forEach((function(e){return e&&Object.keys(e).forEach((function(e){r.has(e)||(t.push(e),r.add(e))}))})),t}(r);return a.length?p.a.createElement(y,{data:r,columns:a.map((function(e){return{accessor:e,Header:e,Cell:b}}))}):p.a.createElement(h.a,{result:{phase:"output",error:new Error("Unable to figure out columns"),type:"error"}})}catch(n){return p.a.createElement(h.a,{result:{phase:"output",error:n,type:"error"}})}})),g=r(93),w=r.n(g),C=r(134),k=r(337);function D(){return(D=Object(C.a)(w.a.mark((function e(t,a){var n,o,c,l,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Promise.all([r.e(3),r.e(4)]).then(r.t.bind(null,345,7)),o=Array.from(t),e.next=4,n;case 4:c=e.sent,l=c.utils.json_to_sheet(o),u=c.utils.book_new(),c.utils.book_append_sheet(u,l,"d2d"),c.writeFile(u,"d2d-".concat((new Date).toISOString(),".").concat(a));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){var t=e.label,r=e.format,a=e.data;return p.a.createElement(k.a,{onClick:function(e){try{!function(e,t){D.apply(this,arguments)}(a,r)}catch(t){alert(t)}}},t)},T=function(e){var t=e.data;return p.a.createElement("div",{style:{textAlign:"center"}},p.a.createElement(S,{label:"Download XLSX",format:"xlsx",data:t}),p.a.createElement(S,{label:"Download XLS",format:"xls",data:t}),p.a.createElement(S,{label:"Download ODS",format:"ods",data:t}))};r.d(t,"b",(function(){return j})),r.d(t,"a",(function(){return M}));var j={csv:a.b,json:JSON.parse,text:function(e){return e},toml:o.a.parse,tsv:a.d,yaml:l.a.safeLoad},P=function(e){return function(t){return{value:e(t),type:"string"}}},M={"json-compact":P(JSON.stringify),csv:P(a.a),json:P((function(e){return JSON.stringify(e,null,2)})),text:P((function(e){return""+e})),tsv:P(a.c),yaml:P(l.a.safeDump),table:function(e){return{error:null,type:"element",element:p.a.createElement(E,{render:function(){return p.a.createElement(O,{data:e})}})}},xlsx:function(e){return{error:null,type:"element",element:p.a.createElement(T,{data:e})}}}},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(0),n=r.n(a),o=function(e){var t=e.result,r=t.error,a=t.phase;return n.a.createElement("div",{className:"error-result"},n.a.createElement("h2",null,r.name||"Error"," in ",a),r.stack?n.a.createElement("div",{className:"error-stack"},r.stack):n.a.createElement("b",null,r.toString()))}}},[[157,1,2]]]);
//# sourceMappingURL=main.0a7da18e.chunk.js.map