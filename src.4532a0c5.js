parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";function r(r,n){return o(r)||a(r,n)||e(r,n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function a(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,a,o=[],i=!0,u=!1;try{for(e=e.call(r);!(i=(n=e.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(y){u=!0,a=y}finally{try{i||null==e.return||e.return()}finally{if(u)throw a}}return o}}function o(r){if(Array.isArray(r))return r}function i(r){return r.split("").reverse().join("")}function u(r){return i(r)===r}function y(r){var t={day:"",month:"",year:""};return r.day<10?t.day="0"+r.day:t.day=r.day.toString(),r.month<10?t.month="0"+r.month:t.month=r.month.toString(),t.year=r.year.toString(),t}function l(r){return[r.day+r.month+r.year,r.month+r.day+r.year,r.year+r.month+r.day,r.day+r.month+r.year.slice(-2),r.month+r.day+r.year.slice(-2),r.year.slice(-2)+r.month+r.day]}function c(r){for(var t=l(r),e=[],n=0;n<t.length;n++){var a=u(t[n]);e.push(a)}return e}function d(r){return r%400==0||r%100!=0&&r%4==0}function f(r){var t=r.day+1,e=r.month,n=r.year;return 2===e?d(n)?t>29&&(t=1,e=3):t>28&&(t=1,e=3):t>[31,28,31,30,31,30,31,31,30,31,30,31][e-1]&&(t=1,e++),e>12&&(e=1,n++),{day:t,month:e,year:n}}function m(r){for(var t=f(r),e=0;;){e++;for(var n=c(y(t)),a=0;a<n.length;a++)if(n[a])return[e,t];t=getNextDsate(t)}}function s(r){var t=r.day-1,e=r.month,n=r.year;return 0===t&&(0===--e?(e=12,t=31,n--):t=2===e?d(n)?29:28:[31,28,31,30,31,30,31,31,30,31,30,31][e-1]),{day:t,month:e,year:n}}function h(r){for(var t=s(r),e=0;;){e++;for(var n=c(y(t)),a=0;a<n.length;a++)if(n[a])return[e,t];t=s(t)}}require("./styles.css");var v=document.querySelector("#birthday-input"),b=document.querySelector("#check-btn"),p=document.querySelector("#output");function g(t){var e=v.value;if(""!==e){for(var n,a=(n=e.split("-"))[0],o=n[1],i=n[2],u=c(y(n={day:Number(i),month:Number(o),year:Number(a)})),l=!1,d=0;d<u.length;d++)if(u[d]){l=!0;break}if(l)p.innerText="Congrats!! Your Birthday is Palindrome";else{var f=r(m(n),2),s=f[0],b=f[1],g=r(h(n),2),S=g[0],A=g[1];p.innerText=s>S?"The nearest palindrome date is "+A.day+"-"+A.month+"-"+A.year+", you missed by "+S+" days.":"The nearest palindrome date is "+b.day+"-"+b.month+"-"+b.year+", you missed by "+s+" days."}}}b.addEventListener("click",g);
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-o6rz6/src.4532a0c5.js.map