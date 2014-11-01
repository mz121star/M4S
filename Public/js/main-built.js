
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/*
 AngularJS v1.0.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,ba,p){function m(b,a,c){var d;if(b)if(M(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(I(b)&&wa(b.length))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function mb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function fc(b,a,c){for(var d=mb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}
function nb(b){return function(a,c){b(c,a)}}function xa(){for(var b=Z.length,a;b;){b--;a=Z[b].charCodeAt(0);if(a==57)return Z[b]="A",Z.join("");if(a==90)Z[b]="0";else return Z[b]=String.fromCharCode(a+1),Z.join("")}Z.unshift("0");return Z.join("")}function x(b){m(arguments,function(a){a!==b&&m(a,function(a,d){b[d]=a})});return b}function G(b){return parseInt(b,10)}function ya(b,a){return x(new (x(function(){},{prototype:b})),a)}function D(){}function ma(b){return b}function J(b){return function(){return b}}
function t(b){return typeof b=="undefined"}function u(b){return typeof b!="undefined"}function I(b){return b!=null&&typeof b=="object"}function F(b){return typeof b=="string"}function wa(b){return typeof b=="number"}function na(b){return Ta.apply(b)=="[object Date]"}function K(b){return Ta.apply(b)=="[object Array]"}function M(b){return typeof b=="function"}function oa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Q(b){return F(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function gc(b){return b&&
(b.nodeName||b.bind&&b.find)}function Ua(b,a,c){var d=[];m(b,function(b,g,i){d.push(a.call(c,b,g,i))});return d}function hc(b,a){var c=0,d;if(K(b)||F(b))return b.length;else if(I(b))for(d in b)(!a||b.hasOwnProperty(d))&&c++;return c}function Va(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function za(b,a){var c=Va(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(oa(b)||b&&b.$evalAsync&&b.$watch)throw A("Can't copy Window or Scope");if(a){if(b===
a)throw A("Can't copy equivalent objects or arrays");if(K(b)){for(;a.length;)a.pop();for(var c=0;c<b.length;c++)a.push(U(b[c]))}else for(c in m(a,function(b,c){delete a[c]}),b)a[c]=U(b[c])}else(a=b)&&(K(b)?a=U(b,[]):na(b)?a=new Date(b.getTime()):I(b)&&(a=U(b,{})));return a}function ic(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ga(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
c=="object")if(K(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else if(na(b))return na(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||oa(b)||oa(a))return!1;c={};for(d in b){if(d.charAt(0)!=="$"&&!M(b[d])&&!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&!M(a[d]))return!1;return!0}return!1}function Wa(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return M(a)&&!(a instanceof RegExp)?c.length?
function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function jc(b,a){var c=a;/^\$+/.test(b)?c=p:oa(a)?c="$WINDOW":a&&ba===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function ca(b,a){return JSON.stringify(b,jc,a?"  ":null)}function ob(b){return F(b)?JSON.parse(b):b}function Xa(b){b&&b.length!==0?(b=E(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;
return b}function pa(b){b=y(b).clone();try{b.html("")}catch(a){}return y("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+E(b)})}function Ya(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=u(c[1])?decodeURIComponent(c[1]):!0)});return a}function pb(b){var a=[];m(b,function(b,d){a.push(Za(d,!0)+(b===!0?"":"="+Za(b,!0)))});return a.length?a.join("&"):""}function $a(b){return Za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function Za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(a?null:/%20/g,"+")}function kc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,i=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(i,function(a){i[a]=!0;c(ba.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+
a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&i[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}function qb(b,a){b=y(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=rb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,i){a.$apply(function(){b.data("$injector",i);c(b)(a)})}]);return c}function ab(b,a){a=a||"_";return b.replace(lc,
function(b,d){return(d?a:"")+b.toLowerCase()})}function qa(b,a,c){if(!b)throw new A("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function ra(b,a,c){c&&K(b)&&(b=b[b.length-1]);qa(M(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function mc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,
d,e){return function(){b[e||"push"]([c,d,arguments]);return j}}if(!e)throw A("No module: "+d);var b=[],c=[],k=a("$injector","invoke"),j={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:k,run:function(a){c.push(a);
return this}};g&&k(g);return j})}})}function sb(b){return b.replace(nc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(oc,"Moz$1")}function bb(b,a){function c(){var e;for(var b=[this],c=a,i,f,h,k,j,l,n;b.length;){i=b.shift();f=0;for(h=i.length;f<h;f++){k=y(i[f]);c?(n=(j=k.data("events"))&&j.$destroy)&&m(n,function(a){a.handler()}):c=!c;j=0;for(e=(l=k.children()).length,k=e;j<k;j++)b.push(ia(l[j]))}}return d.apply(this,arguments)}var d=ia.fn[b],d=d.$original||d;c.$original=d;ia.fn[b]=c}function P(b){if(b instanceof
P)return b;if(!(this instanceof P)){if(F(b)&&b.charAt(0)!="<")throw A("selectors not implemented");return new P(b)}if(F(b)){var a=ba.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);cb(this,a.childNodes);this.remove()}else cb(this,b)}function db(b){return b.cloneNode(!0)}function sa(b){tb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)sa(b[a])}function ub(b,a,c){var d=da(b,"events");da(b,"handle")&&(t(a)?m(d,function(a,c){eb(b,c,a);delete d[c]}):t(c)?(eb(b,a,d[a]),
delete d[a]):za(d[a],c))}function tb(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ub(b)),delete Ba[a],b[Aa]=p)}function da(b,a,c){var d=b[Aa],d=Ba[d||-1];if(u(c))d||(b[Aa]=d=++pc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function vb(b,a,c){var d=da(b,"data"),e=u(c),g=!e&&u(a),i=g&&!I(a);!d&&!i&&da(b,"data",d={});if(e)d[a]=c;else if(g)if(i)return d&&d[a];else x(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>
-1}function wb(b,a){a&&m(a.split(" "),function(a){b.className=Q((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+Q(a)+" "," "))})}function xb(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=Q(b.className+" "+Q(a))})}function cb(b,a){if(a)for(var a=!a.nodeName&&u(a.length)&&!oa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function yb(b,a){return Da(b,"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=y(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;
b=b.parent()}}function zb(b,a){var c=Ea[a.toLowerCase()];return c&&Ab[b.nodeName]&&c}function qc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||ba;if(t(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],
function(a){a.call(b,c)});$<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function ja(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===p)c=b.$$hashKey=xa()}else c=b;return a+":"+c}function Fa(b){m(b,this.put,this)}function fb(){}function Bb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(rc,
""),c=c.match(sc),m(c[1].split(tc),function(b){b.replace(uc,function(b,c,d){a.push(d)})}),b.$inject=a}else K(b)?(c=b.length-1,ra(b[c],"fn"),a=b.slice(0,c)):ra(b,"fn",!0);return a}function rb(b){function a(a){return function(b,c){if(I(b))m(b,nb(a));else return a(b,c)}}function c(a,b){M(b)&&(b=l.instantiate(b));if(!b.$get)throw A("Provider "+a+" must define $get factory method.");return j[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!k.get(a))if(k.put(a,!0),
F(a)){var c=ta(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],h=g[0]=="$injector"?l:l.get(g[0]);h[g[1]].apply(h,g[2])}}catch(i){throw i.message&&(i.message+=" from "+a),i;}}else if(M(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&(o.message+=" from "+a),o;}else if(K(a))try{b.push(l.invoke(a))}catch(n){throw n.message&&(n.message+=" from "+String(a[a.length-1])),n;}else ra(a,"module")});return b}function g(a,b){function c(d){if(typeof d!==
"string")throw A("Service name expected");if(a.hasOwnProperty(d)){if(a[d]===i)throw A("Circular dependency: "+h.join(" <- "));return a[d]}else try{return h.unshift(d),a[d]=i,a[d]=b(d)}finally{h.shift()}}function d(a,b,e){var f=[],g=Bb(a),k,i,o;i=0;for(k=g.length;i<k;i++)o=g[i],f.push(e&&e.hasOwnProperty(o)?e[o]:c(o,h));a.$inject||(a=a[k]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],
f[1],f[2],f[3],f[4]);case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return I(e)?e:c},get:c,annotate:Bb}}var i=
{},f="Provider",h=[],k=new Fa,j={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,J(b))}),constant:a(function(a,b){j[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},l=g(j,function(){throw A("Unknown provider: "+h.join(" <- "));}),n={},r=n.$injector=g(n,function(a){a=l.get(a+f);return r.invoke(a.$get,
a)});m(e(b),function(a){r.invoke(a||D)});return r}function vc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&E(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=i.getElementById(b))?d.scrollIntoView():(d=e(i.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var i=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});
return g}]}function wc(b,a,c,d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(o--,o===0)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function g(a,b){(function ea(){m(q,function(a){a()});v=b(ea,a)})()}function i(){Y!=f.url()&&(Y=f.url(),m(z,function(a){a(f.url())}))}var f=this,h=a[0],k=b.location,j=b.history,l=b.setTimeout,n=b.clearTimeout,r={};f.isMock=!1;var o=0,w=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){o++};f.notifyWhenNoOutstandingRequests=
function(a){m(q,function(a){a()});o===0?a():w.push(a)};var q=[],v;f.addPollFn=function(a){t(v)&&g(100,l);q.push(a);return a};var Y=k.href,B=a.find("base");f.url=function(a,b){if(a){if(Y!=a)return Y=a,d.history?b?j.replaceState(null,"",a):(j.pushState(null,"",a),B.attr("href",B.attr("href"))):b?k.replace(a):k.href=a,f}else return k.href.replace(/%27/g,"'")};var z=[],L=!1;f.onUrlChange=function(a){L||(d.history&&y(b).bind("popstate",i),d.hashchange?y(b).bind("hashchange",i):f.addPollFn(i),L=!0);z.push(a);
return a};f.baseHref=function(){var a=B.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):a};var V={},s="",N=f.baseHref();f.cookies=function(a,b){var d,e,f,g;if(a)if(b===p)h.cookie=escape(a)+"=;path="+N+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(F(b))d=(h.cookie=escape(a)+"="+escape(b)+";path="+N).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"),V.length>20&&c.warn("Cookie '"+a+"' possibly not set or overflowed because too many cookies were already set ("+
V.length+" > 20 )")}else{if(h.cookie!==s){s=h.cookie;d=s.split("; ");V={};for(f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),g>0&&(V[unescape(e.substring(0,g))]=unescape(e.substring(g+1)))}return V}};f.defer=function(a,b){var c;o++;c=l(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};f.defer.cancel=function(a){return r[a]?(delete r[a],n(a),e(D),!0):!1}}function xc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new wc(b,d,a,c)}]}function yc(){this.$get=function(){function b(b,
d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw A("cacheId "+b+" taken");var i=0,f=x({},d,{id:b}),h={},k=d&&d.capacity||Number.MAX_VALUE,j={},l=null,n=null;return a[b]={put:function(a,b){var c=j[a]||(j[a]={key:a});e(c);t(b)||(a in h||i++,h[a]=b,i>k&&this.remove(n.key))},get:function(a){var b=j[a];if(b)return e(b),h[a]},remove:function(a){var b=j[a];if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete j[a];
delete h[a];i--},removeAll:function(){h={};i=0;j={};l=n=null},destroy:function(){j=f=h=null;delete a[b]},info:function(){return x({},f,{size:i})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function zc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Cb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ";
this.directive=function f(d,e){F(d)?(qa(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],function(a){try{var f=b.invoke(a);if(M(f))f={compile:J(f)};else if(!f.compile&&f.link)f.compile=J(f.link);f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(g){c(g)}});return e}])),a[d].push(e)):m(d,nb(f));return this};this.$get=["$injector","$interpolate","$exceptionHandler",
"$http","$templateCache","$parse","$controller","$rootScope",function(b,h,k,j,l,n,r,o){function w(a,b,c){a instanceof y||(a=y(a));m(a,function(b,c){b.nodeType==3&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var d=v(a,b,a,c);return function(b,c){qa(b,"scope");var e=c?ua.clone.call(a):a;e.data("$scope",b);q(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function q(a,b){try{a.addClass(b)}catch(c){}}function v(a,b,c,d){function e(a,c,d,g){for(var k,h,n,j,o,l=0,r=0,q=f.length;l<q;r++)n=c[r],k=f[l++],
h=f[l++],k?(k.scope?(j=a.$new(I(k.scope)),y(n).data("$scope",j)):j=a,(o=k.transclude)||!g&&b?k(h,j,n,d,function(b){return function(c){var d=a.$new();return b(d,c).bind("$destroy",Wa(d,d.$destroy))}}(o||b)):k(h,j,n,p,g)):h&&h(a,n.childNodes,p,g)}for(var f=[],g,k,h,n=0;n<a.length;n++)k=new ea,g=Y(a[n],[],k,d),k=(g=g.length?B(g,a[n],k,b,c):null)&&g.terminal?null:v(a[n].childNodes,g?g.transclude:b),f.push(g),f.push(k),h=h||g||k;return h?e:null}function Y(a,b,c,f){var g=c.$attr,k;switch(a.nodeType){case 1:z(b,
fa(Db(a).toLowerCase()),"E",f);var h,n,j;k=a.attributes;for(var o=0,l=k&&k.length;o<l;o++)if(h=k[o],h.specified)n=h.name,j=fa(n.toLowerCase()),g[j]=n,c[j]=h=Q($&&n=="href"?decodeURIComponent(a.getAttribute(n,2)):h.value),zb(a,j)&&(c[j]=!0),W(a,b,h,j),z(b,j,"A",f);a=a.className;if(F(a))for(;k=e.exec(a);)j=fa(k[2]),z(b,j,"C",f)&&(c[j]=Q(k[3])),a=a.substr(k.index+k[0].length);break;case 3:H(b,a.nodeValue);break;case 8:try{if(k=d.exec(a.nodeValue))j=fa(k[1]),z(b,j,"M",f)&&(c[j]=Q(k[2]))}catch(r){}}b.sort(s);
return b}function B(a,b,c,d,e){function f(a,b){if(a)a.require=C.require,l.push(a);if(b)b.require=C.require,aa.push(b)}function h(a,b){var c,d="data",e=!1;if(F(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw A("No controller: "+a);}else K(a)&&(c=[],m(a,function(a){c.push(h(a,b))}));return c}function j(a,d,e,f,g){var o,q,w,L,Ha;o=b===e?c:ic(c,new ea(y(e),c.$attr));q=o.$$element;if(v&&I(v.scope)){var Y=/^\s*([@=&])\s*(\w*)\s*$/,
s=d.$parent||d;m(v.scope,function(a,b){var c=a.match(Y)||[],e=c[2]||b,f,g,k;switch(c[1]){case "@":o.$observe(e,function(a){d[b]=a});o.$$observers[e].$$scope=s;break;case "=":g=n(o[e]);k=g.assign||function(){f=d[b]=g(s);throw A(Eb+o[e]+" (directive: "+v.name+")");};f=d[b]=g(s);d.$watch(function(){var a=g(s);a!==d[b]&&(a!==f?f=d[b]=a:k(s,f=d[b]));return a});break;case "&":g=n(o[e]);d[b]=function(a){return g(s,a)};break;default:throw A("Invalid isolate scope definition for directive "+v.name+": "+a);
}})}u&&m(u,function(a){var b={$scope:d,$element:q,$attrs:o,$transclude:g};Ha=a.controller;Ha=="@"&&(Ha=o[a.name]);q.data("$"+a.name+"Controller",r(Ha,b))});f=0;for(w=l.length;f<w;f++)try{L=l[f],L(d,q,o,L.require&&h(L.require,q))}catch(Ia){k(Ia,pa(q))}a&&a(d,e.childNodes,p,g);f=0;for(w=aa.length;f<w;f++)try{L=aa[f],L(d,q,o,L.require&&h(L.require,q))}catch(B){k(B,pa(q))}}for(var o=-Number.MAX_VALUE,l=[],aa=[],v=null,B=null,z=null,s=c.$$element=y(b),C,H,W,D,t=d,u,x,X,E=0,G=a.length;E<G;E++){C=a[E];W=
p;if(o>C.priority)break;if(X=C.scope)N("isolated scope",B,C,s),I(X)&&(q(s,"ng-isolate-scope"),B=C),q(s,"ng-scope"),v=v||C;H=C.name;if(X=C.controller)u=u||{},N("'"+H+"' controller",u[H],C,s),u[H]=C;if(X=C.transclude)N("transclusion",D,C,s),D=C,o=C.priority,X=="element"?(W=y(b),s=c.$$element=y("<\!-- "+H+": "+c[H]+" --\>"),b=s[0],Ga(e,y(W[0]),b),t=w(W,d,o)):(W=y(db(b)).contents(),s.html(""),t=w(W,d));if(X=C.template)if(N("template",z,C,s),z=C,X=Ia(X),C.replace){W=y("<div>"+Q(X)+"</div>").contents();
b=W[0];if(W.length!=1||b.nodeType!==1)throw new A(g+X);Ga(e,s,b);H={$attr:{}};a=a.concat(Y(b,a.splice(E+1,a.length-(E+1)),H));L(c,H);G=a.length}else s.html(X);if(C.templateUrl)N("template",z,C,s),z=C,j=V(a.splice(E,a.length-E),j,s,c,e,C.replace,t),G=a.length;else if(C.compile)try{x=C.compile(s,c,t),M(x)?f(null,x):x&&f(x.pre,x.post)}catch(J){k(J,pa(s))}if(C.terminal)j.terminal=!0,o=Math.max(o,C.priority)}j.scope=v&&v.scope;j.transclude=D&&t;return j}function z(d,e,g,h){var j=!1;if(a.hasOwnProperty(e))for(var n,
e=b.get(e+c),o=0,l=e.length;o<l;o++)try{if(n=e[o],(h===p||h>n.priority)&&n.restrict.indexOf(g)!=-1)d.push(n),j=!0}catch(r){k(r)}return j}function L(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){f=="class"?(q(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):f=="style"?e.attr("style",e.attr("style")+";"+b):f.charAt(0)!="$"&&!a.hasOwnProperty(f)&&(a[f]=b,d[f]=c[f])})}function V(a,b,c,d,e,
f,k){var h=[],n,o,r=c[0],q=a.shift(),w=x({},q,{controller:null,templateUrl:null,transclude:null});c.html("");j.get(q.templateUrl,{cache:l}).success(function(j){var l,q,j=Ia(j);if(f){q=y("<div>"+Q(j)+"</div>").contents();l=q[0];if(q.length!=1||l.nodeType!==1)throw new A(g+j);j={$attr:{}};Ga(e,c,l);Y(l,a,j);L(d,j)}else l=r,c.html(j);a.unshift(w);n=B(a,c,d,k);for(o=v(c.contents(),k);h.length;){var aa=h.pop(),j=h.pop();q=h.pop();var s=h.pop(),m=l;q!==r&&(m=db(l),Ga(j,y(q),m));n(function(){b(o,s,m,e,aa)},
s,m,e,aa)}h=null}).error(function(a,b,c,d){throw A("Failed to load template: "+d.url);});return function(a,c,d,e,f){h?(h.push(c),h.push(d),h.push(e),h.push(f)):n(function(){b(o,c,d,e,f)},c,d,e,f)}}function s(a,b){return b.priority-a.priority}function N(a,b,c,d){if(b)throw A("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+pa(d));}function H(a,b){var c=h(b,!0);c&&a.push({priority:0,compile:J(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);q(d.data("$binding",e),
"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function W(a,b,c,d){var e=h(c,!0);e&&b.push({priority:100,compile:J(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=h(c[d],!0));c[d]=p;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function Ga(a,b,c){var d=b[0],e=d.parentNode,f,g;if(a){f=0;for(g=a.length;f<g;f++)if(a[f]==d){a[f]=c;break}}e&&e.replaceChild(c,d);c[y.expando]=d[y.expando];b[0]=c}var ea=function(a,
b){this.$$element=a;this.$attr=b||{}};ea.prototype={$normalize:fa,$set:function(a,b,c,d){var e=zb(this.$$element[0],a),f=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ab(a,"-"));c!==!1&&(b===null||b===p?this.$$element.removeAttr(d):this.$$element.attr(d,b));f&&m(f[a],function(a){try{a(b)}catch(c){k(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);o.$evalAsync(function(){e.$$inter||
b(c[a])});return b}};var D=h.startSymbol(),aa=h.endSymbol(),Ia=D=="{{"||aa=="}}"?ma:function(a){return a.replace(/\{\{/g,D).replace(/}}/g,aa)};return w}]}function fa(b){return sb(b.replace(Ac,""))}function Bc(){var b={};this.register=function(a,c){I(a)?x(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(F(d)){var g=d,d=b.hasOwnProperty(g)?b[g]:gb(e.$scope,g,!0)||gb(c,g,!0);ra(d,g,!0)}return a.instantiate(d,e)}}]}function Cc(){this.$get=["$window",function(b){return y(b.document)}]}
function Dc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ec(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse",function(c){function d(d,f){for(var h,k,j=0,l=[],n=d.length,r=!1,o=[];j<n;)(h=d.indexOf(b,j))!=-1&&(k=d.indexOf(a,h+e))!=-1?(j!=h&&l.push(d.substring(j,h)),l.push(j=c(r=d.substring(h+e,k))),j.exp=r,j=k+g,r=!0):(j!=n&&l.push(d.substring(j)),j=n);if(!(n=
l.length))l.push(""),n=1;if(!f||r)return o.length=n,j=function(a){for(var b=0,c=n,d;b<c;b++){if(typeof(d=l[b])=="function")d=d(a),d==null||d==p?d="":typeof d!="string"&&(d=ca(d));o[b]=d}return o.join("")},j.exp=d,j.parts=l,j}var e=b.length,g=a.length;d.startSymbol=function(){return b};d.endSymbol=function(){return a};return d}]}function Fb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=$a(b[a]);return b.join("/")}function va(b,a){var c=Gb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Hb[c[1]]||
null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Hb[b]?"":":"+c)}function Fc(b,a,c){var d=va(b);return decodeURIComponent(d.path)!=a||t(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Gc(b,a,c){var d=va(b);if(decodeURIComponent(d.path)==a)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",i=a.substr(0,
a.lastIndexOf("/")),f=d.path.substr(i.length);if(d.path.indexOf(i)!==0)throw A('Invalid url "'+b+'", missing path prefix "'+i+'" !');return ka(d.protocol,d.host,d.port)+a+"#"+c+f+e+g}}function hb(b,a,c){a=a||"";this.$$parse=function(b){var c=va(b,this);if(c.path.indexOf(a)!==0)throw A('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Ya(c.search);this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=
function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ja(b,a,c){var d;this.$$parse=function(b){var c=va(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw A('Invalid url "'+b+'", missing hash prefix "'+a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Hc.exec((c.hash||"").substr(a.length));
this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Ya(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ib(b,a,c,d){Ja.apply(this,arguments);
this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ka(b){return function(){return this[b]}}function Jb(b,a){return function(c){if(t(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ic(){var b="",a=!1;this.hashPrefix=function(a){return u(a)?(b=a,this):b};this.html5Mode=function(b){return u(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function i(a){c.$broadcast("$locationChangeSuccess",
f.absUrl(),a)}var f,h,k,j=d.url(),l=va(j);a?(h=d.baseHref()||"/",k=h.substr(0,h.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+k+"/",f=e.history?new hb(Fc(j,h,b),k,l):new Ib(Gc(j,h,b),b,l,h.substr(k.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ja(j,b,l));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=y(a.target);E(b[0].nodeName)!=="a";)if(b[0]===g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);
d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),T.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=j&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);i(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url();if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),f.$$replace),f.$$replace=!1,i(a))});
return n});return f}]}function Jc(){this.$get=["$window",function(b){function a(a){a instanceof A&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||D;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),warn:c("warn"),info:c("info"),error:c("error")}}]}function Kc(b,
a){function c(a){return a.indexOf(q)!=-1}function d(){return o+1<b.length?b.charAt(o+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function i(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function h(a,c,d){d=d||o;throw A("Lexer Error: "+a+" at column"+(u(c)?"s "+c+"-"+o+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function k(){for(var a="",c=o;o<b.length;){var g=
E(b.charAt(o));if(g=="."||e(g))a+=g;else{var k=d();if(g=="e"&&f(k))a+=g;else if(f(g)&&k&&e(k)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!k||!e(k))&&a.charAt(a.length-1)=="e")h("Invalid exponent");else break}o++}a*=1;n.push({index:c,text:a,json:!0,fn:function(){return a}})}function j(){for(var c="",d=o,f,k,h;o<b.length;){var j=b.charAt(o);if(j=="."||i(j)||e(j))j=="."&&(f=o),c+=j;else break;o++}if(f)for(k=o;k<b.length;){j=b.charAt(k);if(j=="("){h=c.substr(f-d+1);c=c.substr(0,f-d);o=k;break}if(g(j))k++;
else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=d.json=La[c];else{var l=Kb(c,a);d.fn=x(function(a,b){return l(a,b)},{assign:function(a,b){return Lb(a,c,b)}})}n.push(d);h&&(n.push({index:f,text:".",json:!1}),n.push({index:f+1,text:h,json:!1}))}function l(a){var c=o;o++;for(var d="",e=a,f=!1;o<b.length;){var g=b.charAt(o);e+=g;if(f)g=="u"?(g=b.substring(o+1,o+5),g.match(/[\da-f]{4}/i)||h("Invalid unicode escape [\\u"+g+"]"),o+=4,d+=String.fromCharCode(parseInt(g,16))):(f=Lc[g],d+=f?f:g),
f=!1;else if(g=="\\")f=!0;else if(g==a){o++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;o++}h("Unterminated quote",c)}for(var n=[],r,o=0,w=[],q,v=":";o<b.length;){q=b.charAt(o);if(c("\"'"))l(q);else if(e(q)||c(".")&&e(d()))k();else if(i(q)){if(j(),"{,".indexOf(v)!=-1&&w[0]=="{"&&(r=n[n.length-1]))r.json=r.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:o,text:q,json:":[,".indexOf(v)!=-1&&c("{[")||c("}]:,")}),c("{[")&&w.unshift(q),c("}]")&&w.shift(),
o++;else if(g(q)){o++;continue}else{var m=q+d(),B=La[q],z=La[m];z?(n.push({index:o,text:m,fn:z}),o+=2):B?(n.push({index:o,text:q,fn:B,json:"[,:".indexOf(v)!=-1&&c("+-")}),o+=1):h("Unexpected next character ",o,o+1)}v=q}return n}function Mc(b,a,c,d){function e(a,c){throw A("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(N.length===0)throw A("Unexpected end of expression: "+b);return N[0]}function i(a,
b,c,d){if(N.length>0){var f=N[0],e=f.text;if(e==a||e==b||e==c||e==d||!a&&!b&&!c&&!d)return f}return!1}function f(b,c,d,f){return(b=i(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),N.shift(),b):!1}function h(a){f(a)||e("is unexpected, expecting ["+a+"]",i())}function k(a,b){return function(c,d){return a(c,d,b)}}function j(a,b,c){return function(d,f){return b(d,f,a,c)}}function l(){for(var a=[];;)if(N.length>0&&!i("}",")",";","]")&&a.push(t()),!f(";"))return a.length==1?a[0]:function(b,c){for(var d,
f=0;f<a.length;f++){var e=a[f];e&&(d=e(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(H());else{var e=function(a,c,f){for(var f=[f],e=0;e<d.length;e++)f.push(d[e](a,c));return b.apply(a,f)};return function(){return e}}}function r(){for(var a=o(),b;;)if(b=f("||"))a=j(a,b.fn,o());else return a}function o(){var a=w(),b;if(b=f("&&"))a=j(a,b.fn,o());return a}function w(){var a=q(),b;if(b=f("==","!="))a=j(a,b.fn,w());return a}function q(){var a;a=v();for(var b;b=f("+",
"-");)a=j(a,b.fn,v());if(b=f("<",">","<=",">="))a=j(a,b.fn,q());return a}function v(){for(var a=m(),b;b=f("*","/","%");)a=j(a,b.fn,m());return a}function m(){var a;return f("+")?B():(a=f("-"))?j(V,a.fn,m()):(a=f("!"))?k(a.fn,m()):B()}function B(){var a;if(f("("))a=t(),h(")");else if(f("["))a=z();else if(f("{"))a=L();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=y(a,c),c=null):b.text==="["?(c=a,a=ea(a)):b.text==="."?(c=a,a=u(a)):e("IMPOSSIBLE");
return a}function z(){var a=[];if(g().text!="]"){do a.push(H());while(f(","))}h("]");return function(b,c){for(var d=[],f=0;f<a.length;f++)d.push(a[f](b,c));return d}}function L(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;h(":");var c=H();a.push({key:b,value:c})}while(f(","))}h("}");return function(b,c){for(var d={},f=0;f<a.length;f++){var e=a[f],g=e.value(b,c);d[e.key]=g}return d}}var V=J(0),s,N=Kc(b,d),H=function(){var a=r(),c,d;return(d=f("="))?(a.assign||e("implies assignment but ["+
b.substring(0,d.index)+"] can not be assigned to",d),c=r(),function(b,d){return a.assign(b,c(b,d),d)}):a},y=function(a,b){var c=[];if(g().text!=")"){do c.push(H());while(f(","))}h(")");return function(d,f){for(var e=[],g=b?b(d,f):d,k=0;k<c.length;k++)e.push(c[k](d,f));k=a(d,f)||D;return k.apply?k.apply(g,e):k(e[0],e[1],e[2],e[3],e[4])}},u=function(a){var b=f().text,c=Kb(b,d);return x(function(b,d){return c(a(b,d),d)},{assign:function(c,d,f){return Lb(a(c,f),b,d)}})},ea=function(a){var b=H();h("]");
return x(function(c,d){var f=a(c,d),e=b(c,d),g;if(!f)return p;if((f=f[e])&&f.then){g=f;if(!("$$v"in f))g.$$v=p,g.then(function(a){g.$$v=a});f=f.$$v}return f},{assign:function(c,d,f){return a(c,f)[b(c,f)]=d}})},t=function(){for(var a=H(),b;;)if(b=f("|"))a=j(a,b.fn,n());else return a};a?(H=r,y=u=ea=t=function(){e("is not valid json",{text:b,index:0})},s=B()):s=l();N.length!==0&&e("is an unexpected token",N[0]);return s}function Lb(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),g=
b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function gb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,i=0;i<g;i++)d=a[i],b&&(b=(e=b)[d]);return!c&&M(b)?Wa(e,b):b}function Mb(b,a,c,d,e){return function(g,i){var f=i&&i.hasOwnProperty(b)?i:g,h;if(f===null||f===p)return f;if((f=f[b])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!a||f===null||f===p)return f;if((f=f[a])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!c||f===
null||f===p)return f;if((f=f[c])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!d||f===null||f===p)return f;if((f=f[d])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!e||f===null||f===p)return f;if((f=f[e])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}return f}}function Kb(b,a){if(ib.hasOwnProperty(b))return ib[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Mb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,
g;do g=Mb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=p,a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return ib[b]=e}function Nc(){var b={};this.$get=["$filter","$sniffer",
function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Mc(d,!1,a,c.csp);case "function":return d;default:return D}}}]}function Oc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Pc(function(a){b.$evalAsync(a)},a)}]}function Pc(b,a){function c(a){return a}function d(a){return i(a)}var e=function(){var f=[],h,k;return k={resolve:function(a){if(f){var c=f;f=p;h=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],
a[1])})}},reject:function(a){k.resolve(i(a))},promise:{then:function(b,g){var k=e(),i=function(d){try{k.resolve((b||c)(d))}catch(f){a(f),k.reject(f)}},o=function(b){try{k.resolve((g||d)(b))}catch(c){a(c),k.reject(c)}};f?f.push([i,o]):h.then(i,o);return k.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},i=function(a){return{then:function(c,g){var j=e();b(function(){j.resolve((g||d)(a))});return j.promise}}};return{defer:e,reject:i,
when:function(f,h,k){var j=e(),l,n=function(b){try{return(h||c)(b)}catch(d){return a(d),i(d)}},r=function(b){try{return(k||d)(b)}catch(c){return a(c),i(c)}};b(function(){g(f).then(function(a){l||(l=!0,j.resolve(g(a).then(n,r)))},function(a){l||(l=!0,j.resolve(r(a)))})});return j.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}function Qc(){var b={};this.when=
function(a,c){b[a]=x({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,i,f){function h(){var b=k(),h=r.current;if(b&&h&&b.$route===h.$route&&ga(b.pathParams,h.pathParams)&&!b.reloadOnSearch&&!n)h.params=b.params,U(h.params,d),a.$broadcast("$routeUpdate",h);else if(b||
h)n=!1,a.$broadcast("$routeChangeStart",b,h),(r.current=b)&&b.redirectTo&&(F(b.redirectTo)?c.path(j(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);c.push(M(b)?g.invoke(b):g.get(b))});if(!u(d=b.template))if(u(d=b.templateUrl))d=i.get(d,{cache:f}).then(function(a){return a.data});u(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c=
{};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==r.current){if(b)b.locals=c,U(b.params,d);a.$broadcast("$routeChangeSuccess",b,h)}},function(c){b==r.current&&a.$broadcast("$routeChangeError",b,h,c)})}function k(){var a,d;m(b,function(b,e){if(!d&&(a=l(c.path(),e)))d=ya(b,{params:x({},c.search(),a),pathParams:a}),d.$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function j(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var l=function(a,b){var c="^"+b.replace(/([\.\\\(\)\^\$])/g,"\\$1")+"$",d=[],e={};m(b.split(/\W/),function(a){if(a){var b=RegExp(":"+a+"([\\W])");c.match(b)&&(c=c.replace(b,"([^\\/]*)$1"),d.push(a))}});var f=a.match(RegExp(c));f&&m(d,function(a,b){e[a]=f[b+1]});return f?e:null},n=!1,r={routes:b,reload:function(){n=!0;a.$evalAsync(h)}};a.$on("$locationChangeSuccess",h);return r}]}function Rc(){this.$get=J({})}function Sc(){var b=
10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$asyncQueue=[];this.$$listeners={}}function g(a){if(h.$$phase)throw A(h.$$phase+" already in progress");h.$$phase=a}function i(a,b){var c=d(a);ra(c,b);return c}function f(){}e.prototype={$new:function(a){if(M(a))throw A("API-CHANGE: Use $controller to instantiate controllers.");
a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=i(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!M(b)){var h=i(b||D,"listener");g.fn=function(a,b,
c){h(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){za(e,g)}},$digest:function(){var a,d,e,i,r,o,m,q=b,v,p=[],B,z;g("$digest");do{m=!1;v=this;do{for(r=v.$$asyncQueue;r.length;)try{v.$eval(r.shift())}catch(L){c(L)}if(i=v.$$watchers)for(o=i.length;o--;)try{if(a=i[o],(d=a.get(v))!==(e=a.last)&&!(a.eq?ga(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,v),q<5&&(B=4-q,p[B]||(p[B]=[]),z=M(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,z+="; newVal: "+ca(d)+"; oldVal: "+ca(e),p[B].push(z))}catch(V){c(V)}if(!(i=v.$$childHead||v!==this&&v.$$nextSibling))for(;v!==this&&!(i=v.$$nextSibling);)v=v.$parent}while(v=i);if(m&&!q--)throw h.$$phase=null,A(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+ca(p));}while(m||r.length);h.$$phase=null},$destroy:function(){if(h!=this){var a=this.$parent;this.$broadcast("$destroy");if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==
this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{h.$$phase=null;try{h.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){za(c,
b)}},$emit:function(a,b){var d=[],e,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},i=[h].concat(ha.call(arguments,1)),m,p;do{e=f.$$listeners[a]||d;h.currentScope=f;m=0;for(p=e.length;m<p;m++)try{if(e[m].apply(null,i),g)return h}catch(B){c(B)}f=f.$parent}while(f);return h},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},
g=[f].concat(ha.call(arguments,1));do if(d=e,f.currentScope=d,m(d.$$listeners[a],function(a){try{a.apply(null,g)}catch(b){c(b)}}),!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent;while(d=e);return f}};var h=new e;return h}]}function Tc(){this.$get=["$window",function(b){var a={},c=G((/android (\d+)/.exec(E(b.navigator.userAgent))||[])[1]);return{history:!(!b.history||!b.history.pushState||c<4),hashchange:"onhashchange"in b&&(!b.document.documentMode||
b.document.documentMode>7),hasEvent:function(c){if(c=="input"&&$==9)return!1;if(t(a[c])){var e=b.document.createElement("div");a[c]="on"+c in e}return a[c]},csp:!1}}]}function Uc(){this.$get=J(T)}function Nb(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=E(Q(b.substr(0,e)));d=Q(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Ob(b){var a=I(b)?b:p;return function(c){a||(a=Nb(b));return c?a[E(c)]||null:a}}function Pb(b,a,c){if(M(c))return c(b,a);m(c,
function(c){b=c(b,a)});return b}function Vc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){F(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ob(d,!0)));return d}],transformRequest:[function(a){return I(a)&&Ta.apply(a)!=="[object File]"?ca(a):a}],headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},
e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,h,k,j){function l(a){function c(a){var b=x({},a,{data:Pb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:k.reject(b)}a.method=la(a.method);var e=a.transformRequest||d.transformRequest,f=a.transformResponse||d.transformResponse,g=d.headers,g=x({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},g.common,g[E(a.method)],a.headers),e=Pb(a.data,Ob(g),e),h;t(a.data)&&delete g["Content-Type"];
h=n(a,e,g);h=h.then(c,c);m(w,function(a){h=a(h)});h.success=function(b){h.then(function(c){b(c.data,c.status,c.headers,a)});return h};h.error=function(b){h.then(null,function(c){b(c.data,c.status,c.headers,a)});return h};return h}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(w,[a,b,Nb(c)]):m.remove(w));f(b,a,c);h.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?j.resolve:j.reject)({data:a,status:c,headers:Ob(d),config:b})}function i(){var a=Va(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,
1)}var j=k.defer(),n=j.promise,m,p,w=r(b.url,b.params);l.pendingRequests.push(b);n.then(i,i);b.cache&&b.method=="GET"&&(m=I(b.cache)?b.cache:o);if(m)if(p=m.get(w))if(p.then)return p.then(i,i),p;else K(p)?f(p[1],p[0],U(p[2])):f(p,200,{});else m.put(w,n);p||a(b.method,w,c,e,d,b.timeout,b.withCredentials);return n}function r(a,b){if(!b)return a;var c=[];fc(b,function(a,b){a==null||a==p||(I(a)&&(a=ca(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});return a+(a.indexOf("?")==-1?"?":"&")+
c.join("&")}var o=c("$http"),w=[];m(e,function(a){w.push(F(a)?j.get(a):j.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(x(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=function(b,c,d){return l(x(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function Wc(){this.$get=["$browser","$window","$document",function(b,a,c){return Xc(b,Yc,b.defer,a.angular.callbacks,c[0],
a.location.protocol.replace(":",""))}]}function Xc(b,a,c,d,e,g){function i(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;$?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,h,k,j,l,n,r){function o(a,c,d,e){c=(h.match(Gb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(D)}b.$$incOutstandingRequestCount();h=h||b.url();
if(E(e)=="jsonp"){var p="_"+(d.counter++).toString(36);d[p]=function(a){d[p].data=a};i(h.replace("JSON_CALLBACK","angular.callbacks."+p),function(){d[p].data?o(j,200,d[p].data):o(j,-2);delete d[p]})}else{var q=new a;q.open(e,h,!0);m(l,function(a,b){a&&q.setRequestHeader(b,a)});var v;q.onreadystatechange=function(){q.readyState==4&&o(j,v||q.status,q.responseText,q.getAllResponseHeaders())};if(r)q.withCredentials=!0;q.send(k||"");n>0&&c(function(){v=-1;q.abort()},n)}}}function Zc(){this.$get=function(){return{id:"en-us",
NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function $c(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,h){var k=c.defer(),j=k.promise,l=u(h)&&!h,f=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),
d(a)}l||b.$apply()},f),h=function(){delete g[j.$$timeoutId]};j.$$timeoutId=f;g[f]=k;j.then(h,h);return j}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Qb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Rb);a("date",Sb);a("filter",ad);a("json",bd);a("limitTo",cd);a("lowercase",dd);a("number",
Tb);a("orderBy",Ub);a("uppercase",ed)}function ad(){return function(b,a){if(!(b instanceof Array))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;
default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(gb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=[],i=0;i<b.length;i++){var f=b[i];c.check(f)&&g.push(f)}return g}}function Rb(b){var a=b.NUMBER_FORMATS;return function(b,d){if(t(d))d=a.CURRENCY_SYM;
return Vb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Tb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Vb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Vb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),i=b+"",f="",h=[];if(i.indexOf("e")!==-1)f=i;else{i=(i.split(Wb)[1]||"").length;t(e)&&(e=Math.min(Math.max(a.minFrac,i),a.maxFrac));var i=Math.pow(10,e),b=Math.round(b*i)/i,b=(""+b).split(Wb),i=b[0],b=b[1]||"",k=0,j=a.lgSize,l=a.gSize;
if(i.length>=j+l)for(var k=i.length-j,n=0;n<k;n++)(k-n)%l===0&&n!==0&&(f+=c),f+=i.charAt(n);for(n=k;n<i.length;n++)(i.length-n)%j===0&&n!==0&&(f+=c),f+=i.charAt(n);for(;b.length<e;)b+="0";e&&(f+=d+b.substr(0,e))}h.push(g?a.negPre:a.posPre);h.push(f);h.push(g?a.negSuf:a.posSuf);return h.join("")}function jb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function O(b,a,c,d){return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=
12);return jb(e,a,d)}}function Ma(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Sb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,i=0;b[9]&&(g=G(b[9]+b[10]),i=G(b[9]+b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-i,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;return function(c,e){var g="",i=[],f,h,e=e||
"mediumDate",e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=fd.test(c)?G(c):a(c));wa(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(h=gd.exec(e))?(i=i.concat(ha.call(h,1)),e=i.pop()):(i.push(e),e=null);m(i,function(a){f=hd[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function bd(){return function(b){return ca(b,!0)}}function cd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof Array))return c;a>b.length?a=b.length:a<
-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Ub(b){return function(a,c,d){function e(a,b){return Xa(b)?function(b,c){return a(c,b)}:a}if(!(a instanceof Array))return a;if(!c)return a;for(var c=K(c)?c:[c],c=Ua(c,function(a){var c=!1,d=a||ma;if(F(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?(f=="string"&&(c=c.toLowerCase()),
f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],i=0;i<a.length;i++)g.push(a[i]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function R(b){M(b)&&(b={link:b});b.restrict=b.restrict||"AC";return J(b)}function Xb(b,a){function c(a,c){c=c?"-"+ab(c,"-"):"";b.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}var d=this,e=b.parent().controller("form")||Pa,g=0,i=d.$error={};d.$name=a.name;d.$dirty=!1;d.$pristine=
!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Qa);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(i,function(b,c){d.$setValidity(c,!0,a)})};d.$setValidity=function(a,b,k){var j=i[a];if(b){if(j&&(za(j,k),!j.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;i[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(j){if(Va(j,k)!=-1)return}else i[a]=j=[],g++,c(!1,a),e.$setValidity(a,
!1,d);j.push(k);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Qa).addClass(Yb);d.$dirty=!0;d.$pristine=!1}}function S(b){return t(b)||b===""||b===null||b!==b}function Ra(b,a,c,d,e,g){var i=function(){var c=Q(a.val());d.$viewValue!==c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",i);else{var f;a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||f||(f=g.defer(function(){i();f=null}))});a.bind("change",i)}d.$render=function(){a.val(S(d.$viewValue)?
"":d.$viewValue)};var h=c.ngPattern,k=function(a,b){return S(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),p)};h&&(h.match(/^\/(.*)\/$/)?(h=RegExp(h.substr(1,h.length-2)),e=function(a){return k(h,a)}):e=function(a){var c=b.$eval(h);if(!c||!c.test)throw new A("Expected "+h+" to be a RegExp but was "+c);return k(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var j=G(c.ngMinlength),e=function(a){return!S(a)&&a.length<j?(d.$setValidity("minlength",!1),
p):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var l=G(c.ngMaxlength),c=function(a){return!S(a)&&a.length>l?(d.$setValidity("maxlength",!1),p):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function kb(b,a){b="ngClass"+b;return R(function(c,d,e){c.$watch(e[b],function(b,e){if(a===!0||c.$index%2===a)e&&b!==e&&(I(e)&&!K(e)&&(e=Ua(e,function(a,b){if(a)return b})),d.removeClass(K(e)?e.join(" "):e)),I(b)&&!K(b)&&(b=Ua(b,
function(a,b){if(a)return b})),b&&d.addClass(K(b)?b.join(" "):b)},!0)})}var E=function(b){return F(b)?b.toLowerCase():b},la=function(b){return F(b)?b.toUpperCase():b},A=T.Error,$=G((/msie (\d+)/.exec(E(navigator.userAgent))||[])[1]),y,ia,ha=[].slice,Sa=[].push,Ta=Object.prototype.toString,Zb=T.angular||(T.angular={}),ta,Db,Z=["0","0","0"];D.$inject=[];ma.$inject=[];Db=$<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?
b.nodeName:b[0].nodeName};var lc=/[A-Z]/g,id={full:"1.0.2",major:1,minor:0,dot:2,codeName:"debilitating-awesomeness"},Ba=P.cache={},Aa=P.expando="ng-"+(new Date).getTime(),pc=1,$b=T.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},eb=T.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},nc=/([\:\-\_]+(.))/g,oc=/^moz([A-Z])/,ua=P.prototype={ready:function(b){function a(){c||
(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);P(T).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?y(this[b]):y(this[this.length+b])},length:0,push:Sa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),function(b){Ea[E(b)]=b});var Ab={};m("input,select,option,textarea,button,form".split(","),function(b){Ab[la(b)]=!0});m({data:vb,inheritedData:Da,scope:function(b){return Da(b,
"$scope")},controller:yb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=sb(a);if(u(c))b.style[a]=c;else{var d;$<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];$<=8&&(d=d===""?p:d);return d}},attr:function(b,a,c){var d=E(a);if(Ea[d])if(u(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||D).specified?d:p;else if(u(c))b.setAttribute(a,
c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?p:b},prop:function(b,a,c){if(u(c))b[a]=c;else return b[a]},text:x($<9?function(b,a){if(b.nodeType==1){if(t(a))return b.innerText;b.innerText=a}else{if(t(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(t(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(t(a))return b.value;b.value=a},html:function(b,a){if(t(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)sa(d[c]);b.innerHTML=a}},function(b,
a){P.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==yb?a:d)===p)if(I(a)){for(e=0;e<this.length;e++)if(b===vb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:tb,dealoc:sa,bind:function a(c,d,e){var g=da(c,"events"),i=da(c,"handle");g||da(c,"events",g={});i||da(c,"handle",i=qc(c,g));m(d.split(" "),function(d){var h=g[d];if(!h){if(d=="mouseenter"||
d=="mouseleave"){var k=0;g.mouseenter=[];g.mouseleave=[];a(c,"mouseover",function(a){k++;k==1&&i(a,"mouseenter")});a(c,"mouseout",function(a){k--;k==0&&i(a,"mouseleave")})}else $b(c,d,i),g[d]=[];h=g[d]}h.push(e)})},unbind:ub,replaceWith:function(a,c){var d,e=a.parentNode;sa(a);m(new P(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeName!="#text"&&c.push(a)});return c},contents:function(a){return a.childNodes},
append:function(a,c){m(new P(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new P(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=y(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){sa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new P(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:xb,removeClass:wb,toggleClass:function(a,
c,d){t(d)&&(d=!Ca(a,c));(d?xb:wb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){return a.nextSibling},find:function(a,c){return a.getElementsByTagName(c)},clone:db},function(a,c){P.prototype[c]=function(c,e){for(var g,i=0;i<this.length;i++)g==p?(g=a(this[i],c,e),g!==p&&(g=y(g))):cb(g,a(this[i],c,e));return g==p?this:g}});Fa.prototype={put:function(a,c){this[ja(a)]=c},get:function(a){return this[ja(a)]},remove:function(a){var c=this[a=ja(a)];delete this[a];
return c}};fb.prototype={push:function(a,c){var d=this[a=ja(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=ja(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()}};var sc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,tc=/,/,uc=/^\s*(_?)(.+?)\1\s*$/,rc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Eb="Non-assignable model expression: ";Cb.$inject=["$provide"];var Ac=/^(x[\:\-_]|data[\:\-_])/i,Gb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,ac=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
Hc=ac,Hb={http:80,https:443,ftp:21};hb.prototype={$$replace:!1,absUrl:Ka("$$absUrl"),url:function(a,c){if(t(a))return this.$$url;var d=ac.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ka("$$protocol"),host:Ka("$$host"),port:Ka("$$port"),path:Jb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(t(a))return this.$$search;u(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=
F(a)?Ya(a):a;this.$$compose();return this},hash:Jb("$$hash",ma),replace:function(){this.$$replace=!0;return this}};Ja.prototype=ya(hb.prototype);Ib.prototype=ya(Ja.prototype);var La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:D,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return(u(d)?d:0)+(u(e)?e:0)},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(u(d)?d:0)-(u(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/
e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":D,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&
e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Lc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},ib={},Yc=T.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw new A("This browser does not support XMLHttpRequest.");};Qb.$inject=["$provide"];Rb.$inject=["$locale"];Tb.$inject=["$locale"];
var Wb=".",hd={yyyy:O("FullYear",4),yy:O("FullYear",2,0,!0),y:O("FullYear",1),MMMM:Ma("Month"),MMM:Ma("Month",!0),MM:O("Month",2,1),M:O("Month",1,1),dd:O("Date",2),d:O("Date",1),HH:O("Hours",2),H:O("Hours",1),hh:O("Hours",2,-12),h:O("Hours",1,-12),mm:O("Minutes",2),m:O("Minutes",1),ss:O("Seconds",2),s:O("Seconds",1),EEEE:Ma("Day"),EEE:Ma("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=a.getTimezoneOffset();return jb(a/60,2)+jb(Math.abs(a%60),2)}},gd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
fd=/^\d+$/;Sb.$inject=["$locale"];var dd=J(E),ed=J(la);Ub.$inject=["$parse"];var jd=J({restrict:"E",compile:function(a,c){c.href||c.$set("href","");return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),lb={};m(Ea,function(a,c){var d=fa("ng-"+c);lb[d]=function(){return{priority:100,compile:function(){return function(a,g,i){a.$watch(i[d],function(a){i.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=fa("ng-"+a);lb[c]=function(){return{priority:99,link:function(d,
e,g){g.$observe(c,function(c){g.$set(a,c);$&&e.prop(a,c)})}}}});var Pa={$addControl:D,$removeControl:D,$setValidity:D,$setDirty:D};Xb.$inject=["$element","$attrs","$scope"];var Sa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:Xb,compile:function(){return{pre:function(a,d,i,f){if(!i.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};$b(d[0],"submit",h);d.bind("$destroy",function(){c(function(){eb(d[0],"submit",h)},0,!1)})}var k=d.parent().controller("form"),
j=i.name||i.ngForm;j&&(a[j]=f);k&&d.bind("$destroy",function(){k.$removeControl(f);j&&(a[j]=p);x(f,Pa)})}}}};return a?x(U(d),{restrict:"EAC"}):d}]},kd=Sa(),ld=Sa(!0),md=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,nd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,od=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,bc={text:Ra,number:function(a,c,d,e,g,i){Ra(a,c,d,e,g,i);e.$parsers.push(function(a){var c=S(a);return c||od.test(a)?(e.$setValidity("number",!0),a===""?
null:c?a:parseFloat(a)):(e.$setValidity("number",!1),p)});e.$formatters.push(function(a){return S(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!S(a)&&a<f?(e.$setValidity("min",!1),p):(e.$setValidity("min",!0),a)};e.$parsers.push(a);e.$formatters.push(a)}if(d.max){var h=parseFloat(d.max),d=function(a){return!S(a)&&a>h?(e.$setValidity("max",!1),p):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return S(a)||wa(a)?(e.$setValidity("number",
!0),a):(e.$setValidity("number",!1),p)})},url:function(a,c,d,e,g,i){Ra(a,c,d,e,g,i);a=function(a){return S(a)||md.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),p)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,i){Ra(a,c,d,e,g,i);a=function(a){return S(a)||nd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),p)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){t(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&
a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,i=d.ngFalseValue;F(g)||(g=!0);F(i)||(i=!1);c.bind("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:i})},hidden:D,button:D,submit:D,reset:D},cc=["$browser","$sniffer",
function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,i){i&&(bc[E(g.type)]||bc.text)(d,e,g,i,c,a)}}}],Oa="ng-valid",Na="ng-invalid",Qa="ng-pristine",Yb="ng-dirty",pd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function i(a,c){c=c?"-"+ab(c,"-"):"";e.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=
!0;this.$invalid=!1;this.$name=d.name;var g=g(d.ngModel),f=g.assign;if(!f)throw A(Eb+d.ngModel+" ("+pa(e)+")");this.$render=D;var h=e.inheritedData("$formController")||Pa,k=0,j=this.$error={};e.addClass(Qa);i(!0);this.$setValidity=function(a,c){if(j[a]!==!c){if(c){if(j[a]&&k--,!k)i(!0),this.$valid=!0,this.$invalid=!1}else i(!1),this.$invalid=!0,this.$valid=!1,k++;j[a]=!c;i(c,a);h.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=
!1,e.removeClass(Qa).addClass(Yb),h.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,f(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var l=this;a.$watch(g,function(a){if(l.$modelValue!==a){var c=l.$formatters,d=c.length;for(l.$modelValue=a;d--;)a=c[d](a);if(l.$viewValue!==a)l.$viewValue=a,l.$render()}})}],qd=function(){return{require:["ngModel","^?form"],controller:pd,link:function(a,c,d,e){var g=e[0],i=e[1]||Pa;i.$addControl(g);
c.bind("$destroy",function(){i.$removeControl(g)})}}},rd=J({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),dc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&(S(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},sd=function(){return{require:"ngModel",
link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(Q(a))});return c});e.$formatters.push(function(a){return K(a)?a.join(", "):p})}}},td=/^(true|false|\d+)$/,ud=function(){return{priority:100,compile:function(a,c){return td.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},vd=R(function(a,c,d){c.addClass("ng-binding").data("$binding",
d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==p?"":a)})}),wd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],xd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],yd=kb("",!0),zd=kb("Odd",0),Ad=kb("Even",1),Bd=R({compile:function(a,c){c.$set("ngCloak",p);
a.removeClass("ng-cloak")}}),Cd=[function(){return{scope:!0,controller:"@"}}],Dd=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],ec={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),function(a){var c=fa("ng-"+a);ec[c]=["$parse",function(d){return function(e,g,i){var f=d(i[c]);g.bind(E(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Ed=R(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),
Fd=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,i){var f=i.ngInclude||i.src,h=i.onload||"",k=i.autoscroll;return function(g,i){var n=0,m,o=function(){m&&(m.$destroy(),m=null);i.html("")};g.$watch(f,function(f){var q=++n;f?a.get(f,{cache:c}).success(function(a){q===n&&(m&&m.$destroy(),m=g.$new(),i.html(a),e(i.contents())(m),u(k)&&(!k||g.$eval(k))&&d(),m.$emit("$includeContentLoaded"),g.$eval(h))}).error(function(){q===n&&
o()}):o()})}}}}],Gd=R({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Hd=R({terminal:!0,priority:1E3}),Id=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,i){var f=i.count,h=g.attr(i.$attr.when),k=i.offset||0,j=e.$eval(h),l={},n=c.startSymbol(),r=c.endSymbol();m(j,function(a,e){l[e]=c(a.replace(d,n+f+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(j[c]||(c=a.pluralCat(c-k)),l[c](e,g,!0))},function(a){g.text(a)})}}}],
Jd=R({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,i){var f=i.ngRepeat,i=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),h,k,j;if(!i)throw A("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=i[1];h=i[2];i=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!i)throw A("'item' in 'item in collection' should be identifier or (key, value) but got '"+f+"'.");k=i[3]||i[1];j=i[2];var l=new fb;a.$watch(function(a){var e,f,i=a.$eval(h),m=hc(i,
!0),p,y=new fb,B,z,t,u,s=c;if(K(i))t=i||[];else{t=[];for(B in i)i.hasOwnProperty(B)&&B.charAt(0)!="$"&&t.push(B);t.sort()}e=0;for(f=t.length;e<f;e++){B=i===t?e:t[e];z=i[B];if(u=l.shift(z)){p=u.scope;y.push(z,u);if(e!==u.index)u.index=e,s.after(u.element);s=u.element}else p=a.$new();p[k]=z;j&&(p[j]=B);p.$index=e;p.$first=e===0;p.$last=e===m-1;p.$middle=!(p.$first||p.$last);u||d(p,function(a){s.after(a);u={scope:p,element:s=a,index:e};y.push(z,u)})}for(B in l)if(l.hasOwnProperty(B))for(t=l[B];t.length;)z=
t.pop(),z.element.remove(),z.scope.$destroy();l=y})}}}),Kd=R(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Xa(a)?"":"none")})}),Ld=R(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Xa(a)?"none":"")})}),Md=R(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Nd=J({restrict:"EA",compile:function(a,c){var d=c.ngSwitch||c.on,e={};a.data("ng-switch",e);return function(a,i){var f,h,k;a.$watch(d,function(d){h&&(k.$destroy(),
h.remove(),h=k=null);if(f=e["!"+d]||e["?"])a.$eval(c.change),k=a.$new(),f(k,function(a){h=a;i.append(a)})})}}}),Od=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["!"+c.ngSwitchWhen]=d}}),Pd=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["?"]=d}}),Qd=R({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Rd=["$http","$templateCache","$route","$anchorScroll","$compile",
"$controller",function(a,c,d,e,g,i){return{restrict:"ECA",terminal:!0,link:function(a,c,k){function j(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=i(m.controller,j),c.contents().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=k.onload||"";a.$on("$routeChangeSuccess",j);j()}}}],Sd=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Td=J({terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:D};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var h=this,k={},j=e,l;h.databound=d.ngModel;
h.init=function(a,c,d){j=a;l=d};h.addOption=function(c){k[c]=!0;j.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};h.removeOption=function(a){this.hasOption(a)&&(delete k[a],j.$viewValue==a&&this.renderUnknownOption(a))};h.renderUnknownOption=function(c){c="? "+ja(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};h.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){h.renderUnknownOption=D})}],link:function(e,i,f,h){function k(a,c,d,e){d.$render=function(){var a=
d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),a===""&&v.prop("selected",!0)):t(a)&&v?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function j(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.children(),function(c){c.selected=u(a.get(c.value))})};a.$watch(function(){ga(e,d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.children(),
function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function h(){var a={"":[]},c=[""],d,i,t,u,s;t=g.$modelValue;u=r(e)||[];var y=l?mb(u):u,z,w,x;w={};s=!1;var C,A;if(o)s=new Fa(t);else if(t===null||q)a[""].push({selected:t===null,id:"",label:""}),s=!0;for(x=0;z=y.length,x<z;x++){w[k]=u[l?w[l]=y[x]:x];d=m(e,w)||"";if(!(i=a[d]))i=a[d]=[],c.push(d);o?d=s.remove(n(e,w))!=p:(d=t===n(e,w),s=s||d);i.push({id:l?y[x]:x,label:j(e,w)||"",selected:d})}!o&&!s&&a[""].unshift({id:"?",
label:"",selected:!0});w=0;for(y=c.length;w<y;w++){d=c[w];i=a[d];if(v.length<=w)t={element:B.clone().attr("label",d),label:i.label},u=[t],v.push(u),f.append(t.element);else if(u=v[w],t=u[0],t.label!=d)t.element.attr("label",t.label=d);C=null;x=0;for(z=i.length;x<z;x++)if(d=i[x],s=u[x+1]){C=s.element;if(s.label!==d.label)C.text(s.label=d.label);if(s.id!==d.id)C.val(s.id=d.id);if(s.element.selected!==d.selected)C.prop("selected",s.selected=d.selected)}else d.id===""&&q?A=q:(A=D.clone()).val(d.id).attr("selected",
d.selected).text(d.label),u.push({element:A,label:d.label,id:d.id,selected:d.selected}),C?C.after(A):t.element.append(A),C=A;for(x++;u.length>x;)u.pop().element.remove()}for(;v.length>w;)v.pop()[0].element.remove()}var i;if(!(i=w.match(d)))throw A("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+w+"'.");var j=c(i[2]||i[1]),k=i[4]||i[6],l=i[5],m=c(i[3]||""),n=c(i[2]?i[1]:k),r=c(i[7]),v=[[{element:f,label:""}]];q&&(a(q)(e),q.removeClass("ng-scope"),
q.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=r(e)||[],d={},h,i,j,m,q,s;if(o){i=[];m=0;for(s=v.length;m<s;m++){a=v[m];j=1;for(q=a.length;j<q;j++)if((h=a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=p:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=h;e.$watch(h)}if(h[1]){for(var n=h[0],r=h[1],o=f.multiple,w=f.ngOptions,q=!1,v,D=y(ba.createElement("option")),B=y(ba.createElement("optgroup")),
z=D.clone(),h=0,x=i.children(),E=x.length;h<E;h++)if(x[h].value==""){v=q=x.eq(h);break}n.init(r,q,z);if(o&&(f.required||f.ngRequired)){var s=function(a){r.$setValidity("required",!f.required||a&&a.length);return a};r.$parsers.push(s);r.$formatters.unshift(s);f.$observe("required",function(){s(r.$viewValue)})}w?l(e,i,r):o?j(e,i,r):k(e,i,r,n)}}}}],Vd=["$interpolate",function(a){var c={addOption:D,removeOption:D};return{restrict:"E",priority:100,compile:function(d,e){if(t(e.value)){var g=a(d.text(),
!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),j=k.data("$selectController")||k.parent().data("$selectController");j&&j.databound?d.prop("selected",!1):j=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&j.removeOption(c);j.addOption(a)}):j.addOption(e.value);d.bind("$destroy",function(){j.removeOption(e.value)})}}}}],Wd=J({restrict:"E",terminal:!0});(ia=T.jQuery)?(y=ia,x(ia.fn,{scope:ua.scope,controller:ua.controller,injector:ua.injector,inheritedData:ua.inheritedData}),
bb("remove",!0),bb("empty"),bb("html")):y=P;Zb.element=y;(function(a){x(a,{bootstrap:qb,copy:U,extend:x,equals:ga,element:y,forEach:m,injector:rb,noop:D,bind:Wa,toJson:ca,fromJson:ob,identity:ma,isUndefined:t,isDefined:u,isString:F,isFunction:M,isObject:I,isNumber:wa,isElement:gc,isArray:K,version:id,isDate:na,lowercase:E,uppercase:la,callbacks:{counter:0}});ta=mc(T);try{ta("ngLocale")}catch(c){ta("ngLocale",[]).provider("$locale",Zc)}ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",
Cb).directive({a:jd,input:cc,textarea:cc,form:kd,script:Sd,select:Ud,style:Wd,option:Vd,ngBind:vd,ngBindHtmlUnsafe:xd,ngBindTemplate:wd,ngClass:yd,ngClassEven:Ad,ngClassOdd:zd,ngCsp:Dd,ngCloak:Bd,ngController:Cd,ngForm:ld,ngHide:Ld,ngInclude:Fd,ngInit:Gd,ngNonBindable:Hd,ngPluralize:Id,ngRepeat:Jd,ngShow:Kd,ngSubmit:Ed,ngStyle:Md,ngSwitch:Nd,ngSwitchWhen:Od,ngSwitchDefault:Pd,ngOptions:Td,ngView:Rd,ngTransclude:Qd,ngModel:qd,ngList:sd,ngChange:rd,required:dc,ngRequired:dc,ngValue:ud}).directive(lb).directive(ec);
a.provider({$anchorScroll:vc,$browser:xc,$cacheFactory:yc,$controller:Bc,$document:Cc,$exceptionHandler:Dc,$filter:Qb,$interpolate:Ec,$http:Vc,$httpBackend:Wc,$location:Ic,$log:Jc,$parse:Nc,$route:Qc,$routeParams:Rc,$rootScope:Sc,$q:Oc,$sniffer:Tc,$templateCache:zc,$timeout:$c,$window:Uc})}])})(Zb);y(ba).ready(function(){kc(ba,qb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

define("angular", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.angular;
    };
}(this)));

/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
define('bootstrap-datepicker',['jquery'],function($){
    function UTCDate(){
        return new Date(Date.UTC.apply(Date, arguments));
    }
    function UTCToday(){
        var today = new Date();
        return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    }

    // Picker object

    var Datepicker = function(element, options) {
        var that = this;

        this.element = $(element);
        this.language = options.language||this.element.data('date-language')||"en";
        this.language = this.language in dates ? this.language : this.language.split('-')[0]; //Check if "de-DE" style date is available, if not language should fallback to 2 letter code eg "de"
        this.language = this.language in dates ? this.language : "en";
        this.isRTL = dates[this.language].rtl||false;
        this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||dates[this.language].format||'mm/dd/yyyy');
        this.isInline = false;
        this.isInput = this.element.is('input');
        this.component = this.element.is('.date') ? this.element.find('.add-on, .btn') : false;
        this.hasInput = this.component && this.element.find('input').length;
        if(this.component && this.component.length === 0)
            this.component = false;

        this.forceParse = true;
        if ('forceParse' in options) {
            this.forceParse = options.forceParse;
        } else if ('dateForceParse' in this.element.data()) {
            this.forceParse = this.element.data('date-force-parse');
        }

        this.picker = $(DPGlobal.template);
        this._buildEvents();
        this._attachEvents();

        if(this.isInline) {
            this.picker.addClass('datepicker-inline').appendTo(this.element);
        } else {
            this.picker.addClass('datepicker-dropdown dropdown-menu');
        }
        if (this.isRTL){
            this.picker.addClass('datepicker-rtl');
            this.picker.find('.prev i, .next i')
                .toggleClass('icon-arrow-left icon-arrow-right');
        }

        this.autoclose = false;
        if ('autoclose' in options) {
            this.autoclose = options.autoclose;
        } else if ('dateAutoclose' in this.element.data()) {
            this.autoclose = this.element.data('date-autoclose');
        }

        this.keyboardNavigation = true;
        if ('keyboardNavigation' in options) {
            this.keyboardNavigation = options.keyboardNavigation;
        } else if ('dateKeyboardNavigation' in this.element.data()) {
            this.keyboardNavigation = this.element.data('date-keyboard-navigation');
        }

        this.viewMode = this.startViewMode = 0;
        switch(options.startView || this.element.data('date-start-view')){
            case 2:
            case 'decade':
                this.viewMode = this.startViewMode = 2;
                break;
            case 1:
            case 'year':
                this.viewMode = this.startViewMode = 1;
                break;
        }

        this.minViewMode = options.minViewMode||this.element.data('date-min-view-mode')||0;
        if (typeof this.minViewMode === 'string') {
            switch (this.minViewMode) {
                case 'months':
                    this.minViewMode = 1;
                    break;
                case 'years':
                    this.minViewMode = 2;
                    break;
                default:
                    this.minViewMode = 0;
                    break;
            }
        }

        this.viewMode = this.startViewMode = Math.max(this.startViewMode, this.minViewMode);

        this.todayBtn = (options.todayBtn||this.element.data('date-today-btn')||false);
        this.todayHighlight = (options.todayHighlight||this.element.data('date-today-highlight')||false);

        this.calendarWeeks = false;
        if ('calendarWeeks' in options) {
            this.calendarWeeks = options.calendarWeeks;
        } else if ('dateCalendarWeeks' in this.element.data()) {
            this.calendarWeeks = this.element.data('date-calendar-weeks');
        }
        if (this.calendarWeeks)
            this.picker.find('tfoot th.today')
                .attr('colspan', function(i, val){
                    return parseInt(val) + 1;
                });

        this._allow_update = false;

        this.weekStart = ((options.weekStart||this.element.data('date-weekstart')||dates[this.language].weekStart||0) % 7);
        this.weekEnd = ((this.weekStart + 6) % 7);
        this.startDate = -Infinity;
        this.endDate = Infinity;
        this.daysOfWeekDisabled = [];
        this.setStartDate(options.startDate||this.element.data('date-startdate'));
        this.setEndDate(options.endDate||this.element.data('date-enddate'));
        this.setDaysOfWeekDisabled(options.daysOfWeekDisabled||this.element.data('date-days-of-week-disabled'));
        this.fillDow();
        this.fillMonths();

        this._allow_update = true;

        this.update();
        this.showMode();

        if(this.isInline) {
            this.show();
        }
    };

    Datepicker.prototype = {
        constructor: Datepicker,

        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(evs){
            for (var i=0, el, ev; i<evs.length; i++){
                el = evs[i][0];
                ev = evs[i][1];
                el.on(ev);
            }
        },
        _unapplyEvents: function(evs){
            for (var i=0, el, ev; i<evs.length; i++){
                el = evs[i][0];
                ev = evs[i][1];
                el.off(ev);
            }
        },
        _buildEvents: function(){
            if (this.isInput) { // single input
                this._events = [
                    [this.element, {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(this.update, this),
                        keydown: $.proxy(this.keydown, this)
                    }]
                ];
            }
            else if (this.component && this.hasInput){ // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.element.find('input'), {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(this.update, this),
                        keydown: $.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
            else if (this.element.is('div')) {  // inline datepicker
                this.isInline = true;
            }
            else {
                this._events = [
                    [this.element, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }

            this._secondaryEvents = [
                [this.picker, {
                    click: $.proxy(this.click, this)
                }],
                [$(window), {
                    resize: $.proxy(this.place, this)
                }],
                [$(document), {
                    mousedown: $.proxy(function (e) {
                        // Clicked outside the datepicker, hide it
                        if ($(e.target).closest('.datepicker.datepicker-inline, .datepicker.datepicker-dropdown').length === 0) {
                            this.hide();
                        }
                    }, this)
                }]
            ];
        },
        _attachEvents: function(){
            this._detachEvents();
            this._applyEvents(this._events);
        },
        _detachEvents: function(){
            this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function(){
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function(){
            this._unapplyEvents(this._secondaryEvents);
        },

        show: function(e) {
            if (!this.isInline)
                this.picker.appendTo('body');
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.place();
            this._attachSecondaryEvents();
            if (e) {
                e.preventDefault();
            }
            this.element.trigger({
                type: 'show',
                date: this.date
            });
        },

        hide: function(e){
            if(this.isInline) return;
            if (!this.picker.is(':visible')) return;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.viewMode = this.startViewMode;
            this.showMode();

            if (
                this.forceParse &&
                    (
                        this.isInput && this.element.val() ||
                            this.hasInput && this.element.find('input').val()
                        )
                )
                this.setValue();
            this.element.trigger({
                type: 'hide',
                date: this.date
            });
        },

        remove: function() {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput) {
                delete this.element.data().date;
            }
        },

        getDate: function() {
            var d = this.getUTCDate();
            return new Date(d.getTime() + (d.getTimezoneOffset()*60000));
        },

        getUTCDate: function() {
            return this.date;
        },

        setDate: function(d) {
            this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset()*60000)));
        },

        setUTCDate: function(d) {
            this.date = d;
            this.setValue();
        },

        setValue: function() {
            var formatted = this.getFormattedDate();
            if (!this.isInput) {
                if (this.component){
                    this.element.find('input').val(formatted);
                }
                this.element.data('date', formatted);
            } else {
                this.element.val(formatted);
            }
        },

        getFormattedDate: function(format) {
            if (format === undefined)
                format = this.format;
            return DPGlobal.formatDate(this.date, format, this.language);
        },

        setStartDate: function(startDate){
            this.startDate = startDate||-Infinity;
            if (this.startDate !== -Infinity) {
                this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language);
            }
            this.update();
            this.updateNavArrows();
        },

        setEndDate: function(endDate){
            this.endDate = endDate||Infinity;
            if (this.endDate !== Infinity) {
                this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language);
            }
            this.update();
            this.updateNavArrows();
        },

        setDaysOfWeekDisabled: function(daysOfWeekDisabled){
            this.daysOfWeekDisabled = daysOfWeekDisabled||[];
            if (!$.isArray(this.daysOfWeekDisabled)) {
                this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
            }
            this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
                return parseInt(d, 10);
            });
            this.update();
            this.updateNavArrows();
        },

        place: function(){
            if(this.isInline) return;
            var zIndex = parseInt(this.element.parents().filter(function() {
                return $(this).css('z-index') != 'auto';
            }).first().css('z-index'))+10;
            var offset = this.component ? this.component.parent().offset() : this.element.offset();
            var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(true);
            this.picker.css({
                top: offset.top + height,
                left: offset.left,
                zIndex: zIndex
            });
        },

        _allow_update: true,
        update: function(){
            if (!this._allow_update) return;

            var date, fromArgs = false;
            if(arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
                date = arguments[0];
                fromArgs = true;
            } else {
                date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
            }

            this.date = DPGlobal.parseDate(date, this.format, this.language);

            if(fromArgs) this.setValue();

            if (this.date < this.startDate) {
                this.viewDate = new Date(this.startDate);
            } else if (this.date > this.endDate) {
                this.viewDate = new Date(this.endDate);
            } else {
                this.viewDate = new Date(this.date);
            }
            this.fill();
        },

        fillDow: function(){
            var dowCnt = this.weekStart,
                html = '<tr>';
            if(this.calendarWeeks){
                var cell = '<th class="cw">&nbsp;</th>';
                html += cell;
                this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
            }
            while (dowCnt < this.weekStart + 7) {
                html += '<th class="dow">'+dates[this.language].daysMin[(dowCnt++)%7]+'</th>';
            }
            html += '</tr>';
            this.picker.find('.datepicker-days thead').append(html);
        },

        fillMonths: function(){
            var html = '',
                i = 0;
            while (i < 12) {
                html += '<span class="month">'+dates[this.language].monthsShort[i++]+'</span>';
            }
            this.picker.find('.datepicker-months td').html(html);
        },

        fill: function() {
            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
                endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
                endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
                currentDate = this.date && this.date.valueOf(),
                today = new Date();
            this.picker.find('.datepicker-days thead th.switch')
                .text(dates[this.language].months[month]+' '+year);
            this.picker.find('tfoot th.today')
                .text(dates[this.language].today)
                .toggle(this.todayBtn !== false);
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month-1, 28,0,0,0,0),
                day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
            prevMonth.setUTCDate(day);
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7)%7);
            var nextMonth = new Date(prevMonth);
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var clsName;
            while(prevMonth.valueOf() < nextMonth) {
                if (prevMonth.getUTCDay() == this.weekStart) {
                    html.push('<tr>');
                    if(this.calendarWeeks){
                        // ISO 8601: First week contains first thursday.
                        // ISO also states week starts on Monday, but we can be more abstract here.
                        var
                        // Start of current week: based on weekstart/current date
                            ws = new Date(+prevMonth + (this.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
                        // Thursday of this week
                            th = new Date(+ws + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
                        // First Thursday of year, year from thursday
                            yth = new Date(+(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
                        // Calendar week: ms between thursdays, div ms per day, div 7 days
                            calWeek =  (th - yth) / 864e5 / 7 + 1;
                        html.push('<td class="cw">'+ calWeek +'</td>');

                    }
                }
                clsName = '';
                if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
                    clsName += ' old';
                } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
                    clsName += ' new';
                }
                // Compare internal UTC date with local today, not UTC today
                if (this.todayHighlight &&
                    prevMonth.getUTCFullYear() == today.getFullYear() &&
                    prevMonth.getUTCMonth() == today.getMonth() &&
                    prevMonth.getUTCDate() == today.getDate()) {
                    clsName += ' today';
                }
                if (currentDate && prevMonth.valueOf() == currentDate) {
                    clsName += ' active';
                }
                if (prevMonth.valueOf() < this.startDate || prevMonth.valueOf() > this.endDate ||
                    $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
                    clsName += ' disabled';
                }
                html.push('<td class="day'+clsName+'">'+prevMonth.getUTCDate() + '</td>');
                if (prevMonth.getUTCDay() == this.weekEnd) {
                    html.push('</tr>');
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
            }
            this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
            var currentYear = this.date && this.date.getUTCFullYear();

            var months = this.picker.find('.datepicker-months')
                .find('th:eq(1)')
                .text(year)
                .end()
                .find('span').removeClass('active');
            if (currentYear && currentYear == year) {
                months.eq(this.date.getUTCMonth()).addClass('active');
            }
            if (year < startYear || year > endYear) {
                months.addClass('disabled');
            }
            if (year == startYear) {
                months.slice(0, startMonth).addClass('disabled');
            }
            if (year == endYear) {
                months.slice(endMonth+1).addClass('disabled');
            }

            html = '';
            year = parseInt(year/10, 10) * 10;
            var yearCont = this.picker.find('.datepicker-years')
                .find('th:eq(1)')
                .text(year + '-' + (year + 9))
                .end()
                .find('td');
            year -= 1;
            for (var i = -1; i < 11; i++) {
                html += '<span class="year'+(i == -1 || i == 10 ? ' old' : '')+(currentYear == year ? ' active' : '')+(year < startYear || year > endYear ? ' disabled' : '')+'">'+year+'</span>';
                year += 1;
            }
            yearCont.html(html);
        },

        updateNavArrows: function() {
            if (!this._allow_update) return;

            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth();
            switch (this.viewMode) {
                case 0:
                    if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
                        this.picker.find('.prev').css({visibility: 'hidden'});
                    } else {
                        this.picker.find('.prev').css({visibility: 'visible'});
                    }
                    if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
                        this.picker.find('.next').css({visibility: 'hidden'});
                    } else {
                        this.picker.find('.next').css({visibility: 'visible'});
                    }
                    break;
                case 1:
                case 2:
                    if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
                        this.picker.find('.prev').css({visibility: 'hidden'});
                    } else {
                        this.picker.find('.prev').css({visibility: 'visible'});
                    }
                    if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
                        this.picker.find('.next').css({visibility: 'hidden'});
                    } else {
                        this.picker.find('.next').css({visibility: 'visible'});
                    }
                    break;
            }
        },

        click: function(e) {
            e.preventDefault();
            var target = $(e.target).closest('span, td, th');
            if (target.length == 1) {
                switch(target[0].nodeName.toLowerCase()) {
                    case 'th':
                        switch(target[0].className) {
                            case 'switch':
                                this.showMode(1);
                                break;
                            case 'prev':
                            case 'next':
                                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                                switch(this.viewMode){
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, dir);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, dir);
                                        break;
                                }
                                this.fill();
                                break;
                            case 'today':
                                var date = new Date();
                                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

                                this.showMode(-2);
                                var which = this.todayBtn == 'linked' ? null : 'view';
                                this._setDate(date, which);
                                break;
                        }
                        break;
                    case 'span':
                        if (!target.is('.disabled')) {
                            this.viewDate.setUTCDate(1);
                            if (target.is('.month')) {
                                var day = 1;
                                var month = target.parent().find('span').index(target);
                                var year = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(month);
                                this.element.trigger({
                                    type: 'changeMonth',
                                    date: this.viewDate
                                });
                                if ( this.minViewMode == 1 ) {
                                    this._setDate(UTCDate(year, month, day,0,0,0,0));
                                }
                            } else {
                                var year = parseInt(target.text(), 10)||0;
                                var day = 1;
                                var month = 0;
                                this.viewDate.setUTCFullYear(year);
                                this.element.trigger({
                                    type: 'changeYear',
                                    date: this.viewDate
                                });
                                if ( this.minViewMode == 2 ) {
                                    this._setDate(UTCDate(year, month, day,0,0,0,0));
                                }
                            }
                            this.showMode(-1);
                            this.fill();
                        }
                        break;
                    case 'td':
                        if (target.is('.day') && !target.is('.disabled')){
                            var day = parseInt(target.text(), 10)||1;
                            var year = this.viewDate.getUTCFullYear(),
                                month = this.viewDate.getUTCMonth();
                            if (target.is('.old')) {
                                if (month === 0) {
                                    month = 11;
                                    year -= 1;
                                } else {
                                    month -= 1;
                                }
                            } else if (target.is('.new')) {
                                if (month == 11) {
                                    month = 0;
                                    year += 1;
                                } else {
                                    month += 1;
                                }
                            }
                            this._setDate(UTCDate(year, month, day,0,0,0,0));
                        }
                        break;
                }
            }
        },

        _setDate: function(date, which){
            if (!which || which == 'date')
                this.date = date;
            if (!which || which  == 'view')
                this.viewDate = date;
            this.fill();
            this.setValue();
            this.element.trigger({
                type: 'changeDate',
                date: this.date
            });
            var element;
            if (this.isInput) {
                element = this.element;
            } else if (this.component){
                element = this.element.find('input');
            }
            if (element) {
                element.change();
                if (this.autoclose && (!which || which == 'date')) {
                    this.hide();
                }
            }
        },

        moveMonth: function(date, dir){
            if (!dir) return date;
            var new_date = new Date(date.valueOf()),
                day = new_date.getUTCDate(),
                month = new_date.getUTCMonth(),
                mag = Math.abs(dir),
                new_month, test;
            dir = dir > 0 ? 1 : -1;
            if (mag == 1){
                test = dir == -1
                    // If going back one month, make sure month is not current month
                    // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
                    ? function(){ return new_date.getUTCMonth() == month; }
                    // If going forward one month, make sure month is as expected
                    // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
                    : function(){ return new_date.getUTCMonth() != new_month; };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
                if (new_month < 0 || new_month > 11)
                    new_month = (new_month + 12) % 12;
            } else {
                // For magnitudes >1, move one month at a time...
                for (var i=0; i<mag; i++)
                    // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                    new_date = this.moveMonth(new_date, dir);
                // ...then reset the day, keeping it in the new month
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function(){ return new_month != new_date.getUTCMonth(); };
            }
            // Common date-resetting loop -- if date is beyond end of month, make it
            // end of month
            while (test()){
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month);
            }
            return new_date;
        },

        moveYear: function(date, dir){
            return this.moveMonth(date, dir*12);
        },

        dateWithinRange: function(date){
            return date >= this.startDate && date <= this.endDate;
        },

        keydown: function(e){
            if (this.picker.is(':not(:visible)')){
                if (e.keyCode == 27) // allow escape to hide and re-show picker
                    this.show();
                return;
            }
            var dateChanged = false,
                dir, day, month,
                newDate, newViewDate;
            switch(e.keyCode){
                case 27: // escape
                    this.hide();
                    e.preventDefault();
                    break;
                case 37: // left
                case 39: // right
                    if (!this.keyboardNavigation) break;
                    dir = e.keyCode == 37 ? -1 : 1;
                    if (e.ctrlKey){
                        newDate = this.moveYear(this.date, dir);
                        newViewDate = this.moveYear(this.viewDate, dir);
                    } else if (e.shiftKey){
                        newDate = this.moveMonth(this.date, dir);
                        newViewDate = this.moveMonth(this.viewDate, dir);
                    } else {
                        newDate = new Date(this.date);
                        newDate.setUTCDate(this.date.getUTCDate() + dir);
                        newViewDate = new Date(this.viewDate);
                        newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
                    }
                    if (this.dateWithinRange(newDate)){
                        this.date = newDate;
                        this.viewDate = newViewDate;
                        this.setValue();
                        this.update();
                        e.preventDefault();
                        dateChanged = true;
                    }
                    break;
                case 38: // up
                case 40: // down
                    if (!this.keyboardNavigation) break;
                    dir = e.keyCode == 38 ? -1 : 1;
                    if (e.ctrlKey){
                        newDate = this.moveYear(this.date, dir);
                        newViewDate = this.moveYear(this.viewDate, dir);
                    } else if (e.shiftKey){
                        newDate = this.moveMonth(this.date, dir);
                        newViewDate = this.moveMonth(this.viewDate, dir);
                    } else {
                        newDate = new Date(this.date);
                        newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
                        newViewDate = new Date(this.viewDate);
                        newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
                    }
                    if (this.dateWithinRange(newDate)){
                        this.date = newDate;
                        this.viewDate = newViewDate;
                        this.setValue();
                        this.update();
                        e.preventDefault();
                        dateChanged = true;
                    }
                    break;
                case 13: // enter
                    this.hide();
                    e.preventDefault();
                    break;
                case 9: // tab
                    this.hide();
                    break;
            }
            if (dateChanged){
                this.element.trigger({
                    type: 'changeDate',
                    date: this.date
                });
                var element;
                if (this.isInput) {
                    element = this.element;
                } else if (this.component){
                    element = this.element.find('input');
                }
                if (element) {
                    element.change();
                }
            }
        },

        showMode: function(dir) {
            if (dir) {
                this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
            }
            /*
             vitalets: fixing bug of very special conditions:
             jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
             Method show() does not set display css correctly and datepicker is not shown.
             Changed to .css('display', 'block') solve the problem.
             See https://github.com/vitalets/x-editable/issues/37

             In jquery 1.7.2+ everything works fine.
             */
            //this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
            this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
            this.updateNavArrows();
        }
    };

    $.fn.datepicker = function ( option ) {
        var args = Array.apply(null, arguments);
        args.shift();
        return this.each(function () {
            var $this = $(this),
                data = $this.data('datepicker'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
            }
            if (typeof option == 'string' && typeof data[option] == 'function') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.datepicker.defaults = {
    };
    $.fn.datepicker.Constructor = Datepicker;
    var dates = $.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today"
        }
    };

    var DPGlobal = {
        modes: [
            {
                clsName: 'days',
                navFnc: 'Month',
                navStep: 1
            },
            {
                clsName: 'months',
                navFnc: 'FullYear',
                navStep: 1
            },
            {
                clsName: 'years',
                navFnc: 'FullYear',
                navStep: 10
            }],
        isLeapYear: function (year) {
            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
        },
        getDaysInMonth: function (year, month) {
            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(format){
            // IE treats \0 as a string end in inputs (truncating the value),
            // so it's a bad format delimiter, anyway
            var separators = format.replace(this.validParts, '\0').split('\0'),
                parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0){
                throw new Error("Invalid date format.");
            }
            return {separators: separators, parts: parts};
        },
        parseDate: function(date, format, language) {
            if (date instanceof Date) return date;
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
                var part_re = /([\-+]\d+)([dmwy])/,
                    parts = date.match(/([\-+]\d+)([dmwy])/g),
                    part, dir;
                date = new Date();
                for (var i=0; i<parts.length; i++) {
                    part = part_re.exec(parts[i]);
                    dir = parseInt(part[1]);
                    switch(part[2]){
                        case 'd':
                            date.setUTCDate(date.getUTCDate() + dir);
                            break;
                        case 'm':
                            date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
                            break;
                        case 'w':
                            date.setUTCDate(date.getUTCDate() + dir * 7);
                            break;
                        case 'y':
                            date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
                            break;
                    }
                }
                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
            }
            var parts = date && date.match(this.nonpunctuation) || [],
                date = new Date(),
                parsed = {},
                setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
                setters_map = {
                    yyyy: function(d,v){ return d.setUTCFullYear(v); },
                    yy: function(d,v){ return d.setUTCFullYear(2000+v); },
                    m: function(d,v){
                        v -= 1;
                        while (v<0) v += 12;
                        v %= 12;
                        d.setUTCMonth(v);
                        while (d.getUTCMonth() != v)
                            d.setUTCDate(d.getUTCDate()-1);
                        return d;
                    },
                    d: function(d,v){ return d.setUTCDate(v); }
                },
                val, filtered, part;
            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
            setters_map['dd'] = setters_map['d'];
            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
            var fparts = format.parts.slice();
            // Remove noop parts
            if (parts.length != fparts.length) {
                fparts = $(fparts).filter(function(i,p){
                    return $.inArray(p, setters_order) !== -1;
                }).toArray();
            }
            // Process remainder
            if (parts.length == fparts.length) {
                for (var i=0, cnt = fparts.length; i < cnt; i++) {
                    val = parseInt(parts[i], 10);
                    part = fparts[i];
                    if (isNaN(val)) {
                        switch(part) {
                            case 'MM':
                                filtered = $(dates[language].months).filter(function(){
                                    var m = this.slice(0, parts[i].length),
                                        p = parts[i].slice(0, m.length);
                                    return m == p;
                                });
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case 'M':
                                filtered = $(dates[language].monthsShort).filter(function(){
                                    var m = this.slice(0, parts[i].length),
                                        p = parts[i].slice(0, m.length);
                                    return m == p;
                                });
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break;
                        }
                    }
                    parsed[part] = val;
                }
                for (var i=0, s; i<setters_order.length; i++){
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s]))
                        setters_map[s](date, parsed[s]);
                }
            }
            return date;
        },
        formatDate: function(date, format, language){
            var val = {
                d: date.getUTCDate(),
                D: dates[language].daysShort[date.getUTCDay()],
                DD: dates[language].days[date.getUTCDay()],
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.dd = (val.d < 10 ? '0' : '') + val.d;
            val.mm = (val.m < 10 ? '0' : '') + val.m;
            var date = [],
                seps = $.extend([], format.separators);
            for (var i=0, cnt = format.parts.length; i < cnt; i++) {
                if (seps.length)
                    date.push(seps.shift());
                date.push(val[format.parts[i]]);
            }
            return date.join('');
        },
        headTemplate: '<thead>'+
            '<tr>'+
            '<th class="prev"><i class="icon-arrow-left"/></th>'+
            '<th colspan="5" class="switch"></th>'+
            '<th class="next"><i class="icon-arrow-right"/></th>'+
            '</tr>'+
            '</thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
    };
    DPGlobal.template = '<div class="datepicker">'+
        '<div class="datepicker-days">'+
        '<table class=" table-condensed">'+
        DPGlobal.headTemplate+
        '<tbody></tbody>'+
        DPGlobal.footTemplate+
        '</table>'+
        '</div>'+
        '<div class="datepicker-months">'+
        '<table class="table-condensed">'+
        DPGlobal.headTemplate+
        DPGlobal.contTemplate+
        DPGlobal.footTemplate+
        '</table>'+
        '</div>'+
        '<div class="datepicker-years">'+
        '<table class="table-condensed">'+
        DPGlobal.headTemplate+
        DPGlobal.contTemplate+
        DPGlobal.footTemplate+
        '</table>'+
        '</div>'+
        '</div>';

    $.fn.datepicker.DPGlobal = DPGlobal;


})


;
/**
 * AngularStrap - Twitter Bootstrap directives for AngularJS
 * @version v0.7.5 - 2013-07-21
 * @link http://mgcrea.github.com/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

angular.module('$strap.config', []).value('$strapConfig', {});
angular.module('$strap.filters', ['$strap.config']);
angular.module('$strap.directives', ['$strap.config']);
angular.module('$strap', [
    '$strap.filters',
    '$strap.directives',
    '$strap.config'
]);

angular.module('$strap.directives').directive('bsAlert', [
    '$parse',
    '$timeout',
    '$compile',
    function ($parse, $timeout, $compile) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                var getter = $parse(attrs.bsAlert), setter = getter.assign, value = getter(scope);
                var closeAlert = function closeAlertFn(delay) {
                    $timeout(function () {
                        element.alert('close');
                    }, delay * 1);
                };
                if (!attrs.bsAlert) {
                    if (angular.isUndefined(attrs.closeButton) || attrs.closeButton !== '0' && attrs.closeButton !== 'false') {
                        element.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>');
                    }
                    if (attrs.closeAfter)
                        closeAlert(attrs.closeAfter);
                } else {
                    scope.$watch(attrs.bsAlert, function (newValue, oldValue) {
                        value = newValue;
                        element.html((newValue.title ? '<strong>' + newValue.title + '</strong>&nbsp;' : '') + newValue.content || '');
                        if (!!newValue.closed) {
                            element.hide();
                        }
                        $compile(element.contents())(scope);
                        if (newValue.type || oldValue.type) {
                            oldValue.type && element.removeClass('alert-' + oldValue.type);
                            newValue.type && element.addClass('alert-' + newValue.type);
                        }
                        if (angular.isDefined(newValue.closeAfter))
                            closeAlert(newValue.closeAfter);
                        else if (attrs.closeAfter)
                            closeAlert(attrs.closeAfter);
                        if (angular.isUndefined(attrs.closeButton) || attrs.closeButton !== '0' && attrs.closeButton !== 'false') {
                            element.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>');
                        }
                    }, true);
                }
                element.addClass('alert').alert();
                if (element.hasClass('fade')) {
                    element.removeClass('in');
                    setTimeout(function () {
                        element.addClass('in');
                    });
                }
                var parentArray = attrs.ngRepeat && attrs.ngRepeat.split(' in ').pop();
                element.on('close', function (ev) {
                    var removeElement;
                    if (parentArray) {
                        ev.preventDefault();
                        element.removeClass('in');
                        removeElement = function () {
                            element.trigger('closed');
                            if (scope.$parent) {
                                scope.$parent.$apply(function () {
                                    var path = parentArray.split('.');
                                    var curr = scope.$parent;
                                    for (var i = 0; i < path.length; ++i) {
                                        if (curr) {
                                            curr = curr[path[i]];
                                        }
                                    }
                                    if (curr) {
                                        curr.splice(scope.$index, 1);
                                    }
                                });
                            }
                        };
                        $.support.transition && element.hasClass('fade') ? element.on($.support.transition.end, removeElement) : removeElement();
                    } else if (value) {
                        ev.preventDefault();
                        element.removeClass('in');
                        removeElement = function () {
                            element.trigger('closed');
                            scope.$apply(function () {
                                value.closed = true;
                            });
                        };
                        $.support.transition && element.hasClass('fade') ? element.on($.support.transition.end, removeElement) : removeElement();
                    } else {
                    }
                });
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsButton', [
        '$parse',
        '$timeout',
        function ($parse, $timeout) {
            return {
                restrict: 'A',
                require: '?ngModel',
                link: function postLink(scope, element, attrs, controller) {
                    if (controller) {
                        if (!element.parent('[data-toggle="buttons-checkbox"], [data-toggle="buttons-radio"]').length) {
                            element.attr('data-toggle', 'button');
                        }
                        var startValue = !!scope.$eval(attrs.ngModel);
                        if (startValue) {
                            element.addClass('active');
                        }
                        scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                            var bNew = !!newValue, bOld = !!oldValue;
                            if (bNew !== bOld) {
                                $.fn.button.Constructor.prototype.toggle.call(button);
                            } else if (bNew && !startValue) {
                                element.addClass('active');
                            }
                        });
                    }
                    if (!element.hasClass('btn')) {
                        element.on('click.button.data-api', function (ev) {
                            element.button('toggle');
                        });
                    }
                    element.button();
                    var button = element.data('button');
                    button.toggle = function () {
                        if (!controller) {
                            return $.fn.button.Constructor.prototype.toggle.call(this);
                        }
                        var $parent = element.parent('[data-toggle="buttons-radio"]');
                        if ($parent.length) {
                            element.siblings('[ng-model]').each(function (k, v) {
                                $parse($(v).attr('ng-model')).assign(scope, false);
                            });
                            scope.$digest();
                            if (!controller.$modelValue) {
                                controller.$setViewValue(!controller.$modelValue);
                                scope.$digest();
                            }
                        } else {
                            scope.$apply(function () {
                                controller.$setViewValue(!controller.$modelValue);
                            });
                        }
                    };
                }
            };
        }
    ]).directive('bsButtonsCheckbox', [
        '$parse',
        function ($parse) {
            return {
                restrict: 'A',
                require: '?ngModel',
                compile: function compile(tElement, tAttrs, transclude) {
                    tElement.attr('data-toggle', 'buttons-checkbox').find('a, button').each(function (k, v) {
                        $(v).attr('bs-button', '');
                    });
                }
            };
        }
    ]).directive('bsButtonsRadio', [
        '$timeout',
        function ($timeout) {
            return {
                restrict: 'A',
                require: '?ngModel',
                compile: function compile(tElement, tAttrs, transclude) {
                    tElement.attr('data-toggle', 'buttons-radio');
                    if (!tAttrs.ngModel) {
                        tElement.find('a, button').each(function (k, v) {
                            $(v).attr('bs-button', '');
                        });
                    }
                    return function postLink(scope, iElement, iAttrs, controller) {
                        if (controller) {
                            $timeout(function () {
                                iElement.find('[value]').button().filter('[value="' + controller.$viewValue + '"]').addClass('active');
                            });
                            iElement.on('click.button.data-api', function (ev) {
                                scope.$apply(function () {
                                    controller.$setViewValue($(ev.target).closest('button').attr('value'));
                                });
                            });
                            scope.$watch(iAttrs.ngModel, function (newValue, oldValue) {
                                if (newValue !== oldValue) {
                                    var $btn = iElement.find('[value="' + scope.$eval(iAttrs.ngModel) + '"]');
                                    if ($btn.length) {
                                        $btn.button('toggle');
                                    }
                                }
                            });
                        }
                    };
                }
            };
        }
    ]);

angular.module('$strap.directives').directive('bsButtonSelect', [
    '$parse',
    '$timeout',
    function ($parse, $timeout) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function postLink(scope, element, attrs, ctrl) {
                var getter = $parse(attrs.bsButtonSelect), setter = getter.assign;
                if (ctrl) {
                    element.text(scope.$eval(attrs.ngModel));
                    scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                        element.text(newValue);
                    });
                }
                var values, value, index, newValue;
                element.bind('click', function (ev) {
                    values = getter(scope);
                    value = ctrl ? scope.$eval(attrs.ngModel) : element.text();
                    index = values.indexOf(value);
                    newValue = index > values.length - 2 ? values[0] : values[index + 1];
                    scope.$apply(function () {
                        element.text(newValue);
                        if (ctrl) {
                            ctrl.$setViewValue(newValue);
                        }
                    });
                });
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsDatepicker', [
    '$timeout',
    '$strapConfig',
    function ($timeout, $strapConfig) {
        var isAppleTouch = /(iP(a|o)d|iPhone)/g.test(navigator.userAgent);
        var regexpMap = function regexpMap(language) {
            language = language || 'en';
            return {
                '/': '[\\/]',
                '-': '[-]',
                '.': '[.]',
                ' ': '[\\s]',
                'dd': '(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))',
                'd': '(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))',
                'mm': '(?:[0]?[1-9]|[1][012])',
                'm': '(?:[0]?[1-9]|[1][012])',
                'DD': '(?:' + $.fn.datepicker.dates[language].days.join('|') + ')',
                'D': '(?:' + $.fn.datepicker.dates[language].daysShort.join('|') + ')',
                'MM': '(?:' + $.fn.datepicker.dates[language].months.join('|') + ')',
                'M': '(?:' + $.fn.datepicker.dates[language].monthsShort.join('|') + ')',
                'yyyy': '(?:(?:[1]{1}[0-9]{1}[0-9]{1}[0-9]{1})|(?:[2]{1}[0-9]{3}))(?![[0-9]])',
                'yy': '(?:(?:[0-9]{1}[0-9]{1}))(?![[0-9]])'
            };
        };
        var regexpForDateFormat = function regexpForDateFormat(format, language) {
            var re = format, map = regexpMap(language), i;
            i = 0;
            angular.forEach(map, function (v, k) {
                re = re.split(k).join('${' + i + '}');
                i++;
            });
            i = 0;
            angular.forEach(map, function (v, k) {
                re = re.split('${' + i + '}').join(v);
                i++;
            });
            return new RegExp('^' + re + '$', ['i']);
        };
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function postLink(scope, element, attrs, controller) {
                var options = angular.extend({ autoclose: true }, $strapConfig.datepicker || {}), type = attrs.dateType || options.type || 'date';
                angular.forEach([
                    'format',
                    'weekStart',
                    'calendarWeeks',
                    'startDate',
                    'endDate',
                    'daysOfWeekDisabled',
                    'autoclose',
                    'startView',
                    'minViewMode',
                    'todayBtn',
                    'todayHighlight',
                    'keyboardNavigation',
                    'language',
                    'forceParse'
                ], function (key) {
                    if (angular.isDefined(attrs[key]))
                        options[key] = attrs[key];
                });
                var language = options.language || 'en';
                  var  readFormat = attrs.dateFormat || options.format || $.fn.datepicker.dates[language] && $.fn.datepicker.dates[language].format || 'mm/dd/yyyy', format = isAppleTouch ? 'yyyy-mm-dd' : readFormat, dateFormatRegexp = regexpForDateFormat(format, language);
                if (controller) {
                    controller.$formatters.unshift(function (modelValue) {
                        return type === 'date' && angular.isString(modelValue) && modelValue ? $.fn.datepicker.DPGlobal.parseDate(modelValue, $.fn.datepicker.DPGlobal.parseFormat(readFormat), language) : modelValue;
                    });
                    controller.$parsers.unshift(function (viewValue) {
                        if (!viewValue) {
                            controller.$setValidity('date', true);
                            return null;
                        } else if (type === 'date' && angular.isDate(viewValue)) {
                            controller.$setValidity('date', true);
                            return viewValue;
                        } else if (angular.isString(viewValue) && dateFormatRegexp.test(viewValue)) {
                            controller.$setValidity('date', true);
                            if (isAppleTouch)
                                return new Date(viewValue);
                            return type === 'string' ? viewValue : $.fn.datepicker.DPGlobal.parseDate(viewValue, $.fn.datepicker.DPGlobal.parseFormat(format), language);
                        } else {
                            controller.$setValidity('date', false);
                            return undefined;
                        }
                    });
                    controller.$render = function ngModelRender() {
                        if (isAppleTouch) {
                            var date = controller.$viewValue ? $.fn.datepicker.DPGlobal.formatDate(controller.$viewValue, $.fn.datepicker.DPGlobal.parseFormat(format), language) : '';
                            element.val(date);
                            return date;
                        }
                        if (!controller.$viewValue)
                            element.val('');
                        return element.datepicker('update', controller.$viewValue);
                    };
                }
                if (isAppleTouch) {
                    element.prop('type', 'date').css('-webkit-appearance', 'textfield');
                } else {
                    if (controller) {
                        element.on('changeDate', function (ev) {
                            scope.$apply(function () {
                                controller.$setViewValue(type === 'string' ? element.val() : ev.date);
                            });
                        });
                    }
                    element.datepicker(angular.extend(options, {
                        format: format,
                        language: language
                    }));
                    scope.$on('$destroy', function () {
                        var datepicker = element.data('datepicker');
                        if (datepicker) {
                            datepicker.picker.remove();
                            element.data('datepicker', null);
                        }
                    });
                    attrs.$observe('startDate', function (value) {
                        element.datepicker('setStartDate', value);
                    });
                    attrs.$observe('endDate', function (value) {
                        element.datepicker('setEndDate', value);
                    });
                }
                var component = element.siblings('[data-toggle="datepicker"]');
                if (component.length) {
                    component.on('click', function () {
                        if (!element.prop('disabled')) {
                            element.trigger('focus');
                        }
                    });
                }
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsDropdown', [
    '$parse',
    '$compile',
    '$timeout',
    function ($parse, $compile, $timeout) {
        var buildTemplate = function (items, ul) {
            if (!ul)
                ul = [
                    '<ul class="dropdown-menu" role="menu" aria-labelledby="drop1">',
                    '</ul>'
                ];
            angular.forEach(items, function (item, index) {
                if (item.divider)
                    return ul.splice(index + 1, 0, '<li class="divider"></li>');
                var li = '<li' + (item.submenu && item.submenu.length ? ' class="dropdown-submenu"' : '') + '>' + '<a tabindex="-1" ng-href="' + (item.href || '') + '"' + (item.click ? '" ng-click="' + item.click + '"' : '') + (item.target ? '" target="' + item.target + '"' : '') + (item.method ? '" data-method="' + item.method + '"' : '') + '>' + (item.text || '') + '</a>';
                if (item.submenu && item.submenu.length)
                    li += buildTemplate(item.submenu).join('\n');
                li += '</li>';
                ul.splice(index + 1, 0, li);
            });
            return ul;
        };
        return {
            restrict: 'EA',
            scope: true,
            link: function postLink(scope, iElement, iAttrs) {
                var getter = $parse(iAttrs.bsDropdown), items = getter(scope);
                $timeout(function () {
                    if (!angular.isArray(items)) {
                    }
                    var dropdown = angular.element(buildTemplate(items).join(''));
                    dropdown.insertAfter(iElement);
                    $compile(iElement.next('ul.dropdown-menu'))(scope);
                });
                iElement.addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
            }
        };
    }
]);

angular.module('$strap.directives').factory('$modal', [
        '$rootScope',
        '$compile',
        '$http',
        '$timeout',
        '$q',
        '$templateCache',
        '$strapConfig',
        function ($rootScope, $compile, $http, $timeout, $q, $templateCache, $strapConfig) {
            var ModalFactory = function ModalFactory(config) {
                function Modal(config) {
                    var options = angular.extend({ show: true }, $strapConfig.modal, config), scope = options.scope ? options.scope : $rootScope.$new(), templateUrl = options.template;
                    return $q.when($templateCache.get(templateUrl) || $http.get(templateUrl, { cache: true }).then(function (res) {
                            return res.data;
                        })).then(function onSuccess(template) {
                            var id = templateUrl.replace('.html', '').replace(/[\/|\.|:]/g, '-') + '-' + scope.$id;
                            var $modal = $('<div class="modal hide" tabindex="-1"></div>').attr('id', id).addClass('fade').html(template);
                            if (options.modalClass)
                                $modal.addClass(options.modalClass);
                            $('body').append($modal);
                            $timeout(function () {
                                $compile($modal)(scope);
                            });
                            scope.$modal = function (name) {
                                $modal.modal(name);
                            };
                            angular.forEach([
                                'show',
                                'hide'
                            ], function (name) {
                                scope[name] = function () {
                                    $modal.modal(name);
                                };
                            });
                            scope.dismiss = scope.hide;
                            angular.forEach([
                                'show',
                                'shown',
                                'hide',
                                'hidden'
                            ], function (name) {
                                $modal.on(name, function (ev) {
                                    scope.$emit('modal-' + name, ev);
                                });
                            });
                            $modal.on('shown', function (ev) {
                                $('input[autofocus], textarea[autofocus]', $modal).first().trigger('focus');
                            });
                            $modal.on('hidden', function (ev) {
                                if (!options.persist)
                                    scope.$destroy();
                            });
                            scope.$on('$destroy', function () {
                                $modal.remove();
                            });
                            $modal.modal(options);
                            return $modal;
                        });
                }
                return new Modal(config);
            };
            return ModalFactory;
        }
    ]).directive('bsModal', [
        '$q',
        '$modal',
        function ($q, $modal) {
            return {
                restrict: 'A',
                scope: true,
                link: function postLink(scope, iElement, iAttrs, controller) {
                    var options = {
                        template: scope.$eval(iAttrs.bsModal),
                        persist: true,
                        show: false,
                        scope: scope
                    };
                    angular.forEach([
                        'modalClass',
                        'backdrop',
                        'keyboard'
                    ], function (key) {
                        if (angular.isDefined(iAttrs[key]))
                            options[key] = iAttrs[key];
                    });
                    $q.when($modal(options)).then(function onSuccess(modal) {
                        iElement.attr('data-target', '#' + modal.attr('id')).attr('data-toggle', 'modal');
                    });
                }
            };
        }
    ]);

angular.module('$strap.directives').directive('bsNavbar', [
    '$location',
    function ($location) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs, controller) {
                scope.$watch(function () {
                    return $location.path();
                }, function (newValue, oldValue) {
                    $('li[data-match-route]', element).each(function (k, li) {
                        var $li = angular.element(li), pattern = $li.attr('data-match-route'), regexp = new RegExp('^' + pattern + '$', ['i']);
                        if (regexp.test(newValue)) {
                            $li.addClass('active').find('.collapse.in').collapse('hide');
                        } else {
                            $li.removeClass('active');
                        }
                    });
                });
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsPopover', [
    '$parse',
    '$compile',
    '$http',
    '$timeout',
    '$q',
    '$templateCache',
    function ($parse, $compile, $http, $timeout, $q, $templateCache) {
        $('body').on('keyup', function (ev) {
            if (ev.keyCode === 27) {
                $('.popover.in').each(function () {
                    $(this).popover('hide');
                });
            }
        });
        return {
            restrict: 'A',
            scope: true,
            link: function postLink(scope, element, attr, ctrl) {
                var getter = $parse(attr.bsPopover), setter = getter.assign, value = getter(scope), options = {};
                if (angular.isObject(value)) {
                    options = value;
                }
                $q.when(options.content || $templateCache.get(value) || $http.get(value, { cache: true })).then(function onSuccess(template) {
                    if (angular.isObject(template)) {
                        template = template.data;
                    }
                    if (!!attr.unique) {
                        element.on('show', function (ev) {
                            $('.popover.in').each(function () {
                                var $this = $(this), popover = $this.data('popover');
                                if (popover && !popover.$element.is(element)) {
                                    $this.popover('hide');
                                }
                            });
                        });
                    }
                    if (!!attr.hide) {
                        scope.$watch(attr.hide, function (newValue, oldValue) {
                            if (!!newValue) {
                                popover.hide();
                            } else if (newValue !== oldValue) {
                                popover.show();
                            }
                        });
                    }
                    if (!!attr.show) {
                        scope.$watch(attr.show, function (newValue, oldValue) {
                            if (!!newValue) {
                                $timeout(function () {
                                    popover.show();
                                });
                            } else if (newValue !== oldValue) {
                                popover.hide();
                            }
                        });
                    }
                    element.popover(angular.extend({}, options, {
                        content: template,
                        html: true
                    }));
                    var popover = element.data('popover');
                    popover.hasContent = function () {
                        return this.getTitle() || template;
                    };
                    popover.getPosition = function () {
                        var r = $.fn.popover.Constructor.prototype.getPosition.apply(this, arguments);
                        $compile(this.$tip)(scope);
                        scope.$digest();
                        this.$tip.data('popover', this);
                        return r;
                    };
                    scope.$popover = function (name) {
                        popover(name);
                    };
                    angular.forEach([
                        'show',
                        'hide'
                    ], function (name) {
                        scope[name] = function () {
                            popover[name]();
                        };
                    });
                    scope.dismiss = scope.hide;
                    angular.forEach([
                        'show',
                        'shown',
                        'hide',
                        'hidden'
                    ], function (name) {
                        element.on(name, function (ev) {
                            scope.$emit('popover-' + name, ev);
                        });
                    });
                });
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsSelect', [
    '$timeout',
    function ($timeout) {
        var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/;
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function postLink(scope, element, attrs, controller) {
                var options = scope.$eval(attrs.bsSelect) || {};
                $timeout(function () {
                    element.selectpicker(options);
                    element.next().removeClass('ng-scope');
                });
                if (controller) {
                    scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                        if (!angular.equals(newValue, oldValue)) {
                            element.selectpicker('refresh');
                        }
                    });
                }
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsTabs', [
    '$parse',
    '$compile',
    '$timeout',
    function ($parse, $compile, $timeout) {
        var template = '<div class="tabs">' + '<ul class="nav nav-tabs">' + '<li ng-repeat="pane in panes" ng-class="{active:pane.active}">' + '<a data-target="#{{pane.id}}" data-index="{{$index}}" data-toggle="tab">{{pane.title}}</a>' + '</li>' + '</ul>' + '<div class="tab-content" ng-transclude>' + '</div>';
        return {
            restrict: 'A',
            require: '?ngModel',
            priority: 0,
            scope: true,
            template: template,
            replace: true,
            transclude: true,
            compile: function compile(tElement, tAttrs, transclude) {
                return function postLink(scope, iElement, iAttrs, controller) {
                    var getter = $parse(iAttrs.bsTabs), setter = getter.assign, value = getter(scope);
                    scope.panes = [];
                    var $tabs = iElement.find('ul.nav-tabs');
                    var $panes = iElement.find('div.tab-content');
                    var activeTab = 0, id, title, active;
                    $timeout(function () {
                        $panes.find('[data-title], [data-tab]').each(function (index) {
                            var $this = angular.element(this);
                            id = 'tab-' + scope.$id + '-' + index;
                            title = $this.data('title') || $this.data('tab');
                            active = !active && $this.hasClass('active');
                            $this.attr('id', id).addClass('tab-pane');
                            if (iAttrs.fade)
                                $this.addClass('fade');
                            scope.panes.push({
                                id: id,
                                title: title,
                                content: this.innerHTML,
                                active: active
                            });
                        });
                        if (scope.panes.length && !active) {
                            $panes.find('.tab-pane:first-child').addClass('active' + (iAttrs.fade ? ' in' : ''));
                            scope.panes[0].active = true;
                        }
                    });
                    if (controller) {
                        iElement.on('show', function (ev) {
                            var $target = $(ev.target);
                            scope.$apply(function () {
                                controller.$setViewValue($target.data('index'));
                            });
                        });
                        scope.$watch(iAttrs.ngModel, function (newValue, oldValue) {
                            if (angular.isUndefined(newValue))
                                return;
                            activeTab = newValue;
                            setTimeout(function () {
                                var $next = $($tabs[0].querySelectorAll('li')[newValue * 1]);
                                if (!$next.hasClass('active')) {
                                    $next.children('a').tab('show');
                                }
                            });
                        });
                    }
                };
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsTimepicker', [
    '$timeout',
    '$strapConfig',
    function ($timeout, $strapConfig) {
        var TIME_REGEXP = '((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)';
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function postLink(scope, element, attrs, controller) {
                if (controller) {
                    element.on('changeTime.timepicker', function (ev) {
                        $timeout(function () {
                            controller.$setViewValue(element.val());
                        });
                    });
                    var timeRegExp = new RegExp('^' + TIME_REGEXP + '$', ['i']);
                    controller.$parsers.unshift(function (viewValue) {
                        if (!viewValue || timeRegExp.test(viewValue)) {
                            controller.$setValidity('time', true);
                            return viewValue;
                        } else {
                            controller.$setValidity('time', false);
                            return;
                        }
                    });
                }
                element.attr('data-toggle', 'timepicker');
                element.parent().addClass('bootstrap-timepicker');
                element.timepicker($strapConfig.timepicker || {});
                var timepicker = element.data('timepicker');
                var component = element.siblings('[data-toggle="timepicker"]');
                if (component.length) {
                    component.on('click', $.proxy(timepicker.showWidget, timepicker));
                }
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsTooltip', [
    '$parse',
    '$compile',
    function ($parse, $compile) {
        return {
            restrict: 'A',
            scope: true,
            link: function postLink(scope, element, attrs, ctrl) {
                var getter = $parse(attrs.bsTooltip), setter = getter.assign, value = getter(scope);
                scope.$watch(attrs.bsTooltip, function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        value = newValue;
                    }
                });
                if (!!attrs.unique) {
                    element.on('show', function (ev) {
                        $('.tooltip.in').each(function () {
                            var $this = $(this), tooltip = $this.data('tooltip');
                            if (tooltip && !tooltip.$element.is(element)) {
                                $this.tooltip('hide');
                            }
                        });
                    });
                }
                element.tooltip({
                    title: function () {
                        return angular.isFunction(value) ? value.apply(null, arguments) : value;
                    },
                    html: true
                });
                var tooltip = element.data('tooltip');
                tooltip.show = function () {
                    var r = $.fn.tooltip.Constructor.prototype.show.apply(this, arguments);
                    this.tip().data('tooltip', this);
                    return r;
                };
                scope._tooltip = function (event) {
                    element.tooltip(event);
                };
                scope.hide = function () {
                    element.tooltip('hide');
                };
                scope.show = function () {
                    element.tooltip('show');
                };
                scope.dismiss = scope.hide;
            }
        };
    }
]);

angular.module('$strap.directives').directive('bsTypeahead', [
    '$parse',
    function ($parse) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function postLink(scope, element, attrs, controller) {
                var getter = $parse(attrs.bsTypeahead), setter = getter.assign, value = getter(scope);
                scope.$watch(attrs.bsTypeahead, function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        value = newValue;
                    }
                });
                element.attr('data-provide', 'typeahead');
                element.typeahead({
                    source: function (query) {
                        return angular.isFunction(value) ? value.apply(null, arguments) : value;
                    },
                    minLength: attrs.minLength || 1,
                    items: attrs.items,
                    updater: function (value) {
                        if (controller) {
                            scope.$apply(function () {
                                controller.$setViewValue(value);
                            });
                        }
                        scope.$emit('typeahead-updated', value);
                        return value;
                    }
                });
                var typeahead = element.data('typeahead');
                typeahead.lookup = function (ev) {
                    var items;
                    this.query = this.$element.val() || '';
                    if (this.query.length < this.options.minLength) {
                        return this.shown ? this.hide() : this;
                    }
                    items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source;
                    return items ? this.process(items) : this;
                };
                if (!!attrs.matchAll) {
                    typeahead.matcher = function (item) {
                        return true;
                    };
                }
                if (attrs.minLength === '0') {
                    setTimeout(function () {
                        element.on('focus', function () {
                            element.val().length === 0 && setTimeout(element.typeahead.bind(element, 'lookup'), 200);
                        });
                    });
                }
            }
        };
    }
]);
define("angular-strap", ["angular","bootstrap-datepicker"], function(){});


define('app',['angular','angular-strap'], function (angular ) {

    return angular.module('app', ['$strap.directives']);
});
/**
 * @license RequireJS i18n 2.0.2 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */
/*jslint regexp: true */
/*global require: false, navigator: false, define: false */

/**
 * This plugin handles i18n! prefixed modules. It does the following:
 *
 * 1) A regular module can have a dependency on an i18n bundle, but the regular
 * module does not want to specify what locale to load. So it just specifies
 * the top-level bundle, like "i18n!nls/colors".
 *
 * This plugin will load the i18n bundle at nls/colors, see that it is a root/master
 * bundle since it does not have a locale in its name. It will then try to find
 * the best match locale available in that master bundle, then request all the
 * locale pieces for that best match locale. For instance, if the locale is "en-us",
 * then the plugin will ask for the "en-us", "en" and "root" bundles to be loaded
 * (but only if they are specified on the master bundle).
 *
 * Once all the bundles for the locale pieces load, then it mixes in all those
 * locale pieces into each other, then finally sets the context.defined value
 * for the nls/colors bundle to be that mixed in locale.
 *
 * 2) A regular module specifies a specific locale to load. For instance,
 * i18n!nls/fr-fr/colors. In this case, the plugin needs to load the master bundle
 * first, at nls/colors, then figure out what the best match locale is for fr-fr,
 * since maybe only fr or just root is defined for that locale. Once that best
 * fit is found, all of its locale pieces need to have their bundles loaded.
 *
 * Once all the bundles for the locale pieces load, then it mixes in all those
 * locale pieces into each other, then finally sets the context.defined value
 * for the nls/fr-fr/colors bundle to be that mixed in locale.
 */
(function () {
    

    //regexp for reconstructing the master bundle name from parts of the regexp match
    //nlsRegExp.exec("foo/bar/baz/nls/en-ca/foo") gives:
    //["foo/bar/baz/nls/en-ca/foo", "foo/bar/baz/nls/", "/", "/", "en-ca", "foo"]
    //nlsRegExp.exec("foo/bar/baz/nls/foo") gives:
    //["foo/bar/baz/nls/foo", "foo/bar/baz/nls/", "/", "/", "foo", ""]
    //so, if match[5] is blank, it means this is the top bundle definition.
    var nlsRegExp = /(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;

    //Helper function to avoid repeating code. Lots of arguments in the
    //desire to stay functional and support RequireJS contexts without having
    //to know about the RequireJS contexts.
    function addPart(locale, master, needed, toLoad, prefix, suffix) {
        if (master[locale]) {
            needed.push(locale);
            if (master[locale] === true || master[locale] === 1) {
                toLoad.push(prefix + locale + '/' + suffix);
            }
        }
    }

    function addIfExists(req, locale, toLoad, prefix, suffix) {
        var fullName = prefix + locale + '/' + suffix;
        if (require._fileExists(req.toUrl(fullName + '.js'))) {
            toLoad.push(fullName);
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     * This is not robust in IE for transferring methods that match
     * Object.prototype names, but the uses of mixin here seem unlikely to
     * trigger a problem related to that.
     */
    function mixin(target, source, force) {
        var prop;
        for (prop in source) {
            if (source.hasOwnProperty(prop) && (!target.hasOwnProperty(prop) || force)) {
                target[prop] = source[prop];
            } else if (typeof source[prop] === 'object') {
                mixin(target[prop], source[prop], force);
            }
        }
    }

    define('i18n',['module'], function (module) {
        var masterConfig = module.config ? module.config() : {};

        return {
            version: '2.0.1+',
            /**
             * Called when a dependency needs to be loaded.
             */
            load: function (name, req, onLoad, config) {
                config = config || {};

                if (config.locale) {
                    masterConfig.locale = config.locale;
                }

                var masterName,
                    match = nlsRegExp.exec(name),
                    prefix = match[1],
                    locale = match[4],
                    suffix = match[5],
                    parts = locale.split("-"),
                    toLoad = [],
                    value = {},
                    i, part, current = "";

                //If match[5] is blank, it means this is the top bundle definition,
                //so it does not have to be handled. Locale-specific requests
                //will have a match[4] value but no match[5]
                if (match[5]) {
                    //locale-specific bundle
                    prefix = match[1];
                    masterName = prefix + suffix;
                } else {
                    //Top-level bundle.
                    masterName = name;
                    suffix = match[4];
                    locale = masterConfig.locale;
                    if (!locale) {
                        locale = masterConfig.locale =
                            typeof navigator === "undefined" ? "root" :
                                (navigator.language ||
                                    navigator.userLanguage || "root").toLowerCase();
                    }
                    parts = locale.split("-");
                }

                if (config.isBuild) {
                    //Check for existence of all locale possible files and
                    //require them if exist.
                    toLoad.push(masterName);
                    addIfExists(req, "root", toLoad, prefix, suffix);
                    for (i = 0; i < parts.length; i++) {
                        part = parts[i];
                        current += (current ? "-" : "") + part;
                        addIfExists(req, current, toLoad, prefix, suffix);
                    }

                    req(toLoad, function () {
                        onLoad();
                    });
                } else {
                    //First, fetch the master bundle, it knows what locales are available.
                    req([masterName], function (master) {
                        //Figure out the best fit
                        var needed = [],
                            part;

                        //Always allow for root, then do the rest of the locale parts.
                        addPart("root", master, needed, toLoad, prefix, suffix);
                        for (i = 0; i < parts.length; i++) {
                            part = parts[i];
                            current += (current ? "-" : "") + part;
                            addPart(current, master, needed, toLoad, prefix, suffix);
                        }

                        //Load all the parts missing.
                        req(toLoad, function () {
                            var i, partBundle, part;
                            for (i = needed.length - 1; i > -1 && needed[i]; i--) {
                                part = needed[i];
                                partBundle = master[part];
                                if (partBundle === true || partBundle === 1) {
                                    partBundle = req(prefix + part + '/' + suffix);
                                }
                                mixin(value, partBundle);
                            }

                            //All done, notify the loader.
                            onLoad(value);
                        });
                    });
                }
            }
        };
    });
}());
/**
 * Created with JetBrains WebStorm.
 * User: P0018766
 * Date: 13-2-22
 * Time: 上午10:28
 * To change this template use File | Settings | File Templates.
 */

define('resources/nls/res',{
    "root": {
        "welcome": "欢迎",
        "login": "登录",
        "logout": "注销",
        "title":"锐优联",
        "signup":"注册"
    },
    "en-us":true,
    "ja-jp":true

});


define('controllers/layout',['../app', 'i18n!resources/nls/res'], function (app, res) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', ['$scope', '$http', '$location', '$window', function ($scope, $http, $location, $window) {
        /*      var i = 0,
         imgs = images.imageurls,
         randombg = function () {
         return Math.round(Math.random() * (imgs.length - 1));
         };

         m$.Image.preLoadImages(imgs.slice(0, 4));*/


        $scope.info = {
            TodayFeedsTotal: "",
            TotalFeeds: "",
            TotalSite: ""
        };

        $http.post("/api/feeds").success(function (d) {
            $scope.info.TodayFeedsTotal = d.todaycount;
            $scope.info.TotalFeeds = d.totalcount;
            $scope.info.TotalSite = d.countsites;
        });
        $scope.LoginInfo = function (user) {
            $scope.UserName = user["name"];
        };
        $http.get('api/checklogin').success(function (user) {
            $scope.LoginInfo(user);
        });
        $scope.logout = function () {
            if ($window.confirm("Are you sure?")) {
                $http.get('/logout').success(function (d) {
                    $window.location = "/login";
                });
            }
        };
        $scope.txt = {
            home: res.welcome,
            dashboard: "Dashboard",
            feeds: "Feeds",
            analysis: "Analysis",
            reports: "Reports",
            alerts: "Alerts",
            monitor: "Monitor",
            help: "Help"
        };
        $scope.navBars = [
            {name: $scope.txt.dashboard, url: "#/dashboard", index: 1},
            {name: $scope.txt.feeds, url: "#/feeds", index: 2},
            {name: $scope.txt.analysis, url: "#/analysis", index: 3},
            {name: $scope.txt.reports, url: "#/reports", index: 4},
            {name: $scope.txt.alerts, url: "#/alerts", index: 5},
            {name: $scope.txt.monitor, url: "#/monitor", index: 6},
            {name: $scope.txt.help, url: "#/help", index: 7}
        ];
        $scope.selectNav = function (row) {
            $scope.selectedRow = row;
        };
        $scope.navHash = function () {

            console.log($location)
            return $location
        };

        $scope.global = {
            error: ""
        };
        /* $scope.resources = {
         theme: " <link href='themes/glow/default.css' rel='stylesheet' type='text/css'>",
         bg: imgs[randombg()] //Random generate background image
         };*/
        $scope.setActive = function (e) {
            // console.log($location.$$path)
            var parent = e.target.parentElement.parentElement;
            if (parent) {
                var cancelActives = parent.getElementsByClassName("active");
                for (var i = 0, l = cancelActives.length; i < l; i++) {
                    cancelActives[i].setAttribute("class", "");
                }

                e.target.parentElement.setAttribute("class", "active");
            }
            //console.log($location.$$path)
        };


        /***
         * 设置当前选项卡的颜色
         * @type {string}
         */
        var hash = $location.$$url.replace(/\//gmi, '');
        $.each($scope.navBars, function (i, item) {
            if (item.url.match(hash)) {
                if (!!!hash)
                    $scope.selectedRow = 0
                else
                    $scope.selectedRow = item.index - 1;
            }
        });

        $scope.hiddenMenu = function () {
            $scope.show = !$scope.show;
        };
        //message
        var inter = window.setInterval(function () {
            $(".message").toggleClass("font20", "font20")
        }, 1000);
        $scope.ntime = new Date();
        window.setInterval(function () {
            $http.post('/api/getNewFeeds', {time: $scope.ntime}).success(function (d) {
                $scope.newFeeds = d.data;
                $scope.ntime = d.time;
            })
        }, 10000);
        $(".message").on("click", function () {
            clearInterval(inter);
            $(".message").html("");
        });

        /*        $scope.nextimg = function () {
         i = i === imgs.length ? 0 : i;
         $("#bg").attr("src", imgs[i++]);
         */
        /* var a =$(".page section:nth-child(1)").css("margin-top","-800px")*/
        /*
         };
         $scope.preimg = function () {
         i = i < 0 ? imgs.length - 1 : i;
         $("#bg").attr("src", imgs[i--]);
         */
        /*   var a =$(".page section:nth-child(1)").css("margin-top","10px")*/
        /*
         */
        /*  $("body").attr("style","background:url('themes/glowsimple/img/dots.png') center center fixed, url('"+imgs[i--]+"') center center no-repeat fixed;");*/
        /*
         };*/
        /*    $scope.fullscreen = function () {
         if (window.fullScreenApi.supportsFullScreen) {
         setInterval(function () {
         if (!document.webkitIsFullScreen) {
         clearInterval();
         return;
         }
         var img = imgs[i++];
         $("#bg").attr("src", img);
         console.log("fullscreen picture" + img);
         }, 2000);
         window.fullScreenApi.requestFullScreen(document.getElementById('njblogbg'));
         } else {
         alert('就你这浏览器，基本就告别全屏功能了,赶紧卸载了吧！！！');
         }
         };*/
    }]);
});

/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */
/*//TODO Define module
define(['../app'], function (app) {
    return app.controller('IndexController', function ($scope, $rootScope, $http) {
    $scope.title = "NJBlog";
        $rootScope.title="NJBLog simple ,fluent"
    });

});*/


define('controllers/index',[ 'i18n!resources/nls/res'], function (res) {

    var  IndexController=['$scope','$rootScope','$location',function($scope,$rootScope,$location) {
        $scope.title = res.title;
        $rootScope.title= res.title;
        $location.path("/dashboard");
    }];

    return IndexController;
});

/*define(['app','i18n!resources/nls/res'], function (app,res) {
    return app.controller('IndexController', function ($scope, $rootScope) {
        $scope.title = res.title;
        $rootScope.title= res.title;
    });

});*/
;
/*

 Copyright (C) 2011 by Yehuda Katz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

// lib/handlebars/browser-prefix.js
var Handlebars = {};

(function(Handlebars, undefined) {
    ;
// lib/handlebars/base.js

    Handlebars.VERSION = "1.0.0";
    Handlebars.COMPILER_REVISION = 4;

    Handlebars.REVISION_CHANGES = {
        1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '>= 1.0.0'
    };

    Handlebars.helpers  = {};
    Handlebars.partials = {};

    var toString = Object.prototype.toString,
        functionType = '[object Function]',
        objectType = '[object Object]';

    Handlebars.registerHelper = function(name, fn, inverse) {
        if (toString.call(name) === objectType) {
            if (inverse || fn) { throw new Handlebars.Exception('Arg not supported with multiple helpers'); }
            Handlebars.Utils.extend(this.helpers, name);
        } else {
            if (inverse) { fn.not = inverse; }
            this.helpers[name] = fn;
        }
    };

    Handlebars.registerPartial = function(name, str) {
        if (toString.call(name) === objectType) {
            Handlebars.Utils.extend(this.partials,  name);
        } else {
            this.partials[name] = str;
        }
    };

    Handlebars.registerHelper('helperMissing', function(arg) {
        if(arguments.length === 2) {
            return undefined;
        } else {
            throw new Error("Missing helper: '" + arg + "'");
        }
    });

    Handlebars.registerHelper('blockHelperMissing', function(context, options) {
        var inverse = options.inverse || function() {}, fn = options.fn;

        var type = toString.call(context);

        if(type === functionType) { context = context.call(this); }

        if(context === true) {
            return fn(this);
        } else if(context === false || context == null) {
            return inverse(this);
        } else if(type === "[object Array]") {
            if(context.length > 0) {
                return Handlebars.helpers.each(context, options);
            } else {
                return inverse(this);
            }
        } else {
            return fn(context);
        }
    });

    Handlebars.K = function() {};

    Handlebars.createFrame = Object.create || function(object) {
        Handlebars.K.prototype = object;
        var obj = new Handlebars.K();
        Handlebars.K.prototype = null;
        return obj;
    };

    Handlebars.logger = {
        DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

        methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

        // can be overridden in the host environment
        log: function(level, obj) {
            if (Handlebars.logger.level <= level) {
                var method = Handlebars.logger.methodMap[level];
                if (typeof console !== 'undefined' && console[method]) {
                    console[method].call(console, obj);
                }
            }
        }
    };

    Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

    Handlebars.registerHelper('each', function(context, options) {
        var fn = options.fn, inverse = options.inverse;
        var i = 0, ret = "", data;

        var type = toString.call(context);
        if(type === functionType) { context = context.call(this); }

        if (options.data) {
            data = Handlebars.createFrame(options.data);
        }

        if(context && typeof context === 'object') {
            if(context instanceof Array){
                for(var j = context.length; i<j; i++) {
                    if (data) { data.index = i; }
                    ret = ret + fn(context[i], { data: data });
                }
            } else {
                for(var key in context) {
                    if(context.hasOwnProperty(key)) {
                        if(data) { data.key = key; }
                        ret = ret + fn(context[key], {data: data});
                        i++;
                    }
                }
            }
        }

        if(i === 0){
            ret = inverse(this);
        }

        return ret;
    });

    Handlebars.registerHelper('if', function(conditional, options) {
        var type = toString.call(conditional);
        if(type === functionType) { conditional = conditional.call(this); }

        if(!conditional || Handlebars.Utils.isEmpty(conditional)) {
            return options.inverse(this);
        } else {
            return options.fn(this);
        }
    });

    Handlebars.registerHelper('unless', function(conditional, options) {
        return Handlebars.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn});
    });

    Handlebars.registerHelper('with', function(context, options) {
        var type = toString.call(context);
        if(type === functionType) { context = context.call(this); }

        if (!Handlebars.Utils.isEmpty(context)) return options.fn(context);
    });

    Handlebars.registerHelper('log', function(context, options) {
        var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
        Handlebars.log(level, context);
    });
    ;
// lib/handlebars/compiler/parser.js
    /* Jison generated parser */
    var handlebars = (function(){
        var parser = {trace: function trace() { },
            yy: {},
            symbols_: {"error":2,"root":3,"program":4,"EOF":5,"simpleInverse":6,"statements":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"params":27,"hash":28,"dataName":29,"param":30,"STRING":31,"INTEGER":32,"BOOLEAN":33,"hashSegments":34,"hashSegment":35,"ID":36,"EQUALS":37,"DATA":38,"pathSegments":39,"SEP":40,"$accept":0,"$end":1},
            terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",31:"STRING",32:"INTEGER",33:"BOOLEAN",36:"ID",37:"EQUALS",38:"DATA",40:"SEP"},
            productions_: [0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[27,2],[27,1],[30,1],[30,1],[30,1],[30,1],[30,1],[28,1],[34,2],[34,1],[35,3],[35,3],[35,3],[35,3],[35,3],[26,1],[26,1],[26,1],[29,2],[21,1],[39,3],[39,1]],
            performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

                var $0 = $$.length - 1;
                switch (yystate) {
                    case 1: return $$[$0-1];
                        break;
                    case 2: this.$ = new yy.ProgramNode([], $$[$0]);
                        break;
                    case 3: this.$ = new yy.ProgramNode($$[$0-2], $$[$0]);
                        break;
                    case 4: this.$ = new yy.ProgramNode($$[$0-1], []);
                        break;
                    case 5: this.$ = new yy.ProgramNode($$[$0]);
                        break;
                    case 6: this.$ = new yy.ProgramNode([], []);
                        break;
                    case 7: this.$ = new yy.ProgramNode([]);
                        break;
                    case 8: this.$ = [$$[$0]];
                        break;
                    case 9: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
                        break;
                    case 10: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]);
                        break;
                    case 11: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]);
                        break;
                    case 12: this.$ = $$[$0];
                        break;
                    case 13: this.$ = $$[$0];
                        break;
                    case 14: this.$ = new yy.ContentNode($$[$0]);
                        break;
                    case 15: this.$ = new yy.CommentNode($$[$0]);
                        break;
                    case 16: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]);
                        break;
                    case 17: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]);
                        break;
                    case 18: this.$ = $$[$0-1];
                        break;
                    case 19:
                        // Parsing out the '&' escape token at this level saves ~500 bytes after min due to the removal of one parser node.
                        this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2][2] === '&');

                        break;
                    case 20: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], true);
                        break;
                    case 21: this.$ = new yy.PartialNode($$[$0-1]);
                        break;
                    case 22: this.$ = new yy.PartialNode($$[$0-2], $$[$0-1]);
                        break;
                    case 23:
                        break;
                    case 24: this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]];
                        break;
                    case 25: this.$ = [[$$[$0-1]].concat($$[$0]), null];
                        break;
                    case 26: this.$ = [[$$[$0-1]], $$[$0]];
                        break;
                    case 27: this.$ = [[$$[$0]], null];
                        break;
                    case 28: this.$ = [[$$[$0]], null];
                        break;
                    case 29: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
                        break;
                    case 30: this.$ = [$$[$0]];
                        break;
                    case 31: this.$ = $$[$0];
                        break;
                    case 32: this.$ = new yy.StringNode($$[$0]);
                        break;
                    case 33: this.$ = new yy.IntegerNode($$[$0]);
                        break;
                    case 34: this.$ = new yy.BooleanNode($$[$0]);
                        break;
                    case 35: this.$ = $$[$0];
                        break;
                    case 36: this.$ = new yy.HashNode($$[$0]);
                        break;
                    case 37: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
                        break;
                    case 38: this.$ = [$$[$0]];
                        break;
                    case 39: this.$ = [$$[$0-2], $$[$0]];
                        break;
                    case 40: this.$ = [$$[$0-2], new yy.StringNode($$[$0])];
                        break;
                    case 41: this.$ = [$$[$0-2], new yy.IntegerNode($$[$0])];
                        break;
                    case 42: this.$ = [$$[$0-2], new yy.BooleanNode($$[$0])];
                        break;
                    case 43: this.$ = [$$[$0-2], $$[$0]];
                        break;
                    case 44: this.$ = new yy.PartialNameNode($$[$0]);
                        break;
                    case 45: this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0]));
                        break;
                    case 46: this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0]));
                        break;
                    case 47: this.$ = new yy.DataNode($$[$0]);
                        break;
                    case 48: this.$ = new yy.IdNode($$[$0]);
                        break;
                    case 49: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2];
                        break;
                    case 50: this.$ = [{part: $$[$0]}];
                        break;
                }
            },
            table: [{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],25:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],25:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],25:[1,16]},{17:23,18:[1,22],21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],25:[2,8]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{4:30,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{17:31,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:32,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:33,21:24,29:25,36:[1,28],38:[1,27],39:26},{21:35,26:34,31:[1,36],32:[1,37],36:[1,28],39:26},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],25:[1,16]},{17:23,21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,4],7:38,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],25:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{18:[1,39]},{18:[2,27],21:44,24:[2,27],27:40,28:41,29:48,30:42,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,28],24:[2,28]},{18:[2,48],24:[2,48],31:[2,48],32:[2,48],33:[2,48],36:[2,48],38:[2,48],40:[1,51]},{21:52,36:[1,28],39:26},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],38:[2,50],40:[2,50]},{10:53,20:[1,54]},{10:55,20:[1,54]},{18:[1,56]},{18:[1,57]},{24:[1,58]},{18:[1,59],21:60,36:[1,28],39:26},{18:[2,44],36:[2,44]},{18:[2,45],36:[2,45]},{18:[2,46],36:[2,46]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],25:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{18:[2,25],21:44,24:[2,25],28:61,29:48,30:62,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,26],24:[2,26]},{18:[2,30],24:[2,30],31:[2,30],32:[2,30],33:[2,30],36:[2,30],38:[2,30]},{18:[2,36],24:[2,36],35:63,36:[1,64]},{18:[2,31],24:[2,31],31:[2,31],32:[2,31],33:[2,31],36:[2,31],38:[2,31]},{18:[2,32],24:[2,32],31:[2,32],32:[2,32],33:[2,32],36:[2,32],38:[2,32]},{18:[2,33],24:[2,33],31:[2,33],32:[2,33],33:[2,33],36:[2,33],38:[2,33]},{18:[2,34],24:[2,34],31:[2,34],32:[2,34],33:[2,34],36:[2,34],38:[2,34]},{18:[2,35],24:[2,35],31:[2,35],32:[2,35],33:[2,35],36:[2,35],38:[2,35]},{18:[2,38],24:[2,38],36:[2,38]},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],37:[1,65],38:[2,50],40:[2,50]},{36:[1,66]},{18:[2,47],24:[2,47],31:[2,47],32:[2,47],33:[2,47],36:[2,47],38:[2,47]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{21:67,36:[1,28],39:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,68]},{18:[2,24],24:[2,24]},{18:[2,29],24:[2,29],31:[2,29],32:[2,29],33:[2,29],36:[2,29],38:[2,29]},{18:[2,37],24:[2,37],36:[2,37]},{37:[1,65]},{21:69,29:73,31:[1,70],32:[1,71],33:[1,72],36:[1,28],38:[1,27],39:26},{18:[2,49],24:[2,49],31:[2,49],32:[2,49],33:[2,49],36:[2,49],38:[2,49],40:[2,49]},{18:[1,74]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{18:[2,39],24:[2,39],36:[2,39]},{18:[2,40],24:[2,40],36:[2,40]},{18:[2,41],24:[2,41],36:[2,41]},{18:[2,42],24:[2,42],36:[2,42]},{18:[2,43],24:[2,43],36:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]}],
            defaultActions: {17:[2,1]},
            parseError: function parseError(str, hash) {
                throw new Error(str);
            },
            parse: function parse(input) {
                var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
                this.lexer.setInput(input);
                this.lexer.yy = this.yy;
                this.yy.lexer = this.lexer;
                this.yy.parser = this;
                if (typeof this.lexer.yylloc == "undefined")
                    this.lexer.yylloc = {};
                var yyloc = this.lexer.yylloc;
                lstack.push(yyloc);
                var ranges = this.lexer.options && this.lexer.options.ranges;
                if (typeof this.yy.parseError === "function")
                    this.parseError = this.yy.parseError;
                function popStack(n) {
                    stack.length = stack.length - 2 * n;
                    vstack.length = vstack.length - n;
                    lstack.length = lstack.length - n;
                }
                function lex() {
                    var token;
                    token = self.lexer.lex() || 1;
                    if (typeof token !== "number") {
                        token = self.symbols_[token] || token;
                    }
                    return token;
                }
                var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
                while (true) {
                    state = stack[stack.length - 1];
                    if (this.defaultActions[state]) {
                        action = this.defaultActions[state];
                    } else {
                        if (symbol === null || typeof symbol == "undefined") {
                            symbol = lex();
                        }
                        action = table[state] && table[state][symbol];
                    }
                    if (typeof action === "undefined" || !action.length || !action[0]) {
                        var errStr = "";
                        if (!recovering) {
                            expected = [];
                            for (p in table[state])
                                if (this.terminals_[p] && p > 2) {
                                    expected.push("'" + this.terminals_[p] + "'");
                                }
                            if (this.lexer.showPosition) {
                                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                            } else {
                                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                            }
                            this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
                        }
                    }
                    if (action[0] instanceof Array && action.length > 1) {
                        throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                    }
                    switch (action[0]) {
                        case 1:
                            stack.push(symbol);
                            vstack.push(this.lexer.yytext);
                            lstack.push(this.lexer.yylloc);
                            stack.push(action[1]);
                            symbol = null;
                            if (!preErrorSymbol) {
                                yyleng = this.lexer.yyleng;
                                yytext = this.lexer.yytext;
                                yylineno = this.lexer.yylineno;
                                yyloc = this.lexer.yylloc;
                                if (recovering > 0)
                                    recovering--;
                            } else {
                                symbol = preErrorSymbol;
                                preErrorSymbol = null;
                            }
                            break;
                        case 2:
                            len = this.productions_[action[1]][1];
                            yyval.$ = vstack[vstack.length - len];
                            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
                            if (ranges) {
                                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                            }
                            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                            if (typeof r !== "undefined") {
                                return r;
                            }
                            if (len) {
                                stack = stack.slice(0, -1 * len * 2);
                                vstack = vstack.slice(0, -1 * len);
                                lstack = lstack.slice(0, -1 * len);
                            }
                            stack.push(this.productions_[action[1]][0]);
                            vstack.push(yyval.$);
                            lstack.push(yyval._$);
                            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                            stack.push(newState);
                            break;
                        case 3:
                            return true;
                    }
                }
                return true;
            }
        };
        /* Jison generated lexer */
        var lexer = (function(){
            var lexer = ({EOF:1,
                parseError:function parseError(str, hash) {
                    if (this.yy.parser) {
                        this.yy.parser.parseError(str, hash);
                    } else {
                        throw new Error(str);
                    }
                },
                setInput:function (input) {
                    this._input = input;
                    this._more = this._less = this.done = false;
                    this.yylineno = this.yyleng = 0;
                    this.yytext = this.matched = this.match = '';
                    this.conditionStack = ['INITIAL'];
                    this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
                    if (this.options.ranges) this.yylloc.range = [0,0];
                    this.offset = 0;
                    return this;
                },
                input:function () {
                    var ch = this._input[0];
                    this.yytext += ch;
                    this.yyleng++;
                    this.offset++;
                    this.match += ch;
                    this.matched += ch;
                    var lines = ch.match(/(?:\r\n?|\n).*/g);
                    if (lines) {
                        this.yylineno++;
                        this.yylloc.last_line++;
                    } else {
                        this.yylloc.last_column++;
                    }
                    if (this.options.ranges) this.yylloc.range[1]++;

                    this._input = this._input.slice(1);
                    return ch;
                },
                unput:function (ch) {
                    var len = ch.length;
                    var lines = ch.split(/(?:\r\n?|\n)/g);

                    this._input = ch + this._input;
                    this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
                    //this.yyleng -= len;
                    this.offset -= len;
                    var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                    this.match = this.match.substr(0, this.match.length-1);
                    this.matched = this.matched.substr(0, this.matched.length-1);

                    if (lines.length-1) this.yylineno -= lines.length-1;
                    var r = this.yylloc.range;

                    this.yylloc = {first_line: this.yylloc.first_line,
                        last_line: this.yylineno+1,
                        first_column: this.yylloc.first_column,
                        last_column: lines ?
                            (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                            this.yylloc.first_column - len
                    };

                    if (this.options.ranges) {
                        this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                    }
                    return this;
                },
                more:function () {
                    this._more = true;
                    return this;
                },
                less:function (n) {
                    this.unput(this.match.slice(n));
                },
                pastInput:function () {
                    var past = this.matched.substr(0, this.matched.length - this.match.length);
                    return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
                },
                upcomingInput:function () {
                    var next = this.match;
                    if (next.length < 20) {
                        next += this._input.substr(0, 20-next.length);
                    }
                    return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
                },
                showPosition:function () {
                    var pre = this.pastInput();
                    var c = new Array(pre.length + 1).join("-");
                    return pre + this.upcomingInput() + "\n" + c+"^";
                },
                next:function () {
                    if (this.done) {
                        return this.EOF;
                    }
                    if (!this._input) this.done = true;

                    var token,
                        match,
                        tempMatch,
                        index,
                        col,
                        lines;
                    if (!this._more) {
                        this.yytext = '';
                        this.match = '';
                    }
                    var rules = this._currentRules();
                    for (var i=0;i < rules.length; i++) {
                        tempMatch = this._input.match(this.rules[rules[i]]);
                        if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                            match = tempMatch;
                            index = i;
                            if (!this.options.flex) break;
                        }
                    }
                    if (match) {
                        lines = match[0].match(/(?:\r\n?|\n).*/g);
                        if (lines) this.yylineno += lines.length;
                        this.yylloc = {first_line: this.yylloc.last_line,
                            last_line: this.yylineno+1,
                            first_column: this.yylloc.last_column,
                            last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
                        this.yytext += match[0];
                        this.match += match[0];
                        this.matches = match;
                        this.yyleng = this.yytext.length;
                        if (this.options.ranges) {
                            this.yylloc.range = [this.offset, this.offset += this.yyleng];
                        }
                        this._more = false;
                        this._input = this._input.slice(match[0].length);
                        this.matched += match[0];
                        token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
                        if (this.done && this._input) this.done = false;
                        if (token) return token;
                        else return;
                    }
                    if (this._input === "") {
                        return this.EOF;
                    } else {
                        return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                            {text: "", token: null, line: this.yylineno});
                    }
                },
                lex:function lex() {
                    var r = this.next();
                    if (typeof r !== 'undefined') {
                        return r;
                    } else {
                        return this.lex();
                    }
                },
                begin:function begin(condition) {
                    this.conditionStack.push(condition);
                },
                popState:function popState() {
                    return this.conditionStack.pop();
                },
                _currentRules:function _currentRules() {
                    return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
                },
                topState:function () {
                    return this.conditionStack[this.conditionStack.length-2];
                },
                pushState:function begin(condition) {
                    this.begin(condition);
                }});
            lexer.options = {};
            lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

                var YYSTATE=YY_START
                switch($avoiding_name_collisions) {
                    case 0: yy_.yytext = "\\"; return 14;
                        break;
                    case 1:
                        if(yy_.yytext.slice(-1) !== "\\") this.begin("mu");
                        if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1), this.begin("emu");
                        if(yy_.yytext) return 14;

                        break;
                    case 2: return 14;
                        break;
                    case 3:
                        if(yy_.yytext.slice(-1) !== "\\") this.popState();
                        if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1);
                        return 14;

                        break;
                    case 4: yy_.yytext = yy_.yytext.substr(0, yy_.yyleng-4); this.popState(); return 15;
                        break;
                    case 5: return 25;
                        break;
                    case 6: return 16;
                        break;
                    case 7: return 20;
                        break;
                    case 8: return 19;
                        break;
                    case 9: return 19;
                        break;
                    case 10: return 23;
                        break;
                    case 11: return 22;
                        break;
                    case 12: this.popState(); this.begin('com');
                        break;
                    case 13: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.popState(); return 15;
                        break;
                    case 14: return 22;
                        break;
                    case 15: return 37;
                        break;
                    case 16: return 36;
                        break;
                    case 17: return 36;
                        break;
                    case 18: return 40;
                        break;
                    case 19: /*ignore whitespace*/
                        break;
                    case 20: this.popState(); return 24;
                        break;
                    case 21: this.popState(); return 18;
                        break;
                    case 22: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 31;
                        break;
                    case 23: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\'/g,"'"); return 31;
                        break;
                    case 24: return 38;
                        break;
                    case 25: return 33;
                        break;
                    case 26: return 33;
                        break;
                    case 27: return 32;
                        break;
                    case 28: return 36;
                        break;
                    case 29: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 36;
                        break;
                    case 30: return 'INVALID';
                        break;
                    case 31: return 5;
                        break;
                }
            };
            lexer.rules = [/^(?:\\\\(?=(\{\{)))/,/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[}\/ ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:-?[0-9]+(?=[}\s]))/,/^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
            lexer.conditions = {"mu":{"rules":[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":false},"emu":{"rules":[3],"inclusive":false},"com":{"rules":[4],"inclusive":false},"INITIAL":{"rules":[0,1,2,31],"inclusive":true}};
            return lexer;})()
        parser.lexer = lexer;
        function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
        return new Parser;
    })();;
// lib/handlebars/compiler/base.js

    Handlebars.Parser = handlebars;

    Handlebars.parse = function(input) {

        // Just return if an already-compile AST was passed in.
        if(input.constructor === Handlebars.AST.ProgramNode) { return input; }

        Handlebars.Parser.yy = Handlebars.AST;
        return Handlebars.Parser.parse(input);
    };
    ;
// lib/handlebars/compiler/ast.js
    Handlebars.AST = {};

    Handlebars.AST.ProgramNode = function(statements, inverse) {
        this.type = "program";
        this.statements = statements;
        if(inverse) { this.inverse = new Handlebars.AST.ProgramNode(inverse); }
    };

    Handlebars.AST.MustacheNode = function(rawParams, hash, unescaped) {
        this.type = "mustache";
        this.escaped = !unescaped;
        this.hash = hash;

        var id = this.id = rawParams[0];
        var params = this.params = rawParams.slice(1);

        // a mustache is an eligible helper if:
        // * its id is simple (a single part, not `this` or `..`)
        var eligibleHelper = this.eligibleHelper = id.isSimple;

        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        this.isHelper = eligibleHelper && (params.length || hash);

        // if a mustache is an eligible helper but not a definite
        // helper, it is ambiguous, and will be resolved in a later
        // pass or at runtime.
    };

    Handlebars.AST.PartialNode = function(partialName, context) {
        this.type         = "partial";
        this.partialName  = partialName;
        this.context      = context;
    };

    Handlebars.AST.BlockNode = function(mustache, program, inverse, close) {
        var verifyMatch = function(open, close) {
            if(open.original !== close.original) {
                throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
            }
        };

        verifyMatch(mustache.id, close);
        this.type = "block";
        this.mustache = mustache;
        this.program  = program;
        this.inverse  = inverse;

        if (this.inverse && !this.program) {
            this.isInverse = true;
        }
    };

    Handlebars.AST.ContentNode = function(string) {
        this.type = "content";
        this.string = string;
    };

    Handlebars.AST.HashNode = function(pairs) {
        this.type = "hash";
        this.pairs = pairs;
    };

    Handlebars.AST.IdNode = function(parts) {
        this.type = "ID";

        var original = "",
            dig = [],
            depth = 0;

        for(var i=0,l=parts.length; i<l; i++) {
            var part = parts[i].part;
            original += (parts[i].separator || '') + part;

            if (part === ".." || part === "." || part === "this") {
                if (dig.length > 0) { throw new Handlebars.Exception("Invalid path: " + original); }
                else if (part === "..") { depth++; }
                else { this.isScoped = true; }
            }
            else { dig.push(part); }
        }

        this.original = original;
        this.parts    = dig;
        this.string   = dig.join('.');
        this.depth    = depth;

        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

        this.stringModeValue = this.string;
    };

    Handlebars.AST.PartialNameNode = function(name) {
        this.type = "PARTIAL_NAME";
        this.name = name.original;
    };

    Handlebars.AST.DataNode = function(id) {
        this.type = "DATA";
        this.id = id;
    };

    Handlebars.AST.StringNode = function(string) {
        this.type = "STRING";
        this.original =
            this.string =
                this.stringModeValue = string;
    };

    Handlebars.AST.IntegerNode = function(integer) {
        this.type = "INTEGER";
        this.original =
            this.integer = integer;
        this.stringModeValue = Number(integer);
    };

    Handlebars.AST.BooleanNode = function(bool) {
        this.type = "BOOLEAN";
        this.bool = bool;
        this.stringModeValue = bool === "true";
    };

    Handlebars.AST.CommentNode = function(comment) {
        this.type = "comment";
        this.comment = comment;
    };
    ;
// lib/handlebars/utils.js

    var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

    Handlebars.Exception = function(message) {
        var tmp = Error.prototype.constructor.apply(this, arguments);

        // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
        for (var idx = 0; idx < errorProps.length; idx++) {
            this[errorProps[idx]] = tmp[errorProps[idx]];
        }
    };
    Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
    Handlebars.SafeString = function(string) {
        this.string = string;
    };
    Handlebars.SafeString.prototype.toString = function() {
        return this.string.toString();
    };

    var escape = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };

    var badChars = /[&<>"'`]/g;
    var possible = /[&<>"'`]/;

    var escapeChar = function(chr) {
        return escape[chr] || "&amp;";
    };

    Handlebars.Utils = {
        extend: function(obj, value) {
            for(var key in value) {
                if(value.hasOwnProperty(key)) {
                    obj[key] = value[key];
                }
            }
        },

        escapeExpression: function(string) {
            // don't escape SafeStrings, since they're already safe
            if (string instanceof Handlebars.SafeString) {
                return string.toString();
            } else if (string == null || string === false) {
                return "";
            }

            // Force a string conversion as this will be done by the append regardless and
            // the regex test will do this transparently behind the scenes, causing issues if
            // an object's to string has escaped characters in it.
            string = string.toString();

            if(!possible.test(string)) { return string; }
            return string.replace(badChars, escapeChar);
        },

        isEmpty: function(value) {
            if (!value && value !== 0) {
                return true;
            } else if(toString.call(value) === "[object Array]" && value.length === 0) {
                return true;
            } else {
                return false;
            }
        }
    };
    ;
// lib/handlebars/compiler/compiler.js

    /*jshint eqnull:true*/
    var Compiler = Handlebars.Compiler = function() {};
    var JavaScriptCompiler = Handlebars.JavaScriptCompiler = function() {};

// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

    Compiler.prototype = {
        compiler: Compiler,

        disassemble: function() {
            var opcodes = this.opcodes, opcode, out = [], params, param;

            for (var i=0, l=opcodes.length; i<l; i++) {
                opcode = opcodes[i];

                if (opcode.opcode === 'DECLARE') {
                    out.push("DECLARE " + opcode.name + "=" + opcode.value);
                } else {
                    params = [];
                    for (var j=0; j<opcode.args.length; j++) {
                        param = opcode.args[j];
                        if (typeof param === "string") {
                            param = "\"" + param.replace("\n", "\\n") + "\"";
                        }
                        params.push(param);
                    }
                    out.push(opcode.opcode + " " + params.join(" "));
                }
            }

            return out.join("\n");
        },
        equals: function(other) {
            var len = this.opcodes.length;
            if (other.opcodes.length !== len) {
                return false;
            }

            for (var i = 0; i < len; i++) {
                var opcode = this.opcodes[i],
                    otherOpcode = other.opcodes[i];
                if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
                    return false;
                }
                for (var j = 0; j < opcode.args.length; j++) {
                    if (opcode.args[j] !== otherOpcode.args[j]) {
                        return false;
                    }
                }
            }

            len = this.children.length;
            if (other.children.length !== len) {
                return false;
            }
            for (i = 0; i < len; i++) {
                if (!this.children[i].equals(other.children[i])) {
                    return false;
                }
            }

            return true;
        },

        guid: 0,

        compile: function(program, options) {
            this.children = [];
            this.depths = {list: []};
            this.options = options;

            // These changes will propagate to the other compiler components
            var knownHelpers = this.options.knownHelpers;
            this.options.knownHelpers = {
                'helperMissing': true,
                'blockHelperMissing': true,
                'each': true,
                'if': true,
                'unless': true,
                'with': true,
                'log': true
            };
            if (knownHelpers) {
                for (var name in knownHelpers) {
                    this.options.knownHelpers[name] = knownHelpers[name];
                }
            }

            return this.program(program);
        },

        accept: function(node) {
            return this[node.type](node);
        },

        program: function(program) {
            var statements = program.statements, statement;
            this.opcodes = [];

            for(var i=0, l=statements.length; i<l; i++) {
                statement = statements[i];
                this[statement.type](statement);
            }
            this.isSimple = l === 1;

            this.depths.list = this.depths.list.sort(function(a, b) {
                return a - b;
            });

            return this;
        },

        compileProgram: function(program) {
            var result = new this.compiler().compile(program, this.options);
            var guid = this.guid++, depth;

            this.usePartial = this.usePartial || result.usePartial;

            this.children[guid] = result;

            for(var i=0, l=result.depths.list.length; i<l; i++) {
                depth = result.depths.list[i];

                if(depth < 2) { continue; }
                else { this.addDepth(depth - 1); }
            }

            return guid;
        },

        block: function(block) {
            var mustache = block.mustache,
                program = block.program,
                inverse = block.inverse;

            if (program) {
                program = this.compileProgram(program);
            }

            if (inverse) {
                inverse = this.compileProgram(inverse);
            }

            var type = this.classifyMustache(mustache);

            if (type === "helper") {
                this.helperMustache(mustache, program, inverse);
            } else if (type === "simple") {
                this.simpleMustache(mustache);

                // now that the simple mustache is resolved, we need to
                // evaluate it by executing `blockHelperMissing`
                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);
                this.opcode('emptyHash');
                this.opcode('blockValue');
            } else {
                this.ambiguousMustache(mustache, program, inverse);

                // now that the simple mustache is resolved, we need to
                // evaluate it by executing `blockHelperMissing`
                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);
                this.opcode('emptyHash');
                this.opcode('ambiguousBlockValue');
            }

            this.opcode('append');
        },

        hash: function(hash) {
            var pairs = hash.pairs, pair, val;

            this.opcode('pushHash');

            for(var i=0, l=pairs.length; i<l; i++) {
                pair = pairs[i];
                val  = pair[1];

                if (this.options.stringParams) {
                    if(val.depth) {
                        this.addDepth(val.depth);
                    }
                    this.opcode('getContext', val.depth || 0);
                    this.opcode('pushStringParam', val.stringModeValue, val.type);
                } else {
                    this.accept(val);
                }

                this.opcode('assignToHash', pair[0]);
            }
            this.opcode('popHash');
        },

        partial: function(partial) {
            var partialName = partial.partialName;
            this.usePartial = true;

            if(partial.context) {
                this.ID(partial.context);
            } else {
                this.opcode('push', 'depth0');
            }

            this.opcode('invokePartial', partialName.name);
            this.opcode('append');
        },

        content: function(content) {
            this.opcode('appendContent', content.string);
        },

        mustache: function(mustache) {
            var options = this.options;
            var type = this.classifyMustache(mustache);

            if (type === "simple") {
                this.simpleMustache(mustache);
            } else if (type === "helper") {
                this.helperMustache(mustache);
            } else {
                this.ambiguousMustache(mustache);
            }

            if(mustache.escaped && !options.noEscape) {
                this.opcode('appendEscaped');
            } else {
                this.opcode('append');
            }
        },

        ambiguousMustache: function(mustache, program, inverse) {
            var id = mustache.id,
                name = id.parts[0],
                isBlock = program != null || inverse != null;

            this.opcode('getContext', id.depth);

            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);

            this.opcode('invokeAmbiguous', name, isBlock);
        },

        simpleMustache: function(mustache) {
            var id = mustache.id;

            if (id.type === 'DATA') {
                this.DATA(id);
            } else if (id.parts.length) {
                this.ID(id);
            } else {
                // Simplified ID for `this`
                this.addDepth(id.depth);
                this.opcode('getContext', id.depth);
                this.opcode('pushContext');
            }

            this.opcode('resolvePossibleLambda');
        },

        helperMustache: function(mustache, program, inverse) {
            var params = this.setupFullMustacheParams(mustache, program, inverse),
                name = mustache.id.parts[0];

            if (this.options.knownHelpers[name]) {
                this.opcode('invokeKnownHelper', params.length, name);
            } else if (this.options.knownHelpersOnly) {
                throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
            } else {
                this.opcode('invokeHelper', params.length, name);
            }
        },

        ID: function(id) {
            this.addDepth(id.depth);
            this.opcode('getContext', id.depth);

            var name = id.parts[0];
            if (!name) {
                this.opcode('pushContext');
            } else {
                this.opcode('lookupOnContext', id.parts[0]);
            }

            for(var i=1, l=id.parts.length; i<l; i++) {
                this.opcode('lookup', id.parts[i]);
            }
        },

        DATA: function(data) {
            this.options.data = true;
            if (data.id.isScoped || data.id.depth) {
                throw new Handlebars.Exception('Scoped data references are not supported: ' + data.original);
            }

            this.opcode('lookupData');
            var parts = data.id.parts;
            for(var i=0, l=parts.length; i<l; i++) {
                this.opcode('lookup', parts[i]);
            }
        },

        STRING: function(string) {
            this.opcode('pushString', string.string);
        },

        INTEGER: function(integer) {
            this.opcode('pushLiteral', integer.integer);
        },

        BOOLEAN: function(bool) {
            this.opcode('pushLiteral', bool.bool);
        },

        comment: function() {},

        // HELPERS
        opcode: function(name) {
            this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
        },

        declare: function(name, value) {
            this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
        },

        addDepth: function(depth) {
            if(isNaN(depth)) { throw new Error("EWOT"); }
            if(depth === 0) { return; }

            if(!this.depths[depth]) {
                this.depths[depth] = true;
                this.depths.list.push(depth);
            }
        },

        classifyMustache: function(mustache) {
            var isHelper   = mustache.isHelper;
            var isEligible = mustache.eligibleHelper;
            var options    = this.options;

            // if ambiguous, we can possibly resolve the ambiguity now
            if (isEligible && !isHelper) {
                var name = mustache.id.parts[0];

                if (options.knownHelpers[name]) {
                    isHelper = true;
                } else if (options.knownHelpersOnly) {
                    isEligible = false;
                }
            }

            if (isHelper) { return "helper"; }
            else if (isEligible) { return "ambiguous"; }
            else { return "simple"; }
        },

        pushParams: function(params) {
            var i = params.length, param;

            while(i--) {
                param = params[i];

                if(this.options.stringParams) {
                    if(param.depth) {
                        this.addDepth(param.depth);
                    }

                    this.opcode('getContext', param.depth || 0);
                    this.opcode('pushStringParam', param.stringModeValue, param.type);
                } else {
                    this[param.type](param);
                }
            }
        },

        setupMustacheParams: function(mustache) {
            var params = mustache.params;
            this.pushParams(params);

            if(mustache.hash) {
                this.hash(mustache.hash);
            } else {
                this.opcode('emptyHash');
            }

            return params;
        },

        // this will replace setupMustacheParams when we're done
        setupFullMustacheParams: function(mustache, program, inverse) {
            var params = mustache.params;
            this.pushParams(params);

            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);

            if(mustache.hash) {
                this.hash(mustache.hash);
            } else {
                this.opcode('emptyHash');
            }

            return params;
        }
    };

    var Literal = function(value) {
        this.value = value;
    };

    JavaScriptCompiler.prototype = {
        // PUBLIC API: You can override these methods in a subclass to provide
        // alternative compiled forms for name lookup and buffering semantics
        nameLookup: function(parent, name /* , type*/) {
            if (/^[0-9]+$/.test(name)) {
                return parent + "[" + name + "]";
            } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
                return parent + "." + name;
            }
            else {
                return parent + "['" + name + "']";
            }
        },

        appendToBuffer: function(string) {
            if (this.environment.isSimple) {
                return "return " + string + ";";
            } else {
                return {
                    appendToBuffer: true,
                    content: string,
                    toString: function() { return "buffer += " + string + ";"; }
                };
            }
        },

        initializeBuffer: function() {
            return this.quotedString("");
        },

        namespace: "Handlebars",
        // END PUBLIC API

        compile: function(environment, options, context, asObject) {
            this.environment = environment;
            this.options = options || {};

            Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n");

            this.name = this.environment.name;
            this.isChild = !!context;
            this.context = context || {
                programs: [],
                environments: [],
                aliases: { }
            };

            this.preamble();

            this.stackSlot = 0;
            this.stackVars = [];
            this.registers = { list: [] };
            this.compileStack = [];
            this.inlineStack = [];

            this.compileChildren(environment, options);

            var opcodes = environment.opcodes, opcode;

            this.i = 0;

            for(l=opcodes.length; this.i<l; this.i++) {
                opcode = opcodes[this.i];

                if(opcode.opcode === 'DECLARE') {
                    this[opcode.name] = opcode.value;
                } else {
                    this[opcode.opcode].apply(this, opcode.args);
                }
            }

            return this.createFunctionContext(asObject);
        },

        nextOpcode: function() {
            var opcodes = this.environment.opcodes;
            return opcodes[this.i + 1];
        },

        eat: function() {
            this.i = this.i + 1;
        },

        preamble: function() {
            var out = [];

            if (!this.isChild) {
                var namespace = this.namespace;

                var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
                if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
                if (this.options.data) { copies = copies + " data = data || {};"; }
                out.push(copies);
            } else {
                out.push('');
            }

            if (!this.environment.isSimple) {
                out.push(", buffer = " + this.initializeBuffer());
            } else {
                out.push("");
            }

            // track the last context pushed into place to allow skipping the
            // getContext opcode when it would be a noop
            this.lastContext = 0;
            this.source = out;
        },

        createFunctionContext: function(asObject) {
            var locals = this.stackVars.concat(this.registers.list);

            if(locals.length > 0) {
                this.source[1] = this.source[1] + ", " + locals.join(", ");
            }

            // Generate minimizer alias mappings
            if (!this.isChild) {
                for (var alias in this.context.aliases) {
                    if (this.context.aliases.hasOwnProperty(alias)) {
                        this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
                    }
                }
            }

            if (this.source[1]) {
                this.source[1] = "var " + this.source[1].substring(2) + ";";
            }

            // Merge children
            if (!this.isChild) {
                this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
            }

            if (!this.environment.isSimple) {
                this.source.push("return buffer;");
            }

            var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

            for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
                params.push("depth" + this.environment.depths.list[i]);
            }

            // Perform a second pass over the output to merge content when possible
            var source = this.mergeSource();

            if (!this.isChild) {
                var revision = Handlebars.COMPILER_REVISION,
                    versions = Handlebars.REVISION_CHANGES[revision];
                source = "this.compilerInfo = ["+revision+",'"+versions+"'];\n"+source;
            }

            if (asObject) {
                params.push(source);

                return Function.apply(this, params);
            } else {
                var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
                Handlebars.log(Handlebars.logger.DEBUG, functionSource + "\n\n");
                return functionSource;
            }
        },
        mergeSource: function() {
            // WARN: We are not handling the case where buffer is still populated as the source should
            // not have buffer append operations as their final action.
            var source = '',
                buffer;
            for (var i = 0, len = this.source.length; i < len; i++) {
                var line = this.source[i];
                if (line.appendToBuffer) {
                    if (buffer) {
                        buffer = buffer + '\n    + ' + line.content;
                    } else {
                        buffer = line.content;
                    }
                } else {
                    if (buffer) {
                        source += 'buffer += ' + buffer + ';\n  ';
                        buffer = undefined;
                    }
                    source += line + '\n  ';
                }
            }
            return source;
        },

        // [blockValue]
        //
        // On stack, before: hash, inverse, program, value
        // On stack, after: return value of blockHelperMissing
        //
        // The purpose of this opcode is to take a block of the form
        // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
        // replace it on the stack with the result of properly
        // invoking blockHelperMissing.
        blockValue: function() {
            this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

            var params = ["depth0"];
            this.setupParams(0, params);

            this.replaceStack(function(current) {
                params.splice(1, 0, current);
                return "blockHelperMissing.call(" + params.join(", ") + ")";
            });
        },

        // [ambiguousBlockValue]
        //
        // On stack, before: hash, inverse, program, value
        // Compiler value, before: lastHelper=value of last found helper, if any
        // On stack, after, if no lastHelper: same as [blockValue]
        // On stack, after, if lastHelper: value
        ambiguousBlockValue: function() {
            this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

            var params = ["depth0"];
            this.setupParams(0, params);

            var current = this.topStack();
            params.splice(1, 0, current);

            // Use the options value generated from the invocation
            params[params.length-1] = 'options';

            this.source.push("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
        },

        // [appendContent]
        //
        // On stack, before: ...
        // On stack, after: ...
        //
        // Appends the string value of `content` to the current buffer
        appendContent: function(content) {
            this.source.push(this.appendToBuffer(this.quotedString(content)));
        },

        // [append]
        //
        // On stack, before: value, ...
        // On stack, after: ...
        //
        // Coerces `value` to a String and appends it to the current buffer.
        //
        // If `value` is truthy, or 0, it is coerced into a string and appended
        // Otherwise, the empty string is appended
        append: function() {
            // Force anything that is inlined onto the stack so we don't have duplication
            // when we examine local
            this.flushInline();
            var local = this.popStack();
            this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
            if (this.environment.isSimple) {
                this.source.push("else { " + this.appendToBuffer("''") + " }");
            }
        },

        // [appendEscaped]
        //
        // On stack, before: value, ...
        // On stack, after: ...
        //
        // Escape `value` and append it to the buffer
        appendEscaped: function() {
            this.context.aliases.escapeExpression = 'this.escapeExpression';

            this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
        },

        // [getContext]
        //
        // On stack, before: ...
        // On stack, after: ...
        // Compiler value, after: lastContext=depth
        //
        // Set the value of the `lastContext` compiler value to the depth
        getContext: function(depth) {
            if(this.lastContext !== depth) {
                this.lastContext = depth;
            }
        },

        // [lookupOnContext]
        //
        // On stack, before: ...
        // On stack, after: currentContext[name], ...
        //
        // Looks up the value of `name` on the current context and pushes
        // it onto the stack.
        lookupOnContext: function(name) {
            this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
        },

        // [pushContext]
        //
        // On stack, before: ...
        // On stack, after: currentContext, ...
        //
        // Pushes the value of the current context onto the stack.
        pushContext: function() {
            this.pushStackLiteral('depth' + this.lastContext);
        },

        // [resolvePossibleLambda]
        //
        // On stack, before: value, ...
        // On stack, after: resolved value, ...
        //
        // If the `value` is a lambda, replace it on the stack by
        // the return value of the lambda
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"';

            this.replaceStack(function(current) {
                return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
            });
        },

        // [lookup]
        //
        // On stack, before: value, ...
        // On stack, after: value[name], ...
        //
        // Replace the value on the stack with the result of looking
        // up `name` on `value`
        lookup: function(name) {
            this.replaceStack(function(current) {
                return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
            });
        },

        // [lookupData]
        //
        // On stack, before: ...
        // On stack, after: data[id], ...
        //
        // Push the result of looking up `id` on the current data
        lookupData: function(id) {
            this.push('data');
        },

        // [pushStringParam]
        //
        // On stack, before: ...
        // On stack, after: string, currentContext, ...
        //
        // This opcode is designed for use in string mode, which
        // provides the string value of a parameter along with its
        // depth rather than resolving it immediately.
        pushStringParam: function(string, type) {
            this.pushStackLiteral('depth' + this.lastContext);

            this.pushString(type);

            if (typeof string === 'string') {
                this.pushString(string);
            } else {
                this.pushStackLiteral(string);
            }
        },

        emptyHash: function() {
            this.pushStackLiteral('{}');

            if (this.options.stringParams) {
                this.register('hashTypes', '{}');
                this.register('hashContexts', '{}');
            }
        },
        pushHash: function() {
            this.hash = {values: [], types: [], contexts: []};
        },
        popHash: function() {
            var hash = this.hash;
            this.hash = undefined;

            if (this.options.stringParams) {
                this.register('hashContexts', '{' + hash.contexts.join(',') + '}');
                this.register('hashTypes', '{' + hash.types.join(',') + '}');
            }
            this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
        },

        // [pushString]
        //
        // On stack, before: ...
        // On stack, after: quotedString(string), ...
        //
        // Push a quoted version of `string` onto the stack
        pushString: function(string) {
            this.pushStackLiteral(this.quotedString(string));
        },

        // [push]
        //
        // On stack, before: ...
        // On stack, after: expr, ...
        //
        // Push an expression onto the stack
        push: function(expr) {
            this.inlineStack.push(expr);
            return expr;
        },

        // [pushLiteral]
        //
        // On stack, before: ...
        // On stack, after: value, ...
        //
        // Pushes a value onto the stack. This operation prevents
        // the compiler from creating a temporary variable to hold
        // it.
        pushLiteral: function(value) {
            this.pushStackLiteral(value);
        },

        // [pushProgram]
        //
        // On stack, before: ...
        // On stack, after: program(guid), ...
        //
        // Push a program expression onto the stack. This takes
        // a compile-time guid and converts it into a runtime-accessible
        // expression.
        pushProgram: function(guid) {
            if (guid != null) {
                this.pushStackLiteral(this.programExpression(guid));
            } else {
                this.pushStackLiteral(null);
            }
        },

        // [invokeHelper]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of helper invocation
        //
        // Pops off the helper's parameters, invokes the helper,
        // and pushes the helper's return value onto the stack.
        //
        // If the helper is not found, `helperMissing` is called.
        invokeHelper: function(paramSize, name) {
            this.context.aliases.helperMissing = 'helpers.helperMissing';

            var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
            var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

            this.push(helper.name + ' || ' + nonHelper);
            this.replaceStack(function(name) {
                return name + ' ? ' + name + '.call(' +
                    helper.callParams + ") " + ": helperMissing.call(" +
                    helper.helperMissingParams + ")";
            });
        },

        // [invokeKnownHelper]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of helper invocation
        //
        // This operation is used when the helper is known to exist,
        // so a `helperMissing` fallback is not required.
        invokeKnownHelper: function(paramSize, name) {
            var helper = this.setupHelper(paramSize, name);
            this.push(helper.name + ".call(" + helper.callParams + ")");
        },

        // [invokeAmbiguous]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of disambiguation
        //
        // This operation is used when an expression like `{{foo}}`
        // is provided, but we don't know at compile-time whether it
        // is a helper or a path.
        //
        // This operation emits more code than the other options,
        // and can be avoided by passing the `knownHelpers` and
        // `knownHelpersOnly` flags at compile-time.
        invokeAmbiguous: function(name, helperCall) {
            this.context.aliases.functionType = '"function"';

            this.pushStackLiteral('{}');    // Hash value
            var helper = this.setupHelper(0, name, helperCall);

            var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

            var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
            var nextStack = this.nextStack();

            this.source.push('if (' + nextStack + ' = ' + helperName + ') { ' + nextStack + ' = ' + nextStack + '.call(' + helper.callParams + '); }');
            this.source.push('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '.apply(depth0) : ' + nextStack + '; }');
        },

        // [invokePartial]
        //
        // On stack, before: context, ...
        // On stack after: result of partial invocation
        //
        // This operation pops off a context, invokes a partial with that context,
        // and pushes the result of the invocation back.
        invokePartial: function(name) {
            var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

            if (this.options.data) {
                params.push("data");
            }

            this.context.aliases.self = "this";
            this.push("self.invokePartial(" + params.join(", ") + ")");
        },

        // [assignToHash]
        //
        // On stack, before: value, hash, ...
        // On stack, after: hash, ...
        //
        // Pops a value and hash off the stack, assigns `hash[key] = value`
        // and pushes the hash back onto the stack.
        assignToHash: function(key) {
            var value = this.popStack(),
                context,
                type;

            if (this.options.stringParams) {
                type = this.popStack();
                context = this.popStack();
            }

            var hash = this.hash;
            if (context) {
                hash.contexts.push("'" + key + "': " + context);
            }
            if (type) {
                hash.types.push("'" + key + "': " + type);
            }
            hash.values.push("'" + key + "': (" + value + ")");
        },

        // HELPERS

        compiler: JavaScriptCompiler,

        compileChildren: function(environment, options) {
            var children = environment.children, child, compiler;

            for(var i=0, l=children.length; i<l; i++) {
                child = children[i];
                compiler = new this.compiler();

                var index = this.matchExistingProgram(child);

                if (index == null) {
                    this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
                    index = this.context.programs.length;
                    child.index = index;
                    child.name = 'program' + index;
                    this.context.programs[index] = compiler.compile(child, options, this.context);
                    this.context.environments[index] = child;
                } else {
                    child.index = index;
                    child.name = 'program' + index;
                }
            }
        },
        matchExistingProgram: function(child) {
            for (var i = 0, len = this.context.environments.length; i < len; i++) {
                var environment = this.context.environments[i];
                if (environment && environment.equals(child)) {
                    return i;
                }
            }
        },

        programExpression: function(guid) {
            this.context.aliases.self = "this";

            if(guid == null) {
                return "self.noop";
            }

            var child = this.environment.children[guid],
                depths = child.depths.list, depth;

            var programParams = [child.index, child.name, "data"];

            for(var i=0, l = depths.length; i<l; i++) {
                depth = depths[i];

                if(depth === 1) { programParams.push("depth0"); }
                else { programParams.push("depth" + (depth - 1)); }
            }

            return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
        },

        register: function(name, val) {
            this.useRegister(name);
            this.source.push(name + " = " + val + ";");
        },

        useRegister: function(name) {
            if(!this.registers[name]) {
                this.registers[name] = true;
                this.registers.list.push(name);
            }
        },

        pushStackLiteral: function(item) {
            return this.push(new Literal(item));
        },

        pushStack: function(item) {
            this.flushInline();

            var stack = this.incrStack();
            if (item) {
                this.source.push(stack + " = " + item + ";");
            }
            this.compileStack.push(stack);
            return stack;
        },

        replaceStack: function(callback) {
            var prefix = '',
                inline = this.isInline(),
                stack;

            // If we are currently inline then we want to merge the inline statement into the
            // replacement statement via ','
            if (inline) {
                var top = this.popStack(true);

                if (top instanceof Literal) {
                    // Literals do not need to be inlined
                    stack = top.value;
                } else {
                    // Get or create the current stack name for use by the inline
                    var name = this.stackSlot ? this.topStackName() : this.incrStack();

                    prefix = '(' + this.push(name) + ' = ' + top + '),';
                    stack = this.topStack();
                }
            } else {
                stack = this.topStack();
            }

            var item = callback.call(this, stack);

            if (inline) {
                if (this.inlineStack.length || this.compileStack.length) {
                    this.popStack();
                }
                this.push('(' + prefix + item + ')');
            } else {
                // Prevent modification of the context depth variable. Through replaceStack
                if (!/^stack/.test(stack)) {
                    stack = this.nextStack();
                }

                this.source.push(stack + " = (" + prefix + item + ");");
            }
            return stack;
        },

        nextStack: function() {
            return this.pushStack();
        },

        incrStack: function() {
            this.stackSlot++;
            if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
            return this.topStackName();
        },
        topStackName: function() {
            return "stack" + this.stackSlot;
        },
        flushInline: function() {
            var inlineStack = this.inlineStack;
            if (inlineStack.length) {
                this.inlineStack = [];
                for (var i = 0, len = inlineStack.length; i < len; i++) {
                    var entry = inlineStack[i];
                    if (entry instanceof Literal) {
                        this.compileStack.push(entry);
                    } else {
                        this.pushStack(entry);
                    }
                }
            }
        },
        isInline: function() {
            return this.inlineStack.length;
        },

        popStack: function(wrapped) {
            var inline = this.isInline(),
                item = (inline ? this.inlineStack : this.compileStack).pop();

            if (!wrapped && (item instanceof Literal)) {
                return item.value;
            } else {
                if (!inline) {
                    this.stackSlot--;
                }
                return item;
            }
        },

        topStack: function(wrapped) {
            var stack = (this.isInline() ? this.inlineStack : this.compileStack),
                item = stack[stack.length - 1];

            if (!wrapped && (item instanceof Literal)) {
                return item.value;
            } else {
                return item;
            }
        },

        quotedString: function(str) {
            return '"' + str
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
                .replace(/\u2029/g, '\\u2029') + '"';
        },

        setupHelper: function(paramSize, name, missingParams) {
            var params = [];
            this.setupParams(paramSize, params, missingParams);
            var foundHelper = this.nameLookup('helpers', name, 'helper');

            return {
                params: params,
                name: foundHelper,
                callParams: ["depth0"].concat(params).join(", "),
                helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
            };
        },

        // the params and contexts arguments are passed in arrays
        // to fill in
        setupParams: function(paramSize, params, useRegister) {
            var options = [], contexts = [], types = [], param, inverse, program;

            options.push("hash:" + this.popStack());

            inverse = this.popStack();
            program = this.popStack();

            // Avoid setting fn and inverse if neither are set. This allows
            // helpers to do a check for `if (options.fn)`
            if (program || inverse) {
                if (!program) {
                    this.context.aliases.self = "this";
                    program = "self.noop";
                }

                if (!inverse) {
                    this.context.aliases.self = "this";
                    inverse = "self.noop";
                }

                options.push("inverse:" + inverse);
                options.push("fn:" + program);
            }

            for(var i=0; i<paramSize; i++) {
                param = this.popStack();
                params.push(param);

                if(this.options.stringParams) {
                    types.push(this.popStack());
                    contexts.push(this.popStack());
                }
            }

            if (this.options.stringParams) {
                options.push("contexts:[" + contexts.join(",") + "]");
                options.push("types:[" + types.join(",") + "]");
                options.push("hashContexts:hashContexts");
                options.push("hashTypes:hashTypes");
            }

            if(this.options.data) {
                options.push("data:data");
            }

            options = "{" + options.join(",") + "}";
            if (useRegister) {
                this.register('options', options);
                params.push('options');
            } else {
                params.push(options);
            }
            return params.join(", ");
        }
    };

    var reservedWords = (
        "break else new var" +
            " case finally return void" +
            " catch for switch while" +
            " continue function this with" +
            " default if throw" +
            " delete in try" +
            " do instanceof typeof" +
            " abstract enum int short" +
            " boolean export interface static" +
            " byte extends long super" +
            " char final native synchronized" +
            " class float package throws" +
            " const goto private transient" +
            " debugger implements protected volatile" +
            " double import public let yield"
        ).split(" ");

    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

    for(var i=0, l=reservedWords.length; i<l; i++) {
        compilerWords[reservedWords[i]] = true;
    }

    JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
        if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
            return true;
        }
        return false;
    };

    Handlebars.precompile = function(input, options) {
        if (input == null || (typeof input !== 'string' && input.constructor !== Handlebars.AST.ProgramNode)) {
            throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
        }

        options = options || {};
        if (!('data' in options)) {
            options.data = true;
        }
        var ast = Handlebars.parse(input);
        var environment = new Compiler().compile(ast, options);
        return new JavaScriptCompiler().compile(environment, options);
    };

    Handlebars.compile = function(input, options) {
        if (input == null || (typeof input !== 'string' && input.constructor !== Handlebars.AST.ProgramNode)) {
            throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
        }

        options = options || {};
        if (!('data' in options)) {
            options.data = true;
        }
        var compiled;
        function compile() {
            var ast = Handlebars.parse(input);
            var environment = new Compiler().compile(ast, options);
            var templateSpec = new JavaScriptCompiler().compile(environment, options, undefined, true);
            return Handlebars.template(templateSpec);
        }

        // Template is only compiled on first use and cached after that point.
        return function(context, options) {
            if (!compiled) {
                compiled = compile();
            }
            return compiled.call(this, context, options);
        };
    };

    ;
// lib/handlebars/runtime.js

    Handlebars.VM = {
        template: function(templateSpec) {
            // Just add water
            var container = {
                escapeExpression: Handlebars.Utils.escapeExpression,
                invokePartial: Handlebars.VM.invokePartial,
                programs: [],
                program: function(i, fn, data) {
                    var programWrapper = this.programs[i];
                    if(data) {
                        programWrapper = Handlebars.VM.program(i, fn, data);
                    } else if (!programWrapper) {
                        programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
                    }
                    return programWrapper;
                },
                merge: function(param, common) {
                    var ret = param || common;

                    if (param && common) {
                        ret = {};
                        Handlebars.Utils.extend(ret, common);
                        Handlebars.Utils.extend(ret, param);
                    }
                    return ret;
                },
                programWithDepth: Handlebars.VM.programWithDepth,
                noop: Handlebars.VM.noop,
                compilerInfo: null
            };

            return function(context, options) {
                options = options || {};
                var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);

                var compilerInfo = container.compilerInfo || [],
                    compilerRevision = compilerInfo[0] || 1,
                    currentRevision = Handlebars.COMPILER_REVISION;

                if (compilerRevision !== currentRevision) {
                    if (compilerRevision < currentRevision) {
                        var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision],
                            compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. "+
                            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").";
                    } else {
                        // Use the embedded version info since the runtime doesn't know about this revision yet
                        throw "Template was precompiled with a newer version of Handlebars than the current runtime. "+
                            "Please update your runtime to a newer version ("+compilerInfo[1]+").";
                    }
                }

                return result;
            };
        },

        programWithDepth: function(i, fn, data /*, $depth */) {
            var args = Array.prototype.slice.call(arguments, 3);

            var program = function(context, options) {
                options = options || {};

                return fn.apply(this, [context, options.data || data].concat(args));
            };
            program.program = i;
            program.depth = args.length;
            return program;
        },
        program: function(i, fn, data) {
            var program = function(context, options) {
                options = options || {};

                return fn(context, options.data || data);
            };
            program.program = i;
            program.depth = 0;
            return program;
        },
        noop: function() { return ""; },
        invokePartial: function(partial, name, context, helpers, partials, data) {
            var options = { helpers: helpers, partials: partials, data: data };

            if(partial === undefined) {
                throw new Handlebars.Exception("The partial " + name + " could not be found");
            } else if(partial instanceof Function) {
                return partial(context, options);
            } else if (!Handlebars.compile) {
                throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
            } else {
                partials[name] = Handlebars.compile(partial, {data: data !== undefined});
                return partials[name](context, options);
            }
        }
    };

    Handlebars.template = Handlebars.VM.template;
    ;
// lib/handlebars/browser-suffix.js
})(Handlebars);
;
define("handlebars", function(){});

define('directives/compare',['app', 'handlebars' ], function (app, handlebars) {
    app.directive('compare', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    console.log("viewValue:%s", viewValue);
                    console.log("attrs.compare:%s", attrs.compare);
                    if (viewValue == "" || attrs.compare == "" || viewValue == attrs.compare) {
                        ctrl.$setValidity('compare', true);
                    } else {
                        ctrl.$setValidity('compare', false);
                    }
                    return viewValue;
                });
            }
        };
    });
    app.directive('ngScroll', function () {
        return {
            link: function (scope, elm, attrs, ctrl) {
                $(elm).mCustomScrollbar({
                    scrollButtons: {
                        enable: true
                    }
                });
            }
        };
    });
    app.directive('modalbox', function () {
        return {
            link: function (scope, elm, attrs, ctrl) {
                $(elm).on("click", function () {
                    alert('ok')
                })
            }
        };
    });
    app.directive('sortable', function () {
        return {
            link: function (scope, elm, attrs, ctrl) {
                $(elm).css('cursor', 'pointer')

                $(elm).on("click", function () {
                    alert('准备排序')
                    console.log(attrs);
                    console.log(scope);
                })
            }
        };
    });
    app.directive('showdetail', function () {

        return {
            link: function (scope, elm, attrs, ctrl) {
                $(elm).css('cursor', 'pointer')


                /* $(elm).on("click", function () {
                 alert('popup')
                 console.log(elm);
                 console.log(scope)              ;
                 })*/
            }
        };
    });

    app.directive('toggletable', ['$http', function ($http) {

        return {

            link: function (scope, elm, attrs, ctrl) {

                var temp =
                    "  <td colspan='8' class='subrowtd'>" +
                        "<table class='subtable'>" +

                        "<tr class='thead'>    " +
                        "<th>N0.</th>    " +
                        "<th sortable>Title</th>         " +
                        "<th>Description</th>       " +
                        "<th>Source</th>            " +
                        "<th>Url</th>                      " +

                        " </tr>    " +


                        "{{#each feeds}} " +
                        " <tr class='tbody {{rate}}'>" +
                        "<td> </td>         " +
                        "<td>{{Title}} </td>    " +
                        " <td class='w200' >{{ maxContent}} </td>   " +
                        "<td>{{ FromSite }}</td>                              " +
                        "<td class='last'><a  >{{url}}</a></td>  " +

                        "</tr>                    " +
                        "{{/each}}" +

                        " </table></td>";

                $(elm).toggle(
                    function () {
                        $(elm).attr("class", "closelist");
                    },
                    function () {
                        $(elm).attr("class", "openlist");
                    }

                );
                $(elm).on("click", function () {

                    console.log(attrs)
                    if (attrs.queryover === "0") {
                        $(elm).parent().next().html("<img src='images/icon/waiting.gif' />Loading...");
                        $http.get('/api/alert/' + attrs.id).success(function (d) {

                            $http.post("/api/feeds", {keyword: d[0].Keyword}).success(function (data) {


                                var template = Handlebars.compile(temp);
                                Handlebars.registerHelper('maxContent', function () {

                                    var len = this.Content.length > 50 ? 50 : this.Content.length
                                    return this.Content.substring(0, len - 1) + "...";
                                });
                                Handlebars.registerHelper('rate', function () {
                                    if (this.Semantic === 0) return "";
                                    var cls = this.Semantic > 0 ? "positive" : "negative";

                                    return cls;
                                });
                                Handlebars.registerHelper('url', function () {

                                    var cls = this.FromUrl.length > 40 ? this.FromUrl.substring(0, 39) + "..." : this.FromUrl;

                                    return cls;
                                });
                                attrs.queryover = "1";
                                console.log($(elm).parent().next().children('.subrowtd'));
                                $(elm).parent().next().html(template(data));

                            })
                        });
                    }
                    $(elm).parent().next().toggle();

                })
            }
        };
    }]);

    /*  app.directive('uniform', function () {
     require('jqueryuniform');
     return {

     link: function (scope, elm, attrs, ctrl) {
     $("select, input").uniform();
     }
     };
     });*/

});

define('filter/filters',['app'], function (app) {
    app.filter('highlightWords', function () {
        return function (input, text) {
            var r = new RegExp(text, 'gmi');
            if (r.exec(input)) {
                return input;
            }
            else
                return "";
        };
    });
    app.filter('kimissList', function () {
        return function (input, text) {
            var childs = input[0].childs;
            for (var i = 0, l = childs.length; i < l; i++) {
                if (childs[i].name === text) {
                    return childs[i].content.trim();
                }
            }

        };
    });
    app.filter('maxlen', function () {
        return function (input, text) {
            var len = text || 40;
            if (input.length <= len)
                return input;
            return input.substring(0, len) + "...";

        };
    });
    /***
     * AngularJS For Loop with Numbers & Ranges
     */
    app.filter('range', function () {
        return function (input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++)
                input.push(i);
            return input;
        };
    });
    app.filter('PagerRange', function () {
        return function (input, total) {
            total = parseInt(total);
            if (total > 20) total = 20
            for (var i = 0; i < total; i++)
                input.push(i);
            return input;
        };
    });
    app.filter("numToTxt", function () {
        return function (input, text) {
            if (input === 1)
                return "Start";
            if (input === 0)
                return "Stop";
        };
    });
    app.filter("numToEnableTxt", function () {
        return function (input, text) {
            if (input === 1)
                return "Disable";
            if (input === 0)
                return "Enable";
        };
    });

    app.filter("statusChange", function () {
        return function (input, text) {
            if (input === 1)
                return "Included";
            if (input === 0)
                return "Waiting for audit";
        };
    });

});
define('services/services',['app'], function (app) {
    app.factory('FeedService', ['$http', '$q', function ($http, $q) {
        var items = {};
        items.querySourceType = function () {
            var delay = $q.defer();
            $http.get('api/feedsSourceType').success(function (data) {
                delay.resolve(data);
            });
            return delay.promise;
        };

        return items;

    }]);
});


define('controllers/include/analysisInclude',['../../app', 'i18n!resources/nls/res'], function (app, res) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('AnalysisIncludeCtrl', function ($scope, $http, $location, $window) {

    });
});



define('controllers/leftmenu/index',['../../app', 'i18n!resources/nls/res'], function (app, res) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LeftMenuCtrl', function ($scope, $rootScope, $http, $location, $window) {
        $rootScope.analysisDetailUrl = "partials/charts/default-analysis.html";

        $scope.Analysis = {
            toCustomerAnalysis: function () {
                $rootScope.analysisDetailUrl = "partials/charts/customer-analysis.html";
            },
            toBasicAnalysis: function () {
                $rootScope.analysisDetailUrl = "partials/charts/default-analysis.html";
            },
            toReoresentaticeArticles: function () {
                $rootScope.analysisDetailUrl = "partials/charts/representativeArticles-analysis.html";
            }
        };

    });
});

/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 10:01 AM
 * To change this template use File | Settings | File Templates.
 */
//TODO Define module
define('controllers/login',[ 'i18n!resources/nls/res'], function (res) {
    var LoginController = ["$scope", "$rootScope", "$http", "$location",
        function ($scope, $rootScope, $http, $location) {
            $rootScope.title = res.login;

            $scope.user = {
                name:'',
                password:''
            };

            $scope.login = function () {
                $http.post('api/login', $scope.user).success(function (data) {
                    if (data.err) {
                        return $scope.err = data.err;
                    }
                    $scope.$parent.resetLogin(data);
                    $location.path("/");
                });
            };
            $scope.register = function () {
               /* var a = $(".login-form")[0];
                a.style.top = "-1000px";
                setTimeout(function () {
                    window.location.hash = "/signup"
                }, 2000)
*/
                window.location.hash = "signup";
            };
        }];
    return LoginController;
});

define('controllers/logout',[ 'i18n!resources/nls/res'], function (res) {
var LogoutController = ["$scope", "$rootScope", "$http", "$location",
    function ($scope, $rootScope, $http, $location) {
        $rootScope.title =res.logout;
        $http.get('/logout').success(function () {
            $scope.$parent.resetLogin({});
            $location.path("/");
        });
    }];
    return LogoutController;
});
/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 2/1/13
 * Time: 3:13 PM
 * To change this template use File | Settings | File Templates.
 */

//TODO Define module
define('controllers/signup',[], function () {
var SignUpController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
    $rootScope.title = "SignUp";
    $scope.user = {
        name:'',
        password:'',
        repeatpassword:''
    };

    $scope.createClick = function () {
        $http.post('api/signup', $scope.user).success(function (data) {
            if (data.err) {
                return $scope.err = data.err;
            }
            $location.path("/");
        });
    };
}];
    return SignUpController;
});
/*--------------------------------------------------------------------------
 * linq.js - LINQ for JavaScript
 * ver 2.2.0.2 (Jan. 21th, 2011)
 *
 * created and maintained by neuecc <ils@neue.cc>
 * licensed under Microsoft Public License(Ms-PL)
 * http://neue.cc/
 * http://linqjs.codeplex.com/
 *--------------------------------------------------------------------------*/

define('linqjs',[], function () {
    var Enumerable = function (getEnumerator) {
        this.GetEnumerator = getEnumerator;
    }

    // Generator

    Enumerable.Choice = function () // variable argument
    {
        var args = (arguments[0] instanceof Array) ? arguments[0] : arguments;

        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () {
                    return this.Yield(args[Math.floor(Math.random() * args.length)]);
                },
                Functions.Blank);
        });
    };

    Enumerable.Cycle = function () // variable argument
    {
        var args = (arguments[0] instanceof Array) ? arguments[0] : arguments;

        return new Enumerable(function () {
            var index = 0;
            return new IEnumerator(
                Functions.Blank,
                function () {
                    if (index >= args.length) index = 0;
                    return this.Yield(args[index++]);
                },
                Functions.Blank);
        });
    };

    Enumerable.Empty = function () {
        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () {
                    return false;
                },
                Functions.Blank);
        });
    };

    Enumerable.From = function (obj) {
        if (obj == null) {
            return Enumerable.Empty();
        }
        if (obj instanceof Enumerable) {
            return obj;
        }
        if (typeof obj == Types.Number || typeof obj == Types.Boolean) {
            return Enumerable.Repeat(obj, 1);
        }
        if (typeof obj == Types.String) {
            return new Enumerable(function () {
                var index = 0;
                return new IEnumerator(
                    Functions.Blank,
                    function () {
                        return (index < obj.length) ? this.Yield(obj.charAt(index++)) : false;
                    },
                    Functions.Blank);
            });
        }
        if (typeof obj != Types.Function) {
            // array or array like object
            if (typeof obj.length == Types.Number) {
                return new ArrayEnumerable(obj);
            }

            // JScript's IEnumerable
            if (!(obj instanceof Object) && Utils.IsIEnumerable(obj)) {
                return new Enumerable(function () {
                    var isFirst = true;
                    var enumerator;
                    return new IEnumerator(
                        function () {
                            enumerator = new Enumerator(obj);
                        },
                        function () {
                            if (isFirst) isFirst = false;
                            else enumerator.moveNext();

                            return (enumerator.atEnd()) ? false : this.Yield(enumerator.item());
                        },
                        Functions.Blank);
                });
            }
        }

        // case function/object : Create KeyValuePair[]
        return new Enumerable(function () {
            var array = [];
            var index = 0;

            return new IEnumerator(
                function () {
                    for (var key in obj) {
                        if (!(obj[key] instanceof Function)) {
                            array.push({ Key: key, Value: obj[key] });
                        }
                    }
                },
                function () {
                    return (index < array.length)
                        ? this.Yield(array[index++])
                        : false;
                },
                Functions.Blank);
        });
    };

    Enumerable.Return = function (element) {
        return Enumerable.Repeat(element, 1);
    };

    // Overload:function(input, pattern)
    // Overload:function(input, pattern, flags)
    Enumerable.Matches = function (input, pattern, flags) {
        if (flags == null) flags = "";
        if (pattern instanceof RegExp) {
            flags += (pattern.ignoreCase) ? "i" : "";
            flags += (pattern.multiline) ? "m" : "";
            pattern = pattern.source;
        }
        if (flags.indexOf("g") === -1) flags += "g";

        return new Enumerable(function () {
            var regex;
            return new IEnumerator(
                function () {
                    regex = new RegExp(pattern, flags)
                },
                function () {
                    var match = regex.exec(input);
                    return (match) ? this.Yield(match) : false;
                },
                Functions.Blank);
        });
    };

    // Overload:function(start, count)
    // Overload:function(start, count, step)
    Enumerable.Range = function (start, count, step) {
        if (step == null) step = 1;
        return Enumerable.ToInfinity(start, step).Take(count);
    };

    // Overload:function(start, count)
    // Overload:function(start, count, step)
    Enumerable.RangeDown = function (start, count, step) {
        if (step == null) step = 1;
        return Enumerable.ToNegativeInfinity(start, step).Take(count);
    };

    // Overload:function(start, to)
    // Overload:function(start, to, step)
    Enumerable.RangeTo = function (start, to, step) {
        if (step == null) step = 1;
        return (start < to)
            ? Enumerable.ToInfinity(start, step).TakeWhile(function (i) {
            return i <= to;
        })
            : Enumerable.ToNegativeInfinity(start, step).TakeWhile(function (i) {
            return i >= to;
        })
    };

    // Overload:function(obj)
    // Overload:function(obj, num)
    Enumerable.Repeat = function (obj, num) {
        if (num != null) return Enumerable.Repeat(obj).Take(num);

        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () {
                    return this.Yield(obj);
                },
                Functions.Blank);
        });
    };

    Enumerable.RepeatWithFinalize = function (initializer, finalizer) {
        initializer = Utils.CreateLambda(initializer);
        finalizer = Utils.CreateLambda(finalizer);

        return new Enumerable(function () {
            var element;
            return new IEnumerator(
                function () {
                    element = initializer();
                },
                function () {
                    return this.Yield(element);
                },
                function () {
                    if (element != null) {
                        finalizer(element);
                        element = null;
                    }
                });
        });
    };

    // Overload:function(func)
    // Overload:function(func, count)
    Enumerable.Generate = function (func, count) {
        if (count != null) return Enumerable.Generate(func).Take(count);
        func = Utils.CreateLambda(func);

        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () {
                    return this.Yield(func());
                },
                Functions.Blank);
        });
    };

    // Overload:function()
    // Overload:function(start)
    // Overload:function(start, step)
    Enumerable.ToInfinity = function (start, step) {
        if (start == null) start = 0;
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            return new IEnumerator(
                function () {
                    value = start - step
                },
                function () {
                    return this.Yield(value += step);
                },
                Functions.Blank);
        });
    };

    // Overload:function()
    // Overload:function(start)
    // Overload:function(start, step)
    Enumerable.ToNegativeInfinity = function (start, step) {
        if (start == null) start = 0;
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            return new IEnumerator(
                function () {
                    value = start + step
                },
                function () {
                    return this.Yield(value -= step);
                },
                Functions.Blank);
        });
    };

    Enumerable.Unfold = function (seed, func) {
        func = Utils.CreateLambda(func);

        return new Enumerable(function () {
            var isFirst = true;
            var value;
            return new IEnumerator(
                Functions.Blank,
                function () {
                    if (isFirst) {
                        isFirst = false;
                        value = seed;
                        return this.Yield(value);
                    }
                    value = func(value);
                    return this.Yield(value);
                },
                Functions.Blank);
        });
    };

    // Extension Methods

    Enumerable.prototype =
    {
        /* Projection and Filtering Methods */

        // Overload:function(func)
        // Overload:function(func, resultSelector<element>)
        // Overload:function(func, resultSelector<element, nestLevel>)
        CascadeBreadthFirst: function (func, resultSelector) {
            var source = this;
            func = Utils.CreateLambda(func);
            resultSelector = Utils.CreateLambda(resultSelector);

            return new Enumerable(function () {
                var enumerator;
                var nestLevel = 0;
                var buffer = [];

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        while (true) {
                            if (enumerator.MoveNext()) {
                                buffer.push(enumerator.Current());
                                return this.Yield(resultSelector(enumerator.Current(), nestLevel));
                            }

                            var next = Enumerable.From(buffer).SelectMany(function (x) {
                                return func(x);
                            });
                            if (!next.Any()) {
                                return false;
                            }
                            else {
                                nestLevel++;
                                buffer = [];
                                Utils.Dispose(enumerator);
                                enumerator = next.GetEnumerator();
                            }
                        }
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        // Overload:function(func)
        // Overload:function(func, resultSelector<element>)
        // Overload:function(func, resultSelector<element, nestLevel>)
        CascadeDepthFirst: function (func, resultSelector) {
            var source = this;
            func = Utils.CreateLambda(func);
            resultSelector = Utils.CreateLambda(resultSelector);

            return new Enumerable(function () {
                var enumeratorStack = [];
                var enumerator;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        while (true) {
                            if (enumerator.MoveNext()) {
                                var value = resultSelector(enumerator.Current(), enumeratorStack.length);
                                enumeratorStack.push(enumerator);
                                enumerator = Enumerable.From(func(enumerator.Current())).GetEnumerator();
                                return this.Yield(value);
                            }

                            if (enumeratorStack.length <= 0) return false;
                            Utils.Dispose(enumerator);
                            enumerator = enumeratorStack.pop();
                        }
                    },
                    function () {
                        try {
                            Utils.Dispose(enumerator);
                        }
                        finally {
                            Enumerable.From(enumeratorStack).ForEach(function (s) {
                                s.Dispose();
                            })
                        }
                    });
            });
        },

        Flatten: function () {
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var middleEnumerator = null;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        while (true) {
                            if (middleEnumerator != null) {
                                if (middleEnumerator.MoveNext()) {
                                    return this.Yield(middleEnumerator.Current());
                                }
                                else {
                                    middleEnumerator = null;
                                }
                            }

                            if (enumerator.MoveNext()) {
                                if (enumerator.Current() instanceof Array) {
                                    Utils.Dispose(middleEnumerator);
                                    middleEnumerator = Enumerable.From(enumerator.Current())
                                        .SelectMany(Functions.Identity)
                                        .Flatten()
                                        .GetEnumerator();
                                    continue;
                                }
                                else {
                                    return this.Yield(enumerator.Current());
                                }
                            }

                            return false;
                        }
                    },
                    function () {
                        try {
                            Utils.Dispose(enumerator);
                        }
                        finally {
                            Utils.Dispose(middleEnumerator);
                        }
                    });
            });
        },

        Pairwise: function (selector) {
            var source = this;
            selector = Utils.CreateLambda(selector);

            return new Enumerable(function () {
                var enumerator;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                        enumerator.MoveNext();
                    },
                    function () {
                        var prev = enumerator.Current();
                        return (enumerator.MoveNext())
                            ? this.Yield(selector(prev, enumerator.Current()))
                            : false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        // Overload:function(func)
        // Overload:function(seed,func<value,element>)
        // Overload:function(seed,func<value,element>,resultSelector)
        Scan: function (seed, func, resultSelector) {
            if (resultSelector != null) return this.Scan(seed, func).Select(resultSelector);

            var isUseSeed;
            if (func == null) {
                func = Utils.CreateLambda(seed); // arguments[0]
                isUseSeed = false;
            }
            else {
                func = Utils.CreateLambda(func);
                isUseSeed = true;
            }
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var value;
                var isFirst = true;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        if (isFirst) {
                            isFirst = false;
                            if (!isUseSeed) {
                                if (enumerator.MoveNext()) {
                                    return this.Yield(value = enumerator.Current());
                                }
                            }
                            else {
                                return this.Yield(value = seed);
                            }
                        }

                        return (enumerator.MoveNext())
                            ? this.Yield(value = func(value, enumerator.Current()))
                            : false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        // Overload:function(selector<element>)
        // Overload:function(selector<element,index>)
        Select: function (selector) {
            var source = this;
            selector = Utils.CreateLambda(selector);

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        return (enumerator.MoveNext())
                            ? this.Yield(selector(enumerator.Current(), index++))
                            : false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        // Overload:function(collectionSelector<element>)
        // Overload:function(collectionSelector<element,index>)
        // Overload:function(collectionSelector<element>,resultSelector)
        // Overload:function(collectionSelector<element,index>,resultSelector)
        SelectMany: function (collectionSelector, resultSelector) {
            var source = this;
            collectionSelector = Utils.CreateLambda(collectionSelector);
            if (resultSelector == null) resultSelector = function (a, b) {
                return b;
            }
            resultSelector = Utils.CreateLambda(resultSelector);

            return new Enumerable(function () {
                var enumerator;
                var middleEnumerator = undefined;
                var index = 0;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        if (middleEnumerator === undefined) {
                            if (!enumerator.MoveNext()) return false;
                        }
                        do
                        {
                            if (middleEnumerator == null) {
                                var middleSeq = collectionSelector(enumerator.Current(), index++);
                                middleEnumerator = Enumerable.From(middleSeq).GetEnumerator();
                            }
                            if (middleEnumerator.MoveNext()) {
                                return this.Yield(resultSelector(enumerator.Current(), middleEnumerator.Current()));
                            }
                            Utils.Dispose(middleEnumerator);
                            middleEnumerator = null;
                        } while (enumerator.MoveNext())
                        return false;
                    },
                    function () {
                        try {
                            Utils.Dispose(enumerator);
                        }
                        finally {
                            Utils.Dispose(middleEnumerator);
                        }
                    })
            });
        },

        // Overload:function(predicate<element>)
        // Overload:function(predicate<element,index>)
        Where: function (predicate) {
            predicate = Utils.CreateLambda(predicate);
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        while (enumerator.MoveNext()) {
                            if (predicate(enumerator.Current(), index++)) {
                                return this.Yield(enumerator.Current());
                            }
                        }
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        OfType: function (type) {
            var typeName;
            switch (type) {
                case Number:
                    typeName = Types.Number;
                    break;
                case String:
                    typeName = Types.String;
                    break;
                case Boolean:
                    typeName = Types.Boolean;
                    break;
                case Function:
                    typeName = Types.Function;
                    break;
                default:
                    typeName = null;
                    break;
            }
            return (typeName === null)
                ? this.Where(function (x) {
                return x instanceof type
            })
                : this.Where(function (x) {
                return typeof x === typeName
            });
        },

        // Overload:function(second,selector<outer,inner>)
        // Overload:function(second,selector<outer,inner,index>)
        Zip: function (second, selector) {
            selector = Utils.CreateLambda(selector);
            var source = this;

            return new Enumerable(function () {
                var firstEnumerator;
                var secondEnumerator;
                var index = 0;

                return new IEnumerator(
                    function () {
                        firstEnumerator = source.GetEnumerator();
                        secondEnumerator = Enumerable.From(second).GetEnumerator();
                    },
                    function () {
                        if (firstEnumerator.MoveNext() && secondEnumerator.MoveNext()) {
                            return this.Yield(selector(firstEnumerator.Current(), secondEnumerator.Current(), index++));
                        }
                        return false;
                    },
                    function () {
                        try {
                            Utils.Dispose(firstEnumerator);
                        }
                        finally {
                            Utils.Dispose(secondEnumerator);
                        }
                    })
            });
        },

        /* Join Methods */

        // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
        // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
        Join: function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector) {
            outerKeySelector = Utils.CreateLambda(outerKeySelector);
            innerKeySelector = Utils.CreateLambda(innerKeySelector);
            resultSelector = Utils.CreateLambda(resultSelector);
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function () {
                var outerEnumerator;
                var lookup;
                var innerElements = null;
                var innerCount = 0;

                return new IEnumerator(
                    function () {
                        outerEnumerator = source.GetEnumerator();
                        lookup = Enumerable.From(inner).ToLookup(innerKeySelector, Functions.Identity, compareSelector);
                    },
                    function () {
                        while (true) {
                            if (innerElements != null) {
                                var innerElement = innerElements[innerCount++];
                                if (innerElement !== undefined) {
                                    return this.Yield(resultSelector(outerEnumerator.Current(), innerElement));
                                }

                                innerElement = null;
                                innerCount = 0;
                            }

                            if (outerEnumerator.MoveNext()) {
                                var key = outerKeySelector(outerEnumerator.Current());
                                innerElements = lookup.Get(key).ToArray();
                            }
                            else {
                                return false;
                            }
                        }
                    },
                    function () {
                        Utils.Dispose(outerEnumerator);
                    })
            });
        },

        // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
        // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
        GroupJoin: function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector) {
            outerKeySelector = Utils.CreateLambda(outerKeySelector);
            innerKeySelector = Utils.CreateLambda(innerKeySelector);
            resultSelector = Utils.CreateLambda(resultSelector);
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function () {
                var enumerator = source.GetEnumerator();
                var lookup = null;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                        lookup = Enumerable.From(inner).ToLookup(innerKeySelector, Functions.Identity, compareSelector);
                    },
                    function () {
                        if (enumerator.MoveNext()) {
                            var innerElement = lookup.Get(outerKeySelector(enumerator.Current()));
                            return this.Yield(resultSelector(enumerator.Current(), innerElement));
                        }
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        /* Set Methods */

        All: function (predicate) {
            predicate = Utils.CreateLambda(predicate);

            var result = true;
            this.ForEach(function (x) {
                if (!predicate(x)) {
                    result = false;
                    return false; // break
                }
            });
            return result;
        },

        // Overload:function()
        // Overload:function(predicate)
        Any: function (predicate) {
            predicate = Utils.CreateLambda(predicate);

            var enumerator = this.GetEnumerator();
            try {
                if (arguments.length == 0) return enumerator.MoveNext(); // case:function()

                while (enumerator.MoveNext()) // case:function(predicate)
                {
                    if (predicate(enumerator.Current())) return true;
                }
                return false;
            }
            finally {
                Utils.Dispose(enumerator);
            }
        },

        Concat: function (second) {
            var source = this;

            return new Enumerable(function () {
                var firstEnumerator;
                var secondEnumerator;

                return new IEnumerator(
                    function () {
                        firstEnumerator = source.GetEnumerator();
                    },
                    function () {
                        if (secondEnumerator == null) {
                            if (firstEnumerator.MoveNext()) return this.Yield(firstEnumerator.Current());
                            secondEnumerator = Enumerable.From(second).GetEnumerator();
                        }
                        if (secondEnumerator.MoveNext()) return this.Yield(secondEnumerator.Current());
                        return false;
                    },
                    function () {
                        try {
                            Utils.Dispose(firstEnumerator);
                        }
                        finally {
                            Utils.Dispose(secondEnumerator);
                        }
                    })
            });
        },

        Insert: function (index, second) {
            var source = this;

            return new Enumerable(function () {
                var firstEnumerator;
                var secondEnumerator;
                var count = 0;
                var isEnumerated = false;

                return new IEnumerator(
                    function () {
                        firstEnumerator = source.GetEnumerator();
                        secondEnumerator = Enumerable.From(second).GetEnumerator();
                    },
                    function () {
                        if (count == index && secondEnumerator.MoveNext()) {
                            isEnumerated = true;
                            return this.Yield(secondEnumerator.Current());
                        }
                        if (firstEnumerator.MoveNext()) {
                            count++;
                            return this.Yield(firstEnumerator.Current());
                        }
                        if (!isEnumerated && secondEnumerator.MoveNext()) {
                            return this.Yield(secondEnumerator.Current());
                        }
                        return false;
                    },
                    function () {
                        try {
                            Utils.Dispose(firstEnumerator);
                        }
                        finally {
                            Utils.Dispose(secondEnumerator);
                        }
                    })
            });
        },

        Alternate: function (value) {
            value = Enumerable.Return(value);
            return this.SelectMany(function (elem) {
                return Enumerable.Return(elem).Concat(value);
            }).TakeExceptLast();
        },

        // Overload:function(value)
        // Overload:function(value, compareSelector)
        Contains: function (value, compareSelector) {
            compareSelector = Utils.CreateLambda(compareSelector);
            var enumerator = this.GetEnumerator();
            try {
                while (enumerator.MoveNext()) {
                    if (compareSelector(enumerator.Current()) === value) return true;
                }
                return false;
            }
            finally {
                Utils.Dispose(enumerator)
            }
        },

        DefaultIfEmpty: function (defaultValue) {
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var isFirst = true;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        if (enumerator.MoveNext()) {
                            isFirst = false;
                            return this.Yield(enumerator.Current());
                        }
                        else if (isFirst) {
                            isFirst = false;
                            return this.Yield(defaultValue);
                        }
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        // Overload:function()
        // Overload:function(compareSelector)
        Distinct: function (compareSelector) {
            return this.Except(Enumerable.Empty(), compareSelector);
        },

        // Overload:function(second)
        // Overload:function(second, compareSelector)
        Except: function (second, compareSelector) {
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var keys;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                        keys = new Dictionary(compareSelector);
                        Enumerable.From(second).ForEach(function (key) {
                            keys.Add(key);
                        });
                    },
                    function () {
                        while (enumerator.MoveNext()) {
                            var current = enumerator.Current();
                            if (!keys.Contains(current)) {
                                keys.Add(current);
                                return this.Yield(current);
                            }
                        }
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        // Overload:function(second)
        // Overload:function(second, compareSelector)
        Intersect: function (second, compareSelector) {
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var keys;
                var outs;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();

                        keys = new Dictionary(compareSelector);
                        Enumerable.From(second).ForEach(function (key) {
                            keys.Add(key);
                        });
                        outs = new Dictionary(compareSelector);
                    },
                    function () {
                        while (enumerator.MoveNext()) {
                            var current = enumerator.Current();
                            if (!outs.Contains(current) && keys.Contains(current)) {
                                outs.Add(current);
                                return this.Yield(current);
                            }
                        }
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        // Overload:function(second)
        // Overload:function(second, compareSelector)
        SequenceEqual: function (second, compareSelector) {
            compareSelector = Utils.CreateLambda(compareSelector);

            var firstEnumerator = this.GetEnumerator();
            try {
                var secondEnumerator = Enumerable.From(second).GetEnumerator();
                try {
                    while (firstEnumerator.MoveNext()) {
                        if (!secondEnumerator.MoveNext()
                            || compareSelector(firstEnumerator.Current()) !== compareSelector(secondEnumerator.Current())) {
                            return false;
                        }
                    }

                    if (secondEnumerator.MoveNext()) return false;
                    return true;
                }
                finally {
                    Utils.Dispose(secondEnumerator);
                }
            }
            finally {
                Utils.Dispose(firstEnumerator);
            }
        },

        Union: function (second, compareSelector) {
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function () {
                var firstEnumerator;
                var secondEnumerator;
                var keys;

                return new IEnumerator(
                    function () {
                        firstEnumerator = source.GetEnumerator();
                        keys = new Dictionary(compareSelector);
                    },
                    function () {
                        var current;
                        if (secondEnumerator === undefined) {
                            while (firstEnumerator.MoveNext()) {
                                current = firstEnumerator.Current();
                                if (!keys.Contains(current)) {
                                    keys.Add(current);
                                    return this.Yield(current);
                                }
                            }
                            secondEnumerator = Enumerable.From(second).GetEnumerator();
                        }
                        while (secondEnumerator.MoveNext()) {
                            current = secondEnumerator.Current();
                            if (!keys.Contains(current)) {
                                keys.Add(current);
                                return this.Yield(current);
                            }
                        }
                        return false;
                    },
                    function () {
                        try {
                            Utils.Dispose(firstEnumerator);
                        }
                        finally {
                            Utils.Dispose(secondEnumerator);
                        }
                    })
            });
        },

        /* Ordering Methods */

        OrderBy: function (keySelector) {
            return new OrderedEnumerable(this, keySelector, false);
        },

        OrderByDescending: function (keySelector) {
            return new OrderedEnumerable(this, keySelector, true);
        },

        Reverse: function () {
            var source = this;

            return new Enumerable(function () {
                var buffer;
                var index;

                return new IEnumerator(
                    function () {
                        buffer = source.ToArray();
                        index = buffer.length;
                    },
                    function () {
                        return (index > 0)
                            ? this.Yield(buffer[--index])
                            : false;
                    },
                    Functions.Blank)
            });
        },

        Shuffle: function () {
            var source = this;

            return new Enumerable(function () {
                var buffer;

                return new IEnumerator(
                    function () {
                        buffer = source.ToArray();
                    },
                    function () {
                        if (buffer.length > 0) {
                            var i = Math.floor(Math.random() * buffer.length);
                            return this.Yield(buffer.splice(i, 1)[0]);
                        }
                        return false;
                    },
                    Functions.Blank)
            });
        },

        /* Grouping Methods */

        // Overload:function(keySelector)
        // Overload:function(keySelector,elementSelector)
        // Overload:function(keySelector,elementSelector,resultSelector)
        // Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
        GroupBy: function (keySelector, elementSelector, resultSelector, compareSelector) {
            var source = this;
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);
            if (resultSelector != null) resultSelector = Utils.CreateLambda(resultSelector);
            compareSelector = Utils.CreateLambda(compareSelector);

            return new Enumerable(function () {
                var enumerator;

                return new IEnumerator(
                    function () {
                        enumerator = source.ToLookup(keySelector, elementSelector, compareSelector)
                            .ToEnumerable()
                            .GetEnumerator();
                    },
                    function () {
                        while (enumerator.MoveNext()) {
                            return (resultSelector == null)
                                ? this.Yield(enumerator.Current())
                                : this.Yield(resultSelector(enumerator.Current().Key(), enumerator.Current()));
                        }
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        // Overload:function(keySelector)
        // Overload:function(keySelector,elementSelector)
        // Overload:function(keySelector,elementSelector,resultSelector)
        // Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
        PartitionBy: function (keySelector, elementSelector, resultSelector, compareSelector) {

            var source = this;
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);
            compareSelector = Utils.CreateLambda(compareSelector);
            var hasResultSelector;
            if (resultSelector == null) {
                hasResultSelector = false;
                resultSelector = function (key, group) {
                    return new Grouping(key, group)
                }
            }
            else {
                hasResultSelector = true;
                resultSelector = Utils.CreateLambda(resultSelector);
            }

            return new Enumerable(function () {
                var enumerator;
                var key;
                var compareKey;
                var group = [];

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                        if (enumerator.MoveNext()) {
                            key = keySelector(enumerator.Current());
                            compareKey = compareSelector(key);
                            group.push(elementSelector(enumerator.Current()));
                        }
                    },
                    function () {
                        var hasNext;
                        while ((hasNext = enumerator.MoveNext()) == true) {
                            if (compareKey === compareSelector(keySelector(enumerator.Current()))) {
                                group.push(elementSelector(enumerator.Current()));
                            }
                            else break;
                        }

                        if (group.length > 0) {
                            var result = (hasResultSelector)
                                ? resultSelector(key, Enumerable.From(group))
                                : resultSelector(key, group);
                            if (hasNext) {
                                key = keySelector(enumerator.Current());
                                compareKey = compareSelector(key);
                                group = [elementSelector(enumerator.Current())];
                            }
                            else group = [];

                            return this.Yield(result);
                        }

                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        BufferWithCount: function (count) {
            var source = this;

            return new Enumerable(function () {
                var enumerator;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        var array = [];
                        var index = 0;
                        while (enumerator.MoveNext()) {
                            array.push(enumerator.Current());
                            if (++index >= count) return this.Yield(array);
                        }
                        if (array.length > 0) return this.Yield(array);
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        /* Aggregate Methods */

        // Overload:function(func)
        // Overload:function(seed,func)
        // Overload:function(seed,func,resultSelector)
        Aggregate: function (seed, func, resultSelector) {
            return this.Scan(seed, func, resultSelector).Last();
        },

        // Overload:function()
        // Overload:function(selector)
        Average: function (selector) {
            selector = Utils.CreateLambda(selector);

            var sum = 0;
            var count = 0;
            this.ForEach(function (x) {
                sum += selector(x);
                ++count;
            });

            return sum / count;
        },

        // Overload:function()
        // Overload:function(predicate)
        Count: function (predicate) {
            predicate = (predicate == null) ? Functions.True : Utils.CreateLambda(predicate);

            var count = 0;
            this.ForEach(function (x, i) {
                if (predicate(x, i)) ++count;
            });
            return count;
        },

        // Overload:function()
        // Overload:function(selector)
        Max: function (selector) {
            if (selector == null) selector = Functions.Identity;
            return this.Select(selector).Aggregate(function (a, b) {
                return (a > b) ? a : b;
            });
        },

        // Overload:function()
        // Overload:function(selector)
        Min: function (selector) {
            if (selector == null) selector = Functions.Identity;
            return this.Select(selector).Aggregate(function (a, b) {
                return (a < b) ? a : b;
            });
        },

        MaxBy: function (keySelector) {
            keySelector = Utils.CreateLambda(keySelector);
            return this.Aggregate(function (a, b) {
                return (keySelector(a) > keySelector(b)) ? a : b
            });
        },

        MinBy: function (keySelector) {
            keySelector = Utils.CreateLambda(keySelector);
            return this.Aggregate(function (a, b) {
                return (keySelector(a) < keySelector(b)) ? a : b
            });
        },

        // Overload:function()
        // Overload:function(selector)
        Sum: function (selector) {
            if (selector == null) selector = Functions.Identity;
            return this.Select(selector).Aggregate(0, function (a, b) {
                return a + b;
            });
        },

        /* Paging Methods */

        ElementAt: function (index) {
            var value;
            var found = false;
            this.ForEach(function (x, i) {
                if (i == index) {
                    value = x;
                    found = true;
                    return false;
                }
            });

            if (!found) throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
            return value;
        },

        ElementAtOrDefault: function (index, defaultValue) {
            var value;
            var found = false;
            this.ForEach(function (x, i) {
                if (i == index) {
                    value = x;
                    found = true;
                    return false;
                }
            });

            return (!found) ? defaultValue : value;
        },

        // Overload:function()
        // Overload:function(predicate)
        First: function (predicate) {
            if (predicate != null) return this.Where(predicate).First();

            var value;
            var found = false;
            this.ForEach(function (x) {
                value = x;
                found = true;
                return false;
            });

            if (!found) throw new Error("First:No element satisfies the condition.");
            return value;
        },

        // Overload:function(defaultValue)
        // Overload:function(defaultValue,predicate)
        FirstOrDefault: function (defaultValue, predicate) {
            if (predicate != null) return this.Where(predicate).FirstOrDefault(defaultValue);

            var value;
            var found = false;
            this.ForEach(function (x) {
                value = x;
                found = true;
                return false;
            });
            return (!found) ? defaultValue : value;
        },

        // Overload:function()
        // Overload:function(predicate)
        Last: function (predicate) {
            if (predicate != null) return this.Where(predicate).Last();

            var value;
            var found = false;
            this.ForEach(function (x) {
                found = true;
                value = x;
            });

            if (!found) throw new Error("Last:No element satisfies the condition.");
            return value;
        },

        // Overload:function(defaultValue)
        // Overload:function(defaultValue,predicate)
        LastOrDefault: function (defaultValue, predicate) {
            if (predicate != null) return this.Where(predicate).LastOrDefault(defaultValue);

            var value;
            var found = false;
            this.ForEach(function (x) {
                found = true;
                value = x;
            });
            return (!found) ? defaultValue : value;
        },

        // Overload:function()
        // Overload:function(predicate)
        Single: function (predicate) {
            if (predicate != null) return this.Where(predicate).Single();

            var value;
            var found = false;
            this.ForEach(function (x) {
                if (!found) {
                    found = true;
                    value = x;
                }
                else throw new Error("Single:sequence contains more than one element.");
            });

            if (!found) throw new Error("Single:No element satisfies the condition.");
            return value;
        },

        // Overload:function(defaultValue)
        // Overload:function(defaultValue,predicate)
        SingleOrDefault: function (defaultValue, predicate) {
            if (predicate != null) return this.Where(predicate).SingleOrDefault(defaultValue);

            var value;
            var found = false;
            this.ForEach(function (x) {
                if (!found) {
                    found = true;
                    value = x;
                }
                else throw new Error("Single:sequence contains more than one element.");
            });

            return (!found) ? defaultValue : value;
        },

        Skip: function (count) {
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                        while (index++ < count && enumerator.MoveNext()) {
                        }
                        ;
                    },
                    function () {
                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        // Overload:function(predicate<element>)
        // Overload:function(predicate<element,index>)
        SkipWhile: function (predicate) {
            predicate = Utils.CreateLambda(predicate);
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;
                var isSkipEnd = false;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        while (!isSkipEnd) {
                            if (enumerator.MoveNext()) {
                                if (!predicate(enumerator.Current(), index++)) {
                                    isSkipEnd = true;
                                    return this.Yield(enumerator.Current());
                                }
                                continue;
                            }
                            else return false;
                        }

                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;

                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        Take: function (count) {
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        return (index++ < count && enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    }
                )
            });
        },

        // Overload:function(predicate<element>)
        // Overload:function(predicate<element,index>)
        TakeWhile: function (predicate) {
            predicate = Utils.CreateLambda(predicate);
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        return (enumerator.MoveNext() && predicate(enumerator.Current(), index++))
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        // Overload:function()
        // Overload:function(count)
        TakeExceptLast: function (count) {
            if (count == null) count = 1;
            var source = this;

            return new Enumerable(function () {
                if (count <= 0) return source.GetEnumerator(); // do nothing

                var enumerator;
                var q = [];

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        while (enumerator.MoveNext()) {
                            if (q.length == count) {
                                q.push(enumerator.Current());
                                return this.Yield(q.shift());
                            }
                            q.push(enumerator.Current());
                        }
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        TakeFromLast: function (count) {
            if (count <= 0 || count == null) return Enumerable.Empty();
            var source = this;

            return new Enumerable(function () {
                var sourceEnumerator;
                var enumerator;
                var q = [];

                return new IEnumerator(
                    function () {
                        sourceEnumerator = source.GetEnumerator();
                    },
                    function () {
                        while (sourceEnumerator.MoveNext()) {
                            if (q.length == count) q.shift()
                            q.push(sourceEnumerator.Current());
                        }
                        if (enumerator == null) {
                            enumerator = Enumerable.From(q).GetEnumerator();
                        }
                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        IndexOf: function (item) {
            var found = null;
            this.ForEach(function (x, i) {
                if (x === item) {
                    found = i;
                    return true;
                }
            });

            return (found !== null) ? found : -1;
        },

        LastIndexOf: function (item) {
            var result = -1;
            this.ForEach(function (x, i) {
                if (x === item) result = i;
            });

            return result;
        },

        /* Convert Methods */

        ToArray: function () {
            var array = [];
            this.ForEach(function (x) {
                array.push(x)
            });
            return array;
        },

        // Overload:function(keySelector)
        // Overload:function(keySelector, elementSelector)
        // Overload:function(keySelector, elementSelector, compareSelector)
        ToLookup: function (keySelector, elementSelector, compareSelector) {
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);
            compareSelector = Utils.CreateLambda(compareSelector);

            var dict = new Dictionary(compareSelector);
            this.ForEach(function (x) {
                var key = keySelector(x);
                var element = elementSelector(x);

                var array = dict.Get(key);
                if (array !== undefined) array.push(element);
                else dict.Add(key, [element]);
            });
            return new Lookup(dict);
        },

        ToObject: function (keySelector, elementSelector) {
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);

            var obj = {};
            this.ForEach(function (x) {
                obj[keySelector(x)] = elementSelector(x);
            });
            return obj;
        },

        // Overload:function(keySelector, elementSelector)
        // Overload:function(keySelector, elementSelector, compareSelector)
        ToDictionary: function (keySelector, elementSelector, compareSelector) {
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);
            compareSelector = Utils.CreateLambda(compareSelector);

            var dict = new Dictionary(compareSelector);
            this.ForEach(function (x) {
                dict.Add(keySelector(x), elementSelector(x));
            });
            return dict;
        },

        // Overload:function()
        // Overload:function(replacer)
        // Overload:function(replacer, space)
        ToJSON: function (replacer, space) {
            return JSON.stringify(this.ToArray(), replacer, space);
        },

        // Overload:function()
        // Overload:function(separator)
        // Overload:function(separator,selector)
        ToString: function (separator, selector) {
            if (separator == null) separator = "";
            if (selector == null) selector = Functions.Identity;

            return this.Select(selector).ToArray().join(separator);
        },


        /* Action Methods */

        // Overload:function(action<element>)
        // Overload:function(action<element,index>)
        Do: function (action) {
            var source = this;
            action = Utils.CreateLambda(action);

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        if (enumerator.MoveNext()) {
                            action(enumerator.Current(), index++);
                            return this.Yield(enumerator.Current());
                        }
                        return false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        // Overload:function(action<element>)
        // Overload:function(action<element,index>)
        // Overload:function(func<element,bool>)
        // Overload:function(func<element,index,bool>)
        ForEach: function (action) {
            action = Utils.CreateLambda(action);

            var index = 0;
            var enumerator = this.GetEnumerator();
            try {
                while (enumerator.MoveNext()) {
                    if (action(enumerator.Current(), index++) === false) break;
                }
            }
            finally {
                Utils.Dispose(enumerator);
            }
        },

        // Overload:function()
        // Overload:function(separator)
        // Overload:function(separator,selector)
        Write: function (separator, selector) {
            if (separator == null) separator = "";
            selector = Utils.CreateLambda(selector);

            var isFirst = true;
            this.ForEach(function (item) {
                if (isFirst) isFirst = false;
                else document.write(separator);
                document.write(selector(item));
            });
        },

        // Overload:function()
        // Overload:function(selector)
        WriteLine: function (selector) {
            selector = Utils.CreateLambda(selector);

            this.ForEach(function (item) {
                document.write(selector(item));
                document.write("<br />");
            });
        },

        Force: function () {
            var enumerator = this.GetEnumerator();

            try {
                while (enumerator.MoveNext()) {
                }
            }
            finally {
                Utils.Dispose(enumerator);
            }
        },

        /* Functional Methods */

        Let: function (func) {
            func = Utils.CreateLambda(func);
            var source = this;

            return new Enumerable(function () {
                var enumerator;

                return new IEnumerator(
                    function () {
                        enumerator = Enumerable.From(func(source)).GetEnumerator();
                    },
                    function () {
                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    })
            });
        },

        Share: function () {
            var source = this;
            var sharedEnumerator;

            return new Enumerable(function () {
                return new IEnumerator(
                    function () {
                        if (sharedEnumerator == null) {
                            sharedEnumerator = source.GetEnumerator();
                        }
                    },
                    function () {
                        return (sharedEnumerator.MoveNext())
                            ? this.Yield(sharedEnumerator.Current())
                            : false;
                    },
                    Functions.Blank
                )
            });
        },

        MemoizeAll: function () {
            var source = this;
            var cache;
            var enumerator;

            return new Enumerable(function () {
                var index = -1;

                return new IEnumerator(
                    function () {
                        if (enumerator == null) {
                            enumerator = source.GetEnumerator();
                            cache = [];
                        }
                    },
                    function () {
                        index++;
                        if (cache.length <= index) {
                            return (enumerator.MoveNext())
                                ? this.Yield(cache[index] = enumerator.Current())
                                : false;
                        }

                        return this.Yield(cache[index]);
                    },
                    Functions.Blank
                )
            });
        },

        /* Error Handling Methods */

        Catch: function (handler) {
            handler = Utils.CreateLambda(handler);
            var source = this;

            return new Enumerable(function () {
                var enumerator;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        try {
                            return (enumerator.MoveNext())
                                ? this.Yield(enumerator.Current())
                                : false;
                        }
                        catch (e) {
                            handler(e);
                            return false;
                        }
                    },
                    function () {
                        Utils.Dispose(enumerator);
                    });
            });
        },

        Finally: function (finallyAction) {
            finallyAction = Utils.CreateLambda(finallyAction);
            var source = this;

            return new Enumerable(function () {
                var enumerator;

                return new IEnumerator(
                    function () {
                        enumerator = source.GetEnumerator();
                    },
                    function () {
                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () {
                        try {
                            Utils.Dispose(enumerator);
                        }
                        finally {
                            finallyAction();
                        }
                    });
            });
        },

        /* For Debug Methods */

        // Overload:function()
        // Overload:function(message)
        // Overload:function(message,selector)
        Trace: function (message, selector) {
            if (message == null) message = "Trace";
            selector = Utils.CreateLambda(selector);

            return this.Do(function (item) {
                console.log(message, ":", selector(item));
            });
        }
    };

    // private

    // static functions
    var Functions =
    {
        Identity: function (x) {
            return x;
        },
        True: function () {
            return true;
        },
        Blank: function () {
        }
    };

    // static const
    var Types =
    {
        Boolean: typeof true,
        Number: typeof 0,
        String: typeof "",
        Object: typeof {},
        Undefined: typeof undefined,
        Function: function () {
        }
    };

    // static utility methods
    var Utils =
    {
        // Create anonymous function from lambda expression string
        CreateLambda: function (expression) {
            if (expression == null) return Functions.Identity;
            if (typeof expression == Types.String) {
                if (expression == "") {
                    return Functions.Identity;
                }
                else if (expression.indexOf("=>") == -1) {
                    return new Function("$,$$,$$$,$$$$", "return " + expression);
                }
                else {
                    var expr = expression.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
                    return new Function(expr[1], "return " + expr[2]);
                }
            }
            return expression;
        },

        IsIEnumerable: function (obj) {
            if (typeof Enumerator != Types.Undefined) {
                try {
                    new Enumerator(obj);
                    return true;
                }
                catch (e) {
                }
            }
            return false;
        },

        Compare: function (a, b) {
            return (a === b) ? 0
                : (a > b) ? 1
                : -1;
        },

        Dispose: function (obj) {
            if (obj != null) obj.Dispose();
        }
    };

    // IEnumerator State
    var State = { Before: 0, Running: 1, After: 2 };

    // name "Enumerator" is conflict JScript's "Enumerator"
    var IEnumerator = function (initialize, tryGetNext, dispose) {
        var yielder = new Yielder();
        var state = State.Before;

        this.Current = yielder.Current;
        this.MoveNext = function () {
            try {
                switch (state) {
                    case State.Before:
                        state = State.Running;
                        initialize(); // fall through
                    case State.Running:
                        if (tryGetNext.apply(yielder)) {
                            return true;
                        }
                        else {
                            this.Dispose();
                            return false;
                        }
                    case State.After:
                        return false;
                }
            }
            catch (e) {
                this.Dispose();
                throw e;
            }
        }
        this.Dispose = function () {
            if (state != State.Running) return;

            try {
                dispose();
            }
            finally {
                state = State.After;
            }
        }
    };

    // for tryGetNext
    var Yielder = function () {
        var current = null;
        this.Current = function () {
            return current;
        }
        this.Yield = function (value) {
            current = value;
            return true;
        }
    };

    // for OrderBy/ThenBy

    var OrderedEnumerable = function (source, keySelector, descending, parent) {
        this.source = source;
        this.keySelector = Utils.CreateLambda(keySelector);
        this.descending = descending;
        this.parent = parent;
    };
    OrderedEnumerable.prototype = new Enumerable();

    OrderedEnumerable.prototype.CreateOrderedEnumerable = function (keySelector, descending) {
        return new OrderedEnumerable(this.source, keySelector, descending, this);
    };

    OrderedEnumerable.prototype.ThenBy = function (keySelector) {
        return this.CreateOrderedEnumerable(keySelector, false);
    };

    OrderedEnumerable.prototype.ThenByDescending = function (keySelector) {
        return this.CreateOrderedEnumerable(keySelector, true);
    };

    OrderedEnumerable.prototype.GetEnumerator = function () {
        var self = this;
        var buffer;
        var indexes;
        var index = 0;

        return new IEnumerator(
            function () {
                buffer = [];
                indexes = [];
                self.source.ForEach(function (item, index) {
                    buffer.push(item);
                    indexes.push(index);
                });
                var sortContext = SortContext.Create(self, null);
                sortContext.GenerateKeys(buffer);

                indexes.sort(function (a, b) {
                    return sortContext.Compare(a, b);
                });
            },
            function () {
                return (index < indexes.length)
                    ? this.Yield(buffer[indexes[index++]])
                    : false;
            },
            Functions.Blank
        )
    };

    var SortContext = function (keySelector, descending, child) {
        this.keySelector = keySelector;
        this.descending = descending;
        this.child = child;
        this.keys = null;
    };

    SortContext.Create = function (orderedEnumerable, currentContext) {
        var context = new SortContext(orderedEnumerable.keySelector, orderedEnumerable.descending, currentContext);
        if (orderedEnumerable.parent != null) return SortContext.Create(orderedEnumerable.parent, context);
        return context;
    };

    SortContext.prototype.GenerateKeys = function (source) {
        var len = source.length;
        var keySelector = this.keySelector;
        var keys = new Array(len);
        for (var i = 0; i < len; i++) keys[i] = keySelector(source[i]);
        this.keys = keys;

        if (this.child != null) this.child.GenerateKeys(source);
    };

    SortContext.prototype.Compare = function (index1, index2) {
        var comparison = Utils.Compare(this.keys[index1], this.keys[index2]);

        if (comparison == 0) {
            if (this.child != null) return this.child.Compare(index1, index2)
            comparison = Utils.Compare(index1, index2);
        }

        return (this.descending) ? -comparison : comparison;
    };

    // optimize array or arraylike object

    var ArrayEnumerable = function (source) {
        this.source = source;
    };
    ArrayEnumerable.prototype = new Enumerable();

    ArrayEnumerable.prototype.Any = function (predicate) {
        return (predicate == null)
            ? (this.source.length > 0)
            : Enumerable.prototype.Any.apply(this, arguments);
    };

    ArrayEnumerable.prototype.Count = function (predicate) {
        return (predicate == null)
            ? this.source.length
            : Enumerable.prototype.Count.apply(this, arguments);
    };

    ArrayEnumerable.prototype.ElementAt = function (index) {
        return (0 <= index && index < this.source.length)
            ? this.source[index]
            : Enumerable.prototype.ElementAt.apply(this, arguments);
    };

    ArrayEnumerable.prototype.ElementAtOrDefault = function (index, defaultValue) {
        return (0 <= index && index < this.source.length)
            ? this.source[index]
            : defaultValue;
    };

    ArrayEnumerable.prototype.First = function (predicate) {
        return (predicate == null && this.source.length > 0)
            ? this.source[0]
            : Enumerable.prototype.First.apply(this, arguments);
    };

    ArrayEnumerable.prototype.FirstOrDefault = function (defaultValue, predicate) {
        if (predicate != null) {
            return Enumerable.prototype.FirstOrDefault.apply(this, arguments);
        }

        return this.source.length > 0 ? this.source[0] : defaultValue;
    }
    ;
    ArrayEnumerable.prototype.Last = function (predicate) {
        return (predicate == null && this.source.length > 0)
            ? this.source[this.source.length - 1]
            : Enumerable.prototype.Last.apply(this, arguments);
    };

    ArrayEnumerable.prototype.LastOrDefault = function (defaultValue, predicate) {
        if (predicate != null) {
            return Enumerable.prototype.LastOrDefault.apply(this, arguments);
        }

        return this.source.length > 0 ? this.source[this.source.length - 1] : defaultValue;
    };

    ArrayEnumerable.prototype.Skip = function (count) {
        var source = this.source;

        return new Enumerable(function () {
            var index;

            return new IEnumerator(
                function () {
                    index = (count < 0) ? 0 : count
                },
                function () {
                    return (index < source.length)
                        ? this.Yield(source[index++])
                        : false;
                },
                Functions.Blank);
        });
    };

    ArrayEnumerable.prototype.TakeExceptLast = function (count) {
        if (count == null) count = 1;
        return this.Take(this.source.length - count);
    };

    ArrayEnumerable.prototype.TakeFromLast = function (count) {
        return this.Skip(this.source.length - count);
    };

    ArrayEnumerable.prototype.Reverse = function () {
        var source = this.source;

        return new Enumerable(function () {
            var index;

            return new IEnumerator(
                function () {
                    index = source.length;
                },
                function () {
                    return (index > 0)
                        ? this.Yield(source[--index])
                        : false;
                },
                Functions.Blank)
        });
    };

    ArrayEnumerable.prototype.SequenceEqual = function (second, compareSelector) {
        if ((second instanceof ArrayEnumerable || second instanceof Array)
            && compareSelector == null
            && Enumerable.From(second).Count() != this.Count()) {
            return false;
        }

        return Enumerable.prototype.SequenceEqual.apply(this, arguments);
    };

    ArrayEnumerable.prototype.ToString = function (separator, selector) {
        if (selector != null || !(this.source instanceof Array)) {
            return Enumerable.prototype.ToString.apply(this, arguments);
        }

        if (separator == null) separator = "";
        return this.source.join(separator);
    };

    ArrayEnumerable.prototype.GetEnumerator = function () {
        var source = this.source;
        var index = 0;

        return new IEnumerator(
            Functions.Blank,
            function () {
                return (index < source.length)
                    ? this.Yield(source[index++])
                    : false;
            },
            Functions.Blank);
    };

    // Collections

    var Dictionary = (function () {
        // static utility methods
        var HasOwnProperty = function (target, key) {
            return Object.prototype.hasOwnProperty.call(target, key);
        }

        var ComputeHashCode = function (obj) {
            if (obj === null) return "null";
            if (obj === undefined) return "undefined";

            return (typeof obj.toString === Types.Function)
                ? obj.toString()
                : Object.prototype.toString.call(obj);
        }

        // LinkedList for Dictionary
        var HashEntry = function (key, value) {
            this.Key = key;
            this.Value = value;
            this.Prev = null;
            this.Next = null;
        }

        var EntryList = function () {
            this.First = null;
            this.Last = null;
        }
        EntryList.prototype =
        {
            AddLast: function (entry) {
                if (this.Last != null) {
                    this.Last.Next = entry;
                    entry.Prev = this.Last;
                    this.Last = entry;
                }
                else this.First = this.Last = entry;
            },

            Replace: function (entry, newEntry) {
                if (entry.Prev != null) {
                    entry.Prev.Next = newEntry;
                    newEntry.Prev = entry.Prev;
                }
                else this.First = newEntry;

                if (entry.Next != null) {
                    entry.Next.Prev = newEntry;
                    newEntry.Next = entry.Next;
                }
                else this.Last = newEntry;

            },

            Remove: function (entry) {
                if (entry.Prev != null) entry.Prev.Next = entry.Next;
                else this.First = entry.Next;

                if (entry.Next != null) entry.Next.Prev = entry.Prev;
                else this.Last = entry.Prev;
            }
        }

        // Overload:function()
        // Overload:function(compareSelector)
        var Dictionary = function (compareSelector) {
            this.count = 0;
            this.entryList = new EntryList();
            this.buckets = {}; // as Dictionary<string,List<object>>
            this.compareSelector = (compareSelector == null) ? Functions.Identity : compareSelector;
        }

        Dictionary.prototype =
        {
            Add: function (key, value) {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                var entry = new HashEntry(key, value);
                if (HasOwnProperty(this.buckets, hash)) {
                    var array = this.buckets[hash];
                    for (var i = 0; i < array.length; i++) {
                        if (this.compareSelector(array[i].Key) === compareKey) {
                            this.entryList.Replace(array[i], entry);
                            array[i] = entry;
                            return;
                        }
                    }
                    array.push(entry);
                }
                else {
                    this.buckets[hash] = [entry];
                }
                this.count++;
                this.entryList.AddLast(entry);
            },

            Get: function (key) {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                if (!HasOwnProperty(this.buckets, hash)) return undefined;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++) {
                    var entry = array[i];
                    if (this.compareSelector(entry.Key) === compareKey) return entry.Value;
                }
                return undefined;
            },

            Set: function (key, value) {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                if (HasOwnProperty(this.buckets, hash)) {
                    var array = this.buckets[hash];
                    for (var i = 0; i < array.length; i++) {
                        if (this.compareSelector(array[i].Key) === compareKey) {
                            var newEntry = new HashEntry(key, value);
                            this.entryList.Replace(array[i], newEntry);
                            array[i] = newEntry;
                            return true;
                        }
                    }
                }
                return false;
            },

            Contains: function (key) {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                if (!HasOwnProperty(this.buckets, hash)) return false;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++) {
                    if (this.compareSelector(array[i].Key) === compareKey) return true;
                }
                return false;
            },

            Clear: function () {
                this.count = 0;
                this.buckets = {};
                this.entryList = new EntryList();
            },

            Remove: function (key) {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                if (!HasOwnProperty(this.buckets, hash)) return;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++) {
                    if (this.compareSelector(array[i].Key) === compareKey) {
                        this.entryList.Remove(array[i]);
                        array.splice(i, 1);
                        if (array.length == 0) delete this.buckets[hash];
                        this.count--;
                        return;
                    }
                }
            },

            Count: function () {
                return this.count;
            },

            ToEnumerable: function () {
                var self = this;
                return new Enumerable(function () {
                    var currentEntry;

                    return new IEnumerator(
                        function () {
                            currentEntry = self.entryList.First
                        },
                        function () {
                            if (currentEntry != null) {
                                var result = { Key: currentEntry.Key, Value: currentEntry.Value };
                                currentEntry = currentEntry.Next;
                                return this.Yield(result);
                            }
                            return false;
                        },
                        Functions.Blank);
                });
            }
        }

        return Dictionary;
    })();

    // dictionary = Dictionary<TKey, TValue[]>
    var Lookup = function (dictionary) {
        this.Count = function () {
            return dictionary.Count();
        }

        this.Get = function (key) {
            return Enumerable.From(dictionary.Get(key));
        }

        this.Contains = function (key) {
            return dictionary.Contains(key);
        }

        this.ToEnumerable = function () {
            return dictionary.ToEnumerable().Select(function (kvp) {
                return new Grouping(kvp.Key, kvp.Value);
            });
        }
    };

    var Grouping = function (key, elements) {
        this.Key = function () {
            return key;
        }

        ArrayEnumerable.call(this, elements);
    };
    Grouping.prototype = new ArrayEnumerable();

    // out to global


    return Enumerable;
});

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { 

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

define("bootstrapTab", ["jquery"], function(){});



define('controllers/monitor',[ 'i18n!resources/nls/res','linqjs', 'bootstrapTab'], function (res,Enumerable) {

    var MonitorController = ['$scope', '$rootScope', 'FeedService', '$http', '$timeout', function ($scope, $rootScope, FeedService, $http, $timeout) {
        $rootScope.menuUrl = "partials/leftmenu/monitorMenu.html";
        $rootScope.title = "Monitor - " + res.title;
        $rootScope.show = true;
        /*    $("select, input").uniform();*/
        $scope.SiteType = {
            dataType: [
                {value: "Micro Bloging"} ,
                {value: "News Media"},
                {value: "Forum"},
                {value: "eCommerce"}

            ],

            type: "Micro Bloging"

        };

        function LoadData(type) {
            if (type === "Micro Bloging")
                $http.get('api/monitor/' + encodeURI("Micro Bloging")).success(function (d) {
                    $scope.monitorWeibo = d
                });

            if (type === "Forum")
                $http.get('api/monitor/' + encodeURI("Forum")).success(function (d) {
                    $scope.monitorForums = d
                });

            if (type === "News Media")
                $http.get('api/monitor/' + encodeURI("News Media")).success(function (d) {
                    $scope.monitorSearchs = d
                });
            if (type === "eCommerce")
                $http.get('api/monitor/' + encodeURI("eCommerce")).success(function (d) {
                    $scope.monitorShops = d
                });
            if (type === "customer")
                $http.get('api/monitor/' + encodeURI("customer")).success(function (d) {
                    $scope.monitorCustomer = d
                });
            if (type === undefined) {
                LoadData("Micro Bloging");
                LoadData("Forum");
                LoadData("News Media");
                LoadData("eCommerce");
                LoadData("customer");


            }
        };

        LoadData();
        FeedService.querySourceType().then(function (d) {
            // $scope.sourcetype = Enumerable.From(d).Distinct("$.FromType").Select("$.FromType").ToJSON();
            $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
        });
        $scope.saveMonitor = function () {
            var Data = {Name: $scope.website.name, Url: $scope.website.url, Comment: $scope.website.comment, status: 0, Type: "customer"};

            $http.post("api/monitor", Data).success(function (d) {
                LoadData();
                $scope.saveWarning = "Save website successfully";
                $timeout(function () {
                    $scope.saveWarning = "";
                }, 1000)
            })
        };

        $scope.changeStatus = function (obj) {
            $http.put('api/monitor/' + obj._id, {
                status: Math.abs(obj.status - 1)

            }).success(function (d) {
                    LoadData(obj.Type);
                });
        };
    }];

    return MonitorController;
});


define('controllers/alerts',[ 'i18n!resources/nls/res','linqjs'], function (res,Enumerable) {

    var AlertsController = ['$scope', '$rootScope', '$http', '$timeout', function ($scope, $rootScope, $http, $timeout) {
        $rootScope.menuUrl = "";
        $rootScope.title = "Alerts - " + res.title;
        $rootScope.menuUrl = "partials/leftmenu/alertMenu.html";

        $rootScope.show = true;
        function getTopics() {
            $http.get('api/topic').success(function (d) {

                $scope.Topics = Enumerable.From(d).Select("{type:$.Name,checked:false}").ToArray();
            });
        };

        getTopics();

        $http.get('api/alert').success(function (d) {

            $scope.alerts = d;
        });
        $scope.alert = {
            id: "",
            name: "",
            keywords: "兰蔻 打折",
            maito: "zhuang.miao@pactera.com",
            smsto: "13840816168",
            receiver: "miaozhuang.net",
            startTime: "2012-02-12",
            endTime: "2012-04-12"

        };
        $scope.editAlert = function (obj) {
            $scope.editting = true;
            $scope.alert.id = obj._id;
            $scope.editWindowTitle = "Edit Alert";
            $scope.alert.name = obj.Name;
            $scope.alert.keywords = obj.Keyword;
            $scope.alert.maito = obj.MailTo;
            $scope.alert.smsto = obj.SMSTo;
            $scope.alert.startTime = obj.AlertStartTime;
            $scope.alert.endTime = obj.AlertEndTime;
            for (var i in obj.Topics) {
                $.each($scope.Topics, function (i, item) {
                    item.checked = false;
                    if (item.type === obj.Topics[i]) {
                        item.checked = true;
                    }
                });

            }

        };
        $scope.addAlertClick = function () {
            console.log("OKOK")
            $scope.editWindowTitle = "Add New Alert";
        };
        $scope.addAlert = function () {

            $scope.saveTopicError = "";
            var sts = Enumerable.From($scope.Topics)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            if (sts.length === 0) {
                $scope.saveTopicError = "必须选择一个Topic";
                return false;
            }
            if ($scope.editting) {  //编辑alert
                $http.put('api/alert/' + $scope.alert.id, {
                    Name: $scope.alert.name,
                    IsRegex: false,
                    Keyword: $scope.alert.keywords,
                    MailTo: $scope.alert.maito,
                    SMSTo: $scope.alert.smsto,
                    Topics: sts,
                    Type: "",
                    OwnerId: "admin",
                    AlertStartTime: $scope.alert.startTime,
                    AlertEndTime: $scope.alert.endTime,
                    UpdateDate: Date.now()


                }).success(function (d) {
                        $http.get('api/alert').success(function (d) {
                            $scope.alerts = d;
                        });

                        $scope.saveTopicWarning = "Edit Alert Successfully"

                        $timeout(function () {
                            $scope.saveTopicWarning = ""
                        }, 1000);


                    });
            }
            else {    //保存新的alert
                $http.post('api/alert', {
                    Name: $scope.alert.name,
                    IsRegex: false,
                    Keyword: $scope.alert.keywords,
                    MailTo: $scope.alert.maito,
                    SMSTo: $scope.alert.smsto,
                    Topics: sts,
                    Type: "",
                    OwnerId: "admin",
                    AlertStartTime: $scope.alert.startTime,
                    AlertEndTime: $scope.alert.endTime,
                    CreateDate: Date.now(),
                    UpdateDate: Date.now()


                }).success(function (d) {
                        $http.get('api/alert').success(function (d) {
                            $scope.alerts = d;
                        });

                        $scope.saveTopicWarning = "Save Alert Successfully"

                        $timeout(function () {
                            $scope.saveTopicWarning = ""
                        }, 1000);


                    });
            }
        };
        $scope.editWindowTitle = "Add New Alert" ;

    }];

    return AlertsController;
});
define('utils/excel',[], function () {
    var tableToExcel = (function () {
        var uri = 'data:application/vnd.ms-excel;base64,'
            , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
            , base64 = function (s) {
                return window.btoa(unescape(encodeURIComponent(s)))
            }
            , format = function (s, c) {
                return s.replace(/{(\w+)}/g, function (m, p) {
                    return c[p];
                })
            }
        return function (table, name) {
            if (!table.nodeType) table = document.getElementById(table)
            var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
            window.location.href = uri + base64(format(template, ctx))
        };
    })();
    return tableToExcel;
});
/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { 

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);

define("bootstrapModal", ["jquery"], function(){});



define('controllers/analysis',[ 'i18n!resources/nls/res', '../utils/excel', 'linqjs', 'bootstrapModal' ], function (res, excel,Enumerable) {

    var AnalysisController = ['$scope', '$rootScope', '$http', 'FeedService' , function ($scope, $rootScope, $http, FeedService) {
        $rootScope.menuUrl = "";
        $rootScope.title = "Analysis - " + res.title;
        $rootScope.menuUrl = "partials/leftmenu/analysisMenu.html";
        // $scope.analysisDetailUrl="partials/charts/default-analysis.html" ;

        $rootScope.show = true;
        $scope.source = {
            brand: "兰蔻品牌"
        };
        $scope.sourceType = ['News', 'Forum', 'eCommerce', 'Weibo', 'sohu'];
        $scope.professionalSites = ['CSDN', 'IDC'];
        $http.get('api/topic').success(function (d) {

            $scope.Topics = Enumerable.From(d).Select("{type:$.Name,checked:false}").ToArray();
        });
        $scope.feeds = {
            startTime: new Date("2013-08-01"),
            endTime: new Date()
        };
        var getTopics = function (callback) {
            $http.get('api/topic').success(function (d) {
                $rootScope.Topics = d;
                /*  Enumerable.From(d);*/
                /* .Select("{name:$.Name}").ToArray();*/
                if (callback) callback();
            });
        };
        getTopics();
        $rootScope.topicSelected = function (topic) {
            $scope.keyword = topic.Keyword;
            $scope.feeds.startTime = topic.SearchCondition.StartDate;
            $scope.feeds.endTime = topic.SearchCondition.EndDate;
            $scope.source.keywordExpression = topic.Keyword;
            var sourceType = topic.SearchCondition.SourceType;

            /* console.log($scope.sourcetype);*/
            /*    for(var i in sourceType){
             for(var k in $scope.sourcetype) {
             $scope.sourcetype[k].checked=false;
             if($scope.sourcetype[k].type===sourceType[i]){
             $scope.sourcetype[k].checked=true;
             }

             }
             }*/

            for (var k in $scope.sourcetype) {
                $scope.sourcetype[k].checked = false;
                for (var i in sourceType) {
                    if ($scope.sourcetype[k].type === sourceType[i]) {
                        $scope.sourcetype[k].checked = true;
                    }

                }
            }

            $scope.sourcetype = $scope.sourcetype;
            /*    console.log($scope.sourcetype);
             console.log(topic);*/
        };
        var localsearchFeed = function () {
            //主业务
            var sts = Enumerable.From($scope.sourcetype)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            sts = sts.join('|')
            /*  console.log(sts);*/
            var searchData = {st: sts, starttime: $scope.feeds.startTime, endtime: $scope.feeds.endTime};
            /* console.log(searchData);*/
            $http.post('api/2DBarReprotPost', searchData).success(function (d) {
                new iChart.Bar2D({
                    render: 'canvasDiv7',
                    data: d,
                    width: 750,
                    height: 500,
                    border: false,
                    coordinate: {
                        scale: [
                            {
                                position: 'bottom',
                                listeners: {
                                    parseText: function (t, x, y) {
                                        return {text: t}
                                    }
                                },
                                label: {color: '#254d70', fontsize: 11, fontweight: 600}
                            }
                        ]
                    }
                }).draw();
                // callback(null, '1');
            }).error(function (data, status, headers, config) {

                    $scope.global.error = "内部数据错误";
                    $timeout(function () {
                        $scope.global.error = "";
                    }, 5000)
                    //callback(null, '1');
                });
            $http.post('api/TopicKeywordReportPost', searchData).success(function (d2) {
                new iChart.Bar2D({
                    render: 'canvasDiv8',
                    data: d2,
//                    title: '产品活动关键字',
                    width: 750,
                    height: 500,
                    border: false,
                    coordinate: {
                        scale: [
                            {
                                position: 'bottom',
                                listeners: {
                                    parseText: function (t, x, y) {
                                        return {text: t}
                                    }
                                },
                                label: {color: '#254d70', fontsize: 11, fontweight: 600}
                            }
                        ]
                    }
                }).draw();
                //callback(null, '2');
            }).error(function (data, status, headers, config) {

                    $scope.global.error = "内部数据错误";
                    $timeout(function () {
                        $scope.global.error = "";
                    }, 5000)
                    // callback(null, '2');
                });
            $http.post('/api/SearchSourcePost', searchData).success(function (a) {
                new iChart.Pie2D({
                    render: 'canvasDiv11',
                    data: a,
                    //title: '搜索来源',
                    width: 750,
                    height: 500,
                    border: false,
                    legend: {
                        enable: true
                    },
                    showpercent: true,
                    radius: 140,
                    sub_option: {
                        label: {
                            background_color: null,
                            sign: false,//设置禁用label的小图标
                            padding: '0 4',
                            border: {
                                enable: false,
                                color: '#666666'
                            },
                            fontsize: 12,
                            fontweight: 600,
                            color: '#4572a7'
                        },
                        border: {
                            width: 2,
                            color: '#ffffff'
                        }
                    }
                }).draw();
                //callback(null, '3');
            }).error(function (data, status, headers, config) {

                    $scope.global.error = "内部数据错误";
                    $timeout(function () {
                        $scope.global.error = "";
                    }, 5000)
                    //  callback(null, '3');
                });
            $http.post('/api/SentimentAnalysisColumnPost', searchData).success(function (d) {
                new iChart.ColumnStacked2D({
                    render: 'canvasDiv9',
                    data: d.data,
                    labels: d.labels,
                    sub_option: {
                        label: false
                    },
                    showpercent: true,
                    percent: true,//标志为百分比堆积图
                    width: 750,
                    height: 500,
                    border: false,
                    decimalsnum: 1,
                    tip: {
                        enable: true,
                        shadow: true
                    },
                    legend: {
                        enable: true,
                        background_color: null,
                        border: {
                            enable: false
                        },
                        offsetx: 19,//设置x轴偏移，满足位置需要
                        offsety: -20//设置y轴偏移，满足位置需要
                    },
                    coordinate: {
                        axis: {
                            color: '#c0d0e0',
                            width: 0
                        },
                        scale: [
                            {
                                position: 'left',
                                scale_enable: false,
                                start_scale: 0,
                                scale_space: 50,
                                label: {color: '#254d70', fontsize: 11, fontweight: 600}
                            }
                        ]
                    }
                }).draw();
                //callback(null, '5');
            }).error(function (data, status, headers, config) {

                    $scope.global.error = "内部数据错误";
                    $timeout(function () {
                        $scope.global.error = "";
                    }, 5000)
                    //callback(null, '5');
                });
            /*    $http.get('api/KeyWordCloud').success(function (d2) {
             var canvas = document.getElementById('canvasDiv12');
             var context = canvas.getContext('2d');
             context.fillStyle = "#ff0000";
             context.textBaseline = "top";
             context.font = " 50px  Helvetica,arial";
             for (var i in d2) {
             var v = d2[i];
             context.fillText(v.name, Math.round(Math.random() *150), Math.round(Math.random() *200));
             context.fillStyle = v.color;
             v.value= Math.log(v.value) / (Math.log(100)-Math.log(1)) * 20 + 1
             */
            /* if (v.value > 100)
             v.value = v.value / 3;
             else if (v.value < 14)
             v.value = v.value;
             else if (v.value > 30)
             v.value = v.value / 2;
             if(v.value>40)
             v.value=40;*/
            /*

             context.font = v.value + "px  Helvetica,arial";

             }
             // callback(null, '4');

             }).error(function (data, status, headers, config) {

             $scope.global.error = "内部数据错误";
             $timeout(function () {
             $scope.global.error = "";
             }, 5000)
             // callback(null, '4');
             });*/
            $http.post('api/SentimentAnalysisPost', searchData).success(function (d) {
                //搜索来源饼图
                new iChart.LineBasic2D({
                    render: 'canvasDiv10',
                    data: d.data,
                    labels: d.labels,
//                    title: '情感分析时间轴曲线图  ',
                    width: 750,
                    height: 500,
                    border: false,
                    tip: {
                        enable: true,
                        shadow: true
                    },
                    legend: {
                        enable: true,
                        sign: 'bar',
                        background_color: null,//设置透明背景
                        offsetx: 19,//设置x轴偏移，满足位置需要
                        offsety: -20,//设置y轴偏移，满足位置需要
                        border: true
                    },
                    sub_option: {
                        hollow_inside: false,//设置一个点的亮色在外环的效果
                        point_size: 10
                    }
                }).draw();
                //callback(null, '6');
            }).error(function (data, status, headers, config) {

                    $scope.global.error = "内部数据错误";
                    $timeout(function () {
                        $scope.global.error = "";
                    }, 5000)
                    //callback(null, '6');
                });
        };
        $scope.searchFeed = localsearchFeed;
        //localsearchFeed();

        $scope.tagcloud = "partials/charts/tagcloud1.html";
        FeedService.querySourceType().then(function (d) {
            $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
        });
        $scope.feeds = {
            startTime: new Date("2013-08-01"),
            endTime: new Date(),
            sourceTypeName: '',
            description: ''
        };
        $scope.dataRange = 7;
        $scope.$watch("dataRange", function (v1, v2) {
            if (v1) {
                $scope.feeds.startTime = new Date();
                $scope.feeds.startTime = moment(new Date()).add('days', -v1).calendar();
                /*   loadReport();*/
            }
        });
        $scope.$watch("analysisDetailUrl", function (v1, v2) {
            if (v1 === "partials/charts/default-analysis.html") {
                localsearchFeed();
            }
        })
        $scope.$watch('feeds.startTime+feeds.endTime', function (v1, v2) {
            if ($scope.feeds.startTime >= $scope.feeds.endTime) {
                $scope.warning = "开始不能大于结束";
                $scope.searchFeedForm.$invalid = true;
            }
            else {
                $scope.warning = ""
                $scope.searchFeedForm.$invalid = false;
            }
        });
        $http.get("/api/chart").success(function (d) {
            $scope.charts = d;
        });
    }];
    return AnalysisController;
});
/**
 * ichartjs Library v1.2 http://www.ichartjs.com/
 * 
 * @author wanghe
 * @Copyright 2013 wanghetommy@gmail.com Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
;
(function(window) {
	var ua = navigator.userAgent.toLowerCase(), mc = function(e) {
		return e.test(ua)
	}, ts = Object.prototype.toString, isOpera = mc(/opera/), isChrome = mc(/\bchrome\b/), isWebKit = mc(/webkit/), isSafari = !isChrome && mc(/safari/), isIE = !isOpera && mc(/msie/), supportCanvas = !!document.createElement('canvas').getContext, isGecko = !isWebKit
			&& mc(/gecko/), isMobile = mc(/ipod|ipad|iphone|android/gi), arithmetic = {
		Linear : function(t, b, c, d) {
			return c * t / d + b;
		},
		Cubic : {
			easeIn : function(t, b, c, d) {
				return c * (t /= d) * t * t + b;
			},
			easeOut : function(t, b, c, d) {
				return c * ((t = t / d - 1) * t * t + 1) + b;
			},
			easeInOut : function(t, b, c, d) {
				if ((t /= d / 2) < 1)
					return c / 2 * t * t * t + b;
				return c / 2 * ((t -= 2) * t * t + 2) + b;
			}
		}
	};
	var iChart_ = (function(window) {
		/**
		 * spirit from jquery
		 */
		var isReady = false, readyBound = false, readyList = [], DOMContentLoaded = (function() {
			if (document.addEventListener) {
				return function() {
					document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
					ready();
				};
			} else if (document.attachEvent) {
				return function() {
					if (document.readyState === "complete") {
						document.detachEvent("onreadystatechange", DOMContentLoaded);
						ready();
					}
				};
			}
		})(), doScrollCheck = function() {
			if (isReady) {
				return;
			}
			try {
				document.documentElement.doScroll("left");
			} catch (e) {
				setTimeout(doScrollCheck, 1);
				return;
			}
			ready();
		}, ready = function() {
			if (!isReady) {
				isReady = true;
				for ( var i = 0; i < readyList.length; i++) {
					readyList[i].call(document);
				}
				readyList = [];
			}
		}, bindReady = function() {
			if (readyBound)
				return;
			readyBound = true;
			if (document.readyState === "complete") {
				return setTimeout(ready, 1);
			}
			if (document.addEventListener) {
				document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
				window.addEventListener("load", ready, false);
			} else if (document.attachEvent) {
				document.attachEvent("onreadystatechange", DOMContentLoaded);
				window.attachEvent("onload", ready);
				var toplevel = false;

				try {
					toplevel = window.frameElement == null;
				} catch (e) {
				}

				if (document.documentElement.doScroll && toplevel) {
					doScrollCheck();
				}
			}
		}, bind = function(fn) {
			bindReady();
			if (isReady)
				fn.call(document, _);
			else
				readyList.push(function() {
					return fn.call(this);
				});
		}, _ = function(selector) {
			if (!selector || selector.nodeType) {
				return selector;
			}
			if (typeof selector === "string") {
				if (selector.indexOf("#") != -1) {
					selector = selector.substring(1);
				}
				return document.getElementById(selector);
			}
			if (typeof selector === "function") {
				bind(selector);
			}
		};

		_.apply = function(d, e) {
			if (d && e && typeof e == "object") {
				for ( var a in e) {
					if (typeof e[a] != 'undefined')
						d[a] = e[a]
				}
			}
			if (!e && d) {
				var clone = {};
				for ( var a in d) {
					clone[a] = d[a]
				}
				return clone;
			}
			return d
		};

		_.apply(_, {
			version : "1.0",
			email : 'taylor@ichartjs.com',
			isEmpty : function(C, e) {
				return C === null || C === undefined || ((_.isArray(C) && !C.length)) || (!e ? C === "" : false)
			},
			isArray : function(e) {
				return ts.apply(e) === "[object Array]"
			},
			isDate : function(e) {
				return ts.apply(e) === "[object Date]"
			},
			isObject : function(e) {
				return !!e && ts.apply(e) === "[object Object]"
			},
			isFunction : function(e) {
				return ts.apply(e) === "[object Function]"
			},
			isNumber : function(e) {
				return typeof e === "number" && isFinite(e)
			},
			isString : function(e) {
				return typeof e === "string"
			},
			isBoolean : function(e) {
				return typeof e === "boolean"
			},
			isFalse : function(e) {
				return typeof e === "boolean" && !e;
			},
			isElement : function(e) {
				return e ? !!e.tagName : false
			},
			isDefined : function(e) {
				return typeof e !== "undefined"
			}
		});

		/**
		 * only get the attr that target not exist
		 */
		_.applyIf = function(d, e) {
			if (d && _.isObject(e)) {
				for ( var a in e) {
					if (_.isDefined(e[a]) && !_.isDefined(d[a]))
						d[a] = e[a]
				}
			}
			if (!e && d) {
				return _.apply(d);
			}
			return d
		};
		/**
		 * there will apply a deep clone
		 */
		_.merge = function(d, e, f) {
			if (d && _.isObject(e)) {
				for ( var a in e) {
					if (_.isDefined(e[a])) {
						if (_.isObject(e[a])) {
							if (_.isObject(d[a])) {
								_.merge(d[a], e[a]);
							} else {
								d[a] = _.clone(e[a], true);
							}
						} else {
							d[a] = e[a];
						}
					}
				}
				if (_.isObject(f)) {
					return _.merge(d, f);
				}
			}
			return d;
		};
		/**
		 * clone attribute that given
		 */
		_.clone = function(a, e, deep) {
			var d = {};
			if (_.isArray(a)&& _.isObject(e)) {
				for ( var i = 0; i < a.length; i++) {
					if (deep && _.isObject(e[a[i]]))
						d[a[i]] = _.clone(e[a[i]],deep);
					else
						d[a[i]] = e[a[i]];
				}
			} else if (_.isObject(a)) {
				for ( var b in a) {
					// avoid recursion reference
					if (e && _.isObject(a[b])&& !(a[b].ICHARTJS_OBJECT))
						d[b] = _.clone(a[b], e);
					else
						d[b] = a[b];
				}
			}
			return d;
		};

		_.override = function(e, D) {
			if (e&&D) {
				var C = e.prototype;
				_.apply(C, D);
				if (_.isIE && D.hasOwnProperty("toString")) {
					C.toString = D.toString
				}
			}
		};

		/**
		 * spirit from ext2.0
		 */
		_.extend = function() {
			var C = function(E) {
				for ( var D in E) {
					this[D] = E[D];
				}
			};
			var e = Object.prototype.constructor;
			return function(G, O) {
				var J = function() {
					G.apply(this, arguments);
				}
				var E = function() {
				}, H, D = G.prototype;
				E.prototype = D;
				H = J.prototype = new E();
				H.constructor = J;
				J.superclass = D;
				if (D.constructor == e) {
					D.constructor = G;
				}
				J.override = function(F) {
					_.override(J, F);
				};
				H.superclass = H.supr = (function() {
					return D;
				});
				H.override = C;
				_.override(J, O);
				J.extend = function(F) {
					return _.extend(J, F)
				};
				J.plugin_ = {};
				
				J.plugin = function(M,F) {
					if (_.isString(M) && _.isFunction(F))
						J.plugin_[M] = F;
				};
				return J;
			}
		}();

		var sin = Math.sin, cos = Math.cos, atan = Math.atan, tan = Math.tan, acos = Math.acos, sqrt = Math.sqrt, abs = Math.abs, pi = Math.PI, pi2 = 2 * pi, ceil = Math.ceil, round = Math.round, floor = Math.floor, max = Math.max, min = Math.min, pF = parseFloat,
		Registry={},Repository={},
		factor = function(v, w) {
			if (v == 0)
				return v;
			var M = abs(v),f = 0.1;
			if(M>1){
				while(M>1){
					M = M/10;
					f = f*10;
				}
				return floor(v/f+w)*f;
			}else{
				f = 1;
				while(M<1){
					M = M*10;
					f = f *10;
				}
				return round(v*f+w)/f;
			}
		}, colors = {
			white : 'rgb(255,255,255)',
			green : 'rgb(0,128,0)',
			gray : 'rgb(80,80,80)',
			red : 'rgb(255,0,0)',
			blue : 'rgb(0,0,255)',
			yellow : 'rgb(255,255,0)',
			black : 'rgb(0,0,0)'
		}, hex2Rgb = function(hex) {
			hex = hex.replace(/#/g, "").replace(/^(\w)(\w)(\w)$/, "$1$1$2$2$3$3");
			return  (hex.length==7?'rgba(':'rgb(') + parseInt(hex.substring(0, 2), 16) + ',' + parseInt(hex.substring(2, 4), 16) + ',' + parseInt(hex.substring(4, 6), 16) + (hex.length==7?',0.'+hex.substring(6,7)+')':')');
		}, i2hex = function(N) {
			return ('0' + parseInt(N).toString(16)).slice(-2);
		}, rgb2Hex = function(rgb) {
			var m = rgb.match(/rgb\((\d+),(\d+),(\d+)\)/);
			return m ? ('#' + i2hex(m[1]) + i2hex(m[2]) + i2hex(m[3])).toUpperCase() : null;
		}, c2a = function(rgb) {
			var result = /rgb\((\w*),(\w*),(\w*)\)/.exec(rgb);
			if (result) {
				return new Array(result[1], result[2], result[3]);
			}
			result = /rgba\((\w*),(\w*),(\w*),(.*)\)/.exec(rgb);
			if (result) {
				return new Array(result[1], result[2], result[3], result[4]);
			}
			throw new Error("invalid colors value '" + rgb + "'");
		}, toHsv = function(r, g, b) {
			if (_.isArray(r)) {
				g = r[1];
				b = r[2];
				r = r[0];
			}
			r = r / 255;
			g = g / 255;
			b = b / 255;
			var m = max(max(r, g), b), mi = min(min(r, g), b), dv = m - mi;
			if (dv == 0) {
				return new Array(0, 0, m);
			}
			var h;
			if (r == m) {
				h = (g - b) / dv;
			} else if (g == m) {
				h = (b - r) / dv + 2;
			} else if (b == m) {
				h = (r - g) / dv + 4;
			}
			h *= 60;
			if (h < 0)
				h += 360;
			return new Array(h, dv / m, m);
		}, toRgb = function(color) {
			if (!color)
				return color;
			color = color.replace(/\s/g, '').toLowerCase();
			// Look for rgb(255,255,255)
			if (/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.exec(color)) {
				return color;
			}

			// Look for rgba(255,255,255,0.3)
			if (/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0(\.[0-9])?|1(\.0)?)\)$/.exec(color)) {
				return color;
			}

			// Look for #a0b1c2 or #fff
			if (/^#(([a-fA-F0-9]{6,7})|([a-fA-F0-9]{3}))$/.exec(color))
				return hex2Rgb(color);
			// Look a string for green
			if (colors[color])
				return colors[color];
			throw new Error("invalid colors value '" + color + "'");
		}, hsv2Rgb = function(h, s, v, a) {
			if (_.isArray(h)) {
				a = s;
				s = h[1];
				v = h[2];
				h = h[0];
			}
			var r, g, b,
			hi = floor(h / 60) % 6,
			f = h / 60 - hi,
			p = v * (1 - s),
			q = v * (1 - s * f),
			t = v * (1 - s * (1 - f));
			switch (hi) {
				case 0 :
					r = v;
					g = t;
					b = p;
					break;
				case 1 :
					r = q;
					g = v;
					b = p;
					break;
				case 2 :
					r = p;
					g = v;
					b = t;
					break;
				case 3 :
					r = p;
					g = q;
					b = v;
					break;
				case 4 :
					r = t;
					g = p;
					b = v;
					break;
				case 5 :
					r = v;
					g = p;
					b = q;
					break;
			}
			return 'rgb' + (a ? 'a' : '') + '(' + round(r * 255) + ',' + round(g * 255) + ',' + round(b * 255) + (a ? ',' + a + ')' : ')');
		},
		/**
		 * the increment of s(v) of hsv model
		 */ 
		s_inc = 0.05, v_inc = 0.14,
		inc = function(v, iv) {
			iv = iv || v_inc;
			if (v > 0.5) {
				return iv - (1 - v) / 10;
			} else if (v > 0.1) {
				return iv - 0.16 + v / 5;
			} else {
				return v > iv ? iv : v / 2;
			}
		},
		/**
		 * @method anole,make color darker or lighter
		 * @param {Boolean} d true:dark,false:light
		 * @param {Object} rgb:color
		 * @param {Number} iv (0-1)
		 * @param {Number} is (0-1)
		 */
		anole = function(d, rgb, iv, is) {
			if (!rgb)
				return rgb;
			rgb = c2a(toRgb(rgb));
			var hsv = toHsv(rgb);
			is = is!=0?(is || s_inc):is;
			hsv[1] -= is;
			if (d) {
				hsv[2] -= inc(hsv[2], iv);
				hsv[1] = _.upTo(hsv[1], 1);
				hsv[2] = _.lowTo(hsv[2], 0);
			} else {
				hsv[2] += inc((1 - hsv[2]), iv);
				hsv[1] = _.lowTo(hsv[1], 0);
				hsv[2] = _.upTo(hsv[2], 1);
			}
			return hsv2Rgb(hsv, rgb[3]);
		},
		topi = function(v){
			if(v==0)return 0;
			if(v%pi2==0)return pi2;
			return v%pi2;
		};

		_.apply(_, {
			getFont : function(w, s, f, u) {
				return w + " " + s + (u||"px")+" " + f;
			},
			/**
			 * obtain the Dom Document*/
			getDoc : function() {
				var doc = window.contentWindow ? window.contentWindow.document : window.contentDocument ? window.contentDocument : window.document;
				return doc;
			},
			/**
			 * define the interface,the subclass must implement it
			 */
			DefineAbstract : function(M, H) {
				if (!H[M])
					throw new Error("Cannot instantiate the type '" + H.type + "'.you must implements it with method '" + M + "'.");
			},
			getAA : function(tf) {
				if (tf == 'linear')
					return arithmetic.Linear;
				if (tf == 'easeInOut' || tf == 'easeIn' || tf == 'easeOut')
					return arithmetic.Cubic[tf];
				return arithmetic.Linear;
			},
			/**
			 * simple noConflict implements
			 */
			noConflict : function() {
				return iChart_;
			},
			plugin : function(t, m, f) {
				if (_.isFunction(t))
					t.plugin(m, f);
			},
			parsePadding : function(s, d) {
				s = s || 0;
				if (_.isNumber(s))
					return new Array(s, s, s, s);
				if (_.isArray(s))
					return s;
				d = d || 0;
				s = s.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, /\s/).replace(/\s/g, ',').split(",");
				if (s.length == 1) {
					s[0] = s[1] = s[2] = s[3] = pF(s[0]) || d;
				} else if (s.length == 2) {
					s[0] = s[2] = pF(s[0]) || d;
					s[1] = s[3] = pF(s[1]) || d;
				} else if (s.length == 3) {
					s[0] = pF(s[0]) || d;
					s[1] = s[3] = pF(s[1]) || d;
					s[2] = pF(s[2]) || d;
				} else {
					s[0] = pF(s[0]) || d;
					s[1] = pF(s[1]) || d;
					s[2] = pF(s[2]) || d;
					s[3] = pF(s[3]) || d;
				}
				return s;
			},
			/**
			 * the distance of two point
			 */
			distanceP2P : function(x1, y1, x2, y2) {
				return sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
			},
			atan2Radian : function(ox, oy, x, y) {
				if (ox == x) {
					if (y > oy)
						return pi / 2;
					return pi * 3 / 2;
				}
				if (oy == y) {
					if (x > ox)
						return 0;
					return pi;
				}
				
				var q = _.quadrant(ox, oy, x, y),
					r = atan(abs((oy - y) / (ox - x)));
				
				return q?(q == 3?pi2:pi)+(q == 2?r:-r):r;
			},
			angle2Radian : function(a) {
				return a * pi / 180;
			},
			radian2Angle : function(r) {
				return r * 180 / pi;
			},
			/**
			 * indicate angle in which quadrant,and it different from concept of Math.this will return 0 if it in first quadrant(other eg.0,1,2,3)
			 */
			quadrant : function(ox, oy, x, y) {
				if (ox < x) {
					if (oy < y) {
						return 0;
					} else {
						return 3;
					}
				} else {
					if (oy < y) {
						return 1;
					} else {
						return 2;
					}
				}
			},
			toPI2 : function(a) {
				while(a<0)
					a+=pi2;
				return a;
			},
			visible:function(s, e, f){
				if(s>=e)return [];
				var q1 = _.quadrantd(s),q2 = _.quadrantd(e);
				if((q1==2||q1==3)&&(q2==2||q2==3)&&((e-s)<pi))return[];
				s = _.toPI2(s);
				e = _.toPI2(e);
				if(e<=s){e+=pi2;}
				if(s > pi){s = pi2;}
				else if(e>pi2){
					return [{s:s,e:pi,f:f},{s:pi2,e:e,f:f}]
				}else if(e>pi){
					e = pi;
				}
				return {s:s,e:e,f:f};
			},
			quadrantd : function(a) {
				if(a==0)return 0;
				if(a % pi2==0)return 3;
				while(a<0)
					a+=pi2;
				return ceil(2 * (a % pi2) / pi)-1;
			},
			upTo : function(u, v) {
				return v > u ? u : v;
			},
			lowTo : function(l, v) {
				return v < l ? l : v;
			},
			between : function(l, u, v) {
				return l>u?_.between(u, l, v):(v > u ? u : v < l ? l : v);
			},
			inRange : function(l, u, v) {
				return u > v && l < v;
			},
			angleInRange : function(l, u, v) {
				v = (v -l);
				v = v<0?v+pi2:v;
				v = v %pi2;
				return (u -l) > v;
			},
			angleZInRange : function(l, u, v) {
				return u < l?(v > l || v < u):(u > v && l < v);
			},
			inRangeClosed : function(l, u, v) {
				return u >= v && l <= v;
			},
			inEllipse : function(x, y, a, b) {
				return (x * x / a / a + y * y / b / b) <= 1;
			},
			p2Point : function(x, y, a, C) {
				return {
					x : x + cos(a) * C,
					y : y + sin(a) * C
				}
			},
			toRgb:toRgb,
			toRgba:function(c,o){
				var rgb = c2a(toRgb(c));
				return  'rgba(' + rgb[0]+',' + rgb[1]+',' + rgb[2]+',' + o +')';
			},
			/**
			 * vector point
			 */
			vectorP2P : function(x, y, radian) {
				if (!radian) {
					y = _.angle2Radian(y);
					x = _.angle2Radian(x);
				}
				y = sin(y);
				return {
					x : y * sin(x),
					y : y * cos(x)
				}
			},
			uid : function(k) {
				return (k || 'ichartjs') + '_' + ceil(Math.random()*10000)+new Date().getTime().toString().substring(4);
			},
			register:function(c){
				if (_.isString(c)) {
					Repository[c.toLowerCase()] = c;
				}else{
					var id = c.get('id');
					if(!id||id==''){
						id = _.uid(c.type);
						while(Registry[id]){
							id = _.uid(c.type);
						}
						c.push('id',id);
					}
					if(Registry[id]){
						throw new Error("exist reduplicate id :"+id);
					}
					c.id = id;
					Registry[id] = c;
				}
			},
			create:function(C){
				if(!C.type||!Repository[C.type]){
					throw new Error("TypeNotFoundException["+C.type+"]");
				}
				return new _[Repository[C.type]](C);
			},
			get:function(id){
				return Registry[id];
			},
			isPercent:function(v){
				return _.isString(v)&&v.match(/(.*)%/);
			},
			parsePercent:function(v,f){
				if(_.isString(v)){
					v = v.match(/(.*)%/);
					if(v){
						v = f?floor(pF(v[1])*f/100):v[1]/100;
					}
				}
				return (!v ||v <= 0 || v > f)?f:v;
			},
			parseFloat : function(v, d) {
				if (!_.isNumber(v)) {
					v = pF(v);
					if (!_.isNumber(v))
						throw new Error("[" + d +"]=" +v + "is not a valid number.");
				}
				return v;
			},
			ceil : function(max) {
				return factor(max,1);
			},
			floor : function(max, f) {
				return factor(max,-1);
			},
			_2D : '2d',
			_3D : '3d',
			light : function(rgb, iv, is) {
				return anole(false, rgb, iv, is);
			},
			dark : function(rgb, iv, is) {
				return anole(true, rgb, iv, is);
			},
			fixPixel : function(v) {
				return _.isNumber(v) ? v : pF(v.replace('px', "")) || 0;
			},
			toPixel : function(v) {
				return _.isNumber(v) ? v + 'px' : _.fixPixel(v) + 'px';
			},
			emptyFn : function() {
				return true;
			},
			supportCanvas : supportCanvas,
			isOpera : isOpera,
			isWebKit : isWebKit,
			isChrome : isChrome,
			isSafari : isSafari,
			isIE : isIE,
			isGecko : isGecko,
			isMobile : isMobile,
			touch: "ontouchend" in document,
			FRAME : isMobile ? 30 : 60
		});
		
		_.Assert = {
			isTrue : function(v, cause) {
				if (v !== true)
					throw new Error(cause);
			}
		};
		/**
		 * shim layer with setTimeout fallback
		 */
		_.requestAnimFrame = (function() {
			var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
			return function(f){raf(f)}
		})();
		
		
		/**
		 * defined Event
		 */
		_.Event = {
			addEvent : function(ele, type, fn, useCapture) {
				if (ele.addEventListener)
					ele.addEventListener(type, fn, useCapture);
				else if (ele.attachEvent)
					ele.attachEvent('on' + type, fn);
				else
					ele['on' + type] = fn;
			},
			fix : function(e) {
				/**
				 * Fix event for mise
				 */
				if (typeof (e) == 'undefined') {
					e = window.event;
				}
				var E = {
						target:e.target,
						pageX : e.pageX,
						pageY : e.pageY,
						offsetX : e.offsetX,
						offsetY : e.offsetY,
						stopPropagation:false,
						//time: new Date().getTime(),
						event:e
					};
				/**
				 * This is mainly for FF which doesn't provide offsetX
				 */
				if (typeof (e.offsetX) == 'undefined') {
					/**
					 * Fix target property, if necessary
					 */
					if (!e.target) {
						E.target = e.srcElement || document;
					}
					
					if(e.targetTouches){
						E.pageX = e.targetTouches[0].pageX;
						E.pageY = e.targetTouches[0].pageY;
					}
					/**
					 * Calculate pageX/Y if missing and clientX/Y available
					 */
					if (E.pageX == null && e.clientX != null) {
						var doc = document.documentElement, body = document.body;
						E.pageX = e.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						E.pageY = e.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}
					
					/**
					 * Browser not with offsetX and offsetY
					 */
					var x = 0, y = 0, obj = e.target;
					while (obj != document.body && obj) {
						x += obj.offsetLeft-(obj.scrollLeft||0);
						y += obj.offsetTop;
						obj = obj.offsetParent;
					}
					E.offsetX = E.pageX - x;
					E.offsetY = E.pageY - y;
				}
				
				E.x = E.offsetX;
				E.y = E.offsetY;
				/**
				 * Any browser that doesn't implement stopPropagation() (MSIE)
				 */
				if (!e.stopPropagation) {
					e.stopPropagation = function() {
						window.event.cancelBubble = true;
					}
				}
				
				return E;
		}
		};
		return _;

	})(window);

	/**
	 * Add useful method,need to optimized
	 */
	Array.prototype.each = function(f, s) {
		var j = this.length, r;
		for ( var i = 0; i < j; i++) {
			r = s ? f.call(s, this[i], i) : f(this[i], i);
			if (typeof r === "boolean" && !r) {
				break
			}
		};
		return this;
	};

	Array.prototype.eachAll = function(f, s) {
		this.each(function(d, i) {
			if (iChart_.isArray(d)) {
				return d.eachAll(f, s);
			} else {
				return s ? f.call(s, d, i) : f(d, i);
			}
		}, s);
	};
	
	Array.prototype.sor = function(f) {
		var _=this,L = _.length-1,T; 
		for(var i = 0; i < L; i++){
			for (var j = L; j > i;j--) {
				if (f ? !f(_[j], _[j - 1]) : (_[j] < _[j - 1])) {
					T = _[j];
					_[j] = _[j - 1];
					_[j - 1] = T;
				} 
			} 
		} 
	};
	
	
	window.iChart = iChart_;
	if (!window.$) {
		window.$ = window.iChart;
	}
})(window);

;(function($){
/**
 * @overview This is base class of all element.All must extend this so that has ability for configuration and event
 * this class include some base attribute
 * @component#$.Element
 * @extend#Object
 */
$.Element = function(config) {
	var _ = this._();
	/**
	 * indicate the element's type
	 */
	_.type = 'element';
	
	_.ICHARTJS_OBJECT = true;

	/**
	 * define abstract method
	 */
	$.DefineAbstract('configure', _);
	$.DefineAbstract('afterConfiguration', _);

	/**
	 * All of the configuration will in this property
	 */
	_.options = {};

	_.set({
		/**
		 * @cfg {Object} Specifies the border for this element.
		 * Available property are:
		 * @Option enable {boolean} If enable the border
		 * @Option color {String} the border's color.(default to '#BCBCBC')
		 * @Option style {String} the border's style.(default to 'solid')
		 * @Option width {Number/String} the border's width.If given array,the option radius will be 0.(default to 1)
		 * @Option radius {Number/String} the border's radius.(default to 0)
		 */
		border : {
			enable : false,
			color : '#BCBCBC',
			style : 'solid',
			width : 1,
			radius : 0
		},
		/**
		 * @cfg {Boolean} Specifies whether the element should be show a shadow.In general there will be get a high render speed when apply false.(default to false)
		 */
		shadow : false,
		/**
		 * @cfg {String} Specifies the color of your shadow is.(default to '#666666')
		 */
		shadow_color : '#666666',
		/**
		 * @cfg {Number} Specifies How blur you want your shadow to be.(default to 4)
		 */
		shadow_blur : 4,
		/**
		 * @cfg {Number} Specifies Horizontal distance (x-axis) between the shadow and the shape in pixel.(default to 0)
		 */
		shadow_offsetx : 0,
		/**
		 * @cfg {Number} Specifies Vertical distance (y-axis) between the shadow and the shape in pixel.(default to 0)
		 */
		shadow_offsety : 0
	});
	
	/**
	 * variable for short
	 */
	_.W = 'width';
	_.H = 'height';
	_.O = 'top';
	_.B = 'bottom';
	_.L = 'left';
	_.R = 'right';
	_.C = 'center';
	_.X = 'originx';
	_.Y = 'originy';
	/**
	 * the running variable cache
	 */
	_.variable = {};
	
	/**
	 * the root of all events
	 */
	_.events = {
		'mouseup':[],
		'touchstart':[],
		'touchmove':[],
		'touchend':[],
		'mousedown':[],
		'dblclick':[]
	};
	
	_.registerEvent(
			/**
			 * @event Fires after the element initializing is finished this is for test
			 * @paramter $.Painter#this
			 */
			'initialize');
			
	_.initialization = false;
	
	/**
	 * inititalize configure
	 */
	_.configure.apply(_, Array.prototype.slice.call(arguments, 1));
	
	/**
	 * clone the original config
	 */
	_.default_ = $.clone(_.options,true);
	
	/**
	 * megre customize config
	 */
	_.set(config);
	
	_.afterConfiguration(_);
}

$.Element.prototype = {
	_:function(){return this},	
	afterConfiguration : function(_) {
		/**
		 * register customize event
		 */
		if ($.isObject(_.get('listeners'))) {
			for ( var e in _.get('listeners')) {
				_.on(e, _.get('listeners')[e]);
			}
		}
		_.initialize();
		
		/**
		 * fire the initialize event,this probable use to unit test
		 */
		_.fireEvent(_, 'initialize', [_]);
	},
	registerEvent : function() {
		for ( var i = 0; i < arguments.length; i++) {
			this.events[arguments[i]] = [];
		}
	},
	fireString : function(socpe, name, args, s) {
		var t = this.fireEvent(socpe, name, args);
		return $.isString(t) ? t : (t!==true&&$.isDefined(t)?t.toString():s);
	},
	fireEvent : function(socpe, name, args) {
		var L = this.events[name].length;
		if (L == 1)
			return this.events[name][0].apply(socpe, args);
		var r = true;
		for ( var i = 0; i < L; i++) {
			if(!this.events[name][i].apply(socpe, args))
				r  = false;
		}
		return r;
	},
	on : function(n, fn) {
		if($.isString(n)&&$.isArray(this.events[n])){
			this.events[n].push(fn);
		}else if($.isArray(n)){
			n.each(function(c){this.on(c, fn)},this);
		}
		return this;
	},
	getPlugin:function(n){
		return this.constructor.plugin_[n];
	},
	set : function(c) {
		if ($.isObject(c))
			$.merge(this.options, c);
	},
	pushIf : function(n, v) {
		if (!$.isDefined(this.get(n))||this.get(n)==null) {
			return this.push(n, v);
		}
		return this.get(n);
	},
	/**
	 * average write speed about 0.013ms
	 */
	push : function(n, v) {
		var A = n.split("."),L=A.length - 1,V = this.options;
		for (var i = 0; i < L; i++) {
			if (!V[A[i]])
				V[A[i]] = {};
			V = V[A[i]];
		}
		V[A[L]] = v;
		return v;
	},
	/**
	 * average read speed about 0.005ms
	 */
	get : function(n) {
		var A = n.split("."), V = this.options[A[0]];
		for (var i = 1; i < A.length; i++) {
			if (!V)
				return null;
			V = V[A[i]];
		}
		return V;
	}
}
/**
 * @end
 */


/**
 * @overview The interface this class defined d,so the sub class has must capability to draw and aware of event. this class is a abstract class,so you should not try to initialize it.
 * @component#$.Painter
 * @extend#$.Element
 */
$.Painter = $.extend($.Element, {

	configure : function() {
		/**
		 * indicate the element's type
		 */
		this.type = 'painter';

		this.dimension = $._2D;

		/**
		 * define abstract method
		 */
		$.DefineAbstract('commonDraw', this);
		$.DefineAbstract('initialize', this);

		this.set({
			/**
			 * @cfg {String} Specifies the default strokeStyle of the canvas's context in this element.(defaults to 'gray')
			 */
			strokeStyle : 'gray',
			/**
			 * @cfg {Number} Specifies the padding for this element in pixel,the same rule as css padding.(defaults to 10)
			 */
			padding : 10,
			/**
			 * @cfg {String} Specifies the font's color for this element.(defaults to 'black')
			 */
			color : 'black',
			/**
			 * @cfg {Number} Specifies Horizontal offset(x-axis) in pixel.(default to 0)
			 */
			offsetx : 0,
			/**
			 * @cfg {Number}Specifies Vertical distance (y-axis) in pixel.(default to 0)
			 */
			offsety : 0,
			/**
			 * @cfg {String} Specifies the backgroundColor for this element.(defaults to 'FDFDFD')
			 */
			background_color : '#FEFEFE',
			/**
			 * @cfg {float} Specifies the factor make color dark or light for this element,relative to background-color,the bigger the value you set,the larger the color changed.scope{0.01 - 0.5}.(defaults to '0.15')
			 */
			color_factor : 0.15,
			/**
			 * @inner {String} ('2d','3d')
			 */
			style : '',
			/**
			 * @cfg {Object} Here,specify as true by default
			 */
			border : {
				enable : true
			},
			/**
			 * @cfg {Boolean} True to apply the gradient.(default to false)
			 */
			gradient : false,
			/**
			 * @cfg {String} Specifies the gradient mode of background.(defaults to 'LinearGradientUpDown')
			 * @Option 'LinearGradientUpDown'
			 * @Option 'LinearGradientDownUp'
			 * @Option 'LinearGradientLeftRight'
			 * @Option 'LinearGradientRightLeft'
			 * @Option 'RadialGradientOutIn'
			 * @Option 'RadialGradientInOut'
			 */
			gradient_mode:'LinearGradientUpDown',
			/**
			 * @cfg {Number}Specifies the z-index.(default to 0)
			 */
			z_index : 0,
			/**
			 * @cfg {Object} A config object containing one or more event handlers.(default to null)
			 */
			listeners : null,
			/**
			 * @cfg {Number} If you want to totally override the positioning of the chart,you should setting it.(default to null)
			 */
			originx : null,
			/**
			 * @cfg {Number} If you want to totally override the positioning of the chart,you should setting it.(default to null)
			 */
			originy : null
		});

		this.variable.event = {
			mouseover : false
		};
		
		this.variable.animation = {}
		/**
		 * register the common event
		 */
		this.registerEvent(
		/**
		 * @event Fires when this element is clicked
		 * @paramter $.Painter#this
		 * @paramter EventObject#e The click event object
		 * @paramter Object#param The additional parameter
		 */
		'click',
		/**
		 * @event Fires when the mouse move on the element
		 * @paramter $.Painter#this
		 * @paramter EventObject#e The mousemove event object
		 */
		'mousemove',
		/**
		 * @event Fires when the mouse hovers over the element
		 * @paramter $.Painter#this
		 * @paramter EventObject#e The mouseover event object
		 */
		'mouseover',
		/**
		 * @event Fires when the mouse exits the element
		 * @paramter $.Painter#this
		 * @paramter EventObject#e The mouseout event object
		 */
		'mouseout',
		/**
		 * @event Fires before the element drawing.Return false from an event handler to stop the draw.
		 * @paramter $.Painter#this
		 */
		'beforedraw',
		/**
		 * @event Fires after the element drawing when calling the draw method.
		 * @paramter $.Painter#this
		 */
		'draw');
		
		
	},
	is3D : function() {
		return this.dimension == $._3D;
	},
	applyGradient:function(x,y,w,h){
		var _ = this._();
		if(_.get('gradient')&&_.get('f_color')){
			_.push('f_color', _.T.gradient(x||_.x||0,y||_.y||0,w||_.get(_.W),h||_.get(_.H),[_.get('dark_color'), _.get('light_color')],_.get('gradient_mode')));
			_.push('light_color', _.T.gradient(x||_.x||0,y||_.y||0,w||_.get(_.W),h||_.get(_.H),[_.get('background_color'), _.get('light_color')],_.get('gradient_mode')));
			_.push('f_color_',_.get('f_color'));
		}
	},
	/**
	 * @method The commnd fire to draw the chart use configuration,
	 * this is a abstract method.Currently known,both <link>$.Chart</link> and <link>$.Component</link> implement this method.
	 * @return void
	 */
	draw : function(e,comb) {
		if(comb){
			/**
			 * fire the root Refresh
			 */
			this.root.draw(e);
		}else{
			/**
			 * fire the beforedraw event
			 */
			if (!this.fireEvent(this, 'beforedraw', [this,e])) {
				return this;
			}
			/**
			 * execute the commonDraw() that the subClass implement
			 */
			this.commonDraw(this,e);
	
			/**
			 * fire the draw event
			 */
			this.fireEvent(this, 'draw', [this,e]);
		}
	},
	inject : function(c) {
		if (c) {
			this.root = c;
			this.target = this.T = c.T;
		}
	},
	doConfig : function() {
		
		var _ = this._(), p = $.parsePadding(_.get('padding')), b = _.get('border.enable'), b = b ? $.parsePadding(_.get('border.width')) : [0, 0, 0, 0], bg = $.toRgb(_.get('background_color')), f = _.get('color_factor'),g=_.get('gradient')?0:null;
		
		_.set({
			border_top:b[0],
			border_right:b[1],
			border_bottom:b[2],
			border_left:b[3],
			hborder:b[1] + b[3],
			vborder:b[0] + b[2],
			padding_top:p[0] + b[0],
			padding_right:p[1] + b[1],
			padding_bottom:p[2] + b[2],
			padding_left:p[3] + b[3],
			hpadding:p[1] + p[3] + b[1] + b[3],
			vpadding:p[0] + p[2] + b[0] + b[2]
		});	
		
		if (_.get('shadow')===true) {
			_.push('shadow', {
				color : _.get('shadow_color'),
				blur : _.get('shadow_blur'),
				offsetx : _.get('shadow_offsetx'),
				offsety : _.get('shadow_offsety')
			});
		}
		
		_.push('f_color', bg);
		_.push('f_color_', bg);
		_.push("light_color", $.light(bg, f,g));
		_.push("dark_color", $.dark(bg, f*0.8,g));
		_.push("light_color2", $.light(bg, f * 2,g));
		
		if(_.is3D()&&!_.get('xAngle_')){
			var P = $.vectorP2P(_.get('xAngle'),_.get('yAngle'));
			_.push('xAngle_',P.x);
			_.push('yAngle_',P.y);
		}
	}
});
/**
 * @end
 */

/**
 * 
 * @overview the base class use for Html componment
 * @component#$.Html
 * @extend#$.Element
 */
$.Html = $.extend($.Element,{
	configure : function(T) {
		
		/**
		 * indicate the element's type
		 */
		this.type = 'html';
		
		this.T = T;
		
		/**
		 * define abstract method
		 */
		$.DefineAbstract('beforeshow',this);
		
		this.set({
			 animation:true,
			 /**
			  * @cfg If true the component will has defalut action when event fired.(default to true)
			  */
			 default_action:true,
			 /**
			  * @inner Specifies the width of this element in pixels.
			  */
			 width:0,
			 /**
			  * @inner Specifies the height of this element in pixels.
			  */
			 height:0,
			 /**
			 * @cfg {String} Custom style specification to be applied to this element.(default to '')
			 * like this:'padding:10px;font-size:12px'
			 */
			 style:'',
			 /**
			  * @inner The z-index of this element.(default to 999)
			  */
			 index:999,
			 /**
			  * @inner The top of this element.(default to 0)
			  */
			 offset_top:0,
			 /**
			  * @inner The left of this element.(default to 0)
			  */
			 offset_left:0
		});
		
		
		this.transitions = "";
	},
	initialize:function(){
		var _ = this._();
		_.wrap = _.get('wrap');
		_.dom = document.createElement("div");
		
		if(_.get('shadow')){
			_.css('boxShadow',_.get('shadow_offsetx')+'px '+_.get('shadow_offsety')+'px '+_.get('shadow_blur')+'px '+_.get('shadow_color'));
		}
		if(_.get('border.enable')){
			_.css('border',_.get('border.width')+"px "+_.get('border.style')+" "+_.get('border.color'));
			_.css('borderRadius',_.get('border.radius')+"px");
		}
		
		_.css('position','absolute');
		_.css('zIndex',_.get('index'));
		
		_.applyStyle();
		
		_.wrap.appendChild(_.dom);
		
		_.style = _.dom.style;
		
		if(_.get('default_action')){
			_.doAction(_);
		}
	},
	width:function(){
		return this.dom.offsetWidth;
	},
	height:function(){
		return this.dom.offsetHeight;
	},
	onTransitionEnd:function(fn,useCapture){
		var type = 'transitionend';
		if($.isWebKit){
			type = 'webkitTransitionEnd';
		}else if($.isOpera){
			type = 'oTransitionEnd';
		}
		$.Event.addEvent(this.dom,type,fn,useCapture);
	},
	destroy:function(){
		this.wrap.removeChild(this.dom);
		this.dom = null;
	},
	transition:function(v){
		this.transitions = this.transitions==''?v:this.transitions+','+v;
		if($.isWebKit){
			this.css('WebkitTransition',this.transitions);
		}else if($.isGecko){
			this.css('MozTransition',this.transitions);
		}else if($.isOpera){
			this.css('OTransition',this.transitions);
		}else{
			this.css('transition',this.transitions);
		}
	},
	beforeshow:function(e,m,_){
		_.follow(e,m,_);
	},
	show:function(e,m){
		this.beforeshow(e,m,this);
		this.css('visibility','visible');
		if(this.get('animation')){
			this.css('opacity',1);
		}
	},
	hidden:function(e){
		this.css('visibility','hidden');
	},
	getDom:function(){
		return this.dom;
	},
	css:function(k,v){
		if($.isString(k))if($.isDefined(v))this.dom.style[k]=v;else return this.dom.style[k];
	},
	applyStyle:function(){
		var styles  = this.get('style').split(";"),style;
		for(var i = 0;i< styles.length;i++){
			style = styles[i].split(":");
			if(style.length>1)this.css(style[0],style[1]);
		}
	}
});
/**
 * @end
 */
/**
 * @overview this a abstract component of all concrete chart
 * @component#$.Component
 * @extend#$.Painter
 */
$.Component = $.extend($.Painter, {
	configure : function(c) {
		/**
		 * invoked the super class's configuration
		 */
		$.Component.superclass.configure.apply(this, arguments);

		/**
		 * indicate the element's type
		 */
		this.type = 'component';

		this.set({
			/**
			 * @cfg {Number} Specifies the font size of this element in pixels.(default to 12)
			 */
			fontsize : 12,
			/**
			 * @cfg {String} Specifies the font of this element.(default to 'Verdana')
			 */
			font : 'Verdana',
			/**
			 * @cfg {String} Specifies the font weight of this element.(default to 'normal')
			 */
			fontweight : 'normal',
			/**
			 * @cfg {String} Specifies the unit of font-size.(default to 'px')
			 */
			fontunit:'px',
			/**
			 * @inner {Boolean} Specifies the config of Tip.For details see <link>$.Tip</link> Note:this has a extra property named 'enable',indicate whether tip available(default to false)
			 */
			tip : {
				enable : false,
				border : {
					width : 2
				}
			}
		});

		/**
		 * If this element can split or contain others.(default to false)
		 */
		this.atomic = false;
		/**
		 * If method draw be proxy.(default to false)
		 */
		this.proxy = false;
		this.ICHARTJS_CHART = false;
		this.inject(c);
	},
	initialize : function() {
		$.DefineAbstract('isEventValid', this);
		$.DefineAbstract('doDraw', this);
		
		this.doConfig();
		this.initialization = true;
	},
	/**
	 * @method return the component's dimension,return hold following property
	 * @property x:the left-top coordinate-x
	 * @property y:the left-top coordinate-y
	 * @property width:the width of component,note:available there applies box model
	 * @property height:the height of component,note:available there applies box model
	 * @return object
	 */
	getDimension : function() {
		return {
			x : this.x,
			y : this.y,
			width : this.get("width"),
			height : this.get("height")
		}
	},
	destroy:function(){
		if(this.tip){
			this.tip.destroy();
		}
	},
	doConfig : function() {
		$.Component.superclass.doConfig.call(this);
		var _ = this._(),w = _.get(_.W),W = _.get('maxwidth'),x = _.get(_.X);
		if(w&&W){
			w = _.push(_.W,$.parsePercent(w,W));
			if(w>W){
				w = _.push('width',W);
			}
			if(W>w){
				var C = _.get('align')||_.C;
				if(C == _.C){
					x +=(W-w)/2;
				}else if(C == _.R){
					x += (W-w);
				}
			}
		}
		
		_.x = _.push(_.X, x + _.get('offsetx'));
		_.y = _.push(_.Y, _.get(_.Y) + _.get('offsety'));
		
		_.push('fontStyle', $.getFont(_.get('fontweight'), _.get('fontsize'), _.get('font'),_.get('fontunit')));
		
		/**
		 * if have evaluate it
		 */
		_.data = _.get('data');
		
		if (_.get('tip.enable')) {
			/**
			 * make tip's border in accord with sector
			 */
			_.pushIf('tip.border.color', _.get('f_color'));

			if (!$.isFunction(_.get('tip.invokeOffset')))
				/**
				 * indicate the tip must calculate position
				 */
				_.push('tip.invokeOffset', _.tipInvoke());
		}

	},
	isMouseOver : function(e) {
		return this.isEventValid(e,this);
	},
	redraw : function(e) {
		this.root.draw(e,this.root.Combination);
	},
	last:$.emptyFn,
	commonDraw : function(_) {
		/**
		 * execute the doDraw() that the subClass implement
		 */
		if (!_.proxy)
			_.doDraw.call(_,_);

	}
});
/**
 * @end
 */

 	/**
	 * @overview the tip component.
	 * @component#$.Tip
	 * @extend#$.Element
	 */
	$.Tip = $.extend($.Html,{
		configure:function(){
			
			/**
			 * invoked the super class's configuration
			 */
			$.Tip.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the legend's type
			 */
			this.type = 'tip';
			
			this.set({
				name:'',
				index:0,
				value:'',
				/**
				 * @cfg {String} Specifies the text want to disply.(default to '')
				 */
				 text:'',
				 /**
					 * @cfg {String} Specifies the tip's type.(default to 'follow') Available value are:
					 * @Option follow
					 * @Option fixed
					 */
				 showType:'follow',
				 /**
					 * @cfg {Function} Specifies Function to calculate the position.(default to null)
					 */
				 invokeOffset:null,
				 /**
					 * @cfg {Number} Specifies the duration when fadeIn/fadeOut in millisecond.(default to 300)
					 */
				 fade_duration:300,
				 /**
					 * @cfg {Number} Specifies the duration when move in millisecond.(default to 100)
					 */
				 move_duration:100,
				 /**
				  * ease
				  * linear
				  * ease-in
				  * ease-out
				  * ease-in-out
				  */
				 timing_function:'ease-out',
				 /**
					 * @cfg {Boolean} if calculate the position every time (default to false)
					 */
				 invokeOffsetDynamic:false,
				 /**
					 * @cfg {String} Specifies the css of this Dom.
					 */
				 style:'textAlign:left;padding:4px 5px;cursor:pointer;backgroundColor:rgba(239,239,239,.85);fontSize:12px;color:black;',
				 /**
					 * @cfg {Object} Override the default as enable = true,radius = 5
					 */
				 border:{
					enable:true,
					radius : 5
				 },
				 delay:200
			});
			this.registerEvent(
					/**
					 * @event Fires when parse this tip's text.Return value will override existing.
					 * @paramter <link>$.Tip</link>#tip
					 * @paramter string#name the current tip's name
					 * @paramter string#value the current tip's value
					 * @paramter string#text the current tip's text
					 * @paramter int#index index of data,if there was a line
					 */
					'parseText');
		},
		position:function(t,l,_){
			_.style.top =  (t<0?0:t)+"px";
			_.style.left = (l<0?0:l)+"px";
		},
		follow:function(e,m,_){
			//_.style.width = "";
			if(_.get('invokeOffsetDynamic')){
				if(m.hit){
					if($.isString(m.text)||$.isNumber(m.text)){
						_.text(m.name,m.value,m.text,m.i,_);
					}
					var o = _.get('invokeOffset')(_.width(),_.height(),m);
					_.position(o.top,o.left,_);
				}
			}else{
				if(_.get('showType')!='follow'&&$.isFunction(_.get('invokeOffset'))){
					var o = _.get('invokeOffset')(_.width(),_.height(),m);
					_.position(o.top,o.left,_);
				}else{
					_.position((e.y-_.height()*1.1-2),e.x+2,_);
				}
			}
		},
		text:function(n,v,t,i,_){
			_.dom.innerHTML = _.fireString(_, 'parseText', [_,n,v,t,i],t);
		},
		hidden:function(e){
			if(this.get('animation')){
				this.css('opacity',0);
			}else{
				this.css('visibility','hidden');
			}
		},
		doAction:function(_){
			_.T.on('mouseover',function(c,e,m){
				_.show(e,m);	
			}).on('mouseout',function(c,e,m){
				_.hidden(e);
			});
			
			if(_.get('showType')=='follow'){
				_.T.on('mousemove',function(c,e,m){
					if(_.T.variable.event.mouseover){
						setTimeout(function(){
							if(_.T.variable.event.mouseover)
								_.follow(e,m,_);
						},_.get('delay'));
					}
				});
			}
		},
		initialize:function(){
			$.Tip.superclass.initialize.call(this);
			
			var _ = this._();
			
			_.text(_.get('name'),_.get('value'),_.get('text'),_.get('index'),_);
			_.hidden();
			
			if(_.get('animation')){
				var m =  _.get('move_duration')/1000+'s '+_.get('timing_function')+' 0s';
				_.transition('opacity '+_.get('fade_duration')/1000+'s '+_.get('timing_function')+' 0s');
				_.transition('top '+m);
				_.transition('left '+m);
				_.onTransitionEnd(function(e){
					if(_.css('opacity')==0){
						_.css('visibility','hidden');
					}
				},false);
			}
			
		}
});
/**
 * @end
 */


	/**
	 * @overview this element simulate the crosshair on the coordinate.actually this composed of some div of html. 
	 * @component#$.CrossHair
	 * @extend#$.Html
	 */
	$.CrossHair = $.extend($.Html,{
		configure:function(){
		
			/**
			 * invoked the super class's configuration
			 */
			$.CrossHair.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'crosshair';
			
			this.set({
				/**
				 * @inner {Number} Specifies the position top,normally this will given by chart.(default to 0)
				 */
				 top:0,
				 /**
				 * @inner {Number} Specifies the position left,normally this will given by chart.(default to 0)
				 */
				 left:0,
				 /**
				 * @inner {Boolean} private use
				 */
				 hcross:true,
				  /**
				 * @inner {Boolean} private use
				 */
				 vcross:true,
				 /**
				 * @inner {Function} private use
				 */
				 invokeOffset:null,
				 /**
				 * @cfg {Number} Specifies the linewidth of the crosshair.(default to 1)
				 */
				 line_width:1,
				 /**
				 * @cfg {Number} Specifies the linewidth of the crosshair.(default to 1)
				 */
				 line_color:'#1A1A1A',
				 delay:200
			});
		},
		/**
		 * this function will implement at every target object,and this just default effect
		 */
		follow:function(e,m,_){
			if(_.get('invokeOffset')){
				var o = _.get('invokeOffset')(e,m);
				if(o&&o.hit){
					_.o_valid = true;
					_.position(o.top-_.top,o.left-_.left,_);
				}else if(!o||!_.o_valid){
					_.position(_.owidth,_.oheight,_);
				}
			}else{
				/**
				 * set the 1px offset will make the line at the top left all the time
				 */
				_.position(e.y-_.top-1,e.x-_.left-1,_);
			}
		},
		position:function(t,l,_){
			_.horizontal.style.top = (t-_.size)+"px";
			_.vertical.style.left = (l-_.size)+"px";
		},
		doCreate:function(_,w,h){
			var d = document.createElement("div");
			d.style.width= $.toPixel(w);
			d.style.height= $.toPixel(h);
			d.style.backgroundColor = _.get('line_color');
			d.style.position="absolute";
			_.dom.appendChild(d);
			return d;
		},
		doAction:function(_){
			_.T.on('mouseover',function(c,e,m){
				_.show(e,m);	
			}).on('mouseout',function(c,e,m){
				_.hidden(e,m);	
			}).on('mousemove',function(c,e,m){
				_.follow(e,m,_);
			});
		},
		initialize:function(){
			$.CrossHair.superclass.initialize.call(this);
			
			var _ = this._(),L = $.toPixel(_.get('line_width'));
			
			_.size = _.get('line_width')/2;
			
			_.top = $.fixPixel(_.get(_.O));
			_.left = $.fixPixel(_.get(_.L));
			_.owidth = -_.T.root.width;
			_.oheight = -_.T.root.height;
			_.o_valid = false;
			/**
			 * set size zero make integration with vertical and horizontal
			 */
			_.css('width','0px');
			_.css('height','0px');
			_.css('top',_.top+'px');
			_.css('left',_.left+'px');
			_.css('visibility','hidden');
			
			_.horizontal = _.doCreate(_,_.get('hcross')?$.toPixel(_.get(_.W)):"0px",L);
			_.vertical = _.doCreate(_,L,_.get('vcross')?$.toPixel(_.get(_.H)):"0px");
			
			
			
		}
});
/**
 * @end
 */
/**
 * @overview the legend componment
 * @component#$.Legend
 * @extend#$.Component
 */
$.Legend = $.extend($.Component, {
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Legend.superclass.configure.apply(this, arguments);

		/**
		 * indicate the legend's type
		 */
		this.type = 'legend';

		this.set({
			/**
			 * @cfg {Array} Required,The datasource of Legend.Normally,this will given by chart.(default to undefined)
			 */
			data : undefined,
			/**
			 * @inner {Number} Specifies the width.Note if set to 'auto' will be fit the actual width.(default to 'auto')
			 */
			width : 'auto',
			/**
			 * @cfg {Number/String} Specifies the number of column.(default to 1) Note:If set to 'max',the list will be lie on the property row
			 */
			column : 1,
			/**
			 * @cfg {Number/String} Specifies the number of column.(default to 'max') Note:If set to 'max',the list will be lie on the property column
			 */
			row : 'max',
			/**
			 * @cfg {Number} Specifies the limited width.Normally,this will given by chart.(default to 0)
			 */
			maxwidth : 0,
			/**
			 * @cfg {Number} Specifies the lineheight when text display multiline.(default to 16)
			 */
			line_height : 16,
			/**
			 * @cfg {String} Specifies the shape of legend' sign (default to 'square') Available value are:
			 * @Option 'round'
			 * @Option 'square'
			 * @Option 'bar'
			 * @Option 'round-bar'
			 * @Option 'square-bar'
			 */
			sign : 'square',
			/**
			 * @cfg {Number} the size of legend' sign (default to 10)
			 */
			sign_size : 10,
			/**
			 * @cfg {Number} the distance of legend' sign and text (default to 5)
			 */
			sign_space : 5,
			/**
			 * @cfg {Number} Specifies the space between the sign and text.(default to 5)
			 */
			legend_space : 5,
			
			z_index : 1009,
			/**
			 * @cfg {Boolean} If true the text's color will accord with sign's.(default to false)
			 */
			text_with_sign_color : false,
			/**
			 * @cfg {String} Specifies the horizontal position of the legend in chart.(defaults to 'right').Available value are:
			 * @Option 'left'
			 * @Option 'center' Only applies when valign = 'top|bottom'
			 * @Option 'right'
			 */
			align : 'right',
			/**
			 * @cfg {String} this property specifies the vertical position of the legend in an module (defaults to 'middle'). Available value are:
			 * @Option 'top'
			 * @Option 'middle' Only applies when align = 'left|right'
			 * @Option 'bottom'
			 */
			valign : 'middle'
		});

		/**
		 * this element support boxMode
		 */
		this.atomic = true;

		this.registerEvent(
		/**
		 * @event Fires when parse this element'data.Return text value will override existing.
		 * @paramter $.Chart#this
		 * @paramter string#text the text will display
		 * @paramter int#i the index of data
		 * @return string
		 */
		'parse');

	},
	isEventValid : function(e,_) {
		var r = {
			valid : false
		};
		if (e.x > this.x && e.x < (_.x + _.width) && e.y > _.y && e.y < (_.y + _.height)) {
			_.data.each(function(d, i) {
				if (e.x > d.x && e.x < (d.x + d.width_ + _.get('signwidth')) && e.y > d.y && e.y < (d.y + _.get('line_height'))) {
					r = {
						valid : true,
						index : i,
						target : d
					}
					return false;
				}
			}, _);
		}
		return r;
	},
	drawCell : function(x, y, text, color,n,_) {
		var s = _.get('sign_size'),f = _.getPlugin('sign');
		if(!f||!f.call(_,_.T,n,{x:x + s / 2,y:y},s,color)){
			if(n.indexOf("bar")!=-1){
				_.T.box(x, y - s / 12, s, s / 6, 0, color);
			}
			if(n=='round'){
				_.T.round(x + s / 2, y, s / 2, color);
			}else if(n=='round-bar'){
				_.T.round(x + s / 2, y, s / 4, color);
			}else if (n == 'square-bar') {
				_.T.box(x + s / 4, y - s / 4, s / 2, s / 2, 0, color);
			}else if (n == 'square'){
				_.T.box(x, y-s/2, s, s, 0, color);
			}
		}
		_.T.fillText(text, x + _.get('signwidth'), y, 0, _.get('text_with_sign_color')?color:_.get('color'),'lr',_.get('line_height'));
	},
	doDraw : function(_) {
		_.T.box(_.x, _.y, _.width, _.height, _.get('border'), _.get('f_color'), false, _.get('shadow'));
		_.T.textStyle(_.L, 'middle', $.getFont(_.get('fontweight'), _.get('fontsize'), _.get('font')));
		_.data.each(function(d) {
			_.drawCell(d.x, d.y, d.text, d.color,d.sign,_);
		});
	},
	doLayout:function(_,g){
		var ss = _.get('sign_size'),
			w = 0,
			h=0, 
			temp = 0, 
			c = _.get('column'),
			r = _.get('row'),
			L = _.data.length;
		
		_.T.textFont(_.get('fontStyle'));
		
		if (_.get('line_height') < ss) {
			_.push('line_height', ss + ss / 5);
		}
		_.push('signwidth', (ss + _.get('sign_space')));
		/**
		 * calculate the width each item will used
		 */
		_.data.each(function(d) {
			d.width_ = _.T.measureText(d.text);
		}, _);
		
		/**
		 * calculate the each column's width it will used
		 */
		for ( var i = 0; i < c; i++) {
			temp = 0;
			for ( var j = i; j < L; j+=c) {
				temp = Math.max(temp, _.data[j].width_);
			}
			_.columnwidth[i] = temp;
			w += temp;
		}
		/**
		 * calculate the each row's height it will used
		 */
		for ( var i = 0; i < r; i++) {
			temp =0;
			for ( var j = i*c; j < L; j++) {
				temp = Math.max(temp, _.data[j].text.split("\n").length);
			}
			_.columnheight[i] = temp;
			h+=temp;
		}
		w = _.push(_.W, w + _.get('hpadding') + _.get('signwidth') * c + (c - 1) * _.get('legend_space'));
		if (w > _.get('maxwidth')){
			var fs=Math.floor(_.get('fontsize')*(_.get('maxwidth')/w));
			if(!(fs<10&&c==1)){
				if(fs>9){
					_.push('fontStyle',$.getFont(_.get('fontweight'), _.push('fontsize', fs), _.get('font')));
				}else if(c>1){
					_.push('row', Math.ceil(L / _.push('column',c-1)));
				}
				_.doLayout(_,g);
				return;
			}
		}
		
		var d,x,y,y2;
		_.width = w;
		
		_.height = h = _.push(_.H, h * _.get('line_height') + _.get('vpadding'));
		
		if (_.get('valign') == _.O) {
			_.y = g.get('t_originy');
		} else if (_.get('valign') == _.B) {
			_.y = g.get('b_originy') - h;
		} else {
			_.y = g.get('centery') - h / 2;
		}
		
		if (_.get('align') == _.L) {
			_.x = g.get('l_originx');
		} else if (_.get('align') == _.C) {
			_.x = g.get('centerx') - w / 2;
		} else {
			_.x = g.get('r_originx') - w;
		}
		
		_.x = _.push(_.X, (_.x<0?g.get('l_originx'):_.x) + _.get('offsetx'));
		_.y = _.push(_.Y, (_.y<0?g.get('t_originy'):_.y) + _.get('offsety'));
		
		
		y = _.y + _.get('padding_top');
		
		ss = _.get('legend_space')+_.get('signwidth');
		/**
		 * calculate the each cell's coordinate point
		 */
		for ( var i = 0; i < r; i++) {
			x = _.x + _.get('padding_left');
			y2=(_.columnheight[i]/2)*_.get('line_height');
			y+=y2;
			for ( var j = 0; j < c&&i*c+j<L; j++) {
				d = _.data[i*c+j];
				d.y = y;
				d.x = x;
				x += _.columnwidth[j] + ss;
			}
			y+=y2;
		}
	},
	doConfig : function() {
		$.Legend.superclass.doConfig.call(this);
		
		var _ = this._(),g = _.root,c = $.isNumber(_.get('column')),r = $.isNumber(_.get('row')), L = _.data.length;
		/**
		 * if the position is incompatible,rectify it.
		 */
		if (_.get('align') == _.C && _.get('valign') == 'middle') {
			_.push('valign', _.O);
		}

		/**
		 * if this position incompatible with root,rectify it.
		 */
		if (g.get('align') == _.L) {
			if (_.get('valign') == 'middle') {
				_.push('align', _.R);
			}
		}
		
		/**
		 * calculate the width each item will used
		 */
		_.data.each(function(d, i) {
			$.merge(d, _.fireEvent(_, 'parse', [_, d.name, i]));
			d.text = d.text || d.name ||'';
			d.sign = d.sign || _.get('sign')
		}, _);
		
		if (!c && !r)
			c = _.push('column',1);
		if (c && !r)
			r = _.push('row', Math.ceil(L / _.get('column')));
		if (!c && r)
			c = _.push('column', Math.ceil(L / _.get('row')));

		c = _.get('column');
		r = _.get('row');
		
		if (L > r * c) {
			r += Math.ceil((L - r * c) / c);
			r = _.push('row', r);
		}
		_.columnwidth = [];
		_.columnheight = [];
		
		_.doLayout(_,g);
		
	}
});/** @end */

/**
 * @overview the label componment
 * @component#$.Label
 * @extend#$.Component
 */
$.Label = $.extend($.Component, {
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Label.superclass.configure.apply(this, arguments);

		/**
		 * indicate the legend's type
		 */
		this.type = 'label';

		this.set({
			/**
			 * @cfg {String} Specifies the text of this label,Normally,this will given by chart.(default to '').
			 */
			text : '',
			/**
			 * @cfg {Number} Specifies the lineheight when text display multiline.(default to 12).
			 */
			line_height : 12,
			/**
			 * @cfg {Number} Specifies the thickness of line in pixel.(default to 1).
			 */
			line_thickness : 1,
			/**
			 * @cfg {String} Specifies the shape of legend' sign (default to 'square').Available value are:
			 * @Option 'round'
			 * @Option 'square'
			 */
			sign : 'square',
			/**
			 * @cfg {Number} Specifies the size of legend' sign in pixel.(default to 12)
			 */
			sign_size : 12,
			/**
			 * @cfg {Number} Override the default as 2 in pixel.
			 */
			padding : '2 5',
			/**
			 * @cfg {Number} Override the default as 2 in pixel.
			 */
			offsety : 2,
			/**
			 * @cfg {Number} Specifies the space between the sign and text.(default to 5)
			 */
			sign_space : 5,
			/**
			 * @cfg {Number} Override the default as '#efefef'.
			 */
			background_color : '#efefef',
			/**
			 * @cfg {Boolean} If true the text's color will accord with sign's.(default to false)
			 */
			text_with_sign_color : false
		});

		/**
		 * this element support boxMode
		 */
		this.atomic = true;

		this.registerEvent();

	},
	isEventValid : function(e,_) {
		return {
			valid : $.inRange(_.labelx, _.labelx + _.get(_.W), e.x) && $.inRange(_.labely, _.labely + _.get(_.H), e.y)
		};
	},
	text : function(text) {
		if (text)
			this.push('text', text);
		this.push(this.W, this.T.measureText(this.get('text')) + this.get('hpadding') + this.get('sign_size') + this.get('sign_space'));
	},
	localizer : function(_) {
		var Q = _.get('quadrantd'),p = _.get('line_points'),m=_.get('smooth'),Q=(Q >= 1 && Q <= 2),x=_.get('labelx'),y=_.get('labely');
		_.labelx = x+(Q ? - _.get(_.W)-m : m);
		_.labely = y-_.get(_.H)/2;
		p[2] = {x:x,y:y};
		p[3] = {x:p[2].x+(Q ? -m : m),y:p[2].y};
	},
	doLayout : function(x, y,n,_) {
		_.push('labelx', _.get('labelx') + x/n);
		_.push('labely', _.get('labely') + y/n);
		
		_.get('line_points').each(function(p,i) {
			p.x += x;
			p.y += y;
			return i==1;
		}, _);
		_.localizer(_);
	},
	doDraw : function(_){
		var p = _.get('line_points'), ss = _.get('sign_size'), x = _.labelx + _.get('padding_left'), y = _.labely + _.get('padding_top');
		
		_.T.label(p, _.get('line_thickness'), _.get('border.color'));
		
		_.T.box(_.labelx, _.labely, _.get(_.W), _.get(_.H), _.get('border'), _.get('f_color'), false, _.get('shadow'));

		_.T.textStyle(_.L, _.O, _.get('fontStyle'));

		var textcolor = _.get('color');
		if (_.get('text_with_sign_color')) {
			textcolor = _.get('scolor');
		}
		if (_.get('sign') == 'square') {
			_.T.box(x, y, ss, ss, 0, _.get('scolor'));
		} else if(_.get('sign')){
			_.T.round(x + ss / 2, y + ss / 2, ss / 2, _.get('scolor'));
		}
		_.T.fillText(_.get('text'), x + ss + _.get('sign_space'), y, _.get('textwidth'), textcolor);
	},
	doConfig : function() {
		$.Label.superclass.doConfig.call(this);
		var _ = this._();

		_.T.textFont(_.get('fontStyle'));

		if (_.get('fontsize') > _.get('line_height')) {
			_.push('line_height', _.get('fontsize'));
		}
		if(!_.get('sign')){
			_.push('sign_size',0);
			_.push('sign_space',0);
		}
		_.push(_.H, _.get('line_height') + _.get('vpadding'));

		_.text();

		_.localizer(_);

	}
});
/**
 * @end
 */

	/**
	 * @overview the text componment
	 * @component#$.Text
	 * @extend#$.Component
	 */
	$.Text = $.extend($.Component,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			$.Text.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'text';
			
			this.set({
				/**
				 * @cfg {String} Specifies the text want to disply.(default to '')
				 */
				text:'',
				/**
				 * @cfg {String} there has two layers of meaning,when width is 0,Specifies the textAlign of html5.else this is the alignment of box.(default to 'center')
				 * when width is 0,Available value are:
				 * @Option start
				 * @Option end
				 * @Option left
				 * @Option right
				 * @Option center
				 * when width is not 0,Available value are:
				 * @Option left
				 * @Option right
				 * @Option center
				 */
				textAlign:'center',
				/**
				 * @cfg {String} Specifies the alignment in box.(default to 'center')
				 * @Option left
				 * @Option right
				 * @Option center
				 */
				align:'center',
				/**
				 * @cfg {String} Here,specify as false to make background transparent.(default to null)
				 */
				background_color : 0,
				/**
				 * @cfg {String} Specifies the textBaseline of html5.(default to 'top')
				 * Available value are:
				 * @Option top
				 * @Option hanging
				 * @Option middle
				 * @Option alphabetic
				 * @Option ideographic
				 * @Option bottom
				 */
				textBaseline:'top',
				/**
				 * @cfg {Object} Here,specify as false by default
				 * @see <link>$.Element#border</link>
				 */
				border : {
					enable : false
				},
				/**
				 * @cfg {Number} Specifies the maxwidth of text in pixels,if given 0 will not be limited.(default to 0)
				 */
				width:0,
				/**
				 * @cfg {Number} Specifies the maxheight of text in pixels,if given 0 will not be limited(default to 0)
				 */
				height:0,
				/**
				 * @cfg {Number} Here,specify as 0 by default
				 */
				padding:0,
				/**
				 * @cfg {String} Specifies the writing-mode of text.(default to 'lr') .
				 * Available value are:
				 * @Option 'lr'
				 */
				writingmode : 'lr',
				/**
				 * @cfg {Number} Specifies the lineheight when text display multiline.(default to 16).
				 */
				line_height : 16,
				/**
				 * @cfg {Number} Specifies the angle that text writed.0 to horizontal,clockwise.(default to 0).
				 */
				rotate:0
			});
			
			this.registerEvent();
			
		},
		doDraw:function(_){
			if(_.get('box_feature'))
			_.T.box(_.x,_.y,_.get(_.W),_.get(_.H),_.get('border'),_.get('f_color'));
			_.T.text(_.get('text'),_.get('textx'),_.get('texty'),_.get(_.W)-_.get('hpadding'),_.get('color'),_.get('textAlign'),_.get('textBaseline'),_.get('fontStyle'),_.get('writingmode'),_.get('line_height'),_.get('shadow'),_.get('rotate'));
		},
		isEventValid:function(){
			return {valid:false};
		},
		doLayout:function(x,y,n,_){
			_.x = _.push(_.X,_.x+x);
			_.y = _.push(_.Y,_.y+y);
			_.push('textx',_.get('textx')+x);
			_.push('texty',_.get('texty')+y);
		},
		doConfig:function(){
			$.Text.superclass.doConfig.call(this);
			var _ = this._(),x = _.x,y=_.y+_.get('padding_top'),w=_.get(_.W),h=_.get(_.H),a=_.get('textAlign');
			x+=(a==_.C?w/2:(a==_.R?w-_.get('padding_right'):_.get('padding_left')));
			if(h){
				y+=h/2;
				_.push('textBaseline','middle');
			}
			_.push('textx',x);
			_.push('texty',y);
			_.push('box_feature',w&&h);
			_.applyGradient();
		}
});
/**
 * @end
 */
;
(function($) {

	var PI = Math.PI, inc = PI / 90,inc2 = inc/2, ceil = Math.ceil, floor = Math.floor, PI2 = 2 * PI, max = Math.max, min = Math.min, sin = Math.sin, cos = Math.cos, fd = function(w, c) {
		return w == 1 ? (floor(c) + 0.5) : Math.round(c);
	}, getCurvePoint = function(seg, point, i, smo) {
		var x = point.x, y = point.y, lp = seg[i - 1], np = seg[i + 1], lcx, lcy, rcx, rcy;
		if (i < seg.length - 1) {
			var lastY = lp.y, nextY = np.y, c;
			lcx = (smo * x + lp.x) / (smo + 1);
			lcy = (smo * y + lastY) / (smo + 1);
			rcx = (smo * x + np.x) / (smo + 1);
			rcy = (smo * y + nextY) / (smo + 1);

			c = ((rcy - lcy) * (rcx - x)) / (rcx - lcx) + y - rcy;
			lcy += c;
			rcy += c;

			if (lcy > lastY && lcy > y) {
				lcy = max(lastY, y);
				rcy = 2 * y - lcy;
			} else if (lcy < lastY && lcy < y) {
				lcy = min(lastY, y);
				rcy = 2 * y - lcy;
			}
			if (rcy > nextY && rcy > y) {
				rcy = max(nextY, y);
				lcy = 2 * y - rcy;
			} else if (rcy < nextY && rcy < y) {
				rcy = min(nextY, y);
				lcy = 2 * y - rcy;
			}
			point.rcx = rcx;
			point.rcy = rcy;
		}
		return [lp.rcx || lp.x, lp.rcy || lp.y, lcx || x, lcy || y, x, y];
	},
	pF = function(n){
		return $.isNumber(n)?n:$.parseFloat(n,n);
	},
	parse = function(c,_){
		var M,V=0,MI,ML=0,init=false,g = _.get('labels');
		_.data = c;
		if(_.dataType=='simple'){
			_.total = 0;
			c.each(function(d,i){
				d.background_color = d.color;
				V  = d.value||0;
				if($.isArray(V)){
					var T = 0;
					ML = V.length>ML?V.length:ML;
					for(var j=0;j<V.length;j++){
						V[j] = pF(V[j]);
						T+=V[j];
						if(!init){
							M = MI = V[j];
							init=true;
						}
						M = max(V[j],M);
						MI = min(V[j],MI);
					}
					d.total = T;
				}else{
					V = pF(V);
					d.value = V;
					_.total+=V;
					if(!init){
						M = MI = V;
						init=true;
					}
					M = max(V,M);
					MI = min(V,MI);
				}
			},_);
			
			if($.isArray(g)){
				ML = g.length>ML?g.length:ML;
			}
			_.push('maxItemSize',ML);
		}else if(_.dataType=='stacked'||_.dataType=='complex'){
			var L=g.length,item,T,r,stack=_.dataType=='stacked';
			if(L==0){
				L=c[0].value.length;for(var i=0;i<L;i++)g.push("");
			}
			_.columns = [];
			for(var i=0;i<L;i++){
				item = [],T = 0;
				c.each(function(d,j){
					V = d.value[i];
					if(!V)return;
					d.value[i] = V =  pF(V,V);
					T+=V;
					if(stack){
						r = c[j].color;
					}else{
						r = d.color;
						if(!init){
							M = MI = V;
							init=true;
						}
						M = max(V,M);
						MI = min(V,MI);
					}
					item.push($.applyIf({
						name:d.name,
						value:d.value[i],
						background_color:r,
						color:r
					},$.isArray(d.extra)?(d.extra[i]||{}):d));					
				});
				if(stack){
					if(!init){
						M = MI = V;
						init=true;
					}
					M = max(T,M);
					MI = min(T,MI);
				}	
				_.columns.push({
					total:T,
					name:g[i],
					item:item
				});
			}
		}
		_.push('minValue',MI); 
		_.push('maxValue',M);
		_.doConfig();
		_.initialization = true;
	};
	
	/**
	 * @private support an improved API for drawing in canvas
	 */
	function Cans(c) {
		if (typeof c === "string")
			c = $(c);
		if (!c || !c['tagName'] || c['tagName'].toLowerCase() != 'canvas')
			throw new Error("there not a canvas element");

		this.canvas = c;
		this.c = this.canvas.getContext("2d");
	}

	Cans.prototype = {
		getContext:function(){
			return this.c;
		},		
		css : function(a, s) {
			if ($.isDefined(s))
				this.canvas.style[a] = s;
			else
				return this.canvas.style[a];
		},
		/**
		 * draw ellipse API
		 */
		ellipse : function(x, y, a, b, s, e, c, bo, bow, boc, sw, ccw, a2r, last) {
			var angle = s,a2r = !!a2r;
			this.save().gCo(last).strokeStyle(bo,bow, boc).shadowOn(sw).fillStyle(c).moveTo(x, y).beginPath();
			
			if (a2r)
				this.moveTo(x, y);
			
			while (angle <= e) {
				this.lineTo(x + a * cos(angle), y + (b * sin(angle)));
				angle += inc;
			}
			return this.lineTo(x + a * cos(e), y + (b * sin(e))).closePath().stroke(bo).fill(c).restore();
		},
		/**
		 * arc
		 */
		arc : function(x, y, r, dw, s, e, c, b, bw, bc, sw, ccw, a2r, last) {
			if(b)
			r-=floor(bw/2);
			if(r<=0)return this;
			this.save().gCo(last).strokeStyle(b,bw,bc).fillStyle(c).beginPath();
			if(dw){
				this.moveTo(x+cos(s)*(r-dw),y+sin(s)*(r-dw)).lineTo(x+cos(s)*r,y+sin(s)*r);
				this.c.arc(x, y, r, s, e,ccw);
				this.lineTo(x+cos(e)*(r-dw),y+sin(e)*(r-dw));
				this.c.arc(x, y, r-dw, e, s,!ccw);
			}else{
				this.c.arc(x, y, r, s, e, ccw);
				if (a2r)
					this.lineTo(x, y);
			}
			
			this.closePath();
			if(!b){
				this.shadowOn(sw).fill(c);
			}else{
				this.shadowOn(sw).stroke(b).shadowOff().fill(c);
			}
			
			return this.restore();
		},
		/**
		 * draw sector
		 */
		sector : function(x, y, r, dw,s, e, c, b, bw, bc, sw, ccw,a2a,font) {
			if (sw)
				this.arc(x, y, r, dw, s, e,c,b,bw,bc,sw,ccw, !a2a, !font);
			return this.arc(x, y, r, dw, s, e, c, b, bw, bc, false, ccw, !a2a);
		},
		sector3D : function() {
			var x0, y0,sPaint = function(x, y, a, b, s, e, ccw, h, c) {
				var Lo = function(A, h) {
					this.lineTo(x + a * cos(A), y + (h || 0) + (b * sin(A)));
				},
				angle = s;
				this.fillStyle($.dark(c)).moveTo(x + a * cos(s), y + (b * sin(s))).beginPath();
				while (angle <= e) {
					Lo.call(this, angle);
					angle = angle + inc;
				}
				Lo.call(this, e);
				this.lineTo(x + a * cos(e), (y + h) + (b * sin(e)));
				angle = e;
				while (angle >= s) {
					Lo.call(this, angle, h);
					angle = angle - inc;
				}
				Lo.call(this, s, h);
				this.lineTo(x + a * cos(s), y + (b * sin(s))).closePath().fill(true);
			}, layerDraw = function(x, y, a, b, ccw, h, A, c) {
				var x0 = x + a * cos(A);
				var y0 = y + h + (b * sin(A));
				this.moveTo(x, y).beginPath().fillStyle(c).lineTo(x, y + h).lineTo(x0, y0).lineTo(x0, y0 - h).lineTo(x, y).closePath().fill(true);
			}, layerPaint = function(x, y, a, b, s, e, ccw, h, c) {
				var q1 = $.quadrantd(s),q2 = $.quadrantd(e);
				c = $.dark(c);
				if (q1==1||q1==2)
					layerDraw.call(this, x, y, a, b, ccw, h, s, c);
				if (q2==0||q2==3)
					layerDraw.call(this, x, y, a, b, ccw, h, e, c);
			};
			var s3 = function(x, y, a, b, s, e, h, c, bo, bow, boc, sw, ccw, isw) {
				/**
				 * paint bottom layer
				 */
				this.ellipse(x, y + h, a, b, s, e, c, bo, bow, boc, sw, ccw, true);
				/**
				 * paint inside layer
				 */
				layerPaint.call(this, x, y, a, b, s, e, ccw, h, c);

				/**
				 * paint top layer
				 */
				this.ellipse(x, y, a, b, s, e, c, bo, bow, boc, false, ccw, true);
				/**
				 * paint outside layer
				 */
				sPaint.call(this, x, y, a, b, s, e, ccw, h, c);
				return this;
			}
			s3.layerPaint = layerPaint;
			s3.sPaint = sPaint;
			s3.layerDraw = layerDraw;
			return s3;
		}(),
		textStyle : function(a, l, f) {
			return this.textAlign(a).textBaseline(l).textFont(f);
		},
		strokeStyle : function(b,w, c, j) {
			if(b){
				if (w)
					this.c.lineWidth = w;
				if (c)
					this.c.strokeStyle = c;
				if (j)
					this.c.lineJoin = j;
			}
			return this;
		},
		globalAlpha : function(v) {
			if (v)
				this.c.globalAlpha = v;
			return this;
		},
		fillStyle : function(c) {
			if (c)
				this.c.fillStyle = c;
			return this;
		},
		arc2 : function(x, y, r, s, e, c) {
			if(r)
			this.c.arc(x, y, r, s, e, c);
			return this;
		},
		textAlign : function(a) {
			if (a)
				this.c.textAlign = a;
			return this;
		},
		textBaseline : function(l) {
			if (l)
				this.c.textBaseline = l;
			return this;
		},
		textFont : function(font) {
			if (font)
				this.c.font = font;
			return this;
		},
		shadowOn : function(s) {
			if (s) {
				this.c.shadowColor = s.color;
				this.c.shadowBlur = s.blur;
				this.c.shadowOffsetX = s.offsetx;
				this.c.shadowOffsetY = s.offsety;
			}
			return this;
		},
		shadowOff : function() {
			this.c.shadowColor = 'white';
			this.c.shadowBlur = this.c.shadowOffsetX = this.c.shadowOffsetY = 0;
			return this;
		},
		gradient : function(x, y, w, h, c,m,r) {
			m = m.toLowerCase();
			var x0=x,y0=y,f=!m.indexOf("linear");
			m = m.substring(14);
			if(f){
			switch (m) {
				case 'updown':
					y0 += h;
					break;
				case 'downup':
					y += h;
					break;
				case 'leftright':
					x0 += w;
					break;
				case 'rightleft':
					x += w;
					break;
				default:
					return c[0];
				}
				return this.avgLinearGradient(x, y, x0, y0, c);
			}else{
				x+=w/2;
				y+=h/2;
				return this.avgRadialGradient(x,y,(r||0),x,y,(w>h?h:w),m=='outin'?c.reverse():c);
			}
		},
		avgLinearGradient : function(xs, ys, xe, ye, c) {
			var g = this.createLinearGradient(xs, ys, xe, ye);
			for ( var i = 0; i < c.length; i++)
				g.addColorStop(i / (c.length - 1), c[i]);
			return g;
		},
		createLinearGradient : function(xs, ys, xe, ye) {
			return this.c.createLinearGradient(xs, ys, xe, ye);
		},
		avgRadialGradient : function(xs, ys, rs, xe, ye, re, c) {
			var g = this.createRadialGradient(xs, ys, rs, xe, ye, re);
			for ( var i = 0; i < c.length; i++)
				g.addColorStop(i/ (c.length - 1), c[i]);
			return g;
		},
		createRadialGradient : function(xs, ys, rs, xe, ye, re) {
			return this.c.createRadialGradient(xs, ys, rs, xe, ye, re);
		},
		text : function(t, x, y, max, color, align, line, font, mode, h,sw,ro) {
			return this.save().textStyle(align, line, font).fillText(t, x, y, max, color, mode, h,sw,ro).restore();
		},
		fillText : function(t, x, y, max, color, mode, h,sw,ro) {
			t = t.toString();
			if(!t||!t.length)return this;
			max = max || false;
			mode = mode || 'lr';
			h = h || 16;
			x = fd(0, x);
			y = fd(0, y);
			var T = t.split(mode == 'tb' ? "" : "\n");
			if(T.length>1){
				if(this.c.textBaseline=='middle'){
					y = y - (T.length-1)*h/2;
				}else if(this.c.textBaseline=='bottom'){
					y = y - (T.length-1)*h;
				}
			}
			this.save().fillStyle(color).translate(x,y).rotate(inc2*ro).shadowOn(sw);
			T.each(function(t,i) {
				try {
					if (max&&max>0)
						this.c.fillText(t, 0,i*h, max);
					else
						this.c.fillText(t, 0, i*h);
				} catch (e) {
					console.log(e.message + '[' + t + ',' + x + ',' + y + ']');
				}
			}, this);
			
			return this.restore();
		},
		measureText : function(t){
			t = t.split("\n");
			var m=0;
			t.each(function(o){
				m = max(this.measureText(o).width,m);
			},this.c);
			return m;
		},
		moveTo : function(x, y) {
			x = x || 0;
			y = y || 0;
			this.c.moveTo(x, y);
			return this;
		},
		lineTo : function(x, y) {
			x = x || 0;
			y = y || 0;
			this.c.lineTo(x, y);
			return this;
		},
		save : function() {
			this.c.save();
			return this;
		},
		restore : function() {
			this.c.restore();
			return this;
		},
		beginPath : function() {
			this.c.beginPath();
			return this;
		},
		closePath : function() {
			this.c.closePath();
			return this;
		},
		stroke : function(s) {
			if(s)
			this.c.stroke();
			return this;
		},
		fill : function(f) {
			if(f)
			this.c.fill();
			return this;
		},
		/**
		 * can use cube3D instead of this?
		 */
		cube : function(x, y, xv, yv, width, height, zdeep, bg, b, bw, bc, sw) {
			x = fd(bw, x);
			y = fd(bw, y);
			zdeep = (zdeep && zdeep > 0) ? zdeep : width;
			var x1 = x + zdeep * xv, y1 = y - zdeep * yv;
			x1 = fd(bw, x1);
			y1 = fd(bw, y1);
			/**
			 * styles -> top-front-right
			 */
			if (sw) {
				this.polygon(bg, b, bw, bc, sw, false, [{x:x, y:y},{x: x1, y:y1},{x: x1 + width, y:y1},{x: x + width, y:y}]);
				this.polygon(bg, b, bw, bc, sw, false, [{x:x, y:y},{x: x, y:y + height},{x: x + width,y: y + height},{x: x + width, y:y}]);
				this.polygon(bg, b, bw, bc, sw, false, [{x:x + width, y:y},{x: x1 + width, y:y1},{x: x1 + width, y:y1 + height},{x: x + width, y:y + height}]);
			}
			/**
			 * clear the shadow on the body
			 */
			this.polygon($.dark(bg), b, bw, bc, false, false, [{x:x, y:y}, {x:x1, y:y1}, {x:x1 + width, y:y1}, {x:x + width, y:y}]);
			this.polygon(bg, b, bw, bc, false, false, [{x:x, y:y}, {x:x, y:y + height}, {x:x + width, y:y + height}, {x:x + width,y: y}]);
			this.polygon($.dark(bg), b, bw, bc, false, false, [{x:x + width, y:y}, {x:x1 + width, y:y1}, {x:x1 + width, y:y1 + height}, {x:x + width, y:y + height}]);
			return this;
		},
		cube3D : function(x, y, rotatex, rotatey, angle, w, h, zh, b, bw, bc, styles) {
			/**
			 * styles -> lowerBottom-bottom-left-right-top-front
			 */
			x = fd(bw, x);
			y = fd(bw, y);
			zh = (!zh || zh == 0) ? w : zh;

			if (angle) {
				var P = $.vectorP2P(rotatex, rotatey);
				rotatex = x + zh * P.x, rotatey = y - zh * P.y;
			} else {
				rotatex = x + zh * rotatex, rotatey = y - zh * rotatey;
			}

			while (styles.length < 6)
				styles.push(false);

			rotatex = fd(bw, rotatex);
			rotatey = fd(bw, rotatey);

			var side = [];

			if (rotatey < 0) {
				if ($.isObject(styles[4]))
					side.push($.applyIf({
						points : [{x:x,y:y - h},{x:rotatex,y:rotatey - h},{x:rotatex + w, y:rotatey - h},{x: x + w, y:y - h}]
					}, styles[4]));
			} else {
				if ($.isObject(styles[0]))
					side.push($.applyIf({
						points : [{x:x, y:y},{x: rotatex, y:rotatey},{x: rotatex + w, y:rotatey},{x: x + w,y:y}]
					}, styles[0]));
			}

			if ($.isObject(styles[1]))
				side.push($.applyIf({
					points : [{x:rotatex, y:rotatey},{x: rotatex, y:rotatey - h}, {x:rotatex + w, y:rotatey - h},{x: rotatex + w,y:rotatey}]
				}, styles[1]));

			if ($.isObject(styles[2]))
				side.push($.applyIf({
					points : [{x:x, y:y}, {x:x, y:y - h},{x: rotatex, y:rotatey - h},{x: rotatex, y:rotatey}]
				}, styles[2]));

			if ($.isObject(styles[3]))
				side.push($.applyIf({
					points : [{x:x + w, y:y}, {x:x + w, y:y - h}, {x:rotatex + w, y:rotatey - h}, {x:rotatex + w, y:rotatey}]
				}, styles[3]));

			if (rotatey < 0) {
				if ($.isObject(styles[0]))
					side.push($.applyIf({
						points : [{x:x,y: y}, {x:rotatex, y:rotatey}, {x:rotatex + w, y:rotatey}, {x:x + w, y:y}]
					}, styles[0]));
			} else {
				if ($.isObject(styles[4]))
					side.push($.applyIf({
						points : [{x:x, y:y - h}, {x:rotatex, y:rotatey - h}, {x:rotatex + w, y:rotatey - h}, {x:x + w, y:y - h}]
					}, styles[4]));
			}

			if ($.isObject(styles[5]))
				side.push($.applyIf({
					points : [{x:x, y:y}, {x:x, y:y - h}, {x:x + w, y:y - h}, {x:x + w, y:y}]
				}, styles[5]));
			
			side.each(function(s) {
				this.polygon(s.color, b, bw, bc, s.shadow, s.alpha, s.points);
			}, this);
			
			return this;
		},
		polygon : function(bg, b, bw, bc, sw, alpham, p, smooth, smo,l) {
			this.save().strokeStyle(b,bw, bc).beginPath().fillStyle(bg).globalAlpha(alpham).shadowOn(sw).moveTo(p[0].x,p[0].y);
			if (smooth) {
				this.moveTo(fd(bw,l[0].x),fd(bw,l[0].y)).lineTo(fd(bw, p[0].x), fd(bw, p[0].y));
				for ( var i = 1; i < p.length; i++)
					this.bezierCurveTo(getCurvePoint(p, p[i], i, smo));
				this.lineTo(fd(bw,l[1].x),fd(bw,l[1].y));
			} else {
				for ( var i = 1; i < p.length; i++)
					this.lineTo(fd(bw, p[i].x), fd(bw, p[i].y));
			}
			return this.closePath().stroke(b).fill(bg).restore();
		},
		lines : function(p, w, c, last) {
			if(!w)return this;
			this.save().gCo(last).beginPath().strokeStyle(true,w, c).moveTo(fd(w, p[0]), fd(w, p[1]));
			for ( var i = 2; i < p.length - 1; i += 2) {
				this.lineTo(fd(w, p[i]), fd(w, p[i + 1]));
			}
			return this.stroke(true).restore();
		},
		bezierCurveTo : function(r) {
			this.c.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
			return this;
		},
		label : function(p, w, c) {
			return this.save()
				.beginPath()
				.strokeStyle(true,w, c)
				.moveTo(fd(w, p[0].x), fd(w, p[0].y))
				.bezierCurveTo([p[1].x,p[1].y,p[2].x,p[2].y,p[3].x,p[3].y])
				.stroke(true)
				.restore();
		},
		lineArray : function(p, w, c, smooth, smo) {
			if(!w)return this;
			this.save().beginPath().strokeStyle(true,w, c).moveTo(fd(w, p[0].x), fd(w, p[0].y));
			for ( var i = 1; i < p.length; i++){
				if (smooth) {
					this.bezierCurveTo(getCurvePoint(p, p[i], i, smo || 1.5));
				} else {
					this.lineTo(fd(w, p[i].x), fd(w, p[i].y));
				}
			}
			return this.stroke(true).restore();
		},
		dotted : function(x1, y1, x2, y2, w, c,L,f,last) {
			if (!w)
				return this;
			x1 = fd(w, x1);
			y1 = fd(w, y1);
			x2 = fd(w, x2);
			y2 = fd(w, y2);
			var d = $.distanceP2P(x1, y1, x2, y2),t;
			if(L<=0||d<=L||(x1!=x2&&y1!=y2)){
				return this.line(x1, y1, x2, y2, w, c, last);
			}
			if(x1>x2||y1>y2){
				t = x1;
				x1 = x2;
				x2 = t;
				t = y1;
				y1 = y2;
				y2 = t;
			}
			this.save().gCo(last).strokeStyle(true,w, c).beginPath().moveTo(x1,y1);
			var S = L*(f || 1),g = floor(d/(L+S)),k = (d-g*(L+S))>L,h=(y1==y2);
			g = k?g+1:g;
			for(var i=1;i<=g;i++){
				this.lineTo(h?x1+L*i+S*(i-1):x1,h?y1:y1+L*i+S*(i-1)).moveTo(h?x1+(L+S)*i:x1, h?y1:y1+(L+S)*i);
			}
			if(!k){
				this.lineTo(x2,y2);
			}
			return this.stroke(true).restore();
		},
		line : function(x1, y1, x2, y2, w, c, last) {
			if (!w)
				return this;
			this.save().gCo(last);
			return this.beginPath().strokeStyle(true,w, c).moveTo(fd(w, x1), fd(w, y1)).lineTo(fd(w, x2), fd(w, y2)).stroke(true).restore();
		},
		round : function(x, y, r, c, bw, bc) {
			return this.arc(x, y, r,0, 0, PI2, c, !!bc, bw, bc);
		},
		round0 : function(q, r, c, bw, bc) {
			return this.arc(q.x, q.y, r,0, 0, PI2, c, !!bc, bw, bc);
		},
		fillRect : function(x, y, w, h) {
			this.c.fillRect(x, y, w, h);
			return this;
		},
		translate : function(x, y) {
			this.c.translate(x, y);
			return this;
		},
		rotate : function(r) {
			this.c.rotate(r);
			return this;
		},
		clearRect : function(x, y, w, h) {
			x = x || 0;
			y = y || 0;
			w = w || this.canvas.width;
			h = h || this.canvas.height;
			this.c.clearRect(x, y, w, h);
			return this;
		},
		gCo : function(l) {
			if(l)
			return this.gCO(l);
			return this;
		},
		gCO : function(l) {
			this.c.globalCompositeOperation = l ? "destination-over" : "source-over";
			return this;
		},
		box : function(x, y, w, h, b, bg, shadow, m,last) {
			b = b || {
				enable : 0
			}
			if (b.enable) {
				var j = b.width, c = b.color, r = b.radius, f = $.isNumber(j);
				j = $.parsePadding(j);
				if(j[0]==j[1]&&j[1]==j[2]&&j[2]==j[3]){
					f = true;
				}
				m = m?1:-1;
				w += m*(j[1] + j[3]) / 2;
				h += m*(j[0] + j[2]) / 2;
				x -= m*(j[3] / 2);
				y -= m*(j[0] / 2);
				j = f ? j[0] : j;
				r = (!f ||!r|| r == 0 || r == '0') ? 0 : $.parsePadding(r);
			}
			
			this.save().gCo(last).fillStyle(bg).strokeStyle(f,j, c);
			/**
			 * draw a round corners border
			 */
			if (r) {
				this.beginPath().moveTo(fd(j,x+r[0]), fd(j, y))
				.lineTo(fd(j,x+w - r[1]), fd(j, y))
				.arc2(fd(j,x+w - r[1]), fd(j, y+r[1]), r[1], PI*3/2, PI2)
				.lineTo(fd(j, x+w), fd(j,y+h - r[2]))
				.arc2(fd(j,x+w - r[2]), fd(j, y+h-r[2]), r[2], 0, PI/2)
				.lineTo(fd(j,x+r[3]), fd(j, y+h))
				.arc2(fd(j,x+r[3]), fd(j, y+h-r[3]), r[3], PI/2, PI)
				.lineTo(fd(j,x), fd(j,y+r[0]))
				.arc2(fd(j,x+r[0]), fd(j, y+r[0]), r[0], PI, PI*3/2)
				.closePath().shadowOn(shadow).stroke(j).shadowOff().fill(bg);
			} else {
				if (!b.enable || f) {
					if (j&&b.enable){
						this.shadowOn(shadow).c.strokeRect(x, y, w, h);
						this.shadowOff();
					}
					if (bg)
						this.fillRect(x, y, w, h);
				} else {
					if(j){
						c = $.isArray(c) ? c : [c, c, c, c];
						this.shadowOn(shadow).line(x+w, y+j[0] / 2, x+w, y+h - j[0] / 2, j[1], c[1], 0).line(x, y+j[0] / 2, x, y+h - j[0] / 2, j[3], c[3], 0).line(floor(x-j[3] / 2),y, x+w + j[1] / 2, y, j[0], c[0], 0).line(floor(x-j[3] / 2), y+h, x+w + j[1] / 2, y+h, j[2], c[2], 0).shadowOff();
					}
					if (bg) {
						this.beginPath().moveTo(floor(x+j[3] / 2), floor(y+j[0] / 2)).lineTo(ceil(x+w - j[1] / 2), y+j[0] / 2).lineTo(ceil(x+w - j[1] / 2), ceil(y+h - j[2] / 2)).lineTo(floor(x+j[3] / 2), ceil(y+h - j[2] / 2)).lineTo(floor(x+j[3] / 2), floor(y+j[0] / 2)).closePath().fill(bg);
					}
				}

			}
			return this.restore();
		},
		toDataURL : function(g) {
			return this.canvas.toDataURL(g || "image/png");
		},
		addEvent : function(type, fn, useCapture) {
			$.Event.addEvent(this.canvas, type, fn, useCapture);
		}
	}
	
	/**
	 * the public method,inner use
	 */
	$.taylor = {
		light:function(_,e){
			e.highlight = false;
			_.on('mouseover',function(){
				e.highlight = true;
				_.redraw('mouseover');
			}).on('mouseout',function(){
				e.highlight = false;
				_.redraw('mouseout');
			}).on('beforedraw',function(){
				_.push('f_color',e.highlight?_.get('light_color'):_.get('f_color_'));
				return true;
			});
		}	
	}
	
	/**
	 * @overview this component is a super class of all chart
	 * @component#$.Chart
	 * @extend#$.Painter
	 */
	$.Chart = $.extend($.Painter, {
		/**
		 * @cfg {TypeName}
		 */
		configure : function() {
			/**
			 * invoked the super class's configuration
			 */
			$.Chart.superclass.configure.apply(this, arguments);

			/**
			 * indicate the element's type
			 */
			this.type = 'chart';
			/**
			 * indicate the data structure
			 */
			this.dataType = 'simple';

			this.set({
				/**
				 * @cfg {String} The unique id of this element (defaults to an auto-assigned id).
				 */
				id : '',
				/**
				 * @cfg {String} id of dom you want rendered(defaults '').
				 */
				render : '',
				/**
				 * @cfg {Array} Required,The datasource of Chart.must be not empty.
				 */
				data : [],
				/**
				 * @cfg {Number} Specifies the width of this canvas
				 */
				width : undefined,
				/**
				 * @cfg {Number} Specifies the height of this canvas
				 */
				height : undefined,
				/**
				 * @cfg {String} Specifies the default lineJoin of the canvas's context in this element.(defaults to 'round')
				 */
				lineJoin : 'round',
				/**
				 * @cfg {String} this property specifies the horizontal alignment of chart in an module (defaults to 'center') Available value are:
				 * @Option 'left'
				 * @Option 'center'
				 * @Option 'right'
				 */
				align : 'center',
				/**
				 * @cfg {Boolean} If true mouse change to a pointer when a mouseover fired.only available when use PC.(defaults to true)
				 */
				default_mouseover_css : true,
				/**
				 * @cfg {Boolean} If true ignore the event touchmove.only available when support touchEvent.(defaults to false)
				 */
				turn_off_touchmove : false,
				/**
				 * @cfg {Boolean} Specifies as true to display with percent.(default to false)
				 */
				showpercent : false,
				/**
				 * @cfg {Number} Specifies the number of decimal when use percent.(default to 1)
				 */
				decimalsnum : 1,
				/**
				 * @cfg {Object/String} Specifies the config of Title details see <link>$.Text</link>,If given a string,it will only apply the text.note:If the text is empty,then will not display
				 */
				title : {
					text : '',
					fontweight : 'bold',
					/**
					 * Specifies the font-size in pixels of title.(default to 20)
					 */
					fontsize : 20,
					/**
					 * Specifies the height of title will be take.(default to 30)
					 */
					height : 30
				},
				/**
				 * @cfg {Object/String}Specifies the config of subtitle details see <link>$.Text</link>,If given a string,it will only apply the text.note:If the title or subtitle'text is empty,then will not display
				 */
				subtitle : {
					text : '',
					fontweight : 'bold',
					/**
					 * Specifies the font-size in pixels of title.(default to 16)
					 */
					fontsize : 16,
					/**
					 * Specifies the height of title will be take.(default to 20)
					 */
					height : 20
				},
				/**
				 * @cfg {Object/String}Specifies the config of footnote details see <link>$.Text</link>,If given a string,it will only apply the text.note:If the text is empty,then will not display
				 */
				footnote : {
					text : '',
					/**
					 * Specifies the font-color of footnote.(default to '#5d7f97')
					 */
					color : '#5d7f97',
					textAlign : 'right',
					/**
					 * Specifies the height of title will be take.(default to 20)
					 */
					height : 20
				},
				/**
				 * @cfg {Boolean} If true element will have a animation when show, false to skip the animation.(default to false)
				 */
				animation : false,
				/**
				 * @Function {Function} the custom funtion for animation.(default to null)
				 */
				doAnimation : null,
				/**
				 * @cfg {String} (default to 'ease-in-out') Available value are:
				 * @Option 'easeIn'
				 * @Option 'easeOut'
				 * @Option 'easeInOut'
				 * @Option 'linear'
				 */
				animation_timing_function : 'easeInOut',
				/**
				 * @cfg {Number} Specifies the duration when animation complete in millisecond.(default to 1000)
				 */
				animation_duration : 1000,
				/**
				 * @cfg {Number} Specifies the chart's z_index.override the default as 999 to make it at top layer.(default to 999)
				 */
				z_index:999,
				/**
				 * @cfg {Object}Specifies the config of Legend.For details see <link>$.Legend</link> Note:this has a extra property named 'enable',indicate whether legend available(default to false)
				 */
				legend : {
					enable : false
				},
				/**
				 * @cfg {Object} Specifies the config of Tip.For details see <link>$.Tip</link> Note:this has a extra property named 'enable',indicate whether tip available(default to false)
				 */
				tip : {
					enable : false
				}
			});

			/**
			 * register the common event
			 */
			this.registerEvent(
			/**
			 * @event Fires before this element Animation.Only valid when <link>animation</link> is true
			 * @paramter $.Chart#this
			 */
			'beforeAnimation',
			/**
			 * @event Fires when this element Animation finished.Only valid when <link>animation</link> is true
			 * @paramter $.Chart#this
			 */
			'afterAnimation',
			/**
			 * @event Fires when chart resize.
			 * @paramter int#width chart's width
			 * @paramter int#height chart's height
			 * @return Object object the new config for chart
			 */
			'resize',
			'animating');

			this.T = null;
			this.Rendered = false;
			this.Combination = false;
			this.Animationed = false;
			this.show = false;
			this.data = [];
			this.plugins = [];
			this.components = [];
			this.oneways = [];
			this.total = 0;
			this.ICHARTJS_CHART = true;
		},
		toDataURL : function(g) {
			return this.T.toDataURL(g);
		},
		segmentRect : function() {
			if(!this.Combination)
			this.T.clearRect();
		},
		resetCanvas : function() {
			if(!this.Combination)
			this.T.box(this.get('l_originx'), this.get('t_originy'), this.get('client_width'), this.get('client_height'),0,this.get('f_color'),0,0,true);
		},
		animation : function(_) {
			/**
			 * clear the part of canvas
			 */
			_.segmentRect();
			
			/**
			 * draw coordinate
			 */
			if(_.coo&&!_.ILLUSIVE_COO)
				_.coo.draw();
			
			/**
			 * doAnimation of implement
			 */
			_.doAnimation(_.variable.animation.time, _.duration,_);
			
			/**
			 * draw plugins
			 */
			_.plugins.each(function(p){
				if(p.A_draw){
					p.variable.animation.animating =true;
					p.variable.animation.time =_.variable.animation.time;
					p.draw();
					p.variable.animation.animating =false;
				}
			});
			
			if(_.Combination){
				return;
			}
			
			_.oneways.each(function(o) {o.draw()});
			
			if (_.variable.animation.time < _.duration) {
				_.variable.animation.time++;
				$.requestAnimFrame(function() {
					_.animation(_);
				});
			} else {
				$.requestAnimFrame(function() {
					_.Animationed = true;
					
					/**
					 * make plugins's status is the same as chart
					 */
					_.plugins.each(function(p){
						p.Animationed = true;
					});
					_.processAnimation = false;
					_.draw();
					_.plugins.each(function(p){
						p.processAnimation = false;
					});
					_.fireEvent(_, 'afterAnimation', [_]);
				});
			}
		},
		runAnimation : function(_) {
			_.fireEvent(_, 'beforeAnimation', [_]);
			if(!_.A_draw)
			_.variable.animation = {
				type : 0,
				time : 0,
				queue : []
			}
			_.processAnimation = true;
			_.animation(_);
		},
		doSort:function(){
			var f = function(p, q){return ($.isArray(p)?(p.zIndex||0):p.get('z_index'))>($.isArray(q)?(q.zIndex||0):q.get('z_index'))};
			this.components.sor(f);
			this.oneways.sor(f);
		},
		commonDraw : function(_,e) {
			_.show = false;
			
			if (!_.redraw) {
				$.Assert.isTrue(_.Rendered, _.type + ' has not rendered');
				$.Assert.isTrue(_.data&&_.data.length>0,_.type + '\'s data is empty');
				$.Assert.isTrue(_.initialization, _.type + ' Failed to initialize');
				_.doSort();
			}
			
			_.redraw = true;
			
			if (!_.Animationed && _.get('animation')) {
				_.runAnimation(_);
				return;
			}
			_.segmentRect();
			//order?
			_.components.eachAll(function(c) {
				c.draw(e);
			});
			_.components.eachAll(function(c) {
				if(c.last)c.last(c);
			});
			//order?
			_.oneways.each(function(o) {o.draw()});
			
			_.show = true;
		},
		/**
		 * @method register the customize component or combinate with other charts
		 * @paramter <link>$.Custom</link><link>$.Chart</link>#object 
		 * @return void
		 */
		plugin : function(c) {
			var _ = this._();
			c.inject(_);
			if(c.ICHARTJS_CHART){
				c.Combination = true;
				c.setUp();
			}
			if(!_.get('animation')){
				c.push('animation',false);
			}
			c.duration =_.duration;
			_.register(c);
			_.plugins.push(c);
		},
		destroy:function(_){
			_.components.eachAll(function(C){
				C.destroy();
			});
			_.oneways.each(function(O){
				O.destroy();
			});
		},
		/**
		 * @method return the title,return undefined if unavailable
		 * @return <link>$.Text</link>#the title object
		 */
		getTitle:function(){
			return this.title;
		},
		/**
		 * @method return the subtitle,return undefined if unavailable
		 * @return <link>$.Text</link>#the subtitle object
		 */
		getSubTitle:function(){
			return this.subtitle;
		},
		/**
		 * @method return the footnote,return undefined if unavailable
		 * @return <link>$.Text</link>#the footnote object
		 */
		getFootNote:function(){
			return this.footnote;
		},
		/**
		 * @method return the main Drawing Area's dimension,return following property:
		 * x:the left-top coordinate-x
		 * y:the left-top coordinate-y
		 * width:the width of drawing area
		 * height:the height of drawing area
		 * @return Object#contains dimension info
		 */
		getDrawingArea:function(){
			return {
				x:this.get("l_originx"),
				x:this.get("t_originy"),
				width:this.get("client_width"),
				height:this.get("client_height")
			}
		},
		create : function(_,shell) {
			/**
			 * fit the window
			 */
			if(_.get('fit')){
				var w = window.innerWidth,
			    	h = window.innerHeight,
			    	style = $.getDoc().body.style;
			    style.padding = "0px";
			    style.margin = "0px";
			    style.overflow = "hidden";
			    _.push(_.W, w);
			    _.push(_.H, h);
			}
			
			_.canvasid = $.uid(_.type);
			_.shellid = "shell-"+_.canvasid;
			
			var H = [];
			H.push("<div id='");
			H.push(_.shellid);
			H.push("' style='padding:0px;margin:0px;overflow:hidden;position:relative;'>");
			H.push("<canvas id= '");
			H.push(_.canvasid);
			H.push("' style='-webkit-text-size-adjust: none;'>");
			H.push("<p>Your browser does not support the canvas element</p></canvas>");
			H.push("</div>");
			
			/**
			 * also use appendChild()
			 */
			shell.innerHTML = H.join("");
			
			_.shell = $(_.shellid);
			
			/**
			 * the base canvas wrap for draw
			 */
			_.T = _.target = new Cans(_.canvasid);
			
			/**
			 * do size
			 */
			_.size(_);
			_.Rendered = true;
		},
		/**
		 * @method set up the chart by latest configruation
		 * @return void
		 */
		setUp:function(){
			var _ = this._();
			_.redraw = false;
			_.T.clearRect();
			_.initialization = false;
			_.initialize();
		},
		/**
		 * @method load the new data
		 * @paramter array#data 
		 * @return void
		 */
		load:function(d){
			var _ = this._();
			_.push('data', d||[]);
			_.setUp();
			(_.Combination?_.root:_).draw();
		},
		/**
		 * @method resize the chart
		 * @paramter int#width 
		 * @paramter int#height 
		 * @return void
		 */
		resize:function(w,h){
			w = $.parseFloat(w);
			h = $.parseFloat(h);
			var _ = this._();
			if(!_.Combination){
				_.width = _.push(_.W, w);
				_.height = _.push(_.H, h);
				_.size(_);
			}
			_.set(_.fireEvent(_,'resize',[w,h]));
			_.setUp();
			_.plugins.eachAll(function(P) {
				if(P.Combination){
					P.resize(w,h);
				}
			});
			if(!_.Combination){
				_.draw();
			}
		},
		size:function(_){
			_.T.canvas.width = _.width = _.pushIf(_.W, 400);
			_.T.canvas.height = _.height = _.pushIf(_.H, 300);
			_.shell.style.width = _.width+'px';
			_.shell.style.height = _.height+'px';
		},
		initialize : function() {
			var _ = this._(),d = _.get('data'),r = _.get('render');
			
			_.push(_.X, null);
			_.push(_.Y, null);
			
			if(_.Combination){
				$.apply(_.options, $.clone([_.W,_.H,'padding','border','client_height','client_width',
				                                      'minDistance','maxDistance','centerx', 'centery',
				                                      'l_originx','r_originx','t_originy','b_originy'], _.root.options,true));
				_.width = _.get(_.W);
				_.height = _.get(_.H);
				_.shell = _.root.shell;
				_.Rendered = true;
			}else if (!_.Rendered) {
				if(r)
				_.create(_,$(r));
			}
			
			if(_.Rendered && !_.initialization){
				if(d&&d.length>0){
					parse.call(_,d,_);
				}else if($.isString(_.get('url'))){
					_.ajax.call(_,_.get('url'),function(D){
						_.push('data',D);
						_.initialize();
						_.draw();
					});
				}
			}
		},
		/**
		 * @method turn off the event listener
		 * @return void
		 */
		eventOff:function(){this.stopEvent = true},
		/**
		 * @method turn on the event listener
		 * @return void
		 */
		eventOn:function(){this.stopEvent = false},
		/**
		 * this method only invoked once
		 */
		oneWay:function(_){
			
			_.T.strokeStyle(true,0, _.get('strokeStyle'), _.get('lineJoin'));
			
			_.processAnimation = _.get('animation');
			
			if($.isFunction(_.get('doAnimation'))){
				_.doAnimation = _.get('doAnimation');
			}
			_.animationArithmetic = $.getAA(_.get('animation_timing_function'));
			
			var E = _.variable.event,comb=_.Combination,tot=!_.get('turn_off_touchmove')&&!comb, mCSS = !$.touch&&_.get('default_mouseover_css')&&!comb, O, AO,events = $.touch?['touchstart','touchmove']:['click','mousemove'];
			_.stopEvent = false;
			_.A_draw = comb&&_.processAnimation;
			
			/**
			 * register chart in Registry
			 */
			$.register(_);
			
			/**
			 * If Combination,ignore binding event because of root have been do this.
			 */
			if(!comb){
				events.each(function(it) {
					_.T.addEvent(it, function(e) {
						if (_.processAnimation||_.stopEvent)
							return;
						if(e.targetTouches&&e.targetTouches.length!=1){
							return;
						}
						_.fireEvent(_, it, [_, $.Event.fix(e)]);
					}, false);
				});
			}
			
			_.on(events[0], function(_, e) {
				_.components.eachAll(function(C) {
					if(C.ICHARTJS_CHART){
						/**
						 * meaning this component is a Combination Chart
						 */
						if(C.fireEvent(C,events[0], [C, e])){
							E.click = true;
							return false;
						}
					}else{
						/**
						 * generic component
						 */
						var M = C.isMouseOver(e);
						if (M.valid){
							E.click = true;
							C.fireEvent(C,'click', [C, e, M]);
							return !e.stopPropagation;
						}
					}
				});
				if(E.click){
					if(tot)
					e.event.preventDefault();
					E.click = false;
					return true;
				}
			});
			
			if(!$.touch||tot){
				_.on(events[1], function(_, e) {
					O = AO = false;
					_.components.eachAll(function(C) {
						if(C.ICHARTJS_CHART){
							/**
							 * meaning this component is a Combination Chart
							 */
							if(C.fireEvent(C,events[1], [C, e])){
								O = true;
								return false;
							}
						}else{
							var cE = C.variable.event, M = C.isMouseOver(e);
							if (M.valid) {
								O = O || C.atomic;
								if (!cE.mouseover) {
									cE.mouseover = true;
									C.fireEvent(C, 'mouseover', [C,e, M]);
								}
								C.fireEvent(C, 'mousemove', [C,e, M]);
								if(M.stop){
									return false;
								}
							} else {
								if (cE.mouseover) {
									cE.mouseover = false;
									C.fireEvent(C, 'mouseout', [C,e, M]);
								}
							}
							return !e.stopPropagation;
						}
					});
					if(E.mouseover){
						e.event.preventDefault();
						if (!O) {
							E.mouseover = false;
							_.fireEvent(_, 'mouseout', [_,e]);
						}
						return E.mouseover;
					}else{
						if(O){
							E.mouseover = O;
							_.fireEvent(_, 'mouseover', [_,e]);
						}
					}
				});
				/**
				 * defalut mouse style
				 */
				if (mCSS) {
					_.on('mouseover',function(){
						_.T.css("cursor", "pointer");
					}).on('mouseout',function(){
						_.T.css("cursor", "default");
					});
				}
			}
			/**
			 * clone config to sub_option
			 */
			$.applyIf(_.get('sub_option'), $.clone(['shadow','tip'], _.options,true));
			
			if(!_.Combination){
				/**
				 * push the background in it
				 */
				_.bg = new $.Custom({
					z_index:-1,
					drawFn:function(){
						_.T.box(0, 0, _.width, _.height, _.get('border'), _.get('f_color'),0,0,true);
					}
				});
				_.duration = ceil(_.get('animation_duration') * $.FRAME / 1000);
			}
			
			_.oneWay = $.emptyFn;
		},
		/**
		 * calculate chart's alignment
		 */
		originXY:function(_,x,y){
			var A = _.get('align');
			if (A == _.L) {
				_.pushIf(_.X, x[0]);
			} else if (A == _.R) {
				_.pushIf(_.X, x[1]);
			} else {
				_.pushIf(_.X, x[2]);
			}
			_.x = _.push(_.X, _.get(_.X) + _.get('offsetx'));
			_.y = _.push(_.Y, y[0]+ _.get('offsety'));
			
			return {
				x:_.x,
				y:_.y
			}
		},
		getPercent:function(v,T){
			return this.get('showpercent') ? (v / (T||this.total||1) * 100).toFixed(this.get('decimalsnum')) + '%' : v;
		},
		doActing:function(_,d,o,i,t){
			var f=!!_.get('communal_acting'),v=_.getPercent(d.value,d.total);
			/**
			 * store or restore the option
			 */
			_.push(f?'sub_option':'communal_acting',$.clone(_.get(f?'communal_acting':'sub_option'),true));
			/**
			 * merge the option
			 */
			$.merge(_.get('sub_option'),d);
			
			/**
			 * merge specific option
			 */
			$.merge(_.get('sub_option'),o);
			
			_.push('sub_option.value',v);
			_.push('sub_option.value_',d.value);
			
			if (_.get('sub_option.tip.enable')){
				_.push('sub_option.tip.text',t || (d.name + ' ' +v));
				_.push('sub_option.tip.name',d.name);
				_.push('sub_option.tip.index',i);
				_.push('sub_option.tip.value',d.value);
				_.push('sub_option.tip.total',d.total||_.total);
			}
		},
		register:function(c){
			c.id = $.uid(c.type);
			this.components.push(c);
			return c;
		},
		remove:function(_,c){
			if(c)
			_.components.each(function(C,i){
				if(c.id==C.id){
					_.components.splice(i,1);
					return false;
				}
			});
		},
		doConfig : function() {
			$.Chart.superclass.doConfig.call(this);
			var _ = this._();
			
			_.destroy(_);
			
			_.oneways.length =0;
			
			_.oneWay(_);
			
			/**
			 * for store the option of each item in chart
			 */
			_.push('communal_acting',0);
			
			if(!_.Combination){
				_.oneways.push(_.bg);
				_.push('r_originx', _.width - _.get('padding_right'));
				_.push('b_originy', _.height - _.get('padding_bottom'));
				
				_.applyGradient();
				
				if ($.isString(_.get('title'))) {
					_.push('title', $.applyIf({
						text : _.get('title')
					}, _.default_.title));
				}
				if ($.isString(_.get('subtitle'))) {
					_.push('subtitle', $.applyIf({
						text : _.get('subtitle')
					}, _.default_.subtitle));
				}
				
				if ($.isString(_.get('footnote'))) {
					_.push('footnote', $.applyIf({
						text : _.get('footnote')
					}, _.default_.footnote));
				}
				var H = 0, l = _.push('l_originx', _.get('padding_left')), t = _.push('t_originy', _.get('padding_top')), w = _.push('client_width', (_.width - _.get('hpadding'))), h;
				
				if (_.get('title.text') != ''){
					var st = _.get('subtitle.text') != '';
					H = st ? _.get('title.height') + _.get('subtitle.height') : _.get('title.height');
					t = _.push('t_originy', t + H);
					_.push('title.originx', l);
					_.push('title.originy', _.get('padding_top'));
					_.push('title.maxwidth', w);
					_.pushIf('title.width', w);
					_.title = new $.Text(_.get('title'), _);
					_.oneways.push(_.title);
					if (st) {
						_.push('subtitle.originx', l);
						_.push('subtitle.originy', _.get('padding_top') + _.get('title.height'));
						_.pushIf('subtitle.width', w);
						_.push('subtitle.maxwidth', w);
						_.subtitle = new $.Text(_.get('subtitle'), _);
						_.oneways.push(_.subtitle);
					}
				}
					
				if (_.get('footnote.text') != '') {
					var g = _.get('footnote.height');
					H += g;
					_.push('b_originy', _.get('b_originy') - g);
					_.push('footnote.originx', l);
					_.push('footnote.originy', _.get('b_originy'));
					_.push('footnote.maxwidth', w);
					_.pushIf('footnote.width', w);
					_.footnote = new $.Text(_.get('footnote'), _);
					_.oneways.push(_.footnote);
				}
				h = _.push('client_height', (_.get(_.H) - _.get('vpadding') - _.pushIf('other_height',H)));
				
				_.push('minDistance', min(w, h));
				_.push('maxDistance', max(w, h));
				_.push('centerx', l + w / 2);
				_.push('centery', t + h / 2);
			}
			
			/**
			 * TODO legend dosize?
			 */
			if (_.get('legend.enable')){
				_.legend = new $.Legend($.apply({
					maxwidth : _.get('client_width'),
					data : _.data
				}, _.get('legend')), _);
				_.oneways.push(_.legend);
			}
			
			_.push('sub_option.tip.wrap',_.push('tip.wrap', _.shell));
		}
	});
})($);
/**
 * @end
 */


	/**
	 * @overview the customize componment
	 * @component#$.Custom
	 * @extend#$.Component
	 */
	$.Custom = $.extend($.Component,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			$.Custom.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'custom';
			
			this.set({
				/**
				 * @cfg {Function} Specifies the customize function.(default to emptyFn)
				 */
				drawFn:$.emptyFn,
				configFn:$.emptyFn,
				/**
				 * @cfg {Function} Specifies the customize event valid function.(default to undefined)
				 */
				eventValid:undefined,
				/**
				 * @cfg {Boolean} If true when chart animating it also invoke darw.(default to true)
				 */
				animating_draw:true
			});
		},
		doDraw:function(_){
			_.get('drawFn').call(_,_);
		},
		isEventValid:function(e,_){
			if($.isFunction(this.get('eventValid')))
			return this.get('eventValid').call(this,e,_);
			return {valid:false};
		},
		doConfig:function(){
			$.Custom.superclass.doConfig.call(this);
			var _ = this._();
			_.A_draw = _.get('animating_draw');
			_.variable.animation = {
				animating:false,	
				time : 0
			};
			_.duration = 0;
			_.get('configFn').call(_,_);
		}
});
/**
 * @end
 */
/**
 * @overview this is inner use for axis
 * @component#$.Scale
 * @extend#$.Component
 */
$.Scale = $.extend($.Component, {
	configure : function() {

		/**
		 * invoked the super class's configuration
		 */
		$.Scale.superclass.configure.apply(this, arguments);

		/**
		 * indicate the component's type
		 */
		this.type = 'scale';

		this.set({
			/**
			 * @cfg {String} Specifies alignment of this scale.(default to 'left')
			 */
			position : 'left',
			/**
			 * @cfg {String} the axis's type(default to 'h') Available value are:
			 * @Option 'h' :horizontal
			 * @Option 'v' :vertical
			 */
			which : 'h',
			/**
			 * @cfg {Number} Specifies value of Baseline Coordinate.(default to 0)
			 */
			basic_value:0,
			/**
			 * @cfg {Boolean} indicate whether the grid is accord with scale.(default to true)
			 */
			scale2grid : true,
			/**
			 * @inner {Number}
			 */
			distance : undefined,
			/**
			 * @cfg {Number} Specifies the start coordinate scale value.(default to 0)
			 */
			start_scale : 0,
			/**
			 * @cfg {Number} Specifies the end coordinate scale value.Note either this or property of max_scale must be has the given value.(default to undefined)
			 */
			end_scale : undefined,
			/**
			 * @cfg {Number} Specifies the chart's minimal value
			 */
			min_scale : undefined,
			/**
			 * @cfg {Number} Specifies the chart's maximal value
			 */
			max_scale : undefined,
			/**
			 * @cfg {Number} Specifies the space of two scale.Note either this or property of scale_share must be has the given value.(default to undefined)
			 */
			scale_space : undefined,
			/**
			 * @cfg {Number} Specifies the number of scale on axis.(default to 5)
			 */
			scale_share : 5,
			/**
			 * @cfg {Boolean} True to display the scale line.(default to true)
			 */
			scale_enable : true,
			/**
			 * @cfg {Number} Specifies the size of brush(context.linewidth).(default to 1)
			 */
			scale_size : 1,
			/**
			 * @cfg {Number} Specifies the width(length) of scale.(default to 4)
			 */
			scale_width : 4,
			/**
			 * @cfg {String} Specifies the color of scale.(default to 4)
			 */
			scale_color : '#333333',
			/**
			 * @cfg {String} Specifies the align against axis.(default to 'center') When the property of which set to 'h',Available value are:
			 * @Option 'left'
			 * @Option 'center'
			 * @Option 'right' 
			 * When the property of which set to 'v', Available value are:
			 * @Option 'top'
			 * @Option 'center'
			 * @Option 'bottom'
			 */
			scaleAlign : 'center',
			/**
			 * @cfg {Array} the customize labels
			 */
			labels : [],
			/**
			 * @cfg {<link>$.Text</link>} Specifies label's option.
			 */
			label : {},
			/**
			 * @cfg {Number} Specifies the distance to scale.(default to 6)
			 */
			text_space : 6,
			/**
			 * @cfg {String} Specifies the align against axis.(default to 'left' or 'bottom' in v mode) When the property of which set to 'h',Available value are:
			 * @Option 'left'
			 * @Option 'right' When the property of which set to 'v', Available value are:
			 * @Option 'top'
			 * @Option 'bottom'
			 */
			textAlign : 'left',
			/**
			 * @cfg {Number} Specifies the number of decimal.this will change along with scale.(default to 0)
			 */
			decimalsnum : 0,
			/**
			 * @inner {String} the style of overlapping(default to 'none') Available value are:
			 * @Option 'square'
			 * @Option 'round'
			 * @Option 'none'
			 */
			join_style : 'none',
			/**
			 * @inner {Number}
			 */
			join_size : 2
		});

		this.registerEvent(
		/**
		 * @event Fires the event when parse text,you can return a object like this:{text:'',originx:100,originy:100} to override the given.
		 * @paramter string#text item's text
		 * @paramter int#originx coordinate-x of item's text
		 * @paramter int#originy coordinate-y of item's text
		 * @paramter int#index item's index
		 * @paramter boolean#last If last item
		 */
		'parseText');

	},
	isEventValid : function() {
		return {
			valid : false
		};
	},
	getScale:function(_){
		var u = [_.get('basic_value'),_.get('start_scale'),_.get('end_scale'),_.get('end_scale') - _.get('start_scale'),0];
		u[4] = $.inRange(u[1],u[2]+1,u[0])||$.inRange(u[2]-1,u[1],u[0]);
		return {
			range:u[4],
			basic:u[4]?(u[0]-u[1]) / u[3]:0,
			start : u[4]?u[0]:u[1],
			end : u[2],
			distance : u[3]
		}
	},
	/**
	 * from left to right,top to bottom
	 */
	doDraw : function(_) {
		if (_.get('scale_enable'))
			_.items.each(function(item) {
				_.T.line(item.x0, item.y0, item.x1, item.y1, _.get('scale_size'), _.get('scale_color'), false);
			});
		_.labels.each(function(l) {
			l.draw();
		});
	},
	doLayout:function(x,y,_){
		if (_.get('scale_enable'))
			_.items.each(function(item) {
				item.x0+=x;
				item.y0+=y;
				item.x1+=x;
				item.y1+=y;
			});
		_.labels.each(function(l) {
			l.doLayout(x,y,0,l);
		});
	},
	doConfig : function() {
		$.Scale.superclass.doConfig.call(this);
		
		var _ = this._(),abs = Math.abs,customL = _.get('labels').length, min_s = _.get('min_scale'), max_s = _.get('max_scale'), s_space = _.get('scale_space'), e_scale = _.get('end_scale'), start_scale = _.get('start_scale');

		_.items = [];
		_.labels = [];
		_.number = 0;

		if (customL > 0) {
			_.number = customL - 1;
		} else {
			/**
			 * startScale must less than minScale
			 */
			if (start_scale > min_s) {
				start_scale = _.push('start_scale', $.floor(min_s));
			}
			
			/**
			 * end_scale must greater than maxScale
			 */
			if (!$.isNumber(e_scale) || e_scale < max_s) {
				e_scale = $.ceil(max_s);
				e_scale = _.push('end_scale', (!e_scale&&!start_scale)?1:e_scale);
			}
			
			
			if (s_space && abs(s_space) < abs(e_scale - start_scale)) {
				_.push('scale_share', (e_scale - start_scale) / s_space);
			}
			
			_.number = _.push('scale_share', abs(_.get('scale_share')));
			
			/**
			 * value of each scale
			 */
			if (!s_space || s_space >( e_scale - start_scale)) {
				var W = ((e_scale - start_scale)+"").indexOf('.')+1,M=1;
				while(W>0){W--;M*=10;}
				s_space = _.push('scale', (e_scale - start_scale)*M / _.get('scale_share')/M);
			}
			
			if (parseInt(s_space)!=s_space && _.get('decimalsnum') == 0) {
				_.push('decimalsnum',(s_space+"").substring((s_space+"").indexOf('.')+1).length);
			}
		}
		
		/**
		 * the real distance of each scale
		 */
		_.push('distanceOne', _.get('valid_distance') / _.number);
		
		var text, x, y, x1 = 0, y1 = 0, x0 = 0, y0 = 0, tx = 0, ty = 0, w = _.get('scale_width'), w2 = w / 2, sa = _.get('scaleAlign'), ta = _.get('position'), ts = _.get('text_space'), tbl = '',aw = _.get('coo').get('axis.width');
		
		_.push('which', _.get('which').toLowerCase());
		_.isH = _.get('which') == 'h';
		if (_.isH) {
			if (sa == _.O) {
				y0 = -w;
			} else if (sa == _.C) {
				y0 = -w2;
				y1 = w2;
			} else {
				y1 = w;
			}

			if (ta == _.O) {
				ty = -ts-aw[0];
				tbl = _.B;
			} else {
				ty = ts+aw[2];
				tbl = _.O;
			}
			ta = _.C;
		} else {
			if (sa == _.L) {
				x0 = -w;
			} else if (sa == _.C) {
				x0 = -w2;
				x1 = w2;
			} else {
				x1 = w;
			}
			tbl = 'middle';
			if (ta == _.R) {
				ta = _.L;
				tx = ts+aw[1];
			} else {
				ta = _.R;
				tx = -ts-aw[3];
			}
		}
		/**
		 * valid width only applies when there is h,then valid_height only applies when there is v
		 */
		for ( var i = 0; i <= _.number; i++) {
			text = customL ? _.get('labels')[i] : (s_space * i + start_scale).toFixed(_.get('decimalsnum'));
			x = _.isH ? _.get('valid_x') + i * _.get('distanceOne') : _.x;
			y = _.isH ? _.y : _.get('valid_y') + _.get('valid_distance') - i * _.get('distanceOne');
			
			_.items.push({
				x : x,
				y : y,
				x0 : x + x0,
				y0 : y + y0,
				x1 : x + x1,
				y1 : y + y1
			});
			/**
			 * put the label into a Text?
			 */
			if(_.get('label'))
			_.labels.push(new $.Text($.applyIf($.apply(_.get('label'), $.merge({
				text : text,
				x : x,
				y : y,
				originx : x + tx,
				originy : y + ty
			}, _.fireEvent(_, 'parseText', [text, x + tx, y + ty, i, _.number == i]))), {
				textAlign : ta,
				textBaseline : tbl
			}), _));

			/**
			 * maxwidth = Math.max(maxwidth, _.T.measureText(text));
			 */
		}
	}
});

/**
 * @end
 */
$.Coordinate = {
	coordinate_ : function(g) {
		var _ = this._(),coo = _.get('coordinate');
		
		if(coo.ICHARTJS_OBJECT){
			_.x = _.push(_.X, coo.x);
			_.y = _.push(_.Y, coo.y);
			/**
			 * Imply it was illusive
			 */
			_.ILLUSIVE_COO = true;
			return coo;
		}
		/**
		 * Apply the coordinate feature
		 */
		var f = '85%',
			parse=$.parsePercent, 
			scale = _.get('coordinate.scale'),
			li=_.get('scaleAlign'),
			w = _.push('coordinate._width',parse(_.get('coordinate.width')||f,Math.floor(_.get('client_width'))));
			h = _.push('coordinate._height',parse(_.get('coordinate.height')||f,Math.floor(_.get('client_height')))-(_.is3D()?((_.get('coordinate.pedestal_height')||22) + (_.get('coordinate.board_deep')||20)):0));
			_.push('coordinate.valid_height_value',parse(_.get('coordinate.valid_height'),h));
			_.push('coordinate.valid_width_value',parse(_.get('coordinate.valid_width'),w));
			
		_.originXY(_,[_.get('l_originx'),_.get('r_originx') - w,_.get('centerx') - w / 2],[_.get('centery') - h / 2]);
		
		_.push('coordinate.originx', _.x);
		_.push('coordinate.originy', _.y);
		
		/**
		 * invoke call back
		 */
		if(g)g();
		
		if($.isObject(scale)){
			scale = [scale];
		}
		if($.isArray(scale)){
			var ST = _.dataType != 'stacked';
			scale.each(function(s){
				/**
				 * applies the percent shower
				 */
				if(_.get('percent')&&s.position==li){
					s = $.apply(s,{
						start_scale : 0,
						end_scale : 100,
						scale_space : 10,
						listeners:{
							parseText:function(t,x,y){
								return {text:t+'%'}
							}
						 }
					});
				}
				if(!s.start_scale||(ST&&s.start_scale>_.get('minValue')))
					s.min_scale = _.get('minValue');
				if(!s.end_scale||(ST&&s.end_scale<_.get('maxValue')))
					s.max_scale = _.get('maxValue');
			});
		}else{
			_.push('coordinate.scale',{
				position : li,
				scaleAlign : li,
				max_scale : _.get('maxValue'),
				min_scale : _.get('minValue')
			});
		}
		
		if (_.is3D()) {
			_.push('coordinate.xAngle_', _.get('xAngle_'));
			_.push('coordinate.yAngle_', _.get('yAngle_'));
			/**
			 * the Coordinate' Z is same as long as the column's
			 */
			_.push('coordinate.zHeight', _.get('zHeight') * _.get('bottom_scale'));
		}
		_.remove(_,_.coo);
		return _.register(new $[_.is3D()?'Coordinate3D':'Coordinate2D'](_.get('coordinate'), _));;
	}
}
/**
 * @overview the coordinate2d componment
 * @component#$.Coordinate2D
 * @extend#$.Component
 */
$.Coordinate2D = $.extend($.Component, {
	configure : function() {
		/**
		 * invoked the super class's configurationuration
		 */
		$.Coordinate2D.superclass.configure.apply(this, arguments);

		/**
		 * indicate the component's type
		 */
		this.type = 'coordinate2d';

		this.set({
			/**
			 * @inner {Number}
			 */
			sign_size : 12,
			/**
			 * @inner {Number}
			 */
			sign_space : 5,
			/**
			 * @cfg {Array} the option for scale.For details see <link>$.Scale</link>
			 */
			scale : [],
			/**
			 * @cfg {String/Number} Here,specify as '85%' relative to client width.(default to '85%')
			 */
			width:'85%',
			/**
			 * @cfg {String/Number} Here,specify as '85%' relative to client height.(default to '85%')
			 */
			height:'85%',
			/**
			 * @cfg {String/Number} Specifies the valid width,less than the width of coordinate.you can applies a percent value relative to width.(default to '100%')
			 */
			valid_width : '100%',
			/**
			 * @cfg {String/Number} Specifies the valid height,less than the height of coordinate.you can applies a percent value relative to width.(default to '100%')
			 */
			valid_height : '100%',
			/**
			 * @cfg {Number} Specifies the linewidth of the grid.(default to 1)
			 */
			grid_line_width : 1,
			/**
			 * @cfg {String} Specifies the color of the grid.(default to '#dbe1e1')
			 */
			grid_color : '#dbe1e1',
			/**
			 * @cfg {Object} Specifies the stlye of horizontal grid.(default to empty object).Available property are:
			 * @Option solid {Boolean} True to draw a solid line.else draw a dotted line.(default to true)
			 * @Option size {Number} Specifies size of line segment when solid is false.(default to 10)
			 * @Option fator {Number} Specifies the times to size(default to 1)
			 * @Option width {Number} Specifies the width of grid line.(default to 1)
			 * @Option color {String} Specifies the color of grid line.(default to '#dbe1e1')
			 */
			gridHStyle : {},
			/**
			 * @cfg {Object} Specifies the stlye of horizontal grid.(default to empty object).Available property are:
			 * @Option solid {Boolean} True to draw a solid line.else draw a dotted line.(default to true)
			 * @Option size {Number} Specifies size of line segment when solid is false.(default to 10)
			 * @Option fator {Number} Specifies the times to size(default to 1)
			 * @Option width {Number} Specifies the width of grid line.(default to 1)
			 * @Option color {String} Specifies the color of grid line.(default to '#dbe1e1')
			 */
			gridVStyle : {},
			/**
			 * @cfg {Boolean} True to display grid line.(default to true)
			 */
			gridlinesVisible : true,
			/**
			 * @cfg {Boolean} indicate whether the grid is accord with scale,on the premise of grids is not specify. this just give a convenient way bulid grid for default.and actual value depend on scale's scale2grid
			 */
			scale2grid : true,
			/**
			 * @cfg {Object} this is grid config for custom.there has two valid property horizontal and vertical.the property's sub property is: way:the manner calculate grid-line (default to 'share_alike') Available property are:
			 * @Option share_alike
			 * @Option given_value value: when property way apply to 'share_alike' this property mean to the number of grid's line.
			 *  when apply to 'given_value' this property mean to the distance each grid line(unit:pixel) . 
			 *  code will like: 
			 *  { 
			 *   horizontal: {way:'share_alike',value:10},
			 *   vertical: { way:'given_value', value:40 }
			 *   }
			 */
			grids : undefined,
			/**
			 * @cfg {Boolean} If True the grid line will be ignored when gird and axis overlap.(default to true)
			 */
			ignoreOverlap : true,
			/**
			 * @cfg {Boolean} If True the grid line will be ignored when gird and coordinate's edge overlap.(default to false)
			 */
			ignoreEdge : false,
			/**
			 * @inner {String} Specifies the label on x-axis
			 */
			xlabel : '',
			/**
			 * @inner {String} Specifies the label on y-axis
			 */
			ylabel : '',
			/**
			 * @cfg {String} Here,specify as false to make background transparent.(default to null)
			 */
			background_color : 0,
			/**
			 * @cfg {Boolean} True to stripe the axis.(default to true)
			 */
			striped : true,
			/**
			 * @cfg {String} Specifies the direction apply striped color.(default to 'v')Available value are:
			 * @Option 'h' horizontal
			 * @Option 'v' vertical
			 */
			striped_direction : 'v',
			/**
			 * @cfg {float(0.01 - 0.5)} Specifies the factor make color dark striped,relative to background-color,the bigger the value you set,the larger the color changed.(defaults to '0.01')
			 */
			striped_factor : 0.01,
			/**
			 * @cfg {Object} Specifies config crosshair.(default enable to false).For details see <link>$.CrossHair</link> Note:this has a extra property named 'enable',indicate whether crosshair available(default to false)
			 */
			crosshair : {
				enable : false
			},
			/**
			 * @cfg {Number}Override the default as -1 to make sure it at the bottom.(default to -1)
			 */
			z_index : -1,
			/**
			 * @cfg {Object} Specifies style for axis of this coordinate. Available property are:
			 * @Option enable {Boolean} True to display the axis.(default to true)
			 * @Option color {String} Specifies the color of each axis.(default to '#666666')
			 * @Option width {Number/Array} Specifies the width of each axis, If given the a array,there must be have have 4 element, like this:[1,0,0,1](top-right-bottom-left).(default to 1)
			 */
			axis : {
				enable : true,
				color : '#666666',
				width : 1
			}
		});
		
		this.scale = [];
		this.gridlines = [];
	},
	getScale : function(p,L) {
		var _ = this._(),r;
		for(var i=0;i<_.scale.length;i++){
			if(_.scale[i].get('position')==p){
				return _.scale[i].getScale(_.scale[i]);
			}
		}
		if(!L){
			if(p==_.L){
				p = _.R;
			}else if(p==_.R){
				p = _.L;
			}else if(p==_.O){
				p = _.B;
			}else{
				p = _.O;
			}
			return _.getScale(p,true);
		}
		throw new Error("there no valid scale");
	},
	isEventValid : function(e,_) {
		return {
			valid : e.x > _.x && e.x < (_.x + _.width) && e.y < _.y + _.height && e.y > _.y
		};
	},
	doDraw : function(_) {
		_.T.box(_.x, _.y, _.width, _.height, 0, _.get('f_color'));
		if (_.get('striped')) {
			var x, y, f = false, axis = _.get('axis.width'), c = $.dark(_.get('background_color'), _.get('striped_factor'),0);
		}
		var v = (_.get('striped_direction') == 'v');
		_.gridlines.each(function(g,i) {
			if (_.get('striped')) {
				if (f) {
					if (v)
						_.T.box(g.x1, g.y1 + g.width, g.x2 - g.x1, y - g.y1 - g.width, 0, c);
					else
						_.T.box(x + g.width, g.y2, g.x1 - x, g.y1 - g.y2, 0, c);
				}
				x = g.x1;
				y = g.y1;
				f = !f;
			}
		}).each(function(g) {
			if(!g.overlap){
				if(g.solid){
					_.T.line(g.x1, g.y1, g.x2, g.y2, g.width, g.color);
				}else{
					_.T.dotted(g.x1, g.y1, g.x2, g.y2, g.width, g.color,g.size,g.fator);
				}
			}
		});
		_.T.box(_.x, _.y, _.width, _.height, _.get('axis'), false, _.get('shadow'),true);
		_.scale.each(function(s) {
			s.draw()
		});
	},
	destroy:function(){
		if(this.crosshair){
			this.crosshair.destroy();
		}
	},
	doCrosshair:function(_){
		if (_.get('crosshair.enable')&&!_.crosshair) {
			_.push('crosshair.wrap', _.root.shell);
			_.push('crosshair.height', _.height);
			_.push('crosshair.width', _.width);
			_.push('crosshair.top', _.y);
			_.push('crosshair.left', _.x);
			_.crosshair = new $.CrossHair(_.get('crosshair'), _);
		}
	},
	doConfig : function() {
		$.Coordinate2D.superclass.doConfig.call(this);

		var _ = this._();
		
		/**
		 * this element not atomic because it is a container,so this is a particular case.
		 */
		_.atomic = false;

		_.width = _.get('_width');
		_.height = _.get('_height');
		_.valid_width = _.get('valid_width_value');
		_.valid_height = _.get('valid_height_value');
		/**
		 * apply the gradient color to f_color
		 */
		if (_.get('gradient') && $.isString(_.get('f_color'))) {
			_.push('f_color', _.T.avgLinearGradient(_.x, _.y, _.x, _.y + _.height, [_.get('dark_color'), _.get('light_color')]));
		}
		
		if (_.get('axis.enable')) {
			var aw = _.get('axis.width');
			if (!$.isArray(aw))
				_.push('axis.width', [aw, aw, aw, aw]);
		}else{
			_.push('axis.width', [0, 0, 0, 0]);
		}

		_.doCrosshair(_);
		var jp, cg = !!(_.get('gridlinesVisible') && _.get('grids')), hg = cg && !!_.get('grids.horizontal'), vg = cg && !!_.get('grids.vertical'), h = _.height, w = _.width, vw = _.valid_width, vh = _.valid_height, k2g = _.get('gridlinesVisible')
				&& _.get('scale2grid') && !(hg && vg), sw = _.push('x_start', _.x+(w - vw) / 2), sh = _.push('y_start', _.y+(h - vh) / 2), axis = _.get('axis.width');
		
		_.push('x_end', _.x + (w + vw) / 2);
		_.push('y_end', _.y + (h + vh) / 2);
		
		if (!$.isArray(_.get('scale'))) {
			if ($.isObject(_.get('scale')))
				_.push('scale', [_.get('scale')]);
			else
				_.push('scale', []);
		}
		
		_.get('scale').each(function(kd, i) {
			jp = kd['position'];
			jp = jp || _.L;
			jp = jp.toLowerCase();
			kd[_.X] = _.x;
			kd['coo'] = _;
			kd[_.Y] = _.y;
			kd['valid_x'] = sw;
			kd['valid_y'] = sh;
			kd['position'] = jp;
			/**
			 * calculate coordinate,direction,distance
			 */
			if (jp == _.O) {
				kd['which'] = 'h';
				kd['distance'] = w;
				kd['valid_distance'] = vw;
			} else if (jp == _.R) {
				kd['which'] = 'v';
				kd['distance'] = h;
				kd['valid_distance'] = vh;
				kd[_.X] += w;
				kd['valid_x'] += vw;
			} else if (jp == _.B) {
				kd['which'] = 'h';
				kd['distance'] = w;
				kd['valid_distance'] = vw;
				kd[_.Y] += h;
				kd['valid_y'] += vh;
			} else {
				kd['which'] = 'v';
				kd['distance'] = h;
				kd['valid_distance'] = vh;
			}
			_.scale.push(new $.Scale(kd, _.root));
		}, _);

		var iol = _.push('ignoreOverlap', _.get('ignoreOverlap') && _.get('axis.enable') || _.get('ignoreEdge'));

		if (iol) {
			if (_.get('ignoreEdge')) {
				var ignoreOverlap = function(w, x, y) {
					return w == 'v' ? (y == _.y) || (y == _.y + h) : (x == _.x) || (x == _.x + w);
				}
			} else {
				var ignoreOverlap = function(wh, x, y) {
					return wh == 'v' ? (y == _.y && axis[0] > 0) || (y == (_.y + h) && axis[2] > 0) : (x == _.x && axis[3] > 0) || (x == (_.x + w) && axis[1] > 0);
				}
			}
		}
		var g = {
				solid : true,
				size : 10,
				fator : 1,
				width : _.get('grid_line_width'),
				color : _.get('grid_color')
			},
			ghs = $.applyIf(_.get('gridHStyle'),g),
			gvs = $.applyIf(_.get('gridVStyle'),g);
		
		if (k2g) {
			var scale, x, y, p;
			_.scale.each(function(scale) {
				p = scale.get('position');
				/**
				 * disable,given specfiy grid will ignore scale2grid
				 */
				if ($.isFalse(scale.get('scale2grid')) || hg && scale.get('which') == 'v' || vg && scale.get('which') == 'h') {
					return;
				}
				x = y = 0;
				if (p == _.O) {
					y = h;
				} else if (p == _.R) {
					x = -w;
				} else if (p == _.B) {
					y = -h;
				} else {
					x = w;
				}
				
				scale.items.each(function(e) {
					if (iol)
					_.gridlines.push($.applyIf({
						overlap:ignoreOverlap.call(_, scale.get('which'), e.x, e.y),
						x1 : e.x,
						y1 : e.y,
						x2 : e.x + x,
						y2 : e.y + y
					},scale.isH?gvs:ghs));
				});
			});
		}
		if (vg) {
			var gv = _.get('grids.vertical');
			$.Assert.isTrue(gv['value']>0, 'vertical value');
			var d = w / gv['value'], n = gv['value'];
			if (gv['way'] == 'given_value') {
				n = d;
				d = gv['value'];
				d = d > w ? w : d;
			}

			for ( var i = 0; i <= n; i++) {
				if (iol)
				_.gridlines.push($.applyIf({
					overlap:ignoreOverlap.call(_, 'h', _.x + i * d, _.y),
					x1 : _.x + i * d,
					y1 : _.y,
					x2 : _.x + i * d,
					y2 : _.y + h,
					H : false,
					width : gvs.width,
					color : gvs.color
				},gvs));
			}
		}
		if (hg) {
			var gh = _.get('grids.horizontal');
			$.Assert.isTrue(gh['value']>0,'horizontal value');
			var d = h / gh['value'], n = gh['value'];
			if (gh['way'] == 'given_value') {
				n = d;
				d = gh['value'];
				d = d > h ? h : d;
			}

			for ( var i = 0; i <= n; i++) {
				if (iol)
				_.gridlines.push($.applyIf({
					overlap:ignoreOverlap.call(_, 'v', _.x, _.y + i * d),
					x1 : _.x,
					y1 : _.y + i * d,
					x2 : _.x + w,
					y2 : _.y + i * d,
					H : true,
					width : ghs.width,
					color : ghs.color
				},ghs));
			}
		}
	}
});
/**
 * @end
 */
/**
 * @overview the coordinate3d componment
 * @component#$.Coordinate3D
 * @extend#$.Coordinate2D
 */
$.Coordinate3D = $.extend($.Coordinate2D, {
	configure : function() {
		/**
		 * invoked the super class's configurationuration
		 */
		$.Coordinate3D.superclass.configure.apply(this, arguments);

		/**
		 * indicate the component's type
		 */
		this.type = 'coordinate3d';
		this.dimension = $._3D;

		this.set({
			/**
			 * @cfg {Number} Three-dimensional rotation X in degree(angle).socpe{0-90},Normally, this will accord with the chart.(default to 60)
			 */
			xAngle : 60,
			/**
			 * @cfg {Number} Three-dimensional rotation Y in degree(angle).socpe{0-90},Normally, this will accord with the chart.(default to 20)
			 */
			yAngle : 20,
			xAngle_ : undefined,
			yAngle_ : undefined,
			/**
			 * @cfg {Number} Required,Specifies the z-axis deep of this coordinate,Normally, this will given by chart.(default to 0)
			 */
			zHeight : 0,
			/**
			 * @cfg {Number} Specifies pedestal height of this coordinate.(default to 22)
			 */
			pedestal_height : 22,
			/**
			 * @cfg {Number} Specifies board deep of this coordinate.(default to 20)
			 */
			board_deep : 20,
			/**
			 * @cfg {Boolean} If true display the left board.(default to true)
			 */
			left_board:true,
			/**
			 * @cfg {Boolean} Override the default as true
			 */
			gradient : true,
			/**
			 * @cfg {float} Override the default as 0.18.
			 */
			color_factor : 0.18,
			/**
			 * @cfg {Boolean} Override the default as true.
			 */
			ignoreEdge : true,
			/**
			 * @cfg {Boolean} Override the default as false.
			 */
			striped : false,
			/**
			 * @cfg {String} Override the default as '#a4ad96'.
			 */
			grid_color : '#a4ad96',
			/**
			 * @cfg {String} Override the default as '#d6dbd2'.
			 */
			background_color : '#d6dbd2',
			/**
			 * @cfg {Number} Override the default as 4.
			 */
			shadow_offsetx : 4,
			/**
			 * @cfg {Number} Override the default as 2.
			 */
			shadow_offsety : 2,
			/**
			 * @cfg {Array} Specifies the style of board(wall) of this coordinate. 
			 * the length of array will be 6,if less than 6,it will instead of <link>background_color</link>.and each object option has two property. Available property are:
			 * @Option color the color of wall
			 * @Option alpha the opacity of wall
			 */
			wall_style : [],
			/**
			 * @cfg {Boolean} Override the default as axis.enable = false.
			 */
			axis : {
				enable : false
			}
		});
	},
	doDraw : function(_) {
		var w = _.width, h = _.height, xa = _.get('xAngle_'), ya = _.get('yAngle_'), zh = _.get('zHeight'), offx = _.get('z_offx'), offy = _.get('z_offy');
		/**
		 * bottom
		 */
		if(_.get('pedestal_height'))
		_.T.cube3D(_.x, _.y + h + _.get('pedestal_height'), xa, ya, false, w, _.get('pedestal_height'), zh * 3 / 2, _.get('axis.enable'), _.get('axis.width'), _.get('axis.color'), _.get('bottom_style'));
		/**
		 * board_style
		 */
		if(_.get('board_deep'))
		_.T.cube3D(_.x +offx, _.y+h - offy, xa, ya, false, w, h, _.get('board_deep'), _.get('axis.enable'), _.get('axis.width'), _.get('axis.color'), _.get('board_style'));
		
		_.T.cube3D(_.x, _.y + h, xa, ya, false, w, h, zh, _.get('axis.enable'), _.get('axis.width'), _.get('axis.color'), _.get('wall_style'));
		
		_.gridlines.each(function(g) {
			if(g.solid){
				if(_.get('left_board'))
				_.T.line(g.x1, g.y1, g.x1 + offx, g.y1 - offy,g.width, g.color);
				_.T.line(g.x1 + offx, g.y1 - offy, g.x2 + offx, g.y2 - offy, g.width, g.color);
			}else{
				if(_.get('left_board'))
				_.T.dotted(g.x1, g.y1, g.x1 + offx, g.y1 - offy,g.width, g.color,g.size,g.fator);
				_.T.dotted(g.x1 + offx, g.y1 - offy, g.x2 + offx, g.y2 - offy, g.width, g.color,g.size,g.fator);
			}
		});
		_.scale.each(function(s) {
			s.draw();
		});
	},
	doConfig : function() {
		$.Coordinate3D.superclass.doConfig.call(this);

		var _ = this._(),
			ws = _.get('wall_style'),
			bg = _.get('background_color')||'#d6dbd2',
			h = _.height,
			w = _.width,
			f = _.get('color_factor'),
			offx = _.push('z_offx',_.get('xAngle_') * _.get('zHeight')),
			offy = _.push('z_offy',_.get('yAngle_') * _.get('zHeight'));
			/**
			 * bottom-lower bottom-left
			 */
			while(ws.length < 6){
				ws.push({color : bg});
			}
			if(!_.get('left_board')){
				ws[2] = false;
				_.scale.each(function(s){
					s.doLayout(offx,-offy,s);
				});
			}
			
			/**
			 * right-front
			 */
			_.push('bottom_style', [{
				color : _.get('shadow_color'),
				shadow : _.get('shadow')
			}, false, false, {
				color : ws[3].color
			},false, {
				color : ws[3].color
			}]);
			
			/**
			 * right-top
			 */
			_.push('board_style', [false, false, false,{
				color : ws[4].color
			},{
				color : ws[5].color
			}, false]);
			
			/**
			 * lowerBottom-bottom-left-right-top-front
			 */
			if (_.get('gradient')) {
				if ($.isString(ws[0].color)) {
					ws[0].color = _.T.avgLinearGradient(_.x, _.y + h, _.x + w, _.y + h, [$.dark(ws[0].color,f/2+0.06),$.dark(ws[0].color,f/2+0.06)]);
				}
				if ($.isString(ws[1].color)) {
					ws[1].color = _.T.avgLinearGradient(_.x + offx, _.y - offy, _.x + offx, _.y + h - offy, [$.dark(ws[1].color,f),$.light(ws[1].color,f)]);
				}
				if ($.isString(ws[2].color)) {
					ws[2].color = _.T.avgLinearGradient(_.x, _.y, _.x, _.y + h, [$.light(ws[2].color,f/3),$.dark(ws[2].color,f)]);
				}
				_.get('bottom_style')[5].color = _.T.avgLinearGradient(_.x, _.y + h, _.x, _.y + h + _.get('pedestal_height'), [$.light(ws[3].color,f/2+0.06),$.dark(ws[3].color,f/2,0)]);
			}
			_.push('wall_style', [ws[0],ws[1],ws[2]]);
			
	}
});
/*
 * @end
 */


	/**
	 * @overview the base class of rectangle
	 * @component#$.Rectangle
	 * @extend#$.Component
	 */
	$.Rectangle = $.extend($.Component,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			$.Rectangle.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'rectangle';
			
			this.set({
				/**
				 * @cfg {Number} Specifies the width of this element in pixels,Normally,this will given by chart.(default to 0)
				 */
				width:0,
				/**
				 * @cfg {Number} Specifies the height of this element in pixels,Normally,this will given by chart.(default to 0)
				 */
				height:0,
				/**
				 * @cfg {Number} the distance of column's edge and value in pixels.(default to 4)
				 */
				value_space:4,
				/**
				 * @cfg {String} Specifies the text of this element,Normally,this will given by chart.(default to '')
				 */
				value:'',
				/**
				 * @cfg {<link>$.Text</link>} Specifies the config of label,set false to make label disabled.
				 */
				label : {},
				/**
				 * @cfg {String} Specifies the name of this element,Normally,this will given by chart.(default to '')
				 */
				name:'',
				/**
				 * @cfg {String} Specifies the tip alignment of chart(defaults to 'top').Available value are:
				 * @Option 'left'
				 * @Option 'right'
				 * @Option 'top'
				 * @Option 'bottom'
				 */
				tipAlign:'top',
				/**
				 * @cfg {String} Specifies the value's text alignment of chart(defaults to 'top') Available value are:
				 * @Option 'left'
				 * @Option 'right'
				 * @Option 'middle'
				 * @Option 'top'
				 * @Option 'bottom'
				 */
				valueAlign:'top',
				/**
				 * @cfg {Number} Override the default as 3
				 */
				shadow_blur:3,
				/**
				 * @cfg {Number} Override the default as -1
				 */
				shadow_offsety:-1
			});
			
			/**
			 * this element support boxMode
			 */
			this.atomic = true;
			
			this.registerEvent(
					/**
					 * @event Fires when parse this label's data.Return value will override existing.
					 * @paramter <link>$.Rectangle</link>#rect
					 * @paramter string#text the current label's text
					 */
					'parseText');
			
			this.label = null;
		},
		last:function(_){
			if(_.label)
				_.label.draw();
		},
		doDraw:function(_){
			_.drawRectangle();
		},
		doConfig:function(){
			$.Rectangle.superclass.doConfig.call(this);
			var _ = this._(),v = _.variable.event,vA=_.get('valueAlign');
			
			/**
			 * mouseover light
			 */
			$.taylor.light(_,v);
			
			_.width = _.get(_.W);
			_.height = _.get(_.H);
			
			var x = _.push('centerx',_.x + _.width/2),
				y = _.push('centery',_.y + _.height/2),
				a = _.C,
				b = 'middle',
				s=_.get('value_space');
			
			
			if(vA==_.L){
				a = _.R;
				x = _.x - s;
			}else if(vA==_.R){
				a = _.L;
				x =_.x + _.width + s;
			}else if(vA==_.B){
				y = _.y  + _.height + s;
				b = _.O;
			}else if(vA==_.O){
				y = _.y  - s;
				b = _.B;
			}
			
			if(_.get('label')){
				_.push('label.originx', x);
				_.push('label.originy', y);
				_.push('label.text',_.push('value',_.fireString(_, 'parseText', [_, _.get('value')], _.get('value'))));
				$.applyIf(_.get('label'),{
					textAlign : a,
					textBaseline : b,
					color:_.get('color')
				});
				_.label = new $.Text(_.get('label'), _);
			}
			
			if(_.get('tip.enable')){
				if(_.get('tip.showType')!='follow'){
					_.push('tip.invokeOffsetDynamic',false);
				}
				_.tip = new $.Tip(_.get('tip'),_);
			}
		}
});
/**
 *@end
 */	
	/**
	 * @overview the rectangle2d componment
	 * @component#$.Rectangle2D
	 * @extend#$.Rectangle
	 */
	$.Rectangle2D = $.extend($.Rectangle,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			$.Rectangle2D.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'rectangle2d';
			
			this.set({
				/**
				 * @cfg {Number} Override the default as -2
				 */
				shadow_offsety:-2
			});
			
		},
		drawRectangle:function(){
			var _ = this._();
			_.T.box(
				_.get(_.X),
				_.get(_.Y),
				_.get(_.W),
				_.get(_.H),
				_.get('border'),
				_.get('f_color'),
				_.get('shadow'));
		},
		isEventValid:function(e,_){
			return {valid:e.x>_.x&&e.x<(_.x+_.width)&&e.y<(_.y+_.height)&&e.y>(_.y)};
		},
		tipInvoke:function(){
			var _ = this._();
			/**
			 * base on event?
			 */
			return function(w,h){
				return {
					left:_.tipX(w,h),
					top:_.tipY(w,h)
				}
			}
		},
		doConfig:function(){
			$.Rectangle2D.superclass.doConfig.call(this);
			var _ = this._(),tipAlign = _.get('tipAlign');
			if(tipAlign==_.L||tipAlign==_.R){
				_.tipY = function(w,h){return _.get('centery') - h/2;};
			}else{
				_.tipX = function(w,h){return _.get('centerx') -w/2;};
			}
			
			if(tipAlign==_.L){
				_.tipX = function(w,h){return _.x - _.get('value_space') -w;};
			}else if(tipAlign==_.R){
				_.tipX = function(w,h){return _.x + _.width + _.get('value_space');};
			}else if(tipAlign==_.B){
				_.tipY = function(w,h){return _.y  +_.height+3;};
			}else{
				_.tipY = function(w,h){return _.y  - h -3;};
			}
			
			_.applyGradient();
			
			
		}
});
/**
 *@end
 */	
	/**
	 * @overview the rectangle3d componment
	 * @component#$.Rectangle3D
	 * @extend#$.Rectangle
	 */
	$.Rectangle3D = $.extend($.Rectangle,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			$.Rectangle3D.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'rectangle3d';
			this.dimension = $._3D;
			
			this.set({
				/**
				 * @cfg {Number} Specifies Three-dimensional z-axis deep in pixels.Normally,this will given by chart.(default to undefined)
				 */
				zHeight:undefined,
				/**
				 * @cfg {Number} Three-dimensional rotation X in degree(angle).socpe{0-90}.Normally,this will given by chart.(default to 60)
				 */
				xAngle:60,
				/**
				 * @cfg {Number} Three-dimensional rotation Y in degree(angle).socpe{0-90}.Normally,this will given by chart.(default to 20)
				 */
				yAngle:20,
				xAngle_:undefined,
				yAngle_:undefined,
				/**
				 * @cfg {Number} Override the default as 2
				 */
				shadow_offsetx:2
			});
			
		},
		drawRectangle:function(){
			var _ = this._();
			_.T.cube(
				_.get(_.X),
				_.get(_.Y),
				_.get('xAngle_'),
				_.get('yAngle_'),
				_.get(_.W),
				_.get(_.H),
				_.get('zHeight'),
				_.get('f_color'),
				_.get('border.enable'),
				_.get('border.width'),
				_.get('light_color'),
				_.get('shadow')
			);
		},
		isEventValid:function(e,_){
			return {valid:e.x>_.x&&e.x<(_.x+_.get(_.W))&&e.y<_.y+_.get(_.H)&&e.y>_.y};
		},
		tipInvoke:function(){
			var _ = this._();
			return function(w,h){
				return {
					left:_.topCenterX - w/2,
					top:_.topCenterY - h
				}
			}
		},
		doConfig:function(){
			$.Rectangle3D.superclass.doConfig.call(this);
			var _ = this._();
			_.pushIf("zHeight",_.get(_.W));
			
			_.topCenterX=_.x+(_.get(_.W)+_.get(_.W)*_.get('xAngle_'))/2;
			_.topCenterY=_.y-_.get(_.W)*_.get('yAngle_')/2-_.get('value_space');
			
			if(_.get('valueAlign')==_.O&&_.label){
				_.label.push('textx',_.topCenterX);
				_.label.push('texty',_.topCenterY);
			}
			
		}
});
/**
 *@end
 */	
/**
 * @overview this component use for config sector,this is a abstract class.
 * @component#$.Sector
 * @extend#$.Component
 */
$.Sector = $.extend($.Component, {
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Sector.superclass.configure.apply(this, arguments);

		/**
		 * indicate the component's type
		 */
		this.type = 'sector';

		this.set({
			/**
			 * @cfg {String} Specifies the value of this element,Normally,this will given by chart.(default to '')
			 */
			value : '',
			/**
			 * @cfg {String} Specifies the name of this element,Normally,this will given by chart.(default to '')
			 */
			name : '',
			/**
			 * @cfg {Boolean} True will not darw.(default to false)
			 */
			ignored : false,
			/**
			 * @inner {Boolean} True to make sector counterclockwise.(default to false)
			 */
			counterclockwise : false,
			/**
			 * @cfg {Number} Specifies the start angle of this sector.Normally,this will given by chart.(default to 0)
			 */
			startAngle : 0,
			/**
			 * @cfg {Number} middleAngle = (endAngle - startAngle)/2.Normally,this will given by chart.(default to 0)
			 */
			middleAngle : 0,
			/**
			 * @cfg {Number} Specifies the end angle of this sector.Normally,this will given by chart.(default to 0)
			 */
			endAngle : 0,
			/**
			 * @cfg {Number} Specifies total angle of this sector,totalAngle = (endAngle - startAngle).Normally,this will given by chart.(default to 0)
			 */
			totalAngle : 0,
			/**
			 * @inner {String} the event's name trigger pie bound(default to 'click').
			 */
			bound_event : 'click',
			/**
			 * @cfg {Boolean} True to bound this sector.(default to false)
			 */
			expand : false,
			/**
			 * @cfg {Number} Specifies the width when show a donut.only applies when it not 0.(default to 0)
			 */
			donutwidth : 0,
			/**
			 * @inner {Boolean} If true means just one piece could bound at same time.(default to false)
			 */
			mutex : false,
			/**
			 * @inner {Number} Specifies the offset when bounded.Normally,this will given by chart.(default to undefined)
			 */
			increment : undefined,
			label_length : undefined,
			/**
			 * @cfg {String} Specifies the gradient mode of background.(defaults to 'RadialGradientOutIn')
			 * @Option 'RadialGradientOutIn'
			 * @Option 'RadialGradientInOut'
			 */
			gradient_mode : 'RadialGradientOutIn',
			/**
			 * @cfg {Number} Specifies the threshold value in angle that applies mini_label.(default to 15)
			 */
			mini_label_threshold_angle : 15,
			/**
			 * @cfg {<link>$.Text</link>} Specifies the config of label.when mini_label is a object,there will as a <link>$.Text</link>.(default to false) note:set false to make minilabel disabled.
			 */
			mini_label : false,
			/**
			 * @cfg {<link>$.Label</link>} Specifies the config of label.when mini_label is unavailable,there will as a <link>$.Label</link>. note:set false to make label disabled.
			 */
			label : {},
			rounded:false
		});

		/**
		 * this element support boxMode
		 */
		this.atomic = true;

		this.registerEvent('changed',
		/**
		 * @event Fires when parse this label's data.Return value will override existing. Only valid when label is available
		 * @paramter <link>$.Sector</link>#sector the sector object
		 * @paramter string#text the current label's text
		 */
		'parseText');

		this.label = null;
		this.tip = null;
	},
	bound : function() {
		if (!this.expanded)
			this.toggle();
	},
	rebound : function() {
		if (this.expanded)
			this.toggle();
	},
	toggle : function() {
		this.fireEvent(this, this.get('bound_event'), [this]);
	},
	/**
	 * @method get the sector's dimension,return hold following property
	 * @property x:the x-coordinate of the center of the sector
	 * @property y:the y-coordinate of the center of the sector
	 * @property startAngle:The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
	 * @property endAngle:the ending angle, in radians
	 * @property middleAngle:the middle angle, in radians
	 * @return object
	 */
	getDimension : function() {
		var _ = this._();
		return {
			x : _.x,
			x : _.y,
			startAngle : _.get("startAngle"),
			middleAngle : _.get("middleAngle"),
			endAngle : _.get("endAngle")
		}
	},
	doDraw : function(_) {
		if (!_.get('ignored')) {
			if (_.label&&!_.get('mini_label')){
				_.label.draw();
			}
			_.drawSector();
			if (_.label&&_.get('mini_label')){
				_.label.draw();
			}
		}
	},
	doText : function(_, x, y) {
		_.push('label.originx', x);
		_.push('label.originy', y);
		_.push('label.textBaseline', 'middle');
		_.label = new $.Text(_.get('label'), _);
	},
	doLabel : function(_, x, y, Q, p, x0, y0,L) {
		_.push('label.originx', x);
		_.push('label.originy', y);
		_.push('label.quadrantd', Q);
		_.push('label.line_points', p);
		_.push('label.labelx', x0);
		_.push('label.labely', y0);
		_.push('label.smooth', L);
		_.push('label.angle', _.get('middleAngle')%(Math.PI*2));
		_.label = new $.Label(_.get('label'), _);
	},
	isLabel : function() {
		return this.get('label') && !this.get('mini_label');
	},
	doConfig : function() {
		$.Sector.superclass.doConfig.call(this);

		var _ = this._(), v = _.variable.event, f = _.get('label'),event=_.get('bound_event'),g;
		
		if(_.get('rounded')){
			_.push('startAngle',0);
			_.push('endAngle',Math.PI*2);
			return;
		}
		
		/**
		 * mouseover light
		 */
		$.taylor.light(_,v);
		
		_.push('totalAngle', _.get('endAngle') - _.get('startAngle'));

		if (f) {
			if (_.get('mini_label')) {
				if ((_.get('mini_label_threshold_angle') * Math.PI / 180) > _.get('totalAngle')) {
					_.push('mini_label', false);
				} else {
					$.apply(_.get('label'),_.get('mini_label'));
				}
			}
			
			_.push('label.text', _.fireString(_, 'parseText', [_,_.get('label.text')], _.get('label.text')));

			_.pushIf('label.border.color', _.get('border.color'));
			/**
			 * make the label's color in accord with sector
			 */
			_.push('label.scolor', _.get('background_color'));
		}

		_.variable.event.status = _.expanded = _.get('expand');
		
		if (_.get('tip.enable')) {
			if (_.get('tip.showType') != 'follow') {
				_.push('tip.invokeOffsetDynamic', false);
			}
			_.tip = new $.Tip(_.get('tip'), _);
		}
		
		v.poped = false;
		
		/**
		 *need test profile/time
		 */
		_.on(event, function() {
			v.poped = true;
			_.expanded = !_.expanded;
			_.redraw(event);
			v.poped = false;
		});
		
		_.on('beforedraw', function(a,b) {
			if(b==event){
				g = false;
				_.x = _.get(_.X);
				_.y = _.get(_.Y);
				if (_.expanded) {
					if (_.get('mutex') && !v.poped) {
						_.expanded = false;
						g = true;
					} else {
						_.x += _.get('inc_x');
						_.y -= _.get('inc_y');
					}
				}
				if (v.status != _.expanded) {
					_.fireEvent(_, 'changed', [_, _.expanded]);
					g = true;
					v.status = _.expanded;
				}
				if (f&&g)
					_.label.doLayout(_.get('inc_x') * (_.expanded ? 1 : -1), -_.get('inc_y') * (_.expanded ? 1 : -1),2,_.label);
			}
			return true;
		});

	}
});
/**
 * @end
 */
	/**
	 * @overview the sector2d componment
	 * @component#$.Sector2D
	 * @extend#$.Sector
	 */
	$.Sector2D = $.extend($.Sector,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			$.Sector2D.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'sector2d';
			
			this.set({
				/**
				 * @cfg {Float (0~)} Specifies the sector's radius.Normally,this will given by chart.(default to 0)
				 */
				radius:0
			});
			
		},
		drawSector:function(){
			this.T.sector(
					this.x,
					this.y,
					this.r,
					this.get('donutwidth'),
					this.get('startAngle'),
					this.get('endAngle'),
					this.get('f_color'),
					this.get('border.enable'),
					this.get('border.width'),
					this.get('border.color'),
					this.get('shadow'),
					this.get('counterclockwise'));
		},
		isEventValid:function(e,_){
			if(!_.get('ignored')){
				if(_.isLabel()&&_.label.isEventValid(e,_.label).valid){
					return {valid:true};
				}
				
				var r = $.distanceP2P(_.x,_.y,e.x,e.y),b=_.get('donutwidth');	
				if(_.r<r||(b&&(_.r-b)>r)){
					return {valid:false};
				}
				if($.angleInRange(_.get('startAngle'),_.get('endAngle'),$.atan2Radian(_.x,_.y,e.x,e.y))){
					return {valid:true};
				}
			}
			return {valid:false};
		},
		tipInvoke:function(){
			var _ = this,A = _.get('middleAngle'),Q  = $.quadrantd(A);
			return function(w,h){
				var P = $.p2Point(_.x,_.y,A,_.r*0.8)
				return {
					left:(Q>=1&&Q<=2)?(P.x - w):P.x,
					top:Q>=2?(P.y - h):P.y
				}
			}
		},
		doConfig:function(){
			$.Sector2D.superclass.doConfig.call(this);
			var _ = this._();
			_.r = _.get('radius');
			
			if(_.get('donutwidth')>_.r){
				_.push('donutwidth',0);
			}
			
			_.applyGradient(_.x-_.r,_.y-_.r,2*_.r*0.9,2*_.r*0.9);
			
			var A = _.get('middleAngle'),L = _.pushIf('increment',$.lowTo(5,_.r/10)),p2;
			_.push('inc_x',L * Math.cos(2 * Math.PI -A));
			_.push('inc_y',L * Math.sin(2 * Math.PI - A));
			L *=2;
			if(_.get('label')){
				if(_.get('mini_label')){
					P2 = $.p2Point(_.x,_.y,A,_.get('donutwidth')?_.r - _.get('donutwidth')/2:_.r*5/8);
					_.doText(_,P2.x,P2.y);
				}else{
					var Q  = $.quadrantd(A),
						P = $.p2Point(_.x,_.y,A,_.r + L),
						C1 = $.p2Point(_.x,_.y,A,_.r + L*0.6);
						P2 = $.p2Point(_.x,_.y,A,_.r);
					_.doLabel(_,P2.x,P2.y,Q,[{x:P2.x,y:P2.y},{x:C1.x,y:C1.y},{x:P.x,y:P.y}],P.x,P.y,L*0.4);
				}
			}
		}
});
/**
 * @end
 */
	/**
	 * @overview the sector3d componment
	 * @component#$.Sector3D
	 * @extend#$.Sector
	 */
	$.Sector3D = $.extend($.Sector,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			$.Sector3D.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'sector3d';
			this.dimension = $._3D;
			
			this.set({
				/**
				 * @cfg {Number}  Specifies major semiaxis of ellipse.Normally,this will given by chart.(default to 0)
				 */
				semi_major_axis:0,
				/**
				 * @cfg {Number} Specifies minor semiaxis of ellipse.Normally,this will given by chart.(default to 0)
				 */
				semi_minor_axis:0,
				/**
				 * @cfg {Float (0~)} Specifies the sector's height(thickness).Normally,this will given by chart.(default to 0)
				 */
				cylinder_height:0
			});
			
			this.proxy = true;
		},
		isEventValid:function(e,_){
			if(!_.get('ignored')){
				if(_.isLabel()&&_.label.isEventValid(e,_.label).valid){
						return {valid:true};
				}
				if(!$.inEllipse(e.x - _.x,e.y-_.y,_.a,_.b)){
					return {valid:false};
				}
				if($.angleZInRange(_.sA,_.eA,$.atan2Radian(_.x,_.y,e.x,e.y))){
					return {valid:true};
				}
			}
			return {valid:false};
		},
		p2p:function(x,y,a,z){
			return {
				x:x+this.a*Math.cos(a)*z,
				y:y+this.b*Math.sin(a)*z
			};
		},
		tipInvoke:function(){
			var _ =  this,A =  _.get('middleAngle'),Q  = $.quadrantd(A);
			return function(w,h){
				var P = _.p2p(_.x,_.y,A,0.6);
				return {
					left:(Q>=2&&Q<=3)?(P.x - w):P.x,
					top:Q>=3?(P.y - h):P.y
				}
			}
		},
		doConfig:function(){
			$.Sector3D.superclass.doConfig.call(this);
			var _ = this._(),ccw = _.get('counterclockwise'),mA = _.get('middleAngle');
			
			_.a = _.get('semi_major_axis');
			_.b = _.get('semi_minor_axis');
			_.h = _.get('cylinder_height');
			
			$.Assert.isTrue(_.a*_.b>=0,'major&minor');
			
			var pi2 = 2 * Math.PI,toAngle = function(A){
				while(A<0)A+=pi2;
				return Math.abs($.atan2Radian(0,0,_.a*Math.cos(A),ccw?(-_.b*Math.sin(A)):(_.b*Math.sin(A))));
			},
			L = _.pushIf('increment',$.lowTo(5,_.a/10));
			_.sA = toAngle.call(_,_.get('startAngle'));
			_.eA = toAngle.call(_,_.get('endAngle'));
			_.mA = toAngle.call(_,mA);
			
			_.push('inc_x',L * Math.cos(pi2 -_.mA));
			_.push('inc_y',L * Math.sin(pi2 - _.mA));
			L *=2;
			if(_.get('label')){
				if(_.get('mini_label')){
					var P3 = _.p2p(_.x,_.y,mA,0.5);
					_.doText(_,P3.x,P3.y);
				}else{
					var Q  = $.quadrantd(mA),
						P =  _.p2p(_.x,_.y,mA,L/_.a+1),
						C1 = _.p2p(_.x,_.y,mA,L*0.6/_.a+1),
						P2 = _.p2p(_.x,_.y,mA,1);
						_.doLabel(_,P2.x,P2.y,Q,[{x:P2.x,y:P2.y},{x:C1.x,y:C1.y},{x:P.x,y:P.y}],P.x,P.y,L*0.4);
					
				}
			}
		}
});
/**
 *@end
 */	
/**
 * @overview the base class of pie chart
 * @component#$.Pie
 * @extend#$.Chart
 */
$.Pie = $.extend($.Chart, {
	/**
	 * initialize the context for the pie
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Pie.superclass.configure.call(this);
		
		this.type = 'pie';

		this.set({
			/**
			 * @cfg {Float/String} Specifies the pie's radius.If given a percentage,it will relative to minDistance.(default to '100%')
			 */
			radius : '100%',
			/**
			 * @cfg {Number} initial angle for first sector.(default to 0)
			 */
			offset_angle : 0,
			/**
			 * @cfg {Number(0~90)} separate angle of all sector.(default to 0)
			 */
			separate_angle:0,
			/**
			 * @cfg {String} the event's name trigger pie pop(default to 'click')
			 */
			bound_event : 'click',
			/**
			 * @inner {Boolean} True to make sector counterclockwise.(default to false)
			 */
			counterclockwise : false,
			/**
			 * @cfg {Boolean} when label's position in conflict.auto layout.(default to true).
			 */
			intellectLayout : true,
			/**
			 * @cfg {Number} Specifies the distance in pixels when two label is incompatible with each other.(default 4),
			 */
			layout_distance : 4,
			/**
			 * @inner {Boolean} if it has animate when a piece popd (default to false)
			 */
			pop_animate : false,
			/**
			 * @cfg {Boolean} Specifies as true it means just one piece could pop (default to false)
			 */
			mutex : false,
			/**
			 * @cfg {Number} Specifies the length when sector bounded.(default to 1/8 radius,and minimum is 5),
			 */
			increment : undefined,
			/**
			 * @cfg {<link>$.Sector</link>} option of sector.Note,Pie2d depend on Sector2d and pie3d depend on Sector3d.For details see <link>$.Sector</link>
			 */
			sub_option : {
				label : {}
			}
		});

		this.registerEvent(
		/**
		 * @event Fires when this element' sector bounded
		 * @paramter <link>$.Sector2d</link>#sector
		 * @paramter string#name
		 * @paramter int#index
		 */
		'bound',
		/**
		 * @event Fires when this element' sector rebounded
		 * @paramter <link>$.Sector2d</link>#sector
		 * @paramter string#name
		 * @paramter int#index
		 */
		'rebound');
		this.sectors = [];
		this.components.push(this.sectors);
		this.ILLUSIVE_COO = true;
	},
	/**
	 * @method Toggle sector bound or rebound by a specific index.
	 * @paramter int#i the index of sector
	 * @return void
	 */
	toggle : function(i) {
		this.sectors[i || 0].toggle();
	},
	/**
	 * @method bound sector by a specific index.
	 * @paramter int#i the index of sector
	 * @return void
	 */
	bound : function(i) {
		this.sectors[i || 0].bound();
	},
	/**
	 * @method rebound sector by a specific index.
	 * @paramter int#i the index of sector
	 * @return void
	 */
	rebound : function(i) {
		this.sectors[i || 0].rebound();
	},
	/**
	 * @method Returns an array containing all sectors of this pie
	 * @return Array#the collection of sectors
	 */
	getSectors : function() {
		return this.sectors;
	},
	doAnimation : function(t, d,_) {
		var si = 0, cs = _.oA;
		_.sectors.each(function(s, i) {
			si = _.animationArithmetic(t, 0, s.get('totalAngle'), d);
			s.push('startAngle', cs);
			s.push('endAngle', cs+=si);
			if (!_.is3D())
				s.drawSector();
		});
		
		if (_.is3D()) {
			_.proxy.drawSector();
		}
	},
	parse : function(_) {
		_.data.each(function(d,i){
			_.doParse(_,d,i);
		},_);
		/**
		 * layout the label
		 */
		_.localizer(_);
	},
	doParse : function(_,d, i) {
		var t = d.name + ' ' +_.getPercent(d.value);
		
		_.doActing(_,d,null,i,t);
		
		_.push('sub_option.id', i);
		
		if(_.get('sub_option.label'))
		_.push('sub_option.label.text', t);
		
		_.push('sub_option.listeners.changed', function(se, st, i) {
			_.fireEvent(_, st ? 'bound' : 'rebound', [_, se.get('name')]);
		});
		
		_.sectors.push(_.doSector(_,d));
	},
	doSector:function(_){
		return  new $[_.sub](_.get('sub_option'), _);
	},
	dolayout : function(_,x,y,l,d,Q) {
		if(_.is3D()?$.inEllipse(_.get(_.X) - x,_.topY-y,_.a,_.b):$.distanceP2P(_.get(_.X),_.topY,x,y)<_.r){
			y=_.topY-y;
			l.push('labelx',_.get(_.X)+(Math.sqrt(_.r*_.r-y*y)*2+d)*(Q==0||Q==3?1:-1));
			l.localizer(l);
		}
	},
	localizer:function(_){
		if (_.get('intellectLayout')) {
			var unlayout = [],layouted = [],d = _.get('layout_distance'),Q,x,y;
			
			_.sectors.each(function(f, i) {
				if(f.isLabel())
				unlayout.push(f.label);
			});
			
			unlayout.sor(function(p, q) {
				return Math.abs(Math.sin(p.get('angle'))) - Math.abs(Math.sin(q.get('angle')))>0;
			});
			
			unlayout.each(function(la) {
				layouted.each(function(l) {
					x = l.labelx, y = l.labely;
					if ((la.labely <= y && (y - la.labely-1) < la.get(_.H)) || (la.labely > y && (la.labely - y-1) < l.get(_.H))) {
						if ((la.labelx <= x && (x - la.labelx) < la.get(_.W)) || (la.labelx > x && (la.labelx - x) < l.get(_.W))) {
							Q = la.get('quadrantd');
							la.push('labely', (la.get('labely')+ y - la.labely) + (la.get(_.H)  + d)*(Q>1?-1:1));
							la.localizer(la);
							_.dolayout(_,la.get('labelx'),la.get('labely')+la.get(_.H)/2*(Q<2?-1:1),la,d,Q);
						}
					}
				}, _);
				layouted.push(la);
			});
		}
	},
	doConfig : function() {
		$.Pie.superclass.doConfig.call(this);
		var _ = this._(),V,r = _.get('radius'), f = _.get('sub_option.label') ? 0.35 : 0.44,pi2=Math.PI*2;
		_.sub = _.is3D()?'Sector3D':'Sector2D';
		_.sectors.zIndex = _.get('z_index');
		_.sectors.length = 0;
		
		_.oA = $.angle2Radian(_.get('offset_angle'))%pi2;
		//If 3D,let it bigger
		if (_.is3D())
			f += 0.06;
		
		var L = _.data.length,sepa = $.angle2Radian($.between(0,90,_.get('separate_angle'))),PI = pi2-sepa,sepa=sepa/L,eA = _.oA+sepa, sA = eA;
		if(_.total==0){
			V  = 1/L;
		}
		_.data.each(function(d, i) {
			eA += (V||(d.value / _.total)) * PI;
			if (i == (L - 1)) {
				eA = pi2 + _.oA;
			}
			d.startAngle = sA;
			d.endAngle = eA;
			d.totalAngle = eA - sA;
			d.middleAngle = (sA + eA) / 2;
			sA = eA+sepa;
		}, _);
		
		_.r = r = $.parsePercent(r,Math.floor(_.get('minDistance') * f));
		
		_.topY = _.originXY(_,[r + _.get('l_originx'),_.get('r_originx') - r,_.get('centerx')],[_.get('centery')]).y;
		
		$.apply(_.get('sub_option'),$.clone([_.X, _.Y, 'bound_event','mutex','increment'], _.options));
		
	}
});
/** @end */

/**
 * @overview the pie2d componment
 * @component#@chart#$.Pie2D
 * @extend#$.Pie
 */
$.Pie2D = $.extend($.Pie, {
	/**
	 * initialize the context for the pie2d
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Pie2D.superclass.configure.call(this);

		this.type = 'pie2d';

	},
	doConfig : function() {
		$.Pie2D.superclass.doConfig.call(this);
		var _ = this._();
		/**
		 * quick config to all rectangle
		 */
		_.push('sub_option.radius',_.r)
		_.parse(_);
		
		
	}
});
$.register('Pie2D');
/**
 * @end
 */
/**
 * @overview the pie3d componment
 * @component#@chart#$.Pie3D
 * @extend#$.Pie
 */
$.Pie3D = $.extend($.Pie, {
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Pie3D.superclass.configure.apply(this, arguments);

		this.type = 'pie3d';
		this.dimension = $._3D;

		this.set({
			/**
			 * @cfg {Number} Three-dimensional rotation Z in degree(angle).socpe{0-90}.(default to 45)
			 */
			zRotate : 45,
			/**
			 * @cfg {Number} Specifies the pie's thickness in pixels.(default to 30)
			 */
			yHeight : 30
		});
		this.positive = true;
	},
	doSector : function(_,d) {
		_.push('sub_option.cylinder_height', (d.cylinder_height ? d.cylinder_height * _.get('zRotate_') : _.get('cylinder_height')));
		return new $[_.sub](_.get('sub_option'), _);
	},
	one:function(_){
		var layer,spaint,L = [],c = _.get('counterclockwise'), abs = function(n,M) {
			/**
			 * If M,close to pi/2,else pi*3/2
			 */
			return 1 + Math.sin(M?(n+Math.PI):n);
		}, t = 'startAngle', d = 'endAngle',Q,s,e
		/**
		 * If the inside layer visibile
		 */
		lay =function(C,g,z,f){
			Q = $.quadrantd(g);
			if (C &&(Q ==0 || Q ==3) || (!C && (Q ==2 || Q ==1))) {
				layer.push({
					g : g,
					z : g==z,
					x : f.x,
					y : f.y,
					a : f.a,
					b : f.b,
					color : $.dark(f.get('background_color')),
					h : f.h,
					F : f
				});
			}
		};

		_.proxy = new $.Custom({
			z_index : _.get('z_index') + 1,
			drawFn : function() {
				this.drawSector();
				L = [];
				_.sectors.each(function(s) {
					if (s.get('label')) {
						if (s.expanded)
							L.push(s.label);
						else
							s.label.draw();
					}
				});
				L.each(function(l) {
					l.draw()
				});
			}
		});
		_.proxy.drawSector = function() {
			/**
			 * paint bottom layer
			 */
			_.sectors.each(function(s, i) {
				_.T.ellipse(s.x, s.y + s.h, s.a, s.b, s.get(t), s.get(d), 0, s.get('border.enable'), s.get('border.width'), s.get('border.color'), s.get('shadow'), c, true);
			}, _);
			layer = [];
			spaint = [];
			/**
			 * sort layer
			 */
			_.sectors.each(function(f) {
				lay(c,f.get(t),f.get(d),f);
				lay(!c,f.get(d),f.get(t),f);
				spaint = spaint.concat($.visible(f.get(t),f.get(d),f));
			}, _);
			
			/**
			 * realtime sort
			 */
			layer.sor(function(p, q) {
				var r = abs(p.g) - abs(q.g);
				return r==0?p.z:r > 0;
			});

			/**
			 * paint inside layer
			 */
			layer.each(function(f, i) {
				_.T.sector3D.layerDraw.call(_.T, f.x, f.y, f.a + 0.5, f.b + 0.5, c, f.h, f.g, f.color);
			}, _);
			
			if(!_.processAnimation){	
				/**
				 * realtime sort
				 */
				spaint.sor(function(p, q) {
					return abs((p.s+p.e)/2,1) - abs((q.s+q.e)/2,1)<0;
				});
			}
			/**
			 * paint outside layer
			 */
			spaint.each(function(s, i) {
				_.T.sector3D.sPaint.call(_.T, s.f.x, s.f.y, s.f.a, s.f.b, s.s, s.e, c, s.f.h, s.f.get('f_color'));
			}, _);

			/**
			 * paint top layer
			 */
			_.sectors.each(function(s, i) {
				_.T.ellipse(s.x, s.y, s.a, s.b, s.get(t), s.get(d), s.get('f_color'), s.get('border.enable'), s.get('border.width'), s.get('border.color'), false, false, true);
			}, _);
		}
		_.one = $.emptyFn;
	},
	doConfig : function() {
		$.Pie3D.superclass.doConfig.call(this);
		var _ = this._(), z = $.angle2Radian(_.get('zRotate'));
		
		_.push('cylinder_height', _.get('yHeight') * _.push('zRotate_',Math.abs(Math.cos(z))));
		
		_.a = _.push('sub_option.semi_major_axis', _.r);
		_.b = _.push('sub_option.semi_minor_axis', _.r * Math.abs(Math.sin(z)));
		
		_.topY = _.push('sub_option.originy', _.get(_.Y) - _.get('yHeight') / 2);
		
		_.parse(_);
		
		_.one(_);
		
		_.components.push(_.proxy);
	}
});
$.register('Pie3D');
/**
 * @end
 */

/**
 * @overview this component use for show a donut chart
 * @component#@chart#$.Donut2D
 * @extend#$.Pie
 */
$.Donut2D = $.extend($.Pie, {
	/**
	 * initialize the context for the pie2d
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Donut2D.superclass.configure.call(this);
		
		this.type = 'donut2d';
		
		this.set({
			/**
			 * @cfg {Number} Specifies the width when show a donut.If the value lt 1,It will be as a percentage,value will be radius*donutwidth.only applies when it not 0.(default to 0.3)
			 */
			donutwidth : 0.3,
			/**
			 * @cfg {Object/String} Specifies the config of Center Text details see <link>$.Text</link>,If given a string,it will only apply the text.note:If the text is empty,then will not display
			 */
			center : {
				text:'',
				line_height:24,
				fontweight : 'bold',
				/**
				 * Specifies the font-size in pixels of center text.(default to 24)
				 */
				fontsize : 24
			}
		});
	},
	doConfig : function() {
		$.Donut2D.superclass.doConfig.call(this);
		
		var _ = this._(),d='donutwidth',r = _.r;
		/**
		 * quick config to all rectangle
		 */
		_.push('sub_option.radius',r)
		if(_.get(d)>0){
			if(_.get(d)<1){
				_.push(d,Math.floor(r*_.get(d)));
			}else if(_.get(d)>=r){
				_.push(d,0);
			}
			_.push('sub_option.donutwidth',_.get(d));
		}
		if ($.isString(_.get('center'))) {
			_.push('center', $.applyIf({
				text : _.get('center')
			}, _.default_.center));
		}
		
		if (_.get('center.text') != '') {
			_.push('center.originx',_.get(_.X));
			_.push('center.originy',_.get(_.Y));
			_.push('center.textBaseline','middle');
			_.center = new $.Text(_.get('center'), _);
			_.components.push(_.center);
		}
		
		_.parse(_);
	}
});
$.register('Donut2D');
/**
 * @end
 */
/**
 * @overview this class is abstract,use for config column
 * @component#$.Column
 * @extend#$.Chart
 */
$.Column = $.extend($.Chart, {
	/**
	 * initialize the context for the Column
	 */
	configure : function(config) {
		/**
		 * invoked the super class's configuration
		 */
		$.Column.superclass.configure.call(this);

		this.type = 'column';
		
		this.set({
			/**
			 * @cfg {<link>$.Coordinate2D</link>} the option for coordinate.
			 */
			coordinate : {},
			/**
			 * @cfg {Number} By default,if a width is not specified the chart will attempt to distribution in horizontally.(default to undefined)
			 */
			column_width : undefined,
			/**
			 * @cfg {Number} the space of each column.this option is readOnly.(default to undefined)
			 */
			column_space : undefined,
			/**
			 * @cfg {Number} the distance of column's bottom and text(default to 6)
			 */
			text_space : 6,
			/**
			 * @cfg {String} the align of scale(default to 'left') Available value are:
			 * @Option 'left'
			 * @Option 'right'
			 */
			scaleAlign : 'left',
			/**
			 * @cfg {<link>$.Rectangle</link>} Specifies option of rectangle.
			 */
			sub_option : {},
			/**
			 * @cfg {<link>$.Text</link>} Specifies option of label at bottom.
			 */
			label:{}
		});

		this.registerEvent();
		this.rectangles = [];
		this.labels = [];
		this.components.push(this.labels);
		this.components.push(this.rectangles);
	},
	doAnimation : function(t, d,_) {
		var h;
		_.labels.each(function(l){
			l.draw();
		});
		_.rectangles.each(function(r){
			h = Math.ceil(_.animationArithmetic(t, 0, r.height, d));
			r.push(_.Y, r.y + (r.height - h));
			r.push(_.H, h);
			r.drawRectangle();
		});
	},
	/**
	 * @method Returns the coordinate of this element.
	 * @return $.Coordinate2D
	 */
	getCoordinate:function(){
		return this.coo;
	},
	doLabel:function(_,id,text,x, y){
		_.labels.push(new $.Text($.apply(_.get('label'),{
			id : id,
			text : text,
			originx : x,
			originy : y
		}), _));
	},
	doParse : function(_,d, i, o) {
		_.doActing(_,d,o,i);
	},
	engine:function(_){
		var cw = _.get('column_width'),
		s = _.get('column_space'),
		S = _.coo.getScale(_.get('scaleAlign')),
		H = _.coo.valid_height, 
		w2 = cw / 2, 
		q = cw * (_.get('group_fator') || 0), 
		gw = _.dataType != 'complex'?(cw + s):(_.data.length * cw + s + (_.is3D() ? (_.data.length - 1) * q : 0)), 
		y0 = _.coo.get('y_end'),
		y = y0 - S.basic*H - (_.is3D()?(_.get('zHeight') * (_.get('bottom_scale') - 1) / 2 * _.get('yAngle_')):0),
		x = s+_.coo.get('x_start');
		y0 = y0 + _.get('text_space') + _.coo.get('axis.width')[2];
		/**
		 * applies paramters to subClass
		 */
		_.doEngine(_,cw,s,S,H,w2,q,gw,x,y,y0);
	},
	doConfig : function() {
		$.Column.superclass.doConfig.call(this);
		
		var _ = this._(),c = 'column_width',z = 'z_index';
		_.sub = _.is3D()?'Rectangle3D':'Rectangle2D';
		_.rectangles.length = 0;
		_.labels.length = 0;
		_.rectangles.zIndex = _.get(z);
		_.labels.zIndex = _.get(z) + 1;
		
		/**
		 * use option create a coordinate
		 */
		_.coo = $.Coordinate.coordinate_.call(_,function(){
			var L = _.data.length, W = _.get('coordinate.valid_width_value'),w_,hw,KL;
			if (_.dataType == 'complex') {
				KL = _.get('labels').length;
				L = KL * L + (_.is3D()?(L-1)*KL*_.get('group_fator'):0);
				w_= Math.floor(W / (KL + 1 + L));
				hw = _.pushIf(c,w_);
				KL +=1;
			}else{
				if(_.dataType == 'stacked'){
					L = _.get('labels').length;
				}
				w_= Math.floor(W*2 / (L * 3 + 1));
				hw = _.pushIf(c, w_);
				KL = L+1;
			}
			
			if(hw * L > W){
				hw = _.push(c, w_);
			}
			
			/**
			 * the space of two column
			 */
			_.push('column_space', (W - hw * L) / KL);
			
			if (_.is3D()) {
				_.push('zHeight', _.get(c) * _.get('zScale'));
				_.push('sub_option.zHeight', _.get('zHeight'));
				_.push('sub_option.xAngle_', _.get('xAngle_'));
				_.push('sub_option.yAngle_', _.get('yAngle_'));
			}
		});
		_.push('sub_option.width', _.get(c));
	}

});
/**
 * @end
 */
/**
 * @overview the column2d componment
 * @component#@chart#$.Column2D
 * @extend#$.Column
 */
$.Column2D = $.extend($.Column, {
	/**
	 * initialize the context for the Column2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Column2D.superclass.configure.call(this);

		this.type = 'column2d';
	},
	doEngine:function(_,cw,s,S,H,w2,q,gw,x,y,y0){
		var h;
		_.data.each(function(d, i) {
			h = (d.value - S.start) * H / S.distance;
			_.doParse(_,d, i, {
				id : i,
				originx :x + i * gw,
				originy : y  - (h>0? h :0),
				height : Math.abs(h)
			});
			_.rectangles.push(new $[_.sub](_.get('sub_option'), _));
			_.doLabel(_,i, d.name, x + gw * i + w2, y0);
		}, _);
	},
	doConfig : function() {
		$.Column2D.superclass.doConfig.call(this);
		
		/**
		 * start up engine
		 */
		this.engine(this);
		
	}
});
$.register('Column2D');
/**
 *@end 
 */
/**
 * @overview the column3d componment
 * @component#@chart#$.Column3D
 * @extend#$.Column2D
 */
$.Column3D = $.extend($.Column2D, {
	/**
	 * initialize the context for the Column3D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Column3D.superclass.configure.call(this);

		this.type = 'column3d';
		this.dimension = $._3D;

		this.set({
			/**
			 * @cfg {<link>$.Coordinate3D</link>} the option for coordinate.
			 */
			coordinate : {},
			/**
			 * @cfg {Number(0~90)} Three-dimensional rotation X in degree(angle).(default to 60)
			 */
			xAngle : 60,
			/**
			 * @cfg {Number(0~90)} Three-dimensional rotation Y in degree(angle).(default to 20)
			 */
			yAngle : 20,
			/**
			 * @cfg {Number} Three-dimensional z-axis deep factor.frame of reference is width.(default to 1)
			 */
			zScale : 1,
			/**
			 * @cfg {Number(1~)} Three-dimensional z-axis deep factor of pedestal.frame of reference is width.(default to 1.4)
			 */
			bottom_scale : 1.4
		});
	},
	doConfig : function() {
		$.Column3D.superclass.doConfig.call(this);
	}
});
$.register('Column3D');
/**
 *@end 
 */

/**
 * @overview this component will draw a cluster column2d chart.
 * @component#@chart#$.ColumnMulti2D
 * @extend#$.Column
 */
$.ColumnMulti2D = $.extend($.Column, {
	/**
	 * initialize the context for the ColumnMulti2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.ColumnMulti2D.superclass.configure.call(this);

		this.type = 'columnmulti2d';
		this.dataType = 'complex';

		this.set({
			/**
			 * @cfg {Array} the array of labels close to the axis
			 */
			labels : []
		});

	},
	doEngine:function(_,cw,s,S,H,w2,q,gw,x,y,y0){
		var h;
		_.columns.each(function(c, i) {
			c.item.each(function(d, j) {
				h = (d.value - S.start) * H / S.distance;
				_.doParse(_, d, j, {
					id : i + '_' + j,
					originx : x + j * (cw + q) + i * gw,
					originy : y - (h > 0 ? h : 0),
					height : Math.abs(h)
				});
				_.rectangles.push(new $[_.sub](_.get('sub_option'), _));
			}, _);

			_.doLabel(_, i, c.name, x - s * 0.5 + (i + 0.5) * gw, y0);
		}, _);
	},
	doConfig : function() {
		$.ColumnMulti2D.superclass.doConfig.call(this);

		/**
		 * start up engine
		 */
		this.engine(this);
	}
});
$.register('ColumnMulti2D');
/**
 * @end
 */

/**
 * @overview this component will draw a cluster column3d chart.
 * @component#@chart#$.ColumnMulti3D
 * @extend#$.ColumnMulti2D
 */
$.ColumnMulti3D = $.extend($.ColumnMulti2D, {
	/**
	 * initialize the context for the ColumnMulti3D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.ColumnMulti3D.superclass.configure.call(this);

		this.type = 'columnmulti3d';
		this.dataType = 'complex';
		this.dimension = $._3D;

		this.set({
			/**
			 * @cfg {Number(0~90)} Three-dimensional rotation X in degree(angle).(default to 60)
			 */
			xAngle : 60,
			/**
			 * @cfg {Number(0~90)} Three-dimensional rotation Y in degree(angle).(default to 20)
			 */
			yAngle : 20,
			/**
			 * @cfg {Number} Three-dimensional z-axis deep factor.frame of reference is width.(default to 1)
			 */
			zScale : 1,
			group_fator : 0.3,
			/**
			 * @cfg {Number(1~)} Three-dimensional z-axis deep factor of pedestal.frame of reference is width.(default to 1.4)
			 */
			bottom_scale : 1.4
		});
	},
	doConfig : function() {
		$.ColumnMulti3D.superclass.doConfig.call(this);


	}
});
$.register('ColumnMulti3D');
/**
 * @end
 */

/**
 * @overview the stacked column2d componment
 * @component#@chart#$.ColumnStacked2D
 * @extend#$.Column
 */
$.ColumnStacked2D = $.extend($.Column, {
	/**
	 * initialize the context for the ColumnStacked2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.ColumnStacked2D.superclass.configure.call(this);

		this.type = 'columnstacked2d';
		/**
		 * indicate the data structure
		 */
		this.dataType = 'stacked';
		
		this.set({
			/**
			 * @cfg {Boolean} Specifies as true to display with percent.(default to false)
			 */
			percent : false,
			/**
			 * @cfg {Array} the array of labels close to the axis
			 */
			labels : [],
			sub_option:{
				label:{color:'#ffffff'},
				valueAlign:'middle'
			}
		});
		
	},
	doEngine:function(_,cw,s,S,H,w2,q,gw,x,y,y0){
		var h0,h,v,p = _.get('percent');
		_.columns.each(function(c, i) {
			h0 = 0;
			v = p?100/c.total:1;
			c.item.each(function(d, j) {
				h = (d.value*v - S.start) * H / S.distance;
				d.total = c.total;
				_.doParse(_, d, j, {
					id : i + '_' + j,
					originx : x + i * gw,
					originy : y - (h > 0 ? h : 0)-h0,
					height : Math.abs(h)
				});
				h0 += h;
				_.rectangles.push(new $[_.sub](_.get('sub_option'), _));
			}, _);
			_.doLabel(_, i, c.name, x - s * 0.5 + (i + 0.5) * gw, y0);
		}, _);
	},
	doConfig : function() {
		$.ColumnStacked2D.superclass.doConfig.call(this);
		/**
		 * start up engine
		 */
		this.engine(this);
	}
});
$.register('ColumnStacked2D');
/**
 *@end 
 */
/**
 * @overview the stacked column2d componment
 * @component#@chart#$.ColumnStacked3D
 * @extend#$.ColumnStacked2D
 */
$.ColumnStacked3D = $.extend($.ColumnStacked2D, {
	/**
	 * initialize the context for the ColumnStacked2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.ColumnStacked3D.superclass.configure.call(this);

		this.type = 'columnstacked3d';
		/**
		 * indicate the data structure
		 */
		this.dataType = 'stacked';
		
		this.dimension = $._3D;
		
		this.set({
			/**
			 * @cfg {Boolean} Specifies as true to display with percent.(default to false)
			 */
			percent : false,
			sub_option:{
				label:{color:'#ffffff'},
				valueAlign:'middle'
			},
			/**
			 * @cfg {<link>$.Coordinate3D</link>} the option for coordinate.
			 */
			coordinate : {},
			/**
			 * @cfg {Number(0~90)} Three-dimensional rotation X in degree(angle).(default to 60)
			 */
			xAngle : 60,
			/**
			 * @cfg {Number(0~90)} Three-dimensional rotation Y in degree(angle).(default to 20)
			 */
			yAngle : 20,
			/**
			 * @cfg {Number} Three-dimensional z-axis deep factor.frame of reference is width.(default to 1)
			 */
			zScale : 1,
			/**
			 * @cfg {Number(1~)} Three-dimensional z-axis deep factor of pedestal.frame of reference is width.(default to 1.4)
			 */
			bottom_scale : 1.4
		});
		
		
	},
	doConfig : function() {
		$.ColumnStacked3D.superclass.doConfig.call(this);
	}
});
$.register('ColumnStacked3D');
/**
 *@end 
 */
/**
 * @overview this class is abstract,use for config bar
 * @component#$.Bar
 * @extend#$.Chart
 */
$.Bar = $.extend($.Chart, {
	/**
	 * initialize the context for the bar
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Bar.superclass.configure.call(this);

		this.type = 'bar';
		this.set({
			/**
			 * @cfg {<link>$.Coordinate2D</link>} the option for coordinate.
			 */
			coordinate : {
				striped_direction : 'h'
			},
			/**
			 * @cfg {Number} Specifies the width of each bar(default to calculate according to coordinate's height)
			 */
			bar_height : undefined,
			/**
			 * @cfg {Number} the space of each column.this option is readOnly.(default to undefined)
			 */
			bar_space : undefined,
			/**
			 * @cfg {Number} Specifies the distance of bar's bottom and text(default to 6)
			 */
			text_space : 6,
			/**
			 * @cfg {String} Specifies the align of scale(default to 'bottom') Available value are:
			 * @Option 'bottom'
			 */
			scaleAlign : 'bottom',
			/**
			 * @cfg {<link>$.Rectangle</link>} Specifies option of rectangle.
			 */
			sub_option : {},
			/**
			 * @cfg {<link>$.Text</link>} Specifies option of label at left.
			 */
			label : {}
		});
	},
	/**
	 * @method Returns the coordinate of this element.
	 * @return $.Coordinate2D
	 */
	getCoordinate : function() {
		return this.coo;
	},
	doLabel : function(_,id, text, x, y) {
		_.labels.push(new $.Text($.apply(_.get('label'), {
			id : id,
			text : text,
			textAlign : 'right',
			textBaseline : 'middle',
			originx : x,
			originy : y
		}), _));
	},
	doParse : function(_, d, i, o) {
		_.doActing(_, d, o,i);
	},
	engine:function(_){
		var bh = _.get('bar_height'),
		s = _.get('bar_space'),
		S = _.coo.getScale(_.get('scaleAlign')),
		W = _.coo.valid_width,
		h2 = bh / 2,
		gw =  _.dataType != 'complex'?bh + s:_.data.length * bh + s,
		x = _.coo.get('x_start')+ S.basic * W,
		x0 = _.coo.get(_.X) - _.get('text_space')-_.coo.get('axis.width')[3], 
		y0 = _.coo.get('y_start')+ s;
		
		_.doEngine(_,bh,s,S,W,h2,gw,x,x0,y0);
	},
	doAnimation : function(t, d,_) {
		_.labels.each(function(l) {
			l.draw();
		});
		_.rectangles.each(function(r) {
			r.push(_.W, Math.ceil(_.animationArithmetic(t, 0, r.width, d)));
			r.drawRectangle();
		});
	},
	doConfig : function() {
		$.Bar.superclass.doConfig.call(this);

		var _ = this._(), b = 'bar_height', z = 'z_index';
		
		_.rectangles = [];
		_.labels = [];
		_.rectangles.zIndex = _.get(z);
		_.labels.zIndex = _.get(z) + 1;
		_.components.push(_.labels);
		_.components.push(_.rectangles);
		
		/**
		 * use option create a coordinate
		 */
		_.coo = $.Coordinate.coordinate_.call(_,function(){
			var L = _.data.length, H = _.get('coordinate.valid_height_value'),h_,bh,KL;
			
			if (_.dataType == 'complex') {
				KL = _.get('labels').length;
				L = KL * L + (_.is3D()?(L-1)*KL*_.get('group_fator'):0);
				h_= Math.floor(H / (KL + 1 + L));
				bh = _.pushIf(b,h_);
				KL +=1;
			}else{
				if(_.dataType == 'stacked'){
					L = _.get('labels').length;
				}
				h_= Math.floor(H*2 / (L * 3 + 1));
				bh = _.pushIf(b, h_);
				KL = L+1;
			}
			
			if (bh * L > H) {
				bh = _.push(b, h_);
			}
			/**
			 * the space of two bar
			 */
			_.push('bar_space', (H - bh * L) / KL);
			
		});
		
		/**
		 * quick config to all rectangle
		 */
		_.push('sub_option.height', _.get(b));
		_.push('sub_option.valueAlign', _.R);
		_.push('sub_option.tipAlign', _.R);
	}

});
/**
 * @end
 */

/**
 * @overview this component will draw a bar2d chart.
 * @component#@chart#$.Bar2D
 * @extend#$.Bar
 */
$.Bar2D = $.extend($.Bar, {
	/**
	 * initialize the context for the pie
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Bar2D.superclass.configure.call(this);

		this.type = 'bar2d';

	},
	doEngine:function(_,bh,s,S,W,h2,gw,x,x0,y0){
		var w;
		_.data.each(function(d, i) {
			w = (d.value - S.start) * W / S.distance;
			_.doParse(_, d, i, {
				id : i,
				originy : y0 + i * gw,
				width : Math.abs(w),
				originx : x + (w > 0 ? 0 : -Math.abs(w))
			});

			_.rectangles.push(new $.Rectangle2D(_.get('sub_option'), _));
			_.doLabel(_,i, d.name, x0, y0 + i * gw + h2);
		}, _);
	},
	doConfig : function() {
		$.Bar2D.superclass.doConfig.call(this);
		/**
		 * start up engine
		 */
		this.engine(this);
	}
});
$.register('Bar2D');
/**
 * @end
 */

/**
 * @overview this component will draw a cluster bar2d chart.
 * @component#@chart#$.BarMulti2D
 * @extend#$.Bar
 */
$.BarMulti2D = $.extend($.Bar, {
	/**
	 * initialize the context for the BarMulti2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.BarMulti2D.superclass.configure.call(this);

		this.type = 'barmulti2d';
		this.dataType = 'complex';

		this.set({
			/**
			 * @cfg {Array} the array of labels close to the axis
			 */
			labels : []
		});
	},
	doEngine:function(_,bh,s,S,W,h2,gw,x,x0,y0){
		var w;
		_.columns.each(function(c, i) {
			c.item.each(function(d, j) {
				w = (d.value - S.start) * W / S.distance;
				_.doParse(_, d, j, {
					id : i + '_' + j,
					originy : y0 + j * bh + i * gw,
					width : Math.abs(w),
					originx: x+(w>0?0:-Math.abs(w))
				});
				_.rectangles.push(new $.Rectangle2D(_.get('sub_option'), _));
			}, _);
			_.doLabel(_,i, c.name, x0, y0 - s * 0.5 + (i + 0.5) * gw);
		}, _);
	},
	doConfig : function() {
		$.BarMulti2D.superclass.doConfig.call(this);
		/**
		 * start up engine
		 */
		this.engine(this);
	}
});
$.register('BarMulti2D');
/**
 * @end
 */

/**
 * @overview the stacked bar2d componment
 * @component#@chart#$.BarStacked2D
 * @extend#$.Bar
 */
$.BarStacked2D = $.extend($.Bar, {
	/**
	 * initialize the context for the BarStacked2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.BarStacked2D.superclass.configure.call(this);

		this.type = 'barstacked2d';
		/**
		 * indicate the data structure
		 */
		this.dataType = 'stacked';
		
		this.set({
			/**
			 * @cfg {Boolean} Specifies as true to display with percent.(default to false)
			 */
			percent : false,
			/**
			 * @cfg {Array} the array of labels close to the axis
			 */
			labels : [],
			sub_option:{
				label:{color:'#ffffff'},
				valueAlign:'middle'
			}
		});
		
	},
	doEngine:function(_,bh,s,S,W,h2,gw,x,x0,y0){
		var w0,w,v,p = _.get('percent');
		_.columns.each(function(c, i) {
			w0 = 0;
			v = p?100/c.total:1;
			c.item.each(function(d, j) {
				w = (d.value*v - S.start) * W / S.distance;
				d.total = c.total;
				_.doParse(_, d, j, {
					id : i + '_' + j,
					originy : y0 + i * gw,
					originx : x + (w > 0 ? 0 : -Math.abs(w))+w0,
					width : Math.abs(w)
				});
				w0 += w;
				_.rectangles.push(new $.Rectangle2D(_.get('sub_option'), _));
			}, _);
			_.doLabel(_, i, c.name,x0, y0 - s * 0.5 + (i + 0.5) * gw);
		}, _);
	},
	doConfig : function() {
		$.BarStacked2D.superclass.doConfig.call(this);
		
		this.push('sub_option.valueAlign', this.C);
		/**
		 * start up engine
		 */
		this.engine(this);
	}
});
$.register('BarStacked2D');
/**
 *@end 
 */
/**
 * @overview the line segment componment
 * @component#$.LineSegment
 * @extend#$.Component
 */
$.LineSegment = $.extend($.Component, {
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.LineSegment.superclass.configure.apply(this, arguments);

		/**
		 * indicate the component's type
		 */
		this.type = 'linesegment';

		this.set({
			/**
			 * @cfg {Number} Specifies the default linewidth of the canvas's context in this element.(defaults to 1)
			 */
			brushsize : 1,
			/**
			 * @cfg {Boolean} If true there show a point when Line-line intersection(default to true)
			 */
			intersection : true,
			/**
			 * @cfg {<link>$.Text</link>} Specifies the config of label,set false to make label disabled.
			 */
			label : {},
			/**
			 * @cfg {String} Specifies the shape of two line segment' point(default to 'round').Only applies when intersection is true Available value are:
			 * @Option 'round'
			 */
			sign : 'round',
			/**
			 * @cfg {String} Specifies the bgcolor when applies a Area.If not given,use lighter bgcolor of line.(default to null)
			 */
			area_color:null,
			/**
			 * @cfg {Boolean} If true the centre of point will be hollow.(default to true)
			 */
			hollow : true,
			/**
			 * @cfg {Boolean} If true the color of the centre of point will be hollow_color.else will be background_color.(default to true)
			 */
			hollow_inside:true,
			/**
			 * @cfg {String} Specifies the bgcolor when hollow applies true.(default to '#FEFEFE')
			 */
			hollow_color : '#FEFEFE',
			/**
			 * @cfg {Boolean} If true Line will smooth.(default to false)
			 */
			smooth : false,
			/**
			 * @cfg {Number} Specifies smoothness of line will be.(default to 1.5)
			 * 1 means control points midway between points, 2 means 1/3 from the point,formula is 1/(smoothing + 1) from the point
			 */
			smoothing : 1.5,
			/**
			 * @cfg {Number} Specifies the size of point.(default size 6).Only applies when intersection is true
			 */
			point_size : 6,
			/**
			 * @inner {Array} the set of points to compose line segment
			 */
			points : [],
			/**
			 * @inner {Boolean} If true the event accord width coordinate.(default to false)
			 */
			keep_with_coordinate : false,
			/**
			 * @cfg {Number} Override the default as 1
			 */
			shadow_blur : 1,
			/**
			 * @cfg {Number} Override the default as 1
			 */
			shadow_offsety : 1,
			/**
			 * @inner {Number} Specifies the space between two point
			 */
			point_space : 0,
			/**
			 * @inner {Object} reference of coordinate
			 */
			coordinate : null,
			/**
			 * @cfg {Number} Specifies the valid range of x-direction.(default to 0)
			 */
			event_range_x : 0,
			/**
			 * @cfg {Boolean} If true tip show when the mouse must enter the valid distance of axis y.(default to false)
			 */
			limit_y : false,
			/**
			 * @cfg {Number} Specifies the space between the tip and point.(default to 2)
			 */
			tip_offset : 2,
			/**
			 * @cfg {Number} Specifies the valid range of y-direction.(default to 0)
			 */
			event_range_y : 0
		});
		
		this.registerEvent(
				/**
				 * @event Fires when parse this label's data.Return value will override existing.
				 * @paramter <link>$.LineSegment</link>#seg
				 * @paramter string#text the current label's text
				 */
				'parseText');
		
		this.tip = null;
	},
	drawSegment : function() {
		var _ = this._();
		
		_.polygons.each(function(P){
			_.T.polygon.apply(_.T,P);
		});
		
		_.T.shadowOn(_.get('shadow'));
		
		_.lines.each(function(L){
			_.T.lineArray.apply(_.T,L);
		});
		
		_.intersections.each(function(I){
			if(_.sign_plugin){
				_.sign_plugin_fn.apply(_,I);
			}else{
				_.T.round0.apply(_.T,I);
			}
		});
		
		if (_.get('shadow')) {
			_.T.shadowOff();
		}
	},
	doDraw : function(_) {
		_.drawSegment();
		if (_.get('label')) {
			_.labels.each(function(l){
				l.draw();
			});
		}
	},
	isEventValid : function() {},
	tipInvoke : function() {
		var x = this.x, y = this.y, o = this.get('tip_offset'), s = this.get('point_size') + o, _ = this;
		return function(w, h, m) {
			var l = m.left, t = m.top;
			l = ((_.tipPosition < 3 && (l - w - x - o > 0)) || (_.tipPosition > 2 && (l - w - x - o < 0))) ? l - (w + o) : l + o;
			t = _.tipPosition % 2 == 0 ? t + s : t - h - s;
			return {
				left : l,
				top : t
			}
		}
	},
	PP:function(_,p,x1,y1,x2,y2){
		if(_.get('area')){
			_.polygons.push([_.get('area_color')||_.get('light_color2'),0,_.get('brushsize'),0,0,_.get('area_opacity'),_.get('smooth')?p:[{x:x1,y:y1}].concat(p.concat([{x:x2,y:y2}])),_.get('smooth'),_.get('smoothing') || 1.5,[{x:x1,y:y1},{x:x2,y:y2}]]);
		}
	},
	parse:function(_){
		_.polygons = [];
		_.lines = [];
		_.intersections = [];
		_.labels = [];
		
		var p = _.get('points'),I = _.get('intersection'),L = !!_.get('label'), T = [],Q  = false,s = _.get('smooth'), sm = _.get('smoothing') || 1.5, b = _.get('f_color'), h = _.get('brushsize'),ps=_.get('point_size');
		
		if (I) {
			var f = _.getPlugin('sign'),g=b,j = _.get('hollow_color');
			_.sign_plugin = $.isFunction(f);
			_.sign_plugin_fn = f;
			if(_.get('hollow_inside')){
				g = j;
				j = b;
			}
		}
		
		p.each(function(q){
			q.x_ = q.x;
			q.y_ = q.y;
			if(!q.ignored&&L){
				_.push('label.originx', q.x);
				_.push('label.originy', q.y-ps/2-1);
				_.push('label.text',_.fireString(_, 'parseText', [_, q.value],q.value));
				$.applyIf(_.get('label'),{
					textBaseline : 'bottom',
					color:_.get('f_color')
				});
				_.labels.push(new $.Text(_.get('label'), _))
			}
			if(q.ignored&&Q){
				_.lines.push([T, h, b, s, sm]);
				_.PP(_,T,T[0].x,_.y,T[T.length-1].x,_.y);
				T = [];
				Q = false;
			}else if(!q.ignored){
				T.push(q);
				Q = true;
			}
			
			if(I&&!q.ignored){
				_.intersections.push(_.sign_plugin?[_.T,_.get('sign'),q,ps,q.color||g,q.hollow_color||j]:_.get('hollow')?[q, ps/2-h+1,q.color||g,h+1,q.hollow_color||j]:[q,ps/2,q.color||g]);
			}
			
		});
		
		if(T.length){
			_.lines.push([T, h, b, s, sm]);
			_.PP(_,T,T[0].x,_.y,T[T.length-1].x,_.y);
		}
	},
	doConfig : function() {
		$.LineSegment.superclass.doConfig.call(this);
		$.Assert.isTrue(this.get('point_space')>0,'point_space');

		var _ = this._(), ps = _.get('point_size') * 3 / 2, sp = _.get('point_space'), ry = _.get('event_range_y'), rx = _
				.get('event_range_x'), heap = _.get('tipInvokeHeap'), p = _.get('points'), N = _.get('name');
		
		_.parse(_);
		
		if (rx <= 0||rx > sp / 2) {
			rx = _.push('event_range_x', sp / 2);
		}
		
		if (ry == 0) {
			ry = _.push('event_range_y', ps/2);
		}
		
		if (_.get('tip.enable')) {
			/**
			 * _ use for tip coincidence
			 */
			_.on('mouseover', function(c,e, m) {
				heap.push(_);
				_.tipPosition = heap.length;
			}).on('mouseout', function(c,e, m) {
				heap.pop();
			});
			_.push('tip.invokeOffsetDynamic', true);
			_.tip = new $.Tip(_.get('tip'), _);
		}
		
		var c = _.get('coordinate'), ly = _.get('limit_y'), k = _.get('keep_with_coordinate'), valid = function(p0, x, y) {
			if (!p0.ignored&&Math.abs(x - (p0.x)) < rx && (!ly || (ly && Math.abs(y - (p0.y)) < ry))) {
				return true;
			}
			return false;
		}, to = function(i) {
			return {
				valid : true,
				name : N,
				value : p[i].value,
				text : p[i].text,
				top : p[i].y,
				left : p[i].x,
				i:i,
				hit : true
			};
		};
		
		/**
		 * override the default method
		 */
		_.isEventValid = function(e) {
			if (c && !c.isEventValid(e,c).valid) {
				return {
					valid : false
				};
			}
			
			var ii = Math.floor((e.x - _.x) / sp);
			
			if (ii < 0 || ii >= (p.length - 1)) {
				ii = $.between(0, p.length - 1, ii);
				if (valid(p[ii], e.x, e.y))
					return to(ii);
				else
					return {
						valid : k
					};
			}
			
			/**
			 * calculate the pointer's position will between which two point?this function can improve location speed
			 */
			for ( var i = ii; i <= ii + 1; i++) {
				if (valid(p[i], e.x, e.y))
					return to(i);
			}
			return {
				valid : k
			};
		}

	}
});
/**
 *@end
 */	

/**
 * @overview this class is abstract,use for config line
 * @component#$.Line
 * @extend#$.Chart
 */
$.Line = $.extend($.Chart, {
	/**
	 * initialize the context for the line
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Line.superclass.configure.call(this);

		this.type = 'line';

		this.set({
			/**
			 * @cfg {Number} Specifies the default linewidth of the canvas's context in this element.(defaults to 1)
			 */
			brushsize : 1,
			/**
			 * @cfg {Object} the option for coordinate
			 */
			coordinate : {
				axis : {
					width : [0, 0, 2, 2]
				}
			},
			/**
			 * @cfg {Object} Specifies config crosshair.(default enable to false).For details see <link>$.CrossHair</link> Note:this has a extra property named 'enable',indicate whether crosshair available(default to false)
			 */
			crosshair : {
				enable : false
			},
			/**
			 * @cfg {Function} when there has more than one linesegment,you can use tipMocker make them as a tip.(default to null)
			 * @paramter Array tips the array of linesegment's tip
			 * @paramter int the index of data
			 * @return String
			 */
			tipMocker:null,
			/**
			 * @cfg {Number(0.0~1.0)} If null,the position there will follow the points.If given a number,there has a fixed postion,0 is top,and 1 to bottom.(default to null)
			 */
			tipMockerOffset:null,
			/**
			 * @cfg {String} the align of scale.(default to 'left') Available value are:
			 * @Option 'left'
			 * @Option 'right'
			 */
			scaleAlign : 'left',
			/**
			 * @cfg {String} the align of label.(default to 'bottom') Available value are:
			 * @Option 'top,'bottom'
			 */
			labelAlign : 'bottom',
			/**
			 * @cfg {Array} the array of labels close to the axis
			 */
			labels : [],
			/**
			 * @inner {Number} the distance of column's bottom and text.(default to 6)
			 */
			label_space : 6,
			/**
			 * @inner {Boolean} if the point are proportional space.(default to true)
			 */
			proportional_spacing : true,
			/**
			 * @cfg {<link>$.LineSegment</link>} the option for linesegment.
			 */
			sub_option : {},
			/**
			 * {Object} the option for legend.
			 */
			legend : {
				sign : 'bar'
			},
			/**
			 * @cfg {<link>$.Text</link>} Specifies option of label at bottom.
			 */
			label:{}
		});

		this.registerEvent(
		/**
		 * @event Fires when parse this element'data.Return value will override existing.
		 * @paramter object#data the data of one linesegment
		 * @paramter object#v the point's value
		 * @paramter int#x coordinate-x of point
		 * @paramter int#y coordinate-y of point
		 * @paramter int#index the index of point
		 * @return Object object Detail:
		 * @property text the text of point
		 * @property x coordinate-x of point
		 * @property y coordinate-y of point
		 */
		'parsePoint');

		this.lines = [];
		this.components.push(this.lines);
	},
	/**
	 * @method Returns the coordinate of this element.
	 * @return $.Coordinate2D
	 */
	getCoordinate : function() {
		return this.coo;
	},
	doConfig : function() {
		$.Line.superclass.doConfig.call(this);
		var _ = this._(), s = _.data.length == 1;
		
		_.lines.length = 0;
		_.lines.zIndex = _.get('z_index');
		
		var k = _.pushIf('sub_option.keep_with_coordinate',s);
		if (_.get('crosshair.enable')) {
			_.pushIf('crosshair.hcross', s);
			_.push('crosshair.invokeOffset', function(e, m) {
				/**
				 * TODO how fire muti line?now fire by first line
				 */
				var r = _.lines[0].isEventValid(e);
				return r.valid ? r : k;
			});
		}
		
		if(!_.Combination){
			_.push('coordinate.crosshair', _.get('crosshair'));
			_.pushIf('coordinate.scale',[{
				position : _.get('scaleAlign'),
				max_scale : _.get('maxValue')
			}, {
				position : _.get('labelAlign'),
				start_scale : 1,
				scale : 1,
				end_scale : _.get('maxItemSize'),
				labels : _.get('labels'),
				label:_.get('label')
			}]);
		}
		
		/**
		 * use option create a coordinate
		 */
		_.coo = $.Coordinate.coordinate_.call(_);
		
		if(_.Combination){
			_.coo.push('crosshair', _.get('crosshair'));
			_.coo.doCrosshair(_.coo);
		}
		
		var vw = _.coo.valid_width,nw=vw,size=_.get('maxItemSize') - 1,M=vw / (size),ps=_.get('point_space');
		
		if (_.get('proportional_spacing')){
			if(ps&&ps<M){
				nw = size*ps;
			}else{
				_.push('point_space',M);
			}
		}
		
		_.push('sub_option.width', nw);
		_.push('sub_option.height', _.coo.valid_height);
		
		_.push('sub_option.originx', _.coo.get('x_start')+(vw-nw)/2);
		_.push('sub_option.originy', _.coo.get('y_end'));
		
		if (_.get('tip.enable')){
			if(!_.mocker&&$.isFunction(_.get('tipMocker'))){
				_.push('sub_option.tip.enable', false);
				_.push('tip.invokeOffsetDynamic', true);
				var U,x=_.coo.get(_.X),y=_.coo.get(_.Y),H=_.coo.height,f = _.get('tipMockerOffset'),r0,r,r1;
				f = $.isNumber(f)?(f<0?0:(f>1?1:f)):null;
				_.push('tip.invokeOffset',function(w,h,m){
					if(f!=null){
						m.top = y+(H-h)*f;
					}else{
						m.top = m.maxTop-(m.maxTop-m.minTop)/3-h;
						if(h>H||y>m.top){
							m.top = y;
						}
					}
					return {
						left:(m.left - w - x  > 5)?m.left-w-5:m.left+5,
						top:m.top
					}
				});
				/**
				 * proxy the event parseText
				 */
				var p = _.get('tip.listeners.parseText');
				if(p)
				delete _.get('tip.listeners').parseText;
				_.mocker = new $.Custom({
					eventValid:function(e){
						r = _.lines[0].isEventValid(e);
						r.hit = r0 != r.i;
						if(r.valid){
							r0 = r.i;
							U = [];
							_.lines.each(function(l,i){
								r1 = l.isEventValid(e);
								if(i==0){
									r.minTop = r.maxTop = r1.top;
								}else{
									r.minTop = Math.min(r.minTop,r1.top);
									r.maxTop = Math.max(r.maxTop,r1.top);
								}
								U.push(p?p(null,r1.name,r1.value,r1.text,r1.i):(r1.name+' '+r1.value));
							});
							r.text = _.get('tipMocker').call(_,U,r.i)||'tipMocker not return';
						}
						return r.valid ? r : false;
					}
				});
				new $.Tip(_.get('tip'),_.mocker);
				_.register(_.mocker);
			}
		}
		_.pushIf('sub_option.area_opacity',_.get('area_opacity'));
	}

});
/**
 * @end
 */

/**
 * @overview this component will draw a line2d chart.
 * @component#@chart#$.LineBasic2D
 * @extend#$.Line
 */
$.LineBasic2D = $.extend($.Line, {
	/**
	 * initialize the context for the LineBasic2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.LineBasic2D.superclass.configure.call(this);

		this.type = 'basicline2d';

		this.tipInvokeHeap = [];
	},
	doAnimation : function(t, d,_) {
		_.lines.each(function(l){
			l.get('points').each(function(p){
				p.y = l.y - Math.ceil(_.animationArithmetic(t, 0, l.y - p.y_, d));
			});
			l.drawSegment();
		});
	},
	doConfig : function() {
		$.LineBasic2D.superclass.doConfig.call(this);
		var _ = this._();
		
		/**
		 * get the max/min scale of this coordinate for calculated the height
		 */
		var S, H = _.coo.valid_height, sp = _.get('point_space'), points, x, y, 
		ox = _.get('sub_option.originx'), oy, p;
		
		_.push('sub_option.tip.showType', 'follow');
		_.push('sub_option.coordinate', _.coo);
		_.push('sub_option.tipInvokeHeap', _.tipInvokeHeap);
		_.push('sub_option.point_space', sp);
		_.data.each(function(d, i) {
			S = _.coo.getScale(d.scaleAlign||_.get('scaleAlign'));
			oy = _.get('sub_option.originy')- S.basic*H;
			points = [];
			d.value.each(function(v, j) {
				x = sp * j;
				y = (v - S.start) * H / S.distance;
				p = {
					x : ox + x,
					y : oy - y,
					value : v,
					text : d.name+' '+v
				};
				$.merge(p, _.fireEvent(_, 'parsePoint', [d, v, x, y, j,S]));
				points.push(p);
			}, _);
			/**
			 * merge the option
			 */
			$.merge(_.get('sub_option'),d);
			
			_.push('sub_option.points', points);
			_.push('sub_option.brushsize', d.linewidth || d.line_width);
			_.lines.push(new $.LineSegment(_.get('sub_option'), _));
		}, this);
	}
});
$.register('LineBasic2D');
/**
 * @end
 */

/**
 * @overview the area2d componment
 * @component#@chart#$.Area2D
 * @extend#$.LineBasic2D
 */
$.Area2D = $.extend($.LineBasic2D, {
	/**
	 * initialize the context for the area2d
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		$.Area2D.superclass.configure.call(this);

		this.type = 'area2d';

		this.set({
			/**
			 * @cfg {Float} Specifies the opacity of this area.(default to 0.3)
			 */
			area_opacity : 0.3
		});

	},
	doConfig : function() {
		/**
		 * must apply the area's config before
		 */
		this.push('sub_option.area', true);
		$.Area2D.superclass.doConfig.call(this);
	}
});
$.register('Area2D');
/**
 * @end
 */

})(iChart);
define("ichart", function(){});

/*global setImmediate: false, setTimeout: false, console: false */
(function () {

    var async = {};

    // global on the server, window in the browser
    var root, previous_async;

    root = this;
    if (root != null) {
        previous_async = root.async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    function only_once(fn) {
        var called = false;
        return function() {
            if (called) throw new Error("Callback was already called.");
            called = true;
            fn.apply(root, arguments);
        }
    }

    //// cross-browser compatiblity functions ////

    var _each = function (arr, iterator) {
        if (arr.forEach) {
            return arr.forEach(iterator);
        }
        for (var i = 0; i < arr.length; i += 1) {
            iterator(arr[i], i, arr);
        }
    };

    var _map = function (arr, iterator) {
        if (arr.map) {
            return arr.map(iterator);
        }
        var results = [];
        _each(arr, function (x, i, a) {
            results.push(iterator(x, i, a));
        });
        return results;
    };

    var _reduce = function (arr, iterator, memo) {
        if (arr.reduce) {
            return arr.reduce(iterator, memo);
        }
        _each(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    };

    var _keys = function (obj) {
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////
    if (typeof process === 'undefined' || !(process.nextTick)) {
        if (typeof setImmediate === 'function') {
            async.nextTick = function (fn) {
                // not a direct alias for IE10 compatibility
                setImmediate(fn);
            };
            async.setImmediate = async.nextTick;
        }
        else {
            async.nextTick = function (fn) {
                setTimeout(fn, 0);
            };
            async.setImmediate = async.nextTick;
        }
    }
    else {
        async.nextTick = process.nextTick;
        if (typeof setImmediate !== 'undefined') {
            async.setImmediate = setImmediate;
        }
        else {
            async.setImmediate = async.nextTick;
        }
    }

    async.each = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        _each(arr, function (x) {
            iterator(x, only_once(function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback(null);
                    }
                }
            }));
        });
    };
    async.forEach = async.each;

    async.eachSeries = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        var iterate = function () {
            iterator(arr[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback(null);
                    }
                    else {
                        iterate();
                    }
                }
            });
        };
        iterate();
    };
    async.forEachSeries = async.eachSeries;

    async.eachLimit = function (arr, limit, iterator, callback) {
        var fn = _eachLimit(limit);
        fn.apply(null, [arr, iterator, callback]);
    };
    async.forEachLimit = async.eachLimit;

    var _eachLimit = function (limit) {

        return function (arr, iterator, callback) {
            callback = callback || function () {};
            if (!arr.length || limit <= 0) {
                return callback();
            }
            var completed = 0;
            var started = 0;
            var running = 0;

            (function replenish () {
                if (completed >= arr.length) {
                    return callback();
                }

                while (running < limit && started < arr.length) {
                    started += 1;
                    running += 1;
                    iterator(arr[started - 1], function (err) {
                        if (err) {
                            callback(err);
                            callback = function () {};
                        }
                        else {
                            completed += 1;
                            running -= 1;
                            if (completed >= arr.length) {
                                callback();
                            }
                            else {
                                replenish();
                            }
                        }
                    });
                }
            })();
        };
    };


    var doParallel = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.each].concat(args));
        };
    };
    var doParallelLimit = function(limit, fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [_eachLimit(limit)].concat(args));
        };
    };
    var doSeries = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.eachSeries].concat(args));
        };
    };


    var _asyncMap = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (err, v) {
                results[x.index] = v;
                callback(err);
            });
        }, function (err) {
            callback(err, results);
        });
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function (arr, limit, iterator, callback) {
        return _mapLimit(limit)(arr, iterator, callback);
    };

    var _mapLimit = function(limit) {
        return doParallelLimit(limit, _asyncMap);
    };

    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.reduce = function (arr, memo, iterator, callback) {
        async.eachSeries(arr, function (x, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };
    // inject alias
    async.inject = async.reduce;
    // foldl alias
    async.foldl = async.reduce;

    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, function (x) {
            return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };
    // foldr alias
    async.foldr = async.reduceRight;

    var _filter = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    // select alias
    async.select = async.filter;
    async.selectSeries = async.filterSeries;

    var _reject = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (!v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);

    var _detect = function (eachfn, arr, iterator, main_callback) {
        eachfn(arr, function (x, callback) {
            iterator(x, function (result) {
                if (result) {
                    main_callback(x);
                    main_callback = function () {};
                }
                else {
                    callback();
                }
            });
        }, function (err) {
            main_callback();
        });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);

    async.some = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (v) {
                    main_callback(true);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(false);
        });
    };
    // any alias
    async.any = async.some;

    async.every = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (!v) {
                    main_callback(false);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(true);
        });
    };
    // all alias
    async.all = async.every;

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                var fn = function (left, right) {
                    var a = left.criteria, b = right.criteria;
                    return a < b ? -1 : a > b ? 1 : 0;
                };
                callback(null, _map(results.sort(fn), function (x) {
                    return x.value;
                }));
            }
        });
    };

    async.auto = function (tasks, callback) {
        callback = callback || function () {};
        var keys = _keys(tasks);
        if (!keys.length) {
            return callback(null);
        }

        var results = {};

        var listeners = [];
        var addListener = function (fn) {
            listeners.unshift(fn);
        };
        var removeListener = function (fn) {
            for (var i = 0; i < listeners.length; i += 1) {
                if (listeners[i] === fn) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        };
        var taskComplete = function () {
            _each(listeners.slice(0), function (fn) {
                fn();
            });
        };

        addListener(function () {
            if (_keys(results).length === keys.length) {
                callback(null, results);
                callback = function () {};
            }
        });

        _each(keys, function (k) {
            var task = (tasks[k] instanceof Function) ? [tasks[k]]: tasks[k];
            var taskCallback = function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    _each(_keys(results), function(rkey) {
                        safeResults[rkey] = results[rkey];
                    });
                    safeResults[k] = args;
                    callback(err, safeResults);
                    // stop subsequent errors hitting callback multiple times
                    callback = function () {};
                }
                else {
                    results[k] = args;
                    async.setImmediate(taskComplete);
                }
            };
            var requires = task.slice(0, Math.abs(task.length - 1)) || [];
            var ready = function () {
                return _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true) && !results.hasOwnProperty(k);
            };
            if (ready()) {
                task[task.length - 1](taskCallback, results);
            }
            else {
                var listener = function () {
                    if (ready()) {
                        removeListener(listener);
                        task[task.length - 1](taskCallback, results);
                    }
                };
                addListener(listener);
            }
        });
    };

    async.waterfall = function (tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor !== Array) {
            var err = new Error('First argument to waterfall must be an array of functions');
            return callback(err);
        }
        if (!tasks.length) {
            return callback();
        }
        var wrapIterator = function (iterator) {
            return function (err) {
                if (err) {
                    callback.apply(null, arguments);
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    async.setImmediate(function () {
                        iterator.apply(null, args);
                    });
                }
            };
        };
        wrapIterator(async.iterator(tasks))();
    };

    var _parallel = function(eachfn, tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            eachfn.map(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            eachfn.each(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.parallel = function (tasks, callback) {
        _parallel({ map: async.map, each: async.each }, tasks, callback);
    };

    async.parallelLimit = function(tasks, limit, callback) {
        _parallel({ map: _mapLimit(limit), each: _eachLimit(limit) }, tasks, callback);
    };

    async.series = function (tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            async.mapSeries(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.eachSeries(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.iterator = function (tasks) {
        var makeCallback = function (index) {
            var fn = function () {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            };
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        };
        return makeCallback(0);
    };

    async.apply = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(
                null, args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    var _concat = function (eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function (x, cb) {
            fn(x, function (err, y) {
                r = r.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, r);
        });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        if (test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.whilst(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doWhilst = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            if (test()) {
                async.doWhilst(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.until = function (test, iterator, callback) {
        if (!test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.until(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doUntil = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            if (!test()) {
                async.doUntil(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.queue = function (worker, concurrency) {
        if (concurrency === undefined) {
            concurrency = 1;
        }
        function _insert(q, data, pos, callback) {
            if(data.constructor !== Array) {
                data = [data];
            }
            _each(data, function(task) {
                var item = {
                    data: task,
                    callback: typeof callback === 'function' ? callback : null
                };

                if (pos) {
                    q.tasks.unshift(item);
                } else {
                    q.tasks.push(item);
                }

                if (q.saturated && q.tasks.length === concurrency) {
                    q.saturated();
                }
                async.setImmediate(q.process);
            });
        }

        var workers = 0;
        var q = {
            tasks: [],
            concurrency: concurrency,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
                _insert(q, data, false, callback);
            },
            unshift: function (data, callback) {
                _insert(q, data, true, callback);
            },
            process: function () {
                if (workers < q.concurrency && q.tasks.length) {
                    var task = q.tasks.shift();
                    if (q.empty && q.tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    var next = function () {
                        workers -= 1;
                        if (task.callback) {
                            task.callback.apply(task, arguments);
                        }
                        if (q.drain && q.tasks.length + workers === 0) {
                            q.drain();
                        }
                        q.process();
                    };
                    var cb = only_once(next);
                    worker(task.data, cb);
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            }
        };
        return q;
    };

    async.cargo = function (worker, payload) {
        var working     = false,
            tasks       = [];

        var cargo = {
            tasks: tasks,
            payload: payload,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
                if(data.constructor !== Array) {
                    data = [data];
                }
                _each(data, function(task) {
                    tasks.push({
                        data: task,
                        callback: typeof callback === 'function' ? callback : null
                    });
                    if (cargo.saturated && tasks.length === payload) {
                        cargo.saturated();
                    }
                });
                async.setImmediate(cargo.process);
            },
            process: function process() {
                if (working) return;
                if (tasks.length === 0) {
                    if(cargo.drain) cargo.drain();
                    return;
                }

                var ts = typeof payload === 'number'
                    ? tasks.splice(0, payload)
                    : tasks.splice(0);

                var ds = _map(ts, function (task) {
                    return task.data;
                });

                if(cargo.empty) cargo.empty();
                working = true;
                worker(ds, function () {
                    working = false;

                    var args = arguments;
                    _each(ts, function (data) {
                        if (data.callback) {
                            data.callback.apply(null, args);
                        }
                    });

                    process();
                });
            },
            length: function () {
                return tasks.length;
            },
            running: function () {
                return working;
            }
        };
        return cargo;
    };

    var _console_fn = function (name) {
        return function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            fn.apply(null, args.concat([function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (typeof console !== 'undefined') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _each(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            }]));
        };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
     async.warn = _console_fn('warn');
     async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function (x) {
            return x;
        };
        var memoized = function () {
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (key in memo) {
                callback.apply(null, memo[key]);
            }
            else if (key in queues) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([function () {
                    memo[key] = arguments;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                        q[i].apply(null, arguments);
                    }
                }]));
            }
        };
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
        return function () {
            return (fn.unmemoized || fn).apply(null, arguments);
        };
    };

    async.times = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.map(counter, iterator, callback);
    };

    async.timesSeries = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.mapSeries(counter, iterator, callback);
    };

    async.compose = function (/* functions... */) {
        var fns = Array.prototype.reverse.call(arguments);
        return function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            async.reduce(fns, args, function (newargs, fn, cb) {
                    fn.apply(that, newargs.concat([function () {
                        var err = arguments[0];
                        var nextargs = Array.prototype.slice.call(arguments, 1);
                        cb(err, nextargs);
                    }]))
                },
                function (err, results) {
                    callback.apply(that, [err].concat(results));
                });
        };
    };

    var _applyEach = function (eachfn, fns /*args...*/) {
        var go = function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            return eachfn(fns, function (fn, cb) {
                    fn.apply(that, args.concat([cb]));
                },
                callback);
        };
        if (arguments.length > 2) {
            var args = Array.prototype.slice.call(arguments, 2);
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
    async.applyEach = doParallel(_applyEach);
    async.applyEachSeries = doSeries(_applyEach);

    async.forever = function (fn, callback) {
        function next(err) {
            if (err) {
                if (callback) {
                    return callback(err);
                }
                throw err;
            }
            fn(next);
        }
        next();
    };

    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {
        define('async',[], function () {
            return async;
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = async;
    }
    // included directly via <script> tag
    else {
        root.async = async;
    }

}());
//! moment.js
//! version : 2.3.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b){return function(c){return i(a.call(this,c),b)}}function c(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function d(){}function e(a){u(a),g(this,a)}function f(a){var b=o(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._input=a,this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function h(a){return 0>a?Math.ceil(a):Math.floor(a)}function i(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function j(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&bb.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a){return"[object Date]"===Object.prototype.toString.call(a)}function m(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function n(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Jb[a]||Kb[b]||b}return a}function o(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=n(c),b&&(d[b]=a[c]));return d}function p(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}bb[b]=function(e,f){var g,h,i=bb.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=bb().utc().set(d,a);return i.call(bb.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function r(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function s(a){return t(a)?366:365}function t(a){return 0===a%4&&0!==a%100||0===a%400}function u(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[gb]<0||a._a[gb]>11?gb:a._a[hb]<1||a._a[hb]>r(a._a[fb],a._a[gb])?hb:a._a[ib]<0||a._a[ib]>23?ib:a._a[jb]<0||a._a[jb]>59?jb:a._a[kb]<0||a._a[kb]>59?kb:a._a[lb]<0||a._a[lb]>999?lb:-1,a._pf._overflowDayOfYear&&(fb>b||b>hb)&&(b=hb),a._pf.overflow=b)}function v(a){a._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1}}function w(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function x(a){return a?a.toLowerCase().replace("_","-"):a}function y(a,b){return b.abbr=a,mb[a]||(mb[a]=new d),mb[a].set(b),mb[a]}function z(a){delete mb[a]}function A(a){var b,c,d,e,f=0,g=function(a){if(!mb[a]&&nb)try{require("./lang/"+a)}catch(b){}return mb[a]};if(!a)return bb.fn._lang;if(!k(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=x(a[f]).split("-"),b=e.length,d=x(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&m(e,d,!0)>=b-1)break;b--}f++}return bb.fn._lang}function B(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function C(a){var b,c,d=a.match(rb);for(b=0,c=d.length;c>b;b++)d[b]=Ob[d[b]]?Ob[d[b]]:B(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function D(a,b){return a.isValid()?(b=E(b,a.lang()),Lb[b]||(Lb[b]=C(b)),Lb[b](a)):a.lang().invalidDate()}function E(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(sb.lastIndex=0;d>=0&&sb.test(a);)a=a.replace(sb,c),sb.lastIndex=0,d-=1;return a}function F(a,b){var c;switch(a){case"DDDD":return vb;case"YYYY":case"GGGG":case"gggg":return wb;case"YYYYY":case"GGGGG":case"ggggg":return xb;case"S":case"SS":case"SSS":case"DDD":return ub;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return yb;case"a":case"A":return A(b._l)._meridiemParse;case"X":return Bb;case"Z":case"ZZ":return zb;case"T":return Ab;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"ww":case"W":case"WW":case"e":case"E":return tb;default:return c=new RegExp(N(M(a.replace("\\","")),"i"))}}function G(a){var b=(zb.exec(a)||[])[0],c=(b+"").match(Gb)||["-",0,0],d=+(60*c[1])+q(c[2]);return"+"===c[0]?-d:d}function H(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[gb]=q(b)-1);break;case"MMM":case"MMMM":d=A(c._l).monthsParse(b),null!=d?e[gb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[hb]=q(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=q(b));break;case"YY":e[fb]=q(b)+(q(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":e[fb]=q(b);break;case"a":case"A":c._isPm=A(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[ib]=q(b);break;case"m":case"mm":e[jb]=q(b);break;case"s":case"ss":e[kb]=q(b);break;case"S":case"SS":case"SSS":e[lb]=q(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=G(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function I(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=K(a),a._w&&null==a._a[hb]&&null==a._a[gb]&&(f=function(b){return b?b.length<3?parseInt(b,10)>68?"19"+b:"20"+b:b:null==a._a[fb]?bb().weekYear():a._a[fb]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=X(f(g.GG),g.W||1,g.E,4,1):(i=A(a._l),j=null!=g.d?T(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=X(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[fb]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[fb]?d[fb]:a._a[fb],a._dayOfYear>s(e)&&(a._pf._overflowDayOfYear=!0),c=S(e,0,a._dayOfYear),a._a[gb]=c.getUTCMonth(),a._a[hb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[ib]+=q((a._tzm||0)/60),l[jb]+=q((a._tzm||0)%60),a._d=(a._useUTC?S:R).apply(null,l)}}function J(a){var b;a._d||(b=o(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],I(a))}function K(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function L(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=A(a._l),h=""+a._i,i=h.length,j=0;for(d=E(a._f,g).match(rb)||[],b=0;b<d.length;b++)e=d[b],c=(F(e,a).exec(h)||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Ob[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),H(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[ib]<12&&(a._a[ib]+=12),a._isPm===!1&&12===a._a[ib]&&(a._a[ib]=0),I(a),u(a)}function M(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function N(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function O(a){var b,c,d,e,f;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(e=0;e<a._f.length;e++)f=0,b=g({},a),v(b),b._f=a._f[e],L(b),w(b)&&(f+=b._pf.charsLeftOver,f+=10*b._pf.unusedTokens.length,b._pf.score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function P(a){var b,c=a._i,d=Cb.exec(c);if(d){for(b=4;b>0;b--)if(d[b]){a._f=Eb[b-1]+(d[6]||" ");break}for(b=0;4>b;b++)if(Fb[b][1].exec(c)){a._f+=Fb[b][0];break}zb.exec(c)&&(a._f+=" Z"),L(a)}else a._d=new Date(c)}function Q(b){var c=b._i,d=ob.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?P(b):k(c)?(b._a=c.slice(0),I(b)):l(c)?b._d=new Date(+c):"object"==typeof c?J(b):b._d=new Date(c)}function R(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function S(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function T(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function U(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function V(a,b,c){var d=eb(Math.abs(a)/1e3),e=eb(d/60),f=eb(e/60),g=eb(f/24),h=eb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",eb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,U.apply({},i)}function W(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=bb(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function X(a,b,c,d,e){var f,g,h=new Date(Date.UTC(a,0)).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:s(a-1)+g}}function Y(a){var b=a._i,c=a._f;return"undefined"==typeof a._pf&&v(a),null===b?bb.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=A().preparse(b)),bb.isMoment(b)?(a=g({},b),a._d=new Date(+b._d)):c?k(c)?O(a):L(a):Q(a),new e(a))}function Z(a,b){bb.fn[a]=bb.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),bb.updateOffset(this),this):this._d["get"+c+b]()}}function $(a){bb.duration.fn[a]=function(){return this._data[a]}}function _(a,b){bb.duration.fn["as"+a]=function(){return+this/b}}function ab(){"undefined"==typeof ender&&(this.moment=bb)}for(var bb,cb,db="2.3.1",eb=Math.round,fb=0,gb=1,hb=2,ib=3,jb=4,kb=5,lb=6,mb={},nb="undefined"!=typeof module&&module.exports,ob=/^\/?Date\((\-?\d+)/i,pb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,qb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,rb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,sb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,tb=/\d\d?/,ub=/\d{1,3}/,vb=/\d{3}/,wb=/\d{1,4}/,xb=/[+\-]?\d{1,6}/,yb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,zb=/Z|[\+\-]\d\d:?\d\d/i,Ab=/T/i,Bb=/[\+\-]?\d+(\.\d{1,3})?/,Cb=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?$/,Db="YYYY-MM-DDTHH:mm:ssZ",Eb=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],Fb=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Gb=/([\+\-]|\d\d)/gi,Hb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Ib={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Jb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Kb={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Lb={},Mb="DDD w W M D d".split(" "),Nb="M D H h m s w W".split(" "),Ob={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return i(this.year()%100,2)},YYYY:function(){return i(this.year(),4)},YYYYY:function(){return i(this.year(),5)},gg:function(){return i(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return i(this.weekYear(),5)},GG:function(){return i(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return i(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return q(this.milliseconds()/100)},SS:function(){return i(q(this.milliseconds()/10),2)},SSS:function(){return i(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(a/60),2)+":"+i(q(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(10*a/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}},Pb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Mb.length;)cb=Mb.pop(),Ob[cb+"o"]=c(Ob[cb],cb);for(;Nb.length;)cb=Nb.pop(),Ob[cb+cb]=b(Ob[cb],2);for(Ob.DDDD=b(Ob.DDD,3),g(d.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=bb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=bb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return W(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),bb=function(b,c,d,e){return"boolean"==typeof d&&(e=d,d=a),Y({_i:b,_f:c,_l:d,_strict:e,_isUTC:!1})},bb.utc=function(b,c,d,e){var f;return"boolean"==typeof d&&(e=d,d=a),f=Y({_useUTC:!0,_isUTC:!0,_l:d,_i:b,_f:c,_strict:e}).utc()},bb.unix=function(a){return bb(1e3*a)},bb.duration=function(a,b){var c,d,e,g=bb.isDuration(a),h="number"==typeof a,i=g?a._input:h?{}:a,j=null;return h?b?i[b]=a:i.milliseconds=a:(j=pb.exec(a))?(c="-"===j[1]?-1:1,i={y:0,d:q(j[hb])*c,h:q(j[ib])*c,m:q(j[jb])*c,s:q(j[kb])*c,ms:q(j[lb])*c}):(j=qb.exec(a))&&(c="-"===j[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},i={y:e(j[2]),M:e(j[3]),d:e(j[4]),h:e(j[5]),m:e(j[6]),s:e(j[7]),w:e(j[8])}),d=new f(i),g&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},bb.version=db,bb.defaultFormat=Db,bb.updateOffset=function(){},bb.lang=function(a,b){var c;return a?(b?y(x(a),b):null===b?(z(a),a="en"):mb[a]||A(a),c=bb.duration.fn._lang=bb.fn._lang=A(a),c._abbr):bb.fn._lang._abbr},bb.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),A(a)},bb.isMoment=function(a){return a instanceof e},bb.isDuration=function(a){return a instanceof f},cb=Pb.length-1;cb>=0;--cb)p(Pb[cb]);for(bb.normalizeUnits=function(a){return n(a)},bb.invalid=function(a){var b=bb.utc(0/0);return null!=a?g(b._pf,a):b._pf.userInvalidated=!0,b},bb.parseZone=function(a){return bb(a).parseZone()},g(bb.fn=e.prototype,{clone:function(){return bb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return D(bb(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return w(this)},isDSTShifted:function(){return this._a?this.isValid()&&m(this._a,(this._isUTC?bb.utc(this._a):bb(this._a)).toArray())>0:!1},parsingFlags:function(){return g({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=D(this,a||bb.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?bb.duration(+b,a):bb.duration(a,b),j(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?bb.duration(+b,a):bb.duration(a,b),j(this,c,-1),this},diff:function(a,b,c){var d,e,f=this._isUTC?bb(a).zone(this._offset||0):bb(a).local(),g=6e4*(this.zone()-f.zone());return b=n(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-bb(this).startOf("month")-(f-bb(f).startOf("month")))/d,e-=6e4*(this.zone()-bb(this).startOf("month").zone()-(f.zone()-bb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:h(e)},from:function(a,b){return bb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(bb(),a)},calendar:function(){var a=this.diff(bb().zone(this.zone()).startOf("day"),"days",!0),b=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(b,this))},isLeapYear:function(){return t(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=T(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),bb.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=n(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=n(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+bb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+bb(a).startOf(b)},isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+bb(a).startOf(b)},min:function(a){return a=bb.apply(null,arguments),this>a?this:a},max:function(a){return a=bb.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=G(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&j(this,bb.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?bb(a).zone():0,0===(this.zone()-a)%60},daysInMonth:function(){return r(this.year(),this.month())},dayOfYear:function(a){var b=eb((bb(this).startOf("day")-bb(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},weekYear:function(a){var b=W(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=W(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=W(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=n(a),this[a]()},set:function(a,b){return a=n(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=A(b),this)}}),cb=0;cb<Hb.length;cb++)Z(Hb[cb].toLowerCase().replace(/s$/,""),Hb[cb]);Z("year","FullYear"),bb.fn.days=bb.fn.day,bb.fn.months=bb.fn.month,bb.fn.weeks=bb.fn.week,bb.fn.isoWeeks=bb.fn.isoWeek,bb.fn.toJSON=bb.fn.toISOString,g(bb.duration.fn=f.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,i=this._data;i.milliseconds=e%1e3,a=h(e/1e3),i.seconds=a%60,b=h(a/60),i.minutes=b%60,c=h(b/60),i.hours=c%24,f+=h(c/24),i.days=f%30,g+=h(f/30),i.months=g%12,d=h(g/12),i.years=d},weeks:function(){return h(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*q(this._months/12)},humanize:function(a){var b=+this,c=V(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=bb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=bb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=n(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=n(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:bb.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(cb in Ib)Ib.hasOwnProperty(cb)&&(_(cb,Ib[cb]),$(cb.toLowerCase()));_("Weeks",6048e5),bb.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},bb.lang("en",{ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),nb?(module.exports=bb,ab()):"function"==typeof define&&define.amd?define("moment",['require','exports','module'],function(a,b,c){return c.config().noGlobal!==!0&&ab(),bb}):ab()}).call(this);
/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { 

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

define("bootstrapAlert", ["jquery"], function(){});



define('controllers/dashboard',[ 'i18n!resources/nls/res', 'ichart' , 'async' , 'moment', 'bootstrapAlert', 'bootstrapTab'], function (res, ichart, async, moment) {


    var DashboardController = ['$scope', '$rootScope', '$http', '$timeout', '$location', function ($scope, $rootScope, $http, $timeout, $location) {
        $rootScope.menuUrl = "partials/leftmenu/dashboardMenu.html";
        $rootScope.title = "Dashboard - " + res.title;
        $scope.searchDate = {
            starttime: "09/20/2013",
            endtime: "10/17/2013"
        };

        $scope.dashboard = {
            endDate: "",
            startDate: moment().add("days", -30)
        };
        $rootScope.show = false;
        $scope.$watch("dataRange", function (v1, v2) {
            if (v1) {
                $scope.dashboard.endDate = $scope.searchDate.endtime = moment(new Date()).format("MM/DD/YYYY");
                $scope.dashboard.startDate = $scope.searchDate.starttime = moment(new Date()).add('days', -v1).format("MM/DD/YYYY");
                loadReport();
            }
        });
        var loadReport = function () {


            async.series([

                function (callback) {
                    $http.post('api/TopicKeywordReportPost', $scope.searchDate).success(function (d2) {
                        new iChart.Bar2D({
                            render: 'canvasDiv2',
                            data: d2,
//                    title: '产品活动关键字',
                            width: 450,
                            height: 300,
                            border: false,
                            animation: true,
                            animation_duration: 700,//700ms完成动画
                            offsetx: 26,
                            footnote: {
                                text: 'Power by Reunion',
                                color: '#909090',
                                fontsize: 11,
                                padding: '0 38'
                            },
                            label: {
                                fontsize: 11,
                                color: '#666666',
                                paddingleft: '0',
                                textAlign: 'left',
                                textBaseline: 'middle',
                                rotate: 20,
                                font: '微软雅黑'
                            },
                            coordinate: {
                                scale: [
                                    {
                                        position: 'bottom',
                                        listeners: {
                                            parseText: function (t, x, y) {
                                                return {text: t}
                                            }
                                        },
                                        label: {color: '#254d70', fontsize: 11, fontweight: 600}
                                    }
                                ]
                            }
                        }).draw();
                        callback(null, '2');
                    }).error(function (data, status, headers, config) {

                            $scope.global.error = "内部数据错误";
                            $timeout(function () {
                                $scope.global.error = "";
                            }, 3000)
                            callback(null, '2');
                        });
                },
//
                function (callback) {
                    $http.post('/api/SentimentAnalysisByFromTypeBarPost', $scope.searchDate).success(function (d) {

                        new iChart.ColumnMulti2D({
                            render: 'canvasDiv3',
                            data: d.data,
                            labels: d.labels,
                            offsetx: 14,
                            footnote: ' ',
                            width: 450,
                            height: 300,
                            border: false,
                            animation: true,
                            animation_duration: 700,//700ms完成动画
                            background_color: '#ffffff',
                            legend: {
                                enable: true,
                                background_color: null,
                                border: {
                                    enable: false
                                }
                            },

                            coordinate: {
                                background_color: '#f1f1f1',
                                rotate: 20,
                                scale: [
                                    {
                                        position: 'left',
                                        start_scale: 0,
                                        end_scale: 140,
                                        rotate: 20,
                                        scale_space: 300
                                    }
                                ],
                                width: 400,
                                height: 300
                            }
                        }).draw();
                        callback(null, '5');
                    }).error(function (data, status, headers, config) {

                            $scope.global.error = "内部数据错误";
                            $timeout(function () {
                                $scope.global.error = "";
                            }, 3000)
                            callback(null, '5');
                        });
                },
                function (callback) {
                    $http.post('api/SentimentAnalysisPost', $scope.searchDate).success(function (d) {
                        //搜索来源饼图
                        new iChart.LineBasic2D({
                            render: 'canvasDiv4',
                            data: d.data,
                            labels: d.labels,
                            label: {
                                fontsize: 8,
                                textAlign: 'right',
                                textBaseline: 'hanging',
                                rotate: -45,
                                color: '#666666'
                            },
//                    title: '情感分析时间轴曲线图  ',
                            width: 920,
                            height: 300,
                            border: false,
                            animation: true,
                            animation_duration: 700,//700ms完成动画
                            footnote: {
                                text: 'Power by Reunion',
                                color: '#909090',
                                fontsize: 11,
                                padding: '0 38'
                            },
                            tip: {
                                enable: true,
                                shadow: true
                            },
                            legend: {
                                enable: true,
                                sign: 'bar',
                                background_color: null,//设置透明背景
                                offsetx: 19,//设置x轴偏移，满足位置需要
                                offsety: -20,//设置y轴偏移，满足位置需要
                                border: true
                            },
                            sub_option: {
                                hollow_inside: false,//设置一个点的亮色在外环的效果
                                point_size: 10
                            },
                            coordinate: {
                                height: 210
                            }
                        }).draw();
                        callback(null, '6');
                    }).error(function (data, status, headers, config) {

                            $scope.global.error = "内部数据错误";
                            $timeout(function () {
                                $scope.global.error = "";
                            }, 3000)
                            callback(null, '6');
                        });
                },
                function (callback) {
                    var deep2dBarChart = function () {
                        //定义数据组
                        var data1 = [
                            {name: 'MircoBlog', value: 55.11, color: '#4572a7'},
                            {name: 'eCommerce', value: 29.84, color: '#aa4643'},
                            {name: 'Forum', value: 24.88, color: '#89a54e'},
                            {name: 'NewsMedia', value: 6.77, color: '#80699b'}

                        ];
                        var data2 = [
                            {name: 'Sina', value: 10.80, color: '#4572a7'},
                            {name: 'QQ', value: 7.40, color: '#4572a7'},
                            {name: 'Sohu', value: 33.06, color: '#4572a7'},
                            {name: 'Twitter', value: 2.81, color: '#4572a7'}
                        ];
                        var data3 = [
                            {name: 'eBay DE', value: 0.2, color: '#aa4643'},
                            {name: 'JD', value: 0.8, color: '#aa4643'},
                            {name: 'Dangdang', value: 1.61, color: '#aa4643'}

                        ];
                        var data4 = [
                            {name: 'Kimmis', value: 0.12, color: '#89a54e'},
                            {name: 'Amazon DE', value: 0.19, color: '#89a54e'},
                            {name: 'Astyle JP', value: 0.12, color: '#89a54e'}
                        ];
                        var data5 = [
                            {name: '21CN', value: 4.55, color: '#80699b'},
                            {name: 'BBC', value: 1.42, color: '#80699b'}

                        ];


                        var data = {
                            'All': data1,
                            'MircoBlog': data2,
                            'eCommerce': data3,
                            'Forum': data4,
                            'NewsMedia': data5

                        }
                        var sub = false;

                        function toChart(title, subtitle, d) {


                            var chart = new iChart.Column2D({
                                render: 'canvasDiv7',
                                data: d,
                                title: {
                                    text: title,
                                    color: '#3e576f'
                                },
                                subtitle: {
                                    text: subtitle,
                                    color: '#6d869f'
                                },
                                footnote: {
                                    text: 'Power by Reunion',
                                    color: '#909090',
                                    fontsize: 11,
                                    padding: '0 38'
                                },
                                border: false,
                                width: 450,
                                height: 300,
                                label: {
                                    fontsize: 11,
                                    color: '#666666'
                                },
                                animation: true,
                                animation_duration: 700,//700ms完成动画
                                shadow: true,
                                shadow_blur: 2,
                                shadow_color: '#aaaaaa',
                                shadow_offsetx: 1,
                                shadow_offsety: 0,
                                sub_option: {
                                    listeners: {
                                        parseText: function (r, t) {
                                            return t + "%";
                                        },
                                        click: function (r, e) {
                                            sub = !sub;
                                            if (sub) {
                                                toChart(r.get('name'),
                                                    ' ',
                                                    data[r.get('name')]);

                                            }
                                            else
                                                toChart(' ', ' ', data.All);

                                        }
                                    },
                                    label: {
                                        fontsize: 11,
                                        fontweight: 600,
                                        color: '#4572a7'
                                    },
                                    border: {
                                        width: 2,
                                        color: '#ffffff'
                                    }
                                },
                                tip: {
                                    enable: true,
                                    listeners: {
                                        parseText: function (tip, name, value, text) {
                                            if (sub)
                                                return name + ":" + (value / this.get('total') * 100).toFixed(2) + "%<br/>Click to Summary";
                                            else
                                                return name + ":" + (value / this.get('total') * 100).toFixed(2) + "%<br/>Click to " + name + " detail";
                                        }
                                    }
                                },
                                coordinate: {
                                    background_color: null,
                                    grid_color: '#c0c0c0',
                                    width: 350,
                                    height: 230,
                                    axis: {
                                        color: '#c0d0e0',
                                        width: [0, 0, 1, 0]
                                    },
                                    scale: [
                                        {
                                            position: 'left',
                                            scale_enable: false,
                                            label: {
                                                fontsize: 11,
                                                color: '#666666'
                                            }
                                        }
                                    ]
                                }
                            });

                            /**
                             *利用自定义组件构造左侧说明文本。
                             */
                            chart.plugin(new iChart.Custom({
                                drawFn: function () {
                                    /**
                                     *计算位置
                                     */
                                    var coo = chart.getCoordinate(),
                                        x = coo.get('originx'),
                                        y = coo.get('originy'),
                                        H = coo.height;
                                    /**
                                     *在左侧的位置，设置逆时针90度的旋转，渲染文字。
                                     */
                                    chart.target.textAlign('center')
                                        .textBaseline('middle')
                                        .textFont('600 13px Verdana')
                                        .fillText('Total percent market share', x - 40, y + H / 2, false, '#6d869f', false, false, false, -90);

                                }
                            }));

                            chart.draw();
                        }

                        toChart('', '', data.All);
                        callback(null, "deep")
                    };
                    deep2dBarChart();
                },
                function (callback) {
                    $scope.tagcloud = "partials/charts/tagcloud1.html";
                    callback(null, "cloud");
                }

            ]);
        };
        $scope.search = function () {
            $scope.searchDate.starttime = $scope.dashboard.startDate;
            $scope.searchDate.endtime = $scope.dashboard.endDate;

            loadReport();
        };

        $(function () {
            loadReport();
        });


    }];

    return DashboardController;
});


define('controllers/feeds',[ 'i18n!resources/nls/res', '../utils/excel', 'linqjs', 'bootstrapModal'], function (res, excel,Enumerable) {

    var FeedsController = ['$scope', '$rootScope', '$http', 'FeedService' , function ($scope, $rootScope, $http, FeedService) {

        $rootScope.menuUrl = "partials/leftmenu/feedsMenu.html";
        $rootScope.title = "Feeds - " + res.title;
        $rootScope.show = true;
        $scope.show = true;
        $scope.source = {
            keywordExpression: "兰蔻品牌"
        };

        $scope.sourceType = [];
        $http.get('api/feedsSourceType').success(function (d) {
            console.log(d);
            $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
            console.log($scope.sourcetype);
        });
        $scope.selectkimiss = function (row) {
            $scope.selectedRow = row;
        };
        $scope.searchFeed = function () {
            var sts = Enumerable.From($scope.sourcetype)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            sts = sts.join('|');
            console.log(sts);
            var searchData = {keyword: $scope.keyword, st: sts, starttime: $scope.feeds.startTime, endtime: $scope.feeds.endTime, pageindex: $scope.feeds.pageIndex};
            /*            console.log(searchData);*/
            $http.post("api/feeds", searchData).success(function (d) {
                console.log($scope.feeds.startTime);
                $scope.pages = d.count;
                $scope.feedContent = Enumerable.From(d.feeds) .ToArray();
            });

        };

        /*FeedService.querySourceType().then(function (d) {

            $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
        });*/

        $scope.feeds = {
            startTime: new Date("2010-01-01"),
            endTime: new Date(),
            sourceTypeName: '',
            description: '',
            pageIndex: 1
        };

        $scope.showDetail = function (feed) {
            $scope.modal.title = feed.Title;
            $scope.modal.source = feed.FromSite;
            $scope.modal.url = feed.FromUrl;
            $scope.modal.author = feed.Author;
            $scope.modal.publishtime = feed.PublishTime
            $scope.modal.content = feed.content || feed.Content;

        };
        $scope.modal = {
            title: "Title",
            source: "",
            url: ""
        };
        $http.post("api/feeds").success(function (d) {
            $scope.feedContent = d.feeds;
            $scope.pages = d.count;
        });
        $scope.$watch('feeds.startTime+feeds.endTime', function (v1, v2) {
            if ($scope.feeds.startTime >= $scope.feeds.endTime) {
                $scope.warning = "开始不能大于结束";
                $scope.searchFeedForm.$invalid = true;
            }
            else {
                $scope.warning = ""
                $scope.searchFeedForm.$invalid = false;
            }
        });

        $scope.exportExcel = function (tname, excelname) {
            excel(tname, excelname);
        };
        $rootScope.Topics = [
            {name: "topic1"},
            {name: "topic2"}
        ];
        var gettopicSelected = function (callback) {
            $http.get('api/topic').success(function (d) {
                $rootScope.Topics = d;
                /*  Enumerable.From(d);*/
                /* .Select("{name:$.Name}").ToArray();*/
                if (callback) callback();
            });
        };
        var getTopics = function (callback) {
            $http.get('api/topic').success(function (d) {
                $rootScope.Topics = d;
                /*  Enumerable.From(d);*/
                /* .Select("{name:$.Name}").ToArray();*/
                if (callback) callback();
            });
        };
        getTopics();
        $scope.saveTopic = function () {
            //load sourcetype
            var sts = Enumerable.From($scope.sourcetype)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            $http.post('api/topic', {
                Name: $scope.topicName,
                Keyword: $scope.keyword,
                SearchCondition: {
                    SourceType: sts,
                    StartDate: new Date($scope.feeds.startTime),
                    EndDate: new Date($scope.feeds.endTime)
                },
                OwnerId: "admin",
                CreateDate: Date.now(),
                UpdateDate: Date.now()

            }).success(function (d) {
                    getTopics(function () {
                        $scope.topicName = '';
                        $scope.saveTopicWarning = "Save Topic Successfully"
                    })

                });
        };

        $rootScope.topicSelected = function (topic) {
            $scope.keyword = topic.Keyword;
            $scope.feeds.startTime = topic.SearchCondition.StartDate;
            $scope.feeds.endTime = topic.SearchCondition.EndDate;
            $scope.source.keywordExpression = topic.Keyword;
            var sourceType = topic.SearchCondition.SourceType;



            for (var k in $scope.sourcetype) {
                $scope.sourcetype[k].checked = false;
                for (var i in sourceType) {
                    if ($scope.sourcetype[k].type === sourceType[i]) {
                        $scope.sourcetype[k].checked = true;
                    }

                }
            }

            $scope.sourcetype = $scope.sourcetype;
            /* console.log($scope.sourcetype);
             console.log(topic);*/
        };


        $scope.PagerData = function (pageindex) {
            $scope.feeds.pageIndex = pageindex;
            $scope.searchFeed();
        };
    }];

    return FeedsController;
});


define('controllers/help',[ 'i18n!resources/nls/res'], function (res) {

    var  HelpController=['$scope','$rootScope',function($scope,$rootScope) {
        $rootScope.menuUrl="";
        $rootScope.title = "Help - "+ res.title;

    }];
           return HelpController;
});
/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { 

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

define("bootstrapButton", ["jquery"], function(){});



define('controllers/reports',[ 'i18n!resources/nls/res', 'linqjs', 'bootstrapButton'], function (res,Enumerable) {

    var ReportsController = ['$scope', '$rootScope', '$http', '$timeout', function ($scope, $rootScope, $http, $timeout) {
        $rootScope.title = "Reports - " + res.title;
        $rootScope.menuUrl = "partials/leftmenu/reportsMenu.html";

        $rootScope.show = true;
        // $rootScope.title= res.title;
        $scope.source = {
            brand: "兰蔻"
        };


        $http.get('api/topic').success(function (d) {

            $scope.Topics = Enumerable.From(d).Select("{type:$.Name,checked:false}").ToArray();
        });
        var InitData = {
            dataType: [
                {value: "Daily"} ,
                {value: "Weekly"},
                {value: "Monthly"},
                {value: "Quarterly"},
                {value: "Annual"}

            ],
            receiver: "",
            type: "Daily"
        };
        $scope.report = {
            dataType: [
                {value: "Daily"} ,
                {value: "Weekly"},
                {value: "Monthly"},
                {value: "Quarterly"},
                {value: "Annual"}

            ],
            receiver: "@pactera.com",
            type: "Daily"

        };

        $http.get('api/subReport').success(function (d) {

            $scope.subReports = d;
        });
        $scope.editWindowTitle = "Add New";
        $scope.addReport = function () {
            $scope.editWindowTitle = "Add New";
            $scope.saveTopicError = "";
            var sts = Enumerable.From($scope.Topics)
                .Where(function (x) {
                    return x.checked === true;
                })
                .Select("$.type")
                .ToArray();
            if (sts.length === 0) {
                $scope.saveTopicError = "必须选择一个Topic";
                return false;
            }
            $http.post('api/subReport', {
                Name: "(" + sts.join("|") + ")-" + $scope.report.type,
                Type: $scope.report.type,
                Receiver: $scope.report.receiver,
                Topics: sts,
                OwnerId: "admin",
                CreateDate: Date.now(),
                UpdateDate: Date.now(),
                Status: 1

            }).success(function (d) {
                    $http.get('api/subReport').success(function (d) {
                        $scope.subReports = d;
                    });

                    $scope.saveTopicWarning = "Save Topic Successfully"
                    $scope.report = InitData;
                    $timeout(function () {
                        $scope.saveTopicWarning = ""
                    }, 1000);


                });
        };
        $scope.changeSubStatus = function (report) {
            $http.put('api/subReport', {
                _id: report._id

            }).success(function (d) {
                    $http.get('api/subReport').success(function (d) {
                        $scope.subReports = d;
                    });
                });
        }
        $scope.subPreview_URL = "javascript:;";
        $scope.showPreview = function (url) {
            $scope.subPreview_URL = "api/subReportPreview/" + url;

        };
        $scope.sendSubReport = function (report, event) {

            $(event.target).button("loading");
            $http.get("api/sendPreviewMail/" + report._id).success(function (d) {
                $scope.sendSuccess = "主题为" + (report.Name) + "的邮件发送成功";
                $timeout(function () {
                    $scope.sendSuccess = "";
                }, 2000);
                $(event.target).button("reset");
            }).error(function (d) {
                    $scope.sendError = "主题为" + (report.Name) + "的发送失败";
                    $(event.target).button("reset");
                });
        }
    }];

    return ReportsController;
});


define('controllers/feeddetail',[ 'i18n!resources/nls/res'], function (res) {

    var FeedDetailController = ['$scope', '$rootScope', '$http','$routeParams', function ($scope, $rootScope, $http,$routeParams) {
        $rootScope.menuUrl="";
        $rootScope.title = "Feeds - " + res.title;
        $scope.feedid =     $routeParams.feedId;

    }];

    return FeedDetailController;
});
define('routes',['app',
    'controllers/index',
    'controllers/login',
    'controllers/logout',
    'controllers/signup',
    'controllers/monitor',
    'controllers/alerts',
    'controllers/analysis',
    'controllers/dashboard',
    'controllers/feeds',
    'controllers/help',
    'controllers/reports' ,
    'controllers/feeddetail'

],
    function (app, index, login, logout, singnup, monitor, alerts, analysis, dashboard, feeds, help, reports,feeddetail) {
        return app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {templateUrl: 'partials/index.html', controller: index}).
                when('/login', {templateUrl: 'partials/login.html', controller: login}).
                when('/logout', {templateUrl: 'partials/logout.html', controller: logout}).
                when('/signup', {templateUrl: 'partials/signup.html', controller: singnup}).
                when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: dashboard}).
                when('/feeds/', {templateUrl: 'partials/feeds.html', controller: feeds}).
                when('/feeds/:feedId', {templateUrl: 'partials/feeds-detial.html', controller: feeddetail}).
                when('/analysis', {templateUrl: 'partials/analysis.html', controller: analysis}).
                when('/reports', {templateUrl: 'partials/reports.html', controller: reports}).
                when('/alerts', {templateUrl: 'partials/alerts.html', controller: alerts}).
                when('/monitor', {templateUrl: 'partials/monitor.html', controller: monitor}).
                when('/help', {templateUrl: 'partials/help.html', controller: help}).


                otherwise({redirectTo: '/'});
            /*  $locationProvider.html5Mode(true);*/
        }]);
    });
require.config({

    paths: {
        jquery: '../lib/jquery/jquery-1.8.2.min',
      /*  bootstrap: '../lib/bootstrap/js/bootstrap',*/
        underscore: '../lib/underscore/underscore',
        angular: '../lib/angular/angular.min',
        angularResource: '../lib/angular/angular-resource',
        text: '../lib/require/text',
        i18n: '../lib/require/i18n',
      /*  modernizr: '../lib/modernizr',
        html5shiv: '../lib/html5shiv',*/
       /* mcore: '../lib/mcore.min',*/
     /*   fullscreen: '../lib/fullscreen',*/
  /*      mcustomscrollbar: '../lib/jquery.mCustomScrollbar.concat.min',*/
       /* detectbrowser: '../lib/detectbrowser',*/
        //res:'../resources/nls/res'
        ichart: '../lib/ichart.1.2.src'  ,
    /*    jqueryui:'../lib/jquery-ui-1.10.3.custom' ,*/
        bootstrapModal:'../lib/bootstrap/js/modal',
        bootstrapAlert:'../lib/bootstrap/js/alert',
        bootstrapButton:'../lib/bootstrap/js/button',
        bootstrapTab:'../lib/bootstrap/js/tab',
        bootstrapTooltip:'../lib/bootstrap/js/tooltip',
      /*  jqueryuniform: '../lib/uniform/jquery.uniform.min',*/
        linqjs:'../lib/linq',
        'angular-strap':'../lib/angular-strap/angular-strap',
        'bootstrap-datepicker':'../lib/angular-strap/bootstrap-datepicker' ,
        "async":'../lib/async',
        "moment": "../lib/moment.min",
        "handlebars":"../lib/handlebars"

    },
    shim: {
        'angular': {deps: ['jquery'],'exports': 'angular'},
        'angular-resource': {deps: ['angular']},
        'bootstrap-datepicker':  {deps: ['jquery']},
        'angular-strap':   {deps: ['angular','bootstrap-datepicker']},
        'bootstrap': {deps: ['jquery']},
        /*'mcustomscrollbar': {deps: ['jquery']},*/
        'jqueryui':{deps: ['jquery']},


        'underscore': {exports: '_'},
     /*   'detectbrowser': {deps: ['modernizr']} ,*/
        'bootstrapModal': {deps: ['jquery']},
        'bootstrapAlert': {deps: ['jquery']},
        'bootstrapButton': {deps: ['jquery']},
        'bootstrapTab': {deps: ['jquery']}
        /*,
         'res':{exports:'res'}*/

    },
    priority: [
        "angular"
    ],
    i18n: {
        locale: 'en-us'
    },
    urlArgs: 'v=1.0.0.1'
});

require(['angular',
    'app',
    'jquery',
    'controllers/layout',
    'controllers/index',
    'directives/compare',
    'filter/filters' ,
    'services/services',
     'controllers/include/analysisInclude',
    'controllers/leftmenu/index',
    'routes'/*,
    'detectbrowser'*/
], function (angular) {
    angular.bootstrap(document, ['app',function($interpolateProvider){
        $interpolateProvider.startSymbol('{{');
        $interpolateProvider.endSymbol('}}');
    }]);
    console.log("Welcome visit Reunion System! ") ;
});

define("main", function(){});
