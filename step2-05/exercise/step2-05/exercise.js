!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=151)}({151:function(e,t,n){"use strict";n.r(t);var r=n(18),o=n(73),i=Object(o.a)({},{addTodo:function(e,t){},remove:function(e,t){delete e[t.id]},clear:function(e,t){Object.keys(e).forEach(function(t){e[t].completed&&delete e[t]})},complete:function(e,t){},edit:function(e,t){}}),a=Object(o.a)("all",{setFilter:function(e,t){return t.filter}}),u=Object(r.combineReducers)({todos:i,filter:a}),c=n(67),f=Object(r.createStore)(u,{},Object(c.composeWithDevTools)());console.log(f.getState())},16:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},18:function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",function(){return u}),n.d(t,"combineReducers",function(){return f}),n.d(t,"bindActionCreators",function(){return l}),n.d(t,"applyMiddleware",function(){return h}),n.d(t,"compose",function(){return p}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return i});var r=n(68),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(u)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,f=t,s=[],l=s,d=!1;function p(){l===s&&(l=s.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),l.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var n=l.indexOf(e);l.splice(n,1)}}}function b(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,f=c(f,e)}finally{d=!1}for(var t=s=l,n=0;n<t.length;n++){(0,t[n])()}return e}return b({type:i.INIT}),(o={dispatch:b,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,b({type:i.REPLACE})}})[r.a]=function(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var a,u=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){a=e}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<u.length;i++){var f=u[i],s=n[f],l=e[f],d=s(l,t);if(void 0===d){var p=c(f,t);throw new Error(p)}o[f]=d,r=r||d!==l}return r?o:e}}function s(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"==typeof e)return s(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=s(a,t))}return r}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}({},n,{dispatch:r=p.apply(void 0,i)(n.dispatch)})}}}},41:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,f=[],s=!1,l=-1;function d(){s&&c&&(s=!1,c.length?f=c.concat(f):l=-1,f.length&&p())}function p(){if(!s){var e=u(d);s=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new h(e,t)),1!==f.length||s||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},65:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return Y});var r,o,i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f="undefined"!=typeof Symbol?Symbol("immer-nothing"):(i=!0,(o="immer-nothing")in(r={})?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r),s="undefined"!=typeof Symbol?Symbol("immer-draftable"):"__$immer_draftable",l="undefined"!=typeof Symbol?Symbol("immer-state"):"__$immer_state";function d(e){return!!e&&!!e[l]}function p(e){if(!e||"object"!==(void 0===e?"undefined":a(e)))return!1;if(Array.isArray(e))return!0;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype||(!!e[s]||!!e.constructor[s])}var h=Object.assign||function(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return e},y="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Array.isArray(e))return e.slice();var n=Object.create(Object.getPrototypeOf(e));return y(e).forEach(function(r){if(r!==l){var o=Object.getOwnPropertyDescriptor(e,r);if(o.get){if(!t)throw new Error("Immer drafts cannot have computed properties");o.value=o.get.call(e)}o.enumerable?n[r]=o.value:Object.defineProperty(n,r,{value:o.value,writable:!0,configurable:!0})}}),n}function v(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(n,e[n],e);else y(e).forEach(function(n){return t(n,e[n],e)})}function g(e,t){return Object.getOwnPropertyDescriptor(e,t).enumerable}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function w(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}var O={},j=[],E=function(){return j[j.length-1]};function P(e,t){var n=Array.isArray(e),r=A(e);v(r,function(t){!function(e,t,n){var r=O[t];r?r.enumerable=n:O[t]=r={configurable:!0,enumerable:n,get:function(){return function(e,t){k(e);var n=S(e)[t];if(!e.finalizing&&n===e.base[t]&&p(n))return x(e),e.copy[t]=P(n,e);return n}(this[l],t)},set:function(e){!function(e,t,n){if(k(e),e.assigned[t]=!0,!e.modified){if(w(S(e)[t],n))return;_(e),x(e)}e.copy[t]=n}(this[l],t,e)}};Object.defineProperty(e,t,r)}(r,t,n||g(e,t))});var o,i,a,u={scope:t?t.scope:E(),modified:!1,finalizing:!1,finalized:!1,assigned:{},parent:t,base:e,draft:r,copy:null,revoke:T,revoked:!1};return o=r,i=l,a=u,Object.defineProperty(o,i,{value:a,enumerable:!1,writable:!0}),u.scope.push(u),r}function T(){this.revoked=!0}function S(e){return e.copy||e.base}function _(e){e.modified||(e.modified=!0,e.parent&&_(e.parent))}function x(e){e.copy||(e.copy=A(e.base))}function A(e){var t=e&&e[l];if(t){t.finalizing=!0;var n=b(t.draft,!0);return t.finalizing=!1,n}return b(e)}function k(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(S(e)))}function z(e){for(var t=e.base,n=e.draft,r=Object.keys(n),o=r.length-1;o>=0;o--)if(void 0===t[r[o]]&&!m(t,r[o]))return!0;return r.length!==Object.keys(t).length}function N(e){var t=e.draft;if(t.length!==e.base.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!n||n.get)}var I=Object.freeze({scopes:j,currentScope:E,willFinalize:function(e,t,n){var r=E();r.forEach(function(e){return e.finalizing=!0}),void 0!==e&&e!==t||(n&&function e(t){if(t&&"object"===(void 0===t?"undefined":a(t))){var n=t[l];if(n){var r=n.base,o=n.draft,i=n.assigned;if(Array.isArray(t)){if(N(n)){if(_(n),i.length=!0,o.length<r.length)for(var u=o.length;u<r.length;u++)i[u]=!1;else for(var c=r.length;c<o.length;c++)i[c]=!0;for(var f=0;f<o.length;f++)void 0===i[f]&&e(o[f])}}else Object.keys(o).forEach(function(t){void 0!==r[t]||m(r,t)?i[t]||e(o[t]):(i[t]=!0,_(n))}),Object.keys(r).forEach(function(e){void 0!==o[e]||m(o,e)||(i[e]=!1,_(n))})}}}(t),function(e){for(var t=e.length-1;t>=0;t--){var n=e[t];!1===n.modified&&(Array.isArray(n.base)?N(n)&&_(n):z(n)&&_(n))}}(r))},createDraft:P}),D=[],R=function(){return D[D.length-1]};function C(e,t){var n={scope:t?t.scope:R(),modified:!1,finalized:!1,assigned:{},parent:t,base:e,draft:null,drafts:{},copy:null,revoke:null},r=Array.isArray(e)?Proxy.revocable([n],F):Proxy.revocable(n,U),o=r.revoke,i=r.proxy;return n.draft=i,n.revoke=o,n.scope.push(n),i}var U={get:function(e,t){if(t===l)return e;var n=e.drafts;if(!e.modified&&m(n,t))return n[t];var r=L(e)[t];if(e.finalized||!p(r))return r;if(e.modified){if(r!==e.base[t])return r;n=e.copy}return n[t]=C(r,e)},has:function(e,t){return t in L(e)},ownKeys:function(e){return Reflect.ownKeys(L(e))},set:function(e,t,n){if(!e.modified){var r=n?w(e.base[t],n)||n===e.drafts[t]:w(e.base[t],n)&&t in e.base;if(r)return!0;M(e)}return e.assigned[t]=!0,e.copy[t]=n,!0},deleteProperty:function(e,t){(void 0!==e.base[t]||t in e.base)&&(e.assigned[t]=!1,M(e));e.copy&&delete e.copy[t];return!0},getOwnPropertyDescriptor:function(e,t){var n=L(e),r=Reflect.getOwnPropertyDescriptor(n,t);r&&(r.writable=!0,r.configurable=!Array.isArray(n)||"length"!==t);return r},defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},F={};function L(e){return e.copy||e.base}function M(e){e.modified||(e.modified=!0,e.copy=h(b(e.base),e.drafts),e.drafts=null,e.parent&&M(e.parent))}v(U,function(e,t){F[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),F.deleteProperty=function(e,t){if(isNaN(parseInt(t)))throw new Error("Immer only supports deleting array indices");return U.deleteProperty.call(this,e[0],t)},F.set=function(e,t,n){if("length"!==t&&isNaN(parseInt(t)))throw new Error("Immer only supports setting array indices and the 'length' property");return U.set.call(this,e[0],t,n)};var X=Object.freeze({scopes:D,currentScope:R,willFinalize:function(){},createDraft:C});function K(e,t,n,r){Array.isArray(e.base)?function(e,t,n,r){for(var o=e.base,i=e.copy,a=e.assigned,u=Math.min(o.length,i.length),c=0;c<u;c++)if(a[c]&&o[c]!==i[c]){var f=t.concat(c);n.push({op:"replace",path:f,value:i[c]}),r.push({op:"replace",path:f,value:o[c]})}if(u<i.length){for(var s=u;s<i.length;s++)n.push({op:"add",path:t.concat(s),value:i[s]});r.push({op:"replace",path:t.concat("length"),value:o.length})}else if(u<o.length){n.push({op:"replace",path:t.concat("length"),value:i.length});for(var l=u;l<o.length;l++)r.push({op:"add",path:t.concat(l),value:o[l]})}}(e,t,n,r):function(e,t,n,r){var o=e.base,i=e.copy;v(e.assigned,function(e,a){var u=o[e],c=i[e],f=a?e in o?"replace":"add":"remove";if(u!==c||"replace"!==f){var s=t.concat(e);n.push("remove"===f?{op:f,path:s}:{op:f,path:s,value:c}),r.push("add"===f?{op:"remove",path:s}:"remove"===f?{op:"add",path:s,value:u}:{op:"replace",path:s,value:u})}})}(e,t,n,r)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n],o=r.path;if(0===o.length&&"replace"===r.op)e=r.value;else{for(var i=e,u=0;u<o.length-1;u++)if(!(i=i[o[u]])||"object"!==(void 0===i?"undefined":a(i)))throw new Error("Cannot apply patch, path doesn't resolve: "+o.join("/"));var c=o[o.length-1];switch(r.op){case"replace":case"add":i[c]=r.value;break;case"remove":if(Array.isArray(i)){if(c!==i.length-1)throw new Error("Only the last index of an array can be removed, index: "+c+", length: "+i.length);i.length-=1}else delete i[c];break;default:throw new Error("Unsupported patch operation: "+r.op)}}}return e}var W={useProxies:"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect,autoFreeze:void 0===e&&"verifyMinified"===function(){}.name,onAssign:null,onDelete:null,onCopy:null},B=new(function(){function e(t){u(this,e),h(this,W,t),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this)}return c(e,[{key:"produce",value:function(e,t,n){var r=this;if("function"==typeof e&&"function"!=typeof t){var o=t;return t=e,function(){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return r.produce(a,function(e){var r;return(r=t).call.apply(r,[e,e].concat(n))})}}if("function"!=typeof t)throw new Error("if first argument is not a function, the second argument to produce should be a function");if(void 0!==n&&"function"!=typeof n)throw new Error("the third argument of a producer should not be set or a function");var i=void 0;if(p(e)){this.scopes.push([]);var a=this.createDraft(e);try{i=t.call(a,a),this.willFinalize(i,a,!!n);var u=n&&[],c=n&&[];if(void 0===i||i===a)i=this.finalize(a,[],u,c);else{if(a[l].modified)throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");p(i)&&(i=this.finalize(i)),n&&(u.push({op:"replace",path:[],value:i}),c.push({op:"replace",path:[],value:e}))}}finally{this.currentScope().forEach(function(e){return e.revoke()}),this.scopes.pop()}n&&n(u,c)}else if(void 0===(i=t(e)))return e;return i===f?void 0:i}},{key:"setAutoFreeze",value:function(e){this.autoFreeze=e}},{key:"setUseProxies",value:function(e){this.useProxies=e,h(this,e?X:I)}},{key:"applyPatches",value:function(e,t){return d(e)?V(e,t):this.produce(e,function(e){return V(e,t)})}},{key:"finalize",value:function(e,t,n,r){var o=this,i=e[l];if(!i)return Object.isFrozen(e)?e:this.finalizeTree(e);if(i.scope!==this.currentScope())return e;if(!i.modified)return i.base;if(!i.finalized){if(i.finalized=!0,this.finalizeTree(i.draft,t,n,r),this.onDelete)if(this.useProxies){var a=i.assigned;for(var u in a)a[u]||this.onDelete(i,u)}else{var c=i.base,f=i.copy;v(c,function(e){m(f,e)||o.onDelete(i,e)})}this.onCopy&&this.onCopy(i),this.autoFreeze&&1===this.scopes.length&&Object.freeze(i.copy),n&&K(i,t,n,r)}return i.copy}},{key:"finalizeTree",value:function(e,t,n,r){var o=this,i=e[l];i&&(this.useProxies||(i.finalizing=!0,i.copy=b(i.draft,!0),i.finalizing=!1),e=i.copy);var a=this.onAssign;return v(e,function u(c,f,s){if(f===s)throw Error("Immer forbids circular references");var l=!!i&&s===e;if(d(f)){if(f=n&&l&&!i.assigned[c]?o.finalize(f,t.concat(c),n,r):o.finalize(f),Array.isArray(s)||g(s,c)?s[c]=f:Object.defineProperty(s,c,{value:f}),l&&f===i.base[c])return}else{if(l&&w(f,i.base[c]))return;p(f)&&!Object.isFrozen(f)&&v(f,u)}l&&a&&a(i,c,f)}),e}}]),e}()),Y=B.produce;B.setAutoFreeze.bind(B),B.setUseProxies.bind(B),B.applyPatches.bind(B);t.a=Y}).call(this,n(41))},67:function(e,t,n){"use strict";var r=n(18).compose;t.__esModule=!0,t.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},68:function(e,t,n){"use strict";(function(e,r){var o,i=n(76);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n(16),n(78)(e))},70:function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}var o=r();o.withExtraArgument=r,t.a=o},73:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(18);var r=n(65);n(67),n(70);["A non-serializable value was detected in the state, in the path: `%s`. Value: %o","Take a look at the reducer(s) handling this action type: %s.","(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)"].join("\n"),["A non-serializable value was detected in an action, in the path: `%s`. Value: %o","Take a look at the logic that dispatched this action:  %o.","(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)"].join("\n");function o(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,o=arguments.length>1?arguments[1]:void 0;return Object(r.a)(n,function(e){var n=t[o.type];return n?n(e,o):void 0})}}},76:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},78:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}});
//# sourceMappingURL=exercise.js.map