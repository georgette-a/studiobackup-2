(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a06":function(e,t,n){"use strict";var r=n("c532"),o=n("30b5"),i=n("f6b4"),a=n("5270"),s=n("4a7b");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},"0abd":function(e,t,n){"use strict";n("5bc1")},"0cb2":function(e,t,n){var r=n("7b0b"),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,c,u,f){var l=n+e.length,d=c.length,p=s;return void 0!==u&&(u=r(u),p=a),i.call(f,p,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(l);case"<":a=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>d){var f=o(s/10);return 0===f?r:f<=d?void 0===c[f-1]?i.charAt(1):c[f-1]+i.charAt(1):r}a=c[s-1]}return void 0===a?"":a}))}},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"14c3":function(e,t,n){var r=n("c6b6"),o=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var c={adapter:s(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n("4362"))},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"466d":function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),i=n("50c4"),a=n("1d80"),s=n("8aa5"),c=n("14c3");r("match",1,(function(e,t,n){return[function(t){var n=a(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=o(e),u=String(this);if(!a.global)return c(a,u);var f=a.unicode;a.lastIndex=0;var l,d=[],p=0;while(null!==(l=c(a,u))){var h=String(l[0]);d[p]=h,""===h&&(a.lastIndex=s(u,i(a.lastIndex),f)),p++}return 0===p?null:d}]}))},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(i,u),r.forEach(a,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var f=o.concat(i).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,u),n}},5270:function(e,t,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),a=n("2444");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},5319:function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),i=n("50c4"),a=n("a691"),s=n("1d80"),c=n("8aa5"),u=n("0cb2"),f=n("14c3"),l=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,m=h?"$":"$0";return[function(n,r){var o=s(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!h&&g||"string"===typeof r&&-1===r.indexOf(m)){var s=n(t,e,this,r);if(s.done)return s.value}var b=o(e),v=String(this),x="function"===typeof r;x||(r=String(r));var y=b.global;if(y){var w=b.unicode;b.lastIndex=0}var j=[];while(1){var O=f(b,v);if(null===O)break;if(j.push(O),!y)break;var E=String(O[0]);""===E&&(b.lastIndex=c(v,i(b.lastIndex),w))}for(var S="",R=0,A=0;A<j.length;A++){O=j[A];for(var C=String(O[0]),_=l(d(a(O.index),v.length),0),B=[],k=1;k<O.length;k++)B.push(p(O[k]));var L=O.groups;if(x){var N=[C].concat(B,_,v);void 0!==L&&N.push(L);var T=String(r.apply(void 0,N))}else T=u(C,v,_,B,L,r);_>=R&&(S+=v.slice(R,_)+T,R=_+C.length)}return S+v.slice(R)}]}))},"5bc1":function(e,t,n){},"5f02":function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),o=n("e683");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},9263:function(e,t,n){"use strict";var r=n("ad6d"),o=n("9f7f"),i=n("5692"),a=RegExp.prototype.exec,s=i("native-string-replace",String.prototype.replace),c=a,u=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=u||l||f;d&&(c=function(e){var t,n,o,i,c=this,d=f&&c.sticky,p=r.call(c),h=c.source,g=0,m=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(e).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==e[c.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,g++),n=new RegExp("^(?:"+h+")",p)),l&&(n=new RegExp("^"+h+"$(?!\\s)",p)),u&&(t=c.lastIndex),o=a.call(d?n:c,m),d?o?(o.input=o.input.slice(g),o[0]=o[0].slice(g),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:u&&o&&(c.lastIndex=c.global?o.index+o[0].length:t),l&&o&&o.length>1&&s.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),e.exports=c},"9f7f":function(e,t,n){"use strict";var r=n("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"9fb5":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"static ..."},i={class:"static ..."},a={class:"absolute ... h-full"};function s(e,t,n,s,c,u){var f=Object(r["w"])("nav-2"),l=Object(r["w"])("form-toolbar");return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])("div",i,[Object(r["g"])(f,{filename:"{{fileName}}"})]),Object(r["g"])("div",a,[Object(r["g"])(l)])])}var c=n("cf05"),u=n.n(c),f={class:"bg-st-yellow"},l={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},d={class:"flex items-center justify-between h-16"},p=Object(r["g"])("div",null,[Object(r["g"])("img",{class:"h-6",src:u.a,alt:""})],-1),h={class:"mx-auto"},g=Object(r["g"])("span",null,[Object(r["g"])("button",{class:"border-st-gray border-2 text-xs px-3 py-1 font-semibold"},"download")],-1);function m(e,t){return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("nav",f,[Object(r["g"])("div",l,[Object(r["g"])("div",d,[p,Object(r["g"])("span",h,[Object(r["g"])("input",{type:"text",class:" w-80 bg-st-gray bg-opacity-20 border-none rounded-full  focus:ring-1 focus:ring-white active:ring-white  active:border-none active:ring-1 placeholder-gray-200 text-white text-center",placeholder:e.filename},null,8,["placeholder"])]),g])])])])}const b={};b.render=m;var v=b,x=Object(r["F"])("data-v-72450eaf");Object(r["s"])("data-v-72450eaf");var y={class:"h-screen w-screen grid grid-flow-col"},w={class:"h-screen w-60"},j={class:"flex flex-col items-center bg-st-gray text-white shadow h-full w-80 overflow-y-auto"},O={class:"h-16 flex justify-left items-left pl-2 py-6 w-full"},E=Object(r["g"])("span",null,[Object(r["g"])("svg",{class:"h-6 w-6 mx-auto",width:"24",height:"24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[Object(r["g"])("path",{d:"M1.293,12.707a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,8.707,6.707L4.414,11H22a1,1,0,0,1,0,2H4.414l4.293,4.293a1,1,0,0,1-1.414,1.414Z"})])],-1),S=Object(r["g"])("span",null,"Back to Home",-1),R=Object(r["g"])("h1",{class:"text-white px-4 text"},"Edit Text",-1),A={class:"px-4 pt-6 grid grid-cols-5 gap-5"},C={class:"col-span-6 xs:col-span-3"},_=Object(r["g"])("label",{for:"text_title",class:"block text-sm font-medium text-white "},"Heading Text",-1),B={class:"col-span-6 xs:col-span-3"},k=Object(r["g"])("label",{for:"text_body",class:"block text-sm font-medium text-white "},"Body Text",-1),L={class:"col-span-6 sm:col-span-6 mt-2"},N=Object(r["g"])("label",{for:"font-name",class:"block text-sm font-medium text-white"},"Font Name",-1),T={id:"font-name",name:"font-name",class:"appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-st-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},U={class:"col-span-6 sm:col-span-6 mt-2"},P=Object(r["g"])("label",{for:"font-var",class:"block text-sm font-medium text-white"},"Font Style",-1),I={id:"font-var",name:"font-var",class:"appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-st-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},D={class:"col-span-6 sm:col-span-6 mt-2"},q=Object(r["g"])("div",{class:"mt-auto h-16 flex items-center w-full"},[Object(r["g"])("button",{class:"h-16 mx-auto flex justify-center items-center space-x-3\n\t\t\t\tw-full focus:text-orange-500 hover:bg-yellow-600 focus:outline-none"},[Object(r["g"])("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Object(r["g"])("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),Object(r["g"])("polyline",{points:"16 17 21 12 16 7"}),Object(r["g"])("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]),Object(r["g"])("span",null,"Log Out")])],-1),M={class:"container fixed max-w-md pt-10 ml-96 overflow-hidden"};Object(r["q"])();var H=x((function(e,t,n,o,i,a){var s=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",y,[Object(r["g"])("div",w,[Object(r["g"])("aside",j,[Object(r["g"])("div",O,[Object(r["g"])(s,{to:"/dashboard/home",tag:"button","active-class":"active",class:"flex flex-row space-x-3"},{default:x((function(){return[E,S]})),_:1})]),Object(r["g"])("form",{onSubmit:t[4]||(t[4]=Object(r["E"])((function(){return e.updateValues&&e.updateValues.apply(e,arguments)}),["prevent"]))},[R,Object(r["g"])("div",A,[Object(r["g"])("div",C,[_,Object(r["D"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.Line_1=e}),name:"text_title",id:"text_title",class:"mt-1 text-st-gray focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[r["A"],i.Line_1]])]),Object(r["g"])("div",B,[k,Object(r["D"])(Object(r["g"])("textarea",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.Line_2=e}),name:"text_bofy",id:"text_body",class:"mt-1 text-st-gray focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[r["A"],i.Line_2]])]),Object(r["g"])("div",L,[N,Object(r["g"])("select",T,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(i.fontlist,(function(e){return Object(r["p"])(),Object(r["d"])("option",{key:e.family},Object(r["y"])(e.family),1)})),128))])]),Object(r["g"])("div",U,[P,Object(r["g"])("select",I,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(i.fstyle,(function(e){return Object(r["p"])(),Object(r["d"])("option",{key:e},Object(r["y"])(e),1)})),128))])]),Object(r["g"])("div",D,[Object(r["g"])("button",{type:"submit",onClick:t[3]||(t[3]=function(){return a.updateLine_1&&a.updateLine_1.apply(a,arguments)}),class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-st-gray bg-st-yellow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Update")])])],32),q])]),Object(r["g"])("div",M,[Object(r["g"])("div",{innerHTML:i.tempSVG},null,8,["innerHTML"])])])})),F=(n("ac1f"),n("466d"),n("5319"),n("bc3a")),$=n.n(F),z={components:{},data:function(){return{tempSVG:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><g id="Background"><rect width="1920" height="1080" fill="#fdc506"/></g><g id="Heading"><text transform="translate(207.12 226.24)" font-size="72" fill="#1d1d1b" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800">{{HEADING}}</text><text transform="translate(212.16 407.08)" font-size="72" fill="#1d1d1b" font-family="Montserrat-SemiBold, Montserrat" class=" flex flex-wrap" font-weight="600">{{Body}}</text></g></svg>',svgString:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><g id="Background"><rect width="1920" height="1080" fill="#fdc506"/></g><g id="Heading"><text transform="translate(207.12 226.24)" font-size="72" fill="#1d1d1b" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800">{{HEADING}}</text><text transform="translate(212.16 407.08)" font-size="72" fill="#1d1d1b" font-family="Montserrat-SemiBold, Montserrat"  class="flex flex-wrap" font-weight="600">{{Body}}</text></g></svg>',ht_size:["14","16","18","20","24","28","30"],ht_color:"#ffffff",bg_colour:"#3a3a3a",ht2_colour:"#ffc600",fontlist:null,Line_2:"",Line_1:"",fstyle:["Extra Light","Light","Regular","Bold","ExtraBold","Black"]}},computed:{updateLine1:function(){return this.Line_1}},methods:{updateLine_1:function(){return console.log(this.Line_1),this.svgProcessing(this.svgString),this.updateLine1},svgProcessing:function(e){var t=/\{{(.*?)\}}/g,n=e.match(t);if(n&&n.length>0){for(var r=this.Line_1,o=this.Line_2,i="text3",a="t4",s="t5",c=[r,o,i,a,s],u=n.length,f=0;f<u;)n=e.match(t),e=e.replace(n[0],c[f]),f++,console.log(e);return this.tempSVG=e,e}console.log("No Match")}},mounted:function(){var e=this;$.a.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAGGVuBRYRaEP9WqZXj_KZwF5lqWejzNv0").then((function(t){return e.fontlist=t.data.items}))}};n("0abd");z.render=H,z.__scopeId="data-v-72450eaf";var V=z,G={name:"App",components:{Nav2:v,FormToolbar:V},data:function(){return{fileName:"slides"}}};G.render=s;t["default"]=G},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b50d:function(e,t,n){"use strict";var r=n("c532"),o=n("467f"),i=n("7aac"),a=n("30b5"),s=n("83b9"),c=n("c345"),u=n("3934"),f=n("2d83");e.exports=function(e){return new Promise((function(t,n){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+g)}var m=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(m,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,i=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:i,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,n,a),p=null}},p.onabort=function(){p&&(n(f("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(f("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||u(m))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),l||(l=null),p.send(l)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return"undefined"===typeof e}function s(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function l(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function g(e){return"[object Date]"===o.call(e)}function m(e){return"[object File]"===o.call(e)}function b(e){return"[object Blob]"===o.call(e)}function v(e){return"[object Function]"===o.call(e)}function x(e){return p(e)&&v(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function j(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function O(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function E(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=E(e[n],t):h(t)?e[n]=E({},t):i(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)O(arguments[n],t);return e}function S(e,t,n){return O(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}function R(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:i,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:f,isString:l,isNumber:d,isObject:p,isPlainObject:h,isUndefined:a,isDate:g,isFile:m,isBlob:b,isFunction:v,isStream:x,isURLSearchParams:y,isStandardBrowserEnv:j,forEach:O,merge:E,extend:S,trim:w,stripBOM:R}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),a=n("4a7b"),s=n("2444");function c(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=c(s);u.Axios=i,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),i=n("b622"),a=n("9112"),s=i("species"),c=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),l=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var p=i(e),h=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=h&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!h||!g||"replace"===e&&(!c||!u||l)||"split"===e&&!d){var m=/./[p],b=n(p,""[e],(function(e,t,n,r,o){return t.exec===RegExp.prototype.exec?h&&!o?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:l}),v=b[0],x=b[1];r(String.prototype,e,v),r(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&a(RegExp.prototype[p],"sham",!0)}},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o}}]);
//# sourceMappingURL=about.50cd509c.js.map