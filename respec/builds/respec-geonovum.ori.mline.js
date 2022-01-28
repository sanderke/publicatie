"use strict";

window.respecVersion = "24.5.2";

!function(t){
var e={
};
function n(o){
if(e[o])return e[o].exports;
var i=e[o]={
i:o,l:!1,exports:{
}};
return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){
n.o(t,e)||Object.defineProperty(t,e,{
enumerable:!0,get:o})},n.r=function(t){
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{
value:"Module"}),Object.defineProperty(t,"__esModule",{
value:!0})},n.t=function(t,e){
if(1&e&&(t=n(t)),8&e)return t;
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;
var o=Object.create(null);
if(n.r(o),Object.defineProperty(o,"default",{
enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){
return t[e]}.bind(null,i));
return o},n.n=function(t){
var e=t&&t.__esModule?function(){
return t.default}:function(){
return t};
return n.d(e,"a",e),e},n.o=function(t,e){
return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){
var o,i;
o=[e,n(8)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.pub=function t(e,...n){
if(!o.has(e))return;
Array.from(o.get(e)).forEach(e=>{
try{
e(...n)}catch(n){
t("error","Error when calling function ".concat(e.name,". See developer console.")),console.error(n)}});
if(window.parent===window.self)return;
const i=n.map(t=>String(JSON.stringify(t.stack||t)));
window.parent.postMessage({
topic:e,args:i},window.parent.location.origin)},t.sub=i,t.unsub=r,t.name=void 0;
const n="core/pubsubhub";
t.name=n;
const o=new Map;
function i(t,e,n={
once:!1}){
return n.once?i(t,function n(...o){
r({
topic:t,cb:n}),e(...o)}):(o.has(t)?o.get(t).add(e):o.set(t,new Set([e])),{
topic:t,cb:e})}function r({
topic:t,cb:e}){
const n=o.get(t);
return n&&n.has(e)?n.delete(e):(console.warn("Already unsubscribed:",t,e),!1)}i("error",t=>{
console.error(t,t.stack)}),i("warn",t=>{
console.warn(t)}),(0,e.expose)(n,{
sub:i})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(3),n(19),n(0)],void 0===(i=function(t,e,n,o){
"use strict";
var i;
Object.defineProperty(t,"__esModule",{
value:!0}),t.markdownToHtml=function(t){
const e=m(t).replace(c,">").replace(l,"&");
return(0,n.default)(e)},t.calculateLeftPad=function(t){
if("string"!=typeof t)throw new TypeError("Invalid input");
const e=t.split("\n").filter(t=>t).reduce((t,e)=>{
if(0===t)return t;
const n=e.match(r)[0]||"";
return Math.min(n.length,t)},1/0);
return e===1/0?0:e},t.createResourceHint=function(t){
if(!t||"object"!=typeof t)throw new TypeError("Missing options");
if(!h.has(t.hint))throw new TypeError("Invalid resources hint");
const e=new URL(t.href,location.href),n=document.createElement("link");
let{
href:o}=e;
switch(n.rel=t.hint,n.rel){
case"dns-prefetch":case"preconnect":o=e.origin,(t.corsMode||e.origin!==document.location.origin)&&(n.crossOrigin=t.corsMode||"anonymous");
break;
case"preload":"as"in t&&"string"==typeof t.as&&(p.has(t.as)||console.warn("Unknown request destination: ".concat(t.as)),n.setAttribute("as",t.as))}n.href=o,t.dontRemove||n.classList.add("removeOnSave");
return n},t.normalizePadding=m,t.removeReSpec=function(t){
t.querySelectorAll(".remove, script[data-requiremodule]").forEach(t=>{
t.remove()})},t.showInlineWarning=function(t,e,n){
Array.isArray(t)||(t=[t]);
const i=t.map((t,o)=>(g(t,e,n),v(t,o))).join(", ");
(0,o.pub)("warn","".concat(e," at: ").concat(i,".")),console.warn(e,t)},t.showInlineError=function(t,e,n){
Array.isArray(t)||(t=[t]);
const i=t.map((t,o)=>(g(t,e,n),v(t,o))).join(", ");
(0,o.pub)("error","".concat(e," at: ").concat(i,".")),console.error(e,t)},t.joinAnd=function(t=[],n=(t=>t),o=e.lang){
const i=t.map(n);
if(Intl.ListFormat&&"function"==typeof Intl.ListFormat){
const t=new Intl.ListFormat(o,{
style:"long",type:"conjunction"});
return t.format(i)}switch(i.length){
case 0:case 1:return i.toString();
case 2:return i.join(" and ");
default:{
const t=i.join(", "),e=t.lastIndexOf(",");
return"".concat(t.substr(0,e+1)," and ").concat(t.slice(e+2))}}},t.xmlEscape=function(t){
return t.replace(/&/g,"&amp;
").replace(/>/g,"&gt;
").replace(/"/g,"&quot;
").replace(/</g,"&lt;
")},t.norm=_,t.semverCompare=function(t,e){
const n=t.split("."),o=e.split(".");
for(let t=0;
t<3;
t++){
const e=Number(n[t]),i=Number(o[t]);
if(e>i)return 1;
if(i>e)return-1;
if(!isNaN(e)&&isNaN(i))return 1;
if(isNaN(e)&&!isNaN(i))return-1}return 0},t.concatDate=function(t,e=""){
return u.format(t).replace(a,e)},t.toShortIsoDate=function(t){
return u.format(t)},t.lead0=function(t){
return 1===String(t).length?"0".concat(t):t},t.parseSimpleDate=function(t){
return new Date(t)},t.parseLastModified=function(t){
return t?new Date(Date.parse(t)):new Date},t.humanDate=function(t=new Date,e=document.documentElement.lang||"en"){
t instanceof Date||(t=new Date(t));
const n=[e,"en"],o=t.toLocaleString(n,{
day:"2-digit",timeZone:"UTC"}),i=t.toLocaleString(n,{
month:"long",timeZone:"UTC"}),r=t.toLocaleString(n,{
year:"numeric",timeZone:"UTC"});
return"".concat(o," ").concat(i," ").concat(r)},t.isoDate=function(t){
return(t instanceof Date?t:new Date(t)).toISOString()},t.toKeyValuePairs=function(t,e=", ",n="="){
return Array.from(Object.entries(t)).map(([t,e])=>"".concat(t).concat(n).concat(JSON.stringify(e))).join(e)},t.linkCSS=function(t,e){
const n=[].concat(e).map(e=>{
const n=t.createElement("link");
return n.rel="stylesheet",n.href=e,n}).reduce((t,e)=>(t.appendChild(e),t),t.createDocumentFragment());
t.head.appendChild(n)},t.runTransforms=function(t,e){
let n=[this,t];
const i=Array.from(arguments);
if(i.shift(),i.shift(),n=n.concat(i),e){
const i=e.split(/\s+/);
for(let e=0;
e<i.length;
e++){
const r=i[e];
if(window[r])try{
t=window[r].apply(this,n)}catch(t){
(0,o.pub)("warn","call to `".concat(r,"()` failed with: ").concat(t,". See error console for stack trace.")),console.error(t)}}}return t},t.fetchAndCache=async function(t,e=864e5){
("string"==typeof t||t instanceof URL)&&(t=new Request(t));
const n=new URL(t.url);
let o,i;
if("caches"in window)try{
if(o=await caches.open(n.origin),(i=await o.match(t))&&new Date(i.headers.get("Expires"))>new Date)return i}catch(t){
console.error("Failed to use Cache API.",t)}const r=await fetch(t);
if(!r.ok&&i)return console.warn("Returning a stale cached response for ".concat(n)),i;
if(o){
const n=r.clone(),i=new Headers(r.headers),s=new Date(Date.now()+e);
i.set("Expires",s.toString());
const a=new Response(await n.blob(),{
headers:i});
return await o.put(t,a).catch(console.error),await o.match(t)}return r},t.flatten=function t(e,n){
const o=Array.isArray(n)?[...n.values()].reduce(t,[]):[n];
e.push(...o);
return e},t.addId=y,t.getTextNodes=function(t,e=[]){
const n=document.createNodeIterator(t,NodeFilter.SHOW_TEXT,t=>e.includes(t.parentElement.localName)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT),o=[];
let i;
for(;
i=n.nextNode();
)o.push(i);
return o},t.getDfnTitles=b,t.getLinkTargets=function(t){
const e=t.closest("[data-link-for]"),n=e?e.dataset.linkFor.toLowerCase():"";
return b(t).reduce((t,e)=>{
t.push({
for:n,title:e});
const o=e.split(".");
return 2===o.length&&t.push({
for:o[0],title:o[1]}),t.push({
for:"",title:e}),t},[])},t.renameElement=function(t,e){
if(t.localName===e)return t;
const n=t.ownerDocument.createElement(e);
for(const e of t.attributes){
const{
name:t,value:o}=e;
n.setAttribute(t,o)}return n.append(...t.childNodes),t.replaceWith(n),n},t.refTypeFromContext=function(t,e){
const n=e.closest(f);
let o=!1;
n&&(o=!e.closest(".normative")||!n.querySelector(".normative"));
if(t.startsWith("!")){
if(o)return{
type:"informative",illegal:!0};
o=!1}else t.startsWith("?")&&(o=!0);
return{
type:o?"informative":"normative",illegal:!1}},t.wrapInner=function(t,e){
return e.append(...t.childNodes),t.appendChild(e),t},t.parents=function(t,e){
const n=[];
let o=t.parentElement;
for(;
o;
){
const t=o.closest(e);
if(!t)break;
n.push(t),o=t.parentElement}return n},t.children=function(t,e){
try{
return t.querySelectorAll(":scope > ".concat(e))}catch(n){
let o="";
t.id||(o="temp-".concat(String(Math.random()).substr(2)),t.id=o);
const i="#".concat(t.id," > ").concat(e),r=t.parentElement.querySelectorAll(i);
return o&&(t.id=""),r}},t.msgIdGenerator=function(t,e=0){
const n=function*(t,e){
for(;
;
)yield"".concat(t,":").concat(e),e++}(t,e);
return()=>n.next().value},t.IDBKeyVal=t.nonNormativeSelector=t.ISODate=t.name=void 0,n=(i=n)&&i.__esModule?i:{
default:i};
t.name="core/utils",n.default.setOptions({
sanitize:!1,gfm:!0,headerIds:!1});
const r=/^[ |\t]*/,s=/\s+$/gm,a=/-/g,c=/&gt;
/gm,l=/&amp;
/gm;
const u=new Intl.DateTimeFormat(["en-ca-iso8601"],{
timeZone:"UTC",year:"numeric",month:"2-digit",day:"2-digit"});
t.ISODate=u;
const d=new Set(["a","abbr","acronym","b","bdo","big","br","button","cite","code","dfn","em","i","img","input","kbd","label","map","object","q","samp","script","select","small","span","strong","sub","sup","textarea","time","tt","var"]),h=new Set(["dns-prefetch","preconnect","preload","prerender"]),p=new Set(["document","embed","font","image","manifest","media","object","report","script","serviceworker","sharedworker","style","worker","xslt",""]),f=".informative, .note, .issue, .example, .ednote, .practice, .introductory";
function m(t=""){
if(!t)return"";
if("string"!=typeof t)throw TypeError("Invalid input");
if("\n"===t)return"\n";
function e(t){
return null!==t&&t.nodeType===Node.TEXT_NODE}const n="<body>".concat(t),o=(new DOMParser).parseFromString(n,"text/html");
Array.from(o.body.children).filter(t=>!d.has(t.localName)).filter(t=>"pre"!==t.localName).filter(t=>"table"!==t.localName).forEach(t=>{
t.innerHTML=m(t.innerHTML)}),Array.from(o.body.childNodes).filter(t=>e(t)&&""===t.textContent.trim()).forEach(t=>t.parentElement.replaceChild(o.createTextNode("\n"),t)),e(o.body.firstChild)||Array.from(o.body.firstChild.children).filter(t=>"table"!==t.localName).forEach(t=>{
t.innerHTML=m(t.innerHTML)}),o.normalize();
const i=o.body.textContent.replace(/^ *\n/,"").split("\n").filter(t=>t&&t.startsWith(" "))[0],r=i?i.match(/ +/)[0].length:0;
if(r){
Array.from(o.body.childNodes).filter(t=>"pre"!==t.localName).filter(e).filter(t=>{
const e=t.previousElementSibling,n=e?e.localName:t.parentElement.localName;
return!d.has(n)||t.textContent.trim().includes("\n")}).reduce((t,e)=>{
let n="";
const o=e.previousElementSibling,i=o?o.localName:e.parentElement.localName;
return/^[\t ]/.test(e.textContent)&&d.has(i)&&(n=e.textContent.match(/^\s+/)[0]),e.textContent=n+e.textContent.replace(t,""),t},new RegExp("^ {
1,".concat(r,"}"),"gm"));
const t=new RegExp("\\ {
".concat(r,"}$"),"gm");
Array.from(o.body.querySelectorAll("pre")).map(t=>t.previousSibling).filter(e).reduce((e,n)=>(t.test(n.textContent)&&(n.textContent=n.textContent.substr(0,n.textContent.length-e)),e),r)}return s.test(o.body.innerHTML)?"".concat(o.body.innerHTML.trimRight(),"\n"):o.body.innerHTML}function g(t,e,n){
t.classList.add("respec-offending-element"),t.hasAttribute("title")||t.setAttribute("title",n||e),t.id||y(t,"respec-offender")}function v(t,e){
return"[".concat(e+1,"](#").concat(t.id,")")}t.nonNormativeSelector=f;
function _(t){
return t.trim().replace(/\s+/g," ")}function y(t,e="",n="",o=!1){
if(t.id)return t.id;
n||(n=(t.title?t.title:t.textContent).trim());
let i=o?n:n.toLowerCase();
if((i=i.trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\W+/gim,"-").replace(/^-+/,"").replace(/-+$/,""))?"example"===e?i=n:!/\.$/.test(i)&&/^[a-z]/i.test(i)||(i="x".concat(i)):i="generatedID",e&&(i="".concat(e,"-").concat(i)),t.ownerDocument.getElementById(i)){
let e=0,n="".concat(i,"-").concat(e);
for(;
t.ownerDocument.getElementById(n);
)e+=1,n="".concat(i,"-").concat(e);
i=n}return t.id=i,i}function b(t,{
isDefinition:e=!1}={
}){
let n="",o="";
return t.hasAttribute("data-lt-noDefault")||(o=_(t.textContent).toLowerCase()),t.dataset.lt?(n=t.dataset.lt.toLowerCase(),""===o||n.startsWith("".concat(o,"|"))||(n+="|".concat(o))):n=1===t.childNodes.length&&1===t.getElementsByTagName("abbr").length&&t.children[0].title?t.children[0].title:'""'===t.textContent?"the-empty-string":t.textContent,n=_(n).toLowerCase(),e&&(t.dataset.lt&&(t.dataset.lt=n),t.dataset.dfnType||(t.dataset.dfnType="dfn")),[...n.split("|").filter(t=>""!==t).reduce((t,e)=>t.add(e),new Set)]}t.IDBKeyVal=class{
constructor(t,e){
this.idb=t,this.storeName=e}async get(t){
return await this.idb.transaction(this.storeName).objectStore(this.storeName).get(t)}async set(t,e){
const n=this.idb.transaction(this.storeName,"readwrite");
return n.objectStore(this.storeName).put(e,t),await n.complete}async clear(){
const t=this.idb.transaction(this.storeName,"readwrite");
return t.objectStore(this.storeName).clear(),await t.complete}async keys(){
const t=this.idb.transaction(this.storeName),e=t.objectStore(this.storeName).getAllKeys();
return await t.complete,e}}}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e);

/*! (c) Andrea Giammarchi - ISC */
var o={
};
try{
o.WeakMap=WeakMap}catch(t){
o.WeakMap=function(t,e){
var n=e.defineProperty,o=e.hasOwnProperty,i=r.prototype;
return i.delete=function(t){
return this.has(t)&&delete t[this._]},i.get=function(t){
return this.has(t)?t[this._]:void 0},i.has=function(t){
return o.call(t,this._)},i.set=function(t,e){
return n(t,this._,{
configurable:!0,value:e}),this},r;
function r(e){
n(this,"_",{
value:"_@ungap/weakmap"+t++}),e&&e.forEach(s,this)}function s(t){
this.set(t[0],t[1])}}(Math.random(),Object)}var i=o.WeakMap,r={
};

/*! (c) Andrea Giammarchi - ISC */try{
r.WeakSet=WeakSet}catch(t){
!function(t,e){
var n=o.prototype;
function o(){
e(this,"_",{
value:"_@ungap/weakmap"+t++})}n.add=function(t){
return this.has(t)||e(t,this._,{
value:!0,configurable:!0}),this},n.has=function(t){
return this.hasOwnProperty.call(t,this._)},n.delete=function(t){
return this.has(t)&&delete t[this._]},r.WeakSet=o}(Math.random(),Object.defineProperty)}var s=r.WeakSet,a={
};

/*! (c) Andrea Giammarchi - ISC */try{
a.Map=Map}catch(t){
a.Map=function(){
var t=0,e=[],n=[];
return{
delete:function(i){
var r=o(i);
return r&&(e.splice(t,1),n.splice(t,1)),r},get:function(e){
return o(e)?n[t]:void 0},has:function(t){
return o(t)},set:function(i,r){
return n[o(i)?t:e.push(i)-1]=r,this}};
function o(n){
return-1<(t=e.indexOf(n))}}}var c=a.Map;
const l=(t,e,n,o,i,r)=>{
if(i-o<2)e.insertBefore(t(n[o],1),r);
else{
const s=e.ownerDocument.createDocumentFragment();
for(;
o<i;
)s.appendChild(t(n[o++],1));
e.insertBefore(s,r)}},u=(t,e)=>t==e,d=t=>t,h=(t,e,n,o,i,r,s)=>{
const a=r-i;
if(a<1)return-1;
for(;
n-e>=a;
){
let a=e,c=i;
for(;
a<n&&c<r&&s(t[a],o[c]);
)a++,c++;
if(c===r)return e;
e=a+1}return-1},p=(t,e,n,o,i)=>n<o?t(e[n],0):0<n?t(e[n-1],-0).nextSibling:i,f=(t,e,n,o,i)=>{
if(i-o<2)e.removeChild(t(n[o],-1));
else{
const r=e.ownerDocument.createRange();
r.setStartBefore(t(n[o],-1)),r.setEndAfter(t(n[i-1],-1)),r.deleteContents()}},m=(t,e,n)=>{
let o=1,i=e;
for(;
o<i;
){
const e=(o+i)/2>>>0;
n<t[e]?i=e:o=e+1}return o},g=(t,e,n,o,i,r,s,a,u,d,h,p,g)=>{
((t,e,n,o,i,r,s,a,u)=>{
const d=new c,h=t.length;
let p=s,m=0;
for(;
m<h;
)switch(t[m++]){
case 0:i++,p++;
break;
case 1:d.set(o[i],1),l(e,n,o,i++,i,p<a?e(r[p],0):u);
break;
case-1:p++}for(m=0;
m<h;
)switch(t[m++]){
case 0:s++;
break;
case-1:d.has(r[s])?s++:f(e,n,r,s++,s)}})(((t,e,n,o,i,r,s)=>{
const a=n+r,c=[];
let l,u,d,h,p,f,m;
t:for(l=0;
l<=a;
l++){
if(l>50)return null;
for(m=l-1,p=l?c[l-1]:[0,0],f=c[l]=[],u=-l;
u<=l;
u+=2){
for(d=(h=u===-l||u!==l&&p[m+u-1]<p[m+u+1]?p[m+u+1]:p[m+u-1]+1)-u;
h<r&&d<n&&s(o[i+h],t[e+d]);
)h++,d++;
if(h===r&&d===n)break t;
f[l+u]=h}}const g=Array(l/2+a/2);
let v=g.length-1;
for(l=c.length-1;
l>=0;
l--){
for(;
h>0&&d>0&&s(o[i+h-1],t[e+d-1]);
)g[v--]=0,h--,d--;
if(!l)break;
m=l-1,p=l?c[l-1]:[0,0],(u=h-d)==-l||u!==l&&p[m+u-1]<p[m+u+1]?(d--,g[v--]=1):(h--,g[v--]=-1)}return g})(n,o,r,s,a,d,p)||((t,e,n,o,i,r,s,a)=>{
let l=0,u=o<a?o:a;
const d=Array(u++),h=Array(u);
h[0]=-1;
for(let t=1;
t<u;
t++)h[t]=s;
const p=new c;
for(let t=r;
t<s;
t++)p.set(i[t],t);
for(let o=e;
o<n;
o++){
const e=p.get(t[o]);
null!=e&&-1<(l=m(h,u,e))&&(h[l]=e,d[l]={
newi:o,oldi:e,prev:d[l-1]})}for(l=--u,--s;
h[l]>s;
)--l;
u=a+o-l;
const f=Array(u);
let g=d[l];
for(--n;
g;
){
const{
newi:t,oldi:e}=g;
for(;
n>t;
)f[--u]=1,--n;
for(;
s>e;
)f[--u]=-1,--s;
f[--u]=0,--n,--s,g=g.prev}for(;
n>=e;
)f[--u]=1,--n;
for(;
s>=r;
)f[--u]=-1,--s;
return f})(n,o,i,r,s,a,u,d),t,e,n,o,s,a,h,g)};
var v=(t,e,n,o)=>{
o||(o={
});
const i=o.compare||u,r=o.node||d,s=null==o.before?null:r(o.before,0),a=e.length;
let c=a,m=0,v=n.length,_=0;
for(;
m<c&&_<v&&i(e[m],n[_]);
)m++,_++;
for(;
m<c&&_<v&&i(e[c-1],n[v-1]);
)c--,v--;
const y=m===c,b=_===v;
if(y&&b)return n;
if(y&&_<v)return l(r,t,n,_,v,p(r,e,m,a,s)),n;
if(b&&m<c)return f(r,t,e,m,c),n;
const w=c-m,x=v-_;
let L=-1;
if(w<x){
if(-1<(L=h(n,_,v,e,m,c,i)))return l(r,t,n,_,L,r(e[m],0)),l(r,t,n,L+w,v,p(r,e,c,a,s)),n}else if(x<w&&-1<(L=h(e,m,c,n,_,v,i)))return f(r,t,e,m,L),f(r,t,e,L+x,c),n;
return w<2||x<2?(l(r,t,n,_,v,r(e[m],0)),f(r,t,e,m,c),n):w===x&&((t,e,n,o,i,r)=>{
for(;
o<i&&r(n[o],t[e-1]);
)o++,e--;
return 0===e})(n,v,e,m,c,i)?(l(r,t,n,_,v,p(r,e,c,a,s)),n):(g(r,t,n,_,v,x,e,m,c,w,a,i,s),n)},_={
};

/*! (c) Andrea Giammarchi - ISC */_.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){
return e.prototype=new e("").constructor.prototype,e;
function e(t,e){
e||(e={
});
var n=document.createEvent("CustomEvent");
return n.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail),n}}();
var y=_.CustomEvent;
function b(){
return this}const w=(t,e)=>{
const n="_"+t+"$";
return{
get(){
return this[n]||x(this,n,e.call(this,t))},set(t){
x(this,n,t)}}},x=(t,e,n)=>Object.defineProperty(t,e,{
configurable:!0,value:"function"==typeof n?function(){
return t._wire$=n.apply(this,arguments)}:n})[e];
Object.defineProperties(b.prototype,{
ELEMENT_NODE:{
value:1},nodeType:{
value:-1}});
const L={
},C={
},P=[],E=C.hasOwnProperty;
let T=0;
var k,S,D={
attributes:L,define:(t,e)=>{
t.indexOf("-")<0?(t in C||(T=P.push(t)),C[t]=e):L[t]=e},invoke:(t,e)=>{
for(let n=0;
n<T;
n++){
let o=P[n];
if(E.call(t,o))return C[o](t[o],e)}}},O=Array.isArray||(S=(k={
}.toString).call([]),function(t){
return k.call(t)===S}),A=function(t){
var e="fragment",n="content"in i("template")?function(t){
var e=i("template");
return e.innerHTML=t,e.content}:function(t){
var n=i(e),r=i("template"),s=null;
if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){
var a=RegExp.$1;
r.innerHTML="<table>"+t+"</table>",s=r.querySelectorAll(a)}else r.innerHTML=t,s=r.childNodes;
return o(n,s),n};
return function(t,r){
return("svg"===r?function(t){
var n=i(e),r=i("div");
return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",o(n,r.firstChild.childNodes),n}:n)(t)};
function o(t,e){
for(var n=e.length;
n--;
)t.appendChild(e[0])}function i(n){
return n===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document);
var M,j=
/*! (c) Andrea Giammarchi */
function(t){
var e="connected",n="dis"+e,o=t.Event,i=t.WeakSet,r=!0,s=new i;
return function(t){
return r&&(r=!r,function(t){
var r=null;
try{
new MutationObserver(u).observe(t,{
subtree:!0,childList:!0})}catch(e){
var a=0,c=[],l=function(t){
c.push(t),clearTimeout(a),a=setTimeout(function(){
u(c.splice(a=0,c.length))},0)};
t.addEventListener("DOMNodeRemoved",function(t){
l({
addedNodes:[],removedNodes:[t.target]})},!0),t.addEventListener("DOMNodeInserted",function(t){
l({
addedNodes:[t.target],removedNodes:[]})},!0)}function u(t){
r=new p;
for(var o,i=t.length,s=0;
s<i;
s++)d((o=t[s]).removedNodes,n,e),d(o.addedNodes,e,n);
r=null}function d(t,e,n){
for(var i,r=new o(e),s=t.length,a=0;
a<s;
1===(i=t[a++]).nodeType&&h(i,r,e,n));
}function h(t,e,n,o){
s.has(t)&&!r[n].has(t)&&(r[o].delete(t),r[n].add(t),t.dispatchEvent(e));
for(var i=t.children||[],a=i.length,c=0;
c<a;
h(i[c++],e,n,o));
}function p(){
this[e]=new i,this[n]=new i}}(t.ownerDocument)),s.add(t),t}},N=function(t,e,n,o,i){
var r="importNode"in t,s=t.createDocumentFragment();
return s.appendChild(t.createTextNode("g")),s.appendChild(t.createTextNode("")),(r?t.importNode(s,!0):s.cloneNode(!0)).childNodes.length<2?function t(e,n){
for(var o=e.cloneNode(),i=e.childNodes||[],r=i.length,s=0;
n&&s<r;
s++)o.appendChild(t(i[s],n));
return o}:r?t.importNode:function(t,e){
return t.cloneNode(!!e)}}(document),I="".trim||function(){
return String(this).replace(/^\s+|\s+/g,"")},R="-"+Math.random().toFixed(6)+"%";

/*! (c) Andrea Giammarchi - ISC */"content"in(M=document.createElement("template"))&&(M.innerHTML='<p tabindex="'+R+'"></p>',M.content.childNodes[0].getAttribute("tabindex")==R)||(R="_dt: "+R.slice(1,-1)+";
");
var B="\x3c!--"+R+"--\x3e",z=8,U=1,Z=3,q=/^(?:style|textarea)$/i,F=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,H=function(t){
return t.join(B).replace(J,tt).replace(K,X)},W=" \\f\\n\\r\\t",$="[ "+W+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",G="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",V="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",K=new RegExp(G+$+V+"+)([ "+W+"]*/?>)","g"),J=new RegExp(G+$+V+"*)([ "+W+"]*/>)","g"),Y=new RegExp("("+$+"\\s*=\\s*)(['\"]?)"+B+"\\2","gi");
function X(t,e,n,o){
return"<"+e+n.replace(Y,Q)+o}function Q(t,e,n){
return e+(n||'"')+R+(n||'"')}function tt(t,e,n){
return F.test(e)?t:"<"+e+n+"></"+e+">"}function et(t,e,n,o){
return{
name:o,node:e,path:n,type:t}}function nt(t,e){
for(var n=e.length,o=0;
o<n;
)t=t.childNodes[e[o++]];
return t}function ot(t,e,n,o){
for(var i=new c,r=t.attributes,s=[],a=s.slice.call(r,0),l=a.length,u=0;
u<l;
){
var d=a[u++];
if(d.value===R){
var h=d.name;
if(!i.has(h)){
var p=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),f=r[p]||r[p.toLowerCase()];
i.set(h,f),e.push(et("attr",f,o,p))}s.push(d)}}for(l=s.length,u=0;
u<l;
){
var m=s[u++];
/^id$/i.test(m.name)?t.removeAttribute(m.name):t.removeAttributeNode(m)}var g=t.nodeName;
if(/^script$/i.test(g)){
var v=document.createElement(g);
for(l=r.length,u=0;
u<l;
)v.setAttributeNode(r[u++].cloneNode(!0));
v.textContent=t.textContent,t.parentNode.replaceChild(v,t)}}var it=function(t){
return function(e){
var n=st.get(t);
return null!=n&&n.template===e||(n=function(t,e){
var n=rt.get(e)||function(t,e){
var n=H(e),o=t.transform;
o&&(n=o(n));
var i=A(n,t.type);
!function(t){
var e=t.childNodes,n=e.length;
for(;
n--;
){
var o=e[n];
1!==o.nodeType&&0===I.call(o.textContent).length&&t.removeChild(o)}}
/*! (c) Andrea Giammarchi - ISC */(i);
var r=[];
!function t(e,n,o,i){
for(var r=e.childNodes,s=r.length,a=0;
a<s;
){
var c=r[a];
switch(c.nodeType){
case U:var l=i.concat(a);
ot(c,n,o,l),t(c,n,o,l);
break;
case z:c.textContent===R&&(o.shift(),n.push(q.test(e.nodeName)?et("text",e,i):et("any",c,i.concat(a))));
break;
case Z:q.test(e.nodeName)&&I.call(c.textContent)===B&&(o.shift(),n.push(et("text",e,i)))}a++}}(i,r,e.slice(0),[]);
var s={
content:i,updates:function(n){
for(var o=[],i=r.length,s=0;
s<i;
){
var a=r[s++],c=nt(n,a.path);
switch(a.type){
case"any":o.push(t.any(c,[]));
break;
case"attr":o.push(t.attribute(c,a.name,a.node));
break;
case"text":o.push(t.text(c)),c.textContent=""}}return function(){
var t=arguments.length,r=t-1,s=1;
if(i!==r)throw new Error(r+" values instead of "+i+"\n"+e.join(", "));
for(;
s<t;
)o[s-1](arguments[s++]);
return n}}};
return rt.set(e,s),s}(t,e),o=N.call(document,n.content,!0),i={
content:o,template:e,updates:n.updates(o)};
return st.set(t,i),i}(t,e)),n.updates.apply(null,arguments),n.content}},rt=new i,st=new i;
var at=function(){
var t=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,e=/([^A-Z])([A-Z]+)/g;
return function(t,e){
return"ownerSVGElement"in t?function(t,e){
var n;
e?n=e.cloneNode(!0):(t.setAttribute("style","--hyper:style;
"),n=t.getAttributeNode("style"));
return n.value="",t.setAttributeNode(n),o(n,!0)}(t,e):o(t.style,!1)};
function n(t,e,n){
return e+"-"+n.toLowerCase()}function o(o,i){
var r,s;
return function(a){
var c,l,u,d;
switch(typeof a){
case"object":if(a){
if("object"===r){
if(!i&&s!==a)for(l in s)l in a||(o[l]="")}else i?o.value="":o.cssText="";
for(l in c=i?{
}:o,a)u="number"!=typeof(d=a[l])||t.test(l)?d:d+"px",!i&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;
r="object",i?o.value=function(t){
var o,i=[];
for(o in t)i.push(o.replace(e,n),":",t[o],";
");
return i.join("")}(s=c):s=a;
break}default:s!=a&&(r="string",s=a,i?o.value=a||"":o.cssText=a||"")}}}}(),ct=function(t,e){
return(e=n.prototype).ELEMENT_NODE=1,e.nodeType=111,e.remove=function(t){
var e=this.childNodes,n=this.firstChild,o=this.lastChild;
if(this._=null,t&&2===e.length)o.parentNode.removeChild(o);
else{
var i=this.ownerDocument.createRange();
i.setStartBefore(t?e[1]:n),i.setEndAfter(o),i.deleteContents()}return n},e.valueOf=function(t){
var e=this._,n=null==e;
if(n&&(e=this._=this.ownerDocument.createDocumentFragment()),n||t)for(var o=this.childNodes,i=0,r=o.length;
i<r;
i++)e.appendChild(o[i]);
return e},n;
function n(e){
var n=this.childNodes=t.call(e,0);
this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);
const lt="ownerSVGElement",ut=b.prototype.nodeType,dt=ct.prototype.nodeType,ht=j({
Event:y,WeakSet:s}),pt=t=>({
html:t}),ft=(t,e)=>{
switch(t.nodeType){
case dt:return 1/e<0?e?t.remove(!0):t.lastChild:e?t.valueOf(!0):t.firstChild;
case ut:return ft(t.render(),e);
default:return t}},mt=(t,e)=>{
e(t.placeholder),"text"in t?Promise.resolve(t.text).then(String).then(e):"any"in t?Promise.resolve(t.any).then(e):"html"in t?Promise.resolve(t.html).then(pt).then(e):Promise.resolve(D.invoke(t,e)).then(e)},gt=t=>null!=t&&"then"in t,vt=/^(?:form|list)$/i,_t=[].slice,yt=(t,e)=>t.ownerDocument.createTextNode(e);
function bt(t){
return this.type=t,it(this)}bt.prototype={
attribute(t,e,n){
const o=lt in t;
let i;
if("style"===e)return at(t,n,o);
if(/^on/.test(e)){
let n=e.slice(2);
return"connected"===n||"disconnected"===n?ht(t):e.toLowerCase()in t&&(n=n.toLowerCase()),e=>{
i!==e&&(i&&t.removeEventListener(n,i,!1),i=e,e&&t.addEventListener(n,e,!1))}}if("data"===e||!o&&e in t&&!vt.test(e))return n=>{
i!==n&&(i=n,t[e]!==n&&(t[e]=n,null==n&&t.removeAttribute(e)))};
if(e in D.attributes)return n=>{
const o=D.attributes[e](t,n);
i!==o&&(i=o,null==o?t.removeAttribute(e):t.setAttribute(e,o))};
{
let e=!1;
const o=n.cloneNode(!0);
return n=>{
i!==n&&(i=n,o.value!==n&&(null==n?(e&&(e=!1,t.removeAttributeNode(o)),o.value=n):(o.value=n,e||(e=!0,t.setAttributeNode(o)))))}}},any(t,e){
const n={
node:ft,before:t},o=lt in t?"svg":"html";
let i,r=!1;
const s=a=>{
switch(typeof a){
case"string":case"number":case"boolean":r?i!==a&&(i=a,e[0].textContent=a):(r=!0,i=a,e=v(t.parentNode,e,[yt(t,a)],n));
break;
case"function":s(a(t));
break;
case"object":case"undefined":if(null==a){
r=!1,e=v(t.parentNode,e,[],n);
break}default:if(r=!1,i=a,O(a))if(0===a.length)e.length&&(e=v(t.parentNode,e,[],n));
else switch(typeof a[0]){
case"string":case"number":case"boolean":s({
html:a});
break;
case"object":if(O(a[0])&&(a=a.concat.apply([],a)),gt(a[0])){
Promise.all(a).then(s);
break}default:e=v(t.parentNode,e,a,n)}else(t=>"ELEMENT_NODE"in t)(a)?e=v(t.parentNode,e,11===a.nodeType?_t.call(a.childNodes):[a],n):gt(a)?a.then(s):"placeholder"in a?mt(a,s):"text"in a?s(String(a.text)):"any"in a?s(a.any):"html"in a?e=v(t.parentNode,e,_t.call(A([].concat(a.html).join(""),o).childNodes),n):s("length"in a?_t.call(a):D.invoke(a,s))}};
return s},text(t){
let e;
const n=o=>{
if(e!==o){
e=o;
const i=typeof o;
"object"===i&&o?gt(o)?o.then(n):"placeholder"in o?mt(o,n):n("text"in o?String(o.text):"any"in o?o.any:"html"in o?[].concat(o.html).join(""):"length"in o?_t.call(o).join(""):D.invoke(o,n)):"function"===i?n(o(t)):t.textContent=null==o?"":o}};
return n}};

/*! (c) Andrea Giammarchi - ISC */
var wt=function(){
var t="object"!=typeof document,e=function(o){
if(!("raw"in o)||o.propertyIsEnumerable("raw")||!Object.isFrozen(o.raw)||/Firefox\/(\d+)/.test((document.defaultView.navigator||{
}).userAgent)&&parseFloat(RegExp.$1)<55){
var i={
};
e=function(t){
for(var e=".",n=0;
n<t.length;
n++)e+=t[n].length+"."+t[n];
return i[e]||(i[e]=t)}}else t=!0;
return n(o)};
return n;
function n(n){
return t?n:e(n)}}(),xt=function(t){
for(var e=arguments.length,n=[wt(t)],o=1;
o<e;
)n.push(arguments[o++]);
return n};
const Lt=new i,Ct=t=>{
let e,n,o;
return function(){
const i=xt.apply(null,arguments);
return o!==i[0]?(o=i[0],n=new bt(t),e=Et(n.apply(n,i))):n.apply(n,i),e}},Pt=(t,e)=>{
const n=e.indexOf(":");
let o=Lt.get(t),i=e;
return-1<n&&(i=e.slice(n+1),e=e.slice(0,n)||"html"),o||Lt.set(t,o={
}),o[i]||(o[i]=Ct(e))},Et=t=>{
const e=t.childNodes,{
length:n}=e;
return 1===n?e[0]:n?new ct(e):t};
var Tt=(t,e)=>null==t?Ct(e||"html"):Pt(t,e||"html");
const kt=new i;
var St=function(){
const t=kt.get(this),e=xt.apply(null,arguments);
return t&&t.template===e[0]?t.tagger.apply(null,e):function(t){
const e=new bt(lt in this?"svg":"html");
kt.set(this,{
tagger:e,template:t}),this.textContent="",this.appendChild(e.apply(null,arguments))}.apply(this,e),this};
n.d(e,"bind",function(){
return Dt}),n.d(e,"define",function(){
return Ot}),n.d(e,"hyper",function(){
return Mt}),n.d(e,"tagger",function(){
return At}),n.d(e,"default",function(){
return Mt}),n.d(e,"Component",function(){
return b}),n.d(e,"diff",function(){
return v}),n.d(e,"observe",function(){
return ht}),n.d(e,"wire",function(){
return Tt});

/*! (c) Andrea Giammarchi (ISC) */
const Dt=t=>St.bind(t),Ot=D.define,At=bt.prototype;
function Mt(t){
return arguments.length<2?null==t?Ct("html"):"string"==typeof t?Mt.wire(null,t):"raw"in t?Ct("html")(t):"nodeType"in t?Mt.bind(t):Pt(t,"html"):("raw"in t?Ct("html"):Mt.wire).apply(null,arguments)}Mt.Component=b,Mt.bind=Dt,Mt.define=Ot,Mt.diff=v,Mt.hyper=Mt,Mt.observe=ht,Mt.tagger=At,Mt.wire=Tt,Mt._={
WeakMap:i,WeakSet:s},function(t){
const e=new i,n=Object.create,o=(t,e)=>{
const n={
w:null,p:null};
return e.set(t,n),n};
Object.defineProperties(b,{
for:{
configurable:!0,value(t,r){
return((t,e,r,s)=>{
const a=e.get(t)||o(t,e);
switch(typeof s){
case"object":case"function":const e=a.w||(a.w=new i);
return e.get(s)||((t,e,n)=>(t.set(e,n),n))(e,s,new t(r));
default:const o=a.p||(a.p=n(null));
return o[s]||(o[s]=new t(r))}})(this,e.get(t)||(t=>{
const n=new c;
return e.set(t,n),n})(t),t,null==r?"default":r)}}}),Object.defineProperties(b.prototype,{
handleEvent:{
value(t){
const e=t.currentTarget;
this["getAttribute"in e&&e.getAttribute("data-call")||"on"+t.type](t)}},html:w("html",t),svg:w("svg",t),state:w("state",function(){
return this.defaultState}),defaultState:{
get:()=>({
})},dispatch:{
value(t,e){
const{
_wire$:n}=this;
if(n){
const o=new y(t,{
bubbles:!0,cancelable:!0,detail:e});
return o.component=this,(n.dispatchEvent?n:n.firstChild).dispatchEvent(o)}return!1}},setState:{
value(t,e){
const n=this.state,o="function"==typeof t?t.call(this,n):t;
for(const t in o)n[t]=o[t];
return!1!==e&&this.render(),this}}})}(Ct)},function(t,e,n){
var o;
void 0===(o=function(t){
"use strict";
function e(t){
for(var e=1;
e<arguments.length;
e++){
var o=null!=arguments[e]?arguments[e]:{
},i=Object.keys(o);
"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(t){
return Object.getOwnPropertyDescriptor(o,t).enumerable}))),i.forEach(function(e){
n(t,e,o[e])})}return t}function n(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
t.l10n=r[s]||r.en},t.lang=t.l10n=t.name=void 0;
t.name="core/l10n";
const o=document.documentElement;
o&&!o.hasAttribute("lang")&&(o.lang="en",o.hasAttribute("dir")||(o.dir="ltr"));
const i={
about_respec:"About",abstract:"Abstract",author:"Author:",authors:"Authors:",bug_tracker:"Bug tracker:",close_parens:")",commit_history:"Commit history",definition_list:"Definitions",editor:"Editor:",editors_note:"Editor's note",editors:"Editors:",example:"Example",feature_at_risk:"(Feature at Risk) Issue",fig:"Figure ",file_a_bug:"File a bug",former_editor:"Former editor:",former_editors:"Former editors:",info_references:"Informative references",issue_summary:"Issue Summary",issue:"Issue",latest_editors_draft:"Latest editor's draft:",latest_published_version:"Latest published version:",list_of_definitions:"List of Definitions",norm_references:"Normative references",note:"Note",open_bugs:"open bugs",open_parens:"(",participate:"Participate",pull_requests:"Pull requests",references:"References",save_as:"Save as",save_snapshot:"Export",search_specref:"Search Specref",section:"section ",sotd:"Status of This Document",table_of_fig:"Table of Figures",this_version:"This version:",toc:"Table of Contents",warning:"Warning"},r={
en:e({
},i),ko:e({
},i,{
abstract:"요약",author:"저자:",authors:"저자:",fig:"그림 ",latest_published_version:"최신 버전:",sotd:"현재 문서의 상태",this_version:"현재 버전:"}),zh:e({
},i,{
abstract:"摘要",bug_tracker:"错误跟踪：",editor:"编辑：",editors:"编辑们：",fig:"圖",file_a_bug:"反馈错误",latest_editors_draft:"最新编辑草稿：",latest_published_version:"最新发布草稿：",note:"注",open_bugs:"修正中的错误",sotd:"关于本文档",this_version:"本版本：",toc:"内容大纲"}),ja:e({
},i,{
abstract:"要約",author:"著者：",authors:"著者：",bug_tracker:"バグの追跡履歴：",editor:"編者：",editors:"編者：",fig:"図",latest_editors_draft:"最新の編集用草案：",latest_published_version:"最新バージョン：",note:"注",open_bugs:"改修されていないバグ",sotd:"この文書の位置付け",this_version:"このバージョン：",toc:"目次"}),nl:e({
},i,{
about_respec:"Over",abstract:"Samenvatting",author:"Auteur:",authors:"Auteurs:",bug_tracker:"Meldingensysteem:",commit_history:"Revisiehistorie",definition_list:"Lijst van Definities",editor:"Redacteur:",editors_note:"Redactionele noot",editors:"Redacteurs:",example:"Voorbeeld",fig:"Figuur ",file_a_bug:"Dien een melding in",info_references:"Informatieve referenties",issue_summary:"Lijst met issues",latest_editors_draft:"Laatste werkversie:",latest_published_version:"Laatst gepubliceerde versie:",list_of_definitions:"Lijst van Definities",norm_references:"Normatieve referenties",note:"Noot",open_bugs:"open meldingen",participate:"Doe mee",references:"Referenties",save_as:"Bewaar als",save_snapshot:"Bewaar Snapshot",search_specref:"Doorzoek Specref",section:"paragraaf ",sotd:"Status van dit document",table_of_fig:"Lijst met figuren",this_version:"Deze versie:",toc:"Inhoudsopgave",warning:"Waarschuwing"}),es:e({
},i,{
abstract:"Resumen",author:"Autor:",authors:"Autores:",bug_tracker:"Repositorio de bugs:",close_parens:")",commit_history:"Historia de cambios",editor:"Editor:",editors_note:"Nota de editor",editors:"Editores:",example:"Ejemplo",fig:"Figura ",file_a_bug:"Nota un bug",info_references:"Referencias informativas",issue_summary:"Resumen de la cuestión",issue:"Cuestión",latest_editors_draft:"Borrador de editor mas reciente:",latest_published_version:"Versión publicada mas reciente:",norm_references:"Referencias normativas",note:"Nota",open_bugs:"Bugs abiertos",open_parens:"(",participate:"Participad",references:"Referencias",sotd:"Estado de este Document",table_of_fig:"Tabla de Figuras",this_version:"Ésta versión:",toc:"Tabla de Contenidos",warning:"Aviso"})};
t.l10n=r,r["zh-hans"]=r.zh,r["zh-cn"]=r.zh;
const s=o&&o.lang in r?o.lang:"en";
t.lang=s}.apply(e,[e]))||(t.exports=o)},function(t,e,n){
var o,i;
o=[e,n(24),n(2),n(1),n(25),n(0)],void 0===(i=function(t,e,n,o,i,r){
"use strict";
function s(t){
return t&&t.__esModule?t:{
default:t}}function a(){
const t=g(["<div id='","' class='respec-modal removeOnSave' role='dialog'>\n      <h3 id=\"",'">',"</h3>\n      <div class='inside'>","</div>\n    </div>"]);
return a=function(){
return t},t}function c(){
const t=g(["<div id='respec-overlay' class='removeOnSave'></div>"]);
return c=function(){
return t},t}function l(){
const t=g(["<li role=menuitem>","</li>"]);
return l=function(){
return t},t}function u(){
const t=g(['<button id="','" class="respec-option" title="','">\n      <span class="respec-cmd-icon">',"</span> ","…\n    </button>"]);
return u=function(){
return t},t}function d(){
const t=g(["<ol class='","'></ol>"]);
return d=function(){
return t},t}function h(){
const t=g(["<button id='","' class='respec-info-button'>"]);
return h=function(){
return t},t}function p(){
const t=g(["<button id='respec-pill' disabled>ReSpec</button>"]);
return p=function(){
return t},t}function f(){
const t=g(["<ul id=respec-menu role=menu aria-labelledby='respec-pill' hidden></ul>"]);
return f=function(){
return t},t}function m(){
const t=g(["<div id='respec-ui' class='removeOnSave' hidden></div>"]);
return m=function(){
return t},t}function g(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.ui=t.name=void 0,e=s(e),n=s(n),i=s(i);
t.name="core/ui";
const v=document.createElement("style");
function _(t,e){
t&&Array.from(e.entries()).reduce((t,[e,n])=>(t.setAttribute("aria-".concat(e),n),t),t)}v.id="respec-ui-styles",v.textContent=e.default,v.classList.add("removeOnSave"),document.head.appendChild(v);
const y=(0,n.default)(m()),b=(0,n.default)(f());
let w,x;
const L=[],C=[],P={
};
(0,r.sub)("start-all",()=>document.body.prepend(y),{
once:!0}),(0,r.sub)("end-all",()=>document.body.prepend(y),{
once:!0});
const E=(0,n.default)(p());
y.appendChild(E),E.addEventListener("click",function(t){
t.stopPropagation(),b.hidden?(b.classList.remove("respec-hidden"),b.classList.add("respec-visible")):(b.classList.add("respec-hidden"),b.classList.remove("respec-visible")),this.setAttribute("aria-expanded",String(b.hidden)),b.hidden=!b.hidden}),document.documentElement.addEventListener("click",()=>{
b.hidden||(b.classList.remove("respec-visible"),b.classList.add("respec-hidden"),b.hidden=!0)}),y.appendChild(b);
const T=new Map([["controls","respec-menu"],["expanded","false"],["haspopup","true"],["label","ReSpec Menu"]]);
function k(t,e,i,r){
e.push(t),P.hasOwnProperty(i)||(P[i]=function(t,e,i){
const r="respec-pill-".concat(t),s=(0,n.default)(h(),r);
s.addEventListener("click",function(){
this.setAttribute("aria-expanded","true");
const r=(0,n.default)(d(),"respec-".concat(t,"-list"));
for(const t of e){
const e=document.createRange().createContextualFragment((0,o.markdownToHtml)(t)),n=document.createElement("li");
e.firstElementChild===e.lastElementChild?n.append(...e.firstElementChild.childNodes):n.appendChild(e),r.appendChild(n)}S.freshModal(i,r,this)});
const a=new Map([["expanded","false"],["haspopup","true"],["controls","respec-pill-".concat(t,"-modal")],["label","Document ".concat(i.toLowerCase())]]);
return _(s,a),s}(i,e,r),y.appendChild(P[i])),P[i].textContent=e.length}_(E,T);
const S={
show(){
try{
y.hidden=!1}catch(t){
console.error(t)}},hide(){
y.hidden=!0},enable(){
E.removeAttribute("disabled")},addCommand(t,e,o,r){
r=r||"";
const s="respec-button-".concat(t.toLowerCase().replace(/\s+/,"-")),a=(0,n.default)(u(),s,o,r,t),c=(0,n.default)(l(),a);
return c.addEventListener("click",e),b.appendChild(c),o&&i.default.add(o,e),a},error(t){
k(t,L,"error","Errors")},warning(t){
k(t,C,"warning","Warnings")},closeModal(t){
x&&(x.classList.remove("respec-show-overlay"),x.classList.add("respec-hide-overlay"),x.addEventListener("transitionend",()=>{
x.remove(),x=null})),t&&t.setAttribute("aria-expanded","false"),w&&(w.remove(),w=null)},freshModal(t,e,o){
w&&w.remove(),x&&x.remove(),x=(0,n.default)(c());
const i="".concat(o.id,"-modal"),r="".concat(i,"-heading");
w=(0,n.default)(a(),i,r,t,e);
const s=new Map([["labelledby",r]]);
_(w,s),document.body.append(x,w),x.addEventListener("click",()=>this.closeModal(o)),x.classList.toggle("respec-show-overlay"),w.hidden=!1}};
t.ui=S,i.default.add("Esc",()=>S.closeModal()),i.default.add("Ctrl+Alt+Shift+E",()=>{
P.error&&P.error.click()}),i.default.add("Ctrl+Alt+Shift+W",()=>{
P.warning&&P.warning.click()}),window.respecUI=S,(0,r.sub)("error",t=>S.error(t)),(0,r.sub)("warn",t=>S.warning(t))}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o;
void 0===(o=function(t){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.default=void 0;
const e=new WeakMap;
t.default=class{
constructor(t,n){
e.set(this,{
name:t,lintingFunction:n})}get name(){
return e.get(this).name}lint(t={
lint:{
[this.name]:!1}},n=document){
if(function(t,e){
return!(!1===t.hasOwnProperty("lint")||!1===t.lint||!t.lint[e])}(t,this.name))return e.get(this).lintingFunction(t,n)}}}.apply(e,[e]))||(t.exports=o)},function(t,e,n){
var o;
void 0===(o=function(t){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.registerDefinition=function(t,n){
for(const o of n)e[o]?e[o].includes(t)||e[o].push(t):e[o]=[t]},t.definitionMap=void 0;
const e=Object.create(null);
t.definitionMap=e}.apply(e,[e]))||(t.exports=o)},function(t,e,n){
var o,i;
o=[e,n(63),n(1),n(0),n(12)],void 0===(i=function(t,e,n,o,i){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.updateFromNetwork=u,t.resolveRef=async function t(e){
const n=await l;
if(!n.hasOwnProperty(e))return null;
const o=n[e];
if(o.aliasOf)return await t(o.aliasOf);
return o},t.run=async function(t){
t.localBiblio||(t.localBiblio={
});
if(t.biblio){
let t="Overriding `.biblio` in config. Please use ";
t+="`.localBiblio` for custom biblio entries.",(0,o.pub)("warn",t)}t.biblio=r;
const n=Array.from(Object.keys(t.localBiblio)).filter(e=>t.localBiblio[e].hasOwnProperty("aliasOf")).map(e=>t.localBiblio[e].aliasOf);
!function(t){
const e=new Set([...t.normativeReferences].map(t=>t.toLowerCase()));
Array.from(t.informativeReferences).filter(t=>e.has(t.toLowerCase())).forEach(e=>t.informativeReferences.delete(e))}(t);
const i=function(t){
return{
informativeReferences:Array.from(t.informativeReferences),normativeReferences:Array.from(t.normativeReferences)}}(t),s=i.normativeReferences.concat(i.informativeReferences).filter(e=>!t.localBiblio.hasOwnProperty(e)).concat(n).reduce((t,e)=>(-1===t.indexOf(e)&&t.push(e),t),[]).sort(),a=[];
try{
await e.biblioDB.ready;
const t=s.map(async t=>({
id:t,data:await e.biblioDB.find(t)}));
a.push(...await Promise.all(t))}catch(t){
a.push(...s.map(t=>({
id:t,data:null}))),console.warn(t)}const l={
hasData:[],noData:[]};
a.reduce((t,e)=>(e.data?t.hasData.push(e):t.noData.push(e),t),l),l.hasData.reduce((t,e)=>(t[e.id]=e.data,t),r);
const d=l.noData.map(t=>t.id);
if(d.length){
const t=await u(d,{
forceUpdate:!0});
Object.assign(r,t)}Object.assign(r,t.localBiblio),await u(s),c(t.biblio)},Object.defineProperty(t,"wireReference",{
enumerable:!0,get:function(){
return i.wireReference}}),Object.defineProperty(t,"stringifyReference",{
enumerable:!0,get:function(){
return i.stringifyReference}}),t.name=t.biblio=void 0;
const r={
};
t.biblio=r;
t.name="core/biblio";
const s=new URL("https://specref.herokuapp.com/bibrefs?refs=");
const a=(0,n.createResourceHint)({
hint:"dns-prefetch",href:s.origin});
let c;
document.head.appendChild(a);
const l=new Promise(t=>{
c=t});
async function u(t,n={
forceUpdate:!1}){
const o=[...new Set(t)].filter(t=>t.trim());
if(!o.length||!1===navigator.onLine)return null;
let i;
try{
i=await fetch(s.href+o.join(","))}catch(t){
return console.error(t),null}if(!n.forceUpdate&&!i.ok||200!==i.status)return null;
const r=await i.json();
try{
await e.biblioDB.addAll(r)}catch(t){
console.error(t)}return r}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o;
void 0===(o=function(t){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.expose=function(t,n){
e||(window.require.modules[t]=n)};
const e=!!window.require;
e||(window.require=function(t,e){
e(...t.map(t=>{
if(!(t in window.require.modules))throw new Error("Unsupported dependency name: ".concat(t));
return window.require.modules[t]}))},window.require.modules={
})}.apply(e,[e]))||(t.exports=o)},function(t,e,n){
var o,i;
o=[e,n(0),n(1)],void 0===(i=function(t,e,n){
"use strict";
function o(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
if(!1===t.lint)return;
(async()=>{
await document.respecIsReady;
try{
await r.lint(t,document)}catch(t){
console.error("Error ocurred while running the linter",t)}})()},t.default=t.name=void 0;
t.name="core/linter";
const i=new WeakMap;
const r=new class{
constructor(){
i.set(this,{
rules:new Set})}get rules(){
return i.get(this).rules}register(...t){
t.reduce((t,e)=>t.add(e),this.rules)}async lint(t,r=window.document){
const s=[...i.get(this).rules].map(i=>(async function(t){
const i=await t;
if(!i)return;
const r=function(t){
for(var e=1;
e<arguments.length;
e++){
var n=null!=arguments[e]?arguments[e]:{
},i=Object.keys(n);
"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){
return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){
o(t,e,n[e])})}return t}({
},a,i),{
description:s,help:c,howToFix:l,name:u,occurrences:d,offendingElements:h}=r,p="Linter (".concat(u,"): ").concat(s," ").concat(l," ").concat(c);
h.length?(0,n.showInlineWarning)(h,"".concat(p," Occured")):(0,e.pub)("warn","".concat(p," (Count: ").concat(d,")"))})(i.lint(t,r)));
await s}};
var s=r;
t.default=s;
const a={
name:"unknown",description:"",occurrences:0,howToFix:"",offendingElements:[],help:""}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
function n(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.fetchAll=o,t.fetchIndex=function(t,e){
return o(t.replace(/\{
[^}]+\}/,""),e)},t.run=async function(t){
if(!t.hasOwnProperty("github")||!t.github)return;
if("object"==typeof t.github&&!t.github.hasOwnProperty("repoURL")){
const t="Config option `[github](https://github.com/w3c/respec/wiki/github)` is missing property `repoURL`.";
return void(0,e.pub)("error",t)}let o,i=t.github.repoURL||t.github;
i.endsWith("/")||(i+="/");
try{
o=new URL(i,"https://github.com")}catch(t){
return void(0,e.pub)("error","`respecConf.github` is not a valid URL? (".concat(o,")"))}if("https://github.com"!==o.origin){
const t="`respecConf.github` must be HTTPS and pointing to GitHub. (".concat(o,")");
return void(0,e.pub)("error",t)}const[r,s]=o.pathname.split("/").filter(t=>t);
if(!r||!s){
const t="`respecConf.github` URL needs a path with, for example, w3c/my-spec";
return void(0,e.pub)("error",t)}const a=t.github.branch||"gh-pages",c=new URL("./issues/",o).href,l={
edDraftURI:"https://".concat(r.toLowerCase(),".github.io/").concat(s,"/"),githubToken:void 0,githubUser:void 0,githubAPI:"https://api.github.com/repos/".concat(r,"/").concat(s),issueBase:c,atRiskBase:c,otherLinks:[],pullBase:new URL("./pulls/",o).href,shortName:s},u={
key:t.l10n.participate,data:[{
value:"GitHub ".concat(r,"/").concat(s),href:o},{
value:t.l10n.file_a_bug,href:l.issueBase},{
value:t.l10n.commit_history,href:new URL("./commits/".concat(a),o.href).href},{
value:t.l10n.pull_requests,href:l.pullBase}]},d={
branch:a,repoURL:o.href},h=function(t){
for(var e=1;
e<arguments.length;
e++){
var o=null!=arguments[e]?arguments[e]:{
},i=Object.keys(o);
"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(t){
return Object.getOwnPropertyDescriptor(o,t).enumerable}))),i.forEach(function(e){
n(t,e,o[e])})}return t}({
},l,t,{
github:d});
Object.assign(t,h),t.otherLinks.unshift(u)},t.name=void 0;
async function o(t,e={
},n=[]){
const i=new URL(t);
i.searchParams&&!i.searchParams.has("per_page")&&i.searchParams.append("per_page","100");
const r=new Request(i,{
headers:e});
r.headers.set("Accept","application/vnd.github.v3+json");
const s=await window.fetch(r),a=await s.json();
Array.isArray(a)&&n.push(...a);
const c=function(t){
const e=(t||"").match(/<([^>]+)>\s*;
\s*rel="next"/);
return e&&e[1]||null}(s.headers.get("Link"));
return c?o(c,e,n):n}t.name="core/github"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(7),n(1),n(2)],void 0===(i=function(t,e,n,o){
"use strict";
var i;
function r(){
const t=function(t,e){
e||(e=t.slice(0));
return Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}(['<a href="','">']);
return r=function(){
return t},t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(t){
const e=a(t),n=document.querySelectorAll("dfn[data-cite], a[data-cite]");
Array.from(n).filter(t=>t.dataset.cite).map(e).filter(({
key:e})=>e.toLowerCase()!==(t.shortName||"").toLowerCase()).forEach(({
isNormative:e,key:n})=>{
const o=e?t.normativeReferences:t.informativeReferences;
o.add(n)})},t.linkInlineCitations=async function(t,i=respecConfig){
const s=function(t){
const i=a(t);
return async s=>{
const a=s.dataset.cite,{
key:c,frag:l,path:u}=i(s);
let d="",h="";
if(c.toLowerCase()===t.shortName.toLowerCase())console.log(s,'The reference "'.concat(c,'" is resolved into the current document per `conf.shortName`.')),d=document.location.href;
else{
const t=await(0,e.resolveRef)(c);
if(function(t){
["data-cite","data-cite-frag"].filter(e=>t.hasAttribute(e)).forEach(e=>t.removeAttribute(e))}(s),!t)return void(0,n.showInlineWarning)(s,"Couldn't find a match for \"".concat(a,'"'));
d=t.href,h=t.title}if(u){
const t=u.startsWith("/")?".".concat(u):u;
d=new URL(t,d).href}switch(l&&(d=new URL(l,d).href),s.localName){
case"a":""===s.textContent&&(s.textContent=h),s.href=d;
break;
case"dfn":{
const t=(0,o.default)(r(),d);
s.textContent?(0,n.wrapInner)(s,t):(t.textContent=h,s.append(t));
break}}}}(i),c=[...t.querySelectorAll("dfn[data-cite]:not([data-cite='']), a[data-cite]:not([data-cite=''])")],l=a(i),u=c.map(l).map(async t=>{
const n=await(0,e.resolveRef)(t);
return{
entry:t,result:n}}),d=(await Promise.all(u)).filter(({
result:t})=>null===t).map(({
entry:{
key:t}})=>t),h=await(0,e.updateFromNetwork)(d);
h&&Object.assign(e.biblio,h);
const p=[...new Set(c)].map(s);
return await Promise.all(p)},t.name=void 0,o=(i=o)&&i.__esModule?i:{
default:i};
function s(t){
return e=>{
const n=e.search(t);
return-1!==n?e.substring(n):""}}function a(t){
const e=s("#"),o=s("/");
return function i(r){
const{
dataset:s}=r,{
cite:a,citeFrag:c,citePath:l}=s;
if(a.startsWith("#")&&!c){
const e=r.parentElement.closest('[data-cite]:not([data-cite^="#"])'),{
key:n,isNormative:o}=e?i(e):{
key:t.shortName||"",isNormative:!1};
return s.cite=o?n:"?".concat(n),s.citeFrag=a.replace("#",""),i(r)}const u=c?"#".concat(c):e(a),d=l||o(a).split("#")[0],{
type:h}=(0,n.refTypeFromContext)(a,r),p="normative"===h;
return{
key:a.split(/[\/|#]/)[0].substring(/^[?|!]/.test(a)),isNormative:p,frag:u,path:d}}}t.name="core/data-cite"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(7),n(3),n(2),n(0)],void 0===(i=function(t,e,n,o,i,r){
"use strict";
var s;
function a(){
const t=m(['\n    <cite>\n      <a\n        href="','"\n        target="','"\n        rel="noopener noreferrer">\n        ','</a>.\n    </cite>\n    <span class="authors">\n      ','\n    </span>\n    <span class="publisher">\n      ','\n    </span>\n    <span class="pubDate">\n      ','\n    </span>\n    <span class="pubStatus">\n      ',"\n    </span>\n  "]);
return a=function(){
return t},t}function c(){
const t=m(['\n      <dt id="','">[',']</dt>\n      <dd><em class="respec-offending-element">Reference not found.</em></dd>\n    ']);
return c=function(){
return t},t}function l(){
const t=m(['\n      <dt id="','">[',"]</dt>\n      <dd>","</dd>\n    "]);
return l=function(){
return t},t}function u(){
const t=m(['[<cite><a class="bibref" href="','">',"</a></cite>]"]);
return u=function(){
return t},t}function d(){
const t=m(["\n      <dl class='bibliography'>\n        ","\n      </dl>"]);
return d=function(){
return t},t}function h(){
const t=m(["\n      <section>\n        <h3>","</h3>\n      </section>"]);
return h=function(){
return t},t}function p(){
const t=m(["<p>","</p>"]);
return p=function(){
return t},t}function f(){
const t=m(["\n    <section id='references' class='appendix'>\n      <h2>","</h2>\n      ","\n    </section>"]);
return f=function(){
return t},t}function m(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
const n=Array.from(t.informativeReferences),o=Array.from(t.normativeReferences);
if(!n.length&&!o.length&&!t.refNote)return;
const r=(0,i.default)(f(),v.references,t.refNote?(0,i.default)(p(),t.refNote):"");
for(const t of["Normative","Informative"]){
const s="Normative"===t?o:n;
if(!s.length)continue;
const a=(0,i.default)(h(),"Normative"===t?v.norm_references:v.info_references);
(0,e.addId)(a);
const{
goodRefs:c,badRefs:l}=s.map(x).reduce((t,e)=>{
const n=e.refcontent?"goodRefs":"badRefs";
return t[n].push(e),t},{
goodRefs:[],badRefs:[]}),u=[...c.reduce((t,e)=>(t.has(e.refcontent.id)||t.set(e.refcontent.id,e),t),new Map).values()],p=u.concat(l).sort((t,e)=>t.ref.toLocaleLowerCase().localeCompare(e.ref.toLocaleLowerCase()));
a.appendChild((0,i.default)(d(),p.map(L))),r.appendChild(a);
const f=P(c);
E(u,f),T(l)}document.body.appendChild(r)},t.renderInlineCitation=function(t){
const e=t.replace(/^(!|\?)/,""),n="#bib-".concat(e.toLowerCase());
return(0,i.default)(u(),n,e)},t.wireReference=function(t,e="_blank"){
if("object"!=typeof t)throw new TypeError("Only modern object references are allowed");
const n=Object.assign({
},y,t),o=n.authors.join(";
 ")+(n.etAl?" et al":""),r=_.get(n.status)||n.status;
return i.default.wire(n)(a(),n.href,e,n.title.trim(),b(o),b(n.publisher),b(n.date),b(r))},t.stringifyReference=C,t.name=void 0,i=(s=i)&&s.__esModule?s:{
default:s};
t.name="core/render-biblio";
const g={
en:{
info_references:"Informative references",norm_references:"Normative references",references:"References"},nl:{
info_references:"Informatieve referenties",norm_references:"Normatieve referenties",references:"Referenties"},es:{
info_references:"Referencias informativas",norm_references:"Referencias normativas",references:"Referencias"}},v=g[o.lang in g?o.lang:"en"],_=new Map([["CR","W3C Candidate Recommendation"],["ED","W3C Editor's Draft"],["FPWD","W3C First Public Working Draft"],["LCWD","W3C Last Call Working Draft"],["NOTE","W3C Note"],["PER","W3C Proposed Edited Recommendation"],["PR","W3C Proposed Recommendation"],["REC","W3C Recommendation"],["WD","W3C Working Draft"],["WG-NOTE","W3C Working Group Note"]]),y=Object.freeze({
authors:[],date:"",href:"",publisher:"",status:"",title:"",etAl:!1}),b=(w=".",t=>{
const e=t.trim(),n=!e||e.endsWith(w)?e:e+w;
return n});
var w;
function x(t){
let e=n.biblio[t],o=t;
const i=new Set([o]);
for(;
e&&e.aliasOf;
)if(i.has(e.aliasOf)){
e=null;
const n="Circular reference in biblio DB between [`".concat(t,"`] and [`").concat(o,"`].");
(0,r.pub)("error",n)}else o=e.aliasOf,e=n.biblio[o],i.add(o);
return e&&!e.id&&(e.id=t.toLowerCase()),{
ref:t,refcontent:e}}function L({
ref:t,refcontent:e}){
const n="bib-".concat(t.toLowerCase());
return e?(0,i.default)(l(),n,t,{
html:C(e)}):(0,i.default)(c(),n,t)}function C(t){
if("string"==typeof t)return t;
let e="<cite>".concat(t.title,"</cite>");
return e=t.href?'<a href="'.concat(t.href,'">').concat(e,"</a>. "):"".concat(e,". "),t.authors&&t.authors.length&&(e+=t.authors.join(";
 "),t.etAl&&(e+=" et al"),e+="."),t.publisher&&(e="".concat(e," ").concat(b(t.publisher)," ")),t.date&&(e+="".concat(t.date,". ")),t.status&&(e+="".concat(_.get(t.status)||t.status,". ")),t.href&&(e+='URL: <a href="'.concat(t.href,'">').concat(t.href,"</a>")),e}function P(t){
return t.reduce((t,e)=>{
const n=e.refcontent.id;
return(t.has(n)?t.get(n):t.set(n,[]).get(n)).push(e.ref),t},new Map)}function E(t,e){
t.map(({
ref:t,refcontent:n})=>{
const o="#bib-".concat(t.toLowerCase()),i=e.get(n.id).map(t=>'a.bibref[href="#bib-'.concat(t.toLowerCase(),'"]')).join(",");
return{
refUrl:o,elems:document.querySelectorAll(i)}}).forEach(({
refUrl:t,elems:e})=>{
e.forEach(e=>e.setAttribute("href",t))})}function T(t){
t.forEach(({
ref:t})=>{
const e=[...document.querySelectorAll('a.bibref[href="#bib-'.concat(t.toLowerCase(),'"]'))].filter(({
textContent:e})=>e.toLowerCase()===t.toLowerCase()),n="Bad reference: [`".concat(t,"`] (appears ").concat(e.length," times)");
(0,r.pub)("error",n),console.warn("Bad references: ",e)})}}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
var o,i;
window.addEventListener("error",function(t){
console.error(t.error,t.message,t)}),o=[n(14),n(4),n(26),n(27),n(3),n(28),n(34),n(36),n(37),n(10),n(38),n(39),n(40),n(46),n(47),n(49),n(50),n(52),n(53),n(55),n(57),n(59),n(60),n(62),n(11),n(7),n(64),n(12),n(67),n(68),n(69),n(70),n(71),n(72),n(74),n(77),n(79),n(80),n(81),n(82),n(83),n(84),n(88),n(89),n(91),n(9)],void 0===(i=((t,{
ui:e},...n)=>{
e.show(),async function(){
"loading"===document.readyState&&await new Promise(t=>document.addEventListener("DOMContentLoaded",t))}().then(async()=>{
try{
await t.runAll(n),await document.respecIsReady}catch(t){
console.error(t)}finally{
e.enable()}})}).apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(15),n(16),n(17),n(18),n(22),n(23),n(0),n(1)],void 0===(i=function(t,e,n,o,i,r,s,a,c){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.runAll=async function(t){
(0,a.pub)("start-all",respecConfig),u&&performance.mark("".concat(l,"-start"));
await s.done;
const e=t.filter(t=>t&&t.run).map(d);
for(const t of e)try{
await t(respecConfig)}catch(t){
console.error(t)}(0,a.pub)("plugins-done",respecConfig),await r.done,(0,a.pub)("end-all",respecConfig),(0,c.removeReSpec)(document),u&&(performance.mark("".concat(l,"-end")),performance.measure(l,"".concat(l,"-start"),"".concat(l,"-end")))},t.name=void 0;
const l="core/base-runner";
t.name=l;
const u=performance.mark&&performance.measure;
function d(t){
const e=t.name||"";
return e||console.warn("Plugin lacks name:",t),n=>new Promise(async(o,i)=>{
const r=setTimeout(()=>{
const n="Plugin ".concat(e," took too long.");
console.error(n,t),i(new Error(n))},15e3);
u&&performance.mark("".concat(e,"-start"));
try{
t.run.length<=1?(await t.run(n),o()):(console.warn("Plugin ".concat(e," uses a deprecated callback signature. Return a Promise instead. Read more at: https://github.com/w3c/respec/wiki/Developers-Guide#plugins")),t.run(n,document,o))}catch(t){
i(t)}finally{
clearTimeout(r)}u&&(performance.mark("".concat(e,"-end")),performance.measure(e,"".concat(e,"-start"),"".concat(e,"-end")))})}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.name=void 0;
t.name="core/include-config";
const n={
},o=t=>Object.assign(n,t);
(0,e.sub)("start-all",o),(0,e.sub)("amend-user-config",o),(0,e.sub)("end-all",()=>{
const t=document.createElement("script");
t.id="initialUserConfig",t.type="application/json",t.innerHTML=JSON.stringify(n,null,2),document.head.appendChild(t)})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.name=void 0;
t.name="core/override-configuration",(0,e.sub)("start-all",function(t){
const n=document.location.search.replace(/;
/g,"&"),o=new URLSearchParams(n),i=Array.from(o.entries()).filter(([t,e])=>!!t&&!!e).map(([t,e])=>{
const n=decodeURIComponent(t),o=decodeURIComponent(e.replace(/%3D/g,"="));
let i;
try{
i=JSON.parse(o)}catch(t){
i=o}return{
key:n,value:i}}).reduce((t,{
key:e,value:n})=>(t[e]=n,t),{
});
Object.assign(t,i),(0,e.pub)("amend-user-config",i)},{
once:!0})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.name=void 0;
t.name="core/respec-ready";
const n=new Promise(t=>{
(0,e.sub)("end-all",t,{
once:!0})});
Object.defineProperty(document,"respecIsReady",{
get:()=>n})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(21)],void 0===(i=function(t,e,n){
"use strict";
var o;
Object.defineProperty(t,"__esModule",{
value:!0}),t.name=void 0,n=(o=n)&&o.__esModule?o:{
default:o};
t.name="core/jquery-enhanced",window.$=window.jQuery=n.default,window.$.fn.renameElement=function(t){
const o=[];
return this.each(function(){
const n=(0,e.renameElement)(this,t);
o.push(n)}),(0,n.default)(o)},window.$.fn.getDfnTitles=function(t){
return(0,e.getDfnTitles)(this[0],t)},window.$.fn.linkTargets=function(){
return(0,e.getLinkTargets)(this[0])},window.$.fn.makeID=function(t="",n="",o=!1){
const i=this[0];
return(0,e.addId)(i,t,n,o)},window.$.fn.allTextNodes=function(t){
return(0,e.getTextNodes)(this[0],t)}}.apply(e,o))||(t.exports=i)},function(t,e,n){
(function(e){
!function(e){
"use strict";
var n={
newline:/^\n+/,code:/^( {
4}[^\n]+\n*)+/,fences:g,hr:/^ {
0,3}((?:- *){
3,}|(?:_ *){
3,}|(?:\* *){
3,})(?:\n+|$)/,heading:/^ *(#{
1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:g,blockquote:/^( {
0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {
0,3})(bull) [\s\S]+?(?:hr|def|\n{
2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {
0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{
2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{
2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{
2,}|$))",def:/^ {
0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:g,lheading:/^([^\n]+)\n *(=|-){
2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {
0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};
function o(t){
this.tokens=[],this.tokens.links=Object.create(null),this.options=t||w.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=h(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{
1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=h(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=h(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){
3,}|(?:_ *){
3,}|(?:\\* *){
3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=h(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=h(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag",n._tag).getRegex(),n.blockquote=h(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=v({
},n),n.gfm=v({
},n.normal,{
fences:/^ {
0,3}(`{
3,}|~{
3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {
0,3}\1[~`]* *(?:\n+|$)|$)/,paragraph:/^/,heading:/^ *(#{
1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=h(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=v({
},n.gfm,{
nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=v({
},n.normal,{
html:h("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{
2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{
2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),o.rules=n,o.lex=function(t,e){
return new o(e).lex(t)},o.prototype.lex=function(t){
return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},o.prototype.token=function(t,e){
var o,i,r,s,a,c,l,u,d,h,p,f,m,g,v,b;
for(t=t.replace(/^ +$/gm,"");
t;
)if((r=this.rules.newline.exec(t))&&(t=t.substring(r[0].length),r[0].length>1&&this.tokens.push({
type:"space"})),r=this.rules.code.exec(t))t=t.substring(r[0].length),r=r[0].replace(/^ {
4}/gm,""),this.tokens.push({
type:"code",text:this.options.pedantic?r:y(r,"\n")});
else if(r=this.rules.fences.exec(t))t=t.substring(r[0].length),this.tokens.push({
type:"code",lang:r[2]?r[2].trim():r[2],text:r[3]||""});
else if(r=this.rules.heading.exec(t))t=t.substring(r[0].length),this.tokens.push({
type:"heading",depth:r[1].length,text:r[2]});
else if(e&&(r=this.rules.nptable.exec(t))&&(c={
type:"table",header:_(r[1].replace(/^ *| *\| *$/g,"")),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3]?r[3].replace(/\n$/,"").split("\n"):[]}).header.length===c.align.length){
for(t=t.substring(r[0].length),p=0;
p<c.align.length;
p++)/^ *-+: *$/.test(c.align[p])?c.align[p]="right":/^ *:-+: *$/.test(c.align[p])?c.align[p]="center":/^ *:-+ *$/.test(c.align[p])?c.align[p]="left":c.align[p]=null;
for(p=0;
p<c.cells.length;
p++)c.cells[p]=_(c.cells[p],c.header.length);
this.tokens.push(c)}else if(r=this.rules.hr.exec(t))t=t.substring(r[0].length),this.tokens.push({
type:"hr"});
else if(r=this.rules.blockquote.exec(t))t=t.substring(r[0].length),this.tokens.push({
type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,e),this.tokens.push({
type:"blockquote_end"});
else if(r=this.rules.list.exec(t)){
for(t=t.substring(r[0].length),l={
type:"list_start",ordered:g=(s=r[2]).length>1,start:g?+s:"",loose:!1},this.tokens.push(l),u=[],o=!1,m=(r=r[0].match(this.rules.item)).length,p=0;
p<m;
p++)h=(c=r[p]).length,~(c=c.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(h-=c.length,c=this.options.pedantic?c.replace(/^ {
1,4}/gm,""):c.replace(new RegExp("^ {
1,"+h+"}","gm"),"")),p!==m-1&&(a=n.bullet.exec(r[p+1])[0],(s.length>1?1===a.length:a.length>1||this.options.smartLists&&a!==s)&&(t=r.slice(p+1).join("\n")+t,p=m-1)),i=o||/\n\n(?!\s*$)/.test(c),p!==m-1&&(o="\n"===c.charAt(c.length-1),i||(i=o)),i&&(l.loose=!0),b=void 0,(v=/^\[[ xX]\] /.test(c))&&(b=" "!==c[1],c=c.replace(/^\[[ xX]\] +/,"")),d={
type:"list_item_start",task:v,checked:b,loose:i},u.push(d),this.tokens.push(d),this.token(c,!1),this.tokens.push({
type:"list_item_end"});
if(l.loose)for(m=u.length,p=0;
p<m;
p++)u[p].loose=!0;
this.tokens.push({
type:"list_end"})}else if(r=this.rules.html.exec(t))t=t.substring(r[0].length),this.tokens.push({
type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===r[1]||"script"===r[1]||"style"===r[1]),text:r[0]});
else if(e&&(r=this.rules.def.exec(t)))t=t.substring(r[0].length),r[3]&&(r[3]=r[3].substring(1,r[3].length-1)),f=r[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={
href:r[2],title:r[3]});
else if(e&&(r=this.rules.table.exec(t))&&(c={
type:"table",header:_(r[1].replace(/^ *| *\| *$/g,"")),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3]?r[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]}).header.length===c.align.length){
for(t=t.substring(r[0].length),p=0;
p<c.align.length;
p++)/^ *-+: *$/.test(c.align[p])?c.align[p]="right":/^ *:-+: *$/.test(c.align[p])?c.align[p]="center":/^ *:-+ *$/.test(c.align[p])?c.align[p]="left":c.align[p]=null;
for(p=0;
p<c.cells.length;
p++)c.cells[p]=_(c.cells[p].replace(/^ *\| *| *\| *$/g,""),c.header.length);
this.tokens.push(c)}else if(r=this.rules.lheading.exec(t))t=t.substring(r[0].length),this.tokens.push({
type:"heading",depth:"="===r[2]?1:2,text:r[1]});
else if(e&&(r=this.rules.paragraph.exec(t)))t=t.substring(r[0].length),this.tokens.push({
type:"paragraph",text:"\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1]});
else if(r=this.rules.text.exec(t))t=t.substring(r[0].length),this.tokens.push({
type:"text",text:r[0]});
else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));
return this.tokens};
var i={
escape:/^\\([!"#$%&'()*+,\-.\/:;
<=>?@\[\]\\^_`{
|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:g,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {
2,}|\\)\n(?!\s*$)/,del:g,text:/^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {
2,}\n|$)/};
function r(t,e){
if(this.options=e||w.defaults,this.links=t,this.rules=i.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");
this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.options.breaks?this.rules=i.breaks:this.rules=i.gfm)}function s(t){
this.options=t||w.defaults}function a(){
}function c(t){
this.tokens=[],this.token=null,this.options=t||w.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new l}function l(){
this.seen={
}}function u(t,e){
if(e){
if(u.escapeTest.test(t))return t.replace(u.escapeReplace,function(t){
return u.replacements[t]})}else if(u.escapeTestNoEncode.test(t))return t.replace(u.escapeReplaceNoEncode,function(t){
return u.replacements[t]});
return t}function d(t){
return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));
?/gi,function(t,e){
return"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""})}function h(t,e){
return t=t.source||t,e=e||"",{
replace:function(e,n){
return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),t=t.replace(e,n),this},getRegex:function(){
return new RegExp(t,e)}}}function p(t,e,n){
if(t){
try{
var o=decodeURIComponent(d(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){
return null}if(0===o.indexOf("javascript:")||0===o.indexOf("vbscript:")||0===o.indexOf("data:"))return null}e&&!m.test(n)&&(n=function(t,e){
f[" "+t]||(/^[^:]+:\/*[^\/]*$/.test(t)?f[" "+t]=t+"/":f[" "+t]=y(t,"/",!0));
return t=f[" "+t],"//"===e.slice(0,2)?t.replace(/:[\s\S]*/,":")+e:"/"===e.charAt(0)?t.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+e:t+e}(e,n));
try{
n=encodeURI(n).replace(/%25/g,"%")}catch(t){
return null}return n}i._punctuation="!\"#$%&'()*+,\\-./:;
<=>?@\\[^_{
|}~",i.em=h(i.em).replace(/punctuation/g,i._punctuation).getRegex(),i._escapes=/\\([!"#$%&'()*+,\-.\/:;
<=>?@\[\]\\^_`{
|}~])/g,i._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{
1,31}/,i._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{
|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{
0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{
0,61}[a-zA-Z0-9])?)+(?![-_])/,i.autolink=h(i.autolink).replace("scheme",i._scheme).replace("email",i._email).getRegex(),i._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,i.tag=h(i.tag).replace("comment",n._comment).replace("attribute",i._attribute).getRegex(),i._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,i._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/,i._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,i.link=h(i.link).replace("label",i._label).replace("href",i._href).replace("title",i._title).getRegex(),i.reflink=h(i.reflink).replace("label",i._label).getRegex(),i.normal=v({
},i),i.pedantic=v({
},i.normal,{
strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",i._label).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",i._label).getRegex()}),i.gfm=v({
},i.normal,{
escape:h(i.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;
*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;
$)|[?!.,:;
*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:h(i.text).replace("]|","~]|").replace("|$","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{
\\|}~-]+@|$").getRegex()}),i.gfm.url=h(i.gfm.url,"i").replace("email",i.gfm._extended_email).getRegex(),i.breaks=v({
},i.gfm,{
br:h(i.br).replace("{
2,}","*").getRegex(),text:h(i.gfm.text).replace("{
2,}","*").getRegex()}),r.rules=i,r.output=function(t,e,n){
return new r(e,n).output(t)},r.prototype.output=function(t){
for(var e,n,o,i,s,a,c="";
t;
)if(s=this.rules.escape.exec(t))t=t.substring(s[0].length),c+=u(s[1]);
else if(s=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.inRawBlock=!1),t=t.substring(s[0].length),c+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):u(s[0]):s[0];
else if(s=this.rules.link.exec(t)){
var l=b(s[2],"()");
if(l>-1){
var d=s[2].length-l;
s[2]=s[2].substring(0,l),s[0]=s[0].substring(0,s[0].length-d)}t=t.substring(s[0].length),this.inLink=!0,o=s[2],this.options.pedantic?(e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o))?(o=e[1],i=e[3]):i="":i=s[3]?s[3].slice(1,-1):"",o=o.trim().replace(/^<([\s\S]*)>$/,"$1"),c+=this.outputLink(s,{
href:r.escapes(o),title:r.escapes(i)}),this.inLink=!1}else if((s=this.rules.reflink.exec(t))||(s=this.rules.nolink.exec(t))){
if(t=t.substring(s[0].length),e=(s[2]||s[1]).replace(/\s+/g," "),!(e=this.links[e.toLowerCase()])||!e.href){
c+=s[0].charAt(0),t=s[0].substring(1)+t;
continue}this.inLink=!0,c+=this.outputLink(s,e),this.inLink=!1}else if(s=this.rules.strong.exec(t))t=t.substring(s[0].length),c+=this.renderer.strong(this.output(s[4]||s[3]||s[2]||s[1]));
else if(s=this.rules.em.exec(t))t=t.substring(s[0].length),c+=this.renderer.em(this.output(s[6]||s[5]||s[4]||s[3]||s[2]||s[1]));
else if(s=this.rules.code.exec(t))t=t.substring(s[0].length),c+=this.renderer.codespan(u(s[2].trim(),!0));
else if(s=this.rules.br.exec(t))t=t.substring(s[0].length),c+=this.renderer.br();
else if(s=this.rules.del.exec(t))t=t.substring(s[0].length),c+=this.renderer.del(this.output(s[1]));
else if(s=this.rules.autolink.exec(t))t=t.substring(s[0].length),o="@"===s[2]?"mailto:"+(n=u(this.mangle(s[1]))):n=u(s[1]),c+=this.renderer.link(o,null,n);
else if(this.inLink||!(s=this.rules.url.exec(t))){
if(s=this.rules.text.exec(t))t=t.substring(s[0].length),this.inRawBlock?c+=this.renderer.text(s[0]):c+=this.renderer.text(u(this.smartypants(s[0])));
else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{
if("@"===s[2])o="mailto:"+(n=u(s[0]));
else{
do{
a=s[0],s[0]=this.rules._backpedal.exec(s[0])[0]}while(a!==s[0]);
n=u(s[0]),o="www."===s[1]?"http://"+n:n}t=t.substring(s[0].length),c+=this.renderer.link(o,null,n)}return c},r.escapes=function(t){
return t?t.replace(r.rules._escapes,"$1"):t},r.prototype.outputLink=function(t,e){
var n=e.href,o=e.title?u(e.title):null;
return"!"!==t[0].charAt(0)?this.renderer.link(n,o,this.output(t[1])):this.renderer.image(n,o,u(t[1]))},r.prototype.smartypants=function(t){
return this.options.smartypants?t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{
"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{
\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{
3}/g,"…"):t},r.prototype.mangle=function(t){
if(!this.options.mangle)return t;
for(var e,n="",o=t.length,i=0;
i<o;
i++)e=t.charCodeAt(i),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";
";
return n},s.prototype.code=function(t,e,n){
var o=(e||"").match(/\S*/)[0];
if(this.options.highlight){
var i=this.options.highlight(t,o);
null!=i&&i!==t&&(n=!0,t=i)}return o?'<pre><code class="'+this.options.langPrefix+u(o,!0)+'">'+(n?t:u(t,!0))+"</code></pre>\n":"<pre><code>"+(n?t:u(t,!0))+"</code></pre>"},s.prototype.blockquote=function(t){
return"<blockquote>\n"+t+"</blockquote>\n"},s.prototype.html=function(t){
return t},s.prototype.heading=function(t,e,n,o){
return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+o.slug(n)+'">'+t+"</h"+e+">\n":"<h"+e+">"+t+"</h"+e+">\n"},s.prototype.hr=function(){
return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(t,e,n){
var o=e?"ol":"ul";
return"<"+o+(e&&1!==n?' start="'+n+'"':"")+">\n"+t+"</"+o+">\n"},s.prototype.listitem=function(t){
return"<li>"+t+"</li>\n"},s.prototype.checkbox=function(t){
return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},s.prototype.paragraph=function(t){
return"<p>"+t+"</p>\n"},s.prototype.table=function(t,e){
return e&&(e="<tbody>"+e+"</tbody>"),"<table>\n<thead>\n"+t+"</thead>\n"+e+"</table>\n"},s.prototype.tablerow=function(t){
return"<tr>\n"+t+"</tr>\n"},s.prototype.tablecell=function(t,e){
var n=e.header?"th":"td";
return(e.align?"<"+n+' align="'+e.align+'">':"<"+n+">")+t+"</"+n+">\n"},s.prototype.strong=function(t){
return"<strong>"+t+"</strong>"},s.prototype.em=function(t){
return"<em>"+t+"</em>"},s.prototype.codespan=function(t){
return"<code>"+t+"</code>"},s.prototype.br=function(){
return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(t){
return"<del>"+t+"</del>"},s.prototype.link=function(t,e,n){
if(null===(t=p(this.options.sanitize,this.options.baseUrl,t)))return n;
var o='<a href="'+u(t)+'"';
return e&&(o+=' title="'+e+'"'),o+=">"+n+"</a>"},s.prototype.image=function(t,e,n){
if(null===(t=p(this.options.sanitize,this.options.baseUrl,t)))return n;
var o='<img src="'+t+'" alt="'+n+'"';
return e&&(o+=' title="'+e+'"'),o+=this.options.xhtml?"/>":">"},s.prototype.text=function(t){
return t},a.prototype.strong=a.prototype.em=a.prototype.codespan=a.prototype.del=a.prototype.text=function(t){
return t},a.prototype.link=a.prototype.image=function(t,e,n){
return""+n},a.prototype.br=function(){
return""},c.parse=function(t,e){
return new c(e).parse(t)},c.prototype.parse=function(t){
this.inline=new r(t.links,this.options),this.inlineText=new r(t.links,v({
},this.options,{
renderer:new a})),this.tokens=t.reverse();
for(var e="";
this.next();
)e+=this.tok();
return e},c.prototype.next=function(){
return this.token=this.tokens.pop()},c.prototype.peek=function(){
return this.tokens[this.tokens.length-1]||0},c.prototype.parseText=function(){
for(var t=this.token.text;
"text"===this.peek().type;
)t+="\n"+this.next().text;
return this.inline.output(t)},c.prototype.tok=function(){
switch(this.token.type){
case"space":return"";
case"hr":return this.renderer.hr();
case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,d(this.inlineText.output(this.token.text)),this.slugger);
case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);
case"table":var t,e,n,o,i="",r="";
for(n="",t=0;
t<this.token.header.length;
t++)n+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{
header:!0,align:this.token.align[t]});
for(i+=this.renderer.tablerow(n),t=0;
t<this.token.cells.length;
t++){
for(e=this.token.cells[t],n="",o=0;
o<e.length;
o++)n+=this.renderer.tablecell(this.inline.output(e[o]),{
header:!1,align:this.token.align[o]});
r+=this.renderer.tablerow(n)}return this.renderer.table(i,r);
case"blockquote_start":for(r="";
"blockquote_end"!==this.next().type;
)r+=this.tok();
return this.renderer.blockquote(r);
case"list_start":r="";
for(var s=this.token.ordered,a=this.token.start;
"list_end"!==this.next().type;
)r+=this.tok();
return this.renderer.list(r,s,a);
case"list_item_start":r="";
var c=this.token.loose;
for(this.token.task&&(r+=this.renderer.checkbox(this.token.checked));
"list_item_end"!==this.next().type;
)r+=c||"text"!==this.token.type?this.tok():this.parseText();
return this.renderer.listitem(r);
case"html":return this.renderer.html(this.token.text);
case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));
case"text":return this.renderer.paragraph(this.parseText());
default:var l='Token with "'+this.token.type+'" type was not found.';
if(!this.options.silent)throw new Error(l);
console.log(l)}},l.prototype.slug=function(t){
var e=t.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;
<=>?@[\]^`{
|}~]/g,"").replace(/\s/g,"-");
if(this.seen.hasOwnProperty(e)){
var n=e;
do{
this.seen[n]++,e=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(e))}return this.seen[e]=0,e},u.escapeTest=/[&<>"']/,u.escapeReplace=/[&<>"']/g,u.replacements={
"&":"&amp;
","<":"&lt;
",">":"&gt;
",'"':"&quot;
","'":"&#39;
"},u.escapeTestNoEncode=/[<>"']|&(?!#?\w+;
)/,u.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;
)/g;
var f={
},m=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function g(){
}function v(t){
for(var e,n,o=1;
o<arguments.length;
o++)for(n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);
return t}function _(t,e){
var n=t.replace(/\|/g,function(t,e,n){
for(var o=!1,i=e;
--i>=0&&"\\"===n[i];
)o=!o;
return o?"|":" |"}).split(/ \|/),o=0;
if(n.length>e)n.splice(e);
else for(;
n.length<e;
)n.push("");
for(;
o<n.length;
o++)n[o]=n[o].trim().replace(/\\\|/g,"|");
return n}function y(t,e,n){
if(0===t.length)return"";
for(var o=0;
o<t.length;
){
var i=t.charAt(t.length-o-1);
if(i!==e||n){
if(i===e||!n)break;
o++}else o++}return t.substr(0,t.length-o)}function b(t,e){
if(-1===t.indexOf(e[1]))return-1;
for(var n=0,o=0;
o<t.length;
o++)if("\\"===t[o])o++;
else if(t[o]===e[0])n++;
else if(t[o]===e[1]&&--n<0)return o;
return-1}function w(t,e,n){
if(null==t)throw new Error("marked(): input parameter is undefined or null");
if("string"!=typeof t)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");
if(n||"function"==typeof e){
n||(n=e,e=null);
var i,r,s=(e=v({
},w.defaults,e||{
})).highlight,a=0;
try{
i=o.lex(t,e)}catch(t){
return n(t)}r=i.length;
var l=function(t){
if(t)return e.highlight=s,n(t);
var o;
try{
o=c.parse(i,e)}catch(e){
t=e}return e.highlight=s,t?n(t):n(null,o)};
if(!s||s.length<3)return l();
if(delete e.highlight,!r)return l();
for(;
a<i.length;
a++)!function(t){
"code"!==t.type?--r||l():s(t.text,t.lang,function(e,n){
return e?l(e):null==n||n===t.text?--r||l():(t.text=n,t.escaped=!0,void(--r||l()))})}(i[a])}else try{
return e&&(e=v({
},w.defaults,e)),c.parse(o.lex(t,e),e)}catch(t){
if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",(e||w.defaults).silent)return"<p>An error occurred:</p><pre>"+u(t.message+"",!0)+"</pre>";
throw t}}g.exec=g,w.options=w.setOptions=function(t){
return v(w.defaults,t),w},w.getDefaults=function(){
return{
baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new s,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},w.defaults=w.getDefaults(),w.Parser=c,w.parser=c.parse,w.Renderer=s,w.TextRenderer=a,w.Lexer=o,w.lexer=o.lex,w.InlineLexer=r,w.inlineLexer=r.output,w.Slugger=l,w.parse=w,t.exports=w}(this||"undefined"!=typeof window&&window)}).call(this,n(20))},function(t,e){
var n;
n=function(){
return this}();
try{
n=n||new Function("return this")()}catch(t){
"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){
var o;

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(e,n){
"use strict";
"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){
if(!t.document)throw new Error("jQuery requires a window with a document");
return n(t)}:n(e)}("undefined"!=typeof window?window:this,function(n,i){
"use strict";
var r=[],s=n.document,a=Object.getPrototypeOf,c=r.slice,l=r.concat,u=r.push,d=r.indexOf,h={
},p=h.toString,f=h.hasOwnProperty,m=f.toString,g=m.call(Object),v={
},_=function(t){
return"function"==typeof t&&"number"!=typeof t.nodeType},y=function(t){
return null!=t&&t===t.window},b={
type:!0,src:!0,noModule:!0};
function w(t,e,n){
var o,i=(e=e||s).createElement("script");
if(i.text=t,n)for(o in b)n[o]&&(i[o]=n[o]);
e.head.appendChild(i).parentNode.removeChild(i)}function x(t){
return null==t?t+"":"object"==typeof t||"function"==typeof t?h[p.call(t)]||"object":typeof t}var L=function(t,e){
return new L.fn.init(t,e)},C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function P(t){
var e=!!t&&"length"in t&&t.length,n=x(t);
return!_(t)&&!y(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}L.fn=L.prototype={
jquery:"3.3.1",constructor:L,length:0,toArray:function(){
return c.call(this)},get:function(t){
return null==t?c.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){
var e=L.merge(this.constructor(),t);
return e.prevObject=this,e},each:function(t){
return L.each(this,t)},map:function(t){
return this.pushStack(L.map(this,function(e,n){
return t.call(e,n,e)}))},slice:function(){
return this.pushStack(c.apply(this,arguments))},first:function(){
return this.eq(0)},last:function(){
return this.eq(-1)},eq:function(t){
var e=this.length,n=+t+(t<0?e:0);
return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){
return this.prevObject||this.constructor()},push:u,sort:r.sort,splice:r.splice},L.extend=L.fn.extend=function(){
var t,e,n,o,i,r,s=arguments[0]||{
},a=1,c=arguments.length,l=!1;
for("boolean"==typeof s&&(l=s,s=arguments[a]||{
},a++),"object"==typeof s||_(s)||(s={
}),a===c&&(s=this,a--);
a<c;
a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],s!==(o=t[e])&&(l&&o&&(L.isPlainObject(o)||(i=Array.isArray(o)))?(i?(i=!1,r=n&&Array.isArray(n)?n:[]):r=n&&L.isPlainObject(n)?n:{
},s[e]=L.extend(l,r,o)):void 0!==o&&(s[e]=o));
return s},L.extend({
expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){
throw new Error(t)},noop:function(){
},isPlainObject:function(t){
var e,n;
return!(!t||"[object Object]"!==p.call(t))&&(!(e=a(t))||"function"==typeof(n=f.call(e,"constructor")&&e.constructor)&&m.call(n)===g)},isEmptyObject:function(t){
var e;
for(e in t)return!1;
return!0},globalEval:function(t){
w(t)},each:function(t,e){
var n,o=0;
if(P(t))for(n=t.length;
o<n&&!1!==e.call(t[o],o,t[o]);
o++);
else for(o in t)if(!1===e.call(t[o],o,t[o]))break;
return t},trim:function(t){
return null==t?"":(t+"").replace(C,"")},makeArray:function(t,e){
var n=e||[];
return null!=t&&(P(Object(t))?L.merge(n,"string"==typeof t?[t]:t):u.call(n,t)),n},inArray:function(t,e,n){
return null==e?-1:d.call(e,t,n)},merge:function(t,e){
for(var n=+e.length,o=0,i=t.length;
o<n;
o++)t[i++]=e[o];
return t.length=i,t},grep:function(t,e,n){
for(var o=[],i=0,r=t.length,s=!n;
i<r;
i++)!e(t[i],i)!==s&&o.push(t[i]);
return o},map:function(t,e,n){
var o,i,r=0,s=[];
if(P(t))for(o=t.length;
r<o;
r++)null!=(i=e(t[r],r,n))&&s.push(i);
else for(r in t)null!=(i=e(t[r],r,n))&&s.push(i);
return l.apply([],s)},guid:1,support:v}),"function"==typeof Symbol&&(L.fn[Symbol.iterator]=r[Symbol.iterator]),L.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){
h["[object "+e+"]"]=e.toLowerCase()});
var E=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(t){
var e,n,o,i,r,s,a,c,l,u,d,h,p,f,m,g,v,_,y,b="sizzle"+1*new Date,w=t.document,x=0,L=0,C=st(),P=st(),E=st(),T=function(t,e){
return t===e&&(d=!0),0},k={
}.hasOwnProperty,S=[],D=S.pop,O=S.push,A=S.push,M=S.slice,j=function(t,e){
for(var n=0,o=t.length;
n<o;
n++)if(t[n]===e)return n;
return-1},N="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",B="\\["+I+"*("+R+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+I+"*\\]",z=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",U=new RegExp(I+"+","g"),Z=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),q=new RegExp("^"+I+"*,"+I+"*"),F=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),H=new RegExp("="+I+"*([^\\]'\"]*?)"+I+"*\\]","g"),W=new RegExp(z),$=new RegExp("^"+R+"$"),G={
ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+N+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,J=/^[^{
]+\{
\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,X=/[+~]/,Q=new RegExp("\\\\([\\da-f]{
1,6}"+I+"?|("+I+")|.)","ig"),tt=function(t,e,n){
var o="0x"+e-65536;
return o!=o||n?e:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)},et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,nt=function(t,e){
return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},ot=function(){
h()},it=_t(function(t){
return!0===t.disabled&&("form"in t||"label"in t)},{
dir:"parentNode",next:"legend"});
try{
A.apply(S=M.call(w.childNodes),w.childNodes),S[w.childNodes.length].nodeType}catch(t){
A={
apply:S.length?function(t,e){
O.apply(t,M.call(e))}:function(t,e){
for(var n=t.length,o=0;
t[n++]=e[o++];
);
t.length=n-1}}}function rt(t,e,o,i){
var r,a,l,u,d,f,v,_=e&&e.ownerDocument,x=e?e.nodeType:9;
if(o=o||[],"string"!=typeof t||!t||1!==x&&9!==x&&11!==x)return o;
if(!i&&((e?e.ownerDocument||e:w)!==p&&h(e),e=e||p,m)){
if(11!==x&&(d=Y.exec(t)))if(r=d[1]){
if(9===x){
if(!(l=e.getElementById(r)))return o;
if(l.id===r)return o.push(l),o}else if(_&&(l=_.getElementById(r))&&y(e,l)&&l.id===r)return o.push(l),o}else{
if(d[2])return A.apply(o,e.getElementsByTagName(t)),o;
if((r=d[3])&&n.getElementsByClassName&&e.getElementsByClassName)return A.apply(o,e.getElementsByClassName(r)),o}if(n.qsa&&!E[t+" "]&&(!g||!g.test(t))){
if(1!==x)_=e,v=t;
else if("object"!==e.nodeName.toLowerCase()){
for((u=e.getAttribute("id"))?u=u.replace(et,nt):e.setAttribute("id",u=b),a=(f=s(t)).length;
a--;
)f[a]="#"+u+" "+vt(f[a]);
v=f.join(","),_=X.test(t)&&mt(e.parentNode)||e}if(v)try{
return A.apply(o,_.querySelectorAll(v)),o}catch(t){
}finally{
u===b&&e.removeAttribute("id")}}}return c(t.replace(Z,"$1"),e,o,i)}function st(){
var t=[];
return function e(n,i){
return t.push(n+" ")>o.cacheLength&&delete e[t.shift()],e[n+" "]=i}}function at(t){
return t[b]=!0,t}function ct(t){
var e=p.createElement("fieldset");
try{
return!!t(e)}catch(t){
return!1}finally{
e.parentNode&&e.parentNode.removeChild(e),e=null}}function lt(t,e){
for(var n=t.split("|"),i=n.length;
i--;
)o.attrHandle[n[i]]=e}function ut(t,e){
var n=e&&t,o=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;
if(o)return o;
if(n)for(;
n=n.nextSibling;
)if(n===e)return-1;
return t?1:-1}function dt(t){
return function(e){
return"input"===e.nodeName.toLowerCase()&&e.type===t}}function ht(t){
return function(e){
var n=e.nodeName.toLowerCase();
return("input"===n||"button"===n)&&e.type===t}}function pt(t){
return function(e){
return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&it(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ft(t){
return at(function(e){
return e=+e,at(function(n,o){
for(var i,r=t([],n.length,e),s=r.length;
s--;
)n[i=r[s]]&&(n[i]=!(o[i]=n[i]))})})}function mt(t){
return t&&void 0!==t.getElementsByTagName&&t}for(e in n=rt.support={
},r=rt.isXML=function(t){
var e=t&&(t.ownerDocument||t).documentElement;
return!!e&&"HTML"!==e.nodeName},h=rt.setDocument=function(t){
var e,i,s=t?t.ownerDocument||t:w;
return s!==p&&9===s.nodeType&&s.documentElement?(f=(p=s).documentElement,m=!r(p),w!==p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",ot,!1):i.attachEvent&&i.attachEvent("onunload",ot)),n.attributes=ct(function(t){
return t.className="i",!t.getAttribute("className")}),n.getElementsByTagName=ct(function(t){
return t.appendChild(p.createComment("")),!t.getElementsByTagName("*").length}),n.getElementsByClassName=J.test(p.getElementsByClassName),n.getById=ct(function(t){
return f.appendChild(t).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),n.getById?(o.filter.ID=function(t){
var e=t.replace(Q,tt);
return function(t){
return t.getAttribute("id")===e}},o.find.ID=function(t,e){
if(void 0!==e.getElementById&&m){
var n=e.getElementById(t);
return n?[n]:[]}}):(o.filter.ID=function(t){
var e=t.replace(Q,tt);
return function(t){
var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");
return n&&n.value===e}},o.find.ID=function(t,e){
if(void 0!==e.getElementById&&m){
var n,o,i,r=e.getElementById(t);
if(r){
if((n=r.getAttributeNode("id"))&&n.value===t)return[r];
for(i=e.getElementsByName(t),o=0;
r=i[o++];
)if((n=r.getAttributeNode("id"))&&n.value===t)return[r]}return[]}}),o.find.TAG=n.getElementsByTagName?function(t,e){
return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){
var n,o=[],i=0,r=e.getElementsByTagName(t);
if("*"===t){
for(;
n=r[i++];
)1===n.nodeType&&o.push(n);
return o}return r},o.find.CLASS=n.getElementsByClassName&&function(t,e){
if(void 0!==e.getElementsByClassName&&m)return e.getElementsByClassName(t)},v=[],g=[],(n.qsa=J.test(p.querySelectorAll))&&(ct(function(t){
f.appendChild(t).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+I+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||g.push("\\["+I+"*(?:value|"+N+")"),t.querySelectorAll("[id~="+b+"-]").length||g.push("~="),t.querySelectorAll(":checked").length||g.push(":checked"),t.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]")}),ct(function(t){
t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var e=p.createElement("input");
e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&g.push("name"+I+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),f.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=J.test(_=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ct(function(t){
n.disconnectedMatch=_.call(t,"*"),_.call(t,"[s!='']:x"),v.push("!=",z)}),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),e=J.test(f.compareDocumentPosition),y=e||J.test(f.contains)?function(t,e){
var n=9===t.nodeType?t.documentElement:t,o=e&&e.parentNode;
return t===o||!(!o||1!==o.nodeType||!(n.contains?n.contains(o):t.compareDocumentPosition&&16&t.compareDocumentPosition(o)))}:function(t,e){
if(e)for(;
e=e.parentNode;
)if(e===t)return!0;
return!1},T=e?function(t,e){
if(t===e)return d=!0,0;
var o=!t.compareDocumentPosition-!e.compareDocumentPosition;
return o||(1&(o=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!n.sortDetached&&e.compareDocumentPosition(t)===o?t===p||t.ownerDocument===w&&y(w,t)?-1:e===p||e.ownerDocument===w&&y(w,e)?1:u?j(u,t)-j(u,e):0:4&o?-1:1)}:function(t,e){
if(t===e)return d=!0,0;
var n,o=0,i=t.parentNode,r=e.parentNode,s=[t],a=[e];
if(!i||!r)return t===p?-1:e===p?1:i?-1:r?1:u?j(u,t)-j(u,e):0;
if(i===r)return ut(t,e);
for(n=t;
n=n.parentNode;
)s.unshift(n);
for(n=e;
n=n.parentNode;
)a.unshift(n);
for(;
s[o]===a[o];
)o++;
return o?ut(s[o],a[o]):s[o]===w?-1:a[o]===w?1:0},p):p},rt.matches=function(t,e){
return rt(t,null,null,e)},rt.matchesSelector=function(t,e){
if((t.ownerDocument||t)!==p&&h(t),e=e.replace(H,"='$1']"),n.matchesSelector&&m&&!E[e+" "]&&(!v||!v.test(e))&&(!g||!g.test(e)))try{
var o=_.call(t,e);
if(o||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return o}catch(t){
}return rt(e,p,null,[t]).length>0},rt.contains=function(t,e){
return(t.ownerDocument||t)!==p&&h(t),y(t,e)},rt.attr=function(t,e){
(t.ownerDocument||t)!==p&&h(t);
var i=o.attrHandle[e.toLowerCase()],r=i&&k.call(o.attrHandle,e.toLowerCase())?i(t,e,!m):void 0;
return void 0!==r?r:n.attributes||!m?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},rt.escape=function(t){
return(t+"").replace(et,nt)},rt.error=function(t){
throw new Error("Syntax error, unrecognized expression: "+t)},rt.uniqueSort=function(t){
var e,o=[],i=0,r=0;
if(d=!n.detectDuplicates,u=!n.sortStable&&t.slice(0),t.sort(T),d){
for(;
e=t[r++];
)e===t[r]&&(i=o.push(r));
for(;
i--;
)t.splice(o[i],1)}return u=null,t},i=rt.getText=function(t){
var e,n="",o=0,r=t.nodeType;
if(r){
if(1===r||9===r||11===r){
if("string"==typeof t.textContent)return t.textContent;
for(t=t.firstChild;
t;
t=t.nextSibling)n+=i(t)}else if(3===r||4===r)return t.nodeValue}else for(;
e=t[o++];
)n+=i(e);
return n},(o=rt.selectors={
cacheLength:50,createPseudo:at,match:G,attrHandle:{
},find:{
},relative:{
">":{
dir:"parentNode",first:!0}," ":{
dir:"parentNode"},"+":{
dir:"previousSibling",first:!0},"~":{
dir:"previousSibling"}},preFilter:{
ATTR:function(t){
return t[1]=t[1].replace(Q,tt),t[3]=(t[3]||t[4]||t[5]||"").replace(Q,tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){
return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||rt.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&rt.error(t[0]),t},PSEUDO:function(t){
var e,n=!t[6]&&t[2];
return G.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&W.test(n)&&(e=s(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{
TAG:function(t){
var e=t.replace(Q,tt).toLowerCase();
return"*"===t?function(){
return!0}:function(t){
return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){
var e=C[t+" "];
return e||(e=new RegExp("(^|"+I+")"+t+"("+I+"|$)"))&&C(t,function(t){
return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,n){
return function(o){
var i=rt.attr(o,t);
return null==i?"!="===e:!e||(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i.replace(U," ")+" ").indexOf(n)>-1:"|="===e&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,o,i){
var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;
return 1===o&&0===i?function(t){
return!!t.parentNode}:function(e,n,c){
var l,u,d,h,p,f,m=r!==s?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),_=!c&&!a,y=!1;
if(g){
if(r){
for(;
m;
){
for(h=e;
h=h[m];
)if(a?h.nodeName.toLowerCase()===v:1===h.nodeType)return!1;
f=m="only"===t&&!f&&"nextSibling"}return!0}if(f=[s?g.firstChild:g.lastChild],s&&_){
for(y=(p=(l=(u=(d=(h=g)[b]||(h[b]={
}))[h.uniqueID]||(d[h.uniqueID]={
}))[t]||[])[0]===x&&l[1])&&l[2],h=p&&g.childNodes[p];
h=++p&&h&&h[m]||(y=p=0)||f.pop();
)if(1===h.nodeType&&++y&&h===e){
u[t]=[x,p,y];
break}}else if(_&&(y=p=(l=(u=(d=(h=e)[b]||(h[b]={
}))[h.uniqueID]||(d[h.uniqueID]={
}))[t]||[])[0]===x&&l[1]),!1===y)for(;
(h=++p&&h&&h[m]||(y=p=0)||f.pop())&&((a?h.nodeName.toLowerCase()!==v:1!==h.nodeType)||!++y||(_&&((u=(d=h[b]||(h[b]={
}))[h.uniqueID]||(d[h.uniqueID]={
}))[t]=[x,y]),h!==e));
);
return(y-=i)===o||y%o==0&&y/o>=0}}},PSEUDO:function(t,e){
var n,i=o.pseudos[t]||o.setFilters[t.toLowerCase()]||rt.error("unsupported pseudo: "+t);
return i[b]?i(e):i.length>1?(n=[t,t,"",e],o.setFilters.hasOwnProperty(t.toLowerCase())?at(function(t,n){
for(var o,r=i(t,e),s=r.length;
s--;
)t[o=j(t,r[s])]=!(n[o]=r[s])}):function(t){
return i(t,0,n)}):i}},pseudos:{
not:at(function(t){
var e=[],n=[],o=a(t.replace(Z,"$1"));
return o[b]?at(function(t,e,n,i){
for(var r,s=o(t,null,i,[]),a=t.length;
a--;
)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,i,r){
return e[0]=t,o(e,null,r,n),e[0]=null,!n.pop()}}),has:at(function(t){
return function(e){
return rt(t,e).length>0}}),contains:at(function(t){
return t=t.replace(Q,tt),function(e){
return(e.textContent||e.innerText||i(e)).indexOf(t)>-1}}),lang:at(function(t){
return $.test(t||"")||rt.error("unsupported lang: "+t),t=t.replace(Q,tt).toLowerCase(),function(e){
var n;
do{
if(n=m?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);
return!1}}),target:function(e){
var n=t.location&&t.location.hash;
return n&&n.slice(1)===e.id},root:function(t){
return t===f},focus:function(t){
return t===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:pt(!1),disabled:pt(!0),checked:function(t){
var e=t.nodeName.toLowerCase();
return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){
return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){
for(t=t.firstChild;
t;
t=t.nextSibling)if(t.nodeType<6)return!1;
return!0},parent:function(t){
return!o.pseudos.empty(t)},header:function(t){
return K.test(t.nodeName)},input:function(t){
return V.test(t.nodeName)},button:function(t){
var e=t.nodeName.toLowerCase();
return"input"===e&&"button"===t.type||"button"===e},text:function(t){
var e;
return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:ft(function(){
return[0]}),last:ft(function(t,e){
return[e-1]}),eq:ft(function(t,e,n){
return[n<0?n+e:n]}),even:ft(function(t,e){
for(var n=0;
n<e;
n+=2)t.push(n);
return t}),odd:ft(function(t,e){
for(var n=1;
n<e;
n+=2)t.push(n);
return t}),lt:ft(function(t,e,n){
for(var o=n<0?n+e:n;
--o>=0;
)t.push(o);
return t}),gt:ft(function(t,e,n){
for(var o=n<0?n+e:n;
++o<e;
)t.push(o);
return t})}}).pseudos.nth=o.pseudos.eq,{
radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[e]=dt(e);
for(e in{
submit:!0,reset:!0})o.pseudos[e]=ht(e);
function gt(){
}function vt(t){
for(var e=0,n=t.length,o="";
e<n;
e++)o+=t[e].value;
return o}function _t(t,e,n){
var o=e.dir,i=e.next,r=i||o,s=n&&"parentNode"===r,a=L++;
return e.first?function(e,n,i){
for(;
e=e[o];
)if(1===e.nodeType||s)return t(e,n,i);
return!1}:function(e,n,c){
var l,u,d,h=[x,a];
if(c){
for(;
e=e[o];
)if((1===e.nodeType||s)&&t(e,n,c))return!0}else for(;
e=e[o];
)if(1===e.nodeType||s)if(u=(d=e[b]||(e[b]={
}))[e.uniqueID]||(d[e.uniqueID]={
}),i&&i===e.nodeName.toLowerCase())e=e[o]||e;
else{
if((l=u[r])&&l[0]===x&&l[1]===a)return h[2]=l[2];
if(u[r]=h,h[2]=t(e,n,c))return!0}return!1}}function yt(t){
return t.length>1?function(e,n,o){
for(var i=t.length;
i--;
)if(!t[i](e,n,o))return!1;
return!0}:t[0]}function bt(t,e,n,o,i){
for(var r,s=[],a=0,c=t.length,l=null!=e;
a<c;
a++)(r=t[a])&&(n&&!n(r,o,i)||(s.push(r),l&&e.push(a)));
return s}function wt(t,e,n,o,i,r){
return o&&!o[b]&&(o=wt(o)),i&&!i[b]&&(i=wt(i,r)),at(function(r,s,a,c){
var l,u,d,h=[],p=[],f=s.length,m=r||function(t,e,n){
for(var o=0,i=e.length;
o<i;
o++)rt(t,e[o],n);
return n}(e||"*",a.nodeType?[a]:a,[]),g=!t||!r&&e?m:bt(m,h,t,a,c),v=n?i||(r?t:f||o)?[]:s:g;
if(n&&n(g,v,a,c),o)for(l=bt(v,p),o(l,[],a,c),u=l.length;
u--;
)(d=l[u])&&(v[p[u]]=!(g[p[u]]=d));
if(r){
if(i||t){
if(i){
for(l=[],u=v.length;
u--;
)(d=v[u])&&l.push(g[u]=d);
i(null,v=[],l,c)}for(u=v.length;
u--;
)(d=v[u])&&(l=i?j(r,d):h[u])>-1&&(r[l]=!(s[l]=d))}}else v=bt(v===s?v.splice(f,v.length):v),i?i(null,s,v,c):A.apply(s,v)})}function xt(t){
for(var e,n,i,r=t.length,s=o.relative[t[0].type],a=s||o.relative[" "],c=s?1:0,u=_t(function(t){
return t===e},a,!0),d=_t(function(t){
return j(e,t)>-1},a,!0),h=[function(t,n,o){
var i=!s&&(o||n!==l)||((e=n).nodeType?u(t,n,o):d(t,n,o));
return e=null,i}];
c<r;
c++)if(n=o.relative[t[c].type])h=[_t(yt(h),n)];
else{
if((n=o.filter[t[c].type].apply(null,t[c].matches))[b]){
for(i=++c;
i<r&&!o.relative[t[i].type];
i++);
return wt(c>1&&yt(h),c>1&&vt(t.slice(0,c-1).concat({
value:" "===t[c-2].type?"*":""})).replace(Z,"$1"),n,c<i&&xt(t.slice(c,i)),i<r&&xt(t=t.slice(i)),i<r&&vt(t))}h.push(n)}return yt(h)}return gt.prototype=o.filters=o.pseudos,o.setFilters=new gt,s=rt.tokenize=function(t,e){
var n,i,r,s,a,c,l,u=P[t+" "];
if(u)return e?0:u.slice(0);
for(a=t,c=[],l=o.preFilter;
a;
){
for(s in n&&!(i=q.exec(a))||(i&&(a=a.slice(i[0].length)||a),c.push(r=[])),n=!1,(i=F.exec(a))&&(n=i.shift(),r.push({
value:n,type:i[0].replace(Z," ")}),a=a.slice(n.length)),o.filter)!(i=G[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),r.push({
value:n,type:s,matches:i}),a=a.slice(n.length));
if(!n)break}return e?a.length:a?rt.error(t):P(t,c).slice(0)},a=rt.compile=function(t,e){
var n,i=[],r=[],a=E[t+" "];
if(!a){
for(e||(e=s(t)),n=e.length;
n--;
)(a=xt(e[n]))[b]?i.push(a):r.push(a);
(a=E(t,function(t,e){
var n=e.length>0,i=t.length>0,r=function(r,s,a,c,u){
var d,f,g,v=0,_="0",y=r&&[],b=[],w=l,L=r||i&&o.find.TAG("*",u),C=x+=null==w?1:Math.random()||.1,P=L.length;
for(u&&(l=s===p||s||u);
_!==P&&null!=(d=L[_]);
_++){
if(i&&d){
for(f=0,s||d.ownerDocument===p||(h(d),a=!m);
g=t[f++];
)if(g(d,s||p,a)){
c.push(d);
break}u&&(x=C)}n&&((d=!g&&d)&&v--,r&&y.push(d))}if(v+=_,n&&_!==v){
for(f=0;
g=e[f++];
)g(y,b,s,a);
if(r){
if(v>0)for(;
_--;
)y[_]||b[_]||(b[_]=D.call(c));
b=bt(b)}A.apply(c,b),u&&!r&&b.length>0&&v+e.length>1&&rt.uniqueSort(c)}return u&&(x=C,l=w),y};
return n?at(r):r}(r,i))).selector=t}return a},c=rt.select=function(t,e,n,i){
var r,c,l,u,d,h="function"==typeof t&&t,p=!i&&s(t=h.selector||t);
if(n=n||[],1===p.length){
if((c=p[0]=p[0].slice(0)).length>2&&"ID"===(l=c[0]).type&&9===e.nodeType&&m&&o.relative[c[1].type]){
if(!(e=(o.find.ID(l.matches[0].replace(Q,tt),e)||[])[0]))return n;
h&&(e=e.parentNode),t=t.slice(c.shift().value.length)}for(r=G.needsContext.test(t)?0:c.length;
r--&&(l=c[r],!o.relative[u=l.type]);
)if((d=o.find[u])&&(i=d(l.matches[0].replace(Q,tt),X.test(c[0].type)&&mt(e.parentNode)||e))){
if(c.splice(r,1),!(t=i.length&&vt(c)))return A.apply(n,i),n;
break}}return(h||a(t,p))(i,e,!m,n,!e||X.test(t)&&mt(e.parentNode)||e),n},n.sortStable=b.split("").sort(T).join("")===b,n.detectDuplicates=!!d,h(),n.sortDetached=ct(function(t){
return 1&t.compareDocumentPosition(p.createElement("fieldset"))}),ct(function(t){
return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||lt("type|href|height|width",function(t,e,n){
if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),n.attributes&&ct(function(t){
return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||lt("value",function(t,e,n){
if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),ct(function(t){
return null==t.getAttribute("disabled")})||lt(N,function(t,e,n){
var o;
if(!n)return!0===t[e]?e.toLowerCase():(o=t.getAttributeNode(e))&&o.specified?o.value:null}),rt}(n);
L.find=E,L.expr=E.selectors,L.expr[":"]=L.expr.pseudos,L.uniqueSort=L.unique=E.uniqueSort,L.text=E.getText,L.isXMLDoc=E.isXML,L.contains=E.contains,L.escapeSelector=E.escape;
var T=function(t,e,n){
for(var o=[],i=void 0!==n;
(t=t[e])&&9!==t.nodeType;
)if(1===t.nodeType){
if(i&&L(t).is(n))break;
o.push(t)}return o},k=function(t,e){
for(var n=[];
t;
t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);
return n},S=L.expr.match.needsContext;
function D(t,e){
return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var O=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function A(t,e,n){
return _(e)?L.grep(t,function(t,o){
return!!e.call(t,o,t)!==n}):e.nodeType?L.grep(t,function(t){
return t===e!==n}):"string"!=typeof e?L.grep(t,function(t){
return d.call(e,t)>-1!==n}):L.filter(e,t,n)}L.filter=function(t,e,n){
var o=e[0];
return n&&(t=":not("+t+")"),1===e.length&&1===o.nodeType?L.find.matchesSelector(o,t)?[o]:[]:L.find.matches(t,L.grep(e,function(t){
return 1===t.nodeType}))},L.fn.extend({
find:function(t){
var e,n,o=this.length,i=this;
if("string"!=typeof t)return this.pushStack(L(t).filter(function(){
for(e=0;
e<o;
e++)if(L.contains(i[e],this))return!0}));
for(n=this.pushStack([]),e=0;
e<o;
e++)L.find(t,i[e],n);
return o>1?L.uniqueSort(n):n},filter:function(t){
return this.pushStack(A(this,t||[],!1))},not:function(t){
return this.pushStack(A(this,t||[],!0))},is:function(t){
return!!A(this,"string"==typeof t&&S.test(t)?L(t):t||[],!1).length}});
var M,j=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(L.fn.init=function(t,e,n){
var o,i;
if(!t)return this;
if(n=n||M,"string"==typeof t){
if(!(o="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:j.exec(t))||!o[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);
if(o[1]){
if(e=e instanceof L?e[0]:e,L.merge(this,L.parseHTML(o[1],e&&e.nodeType?e.ownerDocument||e:s,!0)),O.test(o[1])&&L.isPlainObject(e))for(o in e)_(this[o])?this[o](e[o]):this.attr(o,e[o]);
return this}return(i=s.getElementById(o[2]))&&(this[0]=i,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):_(t)?void 0!==n.ready?n.ready(t):t(L):L.makeArray(t,this)}).prototype=L.fn,M=L(s);
var N=/^(?:parents|prev(?:Until|All))/,I={
children:!0,contents:!0,next:!0,prev:!0};
function R(t,e){
for(;
(t=t[e])&&1!==t.nodeType;
);
return t}L.fn.extend({
has:function(t){
var e=L(t,this),n=e.length;
return this.filter(function(){
for(var t=0;
t<n;
t++)if(L.contains(this,e[t]))return!0})},closest:function(t,e){
var n,o=0,i=this.length,r=[],s="string"!=typeof t&&L(t);
if(!S.test(t))for(;
o<i;
o++)for(n=this[o];
n&&n!==e;
n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&L.find.matchesSelector(n,t))){
r.push(n);
break}return this.pushStack(r.length>1?L.uniqueSort(r):r)},index:function(t){
return t?"string"==typeof t?d.call(L(t),this[0]):d.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){
return this.pushStack(L.uniqueSort(L.merge(this.get(),L(t,e))))},addBack:function(t){
return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),L.each({
parent:function(t){
var e=t.parentNode;
return e&&11!==e.nodeType?e:null},parents:function(t){
return T(t,"parentNode")},parentsUntil:function(t,e,n){
return T(t,"parentNode",n)},next:function(t){
return R(t,"nextSibling")},prev:function(t){
return R(t,"previousSibling")},nextAll:function(t){
return T(t,"nextSibling")},prevAll:function(t){
return T(t,"previousSibling")},nextUntil:function(t,e,n){
return T(t,"nextSibling",n)},prevUntil:function(t,e,n){
return T(t,"previousSibling",n)},siblings:function(t){
return k((t.parentNode||{
}).firstChild,t)},children:function(t){
return k(t.firstChild)},contents:function(t){
return D(t,"iframe")?t.contentDocument:(D(t,"template")&&(t=t.content||t),L.merge([],t.childNodes))}},function(t,e){
L.fn[t]=function(n,o){
var i=L.map(this,e,n);
return"Until"!==t.slice(-5)&&(o=n),o&&"string"==typeof o&&(i=L.filter(o,i)),this.length>1&&(I[t]||L.uniqueSort(i),N.test(t)&&i.reverse()),this.pushStack(i)}});
var B=/[^\x20\t\r\n\f]+/g;
function z(t){
return t}function U(t){
throw t}function Z(t,e,n,o){
var i;
try{
t&&_(i=t.promise)?i.call(t).done(e).fail(n):t&&_(i=t.then)?i.call(t,e,n):e.apply(void 0,[t].slice(o))}catch(t){
n.apply(void 0,[t])}}L.Callbacks=function(t){
t="string"==typeof t?function(t){
var e={
};
return L.each(t.match(B)||[],function(t,n){
e[n]=!0}),e}(t):L.extend({
},t);
var e,n,o,i,r=[],s=[],a=-1,c=function(){
for(i=i||t.once,o=e=!0;
s.length;
a=-1)for(n=s.shift();
++a<r.length;
)!1===r[a].apply(n[0],n[1])&&t.stopOnFalse&&(a=r.length,n=!1);
t.memory||(n=!1),e=!1,i&&(r=n?[]:"")},l={
add:function(){
return r&&(n&&!e&&(a=r.length-1,s.push(n)),function e(n){
L.each(n,function(n,o){
_(o)?t.unique&&l.has(o)||r.push(o):o&&o.length&&"string"!==x(o)&&e(o)})}(arguments),n&&!e&&c()),this},remove:function(){
return L.each(arguments,function(t,e){
for(var n;
(n=L.inArray(e,r,n))>-1;
)r.splice(n,1),n<=a&&a--}),this},has:function(t){
return t?L.inArray(t,r)>-1:r.length>0},empty:function(){
return r&&(r=[]),this},disable:function(){
return i=s=[],r=n="",this},disabled:function(){
return!r},lock:function(){
return i=s=[],n||e||(r=n=""),this},locked:function(){
return!!i},fireWith:function(t,n){
return i||(n=[t,(n=n||[]).slice?n.slice():n],s.push(n),e||c()),this},fire:function(){
return l.fireWith(this,arguments),this},fired:function(){
return!!o}};
return l},L.extend({
Deferred:function(t){
var e=[["notify","progress",L.Callbacks("memory"),L.Callbacks("memory"),2],["resolve","done",L.Callbacks("once memory"),L.Callbacks("once memory"),0,"resolved"],["reject","fail",L.Callbacks("once memory"),L.Callbacks("once memory"),1,"rejected"]],o="pending",i={
state:function(){
return o},always:function(){
return r.done(arguments).fail(arguments),this},catch:function(t){
return i.then(null,t)},pipe:function(){
var t=arguments;
return L.Deferred(function(n){
L.each(e,function(e,o){
var i=_(t[o[4]])&&t[o[4]];
r[o[1]](function(){
var t=i&&i.apply(this,arguments);
t&&_(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this,i?[t]:arguments)})}),t=null}).promise()},then:function(t,o,i){
var r=0;
function s(t,e,o,i){
return function(){
var a=this,c=arguments,l=function(){
var n,l;
if(!(t<r)){
if((n=o.apply(a,c))===e.promise())throw new TypeError("Thenable self-resolution");
l=n&&("object"==typeof n||"function"==typeof n)&&n.then,_(l)?i?l.call(n,s(r,e,z,i),s(r,e,U,i)):(r++,l.call(n,s(r,e,z,i),s(r,e,U,i),s(r,e,z,e.notifyWith))):(o!==z&&(a=void 0,c=[n]),(i||e.resolveWith)(a,c))}},u=i?l:function(){
try{
l()}catch(n){
L.Deferred.exceptionHook&&L.Deferred.exceptionHook(n,u.stackTrace),t+1>=r&&(o!==U&&(a=void 0,c=[n]),e.rejectWith(a,c))}};
t?u():(L.Deferred.getStackHook&&(u.stackTrace=L.Deferred.getStackHook()),n.setTimeout(u))}}return L.Deferred(function(n){
e[0][3].add(s(0,n,_(i)?i:z,n.notifyWith)),e[1][3].add(s(0,n,_(t)?t:z)),e[2][3].add(s(0,n,_(o)?o:U))}).promise()},promise:function(t){
return null!=t?L.extend(t,i):i}},r={
};
return L.each(e,function(t,n){
var s=n[2],a=n[5];
i[n[1]]=s.add,a&&s.add(function(){
o=a},e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),s.add(n[3].fire),r[n[0]]=function(){
return r[n[0]+"With"](this===r?void 0:this,arguments),this},r[n[0]+"With"]=s.fireWith}),i.promise(r),t&&t.call(r,r),r},when:function(t){
var e=arguments.length,n=e,o=Array(n),i=c.call(arguments),r=L.Deferred(),s=function(t){
return function(n){
o[t]=this,i[t]=arguments.length>1?c.call(arguments):n,--e||r.resolveWith(o,i)}};
if(e<=1&&(Z(t,r.done(s(n)).resolve,r.reject,!e),"pending"===r.state()||_(i[n]&&i[n].then)))return r.then();
for(;
n--;
)Z(i[n],s(n),r.reject);
return r.promise()}});
var q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
L.Deferred.exceptionHook=function(t,e){
n.console&&n.console.warn&&t&&q.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},L.readyException=function(t){
n.setTimeout(function(){
throw t})};
var F=L.Deferred();
function H(){
s.removeEventListener("DOMContentLoaded",H),n.removeEventListener("load",H),L.ready()}L.fn.ready=function(t){
return F.then(t).catch(function(t){
L.readyException(t)}),this},L.extend({
isReady:!1,readyWait:1,ready:function(t){
(!0===t?--L.readyWait:L.isReady)||(L.isReady=!0,!0!==t&&--L.readyWait>0||F.resolveWith(s,[L]))}}),L.ready.then=F.then,"complete"===s.readyState||"loading"!==s.readyState&&!s.documentElement.doScroll?n.setTimeout(L.ready):(s.addEventListener("DOMContentLoaded",H),n.addEventListener("load",H));
var W=function(t,e,n,o,i,r,s){
var a=0,c=t.length,l=null==n;
if("object"===x(n))for(a in i=!0,n)W(t,e,a,n[a],!0,r,s);
else if(void 0!==o&&(i=!0,_(o)||(s=!0),l&&(s?(e.call(t,o),e=null):(l=e,e=function(t,e,n){
return l.call(L(t),n)})),e))for(;
a<c;
a++)e(t[a],n,s?o:o.call(t[a],a,e(t[a],n)));
return i?t:l?e.call(t):c?e(t[0],n):r},$=/^-ms-/,G=/-([a-z])/g;
function V(t,e){
return e.toUpperCase()}function K(t){
return t.replace($,"ms-").replace(G,V)}var J=function(t){
return 1===t.nodeType||9===t.nodeType||!+t.nodeType};
function Y(){
this.expando=L.expando+Y.uid++}Y.uid=1,Y.prototype={
cache:function(t){
var e=t[this.expando];
return e||(e={
},J(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{
value:e,configurable:!0}))),e},set:function(t,e,n){
var o,i=this.cache(t);
if("string"==typeof e)i[K(e)]=n;
else for(o in e)i[K(o)]=e[o];
return i},get:function(t,e){
return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][K(e)]},access:function(t,e,n){
return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){
var n,o=t[this.expando];
if(void 0!==o){
if(void 0!==e){
n=(e=Array.isArray(e)?e.map(K):(e=K(e))in o?[e]:e.match(B)||[]).length;
for(;
n--;
)delete o[e[n]]}(void 0===e||L.isEmptyObject(o))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){
var e=t[this.expando];
return void 0!==e&&!L.isEmptyObject(e)}};
var X=new Y,Q=new Y,tt=/^(?:\{
[\w\W]*\}|\[[\w\W]*\])$/,et=/[A-Z]/g;
function nt(t,e,n){
var o;
if(void 0===n&&1===t.nodeType)if(o="data-"+e.replace(et,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(o))){
try{
n=function(t){
return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:tt.test(t)?JSON.parse(t):t)}(n)}catch(t){
}Q.set(t,e,n)}else n=void 0;
return n}L.extend({
hasData:function(t){
return Q.hasData(t)||X.hasData(t)},data:function(t,e,n){
return Q.access(t,e,n)},removeData:function(t,e){
Q.remove(t,e)},_data:function(t,e,n){
return X.access(t,e,n)},_removeData:function(t,e){
X.remove(t,e)}}),L.fn.extend({
data:function(t,e){
var n,o,i,r=this[0],s=r&&r.attributes;
if(void 0===t){
if(this.length&&(i=Q.get(r),1===r.nodeType&&!X.get(r,"hasDataAttrs"))){
for(n=s.length;
n--;
)s[n]&&0===(o=s[n].name).indexOf("data-")&&(o=K(o.slice(5)),nt(r,o,i[o]));
X.set(r,"hasDataAttrs",!0)}return i}return"object"==typeof t?this.each(function(){
Q.set(this,t)}):W(this,function(e){
var n;
if(r&&void 0===e)return void 0!==(n=Q.get(r,t))?n:void 0!==(n=nt(r,t))?n:void 0;
this.each(function(){
Q.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){
return this.each(function(){
Q.remove(this,t)})}}),L.extend({
queue:function(t,e,n){
var o;
if(t)return e=(e||"fx")+"queue",o=X.get(t,e),n&&(!o||Array.isArray(n)?o=X.access(t,e,L.makeArray(n)):o.push(n)),o||[]},dequeue:function(t,e){
e=e||"fx";
var n=L.queue(t,e),o=n.length,i=n.shift(),r=L._queueHooks(t,e);
"inprogress"===i&&(i=n.shift(),o--),i&&("fx"===e&&n.unshift("inprogress"),delete r.stop,i.call(t,function(){
L.dequeue(t,e)},r)),!o&&r&&r.empty.fire()},_queueHooks:function(t,e){
var n=e+"queueHooks";
return X.get(t,n)||X.access(t,n,{
empty:L.Callbacks("once memory").add(function(){
X.remove(t,[e+"queue",n])})})}}),L.fn.extend({
queue:function(t,e){
var n=2;
return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?L.queue(this[0],t):void 0===e?this:this.each(function(){
var n=L.queue(this,t,e);
L._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&L.dequeue(this,t)})},dequeue:function(t){
return this.each(function(){
L.dequeue(this,t)})},clearQueue:function(t){
return this.queue(t||"fx",[])},promise:function(t,e){
var n,o=1,i=L.Deferred(),r=this,s=this.length,a=function(){
--o||i.resolveWith(r,[r])};
for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";
s--;
)(n=X.get(r[s],t+"queueHooks"))&&n.empty&&(o++,n.empty.add(a));
return a(),i.promise(e)}});
var ot=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,it=new RegExp("^(?:([+-])=|)("+ot+")([a-z%]*)$","i"),rt=["Top","Right","Bottom","Left"],st=function(t,e){
return"none"===(t=e||t).style.display||""===t.style.display&&L.contains(t.ownerDocument,t)&&"none"===L.css(t,"display")},at=function(t,e,n,o){
var i,r,s={
};
for(r in e)s[r]=t.style[r],t.style[r]=e[r];
for(r in i=n.apply(t,o||[]),e)t.style[r]=s[r];
return i};
function ct(t,e,n,o){
var i,r,s=20,a=o?function(){
return o.cur()}:function(){
return L.css(t,e,"")},c=a(),l=n&&n[3]||(L.cssNumber[e]?"":"px"),u=(L.cssNumber[e]||"px"!==l&&+c)&&it.exec(L.css(t,e));
if(u&&u[3]!==l){
for(c/=2,l=l||u[3],u=+c||1;
s--;
)L.style(t,e,u+l),(1-r)*(1-(r=a()/c||.5))<=0&&(s=0),u/=r;
u*=2,L.style(t,e,u+l),n=n||[]}return n&&(u=+u||+c||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],o&&(o.unit=l,o.start=u,o.end=i)),i}var lt={
};
function ut(t){
var e,n=t.ownerDocument,o=t.nodeName,i=lt[o];
return i||(e=n.body.appendChild(n.createElement(o)),i=L.css(e,"display"),e.parentNode.removeChild(e),"none"===i&&(i="block"),lt[o]=i,i)}function dt(t,e){
for(var n,o,i=[],r=0,s=t.length;
r<s;
r++)(o=t[r]).style&&(n=o.style.display,e?("none"===n&&(i[r]=X.get(o,"display")||null,i[r]||(o.style.display="")),""===o.style.display&&st(o)&&(i[r]=ut(o))):"none"!==n&&(i[r]="none",X.set(o,"display",n)));
for(r=0;
r<s;
r++)null!=i[r]&&(t[r].style.display=i[r]);
return t}L.fn.extend({
show:function(){
return dt(this,!0)},hide:function(){
return dt(this)},toggle:function(t){
return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){
st(this)?L(this).show():L(this).hide()})}});
var ht=/^(?:checkbox|radio)$/i,pt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ft=/^$|^module$|\/(?:java|ecma)script/i,mt={
option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
function gt(t,e){
var n;
return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&D(t,e)?L.merge([t],n):n}function vt(t,e){
for(var n=0,o=t.length;
n<o;
n++)X.set(t[n],"globalEval",!e||X.get(e[n],"globalEval"))}mt.optgroup=mt.option,mt.tbody=mt.tfoot=mt.colgroup=mt.caption=mt.thead,mt.th=mt.td;
var _t,yt,bt=/<|&#?\w+;
/;
function wt(t,e,n,o,i){
for(var r,s,a,c,l,u,d=e.createDocumentFragment(),h=[],p=0,f=t.length;
p<f;
p++)if((r=t[p])||0===r)if("object"===x(r))L.merge(h,r.nodeType?[r]:r);
else if(bt.test(r)){
for(s=s||d.appendChild(e.createElement("div")),a=(pt.exec(r)||["",""])[1].toLowerCase(),c=mt[a]||mt._default,s.innerHTML=c[1]+L.htmlPrefilter(r)+c[2],u=c[0];
u--;
)s=s.lastChild;
L.merge(h,s.childNodes),(s=d.firstChild).textContent=""}else h.push(e.createTextNode(r));
for(d.textContent="",p=0;
r=h[p++];
)if(o&&L.inArray(r,o)>-1)i&&i.push(r);
else if(l=L.contains(r.ownerDocument,r),s=gt(d.appendChild(r),"script"),l&&vt(s),n)for(u=0;
r=s[u++];
)ft.test(r.type||"")&&n.push(r);
return d}_t=s.createDocumentFragment().appendChild(s.createElement("div")),(yt=s.createElement("input")).setAttribute("type","radio"),yt.setAttribute("checked","checked"),yt.setAttribute("name","t"),_t.appendChild(yt),v.checkClone=_t.cloneNode(!0).cloneNode(!0).lastChild.checked,_t.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!_t.cloneNode(!0).lastChild.defaultValue;
var xt=s.documentElement,Lt=/^key/,Ct=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Pt=/^([^.]*)(?:\.(.+)|)/;
function Et(){
return!0}function Tt(){
return!1}function kt(){
try{
return s.activeElement}catch(t){
}}function St(t,e,n,o,i,r){
var s,a;
if("object"==typeof e){
for(a in"string"!=typeof n&&(o=o||n,n=void 0),e)St(t,a,n,o,e[a],r);
return t}if(null==o&&null==i?(i=n,o=n=void 0):null==i&&("string"==typeof n?(i=o,o=void 0):(i=o,o=n,n=void 0)),!1===i)i=Tt;
else if(!i)return t;
return 1===r&&(s=i,(i=function(t){
return L().off(t),s.apply(this,arguments)}).guid=s.guid||(s.guid=L.guid++)),t.each(function(){
L.event.add(this,e,i,o,n)})}L.event={
global:{
},add:function(t,e,n,o,i){
var r,s,a,c,l,u,d,h,p,f,m,g=X.get(t);
if(g)for(n.handler&&(n=(r=n).handler,i=r.selector),i&&L.find.matchesSelector(xt,i),n.guid||(n.guid=L.guid++),(c=g.events)||(c=g.events={
}),(s=g.handle)||(s=g.handle=function(e){
return void 0!==L&&L.event.triggered!==e.type?L.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(B)||[""]).length;
l--;
)p=m=(a=Pt.exec(e[l])||[])[1],f=(a[2]||"").split(".").sort(),p&&(d=L.event.special[p]||{
},p=(i?d.delegateType:d.bindType)||p,d=L.event.special[p]||{
},u=L.extend({
type:p,origType:m,data:o,handler:n,guid:n.guid,selector:i,needsContext:i&&L.expr.match.needsContext.test(i),namespace:f.join(".")},r),(h=c[p])||((h=c[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(t,o,f,s)||t.addEventListener&&t.addEventListener(p,s)),d.add&&(d.add.call(t,u),u.handler.guid||(u.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,u):h.push(u),L.event.global[p]=!0)},remove:function(t,e,n,o,i){
var r,s,a,c,l,u,d,h,p,f,m,g=X.hasData(t)&&X.get(t);
if(g&&(c=g.events)){
for(l=(e=(e||"").match(B)||[""]).length;
l--;
)if(p=m=(a=Pt.exec(e[l])||[])[1],f=(a[2]||"").split(".").sort(),p){
for(d=L.event.special[p]||{
},h=c[p=(o?d.delegateType:d.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=h.length;
r--;
)u=h[r],!i&&m!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||o&&o!==u.selector&&("**"!==o||!u.selector)||(h.splice(r,1),u.selector&&h.delegateCount--,d.remove&&d.remove.call(t,u));
s&&!h.length&&(d.teardown&&!1!==d.teardown.call(t,f,g.handle)||L.removeEvent(t,p,g.handle),delete c[p])}else for(p in c)L.event.remove(t,p+e[l],n,o,!0);
L.isEmptyObject(c)&&X.remove(t,"handle events")}},dispatch:function(t){
var e,n,o,i,r,s,a=L.event.fix(t),c=new Array(arguments.length),l=(X.get(this,"events")||{
})[a.type]||[],u=L.event.special[a.type]||{
};
for(c[0]=a,e=1;
e<arguments.length;
e++)c[e]=arguments[e];
if(a.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,a)){
for(s=L.event.handlers.call(this,a,l),e=0;
(i=s[e++])&&!a.isPropagationStopped();
)for(a.currentTarget=i.elem,n=0;
(r=i.handlers[n++])&&!a.isImmediatePropagationStopped();
)a.rnamespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(o=((L.event.special[r.origType]||{
}).handle||r.handler).apply(i.elem,c))&&!1===(a.result=o)&&(a.preventDefault(),a.stopPropagation()));
return u.postDispatch&&u.postDispatch.call(this,a),a.result}},handlers:function(t,e){
var n,o,i,r,s,a=[],c=e.delegateCount,l=t.target;
if(c&&l.nodeType&&!("click"===t.type&&t.button>=1))for(;
l!==this;
l=l.parentNode||this)if(1===l.nodeType&&("click"!==t.type||!0!==l.disabled)){
for(r=[],s={
},n=0;
n<c;
n++)void 0===s[i=(o=e[n]).selector+" "]&&(s[i]=o.needsContext?L(i,this).index(l)>-1:L.find(i,this,null,[l]).length),s[i]&&r.push(o);
r.length&&a.push({
elem:l,handlers:r})}return l=this,c<e.length&&a.push({
elem:l,handlers:e.slice(c)}),a},addProp:function(t,e){
Object.defineProperty(L.Event.prototype,t,{
enumerable:!0,configurable:!0,get:_(e)?function(){
if(this.originalEvent)return e(this.originalEvent)}:function(){
if(this.originalEvent)return this.originalEvent[t]},set:function(e){
Object.defineProperty(this,t,{
enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){
return t[L.expando]?t:new L.Event(t)},special:{
load:{
noBubble:!0},focus:{
trigger:function(){
if(this!==kt()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{
trigger:function(){
if(this===kt()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
trigger:function(){
if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},_default:function(t){
return D(t.target,"a")}},beforeunload:{
postDispatch:function(t){
void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},L.removeEvent=function(t,e,n){
t.removeEventListener&&t.removeEventListener(e,n)},L.Event=function(t,e){
if(!(this instanceof L.Event))return new L.Event(t,e);
t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?Et:Tt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&L.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[L.expando]=!0},L.Event.prototype={
constructor:L.Event,isDefaultPrevented:Tt,isPropagationStopped:Tt,isImmediatePropagationStopped:Tt,isSimulated:!1,preventDefault:function(){
var t=this.originalEvent;
this.isDefaultPrevented=Et,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){
var t=this.originalEvent;
this.isPropagationStopped=Et,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){
var t=this.originalEvent;
this.isImmediatePropagationStopped=Et,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},L.each({
altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){
var e=t.button;
return null==t.which&&Lt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&Ct.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},L.event.addProp),L.each({
mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){
L.event.special[t]={
delegateType:e,bindType:e,handle:function(t){
var n,o=t.relatedTarget,i=t.handleObj;
return o&&(o===this||L.contains(this,o))||(t.type=i.origType,n=i.handler.apply(this,arguments),t.type=e),n}}}),L.fn.extend({
on:function(t,e,n,o){
return St(this,t,e,n,o)},one:function(t,e,n,o){
return St(this,t,e,n,o,1)},off:function(t,e,n){
var o,i;
if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,L(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;
if("object"==typeof t){
for(i in t)this.off(i,e,t[i]);
return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=Tt),this.each(function(){
L.event.remove(this,t,n,e)})}});
var Dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ot=/<script|<style|<link/i,At=/checked\s*(?:[^=]|=\s*.checked.)/i,Mt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function jt(t,e){
return D(t,"table")&&D(11!==e.nodeType?e:e.firstChild,"tr")&&L(t).children("tbody")[0]||t}function Nt(t){
return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function It(t){
return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Rt(t,e){
var n,o,i,r,s,a,c,l;
if(1===e.nodeType){
if(X.hasData(t)&&(r=X.access(t),s=X.set(e,r),l=r.events))for(i in delete s.handle,s.events={
},l)for(n=0,o=l[i].length;
n<o;
n++)L.event.add(e,i,l[i][n]);
Q.hasData(t)&&(a=Q.access(t),c=L.extend({
},a),Q.set(e,c))}}function Bt(t,e,n,o){
e=l.apply([],e);
var i,r,s,a,c,u,d=0,h=t.length,p=h-1,f=e[0],m=_(f);
if(m||h>1&&"string"==typeof f&&!v.checkClone&&At.test(f))return t.each(function(i){
var r=t.eq(i);
m&&(e[0]=f.call(this,i,r.html())),Bt(r,e,n,o)});
if(h&&(r=(i=wt(e,t[0].ownerDocument,!1,t,o)).firstChild,1===i.childNodes.length&&(i=r),r||o)){
for(a=(s=L.map(gt(i,"script"),Nt)).length;
d<h;
d++)c=i,d!==p&&(c=L.clone(c,!0,!0),a&&L.merge(s,gt(c,"script"))),n.call(t[d],c,d);
if(a)for(u=s[s.length-1].ownerDocument,L.map(s,It),d=0;
d<a;
d++)c=s[d],ft.test(c.type||"")&&!X.access(c,"globalEval")&&L.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?L._evalUrl&&L._evalUrl(c.src):w(c.textContent.replace(Mt,""),u,c))}return t}function zt(t,e,n){
for(var o,i=e?L.filter(e,t):t,r=0;
null!=(o=i[r]);
r++)n||1!==o.nodeType||L.cleanData(gt(o)),o.parentNode&&(n&&L.contains(o.ownerDocument,o)&&vt(gt(o,"script")),o.parentNode.removeChild(o));
return t}L.extend({
htmlPrefilter:function(t){
return t.replace(Dt,"<$1></$2>")},clone:function(t,e,n){
var o,i,r,s,a,c,l,u=t.cloneNode(!0),d=L.contains(t.ownerDocument,t);
if(!(v.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||L.isXMLDoc(t)))for(s=gt(u),o=0,i=(r=gt(t)).length;
o<i;
o++)a=r[o],c=s[o],l=void 0,"input"===(l=c.nodeName.toLowerCase())&&ht.test(a.type)?c.checked=a.checked:"input"!==l&&"textarea"!==l||(c.defaultValue=a.defaultValue);
if(e)if(n)for(r=r||gt(t),s=s||gt(u),o=0,i=r.length;
o<i;
o++)Rt(r[o],s[o]);
else Rt(t,u);
return(s=gt(u,"script")).length>0&&vt(s,!d&&gt(t,"script")),u},cleanData:function(t){
for(var e,n,o,i=L.event.special,r=0;
void 0!==(n=t[r]);
r++)if(J(n)){
if(e=n[X.expando]){
if(e.events)for(o in e.events)i[o]?L.event.remove(n,o):L.removeEvent(n,o,e.handle);
n[X.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),L.fn.extend({
detach:function(t){
return zt(this,t,!0)},remove:function(t){
return zt(this,t)},text:function(t){
return W(this,function(t){
return void 0===t?L.text(this):this.empty().each(function(){
1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){
return Bt(this,arguments,function(t){
1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||jt(this,t).appendChild(t)})},prepend:function(){
return Bt(this,arguments,function(t){
if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
var e=jt(this,t);
e.insertBefore(t,e.firstChild)}})},before:function(){
return Bt(this,arguments,function(t){
this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){
return Bt(this,arguments,function(t){
this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){
for(var t,e=0;
null!=(t=this[e]);
e++)1===t.nodeType&&(L.cleanData(gt(t,!1)),t.textContent="");
return this},clone:function(t,e){
return t=null!=t&&t,e=null==e?t:e,this.map(function(){
return L.clone(this,t,e)})},html:function(t){
return W(this,function(t){
var e=this[0]||{
},n=0,o=this.length;
if(void 0===t&&1===e.nodeType)return e.innerHTML;
if("string"==typeof t&&!Ot.test(t)&&!mt[(pt.exec(t)||["",""])[1].toLowerCase()]){
t=L.htmlPrefilter(t);
try{
for(;
n<o;
n++)1===(e=this[n]||{
}).nodeType&&(L.cleanData(gt(e,!1)),e.innerHTML=t);
e=0}catch(t){
}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){
var t=[];
return Bt(this,arguments,function(e){
var n=this.parentNode;
L.inArray(this,t)<0&&(L.cleanData(gt(this)),n&&n.replaceChild(e,this))},t)}}),L.each({
appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){
L.fn[t]=function(t){
for(var n,o=[],i=L(t),r=i.length-1,s=0;
s<=r;
s++)n=s===r?this:this.clone(!0),L(i[s])[e](n),u.apply(o,n.get());
return this.pushStack(o)}});
var Ut=new RegExp("^("+ot+")(?!px)[a-z%]+$","i"),Zt=function(t){
var e=t.ownerDocument.defaultView;
return e&&e.opener||(e=n),e.getComputedStyle(t)},qt=new RegExp(rt.join("|"),"i");
function Ft(t,e,n){
var o,i,r,s,a=t.style;
return(n=n||Zt(t))&&(""!==(s=n.getPropertyValue(e)||n[e])||L.contains(t.ownerDocument,t)||(s=L.style(t,e)),!v.pixelBoxStyles()&&Ut.test(s)&&qt.test(e)&&(o=a.width,i=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=o,a.minWidth=i,a.maxWidth=r)),void 0!==s?s+"":s}function Ht(t,e){
return{
get:function(){
if(!t())return(this.get=e).apply(this,arguments);
delete this.get}}}!function(){
function t(){
if(u){
l.style.cssText="position:absolute;
left:-11111px;
width:60px;
margin-top:1px;
padding:0;
border:0",u.style.cssText="position:relative;
display:block;
box-sizing:border-box;
overflow:scroll;
margin:auto;
border:1px;
padding:1px;
width:60%;
top:1%",xt.appendChild(l).appendChild(u);
var t=n.getComputedStyle(u);
o="1%"!==t.top,c=12===e(t.marginLeft),u.style.right="60%",a=36===e(t.right),i=36===e(t.width),u.style.position="absolute",r=36===u.offsetWidth||"absolute",xt.removeChild(l),u=null}}function e(t){
return Math.round(parseFloat(t))}var o,i,r,a,c,l=s.createElement("div"),u=s.createElement("div");
u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===u.style.backgroundClip,L.extend(v,{
boxSizingReliable:function(){
return t(),i},pixelBoxStyles:function(){
return t(),a},pixelPosition:function(){
return t(),o},reliableMarginLeft:function(){
return t(),c},scrollboxSize:function(){
return t(),r}}))}();
var Wt=/^(none|table(?!-c[ea]).+)/,$t=/^--/,Gt={
position:"absolute",visibility:"hidden",display:"block"},Vt={
letterSpacing:"0",fontWeight:"400"},Kt=["Webkit","Moz","ms"],Jt=s.createElement("div").style;
function Yt(t){
var e=L.cssProps[t];
return e||(e=L.cssProps[t]=function(t){
if(t in Jt)return t;
for(var e=t[0].toUpperCase()+t.slice(1),n=Kt.length;
n--;
)if((t=Kt[n]+e)in Jt)return t}(t)||t),e}function Xt(t,e,n){
var o=it.exec(e);
return o?Math.max(0,o[2]-(n||0))+(o[3]||"px"):e}function Qt(t,e,n,o,i,r){
var s="width"===e?1:0,a=0,c=0;
if(n===(o?"border":"content"))return 0;
for(;
s<4;
s+=2)"margin"===n&&(c+=L.css(t,n+rt[s],!0,i)),o?("content"===n&&(c-=L.css(t,"padding"+rt[s],!0,i)),"margin"!==n&&(c-=L.css(t,"border"+rt[s]+"Width",!0,i))):(c+=L.css(t,"padding"+rt[s],!0,i),"padding"!==n?c+=L.css(t,"border"+rt[s]+"Width",!0,i):a+=L.css(t,"border"+rt[s]+"Width",!0,i));
return!o&&r>=0&&(c+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-r-c-a-.5))),c}function te(t,e,n){
var o=Zt(t),i=Ft(t,e,o),r="border-box"===L.css(t,"boxSizing",!1,o),s=r;
if(Ut.test(i)){
if(!n)return i;
i="auto"}return s=s&&(v.boxSizingReliable()||i===t.style[e]),("auto"===i||!parseFloat(i)&&"inline"===L.css(t,"display",!1,o))&&(i=t["offset"+e[0].toUpperCase()+e.slice(1)],s=!0),(i=parseFloat(i)||0)+Qt(t,e,n||(r?"border":"content"),s,o,i)+"px"}function ee(t,e,n,o,i){
return new ee.prototype.init(t,e,n,o,i)}L.extend({
cssHooks:{
opacity:{
get:function(t,e){
if(e){
var n=Ft(t,"opacity");
return""===n?"1":n}}}},cssNumber:{
animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{
},style:function(t,e,n,o){
if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){
var i,r,s,a=K(e),c=$t.test(e),l=t.style;
if(c||(e=Yt(a)),s=L.cssHooks[e]||L.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(t,!1,o))?i:l[e];
"string"===(r=typeof n)&&(i=it.exec(n))&&i[1]&&(n=ct(t,e,i),r="number"),null!=n&&n==n&&("number"===r&&(n+=i&&i[3]||(L.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),s&&"set"in s&&void 0===(n=s.set(t,n,o))||(c?l.setProperty(e,n):l[e]=n))}},css:function(t,e,n,o){
var i,r,s,a=K(e);
return $t.test(e)||(e=Yt(a)),(s=L.cssHooks[e]||L.cssHooks[a])&&"get"in s&&(i=s.get(t,!0,n)),void 0===i&&(i=Ft(t,e,o)),"normal"===i&&e in Vt&&(i=Vt[e]),""===n||n?(r=parseFloat(i),!0===n||isFinite(r)?r||0:i):i}}),L.each(["height","width"],function(t,e){
L.cssHooks[e]={
get:function(t,n,o){
if(n)return!Wt.test(L.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?te(t,e,o):at(t,Gt,function(){
return te(t,e,o)})},set:function(t,n,o){
var i,r=Zt(t),s="border-box"===L.css(t,"boxSizing",!1,r),a=o&&Qt(t,e,o,s,r);
return s&&v.scrollboxSize()===r.position&&(a-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(r[e])-Qt(t,e,"border",!1,r)-.5)),a&&(i=it.exec(n))&&"px"!==(i[3]||"px")&&(t.style[e]=n,n=L.css(t,e)),Xt(0,n,a)}}}),L.cssHooks.marginLeft=Ht(v.reliableMarginLeft,function(t,e){
if(e)return(parseFloat(Ft(t,"marginLeft"))||t.getBoundingClientRect().left-at(t,{
marginLeft:0},function(){
return t.getBoundingClientRect().left}))+"px"}),L.each({
margin:"",padding:"",border:"Width"},function(t,e){
L.cssHooks[t+e]={
expand:function(n){
for(var o=0,i={
},r="string"==typeof n?n.split(" "):[n];
o<4;
o++)i[t+rt[o]+e]=r[o]||r[o-2]||r[0];
return i}},"margin"!==t&&(L.cssHooks[t+e].set=Xt)}),L.fn.extend({
css:function(t,e){
return W(this,function(t,e,n){
var o,i,r={
},s=0;
if(Array.isArray(e)){
for(o=Zt(t),i=e.length;
s<i;
s++)r[e[s]]=L.css(t,e[s],!1,o);
return r}return void 0!==n?L.style(t,e,n):L.css(t,e)},t,e,arguments.length>1)}}),L.Tween=ee,ee.prototype={
constructor:ee,init:function(t,e,n,o,i,r){
this.elem=t,this.prop=n,this.easing=i||L.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=o,this.unit=r||(L.cssNumber[n]?"":"px")},cur:function(){
var t=ee.propHooks[this.prop];
return t&&t.get?t.get(this):ee.propHooks._default.get(this)},run:function(t){
var e,n=ee.propHooks[this.prop];
return this.options.duration?this.pos=e=L.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ee.propHooks._default.set(this),this}},ee.prototype.init.prototype=ee.prototype,ee.propHooks={
_default:{
get:function(t){
var e;
return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=L.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){
L.fx.step[t.prop]?L.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[L.cssProps[t.prop]]&&!L.cssHooks[t.prop]?t.elem[t.prop]=t.now:L.style(t.elem,t.prop,t.now+t.unit)}}},ee.propHooks.scrollTop=ee.propHooks.scrollLeft={
set:function(t){
t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},L.easing={
linear:function(t){
return t},swing:function(t){
return.5-Math.cos(t*Math.PI)/2},_default:"swing"},L.fx=ee.prototype.init,L.fx.step={
};
var ne,oe,ie=/^(?:toggle|show|hide)$/,re=/queueHooks$/;
function se(){
oe&&(!1===s.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(se):n.setTimeout(se,L.fx.interval),L.fx.tick())}function ae(){
return n.setTimeout(function(){
ne=void 0}),ne=Date.now()}function ce(t,e){
var n,o=0,i={
height:t};
for(e=e?1:0;
o<4;
o+=2-e)i["margin"+(n=rt[o])]=i["padding"+n]=t;
return e&&(i.opacity=i.width=t),i}function le(t,e,n){
for(var o,i=(ue.tweeners[e]||[]).concat(ue.tweeners["*"]),r=0,s=i.length;
r<s;
r++)if(o=i[r].call(n,e,t))return o}function ue(t,e,n){
var o,i,r=0,s=ue.prefilters.length,a=L.Deferred().always(function(){
delete c.elem}),c=function(){
if(i)return!1;
for(var e=ne||ae(),n=Math.max(0,l.startTime+l.duration-e),o=1-(n/l.duration||0),r=0,s=l.tweens.length;
r<s;
r++)l.tweens[r].run(o);
return a.notifyWith(t,[l,o,n]),o<1&&s?n:(s||a.notifyWith(t,[l,1,0]),a.resolveWith(t,[l]),!1)},l=a.promise({
elem:t,props:L.extend({
},e),opts:L.extend(!0,{
specialEasing:{
},easing:L.easing._default},n),originalProperties:e,originalOptions:n,startTime:ne||ae(),duration:n.duration,tweens:[],createTween:function(e,n){
var o=L.Tween(t,l.opts,e,n,l.opts.specialEasing[e]||l.opts.easing);
return l.tweens.push(o),o},stop:function(e){
var n=0,o=e?l.tweens.length:0;
if(i)return this;
for(i=!0;
n<o;
n++)l.tweens[n].run(1);
return e?(a.notifyWith(t,[l,1,0]),a.resolveWith(t,[l,e])):a.rejectWith(t,[l,e]),this}}),u=l.props;
for(!function(t,e){
var n,o,i,r,s;
for(n in t)if(i=e[o=K(n)],r=t[n],Array.isArray(r)&&(i=r[1],r=t[n]=r[0]),n!==o&&(t[o]=r,delete t[n]),(s=L.cssHooks[o])&&"expand"in s)for(n in r=s.expand(r),delete t[o],r)n in t||(t[n]=r[n],e[n]=i);
else e[o]=i}(u,l.opts.specialEasing);
r<s;
r++)if(o=ue.prefilters[r].call(l,t,u,l.opts))return _(o.stop)&&(L._queueHooks(l.elem,l.opts.queue).stop=o.stop.bind(o)),o;
return L.map(u,le,l),_(l.opts.start)&&l.opts.start.call(t,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),L.fx.timer(L.extend(c,{
elem:t,anim:l,queue:l.opts.queue})),l}L.Animation=L.extend(ue,{
tweeners:{
"*":[function(t,e){
var n=this.createTween(t,e);
return ct(n.elem,t,it.exec(e),n),n}]},tweener:function(t,e){
_(t)?(e=t,t=["*"]):t=t.match(B);
for(var n,o=0,i=t.length;
o<i;
o++)n=t[o],ue.tweeners[n]=ue.tweeners[n]||[],ue.tweeners[n].unshift(e)},prefilters:[function(t,e,n){
var o,i,r,s,a,c,l,u,d="width"in e||"height"in e,h=this,p={
},f=t.style,m=t.nodeType&&st(t),g=X.get(t,"fxshow");
for(o in n.queue||(null==(s=L._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){
s.unqueued||a()}),s.unqueued++,h.always(function(){
h.always(function(){
s.unqueued--,L.queue(t,"fx").length||s.empty.fire()})})),e)if(i=e[o],ie.test(i)){
if(delete e[o],r=r||"toggle"===i,i===(m?"hide":"show")){
if("show"!==i||!g||void 0===g[o])continue;
m=!0}p[o]=g&&g[o]||L.style(t,o)}if((c=!L.isEmptyObject(e))||!L.isEmptyObject(p))for(o in d&&1===t.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(l=g&&g.display)&&(l=X.get(t,"display")),"none"===(u=L.css(t,"display"))&&(l?u=l:(dt([t],!0),l=t.style.display||l,u=L.css(t,"display"),dt([t]))),("inline"===u||"inline-block"===u&&null!=l)&&"none"===L.css(t,"float")&&(c||(h.done(function(){
f.display=l}),null==l&&(u=f.display,l="none"===u?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",h.always(function(){
f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]})),c=!1,p)c||(g?"hidden"in g&&(m=g.hidden):g=X.access(t,"fxshow",{
display:l}),r&&(g.hidden=!m),m&&dt([t],!0),h.done(function(){
for(o in m||dt([t]),X.remove(t,"fxshow"),p)L.style(t,o,p[o])})),c=le(m?g[o]:0,o,h),o in g||(g[o]=c.start,m&&(c.end=c.start,c.start=0))}],prefilter:function(t,e){
e?ue.prefilters.unshift(t):ue.prefilters.push(t)}}),L.speed=function(t,e,n){
var o=t&&"object"==typeof t?L.extend({
},t):{
complete:n||!n&&e||_(t)&&t,duration:t,easing:n&&e||e&&!_(e)&&e};
return L.fx.off?o.duration=0:"number"!=typeof o.duration&&(o.duration in L.fx.speeds?o.duration=L.fx.speeds[o.duration]:o.duration=L.fx.speeds._default),null!=o.queue&&!0!==o.queue||(o.queue="fx"),o.old=o.complete,o.complete=function(){
_(o.old)&&o.old.call(this),o.queue&&L.dequeue(this,o.queue)},o},L.fn.extend({
fadeTo:function(t,e,n,o){
return this.filter(st).css("opacity",0).show().end().animate({
opacity:e},t,n,o)},animate:function(t,e,n,o){
var i=L.isEmptyObject(t),r=L.speed(e,n,o),s=function(){
var e=ue(this,L.extend({
},t),r);
(i||X.get(this,"finish"))&&e.stop(!0)};
return s.finish=s,i||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){
var o=function(t){
var e=t.stop;
delete t.stop,e(n)};
return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){
var e=!0,i=null!=t&&t+"queueHooks",r=L.timers,s=X.get(this);
if(i)s[i]&&s[i].stop&&o(s[i]);
else for(i in s)s[i]&&s[i].stop&&re.test(i)&&o(s[i]);
for(i=r.length;
i--;
)r[i].elem!==this||null!=t&&r[i].queue!==t||(r[i].anim.stop(n),e=!1,r.splice(i,1));
!e&&n||L.dequeue(this,t)})},finish:function(t){
return!1!==t&&(t=t||"fx"),this.each(function(){
var e,n=X.get(this),o=n[t+"queue"],i=n[t+"queueHooks"],r=L.timers,s=o?o.length:0;
for(n.finish=!0,L.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=r.length;
e--;
)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));
for(e=0;
e<s;
e++)o[e]&&o[e].finish&&o[e].finish.call(this);
delete n.finish})}}),L.each(["toggle","show","hide"],function(t,e){
var n=L.fn[e];
L.fn[e]=function(t,o,i){
return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(ce(e,!0),t,o,i)}}),L.each({
slideDown:ce("show"),slideUp:ce("hide"),slideToggle:ce("toggle"),fadeIn:{
opacity:"show"},fadeOut:{
opacity:"hide"},fadeToggle:{
opacity:"toggle"}},function(t,e){
L.fn[t]=function(t,n,o){
return this.animate(e,t,n,o)}}),L.timers=[],L.fx.tick=function(){
var t,e=0,n=L.timers;
for(ne=Date.now();
e<n.length;
e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);
n.length||L.fx.stop(),ne=void 0},L.fx.timer=function(t){
L.timers.push(t),L.fx.start()},L.fx.interval=13,L.fx.start=function(){
oe||(oe=!0,se())},L.fx.stop=function(){
oe=null},L.fx.speeds={
slow:600,fast:200,_default:400},L.fn.delay=function(t,e){
return t=L.fx&&L.fx.speeds[t]||t,e=e||"fx",this.queue(e,function(e,o){
var i=n.setTimeout(e,t);
o.stop=function(){
n.clearTimeout(i)}})},function(){
var t=s.createElement("input"),e=s.createElement("select").appendChild(s.createElement("option"));
t.type="checkbox",v.checkOn=""!==t.value,v.optSelected=e.selected,(t=s.createElement("input")).value="t",t.type="radio",v.radioValue="t"===t.value}();
var de,he=L.expr.attrHandle;
L.fn.extend({
attr:function(t,e){
return W(this,L.attr,t,e,arguments.length>1)},removeAttr:function(t){
return this.each(function(){
L.removeAttr(this,t)})}}),L.extend({
attr:function(t,e,n){
var o,i,r=t.nodeType;
if(3!==r&&8!==r&&2!==r)return void 0===t.getAttribute?L.prop(t,e,n):(1===r&&L.isXMLDoc(t)||(i=L.attrHooks[e.toLowerCase()]||(L.expr.match.bool.test(e)?de:void 0)),void 0!==n?null===n?void L.removeAttr(t,e):i&&"set"in i&&void 0!==(o=i.set(t,n,e))?o:(t.setAttribute(e,n+""),n):i&&"get"in i&&null!==(o=i.get(t,e))?o:null==(o=L.find.attr(t,e))?void 0:o)},attrHooks:{
type:{
set:function(t,e){
if(!v.radioValue&&"radio"===e&&D(t,"input")){
var n=t.value;
return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){
var n,o=0,i=e&&e.match(B);
if(i&&1===t.nodeType)for(;
n=i[o++];
)t.removeAttribute(n)}}),de={
set:function(t,e,n){
return!1===e?L.removeAttr(t,n):t.setAttribute(n,n),n}},L.each(L.expr.match.bool.source.match(/\w+/g),function(t,e){
var n=he[e]||L.find.attr;
he[e]=function(t,e,o){
var i,r,s=e.toLowerCase();
return o||(r=he[s],he[s]=i,i=null!=n(t,e,o)?s:null,he[s]=r),i}});
var pe=/^(?:input|select|textarea|button)$/i,fe=/^(?:a|area)$/i;
function me(t){
return(t.match(B)||[]).join(" ")}function ge(t){
return t.getAttribute&&t.getAttribute("class")||""}function ve(t){
return Array.isArray(t)?t:"string"==typeof t&&t.match(B)||[]}L.fn.extend({
prop:function(t,e){
return W(this,L.prop,t,e,arguments.length>1)},removeProp:function(t){
return this.each(function(){
delete this[L.propFix[t]||t]})}}),L.extend({
prop:function(t,e,n){
var o,i,r=t.nodeType;
if(3!==r&&8!==r&&2!==r)return 1===r&&L.isXMLDoc(t)||(e=L.propFix[e]||e,i=L.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(o=i.set(t,n,e))?o:t[e]=n:i&&"get"in i&&null!==(o=i.get(t,e))?o:t[e]},propHooks:{
tabIndex:{
get:function(t){
var e=L.find.attr(t,"tabindex");
return e?parseInt(e,10):pe.test(t.nodeName)||fe.test(t.nodeName)&&t.href?0:-1}}},propFix:{
for:"htmlFor",class:"className"}}),v.optSelected||(L.propHooks.selected={
get:function(t){
var e=t.parentNode;
return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){
var e=t.parentNode;
e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),L.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
L.propFix[this.toLowerCase()]=this}),L.fn.extend({
addClass:function(t){
var e,n,o,i,r,s,a,c=0;
if(_(t))return this.each(function(e){
L(this).addClass(t.call(this,e,ge(this)))});
if((e=ve(t)).length)for(;
n=this[c++];
)if(i=ge(n),o=1===n.nodeType&&" "+me(i)+" "){
for(s=0;
r=e[s++];
)o.indexOf(" "+r+" ")<0&&(o+=r+" ");
i!==(a=me(o))&&n.setAttribute("class",a)}return this},removeClass:function(t){
var e,n,o,i,r,s,a,c=0;
if(_(t))return this.each(function(e){
L(this).removeClass(t.call(this,e,ge(this)))});
if(!arguments.length)return this.attr("class","");
if((e=ve(t)).length)for(;
n=this[c++];
)if(i=ge(n),o=1===n.nodeType&&" "+me(i)+" "){
for(s=0;
r=e[s++];
)for(;
o.indexOf(" "+r+" ")>-1;
)o=o.replace(" "+r+" "," ");
i!==(a=me(o))&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){
var n=typeof t,o="string"===n||Array.isArray(t);
return"boolean"==typeof e&&o?e?this.addClass(t):this.removeClass(t):_(t)?this.each(function(n){
L(this).toggleClass(t.call(this,n,ge(this),e),e)}):this.each(function(){
var e,i,r,s;
if(o)for(i=0,r=L(this),s=ve(t);
e=s[i++];
)r.hasClass(e)?r.removeClass(e):r.addClass(e);
else void 0!==t&&"boolean"!==n||((e=ge(this))&&X.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":X.get(this,"__className__")||""))})},hasClass:function(t){
var e,n,o=0;
for(e=" "+t+" ";
n=this[o++];
)if(1===n.nodeType&&(" "+me(ge(n))+" ").indexOf(e)>-1)return!0;
return!1}});
var _e=/\r/g;
L.fn.extend({
val:function(t){
var e,n,o,i=this[0];
return arguments.length?(o=_(t),this.each(function(n){
var i;
1===this.nodeType&&(null==(i=o?t.call(this,n,L(this).val()):t)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=L.map(i,function(t){
return null==t?"":t+""})),(e=L.valHooks[this.type]||L.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))})):i?(e=L.valHooks[i.type]||L.valHooks[i.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(_e,""):null==n?"":n:void 0}}),L.extend({
valHooks:{
option:{
get:function(t){
var e=L.find.attr(t,"value");
return null!=e?e:me(L.text(t))}},select:{
get:function(t){
var e,n,o,i=t.options,r=t.selectedIndex,s="select-one"===t.type,a=s?null:[],c=s?r+1:i.length;
for(o=r<0?c:s?r:0;
o<c;
o++)if(((n=i[o]).selected||o===r)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){
if(e=L(n).val(),s)return e;
a.push(e)}return a},set:function(t,e){
for(var n,o,i=t.options,r=L.makeArray(e),s=i.length;
s--;
)((o=i[s]).selected=L.inArray(L.valHooks.option.get(o),r)>-1)&&(n=!0);
return n||(t.selectedIndex=-1),r}}}}),L.each(["radio","checkbox"],function(){
L.valHooks[this]={
set:function(t,e){
if(Array.isArray(e))return t.checked=L.inArray(L(t).val(),e)>-1}},v.checkOn||(L.valHooks[this].get=function(t){
return null===t.getAttribute("value")?"on":t.value})}),v.focusin="onfocusin"in n;
var ye=/^(?:focusinfocus|focusoutblur)$/,be=function(t){
t.stopPropagation()};
L.extend(L.event,{
trigger:function(t,e,o,i){
var r,a,c,l,u,d,h,p,m=[o||s],g=f.call(t,"type")?t.type:t,v=f.call(t,"namespace")?t.namespace.split("."):[];
if(a=p=c=o=o||s,3!==o.nodeType&&8!==o.nodeType&&!ye.test(g+L.event.triggered)&&(g.indexOf(".")>-1&&(v=g.split("."),g=v.shift(),v.sort()),u=g.indexOf(":")<0&&"on"+g,(t=t[L.expando]?t:new L.Event(g,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=o),e=null==e?[t]:L.makeArray(e,[t]),h=L.event.special[g]||{
},i||!h.trigger||!1!==h.trigger.apply(o,e))){
if(!i&&!h.noBubble&&!y(o)){
for(l=h.delegateType||g,ye.test(l+g)||(a=a.parentNode);
a;
a=a.parentNode)m.push(a),c=a;
c===(o.ownerDocument||s)&&m.push(c.defaultView||c.parentWindow||n)}for(r=0;
(a=m[r++])&&!t.isPropagationStopped();
)p=a,t.type=r>1?l:h.bindType||g,(d=(X.get(a,"events")||{
})[t.type]&&X.get(a,"handle"))&&d.apply(a,e),(d=u&&a[u])&&d.apply&&J(a)&&(t.result=d.apply(a,e),!1===t.result&&t.preventDefault());
return t.type=g,i||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(m.pop(),e)||!J(o)||u&&_(o[g])&&!y(o)&&((c=o[u])&&(o[u]=null),L.event.triggered=g,t.isPropagationStopped()&&p.addEventListener(g,be),o[g](),t.isPropagationStopped()&&p.removeEventListener(g,be),L.event.triggered=void 0,c&&(o[u]=c)),t.result}},simulate:function(t,e,n){
var o=L.extend(new L.Event,n,{
type:t,isSimulated:!0});
L.event.trigger(o,null,e)}}),L.fn.extend({
trigger:function(t,e){
return this.each(function(){
L.event.trigger(t,e,this)})},triggerHandler:function(t,e){
var n=this[0];
if(n)return L.event.trigger(t,e,n,!0)}}),v.focusin||L.each({
focus:"focusin",blur:"focusout"},function(t,e){
var n=function(t){
L.event.simulate(e,t.target,L.event.fix(t))};
L.event.special[e]={
setup:function(){
var o=this.ownerDocument||this,i=X.access(o,e);
i||o.addEventListener(t,n,!0),X.access(o,e,(i||0)+1)},teardown:function(){
var o=this.ownerDocument||this,i=X.access(o,e)-1;
i?X.access(o,e,i):(o.removeEventListener(t,n,!0),X.remove(o,e))}}});
var we=n.location,xe=Date.now(),Le=/\?/;
L.parseXML=function(t){
var e;
if(!t||"string"!=typeof t)return null;
try{
e=(new n.DOMParser).parseFromString(t,"text/xml")}catch(t){
e=void 0}return e&&!e.getElementsByTagName("parsererror").length||L.error("Invalid XML: "+t),e};
var Ce=/\[\]$/,Pe=/\r?\n/g,Ee=/^(?:submit|button|image|reset|file)$/i,Te=/^(?:input|select|textarea|keygen)/i;
function ke(t,e,n,o){
var i;
if(Array.isArray(e))L.each(e,function(e,i){
n||Ce.test(t)?o(t,i):ke(t+"["+("object"==typeof i&&null!=i?e:"")+"]",i,n,o)});
else if(n||"object"!==x(e))o(t,e);
else for(i in e)ke(t+"["+i+"]",e[i],n,o)}L.param=function(t,e){
var n,o=[],i=function(t,e){
var n=_(e)?e():e;
o[o.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};
if(Array.isArray(t)||t.jquery&&!L.isPlainObject(t))L.each(t,function(){
i(this.name,this.value)});
else for(n in t)ke(n,t[n],e,i);
return o.join("&")},L.fn.extend({
serialize:function(){
return L.param(this.serializeArray())},serializeArray:function(){
return this.map(function(){
var t=L.prop(this,"elements");
return t?L.makeArray(t):this}).filter(function(){
var t=this.type;
return this.name&&!L(this).is(":disabled")&&Te.test(this.nodeName)&&!Ee.test(t)&&(this.checked||!ht.test(t))}).map(function(t,e){
var n=L(this).val();
return null==n?null:Array.isArray(n)?L.map(n,function(t){
return{
name:e.name,value:t.replace(Pe,"\r\n")}}):{
name:e.name,value:n.replace(Pe,"\r\n")}}).get()}});
var Se=/%20/g,De=/#.*$/,Oe=/([?&])_=[^&]*/,Ae=/^(.*?):[ \t]*([^\r\n]*)$/gm,Me=/^(?:GET|HEAD)$/,je=/^\/\//,Ne={
},Ie={
},Re="*/".concat("*"),Be=s.createElement("a");
function ze(t){
return function(e,n){
"string"!=typeof e&&(n=e,e="*");
var o,i=0,r=e.toLowerCase().match(B)||[];
if(_(n))for(;
o=r[i++];
)"+"===o[0]?(o=o.slice(1)||"*",(t[o]=t[o]||[]).unshift(n)):(t[o]=t[o]||[]).push(n)}}function Ue(t,e,n,o){
var i={
},r=t===Ie;
function s(a){
var c;
return i[a]=!0,L.each(t[a]||[],function(t,a){
var l=a(e,n,o);
return"string"!=typeof l||r||i[l]?r?!(c=l):void 0:(e.dataTypes.unshift(l),s(l),!1)}),c}return s(e.dataTypes[0])||!i["*"]&&s("*")}function Ze(t,e){
var n,o,i=L.ajaxSettings.flatOptions||{
};
for(n in e)void 0!==e[n]&&((i[n]?t:o||(o={
}))[n]=e[n]);
return o&&L.extend(!0,t,o),t}Be.href=we.href,L.extend({
active:0,lastModified:{
},etag:{
},ajaxSettings:{
url:we.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded;
 charset=UTF-8",accepts:{
"*":Re,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{
xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{
xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{
"* text":String,"text html":!0,"text json":JSON.parse,"text xml":L.parseXML},flatOptions:{
url:!0,context:!0}},ajaxSetup:function(t,e){
return e?Ze(Ze(t,L.ajaxSettings),e):Ze(L.ajaxSettings,t)},ajaxPrefilter:ze(Ne),ajaxTransport:ze(Ie),ajax:function(t,e){
"object"==typeof t&&(e=t,t=void 0),e=e||{
};
var o,i,r,a,c,l,u,d,h,p,f=L.ajaxSetup({
},e),m=f.context||f,g=f.context&&(m.nodeType||m.jquery)?L(m):L.event,v=L.Deferred(),_=L.Callbacks("once memory"),y=f.statusCode||{
},b={
},w={
},x="canceled",C={
readyState:0,getResponseHeader:function(t){
var e;
if(u){
if(!a)for(a={
};
e=Ae.exec(r);
)a[e[1].toLowerCase()]=e[2];
e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){
return u?r:null},setRequestHeader:function(t,e){
return null==u&&(t=w[t.toLowerCase()]=w[t.toLowerCase()]||t,b[t]=e),this},overrideMimeType:function(t){
return null==u&&(f.mimeType=t),this},statusCode:function(t){
var e;
if(t)if(u)C.always(t[C.status]);
else for(e in t)y[e]=[y[e],t[e]];
return this},abort:function(t){
var e=t||x;
return o&&o.abort(e),P(0,e),this}};
if(v.promise(C),f.url=((t||f.url||we.href)+"").replace(je,we.protocol+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(B)||[""],null==f.crossDomain){
l=s.createElement("a");
try{
l.href=f.url,l.href=l.href,f.crossDomain=Be.protocol+"//"+Be.host!=l.protocol+"//"+l.host}catch(t){
f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=L.param(f.data,f.traditional)),Ue(Ne,f,e,C),u)return C;
for(h in(d=L.event&&f.global)&&0==L.active++&&L.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Me.test(f.type),i=f.url.replace(De,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Se,"+")):(p=f.url.slice(i.length),f.data&&(f.processData||"string"==typeof f.data)&&(i+=(Le.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(i=i.replace(Oe,"$1"),p=(Le.test(i)?"&":"?")+"_="+xe+++p),f.url=i+p),f.ifModified&&(L.lastModified[i]&&C.setRequestHeader("If-Modified-Since",L.lastModified[i]),L.etag[i]&&C.setRequestHeader("If-None-Match",L.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||e.contentType)&&C.setRequestHeader("Content-Type",f.contentType),C.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Re+";
 q=0.01":""):f.accepts["*"]),f.headers)C.setRequestHeader(h,f.headers[h]);
if(f.beforeSend&&(!1===f.beforeSend.call(m,C,f)||u))return C.abort();
if(x="abort",_.add(f.complete),C.done(f.success),C.fail(f.error),o=Ue(Ie,f,e,C)){
if(C.readyState=1,d&&g.trigger("ajaxSend",[C,f]),u)return C;
f.async&&f.timeout>0&&(c=n.setTimeout(function(){
C.abort("timeout")},f.timeout));
try{
u=!1,o.send(b,P)}catch(t){
if(u)throw t;
P(-1,t)}}else P(-1,"No Transport");
function P(t,e,s,a){
var l,h,p,b,w,x=e;
u||(u=!0,c&&n.clearTimeout(c),o=void 0,r=a||"",C.readyState=t>0?4:0,l=t>=200&&t<300||304===t,s&&(b=function(t,e,n){
for(var o,i,r,s,a=t.contents,c=t.dataTypes;
"*"===c[0];
)c.shift(),void 0===o&&(o=t.mimeType||e.getResponseHeader("Content-Type"));
if(o)for(i in a)if(a[i]&&a[i].test(o)){
c.unshift(i);
break}if(c[0]in n)r=c[0];
else{
for(i in n){
if(!c[0]||t.converters[i+" "+c[0]]){
r=i;
break}s||(s=i)}r=r||s}if(r)return r!==c[0]&&c.unshift(r),n[r]}(f,C,s)),b=function(t,e,n,o){
var i,r,s,a,c,l={
},u=t.dataTypes.slice();
if(u[1])for(s in t.converters)l[s.toLowerCase()]=t.converters[s];
for(r=u.shift();
r;
)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!c&&o&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),c=r,r=u.shift())if("*"===r)r=c;
else if("*"!==c&&c!==r){
if(!(s=l[c+" "+r]||l["* "+r]))for(i in l)if((a=i.split(" "))[1]===r&&(s=l[c+" "+a[0]]||l["* "+a[0]])){
!0===s?s=l[i]:!0!==l[i]&&(r=a[0],u.unshift(a[1]));
break}if(!0!==s)if(s&&t.throws)e=s(e);
else try{
e=s(e)}catch(t){
return{
state:"parsererror",error:s?t:"No conversion from "+c+" to "+r}}}return{
state:"success",data:e}}(f,b,C,l),l?(f.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(L.lastModified[i]=w),(w=C.getResponseHeader("etag"))&&(L.etag[i]=w)),204===t||"HEAD"===f.type?x="nocontent":304===t?x="notmodified":(x=b.state,h=b.data,l=!(p=b.error))):(p=x,!t&&x||(x="error",t<0&&(t=0))),C.status=t,C.statusText=(e||x)+"",l?v.resolveWith(m,[h,x,C]):v.rejectWith(m,[C,x,p]),C.statusCode(y),y=void 0,d&&g.trigger(l?"ajaxSuccess":"ajaxError",[C,f,l?h:p]),_.fireWith(m,[C,x]),d&&(g.trigger("ajaxComplete",[C,f]),--L.active||L.event.trigger("ajaxStop")))}return C},getJSON:function(t,e,n){
return L.get(t,e,n,"json")},getScript:function(t,e){
return L.get(t,void 0,e,"script")}}),L.each(["get","post"],function(t,e){
L[e]=function(t,n,o,i){
return _(n)&&(i=i||o,o=n,n=void 0),L.ajax(L.extend({
url:t,type:e,dataType:i,data:n,success:o},L.isPlainObject(t)&&t))}}),L._evalUrl=function(t){
return L.ajax({
url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},L.fn.extend({
wrapAll:function(t){
var e;
return this[0]&&(_(t)&&(t=t.call(this[0])),e=L(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){
for(var t=this;
t.firstElementChild;
)t=t.firstElementChild;
return t}).append(this)),this},wrapInner:function(t){
return _(t)?this.each(function(e){
L(this).wrapInner(t.call(this,e))}):this.each(function(){
var e=L(this),n=e.contents();
n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){
var e=_(t);
return this.each(function(n){
L(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(t){
return this.parent(t).not("body").each(function(){
L(this).replaceWith(this.childNodes)}),this}}),L.expr.pseudos.hidden=function(t){
return!L.expr.pseudos.visible(t)},L.expr.pseudos.visible=function(t){
return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},L.ajaxSettings.xhr=function(){
try{
return new n.XMLHttpRequest}catch(t){
}};
var qe={
0:200,1223:204},Fe=L.ajaxSettings.xhr();
v.cors=!!Fe&&"withCredentials"in Fe,v.ajax=Fe=!!Fe,L.ajaxTransport(function(t){
var e,o;
if(v.cors||Fe&&!t.crossDomain)return{
send:function(i,r){
var s,a=t.xhr();
if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];
for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s]);
e=function(t){
return function(){
e&&(e=o=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(qe[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{
binary:a.response}:{
text:a.responseText},a.getAllResponseHeaders()))}},a.onload=e(),o=a.onerror=a.ontimeout=e("error"),void 0!==a.onabort?a.onabort=o:a.onreadystatechange=function(){
4===a.readyState&&n.setTimeout(function(){
e&&o()})},e=e("abort");
try{
a.send(t.hasContent&&t.data||null)}catch(t){
if(e)throw t}},abort:function(){
e&&e()}}}),L.ajaxPrefilter(function(t){
t.crossDomain&&(t.contents.script=!1)}),L.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{
script:/\b(?:java|ecma)script\b/},converters:{
"text script":function(t){
return L.globalEval(t),t}}}),L.ajaxPrefilter("script",function(t){
void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),L.ajaxTransport("script",function(t){
var e,n;
if(t.crossDomain)return{
send:function(o,i){
e=L("<script>").prop({
charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){
e.remove(),n=null,t&&i("error"===t.type?404:200,t.type)}),s.head.appendChild(e[0])},abort:function(){
n&&n()}}});
var He,We=[],$e=/(=)\?(?=&|$)|\?\?/;
L.ajaxSetup({
jsonp:"callback",jsonpCallback:function(){
var t=We.pop()||L.expando+"_"+xe++;
return this[t]=!0,t}}),L.ajaxPrefilter("json jsonp",function(t,e,o){
var i,r,s,a=!1!==t.jsonp&&($e.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&$e.test(t.data)&&"data");
if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=_(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace($e,"$1"+i):!1!==t.jsonp&&(t.url+=(Le.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){
return s||L.error(i+" was not called"),s[0]},t.dataTypes[0]="json",r=n[i],n[i]=function(){
s=arguments},o.always(function(){
void 0===r?L(n).removeProp(i):n[i]=r,t[i]&&(t.jsonpCallback=e.jsonpCallback,We.push(i)),s&&_(r)&&r(s[0]),s=r=void 0}),"script"}),v.createHTMLDocument=((He=s.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===He.childNodes.length),L.parseHTML=function(t,e,n){
return"string"!=typeof t?[]:("boolean"==typeof e&&(n=e,e=!1),e||(v.createHTMLDocument?((o=(e=s.implementation.createHTMLDocument("")).createElement("base")).href=s.location.href,e.head.appendChild(o)):e=s),r=!n&&[],(i=O.exec(t))?[e.createElement(i[1])]:(i=wt([t],e,r),r&&r.length&&L(r).remove(),L.merge([],i.childNodes)));
var o,i,r},L.fn.load=function(t,e,n){
var o,i,r,s=this,a=t.indexOf(" ");
return a>-1&&(o=me(t.slice(a)),t=t.slice(0,a)),_(e)?(n=e,e=void 0):e&&"object"==typeof e&&(i="POST"),s.length>0&&L.ajax({
url:t,type:i||"GET",dataType:"html",data:e}).done(function(t){
r=arguments,s.html(o?L("<div>").append(L.parseHTML(t)).find(o):t)}).always(n&&function(t,e){
s.each(function(){
n.apply(this,r||[t.responseText,e,t])})}),this},L.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){
L.fn[e]=function(t){
return this.on(e,t)}}),L.expr.pseudos.animated=function(t){
return L.grep(L.timers,function(e){
return t===e.elem}).length},L.offset={
setOffset:function(t,e,n){
var o,i,r,s,a,c,l=L.css(t,"position"),u=L(t),d={
};
"static"===l&&(t.style.position="relative"),a=u.offset(),r=L.css(t,"top"),c=L.css(t,"left"),("absolute"===l||"fixed"===l)&&(r+c).indexOf("auto")>-1?(s=(o=u.position()).top,i=o.left):(s=parseFloat(r)||0,i=parseFloat(c)||0),_(e)&&(e=e.call(t,n,L.extend({
},a))),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+i),"using"in e?e.using.call(t,d):u.css(d)}},L.fn.extend({
offset:function(t){
if(arguments.length)return void 0===t?this:this.each(function(e){
L.offset.setOffset(this,t,e)});
var e,n,o=this[0];
return o?o.getClientRects().length?(e=o.getBoundingClientRect(),n=o.ownerDocument.defaultView,{
top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{
top:0,left:0}:void 0},position:function(){
if(this[0]){
var t,e,n,o=this[0],i={
top:0,left:0};
if("fixed"===L.css(o,"position"))e=o.getBoundingClientRect();
else{
for(e=this.offset(),n=o.ownerDocument,t=o.offsetParent||n.documentElement;
t&&(t===n.body||t===n.documentElement)&&"static"===L.css(t,"position");
)t=t.parentNode;
t&&t!==o&&1===t.nodeType&&((i=L(t).offset()).top+=L.css(t,"borderTopWidth",!0),i.left+=L.css(t,"borderLeftWidth",!0))}return{
top:e.top-i.top-L.css(o,"marginTop",!0),left:e.left-i.left-L.css(o,"marginLeft",!0)}}},offsetParent:function(){
return this.map(function(){
for(var t=this.offsetParent;
t&&"static"===L.css(t,"position");
)t=t.offsetParent;
return t||xt})}}),L.each({
scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){
var n="pageYOffset"===e;
L.fn[t]=function(o){
return W(this,function(t,o,i){
var r;
if(y(t)?r=t:9===t.nodeType&&(r=t.defaultView),void 0===i)return r?r[e]:t[o];
r?r.scrollTo(n?r.pageXOffset:i,n?i:r.pageYOffset):t[o]=i},t,o,arguments.length)}}),L.each(["top","left"],function(t,e){
L.cssHooks[e]=Ht(v.pixelPosition,function(t,n){
if(n)return n=Ft(t,e),Ut.test(n)?L(t).position()[e]+"px":n})}),L.each({
Height:"height",Width:"width"},function(t,e){
L.each({
padding:"inner"+t,content:e,"":"outer"+t},function(n,o){
L.fn[o]=function(i,r){
var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===r?"margin":"border");
return W(this,function(e,n,i){
var r;
return y(e)?0===o.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+t],r["scroll"+t],e.body["offset"+t],r["offset"+t],r["client"+t])):void 0===i?L.css(e,n,a):L.style(e,n,i,a)},e,s?i:void 0,s)}})}),L.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){
L.fn[e]=function(t,n){
return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),L.fn.extend({
hover:function(t,e){
return this.mouseenter(t).mouseleave(e||t)}}),L.fn.extend({
bind:function(t,e,n){
return this.on(t,null,e,n)},unbind:function(t,e){
return this.off(t,null,e)},delegate:function(t,e,n,o){
return this.on(e,t,n,o)},undelegate:function(t,e,n){
return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),L.proxy=function(t,e){
var n,o,i;
if("string"==typeof e&&(n=t[e],e=t,t=n),_(t))return o=c.call(arguments,2),(i=function(){
return t.apply(e||this,o.concat(c.call(arguments)))}).guid=t.guid=t.guid||L.guid++,i},L.holdReady=function(t){
t?L.readyWait++:L.ready(!0)},L.isArray=Array.isArray,L.parseJSON=JSON.parse,L.nodeName=D,L.isFunction=_,L.isWindow=y,L.camelCase=K,L.type=x,L.now=Date.now,L.isNumeric=function(t){
var e=L.type(t);
return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},void 0===(o=function(){
return L}.apply(e,[]))||(t.exports=o);
var Ge=n.jQuery,Ve=n.$;
return L.noConflict=function(t){
return n.$===L&&(n.$=Ve),t&&n.jQuery===L&&(n.jQuery=Ge),L},i||(n.jQuery=n.$=L),L})},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.done=t.name=void 0;
let n;
t.name="core/post-process";
const o=new Promise(t=>{
n=t});
t.done=o,(0,e.sub)("plugins-done",async t=>{
const o=[];
if(Array.isArray(t.postProcess)){
const n=t.postProcess.filter(t=>{
const n="function"==typeof t;
return n||(0,e.pub)("error","Every item in `postProcess` must be a JS function."),n}).map(async n=>{
try{
return await n(t,document)}catch(t){
(0,e.pub)("error","Function ".concat(n.name," threw an error during `postProcess`. See developer console.")),console.error(t)}}),i=await Promise.all(n);
o.push(...i)}"function"==typeof t.afterEnd&&o.push(await t.afterEnd(t,document)),n(o)},{
once:!0})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.done=t.name=void 0;
let n;
t.name="core/pre-process";
const o=new Promise(t=>{
n=t});
t.done=o,(0,e.sub)("start-all",async t=>{
const o=[];
if(Array.isArray(t.preProcess)){
const n=t.preProcess.filter(t=>{
const n="function"==typeof t;
return n||(0,e.pub)("error","Every item in `preProcess` must be a JS function."),n}).map(async n=>{
try{
return await n(t,document)}catch(t){
(0,e.pub)("error","Function ".concat(n.name," threw an error during `preProcess`. See developer console.")),console.error(t)}}),i=await Promise.all(n);
o.push(...i)}n(o)},{
once:!0})}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default='#respec-ui {
\n  position: fixed;
\n  display: flex;
\n  flex-direction: row-reverse;
\n  top: 20px;
\n  right: 20px;
\n  width: 202px;
\n  text-align: right;
\n  z-index: 9000;
\n}\n\n#respec-pill,\n.respec-info-button {
\n  background: #fff;
\n  height: 2.5em;
\n  color: rgb(120, 120, 120);
\n  border: 1px solid #ccc;
\n  box-shadow: 1px 1px 8px 0 rgba(100, 100, 100, 0.5);
\n}\n\n.respec-info-button {
\n  border: none;
\n  opacity: 0.75;
\n  border-radius: 2em;
\n  margin-right: 1em;
\n  min-width: 3.5em;
\n}\n\n.respec-info-button:focus,\n.respec-info-button:hover {
\n  opacity: 1;
\n  transition: opacity 0.2s;
\n}\n\n#respec-pill:disabled {
\n  font-size: 2.8px;
\n  text-indent: -9999em;
\n  border-top: 1.1em solid rgba(40, 40, 40, 0.2);
\n  border-right: 1.1em solid rgba(40, 40, 40, 0.2);
\n  border-bottom: 1.1em solid rgba(40, 40, 40, 0.2);
\n  border-left: 1.1em solid #ffffff;
\n  transform: translateZ(0);
\n  animation: respec-spin 0.5s infinite linear;
\n  box-shadow: none;
\n}\n\n#respec-pill:disabled,\n#respec-pill:disabled:after {
\n  border-radius: 50%;
\n  width: 10em;
\n  height: 10em;
\n}\n\n@keyframes respec-spin {
\n  0% {
\n    transform: rotate(0deg);
\n  }\n  100% {
\n    transform: rotate(360deg);
\n  }\n}\n\n.respec-hidden {
\n  visibility: hidden;
\n  opacity: 0;
\n  transition: visibility 0s 0.2s, opacity 0.2s linear;
\n}\n\n.respec-visible {
\n  visibility: visible;
\n  opacity: 1;
\n  transition: opacity 0.2s linear;
\n}\n\n#respec-pill:hover,\n#respec-pill:focus {
\n  color: rgb(0, 0, 0);
\n  background-color: rgb(245, 245, 245);
\n  transition: color 0.2s;
\n}\n\n#respec-menu {
\n  position: absolute;
\n  margin: 0;
\n  padding: 0;
\n  font-family: sans-serif;
\n  background: #fff;
\n  box-shadow: 1px 1px 8px 0 rgba(100, 100, 100, 0.5);
\n  width: 200px;
\n  display: none;
\n  text-align: left;
\n  margin-top: 32px;
\n  font-size: 0.8em;
\n}\n\n#respec-menu:not([hidden]) {
\n  display: block;
\n}\n\n#respec-menu li {
\n  list-style-type: none;
\n  margin: 0;
\n  padding: 0;
\n}\n\n.respec-save-buttons {
\n  display: grid;
\n  grid-template-columns: repeat(auto-fill, minmax(47%, 2fr));
\n  grid-gap: 0.5cm;
\n  padding: 0.5cm;
\n}\n\n.respec-save-button:link {
\n  padding-top: 16px;
\n  color: rgb(240, 240, 240);
\n  background: rgb(42, 90, 168);
\n  justify-self: stretch;
\n  height: 1cm;
\n  text-decoration: none;
\n  text-align: center;
\n  font-size: inherit;
\n  border: none;
\n  border-radius: 0.2cm;
\n}\n\n.respec-save-button:link:hover {
\n  color: white;
\n  background: rgb(42, 90, 168);
\n  padding: 0;
\n  margin: 0;
\n  border: 0;
\n  padding-top: 16px;
\n}\n\n#respec-ui button:focus,\n#respec-pill:focus,\n.respec-option:focus {
\n  outline: 0;
\n  outline-style: none;
\n}\n\n#respec-pill-error {
\n  background-color: red;
\n  color: white;
\n}\n\n#respec-pill-warning {
\n  background-color: orange;
\n  color: white;
\n}\n\n.respec-warning-list,\n.respec-error-list {
\n  margin: 0;
\n  padding: 0;
\n  list-style: none;
\n  font-family: sans-serif;
\n  background-color: rgb(255, 251, 230);
\n  font-size: 0.85em;
\n}\n\n.respec-warning-list > li,\n.respec-error-list > li {
\n  padding: 0.4em 0.7em;
\n}\n\n.respec-warning-list > li::before {
\n  content: "⚠️";
\n  padding-right: 0.5em;
\n}\n.respec-warning-list p,\n.respec-error-list p {
\n  padding: 0;
\n  margin: 0;
\n}\n\n.respec-warning-list li {
\n  color: rgb(92, 59, 0);
\n  border-bottom: thin solid rgb(255, 245, 194);
\n}\n\n.respec-error-list,\n.respec-error-list li {
\n  background-color: rgb(255, 240, 240);
\n}\n\n.respec-error-list li::before {
\n  content: "💥";
\n  padding-right: 0.5em;
\n}\n\n.respec-error-list li {
\n  padding: 0.4em 0.7em;
\n  color: rgb(92, 59, 0);
\n  border-bottom: thin solid rgb(255, 215, 215);
\n}\n\n.respec-error-list li > p {
\n  margin: 0;
\n  padding: 0;
\n  display: inline-block;
\n}\n\n#respec-overlay {
\n  display: block;
\n  position: fixed;
\n  z-index: 10000;
\n  top: 0px;
\n  left: 0px;
\n  height: 100%;
\n  width: 100%;
\n  background: #000;
\n}\n\n.respec-show-overlay {
\n  transition: opacity 0.2s linear;
\n  opacity: 0.5;
\n}\n\n.respec-hide-overlay {
\n  transition: opacity 0.2s linear;
\n  opacity: 0;
\n}\n\n.respec-modal {
\n  display: block;
\n  position: fixed;
\n  z-index: 11000;
\n  margin: auto;
\n  top: 10%;
\n  background: #fff;
\n  border: 5px solid #666;
\n  min-width: 20%;
\n  width: 79%;
\n  padding: 0;
\n  max-height: 80%;
\n  overflow-y: auto;
\n  margin: 0 -0.5cm;
\n}\n\n@media screen and (min-width: 78em) {
\n  .respec-modal {
\n    width: 62%;
\n  }\n}\n\n.respec-modal h3 {
\n  margin: 0;
\n  padding: 0.2em;
\n  text-align: center;
\n  color: black;
\n  background: linear-gradient(\n    to bottom,\n    rgba(238, 238, 238, 1) 0%,\n    rgba(238, 238, 238, 1) 50%,\n    rgba(204, 204, 204, 1) 100%\n  );
\n  font-size: 1em;
\n}\n\n.respec-modal .inside div p {
\n  padding-left: 1cm;
\n}\n\n#respec-menu button.respec-option {
\n  background: white;
\n  padding: 0 0.2cm;
\n  border: none;
\n  width: 100%;
\n  text-align: left;
\n  font-size: inherit;
\n  padding: 1.2em 1.2em;
\n}\n\n#respec-menu button.respec-option:hover,\n#respec-menu button:focus {
\n  background-color: #eeeeee;
\n}\n\n.respec-cmd-icon {
\n  padding-right: 0.5em;
\n}\n\n#respec-ui button.respec-option:last-child {
\n  border: none;
\n  border-radius: inherit;
\n}\n\n.respec-offending-element {
\n  display: inline-block;
\n  position: relative;
\n  background: url(data:image/gif;
base64,R0lGODdhBAADAPEAANv///8AAP///wAAACwAAAAABAADAEACBZQjmIAFADs=)\n    bottom repeat-x;
\n}\n\n@supports (text-decoration-style: wavy) {
\n  .respec-offending-element {
\n    background: none;
\n    text-decoration-line: underline;
\n    text-decoration-style: wavy;
\n    text-decoration-color: red;
\n  }\n}\n\n.respec-button-copy-paste {
\n  position: absolute;
\n  display: block;
\n  padding: 0px 8px;
\n  height: 28px;
\n  width: 40px;
\n  color: #333;
\n  white-space: nowrap;
\n  vertical-align: middle;
\n  cursor: pointer;
\n  background-color: #eee;
\n  background-image: linear-gradient(#fcfcfc, #eee);
\n  border: 1px solid rgb(144, 184, 222);
\n  border-radius: 0px 0px 3px 0;
\n  -webkit-user-select: none;
\n  -moz-user-select: none;
\n  -ms-user-select: none;
\n  user-select: none;
\n  -webkit-appearance: none;
\n  margin: 0px 127px;
\n  border-left: 0;
\n}\n\np + .respec-button-copy-paste {
\n  margin: 1px 127px;
\n}\n\n#specref-ui {
\n  margin: 0 2%;
\n  margin-bottom: 0.5cm;
\n}\n\n#specref-ui header {
\n  font-size: 0.7em;
\n  background-color: #eee;
\n  text-align: center;
\n  padding: 0.2cm;
\n  margin-bottom: 0.5cm;
\n  border-radius: 0 0 0.2cm 0.2cm;
\n}\n\n#specref-ui header h1 {
\n  padding: 0;
\n  margin: 0;
\n  color: black;
\n}\n\n#specref-ui p {
\n  padding: 0;
\n  margin: 0;
\n  font-size: 0.8em;
\n  text-align: center;
\n}\n\n#specref-ui p.state {
\n  margin: 1cm;
\n}\n\n#specref-ui .searchcomponent {
\n  font-size: 16px;
\n  display: grid;
\n  grid-template-columns: auto 2cm;
\n}\n#specref-ui .searchcomponent:focus {
\n}\n\n#specref-ui input,\n#specref-ui button {
\n  border: 0;
\n  padding: 6px 12px;
\n}\n\n#specref-ui label {
\n  font-size: 0.6em;
\n  grid-column-end: 3;
\n  text-align: right;
\n  grid-column-start: 1;
\n}\n\n#specref-ui input[type="search"] {
\n  -webkit-appearance: none;
\n  font-size: 16px;
\n  border-radius: 0.1cm 0 0 0.1cm;
\n  border: 1px solid rgb(204, 204, 204);
\n}\n\n#specref-ui button[type="submit"] {
\n  color: white;
\n  border-radius: 0 0.1cm 0.1cm 0;
\n  background-color: rgb(51, 122, 183);
\n}\n\n#specref-ui button[type="submit"]:hover {
\n  background-color: #286090;
\n  border-color: #204d74;
\n}\n\n#specref-ui .result-stats {
\n  margin: 0;
\n  padding: 0;
\n  color: rgb(128, 128, 128);
\n  font-size: 0.7em;
\n  font-weight: bold;
\n}\n\n#specref-ui .specref-results {
\n  font-size: 0.8em;
\n}\n\n#specref-ui .specref-results dd + dt {
\n  margin-top: 0.51cm;
\n}\n\n#specref-ui .specref-results a {
\n  text-transform: capitalize;
\n}\n#specref-ui .specref-results .authors {
\n  display: block;
\n  color: #006621;
\n}\n\n@media print {
\n  #respec-ui {
\n    display: none;
\n  }\n}\n'},function(t,e,n){
"use strict";
var o={
all_shortcuts:{
},add:function(t,e,n){
var o={
type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};
if(n)for(var i in o)void 0===n[i]&&(n[i]=o[i]);
else n=o;
var r=n.target;
"string"==typeof n.target&&(r=document.getElementById(n.target));
t=t.toLowerCase();
var s=function(o){
var i,r;
if((o=o||window.event,n.disable_in_input)&&(o.target?r=o.target:o.srcElement&&(r=o.srcElement),3==r.nodeType&&(r=r.parentNode),"INPUT"==r.tagName||"TEXTAREA"==r.tagName))return;
o.keyCode?i=o.keyCode:o.which&&(i=o.which);
var s=String.fromCharCode(i).toLowerCase();
188==i&&(s=","),190==i&&(s=".");
var a=t.split("+"),c=0,l={
"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";
":":","'":'"',",":"<",".":">","/":"?","\\":"|"},u={
esc:27,escape:27,tab:9,space:32,return:13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,break:19,insert:45,home:36,delete:46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},d={
shift:{
wanted:!1,pressed:!1},ctrl:{
wanted:!1,pressed:!1},alt:{
wanted:!1,pressed:!1},meta:{
wanted:!1,pressed:!1}};
o.ctrlKey&&(d.ctrl.pressed=!0),o.shiftKey&&(d.shift.pressed=!0),o.altKey&&(d.alt.pressed=!0),o.metaKey&&(d.meta.pressed=!0);
for(var h,p=0;
h=a[p],p<a.length;
p++)"ctrl"==h||"control"==h?(c++,d.ctrl.wanted=!0):"shift"==h?(c++,d.shift.wanted=!0):"alt"==h?(c++,d.alt.wanted=!0):"meta"==h?(c++,d.meta.wanted=!0):h.length>1?u[h]==i&&c++:n.keycode?n.keycode==i&&c++:s==h?c++:l[s]&&o.shiftKey&&(s=l[s])==h&&c++;
if(c==a.length&&d.ctrl.pressed==d.ctrl.wanted&&d.shift.pressed==d.shift.wanted&&d.alt.pressed==d.alt.wanted&&d.meta.pressed==d.meta.wanted&&(e(o),!n.propagate))return o.cancelBubble=!0,o.returnValue=!1,o.stopPropagation&&(o.stopPropagation(),o.preventDefault()),!1};
this.all_shortcuts[t]={
callback:s,target:r,event:n.type},r.addEventListener?r.addEventListener(n.type,s,!1):r.attachEvent?r.attachEvent("on"+n.type,s):r["on"+n.type]=s}};
t.exports=o},function(t,e,n){
var o;
void 0===(o=function(t){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
for(const t of document.getElementsByTagName("pre"))t.innerHTML=e(t.innerHTML)},t.name=void 0;
function e(t){
if(!t)return t;
const e=t.trimRight().split("\n");
for(;
e.length&&!e[0].trim();
)e.shift();
const n=e.filter(t=>t.trim()).map(t=>t.search(/[^\s]/)),o=Math.min(...n);
return e.map(t=>t.slice(o)).join("\n")}t.name="core/reindent"}.apply(e,[e]))||(t.exports=o)},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
if((0,e.pub)("start","core/location-hash"),!location.hash)return;
document.respecIsReady.then(()=>{
let t=decodeURIComponent(location.hash).substr(1);
const e=document.getElementById(t),n=/\W/.test(t);
if(!e&&n){
const e=t.replace(/[\W]+/gim,"-").replace(/^-+/,"").replace(/-+$/,"");
document.getElementById(e)&&(t=e)}location.hash="#".concat(t)})},t.name=void 0;
t.name="core/location-hash"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(29),n(9),n(30),n(31),n(32),n(33)],void 0===(i=function(t,e,n,o,i,r,s){
"use strict";
var a;
function c(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
Object.assign(t,function(t){
for(var e=1;
e<arguments.length;
e++){
var n=null!=arguments[e]?arguments[e]:{
},o=Object.keys(n);
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){
return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){
c(t,e,n[e])})}return t}({
},u,t)),Object.assign(t,function(t){
return{
isCCBY:"cc-by"===t.license,licenseInfo:l.get(t.license),isBasic:"GN-BASIS"===t.specStatus,isRegular:"GN-BASIS"===t.specStatus}}(t))},t.name=void 0,n=(a=n)&&a.__esModule?a:{
default:a};
t.name="geonovum/defaults",n.default.register(r.rule,s.rule,i.rule,e.rule,o.rule);
const l=new Map([["cc0",{
name:"Creative Commons 0 Public Domain Dedication",short:"CC0",url:"https://creativecommons.org/publicdomain/zero/1.0/",image:"https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg"}],["cc-by",{
name:"Creative Commons Attribution 4.0 International Public License",short:"CC-BY",url:"https://creativecommons.org/licenses/by/4.0/legalcode",image:"https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg"}],["cc-by-nd",{
name:"Creative Commons Attribution-NoDerivatives 4.0 International Public License",short:"CC-BY-ND",url:"https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",image:"https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg"}]]),u={
lint:{
"no-headingless-sections":!0,"privsec-section":!0,"no-http-props":!0},doJsonLd:!0,license:"cc-by",specStatus:"GN-BASIS",logos:[{
src:"https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg",alt:"Geonovum",id:"Geonovum",height:67,width:132,url:"https://www.geonovum.nl/"}]}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(5),n(3)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.rule=void 0,e=(o=e)&&o.__esModule?o:{
default:o};
const r="check-punctuation",s=[".",":","!","?"],a=s.map(t=>'"'.concat(t,'"')).join(", "),c={
en:{
description:"`p` elements should end with a punctuation mark.",howToFix:"Please make sure `p` elements end with one of: ".concat(a,".")}},l=n.lang in c?n.lang:"en";
const u=new e.default(r,function(t,e){
const n=new RegExp("[".concat(s.join(""),"\\]]$|^ *$"),"m"),o=[...e.querySelectorAll("p:not(#back-to-top)")].filter(t=>!n.test(t.textContent.trim()));
if(o.length)return function(t){
for(var e=1;
e<arguments.length;
e++){
var n=null!=arguments[e]?arguments[e]:{
},o=Object.keys(n);
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){
return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){
i(t,e,n[e])})}return t}({
name:r,offendingElements:o,occurrences:o.length},c[l])});
t.rule=u}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(5),n(3)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.rule=void 0,e=(o=e)&&o.__esModule?o:{
default:o};
const r="local-refs-exist",s={
en:{
description:"Broken local reference found in document.",howToFix:"Please fix the links mentioned.",help:"See developer console."}},a=n.lang in s?n.lang:"en";
const c=new e.default(r,function(t,e){
const n=[...e.querySelectorAll("a[href^='#']")].filter(l);
if(n.length)return function(t){
for(var e=1;
e<arguments.length;
e++){
var n=null!=arguments[e]?arguments[e]:{
},o=Object.keys(n);
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){
return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){
i(t,e,n[e])})}return t}({
name:r,offendingElements:n,occurrences:n.length},s[a])});
function l(t){
const e=t.getAttribute("href").substring(1);
return!t.ownerDocument.getElementById(e)}t.rule=c}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(5),n(3)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.rule=void 0,e=(o=e)&&o.__esModule?o:{
default:o};
const r="no-headingless-sections",s={
en:{
description:"All sections must start with a `h2-6` element.",howToFix:"Add a `h2-6` to the offending section or use a `<div>`.",help:"See developer console."},nl:{
description:"Alle secties moeten beginnen met een `h2-6` element.",howToFix:"Voeg een `h2-6` toe aan de conflicterende sectie of gebruik een `<div>`.",help:"Zie de developer console."}},a=n.lang in s?n.lang:"en",c=({
firstElementChild:t})=>null===t||!1===/^h[1-6]$/.test(t.localName);
const l=new e.default(r,function(t,e){
const n=[...e.querySelectorAll("section")].filter(c);
if(n.length)return function(t){
for(var e=1;
e<arguments.length;
e++){
var n=null!=arguments[e]?arguments[e]:{
},o=Object.keys(n);
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){
return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){
i(t,e,n[e])})}return t}({
name:r,offendingElements:n,occurrences:n.length},s[a])});
t.rule=l}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(5),n(3)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.rule=void 0,e=(o=e)&&o.__esModule?o:{
default:o};
const r="no-http-props",s={
en:{
description:"Insecure URLs are not allowed in `respecConfig`.",howToFix:"Please change the following properties to 'https://': "}},a=n.lang in s?n.lang:"en";
const c=new e.default(r,function(t,e){
if(!e.location.href.startsWith("http"))return;
const n=Object.getOwnPropertyNames(t).filter(t=>t.endsWith("URI")||"prevED"===t).filter(n=>new URL(t[n],e.location.href).href.startsWith("http://")).reduce((t,e)=>t.concat(e),[]);
if(!n.length)return;
const o=function(t){
for(var e=1;
e<arguments.length;
e++){
var n=null!=arguments[e]?arguments[e]:{
},o=Object.keys(n);
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){
return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){
i(t,e,n[e])})}return t}({
name:r,occurrences:n.length},s[a]);
return o.howToFix+="".concat(n.map(t=>"`".concat(t,"`")).join(", "),"."),o});
t.rule=c}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(5),n(3)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{
value:!0}),t.rule=void 0,e=(o=e)&&o.__esModule?o:{
default:o};
const r="privsec-section",s={
en:{
description:"Document must a 'Privacy and/or Security' Considerations section.",howToFix:"Add a privacy and/or security considerations section.",help:"See the [Self-Review Questionnaire](https://w3ctag.github.io/security-questionnaire/)."}},a=n.lang in s?n.lang:"en";
const c=new e.default(r,function(t,e){
if(t.isRecTrack&&!function(t){
return Array.from(t.querySelectorAll("h2, h3, h4, h5, h6")).some(({
textContent:t})=>{
const e=/(privacy|security)/im.test(t),n=/(considerations)/im.test(t);
return e&&n||e})}(e))return function(t){
for(var e=1;
e<arguments.length;
e++){
var n=null!=arguments[e]?arguments[e]:{
},o=Object.keys(n);
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){
return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){
i(t,e,n[e])})}return t}({
name:r,occurrences:1},s[a])});
t.rule=c}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(35)],void 0===(i=function(t,e){
"use strict";
var n;
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
t.noReSpecCSS&&o.remove()},t.name=void 0,e=(n=e)&&n.__esModule?n:{
default:n};
t.name="core/style";
const o=document.createElement("style");
o.id="respec-mainstyle",o.textContent=e.default,document.head.appendChild(o)}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default='/*****************************************************************\n * ReSpec 3 CSS\n * Robin Berjon - http://berjon.com/\n *****************************************************************/\n\n/* Override code highlighter background */\n.hljs {
\n  background: transparent !important;
\n}\n\n/* --- INLINES --- */\nh1 abbr,\nh2 abbr,\nh3 abbr,\nh4 abbr,\nh5 abbr,\nh6 abbr,\na abbr {
\n  border: none;
\n}\n\ndfn {
\n  font-weight: bold;
\n}\n\na.internalDFN {
\n  color: inherit;
\n  border-bottom: 1px solid #99c;
\n  text-decoration: none;
\n}\n\na.externalDFN {
\n  color: inherit;
\n  border-bottom: 1px dotted #ccc;
\n  text-decoration: none;
\n}\n\na.bibref {
\n  text-decoration: none;
\n}\n\n#references :target {
\n  background: #eaf3ff;
\n}\n\ncite .bibref {
\n  font-style: normal;
\n}\n\ncode {
\n  color: #c83500;
\n}\n\nth code {
\n  color: inherit;
\n}\n\n/* --- TOC --- */\n\n.toc a,\n.tof a {
\n  text-decoration: none;
\n}\n\na .secno,\na .figno {
\n  color: #000;
\n}\n\nul.tof,\nol.tof {
\n  list-style: none outside none;
\n}\n\n.caption {
\n  margin-top: 0.5em;
\n  font-style: italic;
\n}\n\n/* --- TABLE --- */\n\ntable.simple {
\n  border-spacing: 0;
\n  border-collapse: collapse;
\n  border-bottom: 3px solid #005a9c;
\n}\n\n.simple th {
\n  background: #005a9c;
\n  color: #fff;
\n  padding: 3px 5px;
\n  text-align: left;
\n}\n\n.simple th[scope="row"] {
\n  background: inherit;
\n  color: inherit;
\n  border-top: 1px solid #ddd;
\n}\n\n.simple td {
\n  padding: 3px 10px;
\n  border-top: 1px solid #ddd;
\n}\n\n.simple tr:nth-child(even) {
\n  background: #f0f6ff;
\n}\n\n/* --- DL --- */\n\n.section dd>p:first-child {
\n  margin-top: 0;
\n}\n\n.section dd>p:last-child {
\n  margin-bottom: 0;
\n}\n\n.section dd {
\n  margin-bottom: 1em;
\n}\n\n.section dl.attrs dd,\n.section dl.eldef dd {
\n  margin-bottom: 0;
\n}\n\n#issue-summary>ul,\n.respec-dfn-list {
\n  column-count: 2;
\n}\n\n#issue-summary li,\n.respec-dfn-list li {
\n  list-style: none;
\n}\n\ndetails.respec-tests-details {
\n  margin-left: 1em;
\n  display: inline-block;
\n  vertical-align: top;
\n}\n\ndetails.respec-tests-details>* {
\n  padding-right: 2em;
\n}\n\ndetails.respec-tests-details[open] {
\n  z-index: 999999;
\n  position: absolute;
\n  border: thin solid #cad3e2;
\n  border-radius: 0.3em;
\n  background-color: white;
\n  padding-bottom: 0.5em;
\n}\n\ndetails.respec-tests-details[open]>summary {
\n  border-bottom: thin solid #cad3e2;
\n  padding-left: 1em;
\n  margin-bottom: 1em;
\n  line-height: 2em;
\n}\n\ndetails.respec-tests-details>ul {
\n  width: 100%;
\n  margin-top: -0.3em;
\n}\n\ndetails.respec-tests-details>li {
\n  padding-left: 1em;
\n}\n\na[href].self-link:hover {
\n  opacity: 1;
\n  text-decoration: none;
\n  background-color: transparent;
\n}\n\nh2,\nh3,\nh4,\nh5,\nh6 {
\n  position: relative;
\n}\n\naside.example .marker > a.self-link {
\n  color: inherit;
\n}\n\nh2>a.self-link,\nh3>a.self-link,\nh4>a.self-link,\nh5>a.self-link,\nh6>a.self-link {
\n  border: none;
\n  color: inherit;
\n  font-size: 83%;
\n  height: 2em;
\n  left: -1.6em;
\n  opacity: .5;
\n  position: absolute;
\n  text-align: center;
\n  text-decoration: none;
\n  top: 0;
\n  transition: opacity .2s;
\n  width: 2em;
\n}\n\nh2>a.self-link::before,\nh3>a.self-link::before,\nh4>a.self-link::before,\nh5>a.self-link::before,\nh6>a.self-link::before {
\n  content: "§";
\n  display: block;
\n}\n\n@media (max-width: 767px) {
\n  dd {
\n    margin-left: 0;
\n  }\n\n  /* Don\'t position self-link in headings off-screen */\n  h2>a.self-link,\n  h3>a.self-link,\n  h4>a.self-link,\n  h5>a.self-link,\n  h6>a.self-link {
\n    left: auto;
\n    top: auto;
\n  }\n}\n\n@media print {
\n  .removeOnSave {
\n    display: none;
\n  }\n}\n'},function(t,e,n){
var o,i;
o=[e,n(1),n(0)],void 0===(i=function(t,e,n){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t,r,s){
if(!t.specStatus){
const e="`respecConfig.specStatus` missing. Defaulting to 'base'.";
t.specStatus="GN-BASIS",(0,n.pub)("warn",e)}let a="";
switch(t.specStatus.toUpperCase()){
case"GN-WV":a+="GN-WV.css";
break;
case"GN-CV":a+="GN-CV.css";
break;
case"GN-VV":a+="GN-VV.css";
break;
case"GN-DEF":a+="GN-DEF.css";
break;
case"GN-BASIS":a+="GN-BASIS.css";
break;
default:a="base.css"}t.noToc||(0,n.sub)("end-all",function(){
!function(t,e){
const n=t.createElement("script");
n.addEventListener("load",function(){
window.location.hash&&(window.location=window.location)},{
once:!0}),n.src="https://www.w3.org/scripts/TR/".concat(e,"/fixup.js"),t.body.appendChild(n)}(r,"2016")},{
once:!0});
const c="https://tools.geostandaarden.nl/respec/style/".concat(a);
(0,e.linkCSS)(r,c),r.querySelector("head").appendChild(i);
const l=[{
hint:"preconnect",href:"https://www.w3.org"},{
hint:"preload",href:"https://www.w3.org/scripts/TR/2016/fixup.js",as:"script"},{
hint:"preload",href:"https://www.w3.org/StyleSheets/TR/2016/base.css",as:"style"},{
hint:"preload",href:"https://www.w3.org/StyleSheets/TR/2016/logos/W3C",as:"image"}].map(e.createResourceHint).reduce(function(t,e){
return t.appendChild(e),t},document.createDocumentFragment());
document.body.querySelector("figure.scalable")&&(l.appendChild(o("leaflet")),l.appendChild(o("font-awesome")));
document.head.querySelector("meta[name=viewport]")||l.insertBefore(function(){
const t=document.createElement("meta");
t.name="viewport";
return t.content=(0,e.toKeyValuePairs)({
width:"device-width","initial-scale":"1","shrink-to-fit":"no"}).replace(/\"/g,""),t}(),l.firstChild);
document.head.insertBefore(l,document.head.firstChild),s()},t.name=void 0;
function o(t){
const e=document.createElement("link");
return e.rel="stylesheet",e.href="https://tools.geostandaarden.nl/respec/style/{
0}.css".replace("{
0}",t),e.classList.add("removeOnSave"),e}t.name="geonovum/style";
const i=document.createElement("link");
i.rel="shortcut icon",i.type="image/x-icon",i.href="https://tools.geostandaarden.nl/respec/style/logos/Geonovum.ico"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(3)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.name=void 0;
t.name="geonovum/l10n";
const n={
en:{
status_at_publication:"This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current Geonovum publications and the latest revision of this document can be found via <a href='https://www.geonovum.nl/geo-standaarden/alle-standaarden'>https://www.geonovum.nl/geo-standaarden/alle-standaarden</a>(in Dutch)."},nl:{
status_at_publication:"Deze paragraaf beschrijft de status van dit document ten tijde van publicatie. Het is mogelijk dat er actuelere versies van dit document bestaan. Een lijst van Geonovum publicaties en de laatste gepubliceerde versie van dit document zijn te vinden op <a href='https://www.geonovum.nl/geo-standaarden/alle-standaarden'>https://www.geonovum.nl/geo-standaarden/alle-standaarden</a>."}};
Object.keys(n).reduce((t,e)=>(Object.assign(t[e],n[e]),t),e.l10n)}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(0),n(1)],void 0===(i=function(t,e,n){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(){
const t=Array.from(document.querySelectorAll("[data-include]")).map(async t=>{
const o=t.dataset.include;
if(!o)return;
const i="include-".concat(String(Math.random()).substr(2));
t.dataset.includeId=i;
try{
const r=await fetch(o),s=await r.text();
!function(t,e,o){
const i=document.querySelector("[data-include-id=".concat(e,"]")),r=i.ownerDocument,s=(0,n.runTransforms)(t,i.dataset.oninclude,o),a="string"==typeof i.dataset.includeReplace;
let c;
switch(i.dataset.includeFormat){
case"text":a?(c=r.createTextNode(s),i.parentNode.replaceChild(c,i)):i.textContent=s;
break;
default:if(i.innerHTML=s,a){
for(c=r.createDocumentFragment();
i.hasChildNodes();
)c.append(i.removeChild(i.firstChild));
i.parentNode.replaceChild(c,i)}}r.contains(i)&&function(t){
["data-include","data-include-format","data-include-replace","data-include-id","oninclude"].forEach(e=>t.removeAttribute(e))}(i)}(s,i,o)}catch(n){
const i="`data-include` failed: `".concat(o,"` (").concat(n.message,"). See console for details.");
console.error("data-include failed for element: ",t,n),(0,e.pub)("error",i)}});
await Promise.all(t)},t.name=void 0;
t.name="core/data-include"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
const e=!!document.querySelector("[data-format=markdown]:not(body)"),n="markdown"===t.format;
if(!n&&!e)return;
if(!n)return void r(document.body).map(t=>{
const e=i(t,t.ownerDocument);
return{
structuredInternals:e,elem:t}}).forEach(({
elem:t,structuredInternals:e})=>{
if(t.setAttribute("aria-busy","true"),"section"===e.firstElementChild.localName&&"section"===t.localName){
const n=e.firstElementChild;
n.remove(),t.append(...n.childNodes)}else t.innerHTML="";
t.appendChild(e),t.setAttribute("aria-busy","false")});
const o=document.getElementById("respec-ui");
o.remove();
const a=document.createElement("html"),c=document.createElement("body");
c.innerHTML=document.body.innerHTML,a.appendChild(c),s(a);
const l=c.innerHTML.replace(/<p>\s*<\/p>/gm,"");
c.innerHTML=l,u=c.querySelectorAll(".nolinks a[href]"),Array.from(u).forEach(t=>{
const e=t.ownerDocument.createTextNode(t.textContent);
t.parentElement.replaceChild(e,t)});
var u;
const d=i(c,document);
c.appendChild(d),c.prepend(o),document.body.parentNode.replaceChild(c,document.body)},t.name=void 0;
function n(t){
return n=>{
const o=Array.from(n.querySelectorAll(t));
return o.reverse().forEach(t=>{
t.innerHTML=(0,e.markdownToHtml)(t.innerHTML)}),o}}t.name="core/markdown";
class o{
constructor(t){
this.doc=t,this.root=t.createDocumentFragment(),this.stack=[this.root],this.current=this.root}findPosition(t){
return parseInt(t.tagName.charAt(1),10)}findParent(t){
let e;
for(;
t>0;
)if(t--,e=this.stack[t])return e}findHeader({
firstChild:t}){
for(;
t;
){
if(/H[1-6]/.test(t.tagName))return t;
t=t.nextSibling}return null}addHeader(t){
const e=this.doc.createElement("section"),n=this.findPosition(t);
e.appendChild(t),this.findParent(n).appendChild(e),this.stack[n]=e,this.stack.length=n+1,this.current=e}addSection(t,e){
const n=this.findHeader(t),o=n?this.findPosition(n):1,i=this.findParent(o);
n&&t.removeChild(n),t.appendChild(e(t)),n&&t.prepend(n),i.appendChild(t),this.current=i}addElement(t){
this.current.appendChild(t)}}function i(t,e){
return function t(n){
const i=new o(e);
for(;
n.firstChild;
){
const e=n.firstChild;
if(e.nodeType===Node.ELEMENT_NODE)switch(e.localName){
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":i.addHeader(e);
break;
case"section":i.addSection(e,t);
break;
default:i.addElement(e)}else n.removeChild(e)}return i.root}(t)}const r=n("[data-format='markdown']:not(body)"),s=n("[data-format=markdown]:not(body), section, div, address, article, aside, figure, header, main, body")}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(0),n(2),n(41),n(42)],void 0===(i=function(t,e,n,o,i,r){
"use strict";
function s(t){
return t&&t.__esModule?t:{
default:t}}function a(){
const t=function(t,e){
e||(e=t.slice(0));
return Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}(["",""]);
return a=function(){
return t},t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
t.isUnofficial=!0,t.logos||(t.logos=[]);
t.specStatus=t.specStatus?t.specStatus.toUpperCase():"",t.specType=t.specType?t.specType.toUpperCase():"",t.pubDomain=t.pubDomain?t.pubDomain.toLowerCase():"",t.hasBeenPublished=!(!t.publishDate&&!t.previousPublishDate),t.isCCBY="cc-by"===t.license,t.isCCBYND="cc-by-nd"===t.license,t.licenseInfo=p[t.license],t.isBasic="base"===t.specStatus,t.isRegular=!0,t.isOfficial="GN-DEF"===t.specStatus,t.specStatus||(0,n.pub)("error","Missing required configuration: `specStatus`");
t.isRegular&&!t.shortName&&(0,n.pub)("error","Missing required configuration: `shortName`");
t.title=document.title||"No Title",t.subtitle||(t.subtitle="");
if(t.publishDate=f(t,"publishDate",document.lastModified),t.publishYear=t.publishDate.getUTCFullYear(),t.publishHumanDate=c.format(t.publishDate),t.isNoTrack=h.includes(t.specStatus),!t.edDraftURI){
if(t.edDraftURI="",t.github){
const e=t.github.split("github.com/")[1].split("/");
t.edDraftURI="https://".concat(e[0],".github.io/").concat(e[1])}"ED"===t.specStatus&&(0,n.pub)("warn","Editor's Drafts should set edDraftURI.")}t.isRegular&&"GN-WV"!==t.specStatus?t.thisVersion="https://docs.geostandaarden.nl/"+t.pubDomain+"/"+t.specStatus.substr(3).toLowerCase()+"-"+t.specType.toLowerCase()+"-"+t.shortName+"-"+(0,e.concatDate)(t.publishDate)+"/":t.thisVersion=t.edDraftURI;
t.isRegular&&t.hasBeenPublished&&(t.latestVersion="https://docs.geostandaarden.nl/".concat(t.pubDomain,"/").concat(t.shortName,"/"));
t.previousMaturity&&!t.previousStatus&&(t.previousStatus=t.previousMaturity);
t.previousPublishDate&&!t.previousStatus&&(t.previousStatus=t.specStatus);
if(t.previousPublishDate&&t.previousStatus){
t.previousPublishDate=f(t,"previousPublishDate");
const n=t.previousStatus.substr(3).toLowerCase();
let o="";
o=t.previousType?t.previousType.toLowerCase():t.specType.toLowerCase(),t.prevVersion="https://docs.geostandaarden.nl/".concat(t.pubDomain,"/").concat(n,"-").concat(o,"-").concat(t.shortName,"-").concat((0,e.concatDate)(t.previousPublishDate),"/")}const s=function(t){
t.name||(0,n.pub)("error","All authors and editors must have a name.")};
t.editors&&t.editors.forEach(s);
t.authors&&t.authors.forEach(s);
t.multipleEditors=t.editors&&t.editors.length>1,t.multipleAuthors=t.authors&&t.authors.length>1,$.each(t.alternateFormats||[],function(t,e){
e.uri&&e.label||(0,n.pub)("error","All alternate formats must have a uri and a label.")}),t.multipleAlternates=t.alternateFormats&&t.alternateFormats.length>1,t.alternatesHTML=t.alternateFormats&&(0,e.joinAnd)(t.alternateFormats,function(t){
var e=t.hasOwnProperty("lang")&&t.lang?" hreflang='"+t.lang+"'":"";
return e+=t.hasOwnProperty("type")&&t.type?" type='"+t.type+"'":"","<a rel='alternate' href='"+t.uri+"'"+e+">"+t.label+"</a>"}),t.bugTracker&&(t.bugTracker.new&&t.bugTracker.open?t.bugTrackerHTML="<a href='"+t.bugTracker.new+"'>"+t.l10n.file_a_bug+"</a> "+t.l10n.open_parens+"<a href='"+t.bugTracker.open+"'>"+t.l10n.open_bugs+"</a>"+t.l10n.close_parens:t.bugTracker.open?t.bugTrackerHTML="<a href='"+t.bugTracker.open+"'>open bugs</a>":t.bugTracker.new&&(t.bugTrackerHTML="<a href='"+t.bugTracker.new+"'>file a bug</a>"));
t.copyrightStart&&t.copyrightStart==t.publishYear&&(t.copyrightStart="");
for(var m in l)d[m]||(d[m]=l[m]);
t.longStatus=d[t.specStatus],t.textStatus=l[t.specStatus],t.typeStatus=u[t.specType],t.showThisVersion=!t.isNoTrack,t.showPreviousVersion=!t.isNoTrack&&!t.isSubmission,t.prevVersion||(t.showPreviousVersion=!1);
t.isGNDEF="GN-DEF"===t.specStatus,t.isGNWV="GN-WV"===t.specStatus,t.isGNCV="GN-CV"===t.specStatus,t.isGNVV="GN-VV"===t.specStatus,t.isGNBASIS="GN-BASIS"===t.specStatus,t.dashDate=e.ISODate.format(t.publishDate),t.publishISODate=t.publishDate.toISOString(),t.shortISODate=e.ISODate.format(t.publishDate),Object.defineProperty(t,"wgId",{
get(){
if(!this.hasOwnProperty("wgPatentURI"))return"";
const t=this.wgPatentURI.split("/"),e=t.findIndex(t=>"pp-impl"===t)+1;
return t[e]||""}});
const g=(0,r.default)(t);
document.body.insertBefore(g,document.body.firstChild),document.body.classList.add("h-entry");
var v=document.getElementById("sotd")||document.createElement("section");
t.isNoTrack||v.id||(0,n.pub)("error","A custom SotD paragraph is required for your type of document.");
v.id=v.id||"stod",v.classList.add("introductory");
var _=[t.wg,t.wgURI,t.wgPatentURI];
_.some(t=>Array.isArray(t))&&!_.every(t=>Array.isArray(t))&&(0,n.pub)("error","If one of '`wg`', '`wgURI`', or '`wgPatentURI`' is an array, they all have to be.");
if(Array.isArray(t.wg)){
t.multipleWGs=t.wg.length>1,t.wgHTML=(0,e.joinAnd)(t.wg,function(e,n){
return"the <a href='"+t.wgURI[n]+"'>"+e+"</a>"});
for(var y=[],b=0,w=t.wg.length;
b<w;
b++)y.push("a <a href='"+t.wgPatentURI[b]+"' rel='disclosure'>public list of any patent disclosures  ("+t.wg[b]+")</a>");
t.wgPatentHTML=(0,e.joinAnd)(y)}else t.multipleWGs=!1,t.wgHTML="the <a href='"+t.wgURI+"'>"+t.wg+"</a>";
"PR"!==t.specStatus||t.crEnd||(0,n.pub)("error",'`specStatus` is "PR" but no `crEnd` is specified (needed to indicate end of previous CR).');
"CR"!==t.specStatus||t.crEnd||(0,n.pub)("error",'`specStatus` is "CR", but no `crEnd` is specified in Respec config.');
t.crEnd=f(t,"crEnd"),t.humanCREnd=c.format(t.crEnd),"PR"!==t.specStatus||t.prEnd||(0,n.pub)("error",'`specStatus` is "PR" but no `prEnd` is specified.');
t.prEnd=f(t,"prEnd"),t.humanPREnd=c.format(t.prEnd),"PER"!==t.specStatus||t.perEnd||(0,n.pub)("error","Status is PER but no perEnd is specified");
t.perEnd=f(t,"perEnd"),t.humanPEREnd=c.format(t.perEnd),""!==t.subjectPrefix&&(t.subjectPrefixEnc=encodeURIComponent(t.subjectPrefix));
o.default.bind(v)(a(),function(t,e){
const n=e.cloneNode(!0),o=document.createDocumentFragment(),r=document.createElement("temp");
for(;
n.hasChildNodes()&&(n.firstChild.nodeType!==Node.ELEMENT_NODE||"section"!==n.firstChild.localName);
)o.appendChild(n.firstChild);
return r.appendChild(o),t.additionalContent=r.innerHTML,t.additionalSections=n.innerHTML,(0,i.default)(t)}(t,v)),!t.implementationReportURI&&(t.isCR||t.isPR||t.isRec)&&(0,n.pub)("error","CR, PR, and REC documents need to have an `implementationReportURI` defined.");
(0,n.pub)("amend-user-config",{
publishISODate:t.publishISODate,generatedSubtitle:"".concat(t.longStatus," ").concat(t.publishHumanDate)})},t.name=void 0,o=s(o),i=s(i),r=s(r);
t.name="geonovum/headers";
const c=new Intl.DateTimeFormat(["nl"],{
timeZone:"UTC",year:"numeric",month:"long",day:"2-digit"}),l={
"GN-WV":"Werkversie","GN-CV":"Consultatieversie","GN-VV":"Versie ter vaststelling","GN-DEF":"Vastgestelde versie","GN-BASIS":"Document"},u={
NO:"Norm",ST:"Standaard",IM:"Informatiemodel",PR:"Praktijkrichtlijn",HR:"Handreiking",WA:"Werkafspraak",AL:"Algemeen",BD:"Beheerdocumentatie"},d={
},h=[],p={
cc0:{
name:"Creative Commons 0 Public Domain Dedication",short:"CC0",url:"https://creativecommons.org/publicdomain/zero/1.0/",image:"https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg"},"cc-by":{
name:"Creative Commons Attribution 4.0 International Public License",short:"CC-BY",url:"https://creativecommons.org/licenses/by/4.0/legalcode",image:"https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg"},"cc-by-nd":{
name:"Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",short:"CC-BY-ND",url:"https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",image:"https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg"}};
function f(t,o,i=new Date){
const r=t[o]?new Date(t[o]):new Date(i);
if(Number.isFinite(r.valueOf())){
const t=e.ISODate.format(r);
return new Date(t)}const s="[`".concat(o,"`](https://github.com/w3c/respec/wiki/").concat(o,") ")+'is not a valid date: "'.concat(t[o],"\". Expected format 'YYYY-MM-DD'.");
return(0,n.pub)("error",s),new Date(e.ISODate.format(new Date))}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(2)],void 0===(i=function(t,e){
"use strict";
var n;
function o(){
const t=h([" Dit is de definitieve versie van de praktijkrichtlijn. Een praktijkrichtlijn is een product dat informatie geeft, vaak met een technisch karakter, dat nodig is voor het toepassen van een standaard. Een praktijkrichtlijn hoort altijd bij een standaard/norm."]);
return o=function(){
return t},t}function i(){
const t=h([" De programmaraad van Geonovum beoordeelt dit definitief concept. Keurt zij het goed, dan is er een nieuwe standaard."]);
return i=function(){
return t},t}function r(){
const t=h([" De programmaraad van Geonovum heeft deze standaard goedgekeurd."]);
return r=function(){
return t},t}function s(){
const t=h(["\n    Dit is een document zonder officiële status.\n"]);
return s=function(){
return t},t}function a(){
const t=h(["\n  Dit is een definitief concept van de nieuwe versie van "," ",". Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.\n"]);
return a=function(){
return t},t}function c(){
const t=h(["\n    Dit is een door de werkgroep goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar\n    <a href='","'>\n        ","</a>.\n"]);
return c=function(){
return t},t}function l(){
const t=h(["\n  Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door de werkgroep goedgekeurde consultatieversie.\n"]);
return l=function(){
return t},t}function u(){
const t=h(["\n    Dit is de definitieve versie van "," ",". Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.\n"]);
return u=function(){
return t},t}function d(){
const t=h(["<h2>","</h2><p>\n    <em>","</em>\n  </p>\n  <p>\n","\n","\n","\n","\n","\n","\n","\n","\n</p>\n","\n",""]);
return d=function(){
return t},t}function h(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=void 0,e=(n=e)&&n.__esModule?n:{
default:n};
t.default=(t=>{
const n=e.default;
return t.emailComments||(t.emailComments="geo-standaarden@geonovum.nl"),t.emailCommentsMailto="mailto:"+t.emailComments,"IM"==t.specType?t.article="het ":t.article="de ",n(d(),t.l10n.sotd,[t.l10n.status_at_publication],t.isGNDEF?n(u(),t.article,t.typeStatus.toLowerCase()):"",t.isGNWV?n(l()):"",t.isGNCV?n(c(),t.emailCommentsMailto,t.emailComments):"",t.isGNVV?n(a(),t.article,t.typeStatus.toLowerCase()):"",t.isGNBASIS?n(s()):"","ST"==t.specType&&t.isGNDEF?n(r()):"","ST"==t.specType&&t.isGNVV?n(i()):"","PR"==t.specType?n(o()):"",[t.additionalContent],[t.additionalSections])})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(2),n(0),n(43),n(44),n(45)],void 0===(i=function(t,e,n,o,i,r){
"use strict";
function s(t){
return t&&t.__esModule?t:{
default:t}}function a(){
const t=L(["\n        <dl>\n          <dt>Rechtenbeleid:</dt>\n          <dd>\n            <div class='copyright' style=\"margin: 0.25em 0;
\">\n              <abbr title='","'>\n              <a href='","'><img src='","' alt='","' width='115' height='40'></a>\n            </abbr>\n              <div style=\"display:inline-block;
 vertical-align:top\">\n                <p style=\"font-size: small;
\">","<br>(",")</p>\n              </div>\n            </div>\n          </dd>\n        </dl>\n      "]);
return a=function(){
return t},t}function c(){
const t=L(["\n      ","\n    "]);
return c=function(){
return t},t}function l(){
const t=L(["\n      <p class='copyright'>","</p>\n    "]);
return l=function(){
return t},t}function u(){
const t=L(["\n    <p>\n      ","\n      ","\n    </p>\n  "]);
return u=function(){
return t},t}function d(){
const t=L(['\n    <p>\n      Er zijn errata aanwezig. Zie de <a href="','"><strong>errata</strong></a> voor fouten en problemen die gerapporteerd zijn na publicatie.\n    </p>\n  ']);
return d=function(){
return t},t}function h(){
const t=L(["\n      <dt>","</dt>\n      ","\n    "]);
return h=function(){
return t},t}function p(){
const t=L(["",""]);
return p=function(){
return t},t}function f(){
const t=L(["",""]);
return f=function(){
return t},t}function m(){
const t=L(["\n      <dt>","</dt>\n      <dd><a href='","'>","</a></dd>\n    "]);
return m=function(){
return t},t}function g(){
const t=L(["\n      <dt>Vorige versie:</dt>\n      <dd><a href='","'>","</a></dd>\n    "]);
return g=function(){
return t},t}function v(){
const t=L(["\n      <dt>","</dt>\n      <dd>","</dd>\n    "]);
return v=function(){
return t},t}function _(){
const t=L(["<a href='","'>","</a>"]);
return _=function(){
return t},t}function y(){
const t=L(["\n      <dt>","</dt>\n      <dd><a class='u-url' href='","'>","</a></dd>\n      <dt>","</dt>\n      <dd>","</dd>\n    "]);
return y=function(){
return t},t}function b(){
const t=L(["\n    ","<br/>\n    "]);
return b=function(){
return t},t}function w(){
const t=L(["\n    <h2 id='subtitle'>","</h2>\n  "]);
return w=function(){
return t},t}function x(){
const t=L(["<div class='head'>\n  ","\n  <h1 class='title p-name' id='title'>","</h1>\n  ","\n  <h2>Geonovum ","\n  "," <time class='dt-published' datetime='","'>","</time></h2>\n  <dl>\n    ","\n    ","\n    ","\n    ","\n    <dt>","</dt>\n    ","\n    ","\n    ","\n  </dl>\n  ","\n  ","\n    ",'\n  <hr title="Separator for header">\n</div>']);
return x=function(){
return t},t}function L(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=void 0,e=s(e),o=s(o),i=s(i),r=s(r);
t.default=(t=>{
const n=e.default;
return n(x(),t.logos.map(i.default),t.title,t.subtitle?n(w(),t.subtitle):"",t.isRegular?n(b(),t.typeStatus):"",t.textStatus,t.dashDate,t.publishHumanDate,t.isNoTrack?"":n(y(),t.l10n.this_version,t.thisVersion,t.thisVersion,t.l10n.latest_published_version,t.latestVersion?n(_(),t.latestVersion,t.latestVersion):"geen"),t.bugTrackerHTML?n(v(),t.l10n.bug_tracker,[t.bugTrackerHTML]):"",t.showPreviousVersion?n(g(),t.prevVersion,t.prevVersion):"",t.edDraftURI?n(m(),t.l10n.latest_editors_draft,t.edDraftURI,t.edDraftURI):"",t.multipleEditors?n(f(),t.l10n.editors):n(p(),t.l10n.editor),(0,r.default)(t,"Editor",t.editors),t.authors?n(h(),t.multipleAuthors?[t.l10n.authors]:[t.l10n.author],(0,r.default)(t,"Author",t.authors)):"",t.otherLinks?t.otherLinks.map(o.default):"",t.errata?n(d(),t.errata):"",t.alternateFormats?n(u(),t.multipleAlternates?"Dit document is ook beschikbaar in deze niet-normatieve formaten:":"Dit document is ook beschikbaar in dit niet-normatieve formaat:",[t.alternatesHTML]):"",t.additionalCopyrightHolders?n(l(),[t.additionalCopyrightHolders]):n(c(),t.overrideCopyright?[t.overrideCopyright]:n(a(),[t.licenseInfo.name],[t.licenseInfo.url],[t.licenseInfo.image],[t.licenseInfo.name],[t.licenseInfo.name],[t.licenseInfo.short])))})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(2),n(0)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(){
const t=a(['\n            <a href="','">',"</a>\n          "]);
return i=function(){
return t},t}function r(){
const t=a(['\n    <dd class="','">\n      ',"\n    </dd>\n  "]);
return r=function(){
return t},t}function s(){
const t=a(['\n    <dt class="','">',":</dt>\n    ","\n  "]);
return s=function(){
return t},t}function a(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=void 0;
const c=(e=(o=e)&&o.__esModule?o:{
default:o}).default;
function l(t){
return c(r(),t.class?t.class:null,t.href?c(i(),t.href,t.value||t.href):"")}t.default=(t=>{
if(!t.key){
const e="Found a link without `key` attribute in the configuration. See dev console.";
return(0,n.pub)("warn",e),void console.warn("warn",e,t)}return c(s(),t.class?t.class:null,t.key,t.data?t.data.map(l):l(t))})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(2),n(1),n(0)],void 0===(i=function(t,e,n,o){
"use strict";
var i;
function r(){
const t=function(t,e){
e||(e=t.slice(0));
return Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}(['\n      <img\n        id="','"\n        alt="','"\n        width="','"\n        height="','">\n  ']);
return r=function(){
return t},t}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=void 0,e=(i=e)&&i.__esModule?i:{
default:i};
t.default=(t=>{
const n=document.createElement("a");
if(!t.alt){
const t="Found spec logo without an `alt` attribute. See dev console.";
n.classList.add("respec-offending-element"),(0,o.pub)("warn",t),console.warn("warn",t,n)}return n.href=t.url||"",n.classList.add("logo"),e.default.bind(n)(r(),t.id,t.alt,t.width,t.height),n.querySelector("img").src=t.src,n})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(2)],void 0===(i=function(t,e){
"use strict";
var n;
function o(){
const t=d(["<a href='","'></a>"]);
return o=function(){
return t},t}function i(){
const t=d(["<span class='","'></span>"]);
return i=function(){
return t},t}function r(){
const t=d(["",""]);
return r=function(){
return t},t}function s(){
const t=d([", <a class='ed_mailto u-email email'\n        href='","'>","</a>"]);
return s=function(){
return t},t}function a(){
const t=d([", <a class='p-org org h-org h-card' href='","'>","</a>"]);
return a=function(){
return t},t}function c(){
const t=d(["<span class='p-name fn'>","</span>"]);
return c=function(){
return t},t}function l(){
const t=d(["<a class='u-url url p-name fn'\n        href='","'>","</a>"]);
return l=function(){
return t},t}function u(){
const t=d(["<dd class='p-author h-card vcard'\n      data-editor-id='","'></dd>"]);
return u=function(){
return t},t}function d(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=void 0,e=(n=e)&&n.__esModule?n:{
default:n};
t.default=((t,n,d=[])=>{
const h=e.default,p=[];
for(let t=0;
t<d.length;
t++)p.push(f(d[t]));
return p;
function f(t,n){
const o=t.w3cid?parseInt(t.w3cid,10):null,i=h(u(),o),d=document.createDocumentFragment(),p=[];
if(t.url?p.push(h(l(),t.url,t.name)):p.push(h(c(),t.name)),t.company&&(t.companyURL?p.push(h(a(),t.companyURL,t.company)):p.push(document.createTextNode(", ".concat(t.company)))),t.mailto&&p.push(h(s(),"mailto:".concat(t.mailto),t.mailto)),t.note&&p.push(document.createTextNode(" (".concat(t.note,")"))),t.extras){
const e=t.extras.filter(t=>t.name&&t.name.trim()).map(m);
for(const t of e)p.push(document.createTextNode(", "),t)}return e.default.bind(d)(r(),p),i.appendChild(d),i}function m(t){
const e=h(i(),t.class||null);
let n=e;
return t.href&&(n=h(o(),t.href),e.appendChild(n)),n.textContent=t.name,e}})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(3),n(0)],void 0===(i=function(t,e,n){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(){
const t=document.getElementById("abstract");
if(!t)return void(0,n.pub)("error",'Document must have one element with `id="abstract"');
t.classList.add("introductory");
let o=document.querySelector("#abstract>h2");
if(o)return;
(o=document.createElement("h2")).textContent=e.l10n[e.lang].abstract,t.prepend(o)},t.name=void 0;
t.name="w3c/abstract"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(48),n(0)],void 0===(i=function(t,e,n){
"use strict";
var o;
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t,o,i){
var r=$("#conformance");
r.length&&r.prepend((0,e.default)(t).childNodes);
(0,n.pub)("end","geonovum/conformance"),i()},t.name=void 0,e=(o=e)&&o.__esModule?o:{
default:o};
t.name="geonovum/conformance"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(2)],void 0===(i=function(t,e){
"use strict";
var n;
function o(){
const t=function(t,e){
e||(e=t.slice(0));
return Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}(["<h2>Conformiteit</h2>\n<p>\nNaast onderdelen die als niet normatief gemarkeerd zijn, zijn ook alle diagrammen, voorbeelden, en noten in dit document niet normatief. Verder is alles in dit document normatief.\n</p>\n<p>\nInformatief en normatief.\n</p>"]);
return o=function(){
return t},t}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=void 0,e=(n=e)&&n.__esModule?n:{
default:n};
t.default=(()=>{
return(0,e.default)(o())})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
document.querySelectorAll("[data-transform]").forEach(t=>{
t.innerHTML=(0,e.runTransforms)(t.innerHTML,t.dataset.transform),t.removeAttribute("data-transform")})},t.name=void 0;
t.name="core/data-transform"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(2),n(51),n(0)],void 0===(i=function(t,e,n,o,i){
"use strict";
var r;
function s(){
const t=l(['\n              <abbr title="','">',"</abbr>"]);
return s=function(){
return t},t}function a(){
const t=l(['<cite><a class="bibref" href="','">',"</a></cite>"]);
return a=function(){
return t},t}function c(){
const t=l(['<em class="rfc2119" title="','">',"</em>"]);
return c=function(){
return t},t}function l(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
document.normalize(),t.normativeReferences||(t.normativeReferences=new Set);
t.informativeReferences||(t.informativeReferences=new Set);
t.respecRFC2119||(t.respecRFC2119={
});
const r=new Map,l=document.querySelectorAll("abbr[title]");
for(const t of l)r.set(t.textContent,t.title);
const u=[...r.keys()];
u.sort((t,e)=>e.length-t.length);
const d=u.length?"(?:\\b".concat(u.join("\\b)|(?:\\b"),"\\b)"):null,h=(0,e.getTextNodes)(document.body,["pre"]),p=new RegExp("(".concat(["\\bMOET(?:\\s+NIET)?\\b","\\bMOETEN(?:\\s+NIET)?\\b","\\bZOU(?:\\s+NIET)?\\b","\\bZOUDEN(?:\\s+NIET)?\\b","\\bMAG\\b","\\bMOGEN\\b","\\b(?:NIET\\s+)?VEREIST\\b","\\b(?:NIET\\s+)?AANBEVOLEN\\b","\\bOPTIONEEL\\b","(?:{
{
3}\\s*.*\\s*}{
3})","(?:\\[\\[(?:!|\\\\|\\?)?[A-Za-z0-9\\.-]+\\]\\])",...d?[d]:[]].join("|"),")"));
for(const l of h){
const u=l.data.split(p);
if(1===u.length)continue;
const d=document.createDocumentFragment();
for(;
u.length;
){
const h=u.shift();
let p=null;
if(u.length&&(p=u.shift()),d.appendChild(document.createTextNode(h)),p)if(/MOET(?:\s+NIET)?|MOETEN(?:\s+NIET)?|ZOU(?:\s+NIET)?|ZOUDEN(?:\s+NIET)?|MAG|MOGEN|(?:NIET\s+)?VEREIST|(?:NIET\s+)?AANBEVOLEN|OPTIONEEL/.test(p))p=p.split(/\s+/).join(" "),d.appendChild((0,n.default)(c(),p,p)),t.respecRFC2119[p]=!0;
else if(p.startsWith("{
{
{
")){
const t=p.replace(/^\{
{
3}/,"").replace(/\}{
3}$/,"").trim();
t.startsWith("\\")?d.appendChild(document.createTextNode("{
{
{
".concat(t.replace(/^\\/,""),"}}}"))):d.appendChild((0,o.idlStringToHtml)(t))}else if(p.startsWith("[[")){
let o=p;
if((o=(o=o.replace(/^\[\[/,"")).replace(/\]\]$/,"")).startsWith("\\"))d.appendChild(document.createTextNode("[[".concat(o.replace(/^\\/,""),"]]")));
else{
const{
type:i,illegal:r}=(0,e.refTypeFromContext)(o,l.parentNode);
o=o.replace(/^(!|\?)/,""),d.appendChild(document.createTextNode("["));
const s="#bib-".concat(o.toLowerCase()),c=(0,n.default)(a(),s,o);
d.appendChild(c),d.appendChild(document.createTextNode("]")),r&&!t.normativeReferences.has(o)&&(0,e.showInlineWarning)(c,"Normative references in informative sections are not allowed. "+"Remove '!' from the start of the reference `[[!".concat(o,"]]`")),"informative"!==i||r?t.normativeReferences.add(o):t.informativeReferences.add(o)}}else r.has(p)?"ABBR"===l.parentElement.tagName?d.appendChild(document.createTextNode(p)):d.appendChild((0,n.default)(s(),r.get(p),p)):(0,i.pub)("error","Found token '".concat(p,"' but it does not correspond to anything"))}l.parentNode.replaceChild(d,l)}},t.name=void 0,n=(r=n)&&r.__esModule?r:{
default:r};
t.name="geonovum/inlines"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(2)],void 0===(i=function(t,e){
"use strict";
var n;
function o(){
const t=l(['<code><a data-xref-type="_IDL_">',"</a></code>"]);
return o=function(){
return t},t}function i(){
const t=l(["<code>",'<a class="respec-idl-xref"\n      data-xref-type="method" data-link-for="','"\n      data-lt="','">',"</a>(",")</code>"]);
return i=function(){
return t},t}function r(){
const t=l(["<code>",'<a class="respec-idl-xref"\n      data-xref-type="attribute" data-link-for="','">',"</a></code>"]);
return r=function(){
return t},t}function s(){
const t=l(['<code><a\n    class="respec-idl-xref" data-xref-type="dictionary">','</a>["<a\n    class="respec-idl-xref" data-xref-type="dict-member"\n    data-link-for="','" data-lt="','">','</a>"]</code>']);
return s=function(){
return t},t}function a(){
const t=l(['<a data-xref-type="_IDL_">',"</a>."]);
return a=function(){
return t},t}function c(){
const t=l(['<code><a data-xref-type="attribute">',"</a></code>"]);
return c=function(){
return t},t}function l(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.idlStringToHtml=function(t){
const{
base:n,attribute:l,member:p,method:f,args:m}=function(t){
const e=Object.create(null),n=t.split(d);
u.test(n[n.length-1])&&(e.method=n.pop(),e.args=e.method.match(u)[1].split(/,\s*/));
n.length>1&&!e.method&&(e.attribute=n.pop());
const o=n.join(".");
if(h.test(o)){
const[,t,n]=o.match(h);
e.base=t,e.member=n}else e.base=o;
return e}(t);
if(n.startsWith("[[")&&n.endsWith("]]"))return(0,e.default)(c(),n);
const g=n?(0,e.default)(a(),n):"";
if(p)return(0,e.default)(s(),n,n,p,p);
if(l)return(0,e.default)(r(),g,n,l);
if(f){
const[t]=f.split("(",1);
return(0,e.default)(i(),g,n,f,t,{
html:m.map(t=>"<var>".concat(t,"</var>")).join(", ")})}return(0,e.default)(o(),n)},e=(n=e)&&n.__esModule?n:{
default:n};
const u=/\((.*)\)$/,d=/\b\.\b|\.(?=\[\[)/,h=/(\w+)\["(\w+)"\]/}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(6)],void 0===(i=function(t,e,n){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
document.querySelectorAll("dfn").forEach(t=>{
const o=t.closest("[data-dfn-for]");
o&&o!==t&&!t.dataset.dfnFor&&(t.dataset.dfnFor=o.dataset.dfnFor),t.dataset.dfnFor&&(t.dataset.dfnFor=t.dataset.dfnFor.toLowerCase());
const i=(0,e.getDfnTitles)(t,{
isDefinition:!0});
(0,n.registerDefinition)(t,i)})},t.name=void 0;
t.name="core/dfn"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(54),n(1),n(6)],void 0===(i=function(t,e,n,o){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
if(!t.pluralize)return;
const i=function(){
const t=new Set;
document.querySelectorAll("a:not([href])").forEach(e=>{
const o=(0,n.norm)(e.textContent).toLowerCase();
t.add(o),e.dataset.lt&&t.add(e.dataset.lt)});
const o=new Set;
return document.querySelectorAll("dfn:not([data-lt-noDefault])").forEach(t=>{
const e=(0,n.norm)(t.textContent).toLowerCase();
o.add(e),t.dataset.lt&&t.dataset.lt.split("|").forEach(t=>o.add(t))}),function(i){
const r=(0,n.norm)(i.toLowerCase()),s=(0,e.isSingular)(r)?(0,e.plural)(r):(0,e.singular)(r);
return t.has(s)&&!o.has(s)?s:""}}();
document.querySelectorAll("dfn:not([data-lt-no-plural]):not([data-lt-noDefault])").forEach(t=>{
const e=[t.textContent];
t.dataset.lt&&e.push(...t.dataset.lt.split("|"));
const n=new Set(e.map(i).filter(t=>t));
if(n.size){
const e=t.dataset.plurals?t.dataset.plurals.split("|"):[],i=[...new Set([...e,...n])];
t.dataset.plurals=i.join("|"),(0,o.registerDefinition)(t,i)}})},t.name=void 0;
t.name="core/pluralize"}.apply(e,o))||(t.exports=i)},function(t,e,n){
t.exports=function(){
var t=[],e=[],n={
},o={
},i={
};
function r(t){
return"string"==typeof t?new RegExp("^"+t+"$","i"):t}function s(t,e){
return t===e?e:t===t.toUpperCase()?e.toUpperCase():t[0]===t[0].toUpperCase()?e.charAt(0).toUpperCase()+e.substr(1).toLowerCase():e.toLowerCase()}function a(t,e){
return t.replace(e[0],function(n,o){
var i,r,a=(i=e[1],r=arguments,i.replace(/\$(\d{
1,2})/g,function(t,e){
return r[e]||""}));
return s(""===n?t[o-1]:n,a)})}function c(t,e,o){
if(!t.length||n.hasOwnProperty(t))return e;
for(var i=o.length;
i--;
){
var r=o[i];
if(r[0].test(e))return a(e,r)}return e}function l(t,e,n){
return function(o){
var i=o.toLowerCase();
return e.hasOwnProperty(i)?s(o,i):t.hasOwnProperty(i)?s(o,t[i]):c(i,o,n)}}function u(t,e,n,o){
return function(o){
var i=o.toLowerCase();
return!!e.hasOwnProperty(i)||!t.hasOwnProperty(i)&&c(i,i,n)===i}}function d(t,e,n){
var o=1===e?d.singular(t):d.plural(t);
return(n?e+" ":"")+o}return d.plural=l(i,o,t),d.isPlural=u(i,o,t),d.singular=l(o,i,e),d.isSingular=u(o,i,e),d.addPluralRule=function(e,n){
t.push([r(e),n])},d.addSingularRule=function(t,n){
e.push([r(t),n])},d.addUncountableRule=function(t){
"string"!=typeof t?(d.addPluralRule(t,"$0"),d.addSingularRule(t,"$0")):n[t.toLowerCase()]=!0},d.addIrregularRule=function(t,e){
e=e.toLowerCase(),t=t.toLowerCase(),i[t]=e,o[e]=t},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach(function(t){
return d.addIrregularRule(t[0],t[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(t){
return d.addPluralRule(t[0],t[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(t){
return d.addSingularRule(t[0],t[1])}),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()},function(t,e,n){
var o,i;
o=[e,n(1),n(56),n(3),n(2),n(0)],void 0===(i=function(t,e,n,o,i,r){
"use strict";
function s(t){
return t&&t.__esModule?t:{
default:t}}function a(){
const t=d(['\n        <div class="example" id="','">\n          ',"\n          ","\n        </div>\n      "]);
return a=function(){
return t},t}function c(){
const t=d(["\n      <style>\n        ","\n      </style>\n    "]);
return c=function(){
return t},t}function l(){
const t=d(['\n    <div class="marker">\n      <a class="self-link">',"","</a>","\n    </div>\n  "]);
return l=function(){
return t},t}function u(){
const t=d(['\n        <span class="example-title">: ',"</span>\n      "]);
return u=function(){
return t},t}function d(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
const o=document.querySelectorAll("pre.example, pre.illegal-example, aside.example");
if(!o.length)return;
document.head.insertBefore((0,i.default)(c(),n.default),document.querySelector("link"));
let s=0;
o.forEach(n=>{
const o=n.classList.contains("illegal-example"),c={
number:s,illegal:o},{
title:l}=n;
if("aside"===n.localName){
const o=f(t,n,++s,c);
n.prepend(o),l?(0,e.addId)(n,"example-".concat(s),l):(0,e.addId)(n,"example",String(s));
const{
id:i}=n,a=o.querySelector("a.self-link");
a.href="#".concat(i),(0,r.pub)("example",c)}else{
const o=!!n.closest("aside");
o||++s,c.content=n.innerHTML,n.classList.remove("example","illegal-example");
const u=n.id?n.id:null;
u&&n.removeAttribute("id");
const d=(0,i.default)(a(),u,f(t,n,o?0:s,c),n.cloneNode(!0));
l&&(0,e.addId)(d,"example-".concat(s),l),(0,e.addId)(d,"example",String(s));
const h=d.querySelector("a.self-link");
h.href="#".concat(d.id),n.parentElement.replaceChild(d,n),o||(0,r.pub)("example",c)}})},t.name=void 0,n=s(n),i=s(i);
t.name="core/examples";
const h={
en:{
example:"Example"},nl:{
example:"Voorbeeld"},es:{
example:"Ejemplo"}},p=h[o.lang in h?o.lang:"en"];
function f(t,e,n,o){
o.title=e.title,o.title&&e.removeAttribute("title");
const r=n>0?" ".concat(n):"",s=o.title?(0,i.default)(u(),o.title):"";
return(0,i.default)(l(),p.example,r,s)}}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default="/* --- EXAMPLES --- */\nspan.example-title {
\n    text-transform: none;
\n}\naside.example, div.example, div.illegal-example {
\n    padding: 0.5em;
\n    margin: 1em 0;
\n    position: relative;
\n    clear: both;
\n}\ndiv.illegal-example {
 color: red }\ndiv.illegal-example p {
 color: black }\naside.example, div.example {
\n    padding: .5em;
\n    border-left-width: .5em;
\n    border-left-style: solid;
\n    border-color: #e0cb52;
\n    background: #fcfaee;
\n}\n\naside.example div.example {
\n    border-left-width: .1em;
\n    border-color: #999;
\n    background: #fff;
\n}\naside.example div.example span.example-title {
\n    color: #999;
\n}\n"},function(t,e,n){
var o,i;
o=[e,n(1),n(58),n(3),n(2),n(0)],void 0===(i=function(t,e,n,o,i,r){
"use strict";
function s(t){
return t&&t.__esModule?t:{
default:t}}function a(){
const t=_(["<style>","</style>"]);
return a=function(){
return t},t}function c(){
const t=_(['<a\n    class="','"\n    style="','"\n    href="','">',"</a>"]);
return c=function(){
return t},t}function l(){
const t=_(['<span class="issue-label">: ',"","</span>"]);
return l=function(){
return t},t}function u(){
const t=_(['<span\n      class="issue-label"\n      aria-label="','">: ',"","</span>"]);
return u=function(){
return t},t}function d(){
const t=_(['\n    <li><a href="','">',"</a>","</li>\n  "]);
return d=function(){
return t},t}function h(){
const t=_(['<span style="text-transform: none">: ',"</span>"]);
return h=function(){
return t},t}function p(){
const t=_(["<a href='","'/>"]);
return p=function(){
return t},t}function f(){
const t=_(["<a href='","'/>"]);
return f=function(){
return t},t}function m(){
const t=_(["\n        <div role='heading' class='","'>","</div>"]);
return m=function(){
return t},t}function g(){
const t=_(['<div class="','" role="','"></div>']);
return g=function(){
return t},t}function v(){
const t=_(["\n    <div><h2>","</h2>","</div>"]);
return v=function(){
return t},t}function _(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(t){
const o=document.querySelectorAll(".issue, .note, .warning, .ednote");
if(!o.length)return;
const s=t.githubAPI?await async function(t){
const{
githubAPI:n,githubUser:o,githubToken:i}=t,s=document.querySelectorAll(".issue[data-number]");
if(s.length>w){
const t="Your spec contains ".concat(s.length," Github issues, ")+"but GitHub only allows ".concat(w," requests. Some issues might not show up.");
(0,r.pub)("warning",t)}const a=[...s].map(t=>Number.parseInt(t.dataset.number,10)).filter(t=>t).map(async t=>{
const s="".concat(n,"/issues/").concat(t),a={
Accept:"application/vnd.github.v3.html+json"};
if(o&&i){
const t=btoa("".concat(o,":").concat(i)),e="Basic ".concat(t);
Object.assign(a,{
Authorization:e})}else if(i){
const t="token ".concat(i);
Object.assign(a,{
Authorization:t})}const c=new Request(s,{
mode:"cors",referrerPolicy:"no-referrer",headers:a}),l=await(0,e.fetchAndCache)(c);
return async function(t,e){
const n={
title:"",number:e,state:"",message:""};
try{
const o=await t.json();
Object.assign(n,o)}catch(t){
n.message="Error JSON parsing issue #".concat(e," from GitHub.")}if(!t.ok||n.message){
const o="Error fetching issue #".concat(e," from GitHub. ").concat(n.message," (HTTP Status ").concat(t.status,").");
(0,r.pub)("error",o)}return[e,n]}(l,t)}),c=await Promise.all(a);
return new Map(c)}(t):new Map,{
head:_}=document;
_.insertBefore((0,i.default)(a(),[n.default]),_.querySelector("link")),function(t,n,o){
const s=!!document.querySelector(".issue[data-number]");
let a=0;
const _=document.createElement("ul"),y=(0,i.default)(v(),b.issue_summary,_);
t.forEach(t=>{
const{
type:v,displayType:y,isFeatureAtRisk:b}=function(t,e){
const n=t.classList.contains("issue"),o=t.classList.contains("warning"),i=t.classList.contains("ednote"),r=t.classList.contains("atrisk"),s=n?"issue":o?"warning":i?"ednote":"note",a=n?r?e.l10n.feature_at_risk:e.l10n.issue:o?e.l10n.warning:i?e.l10n.editors_note:e.l10n.note;
return{
type:s,displayType:a,isFeatureAtRisk:r}}(t,o),w="issue"===v,x="span"===t.localName,{
number:L}=t.dataset,C={
type:v,inline:x,title:t.title};
if(!w||x||s?L&&(C.number=Number(L)):(a++,C.number=a),!x){
const r=b?"".concat(v," atrisk"):v,x="note"===v?"note":null,P=(0,i.default)(g(),r,x),E=document.createElement("span"),T=(0,i.default)(m(),"".concat(v,"-title marker"),E);
(0,e.addId)(T,"h",v);
let k,S=y;
if(t.id?(P.id=t.id,t.removeAttribute("id")):(0,e.addId)(P,"issue-container",C.number?"number-".concat(C.number):""),w){
if(s){
if(L){
S+=" ".concat(L);
const t=function(t,e,{
isFeatureAtRisk:n=!1}={
}){
if(!n&&e.issueBase)return(0,i.default)(f(),e.issueBase+t);
if(n&&e.atRiskBase)return(0,i.default)(p(),e.atRiskBase+t)}(L,o,{
isFeatureAtRisk:b});
t&&(E.before(t),t.append(E)),E.classList.add("issue-number"),(k=n.get(Number(L)))&&!C.title&&(C.title=k.title)}}else S+=" ".concat(a);
void 0!==C.number&&_.append(function(t,e,n){
const o="".concat(t," ").concat(e.number),r=e.title?(0,i.default)(h(),e.title):"";
return(0,i.default)(d(),"#".concat(n),o,r)}(o.l10n.issue,C,P.id))}if(E.textContent=S,C.title){
t.removeAttribute("title");
const{
repoURL:n=""}=o.github||{
},r=k?k.labels:[];
k&&"closed"===k.state&&P.classList.add("closed"),T.append(function(t,n,o){
const r=t.map(t=>(function(t,e){
const{
color:n,name:o}=t,r=new URL("./issues/",e);
r.searchParams.set("q",'is:issue is:open label:"'.concat(t.name,'"'));
const s=parseInt(n,16),a=isNaN(s)||function(t){
return.2126*(t>>16&255)+.7152*(t>>8&255)+.0722*(t>>0&255)>140}(s)?"light":"dark",l="respec-gh-label respec-label-".concat(a),u="background-color: #".concat(n);
return(0,i.default)(c(),l,u,r.href,o)})(t,o)),s=t.map(t=>t.name),a=(0,e.joinAnd)(s);
r.length&&r.unshift(document.createTextNode(" "));
if(s.length){
const t="This issue is labelled as ".concat(a,".");
return(0,i.default)(u(),t,n,r)}return(0,i.default)(l(),n,r)}(r,C.title,n))}let D=t;
t.replaceWith(P),D.classList.remove(v),D.removeAttribute("data-number"),k&&!D.innerHTML.trim()&&(D=document.createRange().createContextualFragment(k.body_html)),P.append(T,D);
const O=(0,e.parents)(T,"section").length+2;
T.setAttribute("aria-level",O)}(0,r.pub)(C.type,C)});
const w=document.getElementById("issue-summary");
w&&(document.querySelectorAll(".issue").length?w.append(...y.childNodes):((0,r.pub)("warn","Using issue summary (#issue-summary) but no issues found."),w.remove()))}(o,s,t),document.querySelectorAll(".ednote").forEach(t=>{
t.classList.remove("ednote"),t.classList.add("note")})},t.name=void 0,n=s(n),i=s(i);
t.name="core/issues-notes";
const y={
en:{
issue_summary:"Issue Summary"},nl:{
issue_summary:"Lijst met issues"},es:{
issue_summary:"Resumen de la cuestión"}},b=y[o.lang in y?o.lang:"en"],w=60}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default='/* --- ISSUES/NOTES --- */\n.issue-label {
\n    text-transform: initial;
\n}\n\n.warning > p:first-child {
 margin-top: 0 }\n.warning {
\n    padding: .5em;
\n    border-left-width: .5em;
\n    border-left-style: solid;
\n}\nspan.warning {
 padding: .1em .5em .15em;
 }\n\n.issue.closed span.issue-number {
\n    text-decoration: line-through;
\n}\n\n.warning {
\n    border-color: #f11;
\n    border-width: .2em;
\n    border-style: solid;
\n    background: #fbe9e9;
\n}\n\n.warning-title:before{
\n    content: "⚠";
 /*U+26A0 WARNING SIGN*/\n    font-size: 3em;
\n    float: left;
\n    height: 100%;
\n    padding-right: .3em;
\n    vertical-align: top;
\n    margin-top: -0.5em;
\n}\n\nli.task-list-item {
\n    list-style: none;
\n}\n\ninput.task-list-item-checkbox {
\n    margin: 0 0.35em 0.25em -1.6em;
\n    vertical-align: middle;
\n}\n\n.issue a.respec-gh-label {
\n  padding: 5px;
\n  margin: 0 2px 0 2px;
\n  font-size: 10px;
\n  text-transform: none;
\n  text-decoration: none;
\n  font-weight: bold;
\n  border-radius: 4px;
\n  position: relative;
\n  bottom: 2px;
\n  border: none;
\n}\n\n.issue a.respec-label-dark {
\n  color: #fff;
\n  background-color: #000;
\n}\n\n.issue a.respec-label-light {
\n  color: #000;
\n  background-color: #fff;
\n}\n'},function(t,e,n){
var o,i;
o=[e,n(2),n(0)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(){
const t=function(t,e){
e||(e=t.slice(0));
return Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}(['<a href="','">Req. ',"</a>"]);
return i=function(){
return t},t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
document.querySelectorAll(".req").forEach((t,n)=>{
const o="#".concat(t.getAttribute("id")),r=(0,e.default)(i(),o,n+1);
t.prepend(r,": ")}),document.querySelectorAll("a.reqRef[href]").forEach(t=>{
const e=t.getAttribute("href"),o=e.substring(1),i=document.getElementById(o);
let r;
if(i)r=i.querySelector("a:first-child").textContent;
else{
r="Req. not found '".concat(o,"'");
const e="Requirement not found in element `a.reqRef`: ".concat(o);
(0,n.pub)("error",e),console.warn(e,t)}t.textContent=r})},t.name=void 0,e=(o=e)&&o.__esModule?o:{
default:o};
t.name="core/requirements"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(61),n(2),n(0)],void 0===(i=function(t,e,n,o,i){
"use strict";
function r(t){
return t&&t.__esModule?t:{
default:t}}function s(){
const t=u(["<h2>Best Practices Summary</h2>"]);
return s=function(){
return t},t}function a(){
const t=u(["<style>","</style>"]);
return a=function(){
return t},t}function c(){
const t=u(['<span class="practicetitle">Best Practice ',"</span>: "]);
return c=function(){
return t},t}function l(){
const t=u(['<li><a href="','">Best Practice ',"</a>: ","</li>"]);
return l=function(){
return t},t}function u(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
let t=0;
const r=document.querySelectorAll("span.practicelab"),u=document.createElement("ul");
for(const n of r){
t++;
const i=(0,e.addId)(n,"bp"),r=(0,o.default)(l(),"#".concat(i),t,n.textContent);
u.appendChild(r),u.classList.add("practicebox");
const s=(0,o.default)(c(),t);
n.prepend(...s.childNodes)}const d=document.getElementById("bp-summary");
r.length?(document.head.insertBefore((0,o.default)(a(),[n.default]),document.head.querySelector("link")),d&&(d.appendChild((0,o.default)(s())),d.appendChild(u))):d&&((0,i.pub)("warn","Using best practices summary (#bp-summary) but no best practices found."),d.remove())},t.name=void 0,n=r(n),o=r(o);
t.name="core/best-practices"}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default="/* --- Best Practices ---  */\n\nspan.practicelab {
\n  display: block;
\n  color: #005A9C;
\n  margin-bottom: 1em;
\n}\n\nspan.practicetitle {
\n  color: #005A9C;
\n  text-decoration: underline;
\n  margin-bottom: 1em;
\n}\n\np.practicedesc {
\n  padding: 2em;
\n  border-left-width: 0.5em;
\n  border-left-style: solid;
\n  border-color: #8CCBF2;
\n  background: \n  rgb(241, 246, 253);
\n}\n\n.practicebox {
\n    background: black;
\n}\n\n@media (max-width: 767px) {
\n  span.practicetitle {
\n    display: block;
\n  }\n}\n"},function(t,e,n){
var o,i;
o=[e,n(1),n(3),n(2)],void 0===(i=function(t,e,n,o){
"use strict";
var i;
function r(){
const t=u(["<li class='tofline'>\n    <a class='tocxref' href='","'>","</a>\n  </li>"]);
return r=function(){
return t},t}function s(){
const t=u(["<span class='figno'>","</span>"]);
return s=function(){
return t},t}function a(){
const t=u(["<span class='fig-title'>"]);
return a=function(){
return t},t}function c(){
const t=u(["<ul class='tof'>","</ul>"]);
return c=function(){
return t},t}function l(){
const t=u(["<h2>","</h2>"]);
return l=function(){
return t},t}function u(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
n=document,n.querySelectorAll(":not(picture)>img:not([width]):not([height]):not([srcset])").forEach(t=>{
0!==t.naturalHeight&&0!==t.naturalWidth&&(t.height=t.naturalHeight,t.width=t.naturalWidth)});
var n;
const{
figMap:i,tof:u}=function(t){
const n={
},i=[];
return document.querySelectorAll("figure").forEach((c,l)=>{
const u=c.querySelector("figcaption");
u?(function(t,n,i,r){
const c=n.textContent;
(0,e.addId)(t,"fig",c),(0,e.wrapInner)(n,(0,o.default)(a())),n.prepend(r.l10n.fig,(0,o.default)(s(),i+1)," ")}(c,u,l,t),n[c.id]=u.childNodes):(0,e.showInlineWarning)(c,"Found a `<figure>` without a `<figcaption>`"),i.push(function(t,n){
const i=n.cloneNode(!0);
return i.querySelectorAll("a").forEach(t=>{
(0,e.renameElement)(t,"span").removeAttribute("href")}),(0,o.default)(r(),"#".concat(t),i.childNodes)}(c.id,u))}),{
figMap:n,tof:i}}(t);
!function(t){
document.querySelectorAll("a[href]").forEach(e=>{
const n=e.getAttribute("href");
if(!n)return;
const o=t[n.slice(1)];
if(!o)return;
if(e.classList.add("fig-ref"),""!==e.innerHTML)return;
const i=p(o,0,2);
if(e.append(i),!e.hasAttribute("title")){
const t=p(o,2).textContent;
e.title=t.trim()}})}(i);
const d=document.getElementById("tof");
u.length&&d&&(!function(t){
if(t.classList.contains("appendix")||t.classList.contains("introductory")||t.closest("section"))return;
const e=function(t){
const e=[];
for(const n of function*(t){
let e=t;
for(;
e.previousElementSibling;
)e=e.previousElementSibling,yield e}(t))"section"===n.localName&&e.push(n);
return e}(t);
e.every(t=>t.classList.contains("introductory"))?t.classList.add("introductory"):e.some(t=>t.classList.contains("appendix"))&&t.classList.add("appendix")}(d),d.append((0,o.default)(l(),h.table_of_fig),(0,o.default)(c(),u)))},t.name=void 0,o=(i=o)&&i.__esModule?i:{
default:i};
t.name="core/figures";
const d={
en:{
table_of_fig:"Table of Figures"},nl:{
table_of_fig:"Lijst met figuren"},es:{
table_of_fig:"Tabla de Figuras"}},h=d[n.lang in d?n.lang:"en"];
function p(t,e=0,n){
const o=document.createDocumentFragment(),i=void 0!==n?n:t.length;
for(let n=e;
n<i;
n++)o.appendChild(t[n].cloneNode(!0));
return o}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.biblioDB=t.name=void 0;
t.name="core/biblio-db";
const n=new Set(["alias","reference"]),o=new Promise((t,e)=>{
let n;
try{
n=window.indexedDB.open("respec-biblio2",12)}catch(t){
return e(t)}n.onerror=(()=>{
e(new DOMException(n.error.message,n.error.name))}),n.onsuccess=(()=>{
t(n.result)}),n.onupgradeneeded=(async()=>{
const o=n.result;
Array.from(o.objectStoreNames).map(t=>o.deleteObjectStore(t));
const i=[new Promise((t,e)=>{
try{
const n=o.createObjectStore("alias",{
keyPath:"id"});
n.createIndex("aliasOf","aliasOf",{
unique:!1}),n.transaction.oncomplete=t,n.transaction.onerror=e}catch(t){
e(t)}}),new Promise((t,e)=>{
try{
const n=o.createObjectStore("reference",{
keyPath:"id"}).transaction;
n.oncomplete=t,n.onerror=e}catch(t){
e(t)}})];
try{
await Promise.all(i),t()}catch(t){
e(t)}})}),i={
get ready(){
return o},async find(t){
return await this.isAlias(t)&&(t=await this.resolveAlias(t)),this.get("reference",t)},async has(t,e){
if(!n.has(t))throw new TypeError("Invalid type: ".concat(t));
if(!e)throw new TypeError("id is required");
const o=await this.ready;
return new Promise((n,i)=>{
const r=o.transaction([t],"readonly").objectStore(t),s=IDBKeyRange.only(e),a=r.openCursor(s);
a.onsuccess=(()=>{
n(!!a.result)}),a.onerror=(()=>{
i(new DOMException(a.error.message,a.error.name))})})},async isAlias(t){
if(!t)throw new TypeError("id is required");
const e=await this.ready;
return new Promise((n,o)=>{
const i=e.transaction(["alias"],"readonly").objectStore("alias"),r=IDBKeyRange.only(t),s=i.openCursor(r);
s.onsuccess=(()=>{
n(!!s.result)}),s.onerror=(()=>{
o(new DOMException(s.error.message,s.error.name))})})},async resolveAlias(t){
if(!t)throw new TypeError("id is required");
const e=await this.ready;
return new Promise((n,o)=>{
const i=e.transaction("alias","readonly").objectStore("alias"),r=IDBKeyRange.only(t),s=i.openCursor(r);
s.onsuccess=(()=>{
if(null===s.result)return n(null);
n(s.result.value.aliasOf)}),s.onerror=(()=>{
o(new DOMException(s.error.message,s.error.name))})})},async get(t,e){
if(!n.has(t))throw new TypeError("Invalid type: ".concat(t));
if(!e)throw new TypeError("id is required");
const o=await this.ready;
return new Promise((n,i)=>{
const r=o.transaction([t],"readonly").objectStore(t),s=IDBKeyRange.only(e),a=r.openCursor(s);
a.onsuccess=(()=>{
if(null===a.result)return n(null);
n(a.result.value)}),a.onerror=(()=>{
i(new DOMException(a.error.message,a.error.name))})})},async addAll(t){
if(!t)return;
const n={
alias:new Set,reference:new Set};
Object.keys(t).filter(n=>{
if("string"==typeof t[n]){
let t="Legacy SpecRef entries are not supported: `[[".concat(n,"]]`. ");
return t+="Please update it to the new format at [specref repo](https://github.com/tobie/specref/)",(0,e.pub)("error",t),!1}return!0}).map(e=>Object.assign({
id:e},t[e])).reduce((t,e)=>(e.aliasOf?t.alias.add(e):t.reference.add(e),t),n);
const o=Object.keys(n).map(t=>Array.from(n[t]).map(e=>this.add(t,e))).reduce((t,e)=>t.concat(e),[]);
await Promise.all(o)},async add(t,e){
if(!n.has(t))throw new TypeError("Invalid type: ".concat(t));
if("object"!=typeof e)throw new TypeError("details should be an object");
if("alias"===t&&!e.hasOwnProperty("aliasOf"))throw new TypeError("Invalid alias object.");
const o=await this.ready,i=await this.has(t,e.id);
return new Promise((n,r)=>{
const s=o.transaction([t],"readwrite").objectStore(t),a=i?s.put(e):s.add(e);
a.onsuccess=n,a.onerror=(()=>{
r(new DOMException(a.error.message,a.error.name))})})},async close(){
(await this.ready).close()},async clear(){
const t=await this.ready,e=[...n],o=await new Promise((n,o)=>{
const i=t.transaction(e,"readwrite");
i.onerror=(()=>{
o(new DOMException(i.error.message,i.error.name))}),n(i)}),i=e.map(t=>new Promise(e=>{
o.objectStore(t).clear().onsuccess=e}));
Promise.all(i)}};
t.biblioDB=i}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(65),n(3),n(6),n(11),n(0)],void 0===(i=function(t,e,n,o,i,r,s){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(t){
document.normalize();
const o=function(){
const t={
};
return Object.keys(i.definitionMap).forEach(n=>{
const{
result:o,duplicates:r}=function(t){
const n={
},o=[];
return i.definitionMap[t].forEach(i=>{
void 0===i.dataset.idl&&delete i.dataset.dfnFor;
const{
dfnFor:r=""}=i.dataset;
if(r in n){
const t="dfn"===n[r].localName,e="dfn"===i.localName;
if(t){
if(!e)return;
o.push(i)}}n[r]=i,function(t,n){
if(!t.id){
const{
dfnFor:o}=t.dataset;
t.dataset.idl?(0,e.addId)(t,"dom",(o?"".concat(o,"-"):"")+n):(0,e.addId)(t,"dfn",n)}}(i,t)}),{
result:n,duplicates:o}}(n);
t[n]=o,r.length>0&&(0,e.showInlineError)(r,"Duplicate definitions of '".concat(n,"'"),a[c].duplicate)}),t}(),u=[],d=[];
if(document.querySelectorAll("a[data-cite=''], a:not([href]):not([data-cite]):not(.logo)").forEach(t=>{
if(t.classList.contains("externalDFN"))return;
const n=(0,e.getLinkTargets)(t);
if(!n.some(n=>(function(t,n,o,i){
const{
linkFor:r}=n.dataset;
if(!o[t.title]||!o[t.title][t.for])return!1;
const s=o[t.title][t.for];
if(s.dataset.cite)n.dataset.cite=s.dataset.cite;
else if(r&&!o[r.toLowerCase()])i.push(n);
else if(s.classList.contains("externalDFN")){
const t=s.dataset.lt?s.dataset.lt.split("|"):[];
n.dataset.lt=t[0]||s.textContent,i.push(n)}else n.href="#".concat(s.id),n.classList.add("internalDFN");
return n.hasAttribute("data-link-type")||(n.dataset.linkType="dfn"),function(t){
if(t.closest("code,pre"))return!0;
if(1!==t.childNodes.length)return!1;
const[e]=t.childNodes;
return"code"===e.localName}(s)&&function(t,n){
const o=t.textContent.trim(),i=n.dataset.hasOwnProperty("idl"),r=function(t,e){
const{
dataset:n}=t;
return t.textContent.trim()===e||(n.title===e||!!n.lt&&n.lt.split("|").includes(e.toLowerCase()))}(n,o);
i&&!r||(0,e.wrapInner)(t,document.createElement("code"))}(n,s),!0})(n,t,o,u))&&0!==n.length){
if(t.closest("pre.idl"))return void t.replaceWith(...t.childNodes);
""===t.dataset.cite?d.push(t):u.push(t)}}),l(d),t.xref){
u.push(...[...document.querySelectorAll("a[data-cite]:not([data-cite='']):not([data-cite*='#']), dfn[data-cite]:not([data-cite='']):not([data-cite*='#'])")].filter(t=>{
if(""===t.textContent.trim())return!1;
const e=t.closest("[data-cite]");
return!e||""!==e.dataset.cite}).concat([...document.querySelectorAll("dfn.externalDFN")]));
try{
await(0,n.run)(t,u)}catch(t){
console.error(t),l(u)}}else l(u);
await(0,r.linkInlineCitations)(document,t),(0,s.pub)("end","core/link-to-dfn")},t.name=void 0;
t.name="core/link-to-dfn";
const a={
en:{
duplicate:"This is defined more than once in the document."}},c=o.lang in a?o.lang:"en";
function l(t){
t.forEach(t=>{
(0,e.showInlineWarning)(t,'Found linkless `<a>` element with text "'.concat(t.textContent,'" but no matching `<dfn>`'),"Linking error: not matching <dfn>")})}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(66)],void 0===(i=function(t,e,n){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(t,i){
const r=await(0,n.openDb)("xref",1,t=>{
t.createObjectStore("xrefs")}),l=new e.IDBKeyVal(r,"xrefs"),{
xref:u}=t,d=function(t){
return t.reduce((t,n)=>{
const o="xrefType"in n.dataset;
let i=n.dataset.lt?n.dataset.lt.split("|",1)[0]:n.textContent;
i=(0,e.norm)(i),o||(i=i.toLowerCase());
let r=[];
const s=n.closest("[data-cite]");
if(s&&s.dataset.cite&&(r=s.dataset.cite.toLowerCase().replace(/!/g,"").split(/\s+/)),s!==n){
const t=[...n.closest("section").querySelectorAll("a.bibref")].map(t=>t.textContent.toLowerCase());
r.push(...t)}const a=[...new Set(r)].sort(),c=[o?n.dataset.xrefType||"_IDL_":"_CONCEPT_"],{
linkFor:l}=n.dataset,u=t.has(i)?t.get(i):[];
return u.push({
elem:n,specs:a,for:l,types:c}),t.set(i,u)},new Map)}(i),h=(f=d,[...[...f.entries()].reduce((t,[e,n])=>{
for(const o of n){
const{
specs:n,types:i,for:r}=o;
t.add(JSON.stringify({
term:e,specs:n,types:i,for:r}))}return t},new Set)].map(JSON.parse)),p=u.url?new URL(u.url,location.href):o;
var f;
if(!(p instanceof URL))throw new TypeError("respecConfig.xref.url must be a valid URL instance");
const{
found:m,notFound:g}=await async function(t,e){
const n=await e.get("__CACHE_TIME__");
if(n&&new Date-n>s)return await e.clear(),{
found:Object.create(null),notFound:t};
const o=t.map(({
term:t})=>e.get(t)),i=await Promise.all(o);
return t.reduce(function(t,e,n){
const o=i[n];
if(o&&o.length){
const n=o.filter(t=>(function(t,e){
let n=!0;
e.specs&&e.specs.length&&(n=e.specs.includes(t.spec));
n&&e.for&&(n=t.for&&t.for.includes(e.for));
return n})(t,e));
if(n.length){
const{
term:o}=e;
t.found[o]||(t.found[o]=[]),t.found[o].push(...n)}else t.notFound.push(e)}else t.notFound.push(e);
return t},{
found:Object.create(null),notFound:[]})}(h,l),v=Object.create(null);
g.length&&(Object.assign(v,await async function(t,e){
const n={
keys:t},o={
method:"POST",body:JSON.stringify(n),headers:{
"Content-Type":"application/json"}},i=await fetch(e,o);
return await i.json()}(g,p)),await async function(t,e){
const n=Object.entries(t).map(([t,n])=>e.set(t,n));
await e.set("__CACHE_TIME__",new Date),await Promise.all(n)}(v,l));
!function(t,n,o){
const i={
noDfn:new Map,ambiguousSpec:new Map};
for(const[r,s]of n)s.forEach(n=>{
const s=a(t[r],n,r),{
elem:l}=n;
if(s.error)return void c(r,l,s,i);
const{
uri:u,spec:d,normative:h}=s,p=u.includes("/")?u.split("/",1)[1]:u,[f,m]=p.split("#"),g={
cite:d,citePath:f,citeFrag:m};
Object.assign(l.dataset,g);
const v=document.querySelectorAll('[data-dfn-type="xref"][data-xref="'.concat(r.toLowerCase(),'"]'));
v.forEach(t=>{
t.removeAttribute("data-xref"),Object.assign(t.dataset,g)});
const _=l.closest(e.nonNormativeSelector);
if(!_||l.closest(".normative")&&_.querySelector(".normative"))if(h)o.normativeReferences.add(d);
else{
const t='Adding an informative reference to "'.concat(r,'" from "').concat(d,'" ')+"in a normative section",o="Error: Informative reference in normative section";
(0,e.showInlineWarning)(n.elem,t,o)}else o.informativeReferences.add(d)});
!function(t){
for(const[n,o]of t.noDfn){
const t="Couldn't match \"**".concat(n,'**" to anything in the document or to any other spec. ')+"Please provide a [`data-cite`](https://github.com/w3c/respec/wiki/data--cite) attribute for it.",i="Error: No matching dfn found.";
(0,e.showInlineError)(o,t,i)}for(const[n,o]of t.ambiguousSpec){
const t=[...o.specs],i='The term "**'.concat(n,'**" is defined in ').concat(t.length," ")+"spec(s) in multiple ways, so it's ambiguous. To disambiguate, you need to add a [`data-cite`](https://github.com/w3c/respec/wiki/data--cite) attribute. "+"The specs where it's defined are: ".concat(t.map(t=>"**".concat(t,"**")).join(", "),"."),r="Error: Linking an ambiguous dfn.";
(0,e.showInlineError)(o.elems,i,r)}}(i)}([...new Set(Object.keys(m).concat(Object.keys(v)))].reduce((t,e)=>{
const n=(m[e]||[]).concat(v[e]||[]);
return t[e]=[...new Set(n.map(JSON.stringify))].map(JSON.parse),t},Object.create(null)),d,t)};
const o=new URL("https://respec.org/xref"),i=new Set(["attribute","dict-member","dictionary","enum","enum-value","interface","method","typedef","_IDL_"]),r=new Set(["dfn","event","element","_CONCEPT_"]),s=864e5;
function a(t,e,n){
const{
specs:o,types:s,for:a}=e,c=(t||[]).filter(t=>{
let e=!0;
if(o.length&&(e=o.includes(t.spec)),e&&s.length&&!(e=s.includes(t.type))){
e=[...s.includes("_IDL_")?i:r].some(e=>e===t.type)}return e&&a&&(e=t.for.includes(a)),e});
return c.length?1===c.length?c[0]:{
error:"AMBIGUOUS",term:n,specs:c.map(t=>t.spec)}:{
error:"NO_MATCH",term:n}}function c(t,e,n,o){
switch(n.error){
case"NO_MATCH":{
const n=o.noDfn;
n.has(t)||n.set(t,[]),n.get(t).push(e);
break}case"AMBIGUOUS":{
const i=o.ambiguousSpec;
i.has(t)||i.set(t,{
specs:new Set,elems:[]});
const{
specs:r,elems:s}=i.get(t);
n.specs.forEach(t=>r.add(t)),s.push(e);
break}}}}.apply(e,o))||(t.exports=i)},function(t,e,n){
!function(t){
"use strict";
function e(t){
return new Promise(function(e,n){
t.onsuccess=function(){
e(t.result)},t.onerror=function(){
n(t.error)}})}function n(t,n,o){
var i,r=new Promise(function(r,s){
e(i=t[n].apply(t,o)).then(r,s)});
return r.request=i,r}function o(t,e,n){
n.forEach(function(n){
Object.defineProperty(t.prototype,n,{
get:function(){
return this[e][n]},set:function(t){
this[e][n]=t}})})}function i(t,e,o,i){
i.forEach(function(i){
i in o.prototype&&(t.prototype[i]=function(){
return n(this[e],i,arguments)})})}function r(t,e,n,o){
o.forEach(function(o){
o in n.prototype&&(t.prototype[o]=function(){
return this[e][o].apply(this[e],arguments)})})}function s(t,e,o,i){
i.forEach(function(i){
i in o.prototype&&(t.prototype[i]=function(){
return t=this[e],(o=n(t,i,arguments)).then(function(t){
if(t)return new c(t,o.request)});
var t,o})})}function a(t){
this._index=t}function c(t,e){
this._cursor=t,this._request=e}function l(t){
this._store=t}function u(t){
this._tx=t,this.complete=new Promise(function(e,n){
t.oncomplete=function(){
e()},t.onerror=function(){
n(t.error)},t.onabort=function(){
n(t.error)}})}function d(t,e,n){
this._db=t,this.oldVersion=e,this.transaction=new u(n)}function h(t){
this._db=t}o(a,"_index",["name","keyPath","multiEntry","unique"]),i(a,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),s(a,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(c,"_cursor",["direction","key","primaryKey","value"]),i(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){
t in IDBCursor.prototype&&(c.prototype[t]=function(){
var n=this,o=arguments;
return Promise.resolve().then(function(){
return n._cursor[t].apply(n._cursor,o),e(n._request).then(function(t){
if(t)return new c(t,n._request)})})})}),l.prototype.createIndex=function(){
return new a(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){
return new a(this._store.index.apply(this._store,arguments))},o(l,"_store",["name","keyPath","indexNames","autoIncrement"]),i(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),s(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),r(l,"_store",IDBObjectStore,["deleteIndex"]),u.prototype.objectStore=function(){
return new l(this._tx.objectStore.apply(this._tx,arguments))},o(u,"_tx",["objectStoreNames","mode"]),r(u,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){
return new l(this._db.createObjectStore.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),r(d,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){
return new u(this._db.transaction.apply(this._db,arguments))},o(h,"_db",["name","version","objectStoreNames"]),r(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){
[l,a].forEach(function(e){
t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){
var e,n=(e=arguments,Array.prototype.slice.call(e)),o=n[n.length-1],i=this._store||this._index,r=i[t].apply(i,n.slice(0,-1));
r.onsuccess=function(){
o(r.result)}})})}),[a,l].forEach(function(t){
t.prototype.getAll||(t.prototype.getAll=function(t,e){
var n=this,o=[];
return new Promise(function(i){
n.iterateCursor(t,function(t){
t?(o.push(t.value),void 0===e||o.length!=e?t.continue():i(o)):i(o)})})})}),t.openDb=function(t,e,o){
var i=n(indexedDB,"open",[t,e]),r=i.request;
return r&&(r.onupgradeneeded=function(t){
o&&o(new d(r.result,t.oldVersion,r.transaction))}),i.then(function(t){
return new h(t)})},t.deleteDb=function(t){
return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{
value:!0})}(e)},function(t,e,n){
var o,i;
o=[e,n(1),n(10),n(0)],void 0===(i=function(t,e,n,o){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(t){
const i=document.getElementById("gh-commenters"),c=document.getElementById("gh-contributors");
if(!i&&!c)return;
const l={
},{
githubAPI:u,githubUser:d,githubToken:h}=t;
if(d&&h){
const t=btoa("".concat(d,":").concat(h)),e="Basic ".concat(t);
Object.assign(l,{
Authorization:e})}if(!u){
const t="Requested list of contributors and/or commenters from GitHub, but [`githubAPI`](https://github.com/w3c/respec/wiki/githubAPI) is not set.";
return void(0,o.pub)("error",t)}const p=await fetch(u,{
headers:l});
if(!p.ok){
const t="Error fetching repository information from GitHub. "+"(HTTP Status ".concat(p.status,").");
return void(0,o.pub)("error",t)}const f=await p.json(),{
issues_url:m,issue_comment_url:g,contributors_url:v}=f,[_,y,b]=await Promise.all([(0,n.fetchIndex)(m,l),(0,n.fetchIndex)(g,l),(0,n.fetchIndex)(v,l)]),w=t.editors.map(r),x=i?function(...t){
const n=t.reduce(e.flatten,[]).filter(t=>t&&t.user).map(({
user:t})=>t.url);
return[...new Set(n)]}(_,y):[],L=c?b.map(s):[];
try{
await Promise.all(a(x,w,i,l),a(L,w,c,l))}catch(t){
(0,o.pub)("error","Error loading contributors and/or commenters from GitHub.")}},t.name=void 0;
function i(t){
return e=>e[t]}t.name="core/contrib";
const r=i("name"),s=i("url");
async function a(t,n,o,i){
const r=(await Promise.all(t.map(t=>fetch(t,{
headers:i})))).map(([t])=>t.name||t.login).filter(t=>!n.includes(t)).sort((t,e)=>t.toLowerCase().localeCompare(e.toLowerCase()));
o.textContent=(0,e.joinAnd)(r),o.id=null}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
[...document.querySelectorAll("section:not(.introductory)")].map(t=>t.querySelector("h1, h2, h3, h4, h5, h6")).filter(t=>t).forEach(t=>{
const n=Math.min(function(t,e){
const n=[];
for(;
t!=t.ownerDocument.body;
)t.matches(e)&&n.push(t),t=t.parentElement;
return n}(t,"section").length+1,6);
(0,e.renameElement)(t,"h".concat(n))})},t.name=void 0;
t.name="core/fix-headers"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(3),n(2)],void 0===(i=function(t,e,n,o){
"use strict";
var i;
function r(){
const t=f(["<span class='sec-title'>","</span>"]);
return r=function(){
return t},t}function s(){
const t=f(["<span class='secno'>§&nbsp;
","</span>"]);
return s=function(){
return t},t}function a(){
const t=f(["<p role='navigation' id='back-to-top'><a href='#title'>\n  <abbr title='","'>&uarr;
</abbr></a></p>"]);
return a=function(){
return t},t}function c(){
const t=f(['<h2 class="introductory">',"</h2>"]);
return c=function(){
return t},t}function l(){
const t=f(['<nav id="toc">']);
return l=function(){
return t},t}function u(){
const t=f(["<li class='tocline'>","</li>"]);
return u=function(){
return t},t}function d(){
const t=f(['<a href="','" class="tocxref"/>']);
return d=function(){
return t},t}function h(){
const t=f(["<span class='secno'>"," </span>"]);
return h=function(){
return t},t}function p(){
const t=f(["<ol class='toc'>"]);
return p=function(){
return t},t}function f(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
"tocIntroductory"in t==!1&&(t.tocIntroductory=!1);
"maxTocLevel"in t==!1&&(t.maxTocLevel=1/0);
if(function(){
const t=function(){
const t=g.map(t=>"section:not(.introductory) ".concat(t,":first-child")).join(",");
return[...document.querySelectorAll(t)].filter(t=>!t.closest("section.introductory"))}();
t.length&&t.forEach(t=>{
const n=Math.min((0,e.parents)(t,"section").length+1,6),o="h".concat(n);
t.localName!==o&&(0,e.renameElement)(t,o)})}(),!t.noTOC){
const i=function t(n,{
tocIntroductory:o=!1}={
}){
const i=(0,e.children)(n,o?"section":"section:not(.introductory)");
const r=[];
for(const n of i){
const i=n.classList.contains("notoc");
if(!n.children.length||i)continue;
const s=n.children[0];
if(!m.includes(s.localName))continue;
const a=s.textContent;
(0,e.addId)(n,null,a),r.push({
element:n,header:s,title:a,isIntro:n.classList.contains("introductory"),isAppendix:n.classList.contains("appendix"),subsections:t(n,{
tocIntroductory:o})})}return r}(document.body,{
tocIntroductory:t.tocIntroductory}),u=function t(e,n,{
prefix:i=""}={
}){
const r={
};
let s=!1;
let a=0;
let c=1;
i.length&&!i.endsWith(".")&&(i+=".");
if(0===e.length)return null;
const l=(0,o.default)(p());
for(const u of e){
!u.isAppendix||i||s||(a=c,s=!0);
let e=u.isIntro?"":s?v.charAt(c-a):i+c;
const d=e.split(".").length;
if(1===d&&(e+=".",u.header.before(document.createComment("OddPage"))),r[u.element.id]={
secno:e,title:u.title},u.isIntro||(c+=1,u.header.prepend((0,o.default)(h(),e))),d<=n){
const o=w(u.header,u.element.id),i=t(u.subsections,n,{
prefix:e});
i&&(Object.assign(r,i.secMap),o.append(i.ol)),l.append(o)}}return{
ol:l,secMap:r}}(i,t.maxTocLevel);
u&&(!function(t){
if(!t)return;
const n=(0,o.default)(l()),i=(0,o.default)(c(),b.toc);
(0,e.addId)(i),n.append(i,t);
const r=document.getElementById("toc")||document.getElementById("sotd")||document.getElementById("abstract");
r&&("toc"===r.id?r.replaceWith(n):r.after(n));
const s=(0,o.default)(a(),b.back_to_top);
document.body.append(s)}(u.ol),n=u.secMap,[...document.querySelectorAll("a[href^='#']:not(.tocxref)")].filter(t=>""===t.textContent.trim()&&t.getAttribute("href").slice(1)in n).forEach(t=>{
const e=t.getAttribute("href").slice(1),{
secno:i,title:a}=n[e];
t.classList.add("sec-ref"),t.classList.contains("sectionRef")&&t.append(b[y].section),i&&t.append((0,o.default)(s(),i)," "),t.append((0,o.default)(r(),a.trim()))}))}var n},t.name=void 0,o=(i=o)&&i.__esModule?i:{
default:i};
const m=["h2","h3","h4","h5","h6"],g=["h1",...m],v="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
t.name="core/structure";
const _={
en:{
toc:"Table of Contents",back_to_top:"Back to Top"},nl:{
toc:"Inhoudsopgave",back_to_top:"Naar begin"},es:{
toc:"Tabla de Contenidos"}},y=n.lang in _?n.lang:"en",b=_[y];
function w(t,n){
const i=(0,o.default)(d(),"#".concat(n));
var r;
return i.append(...t.cloneNode(!0).childNodes),(r=i).querySelectorAll("a").forEach(t=>{
const n=(0,e.renameElement)(t,"span");
n.className="formerLink",n.removeAttribute("href")}),r.querySelectorAll("dfn").forEach(t=>{
const n=(0,e.renameElement)(t,"span");
n.removeAttribute("id")}),(0,o.default)(u(),i)}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(2)],void 0===(i=function(t,e){
"use strict";
var n;
function o(){
const t=function(t,e){
e||(e=t.slice(0));
return Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}(["<p><em>Dit onderdeel is niet normatief.</em></p>"]);
return o=function(){
return t},t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
Array.from(document.querySelectorAll("section.informative")).map(t=>t.querySelector("h2, h3, h4, h5, h6")).filter(t=>t).forEach(t=>{
t.parentNode.insertBefore((0,e.default)(o()),t.nextSibling)})},t.name=void 0,e=(n=e)&&n.__esModule?n:{
default:n};
t.name="geonovum/informative"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(2)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(){
const t=function(t,e){
e||(e=t.slice(0));
return Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}(['\n    <a href="','" class="self-link" aria-label="§"></a>\n  ']);
return i=function(){
return t},t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
document.querySelectorAll("\n      section:not(.introductory) h2,\n      section:not(.introductory) h3,\n      section:not(.introductory) h4,\n      section:not(.introductory) h5,\n      section:not(.introductory) h6").forEach(o=>{
(0,e.addId)(o),t.addSectionLinks&&function(t){
const e=t.closest("section[id]"),o=e?e.id:t.id;
t.appendChild((0,n.default)(i(),"#".concat(o)))}(o)})},t.name=void 0,n=(o=n)&&o.__esModule?o:{
default:o};
t.name="core/id-headers"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(1),n(0),n(73),n(2)],void 0===(i=function(t,e,n,o,i){
"use strict";
function r(t){
return t&&t.__esModule?t:{
default:t}}function s(){
const t=f(['\n      <div class="caniuse-browser">\n        <button class="','" title="','">\n          '," ","\n        </button>\n        <ul>\n          ","\n        </ul>\n      </div>"]);
return s=function(){
return t},t}function a(){
const t=f(["\n    ",'\n    <a href="','"\n      title="Get details at caniuse.com">More info\n    </a>']);
return a=function(){
return t},t}function c(t){
for(var e=1;
e<arguments.length;
e++){
var n=null!=arguments[e]?arguments[e]:{
},o=Object.keys(n);
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){
return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){
l(t,e,n[e])})}return t}function l(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){
const t=f(['\n      <a href="','">caniuse.com</a>']);
return u=function(){
return t},t}function d(){
const t=f(['\n    <dt class="caniuse-title">Can I Use this API?</dt>\n    <dd class="caniuse-stats">',"</dd>"]);
return d=function(){
return t},t}function h(){
const t=f(['<a href="','">caniuse.com</a>']);
return h=function(){
return t},t}function p(){
const t=f(['\n    <style class="removeOnSave">',"</style>"]);
return p=function(){
return t},t}function f(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(t){
if(!t.caniuse)return;
!function(t){
const e={
maxAge:864e5,browsers:["chrome","firefox","safari","edge"],versions:4};
if("string"==typeof t.caniuse)return void(t.caniuse=c({
feature:t.caniuse},e));
Array.isArray(t.caniuse.browsers)?t.caniuse.browsers=t.caniuse.browsers.map(t=>t.toLowerCase()).filter(function(t){
if(g.has(t))return!0;
return(0,n.pub)("warn",'Ignoring invalid browser "`'.concat(t,'`" in ')+"[`respecConfig.caniuse.browsers`](https://github.com/w3c/respec/wiki/caniuse)"),!1}):t.caniuse.browsers=e.browsers;
Object.assign(t.caniuse,e,c({
},t.caniuse))}(t);
const{
caniuse:r}=t;
if(!r.feature)return;
const{
feature:l}=r,f="https://caniuse.com/#feat=".concat(l),_=(0,e.createResourceHint)({
hint:"preconnect",href:"https://raw.githubusercontent.com"});
document.head.appendChild(_),document.head.appendChild((0,i.default)(p(),o.default));
const y=document.querySelector(".head dl"),b=new Promise(async t=>{
let o;
try{
const t=await async function(t){
const{
apiURL:n,feature:o,maxAge:i}=t,r=n?n.replace("{
FEATURE}",o):"".concat(m).concat(o,".json"),s=new Request(r),a=await(0,e.fetchAndCache)(s,i),{
stats:c}=await a.json();
return c}(r);
o=function(t,n){
return(0,i.default)(a(),t.browsers.map(o=>(function(t,n,o){
if(!o)return;
const r=t=>{
const e=o[t].split("#",1)[0].split(" ").filter(t=>t),n=e.filter(t=>v.has(t)).map(t=>v.get(t));
return{
support:e.join(" "),title:n.join(" ")}},[a,...c]=Object.keys(o).sort(e.semverCompare).slice(-n).reverse(),{
support:l,title:u}=r(a),d="caniuse-cell ".concat(l);
return(0,i.default)(s(),d,u,g.get(t)||t,a,c.map(t=>{
const{
support:e,title:n}=r(t),o="caniuse-cell ".concat(e);
return'<li class="'.concat(o,'" title="').concat(n,'">').concat(t,"</li>")}))})(o,t.versions,n[o])).filter(t=>t),"https://caniuse.com/#feat=".concat(t.feature))}(r,t)}catch(t){
console.error(t);
const e="Couldn't find feature \"".concat(l,'" on caniuse.com? ')+"Please check the feature key on [caniuse.com](https://caniuse.com)";
(0,n.pub)("error",e),o=(0,i.default)(h(),f)}t(o)}),w=i.default.bind(document.createDocumentFragment())(d(),{
any:b,placeholder:"Fetching data from caniuse.com..."});
y.appendChild(w),await b,(0,n.pub)("amend-user-config",{
caniuse:l}),(0,n.sub)("beforesave",t=>{
i.default.bind(t.querySelector(".caniuse-stats"))(u(),f)})},t.name=void 0,o=r(o),i=r(i);
t.name="core/caniuse";
const m="https://raw.githubusercontent.com/Fyrd/caniuse/master/features-json/",g=new Map([["and_chr","Chrome (Android)"],["and_ff","Firefox (Android)"],["and_uc","UC Browser (Android)"],["android","Android"],["bb","Blackberry"],["chrome","Chrome"],["edge","Edge"],["firefox","Firefox"],["ie","IE"],["ios_saf","Safari (iOS)"],["op_mini","Opera Mini"],["op_mob","Opera Mobile"],["opera","Opera"],["safari","Safari"],["samsung","Samsung Internet"]]),v=new Map([["y","Supported."],["a","Almost supported (aka Partial support)."],["n","No support, or disabled by default."],["p","No support, but has Polyfill."],["u","Support unknown."],["x","Requires prefix to work."],["d","Disabled by default (needs to enabled)."]])}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default='/* container for stats */\n.caniuse-stats {
\n  display: flex;
\n  flex-wrap: wrap;
\n  justify-content: flex-start;
\n  align-items: baseline;
\n  cursor: pointer;
\n}\n\nbutton.caniuse-cell {
\n  margin: 1px 1px 0 0;
\n  border: none;
\n}\n\n.caniuse-browser {
\n  position: relative;
\n}\n\n/* handle case when printing */\n@media print {
\n  .caniuse-cell.y::before {
\n    content: "✔️";
\n    padding: 0.5em;
\n  }\n\n  .caniuse-cell.n::before{
\n    content: "❌";
\n    padding: 0.5em;
\n  }\n\n  .caniuse-cell.d::before,\n  .caniuse-cell.a::before,\n  .caniuse-cell.x::before,\n  .caniuse-cell.p::before {
\n    content: "⚠️";
\n    padding: 0.5em;
\n  }\n}\n\n/* reset styles, hide old versions by default */\n.caniuse-browser ul {
\n  display: none;
\n  margin: 0;
\n  padding: 0;
\n  list-style: none;
\n  position: absolute;
\n  left: 0;
\n  z-index: 2;
\n  background: #fff;
\n  margin-top: 1px;
\n}\n\n.caniuse-stats a {
\n  white-space: nowrap;
\n  align-self: center;
\n  margin-left: .5em;
\n}\n\n/* a browser version */\n.caniuse-cell {
\n  display: flex;
\n  color: rgba(0, 0, 0, 0.8);
\n  font-size: 90%;
\n  height: 0.8cm;
\n  margin-right: 1px;
\n  margin-top: 0;
\n  min-width: 3cm;
\n  overflow: visible;
\n  justify-content: center;
\n  align-items: center;
\n}\n\nli.caniuse-cell {
\n  margin-bottom: 1px;
\n}\n\n.caniuse-cell:focus {
\n  outline: none;
\n}\n\n.caniuse-cell:hover {
\n  color: rgba(0, 0, 0, 1);
\n}\n\n/* supports */\n.caniuse-cell.y {
\n  background: #8bc34a;
\n}\n\n/* no support */\n.caniuse-cell.n {
\n  background: #e53935;
\n}\n\n/* not supported by default / partial support etc\nsee https://github.com/Fyrd/caniuse/blob/master/CONTRIBUTING.md for stats */\n.caniuse-cell.d,\n.caniuse-cell.a,\n.caniuse-cell.x,\n.caniuse-cell.p {
\n  background: #ffc107;
\n}\n\n/* show rest of the browser versions */\n.caniuse-stats button:focus + ul,\n.caniuse-stats .caniuse-browser:hover > ul {
\n  display: block;
\n}\n'},function(t,e,n){
var o,i;
o=[e,n(75),n(76),n(0)],void 0===(i=function(t,e,n,o){
"use strict";
function i(t){
return t&&t.__esModule?t:{
default:t}}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(t,n,i){
(0,o.sub)("beforesave",s),i(),await document.respecIsReady,Array.from(document.querySelectorAll("figure.scalable img")).forEach(t=>{
const{
width:n,height:o,src:i}=t;
t.hidden=!0;
const r=document.createElement("div");
r.classList.add("removeOnSave");
const s=e.default.map(r,{
maxZoom:4,minZoom:-4,center:[0,0],crs:e.default.CRS.Simple}),a=[[0,0],[o,n]];
t.insertAdjacentElement("beforebegin",r),s.setView([o/2,n/2],1),[e.default.easyButton("fa-arrows-alt",()=>window.open(i,"_blank")),e.default.easyButton("fa-globe",()=>s.fitBounds(a)),e.default.imageOverlay(i,a)].forEach(t=>t.addTo(s)),s.fitBounds(a)})},t.name=void 0,e=i(e),n=i(n);
t.name="geonovum/leafletfigures";
const r='\n  function processImages() {
\n    Array.from(\n      document.querySelectorAll("figure.scalable img")\n    ).forEach(image => {
\n      const {
 width, height, src } = image;
\n      image.hidden = true;
\n      const div = document.createElement("div");
\n      const map = L.map(div, {
\n        maxZoom: 4,\n        minZoom: -4,\n        center: [0, 0],\n        crs: L.CRS.Simple,\n      });
\n      const imageBounds = [[0, 0], [height, width]];
\n      image.insertAdjacentElement("beforebegin", div);
\n      map.setView([height / 2, width / 2], 1);
\n      [\n        L.easyButton("fa-arrows-alt", () => window.open(src, "_blank")),\n        L.easyButton("fa-globe", () => map.fitBounds(imageBounds)),\n        L.imageOverlay(src, imageBounds),\n      ].forEach(item => item.addTo(map));
\n      map.fitBounds(imageBounds);
\n    });
\n  }\n';
function s(t){
const e=t.ownerDocument,n=t.querySelector("head");
if(null===t.querySelector("figure.scalable img"))return;
const o=e.createElement("script");
o.src="https://tools.geostandaarden.nl/respec/scripts/leaflet.js";
const i=e.createElement("script");
i.src="https://tools.geostandaarden.nl/respec/scripts/easy-button.js";
const s=e.createElement("script");
s.textContent="\n    ".concat(r,';
\n    // Calls processImages when the document loads\n    window.addEventListener("DOMContentLoaded", processImages);
\n  ');
const a=e.createElement("link");
a.rel="stylesheet",a.href="https://tools.geostandaarden.nl/respec/style/leaflet.css";
const c=e.createElement("link");
c.rel="stylesheet",c.href="https://tools.geostandaarden.nl/respec/style/font-awesome.css",n.insertAdjacentElement("afterbegin",a),n.insertAdjacentElement("afterbegin",c),n.appendChild(o),n.appendChild(i),n.appendChild(s)}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
!function(r,s,a){
var c={
version:"1.0.3"};
"object"==typeof t.exports?t.exports=c:void 0!==(i="function"==typeof(o=c)?o.call(e,n,e,t):o)&&(t.exports=i),void 0!==r&&function(){
var t=r.L;
c.noConflict=function(){
return r.L=t,this},r.L=c}(),c.Util={
extend:function(t){
var e,n,o,i;
for(n=1,o=arguments.length;
n<o;
n++)for(e in i=arguments[n])t[e]=i[e];
return t},create:Object.create||function(){
function t(){
}return function(e){
return t.prototype=e,new t}}(),bind:function(t,e){
var n=Array.prototype.slice;
if(t.bind)return t.bind.apply(t,n.call(arguments,1));
var o=n.call(arguments,2);
return function(){
return t.apply(e,o.length?o.concat(n.call(arguments)):arguments)}},stamp:function(t){
return t._leaflet_id=t._leaflet_id||++c.Util.lastId,t._leaflet_id},lastId:0,throttle:function(t,e,n){
var o,i,r,s;
return s=function(){
o=!1,i&&(r.apply(n,i),i=!1)},r=function(){
o?i=arguments:(t.apply(n,arguments),setTimeout(s,e),o=!0)}},wrapNum:function(t,e,n){
var o=e[1],i=e[0],r=o-i;
return t===o&&n?t:((t-i)%r+r)%r+i},falseFn:function(){
return!1},formatNum:function(t,e){
var n=Math.pow(10,e||5);
return Math.round(t*n)/n},trim:function(t){
return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){
return c.Util.trim(t).split(/\s+/)},setOptions:function(t,e){
for(var n in t.hasOwnProperty("options")||(t.options=t.options?c.Util.create(t.options):{
}),e)t.options[n]=e[n];
return t.options},getParamString:function(t,e,n){
var o=[];
for(var i in t)o.push(encodeURIComponent(n?i.toUpperCase():i)+"="+encodeURIComponent(t[i]));
return(e&&-1!==e.indexOf("?")?"&":"?")+o.join("&")},template:function(t,e){
return t.replace(c.Util.templateRe,function(t,n){
var o=e[n];
if(o===a)throw new Error("No value provided for variable "+t);
return"function"==typeof o&&(o=o(e)),o})},templateRe:/\{
 *([\w_\-]+) *\}/g,isArray:Array.isArray||function(t){
return"[object Array]"===Object.prototype.toString.call(t)},indexOf:function(t,e){
for(var n=0;
n<t.length;
n++)if(t[n]===e)return n;
return-1},emptyImageUrl:"data:image/gif;
base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){
function t(t){
return r["webkit"+t]||r["moz"+t]||r["ms"+t]}function e(t){
var e=+new Date,o=Math.max(0,16-(e-n));
return n=e+o,r.setTimeout(t,o)}var n=0,o=r.requestAnimationFrame||t("RequestAnimationFrame")||e,i=r.cancelAnimationFrame||t("CancelAnimationFrame")||t("CancelRequestAnimationFrame")||function(t){
r.clearTimeout(t)};
c.Util.requestAnimFrame=function(t,n,i){
return i&&o===e?void t.call(n):o.call(r,c.bind(t,n))},c.Util.cancelAnimFrame=function(t){
t&&i.call(r,t)}}(),c.extend=c.Util.extend,c.bind=c.Util.bind,c.stamp=c.Util.stamp,c.setOptions=c.Util.setOptions,c.Class=function(){
},c.Class.extend=function(t){
var e=function(){
this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,o=c.Util.create(n);
for(var i in o.constructor=e,e.prototype=o,this)this.hasOwnProperty(i)&&"prototype"!==i&&(e[i]=this[i]);
return t.statics&&(c.extend(e,t.statics),delete t.statics),t.includes&&(c.Util.extend.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=c.Util.extend(c.Util.create(o.options),t.options)),c.extend(o,t),o._initHooks=[],o.callInitHooks=function(){
if(!this._initHooksCalled){
n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;
for(var t=0,e=o._initHooks.length;
t<e;
t++)o._initHooks[t].call(this)}},e},c.Class.include=function(t){
return c.extend(this.prototype,t),this},c.Class.mergeOptions=function(t){
return c.extend(this.prototype.options,t),this},c.Class.addInitHook=function(t){
var e=Array.prototype.slice.call(arguments,1),n="function"==typeof t?t:function(){
this[t].apply(this,e)};
return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this},c.Evented=c.Class.extend({
on:function(t,e,n){
if("object"==typeof t)for(var o in t)this._on(o,t[o],e);
else for(var i=0,r=(t=c.Util.splitWords(t)).length;
i<r;
i++)this._on(t[i],e,n);
return this},off:function(t,e,n){
if(t)if("object"==typeof t)for(var o in t)this._off(o,t[o],e);
else for(var i=0,r=(t=c.Util.splitWords(t)).length;
i<r;
i++)this._off(t[i],e,n);
else delete this._events;
return this},_on:function(t,e,n){
this._events=this._events||{
};
var o=this._events[t];
o||(o=[],this._events[t]=o),n===this&&(n=a);
for(var i={
fn:e,ctx:n},r=o,s=0,c=r.length;
s<c;
s++)if(r[s].fn===e&&r[s].ctx===n)return;
r.push(i)},_off:function(t,e,n){
var o,i,r;
if(this._events&&(o=this._events[t])){
if(!e){
for(i=0,r=o.length;
i<r;
i++)o[i].fn=c.Util.falseFn;
return void delete this._events[t]}if(n===this&&(n=a),o)for(i=0,r=o.length;
i<r;
i++){
var s=o[i];
if(s.ctx===n&&s.fn===e)return s.fn=c.Util.falseFn,this._firingCount&&(this._events[t]=o=o.slice()),void o.splice(i,1)}}},fire:function(t,e,n){
if(!this.listens(t,n))return this;
var o=c.Util.extend({
},e,{
type:t,target:this});
if(this._events){
var i=this._events[t];
if(i){
this._firingCount=this._firingCount+1||1;
for(var r=0,s=i.length;
r<s;
r++){
var a=i[r];
a.fn.call(a.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,e){
var n=this._events&&this._events[t];
if(n&&n.length)return!0;
if(e)for(var o in this._eventParents)if(this._eventParents[o].listens(t,e))return!0;
return!1},once:function(t,e,n){
if("object"==typeof t){
for(var o in t)this.once(o,t[o],e);
return this}var i=c.bind(function(){
this.off(t,e,n).off(t,i,n)},this);
return this.on(t,e,n).on(t,i,n)},addEventParent:function(t){
return this._eventParents=this._eventParents||{
},this._eventParents[c.stamp(t)]=t,this},removeEventParent:function(t){
return this._eventParents&&delete this._eventParents[c.stamp(t)],this},_propagateEvent:function(t){
for(var e in this._eventParents)this._eventParents[e].fire(t.type,c.extend({
layer:t.target},t),!0)}});
var l=c.Evented.prototype;
l.addEventListener=l.on,l.removeEventListener=l.clearAllEventListeners=l.off,l.addOneTimeEventListener=l.once,l.fireEvent=l.fire,l.hasEventListeners=l.listens,c.Mixin={
Events:l},function(){
var t=navigator.userAgent.toLowerCase(),e=s.documentElement,n="ActiveXObject"in r,o=-1!==t.indexOf("webkit"),i=-1!==t.indexOf("phantom"),a=-1!==t.search("android [23]"),l=-1!==t.indexOf("chrome"),u=-1!==t.indexOf("gecko")&&!o&&!r.opera&&!n,d=0===navigator.platform.indexOf("Win"),h="undefined"!=typeof orientation||-1!==t.indexOf("mobile"),p=!r.PointerEvent&&r.MSPointerEvent,f=r.PointerEvent||p,m=n&&"transition"in e.style,g="WebKitCSSMatrix"in r&&"m11"in new r.WebKitCSSMatrix&&!a,v="MozPerspective"in e.style,_="OTransition"in e.style,y=!r.L_NO_TOUCH&&(f||"ontouchstart"in r||r.DocumentTouch&&s instanceof r.DocumentTouch);
c.Browser={
ie:n,ielt9:n&&!s.addEventListener,edge:"msLaunchUri"in navigator&&!("documentMode"in s),webkit:o,gecko:u,android:-1!==t.indexOf("android"),android23:a,chrome:l,safari:!l&&-1!==t.indexOf("safari"),win:d,ie3d:m,webkit3d:g,gecko3d:v,opera12:_,any3d:!r.L_DISABLE_3D&&(m||g||v)&&!_&&!i,mobile:h,mobileWebkit:h&&o,mobileWebkit3d:h&&g,mobileOpera:h&&r.opera,mobileGecko:h&&u,touch:!!y,msPointer:!!p,pointer:!!f,retina:(r.devicePixelRatio||r.screen.deviceXDPI/r.screen.logicalXDPI)>1}}(),c.Point=function(t,e,n){
this.x=n?Math.round(t):t,this.y=n?Math.round(e):e},c.Point.prototype={
clone:function(){
return new c.Point(this.x,this.y)},add:function(t){
return this.clone()._add(c.point(t))},_add:function(t){
return this.x+=t.x,this.y+=t.y,this},subtract:function(t){
return this.clone()._subtract(c.point(t))},_subtract:function(t){
return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){
return this.clone()._divideBy(t)},_divideBy:function(t){
return this.x/=t,this.y/=t,this},multiplyBy:function(t){
return this.clone()._multiplyBy(t)},_multiplyBy:function(t){
return this.x*=t,this.y*=t,this},scaleBy:function(t){
return new c.Point(this.x*t.x,this.y*t.y)},unscaleBy:function(t){
return new c.Point(this.x/t.x,this.y/t.y)},round:function(){
return this.clone()._round()},_round:function(){
return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){
return this.clone()._floor()},_floor:function(){
return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){
return this.clone()._ceil()},_ceil:function(){
return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},distanceTo:function(t){
var e=(t=c.point(t)).x-this.x,n=t.y-this.y;
return Math.sqrt(e*e+n*n)},equals:function(t){
return(t=c.point(t)).x===this.x&&t.y===this.y},contains:function(t){
return t=c.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){
return"Point("+c.Util.formatNum(this.x)+", "+c.Util.formatNum(this.y)+")"}},c.point=function(t,e,n){
return t instanceof c.Point?t:c.Util.isArray(t)?new c.Point(t[0],t[1]):t===a||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new c.Point(t.x,t.y):new c.Point(t,e,n)},c.Bounds=function(t,e){
if(t)for(var n=e?[t,e]:t,o=0,i=n.length;
o<i;
o++)this.extend(n[o])},c.Bounds.prototype={
extend:function(t){
return t=c.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){
return new c.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){
return new c.Point(this.min.x,this.max.y)},getTopRight:function(){
return new c.Point(this.max.x,this.min.y)},getSize:function(){
return this.max.subtract(this.min)},contains:function(t){
var e,n;
return(t="number"==typeof t[0]||t instanceof c.Point?c.point(t):c.bounds(t))instanceof c.Bounds?(e=t.min,n=t.max):e=n=t,e.x>=this.min.x&&n.x<=this.max.x&&e.y>=this.min.y&&n.y<=this.max.y},intersects:function(t){
t=c.bounds(t);
var e=this.min,n=this.max,o=t.min,i=t.max,r=i.x>=e.x&&o.x<=n.x,s=i.y>=e.y&&o.y<=n.y;
return r&&s},overlaps:function(t){
t=c.bounds(t);
var e=this.min,n=this.max,o=t.min,i=t.max,r=i.x>e.x&&o.x<n.x,s=i.y>e.y&&o.y<n.y;
return r&&s},isValid:function(){
return!(!this.min||!this.max)}},c.bounds=function(t,e){
return!t||t instanceof c.Bounds?t:new c.Bounds(t,e)},c.Transformation=function(t,e,n,o){
this._a=t,this._b=e,this._c=n,this._d=o},c.Transformation.prototype={
transform:function(t,e){
return this._transform(t.clone(),e)},_transform:function(t,e){
return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){
return e=e||1,new c.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},c.DomUtil={
get:function(t){
return"string"==typeof t?s.getElementById(t):t},getStyle:function(t,e){
var n=t.style[e]||t.currentStyle&&t.currentStyle[e];
if((!n||"auto"===n)&&s.defaultView){
var o=s.defaultView.getComputedStyle(t,null);
n=o?o[e]:null}return"auto"===n?null:n},create:function(t,e,n){
var o=s.createElement(t);
return o.className=e||"",n&&n.appendChild(o),o},remove:function(t){
var e=t.parentNode;
e&&e.removeChild(t)},empty:function(t){
for(;
t.firstChild;
)t.removeChild(t.firstChild)},toFront:function(t){
t.parentNode.appendChild(t)},toBack:function(t){
var e=t.parentNode;
e.insertBefore(t,e.firstChild)},hasClass:function(t,e){
if(t.classList!==a)return t.classList.contains(e);
var n=c.DomUtil.getClass(t);
return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){
if(t.classList!==a)for(var n=c.Util.splitWords(e),o=0,i=n.length;
o<i;
o++)t.classList.add(n[o]);
else if(!c.DomUtil.hasClass(t,e)){
var r=c.DomUtil.getClass(t);
c.DomUtil.setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){
t.classList!==a?t.classList.remove(e):c.DomUtil.setClass(t,c.Util.trim((" "+c.DomUtil.getClass(t)+" ").replace(" "+e+" "," ")))},setClass:function(t,e){
t.className.baseVal===a?t.className=e:t.className.baseVal=e},getClass:function(t){
return t.className.baseVal===a?t.className:t.className.baseVal},setOpacity:function(t,e){
"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&c.DomUtil._setOpacityIE(t,e)},_setOpacityIE:function(t,e){
var n=!1,o="DXImageTransform.Microsoft.Alpha";
try{
n=t.filters.item(o)}catch(t){
if(1===e)return}e=Math.round(100*e),n?(n.Enabled=100!==e,n.Opacity=e):t.style.filter+=" progid:"+o+"(opacity="+e+")"},testProp:function(t){
for(var e=s.documentElement.style,n=0;
n<t.length;
n++)if(t[n]in e)return t[n];
return!1},setTransform:function(t,e,n){
var o=e||new c.Point(0,0);
t.style[c.DomUtil.TRANSFORM]=(c.Browser.ie3d?"translate("+o.x+"px,"+o.y+"px)":"translate3d("+o.x+"px,"+o.y+"px,0)")+(n?" scale("+n+")":"")},setPosition:function(t,e){
t._leaflet_pos=e,c.Browser.any3d?c.DomUtil.setTransform(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){
return t._leaflet_pos||new c.Point(0,0)}},function(){
c.DomUtil.TRANSFORM=c.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]);
var t=c.DomUtil.TRANSITION=c.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]);
if(c.DomUtil.TRANSITION_END="webkitTransition"===t||"OTransition"===t?t+"End":"transitionend","onselectstart"in s)c.DomUtil.disableTextSelection=function(){
c.DomEvent.on(r,"selectstart",c.DomEvent.preventDefault)},c.DomUtil.enableTextSelection=function(){
c.DomEvent.off(r,"selectstart",c.DomEvent.preventDefault)};
else{
var e=c.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);
c.DomUtil.disableTextSelection=function(){
if(e){
var t=s.documentElement.style;
this._userSelect=t[e],t[e]="none"}},c.DomUtil.enableTextSelection=function(){
e&&(s.documentElement.style[e]=this._userSelect,delete this._userSelect)}}c.DomUtil.disableImageDrag=function(){
c.DomEvent.on(r,"dragstart",c.DomEvent.preventDefault)},c.DomUtil.enableImageDrag=function(){
c.DomEvent.off(r,"dragstart",c.DomEvent.preventDefault)},c.DomUtil.preventOutline=function(t){
for(;
-1===t.tabIndex;
)t=t.parentNode;
t&&t.style&&(c.DomUtil.restoreOutline(),this._outlineElement=t,this._outlineStyle=t.style.outline,t.style.outline="none",c.DomEvent.on(r,"keydown",c.DomUtil.restoreOutline,this))},c.DomUtil.restoreOutline=function(){
this._outlineElement&&(this._outlineElement.style.outline=this._outlineStyle,delete this._outlineElement,delete this._outlineStyle,c.DomEvent.off(r,"keydown",c.DomUtil.restoreOutline,this))}}(),c.LatLng=function(t,e,n){
if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");
this.lat=+t,this.lng=+e,n!==a&&(this.alt=+n)},c.LatLng.prototype={
equals:function(t,e){
return!!t&&(t=c.latLng(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(e===a?1e-9:e))},toString:function(t){
return"LatLng("+c.Util.formatNum(this.lat,t)+", "+c.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){
return c.CRS.Earth.distance(this,c.latLng(t))},wrap:function(){
return c.CRS.Earth.wrapLatLng(this)},toBounds:function(t){
var e=180*t/40075017,n=e/Math.cos(Math.PI/180*this.lat);
return c.latLngBounds([this.lat-e,this.lng-n],[this.lat+e,this.lng+n])},clone:function(){
return new c.LatLng(this.lat,this.lng,this.alt)}},c.latLng=function(t,e,n){
return t instanceof c.LatLng?t:c.Util.isArray(t)&&"object"!=typeof t[0]?3===t.length?new c.LatLng(t[0],t[1],t[2]):2===t.length?new c.LatLng(t[0],t[1]):null:t===a||null===t?t:"object"==typeof t&&"lat"in t?new c.LatLng(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===a?null:new c.LatLng(t,e,n)},c.LatLngBounds=function(t,e){
if(t)for(var n=e?[t,e]:t,o=0,i=n.length;
o<i;
o++)this.extend(n[o])},c.LatLngBounds.prototype={
extend:function(t){
var e,n,o=this._southWest,i=this._northEast;
if(t instanceof c.LatLng)e=t,n=t;
else{
if(!(t instanceof c.LatLngBounds))return t?this.extend(c.latLng(t)||c.latLngBounds(t)):this;
if(e=t._southWest,n=t._northEast,!e||!n)return this}return o||i?(o.lat=Math.min(e.lat,o.lat),o.lng=Math.min(e.lng,o.lng),i.lat=Math.max(n.lat,i.lat),i.lng=Math.max(n.lng,i.lng)):(this._southWest=new c.LatLng(e.lat,e.lng),this._northEast=new c.LatLng(n.lat,n.lng)),this},pad:function(t){
var e=this._southWest,n=this._northEast,o=Math.abs(e.lat-n.lat)*t,i=Math.abs(e.lng-n.lng)*t;
return new c.LatLngBounds(new c.LatLng(e.lat-o,e.lng-i),new c.LatLng(n.lat+o,n.lng+i))},getCenter:function(){
return new c.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){
return this._southWest},getNorthEast:function(){
return this._northEast},getNorthWest:function(){
return new c.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){
return new c.LatLng(this.getSouth(),this.getEast())},getWest:function(){
return this._southWest.lng},getSouth:function(){
return this._southWest.lat},getEast:function(){
return this._northEast.lng},getNorth:function(){
return this._northEast.lat},contains:function(t){
t="number"==typeof t[0]||t instanceof c.LatLng||"lat"in t?c.latLng(t):c.latLngBounds(t);
var e,n,o=this._southWest,i=this._northEast;
return t instanceof c.LatLngBounds?(e=t.getSouthWest(),n=t.getNorthEast()):e=n=t,e.lat>=o.lat&&n.lat<=i.lat&&e.lng>=o.lng&&n.lng<=i.lng},intersects:function(t){
t=c.latLngBounds(t);
var e=this._southWest,n=this._northEast,o=t.getSouthWest(),i=t.getNorthEast(),r=i.lat>=e.lat&&o.lat<=n.lat,s=i.lng>=e.lng&&o.lng<=n.lng;
return r&&s},overlaps:function(t){
t=c.latLngBounds(t);
var e=this._southWest,n=this._northEast,o=t.getSouthWest(),i=t.getNorthEast(),r=i.lat>e.lat&&o.lat<n.lat,s=i.lng>e.lng&&o.lng<n.lng;
return r&&s},toBBoxString:function(){
return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){
return!!t&&(t=c.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast()))},isValid:function(){
return!(!this._southWest||!this._northEast)}},c.latLngBounds=function(t,e){
return t instanceof c.LatLngBounds?t:new c.LatLngBounds(t,e)},c.Projection={
},c.Projection.LonLat={
project:function(t){
return new c.Point(t.lng,t.lat)},unproject:function(t){
return new c.LatLng(t.y,t.x)},bounds:c.bounds([-180,-90],[180,90])},c.Projection.SphericalMercator={
R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){
var e=Math.PI/180,n=this.MAX_LATITUDE,o=Math.max(Math.min(n,t.lat),-n),i=Math.sin(o*e);
return new c.Point(this.R*t.lng*e,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(t){
var e=180/Math.PI;
return new c.LatLng((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){
var t=6378137*Math.PI;
return c.bounds([-t,-t],[t,t])}()},c.CRS={
latLngToPoint:function(t,e){
var n=this.projection.project(t),o=this.scale(e);
return this.transformation._transform(n,o)},pointToLatLng:function(t,e){
var n=this.scale(e),o=this.transformation.untransform(t,n);
return this.projection.unproject(o)},project:function(t){
return this.projection.project(t)},unproject:function(t){
return this.projection.unproject(t)},scale:function(t){
return 256*Math.pow(2,t)},zoom:function(t){
return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){
if(this.infinite)return null;
var e=this.projection.bounds,n=this.scale(t),o=this.transformation.transform(e.min,n),i=this.transformation.transform(e.max,n);
return c.bounds(o,i)},infinite:!1,wrapLatLng:function(t){
var e=this.wrapLng?c.Util.wrapNum(t.lng,this.wrapLng,!0):t.lng,n=this.wrapLat?c.Util.wrapNum(t.lat,this.wrapLat,!0):t.lat,o=t.alt;
return c.latLng(n,e,o)},wrapLatLngBounds:function(t){
var e=t.getCenter(),n=this.wrapLatLng(e),o=e.lat-n.lat,i=e.lng-n.lng;
if(0===o&&0===i)return t;
var r=t.getSouthWest(),s=t.getNorthEast(),a=c.latLng({
lat:r.lat-o,lng:r.lng-i}),l=c.latLng({
lat:s.lat-o,lng:s.lng-i});
return new c.LatLngBounds(a,l)}},c.CRS.Simple=c.extend({
},c.CRS,{
projection:c.Projection.LonLat,transformation:new c.Transformation(1,0,-1,0),scale:function(t){
return Math.pow(2,t)},zoom:function(t){
return Math.log(t)/Math.LN2},distance:function(t,e){
var n=e.lng-t.lng,o=e.lat-t.lat;
return Math.sqrt(n*n+o*o)},infinite:!0}),c.CRS.Earth=c.extend({
},c.CRS,{
wrapLng:[-180,180],R:6371e3,distance:function(t,e){
var n=Math.PI/180,o=t.lat*n,i=e.lat*n,r=Math.sin(o)*Math.sin(i)+Math.cos(o)*Math.cos(i)*Math.cos((e.lng-t.lng)*n);
return this.R*Math.acos(Math.min(r,1))}}),c.CRS.EPSG3857=c.extend({
},c.CRS.Earth,{
code:"EPSG:3857",projection:c.Projection.SphericalMercator,transformation:function(){
var t=.5/(Math.PI*c.Projection.SphericalMercator.R);
return new c.Transformation(t,.5,-t,.5)}()}),c.CRS.EPSG900913=c.extend({
},c.CRS.EPSG3857,{
code:"EPSG:900913"}),c.CRS.EPSG4326=c.extend({
},c.CRS.Earth,{
code:"EPSG:4326",projection:c.Projection.LonLat,transformation:new c.Transformation(1/180,1,-1/180,.5)}),c.Map=c.Evented.extend({
options:{
crs:c.CRS.EPSG3857,center:a,zoom:a,minZoom:a,maxZoom:a,layers:[],maxBounds:a,renderer:a,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){
e=c.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=c.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==a&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==a&&this.setView(c.latLng(e.center),e.zoom,{
reset:!0}),this._handlers=[],this._layers={
},this._zoomBoundLayers={
},this._sizeChanged=!0,this.callInitHooks(),this._zoomAnimated=c.DomUtil.TRANSITION&&c.Browser.any3d&&!c.Browser.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),c.DomEvent.on(this._proxy,c.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){
if((e=e===a?this._zoom:this._limitZoom(e),t=this._limitCenter(c.latLng(t),e,this.options.maxBounds),n=n||{
},this._stop(),this._loaded&&!n.reset&&!0!==n)&&(n.animate!==a&&(n.zoom=c.extend({
animate:n.animate},n.zoom),n.pan=c.extend({
animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan)))return clearTimeout(this._sizeTimer),this;
return this._resetView(t,e),this},setZoom:function(t,e){
return this._loaded?this.setView(this.getCenter(),t,{
zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){
return t=t||(c.Browser.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){
return t=t||(c.Browser.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,n){
var o=this.getZoomScale(e),i=this.getSize().divideBy(2),r=(t instanceof c.Point?t:this.latLngToContainerPoint(t)).subtract(i).multiplyBy(1-1/o),s=this.containerPointToLatLng(i.add(r));
return this.setView(s,e,{
zoom:n})},_getBoundsCenterZoom:function(t,e){
e=e||{
},t=t.getBounds?t.getBounds():c.latLngBounds(t);
var n=c.point(e.paddingTopLeft||e.padding||[0,0]),o=c.point(e.paddingBottomRight||e.padding||[0,0]),i=this.getBoundsZoom(t,!1,n.add(o));
i="number"==typeof e.maxZoom?Math.min(e.maxZoom,i):i;
var r=o.subtract(n).divideBy(2),s=this.project(t.getSouthWest(),i),a=this.project(t.getNorthEast(),i);
return{
center:this.unproject(s.add(a).divideBy(2).add(r),i),zoom:i}},fitBounds:function(t,e){
if(!(t=c.latLngBounds(t)).isValid())throw new Error("Bounds are not valid.");
var n=this._getBoundsCenterZoom(t,e);
return this.setView(n.center,n.zoom,e)},fitWorld:function(t){
return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){
return this.setView(t,this._zoom,{
pan:e})},panBy:function(t,e){
if(e=e||{
},!(t=c.point(t).round()).x&&!t.y)return this.fire("moveend");
if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;
if(this._panAnim||(this._panAnim=new c.PosAnimation,this._panAnim.on({
step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){
c.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");
var n=this._getMapPanePos().subtract(t).round();
this._panAnim.run(this._mapPane,n,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");
return this},flyTo:function(t,e,n){
function o(t){
var e=(f*f-p*p+(t?-1:1)*v*v*m*m)/(2*(t?f:p)*v*m),n=Math.sqrt(e*e+1)-e;
return n<1e-9?-18:Math.log(n)}function i(t){
return(Math.exp(t)-Math.exp(-t))/2}function r(t){
return(Math.exp(t)+Math.exp(-t))/2}function s(t){
return p*(r(_)*function(t){
return i(t)/r(t)}(_+g*t)-i(_))/v}if(!1===(n=n||{
}).animate||!c.Browser.any3d)return this.setView(t,e,n);
this._stop();
var l=this.project(this.getCenter()),u=this.project(t),d=this.getSize(),h=this._zoom;
t=c.latLng(t),e=e===a?h:e;
var p=Math.max(d.x,d.y),f=p*this.getZoomScale(h,e),m=u.distanceTo(l)||1,g=1.42,v=g*g,_=o(0),y=Date.now(),b=(o(1)-_)/g,w=n.duration?1e3*n.duration:1e3*b*.8;
return this._moveStart(!0),function n(){
var o=(Date.now()-y)/w,i=function(t){
return 1-Math.pow(1-t,1.5)}(o)*b;
o<=1?(this._flyToFrame=c.Util.requestAnimFrame(n,this),this._move(this.unproject(l.add(u.subtract(l).multiplyBy(s(i)/m)),h),this.getScaleZoom(p/function(t){
return p*(r(_)/r(_+g*t))}(i),h),{
flyTo:!0})):this._move(t,e)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,e){
var n=this._getBoundsCenterZoom(t,e);
return this.flyTo(n.center,n.zoom,e)},setMaxBounds:function(t){
return(t=c.latLngBounds(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){
return this.options.minZoom=t,this._loaded&&this.getZoom()<this.options.minZoom?this.setZoom(t):this},setMaxZoom:function(t){
return this.options.maxZoom=t,this._loaded&&this.getZoom()>this.options.maxZoom?this.setZoom(t):this},panInsideBounds:function(t,e){
this._enforcingBounds=!0;
var n=this.getCenter(),o=this._limitCenter(n,this._zoom,c.latLngBounds(t));
return n.equals(o)||this.panTo(o,e),this._enforcingBounds=!1,this},invalidateSize:function(t){
if(!this._loaded)return this;
t=c.extend({
animate:!1,pan:!0},!0===t?{
animate:!0}:t);
var e=this.getSize();
this._sizeChanged=!0,this._lastCenter=null;
var n=this.getSize(),o=e.divideBy(2).round(),i=n.divideBy(2).round(),r=o.subtract(i);
return r.x||r.y?(t.animate&&t.pan?this.panBy(r):(t.pan&&this._rawPanBy(r),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{
oldSize:e,newSize:n})):this},stop:function(){
return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){
if(t=this._locateOptions=c.extend({
timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({
code:0,message:"Geolocation not supported."}),this;
var e=c.bind(this._handleGeolocationResponse,this),n=c.bind(this._handleGeolocationError,this);
return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,n,t):navigator.geolocation.getCurrentPosition(e,n,t),this},stopLocate:function(){
return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){
var e=t.code,n=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");
this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{
code:e,message:"Geolocation error: "+n+"."})},_handleGeolocationResponse:function(t){
var e=t.coords.latitude,n=t.coords.longitude,o=new c.LatLng(e,n),i=o.toBounds(t.coords.accuracy),r=this._locateOptions;
if(r.setView){
var s=this.getBoundsZoom(i);
this.setView(o,r.maxZoom?Math.min(s,r.maxZoom):s)}var a={
latlng:o,bounds:i,timestamp:t.timestamp};
for(var l in t.coords)"number"==typeof t.coords[l]&&(a[l]=t.coords[l]);
this.fire("locationfound",a)},addHandler:function(t,e){
if(!e)return this;
var n=this[t]=new e(this);
return this._handlers.push(n),this.options[t]&&n.enable(),this},remove:function(){
if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");
try{
delete this._container._leaflet_id,delete this._containerId}catch(t){
this._container._leaflet_id=a,this._containerId=a}for(var t in c.DomUtil.remove(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();
return this},createPane:function(t,e){
var n="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),o=c.DomUtil.create("div",n,e||this._mapPane);
return t&&(this._panes[t]=o),o},getCenter:function(){
return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){
return this._zoom},getBounds:function(){
var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),n=this.unproject(t.getTopRight());
return new c.LatLngBounds(e,n)},getMinZoom:function(){
return this.options.minZoom===a?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){
return this.options.maxZoom===a?this._layersMaxZoom===a?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,n){
t=c.latLngBounds(t),n=c.point(n||[0,0]);
var o=this.getZoom()||0,i=this.getMinZoom(),r=this.getMaxZoom(),s=t.getNorthWest(),a=t.getSouthEast(),l=this.getSize().subtract(n),u=c.bounds(this.project(a,o),this.project(s,o)).getSize(),d=c.Browser.any3d?this.options.zoomSnap:1,h=Math.min(l.x/u.x,l.y/u.y);
return o=this.getScaleZoom(h,o),d&&(o=Math.round(o/(d/100))*(d/100),o=e?Math.ceil(o/d)*d:Math.floor(o/d)*d),Math.max(i,Math.min(r,o))},getSize:function(){
return this._size&&!this._sizeChanged||(this._size=new c.Point(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){
var n=this._getTopLeftPoint(t,e);
return new c.Bounds(n,n.add(this.getSize()))},getPixelOrigin:function(){
return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){
return this.options.crs.getProjectedBounds(t===a?this.getZoom():t)},getPane:function(t){
return"string"==typeof t?this._panes[t]:t},getPanes:function(){
return this._panes},getContainer:function(){
return this._container},getZoomScale:function(t,e){
var n=this.options.crs;
return e=e===a?this._zoom:e,n.scale(t)/n.scale(e)},getScaleZoom:function(t,e){
var n=this.options.crs;
e=e===a?this._zoom:e;
var o=n.zoom(t*n.scale(e));
return isNaN(o)?1/0:o},project:function(t,e){
return e=e===a?this._zoom:e,this.options.crs.latLngToPoint(c.latLng(t),e)},unproject:function(t,e){
return e=e===a?this._zoom:e,this.options.crs.pointToLatLng(c.point(t),e)},layerPointToLatLng:function(t){
var e=c.point(t).add(this.getPixelOrigin());
return this.unproject(e)},latLngToLayerPoint:function(t){
return this.project(c.latLng(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){
return this.options.crs.wrapLatLng(c.latLng(t))},wrapLatLngBounds:function(t){
return this.options.crs.wrapLatLngBounds(c.latLngBounds(t))},distance:function(t,e){
return this.options.crs.distance(c.latLng(t),c.latLng(e))},containerPointToLayerPoint:function(t){
return c.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){
return c.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){
var e=this.containerPointToLayerPoint(c.point(t));
return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){
return this.layerPointToContainerPoint(this.latLngToLayerPoint(c.latLng(t)))},mouseEventToContainerPoint:function(t){
return c.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){
return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){
return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){
var e=this._container=c.DomUtil.get(t);
if(!e)throw new Error("Map container not found.");
if(e._leaflet_id)throw new Error("Map container is already initialized.");
c.DomEvent.addListener(e,"scroll",this._onScroll,this),this._containerId=c.Util.stamp(e)},_initLayout:function(){
var t=this._container;
this._fadeAnimated=this.options.fadeAnimation&&c.Browser.any3d,c.DomUtil.addClass(t,"leaflet-container"+(c.Browser.touch?" leaflet-touch":"")+(c.Browser.retina?" leaflet-retina":"")+(c.Browser.ielt9?" leaflet-oldie":"")+(c.Browser.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));
var e=c.DomUtil.getStyle(t,"position");
"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){
var t=this._panes={
};
this._paneRenderers={
},this._mapPane=this.createPane("mapPane",this._container),c.DomUtil.setPosition(this._mapPane,new c.Point(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(c.DomUtil.addClass(t.markerPane,"leaflet-zoom-hide"),c.DomUtil.addClass(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e){
c.DomUtil.setPosition(this._mapPane,new c.Point(0,0));
var n=!this._loaded;
this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");
var o=this._zoom!==e;
this._moveStart(o)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t){
return t&&this.fire("zoomstart"),this.fire("movestart")},_move:function(t,e,n){
e===a&&(e=this._zoom);
var o=this._zoom!==e;
return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(o||n&&n.pinch)&&this.fire("zoom",n),this.fire("move",n)},_moveEnd:function(t){
return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){
return c.Util.cancelAnimFrame(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){
c.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){
return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){
this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){
if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){
if(c.DomEvent){
this._targets={
},this._targets[c.stamp(this._container)]=this;
var e=t?"off":"on";
c.DomEvent[e](this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&c.DomEvent[e](r,"resize",this._onResize,this),c.Browser.any3d&&this.options.transform3DLimit&&this[e]("moveend",this._onMoveEnd)}},_onResize:function(){
c.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=c.Util.requestAnimFrame(function(){
this.invalidateSize({
debounceMoveend:!0})},this)},_onScroll:function(){
this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){
var t=this._getMapPanePos();
Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){
for(var n,o=[],i="mouseout"===e||"mouseover"===e,r=t.target||t.srcElement,s=!1;
r;
){
if((n=this._targets[c.stamp(r)])&&("click"===e||"preclick"===e)&&!t._simulated&&this._draggableMoved(n)){
s=!0;
break}if(n&&n.listens(e,!0)){
if(i&&!c.DomEvent._isExternalTarget(r,t))break;
if(o.push(n),i)break}if(r===this._container)break;
r=r.parentNode}return o.length||s||i||!c.DomEvent._isExternalTarget(r,t)||(o=[this]),o},_handleDOMEvent:function(t){
if(this._loaded&&!c.DomEvent._skipped(t)){
var e="keypress"===t.type&&13===t.keyCode?"click":t.type;
"mousedown"===e&&c.DomUtil.preventOutline(t.target||t.srcElement),this._fireDOMEvent(t,e)}},_fireDOMEvent:function(t,e,n){
if("click"===t.type){
var o=c.Util.extend({
},t);
o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){
var i=n[0];
"contextmenu"===e&&i.listens(e,!0)&&c.DomEvent.preventDefault(t);
var r={
originalEvent:t};
if("keypress"!==t.type){
var s=i instanceof c.Marker;
r.containerPoint=s?this.latLngToContainerPoint(i.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=s?i.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var a=0;
a<n.length;
a++)if(n[a].fire(e,r,!0),r.originalEvent._stopped||n[a].options.nonBubblingEvents&&-1!==c.Util.indexOf(n[a].options.nonBubblingEvents,e))return}},_draggableMoved:function(t){
return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){
for(var t=0,e=this._handlers.length;
t<e;
t++)this._handlers[t].disable()},whenReady:function(t,e){
return this._loaded?t.call(e||this,{
target:this}):this.on("load",t,e),this},_getMapPanePos:function(){
return c.DomUtil.getPosition(this._mapPane)||new c.Point(0,0)},_moved:function(){
var t=this._getMapPanePos();
return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){
return(t&&e!==a?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){
var n=this.getSize()._divideBy(2);
return this.project(t,e)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,n){
var o=this._getNewPixelOrigin(n,e);
return this.project(t,e)._subtract(o)},_latLngBoundsToNewLayerBounds:function(t,e,n){
var o=this._getNewPixelOrigin(n,e);
return c.bounds([this.project(t.getSouthWest(),e)._subtract(o),this.project(t.getNorthWest(),e)._subtract(o),this.project(t.getSouthEast(),e)._subtract(o),this.project(t.getNorthEast(),e)._subtract(o)])},_getCenterLayerPoint:function(){
return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){
return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,n){
if(!n)return t;
var o=this.project(t,e),i=this.getSize().divideBy(2),r=new c.Bounds(o.subtract(i),o.add(i)),s=this._getBoundsOffset(r,n,e);
return s.round().equals([0,0])?t:this.unproject(o.add(s),e)},_limitOffset:function(t,e){
if(!e)return t;
var n=this.getPixelBounds(),o=new c.Bounds(n.min.add(t),n.max.add(t));
return t.add(this._getBoundsOffset(o,e))},_getBoundsOffset:function(t,e,n){
var o=c.bounds(this.project(e.getNorthEast(),n),this.project(e.getSouthWest(),n)),i=o.min.subtract(t.min),r=o.max.subtract(t.max),s=this._rebound(i.x,-r.x),a=this._rebound(i.y,-r.y);
return new c.Point(s,a)},_rebound:function(t,e){
return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){
var e=this.getMinZoom(),n=this.getMaxZoom(),o=c.Browser.any3d?this.options.zoomSnap:1;
return o&&(t=Math.round(t/o)*o),Math.max(e,Math.min(n,t))},_onPanTransitionStep:function(){
this.fire("move")},_onPanTransitionEnd:function(){
c.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){
var n=this._getCenterOffset(t)._floor();
return!(!0!==(e&&e.animate)&&!this.getSize().contains(n)||(this.panBy(n,e),0))},_createAnimProxy:function(){
var t=this._proxy=c.DomUtil.create("div","leaflet-proxy leaflet-zoom-animated");
this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){
var n=c.DomUtil.TRANSFORM,o=t.style[n];
c.DomUtil.setTransform(t,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),o===t.style[n]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){
var e=this.getCenter(),n=this.getZoom();
c.DomUtil.setTransform(t,this.project(e,n),this.getZoomScale(n,1))},this)},_catchTransitionEnd:function(t){
this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){
return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,n){
if(this._animatingZoom)return!0;
if(n=n||{
},!this._zoomAnimated||!1===n.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;
var o=this.getZoomScale(e),i=this._getCenterOffset(t)._divideBy(1-1/o);
return!(!0!==n.animate&&!this.getSize().contains(i)||(c.Util.requestAnimFrame(function(){
this._moveStart(!0)._animateZoom(t,e,!0)},this),0))},_animateZoom:function(t,e,n,o){
n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,c.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{
center:t,zoom:e,noUpdate:o}),setTimeout(c.bind(this._onZoomTransitionEnd,this),250)},_onZoomTransitionEnd:function(){
this._animatingZoom&&(c.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),c.Util.requestAnimFrame(function(){
this._moveEnd(!0)},this))}}),c.map=function(t,e){
return new c.Map(t,e)},c.Layer=c.Evented.extend({
options:{
pane:"overlayPane",nonBubblingEvents:[],attribution:null},addTo:function(t){
return t.addLayer(this),this},remove:function(){
return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){
return t&&t.removeLayer(this),this},getPane:function(t){
return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){
return this._map._targets[c.stamp(t)]=this,this},removeInteractiveTarget:function(t){
return delete this._map._targets[c.stamp(t)],this},getAttribution:function(){
return this.options.attribution},_layerAdd:function(t){
var e=t.target;
if(e.hasLayer(this)){
if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){
var n=this.getEvents();
e.on(n,this),this.once("remove",function(){
e.off(n,this)},this)}this.onAdd(e),this.getAttribution&&e.attributionControl&&e.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),e.fire("layeradd",{
layer:this})}}}),c.Map.include({
addLayer:function(t){
var e=c.stamp(t);
return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){
var e=c.stamp(t);
return this._layers[e]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[e],this._loaded&&(this.fire("layerremove",{
layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){
return!!t&&c.stamp(t)in this._layers},eachLayer:function(t,e){
for(var n in this._layers)t.call(e,this._layers[n]);
return this},_addLayers:function(t){
for(var e=0,n=(t=t?c.Util.isArray(t)?t:[t]:[]).length;
e<n;
e++)this.addLayer(t[e])},_addZoomLimit:function(t){
!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[c.stamp(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){
var e=c.stamp(t);
this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){
var t=1/0,e=-1/0,n=this._getZoomSpan();
for(var o in this._zoomBoundLayers){
var i=this._zoomBoundLayers[o].options;
t=i.minZoom===a?t:Math.min(t,i.minZoom),e=i.maxZoom===a?e:Math.max(e,i.maxZoom)}this._layersMaxZoom=e===-1/0?a:e,this._layersMinZoom=t===1/0?a:t,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===a&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===a&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});
var u="_leaflet_events";
c.DomEvent={
on:function(t,e,n,o){
if("object"==typeof e)for(var i in e)this._on(t,i,e[i],n);
else for(var r=0,s=(e=c.Util.splitWords(e)).length;
r<s;
r++)this._on(t,e[r],n,o);
return this},off:function(t,e,n,o){
if("object"==typeof e)for(var i in e)this._off(t,i,e[i],n);
else for(var r=0,s=(e=c.Util.splitWords(e)).length;
r<s;
r++)this._off(t,e[r],n,o);
return this},_on:function(t,e,n,o){
var i=e+c.stamp(n)+(o?"_"+c.stamp(o):"");
if(t[u]&&t[u][i])return this;
var s=function(e){
return n.call(o||t,e||r.event)},a=s;
return c.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,i):!c.Browser.touch||"dblclick"!==e||!this.addDoubleTapListener||c.Browser.pointer&&c.Browser.chrome?"addEventListener"in t?"mousewheel"===e?t.addEventListener("onwheel"in t?"wheel":"mousewheel",s,!1):"mouseenter"===e||"mouseleave"===e?(s=function(e){
e=e||r.event,c.DomEvent._isExternalTarget(t,e)&&a(e)},t.addEventListener("mouseenter"===e?"mouseover":"mouseout",s,!1)):("click"===e&&c.Browser.android&&(s=function(t){
return c.DomEvent._filterClick(t,a)}),t.addEventListener(e,s,!1)):"attachEvent"in t&&t.attachEvent("on"+e,s):this.addDoubleTapListener(t,s,i),t[u]=t[u]||{
},t[u][i]=s,this},_off:function(t,e,n,o){
var i=e+c.stamp(n)+(o?"_"+c.stamp(o):""),r=t[u]&&t[u][i];
return r?(c.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,i):c.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,i):"removeEventListener"in t?"mousewheel"===e?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,r,!1):"detachEvent"in t&&t.detachEvent("on"+e,r),t[u][i]=null,this):this},stopPropagation:function(t){
return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,c.DomEvent._skipped(t),this},disableScrollPropagation:function(t){
return c.DomEvent.on(t,"mousewheel",c.DomEvent.stopPropagation)},disableClickPropagation:function(t){
var e=c.DomEvent.stopPropagation;
return c.DomEvent.on(t,c.Draggable.START.join(" "),e),c.DomEvent.on(t,{
click:c.DomEvent._fakeStop,dblclick:e})},preventDefault:function(t){
return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){
return c.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){
if(!e)return new c.Point(t.clientX,t.clientY);
var n=e.getBoundingClientRect();
return new c.Point(t.clientX-n.left-e.clientLeft,t.clientY-n.top-e.clientTop)},_wheelPxFactor:c.Browser.win&&c.Browser.chrome?2:c.Browser.gecko?r.devicePixelRatio:1,getWheelDelta:function(t){
return c.Browser.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/c.DomEvent._wheelPxFactor:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0},_skipEvents:{
},_fakeStop:function(t){
c.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){
var e=this._skipEvents[t.type];
return this._skipEvents[t.type]=!1,e},_isExternalTarget:function(t,e){
var n=e.relatedTarget;
if(!n)return!0;
try{
for(;
n&&n!==t;
)n=n.parentNode}catch(t){
return!1}return n!==t},_filterClick:function(t,e){
var n=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,o=c.DomEvent._lastClick&&n-c.DomEvent._lastClick;
return o&&o>100&&o<500||t.target._simulatedClick&&!t._simulated?void c.DomEvent.stop(t):(c.DomEvent._lastClick=n,void e(t))}},c.DomEvent.addListener=c.DomEvent.on,c.DomEvent.removeListener=c.DomEvent.off,c.PosAnimation=c.Evented.extend({
run:function(t,e,n,o){
this.stop(),this._el=t,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(o||.5,.2),this._startPos=c.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){
this._inProgress&&(this._step(!0),this._complete())},_animate:function(){
this._animId=c.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(t){
var e=+new Date-this._startTime,n=1e3*this._duration;
e<n?this._runFrame(this._easeOut(e/n),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){
var n=this._startPos.add(this._offset.multiplyBy(t));
e&&n._round(),c.DomUtil.setPosition(this._el,n),this.fire("step")},_complete:function(){
c.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){
return 1-Math.pow(1-t,this._easeOutPower)}}),c.Projection.Mercator={
R:6378137,R_MINOR:6356752.314245179,bounds:c.bounds([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){
var e=Math.PI/180,n=this.R,o=t.lat*e,i=this.R_MINOR/n,r=Math.sqrt(1-i*i),s=r*Math.sin(o),a=Math.tan(Math.PI/4-o/2)/Math.pow((1-s)/(1+s),r/2);
return o=-n*Math.log(Math.max(a,1e-10)),new c.Point(t.lng*e*n,o)},unproject:function(t){
for(var e,n=180/Math.PI,o=this.R,i=this.R_MINOR/o,r=Math.sqrt(1-i*i),s=Math.exp(-t.y/o),a=Math.PI/2-2*Math.atan(s),l=0,u=.1;
l<15&&Math.abs(u)>1e-7;
l++)e=r*Math.sin(a),e=Math.pow((1-e)/(1+e),r/2),a+=u=Math.PI/2-2*Math.atan(s*e)-a;
return new c.LatLng(a*n,t.x*n/o)}},c.CRS.EPSG3395=c.extend({
},c.CRS.Earth,{
code:"EPSG:3395",projection:c.Projection.Mercator,transformation:function(){
var t=.5/(Math.PI*c.Projection.Mercator.R);
return new c.Transformation(t,.5,-t,.5)}()}),c.GridLayer=c.Layer.extend({
options:{
tileSize:256,opacity:1,updateWhenIdle:c.Browser.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:a,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){
c.setOptions(this,t)},onAdd:function(){
this._initContainer(),this._levels={
},this._tiles={
},this._resetView(),this._update()},beforeAdd:function(t){
t._addZoomLimit(this)},onRemove:function(t){
this._removeAllTiles(),c.DomUtil.remove(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=null},bringToFront:function(){
return this._map&&(c.DomUtil.toFront(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){
return this._map&&(c.DomUtil.toBack(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){
return this._container},setOpacity:function(t){
return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){
return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){
return this._loading},redraw:function(){
return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){
var t={
viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};
return this.options.updateWhenIdle||(this._onMove||(this._onMove=c.Util.throttle(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){
return s.createElement("div")},getTileSize:function(){
var t=this.options.tileSize;
return t instanceof c.Point?t:new c.Point(t,t)},_updateZIndex:function(){
this._container&&this.options.zIndex!==a&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){
for(var e,n=this.getPane().children,o=-t(-1/0,1/0),i=0,r=n.length;
i<r;
i++)e=n[i].style.zIndex,n[i]!==this._container&&e&&(o=t(o,+e));
isFinite(o)&&(this.options.zIndex=o+t(-1,1),this._updateZIndex())},_updateOpacity:function(){
if(this._map&&!c.Browser.ielt9){
c.DomUtil.setOpacity(this._container,this.options.opacity);
var t=+new Date,e=!1,n=!1;
for(var o in this._tiles){
var i=this._tiles[o];
if(i.current&&i.loaded){
var r=Math.min(1,(t-i.loaded)/200);
c.DomUtil.setOpacity(i.el,r),r<1?e=!0:(i.active&&(n=!0),i.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),e&&(c.Util.cancelAnimFrame(this._fadeFrame),this._fadeFrame=c.Util.requestAnimFrame(this._updateOpacity,this))}},_initContainer:function(){
this._container||(this._container=c.DomUtil.create("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){
var t=this._tileZoom,e=this.options.maxZoom;
if(t===a)return a;
for(var n in this._levels)this._levels[n].el.children.length||n===t?this._levels[n].el.style.zIndex=e-Math.abs(t-n):(c.DomUtil.remove(this._levels[n].el),this._removeTilesAtZoom(n),delete this._levels[n]);
var o=this._levels[t],i=this._map;
return o||((o=this._levels[t]={
}).el=c.DomUtil.create("div","leaflet-tile-container leaflet-zoom-animated",this._container),o.el.style.zIndex=e,o.origin=i.project(i.unproject(i.getPixelOrigin()),t).round(),o.zoom=t,this._setZoomTransform(o,i.getCenter(),i.getZoom()),c.Util.falseFn(o.el.offsetWidth)),this._level=o,o},_pruneTiles:function(){
if(this._map){
var t,e,n=this._map.getZoom();
if(n>this.options.maxZoom||n<this.options.minZoom)return void this._removeAllTiles();
for(t in this._tiles)(e=this._tiles[t]).retain=e.current;
for(t in this._tiles)if((e=this._tiles[t]).current&&!e.active){
var o=e.coords;
this._retainParent(o.x,o.y,o.z,o.z-5)||this._retainChildren(o.x,o.y,o.z,o.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){
for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){
for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){
for(var t in this._levels)c.DomUtil.remove(this._levels[t].el),delete this._levels[t];
this._removeAllTiles(),this._tileZoom=null},_retainParent:function(t,e,n,o){
var i=Math.floor(t/2),r=Math.floor(e/2),s=n-1,a=new c.Point(+i,+r);
a.z=+s;
var l=this._tileCoordsToKey(a),u=this._tiles[l];
return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),s>o&&this._retainParent(i,r,s,o))},_retainChildren:function(t,e,n,o){
for(var i=2*t;
i<2*t+2;
i++)for(var r=2*e;
r<2*e+2;
r++){
var s=new c.Point(i,r);
s.z=n+1;
var a=this._tileCoordsToKey(s),l=this._tiles[a];
l&&l.active?l.retain=!0:(l&&l.loaded&&(l.retain=!0),n+1<o&&this._retainChildren(i,r,n+1,o))}},_resetView:function(t){
var e=t&&(t.pinch||t.flyTo);
this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){
this._setView(t.center,t.zoom,!0,t.noUpdate)},_setView:function(t,e,n,o){
var i=Math.round(e);
(this.options.maxZoom!==a&&i>this.options.maxZoom||this.options.minZoom!==a&&i<this.options.minZoom)&&(i=a);
var r=this.options.updateWhenZooming&&i!==this._tileZoom;
o&&!r||(this._tileZoom=i,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),i!==a&&this._update(t),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){
for(var n in this._levels)this._setZoomTransform(this._levels[n],t,e)},_setZoomTransform:function(t,e,n){
var o=this._map.getZoomScale(n,t.zoom),i=t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(e,n)).round();
c.Browser.any3d?c.DomUtil.setTransform(t.el,i,o):c.DomUtil.setPosition(t.el,i)},_resetGrid:function(){
var t=this._map,e=t.options.crs,n=this._tileSize=this.getTileSize(),o=this._tileZoom,i=this._map.getPixelWorldBounds(this._tileZoom);
i&&(this._globalTileRange=this._pxBoundsToTileRange(i)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],o).x/n.x),Math.ceil(t.project([0,e.wrapLng[1]],o).x/n.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],o).y/n.x),Math.ceil(t.project([e.wrapLat[1],0],o).y/n.y)]},_onMoveEnd:function(){
this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){
var e=this._map,n=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),o=e.getZoomScale(n,this._tileZoom),i=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(2*o);
return new c.Bounds(i.subtract(r),i.add(r))},_update:function(t){
var e=this._map;
if(e){
var n=e.getZoom();
if(t===a&&(t=e.getCenter()),this._tileZoom!==a){
var o=this._getTiledPixelBounds(t),i=this._pxBoundsToTileRange(o),r=i.getCenter(),l=[],u=this.options.keepBuffer,d=new c.Bounds(i.getBottomLeft().subtract([u,-u]),i.getTopRight().add([u,-u]));
for(var h in this._tiles){
var p=this._tiles[h].coords;
p.z===this._tileZoom&&d.contains(c.point(p.x,p.y))||(this._tiles[h].current=!1)}if(Math.abs(n-this._tileZoom)>1)return void this._setView(t,n);
for(var f=i.min.y;
f<=i.max.y;
f++)for(var m=i.min.x;
m<=i.max.x;
m++){
var g=new c.Point(m,f);
if(g.z=this._tileZoom,this._isValidTile(g)){
var v=this._tiles[this._tileCoordsToKey(g)];
v?v.current=!0:l.push(g)}}if(l.sort(function(t,e){
return t.distanceTo(r)-e.distanceTo(r)}),0!==l.length){
this._loading||(this._loading=!0,this.fire("loading"));
var _=s.createDocumentFragment();
for(m=0;
m<l.length;
m++)this._addTile(l[m],_);
this._level.el.appendChild(_)}}}},_isValidTile:function(t){
var e=this._map.options.crs;
if(!e.infinite){
var n=this._globalTileRange;
if(!e.wrapLng&&(t.x<n.min.x||t.x>n.max.x)||!e.wrapLat&&(t.y<n.min.y||t.y>n.max.y))return!1}if(!this.options.bounds)return!0;
var o=this._tileCoordsToBounds(t);
return c.latLngBounds(this.options.bounds).overlaps(o)},_keyToBounds:function(t){
return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToBounds:function(t){
var e=this._map,n=this.getTileSize(),o=t.scaleBy(n),i=o.add(n),r=e.unproject(o,t.z),s=e.unproject(i,t.z),a=new c.LatLngBounds(r,s);
return this.options.noWrap||e.wrapLatLngBounds(a),a},_tileCoordsToKey:function(t){
return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){
var e=t.split(":"),n=new c.Point(+e[0],+e[1]);
return n.z=+e[2],n},_removeTile:function(t){
var e=this._tiles[t];
e&&(c.DomUtil.remove(e.el),delete this._tiles[t],this.fire("tileunload",{
tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){
c.DomUtil.addClass(t,"leaflet-tile");
var e=this.getTileSize();
t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=c.Util.falseFn,t.onmousemove=c.Util.falseFn,c.Browser.ielt9&&this.options.opacity<1&&c.DomUtil.setOpacity(t,this.options.opacity),c.Browser.android&&!c.Browser.android23&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,e){
var n=this._getTilePos(t),o=this._tileCoordsToKey(t),i=this.createTile(this._wrapCoords(t),c.bind(this._tileReady,this,t));
this._initTile(i),this.createTile.length<2&&c.Util.requestAnimFrame(c.bind(this._tileReady,this,t,null,i)),c.DomUtil.setPosition(i,n),this._tiles[o]={
el:i,coords:t,current:!0},e.appendChild(i),this.fire("tileloadstart",{
tile:i,coords:t})},_tileReady:function(t,e,n){
if(this._map){
e&&this.fire("tileerror",{
error:e,tile:n,coords:t});
var o=this._tileCoordsToKey(t);
(n=this._tiles[o])&&(n.loaded=+new Date,this._map._fadeAnimated?(c.DomUtil.setOpacity(n.el,0),c.Util.cancelAnimFrame(this._fadeFrame),this._fadeFrame=c.Util.requestAnimFrame(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),e||(c.DomUtil.addClass(n.el,"leaflet-tile-loaded"),this.fire("tileload",{
tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),c.Browser.ielt9||!this._map._fadeAnimated?c.Util.requestAnimFrame(this._pruneTiles,this):setTimeout(c.bind(this._pruneTiles,this),250)))}},_getTilePos:function(t){
return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){
var e=new c.Point(this._wrapX?c.Util.wrapNum(t.x,this._wrapX):t.x,this._wrapY?c.Util.wrapNum(t.y,this._wrapY):t.y);
return e.z=t.z,e},_pxBoundsToTileRange:function(t){
var e=this.getTileSize();
return new c.Bounds(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){
for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;
return!0}}),c.gridLayer=function(t){
return new c.GridLayer(t)},c.TileLayer=c.GridLayer.extend({
options:{
minZoom:0,maxZoom:18,maxNativeZoom:null,minNativeZoom:null,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,e){
this._url=t,(e=c.setOptions(this,e)).detectRetina&&c.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom++):(e.zoomOffset++,e.maxZoom--),e.minZoom=Math.max(0,e.minZoom)),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),c.Browser.android||this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){
return this._url=t,e||this.redraw(),this},createTile:function(t,e){
var n=s.createElement("img");
return c.DomEvent.on(n,"load",c.bind(this._tileOnLoad,this,e,n)),c.DomEvent.on(n,"error",c.bind(this._tileOnError,this,e,n)),this.options.crossOrigin&&(n.crossOrigin=""),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){
var e={
r:c.Browser.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};
if(this._map&&!this._map.options.crs.infinite){
var n=this._globalTileRange.max.y-t.y;
this.options.tms&&(e.y=n),e["-y"]=n}return c.Util.template(this._url,c.extend(e,this.options))},_tileOnLoad:function(t,e){
c.Browser.ielt9?setTimeout(c.bind(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,n){
var o=this.options.errorTileUrl;
o&&e.src!==o&&(e.src=o),t(n,e)},getTileSize:function(){
var t=this._map,e=c.GridLayer.prototype.getTileSize.call(this),n=this._tileZoom+this.options.zoomOffset,o=this.options.minNativeZoom,i=this.options.maxNativeZoom;
return null!==o&&n<o?e.divideBy(t.getZoomScale(o,n)).round():null!==i&&n>i?e.divideBy(t.getZoomScale(i,n)).round():e},_onTileRemove:function(t){
t.tile.onload=null},_getZoomForUrl:function(){
var t=this._tileZoom,e=this.options.maxZoom,n=this.options.zoomReverse,o=this.options.zoomOffset,i=this.options.minNativeZoom,r=this.options.maxNativeZoom;
return n&&(t=e-t),t+=o,null!==i&&t<i?i:null!==r&&t>r?r:t},_getSubdomain:function(t){
var e=Math.abs(t.x+t.y)%this.options.subdomains.length;
return this.options.subdomains[e]},_abortLoading:function(){
var t,e;
for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((e=this._tiles[t].el).onload=c.Util.falseFn,e.onerror=c.Util.falseFn,e.complete||(e.src=c.Util.emptyImageUrl,c.DomUtil.remove(e)))}}),c.tileLayer=function(t,e){
return new c.TileLayer(t,e)},c.TileLayer.WMS=c.TileLayer.extend({
defaultWmsParams:{
service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{
crs:null,uppercase:!1},initialize:function(t,e){
this._url=t;
var n=c.extend({
},this.defaultWmsParams);
for(var o in e)o in this.options||(n[o]=e[o]);
e=c.setOptions(this,e),n.width=n.height=e.tileSize*(e.detectRetina&&c.Browser.retina?2:1),this.wmsParams=n},onAdd:function(t){
this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);
var e=this._wmsVersion>=1.3?"crs":"srs";
this.wmsParams[e]=this._crs.code,c.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){
var e=this._tileCoordsToBounds(t),n=this._crs.project(e.getNorthWest()),o=this._crs.project(e.getSouthEast()),i=(this._wmsVersion>=1.3&&this._crs===c.CRS.EPSG4326?[o.y,n.x,n.y,o.x]:[n.x,o.y,o.x,n.y]).join(","),r=c.TileLayer.prototype.getTileUrl.call(this,t);
return r+c.Util.getParamString(this.wmsParams,r,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+i},setParams:function(t,e){
return c.extend(this.wmsParams,t),e||this.redraw(),this}}),c.tileLayer.wms=function(t,e){
return new c.TileLayer.WMS(t,e)},c.ImageOverlay=c.Layer.extend({
options:{
opacity:1,alt:"",interactive:!1,crossOrigin:!1},initialize:function(t,e,n){
this._url=t,this._bounds=c.latLngBounds(e),c.setOptions(this,n)},onAdd:function(){
this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(c.DomUtil.addClass(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){
c.DomUtil.remove(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){
return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){
return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){
return this._map&&c.DomUtil.toFront(this._image),this},bringToBack:function(){
return this._map&&c.DomUtil.toBack(this._image),this},setUrl:function(t){
return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){
return this._bounds=t,this._map&&this._reset(),this},getEvents:function(){
var t={
zoom:this._reset,viewreset:this._reset};
return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},getBounds:function(){
return this._bounds},getElement:function(){
return this._image},_initImage:function(){
var t=this._image=c.DomUtil.create("img","leaflet-image-layer "+(this._zoomAnimated?"leaflet-zoom-animated":""));
t.onselectstart=c.Util.falseFn,t.onmousemove=c.Util.falseFn,t.onload=c.bind(this.fire,this,"load"),this.options.crossOrigin&&(t.crossOrigin=""),t.src=this._url,t.alt=this.options.alt},_animateZoom:function(t){
var e=this._map.getZoomScale(t.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;
c.DomUtil.setTransform(this._image,n,e)},_reset:function(){
var t=this._image,e=new c.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=e.getSize();
c.DomUtil.setPosition(t,e.min),t.style.width=n.x+"px",t.style.height=n.y+"px"},_updateOpacity:function(){
c.DomUtil.setOpacity(this._image,this.options.opacity)}}),c.imageOverlay=function(t,e,n){
return new c.ImageOverlay(t,e,n)},c.Icon=c.Class.extend({
initialize:function(t){
c.setOptions(this,t)},createIcon:function(t){
return this._createIcon("icon",t)},createShadow:function(t){
return this._createIcon("shadow",t)},_createIcon:function(t,e){
var n=this._getIconUrl(t);
if(!n){
if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");
return null}var o=this._createImg(n,e&&"IMG"===e.tagName?e:null);
return this._setIconStyles(o,t),o},_setIconStyles:function(t,e){
var n=this.options,o=n[e+"Size"];
"number"==typeof o&&(o=[o,o]);
var i=c.point(o),r=c.point("shadow"===e&&n.shadowAnchor||n.iconAnchor||i&&i.divideBy(2,!0));
t.className="leaflet-marker-"+e+" "+(n.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),i&&(t.style.width=i.x+"px",t.style.height=i.y+"px")},_createImg:function(t,e){
return(e=e||s.createElement("img")).src=t,e},_getIconUrl:function(t){
return c.Browser.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),c.icon=function(t){
return new c.Icon(t)},c.Icon.Default=c.Icon.extend({
options:{
iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){
return c.Icon.Default.imagePath||(c.Icon.Default.imagePath=this._detectIconPath()),(this.options.imagePath||c.Icon.Default.imagePath)+c.Icon.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){
var t=c.DomUtil.create("div","leaflet-default-icon-path",s.body),e=c.DomUtil.getStyle(t,"background-image")||c.DomUtil.getStyle(t,"backgroundImage");
return s.body.removeChild(t),0===e.indexOf("url")?e.replace(/^url\([\"\']?/,"").replace(/marker-icon\.png[\"\']?\)$/,""):""}}),c.Marker=c.Layer.extend({
options:{
icon:new c.Icon.Default,interactive:!0,draggable:!1,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",nonBubblingEvents:["click","dblclick","mouseover","mouseout","contextmenu"]},initialize:function(t,e){
c.setOptions(this,e),this._latlng=c.latLng(t)},onAdd:function(t){
this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){
this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){
return{
zoom:this.update,viewreset:this.update}},getLatLng:function(){
return this._latlng},setLatLng:function(t){
var e=this._latlng;
return this._latlng=c.latLng(t),this.update(),this.fire("move",{
oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){
return this.options.zIndexOffset=t,this.update()},setIcon:function(t){
return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){
return this._icon},update:function(){
if(this._icon){
var t=this._map.latLngToLayerPoint(this._latlng).round();
this._setPos(t)}return this},_initIcon:function(){
var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),n=t.icon.createIcon(this._icon),o=!1;
n!==this._icon&&(this._icon&&this._removeIcon(),o=!0,t.title&&(n.title=t.title),t.alt&&(n.alt=t.alt)),c.DomUtil.addClass(n,e),t.keyboard&&(n.tabIndex="0"),this._icon=n,t.riseOnHover&&this.on({
mouseover:this._bringToFront,mouseout:this._resetZIndex});
var i=t.icon.createShadow(this._shadow),r=!1;
i!==this._shadow&&(this._removeShadow(),r=!0),i&&(c.DomUtil.addClass(i,e),i.alt=""),this._shadow=i,t.opacity<1&&this._updateOpacity(),o&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&r&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){
this.options.riseOnHover&&this.off({
mouseover:this._bringToFront,mouseout:this._resetZIndex}),c.DomUtil.remove(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){
this._shadow&&c.DomUtil.remove(this._shadow),this._shadow=null},_setPos:function(t){
c.DomUtil.setPosition(this._icon,t),this._shadow&&c.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){
this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){
var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();
this._setPos(e)},_initInteraction:function(){
if(this.options.interactive&&(c.DomUtil.addClass(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),c.Handler.MarkerDrag)){
var t=this.options.draggable;
this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new c.Handler.MarkerDrag(this),t&&this.dragging.enable()}},setOpacity:function(t){
return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){
var t=this.options.opacity;
c.DomUtil.setOpacity(this._icon,t),this._shadow&&c.DomUtil.setOpacity(this._shadow,t)},_bringToFront:function(){
this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){
this._updateZIndex(0)},_getPopupAnchor:function(){
return this.options.icon.options.popupAnchor||[0,0]},_getTooltipAnchor:function(){
return this.options.icon.options.tooltipAnchor||[0,0]}}),c.marker=function(t,e){
return new c.Marker(t,e)},c.DivIcon=c.Icon.extend({
options:{
iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){
var e=t&&"DIV"===t.tagName?t:s.createElement("div"),n=this.options;
if(e.innerHTML=!1!==n.html?n.html:"",n.bgPos){
var o=c.point(n.bgPos);
e.style.backgroundPosition=-o.x+"px "+-o.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){
return null}}),c.divIcon=function(t){
return new c.DivIcon(t)},c.DivOverlay=c.Layer.extend({
options:{
offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,e){
c.setOptions(this,t),this._source=e},onAdd:function(t){
this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&c.DomUtil.setOpacity(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&c.DomUtil.setOpacity(this._container,1),this.bringToFront()},onRemove:function(t){
t._fadeAnimated?(c.DomUtil.setOpacity(this._container,0),this._removeTimeout=setTimeout(c.bind(c.DomUtil.remove,c.DomUtil,this._container),200)):c.DomUtil.remove(this._container)},getLatLng:function(){
return this._latlng},setLatLng:function(t){
return this._latlng=c.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){
return this._content},setContent:function(t){
return this._content=t,this.update(),this},getElement:function(){
return this._container},update:function(){
this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){
var t={
zoom:this._updatePosition,viewreset:this._updatePosition};
return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){
return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){
return this._map&&c.DomUtil.toFront(this._container),this},bringToBack:function(){
return this._map&&c.DomUtil.toBack(this._container),this},_updateContent:function(){
if(this._content){
var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;
if("string"==typeof e)t.innerHTML=e;
else{
for(;
t.hasChildNodes();
)t.removeChild(t.firstChild);
t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){
if(this._map){
var t=this._map.latLngToLayerPoint(this._latlng),e=c.point(this.options.offset),n=this._getAnchor();
this._zoomAnimated?c.DomUtil.setPosition(this._container,t.add(n)):e=e.add(t).add(n);
var o=this._containerBottom=-e.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;
this._container.style.bottom=o+"px",this._container.style.left=i+"px"}},_getAnchor:function(){
return[0,0]}}),c.Popup=c.DivOverlay.extend({
options:{
maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,className:""},openOn:function(t){
return t.openPopup(this),this},onAdd:function(t){
c.DivOverlay.prototype.onAdd.call(this,t),t.fire("popupopen",{
popup:this}),this._source&&(this._source.fire("popupopen",{
popup:this},!0),this._source instanceof c.Path||this._source.on("preclick",c.DomEvent.stopPropagation))},onRemove:function(t){
c.DivOverlay.prototype.onRemove.call(this,t),t.fire("popupclose",{
popup:this}),this._source&&(this._source.fire("popupclose",{
popup:this},!0),this._source instanceof c.Path||this._source.off("preclick",c.DomEvent.stopPropagation))},getEvents:function(){
var t=c.DivOverlay.prototype.getEvents.call(this);
return("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){
this._map&&this._map.closePopup(this)},_initLayout:function(){
var t="leaflet-popup",e=this._container=c.DomUtil.create("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated");
if(this.options.closeButton){
var n=this._closeButton=c.DomUtil.create("a",t+"-close-button",e);
n.href="#close",n.innerHTML="&#215;
",c.DomEvent.on(n,"click",this._onCloseButtonClick,this)}var o=this._wrapper=c.DomUtil.create("div",t+"-content-wrapper",e);
this._contentNode=c.DomUtil.create("div",t+"-content",o),c.DomEvent.disableClickPropagation(o).disableScrollPropagation(this._contentNode).on(o,"contextmenu",c.DomEvent.stopPropagation),this._tipContainer=c.DomUtil.create("div",t+"-tip-container",e),this._tip=c.DomUtil.create("div",t+"-tip",this._tipContainer)},_updateLayout:function(){
var t=this._contentNode,e=t.style;
e.width="",e.whiteSpace="nowrap";
var n=t.offsetWidth;
n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),e.width=n+1+"px",e.whiteSpace="",e.height="";
var o=t.offsetHeight,i=this.options.maxHeight,r="leaflet-popup-scrolled";
i&&o>i?(e.height=i+"px",c.DomUtil.addClass(t,r)):c.DomUtil.removeClass(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){
var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),n=this._getAnchor();
c.DomUtil.setPosition(this._container,e.add(n))},_adjustPan:function(){
if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){
var t=this._map,e=parseInt(c.DomUtil.getStyle(this._container,"marginBottom"),10)||0,n=this._container.offsetHeight+e,o=this._containerWidth,i=new c.Point(this._containerLeft,-n-this._containerBottom);
i._add(c.DomUtil.getPosition(this._container));
var r=t.layerPointToContainerPoint(i),s=c.point(this.options.autoPanPadding),a=c.point(this.options.autoPanPaddingTopLeft||s),l=c.point(this.options.autoPanPaddingBottomRight||s),u=t.getSize(),d=0,h=0;
r.x+o+l.x>u.x&&(d=r.x+o-u.x+l.x),r.x-d-a.x<0&&(d=r.x-a.x),r.y+n+l.y>u.y&&(h=r.y+n-u.y+l.y),r.y-h-a.y<0&&(h=r.y-a.y),(d||h)&&t.fire("autopanstart").panBy([d,h])}},_onCloseButtonClick:function(t){
this._close(),c.DomEvent.stop(t)},_getAnchor:function(){
return c.point(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),c.popup=function(t,e){
return new c.Popup(t,e)},c.Map.mergeOptions({
closePopupOnClick:!0}),c.Map.include({
openPopup:function(t,e,n){
return t instanceof c.Popup||(t=new c.Popup(n).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){
return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),c.Layer.include({
bindPopup:function(t,e){
return t instanceof c.Popup?(c.setOptions(t,e),this._popup=t,t._source=this):(this._popup&&!e||(this._popup=new c.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({
click:this._openPopup,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){
return this._popup&&(this.off({
click:this._openPopup,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,e){
if(t instanceof c.Layer||(e=t,t=this),t instanceof c.FeatureGroup)for(var n in this._layers){
t=this._layers[n];
break}return e||(e=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,e)),this},closePopup:function(){
return this._popup&&this._popup._close(),this},togglePopup:function(t){
return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){
return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){
return this._popup&&this._popup.setContent(t),this},getPopup:function(){
return this._popup},_openPopup:function(t){
var e=t.layer||t.target;
if(this._popup&&this._map)return c.DomEvent.stop(t),e instanceof c.Path?void this.openPopup(t.layer||t.target,t.latlng):void(this._map.hasLayer(this._popup)&&this._popup._source===e?this.closePopup():this.openPopup(e,t.latlng))},_movePopup:function(t){
this._popup.setLatLng(t.latlng)}}),c.Tooltip=c.DivOverlay.extend({
options:{
pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){
c.DivOverlay.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{
tooltip:this}),this._source&&this._source.fire("tooltipopen",{
tooltip:this},!0)},onRemove:function(t){
c.DivOverlay.prototype.onRemove.call(this,t),t.fire("tooltipclose",{
tooltip:this}),this._source&&this._source.fire("tooltipclose",{
tooltip:this},!0)},getEvents:function(){
var t=c.DivOverlay.prototype.getEvents.call(this);
return c.Browser.touch&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){
this._map&&this._map.closeTooltip(this)},_initLayout:function(){
var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");
this._contentNode=this._container=c.DomUtil.create("div",t)},_updateLayout:function(){
},_adjustPan:function(){
},_setPosition:function(t){
var e=this._map,n=this._container,o=e.latLngToContainerPoint(e.getCenter()),i=e.layerPointToContainerPoint(t),r=this.options.direction,s=n.offsetWidth,a=n.offsetHeight,l=c.point(this.options.offset),u=this._getAnchor();
"top"===r?t=t.add(c.point(-s/2+l.x,-a+l.y+u.y,!0)):"bottom"===r?t=t.subtract(c.point(s/2-l.x,-l.y,!0)):"center"===r?t=t.subtract(c.point(s/2+l.x,a/2-u.y+l.y,!0)):"right"===r||"auto"===r&&i.x<o.x?(r="right",t=t.add(c.point(l.x+u.x,u.y-a/2+l.y,!0))):(r="left",t=t.subtract(c.point(s+u.x-l.x,a/2-u.y-l.y,!0))),c.DomUtil.removeClass(n,"leaflet-tooltip-right"),c.DomUtil.removeClass(n,"leaflet-tooltip-left"),c.DomUtil.removeClass(n,"leaflet-tooltip-top"),c.DomUtil.removeClass(n,"leaflet-tooltip-bottom"),c.DomUtil.addClass(n,"leaflet-tooltip-"+r),c.DomUtil.setPosition(n,t)},_updatePosition:function(){
var t=this._map.latLngToLayerPoint(this._latlng);
this._setPosition(t)},setOpacity:function(t){
this.options.opacity=t,this._container&&c.DomUtil.setOpacity(this._container,t)},_animateZoom:function(t){
var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);
this._setPosition(e)},_getAnchor:function(){
return c.point(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),c.tooltip=function(t,e){
return new c.Tooltip(t,e)},c.Map.include({
openTooltip:function(t,e,n){
return t instanceof c.Tooltip||(t=new c.Tooltip(n).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){
return t&&this.removeLayer(t),this}}),c.Layer.include({
bindTooltip:function(t,e){
return t instanceof c.Tooltip?(c.setOptions(t,e),this._tooltip=t,t._source=this):(this._tooltip&&!e||(this._tooltip=c.tooltip(e,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){
return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){
if(t||!this._tooltipHandlersAdded){
var e=t?"off":"on",n={
remove:this.closeTooltip,move:this._moveTooltip};
this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),c.Browser.touch&&(n.click=this._openTooltip)),this[e](n),this._tooltipHandlersAdded=!t}},openTooltip:function(t,e){
if(t instanceof c.Layer||(e=t,t=this),t instanceof c.FeatureGroup)for(var n in this._layers){
t=this._layers[n];
break}return e||(e=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,e),this._tooltip.options.interactive&&this._tooltip._container&&(c.DomUtil.addClass(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){
return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(c.DomUtil.removeClass(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){
return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){
return this._tooltip.isOpen()},setTooltipContent:function(t){
return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){
return this._tooltip},_openTooltip:function(t){
var e=t.layer||t.target;
this._tooltip&&this._map&&this.openTooltip(e,this._tooltip.options.sticky?t.latlng:a)},_moveTooltip:function(t){
var e,n,o=t.latlng;
this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(e),o=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(o)}}),c.LayerGroup=c.Layer.extend({
initialize:function(t){
var e,n;
if(this._layers={
},t)for(e=0,n=t.length;
e<n;
e++)this.addLayer(t[e])},addLayer:function(t){
var e=this.getLayerId(t);
return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){
var e=t in this._layers?t:this.getLayerId(t);
return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){
return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){
for(var t in this._layers)this.removeLayer(this._layers[t]);
return this},invoke:function(t){
var e,n,o=Array.prototype.slice.call(arguments,1);
for(e in this._layers)(n=this._layers[e])[t]&&n[t].apply(n,o);
return this},onAdd:function(t){
for(var e in this._layers)t.addLayer(this._layers[e])},onRemove:function(t){
for(var e in this._layers)t.removeLayer(this._layers[e])},eachLayer:function(t,e){
for(var n in this._layers)t.call(e,this._layers[n]);
return this},getLayer:function(t){
return this._layers[t]},getLayers:function(){
var t=[];
for(var e in this._layers)t.push(this._layers[e]);
return t},setZIndex:function(t){
return this.invoke("setZIndex",t)},getLayerId:function(t){
return c.stamp(t)}}),c.layerGroup=function(t){
return new c.LayerGroup(t)},c.FeatureGroup=c.LayerGroup.extend({
addLayer:function(t){
return this.hasLayer(t)?this:(t.addEventParent(this),c.LayerGroup.prototype.addLayer.call(this,t),this.fire("layeradd",{
layer:t}))},removeLayer:function(t){
return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),c.LayerGroup.prototype.removeLayer.call(this,t),this.fire("layerremove",{
layer:t})):this},setStyle:function(t){
return this.invoke("setStyle",t)},bringToFront:function(){
return this.invoke("bringToFront")},bringToBack:function(){
return this.invoke("bringToBack")},getBounds:function(){
var t=new c.LatLngBounds;
for(var e in this._layers){
var n=this._layers[e];
t.extend(n.getBounds?n.getBounds():n.getLatLng())}return t}}),c.featureGroup=function(t){
return new c.FeatureGroup(t)},c.Renderer=c.Layer.extend({
options:{
padding:.1},initialize:function(t){
c.setOptions(this,t),c.stamp(this),this._layers=this._layers||{
}},onAdd:function(){
this._container||(this._initContainer(),this._zoomAnimated&&c.DomUtil.addClass(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){
c.DomUtil.remove(this._container),this.off("update",this._updatePaths,this)},getEvents:function(){
var t={
viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};
return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){
this._updateTransform(t.center,t.zoom)},_onZoom:function(){
this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){
var n=this._map.getZoomScale(e,this._zoom),o=c.DomUtil.getPosition(this._container),i=this._map.getSize().multiplyBy(.5+this.options.padding),r=this._map.project(this._center,e),s=this._map.project(t,e).subtract(r),a=i.multiplyBy(-n).add(o).add(i).subtract(s);
c.Browser.any3d?c.DomUtil.setTransform(this._container,a,n):c.DomUtil.setPosition(this._container,a)},_reset:function(){
for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){
for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){
for(var t in this._layers)this._layers[t]._update()},_update:function(){
var t=this.options.padding,e=this._map.getSize(),n=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
this._bounds=new c.Bounds(n,n.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),c.Map.include({
getRenderer:function(t){
var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;
return e||(e=this._renderer=this.options.preferCanvas&&c.canvas()||c.svg()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){
if("overlayPane"===t||t===a)return!1;
var e=this._paneRenderers[t];
return e===a&&(e=c.SVG&&c.svg({
pane:t})||c.Canvas&&c.canvas({
pane:t}),this._paneRenderers[t]=e),e}}),c.Path=c.Layer.extend({
options:{
stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0},beforeAdd:function(t){
this._renderer=t.getRenderer(this)},onAdd:function(){
this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){
this._renderer._removePath(this)},redraw:function(){
return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){
return c.setOptions(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){
return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){
return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){
return this._path},_reset:function(){
this._project(),this._update()},_clickTolerance:function(){
return(this.options.stroke?this.options.weight/2:0)+(c.Browser.touch?10:0)}}),c.LineUtil={
simplify:function(t,e){
if(!e||!t.length)return t.slice();
var n=e*e;
return t=this._reducePoints(t,n),this._simplifyDP(t,n)},pointToSegmentDistance:function(t,e,n){
return Math.sqrt(this._sqClosestPointOnSegment(t,e,n,!0))},closestPointOnSegment:function(t,e,n){
return this._sqClosestPointOnSegment(t,e,n)},_simplifyDP:function(t,e){
var n=t.length,o=new(typeof Uint8Array!=a+""?Uint8Array:Array)(n);
o[0]=o[n-1]=1,this._simplifyDPStep(t,o,e,0,n-1);
var i,r=[];
for(i=0;
i<n;
i++)o[i]&&r.push(t[i]);
return r},_simplifyDPStep:function(t,e,n,o,i){
var r,s,a,c=0;
for(s=o+1;
s<=i-1;
s++)(a=this._sqClosestPointOnSegment(t[s],t[o],t[i],!0))>c&&(r=s,c=a);
c>n&&(e[r]=1,this._simplifyDPStep(t,e,n,o,r),this._simplifyDPStep(t,e,n,r,i))},_reducePoints:function(t,e){
for(var n=[t[0]],o=1,i=0,r=t.length;
o<r;
o++)this._sqDist(t[o],t[i])>e&&(n.push(t[o]),i=o);
return i<r-1&&n.push(t[r-1]),n},clipSegment:function(t,e,n,o,i){
var r,s,a,c=o?this._lastCode:this._getBitCode(t,n),l=this._getBitCode(e,n);
for(this._lastCode=l;
;
){
if(!(c|l))return[t,e];
if(c&l)return!1;
r=c||l,s=this._getEdgeIntersection(t,e,r,n,i),a=this._getBitCode(s,n),r===c?(t=s,c=a):(e=s,l=a)}},_getEdgeIntersection:function(t,e,n,o,i){
var r,s,a=e.x-t.x,l=e.y-t.y,u=o.min,d=o.max;
return 8&n?(r=t.x+a*(d.y-t.y)/l,s=d.y):4&n?(r=t.x+a*(u.y-t.y)/l,s=u.y):2&n?(r=d.x,s=t.y+l*(d.x-t.x)/a):1&n&&(r=u.x,s=t.y+l*(u.x-t.x)/a),new c.Point(r,s,i)},_getBitCode:function(t,e){
var n=0;
return t.x<e.min.x?n|=1:t.x>e.max.x&&(n|=2),t.y<e.min.y?n|=4:t.y>e.max.y&&(n|=8),n},_sqDist:function(t,e){
var n=e.x-t.x,o=e.y-t.y;
return n*n+o*o},_sqClosestPointOnSegment:function(t,e,n,o){
var i,r=e.x,s=e.y,a=n.x-r,l=n.y-s,u=a*a+l*l;
return u>0&&((i=((t.x-r)*a+(t.y-s)*l)/u)>1?(r=n.x,s=n.y):i>0&&(r+=a*i,s+=l*i)),a=t.x-r,l=t.y-s,o?a*a+l*l:new c.Point(r,s)}},c.Polyline=c.Path.extend({
options:{
smoothFactor:1,noClip:!1},initialize:function(t,e){
c.setOptions(this,e),this._setLatLngs(t)},getLatLngs:function(){
return this._latlngs},setLatLngs:function(t){
return this._setLatLngs(t),this.redraw()},isEmpty:function(){
return!this._latlngs.length},closestLayerPoint:function(t){
for(var e,n,o=1/0,i=null,r=c.LineUtil._sqClosestPointOnSegment,s=0,a=this._parts.length;
s<a;
s++)for(var l=this._parts[s],u=1,d=l.length;
u<d;
u++){
var h=r(t,e=l[u-1],n=l[u],!0);
h<o&&(o=h,i=r(t,e,n))}return i&&(i.distance=Math.sqrt(o)),i},getCenter:function(){
if(!this._map)throw new Error("Must add layer to map before using getCenter()");
var t,e,n,o,i,r,s,a=this._rings[0],c=a.length;
if(!c)return null;
for(t=0,e=0;
t<c-1;
t++)e+=a[t].distanceTo(a[t+1])/2;
if(0===e)return this._map.layerPointToLatLng(a[0]);
for(t=0,o=0;
t<c-1;
t++)if(i=a[t],r=a[t+1],(o+=n=i.distanceTo(r))>e)return s=(o-e)/n,this._map.layerPointToLatLng([r.x-s*(r.x-i.x),r.y-s*(r.y-i.y)])},getBounds:function(){
return this._bounds},addLatLng:function(t,e){
return e=e||this._defaultShape(),t=c.latLng(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){
this._bounds=new c.LatLngBounds,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){
return c.Polyline._flat(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){
for(var e=[],n=c.Polyline._flat(t),o=0,i=t.length;
o<i;
o++)n?(e[o]=c.latLng(t[o]),this._bounds.extend(e[o])):e[o]=this._convertLatLngs(t[o]);
return e},_project:function(){
var t=new c.Bounds;
this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);
var e=this._clickTolerance(),n=new c.Point(e,e);
this._bounds.isValid()&&t.isValid()&&(t.min._subtract(n),t.max._add(n),this._pxBounds=t)},_projectLatlngs:function(t,e,n){
var o,i,r=t[0]instanceof c.LatLng,s=t.length;
if(r){
for(i=[],o=0;
o<s;
o++)i[o]=this._map.latLngToLayerPoint(t[o]),n.extend(i[o]);
e.push(i)}else for(o=0;
o<s;
o++)this._projectLatlngs(t[o],e,n)},_clipPoints:function(){
var t=this._renderer._bounds;
if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){
if(this.options.noClip)return void(this._parts=this._rings);
var e,n,o,i,r,s,a,l=this._parts;
for(e=0,o=0,i=this._rings.length;
e<i;
e++)for(n=0,r=(a=this._rings[e]).length;
n<r-1;
n++)(s=c.LineUtil.clipSegment(a[n],a[n+1],t,n,!0))&&(l[o]=l[o]||[],l[o].push(s[0]),s[1]===a[n+1]&&n!==r-2||(l[o].push(s[1]),o++))}},_simplifyPoints:function(){
for(var t=this._parts,e=this.options.smoothFactor,n=0,o=t.length;
n<o;
n++)t[n]=c.LineUtil.simplify(t[n],e)},_update:function(){
this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){
this._renderer._updatePoly(this)}}),c.polyline=function(t,e){
return new c.Polyline(t,e)},c.Polyline._flat=function(t){
return!c.Util.isArray(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]},c.PolyUtil={
},c.PolyUtil.clipPolygon=function(t,e,n){
var o,i,r,s,a,l,u,d,h,p=[1,4,2,8],f=c.LineUtil;
for(i=0,u=t.length;
i<u;
i++)t[i]._code=f._getBitCode(t[i],e);
for(s=0;
s<4;
s++){
for(d=p[s],o=[],i=0,r=(u=t.length)-1;
i<u;
r=i++)a=t[i],l=t[r],a._code&d?l._code&d||((h=f._getEdgeIntersection(l,a,d,e,n))._code=f._getBitCode(h,e),o.push(h)):(l._code&d&&((h=f._getEdgeIntersection(l,a,d,e,n))._code=f._getBitCode(h,e),o.push(h)),o.push(a));
t=o}return t},c.Polygon=c.Polyline.extend({
options:{
fill:!0},isEmpty:function(){
return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){
if(!this._map)throw new Error("Must add layer to map before using getCenter()");
var t,e,n,o,i,r,s,a,c,l=this._rings[0],u=l.length;
if(!u)return null;
for(r=s=a=0,t=0,e=u-1;
t<u;
e=t++)n=l[t],o=l[e],i=n.y*o.x-o.y*n.x,s+=(n.x+o.x)*i,a+=(n.y+o.y)*i,r+=3*i;
return c=0===r?l[0]:[s/r,a/r],this._map.layerPointToLatLng(c)},_convertLatLngs:function(t){
var e=c.Polyline.prototype._convertLatLngs.call(this,t),n=e.length;
return n>=2&&e[0]instanceof c.LatLng&&e[0].equals(e[n-1])&&e.pop(),e},_setLatLngs:function(t){
c.Polyline.prototype._setLatLngs.call(this,t),c.Polyline._flat(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){
return c.Polyline._flat(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){
var t=this._renderer._bounds,e=this.options.weight,n=new c.Point(e,e);
if(t=new c.Bounds(t.min.subtract(n),t.max.add(n)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){
if(this.options.noClip)return void(this._parts=this._rings);
for(var o,i=0,r=this._rings.length;
i<r;
i++)(o=c.PolyUtil.clipPolygon(this._rings[i],t,!0)).length&&this._parts.push(o)}},_updatePath:function(){
this._renderer._updatePoly(this,!0)}}),c.polygon=function(t,e){
return new c.Polygon(t,e)},c.Rectangle=c.Polygon.extend({
initialize:function(t,e){
c.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){
return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){
return[(t=c.latLngBounds(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),c.rectangle=function(t,e){
return new c.Rectangle(t,e)},c.CircleMarker=c.Path.extend({
options:{
fill:!0,radius:10},initialize:function(t,e){
c.setOptions(this,e),this._latlng=c.latLng(t),this._radius=this.options.radius},setLatLng:function(t){
return this._latlng=c.latLng(t),this.redraw(),this.fire("move",{
latlng:this._latlng})},getLatLng:function(){
return this._latlng},setRadius:function(t){
return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){
return this._radius},setStyle:function(t){
var e=t&&t.radius||this._radius;
return c.Path.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){
this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){
var t=this._radius,e=this._radiusY||t,n=this._clickTolerance(),o=[t+n,e+n];
this._pxBounds=new c.Bounds(this._point.subtract(o),this._point.add(o))},_update:function(){
this._map&&this._updatePath()},_updatePath:function(){
this._renderer._updateCircle(this)},_empty:function(){
return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)}}),c.circleMarker=function(t,e){
return new c.CircleMarker(t,e)},c.Circle=c.CircleMarker.extend({
initialize:function(t,e,n){
if("number"==typeof e&&(e=c.extend({
},n,{
radius:e})),c.setOptions(this,e),this._latlng=c.latLng(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");
this._mRadius=this.options.radius},setRadius:function(t){
return this._mRadius=t,this.redraw()},getRadius:function(){
return this._mRadius},getBounds:function(){
var t=[this._radius,this._radiusY||this._radius];
return new c.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:c.Path.prototype.setStyle,_project:function(){
var t=this._latlng.lng,e=this._latlng.lat,n=this._map,o=n.options.crs;
if(o.distance===c.CRS.Earth.distance){
var i=Math.PI/180,r=this._mRadius/c.CRS.Earth.R/i,s=n.project([e+r,t]),a=n.project([e-r,t]),l=s.add(a).divideBy(2),u=n.unproject(l).lat,d=Math.acos((Math.cos(r*i)-Math.sin(e*i)*Math.sin(u*i))/(Math.cos(e*i)*Math.cos(u*i)))/i;
(isNaN(d)||0===d)&&(d=r/Math.cos(Math.PI/180*e)),this._point=l.subtract(n.getPixelOrigin()),this._radius=isNaN(d)?0:Math.max(Math.round(l.x-n.project([u,t-d]).x),1),this._radiusY=Math.max(Math.round(l.y-s.y),1)}else{
var h=o.unproject(o.project(this._latlng).subtract([this._mRadius,0]));
this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(h).x}this._updateBounds()}}),c.circle=function(t,e,n){
return new c.Circle(t,e,n)},c.SVG=c.Renderer.extend({
getEvents:function(){
var t=c.Renderer.prototype.getEvents.call(this);
return t.zoomstart=this._onZoomStart,t},_initContainer:function(){
this._container=c.SVG.create("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=c.SVG.create("g"),this._container.appendChild(this._rootGroup)},_onZoomStart:function(){
this._update()},_update:function(){
if(!this._map._animatingZoom||!this._bounds){
c.Renderer.prototype._update.call(this);
var t=this._bounds,e=t.getSize(),n=this._container;
this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,n.setAttribute("width",e.x),n.setAttribute("height",e.y)),c.DomUtil.setPosition(n,t.min),n.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){
var e=t._path=c.SVG.create("path");
t.options.className&&c.DomUtil.addClass(e,t.options.className),t.options.interactive&&c.DomUtil.addClass(e,"leaflet-interactive"),this._updateStyle(t),this._layers[c.stamp(t)]=t},_addPath:function(t){
this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){
c.DomUtil.remove(t._path),t.removeInteractiveTarget(t._path),delete this._layers[c.stamp(t)]},_updatePath:function(t){
t._project(),t._update()},_updateStyle:function(t){
var e=t._path,n=t.options;
e&&(n.stroke?(e.setAttribute("stroke",n.color),e.setAttribute("stroke-opacity",n.opacity),e.setAttribute("stroke-width",n.weight),e.setAttribute("stroke-linecap",n.lineCap),e.setAttribute("stroke-linejoin",n.lineJoin),n.dashArray?e.setAttribute("stroke-dasharray",n.dashArray):e.removeAttribute("stroke-dasharray"),n.dashOffset?e.setAttribute("stroke-dashoffset",n.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),n.fill?(e.setAttribute("fill",n.fillColor||n.color),e.setAttribute("fill-opacity",n.fillOpacity),e.setAttribute("fill-rule",n.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){
this._setPath(t,c.SVG.pointsToPath(t._parts,e))},_updateCircle:function(t){
var e=t._point,n=t._radius,o="a"+n+","+(t._radiusY||n)+" 0 1,0 ",i=t._empty()?"M0 0":"M"+(e.x-n)+","+e.y+o+2*n+",0 "+o+2*-n+",0 ";
this._setPath(t,i)},_setPath:function(t,e){
t._path.setAttribute("d",e)},_bringToFront:function(t){
c.DomUtil.toFront(t._path)},_bringToBack:function(t){
c.DomUtil.toBack(t._path)}}),c.extend(c.SVG,{
create:function(t){
return s.createElementNS("http://www.w3.org/2000/svg",t)},pointsToPath:function(t,e){
var n,o,i,r,s,a,l="";
for(n=0,i=t.length;
n<i;
n++){
for(o=0,r=(s=t[n]).length;
o<r;
o++)l+=(o?"L":"M")+(a=s[o]).x+" "+a.y;
l+=e?c.Browser.svg?"z":"x":""}return l||"M0 0"}}),c.Browser.svg=!(!s.createElementNS||!c.SVG.create("svg").createSVGRect),c.svg=function(t){
return c.Browser.svg||c.Browser.vml?new c.SVG(t):null},c.Browser.vml=!c.Browser.svg&&function(){
try{
var t=s.createElement("div");
t.innerHTML='<v:shape adj="1"/>';
var e=t.firstChild;
return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){
return!1}}(),c.SVG.include(c.Browser.vml?{
_initContainer:function(){
this._container=c.DomUtil.create("div","leaflet-vml-container")},_update:function(){
this._map._animatingZoom||(c.Renderer.prototype._update.call(this),this.fire("update"))},_initPath:function(t){
var e=t._container=c.SVG.create("shape");
c.DomUtil.addClass(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=c.SVG.create("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[c.stamp(t)]=t},_addPath:function(t){
var e=t._container;
this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){
var e=t._container;
c.DomUtil.remove(e),t.removeInteractiveTarget(e),delete this._layers[c.stamp(t)]},_updateStyle:function(t){
var e=t._stroke,n=t._fill,o=t.options,i=t._container;
i.stroked=!!o.stroke,i.filled=!!o.fill,o.stroke?(e||(e=t._stroke=c.SVG.create("stroke")),i.appendChild(e),e.weight=o.weight+"px",e.color=o.color,e.opacity=o.opacity,o.dashArray?e.dashStyle=c.Util.isArray(o.dashArray)?o.dashArray.join(" "):o.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=o.lineCap.replace("butt","flat"),e.joinstyle=o.lineJoin):e&&(i.removeChild(e),t._stroke=null),o.fill?(n||(n=t._fill=c.SVG.create("fill")),i.appendChild(n),n.color=o.fillColor||o.color,n.opacity=o.fillOpacity):n&&(i.removeChild(n),t._fill=null)},_updateCircle:function(t){
var e=t._point.round(),n=Math.round(t._radius),o=Math.round(t._radiusY||n);
this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+n+","+o+" 0,23592600")},_setPath:function(t,e){
t._path.v=e},_bringToFront:function(t){
c.DomUtil.toFront(t._container)},_bringToBack:function(t){
c.DomUtil.toBack(t._container)}}:{
}),c.Browser.vml&&(c.SVG.create=function(){
try{
return s.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){
return s.createElement("<lvml:"+t+' class="lvml">')}}catch(t){
return function(t){
return s.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}()),c.Canvas=c.Renderer.extend({
getEvents:function(){
var t=c.Renderer.prototype.getEvents.call(this);
return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){
this._postponeUpdatePaths=!0},onAdd:function(){
c.Renderer.prototype.onAdd.call(this),this._draw()},_initContainer:function(){
var t=this._container=s.createElement("canvas");
c.DomEvent.on(t,"mousemove",c.Util.throttle(this._onMouseMove,32,this),this).on(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this).on(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_updatePaths:function(){
if(!this._postponeUpdatePaths){
for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();
this._redraw()}},_update:function(){
if(!this._map._animatingZoom||!this._bounds){
this._drawnLayers={
},c.Renderer.prototype._update.call(this);
var t=this._bounds,e=this._container,n=t.getSize(),o=c.Browser.retina?2:1;
c.DomUtil.setPosition(e,t.min),e.width=o*n.x,e.height=o*n.y,e.style.width=n.x+"px",e.style.height=n.y+"px",c.Browser.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){
c.Renderer.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){
this._updateDashArray(t),this._layers[c.stamp(t)]=t;
var e=t._order={
layer:t,prev:this._drawLast,next:null};
this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){
this._requestRedraw(t)},_removePath:function(t){
var e=t._order,n=e.next,o=e.prev;
n?n.prev=o:this._drawLast=o,o?o.next=n:this._drawFirst=n,delete t._order,delete this._layers[c.stamp(t)],this._requestRedraw(t)},_updatePath:function(t){
this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){
this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){
if(t.options.dashArray){
var e,n=t.options.dashArray.split(","),o=[];
for(e=0;
e<n.length;
e++)o.push(Number(n[e]));
t.options._dashArray=o}},_requestRedraw:function(t){
this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||c.Util.requestAnimFrame(this._redraw,this))},_extendRedrawBounds:function(t){
var e=(t.options.weight||0)+1;
this._redrawBounds=this._redrawBounds||new c.Bounds,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))},_redraw:function(){
this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){
var t=this._redrawBounds;
if(t){
var e=t.getSize();
this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){
var t,e=this._redrawBounds;
if(this._ctx.save(),e){
var n=e.getSize();
this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;
for(var o=this._drawFirst;
o;
o=o.next)t=o.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();
this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){
if(this._drawing){
var n,o,i,r,s=t._parts,a=s.length,c=this._ctx;
if(a){
for(this._drawnLayers[t._leaflet_id]=t,c.beginPath(),c.setLineDash&&c.setLineDash(t.options&&t.options._dashArray||[]),n=0;
n<a;
n++){
for(o=0,i=s[n].length;
o<i;
o++)r=s[n][o],c[o?"lineTo":"moveTo"](r.x,r.y);
e&&c.closePath()}this._fillStroke(c,t)}}},_updateCircle:function(t){
if(this._drawing&&!t._empty()){
var e=t._point,n=this._ctx,o=t._radius,i=(t._radiusY||o)/o;
this._drawnLayers[t._leaflet_id]=t,1!==i&&(n.save(),n.scale(1,i)),n.beginPath(),n.arc(e.x,e.y/i,o,0,2*Math.PI,!1),1!==i&&n.restore(),this._fillStroke(n,t)}},_fillStroke:function(t,e){
var n=e.options;
n.fill&&(t.globalAlpha=n.fillOpacity,t.fillStyle=n.fillColor||n.color,t.fill(n.fillRule||"evenodd")),n.stroke&&0!==n.weight&&(t.globalAlpha=n.opacity,t.lineWidth=n.weight,t.strokeStyle=n.color,t.lineCap=n.lineCap,t.lineJoin=n.lineJoin,t.stroke())},_onClick:function(t){
for(var e,n,o=this._map.mouseEventToLayerPoint(t),i=this._drawFirst;
i;
i=i.next)(e=i.layer).options.interactive&&e._containsPoint(o)&&!this._map._draggableMoved(e)&&(n=e);
n&&(c.DomEvent._fakeStop(t),this._fireEvent([n],t))},_onMouseMove:function(t){
if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){
var e=this._map.mouseEventToLayerPoint(t);
this._handleMouseHover(t,e)}},_handleMouseOut:function(t){
var e=this._hoveredLayer;
e&&(c.DomUtil.removeClass(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,e){
for(var n,o,i=this._drawFirst;
i;
i=i.next)(n=i.layer).options.interactive&&n._containsPoint(e)&&(o=n);
o!==this._hoveredLayer&&(this._handleMouseOut(t),o&&(c.DomUtil.addClass(this._container,"leaflet-interactive"),this._fireEvent([o],t,"mouseover"),this._hoveredLayer=o)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,e,n){
this._map._fireDOMEvent(e,n||e.type,t)},_bringToFront:function(t){
var e=t._order,n=e.next,o=e.prev;
n&&(n.prev=o,o?o.next=n:n&&(this._drawFirst=n),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t))},_bringToBack:function(t){
var e=t._order,n=e.next,o=e.prev;
o&&(o.next=n,n?n.prev=o:o&&(this._drawLast=o),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t))}}),c.Browser.canvas=!!s.createElement("canvas").getContext,c.canvas=function(t){
return c.Browser.canvas?new c.Canvas(t):null},c.Polyline.prototype._containsPoint=function(t,e){
var n,o,i,r,s,a,l=this._clickTolerance();
if(!this._pxBounds.contains(t))return!1;
for(n=0,r=this._parts.length;
n<r;
n++)for(o=0,i=(s=(a=this._parts[n]).length)-1;
o<s;
i=o++)if((e||0!==o)&&c.LineUtil.pointToSegmentDistance(t,a[i],a[o])<=l)return!0;
return!1},c.Polygon.prototype._containsPoint=function(t){
var e,n,o,i,r,s,a,l,u=!1;
if(!this._pxBounds.contains(t))return!1;
for(i=0,a=this._parts.length;
i<a;
i++)for(r=0,s=(l=(e=this._parts[i]).length)-1;
r<l;
s=r++)n=e[r],o=e[s],n.y>t.y!=o.y>t.y&&t.x<(o.x-n.x)*(t.y-n.y)/(o.y-n.y)+n.x&&(u=!u);
return u||c.Polyline.prototype._containsPoint.call(this,t,!0)},c.CircleMarker.prototype._containsPoint=function(t){
return t.distanceTo(this._point)<=this._radius+this._clickTolerance()},c.GeoJSON=c.FeatureGroup.extend({
initialize:function(t,e){
c.setOptions(this,e),this._layers={
},t&&this.addData(t)},addData:function(t){
var e,n,o,i=c.Util.isArray(t)?t:t.features;
if(i){
for(e=0,n=i.length;
e<n;
e++)((o=i[e]).geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);
return this}var r=this.options;
if(r.filter&&!r.filter(t))return this;
var s=c.GeoJSON.geometryToLayer(t,r);
return s?(s.feature=c.GeoJSON.asFeature(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){
return t.options=c.Util.extend({
},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){
return this.eachLayer(function(e){
this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){
"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),c.extend(c.GeoJSON,{
geometryToLayer:function(t,e){
var n,o,i,r,s="Feature"===t.type?t.geometry:t,a=s?s.coordinates:null,l=[],u=e&&e.pointToLayer,d=e&&e.coordsToLatLng||this.coordsToLatLng;
if(!a&&!s)return null;
switch(s.type){
case"Point":return n=d(a),u?u(t,n):new c.Marker(n);
case"MultiPoint":for(i=0,r=a.length;
i<r;
i++)n=d(a[i]),l.push(u?u(t,n):new c.Marker(n));
return new c.FeatureGroup(l);
case"LineString":case"MultiLineString":return o=this.coordsToLatLngs(a,"LineString"===s.type?0:1,d),new c.Polyline(o,e);
case"Polygon":case"MultiPolygon":return o=this.coordsToLatLngs(a,"Polygon"===s.type?1:2,d),new c.Polygon(o,e);
case"GeometryCollection":for(i=0,r=s.geometries.length;
i<r;
i++){
var h=this.geometryToLayer({
geometry:s.geometries[i],type:"Feature",properties:t.properties},e);
h&&l.push(h)}return new c.FeatureGroup(l);
default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){
return new c.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,n){
for(var o,i=[],r=0,s=t.length;
r<s;
r++)o=e?this.coordsToLatLngs(t[r],e-1,n):(n||this.coordsToLatLng)(t[r]),i.push(o);
return i},latLngToCoords:function(t){
return t.alt!==a?[t.lng,t.lat,t.alt]:[t.lng,t.lat]},latLngsToCoords:function(t,e,n){
for(var o=[],i=0,r=t.length;
i<r;
i++)o.push(e?c.GeoJSON.latLngsToCoords(t[i],e-1,n):c.GeoJSON.latLngToCoords(t[i]));
return!e&&n&&o.push(o[0]),o},getFeature:function(t,e){
return t.feature?c.extend({
},t.feature,{
geometry:e}):c.GeoJSON.asFeature(e)},asFeature:function(t){
return"Feature"===t.type||"FeatureCollection"===t.type?t:{
type:"Feature",properties:{
},geometry:t}}});
var d={
toGeoJSON:function(){
return c.GeoJSON.getFeature(this,{
type:"Point",coordinates:c.GeoJSON.latLngToCoords(this.getLatLng())})}};
c.Marker.include(d),c.Circle.include(d),c.CircleMarker.include(d),c.Polyline.prototype.toGeoJSON=function(){
var t=!c.Polyline._flat(this._latlngs),e=c.GeoJSON.latLngsToCoords(this._latlngs,t?1:0);
return c.GeoJSON.getFeature(this,{
type:(t?"Multi":"")+"LineString",coordinates:e})},c.Polygon.prototype.toGeoJSON=function(){
var t=!c.Polyline._flat(this._latlngs),e=t&&!c.Polyline._flat(this._latlngs[0]),n=c.GeoJSON.latLngsToCoords(this._latlngs,e?2:t?1:0,!0);
return t||(n=[n]),c.GeoJSON.getFeature(this,{
type:(e?"Multi":"")+"Polygon",coordinates:n})},c.LayerGroup.include({
toMultiPoint:function(){
var t=[];
return this.eachLayer(function(e){
t.push(e.toGeoJSON().geometry.coordinates)}),c.GeoJSON.getFeature(this,{
type:"MultiPoint",coordinates:t})},toGeoJSON:function(){
var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;
if("MultiPoint"===t)return this.toMultiPoint();
var e="GeometryCollection"===t,n=[];
return this.eachLayer(function(t){
if(t.toGeoJSON){
var o=t.toGeoJSON();
n.push(e?o.geometry:c.GeoJSON.asFeature(o))}}),e?c.GeoJSON.getFeature(this,{
geometries:n,type:"GeometryCollection"}):{
type:"FeatureCollection",features:n}}}),c.geoJSON=function(t,e){
return new c.GeoJSON(t,e)},c.geoJson=c.geoJSON,c.Draggable=c.Evented.extend({
options:{
clickTolerance:3},statics:{
START:c.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{
mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{
mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e,n){
this._element=t,this._dragStartTarget=e||t,this._preventOutline=n},enable:function(){
this._enabled||(c.DomEvent.on(this._dragStartTarget,c.Draggable.START.join(" "),this._onDown,this),this._enabled=!0)},disable:function(){
this._enabled&&(c.Draggable._dragging===this&&this.finishDrag(),c.DomEvent.off(this._dragStartTarget,c.Draggable.START.join(" "),this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){
if(!t._simulated&&this._enabled&&(this._moved=!1,!c.DomUtil.hasClass(this._element,"leaflet-zoom-anim")&&!(c.Draggable._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(c.Draggable._dragging=this,this._preventOutline&&c.DomUtil.preventOutline(this._element),c.DomUtil.disableImageDrag(),c.DomUtil.disableTextSelection(),this._moving)))){
this.fire("down");
var e=t.touches?t.touches[0]:t;
this._startPoint=new c.Point(e.clientX,e.clientY),c.DomEvent.on(s,c.Draggable.MOVE[t.type],this._onMove,this).on(s,c.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){
if(!t._simulated&&this._enabled){
if(t.touches&&t.touches.length>1)return void(this._moved=!0);
var e=t.touches&&1===t.touches.length?t.touches[0]:t,n=new c.Point(e.clientX,e.clientY).subtract(this._startPoint);
(n.x||n.y)&&(Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(c.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=c.DomUtil.getPosition(this._element).subtract(n),c.DomUtil.addClass(s.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,r.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),c.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(n),this._moving=!0,c.Util.cancelAnimFrame(this._animRequest),this._lastEvent=t,this._animRequest=c.Util.requestAnimFrame(this._updatePosition,this,!0)))}},_updatePosition:function(){
var t={
originalEvent:this._lastEvent};
this.fire("predrag",t),c.DomUtil.setPosition(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){
!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){
for(var t in c.DomUtil.removeClass(s.body,"leaflet-dragging"),this._lastTarget&&(c.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),c.Draggable.MOVE)c.DomEvent.off(s,c.Draggable.MOVE[t],this._onMove,this).off(s,c.Draggable.END[t],this._onUp,this);
c.DomUtil.enableImageDrag(),c.DomUtil.enableTextSelection(),this._moved&&this._moving&&(c.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{
distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,c.Draggable._dragging=!1}}),c.Handler=c.Class.extend({
initialize:function(t){
this._map=t},enable:function(){
return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){
return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){
return!!this._enabled}}),c.Map.mergeOptions({
dragging:!0,inertia:!c.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0}),c.Map.Drag=c.Handler.extend({
addHooks:function(){
if(!this._draggable){
var t=this._map;
this._draggable=new c.Draggable(t._mapPane,t._container),this._draggable.on({
down:this._onDown,dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}c.DomUtil.addClass(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){
c.DomUtil.removeClass(this._map._container,"leaflet-grab"),c.DomUtil.removeClass(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){
return this._draggable&&this._draggable._moved},moving:function(){
return this._draggable&&this._draggable._moving},_onDown:function(){
this._map._stop()},_onDragStart:function(){
var t=this._map;
if(this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){
var e=c.latLngBounds(this._map.options.maxBounds);
this._offsetLimit=c.bounds(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;
t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){
if(this._map.options.inertia){
var e=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;
this._positions.push(n),this._times.push(e),e-this._times[0]>50&&(this._positions.shift(),this._times.shift())}this._map.fire("move",t).fire("drag",t)},_onZoomEnd:function(){
var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);
this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){
return t-(t-e)*this._viscosity},_onPreDragLimit:function(){
if(this._viscosity&&this._offsetLimit){
var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;
t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){
var t=this._worldWidth,e=Math.round(t/2),n=this._initialWorldOffset,o=this._draggable._newPos.x,i=(o-e+n)%t+e-n,r=(o+e+n)%t-e-n,s=Math.abs(i+n)<Math.abs(r+n)?i:r;
this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=s},_onDragEnd:function(t){
var e=this._map,n=e.options,o=!n.inertia||this._times.length<2;
if(e.fire("dragend",t),o)e.fire("moveend");
else{
var i=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,s=n.easeLinearity,a=i.multiplyBy(s/r),l=a.distanceTo([0,0]),u=Math.min(n.inertiaMaxSpeed,l),d=a.multiplyBy(u/l),h=u/(n.inertiaDeceleration*s),p=d.multiplyBy(-h/2).round();
p.x||p.y?(p=e._limitOffset(p,e.options.maxBounds),c.Util.requestAnimFrame(function(){
e.panBy(p,{
duration:h,easeLinearity:s,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}}),c.Map.addInitHook("addHandler","dragging",c.Map.Drag),c.Map.mergeOptions({
doubleClickZoom:!0}),c.Map.DoubleClickZoom=c.Handler.extend({
addHooks:function(){
this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){
this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){
var e=this._map,n=e.getZoom(),o=e.options.zoomDelta,i=t.originalEvent.shiftKey?n-o:n+o;
"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),c.Map.addInitHook("addHandler","doubleClickZoom",c.Map.DoubleClickZoom),c.Map.mergeOptions({
scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60}),c.Map.ScrollWheelZoom=c.Handler.extend({
addHooks:function(){
c.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){
c.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){
var e=c.DomEvent.getWheelDelta(t),n=this._map.options.wheelDebounceTime;
this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);
var o=Math.max(n-(+new Date-this._startTime),0);
clearTimeout(this._timer),this._timer=setTimeout(c.bind(this._performZoom,this),o),c.DomEvent.stop(t)},_performZoom:function(){
var t=this._map,e=t.getZoom(),n=this._map.options.zoomSnap||0;
t._stop();
var o=this._delta/(4*this._map.options.wheelPxPerZoomLevel),i=4*Math.log(2/(1+Math.exp(-Math.abs(o))))/Math.LN2,r=n?Math.ceil(i/n)*n:i,s=t._limitZoom(e+(this._delta>0?r:-r))-e;
this._delta=0,this._startTime=null,s&&("center"===t.options.scrollWheelZoom?t.setZoom(e+s):t.setZoomAround(this._lastMousePos,e+s))}}),c.Map.addInitHook("addHandler","scrollWheelZoom",c.Map.ScrollWheelZoom),c.extend(c.DomEvent,{
_touchstart:c.Browser.msPointer?"MSPointerDown":c.Browser.pointer?"pointerdown":"touchstart",_touchend:c.Browser.msPointer?"MSPointerUp":c.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,e,n){
function o(t){
var e;
if(c.Browser.pointer){
if(!c.Browser.edge||"mouse"===t.pointerType)return;
e=c.DomEvent._pointersCount}else e=t.touches.length;
if(!(e>1)){
var n=Date.now(),o=n-(r||n);
s=t.touches?t.touches[0]:t,a=o>0&&o<=l,r=n}}function i(t){
if(a&&!s.cancelBubble){
if(c.Browser.pointer){
if(!c.Browser.edge||"mouse"===t.pointerType)return;
var n,o,i={
};
for(o in s)n=s[o],i[o]=n&&n.bind?n.bind(s):n;
s=i}s.type="dblclick",e(s),r=null}}var r,s,a=!1,l=250,u="_leaflet_",d=this._touchstart,h=this._touchend;
return t[u+d+n]=o,t[u+h+n]=i,t[u+"dblclick"+n]=e,t.addEventListener(d,o,!1),t.addEventListener(h,i,!1),t.addEventListener("dblclick",e,!1),this},removeDoubleTapListener:function(t,e){
var n="_leaflet_",o=t[n+this._touchstart+e],i=t[n+this._touchend+e],r=t[n+"dblclick"+e];
return t.removeEventListener(this._touchstart,o,!1),t.removeEventListener(this._touchend,i,!1),c.Browser.edge||t.removeEventListener("dblclick",r,!1),this}}),c.extend(c.DomEvent,{
POINTER_DOWN:c.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:c.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:c.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:c.Browser.msPointer?"MSPointerCancel":"pointercancel",TAG_WHITE_LIST:["INPUT","SELECT","OPTION"],_pointers:{
},_pointersCount:0,addPointerListener:function(t,e,n,o){
return"touchstart"===e?this._addPointerStart(t,n,o):"touchmove"===e?this._addPointerMove(t,n,o):"touchend"===e&&this._addPointerEnd(t,n,o),this},removePointerListener:function(t,e,n){
var o=t["_leaflet_"+e+n];
return"touchstart"===e?t.removeEventListener(this.POINTER_DOWN,o,!1):"touchmove"===e?t.removeEventListener(this.POINTER_MOVE,o,!1):"touchend"===e&&(t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)),this},_addPointerStart:function(t,e,n){
var o=c.bind(function(t){
if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){
if(!(this.TAG_WHITE_LIST.indexOf(t.target.tagName)<0))return;
c.DomEvent.preventDefault(t)}this._handlePointer(t,e)},this);
if(t["_leaflet_touchstart"+n]=o,t.addEventListener(this.POINTER_DOWN,o,!1),!this._pointerDocListener){
var i=c.bind(this._globalPointerUp,this);
s.documentElement.addEventListener(this.POINTER_DOWN,c.bind(this._globalPointerDown,this),!0),s.documentElement.addEventListener(this.POINTER_MOVE,c.bind(this._globalPointerMove,this),!0),s.documentElement.addEventListener(this.POINTER_UP,i,!0),s.documentElement.addEventListener(this.POINTER_CANCEL,i,!0),this._pointerDocListener=!0}},_globalPointerDown:function(t){
this._pointers[t.pointerId]=t,this._pointersCount++},_globalPointerMove:function(t){
this._pointers[t.pointerId]&&(this._pointers[t.pointerId]=t)},_globalPointerUp:function(t){
delete this._pointers[t.pointerId],this._pointersCount--},_handlePointer:function(t,e){
for(var n in t.touches=[],this._pointers)t.touches.push(this._pointers[n]);
t.changedTouches=[t],e(t)},_addPointerMove:function(t,e,n){
var o=c.bind(function(t){
(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&this._handlePointer(t,e)},this);
t["_leaflet_touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1)},_addPointerEnd:function(t,e,n){
var o=c.bind(function(t){
this._handlePointer(t,e)},this);
t["_leaflet_touchend"+n]=o,t.addEventListener(this.POINTER_UP,o,!1),t.addEventListener(this.POINTER_CANCEL,o,!1)}}),c.Map.mergeOptions({
touchZoom:c.Browser.touch&&!c.Browser.android23,bounceAtZoomLimits:!0}),c.Map.TouchZoom=c.Handler.extend({
addHooks:function(){
c.DomUtil.addClass(this._map._container,"leaflet-touch-zoom"),c.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){
c.DomUtil.removeClass(this._map._container,"leaflet-touch-zoom"),c.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){
var e=this._map;
if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){
var n=e.mouseEventToContainerPoint(t.touches[0]),o=e.mouseEventToContainerPoint(t.touches[1]);
this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(n.add(o)._divideBy(2))),this._startDist=n.distanceTo(o),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),c.DomEvent.on(s,"touchmove",this._onTouchMove,this).on(s,"touchend",this._onTouchEnd,this),c.DomEvent.preventDefault(t)}},_onTouchMove:function(t){
if(t.touches&&2===t.touches.length&&this._zooming){
var e=this._map,n=e.mouseEventToContainerPoint(t.touches[0]),o=e.mouseEventToContainerPoint(t.touches[1]),i=n.distanceTo(o)/this._startDist;
if(this._zoom=e.getScaleZoom(i,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&i<1||this._zoom>e.getMaxZoom()&&i>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){
if(this._center=this._startLatLng,1===i)return}else{
var r=n._add(o)._divideBy(2)._subtract(this._centerPoint);
if(1===i&&0===r.x&&0===r.y)return;
this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0),this._moved=!0),c.Util.cancelAnimFrame(this._animRequest);
var s=c.bind(e._move,e,this._center,this._zoom,{
pinch:!0,round:!1});
this._animRequest=c.Util.requestAnimFrame(s,this,!0),c.DomEvent.preventDefault(t)}},_onTouchEnd:function(){
return this._moved&&this._zooming?(this._zooming=!1,c.Util.cancelAnimFrame(this._animRequest),c.DomEvent.off(s,"touchmove",this._onTouchMove).off(s,"touchend",this._onTouchEnd),void(this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom)))):void(this._zooming=!1)}}),c.Map.addInitHook("addHandler","touchZoom",c.Map.TouchZoom),c.Map.mergeOptions({
tap:!0,tapTolerance:15}),c.Map.Tap=c.Handler.extend({
addHooks:function(){
c.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){
c.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){
if(t.touches){
if(c.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);
var e=t.touches[0],n=e.target;
this._startPos=this._newPos=new c.Point(e.clientX,e.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&c.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(c.bind(function(){
this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",e))},this),1e3),this._simulateEvent("mousedown",e),c.DomEvent.on(s,{
touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){
if(clearTimeout(this._holdTimeout),c.DomEvent.off(s,{
touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){
var e=t.changedTouches[0],n=e.target;
n&&n.tagName&&"a"===n.tagName.toLowerCase()&&c.DomUtil.removeClass(n,"leaflet-active"),this._simulateEvent("mouseup",e),this._isTapValid()&&this._simulateEvent("click",e)}},_isTapValid:function(){
return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){
var e=t.touches[0];
this._newPos=new c.Point(e.clientX,e.clientY),this._simulateEvent("mousemove",e)},_simulateEvent:function(t,e){
var n=s.createEvent("MouseEvents");
n._simulated=!0,e.target._simulatedClick=!0,n.initMouseEvent(t,!0,!0,r,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(n)}}),c.Browser.touch&&!c.Browser.pointer&&c.Map.addInitHook("addHandler","tap",c.Map.Tap),c.Map.mergeOptions({
boxZoom:!0}),c.Map.BoxZoom=c.Handler.extend({
initialize:function(t){
this._map=t,this._container=t._container,this._pane=t._panes.overlayPane},addHooks:function(){
c.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){
c.DomEvent.off(this._container,"mousedown",this._onMouseDown,this)},moved:function(){
return this._moved},_resetState:function(){
this._moved=!1},_onMouseDown:function(t){
return!(!t.shiftKey||1!==t.which&&1!==t.button)&&(this._resetState(),c.DomUtil.disableTextSelection(),c.DomUtil.disableImageDrag(),this._startPoint=this._map.mouseEventToContainerPoint(t),void c.DomEvent.on(s,{
contextmenu:c.DomEvent.stop,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this))},_onMouseMove:function(t){
this._moved||(this._moved=!0,this._box=c.DomUtil.create("div","leaflet-zoom-box",this._container),c.DomUtil.addClass(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);
var e=new c.Bounds(this._point,this._startPoint),n=e.getSize();
c.DomUtil.setPosition(this._box,e.min),this._box.style.width=n.x+"px",this._box.style.height=n.y+"px"},_finish:function(){
this._moved&&(c.DomUtil.remove(this._box),c.DomUtil.removeClass(this._container,"leaflet-crosshair")),c.DomUtil.enableTextSelection(),c.DomUtil.enableImageDrag(),c.DomEvent.off(s,{
contextmenu:c.DomEvent.stop,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){
if((1===t.which||1===t.button)&&(this._finish(),this._moved)){
setTimeout(c.bind(this._resetState,this),0);
var e=new c.LatLngBounds(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));
this._map.fitBounds(e).fire("boxzoomend",{
boxZoomBounds:e})}},_onKeyDown:function(t){
27===t.keyCode&&this._finish()}}),c.Map.addInitHook("addHandler","boxZoom",c.Map.BoxZoom),c.Map.mergeOptions({
keyboard:!0,keyboardPanDelta:80}),c.Map.Keyboard=c.Handler.extend({
keyCodes:{
left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){
this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){
var t=this._map._container;
t.tabIndex<=0&&(t.tabIndex="0"),c.DomEvent.on(t,{
focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({
focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){
this._removeHooks(),c.DomEvent.off(this._map._container,{
focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({
focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){
if(!this._focused){
var t=s.body,e=s.documentElement,n=t.scrollTop||e.scrollTop,o=t.scrollLeft||e.scrollLeft;
this._map._container.focus(),r.scrollTo(o,n)}},_onFocus:function(){
this._focused=!0,this._map.fire("focus")},_onBlur:function(){
this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){
var e,n,o=this._panKeys={
},i=this.keyCodes;
for(e=0,n=i.left.length;
e<n;
e++)o[i.left[e]]=[-1*t,0];
for(e=0,n=i.right.length;
e<n;
e++)o[i.right[e]]=[t,0];
for(e=0,n=i.down.length;
e<n;
e++)o[i.down[e]]=[0,t];
for(e=0,n=i.up.length;
e<n;
e++)o[i.up[e]]=[0,-1*t]},_setZoomDelta:function(t){
var e,n,o=this._zoomKeys={
},i=this.keyCodes;
for(e=0,n=i.zoomIn.length;
e<n;
e++)o[i.zoomIn[e]]=t;
for(e=0,n=i.zoomOut.length;
e<n;
e++)o[i.zoomOut[e]]=-t},_addHooks:function(){
c.DomEvent.on(s,"keydown",this._onKeyDown,this)},_removeHooks:function(){
c.DomEvent.off(s,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){
if(!(t.altKey||t.ctrlKey||t.metaKey)){
var e,n=t.keyCode,o=this._map;
if(n in this._panKeys){
if(o._panAnim&&o._panAnim._inProgress)return;
e=this._panKeys[n],t.shiftKey&&(e=c.point(e).multiplyBy(3)),o.panBy(e),o.options.maxBounds&&o.panInsideBounds(o.options.maxBounds)}else if(n in this._zoomKeys)o.setZoom(o.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[n]);
else{
if(27!==n)return;
o.closePopup()}c.DomEvent.stop(t)}}}),c.Map.addInitHook("addHandler","keyboard",c.Map.Keyboard),c.Handler.MarkerDrag=c.Handler.extend({
initialize:function(t){
this._marker=t},addHooks:function(){
var t=this._marker._icon;
this._draggable||(this._draggable=new c.Draggable(t,t,!0)),this._draggable.on({
dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),c.DomUtil.addClass(t,"leaflet-marker-draggable")},removeHooks:function(){
this._draggable.off({
dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&c.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){
return this._draggable&&this._draggable._moved},_onDragStart:function(){
this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(t){
var e=this._marker,n=e._shadow,o=c.DomUtil.getPosition(e._icon),i=e._map.layerPointToLatLng(o);
n&&c.DomUtil.setPosition(n,o),e._latlng=i,t.latlng=i,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){
delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),c.Control=c.Class.extend({
options:{
position:"topright"},initialize:function(t){
c.setOptions(this,t)},getPosition:function(){
return this.options.position},setPosition:function(t){
var e=this._map;
return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){
return this._container},addTo:function(t){
this.remove(),this._map=t;
var e=this._container=this.onAdd(t),n=this.getPosition(),o=t._controlCorners[n];
return c.DomUtil.addClass(e,"leaflet-control"),-1!==n.indexOf("bottom")?o.insertBefore(e,o.firstChild):o.appendChild(e),this},remove:function(){
return this._map?(c.DomUtil.remove(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){
this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),c.control=function(t){
return new c.Control(t)},c.Map.include({
addControl:function(t){
return t.addTo(this),this},removeControl:function(t){
return t.remove(),this},_initControlPos:function(){
function t(t,i){
var r=n+t+" "+n+i;
e[t+i]=c.DomUtil.create("div",r,o)}var e=this._controlCorners={
},n="leaflet-",o=this._controlContainer=c.DomUtil.create("div",n+"control-container",this._container);
t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){
c.DomUtil.remove(this._controlContainer)}}),c.Control.Zoom=c.Control.extend({
options:{
position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){
var e="leaflet-control-zoom",n=c.DomUtil.create("div",e+" leaflet-bar"),o=this.options;
return this._zoomInButton=this._createButton(o.zoomInText,o.zoomInTitle,e+"-in",n,this._zoomIn),this._zoomOutButton=this._createButton(o.zoomOutText,o.zoomOutTitle,e+"-out",n,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),n},onRemove:function(t){
t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){
return this._disabled=!0,this._updateDisabled(),this},enable:function(){
return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){
!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){
!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,n,o,i){
var r=c.DomUtil.create("a",n,o);
return r.innerHTML=t,r.href="#",r.title=e,r.setAttribute("role","button"),r.setAttribute("aria-label",e),c.DomEvent.on(r,"mousedown dblclick",c.DomEvent.stopPropagation).on(r,"click",c.DomEvent.stop).on(r,"click",i,this).on(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){
var t=this._map,e="leaflet-disabled";
c.DomUtil.removeClass(this._zoomInButton,e),c.DomUtil.removeClass(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMinZoom())&&c.DomUtil.addClass(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMaxZoom())&&c.DomUtil.addClass(this._zoomInButton,e)}}),c.Map.mergeOptions({
zoomControl:!0}),c.Map.addInitHook(function(){
this.options.zoomControl&&(this.zoomControl=new c.Control.Zoom,this.addControl(this.zoomControl))}),c.control.zoom=function(t){
return new c.Control.Zoom(t)},c.Control.Attribution=c.Control.extend({
options:{
position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){
c.setOptions(this,t),this._attributions={
}},onAdd:function(t){
for(var e in t.attributionControl=this,this._container=c.DomUtil.create("div","leaflet-control-attribution"),c.DomEvent&&c.DomEvent.disableClickPropagation(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());
return this._update(),this._container},setPrefix:function(t){
return this.options.prefix=t,this._update(),this},addAttribution:function(t){
return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){
return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){
if(this._map){
var t=[];
for(var e in this._attributions)this._attributions[e]&&t.push(e);
var n=[];
this.options.prefix&&n.push(this.options.prefix),t.length&&n.push(t.join(", ")),this._container.innerHTML=n.join(" | ")}}}),c.Map.mergeOptions({
attributionControl:!0}),c.Map.addInitHook(function(){
this.options.attributionControl&&(new c.Control.Attribution).addTo(this)}),c.control.attribution=function(t){
return new c.Control.Attribution(t)},c.Control.Scale=c.Control.extend({
options:{
position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){
var e="leaflet-control-scale",n=c.DomUtil.create("div",e),o=this.options;
return this._addScales(o,e+"-line",n),t.on(o.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),n},onRemove:function(t){
t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,n){
t.metric&&(this._mScale=c.DomUtil.create("div",e,n)),t.imperial&&(this._iScale=c.DomUtil.create("div",e,n))},_update:function(){
var t=this._map,e=t.getSize().y/2,n=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));
this._updateScales(n)},_updateScales:function(t){
this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){
var e=this._getRoundNum(t),n=e<1e3?e+" m":e/1e3+" km";
this._updateScale(this._mScale,n,e/t)},_updateImperial:function(t){
var e,n,o,i=3.2808399*t;
i>5280?(e=i/5280,n=this._getRoundNum(e),this._updateScale(this._iScale,n+" mi",n/e)):(o=this._getRoundNum(i),this._updateScale(this._iScale,o+" ft",o/i))},_updateScale:function(t,e,n){
t.style.width=Math.round(this.options.maxWidth*n)+"px",t.innerHTML=e},_getRoundNum:function(t){
var e=Math.pow(10,(Math.floor(t)+"").length-1),n=t/e;
return e*(n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1)}}),c.control.scale=function(t){
return new c.Control.Scale(t)},c.Control.Layers=c.Control.extend({
options:{
collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,n,o){
return n<o?-1:o<n?1:0}},initialize:function(t,e,n){
for(var o in c.setOptions(this,n),this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[o],o);
for(o in e)this._addLayer(e[o],o,!0)},onAdd:function(t){
return this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this),this._container},onRemove:function(){
this._map.off("zoomend",this._checkDisabledLayers,this);
for(var t=0;
t<this._layers.length;
t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){
return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){
return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){
t.off("add remove",this._onLayerChange,this);
var e=this._getLayer(c.stamp(t));
return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){
c.DomUtil.addClass(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;
var t=this._map.getSize().y-(this._container.offsetTop+50);
return t<this._form.clientHeight?(c.DomUtil.addClass(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):c.DomUtil.removeClass(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){
return c.DomUtil.removeClass(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){
var t="leaflet-control-layers",e=this._container=c.DomUtil.create("div",t),n=this.options.collapsed;
e.setAttribute("aria-haspopup",!0),c.DomEvent.disableClickPropagation(e),c.Browser.touch||c.DomEvent.disableScrollPropagation(e);
var o=this._form=c.DomUtil.create("form",t+"-list");
n&&(this._map.on("click",this.collapse,this),c.Browser.android||c.DomEvent.on(e,{
mouseenter:this.expand,mouseleave:this.collapse},this));
var i=this._layersLink=c.DomUtil.create("a",t+"-toggle",e);
i.href="#",i.title="Layers",c.Browser.touch?c.DomEvent.on(i,"click",c.DomEvent.stop).on(i,"click",this.expand,this):c.DomEvent.on(i,"focus",this.expand,this),c.DomEvent.on(o,"click",function(){
setTimeout(c.bind(this._onInputClick,this),0)},this),n||this.expand(),this._baseLayersList=c.DomUtil.create("div",t+"-base",o),this._separator=c.DomUtil.create("div",t+"-separator",o),this._overlaysList=c.DomUtil.create("div",t+"-overlays",o),e.appendChild(o)},_getLayer:function(t){
for(var e=0;
e<this._layers.length;
e++)if(this._layers[e]&&c.stamp(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,n){
t.on("add remove",this._onLayerChange,this),this._layers.push({
layer:t,name:e,overlay:n}),this.options.sortLayers&&this._layers.sort(c.bind(function(t,e){
return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){
if(!this._container)return this;
c.DomUtil.empty(this._baseLayersList),c.DomUtil.empty(this._overlaysList);
var t,e,n,o,i=0;
for(n=0;
n<this._layers.length;
n++)o=this._layers[n],this._addItem(o),e=e||o.overlay,t=t||!o.overlay,i+=o.overlay?0:1;
return this.options.hideSingleBase&&(t=t&&i>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){
this._handlingClick||this._update();
var e=this._getLayer(c.stamp(t.target)),n=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;
n&&this._map.fire(n,e)},_createRadioElement:function(t,e){
var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",o=s.createElement("div");
return o.innerHTML=n,o.firstChild},_addItem:function(t){
var e,n=s.createElement("label"),o=this._map.hasLayer(t.layer);
t.overlay?((e=s.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=o):e=this._createRadioElement("leaflet-base-layers",o),e.layerId=c.stamp(t.layer),c.DomEvent.on(e,"click",this._onInputClick,this);
var i=s.createElement("span");
i.innerHTML=" "+t.name;
var r=s.createElement("div");
return n.appendChild(r),r.appendChild(e),r.appendChild(i),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(n),this._checkDisabledLayers(),n},_onInputClick:function(){
var t,e,n,o=this._form.getElementsByTagName("input"),i=[],r=[];
this._handlingClick=!0;
for(var s=o.length-1;
s>=0;
s--)t=o[s],e=this._getLayer(t.layerId).layer,n=this._map.hasLayer(e),t.checked&&!n?i.push(e):!t.checked&&n&&r.push(e);
for(s=0;
s<r.length;
s++)this._map.removeLayer(r[s]);
for(s=0;
s<i.length;
s++)this._map.addLayer(i[s]);
this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){
for(var t,e,n=this._form.getElementsByTagName("input"),o=this._map.getZoom(),i=n.length-1;
i>=0;
i--)t=n[i],e=this._getLayer(t.layerId).layer,t.disabled=e.options.minZoom!==a&&o<e.options.minZoom||e.options.maxZoom!==a&&o>e.options.maxZoom},_expand:function(){
return this.expand()},_collapse:function(){
return this.collapse()}}),c.control.layers=function(t,e,n){
return new c.Control.Layers(t,e,n)}}(window,document)},function(t,e){
!function(){
function t(t,e){
this.title=t.title,this.stateName=t.stateName?t.stateName:"unnamed-state",this.icon=L.DomUtil.create("span",""),L.DomUtil.addClass(this.icon,"button-state state-"+this.stateName.replace(/(^\s*|\s*$)/g,"")),this.icon.innerHTML=function(t){
var e;
t.match(/[&;
=<>"']/)?e=t:(t=t.replace(/(^\s*|\s*$)/g,""),e=L.DomUtil.create("span",""),0===t.indexOf("fa-")?L.DomUtil.addClass(e,"fa "+t):0===t.indexOf("glyphicon-")?L.DomUtil.addClass(e,"glyphicon "+t):L.DomUtil.addClass(e,t),e=e.outerHTML);
return e}(t.icon),this.onClick=L.Util.bind(t.onClick?t.onClick:function(){
},e)}L.Control.EasyBar=L.Control.extend({
options:{
position:"topleft",id:null,leafletClasses:!0},initialize:function(t,e){
e&&L.Util.setOptions(this,e),this._buildContainer(),this._buttons=[];
for(var n=0;
n<t.length;
n++)t[n]._bar=this,t[n]._container=t[n].button,this._buttons.push(t[n]),this.container.appendChild(t[n].button)},_buildContainer:function(){
this._container=this.container=L.DomUtil.create("div",""),this.options.leafletClasses&&L.DomUtil.addClass(this.container,"leaflet-bar easy-button-container leaflet-control"),this.options.id&&(this.container.id=this.options.id)},enable:function(){
return L.DomUtil.addClass(this.container,"enabled"),L.DomUtil.removeClass(this.container,"disabled"),this.container.setAttribute("aria-hidden","false"),this},disable:function(){
return L.DomUtil.addClass(this.container,"disabled"),L.DomUtil.removeClass(this.container,"enabled"),this.container.setAttribute("aria-hidden","true"),this},onAdd:function(){
return this.container},addTo:function(t){
this._map=t;
for(var e=0;
e<this._buttons.length;
e++)this._buttons[e]._map=t;
var n=this._container=this.onAdd(t),o=this.getPosition(),i=t._controlCorners[o];
return L.DomUtil.addClass(n,"leaflet-control"),-1!==o.indexOf("bottom")?i.insertBefore(n,i.firstChild):i.appendChild(n),this}}),L.easyBar=function(){
for(var t=[L.Control.EasyBar],e=0;
e<arguments.length;
e++)t.push(arguments[e]);
return new(Function.prototype.bind.apply(L.Control.EasyBar,t))},L.Control.EasyButton=L.Control.extend({
options:{
position:"topleft",id:null,type:"replace",states:[],leafletClasses:!0,tagName:"button"},initialize:function(e,n,o,i){
this.options.states=[],null!=i&&(this.options.id=i),this.storage={
},"object"==typeof arguments[arguments.length-1]&&L.Util.setOptions(this,arguments[arguments.length-1]),0===this.options.states.length&&"string"==typeof e&&"function"==typeof n&&this.options.states.push({
icon:e,onClick:n,title:"string"==typeof o?o:""}),this._states=[];
for(var r=0;
r<this.options.states.length;
r++)this._states.push(new t(this.options.states[r],this));
this._buildButton(),this._activateState(this._states[0])},_buildButton:function(){
if(this.button=L.DomUtil.create(this.options.tagName,""),"button"===this.options.tagName&&this.button.setAttribute("type","button"),this.options.id&&(this.button.id=this.options.id),this.options.leafletClasses&&L.DomUtil.addClass(this.button,"easy-button-button leaflet-bar-part leaflet-interactive"),L.DomEvent.addListener(this.button,"dblclick",L.DomEvent.stop),L.DomEvent.addListener(this.button,"mousedown",L.DomEvent.stop),L.DomEvent.addListener(this.button,"mouseup",L.DomEvent.stop),L.DomEvent.addListener(this.button,"click",function(t){
L.DomEvent.stop(t),this._currentState.onClick(this,this._map?this._map:null),this._map&&this._map.getContainer().focus()},this),"replace"==this.options.type)this.button.appendChild(this._currentState.icon);
else for(var t=0;
t<this._states.length;
t++)this.button.appendChild(this._states[t].icon)},_currentState:{
stateName:"unnamed",icon:document.createElement("span")},_states:null,state:function(t){
return 0===arguments.length?this._currentState.stateName:("string"==typeof t?this._activateStateNamed(t):"number"==typeof t&&this._activateState(this._states[t]),this)},_activateStateNamed:function(t){
for(var e=0;
e<this._states.length;
e++)this._states[e].stateName==t&&this._activateState(this._states[e])},_activateState:function(t){
if(t!==this._currentState){
"replace"==this.options.type&&(this.button.appendChild(t.icon),this.button.removeChild(this._currentState.icon)),t.title?this.button.title=t.title:this.button.removeAttribute("title");
for(var e=0;
e<this._states.length;
e++)L.DomUtil.removeClass(this._states[e].icon,this._currentState.stateName+"-active"),L.DomUtil.addClass(this._states[e].icon,t.stateName+"-active");
L.DomUtil.removeClass(this.button,this._currentState.stateName+"-active"),L.DomUtil.addClass(this.button,t.stateName+"-active"),this._currentState=t}},enable:function(){
return L.DomUtil.addClass(this.button,"enabled"),L.DomUtil.removeClass(this.button,"disabled"),this.button.setAttribute("aria-hidden","false"),this},disable:function(){
return L.DomUtil.addClass(this.button,"disabled"),L.DomUtil.removeClass(this.button,"enabled"),this.button.setAttribute("aria-hidden","true"),this},onAdd:function(t){
var e=L.easyBar([this],{
position:this.options.position,leafletClasses:this.options.leafletClasses});
return this._anonymousBar=e,this._container=e.container,this._anonymousBar.container},removeFrom:function(t){
return this._map===t&&this.remove(),this}}),L.easyButton=function(){
var t=Array.prototype.concat.apply([L.Control.EasyButton],arguments);
return new(Function.prototype.bind.apply(L.Control.EasyButton,t))}}()},function(t,e,n){
var o,i;
o=[e,n(3),n(2),n(0),n(78),n(4)],void 0===(i=function(t,e,n,o,i,r){
"use strict";
var s;
function a(){
const t=l(['\n      <div class="respec-save-buttons">\n        ',"\n      </div>"]);
return a=function(){
return t},t}function c(){
const t=l(['\n    <a\n      href="','"\n      id="','"\n      download="','"\n      type="','"\n      class="respec-save-button"\n      onclick=',"\n    >","</a>"]);
return c=function(){
return t},t}function l(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.exportDocument=function(t,e){
const n="Exporting via ui/save-html module's `exportDocument()` is deprecated and will be removed. Use core/exporter `rsDocToDataURL()` instead.";
return(0,o.pub)("warn",n),console.warn(n),(0,i.rsDocToDataURL)(e)},t.name=void 0,n=(s=n)&&s.__esModule?s:{
default:s};
t.name="ui/save-html";
const u=new URL("https://labs.w3.org/epub-generator/cgi-bin/epub-generator.py");
u.searchParams.append("type","respec"),u.searchParams.append("url",document.location.href);
const d=[{
id:"respec-save-as-html",fileName:"index.html",title:"HTML",type:"text/html",get href(){
return(0,i.rsDocToDataURL)(this.type)}},{
id:"respec-save-as-xml",fileName:"index.xhtml",title:"XML",type:"application/xml",get href(){
return(0,i.rsDocToDataURL)(this.type)}},{
id:"respec-save-as-epub",fileName:"spec.epub",title:"EPUB 3",type:"application/epub+zip",href:u.href}];
function h(t){
const{
id:e,href:o,fileName:i,title:s,type:a}=t;
return(0,n.default)(c(),o,e,i,a,()=>r.ui.closeModal(),s)}const p={
async show(t){
await document.respecIsReady;
const o=(0,n.default)(a(),d.map(h));
r.ui.freshModal(e.l10n[e.lang].save_snapshot,o,t)}},f="download"in HTMLAnchorElement.prototype;
let m;
f&&(m=r.ui.addCommand(e.l10n[e.lang].save_snapshot,function(){
if(!f)return;
p.show(m)},"Ctrl+Shift+Alt+S","💾"))}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(8),n(2),n(0),n(1)],void 0===(i=function(t,e,n,o,i){
"use strict";
var r;
function s(){
const t=c(['\n    <meta name="generator" content="','">\n  ']);
return s=function(){
return t},t}function a(){
const t=c(['<meta charset="utf-8">']);
return a=function(){
return t},t}function c(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}Object.defineProperty(t,"__esModule",{
value:!0}),t.rsDocToDataURL=u,n=(r=n)&&r.__esModule?r:{
default:r};
const l=new Map([["text/html","html"],["application/xml","xml"]]);
function u(t,e=document){
const r=l.get(t);
if(!r){
const e=[...l.values()].join(", "),n="Invalid format: ".concat(t,". Expected one of: ").concat(e,".");
throw new TypeError(n)}const c=function(t,e){
const r=e.cloneNode(!0);
!function(t){
const{
head:e,body:r,documentElement:c}=t;
(function({
documentElement:t}){
const e=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT,t=>t.textContent.startsWith("-")&&t.textContent.endsWith("%"));
for(const t of[...d(e)])t.remove()})(t),t.querySelectorAll(".removeOnSave, #toc-nav").forEach(t=>t.remove()),r.classList.remove("toc-sidebar"),(0,i.removeReSpec)(c);
const l=t.createDocumentFragment(),u=t.querySelector("meta[name='viewport']");
u&&e.firstChild!==u&&l.appendChild(u);
let h=t.querySelector("meta[charset], meta[content*='charset=']");
h||(h=(0,n.default)(a()));
l.appendChild(h);
const p="ReSpec ".concat(window.respecVersion||"Developer Channel"),f=(0,n.default)(s(),p);
l.appendChild(f),e.prepend(l),(0,o.pub)("beforesave",c)}(r);
let c="";
switch(t){
case"xml":c=(new XMLSerializer).serializeToString(r);
break;
default:r.doctype&&(c+=(new XMLSerializer).serializeToString(r.doctype)),c+=r.documentElement.outerHTML}return c}(r,e),u=encodeURIComponent(c);
return"data:".concat(t,";
charset=utf-8,").concat(u)}function*d(t){
for(;
t.nextNode();
)yield t.currentNode}(0,e.expose)("core/exporter",{
rsDocToDataURL:u})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[n(3),n(2),n(4),n(7)],void 0===(i=function(t,e,n,o){
"use strict";
var i;
function r(){
const t=d(["\n    <div>",'</div>\n    <p class="state" hidden="','">\n      ','\n    </p>\n    <section hidden="','">',"</section>\n  "]);
return r=function(){
return t},t}function s(){
const t=d(["<div>","</div>"]);
return s=function(){
return t},t}function a(){
const t=d(['\n  <header>\n    <p>\n      An Open-Source, Community-Maintained Database of\n      Web Standards & Related References.\n    </p>\n  </header>\n  <div class="searchcomponent">\n    <input\n      name="searchBox"\n      type="search"\n      autocomplete="off"\n      placeholder="Keywords, titles, authors, urls…">\n    <button\n      type="submit">\n        Search\n    </button>\n    <label>\n      <input type="checkbox" name="includeVersions"> Include all versions.\n    </label>\n  </div>\n']);
return a=function(){
return t},t}function c(){
const t=d(["\n    <dt>\n      [","]\n    </dt>\n    <dd>","</dd>\n  "]);
return c=function(){
return t},t}function l(){
const t=d(['\n    <p class="result-stats">\n      '," results ("," seconds).\n      ",'\n    </p>\n    <dl class="specref-results">',"</dl>\n  "]);
return l=function(){
return t},t}function u(){
const t=d(['\n      <p class="state">\n        Your search - <strong> '," </strong> -\n        did not match any references.\n      </p>\n    "]);
return u=function(){
return t},t}function d(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}e=(i=e)&&i.__esModule?i:{
default:i};
const h=n.ui.addCommand(t.l10n[t.lang].search_specref,function(){
b(),n.ui.freshModal(t.l10n[t.lang].search_specref,m,h),m.querySelector("input[type=search]").focus()},"Ctrl+Shift+Alt+space","🔎"),p="".concat("https://specref.herokuapp.com/","search-refs"),f="".concat("https://specref.herokuapp.com/","reverse-lookup"),m=document.createElement("form"),g=e.default.bind(m),v=e.default.bind(document.createElement("div"));
function _([t,n]){
return e.default.wire(n)(c(),t,(0,o.wireReference)(n))}m.id="specref-ui",m.addEventListener("submit",async t=>{
t.preventDefault();
const{
searchBox:e}=m,n=e.value;
if(!n)return void e.focus();
b({
state:"Searching Specref…"});
const o=new URL(p);
o.searchParams.set("q",n);
const i=new URL(f);
i.searchParams.set("urls",n);
try{
const t=performance.now(),r=await Promise.all([fetch(o).then(t=>t.json()),fetch(i).then(t=>t.json())]),{
checked:s}=m.includeVersions;
b({
query:n,results:function({
includeVersions:t}={
includeVersions:!1}){
return(...e)=>{
const n=e.reduce((t,e)=>Object.assign(t,e),{
}),o=new Map(Object.entries(n));
return Array.from(o.entries()).filter(([,t])=>t.aliasOf).map(([t])=>t).reduce((t,e)=>t.delete(e)&&t,o),t||Array.from(o.values()).filter(t=>"object"==typeof t&&"versions"in t).reduce((t,e)=>t.concat(e.versions),[]).forEach(t=>{
o.delete(t)}),Array.from(o.entries()).filter(([,t])=>"object"!=typeof t).reduce((t,[e])=>o.delete(e)&&o,o),o}}({
includeVersions:s})(...r),state:"",timeTaken:Math.round(performance.now()-t)/1e3})}catch(t){
console.error(t),b({
state:"Error! Couldn't do search."})}finally{
e.focus()}});
const y=e.default.wire()(a());
function b({
state:t="",results:e,timeTaken:n,query:o}={
}){
e?g(r(),y,!t,t,!e,e?function(t,e,n){
if(!t.size)return v(u(),e);
const o=Array.from(t.entries()).slice(0,99).map(_).reduce((t,e)=>t.concat(e),[]);
return v(l(),t.size,n,t.size>99?"First 100 results.":"",o)}(e,o,n):[]):g(s(),y)}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[n(3),n(6),n(2),n(4)],void 0===(i=function(t,e,n,o){
"use strict";
var i;
function r(){
const t=a(["",""]);
return r=function(){
return t},t}function s(){
const t=a(['\n        <li>\n          <a href="','">\n            ',"\n          </a>\n        </li>\n      "]);
return s=function(){
return t},t}function a(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}n=(i=n)&&i.__esModule?i:{
default:i};
const c=o.ui.addCommand(t.l10n[t.lang].definition_list,function(){
const i=Object.entries(e.definitionMap).sort(([t],[e])=>t.localeCompare(e)).map(([,[t]])=>n.default.wire(t,":li>a")(s(),"#".concat(t.id),t.textContent));
u(r(),i),o.ui.freshModal(t.l10n[t.lang].list_of_definitions,l,c)},"Ctrl+Shift+Alt+D","📔"),l=document.createElement("ul");
l.classList.add("respec-dfn-list");
const u=n.default.bind(l);
l.addEventListener("click",t=>{
o.ui.closeModal(),t.stopPropagation()})}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[n(3),n(2),n(4)],void 0===(i=function(t,e,n){
"use strict";
var o;
function i(){
const t=s(['\n    <td>\n      <a href="','">\n        ',"\n      </a>\n    </td>\n    <td>\n      "," \n    </td>\n  "]);
return i=function(){
return t},t}function r(){
const t=s(['\n  <p>\n    ReSpec is a document production toolchain, with a notable focus on W3C specifications.\n  </p>\n  <p>\n    <a href=\'https://github.com/w3c/respec/wiki\'>Documentation</a>,\n    <a href=\'https://github.com/w3c/respec/issues\'>Bugs</a>.\n  </p>\n  <table border="1" width="100%" hidden="','">\n    <caption>\n      Loaded plugins\n    </caption>\n    <thead>\n      <tr>\n        <th>\n          Plugin Name\n        </th>\n        <th>\n          Processing time\n        </th>\n      </tr>\n    </thead>\n    <tbody>',"</tbody>\n  </table>\n"]);
return r=function(){
return t},t}function s(t,e){
return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}e=(o=e)&&o.__esModule?o:{
default:o},window.respecVersion=window.respecVersion||"Developer Edition";
const a=document.createElement("div"),c=e.default.bind(a),l=n.ui.addCommand("About ".concat(window.respecVersion),function(){
n.ui.freshModal("".concat(t.l10n[t.lang].about_respec," - ").concat(window.respecVersion),a,l);
const e=[];
"getEntriesByType"in performance&&performance.getEntriesByType("measure").sort((t,e)=>e.duration-t.duration).map(({
name:t,duration:e})=>{
const n=e.toFixed(2),o=n>1e3?"".concat(Math.round(n/1e3)," second(s)"):"".concat(n," milliseconds");
return{
name:t,duration:o}}).map(u).reduce((t,e)=>(t.push(e),t),e);
c(r(),!e.length,e)},"Ctrl+Shift+Alt+A","ℹ️");
function u({
name:t,duration:n}){
const o=e.default.bind(document.createElement("tr")),r="https://github.com/w3c/respec/tree/develop/src/".concat(t,".js");
return o(i(),r,t,n)}}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o;
void 0===(o=function(t){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(){
(async()=>{
await document.respecIsReady;
const t=document.querySelector("#abstract p:first-of-type");
t&&function(t){
const e=t.ownerDocument,n=t.textContent.replace(/\s+/," ").trim(),o=e.createElement("meta");
o.name="description",o.content=n,e.head.appendChild(o)}(t)})()},t.name=void 0;
t.name="core/seo"}.apply(e,[e]))||(t.exports=o)},function(t,e,n){
var o,i;
o=[e,n(0)],void 0===(i=function(t,e){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t,i,r){
var s=t.shortName?"https://docs.geostandaarden.nl/"+t.pubDomain+"/"+t.specStatus.substr(3).toLowerCase()+"-"+t.shortName+"/":null;
if(t.canonicalURI)switch(t.canonicalURI.toLowerCase()){
case"wv":t.edDraftURI?t.canonicalURI=new URL(t.edDraftURI,i.location).href:((0,e.pub)("warn","Canonical URI staat op WV, maar er is geen edDraftURI geconfigureerd"),t.canonicalURI=null);
break;
case"def":s?t.canonicalURI=s:((0,e.pub)("warn","Canonical URI staat op DEFmaar er is geen shortName geconfigureerd"),t.canonicalURI=null);
break;
default:if(t.canonicalURI)try{
t.canonicalURI=new URL(t.canonicalURI,i.location).href}catch(n){
(0,e.pub)("warn","CanonicalURI is an invalid URL: "+n.message),t.canonicalURI=null}else s&&(t.canonicalURI=s)}if(t.canonicalURI){
var a=i.createElement("link");
a.setAttribute("rel","canonical"),a.setAttribute("href",t.canonicalURI),i.head.appendChild(a)}r(),t.doJsonLd&&async function(t,e){
await e.respecIsReady;
const i={
"@context":["http://schema.org",{
"@vocab":"http://schema.org/","@language":e.documentElement.lang||"en",foaf:"http://xmlns.com/foaf/0.1/",datePublished:{
"@type":"http://www.w3.org/2001/XMLSchema#date"},inLanguage:{
"@language":null},isBasedOn:{
"@type":"@id"},license:{
"@type":"@id"}}],id:t.canonicalURI||t.thisVersion,type:["TechArticle"],name:t.title,inLanguage:e.documentElement.lang||"nl",license:t.licenseInfo.url,datePublished:t.dashDate,copyrightHolder:{
name:"Geonovum",url:"https://www.geonovum.nl/"},discussionUrl:t.issueBase,alternativeHeadline:t.subtitle,isBasedOn:t.prevVersion};
if(t.additionalCopyrightHolders){
const e=Array.isArray(t.additionalCopyrightHolders)?t.additionalCopyrightHolders:[t.additionalCopyrightHolders];
i.copyrightHolder=[i.copyrightHolder,...e.map(t=>({
name:t}))]}const r=e.head.querySelector("meta[name=description]");
r&&(i.description=r.content);
t.editors&&(i.editor=t.editors.map(n));
t.authors&&(i.contributor=t.authors.map(n));
i.citation=[...t.normativeReferences,...t.informativeReferences].map(e=>t.biblio[e]).filter(t=>"object"==typeof t).map(o);
const s=e.createElement("script");
s.type="application/ld+json",s.textContent=JSON.stringify(i,null,2),e.head.appendChild(s)}(t,i)},t.name=void 0;
function n({
name:t,url:e,mailto:n,company:o,companyURL:i}){
const r={
type:"Person",name:t,url:e,"foaf:mbox":n};
return(o||i)&&(r.worksFor={
name:o,url:i}),r}function o(t){
const{
href:e,title:n,href:o}=t;
return{
id:e,type:"TechArticle",name:n,url:o}}t.name="geonovum/seo"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(85),n(2),n(1),n(86)],void 0===(i=function(t,e,n,o,i){
"use strict";
function r(t){
return t&&t.__esModule?t:{
default:t}}function s(){
const t=function(t,e){
e||(e=t.slice(0));
return Object.freeze(Object.defineProperties(t,{
raw:{
value:Object.freeze(e)}}))}(["\n      <style>\n        ","\n      </style>\n    "]);
return s=function(){
return t},t}Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(t){
if(t.noHighlightCSS)return;
const o=[...document.querySelectorAll("\n    pre:not(.idl):not(.nohighlight) > code:not(.nohighlight),\n    pre:not(.idl):not(.nohighlight),\n    code.highlight\n  ")].filter(t=>"pre"!==t.localName||!t.querySelector("code"));
if(!o.length)return;
const i=o.filter(t=>t.textContent.trim()).map(c);
document.head.appendChild((0,n.default)(s(),e.default)),await Promise.all(i)},t.name=void 0,e=r(e),n=r(n);
t.name="core/highlight";
const a=(0,o.msgIdGenerator)("highlight");
async function c(t){
t.setAttribute("aria-busy","true");
const e=(n=t.classList,Array.from(n).filter(t=>"highlight"!==t&&"nolinks"!==t).map(t=>t.toLowerCase()));
var n;
let o;
try{
o=await function(t,e){
const n={
action:"highlight",code:t,id:a(),languages:e};
return i.worker.postMessage(n),new Promise((t,e)=>{
const o=setTimeout(()=>{
e(new Error("Timed out waiting for highlight."))},4e3);
i.worker.addEventListener("message",function e(r){
const{
data:{
id:s,language:a,value:c}}=r;
s===n.id&&(i.worker.removeEventListener("message",e),clearTimeout(o),t({
language:a,value:c}))})})}(t.innerText,e)}catch(t){
return void console.error(t)}const{
language:r,value:s}=o;
switch(t.localName){
case"pre":t.classList.remove(r),t.innerHTML='<code class="hljs'.concat(r?" ".concat(r):"",'">').concat(s,"</code>"),t.classList.length||t.removeAttribute("class");
break;
case"code":t.innerHTML=s,t.classList.add("hljs"),r&&t.classList.add(r)}t.setAttribute("aria-busy","false")}}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default="/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {
\n  display: block;
\n  overflow-x: auto;
\n  padding: 0.5em;
\n  color: #333;
\n  background: #f8f8f8;
\n}\n\n.hljs-comment,\n.hljs-quote {
\n  color: #998;
\n  font-style: italic;
\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-subst {
\n  color: #333;
\n  font-weight: bold;
\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag .hljs-attr {
\n  color: #008080;
\n}\n\n.hljs-string,\n.hljs-doctag {
\n  color: #d14;
\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-selector-id {
\n  color: #900;
\n  font-weight: bold;
\n}\n\n.hljs-subst {
\n  font-weight: normal;
\n}\n\n.hljs-type,\n.hljs-class .hljs-title {
\n  color: #458;
\n  font-weight: bold;
\n}\n\n.hljs-tag,\n.hljs-name,\n.hljs-attribute {
\n  color: #000080;
\n  font-weight: normal;
\n}\n\n.hljs-regexp,\n.hljs-link {
\n  color: #009926;
\n}\n\n.hljs-symbol,\n.hljs-bullet {
\n  color: #990073;
\n}\n\n.hljs-built_in,\n.hljs-builtin-name {
\n  color: #0086b3;
\n}\n\n.hljs-meta {
\n  color: #999;
\n  font-weight: bold;
\n}\n\n.hljs-deletion {
\n  background: #fdd;
\n}\n\n.hljs-addition {
\n  background: #dfd;
\n}\n\n.hljs-emphasis {
\n  font-style: italic;
\n}\n\n.hljs-strong {
\n  font-weight: bold;
\n}\n"},function(t,e,n){
var o,i;
o=[e,n(1),n(8),n(87)],void 0===(i=function(t,e,n,o){
"use strict";
var i;
Object.defineProperty(t,"__esModule",{
value:!0}),t.worker=t.name=void 0,o=(i=o)&&i.__esModule?i:{
default:i};
t.name="core/worker";
const r=(0,e.createResourceHint)({
hint:"preload",href:"https://www.w3.org/Tools/respec/respec-highlight.js",as:"script"});
document.head.appendChild(r);
const s=URL.createObjectURL(new Blob([o.default],{
type:"application/javascript"})),a=new Worker(s);
t.worker=a,(0,n.expose)("core/worker",{
worker:a})}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default='// ReSpec Worker v1.0.0\n"use strict";
\ntry {
\n  importScripts("https://www.w3.org/Tools/respec/respec-highlight.js");
\n} catch (err) {
\n  console.error("Network error loading highlighter", err);
\n}\n\nself.addEventListener("message", ({
 data: originalData }) => {
\n  const data = Object.assign({
}, originalData);
\n  switch (data.action) {
\n    case "highlight-load-lang": {
\n      const {
 langURL, propName, lang } = data;
\n      importScripts(langURL);
\n      self.hljs.registerLanguage(lang, self[propName]);
\n      break;
\n    }\n    case "highlight": {
\n      const {
 code } = data;
\n      const langs = data.languages.length ? data.languages : undefined;
\n      try {
\n        const {
 value, language } = self.hljs.highlightAuto(code, langs);
\n        Object.assign(data, {
 value, language });
\n      } catch (err) {
\n        console.error("Could not transform some code?", err);
\n        // Post back the original code\n        Object.assign(data, {
 value: code, language: "" });
\n      }\n      break;
\n    }\n  }\n  self.postMessage(data);
\n});
\n'},function(t,e,n){
var o,i;
o=[e,n(1),n(0)],void 0===(i=function(t,e,n){
"use strict";
Object.defineProperty(t,"__esModule",{
value:!0}),t.sortListItems=i,t.sortDefinitionTerms=r,t.run=function(){
for(const t of document.querySelectorAll("[data-sort]")){
let e;
const o=t.dataset.sort||"ascending";
switch(t.localName){
case"dl":e=r(t,o);
break;
case"ol":case"ul":e=i(t,o);
break;
default:(0,n.pub)("warning","ReSpec can't sort ".concat(t.localName," elements."))}if(e){
const n=document.createRange();
n.selectNodeContents(t),n.deleteContents(),t.appendChild(e)}}},t.name=void 0;
function o(t){
return({
textContent:e},{
textContent:n})=>"ascending"===t?e.localeCompare(n):n.localeCompare(e)}function i(t,n){
return[...(0,e.children)(t,"li")].sort(o(n)).reduce((t,e)=>(t.appendChild(e),t),document.createDocumentFragment())}function r(t,n){
return[...(0,e.children)(t,"dt")].sort(o(n)).reduce((t,e)=>{
const{
nodeType:n,nodeName:o}=e,i=document.createDocumentFragment();
let{
nextSibling:r}=e;
for(;
r&&r.nextSibling;
){
i.appendChild(r.cloneNode(!0));
const{
nodeType:t,nodeName:e}=r.nextSibling;
if(t===n&&e===o)break;
r=r.nextSibling}return i.prepend(e.cloneNode(!0)),t.appendChild(i),t},document.createDocumentFragment())}t.name="core/list-sorter"}.apply(e,o))||(t.exports=i)},function(t,e,n){
var o,i;
o=[e,n(90),n(0)],void 0===(i=function(t,e,n){
"use strict";
var o;
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=function(t){
if(!t.highlightVars)return;
const o=document.createElement("style");
o.textContent=e.default,o.classList.add("removeOnSave"),document.head.appendChild(o),document.querySelectorAll("var").forEach(t=>t.addEventListener("click",i)),(0,n.sub)("beforesave",t=>{
t.querySelectorAll("var.respec-hl").forEach(a)})},t.name=void 0,e=(o=e)&&o.__esModule?o:{
default:o};
function i(t){
t.stopPropagation();
const{
target:e}=t,n=function(t){
const e=t.textContent.trim(),n=t.closest("section"),o=s(t),i=[...n.querySelectorAll("var")].filter(t=>t.textContent.trim()===e),c=i[0].classList.contains("respec-hl");
if(r.set(o,c),c)return i.forEach(t=>a(t,o)),[];
i.forEach(t=>(function(t,e){
t.classList.add("respec-hl",e)})(t,o));
return i}(e),o=()=>{
const t=s(e);
n.forEach(e=>a(e,t)),[...r.keys()].forEach(t=>r.set(t,!0))};
n.length&&document.body.addEventListener("click",o,{
once:!0})}t.name="core/highlight-vars";
const r=new Map([["respec-hl-c1",!0],["respec-hl-c2",!0],["respec-hl-c3",!0],["respec-hl-c4",!0],["respec-hl-c5",!0],["respec-hl-c6",!0],["respec-hl-c7",!0]]);
function s(t){
const{
value:e}=t.classList,n=/respec-hl-\w+/,o=n.test(e)&&e.match(n);
return o?o[0]:!0===r.get("respec-hl-c1")?"respec-hl-c1":[...r.keys()].find(t=>r.get(t))||"respec-hl-c1"}function a(t,e){
t.classList.remove("respec-hl",e),t.classList.length||t.removeAttribute("class")}}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default="var:hover {
\n  border-bottom: 1px dotted;
\n  cursor: pointer;
\n}\n\nvar.respec-hl {
\n  color: var(--color, #000);
\n  background-color: var(--bg-color);
\n  box-shadow: 0 0 0px 2px var(--bg-color);
\n}\n\n/* highlight colors\n  https://github.com/w3c/tr-design/issues/152\n*/\nvar.respec-hl-c1 {
\n  --bg-color: #f4d200;
\n}\n\nvar.respec-hl-c2 {
\n  --bg-color: #ff87a2;
\n}\n\nvar.respec-hl-c3 {
\n  --bg-color: #96e885;
\n}\n\nvar.respec-hl-c4 {
\n  --bg-color: #3eeed2;
\n}\n\nvar.respec-hl-c5 {
\n  --bg-color: #eacfb6;
\n}\n\nvar.respec-hl-c6 {
\n  --bg-color: #82ddff;
\n}\n\nvar.respec-hl-c7 {
\n  --bg-color: #ffbcf2;
\n}\n\n@media print {
\n  var.respec-hl {
\n    background: none;
\n    color: #000;
\n    box-shadow: unset;
\n  }\n}\n"},function(t,e,n){
var o,i;
o=[e,n(92)],void 0===(i=function(t,e){
"use strict";
var n;
Object.defineProperty(t,"__esModule",{
value:!0}),t.run=async function(){
if(Array.from(document.querySelectorAll("ol.algorithm li")).filter(t=>t.textContent.trim().startsWith("Assert: ")).forEach(t=>t.classList.add("assert")),document.querySelector(".assert")){
const t=document.createElement("style");
t.textContent=e.default,document.head.appendChild(t)}},t.name=void 0,e=(n=e)&&n.__esModule?n:{
default:n};
t.name="core/algorithms"}.apply(e,o))||(t.exports=i)},function(t,e,n){
"use strict";
n.r(e),e.default="/* For assertions in lists containing algorithms */\n\n.assert {
\n    border-color: #AAA;
\n    background: #EEE;
\n    border-left: .5em solid;
\n    padding: 0.3em;
\n}\n"}]);

//# sourceMappingURL=respec-geonovum.js.map