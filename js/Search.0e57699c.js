(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Search"],{"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},3022:function(t,e,r){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},i=/%[sdj%]/g;e.format=function(t){if(!j(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(c(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,o=n.length,u=String(t).replace(i,(function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return t}})),s=n[r];r<o;s=n[++r])v(s)||!x(s)?u+=" "+s:u+=" "+c(s);return u},e.deprecate=function(r,n){if("undefined"!==typeof t&&!0===t.noDeprecation)return r;if("undefined"===typeof t)return function(){return e.deprecate(r,n).apply(this,arguments)};var i=!1;function o(){if(!i){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}return o};var o,u={};function c(t,r){var n={seen:[],stylize:a};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),m(r)?n.showHidden=r:r&&e._extend(n,r),S(n.showHidden)&&(n.showHidden=!1),S(n.depth)&&(n.depth=2),S(n.colors)&&(n.colors=!1),S(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=s),l(n,t,n.depth)}function s(t,e){var r=c.styles[e];return r?"["+c.colors[r][0]+"m"+t+"["+c.colors[r][1]+"m":t}function a(t,e){return t}function f(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}function l(t,r,n){if(t.customInspect&&r&&P(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return j(i)||(i=l(t,i,n)),i}var o=p(t,r);if(o)return o;var u=Object.keys(r),c=f(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(r)),q(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return y(r);if(0===u.length){if(P(r)){var s=r.name?": "+r.name:"";return t.stylize("[Function"+s+"]","special")}if(k(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(T(r))return t.stylize(Date.prototype.toString.call(r),"date");if(q(r))return y(r)}var a,m="",v=!1,w=["{","}"];if(b(r)&&(v=!0,w=["[","]"]),P(r)){var O=r.name?": "+r.name:"";m=" [Function"+O+"]"}return k(r)&&(m=" "+RegExp.prototype.toString.call(r)),T(r)&&(m=" "+Date.prototype.toUTCString.call(r)),q(r)&&(m=" "+y(r)),0!==u.length||v&&0!=r.length?n<0?k(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),a=v?g(t,r,n,c,u):u.map((function(e){return h(t,r,n,c,e,v)})),t.seen.pop(),d(a,m,w)):w[0]+m+w[1]}function p(t,e){if(S(e))return t.stylize("undefined","undefined");if(j(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return O(e)?t.stylize(""+e,"number"):m(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function y(t){return"["+Error.prototype.toString.call(t)+"]"}function g(t,e,r,n,i){for(var o=[],u=0,c=e.length;u<c;++u)N(e,String(u))?o.push(h(t,e,r,n,String(u),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(h(t,e,r,n,i,!0))})),o}function h(t,e,r,n,i,o){var u,c,s;if(s=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},s.get?c=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(c=t.stylize("[Setter]","special")),N(n,i)||(u="["+i+"]"),c||(t.seen.indexOf(s.value)<0?(c=v(r)?l(t,s.value,null):l(t,s.value,r-1),c.indexOf("\n")>-1&&(c=o?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n"))):c=t.stylize("[Circular]","special")),S(u)){if(o&&i.match(/^\d+$/))return c;u=JSON.stringify(""+i),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function d(t,e,r){var n=t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return n>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function b(t){return Array.isArray(t)}function m(t){return"boolean"===typeof t}function v(t){return null===t}function w(t){return null==t}function O(t){return"number"===typeof t}function j(t){return"string"===typeof t}function E(t){return"symbol"===typeof t}function S(t){return void 0===t}function k(t){return x(t)&&"[object RegExp]"===A(t)}function x(t){return"object"===typeof t&&null!==t}function T(t){return x(t)&&"[object Date]"===A(t)}function q(t){return x(t)&&("[object Error]"===A(t)||t instanceof Error)}function P(t){return"function"===typeof t}function D(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function A(t){return Object.prototype.toString.call(t)}function F(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(S(o)&&(o=Object({NODE_ENV:"production",BASE_URL:""}).NODE_DEBUG||""),r=r.toUpperCase(),!u[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var n=t.pid;u[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else u[r]=function(){};return u[r]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=b,e.isBoolean=m,e.isNull=v,e.isNullOrUndefined=w,e.isNumber=O,e.isString=j,e.isSymbol=E,e.isUndefined=S,e.isRegExp=k,e.isObject=x,e.isDate=T,e.isError=q,e.isFunction=P,e.isPrimitive=D,e.isBuffer=r("d60a");var z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function _(){var t=new Date,e=[F(t.getHours()),F(t.getMinutes()),F(t.getSeconds())].join(":");return[t.getDate(),z[t.getMonth()],e].join(" ")}function N(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",_(),e.format.apply(e,arguments))},e.inherits=r("28a0"),e._extend=function(t,e){if(!e||!x(e))return t;var r=Object.keys(e),n=r.length;while(n--)t[r[n]]=e[r[n]];return t};var C="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function B(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}function R(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!==typeof i)throw new TypeError("The last argument must be of type Function");var o=this,u=function(){return i.apply(o,arguments)};e.apply(this,r).then((function(e){t.nextTick(u,null,e)}),(function(e){t.nextTick(B,e,u)}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,n(e)),r}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(C&&t[C]){var e=t[C];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,C,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise((function(t,n){e=t,r=n})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(t,n){t?r(t):e(n)}));try{t.apply(this,i)}catch(u){r(u)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),C&&Object.defineProperty(e,C,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=C,e.callbackify=R}).call(this,r("4362"))},"320c":function(t,e,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function u(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function c(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map((function(t){return e[t]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(t){i[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(o){return!1}}t.exports=c()?Object.assign:function(t,e){for(var r,c,s=u(t),a=1;a<arguments.length;a++){for(var f in r=Object(arguments[a]),r)i.call(r,f)&&(s[f]=r[f]);if(n){c=n(r);for(var l=0;l<c.length;l++)o.call(r,c[l])&&(s[c[l]]=r[c[l]])}}return s}},"79ce":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"search-header"},[e("van-icon",{staticClass:"goback",attrs:{name:"arrow-left",color:"white",size:"0.48rem"},on:{click:function(e){return t.$router.back()}}}),e("van-search",{directives:[{name:"fofo",rawName:"v-fofo"}],attrs:{placeholder:"请输入搜索关键词",background:"#007BFF",shape:"round"},on:{input:t.inputFn,search:function(e){return t.searchTo()}},model:{value:t.kw,callback:function(e){t.kw=e},expression:"kw"}})],1),0!==t.kw.length?e("div",{staticClass:"sugg-list"},t._l(t.suggestList,(function(r,n){return e("div",{key:n,staticClass:"sugg-item",domProps:{innerHTML:t._s(t.lightFn(r,t.kw))},on:{click:function(e){return t.suggestListTo(r)}}})})),0):e("div",{staticClass:"search-history"},[e("van-cell",{attrs:{title:"搜索历史"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-icon",{staticClass:"search-icon",attrs:{name:"delete"},on:{click:t.clearFn}})]},proxy:!0}])}),e("div",{staticClass:"history-list"},t._l(t.history,(function(r,n){return e("span",{key:n,staticClass:"history-item",on:{click:function(e){return t.historyTo(r)}}},[t._v(t._s(r))])})),0)],1)])},i=[],o=r("365c"),u=(r("f654"),r("5d2d")),c={name:"Search",data(){return{kw:"",timer:null,suggestList:[],history:JSON.parse(Object(u["a"])("his"))||[]}},methods:{inputFn(){clearTimeout(this.timer),0===this.kw.trim().length?this.suggestList=[]:this.timer=setTimeout(async()=>{const t=await Object(o["q"])(this.kw.trim());this.suggestList=t.data.data.options},300)},lightFn(t,e){if(!t)return;const r=new RegExp(e,"ig");return t.replace(r,t=>`<span style="color:red;">${t}</span>`)},moveTo(t){
//!坑,路由跳转在watch之前执行，所以用定时器包裹，让跳转在最后执行，这样watch里的方法才会执行
setTimeout(()=>{this.$router.push("/search_result/"+t)},0)},searchTo(){this.kw.trim()&&(this.history.push(this.kw.trim()),this.moveTo(this.kw))},suggestListTo(t){this.history.push(t),this.moveTo(t)},historyTo(t){this.moveTo(t)},clearFn(){this.history=[]}},watch:{history:{handler(){const t=new Set(this.history),e=Array.from(t);Object(u["c"])("his",JSON.stringify(e))}}}},s=c,a=(r("7b86"),r("2877")),f=Object(a["a"])(s,n,i,!1,null,"2d346b42",null);e["default"]=f.exports},"7b86":function(t,e,r){"use strict";r("ff99")},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},f654:function(t,e,r){"use strict";(function(e){var n=r("320c");
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function i(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0}function o(t){return e.Buffer&&"function"===typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var u=r("3022"),c=Object.prototype.hasOwnProperty,s=Array.prototype.slice,a=function(){return"foo"===function(){}.name}();function f(t){return Object.prototype.toString.call(t)}function l(t){return!o(t)&&("function"===typeof e.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var p=t.exports=v,y=/\s*function\s+([^\(\s]*)\s*/;function g(t){if(u.isFunction(t)){if(a)return t.name;var e=t.toString(),r=e.match(y);return r&&r[1]}}function h(t,e){return"string"===typeof t?t.length<e?t:t.slice(0,e):t}function d(t){if(a||!u.isFunction(t))return u.inspect(t);var e=g(t),r=e?": "+e:"";return"[Function"+r+"]"}function b(t){return h(d(t.actual),128)+" "+t.operator+" "+h(d(t.expected),128)}function m(t,e,r,n,i){throw new p.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:i})}function v(t,e){t||m(t,!0,e,"==",p.ok)}function w(t,e,r,n){if(t===e)return!0;if(o(t)&&o(e))return 0===i(t,e);if(u.isDate(t)&&u.isDate(e))return t.getTime()===e.getTime();if(u.isRegExp(t)&&u.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"===typeof t||null!==e&&"object"===typeof e){if(l(t)&&l(e)&&f(t)===f(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===i(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(o(t)!==o(e))return!1;n=n||{actual:[],expected:[]};var c=n.actual.indexOf(t);return-1!==c&&c===n.expected.indexOf(e)||(n.actual.push(t),n.expected.push(e),j(t,e,r,n))}return r?t===e:t==e}function O(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function j(t,e,r,n){if(null===t||void 0===t||null===e||void 0===e)return!1;if(u.isPrimitive(t)||u.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=O(t),o=O(e);if(i&&!o||!i&&o)return!1;if(i)return t=s.call(t),e=s.call(e),w(t,e,r);var c,a,f=q(t),l=q(e);if(f.length!==l.length)return!1;for(f.sort(),l.sort(),a=f.length-1;a>=0;a--)if(f[a]!==l[a])return!1;for(a=f.length-1;a>=0;a--)if(c=f[a],!w(t[c],e[c],r,n))return!1;return!0}function E(t,e,r){w(t,e,!0)&&m(t,e,r,"notDeepStrictEqual",E)}function S(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(r){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function k(t){var e;try{t()}catch(r){e=r}return e}function x(t,e,r,n){var i;if("function"!==typeof e)throw new TypeError('"block" argument must be a function');"string"===typeof r&&(n=r,r=null),i=k(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!i&&m(i,r,"Missing expected exception"+n);var o="string"===typeof n,c=!t&&u.isError(i),s=!t&&i&&!r;if((c&&o&&S(i,r)||s)&&m(i,r,"Got unwanted exception"+n),t&&i&&r&&!S(i,r)||!t&&i)throw i}function T(t,e){t||m(t,!0,e,"==",T)}p.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=b(this),this.generatedMessage=!0);var e=t.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,i=g(e),o=n.indexOf("\n"+i);if(o>=0){var u=n.indexOf("\n",o+1);n=n.substring(u+1)}this.stack=n}}},u.inherits(p.AssertionError,Error),p.fail=m,p.ok=v,p.equal=function(t,e,r){t!=e&&m(t,e,r,"==",p.equal)},p.notEqual=function(t,e,r){t==e&&m(t,e,r,"!=",p.notEqual)},p.deepEqual=function(t,e,r){w(t,e,!1)||m(t,e,r,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(t,e,r){w(t,e,!0)||m(t,e,r,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(t,e,r){w(t,e,!1)&&m(t,e,r,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=E,p.strictEqual=function(t,e,r){t!==e&&m(t,e,r,"===",p.strictEqual)},p.notStrictEqual=function(t,e,r){t===e&&m(t,e,r,"!==",p.notStrictEqual)},p.throws=function(t,e,r){x(!0,t,e,r)},p.doesNotThrow=function(t,e,r){x(!1,t,e,r)},p.ifError=function(t){if(t)throw t},p.strict=n(T,p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var q=Object.keys||function(t){var e=[];for(var r in t)c.call(t,r)&&e.push(r);return e}}).call(this,r("c8ba"))},ff99:function(t,e,r){}}]);
//# sourceMappingURL=Search.0e57699c.js.map