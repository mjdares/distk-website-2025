(function(){
const t=document.createElement("link").relList;
if(t&&t.supports&&t.supports("modulepreload"))return;
for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);
new MutationObserver(l=>{
for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}
).observe(document,
{
childList:!0,
subtree:!0}
);
function n(l){
const o={
}
;
return l.integrity&&(o.integrity=l.integrity),
l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),
l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",
o}
function r(l){
if(l.ep)return;
l.ep=!0;
const o=n(l);
fetch(l.href,
o)}
}
)();
var Ra={
exports:{
}
}
,
xl={
}
,
La={
exports:{
}
}
,
I={
}
;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook,
 Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),
id=Symbol.for("react.portal"),
ud=Symbol.for("react.fragment"),
ad=Symbol.for("react.strict_mode"),
sd=Symbol.for("react.profiler"),
cd=Symbol.for("react.provider"),
dd=Symbol.for("react.context"),
fd=Symbol.for("react.forward_ref"),
pd=Symbol.for("react.suspense"),
md=Symbol.for("react.memo"),
hd=Symbol.for("react.lazy"),
pu=Symbol.iterator;
function vd(e){
return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],
typeof e=="function"?e:null)}
var za={
isMounted:function(){
return!1}
,
enqueueForceUpdate:function(){
}
,
enqueueReplaceState:function(){
}
,
enqueueSetState:function(){
}
}
,
Ta=Object.assign,
Ia={
}
;
function pn(e,
t,
n){
this.props=e,
this.context=t,
this.refs=Ia,
this.updater=n||za}
pn.prototype.isReactComponent={
}
;
pn.prototype.setState=function(e,
t){
if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,
e,
t,
"setState")}
;
pn.prototype.forceUpdate=function(e){
this.updater.enqueueForceUpdate(this,
e,
"forceUpdate")}
;
function Ma(){
}
Ma.prototype=pn.prototype;
function fi(e,
t,
n){
this.props=e,
this.context=t,
this.refs=Ia,
this.updater=n||za}
var pi=fi.prototype=new Ma;
pi.constructor=fi;
Ta(pi,
pn.prototype);
pi.isPureReactComponent=!0;
var mu=Array.isArray,
Oa=Object.prototype.hasOwnProperty,
mi={
current:null}
,
Da={
key:!0,
ref:!0,
__self:!0,
__source:!0}
;
function Fa(e,
t,
n){
var r,
l={
}
,
o=null,
i=null;
if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),
t.key!==void 0&&(o=""+t.key),
t)Oa.call(t,
r)&&!Da.hasOwnProperty(r)&&(l[r]=t[r]);
var u=arguments.length-2;
if(u===1)l.children=n;
else if(1<u){
for(var a=Array(u),
s=0;
s<u;
s++)a[s]=arguments[s+2];
l.children=a}
if(e&&e.defaultProps)for(r in u=e.defaultProps,
u)l[r]===void 0&&(l[r]=u[r]);
return{
$$typeof:ir,
type:e,
key:o,
ref:i,
props:l,
_owner:mi.current}
}
function gd(e,
t){
return{
$$typeof:ir,
type:e.type,
key:t,
ref:e.ref,
props:e.props,
_owner:e._owner}
}
function hi(e){
return typeof e=="object"&&e!==null&&e.$$typeof===ir}
function yd(e){
var t={
"=":"=0",
":":"=2"}
;
return"$"+e.replace(/[=:]/g,
function(n){
return t[n]}
)}
var hu=/\/+/g;
function Ul(e,
t){
return typeof e=="object"&&e!==null&&e.key!=null?yd(""+e.key):t.toString(36)}
function Mr(e,
t,
n,
r,
l){
var o=typeof e;
(o==="undefined"||o==="boolean")&&(e=null);
var i=!1;
if(e===null)i=!0;
else switch(o){
case"string":case"number":i=!0;
break;
case"object":switch(e.$$typeof){
case ir:case id:i=!0}
}
if(i)return i=e,
l=l(i),
e=r===""?"."+Ul(i,
0):r,
mu(l)?(n="",
e!=null&&(n=e.replace(hu,
"$&/")+"/"),
Mr(l,
t,
n,
"",
function(s){
return s}
)):l!=null&&(hi(l)&&(l=gd(l,
n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(hu,
"$&/")+"/")+e)),
t.push(l)),
1;
if(i=0,
r=r===""?".":r+":",
mu(e))for(var u=0;
u<e.length;
u++){
o=e[u];
var a=r+Ul(o,
u);
i+=Mr(o,
t,
n,
a,
l)}
else if(a=vd(e),
typeof a=="function")for(e=a.call(e),
u=0;
!(o=e.next()).done;
)o=o.value,
a=r+Ul(o,
u++),
i+=Mr(o,
t,
n,
a,
l);
else if(o==="object")throw t=String(e),
Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {
"+Object.keys(e).join(",
 ")+"}
":t)+"). If you meant to render a collection of children,
 use an array instead.");
return i}
function vr(e,
t,
n){
if(e==null)return e;
var r=[],
l=0;
return Mr(e,
r,
"",
"",
function(o){
return t.call(n,
o,
l++)}
),
r}
function xd(e){
if(e._status===-1){
var t=e._result;
t=t(),
t.then(function(n){
(e._status===0||e._status===-1)&&(e._status=1,
e._result=n)}
,
function(n){
(e._status===0||e._status===-1)&&(e._status=2,
e._result=n)}
),
e._status===-1&&(e._status=0,
e._result=t)}
if(e._status===1)return e._result.default;
throw e._result}
var se={
current:null}
,
Or={
transition:null}
,
wd={
ReactCurrentDispatcher:se,
ReactCurrentBatchConfig:Or,
ReactCurrentOwner:mi}
;
function $a(){
throw Error("act(...) is not supported in production builds of React.")}
I.Children={
map:vr,
forEach:function(e,
t,
n){
vr(e,
function(){
t.apply(this,
arguments)}
,
n)}
,
count:function(e){
var t=0;
return vr(e,
function(){
t++}
),
t}
,
toArray:function(e){
return vr(e,
function(t){
return t}
)||[]}
,
only:function(e){
if(!hi(e))throw Error("React.Children.only expected to receive a single React element child.");
return e}
}
;
I.Component=pn;
I.Fragment=ud;
I.Profiler=sd;
I.PureComponent=fi;
I.StrictMode=ad;
I.Suspense=pd;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wd;
I.act=$a;
I.cloneElement=function(e,
t,
n){
if(e==null)throw Error("React.cloneElement(...): The argument must be a React element,
 but you passed "+e+".");
var r=Ta({
}
,
e.props),
l=e.key,
o=e.ref,
i=e._owner;
if(t!=null){
if(t.ref!==void 0&&(o=t.ref,
i=mi.current),
t.key!==void 0&&(l=""+t.key),
e.type&&e.type.defaultProps)var u=e.type.defaultProps;
for(a in t)Oa.call(t,
a)&&!Da.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}
var a=arguments.length-2;
if(a===1)r.children=n;
else if(1<a){
u=Array(a);
for(var s=0;
s<a;
s++)u[s]=arguments[s+2];
r.children=u}
return{
$$typeof:ir,
type:e.type,
key:l,
ref:o,
props:r,
_owner:i}
}
;
I.createContext=function(e){
return e={
$$typeof:dd,
_currentValue:e,
_currentValue2:e,
_threadCount:0,
Provider:null,
Consumer:null,
_defaultValue:null,
_globalName:null}
,
e.Provider={
$$typeof:cd,
_context:e}
,
e.Consumer=e}
;
I.createElement=Fa;
I.createFactory=function(e){
var t=Fa.bind(null,
e);
return t.type=e,
t}
;
I.createRef=function(){
return{
current:null}
}
;
I.forwardRef=function(e){
return{
$$typeof:fd,
render:e}
}
;
I.isValidElement=hi;
I.lazy=function(e){
return{
$$typeof:hd,
_payload:{
_status:-1,
_result:e}
,
_init:xd}
}
;
I.memo=function(e,
t){
return{
$$typeof:md,
type:e,
compare:t===void 0?null:t}
}
;
I.startTransition=function(e){
var t=Or.transition;
Or.transition={
}
;
try{
e()}
finally{
Or.transition=t}
}
;
I.unstable_act=$a;
I.useCallback=function(e,
t){
return se.current.useCallback(e,
t)}
;
I.useContext=function(e){
return se.current.useContext(e)}
;
I.useDebugValue=function(){
}
;
I.useDeferredValue=function(e){
return se.current.useDeferredValue(e)}
;
I.useEffect=function(e,
t){
return se.current.useEffect(e,
t)}
;
I.useId=function(){
return se.current.useId()}
;
I.useImperativeHandle=function(e,
t,
n){
return se.current.useImperativeHandle(e,
t,
n)}
;
I.useInsertionEffect=function(e,
t){
return se.current.useInsertionEffect(e,
t)}
;
I.useLayoutEffect=function(e,
t){
return se.current.useLayoutEffect(e,
t)}
;
I.useMemo=function(e,
t){
return se.current.useMemo(e,
t)}
;
I.useReducer=function(e,
t,
n){
return se.current.useReducer(e,
t,
n)}
;
I.useRef=function(e){
return se.current.useRef(e)}
;
I.useState=function(e){
return se.current.useState(e)}
;
I.useSyncExternalStore=function(e,
t,
n){
return se.current.useSyncExternalStore(e,
t,
n)}
;
I.useTransition=function(){
return se.current.useTransition()}
;
I.version="18.3.1";
La.exports=I;
var g=La.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook,
 Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd=g,
Sd=Symbol.for("react.element"),
Ed=Symbol.for("react.fragment"),
Cd=Object.prototype.hasOwnProperty,
Nd=kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
jd={
key:!0,
ref:!0,
__self:!0,
__source:!0}
;
function Aa(e,
t,
n){
var r,
l={
}
,
o=null,
i=null;
n!==void 0&&(o=""+n),
t.key!==void 0&&(o=""+t.key),
t.ref!==void 0&&(i=t.ref);
for(r in t)Cd.call(t,
r)&&!jd.hasOwnProperty(r)&&(l[r]=t[r]);
if(e&&e.defaultProps)for(r in t=e.defaultProps,
t)l[r]===void 0&&(l[r]=t[r]);
return{
$$typeof:Sd,
type:e,
key:o,
ref:i,
props:l,
_owner:Nd.current}
}
xl.Fragment=Ed;
xl.jsx=Aa;
xl.jsxs=Aa;
Ra.exports=xl;
var f=Ra.exports,
Ua={
exports:{
}
}
,
ke={
}
,
Ba={
exports:{
}
}
,
Ha={
}
;
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook,
 Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){
function t(j,
z){
var T=j.length;
j.push(z);
e:for(;
0<T;
){
var K=T-1>>>1,
J=j[K];
if(0<l(J,
z))j[K]=z,
j[T]=J,
T=K;
else break e}
}
function n(j){
return j.length===0?null:j[0]}
function r(j){
if(j.length===0)return null;
var z=j[0],
T=j.pop();
if(T!==z){
j[0]=T;
e:for(var K=0,
J=j.length,
mr=J>>>1;
K<mr;
){
var Et=2*(K+1)-1,
Al=j[Et],
Ct=Et+1,
hr=j[Ct];
if(0>l(Al,
T))Ct<J&&0>l(hr,
Al)?(j[K]=hr,
j[Ct]=T,
K=Ct):(j[K]=Al,
j[Et]=T,
K=Et);
else if(Ct<J&&0>l(hr,
T))j[K]=hr,
j[Ct]=T,
K=Ct;
else break e}
}
return z}
function l(j,
z){
var T=j.sortIndex-z.sortIndex;
return T!==0?T:j.id-z.id}
if(typeof performance=="object"&&typeof performance.now=="function"){
var o=performance;
e.unstable_now=function(){
return o.now()}
}
else{
var i=Date,
u=i.now();
e.unstable_now=function(){
return i.now()-u}
}
var a=[],
s=[],
h=1,
v=null,
m=3,
y=!1,
k=!1,
x=!1,
C=typeof setTimeout=="function"?setTimeout:null,
d=typeof clearTimeout=="function"?clearTimeout:null,
c=typeof setImmediate<"u"?setImmediate:null;
typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);
function p(j){
for(var z=n(s);
z!==null;
){
if(z.callback===null)r(s);
else if(z.startTime<=j)r(s),
z.sortIndex=z.expirationTime,
t(a,
z);
else break;
z=n(s)}
}
function w(j){
if(x=!1,
p(j),
!k)if(n(a)!==null)k=!0,
Fl(E);
else{
var z=n(s);
z!==null&&$l(w,
z.startTime-j)}
}
function E(j,
z){
k=!1,
x&&(x=!1,
d(R),
R=-1),
y=!0;
var T=m;
try{
for(p(z),
v=n(a);
v!==null&&(!(v.expirationTime>z)||j&&!de());
){
var K=v.callback;
if(typeof K=="function"){
v.callback=null,
m=v.priorityLevel;
var J=K(v.expirationTime<=z);
z=e.unstable_now(),
typeof J=="function"?v.callback=J:v===n(a)&&r(a),
p(z)}
else r(a);
v=n(a)}
if(v!==null)var mr=!0;
else{
var Et=n(s);
Et!==null&&$l(w,
Et.startTime-z),
mr=!1}
return mr}
finally{
v=null,
m=T,
y=!1}
}
var _=!1,
P=null,
R=-1,
M=5,
L=-1;
function de(){
return!(e.unstable_now()-L<M)}
function yn(){
if(P!==null){
var j=e.unstable_now();
L=j;
var z=!0;
try{
z=P(!0,
j)}
finally{
z?xn():(_=!1,
P=null)}
}
else _=!1}
var xn;
if(typeof c=="function")xn=function(){
c(yn)}
;
else if(typeof MessageChannel<"u"){
var fu=new MessageChannel,
od=fu.port2;
fu.port1.onmessage=yn,
xn=function(){
od.postMessage(null)}
}
else xn=function(){
C(yn,
0)}
;
function Fl(j){
P=j,
_||(_=!0,
xn())}
function $l(j,
z){
R=C(function(){
j(e.unstable_now())}
,
z)}
e.unstable_IdlePriority=5,
e.unstable_ImmediatePriority=1,
e.unstable_LowPriority=4,
e.unstable_NormalPriority=3,
e.unstable_Profiling=null,
e.unstable_UserBlockingPriority=2,
e.unstable_cancelCallback=function(j){
j.callback=null}
,
e.unstable_continueExecution=function(){
k||y||(k=!0,
Fl(E))}
,
e.unstable_forceFrameRate=function(j){
0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125,
 forcing frame rates higher than 125 fps is not supported"):M=0<j?Math.floor(1e3/j):5}
,
e.unstable_getCurrentPriorityLevel=function(){
return m}
,
e.unstable_getFirstCallbackNode=function(){
return n(a)}
,
e.unstable_next=function(j){
switch(m){
case 1:case 2:case 3:var z=3;
break;
default:z=m}
var T=m;
m=z;
try{
return j()}
finally{
m=T}
}
,
e.unstable_pauseExecution=function(){
}
,
e.unstable_requestPaint=function(){
}
,
e.unstable_runWithPriority=function(j,
z){
switch(j){
case 1:case 2:case 3:case 4:case 5:break;
default:j=3}
var T=m;
m=j;
try{
return z()}
finally{
m=T}
}
,
e.unstable_scheduleCallback=function(j,
z,
T){
var K=e.unstable_now();
switch(typeof T=="object"&&T!==null?(T=T.delay,
T=typeof T=="number"&&0<T?K+T:K):T=K,
j){
case 1:var J=-1;
break;
case 2:J=250;
break;
case 5:J=1073741823;
break;
case 4:J=1e4;
break;
default:J=5e3}
return J=T+J,
j={
id:h++,
callback:z,
priorityLevel:j,
startTime:T,
expirationTime:J,
sortIndex:-1}
,
T>K?(j.sortIndex=T,
t(s,
j),
n(a)===null&&j===n(s)&&(x?(d(R),
R=-1):x=!0,
$l(w,
T-K))):(j.sortIndex=J,
t(a,
j),
k||y||(k=!0,
Fl(E))),
j}
,
e.unstable_shouldYield=de,
e.unstable_wrapCallback=function(j){
var z=m;
return function(){
var T=m;
m=z;
try{
return j.apply(this,
arguments)}
finally{
m=T}
}
}
}
)(Ha);
Ba.exports=Ha;
var Pd=Ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook,
 Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=g,
we=Pd;
function S(e){
for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,
n=1;
n<arguments.length;
n++)t+="&args[]="+encodeURIComponent(arguments[n]);
return"Minified React error #"+e+";
 visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var Wa=new Set,
Hn={
}
;
function Ft(e,
t){
on(e,
t),
on(e+"Capture",
t)}
function on(e,
t){
for(Hn[e]=t,
e=0;
e<t.length;
e++)Wa.add(t[e])}
var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),
go=Object.prototype.hasOwnProperty,
Rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
vu={
}
,
gu={
}
;
function Ld(e){
return go.call(gu,
e)?!0:go.call(vu,
e)?!1:Rd.test(e)?gu[e]=!0:(vu[e]=!0,
!1)}
function zd(e,
t,
n,
r){
if(n!==null&&n.type===0)return!1;
switch(typeof t){
case"function":case"symbol":return!0;
case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,
5),
e!=="data-"&&e!=="aria-");
default:return!1}
}
function Td(e,
t,
n,
r){
if(t===null||typeof t>"u"||zd(e,
t,
n,
r))return!0;
if(r)return!1;
if(n!==null)switch(n.type){
case 3:return!t;
case 4:return t===!1;
case 5:return isNaN(t);
case 6:return isNaN(t)||1>t}
return!1}
function ce(e,
t,
n,
r,
l,
o,
i){
this.acceptsBooleans=t===2||t===3||t===4,
this.attributeName=r,
this.attributeNamespace=l,
this.mustUseProperty=n,
this.propertyName=e,
this.type=t,
this.sanitizeURL=o,
this.removeEmptyString=i}
var ne={
}
;
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){
ne[e]=new ce(e,
0,
!1,
e,
null,
!1,
!1)}
);
[["acceptCharset",
"accept-charset"],
["className",
"class"],
["htmlFor",
"for"],
["httpEquiv",
"http-equiv"]].forEach(function(e){
var t=e[0];
ne[t]=new ce(t,
1,
!1,
e[1],
null,
!1,
!1)}
);
["contentEditable",
"draggable",
"spellCheck",
"value"].forEach(function(e){
ne[e]=new ce(e,
2,
!1,
e.toLowerCase(),
null,
!1,
!1)}
);
["autoReverse",
"externalResourcesRequired",
"focusable",
"preserveAlpha"].forEach(function(e){
ne[e]=new ce(e,
2,
!1,
e,
null,
!1,
!1)}
);
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){
ne[e]=new ce(e,
3,
!1,
e.toLowerCase(),
null,
!1,
!1)}
);
["checked",
"multiple",
"muted",
"selected"].forEach(function(e){
ne[e]=new ce(e,
3,
!0,
e,
null,
!1,
!1)}
);
["capture",
"download"].forEach(function(e){
ne[e]=new ce(e,
4,
!1,
e,
null,
!1,
!1)}
);
["cols",
"rows",
"size",
"span"].forEach(function(e){
ne[e]=new ce(e,
6,
!1,
e,
null,
!1,
!1)}
);
["rowSpan",
"start"].forEach(function(e){
ne[e]=new ce(e,
5,
!1,
e.toLowerCase(),
null,
!1,
!1)}
);
var vi=/[\-:]([a-z])/g;
function gi(e){
return e[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){
var t=e.replace(vi,
gi);
ne[t]=new ce(t,
1,
!1,
e,
null,
!1,
!1)}
);
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){
var t=e.replace(vi,
gi);
ne[t]=new ce(t,
1,
!1,
e,
"http://www.w3.org/1999/xlink",
!1,
!1)}
);
["xml:base",
"xml:lang",
"xml:space"].forEach(function(e){
var t=e.replace(vi,
gi);
ne[t]=new ce(t,
1,
!1,
e,
"http://www.w3.org/XML/1998/namespace",
!1,
!1)}
);
["tabIndex",
"crossOrigin"].forEach(function(e){
ne[e]=new ce(e,
1,
!1,
e.toLowerCase(),
null,
!1,
!1)}
);
ne.xlinkHref=new ce("xlinkHref",
1,
!1,
"xlink:href",
"http://www.w3.org/1999/xlink",
!0,
!1);
["src",
"href",
"action",
"formAction"].forEach(function(e){
ne[e]=new ce(e,
1,
!1,
e.toLowerCase(),
null,
!0,
!0)}
);
function yi(e,
t,
n,
r){
var l=ne.hasOwnProperty(t)?ne[t]:null;
(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Td(t,
n,
l,
r)&&(n=null),
r||l===null?Ld(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,
""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,
r=l.attributeNamespace,
n===null?e.removeAttribute(t):(l=l.type,
n=l===3||l===4&&n===!0?"":""+n,
r?e.setAttributeNS(r,
t,
n):e.setAttribute(t,
n))))}
var be=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
gr=Symbol.for("react.element"),
Bt=Symbol.for("react.portal"),
Ht=Symbol.for("react.fragment"),
xi=Symbol.for("react.strict_mode"),
yo=Symbol.for("react.profiler"),
Va=Symbol.for("react.provider"),
Qa=Symbol.for("react.context"),
wi=Symbol.for("react.forward_ref"),
xo=Symbol.for("react.suspense"),
wo=Symbol.for("react.suspense_list"),
ki=Symbol.for("react.memo"),
nt=Symbol.for("react.lazy"),
Ka=Symbol.for("react.offscreen"),
yu=Symbol.iterator;
function wn(e){
return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],
typeof e=="function"?e:null)}
var V=Object.assign,
Bl;
function Rn(e){
if(Bl===void 0)try{
throw Error()}
catch(n){
var t=n.stack.trim().match(/\n( *(at )?)/);
Bl=t&&t[1]||""}
return`
`+Bl+e}
var Hl=!1;
function Wl(e,
t){
if(!e||Hl)return"";
Hl=!0;
var n=Error.prepareStackTrace;
Error.prepareStackTrace=void 0;
try{
if(t)if(t=function(){
throw Error()}
,
Object.defineProperty(t.prototype,
"props",
{
set:function(){
throw Error()}
}
),
typeof Reflect=="object"&&Reflect.construct){
try{
Reflect.construct(t,
[])}
catch(s){
var r=s}
Reflect.construct(e,
[],
t)}
else{
try{
t.call()}
catch(s){
r=s}
e.call(t.prototype)}
else{
try{
throw Error()}
catch(s){
r=s}
e()}
}
catch(s){
if(s&&r&&typeof s.stack=="string"){
for(var l=s.stack.split(`
`),
o=r.stack.split(`
`),
i=l.length-1,
u=o.length-1;
1<=i&&0<=u&&l[i]!==o[u];
)u--;
for(;
1<=i&&0<=u;
i--,
u--)if(l[i]!==o[u]){
if(i!==1||u!==1)do if(i--,
u--,
0>u||l[i]!==o[u]){
var a=`
`+l[i].replace(" at new ",
" at ");
return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",
e.displayName)),
a}
while(1<=i&&0<=u);
break}
}
}
finally{
Hl=!1,
Error.prepareStackTrace=n}
return(e=e?e.displayName||e.name:"")?Rn(e):""}
function Id(e){
switch(e.tag){
case 5:return Rn(e.type);
case 16:return Rn("Lazy");
case 13:return Rn("Suspense");
case 19:return Rn("SuspenseList");
case 0:case 2:case 15:return e=Wl(e.type,
!1),
e;
case 11:return e=Wl(e.type.render,
!1),
e;
case 1:return e=Wl(e.type,
!0),
e;
default:return""}
}
function ko(e){
if(e==null)return null;
if(typeof e=="function")return e.displayName||e.name||null;
if(typeof e=="string")return e;
switch(e){
case Ht:return"Fragment";
case Bt:return"Portal";
case yo:return"Profiler";
case xi:return"StrictMode";
case xo:return"Suspense";
case wo:return"SuspenseList"}
if(typeof e=="object")switch(e.$$typeof){
case Qa:return(e.displayName||"Context")+".Consumer";
case Va:return(e._context.displayName||"Context")+".Provider";
case wi:var t=e.render;
return e=e.displayName,
e||(e=t.displayName||t.name||"",
e=e!==""?"ForwardRef("+e+")":"ForwardRef"),
e;
case ki:return t=e.displayName||null,
t!==null?t:ko(e.type)||"Memo";
case nt:t=e._payload,
e=e._init;
try{
return ko(e(t))}
catch{
}
}
return null}
function Md(e){
var t=e.type;
switch(e.tag){
case 24:return"Cache";
case 9:return(t.displayName||"Context")+".Consumer";
case 10:return(t._context.displayName||"Context")+".Provider";
case 18:return"DehydratedFragment";
case 11:return e=t.render,
e=e.displayName||e.name||"",
t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");
case 7:return"Fragment";
case 5:return t;
case 4:return"Portal";
case 3:return"Root";
case 6:return"Text";
case 16:return ko(t);
case 8:return t===xi?"StrictMode":"Mode";
case 22:return"Offscreen";
case 12:return"Profiler";
case 21:return"Scope";
case 13:return"Suspense";
case 19:return"SuspenseList";
case 25:return"TracingMarker";
case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;
if(typeof t=="string")return t}
return null}
function vt(e){
switch(typeof e){
case"boolean":case"number":case"string":case"undefined":return e;
case"object":return e;
default:return""}
}
function Ya(e){
var t=e.type;
return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}
function Od(e){
var t=Ya(e)?"checked":"value",
n=Object.getOwnPropertyDescriptor(e.constructor.prototype,
t),
r=""+e[t];
if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){
var l=n.get,
o=n.set;
return Object.defineProperty(e,
t,
{
configurable:!0,
get:function(){
return l.call(this)}
,
set:function(i){
r=""+i,
o.call(this,
i)}
}
),
Object.defineProperty(e,
t,
{
enumerable:n.enumerable}
),
{
getValue:function(){
return r}
,
setValue:function(i){
r=""+i}
,
stopTracking:function(){
e._valueTracker=null,
delete e[t]}
}
}
}
function yr(e){
e._valueTracker||(e._valueTracker=Od(e))}
function Ga(e){
if(!e)return!1;
var t=e._valueTracker;
if(!t)return!0;
var n=t.getValue(),
r="";
return e&&(r=Ya(e)?e.checked?"true":"false":e.value),
e=r,
e!==n?(t.setValue(e),
!0):!1}
function Gr(e){
if(e=e||(typeof document<"u"?document:void 0),
typeof e>"u")return null;
try{
return e.activeElement||e.body}
catch{
return e.body}
}
function So(e,
t){
var n=t.checked;
return V({
}
,
t,
{
defaultChecked:void 0,
defaultValue:void 0,
value:void 0,
checked:n??e._wrapperState.initialChecked}
)}
function xu(e,
t){
var n=t.defaultValue==null?"":t.defaultValue,
r=t.checked!=null?t.checked:t.defaultChecked;
n=vt(t.value!=null?t.value:n),
e._wrapperState={
initialChecked:r,
initialValue:n,
controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}
}
function Xa(e,
t){
t=t.checked,
t!=null&&yi(e,
"checked",
t,
!1)}
function Eo(e,
t){
Xa(e,
t);
var n=vt(t.value),
r=t.type;
if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);
else if(r==="submit"||r==="reset"){
e.removeAttribute("value");
return}
t.hasOwnProperty("value")?Co(e,
t.type,
n):t.hasOwnProperty("defaultValue")&&Co(e,
t.type,
vt(t.defaultValue)),
t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}
function wu(e,
t,
n){
if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){
var r=t.type;
if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;
t=""+e._wrapperState.initialValue,
n||t===e.value||(e.value=t),
e.defaultValue=t}
n=e.name,
n!==""&&(e.name=""),
e.defaultChecked=!!e._wrapperState.initialChecked,
n!==""&&(e.name=n)}
function Co(e,
t,
n){
(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}
var Ln=Array.isArray;
function bt(e,
t,
n,
r){
if(e=e.options,
t){
t={
}
;
for(var l=0;
l<n.length;
l++)t["$"+n[l]]=!0;
for(n=0;
n<e.length;
n++)l=t.hasOwnProperty("$"+e[n].value),
e[n].selected!==l&&(e[n].selected=l),
l&&r&&(e[n].defaultSelected=!0)}
else{
for(n=""+vt(n),
t=null,
l=0;
l<e.length;
l++){
if(e[l].value===n){
e[l].selected=!0,
r&&(e[l].defaultSelected=!0);
return}
t!==null||e[l].disabled||(t=e[l])}
t!==null&&(t.selected=!0)}
}
function No(e,
t){
if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));
return V({
}
,
t,
{
value:void 0,
defaultValue:void 0,
children:""+e._wrapperState.initialValue}
)}
function ku(e,
t){
var n=t.value;
if(n==null){
if(n=t.children,
t=t.defaultValue,
n!=null){
if(t!=null)throw Error(S(92));
if(Ln(n)){
if(1<n.length)throw Error(S(93));
n=n[0]}
t=n}
t==null&&(t=""),
n=t}
e._wrapperState={
initialValue:vt(n)}
}
function Za(e,
t){
var n=vt(t.value),
r=vt(t.defaultValue);
n!=null&&(n=""+n,
n!==e.value&&(e.value=n),
t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),
r!=null&&(e.defaultValue=""+r)}
function Su(e){
var t=e.textContent;
t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}
function Ja(e){
switch(e){
case"svg":return"http://www.w3.org/2000/svg";
case"math":return"http://www.w3.org/1998/Math/MathML";
default:return"http://www.w3.org/1999/xhtml"}
}
function jo(e,
t){
return e==null||e==="http://www.w3.org/1999/xhtml"?Ja(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}
var xr,
qa=function(e){
return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,
n,
r,
l){
MSApp.execUnsafeLocalFunction(function(){
return e(t,
n,
r,
l)}
)}
:e}
(function(e,
t){
if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;
else{
for(xr=xr||document.createElement("div"),
xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",
t=xr.firstChild;
e.firstChild;
)e.removeChild(e.firstChild);
for(;
t.firstChild;
)e.appendChild(t.firstChild)}
}
);
function Wn(e,
t){
if(t){
var n=e.firstChild;
if(n&&n===e.lastChild&&n.nodeType===3){
n.nodeValue=t;
return}
}
e.textContent=t}
var In={
animationIterationCount:!0,
aspectRatio:!0,
borderImageOutset:!0,
borderImageSlice:!0,
borderImageWidth:!0,
boxFlex:!0,
boxFlexGroup:!0,
boxOrdinalGroup:!0,
columnCount:!0,
columns:!0,
flex:!0,
flexGrow:!0,
flexPositive:!0,
flexShrink:!0,
flexNegative:!0,
flexOrder:!0,
gridArea:!0,
gridRow:!0,
gridRowEnd:!0,
gridRowSpan:!0,
gridRowStart:!0,
gridColumn:!0,
gridColumnEnd:!0,
gridColumnSpan:!0,
gridColumnStart:!0,
fontWeight:!0,
lineClamp:!0,
lineHeight:!0,
opacity:!0,
order:!0,
orphans:!0,
tabSize:!0,
widows:!0,
zIndex:!0,
zoom:!0,
fillOpacity:!0,
floodOpacity:!0,
stopOpacity:!0,
strokeDasharray:!0,
strokeDashoffset:!0,
strokeMiterlimit:!0,
strokeOpacity:!0,
strokeWidth:!0}
,
Dd=["Webkit",
"ms",
"Moz",
"O"];
Object.keys(In).forEach(function(e){
Dd.forEach(function(t){
t=t+e.charAt(0).toUpperCase()+e.substring(1),
In[t]=In[e]}
)}
);
function ba(e,
t,
n){
return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}
function es(e,
t){
e=e.style;
for(var n in t)if(t.hasOwnProperty(n)){
var r=n.indexOf("--")===0,
l=ba(n,
t[n],
r);
n==="float"&&(n="cssFloat"),
r?e.setProperty(n,
l):e[n]=l}
}
var Fd=V({
menuitem:!0}
,
{
area:!0,
base:!0,
br:!0,
col:!0,
embed:!0,
hr:!0,
img:!0,
input:!0,
keygen:!0,
link:!0,
meta:!0,
param:!0,
source:!0,
track:!0,
wbr:!0}
);
function Po(e,
t){
if(t){
if(Fd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,
e));
if(t.dangerouslySetInnerHTML!=null){
if(t.children!=null)throw Error(S(60));
if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}
if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}
}
function _o(e,
t){
if(e.indexOf("-")===-1)return typeof t.is=="string";
switch(e){
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
default:return!0}
}
var Ro=null;
function Si(e){
return e=e.target||e.srcElement||window,
e.correspondingUseElement&&(e=e.correspondingUseElement),
e.nodeType===3?e.parentNode:e}
var Lo=null,
en=null,
tn=null;
function Eu(e){
if(e=sr(e)){
if(typeof Lo!="function")throw Error(S(280));
var t=e.stateNode;
t&&(t=Cl(t),
Lo(e.stateNode,
e.type,
t))}
}
function ts(e){
en?tn?tn.push(e):tn=[e]:en=e}
function ns(){
if(en){
var e=en,
t=tn;
if(tn=en=null,
Eu(e),
t)for(e=0;
e<t.length;
e++)Eu(t[e])}
}
function rs(e,
t){
return e(t)}
function ls(){
}
var Vl=!1;
function os(e,
t,
n){
if(Vl)return e(t,
n);
Vl=!0;
try{
return rs(e,
t,
n)}
finally{
Vl=!1,
(en!==null||tn!==null)&&(ls(),
ns())}
}
function Vn(e,
t){
var n=e.stateNode;
if(n===null)return null;
var r=Cl(n);
if(r===null)return null;
n=r[t];
e:switch(t){
case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,
r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),
e=!r;
break e;
default:e=!1}
if(e)return null;
if(n&&typeof n!="function")throw Error(S(231,
t,
typeof n));
return n}
var zo=!1;
if(Xe)try{
var kn={
}
;
Object.defineProperty(kn,
"passive",
{
get:function(){
zo=!0}
}
),
window.addEventListener("test",
kn,
kn),
window.removeEventListener("test",
kn,
kn)}
catch{
zo=!1}
function $d(e,
t,
n,
r,
l,
o,
i,
u,
a){
var s=Array.prototype.slice.call(arguments,
3);
try{
t.apply(n,
s)}
catch(h){
this.onError(h)}
}
var Mn=!1,
Xr=null,
Zr=!1,
To=null,
Ad={
onError:function(e){
Mn=!0,
Xr=e}
}
;
function Ud(e,
t,
n,
r,
l,
o,
i,
u,
a){
Mn=!1,
Xr=null,
$d.apply(Ad,
arguments)}
function Bd(e,
t,
n,
r,
l,
o,
i,
u,
a){
if(Ud.apply(this,
arguments),
Mn){
if(Mn){
var s=Xr;
Mn=!1,
Xr=null}
else throw Error(S(198));
Zr||(Zr=!0,
To=s)}
}
function $t(e){
var t=e,
n=e;
if(e.alternate)for(;
t.return;
)t=t.return;
else{
e=t;
do t=e,
t.flags&4098&&(n=t.return),
e=t.return;
while(e)}
return t.tag===3?n:null}
function is(e){
if(e.tag===13){
var t=e.memoizedState;
if(t===null&&(e=e.alternate,
e!==null&&(t=e.memoizedState)),
t!==null)return t.dehydrated}
return null}
function Cu(e){
if($t(e)!==e)throw Error(S(188))}
function Hd(e){
var t=e.alternate;
if(!t){
if(t=$t(e),
t===null)throw Error(S(188));
return t!==e?null:e}
for(var n=e,
r=t;
;
){
var l=n.return;
if(l===null)break;
var o=l.alternate;
if(o===null){
if(r=l.return,
r!==null){
n=r;
continue}
break}
if(l.child===o.child){
for(o=l.child;
o;
){
if(o===n)return Cu(l),
e;
if(o===r)return Cu(l),
t;
o=o.sibling}
throw Error(S(188))}
if(n.return!==r.return)n=l,
r=o;
else{
for(var i=!1,
u=l.child;
u;
){
if(u===n){
i=!0,
n=l,
r=o;
break}
if(u===r){
i=!0,
r=l,
n=o;
break}
u=u.sibling}
if(!i){
for(u=o.child;
u;
){
if(u===n){
i=!0,
n=o,
r=l;
break}
if(u===r){
i=!0,
r=o,
n=l;
break}
u=u.sibling}
if(!i)throw Error(S(189))}
}
if(n.alternate!==r)throw Error(S(190))}
if(n.tag!==3)throw Error(S(188));
return n.stateNode.current===n?e:t}
function us(e){
return e=Hd(e),
e!==null?as(e):null}
function as(e){
if(e.tag===5||e.tag===6)return e;
for(e=e.child;
e!==null;
){
var t=as(e);
if(t!==null)return t;
e=e.sibling}
return null}
var ss=we.unstable_scheduleCallback,
Nu=we.unstable_cancelCallback,
Wd=we.unstable_shouldYield,
Vd=we.unstable_requestPaint,
Y=we.unstable_now,
Qd=we.unstable_getCurrentPriorityLevel,
Ei=we.unstable_ImmediatePriority,
cs=we.unstable_UserBlockingPriority,
Jr=we.unstable_NormalPriority,
Kd=we.unstable_LowPriority,
ds=we.unstable_IdlePriority,
wl=null,
Ae=null;
function Yd(e){
if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{
Ae.onCommitFiberRoot(wl,
e,
void 0,
(e.current.flags&128)===128)}
catch{
}
}
var Ie=Math.clz32?Math.clz32:Zd,
Gd=Math.log,
Xd=Math.LN2;
function Zd(e){
return e>>>=0,
e===0?32:31-(Gd(e)/Xd|0)|0}
var wr=64,
kr=4194304;
function zn(e){
switch(e&-e){
case 1:return 1;
case 2:return 2;
case 4:return 4;
case 8:return 8;
case 16:return 16;
case 32:return 32;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;
case 134217728:return 134217728;
case 268435456:return 268435456;
case 536870912:return 536870912;
case 1073741824:return 1073741824;
default:return e}
}
function qr(e,
t){
var n=e.pendingLanes;
if(n===0)return 0;
var r=0,
l=e.suspendedLanes,
o=e.pingedLanes,
i=n&268435455;
if(i!==0){
var u=i&~l;
u!==0?r=zn(u):(o&=i,
o!==0&&(r=zn(o)))}
else i=n&~l,
i!==0?r=zn(i):o!==0&&(r=zn(o));
if(r===0)return 0;
if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,
o=t&-t,
l>=o||l===16&&(o&4194240)!==0))return t;
if(r&4&&(r|=n&16),
t=e.entangledLanes,
t!==0)for(e=e.entanglements,
t&=r;
0<t;
)n=31-Ie(t),
l=1<<n,
r|=e[n],
t&=~l;
return r}
function Jd(e,
t){
switch(e){
case 1:case 2:case 4:return t+250;
case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
default:return-1}
}
function qd(e,
t){
for(var n=e.suspendedLanes,
r=e.pingedLanes,
l=e.expirationTimes,
o=e.pendingLanes;
0<o;
){
var i=31-Ie(o),
u=1<<i,
a=l[i];
a===-1?(!(u&n)||u&r)&&(l[i]=Jd(u,
t)):a<=t&&(e.expiredLanes|=u),
o&=~u}
}
function Io(e){
return e=e.pendingLanes&-1073741825,
e!==0?e:e&1073741824?1073741824:0}
function fs(){
var e=wr;
return wr<<=1,
!(wr&4194240)&&(wr=64),
e}
function Ql(e){
for(var t=[],
n=0;
31>n;
n++)t.push(e);
return t}
function ur(e,
t,
n){
e.pendingLanes|=t,
t!==536870912&&(e.suspendedLanes=0,
e.pingedLanes=0),
e=e.eventTimes,
t=31-Ie(t),
e[t]=n}
function bd(e,
t){
var n=e.pendingLanes&~t;
e.pendingLanes=t,
e.suspendedLanes=0,
e.pingedLanes=0,
e.expiredLanes&=t,
e.mutableReadLanes&=t,
e.entangledLanes&=t,
t=e.entanglements;
var r=e.eventTimes;
for(e=e.expirationTimes;
0<n;
){
var l=31-Ie(n),
o=1<<l;
t[l]=0,
r[l]=-1,
e[l]=-1,
n&=~o}
}
function Ci(e,
t){
var n=e.entangledLanes|=t;
for(e=e.entanglements;
n;
){
var r=31-Ie(n),
l=1<<r;
l&t|e[r]&t&&(e[r]|=t),
n&=~l}
}
var D=0;
function ps(e){
return e&=-e,
1<e?4<e?e&268435455?16:536870912:4:1}
var ms,
Ni,
hs,
vs,
gs,
Mo=!1,
Sr=[],
at=null,
st=null,
ct=null,
Qn=new Map,
Kn=new Map,
lt=[],
ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ju(e,
t){
switch(e){
case"focusin":case"focusout":at=null;
break;
case"dragenter":case"dragleave":st=null;
break;
case"mouseover":case"mouseout":ct=null;
break;
case"pointerover":case"pointerout":Qn.delete(t.pointerId);
break;
case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}
}
function Sn(e,
t,
n,
r,
l,
o){
return e===null||e.nativeEvent!==o?(e={
blockedOn:t,
domEventName:n,
eventSystemFlags:r,
nativeEvent:o,
targetContainers:[l]}
,
t!==null&&(t=sr(t),
t!==null&&Ni(t)),
e):(e.eventSystemFlags|=r,
t=e.targetContainers,
l!==null&&t.indexOf(l)===-1&&t.push(l),
e)}
function tf(e,
t,
n,
r,
l){
switch(t){
case"focusin":return at=Sn(at,
e,
t,
n,
r,
l),
!0;
case"dragenter":return st=Sn(st,
e,
t,
n,
r,
l),
!0;
case"mouseover":return ct=Sn(ct,
e,
t,
n,
r,
l),
!0;
case"pointerover":var o=l.pointerId;
return Qn.set(o,
Sn(Qn.get(o)||null,
e,
t,
n,
r,
l)),
!0;
case"gotpointercapture":return o=l.pointerId,
Kn.set(o,
Sn(Kn.get(o)||null,
e,
t,
n,
r,
l)),
!0}
return!1}
function ys(e){
var t=Pt(e.target);
if(t!==null){
var n=$t(t);
if(n!==null){
if(t=n.tag,
t===13){
if(t=is(n),
t!==null){
e.blockedOn=t,
gs(e.priority,
function(){
hs(n)}
);
return}
}
else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){
e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;
return}
}
}
e.blockedOn=null}
function Dr(e){
if(e.blockedOn!==null)return!1;
for(var t=e.targetContainers;
0<t.length;
){
var n=Oo(e.domEventName,
e.eventSystemFlags,
t[0],
e.nativeEvent);
if(n===null){
n=e.nativeEvent;
var r=new n.constructor(n.type,
n);
Ro=r,
n.target.dispatchEvent(r),
Ro=null}
else return t=sr(n),
t!==null&&Ni(t),
e.blockedOn=n,
!1;
t.shift()}
return!0}
function Pu(e,
t,
n){
Dr(e)&&n.delete(t)}
function nf(){
Mo=!1,
at!==null&&Dr(at)&&(at=null),
st!==null&&Dr(st)&&(st=null),
ct!==null&&Dr(ct)&&(ct=null),
Qn.forEach(Pu),
Kn.forEach(Pu)}
function En(e,
t){
e.blockedOn===t&&(e.blockedOn=null,
Mo||(Mo=!0,
we.unstable_scheduleCallback(we.unstable_NormalPriority,
nf)))}
function Yn(e){
function t(l){
return En(l,
e)}
if(0<Sr.length){
En(Sr[0],
e);
for(var n=1;
n<Sr.length;
n++){
var r=Sr[n];
r.blockedOn===e&&(r.blockedOn=null)}
}
for(at!==null&&En(at,
e),
st!==null&&En(st,
e),
ct!==null&&En(ct,
e),
Qn.forEach(t),
Kn.forEach(t),
n=0;
n<lt.length;
n++)r=lt[n],
r.blockedOn===e&&(r.blockedOn=null);
for(;
0<lt.length&&(n=lt[0],
n.blockedOn===null);
)ys(n),
n.blockedOn===null&&lt.shift()}
var nn=be.ReactCurrentBatchConfig,
br=!0;
function rf(e,
t,
n,
r){
var l=D,
o=nn.transition;
nn.transition=null;
try{
D=1,
ji(e,
t,
n,
r)}
finally{
D=l,
nn.transition=o}
}
function lf(e,
t,
n,
r){
var l=D,
o=nn.transition;
nn.transition=null;
try{
D=4,
ji(e,
t,
n,
r)}
finally{
D=l,
nn.transition=o}
}
function ji(e,
t,
n,
r){
if(br){
var l=Oo(e,
t,
n,
r);
if(l===null)to(e,
t,
r,
el,
n),
ju(e,
r);
else if(tf(l,
e,
t,
n,
r))r.stopPropagation();
else if(ju(e,
r),
t&4&&-1<ef.indexOf(e)){
for(;
l!==null;
){
var o=sr(l);
if(o!==null&&ms(o),
o=Oo(e,
t,
n,
r),
o===null&&to(e,
t,
r,
el,
n),
o===l)break;
l=o}
l!==null&&r.stopPropagation()}
else to(e,
t,
r,
null,
n)}
}
var el=null;
function Oo(e,
t,
n,
r){
if(el=null,
e=Si(r),
e=Pt(e),
e!==null)if(t=$t(e),
t===null)e=null;
else if(n=t.tag,
n===13){
if(e=is(t),
e!==null)return e;
e=null}
else if(n===3){
if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;
e=null}
else t!==e&&(e=null);
return el=e,
null}
function xs(e){
switch(e){
case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;
case"message":switch(Qd()){
case Ei:return 1;
case cs:return 4;
case Jr:case Kd:return 16;
case ds:return 536870912;
default:return 16}
default:return 16}
}
var it=null,
Pi=null,
Fr=null;
function ws(){
if(Fr)return Fr;
var e,
t=Pi,
n=t.length,
r,
l="value"in it?it.value:it.textContent,
o=l.length;
for(e=0;
e<n&&t[e]===l[e];
e++);
var i=n-e;
for(r=1;
r<=i&&t[n-r]===l[o-r];
r++);
return Fr=l.slice(e,
1<r?1-r:void 0)}
function $r(e){
var t=e.keyCode;
return"charCode"in e?(e=e.charCode,
e===0&&t===13&&(e=13)):e=t,
e===10&&(e=13),
32<=e||e===13?e:0}
function Er(){
return!0}
function _u(){
return!1}
function Se(e){
function t(n,
r,
l,
o,
i){
this._reactName=n,
this._targetInst=l,
this.type=r,
this.nativeEvent=o,
this.target=i,
this.currentTarget=null;
for(var u in e)e.hasOwnProperty(u)&&(n=e[u],
this[u]=n?n(o):o[u]);
return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Er:_u,
this.isPropagationStopped=_u,
this}
return V(t.prototype,
{
preventDefault:function(){
this.defaultPrevented=!0;
var n=this.nativeEvent;
n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),
this.isDefaultPrevented=Er)}
,
stopPropagation:function(){
var n=this.nativeEvent;
n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),
this.isPropagationStopped=Er)}
,
persist:function(){
}
,
isPersistent:Er}
),
t}
var mn={
eventPhase:0,
bubbles:0,
cancelable:0,
timeStamp:function(e){
return e.timeStamp||Date.now()}
,
defaultPrevented:0,
isTrusted:0}
,
_i=Se(mn),
ar=V({
}
,
mn,
{
view:0,
detail:0}
),
of=Se(ar),
Kl,
Yl,
Cn,
kl=V({
}
,
ar,
{
screenX:0,
screenY:0,
clientX:0,
clientY:0,
pageX:0,
pageY:0,
ctrlKey:0,
shiftKey:0,
altKey:0,
metaKey:0,
getModifierState:Ri,
button:0,
buttons:0,
relatedTarget:function(e){
return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget}
,
movementX:function(e){
return"movementX"in e?e.movementX:(e!==Cn&&(Cn&&e.type==="mousemove"?(Kl=e.screenX-Cn.screenX,
Yl=e.screenY-Cn.screenY):Yl=Kl=0,
Cn=e),
Kl)}
,
movementY:function(e){
return"movementY"in e?e.movementY:Yl}
}
),
Ru=Se(kl),
uf=V({
}
,
kl,
{
dataTransfer:0}
),
af=Se(uf),
sf=V({
}
,
ar,
{
relatedTarget:0}
),
Gl=Se(sf),
cf=V({
}
,
mn,
{
animationName:0,
elapsedTime:0,
pseudoElement:0}
),
df=Se(cf),
ff=V({
}
,
mn,
{
clipboardData:function(e){
return"clipboardData"in e?e.clipboardData:window.clipboardData}
}
),
pf=Se(ff),
mf=V({
}
,
mn,
{
data:0}
),
Lu=Se(mf),
hf={
Esc:"Escape",
Spacebar:" ",
Left:"ArrowLeft",
Up:"ArrowUp",
Right:"ArrowRight",
Down:"ArrowDown",
Del:"Delete",
Win:"OS",
Menu:"ContextMenu",
Apps:"ContextMenu",
Scroll:"ScrollLock",
MozPrintableKey:"Unidentified"}
,
vf={
8:"Backspace",
9:"Tab",
12:"Clear",
13:"Enter",
16:"Shift",
17:"Control",
18:"Alt",
19:"Pause",
20:"CapsLock",
27:"Escape",
32:" ",
33:"PageUp",
34:"PageDown",
35:"End",
36:"Home",
37:"ArrowLeft",
38:"ArrowUp",
39:"ArrowRight",
40:"ArrowDown",
45:"Insert",
46:"Delete",
112:"F1",
113:"F2",
114:"F3",
115:"F4",
116:"F5",
117:"F6",
118:"F7",
119:"F8",
120:"F9",
121:"F10",
122:"F11",
123:"F12",
144:"NumLock",
145:"ScrollLock",
224:"Meta"}
,
gf={
Alt:"altKey",
Control:"ctrlKey",
Meta:"metaKey",
Shift:"shiftKey"}
;
function yf(e){
var t=this.nativeEvent;
return t.getModifierState?t.getModifierState(e):(e=gf[e])?!!t[e]:!1}
function Ri(){
return yf}
var xf=V({
}
,
ar,
{
key:function(e){
if(e.key){
var t=hf[e.key]||e.key;
if(t!=="Unidentified")return t}
return e.type==="keypress"?(e=$r(e),
e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vf[e.keyCode]||"Unidentified":""}
,
code:0,
location:0,
ctrlKey:0,
shiftKey:0,
altKey:0,
metaKey:0,
repeat:0,
locale:0,
getModifierState:Ri,
charCode:function(e){
return e.type==="keypress"?$r(e):0}
,
keyCode:function(e){
return e.type==="keydown"||e.type==="keyup"?e.keyCode:0}
,
which:function(e){
return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}
}
),
wf=Se(xf),
kf=V({
}
,
kl,
{
pointerId:0,
width:0,
height:0,
pressure:0,
tangentialPressure:0,
tiltX:0,
tiltY:0,
twist:0,
pointerType:0,
isPrimary:0}
),
zu=Se(kf),
Sf=V({
}
,
ar,
{
touches:0,
targetTouches:0,
changedTouches:0,
altKey:0,
metaKey:0,
ctrlKey:0,
shiftKey:0,
getModifierState:Ri}
),
Ef=Se(Sf),
Cf=V({
}
,
mn,
{
propertyName:0,
elapsedTime:0,
pseudoElement:0}
),
Nf=Se(Cf),
jf=V({
}
,
kl,
{
deltaX:function(e){
return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0}
,
deltaY:function(e){
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0}
,
deltaZ:0,
deltaMode:0}
),
Pf=Se(jf),
_f=[9,
13,
27,
32],
Li=Xe&&"CompositionEvent"in window,
On=null;
Xe&&"documentMode"in document&&(On=document.documentMode);
var Rf=Xe&&"TextEvent"in window&&!On,
ks=Xe&&(!Li||On&&8<On&&11>=On),
Tu=" ",
Iu=!1;
function Ss(e,
t){
switch(e){
case"keyup":return _f.indexOf(t.keyCode)!==-1;
case"keydown":return t.keyCode!==229;
case"keypress":case"mousedown":case"focusout":return!0;
default:return!1}
}
function Es(e){
return e=e.detail,
typeof e=="object"&&"data"in e?e.data:null}
var Wt=!1;
function Lf(e,
t){
switch(e){
case"compositionend":return Es(t);
case"keypress":return t.which!==32?null:(Iu=!0,
Tu);
case"textInput":return e=t.data,
e===Tu&&Iu?null:e;
default:return null}
}
function zf(e,
t){
if(Wt)return e==="compositionend"||!Li&&Ss(e,
t)?(e=ws(),
Fr=Pi=it=null,
Wt=!1,
e):null;
switch(e){
case"paste":return null;
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){
if(t.char&&1<t.char.length)return t.char;
if(t.which)return String.fromCharCode(t.which)}
return null;
case"compositionend":return ks&&t.locale!=="ko"?null:t.data;
default:return null}
}
var Tf={
color:!0,
date:!0,
datetime:!0,
"datetime-local":!0,
email:!0,
month:!0,
number:!0,
password:!0,
range:!0,
search:!0,
tel:!0,
text:!0,
time:!0,
url:!0,
week:!0}
;
function Mu(e){
var t=e&&e.nodeName&&e.nodeName.toLowerCase();
return t==="input"?!!Tf[e.type]:t==="textarea"}
function Cs(e,
t,
n,
r){
ts(r),
t=tl(t,
"onChange"),
0<t.length&&(n=new _i("onChange",
"change",
null,
n,
r),
e.push({
event:n,
listeners:t}
))}
var Dn=null,
Gn=null;
function If(e){
Os(e,
0)}
function Sl(e){
var t=Kt(e);
if(Ga(t))return e}
function Mf(e,
t){
if(e==="change")return t}
var Ns=!1;
if(Xe){
var Xl;
if(Xe){
var Zl="oninput"in document;
if(!Zl){
var Ou=document.createElement("div");
Ou.setAttribute("oninput",
"return;
"),
Zl=typeof Ou.oninput=="function"}
Xl=Zl}
else Xl=!1;
Ns=Xl&&(!document.documentMode||9<document.documentMode)}
function Du(){
Dn&&(Dn.detachEvent("onpropertychange",
js),
Gn=Dn=null)}
function js(e){
if(e.propertyName==="value"&&Sl(Gn)){
var t=[];
Cs(t,
Gn,
e,
Si(e)),
os(If,
t)}
}
function Of(e,
t,
n){
e==="focusin"?(Du(),
Dn=t,
Gn=n,
Dn.attachEvent("onpropertychange",
js)):e==="focusout"&&Du()}
function Df(e){
if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(Gn)}
function Ff(e,
t){
if(e==="click")return Sl(t)}
function $f(e,
t){
if(e==="input"||e==="change")return Sl(t)}
function Af(e,
t){
return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}
var Oe=typeof Object.is=="function"?Object.is:Af;
function Xn(e,
t){
if(Oe(e,
t))return!0;
if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;
var n=Object.keys(e),
r=Object.keys(t);
if(n.length!==r.length)return!1;
for(r=0;
r<n.length;
r++){
var l=n[r];
if(!go.call(t,
l)||!Oe(e[l],
t[l]))return!1}
return!0}
function Fu(e){
for(;
e&&e.firstChild;
)e=e.firstChild;
return e}
function $u(e,
t){
var n=Fu(e);
e=0;
for(var r;
n;
){
if(n.nodeType===3){
if(r=e+n.textContent.length,
e<=t&&r>=t)return{
node:n,
offset:t-e}
;
e=r}
e:{
for(;
n;
){
if(n.nextSibling){
n=n.nextSibling;
break e}
n=n.parentNode}
n=void 0}
n=Fu(n)}
}
function Ps(e,
t){
return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ps(e,
t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}
function _s(){
for(var e=window,
t=Gr();
t instanceof e.HTMLIFrameElement;
){
try{
var n=typeof t.contentWindow.location.href=="string"}
catch{
n=!1}
if(n)e=t.contentWindow;
else break;
t=Gr(e.document)}
return t}
function zi(e){
var t=e&&e.nodeName&&e.nodeName.toLowerCase();
return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}
function Uf(e){
var t=_s(),
n=e.focusedElem,
r=e.selectionRange;
if(t!==n&&n&&n.ownerDocument&&Ps(n.ownerDocument.documentElement,
n)){
if(r!==null&&zi(n)){
if(t=r.start,
e=r.end,
e===void 0&&(e=t),
"selectionStart"in n)n.selectionStart=t,
n.selectionEnd=Math.min(e,
n.value.length);
else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,
e.getSelection){
e=e.getSelection();
var l=n.textContent.length,
o=Math.min(r.start,
l);
r=r.end===void 0?o:Math.min(r.end,
l),
!e.extend&&o>r&&(l=r,
r=o,
o=l),
l=$u(n,
o);
var i=$u(n,
r);
l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),
t.setStart(l.node,
l.offset),
e.removeAllRanges(),
o>r?(e.addRange(t),
e.extend(i.node,
i.offset)):(t.setEnd(i.node,
i.offset),
e.addRange(t)))}
}
for(t=[],
e=n;
e=e.parentNode;
)e.nodeType===1&&t.push({
element:e,
left:e.scrollLeft,
top:e.scrollTop}
);
for(typeof n.focus=="function"&&n.focus(),
n=0;
n<t.length;
n++)e=t[n],
e.element.scrollLeft=e.left,
e.element.scrollTop=e.top}
}
var Bf=Xe&&"documentMode"in document&&11>=document.documentMode,
Vt=null,
Do=null,
Fn=null,
Fo=!1;
function Au(e,
t,
n){
var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;
Fo||Vt==null||Vt!==Gr(r)||(r=Vt,
"selectionStart"in r&&zi(r)?r={
start:r.selectionStart,
end:r.selectionEnd}
:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),
r={
anchorNode:r.anchorNode,
anchorOffset:r.anchorOffset,
focusNode:r.focusNode,
focusOffset:r.focusOffset}
),
Fn&&Xn(Fn,
r)||(Fn=r,
r=tl(Do,
"onSelect"),
0<r.length&&(t=new _i("onSelect",
"select",
null,
t,
n),
e.push({
event:t,
listeners:r}
),
t.target=Vt)))}
function Cr(e,
t){
var n={
}
;
return n[e.toLowerCase()]=t.toLowerCase(),
n["Webkit"+e]="webkit"+t,
n["Moz"+e]="moz"+t,
n}
var Qt={
animationend:Cr("Animation",
"AnimationEnd"),
animationiteration:Cr("Animation",
"AnimationIteration"),
animationstart:Cr("Animation",
"AnimationStart"),
transitionend:Cr("Transition",
"TransitionEnd")}
,
Jl={
}
,
Rs={
}
;
Xe&&(Rs=document.createElement("div").style,
"AnimationEvent"in window||(delete Qt.animationend.animation,
delete Qt.animationiteration.animation,
delete Qt.animationstart.animation),
"TransitionEvent"in window||delete Qt.transitionend.transition);
function El(e){
if(Jl[e])return Jl[e];
if(!Qt[e])return e;
var t=Qt[e],
n;
for(n in t)if(t.hasOwnProperty(n)&&n in Rs)return Jl[e]=t[n];
return e}
var Ls=El("animationend"),
zs=El("animationiteration"),
Ts=El("animationstart"),
Is=El("transitionend"),
Ms=new Map,
Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xt(e,
t){
Ms.set(e,
t),
Ft(t,
[e])}
for(var ql=0;
ql<Uu.length;
ql++){
var bl=Uu[ql],
Hf=bl.toLowerCase(),
Wf=bl[0].toUpperCase()+bl.slice(1);
xt(Hf,
"on"+Wf)}
xt(Ls,
"onAnimationEnd");
xt(zs,
"onAnimationIteration");
xt(Ts,
"onAnimationStart");
xt("dblclick",
"onDoubleClick");
xt("focusin",
"onFocus");
xt("focusout",
"onBlur");
xt(Is,
"onTransitionEnd");
on("onMouseEnter",
["mouseout",
"mouseover"]);
on("onMouseLeave",
["mouseout",
"mouseover"]);
on("onPointerEnter",
["pointerout",
"pointerover"]);
on("onPointerLeave",
["pointerout",
"pointerover"]);
Ft("onChange",
"change click focusin focusout input keydown keyup selectionchange".split(" "));
Ft("onSelect",
"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ft("onBeforeInput",
["compositionend",
"keypress",
"textInput",
"paste"]);
Ft("onCompositionEnd",
"compositionend focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionStart",
"compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionUpdate",
"compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
Vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function Bu(e,
t,
n){
var r=e.type||"unknown-event";
e.currentTarget=n,
Bd(r,
t,
void 0,
e),
e.currentTarget=null}
function Os(e,
t){
t=(t&4)!==0;
for(var n=0;
n<e.length;
n++){
var r=e[n],
l=r.event;
r=r.listeners;
e:{
var o=void 0;
if(t)for(var i=r.length-1;
0<=i;
i--){
var u=r[i],
a=u.instance,
s=u.currentTarget;
if(u=u.listener,
a!==o&&l.isPropagationStopped())break e;
Bu(l,
u,
s),
o=a}
else for(i=0;
i<r.length;
i++){
if(u=r[i],
a=u.instance,
s=u.currentTarget,
u=u.listener,
a!==o&&l.isPropagationStopped())break e;
Bu(l,
u,
s),
o=a}
}
}
if(Zr)throw e=To,
Zr=!1,
To=null,
e}
function $(e,
t){
var n=t[Ho];
n===void 0&&(n=t[Ho]=new Set);
var r=e+"__bubble";
n.has(r)||(Ds(t,
e,
2,
!1),
n.add(r))}
function eo(e,
t,
n){
var r=0;
t&&(r|=4),
Ds(n,
e,
r,
t)}
var Nr="_reactListening"+Math.random().toString(36).slice(2);
function Zn(e){
if(!e[Nr]){
e[Nr]=!0,
Wa.forEach(function(n){
n!=="selectionchange"&&(Vf.has(n)||eo(n,
!1,
e),
eo(n,
!0,
e))}
);
var t=e.nodeType===9?e:e.ownerDocument;
t===null||t[Nr]||(t[Nr]=!0,
eo("selectionchange",
!1,
t))}
}
function Ds(e,
t,
n,
r){
switch(xs(t)){
case 1:var l=rf;
break;
case 4:l=lf;
break;
default:l=ji}
n=l.bind(null,
t,
n,
e),
l=void 0,
!zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),
r?l!==void 0?e.addEventListener(t,
n,
{
capture:!0,
passive:l}
):e.addEventListener(t,
n,
!0):l!==void 0?e.addEventListener(t,
n,
{
passive:l}
):e.addEventListener(t,
n,
!1)}
function to(e,
t,
n,
r,
l){
var o=r;
if(!(t&1)&&!(t&2)&&r!==null)e:for(;
;
){
if(r===null)return;
var i=r.tag;
if(i===3||i===4){
var u=r.stateNode.containerInfo;
if(u===l||u.nodeType===8&&u.parentNode===l)break;
if(i===4)for(i=r.return;
i!==null;
){
var a=i.tag;
if((a===3||a===4)&&(a=i.stateNode.containerInfo,
a===l||a.nodeType===8&&a.parentNode===l))return;
i=i.return}
for(;
u!==null;
){
if(i=Pt(u),
i===null)return;
if(a=i.tag,
a===5||a===6){
r=o=i;
continue e}
u=u.parentNode}
}
r=r.return}
os(function(){
var s=o,
h=Si(n),
v=[];
e:{
var m=Ms.get(e);
if(m!==void 0){
var y=_i,
k=e;
switch(e){
case"keypress":if($r(n)===0)break e;
case"keydown":case"keyup":y=wf;
break;
case"focusin":k="focus",
y=Gl;
break;
case"focusout":k="blur",
y=Gl;
break;
case"beforeblur":case"afterblur":y=Gl;
break;
case"click":if(n.button===2)break e;
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ru;
break;
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=af;
break;
case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ef;
break;
case Ls:case zs:case Ts:y=df;
break;
case Is:y=Nf;
break;
case"scroll":y=of;
break;
case"wheel":y=Pf;
break;
case"copy":case"cut":case"paste":y=pf;
break;
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=zu}
var x=(t&4)!==0,
C=!x&&e==="scroll",
d=x?m!==null?m+"Capture":null:m;
x=[];
for(var c=s,
p;
c!==null;
){
p=c;
var w=p.stateNode;
if(p.tag===5&&w!==null&&(p=w,
d!==null&&(w=Vn(c,
d),
w!=null&&x.push(Jn(c,
w,
p)))),
C)break;
c=c.return}
0<x.length&&(m=new y(m,
k,
null,
n,
h),
v.push({
event:m,
listeners:x}
))}
}
if(!(t&7)){
e:{
if(m=e==="mouseover"||e==="pointerover",
y=e==="mouseout"||e==="pointerout",
m&&n!==Ro&&(k=n.relatedTarget||n.fromElement)&&(Pt(k)||k[Ze]))break e;
if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,
y?(k=n.relatedTarget||n.toElement,
y=s,
k=k?Pt(k):null,
k!==null&&(C=$t(k),
k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,
k=s),
y!==k)){
if(x=Ru,
w="onMouseLeave",
d="onMouseEnter",
c="mouse",
(e==="pointerout"||e==="pointerover")&&(x=zu,
w="onPointerLeave",
d="onPointerEnter",
c="pointer"),
C=y==null?m:Kt(y),
p=k==null?m:Kt(k),
m=new x(w,
c+"leave",
y,
n,
h),
m.target=C,
m.relatedTarget=p,
w=null,
Pt(h)===s&&(x=new x(d,
c+"enter",
k,
n,
h),
x.target=p,
x.relatedTarget=C,
w=x),
C=w,
y&&k)t:{
for(x=y,
d=k,
c=0,
p=x;
p;
p=Ut(p))c++;
for(p=0,
w=d;
w;
w=Ut(w))p++;
for(;
0<c-p;
)x=Ut(x),
c--;
for(;
0<p-c;
)d=Ut(d),
p--;
for(;
c--;
){
if(x===d||d!==null&&x===d.alternate)break t;
x=Ut(x),
d=Ut(d)}
x=null}
else x=null;
y!==null&&Hu(v,
m,
y,
x,
!1),
k!==null&&C!==null&&Hu(v,
C,
k,
x,
!0)}
}
e:{
if(m=s?Kt(s):window,
y=m.nodeName&&m.nodeName.toLowerCase(),
y==="select"||y==="input"&&m.type==="file")var E=Mf;
else if(Mu(m))if(Ns)E=$f;
else{
E=Df;
var _=Of}
else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Ff);
if(E&&(E=E(e,
s))){
Cs(v,
E,
n,
h);
break e}
_&&_(e,
m,
s),
e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Co(m,
"number",
m.value)}
switch(_=s?Kt(s):window,
e){
case"focusin":(Mu(_)||_.contentEditable==="true")&&(Vt=_,
Do=s,
Fn=null);
break;
case"focusout":Fn=Do=Vt=null;
break;
case"mousedown":Fo=!0;
break;
case"contextmenu":case"mouseup":case"dragend":Fo=!1,
Au(v,
n,
h);
break;
case"selectionchange":if(Bf)break;
case"keydown":case"keyup":Au(v,
n,
h)}
var P;
if(Li)e:{
switch(e){
case"compositionstart":var R="onCompositionStart";
break e;
case"compositionend":R="onCompositionEnd";
break e;
case"compositionupdate":R="onCompositionUpdate";
break e}
R=void 0}
else Wt?Ss(e,
n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");
R&&(ks&&n.locale!=="ko"&&(Wt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Wt&&(P=ws()):(it=h,
Pi="value"in it?it.value:it.textContent,
Wt=!0)),
_=tl(s,
R),
0<_.length&&(R=new Lu(R,
e,
null,
n,
h),
v.push({
event:R,
listeners:_}
),
P?R.data=P:(P=Es(n),
P!==null&&(R.data=P)))),
(P=Rf?Lf(e,
n):zf(e,
n))&&(s=tl(s,
"onBeforeInput"),
0<s.length&&(h=new Lu("onBeforeInput",
"beforeinput",
null,
n,
h),
v.push({
event:h,
listeners:s}
),
h.data=P))}
Os(v,
t)}
)}
function Jn(e,
t,
n){
return{
instance:e,
listener:t,
currentTarget:n}
}
function tl(e,
t){
for(var n=t+"Capture",
r=[];
e!==null;
){
var l=e,
o=l.stateNode;
l.tag===5&&o!==null&&(l=o,
o=Vn(e,
n),
o!=null&&r.unshift(Jn(e,
o,
l)),
o=Vn(e,
t),
o!=null&&r.push(Jn(e,
o,
l))),
e=e.return}
return r}
function Ut(e){
if(e===null)return null;
do e=e.return;
while(e&&e.tag!==5);
return e||null}
function Hu(e,
t,
n,
r,
l){
for(var o=t._reactName,
i=[];
n!==null&&n!==r;
){
var u=n,
a=u.alternate,
s=u.stateNode;
if(a!==null&&a===r)break;
u.tag===5&&s!==null&&(u=s,
l?(a=Vn(n,
o),
a!=null&&i.unshift(Jn(n,
a,
u))):l||(a=Vn(n,
o),
a!=null&&i.push(Jn(n,
a,
u)))),
n=n.return}
i.length!==0&&e.push({
event:t,
listeners:i}
)}
var Qf=/\r\n?/g,
Kf=/\u0000|\uFFFD/g;
function Wu(e){
return(typeof e=="string"?e:""+e).replace(Qf,
`
`).replace(Kf,
"")}
function jr(e,
t,
n){
if(t=Wu(t),
Wu(e)!==t&&n)throw Error(S(425))}
function nl(){
}
var $o=null,
Ao=null;
function Uo(e,
t){
return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}
var Bo=typeof setTimeout=="function"?setTimeout:void 0,
Yf=typeof clearTimeout=="function"?clearTimeout:void 0,
Vu=typeof Promise=="function"?Promise:void 0,
Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){
return Vu.resolve(null).then(e).catch(Xf)}
:Bo;
function Xf(e){
setTimeout(function(){
throw e}
)}
function no(e,
t){
var n=t,
r=0;
do{
var l=n.nextSibling;
if(e.removeChild(n),
l&&l.nodeType===8)if(n=l.data,
n==="/$"){
if(r===0){
e.removeChild(l),
Yn(t);
return}
r--}
else n!=="$"&&n!=="$?"&&n!=="$!"||r++;
n=l}
while(n);
Yn(t)}
function dt(e){
for(;
e!=null;
e=e.nextSibling){
var t=e.nodeType;
if(t===1||t===3)break;
if(t===8){
if(t=e.data,
t==="$"||t==="$!"||t==="$?")break;
if(t==="/$")return null}
}
return e}
function Qu(e){
e=e.previousSibling;
for(var t=0;
e;
){
if(e.nodeType===8){
var n=e.data;
if(n==="$"||n==="$!"||n==="$?"){
if(t===0)return e;
t--}
else n==="/$"&&t++}
e=e.previousSibling}
return null}
var hn=Math.random().toString(36).slice(2),
$e="__reactFiber$"+hn,
qn="__reactProps$"+hn,
Ze="__reactContainer$"+hn,
Ho="__reactEvents$"+hn,
Zf="__reactListeners$"+hn,
Jf="__reactHandles$"+hn;
function Pt(e){
var t=e[$e];
if(t)return t;
for(var n=e.parentNode;
n;
){
if(t=n[Ze]||n[$e]){
if(n=t.alternate,
t.child!==null||n!==null&&n.child!==null)for(e=Qu(e);
e!==null;
){
if(n=e[$e])return n;
e=Qu(e)}
return t}
e=n,
n=e.parentNode}
return null}
function sr(e){
return e=e[$e]||e[Ze],
!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}
function Kt(e){
if(e.tag===5||e.tag===6)return e.stateNode;
throw Error(S(33))}
function Cl(e){
return e[qn]||null}
var Wo=[],
Yt=-1;
function wt(e){
return{
current:e}
}
function A(e){
0>Yt||(e.current=Wo[Yt],
Wo[Yt]=null,
Yt--)}
function F(e,
t){
Yt++,
Wo[Yt]=e.current,
e.current=t}
var gt={
}
,
ie=wt(gt),
me=wt(!1),
Tt=gt;
function un(e,
t){
var n=e.type.contextTypes;
if(!n)return gt;
var r=e.stateNode;
if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;
var l={
}
,
o;
for(o in n)l[o]=t[o];
return r&&(e=e.stateNode,
e.__reactInternalMemoizedUnmaskedChildContext=t,
e.__reactInternalMemoizedMaskedChildContext=l),
l}
function he(e){
return e=e.childContextTypes,
e!=null}
function rl(){
A(me),
A(ie)}
function Ku(e,
t,
n){
if(ie.current!==gt)throw Error(S(168));
F(ie,
t),
F(me,
n)}
function Fs(e,
t,
n){
var r=e.stateNode;
if(t=t.childContextTypes,
typeof r.getChildContext!="function")return n;
r=r.getChildContext();
for(var l in r)if(!(l in t))throw Error(S(108,
Md(e)||"Unknown",
l));
return V({
}
,
n,
r)}
function ll(e){
return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,
Tt=ie.current,
F(ie,
e),
F(me,
me.current),
!0}
function Yu(e,
t,
n){
var r=e.stateNode;
if(!r)throw Error(S(169));
n?(e=Fs(e,
t,
Tt),
r.__reactInternalMemoizedMergedChildContext=e,
A(me),
A(ie),
F(ie,
e)):A(me),
F(me,
n)}
var Ve=null,
Nl=!1,
ro=!1;
function $s(e){
Ve===null?Ve=[e]:Ve.push(e)}
function qf(e){
Nl=!0,
$s(e)}
function kt(){
if(!ro&&Ve!==null){
ro=!0;
var e=0,
t=D;
try{
var n=Ve;
for(D=1;
e<n.length;
e++){
var r=n[e];
do r=r(!0);
while(r!==null)}
Ve=null,
Nl=!1}
catch(l){
throw Ve!==null&&(Ve=Ve.slice(e+1)),
ss(Ei,
kt),
l}
finally{
D=t,
ro=!1}
}
return null}
var Gt=[],
Xt=0,
ol=null,
il=0,
Ee=[],
Ce=0,
It=null,
Qe=1,
Ke="";
function Nt(e,
t){
Gt[Xt++]=il,
Gt[Xt++]=ol,
ol=e,
il=t}
function As(e,
t,
n){
Ee[Ce++]=Qe,
Ee[Ce++]=Ke,
Ee[Ce++]=It,
It=e;
var r=Qe;
e=Ke;
var l=32-Ie(r)-1;
r&=~(1<<l),
n+=1;
var o=32-Ie(t)+l;
if(30<o){
var i=l-l%5;
o=(r&(1<<i)-1).toString(32),
r>>=i,
l-=i,
Qe=1<<32-Ie(t)+l|n<<l|r,
Ke=o+e}
else Qe=1<<o|n<<l|r,
Ke=e}
function Ti(e){
e.return!==null&&(Nt(e,
1),
As(e,
1,
0))}
function Ii(e){
for(;
e===ol;
)ol=Gt[--Xt],
Gt[Xt]=null,
il=Gt[--Xt],
Gt[Xt]=null;
for(;
e===It;
)It=Ee[--Ce],
Ee[Ce]=null,
Ke=Ee[--Ce],
Ee[Ce]=null,
Qe=Ee[--Ce],
Ee[Ce]=null}
var xe=null,
ye=null,
U=!1,
Te=null;
function Us(e,
t){
var n=Ne(5,
null,
null,
0);
n.elementType="DELETED",
n.stateNode=t,
n.return=e,
t=e.deletions,
t===null?(e.deletions=[n],
e.flags|=16):t.push(n)}
function Gu(e,
t){
switch(e.tag){
case 5:var n=e.type;
return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,
t!==null?(e.stateNode=t,
xe=e,
ye=dt(t.firstChild),
!0):!1;
case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,
t!==null?(e.stateNode=t,
xe=e,
ye=null,
!0):!1;
case 13:return t=t.nodeType!==8?null:t,
t!==null?(n=It!==null?{
id:Qe,
overflow:Ke}
:null,
e.memoizedState={
dehydrated:t,
treeContext:n,
retryLane:1073741824}
,
n=Ne(18,
null,
null,
0),
n.stateNode=t,
n.return=e,
e.child=n,
xe=e,
ye=null,
!0):!1;
default:return!1}
}
function Vo(e){
return(e.mode&1)!==0&&(e.flags&128)===0}
function Qo(e){
if(U){
var t=ye;
if(t){
var n=t;
if(!Gu(e,
t)){
if(Vo(e))throw Error(S(418));
t=dt(n.nextSibling);
var r=xe;
t&&Gu(e,
t)?Us(r,
n):(e.flags=e.flags&-4097|2,
U=!1,
xe=e)}
}
else{
if(Vo(e))throw Error(S(418));
e.flags=e.flags&-4097|2,
U=!1,
xe=e}
}
}
function Xu(e){
for(e=e.return;
e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;
)e=e.return;
xe=e}
function Pr(e){
if(e!==xe)return!1;
if(!U)return Xu(e),
U=!0,
!1;
var t;
if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,
t=t!=="head"&&t!=="body"&&!Uo(e.type,
e.memoizedProps)),
t&&(t=ye)){
if(Vo(e))throw Bs(),
Error(S(418));
for(;
t;
)Us(e,
t),
t=dt(t.nextSibling)}
if(Xu(e),
e.tag===13){
if(e=e.memoizedState,
e=e!==null?e.dehydrated:null,
!e)throw Error(S(317));
e:{
for(e=e.nextSibling,
t=0;
e;
){
if(e.nodeType===8){
var n=e.data;
if(n==="/$"){
if(t===0){
ye=dt(e.nextSibling);
break e}
t--}
else n!=="$"&&n!=="$!"&&n!=="$?"||t++}
e=e.nextSibling}
ye=null}
}
else ye=xe?dt(e.stateNode.nextSibling):null;
return!0}
function Bs(){
for(var e=ye;
e;
)e=dt(e.nextSibling)}
function an(){
ye=xe=null,
U=!1}
function Mi(e){
Te===null?Te=[e]:Te.push(e)}
var bf=be.ReactCurrentBatchConfig;
function Nn(e,
t,
n){
if(e=n.ref,
e!==null&&typeof e!="function"&&typeof e!="object"){
if(n._owner){
if(n=n._owner,
n){
if(n.tag!==1)throw Error(S(309));
var r=n.stateNode}
if(!r)throw Error(S(147,
e));
var l=r,
o=""+e;
return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){
var u=l.refs;
i===null?delete u[o]:u[o]=i}
,
t._stringRef=o,
t)}
if(typeof e!="string")throw Error(S(284));
if(!n._owner)throw Error(S(290,
e))}
return e}
function _r(e,
t){
throw e=Object.prototype.toString.call(t),
Error(S(31,
e==="[object Object]"?"object with keys {
"+Object.keys(t).join(",
 ")+"}
":e))}
function Zu(e){
var t=e._init;
return t(e._payload)}
function Hs(e){
function t(d,
c){
if(e){
var p=d.deletions;
p===null?(d.deletions=[c],
d.flags|=16):p.push(c)}
}
function n(d,
c){
if(!e)return null;
for(;
c!==null;
)t(d,
c),
c=c.sibling;
return null}
function r(d,
c){
for(d=new Map;
c!==null;
)c.key!==null?d.set(c.key,
c):d.set(c.index,
c),
c=c.sibling;
return d}
function l(d,
c){
return d=ht(d,
c),
d.index=0,
d.sibling=null,
d}
function o(d,
c,
p){
return d.index=p,
e?(p=d.alternate,
p!==null?(p=p.index,
p<c?(d.flags|=2,
c):p):(d.flags|=2,
c)):(d.flags|=1048576,
c)}
function i(d){
return e&&d.alternate===null&&(d.flags|=2),
d}
function u(d,
c,
p,
w){
return c===null||c.tag!==6?(c=co(p,
d.mode,
w),
c.return=d,
c):(c=l(c,
p),
c.return=d,
c)}
function a(d,
c,
p,
w){
var E=p.type;
return E===Ht?h(d,
c,
p.props.children,
w,
p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nt&&Zu(E)===c.type)?(w=l(c,
p.props),
w.ref=Nn(d,
c,
p),
w.return=d,
w):(w=Qr(p.type,
p.key,
p.props,
null,
d.mode,
w),
w.ref=Nn(d,
c,
p),
w.return=d,
w)}
function s(d,
c,
p,
w){
return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=fo(p,
d.mode,
w),
c.return=d,
c):(c=l(c,
p.children||[]),
c.return=d,
c)}
function h(d,
c,
p,
w,
E){
return c===null||c.tag!==7?(c=zt(p,
d.mode,
w,
E),
c.return=d,
c):(c=l(c,
p),
c.return=d,
c)}
function v(d,
c,
p){
if(typeof c=="string"&&c!==""||typeof c=="number")return c=co(""+c,
d.mode,
p),
c.return=d,
c;
if(typeof c=="object"&&c!==null){
switch(c.$$typeof){
case gr:return p=Qr(c.type,
c.key,
c.props,
null,
d.mode,
p),
p.ref=Nn(d,
null,
c),
p.return=d,
p;
case Bt:return c=fo(c,
d.mode,
p),
c.return=d,
c;
case nt:var w=c._init;
return v(d,
w(c._payload),
p)}
if(Ln(c)||wn(c))return c=zt(c,
d.mode,
p,
null),
c.return=d,
c;
_r(d,
c)}
return null}
function m(d,
c,
p,
w){
var E=c!==null?c.key:null;
if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:u(d,
c,
""+p,
w);
if(typeof p=="object"&&p!==null){
switch(p.$$typeof){
case gr:return p.key===E?a(d,
c,
p,
w):null;
case Bt:return p.key===E?s(d,
c,
p,
w):null;
case nt:return E=p._init,
m(d,
c,
E(p._payload),
w)}
if(Ln(p)||wn(p))return E!==null?null:h(d,
c,
p,
w,
null);
_r(d,
p)}
return null}
function y(d,
c,
p,
w,
E){
if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,
u(c,
d,
""+w,
E);
if(typeof w=="object"&&w!==null){
switch(w.$$typeof){
case gr:return d=d.get(w.key===null?p:w.key)||null,
a(c,
d,
w,
E);
case Bt:return d=d.get(w.key===null?p:w.key)||null,
s(c,
d,
w,
E);
case nt:var _=w._init;
return y(d,
c,
p,
_(w._payload),
E)}
if(Ln(w)||wn(w))return d=d.get(p)||null,
h(c,
d,
w,
E,
null);
_r(c,
w)}
return null}
function k(d,
c,
p,
w){
for(var E=null,
_=null,
P=c,
R=c=0,
M=null;
P!==null&&R<p.length;
R++){
P.index>R?(M=P,
P=null):M=P.sibling;
var L=m(d,
P,
p[R],
w);
if(L===null){
P===null&&(P=M);
break}
e&&P&&L.alternate===null&&t(d,
P),
c=o(L,
c,
R),
_===null?E=L:_.sibling=L,
_=L,
P=M}
if(R===p.length)return n(d,
P),
U&&Nt(d,
R),
E;
if(P===null){
for(;
R<p.length;
R++)P=v(d,
p[R],
w),
P!==null&&(c=o(P,
c,
R),
_===null?E=P:_.sibling=P,
_=P);
return U&&Nt(d,
R),
E}
for(P=r(d,
P);
R<p.length;
R++)M=y(P,
d,
R,
p[R],
w),
M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?R:M.key),
c=o(M,
c,
R),
_===null?E=M:_.sibling=M,
_=M);
return e&&P.forEach(function(de){
return t(d,
de)}
),
U&&Nt(d,
R),
E}
function x(d,
c,
p,
w){
var E=wn(p);
if(typeof E!="function")throw Error(S(150));
if(p=E.call(p),
p==null)throw Error(S(151));
for(var _=E=null,
P=c,
R=c=0,
M=null,
L=p.next();
P!==null&&!L.done;
R++,
L=p.next()){
P.index>R?(M=P,
P=null):M=P.sibling;
var de=m(d,
P,
L.value,
w);
if(de===null){
P===null&&(P=M);
break}
e&&P&&de.alternate===null&&t(d,
P),
c=o(de,
c,
R),
_===null?E=de:_.sibling=de,
_=de,
P=M}
if(L.done)return n(d,
P),
U&&Nt(d,
R),
E;
if(P===null){
for(;
!L.done;
R++,
L=p.next())L=v(d,
L.value,
w),
L!==null&&(c=o(L,
c,
R),
_===null?E=L:_.sibling=L,
_=L);
return U&&Nt(d,
R),
E}
for(P=r(d,
P);
!L.done;
R++,
L=p.next())L=y(P,
d,
R,
L.value,
w),
L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?R:L.key),
c=o(L,
c,
R),
_===null?E=L:_.sibling=L,
_=L);
return e&&P.forEach(function(yn){
return t(d,
yn)}
),
U&&Nt(d,
R),
E}
function C(d,
c,
p,
w){
if(typeof p=="object"&&p!==null&&p.type===Ht&&p.key===null&&(p=p.props.children),
typeof p=="object"&&p!==null){
switch(p.$$typeof){
case gr:e:{
for(var E=p.key,
_=c;
_!==null;
){
if(_.key===E){
if(E=p.type,
E===Ht){
if(_.tag===7){
n(d,
_.sibling),
c=l(_,
p.props.children),
c.return=d,
d=c;
break e}
}
else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nt&&Zu(E)===_.type){
n(d,
_.sibling),
c=l(_,
p.props),
c.ref=Nn(d,
_,
p),
c.return=d,
d=c;
break e}
n(d,
_);
break}
else t(d,
_);
_=_.sibling}
p.type===Ht?(c=zt(p.props.children,
d.mode,
w,
p.key),
c.return=d,
d=c):(w=Qr(p.type,
p.key,
p.props,
null,
d.mode,
w),
w.ref=Nn(d,
c,
p),
w.return=d,
d=w)}
return i(d);
case Bt:e:{
for(_=p.key;
c!==null;
){
if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){
n(d,
c.sibling),
c=l(c,
p.children||[]),
c.return=d,
d=c;
break e}
else{
n(d,
c);
break}
else t(d,
c);
c=c.sibling}
c=fo(p,
d.mode,
w),
c.return=d,
d=c}
return i(d);
case nt:return _=p._init,
C(d,
c,
_(p._payload),
w)}
if(Ln(p))return k(d,
c,
p,
w);
if(wn(p))return x(d,
c,
p,
w);
_r(d,
p)}
return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,
c!==null&&c.tag===6?(n(d,
c.sibling),
c=l(c,
p),
c.return=d,
d=c):(n(d,
c),
c=co(p,
d.mode,
w),
c.return=d,
d=c),
i(d)):n(d,
c)}
return C}
var sn=Hs(!0),
Ws=Hs(!1),
ul=wt(null),
al=null,
Zt=null,
Oi=null;
function Di(){
Oi=Zt=al=null}
function Fi(e){
var t=ul.current;
A(ul),
e._currentValue=t}
function Ko(e,
t,
n){
for(;
e!==null;
){
var r=e.alternate;
if((e.childLanes&t)!==t?(e.childLanes|=t,
r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),
e===n)break;
e=e.return}
}
function rn(e,
t){
al=e,
Oi=Zt=null,
e=e.dependencies,
e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),
e.firstContext=null)}
function Pe(e){
var t=e._currentValue;
if(Oi!==e)if(e={
context:e,
memoizedValue:t,
next:null}
,
Zt===null){
if(al===null)throw Error(S(308));
Zt=e,
al.dependencies={
lanes:0,
firstContext:e}
}
else Zt=Zt.next=e;
return t}
var _t=null;
function $i(e){
_t===null?_t=[e]:_t.push(e)}
function Vs(e,
t,
n,
r){
var l=t.interleaved;
return l===null?(n.next=n,
$i(t)):(n.next=l.next,
l.next=n),
t.interleaved=n,
Je(e,
r)}
function Je(e,
t){
e.lanes|=t;
var n=e.alternate;
for(n!==null&&(n.lanes|=t),
n=e,
e=e.return;
e!==null;
)e.childLanes|=t,
n=e.alternate,
n!==null&&(n.childLanes|=t),
n=e,
e=e.return;
return n.tag===3?n.stateNode:null}
var rt=!1;
function Ai(e){
e.updateQueue={
baseState:e.memoizedState,
firstBaseUpdate:null,
lastBaseUpdate:null,
shared:{
pending:null,
interleaved:null,
lanes:0}
,
effects:null}
}
function Qs(e,
t){
e=e.updateQueue,
t.updateQueue===e&&(t.updateQueue={
baseState:e.baseState,
firstBaseUpdate:e.firstBaseUpdate,
lastBaseUpdate:e.lastBaseUpdate,
shared:e.shared,
effects:e.effects}
)}
function Ye(e,
t){
return{
eventTime:e,
lane:t,
tag:0,
payload:null,
callback:null,
next:null}
}
function ft(e,
t,
n){
var r=e.updateQueue;
if(r===null)return null;
if(r=r.shared,
O&2){
var l=r.pending;
return l===null?t.next=t:(t.next=l.next,
l.next=t),
r.pending=t,
Je(e,
n)}
return l=r.interleaved,
l===null?(t.next=t,
$i(r)):(t.next=l.next,
l.next=t),
r.interleaved=t,
Je(e,
n)}
function Ar(e,
t,
n){
if(t=t.updateQueue,
t!==null&&(t=t.shared,
(n&4194240)!==0)){
var r=t.lanes;
r&=e.pendingLanes,
n|=r,
t.lanes=n,
Ci(e,
n)}
}
function Ju(e,
t){
var n=e.updateQueue,
r=e.alternate;
if(r!==null&&(r=r.updateQueue,
n===r)){
var l=null,
o=null;
if(n=n.firstBaseUpdate,
n!==null){
do{
var i={
eventTime:n.eventTime,
lane:n.lane,
tag:n.tag,
payload:n.payload,
callback:n.callback,
next:null}
;
o===null?l=o=i:o=o.next=i,
n=n.next}
while(n!==null);
o===null?l=o=t:o=o.next=t}
else l=o=t;
n={
baseState:r.baseState,
firstBaseUpdate:l,
lastBaseUpdate:o,
shared:r.shared,
effects:r.effects}
,
e.updateQueue=n;
return}
e=n.lastBaseUpdate,
e===null?n.firstBaseUpdate=t:e.next=t,
n.lastBaseUpdate=t}
function sl(e,
t,
n,
r){
var l=e.updateQueue;
rt=!1;
var o=l.firstBaseUpdate,
i=l.lastBaseUpdate,
u=l.shared.pending;
if(u!==null){
l.shared.pending=null;
var a=u,
s=a.next;
a.next=null,
i===null?o=s:i.next=s,
i=a;
var h=e.alternate;
h!==null&&(h=h.updateQueue,
u=h.lastBaseUpdate,
u!==i&&(u===null?h.firstBaseUpdate=s:u.next=s,
h.lastBaseUpdate=a))}
if(o!==null){
var v=l.baseState;
i=0,
h=s=a=null,
u=o;
do{
var m=u.lane,
y=u.eventTime;
if((r&m)===m){
h!==null&&(h=h.next={
eventTime:y,
lane:0,
tag:u.tag,
payload:u.payload,
callback:u.callback,
next:null}
);
e:{
var k=e,
x=u;
switch(m=t,
y=n,
x.tag){
case 1:if(k=x.payload,
typeof k=="function"){
v=k.call(y,
v,
m);
break e}
v=k;
break e;
case 3:k.flags=k.flags&-65537|128;
case 0:if(k=x.payload,
m=typeof k=="function"?k.call(y,
v,
m):k,
m==null)break e;
v=V({
}
,
v,
m);
break e;
case 2:rt=!0}
}
u.callback!==null&&u.lane!==0&&(e.flags|=64,
m=l.effects,
m===null?l.effects=[u]:m.push(u))}
else y={
eventTime:y,
lane:m,
tag:u.tag,
payload:u.payload,
callback:u.callback,
next:null}
,
h===null?(s=h=y,
a=v):h=h.next=y,
i|=m;
if(u=u.next,
u===null){
if(u=l.shared.pending,
u===null)break;
m=u,
u=m.next,
m.next=null,
l.lastBaseUpdate=m,
l.shared.pending=null}
}
while(!0);
if(h===null&&(a=v),
l.baseState=a,
l.firstBaseUpdate=s,
l.lastBaseUpdate=h,
t=l.shared.interleaved,
t!==null){
l=t;
do i|=l.lane,
l=l.next;
while(l!==t)}
else o===null&&(l.shared.lanes=0);
Ot|=i,
e.lanes=i,
e.memoizedState=v}
}
function qu(e,
t,
n){
if(e=t.effects,
t.effects=null,
e!==null)for(t=0;
t<e.length;
t++){
var r=e[t],
l=r.callback;
if(l!==null){
if(r.callback=null,
r=n,
typeof l!="function")throw Error(S(191,
l));
l.call(r)}
}
}
var cr={
}
,
Ue=wt(cr),
bn=wt(cr),
er=wt(cr);
function Rt(e){
if(e===cr)throw Error(S(174));
return e}
function Ui(e,
t){
switch(F(er,
t),
F(bn,
e),
F(Ue,
cr),
e=t.nodeType,
e){
case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jo(null,
"");
break;
default:e=e===8?t.parentNode:t,
t=e.namespaceURI||null,
e=e.tagName,
t=jo(t,
e)}
A(Ue),
F(Ue,
t)}
function cn(){
A(Ue),
A(bn),
A(er)}
function Ks(e){
Rt(er.current);
var t=Rt(Ue.current),
n=jo(t,
e.type);
t!==n&&(F(bn,
e),
F(Ue,
n))}
function Bi(e){
bn.current===e&&(A(Ue),
A(bn))}
var B=wt(0);
function cl(e){
for(var t=e;
t!==null;
){
if(t.tag===13){
var n=t.memoizedState;
if(n!==null&&(n=n.dehydrated,
n===null||n.data==="$?"||n.data==="$!"))return t}
else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){
if(t.flags&128)return t}
else if(t.child!==null){
t.child.return=t,
t=t.child;
continue}
if(t===e)break;
for(;
t.sibling===null;
){
if(t.return===null||t.return===e)return null;
t=t.return}
t.sibling.return=t.return,
t=t.sibling}
return null}
var lo=[];
function Hi(){
for(var e=0;
e<lo.length;
e++)lo[e]._workInProgressVersionPrimary=null;
lo.length=0}
var Ur=be.ReactCurrentDispatcher,
oo=be.ReactCurrentBatchConfig,
Mt=0,
H=null,
X=null,
q=null,
dl=!1,
$n=!1,
tr=0,
ep=0;
function re(){
throw Error(S(321))}
function Wi(e,
t){
if(t===null)return!1;
for(var n=0;
n<t.length&&n<e.length;
n++)if(!Oe(e[n],
t[n]))return!1;
return!0}
function Vi(e,
t,
n,
r,
l,
o){
if(Mt=o,
H=t,
t.memoizedState=null,
t.updateQueue=null,
t.lanes=0,
Ur.current=e===null||e.memoizedState===null?lp:op,
e=n(r,
l),
$n){
o=0;
do{
if($n=!1,
tr=0,
25<=o)throw Error(S(301));
o+=1,
q=X=null,
t.updateQueue=null,
Ur.current=ip,
e=n(r,
l)}
while($n)}
if(Ur.current=fl,
t=X!==null&&X.next!==null,
Mt=0,
q=X=H=null,
dl=!1,
t)throw Error(S(300));
return e}
function Qi(){
var e=tr!==0;
return tr=0,
e}
function Fe(){
var e={
memoizedState:null,
baseState:null,
baseQueue:null,
queue:null,
next:null}
;
return q===null?H.memoizedState=q=e:q=q.next=e,
q}
function _e(){
if(X===null){
var e=H.alternate;
e=e!==null?e.memoizedState:null}
else e=X.next;
var t=q===null?H.memoizedState:q.next;
if(t!==null)q=t,
X=e;
else{
if(e===null)throw Error(S(310));
X=e,
e={
memoizedState:X.memoizedState,
baseState:X.baseState,
baseQueue:X.baseQueue,
queue:X.queue,
next:null}
,
q===null?H.memoizedState=q=e:q=q.next=e}
return q}
function nr(e,
t){
return typeof t=="function"?t(e):t}
function io(e){
var t=_e(),
n=t.queue;
if(n===null)throw Error(S(311));
n.lastRenderedReducer=e;
var r=X,
l=r.baseQueue,
o=n.pending;
if(o!==null){
if(l!==null){
var i=l.next;
l.next=o.next,
o.next=i}
r.baseQueue=l=o,
n.pending=null}
if(l!==null){
o=l.next,
r=r.baseState;
var u=i=null,
a=null,
s=o;
do{
var h=s.lane;
if((Mt&h)===h)a!==null&&(a=a.next={
lane:0,
action:s.action,
hasEagerState:s.hasEagerState,
eagerState:s.eagerState,
next:null}
),
r=s.hasEagerState?s.eagerState:e(r,
s.action);
else{
var v={
lane:h,
action:s.action,
hasEagerState:s.hasEagerState,
eagerState:s.eagerState,
next:null}
;
a===null?(u=a=v,
i=r):a=a.next=v,
H.lanes|=h,
Ot|=h}
s=s.next}
while(s!==null&&s!==o);
a===null?i=r:a.next=u,
Oe(r,
t.memoizedState)||(pe=!0),
t.memoizedState=r,
t.baseState=i,
t.baseQueue=a,
n.lastRenderedState=r}
if(e=n.interleaved,
e!==null){
l=e;
do o=l.lane,
H.lanes|=o,
Ot|=o,
l=l.next;
while(l!==e)}
else l===null&&(n.lanes=0);
return[t.memoizedState,
n.dispatch]}
function uo(e){
var t=_e(),
n=t.queue;
if(n===null)throw Error(S(311));
n.lastRenderedReducer=e;
var r=n.dispatch,
l=n.pending,
o=t.memoizedState;
if(l!==null){
n.pending=null;
var i=l=l.next;
do o=e(o,
i.action),
i=i.next;
while(i!==l);
Oe(o,
t.memoizedState)||(pe=!0),
t.memoizedState=o,
t.baseQueue===null&&(t.baseState=o),
n.lastRenderedState=o}
return[o,
r]}
function Ys(){
}
function Gs(e,
t){
var n=H,
r=_e(),
l=t(),
o=!Oe(r.memoizedState,
l);
if(o&&(r.memoizedState=l,
pe=!0),
r=r.queue,
Ki(Js.bind(null,
n,
r,
e),
[e]),
r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){
if(n.flags|=2048,
rr(9,
Zs.bind(null,
n,
r,
l,
t),
void 0,
null),
b===null)throw Error(S(349));
Mt&30||Xs(n,
t,
l)}
return l}
function Xs(e,
t,
n){
e.flags|=16384,
e={
getSnapshot:t,
value:n}
,
t=H.updateQueue,
t===null?(t={
lastEffect:null,
stores:null}
,
H.updateQueue=t,
t.stores=[e]):(n=t.stores,
n===null?t.stores=[e]:n.push(e))}
function Zs(e,
t,
n,
r){
t.value=n,
t.getSnapshot=r,
qs(t)&&bs(e)}
function Js(e,
t,
n){
return n(function(){
qs(t)&&bs(e)}
)}
function qs(e){
var t=e.getSnapshot;
e=e.value;
try{
var n=t();
return!Oe(e,
n)}
catch{
return!0}
}
function bs(e){
var t=Je(e,
1);
t!==null&&Me(t,
e,
1,
-1)}
function bu(e){
var t=Fe();
return typeof e=="function"&&(e=e()),
t.memoizedState=t.baseState=e,
e={
pending:null,
interleaved:null,
lanes:0,
dispatch:null,
lastRenderedReducer:nr,
lastRenderedState:e}
,
t.queue=e,
e=e.dispatch=rp.bind(null,
H,
e),
[t.memoizedState,
e]}
function rr(e,
t,
n,
r){
return e={
tag:e,
create:t,
destroy:n,
deps:r,
next:null}
,
t=H.updateQueue,
t===null?(t={
lastEffect:null,
stores:null}
,
H.updateQueue=t,
t.lastEffect=e.next=e):(n=t.lastEffect,
n===null?t.lastEffect=e.next=e:(r=n.next,
n.next=e,
e.next=r,
t.lastEffect=e)),
e}
function ec(){
return _e().memoizedState}
function Br(e,
t,
n,
r){
var l=Fe();
H.flags|=e,
l.memoizedState=rr(1|t,
n,
void 0,
r===void 0?null:r)}
function jl(e,
t,
n,
r){
var l=_e();
r=r===void 0?null:r;
var o=void 0;
if(X!==null){
var i=X.memoizedState;
if(o=i.destroy,
r!==null&&Wi(r,
i.deps)){
l.memoizedState=rr(t,
n,
o,
r);
return}
}
H.flags|=e,
l.memoizedState=rr(1|t,
n,
o,
r)}
function ea(e,
t){
return Br(8390656,
8,
e,
t)}
function Ki(e,
t){
return jl(2048,
8,
e,
t)}
function tc(e,
t){
return jl(4,
2,
e,
t)}
function nc(e,
t){
return jl(4,
4,
e,
t)}
function rc(e,
t){
if(typeof t=="function")return e=e(),
t(e),
function(){
t(null)}
;
if(t!=null)return e=e(),
t.current=e,
function(){
t.current=null}
}
function lc(e,
t,
n){
return n=n!=null?n.concat([e]):null,
jl(4,
4,
rc.bind(null,
t,
e),
n)}
function Yi(){
}
function oc(e,
t){
var n=_e();
t=t===void 0?null:t;
var r=n.memoizedState;
return r!==null&&t!==null&&Wi(t,
r[1])?r[0]:(n.memoizedState=[e,
t],
e)}
function ic(e,
t){
var n=_e();
t=t===void 0?null:t;
var r=n.memoizedState;
return r!==null&&t!==null&&Wi(t,
r[1])?r[0]:(e=e(),
n.memoizedState=[e,
t],
e)}
function uc(e,
t,
n){
return Mt&21?(Oe(n,
t)||(n=fs(),
H.lanes|=n,
Ot|=n,
e.baseState=!0),
t):(e.baseState&&(e.baseState=!1,
pe=!0),
e.memoizedState=n)}
function tp(e,
t){
var n=D;
D=n!==0&&4>n?n:4,
e(!0);
var r=oo.transition;
oo.transition={
}
;
try{
e(!1),
t()}
finally{
D=n,
oo.transition=r}
}
function ac(){
return _e().memoizedState}
function np(e,
t,
n){
var r=mt(e);
if(n={
lane:r,
action:n,
hasEagerState:!1,
eagerState:null,
next:null}
,
sc(e))cc(t,
n);
else if(n=Vs(e,
t,
n,
r),
n!==null){
var l=ae();
Me(n,
e,
r,
l),
dc(n,
t,
r)}
}
function rp(e,
t,
n){
var r=mt(e),
l={
lane:r,
action:n,
hasEagerState:!1,
eagerState:null,
next:null}
;
if(sc(e))cc(t,
l);
else{
var o=e.alternate;
if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,
o!==null))try{
var i=t.lastRenderedState,
u=o(i,
n);
if(l.hasEagerState=!0,
l.eagerState=u,
Oe(u,
i)){
var a=t.interleaved;
a===null?(l.next=l,
$i(t)):(l.next=a.next,
a.next=l),
t.interleaved=l;
return}
}
catch{
}
finally{
}
n=Vs(e,
t,
l,
r),
n!==null&&(l=ae(),
Me(n,
e,
r,
l),
dc(n,
t,
r))}
}
function sc(e){
var t=e.alternate;
return e===H||t!==null&&t===H}
function cc(e,
t){
$n=dl=!0;
var n=e.pending;
n===null?t.next=t:(t.next=n.next,
n.next=t),
e.pending=t}
function dc(e,
t,
n){
if(n&4194240){
var r=t.lanes;
r&=e.pendingLanes,
n|=r,
t.lanes=n,
Ci(e,
n)}
}
var fl={
readContext:Pe,
useCallback:re,
useContext:re,
useEffect:re,
useImperativeHandle:re,
useInsertionEffect:re,
useLayoutEffect:re,
useMemo:re,
useReducer:re,
useRef:re,
useState:re,
useDebugValue:re,
useDeferredValue:re,
useTransition:re,
useMutableSource:re,
useSyncExternalStore:re,
useId:re,
unstable_isNewReconciler:!1}
,
lp={
readContext:Pe,
useCallback:function(e,
t){
return Fe().memoizedState=[e,
t===void 0?null:t],
e}
,
useContext:Pe,
useEffect:ea,
useImperativeHandle:function(e,
t,
n){
return n=n!=null?n.concat([e]):null,
Br(4194308,
4,
rc.bind(null,
t,
e),
n)}
,
useLayoutEffect:function(e,
t){
return Br(4194308,
4,
e,
t)}
,
useInsertionEffect:function(e,
t){
return Br(4,
2,
e,
t)}
,
useMemo:function(e,
t){
var n=Fe();
return t=t===void 0?null:t,
e=e(),
n.memoizedState=[e,
t],
e}
,
useReducer:function(e,
t,
n){
var r=Fe();
return t=n!==void 0?n(t):t,
r.memoizedState=r.baseState=t,
e={
pending:null,
interleaved:null,
lanes:0,
dispatch:null,
lastRenderedReducer:e,
lastRenderedState:t}
,
r.queue=e,
e=e.dispatch=np.bind(null,
H,
e),
[r.memoizedState,
e]}
,
useRef:function(e){
var t=Fe();
return e={
current:e}
,
t.memoizedState=e}
,
useState:bu,
useDebugValue:Yi,
useDeferredValue:function(e){
return Fe().memoizedState=e}
,
useTransition:function(){
var e=bu(!1),
t=e[0];
return e=tp.bind(null,
e[1]),
Fe().memoizedState=e,
[t,
e]}
,
useMutableSource:function(){
}
,
useSyncExternalStore:function(e,
t,
n){
var r=H,
l=Fe();
if(U){
if(n===void 0)throw Error(S(407));
n=n()}
else{
if(n=t(),
b===null)throw Error(S(349));
Mt&30||Xs(r,
t,
n)}
l.memoizedState=n;
var o={
value:n,
getSnapshot:t}
;
return l.queue=o,
ea(Js.bind(null,
r,
o,
e),
[e]),
r.flags|=2048,
rr(9,
Zs.bind(null,
r,
o,
n,
t),
void 0,
null),
n}
,
useId:function(){
var e=Fe(),
t=b.identifierPrefix;
if(U){
var n=Ke,
r=Qe;
n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,
t=":"+t+"R"+n,
n=tr++,
0<n&&(t+="H"+n.toString(32)),
t+=":"}
else n=ep++,
t=":"+t+"r"+n.toString(32)+":";
return e.memoizedState=t}
,
unstable_isNewReconciler:!1}
,
op={
readContext:Pe,
useCallback:oc,
useContext:Pe,
useEffect:Ki,
useImperativeHandle:lc,
useInsertionEffect:tc,
useLayoutEffect:nc,
useMemo:ic,
useReducer:io,
useRef:ec,
useState:function(){
return io(nr)}
,
useDebugValue:Yi,
useDeferredValue:function(e){
var t=_e();
return uc(t,
X.memoizedState,
e)}
,
useTransition:function(){
var e=io(nr)[0],
t=_e().memoizedState;
return[e,
t]}
,
useMutableSource:Ys,
useSyncExternalStore:Gs,
useId:ac,
unstable_isNewReconciler:!1}
,
ip={
readContext:Pe,
useCallback:oc,
useContext:Pe,
useEffect:Ki,
useImperativeHandle:lc,
useInsertionEffect:tc,
useLayoutEffect:nc,
useMemo:ic,
useReducer:uo,
useRef:ec,
useState:function(){
return uo(nr)}
,
useDebugValue:Yi,
useDeferredValue:function(e){
var t=_e();
return X===null?t.memoizedState=e:uc(t,
X.memoizedState,
e)}
,
useTransition:function(){
var e=uo(nr)[0],
t=_e().memoizedState;
return[e,
t]}
,
useMutableSource:Ys,
useSyncExternalStore:Gs,
useId:ac,
unstable_isNewReconciler:!1}
;
function Le(e,
t){
if(e&&e.defaultProps){
t=V({
}
,
t),
e=e.defaultProps;
for(var n in e)t[n]===void 0&&(t[n]=e[n]);
return t}
return t}
function Yo(e,
t,
n,
r){
t=e.memoizedState,
n=n(r,
t),
n=n==null?t:V({
}
,
t,
n),
e.memoizedState=n,
e.lanes===0&&(e.updateQueue.baseState=n)}
var Pl={
isMounted:function(e){
return(e=e._reactInternals)?$t(e)===e:!1}
,
enqueueSetState:function(e,
t,
n){
e=e._reactInternals;
var r=ae(),
l=mt(e),
o=Ye(r,
l);
o.payload=t,
n!=null&&(o.callback=n),
t=ft(e,
o,
l),
t!==null&&(Me(t,
e,
l,
r),
Ar(t,
e,
l))}
,
enqueueReplaceState:function(e,
t,
n){
e=e._reactInternals;
var r=ae(),
l=mt(e),
o=Ye(r,
l);
o.tag=1,
o.payload=t,
n!=null&&(o.callback=n),
t=ft(e,
o,
l),
t!==null&&(Me(t,
e,
l,
r),
Ar(t,
e,
l))}
,
enqueueForceUpdate:function(e,
t){
e=e._reactInternals;
var n=ae(),
r=mt(e),
l=Ye(n,
r);
l.tag=2,
t!=null&&(l.callback=t),
t=ft(e,
l,
r),
t!==null&&(Me(t,
e,
r,
n),
Ar(t,
e,
r))}
}
;
function ta(e,
t,
n,
r,
l,
o,
i){
return e=e.stateNode,
typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,
o,
i):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,
r)||!Xn(l,
o):!0}
function fc(e,
t,
n){
var r=!1,
l=gt,
o=t.contextType;
return typeof o=="object"&&o!==null?o=Pe(o):(l=he(t)?Tt:ie.current,
r=t.contextTypes,
o=(r=r!=null)?un(e,
l):gt),
t=new t(n,
o),
e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,
t.updater=Pl,
e.stateNode=t,
t._reactInternals=e,
r&&(e=e.stateNode,
e.__reactInternalMemoizedUnmaskedChildContext=l,
e.__reactInternalMemoizedMaskedChildContext=o),
t}
function na(e,
t,
n,
r){
e=t.state,
typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,
r),
typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,
r),
t.state!==e&&Pl.enqueueReplaceState(t,
t.state,
null)}
function Go(e,
t,
n,
r){
var l=e.stateNode;
l.props=n,
l.state=e.memoizedState,
l.refs={
}
,
Ai(e);
var o=t.contextType;
typeof o=="object"&&o!==null?l.context=Pe(o):(o=he(t)?Tt:ie.current,
l.context=un(e,
o)),
l.state=e.memoizedState,
o=t.getDerivedStateFromProps,
typeof o=="function"&&(Yo(e,
t,
o,
n),
l.state=e.memoizedState),
typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,
typeof l.componentWillMount=="function"&&l.componentWillMount(),
typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),
t!==l.state&&Pl.enqueueReplaceState(l,
l.state,
null),
sl(e,
n,
l,
r),
l.state=e.memoizedState),
typeof l.componentDidMount=="function"&&(e.flags|=4194308)}
function dn(e,
t){
try{
var n="",
r=t;
do n+=Id(r),
r=r.return;
while(r);
var l=n}
catch(o){
l=`
Error generating stack: `+o.message+`
`+o.stack}
return{
value:e,
source:t,
stack:l,
digest:null}
}
function ao(e,
t,
n){
return{
value:e,
source:null,
stack:n??null,
digest:t??null}
}
function Xo(e,
t){
try{
console.error(t.value)}
catch(n){
setTimeout(function(){
throw n}
)}
}
var up=typeof WeakMap=="function"?WeakMap:Map;
function pc(e,
t,
n){
n=Ye(-1,
n),
n.tag=3,
n.payload={
element:null}
;
var r=t.value;
return n.callback=function(){
ml||(ml=!0,
oi=r),
Xo(e,
t)}
,
n}
function mc(e,
t,
n){
n=Ye(-1,
n),
n.tag=3;
var r=e.type.getDerivedStateFromError;
if(typeof r=="function"){
var l=t.value;
n.payload=function(){
return r(l)}
,
n.callback=function(){
Xo(e,
t)}
}
var o=e.stateNode;
return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){
Xo(e,
t),
typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));
var i=t.stack;
this.componentDidCatch(t.value,
{
componentStack:i!==null?i:""}
)}
),
n}
function ra(e,
t,
n){
var r=e.pingCache;
if(r===null){
r=e.pingCache=new up;
var l=new Set;
r.set(t,
l)}
else l=r.get(t),
l===void 0&&(l=new Set,
r.set(t,
l));
l.has(n)||(l.add(n),
e=kp.bind(null,
e,
t,
n),
t.then(e,
e))}
function la(e){
do{
var t;
if((t=e.tag===13)&&(t=e.memoizedState,
t=t!==null?t.dehydrated!==null:!0),
t)return e;
e=e.return}
while(e!==null);
return null}
function oa(e,
t,
n,
r,
l){
return e.mode&1?(e.flags|=65536,
e.lanes=l,
e):(e===t?e.flags|=65536:(e.flags|=128,
n.flags|=131072,
n.flags&=-52805,
n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,
1),
t.tag=2,
ft(n,
t,
1))),
n.lanes|=1),
e)}
var ap=be.ReactCurrentOwner,
pe=!1;
function ue(e,
t,
n,
r){
t.child=e===null?Ws(t,
null,
n,
r):sn(t,
e.child,
n,
r)}
function ia(e,
t,
n,
r,
l){
n=n.render;
var o=t.ref;
return rn(t,
l),
r=Vi(e,
t,
n,
r,
o,
l),
n=Qi(),
e!==null&&!pe?(t.updateQueue=e.updateQueue,
t.flags&=-2053,
e.lanes&=~l,
qe(e,
t,
l)):(U&&n&&Ti(t),
t.flags|=1,
ue(e,
t,
r,
l),
t.child)}
function ua(e,
t,
n,
r,
l){
if(e===null){
var o=n.type;
return typeof o=="function"&&!tu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,
t.type=o,
hc(e,
t,
o,
r,
l)):(e=Qr(n.type,
null,
r,
t,
t.mode,
l),
e.ref=t.ref,
e.return=t,
t.child=e)}
if(o=e.child,
!(e.lanes&l)){
var i=o.memoizedProps;
if(n=n.compare,
n=n!==null?n:Xn,
n(i,
r)&&e.ref===t.ref)return qe(e,
t,
l)}
return t.flags|=1,
e=ht(o,
r),
e.ref=t.ref,
e.return=t,
t.child=e}
function hc(e,
t,
n,
r,
l){
if(e!==null){
var o=e.memoizedProps;
if(Xn(o,
r)&&e.ref===t.ref)if(pe=!1,
t.pendingProps=r=o,
(e.lanes&l)!==0)e.flags&131072&&(pe=!0);
else return t.lanes=e.lanes,
qe(e,
t,
l)}
return Zo(e,
t,
n,
r,
l)}
function vc(e,
t,
n){
var r=t.pendingProps,
l=r.children,
o=e!==null?e.memoizedState:null;
if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={
baseLanes:0,
cachePool:null,
transitions:null}
,
F(qt,
ge),
ge|=n;
else{
if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,
t.lanes=t.childLanes=1073741824,
t.memoizedState={
baseLanes:e,
cachePool:null,
transitions:null}
,
t.updateQueue=null,
F(qt,
ge),
ge|=e,
null;
t.memoizedState={
baseLanes:0,
cachePool:null,
transitions:null}
,
r=o!==null?o.baseLanes:n,
F(qt,
ge),
ge|=r}
else o!==null?(r=o.baseLanes|n,
t.memoizedState=null):r=n,
F(qt,
ge),
ge|=r;
return ue(e,
t,
l,
n),
t.child}
function gc(e,
t){
var n=t.ref;
(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,
t.flags|=2097152)}
function Zo(e,
t,
n,
r,
l){
var o=he(n)?Tt:ie.current;
return o=un(t,
o),
rn(t,
l),
n=Vi(e,
t,
n,
r,
o,
l),
r=Qi(),
e!==null&&!pe?(t.updateQueue=e.updateQueue,
t.flags&=-2053,
e.lanes&=~l,
qe(e,
t,
l)):(U&&r&&Ti(t),
t.flags|=1,
ue(e,
t,
n,
l),
t.child)}
function aa(e,
t,
n,
r,
l){
if(he(n)){
var o=!0;
ll(t)}
else o=!1;
if(rn(t,
l),
t.stateNode===null)Hr(e,
t),
fc(t,
n,
r),
Go(t,
n,
r,
l),
r=!0;
else if(e===null){
var i=t.stateNode,
u=t.memoizedProps;
i.props=u;
var a=i.context,
s=n.contextType;
typeof s=="object"&&s!==null?s=Pe(s):(s=he(n)?Tt:ie.current,
s=un(t,
s));
var h=n.getDerivedStateFromProps,
v=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";
v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==s)&&na(t,
i,
r,
s),
rt=!1;
var m=t.memoizedState;
i.state=m,
sl(t,
r,
i,
l),
a=t.memoizedState,
u!==r||m!==a||me.current||rt?(typeof h=="function"&&(Yo(t,
n,
h,
r),
a=t.memoizedState),
(u=rt||ta(t,
n,
u,
r,
m,
a,
s))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),
typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),
typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),
t.memoizedProps=r,
t.memoizedState=a),
i.props=r,
i.state=a,
i.context=s,
r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),
r=!1)}
else{
i=t.stateNode,
Qs(e,
t),
u=t.memoizedProps,
s=t.type===t.elementType?u:Le(t.type,
u),
i.props=s,
v=t.pendingProps,
m=i.context,
a=n.contextType,
typeof a=="object"&&a!==null?a=Pe(a):(a=he(n)?Tt:ie.current,
a=un(t,
a));
var y=n.getDerivedStateFromProps;
(h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==a)&&na(t,
i,
r,
a),
rt=!1,
m=t.memoizedState,
i.state=m,
sl(t,
r,
i,
l);
var k=t.memoizedState;
u!==v||m!==k||me.current||rt?(typeof y=="function"&&(Yo(t,
n,
y,
r),
k=t.memoizedState),
(s=rt||ta(t,
n,
s,
r,
m,
k,
a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,
k,
a),
typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,
k,
a)),
typeof i.componentDidUpdate=="function"&&(t.flags|=4),
typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),
typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),
t.memoizedProps=r,
t.memoizedState=k),
i.props=r,
i.state=k,
i.context=a,
r=s):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),
typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),
r=!1)}
return Jo(e,
t,
n,
r,
o,
l)}
function Jo(e,
t,
n,
r,
l,
o){
gc(e,
t);
var i=(t.flags&128)!==0;
if(!r&&!i)return l&&Yu(t,
n,
!1),
qe(e,
t,
o);
r=t.stateNode,
ap.current=t;
var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();
return t.flags|=1,
e!==null&&i?(t.child=sn(t,
e.child,
null,
o),
t.child=sn(t,
null,
u,
o)):ue(e,
t,
u,
o),
t.memoizedState=r.state,
l&&Yu(t,
n,
!0),
t.child}
function yc(e){
var t=e.stateNode;
t.pendingContext?Ku(e,
t.pendingContext,
t.pendingContext!==t.context):t.context&&Ku(e,
t.context,
!1),
Ui(e,
t.containerInfo)}
function sa(e,
t,
n,
r,
l){
return an(),
Mi(l),
t.flags|=256,
ue(e,
t,
n,
r),
t.child}
var qo={
dehydrated:null,
treeContext:null,
retryLane:0}
;
function bo(e){
return{
baseLanes:e,
cachePool:null,
transitions:null}
}
function xc(e,
t,
n){
var r=t.pendingProps,
l=B.current,
o=!1,
i=(t.flags&128)!==0,
u;
if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),
u?(o=!0,
t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),
F(B,
l&1),
e===null)return Qo(t),
e=t.memoizedState,
e!==null&&(e=e.dehydrated,
e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,
null):(i=r.children,
e=r.fallback,
o?(r=t.mode,
o=t.child,
i={
mode:"hidden",
children:i}
,
!(r&1)&&o!==null?(o.childLanes=0,
o.pendingProps=i):o=Ll(i,
r,
0,
null),
e=zt(e,
r,
n,
null),
o.return=t,
e.return=t,
o.sibling=e,
t.child=o,
t.child.memoizedState=bo(n),
t.memoizedState=qo,
e):Gi(t,
i));
if(l=e.memoizedState,
l!==null&&(u=l.dehydrated,
u!==null))return sp(e,
t,
i,
r,
u,
l,
n);
if(o){
o=r.fallback,
i=t.mode,
l=e.child,
u=l.sibling;
var a={
mode:"hidden",
children:r.children}
;
return!(i&1)&&t.child!==l?(r=t.child,
r.childLanes=0,
r.pendingProps=a,
t.deletions=null):(r=ht(l,
a),
r.subtreeFlags=l.subtreeFlags&14680064),
u!==null?o=ht(u,
o):(o=zt(o,
i,
n,
null),
o.flags|=2),
o.return=t,
r.return=t,
r.sibling=o,
t.child=r,
r=o,
o=t.child,
i=e.child.memoizedState,
i=i===null?bo(n):{
baseLanes:i.baseLanes|n,
cachePool:null,
transitions:i.transitions}
,
o.memoizedState=i,
o.childLanes=e.childLanes&~n,
t.memoizedState=qo,
r}
return o=e.child,
e=o.sibling,
r=ht(o,
{
mode:"visible",
children:r.children}
),
!(t.mode&1)&&(r.lanes=n),
r.return=t,
r.sibling=null,
e!==null&&(n=t.deletions,
n===null?(t.deletions=[e],
t.flags|=16):n.push(e)),
t.child=r,
t.memoizedState=null,
r}
function Gi(e,
t){
return t=Ll({
mode:"visible",
children:t}
,
e.mode,
0,
null),
t.return=e,
e.child=t}
function Rr(e,
t,
n,
r){
return r!==null&&Mi(r),
sn(t,
e.child,
null,
n),
e=Gi(t,
t.pendingProps.children),
e.flags|=2,
t.memoizedState=null,
e}
function sp(e,
t,
n,
r,
l,
o,
i){
if(n)return t.flags&256?(t.flags&=-257,
r=ao(Error(S(422))),
Rr(e,
t,
i,
r)):t.memoizedState!==null?(t.child=e.child,
t.flags|=128,
null):(o=r.fallback,
l=t.mode,
r=Ll({
mode:"visible",
children:r.children}
,
l,
0,
null),
o=zt(o,
l,
i,
null),
o.flags|=2,
r.return=t,
o.return=t,
r.sibling=o,
t.child=r,
t.mode&1&&sn(t,
e.child,
null,
i),
t.child.memoizedState=bo(i),
t.memoizedState=qo,
o);
if(!(t.mode&1))return Rr(e,
t,
i,
null);
if(l.data==="$!"){
if(r=l.nextSibling&&l.nextSibling.dataset,
r)var u=r.dgst;
return r=u,
o=Error(S(419)),
r=ao(o,
r,
void 0),
Rr(e,
t,
i,
r)}
if(u=(i&e.childLanes)!==0,
pe||u){
if(r=b,
r!==null){
switch(i&-i){
case 4:l=2;
break;
case 16:l=8;
break;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;
break;
case 536870912:l=268435456;
break;
default:l=0}
l=l&(r.suspendedLanes|i)?0:l,
l!==0&&l!==o.retryLane&&(o.retryLane=l,
Je(e,
l),
Me(r,
e,
l,
-1))}
return eu(),
r=ao(Error(S(421))),
Rr(e,
t,
i,
r)}
return l.data==="$?"?(t.flags|=128,
t.child=e.child,
t=Sp.bind(null,
e),
l._reactRetry=t,
null):(e=o.treeContext,
ye=dt(l.nextSibling),
xe=t,
U=!0,
Te=null,
e!==null&&(Ee[Ce++]=Qe,
Ee[Ce++]=Ke,
Ee[Ce++]=It,
Qe=e.id,
Ke=e.overflow,
It=t),
t=Gi(t,
r.children),
t.flags|=4096,
t)}
function ca(e,
t,
n){
e.lanes|=t;
var r=e.alternate;
r!==null&&(r.lanes|=t),
Ko(e.return,
t,
n)}
function so(e,
t,
n,
r,
l){
var o=e.memoizedState;
o===null?e.memoizedState={
isBackwards:t,
rendering:null,
renderingStartTime:0,
last:r,
tail:n,
tailMode:l}
:(o.isBackwards=t,
o.rendering=null,
o.renderingStartTime=0,
o.last=r,
o.tail=n,
o.tailMode=l)}
function wc(e,
t,
n){
var r=t.pendingProps,
l=r.revealOrder,
o=r.tail;
if(ue(e,
t,
r.children,
n),
r=B.current,
r&2)r=r&1|2,
t.flags|=128;
else{
if(e!==null&&e.flags&128)e:for(e=t.child;
e!==null;
){
if(e.tag===13)e.memoizedState!==null&&ca(e,
n,
t);
else if(e.tag===19)ca(e,
n,
t);
else if(e.child!==null){
e.child.return=e,
e=e.child;
continue}
if(e===t)break e;
for(;
e.sibling===null;
){
if(e.return===null||e.return===t)break e;
e=e.return}
e.sibling.return=e.return,
e=e.sibling}
r&=1}
if(F(B,
r),
!(t.mode&1))t.memoizedState=null;
else switch(l){
case"forwards":for(n=t.child,
l=null;
n!==null;
)e=n.alternate,
e!==null&&cl(e)===null&&(l=n),
n=n.sibling;
n=l,
n===null?(l=t.child,
t.child=null):(l=n.sibling,
n.sibling=null),
so(t,
!1,
l,
n,
o);
break;
case"backwards":for(n=null,
l=t.child,
t.child=null;
l!==null;
){
if(e=l.alternate,
e!==null&&cl(e)===null){
t.child=l;
break}
e=l.sibling,
l.sibling=n,
n=l,
l=e}
so(t,
!0,
n,
null,
o);
break;
case"together":so(t,
!1,
null,
null,
void 0);
break;
default:t.memoizedState=null}
return t.child}
function Hr(e,
t){
!(t.mode&1)&&e!==null&&(e.alternate=null,
t.alternate=null,
t.flags|=2)}
function qe(e,
t,
n){
if(e!==null&&(t.dependencies=e.dependencies),
Ot|=t.lanes,
!(n&t.childLanes))return null;
if(e!==null&&t.child!==e.child)throw Error(S(153));
if(t.child!==null){
for(e=t.child,
n=ht(e,
e.pendingProps),
t.child=n,
n.return=t;
e.sibling!==null;
)e=e.sibling,
n=n.sibling=ht(e,
e.pendingProps),
n.return=t;
n.sibling=null}
return t.child}
function cp(e,
t,
n){
switch(t.tag){
case 3:yc(t),
an();
break;
case 5:Ks(t);
break;
case 1:he(t.type)&&ll(t);
break;
case 4:Ui(t,
t.stateNode.containerInfo);
break;
case 10:var r=t.type._context,
l=t.memoizedProps.value;
F(ul,
r._currentValue),
r._currentValue=l;
break;
case 13:if(r=t.memoizedState,
r!==null)return r.dehydrated!==null?(F(B,
B.current&1),
t.flags|=128,
null):n&t.child.childLanes?xc(e,
t,
n):(F(B,
B.current&1),
e=qe(e,
t,
n),
e!==null?e.sibling:null);
F(B,
B.current&1);
break;
case 19:if(r=(n&t.childLanes)!==0,
e.flags&128){
if(r)return wc(e,
t,
n);
t.flags|=128}
if(l=t.memoizedState,
l!==null&&(l.rendering=null,
l.tail=null,
l.lastEffect=null),
F(B,
B.current),
r)break;
return null;
case 22:case 23:return t.lanes=0,
vc(e,
t,
n)}
return qe(e,
t,
n)}
var kc,
ei,
Sc,
Ec;
kc=function(e,
t){
for(var n=t.child;
n!==null;
){
if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);
else if(n.tag!==4&&n.child!==null){
n.child.return=n,
n=n.child;
continue}
if(n===t)break;
for(;
n.sibling===null;
){
if(n.return===null||n.return===t)return;
n=n.return}
n.sibling.return=n.return,
n=n.sibling}
}
;
ei=function(){
}
;
Sc=function(e,
t,
n,
r){
var l=e.memoizedProps;
if(l!==r){
e=t.stateNode,
Rt(Ue.current);
var o=null;
switch(n){
case"input":l=So(e,
l),
r=So(e,
r),
o=[];
break;
case"select":l=V({
}
,
l,
{
value:void 0}
),
r=V({
}
,
r,
{
value:void 0}
),
o=[];
break;
case"textarea":l=No(e,
l),
r=No(e,
r),
o=[];
break;
default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=nl)}
Po(n,
r);
var i;
n=null;
for(s in l)if(!r.hasOwnProperty(s)&&l.hasOwnProperty(s)&&l[s]!=null)if(s==="style"){
var u=l[s];
for(i in u)u.hasOwnProperty(i)&&(n||(n={
}
),
n[i]="")}
else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hn.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,
null));
for(s in r){
var a=r[s];
if(u=l!=null?l[s]:void 0,
r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){
for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={
}
),
n[i]="");
for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={
}
),
n[i]=a[i])}
else n||(o||(o=[]),
o.push(s,
n)),
n=a;
else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,
u=u?u.__html:void 0,
a!=null&&u!==a&&(o=o||[]).push(s,
a)):s==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(s,
""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&$("scroll",
e),
o||u===a||(o=[])):(o=o||[]).push(s,
a))}
n&&(o=o||[]).push("style",
n);
var s=o;
(t.updateQueue=s)&&(t.flags|=4)}
}
;
Ec=function(e,
t,
n,
r){
n!==r&&(t.flags|=4)}
;
function jn(e,
t){
if(!U)switch(e.tailMode){
case"hidden":t=e.tail;
for(var n=null;
t!==null;
)t.alternate!==null&&(n=t),
t=t.sibling;
n===null?e.tail=null:n.sibling=null;
break;
case"collapsed":n=e.tail;
for(var r=null;
n!==null;
)n.alternate!==null&&(r=n),
n=n.sibling;
r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}
}
function le(e){
var t=e.alternate!==null&&e.alternate.child===e.child,
n=0,
r=0;
if(t)for(var l=e.child;
l!==null;
)n|=l.lanes|l.childLanes,
r|=l.subtreeFlags&14680064,
r|=l.flags&14680064,
l.return=e,
l=l.sibling;
else for(l=e.child;
l!==null;
)n|=l.lanes|l.childLanes,
r|=l.subtreeFlags,
r|=l.flags,
l.return=e,
l=l.sibling;
return e.subtreeFlags|=r,
e.childLanes=n,
t}
function dp(e,
t,
n){
var r=t.pendingProps;
switch(Ii(t),
t.tag){
case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),
null;
case 1:return he(t.type)&&rl(),
le(t),
null;
case 3:return r=t.stateNode,
cn(),
A(me),
A(ie),
Hi(),
r.pendingContext&&(r.context=r.pendingContext,
r.pendingContext=null),
(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,
Te!==null&&(ai(Te),
Te=null))),
ei(e,
t),
le(t),
null;
case 5:Bi(t);
var l=Rt(er.current);
if(n=t.type,
e!==null&&t.stateNode!=null)Sc(e,
t,
n,
r,
l),
e.ref!==t.ref&&(t.flags|=512,
t.flags|=2097152);
else{
if(!r){
if(t.stateNode===null)throw Error(S(166));
return le(t),
null}
if(e=Rt(Ue.current),
Pr(t)){
r=t.stateNode,
n=t.type;
var o=t.memoizedProps;
switch(r[$e]=t,
r[qn]=o,
e=(t.mode&1)!==0,
n){
case"dialog":$("cancel",
r),
$("close",
r);
break;
case"iframe":case"object":case"embed":$("load",
r);
break;
case"video":case"audio":for(l=0;
l<Tn.length;
l++)$(Tn[l],
r);
break;
case"source":$("error",
r);
break;
case"img":case"image":case"link":$("error",
r),
$("load",
r);
break;
case"details":$("toggle",
r);
break;
case"input":xu(r,
o),
$("invalid",
r);
break;
case"select":r._wrapperState={
wasMultiple:!!o.multiple}
,
$("invalid",
r);
break;
case"textarea":ku(r,
o),
$("invalid",
r)}
Po(n,
o),
l=null;
for(var i in o)if(o.hasOwnProperty(i)){
var u=o[i];
i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,
u,
e),
l=["children",
u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,
u,
e),
l=["children",
""+u]):Hn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&$("scroll",
r)}
switch(n){
case"input":yr(r),
wu(r,
o,
!0);
break;
case"textarea":yr(r),
Su(r);
break;
case"select":case"option":break;
default:typeof o.onClick=="function"&&(r.onclick=nl)}
r=l,
t.updateQueue=r,
r!==null&&(t.flags|=4)}
else{
i=l.nodeType===9?l:l.ownerDocument,
e==="http://www.w3.org/1999/xhtml"&&(e=Ja(n)),
e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),
e.innerHTML="<script><\/script>",
e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,
{
is:r.is}
):(e=i.createElement(n),
n==="select"&&(i=e,
r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,
n),
e[$e]=t,
e[qn]=r,
kc(e,
t,
!1,
!1),
t.stateNode=e;
e:{
switch(i=_o(n,
r),
n){
case"dialog":$("cancel",
e),
$("close",
e),
l=r;
break;
case"iframe":case"object":case"embed":$("load",
e),
l=r;
break;
case"video":case"audio":for(l=0;
l<Tn.length;
l++)$(Tn[l],
e);
l=r;
break;
case"source":$("error",
e),
l=r;
break;
case"img":case"image":case"link":$("error",
e),
$("load",
e),
l=r;
break;
case"details":$("toggle",
e),
l=r;
break;
case"input":xu(e,
r),
l=So(e,
r),
$("invalid",
e);
break;
case"option":l=r;
break;
case"select":e._wrapperState={
wasMultiple:!!r.multiple}
,
l=V({
}
,
r,
{
value:void 0}
),
$("invalid",
e);
break;
case"textarea":ku(e,
r),
l=No(e,
r),
$("invalid",
e);
break;
default:l=r}
Po(n,
l),
u=l;
for(o in u)if(u.hasOwnProperty(o)){
var a=u[o];
o==="style"?es(e,
a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,
a!=null&&qa(e,
a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wn(e,
a):typeof a=="number"&&Wn(e,
""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&$("scroll",
e):a!=null&&yi(e,
o,
a,
i))}
switch(n){
case"input":yr(e),
wu(e,
r,
!1);
break;
case"textarea":yr(e),
Su(e);
break;
case"option":r.value!=null&&e.setAttribute("value",
""+vt(r.value));
break;
case"select":e.multiple=!!r.multiple,
o=r.value,
o!=null?bt(e,
!!r.multiple,
o,
!1):r.defaultValue!=null&&bt(e,
!!r.multiple,
r.defaultValue,
!0);
break;
default:typeof l.onClick=="function"&&(e.onclick=nl)}
switch(n){
case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;
break e;
case"img":r=!0;
break e;
default:r=!1}
}
r&&(t.flags|=4)}
t.ref!==null&&(t.flags|=512,
t.flags|=2097152)}
return le(t),
null;
case 6:if(e&&t.stateNode!=null)Ec(e,
t,
e.memoizedProps,
r);
else{
if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));
if(n=Rt(er.current),
Rt(Ue.current),
Pr(t)){
if(r=t.stateNode,
n=t.memoizedProps,
r[$e]=t,
(o=r.nodeValue!==n)&&(e=xe,
e!==null))switch(e.tag){
case 3:jr(r.nodeValue,
n,
(e.mode&1)!==0);
break;
case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,
n,
(e.mode&1)!==0)}
o&&(t.flags|=4)}
else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),
r[$e]=t,
t.stateNode=r}
return le(t),
null;
case 13:if(A(B),
r=t.memoizedState,
e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){
if(U&&ye!==null&&t.mode&1&&!(t.flags&128))Bs(),
an(),
t.flags|=98560,
o=!1;
else if(o=Pr(t),
r!==null&&r.dehydrated!==null){
if(e===null){
if(!o)throw Error(S(318));
if(o=t.memoizedState,
o=o!==null?o.dehydrated:null,
!o)throw Error(S(317));
o[$e]=t}
else an(),
!(t.flags&128)&&(t.memoizedState=null),
t.flags|=4;
le(t),
o=!1}
else Te!==null&&(ai(Te),
Te=null),
o=!0;
if(!o)return t.flags&65536?t:null}
return t.flags&128?(t.lanes=n,
t):(r=r!==null,
r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,
t.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):eu())),
t.updateQueue!==null&&(t.flags|=4),
le(t),
null);
case 4:return cn(),
ei(e,
t),
e===null&&Zn(t.stateNode.containerInfo),
le(t),
null;
case 10:return Fi(t.type._context),
le(t),
null;
case 17:return he(t.type)&&rl(),
le(t),
null;
case 19:if(A(B),
o=t.memoizedState,
o===null)return le(t),
null;
if(r=(t.flags&128)!==0,
i=o.rendering,
i===null)if(r)jn(o,
!1);
else{
if(Z!==0||e!==null&&e.flags&128)for(e=t.child;
e!==null;
){
if(i=cl(e),
i!==null){
for(t.flags|=128,
jn(o,
!1),
r=i.updateQueue,
r!==null&&(t.updateQueue=r,
t.flags|=4),
t.subtreeFlags=0,
r=n,
n=t.child;
n!==null;
)o=n,
e=r,
o.flags&=14680066,
i=o.alternate,
i===null?(o.childLanes=0,
o.lanes=e,
o.child=null,
o.subtreeFlags=0,
o.memoizedProps=null,
o.memoizedState=null,
o.updateQueue=null,
o.dependencies=null,
o.stateNode=null):(o.childLanes=i.childLanes,
o.lanes=i.lanes,
o.child=i.child,
o.subtreeFlags=0,
o.deletions=null,
o.memoizedProps=i.memoizedProps,
o.memoizedState=i.memoizedState,
o.updateQueue=i.updateQueue,
o.type=i.type,
e=i.dependencies,
o.dependencies=e===null?null:{
lanes:e.lanes,
firstContext:e.firstContext}
),
n=n.sibling;
return F(B,
B.current&1|2),
t.child}
e=e.sibling}
o.tail!==null&&Y()>fn&&(t.flags|=128,
r=!0,
jn(o,
!1),
t.lanes=4194304)}
else{
if(!r)if(e=cl(i),
e!==null){
if(t.flags|=128,
r=!0,
n=e.updateQueue,
n!==null&&(t.updateQueue=n,
t.flags|=4),
jn(o,
!0),
o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!U)return le(t),
null}
else 2*Y()-o.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,
r=!0,
jn(o,
!1),
t.lanes=4194304);
o.isBackwards?(i.sibling=t.child,
t.child=i):(n=o.last,
n!==null?n.sibling=i:t.child=i,
o.last=i)}
return o.tail!==null?(t=o.tail,
o.rendering=t,
o.tail=t.sibling,
o.renderingStartTime=Y(),
t.sibling=null,
n=B.current,
F(B,
r?n&1|2:n&1),
t):(le(t),
null);
case 22:case 23:return bi(),
r=t.memoizedState!==null,
e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),
r&&t.mode&1?ge&1073741824&&(le(t),
t.subtreeFlags&6&&(t.flags|=8192)):le(t),
null;
case 24:return null;
case 25:return null}
throw Error(S(156,
t.tag))}
function fp(e,
t){
switch(Ii(t),
t.tag){
case 1:return he(t.type)&&rl(),
e=t.flags,
e&65536?(t.flags=e&-65537|128,
t):null;
case 3:return cn(),
A(me),
A(ie),
Hi(),
e=t.flags,
e&65536&&!(e&128)?(t.flags=e&-65537|128,
t):null;
case 5:return Bi(t),
null;
case 13:if(A(B),
e=t.memoizedState,
e!==null&&e.dehydrated!==null){
if(t.alternate===null)throw Error(S(340));
an()}
return e=t.flags,
e&65536?(t.flags=e&-65537|128,
t):null;
case 19:return A(B),
null;
case 4:return cn(),
null;
case 10:return Fi(t.type._context),
null;
case 22:case 23:return bi(),
null;
case 24:return null;
default:return null}
}
var Lr=!1,
oe=!1,
pp=typeof WeakSet=="function"?WeakSet:Set,
N=null;
function Jt(e,
t){
var n=e.ref;
if(n!==null)if(typeof n=="function")try{
n(null)}
catch(r){
Q(e,
t,
r)}
else n.current=null}
function ti(e,
t,
n){
try{
n()}
catch(r){
Q(e,
t,
r)}
}
var da=!1;
function mp(e,
t){
if($o=br,
e=_s(),
zi(e)){
if("selectionStart"in e)var n={
start:e.selectionStart,
end:e.selectionEnd}
;
else e:{
n=(n=e.ownerDocument)&&n.defaultView||window;
var r=n.getSelection&&n.getSelection();
if(r&&r.rangeCount!==0){
n=r.anchorNode;
var l=r.anchorOffset,
o=r.focusNode;
r=r.focusOffset;
try{
n.nodeType,
o.nodeType}
catch{
n=null;
break e}
var i=0,
u=-1,
a=-1,
s=0,
h=0,
v=e,
m=null;
t:for(;
;
){
for(var y;
v!==n||l!==0&&v.nodeType!==3||(u=i+l),
v!==o||r!==0&&v.nodeType!==3||(a=i+r),
v.nodeType===3&&(i+=v.nodeValue.length),
(y=v.firstChild)!==null;
)m=v,
v=y;
for(;
;
){
if(v===e)break t;
if(m===n&&++s===l&&(u=i),
m===o&&++h===r&&(a=i),
(y=v.nextSibling)!==null)break;
v=m,
m=v.parentNode}
v=y}
n=u===-1||a===-1?null:{
start:u,
end:a}
}
else n=null}
n=n||{
start:0,
end:0}
}
else n=null;
for(Ao={
focusedElem:e,
selectionRange:n}
,
br=!1,
N=t;
N!==null;
)if(t=N,
e=t.child,
(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,
N=e;
else for(;
N!==null;
){
t=N;
try{
var k=t.alternate;
if(t.flags&1024)switch(t.tag){
case 0:case 11:case 15:break;
case 1:if(k!==null){
var x=k.memoizedProps,
C=k.memoizedState,
d=t.stateNode,
c=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Le(t.type,
x),
C);
d.__reactInternalSnapshotBeforeUpdate=c}
break;
case 3:var p=t.stateNode.containerInfo;
p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);
break;
case 5:case 6:case 4:case 17:break;
default:throw Error(S(163))}
}
catch(w){
Q(t,
t.return,
w)}
if(e=t.sibling,
e!==null){
e.return=t.return,
N=e;
break}
N=t.return}
return k=da,
da=!1,
k}
function An(e,
t,
n){
var r=t.updateQueue;
if(r=r!==null?r.lastEffect:null,
r!==null){
var l=r=r.next;
do{
if((l.tag&e)===e){
var o=l.destroy;
l.destroy=void 0,
o!==void 0&&ti(t,
n,
o)}
l=l.next}
while(l!==r)}
}
function _l(e,
t){
if(t=t.updateQueue,
t=t!==null?t.lastEffect:null,
t!==null){
var n=t=t.next;
do{
if((n.tag&e)===e){
var r=n.create;
n.destroy=r()}
n=n.next}
while(n!==t)}
}
function ni(e){
var t=e.ref;
if(t!==null){
var n=e.stateNode;
switch(e.tag){
case 5:e=n;
break;
default:e=n}
typeof t=="function"?t(e):t.current=e}
}
function Cc(e){
var t=e.alternate;
t!==null&&(e.alternate=null,
Cc(t)),
e.child=null,
e.deletions=null,
e.sibling=null,
e.tag===5&&(t=e.stateNode,
t!==null&&(delete t[$e],
delete t[qn],
delete t[Ho],
delete t[Zf],
delete t[Jf])),
e.stateNode=null,
e.return=null,
e.dependencies=null,
e.memoizedProps=null,
e.memoizedState=null,
e.pendingProps=null,
e.stateNode=null,
e.updateQueue=null}
function Nc(e){
return e.tag===5||e.tag===3||e.tag===4}
function fa(e){
e:for(;
;
){
for(;
e.sibling===null;
){
if(e.return===null||Nc(e.return))return null;
e=e.return}
for(e.sibling.return=e.return,
e=e.sibling;
e.tag!==5&&e.tag!==6&&e.tag!==18;
){
if(e.flags&2||e.child===null||e.tag===4)continue e;
e.child.return=e,
e=e.child}
if(!(e.flags&2))return e.stateNode}
}
function ri(e,
t,
n){
var r=e.tag;
if(r===5||r===6)e=e.stateNode,
t?n.nodeType===8?n.parentNode.insertBefore(e,
t):n.insertBefore(e,
t):(n.nodeType===8?(t=n.parentNode,
t.insertBefore(e,
n)):(t=n,
t.appendChild(e)),
n=n._reactRootContainer,
n!=null||t.onclick!==null||(t.onclick=nl));
else if(r!==4&&(e=e.child,
e!==null))for(ri(e,
t,
n),
e=e.sibling;
e!==null;
)ri(e,
t,
n),
e=e.sibling}
function li(e,
t,
n){
var r=e.tag;
if(r===5||r===6)e=e.stateNode,
t?n.insertBefore(e,
t):n.appendChild(e);
else if(r!==4&&(e=e.child,
e!==null))for(li(e,
t,
n),
e=e.sibling;
e!==null;
)li(e,
t,
n),
e=e.sibling}
var ee=null,
ze=!1;
function tt(e,
t,
n){
for(n=n.child;
n!==null;
)jc(e,
t,
n),
n=n.sibling}
function jc(e,
t,
n){
if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{
Ae.onCommitFiberUnmount(wl,
n)}
catch{
}
switch(n.tag){
case 5:oe||Jt(n,
t);
case 6:var r=ee,
l=ze;
ee=null,
tt(e,
t,
n),
ee=r,
ze=l,
ee!==null&&(ze?(e=ee,
n=n.stateNode,
e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));
break;
case 18:ee!==null&&(ze?(e=ee,
n=n.stateNode,
e.nodeType===8?no(e.parentNode,
n):e.nodeType===1&&no(e,
n),
Yn(e)):no(ee,
n.stateNode));
break;
case 4:r=ee,
l=ze,
ee=n.stateNode.containerInfo,
ze=!0,
tt(e,
t,
n),
ee=r,
ze=l;
break;
case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,
r!==null&&(r=r.lastEffect,
r!==null))){
l=r=r.next;
do{
var o=l,
i=o.destroy;
o=o.tag,
i!==void 0&&(o&2||o&4)&&ti(n,
t,
i),
l=l.next}
while(l!==r)}
tt(e,
t,
n);
break;
case 1:if(!oe&&(Jt(n,
t),
r=n.stateNode,
typeof r.componentWillUnmount=="function"))try{
r.props=n.memoizedProps,
r.state=n.memoizedState,
r.componentWillUnmount()}
catch(u){
Q(n,
t,
u)}
tt(e,
t,
n);
break;
case 21:tt(e,
t,
n);
break;
case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,
tt(e,
t,
n),
oe=r):tt(e,
t,
n);
break;
default:tt(e,
t,
n)}
}
function pa(e){
var t=e.updateQueue;
if(t!==null){
e.updateQueue=null;
var n=e.stateNode;
n===null&&(n=e.stateNode=new pp),
t.forEach(function(r){
var l=Ep.bind(null,
e,
r);
n.has(r)||(n.add(r),
r.then(l,
l))}
)}
}
function Re(e,
t){
var n=t.deletions;
if(n!==null)for(var r=0;
r<n.length;
r++){
var l=n[r];
try{
var o=e,
i=t,
u=i;
e:for(;
u!==null;
){
switch(u.tag){
case 5:ee=u.stateNode,
ze=!1;
break e;
case 3:ee=u.stateNode.containerInfo,
ze=!0;
break e;
case 4:ee=u.stateNode.containerInfo,
ze=!0;
break e}
u=u.return}
if(ee===null)throw Error(S(160));
jc(o,
i,
l),
ee=null,
ze=!1;
var a=l.alternate;
a!==null&&(a.return=null),
l.return=null}
catch(s){
Q(l,
t,
s)}
}
if(t.subtreeFlags&12854)for(t=t.child;
t!==null;
)Pc(t,
e),
t=t.sibling}
function Pc(e,
t){
var n=e.alternate,
r=e.flags;
switch(e.tag){
case 0:case 11:case 14:case 15:if(Re(t,
e),
De(e),
r&4){
try{
An(3,
e,
e.return),
_l(3,
e)}
catch(x){
Q(e,
e.return,
x)}
try{
An(5,
e,
e.return)}
catch(x){
Q(e,
e.return,
x)}
}
break;
case 1:Re(t,
e),
De(e),
r&512&&n!==null&&Jt(n,
n.return);
break;
case 5:if(Re(t,
e),
De(e),
r&512&&n!==null&&Jt(n,
n.return),
e.flags&32){
var l=e.stateNode;
try{
Wn(l,
"")}
catch(x){
Q(e,
e.return,
x)}
}
if(r&4&&(l=e.stateNode,
l!=null)){
var o=e.memoizedProps,
i=n!==null?n.memoizedProps:o,
u=e.type,
a=e.updateQueue;
if(e.updateQueue=null,
a!==null)try{
u==="input"&&o.type==="radio"&&o.name!=null&&Xa(l,
o),
_o(u,
i);
var s=_o(u,
o);
for(i=0;
i<a.length;
i+=2){
var h=a[i],
v=a[i+1];
h==="style"?es(l,
v):h==="dangerouslySetInnerHTML"?qa(l,
v):h==="children"?Wn(l,
v):yi(l,
h,
v,
s)}
switch(u){
case"input":Eo(l,
o);
break;
case"textarea":Za(l,
o);
break;
case"select":var m=l._wrapperState.wasMultiple;
l._wrapperState.wasMultiple=!!o.multiple;
var y=o.value;
y!=null?bt(l,
!!o.multiple,
y,
!1):m!==!!o.multiple&&(o.defaultValue!=null?bt(l,
!!o.multiple,
o.defaultValue,
!0):bt(l,
!!o.multiple,
o.multiple?[]:"",
!1))}
l[qn]=o}
catch(x){
Q(e,
e.return,
x)}
}
break;
case 6:if(Re(t,
e),
De(e),
r&4){
if(e.stateNode===null)throw Error(S(162));
l=e.stateNode,
o=e.memoizedProps;
try{
l.nodeValue=o}
catch(x){
Q(e,
e.return,
x)}
}
break;
case 3:if(Re(t,
e),
De(e),
r&4&&n!==null&&n.memoizedState.isDehydrated)try{
Yn(t.containerInfo)}
catch(x){
Q(e,
e.return,
x)}
break;
case 4:Re(t,
e),
De(e);
break;
case 13:Re(t,
e),
De(e),
l=e.child,
l.flags&8192&&(o=l.memoizedState!==null,
l.stateNode.isHidden=o,
!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ji=Y())),
r&4&&pa(e);
break;
case 22:if(h=n!==null&&n.memoizedState!==null,
e.mode&1?(oe=(s=oe)||h,
Re(t,
e),
oe=s):Re(t,
e),
De(e),
r&8192){
if(s=e.memoizedState!==null,
(e.stateNode.isHidden=s)&&!h&&e.mode&1)for(N=e,
h=e.child;
h!==null;
){
for(v=N=h;
N!==null;
){
switch(m=N,
y=m.child,
m.tag){
case 0:case 11:case 14:case 15:An(4,
m,
m.return);
break;
case 1:Jt(m,
m.return);
var k=m.stateNode;
if(typeof k.componentWillUnmount=="function"){
r=m,
n=m.return;
try{
t=r,
k.props=t.memoizedProps,
k.state=t.memoizedState,
k.componentWillUnmount()}
catch(x){
Q(r,
n,
x)}
}
break;
case 5:Jt(m,
m.return);
break;
case 22:if(m.memoizedState!==null){
ha(v);
continue}
}
y!==null?(y.return=m,
N=y):ha(v)}
h=h.sibling}
e:for(h=null,
v=e;
;
){
if(v.tag===5){
if(h===null){
h=v;
try{
l=v.stateNode,
s?(o=l.style,
typeof o.setProperty=="function"?o.setProperty("display",
"none",
"important"):o.display="none"):(u=v.stateNode,
a=v.memoizedProps.style,
i=a!=null&&a.hasOwnProperty("display")?a.display:null,
u.style.display=ba("display",
i))}
catch(x){
Q(e,
e.return,
x)}
}
}
else if(v.tag===6){
if(h===null)try{
v.stateNode.nodeValue=s?"":v.memoizedProps}
catch(x){
Q(e,
e.return,
x)}
}
else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){
v.child.return=v,
v=v.child;
continue}
if(v===e)break e;
for(;
v.sibling===null;
){
if(v.return===null||v.return===e)break e;
h===v&&(h=null),
v=v.return}
h===v&&(h=null),
v.sibling.return=v.return,
v=v.sibling}
}
break;
case 19:Re(t,
e),
De(e),
r&4&&pa(e);
break;
case 21:break;
default:Re(t,
e),
De(e)}
}
function De(e){
var t=e.flags;
if(t&2){
try{
e:{
for(var n=e.return;
n!==null;
){
if(Nc(n)){
var r=n;
break e}
n=n.return}
throw Error(S(160))}
switch(r.tag){
case 5:var l=r.stateNode;
r.flags&32&&(Wn(l,
""),
r.flags&=-33);
var o=fa(e);
li(e,
o,
l);
break;
case 3:case 4:var i=r.stateNode.containerInfo,
u=fa(e);
ri(e,
u,
i);
break;
default:throw Error(S(161))}
}
catch(a){
Q(e,
e.return,
a)}
e.flags&=-3}
t&4096&&(e.flags&=-4097)}
function hp(e,
t,
n){
N=e,
_c(e)}
function _c(e,
t,
n){
for(var r=(e.mode&1)!==0;
N!==null;
){
var l=N,
o=l.child;
if(l.tag===22&&r){
var i=l.memoizedState!==null||Lr;
if(!i){
var u=l.alternate,
a=u!==null&&u.memoizedState!==null||oe;
u=Lr;
var s=oe;
if(Lr=i,
(oe=a)&&!s)for(N=l;
N!==null;
)i=N,
a=i.child,
i.tag===22&&i.memoizedState!==null?va(l):a!==null?(a.return=i,
N=a):va(l);
for(;
o!==null;
)N=o,
_c(o),
o=o.sibling;
N=l,
Lr=u,
oe=s}
ma(e)}
else l.subtreeFlags&8772&&o!==null?(o.return=l,
N=o):ma(e)}
}
function ma(e){
for(;
N!==null;
){
var t=N;
if(t.flags&8772){
var n=t.alternate;
try{
if(t.flags&8772)switch(t.tag){
case 0:case 11:case 15:oe||_l(5,
t);
break;
case 1:var r=t.stateNode;
if(t.flags&4&&!oe)if(n===null)r.componentDidMount();
else{
var l=t.elementType===t.type?n.memoizedProps:Le(t.type,
n.memoizedProps);
r.componentDidUpdate(l,
n.memoizedState,
r.__reactInternalSnapshotBeforeUpdate)}
var o=t.updateQueue;
o!==null&&qu(t,
o,
r);
break;
case 3:var i=t.updateQueue;
if(i!==null){
if(n=null,
t.child!==null)switch(t.child.tag){
case 5:n=t.child.stateNode;
break;
case 1:n=t.child.stateNode}
qu(t,
i,
n)}
break;
case 5:var u=t.stateNode;
if(n===null&&t.flags&4){
n=u;
var a=t.memoizedProps;
switch(t.type){
case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();
break;
case"img":a.src&&(n.src=a.src)}
}
break;
case 6:break;
case 4:break;
case 12:break;
case 13:if(t.memoizedState===null){
var s=t.alternate;
if(s!==null){
var h=s.memoizedState;
if(h!==null){
var v=h.dehydrated;
v!==null&&Yn(v)}
}
}
break;
case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(S(163))}
oe||t.flags&512&&ni(t)}
catch(m){
Q(t,
t.return,
m)}
}
if(t===e){
N=null;
break}
if(n=t.sibling,
n!==null){
n.return=t.return,
N=n;
break}
N=t.return}
}
function ha(e){
for(;
N!==null;
){
var t=N;
if(t===e){
N=null;
break}
var n=t.sibling;
if(n!==null){
n.return=t.return,
N=n;
break}
N=t.return}
}
function va(e){
for(;
N!==null;
){
var t=N;
try{
switch(t.tag){
case 0:case 11:case 15:var n=t.return;
try{
_l(4,
t)}
catch(a){
Q(t,
n,
a)}
break;
case 1:var r=t.stateNode;
if(typeof r.componentDidMount=="function"){
var l=t.return;
try{
r.componentDidMount()}
catch(a){
Q(t,
l,
a)}
}
var o=t.return;
try{
ni(t)}
catch(a){
Q(t,
o,
a)}
break;
case 5:var i=t.return;
try{
ni(t)}
catch(a){
Q(t,
i,
a)}
}
}
catch(a){
Q(t,
t.return,
a)}
if(t===e){
N=null;
break}
var u=t.sibling;
if(u!==null){
u.return=t.return,
N=u;
break}
N=t.return}
}
var vp=Math.ceil,
pl=be.ReactCurrentDispatcher,
Xi=be.ReactCurrentOwner,
je=be.ReactCurrentBatchConfig,
O=0,
b=null,
G=null,
te=0,
ge=0,
qt=wt(0),
Z=0,
lr=null,
Ot=0,
Rl=0,
Zi=0,
Un=null,
fe=null,
Ji=0,
fn=1/0,
We=null,
ml=!1,
oi=null,
pt=null,
zr=!1,
ut=null,
hl=0,
Bn=0,
ii=null,
Wr=-1,
Vr=0;
function ae(){
return O&6?Y():Wr!==-1?Wr:Wr=Y()}
function mt(e){
return e.mode&1?O&2&&te!==0?te&-te:bf.transition!==null?(Vr===0&&(Vr=fs()),
Vr):(e=D,
e!==0||(e=window.event,
e=e===void 0?16:xs(e.type)),
e):1}
function Me(e,
t,
n,
r){
if(50<Bn)throw Bn=0,
ii=null,
Error(S(185));
ur(e,
n,
r),
(!(O&2)||e!==b)&&(e===b&&(!(O&2)&&(Rl|=n),
Z===4&&ot(e,
te)),
ve(e,
r),
n===1&&O===0&&!(t.mode&1)&&(fn=Y()+500,
Nl&&kt()))}
function ve(e,
t){
var n=e.callbackNode;
qd(e,
t);
var r=qr(e,
e===b?te:0);
if(r===0)n!==null&&Nu(n),
e.callbackNode=null,
e.callbackPriority=0;
else if(t=r&-r,
e.callbackPriority!==t){
if(n!=null&&Nu(n),
t===1)e.tag===0?qf(ga.bind(null,
e)):$s(ga.bind(null,
e)),
Gf(function(){
!(O&6)&&kt()}
),
n=null;
else{
switch(ps(r)){
case 1:n=Ei;
break;
case 4:n=cs;
break;
case 16:n=Jr;
break;
case 536870912:n=ds;
break;
default:n=Jr}
n=Dc(n,
Rc.bind(null,
e))}
e.callbackPriority=t,
e.callbackNode=n}
}
function Rc(e,
t){
if(Wr=-1,
Vr=0,
O&6)throw Error(S(327));
var n=e.callbackNode;
if(ln()&&e.callbackNode!==n)return null;
var r=qr(e,
e===b?te:0);
if(r===0)return null;
if(r&30||r&e.expiredLanes||t)t=vl(e,
r);
else{
t=r;
var l=O;
O|=2;
var o=zc();
(b!==e||te!==t)&&(We=null,
fn=Y()+500,
Lt(e,
t));
do try{
xp();
break}
catch(u){
Lc(e,
u)}
while(!0);
Di(),
pl.current=o,
O=l,
G!==null?t=0:(b=null,
te=0,
t=Z)}
if(t!==0){
if(t===2&&(l=Io(e),
l!==0&&(r=l,
t=ui(e,
l))),
t===1)throw n=lr,
Lt(e,
0),
ot(e,
r),
ve(e,
Y()),
n;
if(t===6)ot(e,
r);
else{
if(l=e.current.alternate,
!(r&30)&&!gp(l)&&(t=vl(e,
r),
t===2&&(o=Io(e),
o!==0&&(r=o,
t=ui(e,
o))),
t===1))throw n=lr,
Lt(e,
0),
ot(e,
r),
ve(e,
Y()),
n;
switch(e.finishedWork=l,
e.finishedLanes=r,
t){
case 0:case 1:throw Error(S(345));
case 2:jt(e,
fe,
We);
break;
case 3:if(ot(e,
r),
(r&130023424)===r&&(t=Ji+500-Y(),
10<t)){
if(qr(e,
0)!==0)break;
if(l=e.suspendedLanes,
(l&r)!==r){
ae(),
e.pingedLanes|=e.suspendedLanes&l;
break}
e.timeoutHandle=Bo(jt.bind(null,
e,
fe,
We),
t);
break}
jt(e,
fe,
We);
break;
case 4:if(ot(e,
r),
(r&4194240)===r)break;
for(t=e.eventTimes,
l=-1;
0<r;
){
var i=31-Ie(r);
o=1<<i,
i=t[i],
i>l&&(l=i),
r&=~o}
if(r=l,
r=Y()-r,
r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vp(r/1960))-r,
10<r){
e.timeoutHandle=Bo(jt.bind(null,
e,
fe,
We),
r);
break}
jt(e,
fe,
We);
break;
case 5:jt(e,
fe,
We);
break;
default:throw Error(S(329))}
}
}
return ve(e,
Y()),
e.callbackNode===n?Rc.bind(null,
e):null}
function ui(e,
t){
var n=Un;
return e.current.memoizedState.isDehydrated&&(Lt(e,
t).flags|=256),
e=vl(e,
t),
e!==2&&(t=fe,
fe=n,
t!==null&&ai(t)),
e}
function ai(e){
fe===null?fe=e:fe.push.apply(fe,
e)}
function gp(e){
for(var t=e;
;
){
if(t.flags&16384){
var n=t.updateQueue;
if(n!==null&&(n=n.stores,
n!==null))for(var r=0;
r<n.length;
r++){
var l=n[r],
o=l.getSnapshot;
l=l.value;
try{
if(!Oe(o(),
l))return!1}
catch{
return!1}
}
}
if(n=t.child,
t.subtreeFlags&16384&&n!==null)n.return=t,
t=n;
else{
if(t===e)break;
for(;
t.sibling===null;
){
if(t.return===null||t.return===e)return!0;
t=t.return}
t.sibling.return=t.return,
t=t.sibling}
}
return!0}
function ot(e,
t){
for(t&=~Zi,
t&=~Rl,
e.suspendedLanes|=t,
e.pingedLanes&=~t,
e=e.expirationTimes;
0<t;
){
var n=31-Ie(t),
r=1<<n;
e[n]=-1,
t&=~r}
}
function ga(e){
if(O&6)throw Error(S(327));
ln();
var t=qr(e,
0);
if(!(t&1))return ve(e,
Y()),
null;
var n=vl(e,
t);
if(e.tag!==0&&n===2){
var r=Io(e);
r!==0&&(t=r,
n=ui(e,
r))}
if(n===1)throw n=lr,
Lt(e,
0),
ot(e,
t),
ve(e,
Y()),
n;
if(n===6)throw Error(S(345));
return e.finishedWork=e.current.alternate,
e.finishedLanes=t,
jt(e,
fe,
We),
ve(e,
Y()),
null}
function qi(e,
t){
var n=O;
O|=1;
try{
return e(t)}
finally{
O=n,
O===0&&(fn=Y()+500,
Nl&&kt())}
}
function Dt(e){
ut!==null&&ut.tag===0&&!(O&6)&&ln();
var t=O;
O|=1;
var n=je.transition,
r=D;
try{
if(je.transition=null,
D=1,
e)return e()}
finally{
D=r,
je.transition=n,
O=t,
!(O&6)&&kt()}
}
function bi(){
ge=qt.current,
A(qt)}
function Lt(e,
t){
e.finishedWork=null,
e.finishedLanes=0;
var n=e.timeoutHandle;
if(n!==-1&&(e.timeoutHandle=-1,
Yf(n)),
G!==null)for(n=G.return;
n!==null;
){
var r=n;
switch(Ii(r),
r.tag){
case 1:r=r.type.childContextTypes,
r!=null&&rl();
break;
case 3:cn(),
A(me),
A(ie),
Hi();
break;
case 5:Bi(r);
break;
case 4:cn();
break;
case 13:A(B);
break;
case 19:A(B);
break;
case 10:Fi(r.type._context);
break;
case 22:case 23:bi()}
n=n.return}
if(b=e,
G=e=ht(e.current,
null),
te=ge=t,
Z=0,
lr=null,
Zi=Rl=Ot=0,
fe=Un=null,
_t!==null){
for(t=0;
t<_t.length;
t++)if(n=_t[t],
r=n.interleaved,
r!==null){
n.interleaved=null;
var l=r.next,
o=n.pending;
if(o!==null){
var i=o.next;
o.next=l,
r.next=i}
n.pending=r}
_t=null}
return e}
function Lc(e,
t){
do{
var n=G;
try{
if(Di(),
Ur.current=fl,
dl){
for(var r=H.memoizedState;
r!==null;
){
var l=r.queue;
l!==null&&(l.pending=null),
r=r.next}
dl=!1}
if(Mt=0,
q=X=H=null,
$n=!1,
tr=0,
Xi.current=null,
n===null||n.return===null){
Z=1,
lr=t,
G=null;
break}
e:{
var o=e,
i=n.return,
u=n,
a=t;
if(t=te,
u.flags|=32768,
a!==null&&typeof a=="object"&&typeof a.then=="function"){
var s=a,
h=u,
v=h.tag;
if(!(h.mode&1)&&(v===0||v===11||v===15)){
var m=h.alternate;
m?(h.updateQueue=m.updateQueue,
h.memoizedState=m.memoizedState,
h.lanes=m.lanes):(h.updateQueue=null,
h.memoizedState=null)}
var y=la(i);
if(y!==null){
y.flags&=-257,
oa(y,
i,
u,
o,
t),
y.mode&1&&ra(o,
s,
t),
t=y,
a=s;
var k=t.updateQueue;
if(k===null){
var x=new Set;
x.add(a),
t.updateQueue=x}
else k.add(a);
break e}
else{
if(!(t&1)){
ra(o,
s,
t),
eu();
break e}
a=Error(S(426))}
}
else if(U&&u.mode&1){
var C=la(i);
if(C!==null){
!(C.flags&65536)&&(C.flags|=256),
oa(C,
i,
u,
o,
t),
Mi(dn(a,
u));
break e}
}
o=a=dn(a,
u),
Z!==4&&(Z=2),
Un===null?Un=[o]:Un.push(o),
o=i;
do{
switch(o.tag){
case 3:o.flags|=65536,
t&=-t,
o.lanes|=t;
var d=pc(o,
a,
t);
Ju(o,
d);
break e;
case 1:u=a;
var c=o.type,
p=o.stateNode;
if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){
o.flags|=65536,
t&=-t,
o.lanes|=t;
var w=mc(o,
u,
t);
Ju(o,
w);
break e}
}
o=o.return}
while(o!==null)}
Ic(n)}
catch(E){
t=E,
G===n&&n!==null&&(G=n=n.return);
continue}
break}
while(!0)}
function zc(){
var e=pl.current;
return pl.current=fl,
e===null?fl:e}
function eu(){
(Z===0||Z===3||Z===2)&&(Z=4),
b===null||!(Ot&268435455)&&!(Rl&268435455)||ot(b,
te)}
function vl(e,
t){
var n=O;
O|=2;
var r=zc();
(b!==e||te!==t)&&(We=null,
Lt(e,
t));
do try{
yp();
break}
catch(l){
Lc(e,
l)}
while(!0);
if(Di(),
O=n,
pl.current=r,
G!==null)throw Error(S(261));
return b=null,
te=0,
Z}
function yp(){
for(;
G!==null;
)Tc(G)}
function xp(){
for(;
G!==null&&!Wd();
)Tc(G)}
function Tc(e){
var t=Oc(e.alternate,
e,
ge);
e.memoizedProps=e.pendingProps,
t===null?Ic(e):G=t,
Xi.current=null}
function Ic(e){
var t=e;
do{
var n=t.alternate;
if(e=t.return,
t.flags&32768){
if(n=fp(n,
t),
n!==null){
n.flags&=32767,
G=n;
return}
if(e!==null)e.flags|=32768,
e.subtreeFlags=0,
e.deletions=null;
else{
Z=6,
G=null;
return}
}
else if(n=dp(n,
t,
ge),
n!==null){
G=n;
return}
if(t=t.sibling,
t!==null){
G=t;
return}
G=t=e}
while(t!==null);
Z===0&&(Z=5)}
function jt(e,
t,
n){
var r=D,
l=je.transition;
try{
je.transition=null,
D=1,
wp(e,
t,
n,
r)}
finally{
je.transition=l,
D=r}
return null}
function wp(e,
t,
n,
r){
do ln();
while(ut!==null);
if(O&6)throw Error(S(327));
n=e.finishedWork;
var l=e.finishedLanes;
if(n===null)return null;
if(e.finishedWork=null,
e.finishedLanes=0,
n===e.current)throw Error(S(177));
e.callbackNode=null,
e.callbackPriority=0;
var o=n.lanes|n.childLanes;
if(bd(e,
o),
e===b&&(G=b=null,
te=0),
!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,
Dc(Jr,
function(){
return ln(),
null}
)),
o=(n.flags&15990)!==0,
n.subtreeFlags&15990||o){
o=je.transition,
je.transition=null;
var i=D;
D=1;
var u=O;
O|=4,
Xi.current=null,
mp(e,
n),
Pc(n,
e),
Uf(Ao),
br=!!$o,
Ao=$o=null,
e.current=n,
hp(n),
Vd(),
O=u,
D=i,
je.transition=o}
else e.current=n;
if(zr&&(zr=!1,
ut=e,
hl=l),
o=e.pendingLanes,
o===0&&(pt=null),
Yd(n.stateNode),
ve(e,
Y()),
t!==null)for(r=e.onRecoverableError,
n=0;
n<t.length;
n++)l=t[n],
r(l.value,
{
componentStack:l.stack,
digest:l.digest}
);
if(ml)throw ml=!1,
e=oi,
oi=null,
e;
return hl&1&&e.tag!==0&&ln(),
o=e.pendingLanes,
o&1?e===ii?Bn++:(Bn=0,
ii=e):Bn=0,
kt(),
null}
function ln(){
if(ut!==null){
var e=ps(hl),
t=je.transition,
n=D;
try{
if(je.transition=null,
D=16>e?16:e,
ut===null)var r=!1;
else{
if(e=ut,
ut=null,
hl=0,
O&6)throw Error(S(331));
var l=O;
for(O|=4,
N=e.current;
N!==null;
){
var o=N,
i=o.child;
if(N.flags&16){
var u=o.deletions;
if(u!==null){
for(var a=0;
a<u.length;
a++){
var s=u[a];
for(N=s;
N!==null;
){
var h=N;
switch(h.tag){
case 0:case 11:case 15:An(8,
h,
o)}
var v=h.child;
if(v!==null)v.return=h,
N=v;
else for(;
N!==null;
){
h=N;
var m=h.sibling,
y=h.return;
if(Cc(h),
h===s){
N=null;
break}
if(m!==null){
m.return=y,
N=m;
break}
N=y}
}
}
var k=o.alternate;
if(k!==null){
var x=k.child;
if(x!==null){
k.child=null;
do{
var C=x.sibling;
x.sibling=null,
x=C}
while(x!==null)}
}
N=o}
}
if(o.subtreeFlags&2064&&i!==null)i.return=o,
N=i;
else e:for(;
N!==null;
){
if(o=N,
o.flags&2048)switch(o.tag){
case 0:case 11:case 15:An(9,
o,
o.return)}
var d=o.sibling;
if(d!==null){
d.return=o.return,
N=d;
break e}
N=o.return}
}
var c=e.current;
for(N=c;
N!==null;
){
i=N;
var p=i.child;
if(i.subtreeFlags&2064&&p!==null)p.return=i,
N=p;
else e:for(i=c;
N!==null;
){
if(u=N,
u.flags&2048)try{
switch(u.tag){
case 0:case 11:case 15:_l(9,
u)}
}
catch(E){
Q(u,
u.return,
E)}
if(u===i){
N=null;
break e}
var w=u.sibling;
if(w!==null){
w.return=u.return,
N=w;
break e}
N=u.return}
}
if(O=l,
kt(),
Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{
Ae.onPostCommitFiberRoot(wl,
e)}
catch{
}
r=!0}
return r}
finally{
D=n,
je.transition=t}
}
return!1}
function ya(e,
t,
n){
t=dn(n,
t),
t=pc(e,
t,
1),
e=ft(e,
t,
1),
t=ae(),
e!==null&&(ur(e,
1,
t),
ve(e,
t))}
function Q(e,
t,
n){
if(e.tag===3)ya(e,
e,
n);
else for(;
t!==null;
){
if(t.tag===3){
ya(t,
e,
n);
break}
else if(t.tag===1){
var r=t.stateNode;
if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){
e=dn(n,
e),
e=mc(t,
e,
1),
t=ft(t,
e,
1),
e=ae(),
t!==null&&(ur(t,
1,
e),
ve(t,
e));
break}
}
t=t.return}
}
function kp(e,
t,
n){
var r=e.pingCache;
r!==null&&r.delete(t),
t=ae(),
e.pingedLanes|=e.suspendedLanes&n,
b===e&&(te&n)===n&&(Z===4||Z===3&&(te&130023424)===te&&500>Y()-Ji?Lt(e,
0):Zi|=n),
ve(e,
t)}
function Mc(e,
t){
t===0&&(e.mode&1?(t=kr,
kr<<=1,
!(kr&130023424)&&(kr=4194304)):t=1);
var n=ae();
e=Je(e,
t),
e!==null&&(ur(e,
t,
n),
ve(e,
n))}
function Sp(e){
var t=e.memoizedState,
n=0;
t!==null&&(n=t.retryLane),
Mc(e,
n)}
function Ep(e,
t){
var n=0;
switch(e.tag){
case 13:var r=e.stateNode,
l=e.memoizedState;
l!==null&&(n=l.retryLane);
break;
case 19:r=e.stateNode;
break;
default:throw Error(S(314))}
r!==null&&r.delete(t),
Mc(e,
n)}
var Oc;
Oc=function(e,
t,
n){
if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;
else{
if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,
cp(e,
t,
n);
pe=!!(e.flags&131072)}
else pe=!1,
U&&t.flags&1048576&&As(t,
il,
t.index);
switch(t.lanes=0,
t.tag){
case 2:var r=t.type;
Hr(e,
t),
e=t.pendingProps;
var l=un(t,
ie.current);
rn(t,
n),
l=Vi(null,
t,
r,
e,
l,
n);
var o=Qi();
return t.flags|=1,
typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,
t.memoizedState=null,
t.updateQueue=null,
he(r)?(o=!0,
ll(t)):o=!1,
t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,
Ai(t),
l.updater=Pl,
t.stateNode=l,
l._reactInternals=t,
Go(t,
r,
e,
n),
t=Jo(null,
t,
r,
!0,
o,
n)):(t.tag=0,
U&&o&&Ti(t),
ue(null,
t,
l,
n),
t=t.child),
t;
case 16:r=t.elementType;
e:{
switch(Hr(e,
t),
e=t.pendingProps,
l=r._init,
r=l(r._payload),
t.type=r,
l=t.tag=Np(r),
e=Le(r,
e),
l){
case 0:t=Zo(null,
t,
r,
e,
n);
break e;
case 1:t=aa(null,
t,
r,
e,
n);
break e;
case 11:t=ia(null,
t,
r,
e,
n);
break e;
case 14:t=ua(null,
t,
r,
Le(r.type,
e),
n);
break e}
throw Error(S(306,
r,
""))}
return t;
case 0:return r=t.type,
l=t.pendingProps,
l=t.elementType===r?l:Le(r,
l),
Zo(e,
t,
r,
l,
n);
case 1:return r=t.type,
l=t.pendingProps,
l=t.elementType===r?l:Le(r,
l),
aa(e,
t,
r,
l,
n);
case 3:e:{
if(yc(t),
e===null)throw Error(S(387));
r=t.pendingProps,
o=t.memoizedState,
l=o.element,
Qs(e,
t),
sl(t,
r,
null,
n);
var i=t.memoizedState;
if(r=i.element,
o.isDehydrated)if(o={
element:r,
isDehydrated:!1,
cache:i.cache,
pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,
transitions:i.transitions}
,
t.updateQueue.baseState=o,
t.memoizedState=o,
t.flags&256){
l=dn(Error(S(423)),
t),
t=sa(e,
t,
r,
n,
l);
break e}
else if(r!==l){
l=dn(Error(S(424)),
t),
t=sa(e,
t,
r,
n,
l);
break e}
else for(ye=dt(t.stateNode.containerInfo.firstChild),
xe=t,
U=!0,
Te=null,
n=Ws(t,
null,
r,
n),
t.child=n;
n;
)n.flags=n.flags&-3|4096,
n=n.sibling;
else{
if(an(),
r===l){
t=qe(e,
t,
n);
break e}
ue(e,
t,
r,
n)}
t=t.child}
return t;
case 5:return Ks(t),
e===null&&Qo(t),
r=t.type,
l=t.pendingProps,
o=e!==null?e.memoizedProps:null,
i=l.children,
Uo(r,
l)?i=null:o!==null&&Uo(r,
o)&&(t.flags|=32),
gc(e,
t),
ue(e,
t,
i,
n),
t.child;
case 6:return e===null&&Qo(t),
null;
case 13:return xc(e,
t,
n);
case 4:return Ui(t,
t.stateNode.containerInfo),
r=t.pendingProps,
e===null?t.child=sn(t,
null,
r,
n):ue(e,
t,
r,
n),
t.child;
case 11:return r=t.type,
l=t.pendingProps,
l=t.elementType===r?l:Le(r,
l),
ia(e,
t,
r,
l,
n);
case 7:return ue(e,
t,
t.pendingProps,
n),
t.child;
case 8:return ue(e,
t,
t.pendingProps.children,
n),
t.child;
case 12:return ue(e,
t,
t.pendingProps.children,
n),
t.child;
case 10:e:{
if(r=t.type._context,
l=t.pendingProps,
o=t.memoizedProps,
i=l.value,
F(ul,
r._currentValue),
r._currentValue=i,
o!==null)if(Oe(o.value,
i)){
if(o.children===l.children&&!me.current){
t=qe(e,
t,
n);
break e}
}
else for(o=t.child,
o!==null&&(o.return=t);
o!==null;
){
var u=o.dependencies;
if(u!==null){
i=o.child;
for(var a=u.firstContext;
a!==null;
){
if(a.context===r){
if(o.tag===1){
a=Ye(-1,
n&-n),
a.tag=2;
var s=o.updateQueue;
if(s!==null){
s=s.shared;
var h=s.pending;
h===null?a.next=a:(a.next=h.next,
h.next=a),
s.pending=a}
}
o.lanes|=n,
a=o.alternate,
a!==null&&(a.lanes|=n),
Ko(o.return,
n,
t),
u.lanes|=n;
break}
a=a.next}
}
else if(o.tag===10)i=o.type===t.type?null:o.child;
else if(o.tag===18){
if(i=o.return,
i===null)throw Error(S(341));
i.lanes|=n,
u=i.alternate,
u!==null&&(u.lanes|=n),
Ko(i,
n,
t),
i=o.sibling}
else i=o.child;
if(i!==null)i.return=o;
else for(i=o;
i!==null;
){
if(i===t){
i=null;
break}
if(o=i.sibling,
o!==null){
o.return=i.return,
i=o;
break}
i=i.return}
o=i}
ue(e,
t,
l.children,
n),
t=t.child}
return t;
case 9:return l=t.type,
r=t.pendingProps.children,
rn(t,
n),
l=Pe(l),
r=r(l),
t.flags|=1,
ue(e,
t,
r,
n),
t.child;
case 14:return r=t.type,
l=Le(r,
t.pendingProps),
l=Le(r.type,
l),
ua(e,
t,
r,
l,
n);
case 15:return hc(e,
t,
t.type,
t.pendingProps,
n);
case 17:return r=t.type,
l=t.pendingProps,
l=t.elementType===r?l:Le(r,
l),
Hr(e,
t),
t.tag=1,
he(r)?(e=!0,
ll(t)):e=!1,
rn(t,
n),
fc(t,
r,
l),
Go(t,
r,
l,
n),
Jo(null,
t,
r,
!0,
e,
n);
case 19:return wc(e,
t,
n);
case 22:return vc(e,
t,
n)}
throw Error(S(156,
t.tag))}
;
function Dc(e,
t){
return ss(e,
t)}
function Cp(e,
t,
n,
r){
this.tag=e,
this.key=n,
this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,
this.index=0,
this.ref=null,
this.pendingProps=t,
this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,
this.mode=r,
this.subtreeFlags=this.flags=0,
this.deletions=null,
this.childLanes=this.lanes=0,
this.alternate=null}
function Ne(e,
t,
n,
r){
return new Cp(e,
t,
n,
r)}
function tu(e){
return e=e.prototype,
!(!e||!e.isReactComponent)}
function Np(e){
if(typeof e=="function")return tu(e)?1:0;
if(e!=null){
if(e=e.$$typeof,
e===wi)return 11;
if(e===ki)return 14}
return 2}
function ht(e,
t){
var n=e.alternate;
return n===null?(n=Ne(e.tag,
t,
e.key,
e.mode),
n.elementType=e.elementType,
n.type=e.type,
n.stateNode=e.stateNode,
n.alternate=e,
e.alternate=n):(n.pendingProps=t,
n.type=e.type,
n.flags=0,
n.subtreeFlags=0,
n.deletions=null),
n.flags=e.flags&14680064,
n.childLanes=e.childLanes,
n.lanes=e.lanes,
n.child=e.child,
n.memoizedProps=e.memoizedProps,
n.memoizedState=e.memoizedState,
n.updateQueue=e.updateQueue,
t=e.dependencies,
n.dependencies=t===null?null:{
lanes:t.lanes,
firstContext:t.firstContext}
,
n.sibling=e.sibling,
n.index=e.index,
n.ref=e.ref,
n}
function Qr(e,
t,
n,
r,
l,
o){
var i=2;
if(r=e,
typeof e=="function")tu(e)&&(i=1);
else if(typeof e=="string")i=5;
else e:switch(e){
case Ht:return zt(n.children,
l,
o,
t);
case xi:i=8,
l|=8;
break;
case yo:return e=Ne(12,
n,
t,
l|2),
e.elementType=yo,
e.lanes=o,
e;
case xo:return e=Ne(13,
n,
t,
l),
e.elementType=xo,
e.lanes=o,
e;
case wo:return e=Ne(19,
n,
t,
l),
e.elementType=wo,
e.lanes=o,
e;
case Ka:return Ll(n,
l,
o,
t);
default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){
case Va:i=10;
break e;
case Qa:i=9;
break e;
case wi:i=11;
break e;
case ki:i=14;
break e;
case nt:i=16,
r=null;
break e}
throw Error(S(130,
e==null?e:typeof e,
""))}
return t=Ne(i,
n,
t,
l),
t.elementType=e,
t.type=r,
t.lanes=o,
t}
function zt(e,
t,
n,
r){
return e=Ne(7,
e,
r,
t),
e.lanes=n,
e}
function Ll(e,
t,
n,
r){
return e=Ne(22,
e,
r,
t),
e.elementType=Ka,
e.lanes=n,
e.stateNode={
isHidden:!1}
,
e}
function co(e,
t,
n){
return e=Ne(6,
e,
null,
t),
e.lanes=n,
e}
function fo(e,
t,
n){
return t=Ne(4,
e.children!==null?e.children:[],
e.key,
t),
t.lanes=n,
t.stateNode={
containerInfo:e.containerInfo,
pendingChildren:null,
implementation:e.implementation}
,
t}
function jp(e,
t,
n,
r,
l){
this.tag=t,
this.containerInfo=e,
this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,
this.timeoutHandle=-1,
this.callbackNode=this.pendingContext=this.context=null,
this.callbackPriority=0,
this.eventTimes=Ql(0),
this.expirationTimes=Ql(-1),
this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,
this.entanglements=Ql(0),
this.identifierPrefix=r,
this.onRecoverableError=l,
this.mutableSourceEagerHydrationData=null}
function nu(e,
t,
n,
r,
l,
o,
i,
u,
a){
return e=new jp(e,
t,
n,
u,
a),
t===1?(t=1,
o===!0&&(t|=8)):t=0,
o=Ne(3,
null,
null,
t),
e.current=o,
o.stateNode=e,
o.memoizedState={
element:r,
isDehydrated:n,
cache:null,
transitions:null,
pendingSuspenseBoundaries:null}
,
Ai(o),
e}
function Pp(e,
t,
n){
var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
return{
$$typeof:Bt,
key:r==null?null:""+r,
children:e,
containerInfo:t,
implementation:n}
}
function Fc(e){
if(!e)return gt;
e=e._reactInternals;
e:{
if($t(e)!==e||e.tag!==1)throw Error(S(170));
var t=e;
do{
switch(t.tag){
case 3:t=t.stateNode.context;
break e;
case 1:if(he(t.type)){
t=t.stateNode.__reactInternalMemoizedMergedChildContext;
break e}
}
t=t.return}
while(t!==null);
throw Error(S(171))}
if(e.tag===1){
var n=e.type;
if(he(n))return Fs(e,
n,
t)}
return t}
function $c(e,
t,
n,
r,
l,
o,
i,
u,
a){
return e=nu(n,
r,
!0,
e,
l,
o,
i,
u,
a),
e.context=Fc(null),
n=e.current,
r=ae(),
l=mt(n),
o=Ye(r,
l),
o.callback=t??null,
ft(n,
o,
l),
e.current.lanes=l,
ur(e,
l,
r),
ve(e,
r),
e}
function zl(e,
t,
n,
r){
var l=t.current,
o=ae(),
i=mt(l);
return n=Fc(n),
t.context===null?t.context=n:t.pendingContext=n,
t=Ye(o,
i),
t.payload={
element:e}
,
r=r===void 0?null:r,
r!==null&&(t.callback=r),
e=ft(l,
t,
i),
e!==null&&(Me(e,
l,
i,
o),
Ar(e,
l,
i)),
i}
function gl(e){
if(e=e.current,
!e.child)return null;
switch(e.child.tag){
case 5:return e.child.stateNode;
default:return e.child.stateNode}
}
function xa(e,
t){
if(e=e.memoizedState,
e!==null&&e.dehydrated!==null){
var n=e.retryLane;
e.retryLane=n!==0&&n<t?n:t}
}
function ru(e,
t){
xa(e,
t),
(e=e.alternate)&&xa(e,
t)}
function _p(){
return null}
var Ac=typeof reportError=="function"?reportError:function(e){
console.error(e)}
;
function lu(e){
this._internalRoot=e}
Tl.prototype.render=lu.prototype.render=function(e){
var t=this._internalRoot;
if(t===null)throw Error(S(409));
zl(e,
t,
null,
null)}
;
Tl.prototype.unmount=lu.prototype.unmount=function(){
var e=this._internalRoot;
if(e!==null){
this._internalRoot=null;
var t=e.containerInfo;
Dt(function(){
zl(null,
e,
null,
null)}
),
t[Ze]=null}
}
;
function Tl(e){
this._internalRoot=e}
Tl.prototype.unstable_scheduleHydration=function(e){
if(e){
var t=vs();
e={
blockedOn:null,
target:e,
priority:t}
;
for(var n=0;
n<lt.length&&t!==0&&t<lt[n].priority;
n++);
lt.splice(n,
0,
e),
n===0&&ys(e)}
}
;
function ou(e){
return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}
function Il(e){
return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}
function wa(){
}
function Rp(e,
t,
n,
r,
l){
if(l){
if(typeof r=="function"){
var o=r;
r=function(){
var s=gl(i);
o.call(s)}
}
var i=$c(t,
r,
e,
0,
null,
!1,
!1,
"",
wa);
return e._reactRootContainer=i,
e[Ze]=i.current,
Zn(e.nodeType===8?e.parentNode:e),
Dt(),
i}
for(;
l=e.lastChild;
)e.removeChild(l);
if(typeof r=="function"){
var u=r;
r=function(){
var s=gl(a);
u.call(s)}
}
var a=nu(e,
0,
!1,
null,
null,
!1,
!1,
"",
wa);
return e._reactRootContainer=a,
e[Ze]=a.current,
Zn(e.nodeType===8?e.parentNode:e),
Dt(function(){
zl(t,
a,
n,
r)}
),
a}
function Ml(e,
t,
n,
r,
l){
var o=n._reactRootContainer;
if(o){
var i=o;
if(typeof l=="function"){
var u=l;
l=function(){
var a=gl(i);
u.call(a)}
}
zl(t,
i,
e,
l)}
else i=Rp(n,
t,
e,
l,
r);
return gl(i)}
ms=function(e){
switch(e.tag){
case 3:var t=e.stateNode;
if(t.current.memoizedState.isDehydrated){
var n=zn(t.pendingLanes);
n!==0&&(Ci(t,
n|1),
ve(t,
Y()),
!(O&6)&&(fn=Y()+500,
kt()))}
break;
case 13:Dt(function(){
var r=Je(e,
1);
if(r!==null){
var l=ae();
Me(r,
e,
1,
l)}
}
),
ru(e,
1)}
}
;
Ni=function(e){
if(e.tag===13){
var t=Je(e,
134217728);
if(t!==null){
var n=ae();
Me(t,
e,
134217728,
n)}
ru(e,
134217728)}
}
;
hs=function(e){
if(e.tag===13){
var t=mt(e),
n=Je(e,
t);
if(n!==null){
var r=ae();
Me(n,
e,
t,
r)}
ru(e,
t)}
}
;
vs=function(){
return D}
;
gs=function(e,
t){
var n=D;
try{
return D=e,
t()}
finally{
D=n}
}
;
Lo=function(e,
t,
n){
switch(t){
case"input":if(Eo(e,
n),
t=n.name,
n.type==="radio"&&t!=null){
for(n=e;
n.parentNode;
)n=n.parentNode;
for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),
t=0;
t<n.length;
t++){
var r=n[t];
if(r!==e&&r.form===e.form){
var l=Cl(r);
if(!l)throw Error(S(90));
Ga(r),
Eo(r,
l)}
}
}
break;
case"textarea":Za(e,
n);
break;
case"select":t=n.value,
t!=null&&bt(e,
!!n.multiple,
t,
!1)}
}
;
rs=qi;
ls=Dt;
var Lp={
usingClientEntryPoint:!1,
Events:[sr,
Kt,
Cl,
ts,
ns,
qi]}
,
Pn={
findFiberByHostInstance:Pt,
bundleType:0,
version:"18.3.1",
rendererPackageName:"react-dom"}
,
zp={
bundleType:Pn.bundleType,
version:Pn.version,
rendererPackageName:Pn.rendererPackageName,
rendererConfig:Pn.rendererConfig,
overrideHookState:null,
overrideHookStateDeletePath:null,
overrideHookStateRenamePath:null,
overrideProps:null,
overridePropsDeletePath:null,
overridePropsRenamePath:null,
setErrorHandler:null,
setSuspenseHandler:null,
scheduleUpdate:null,
currentDispatcherRef:be.ReactCurrentDispatcher,
findHostInstanceByFiber:function(e){
return e=us(e),
e===null?null:e.stateNode}
,
findFiberByHostInstance:Pn.findFiberByHostInstance||_p,
findHostInstancesForRefresh:null,
scheduleRefresh:null,
scheduleRoot:null,
setRefreshHandler:null,
getCurrentFiber:null,
reconcilerVersion:"18.3.1-next-f1338f8080-20240426"}
;
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;
if(!Tr.isDisabled&&Tr.supportsFiber)try{
wl=Tr.inject(zp),
Ae=Tr}
catch{
}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lp;
ke.createPortal=function(e,
t){
var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
if(!ou(t))throw Error(S(200));
return Pp(e,
t,
null,
n)}
;
ke.createRoot=function(e,
t){
if(!ou(e))throw Error(S(299));
var n=!1,
r="",
l=Ac;
return t!=null&&(t.unstable_strictMode===!0&&(n=!0),
t.identifierPrefix!==void 0&&(r=t.identifierPrefix),
t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),
t=nu(e,
1,
!1,
null,
null,
n,
!1,
r,
l),
e[Ze]=t.current,
Zn(e.nodeType===8?e.parentNode:e),
new lu(t)}
;
ke.findDOMNode=function(e){
if(e==null)return null;
if(e.nodeType===1)return e;
var t=e._reactInternals;
if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(",
"),
Error(S(268,
e)));
return e=us(t),
e=e===null?null:e.stateNode,
e}
;
ke.flushSync=function(e){
return Dt(e)}
;
ke.hydrate=function(e,
t,
n){
if(!Il(t))throw Error(S(200));
return Ml(null,
e,
t,
!0,
n)}
;
ke.hydrateRoot=function(e,
t,
n){
if(!ou(e))throw Error(S(405));
var r=n!=null&&n.hydratedSources||null,
l=!1,
o="",
i=Ac;
if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),
n.identifierPrefix!==void 0&&(o=n.identifierPrefix),
n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),
t=$c(t,
null,
e,
1,
n??null,
l,
!1,
o,
i),
e[Ze]=t.current,
Zn(e),
r)for(e=0;
e<r.length;
e++)n=r[e],
l=n._getVersion,
l=l(n._source),
t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,
l]:t.mutableSourceEagerHydrationData.push(n,
l);
return new Tl(t)}
;
ke.render=function(e,
t,
n){
if(!Il(t))throw Error(S(200));
return Ml(null,
e,
t,
!1,
n)}
;
ke.unmountComponentAtNode=function(e){
if(!Il(e))throw Error(S(40));
return e._reactRootContainer?(Dt(function(){
Ml(null,
null,
e,
!1,
function(){
e._reactRootContainer=null,
e[Ze]=null}
)}
),
!0):!1}
;
ke.unstable_batchedUpdates=qi;
ke.unstable_renderSubtreeIntoContainer=function(e,
t,
n,
r){
if(!Il(n))throw Error(S(200));
if(e==null||e._reactInternals===void 0)throw Error(S(38));
return Ml(e,
t,
n,
!1,
r)}
;
ke.version="18.3.1-next-f1338f8080-20240426";
function Uc(){
if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc)}
catch(e){
console.error(e)}
}
Uc(),
Ua.exports=ke;
var Tp=Ua.exports,
Bc,
ka=Tp;
Bc=ka.createRoot,
ka.hydrateRoot;
var iu={
}
;
Object.defineProperty(iu,
"__esModule",
{
value:!0}
);
iu.parse=Ap;
iu.serialize=Up;
const Ip=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
Mp=/^[\u0021-\u003A\u003C-\u007E]*$/,
Op=/^([.]?[a-z0-9]([a-z0-9-]{
0,
61}
[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{
0,
61}
[a-z0-9])?)*$/i,
Dp=/^[\u0020-\u003A\u003D-\u007E]*$/,
Fp=Object.prototype.toString,
$p=(()=>{
const e=function(){
}
;
return e.prototype=Object.create(null),
e}
)();
function Ap(e,
t){
const n=new $p,
r=e.length;
if(r<2)return n;
const l=(t==null?void 0:t.decode)||Bp;
let o=0;
do{
const i=e.indexOf("=",
o);
if(i===-1)break;
const u=e.indexOf(";
",
o),
a=u===-1?r:u;
if(i>a){
o=e.lastIndexOf(";
",
i-1)+1;
continue}
const s=Sa(e,
o,
i),
h=Ea(e,
i,
s),
v=e.slice(s,
h);
if(n[v]===void 0){
let m=Sa(e,
i+1,
a),
y=Ea(e,
a,
m);
const k=l(e.slice(m,
y));
n[v]=k}
o=a+1}
while(o<r);
return n}
function Sa(e,
t,
n){
do{
const r=e.charCodeAt(t);
if(r!==32&&r!==9)return t}
while(++t<n);
return n}
function Ea(e,
t,
n){
for(;
t>n;
){
const r=e.charCodeAt(--t);
if(r!==32&&r!==9)return t+1}
return n}
function Up(e,
t,
n){
const r=(n==null?void 0:n.encode)||encodeURIComponent;
if(!Ip.test(e))throw new TypeError(`argument name is invalid: ${
e}
`);
const l=r(t);
if(!Mp.test(l))throw new TypeError(`argument val is invalid: ${
t}
`);
let o=e+"="+l;
if(!n)return o;
if(n.maxAge!==void 0){
if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${
n.maxAge}
`);
o+=";
 Max-Age="+n.maxAge}
if(n.domain){
if(!Op.test(n.domain))throw new TypeError(`option domain is invalid: ${
n.domain}
`);
o+=";
 Domain="+n.domain}
if(n.path){
if(!Dp.test(n.path))throw new TypeError(`option path is invalid: ${
n.path}
`);
o+=";
 Path="+n.path}
if(n.expires){
if(!Hp(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${
n.expires}
`);
o+=";
 Expires="+n.expires.toUTCString()}
if(n.httpOnly&&(o+=";
 HttpOnly"),
n.secure&&(o+=";
 Secure"),
n.partitioned&&(o+=";
 Partitioned"),
n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){
case"low":o+=";
 Priority=Low";
break;
case"medium":o+=";
 Priority=Medium";
break;
case"high":o+=";
 Priority=High";
break;
default:throw new TypeError(`option priority is invalid: ${
n.priority}
`)}
if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){
case!0:case"strict":o+=";
 SameSite=Strict";
break;
case"lax":o+=";
 SameSite=Lax";
break;
case"none":o+=";
 SameSite=None";
break;
default:throw new TypeError(`option sameSite is invalid: ${
n.sameSite}
`)}
return o}
function Bp(e){
if(e.indexOf("%")===-1)return e;
try{
return decodeURIComponent(e)}
catch{
return e}
}
function Hp(e){
return Fp.call(e)==="[object Date]"}
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ca="popstate";
function Wp(e={
}
){
function t(r,
l){
let{
pathname:o,
search:i,
hash:u}
=r.location;
return si("",
{
pathname:o,
search:i,
hash:u}
,
l.state&&l.state.usr||null,
l.state&&l.state.key||"default")}
function n(r,
l){
return typeof l=="string"?l:or(l)}
return Qp(t,
n,
null,
e)}
function W(e,
t){
if(e===!1||e===null||typeof e>"u")throw new Error(t)}
function Be(e,
t){
if(!e){
typeof console<"u"&&console.warn(t);
try{
throw new Error(t)}
catch{
}
}
}
function Vp(){
return Math.random().toString(36).substring(2,
10)}
function Na(e,
t){
return{
usr:e.state,
key:e.key,
idx:t}
}
function si(e,
t,
n=null,
r){
return{
pathname:typeof e=="string"?e:e.pathname,
search:"",
hash:"",
...typeof t=="string"?vn(t):t,
state:n,
key:t&&t.key||r||Vp()}
}
function or({
pathname:e="/",
search:t="",
hash:n=""}
){
return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),
n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),
e}
function vn(e){
let t={
}
;
if(e){
let n=e.indexOf("#");
n>=0&&(t.hash=e.substring(n),
e=e.substring(0,
n));
let r=e.indexOf("?");
r>=0&&(t.search=e.substring(r),
e=e.substring(0,
r)),
e&&(t.pathname=e)}
return t}
function Qp(e,
t,
n,
r={
}
){
let{
window:l=document.defaultView,
v5Compat:o=!1}
=r,
i=l.history,
u="POP",
a=null,
s=h();
s==null&&(s=0,
i.replaceState({
...i.state,
idx:s}
,
""));
function h(){
return(i.state||{
idx:null}
).idx}
function v(){
u="POP";
let C=h(),
d=C==null?null:C-s;
s=C,
a&&a({
action:u,
location:x.location,
delta:d}
)}
function m(C,
d){
u="PUSH";
let c=si(x.location,
C,
d);
s=h()+1;
let p=Na(c,
s),
w=x.createHref(c);
try{
i.pushState(p,
"",
w)}
catch(E){
if(E instanceof DOMException&&E.name==="DataCloneError")throw E;
l.location.assign(w)}
o&&a&&a({
action:u,
location:x.location,
delta:1}
)}
function y(C,
d){
u="REPLACE";
let c=si(x.location,
C,
d);
s=h();
let p=Na(c,
s),
w=x.createHref(c);
i.replaceState(p,
"",
w),
o&&a&&a({
action:u,
location:x.location,
delta:0}
)}
function k(C){
let d=l.location.origin!=="null"?l.location.origin:l.location.href,
c=typeof C=="string"?C:or(C);
return c=c.replace(/ $/,
"%20"),
W(d,
`No window.location.(origin|href) available to create URL for href: ${
c}
`),
new URL(c,
d)}
let x={
get action(){
return u}
,
get location(){
return e(l,
i)}
,
listen(C){
if(a)throw new Error("A history only accepts one active listener");
return l.addEventListener(Ca,
v),
a=C,
()=>{
l.removeEventListener(Ca,
v),
a=null}
}
,
createHref(C){
return t(l,
C)}
,
createURL:k,
encodeLocation(C){
let d=k(C);
return{
pathname:d.pathname,
search:d.search,
hash:d.hash}
}
,
push:m,
replace:y,
go(C){
return i.go(C)}
}
;
return x}
function Hc(e,
t,
n="/"){
return Kp(e,
t,
n,
!1)}
function Kp(e,
t,
n,
r){
let l=typeof t=="string"?vn(t):t,
o=yt(l.pathname||"/",
n);
if(o==null)return null;
let i=Wc(e);
Yp(i);
let u=null;
for(let a=0;
u==null&&a<i.length;
++a){
let s=lm(o);
u=nm(i[a],
s,
r)}
return u}
function Wc(e,
t=[],
n=[],
r=""){
let l=(o,
i,
u)=>{
let a={
relativePath:u===void 0?o.path||"":u,
caseSensitive:o.caseSensitive===!0,
childrenIndex:i,
route:o}
;
a.relativePath.startsWith("/")&&(W(a.relativePath.startsWith(r),
`Absolute route path "${
a.relativePath}
" nested under path "${
r}
" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
a.relativePath=a.relativePath.slice(r.length));
let s=Ge([r,
a.relativePath]),
h=n.concat(a);
o.children&&o.children.length>0&&(W(o.index!==!0,
`Index routes must not have child routes. Please remove all child routes from route path "${
s}
".`),
Wc(o.children,
t,
h,
s)),
!(o.path==null&&!o.index)&&t.push({
path:s,
score:em(s,
o.index),
routesMeta:h}
)}
;
return e.forEach((o,
i)=>{
var u;
if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,
i);
else for(let a of Vc(o.path))l(o,
i,
a)}
),
t}
function Vc(e){
let t=e.split("/");
if(t.length===0)return[];
let[n,
...r]=t,
l=n.endsWith("?"),
o=n.replace(/\?$/,
"");
if(r.length===0)return l?[o,
""]:[o];
let i=Vc(r.join("/")),
u=[];
return u.push(...i.map(a=>a===""?o:[o,
a].join("/"))),
l&&u.push(...i),
u.map(a=>e.startsWith("/")&&a===""?"/":a)}
function Yp(e){
e.sort((t,
n)=>t.score!==n.score?n.score-t.score:tm(t.routesMeta.map(r=>r.childrenIndex),
n.routesMeta.map(r=>r.childrenIndex)))}
var Gp=/^:[\w-]+$/,
Xp=3,
Zp=2,
Jp=1,
qp=10,
bp=-2,
ja=e=>e==="*";
function em(e,
t){
let n=e.split("/"),
r=n.length;
return n.some(ja)&&(r+=bp),
t&&(r+=Zp),
n.filter(l=>!ja(l)).reduce((l,
o)=>l+(Gp.test(o)?Xp:o===""?Jp:qp),
r)}
function tm(e,
t){
return e.length===t.length&&e.slice(0,
-1).every((r,
l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}
function nm(e,
t,
n=!1){
let{
routesMeta:r}
=e,
l={
}
,
o="/",
i=[];
for(let u=0;
u<r.length;
++u){
let a=r[u],
s=u===r.length-1,
h=o==="/"?t:t.slice(o.length)||"/",
v=yl({
path:a.relativePath,
caseSensitive:a.caseSensitive,
end:s}
,
h),
m=a.route;
if(!v&&s&&n&&!r[r.length-1].route.index&&(v=yl({
path:a.relativePath,
caseSensitive:a.caseSensitive,
end:!1}
,
h)),
!v)return null;
Object.assign(l,
v.params),
i.push({
params:l,
pathname:Ge([o,
v.pathname]),
pathnameBase:am(Ge([o,
v.pathnameBase])),
route:m}
),
v.pathnameBase!=="/"&&(o=Ge([o,
v.pathnameBase]))}
return i}
function yl(e,
t){
typeof e=="string"&&(e={
path:e,
caseSensitive:!1,
end:!0}
);
let[n,
r]=rm(e.path,
e.caseSensitive,
e.end),
l=t.match(n);
if(!l)return null;
let o=l[0],
i=o.replace(/(.)\/+$/,
"$1"),
u=l.slice(1);
return{
params:r.reduce((s,
{
paramName:h,
isOptional:v}
,
m)=>{
if(h==="*"){
let k=u[m]||"";
i=o.slice(0,
o.length-k.length).replace(/(.)\/+$/,
"$1")}
const y=u[m];
return v&&!y?s[h]=void 0:s[h]=(y||"").replace(/%2F/g,
"/"),
s}
,
{
}
),
pathname:o,
pathnameBase:i,
pattern:e}
}
function rm(e,
t=!1,
n=!0){
Be(e==="*"||!e.endsWith("*")||e.endsWith("/*"),
`Route path "${
e}
" will be treated as if it were "${
e.replace(/\*$/,
"/*")}
" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning,
 please change the route path to "${
e.replace(/\*$/,
"/*")}
".`);
let r=[],
l="^"+e.replace(/\/*\*?$/,
"").replace(/^\/*/,
"/").replace(/[\\.*+^${
}
|()[\]]/g,
"\\$&").replace(/\/:([\w-]+)(\?)?/g,
(i,
u,
a)=>(r.push({
paramName:u,
isOptional:a!=null}
),
a?"/?([^\\/]+)?":"/([^\\/]+)"));
return e.endsWith("*")?(r.push({
paramName:"*"}
),
l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),
[new RegExp(l,
t?void 0:"i"),
r]}
function lm(e){
try{
return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,
"%2F")).join("/")}
catch(t){
return Be(!1,
`The URL path "${
e}
" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${
t}
).`),
e}
}
function yt(e,
t){
if(t==="/")return e;
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;
let n=t.endsWith("/")?t.length-1:t.length,
r=e.charAt(n);
return r&&r!=="/"?null:e.slice(n)||"/"}
function om(e,
t="/"){
let{
pathname:n,
search:r="",
hash:l=""}
=typeof e=="string"?vn(e):e;
return{
pathname:n?n.startsWith("/")?n:im(n,
t):t,
search:sm(r),
hash:cm(l)}
}
function im(e,
t){
let n=t.replace(/\/+$/,
"").split("/");
return e.split("/").forEach(l=>{
l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}
),
n.length>1?n.join("/"):"/"}
function po(e,
t,
n,
r){
return`Cannot include a '${
e}
' character in a manually specified \`to.${
t}
\` field [${
JSON.stringify(r)}
].  Please separate it out to the \`to.${
n}
\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}
function um(e){
return e.filter((t,
n)=>n===0||t.route.path&&t.route.path.length>0)}
function Qc(e){
let t=um(e);
return t.map((n,
r)=>r===t.length-1?n.pathname:n.pathnameBase)}
function Kc(e,
t,
n,
r=!1){
let l;
typeof e=="string"?l=vn(e):(l={
...e}
,
W(!l.pathname||!l.pathname.includes("?"),
po("?",
"pathname",
"search",
l)),
W(!l.pathname||!l.pathname.includes("#"),
po("#",
"pathname",
"hash",
l)),
W(!l.search||!l.search.includes("#"),
po("#",
"search",
"hash",
l)));
let o=e===""||l.pathname==="",
i=o?"/":l.pathname,
u;
if(i==null)u=n;
else{
let v=t.length-1;
if(!r&&i.startsWith("..")){
let m=i.split("/");
for(;
m[0]==="..";
)m.shift(),
v-=1;
l.pathname=m.join("/")}
u=v>=0?t[v]:"/"}
let a=om(l,
u),
s=i&&i!=="/"&&i.endsWith("/"),
h=(o||i===".")&&n.endsWith("/");
return!a.pathname.endsWith("/")&&(s||h)&&(a.pathname+="/"),
a}
var Ge=e=>e.join("/").replace(/\/\/+/g,
"/"),
am=e=>e.replace(/\/+$/,
"").replace(/^\/*/,
"/"),
sm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,
cm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;
function dm(e){
return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}
var Yc=["POST",
"PUT",
"PATCH",
"DELETE"];
new Set(Yc);
var fm=["GET",
...Yc];
new Set(fm);
var gn=g.createContext(null);
gn.displayName="DataRouter";
var Ol=g.createContext(null);
Ol.displayName="DataRouterState";
var Gc=g.createContext({
isTransitioning:!1}
);
Gc.displayName="ViewTransition";
var pm=g.createContext(new Map);
pm.displayName="Fetchers";
var mm=g.createContext(null);
mm.displayName="Await";
var He=g.createContext(null);
He.displayName="Navigation";
var dr=g.createContext(null);
dr.displayName="Location";
var et=g.createContext({
outlet:null,
matches:[],
isDataRoute:!1}
);
et.displayName="Route";
var uu=g.createContext(null);
uu.displayName="RouteError";
function hm(e,
{
relative:t}
={
}
){
W(fr(),
"useHref() may be used only in the context of a <Router> component.");
let{
basename:n,
navigator:r}
=g.useContext(He),
{
hash:l,
pathname:o,
search:i}
=pr(e,
{
relative:t}
),
u=o;
return n!=="/"&&(u=o==="/"?n:Ge([n,
o])),
r.createHref({
pathname:u,
search:i,
hash:l}
)}
function fr(){
return g.useContext(dr)!=null}
function At(){
return W(fr(),
"useLocation() may be used only in the context of a <Router> component."),
g.useContext(dr).location}
var Xc="You should call navigate() in a React.useEffect(),
 not when your component is first rendered.";
function Zc(e){
g.useContext(He).static||g.useLayoutEffect(e)}
function vm(){
let{
isDataRoute:e}
=g.useContext(et);
return e?Rm():gm()}
function gm(){
W(fr(),
"useNavigate() may be used only in the context of a <Router> component.");
let e=g.useContext(gn),
{
basename:t,
navigator:n}
=g.useContext(He),
{
matches:r}
=g.useContext(et),
{
pathname:l}
=At(),
o=JSON.stringify(Qc(r)),
i=g.useRef(!1);
return Zc(()=>{
i.current=!0}
),
g.useCallback((a,
s={
}
)=>{
if(Be(i.current,
Xc),
!i.current)return;
if(typeof a=="number"){
n.go(a);
return}
let h=Kc(a,
JSON.parse(o),
l,
s.relative==="path");
e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ge([t,
h.pathname])),
(s.replace?n.replace:n.push)(h,
s.state,
s)}
,
[t,
n,
o,
l,
e])}
g.createContext(null);
function pr(e,
{
relative:t}
={
}
){
let{
matches:n}
=g.useContext(et),
{
pathname:r}
=At(),
l=JSON.stringify(Qc(n));
return g.useMemo(()=>Kc(e,
JSON.parse(l),
r,
t==="path"),
[e,
l,
r,
t])}
function ym(e,
t){
return Jc(e,
t)}
function Jc(e,
t,
n,
r){
var d;
W(fr(),
"useRoutes() may be used only in the context of a <Router> component.");
let{
navigator:l}
=g.useContext(He),
{
matches:o}
=g.useContext(et),
i=o[o.length-1],
u=i?i.params:{
}
,
a=i?i.pathname:"/",
s=i?i.pathnameBase:"/",
h=i&&i.route;
{
let c=h&&h.path||"";
qc(a,
!h||c.endsWith("*")||c.endsWith("*?"),
`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${
a}
" (under <Route path="${
c}
">) but the parent route path has no trailing "*". This means if you navigate deeper,
 the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${
c}
"> to <Route path="${
c==="/"?"*":`${
c}
/*`}
">.`)}
let v=At(),
m;
if(t){
let c=typeof t=="string"?vn(t):t;
W(s==="/"||((d=c.pathname)==null?void 0:d.startsWith(s)),
`When overriding the location using \`<Routes location>\` or \`useRoutes(routes,
 location)\`,
 the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${
s}
" but pathname "${
c.pathname}
" was given in the \`location\` prop.`),
m=c}
else m=v;
let y=m.pathname||"/",
k=y;
if(s!=="/"){
let c=s.replace(/^\//,
"").split("/");
k="/"+y.replace(/^\//,
"").split("/").slice(c.length).join("/")}
let x=Hc(e,
{
pathname:k}
);
Be(h||x!=null,
`No routes matched location "${
m.pathname}
${
m.search}
${
m.hash}
" `),
Be(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,
`Matched leaf route at location "${
m.pathname}
${
m.search}
${
m.hash}
" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
let C=Em(x&&x.map(c=>Object.assign({
}
,
c,
{
params:Object.assign({
}
,
u,
c.params),
pathname:Ge([s,
l.encodeLocation?l.encodeLocation(c.pathname).pathname:c.pathname]),
pathnameBase:c.pathnameBase==="/"?s:Ge([s,
l.encodeLocation?l.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])}
)),
o,
n,
r);
return t&&C?g.createElement(dr.Provider,
{
value:{
location:{
pathname:"/",
search:"",
hash:"",
state:null,
key:"default",
...m}
,
navigationType:"POP"}
}
,
C):C}
function xm(){
let e=_m(),
t=dm(e)?`${
e.status}
 ${
e.statusText}
`:e instanceof Error?e.message:JSON.stringify(e),
n=e instanceof Error?e.stack:null,
r="rgba(200,
200,
200,
 0.5)",
l={
padding:"0.5rem",
backgroundColor:r}
,
o={
padding:"2px 4px",
backgroundColor:r}
,
i=null;
return console.error("Error handled by React Router default ErrorBoundary:",
e),
i=g.createElement(g.Fragment,
null,
g.createElement("p",
null,
"💿 Hey developer 👋"),
g.createElement("p",
null,
"You can provide a way better UX than this when your app throws errors by providing your own ",
g.createElement("code",
{
style:o}
,
"ErrorBoundary"),
" or",
" ",
g.createElement("code",
{
style:o}
,
"errorElement"),
" prop on your route.")),
g.createElement(g.Fragment,
null,
g.createElement("h2",
null,
"Unexpected Application Error!"),
g.createElement("h3",
{
style:{
fontStyle:"italic"}
}
,
t),
n?g.createElement("pre",
{
style:l}
,
n):null,
i)}
var wm=g.createElement(xm,
null),
km=class extends g.Component{
constructor(e){
super(e),
this.state={
location:e.location,
revalidation:e.revalidation,
error:e.error}
}
static getDerivedStateFromError(e){
return{
error:e}
}
static getDerivedStateFromProps(e,
t){
return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{
error:e.error,
location:e.location,
revalidation:e.revalidation}
:{
error:e.error!==void 0?e.error:t.error,
location:t.location,
revalidation:e.revalidation||t.revalidation}
}
componentDidCatch(e,
t){
console.error("React Router caught the following error during render",
e,
t)}
render(){
return this.state.error!==void 0?g.createElement(et.Provider,
{
value:this.props.routeContext}
,
g.createElement(uu.Provider,
{
value:this.state.error,
children:this.props.component}
)):this.props.children}
}
;
function Sm({
routeContext:e,
match:t,
children:n}
){
let r=g.useContext(gn);
return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),
g.createElement(et.Provider,
{
value:e}
,
n)}
function Em(e,
t=[],
n=null,
r=null){
if(e==null){
if(!n)return null;
if(n.errors)e=n.matches;
else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;
else return null}
let l=e,
o=n==null?void 0:n.errors;
if(o!=null){
let a=l.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id])!==void 0);
W(a>=0,
`Could not find a matching route for errors on route IDs: ${
Object.keys(o).join(",
")}
`),
l=l.slice(0,
Math.min(l.length,
a+1))}
let i=!1,
u=-1;
if(n)for(let a=0;
a<l.length;
a++){
let s=l[a];
if((s.route.HydrateFallback||s.route.hydrateFallbackElement)&&(u=a),
s.route.id){
let{
loaderData:h,
errors:v}
=n,
m=s.route.loader&&!h.hasOwnProperty(s.route.id)&&(!v||v[s.route.id]===void 0);
if(s.route.lazy||m){
i=!0,
u>=0?l=l.slice(0,
u+1):l=[l[0]];
break}
}
}
return l.reduceRight((a,
s,
h)=>{
let v,
m=!1,
y=null,
k=null;
n&&(v=o&&s.route.id?o[s.route.id]:void 0,
y=s.route.errorElement||wm,
i&&(u<0&&h===0?(qc("route-fallback",
!1,
"No `HydrateFallback` element provided to render during initial hydration"),
m=!0,
k=null):u===h&&(m=!0,
k=s.route.hydrateFallbackElement||null)));
let x=t.concat(l.slice(0,
h+1)),
C=()=>{
let d;
return v?d=y:m?d=k:s.route.Component?d=g.createElement(s.route.Component,
null):s.route.element?d=s.route.element:d=a,
g.createElement(Sm,
{
match:s,
routeContext:{
outlet:a,
matches:x,
isDataRoute:n!=null}
,
children:d}
)}
;
return n&&(s.route.ErrorBoundary||s.route.errorElement||h===0)?g.createElement(km,
{
location:n.location,
revalidation:n.revalidation,
component:y,
error:v,
children:C(),
routeContext:{
outlet:null,
matches:x,
isDataRoute:!0}
}
):C()}
,
null)}
function au(e){
return`${
e}
 must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}
function Cm(e){
let t=g.useContext(gn);
return W(t,
au(e)),
t}
function Nm(e){
let t=g.useContext(Ol);
return W(t,
au(e)),
t}
function jm(e){
let t=g.useContext(et);
return W(t,
au(e)),
t}
function su(e){
let t=jm(e),
n=t.matches[t.matches.length-1];
return W(n.route.id,
`${
e}
 can only be used on routes that contain a unique "id"`),
n.route.id}
function Pm(){
return su("useRouteId")}
function _m(){
var r;
let e=g.useContext(uu),
t=Nm("useRouteError"),
n=su("useRouteError");
return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}
function Rm(){
let{
router:e}
=Cm("useNavigate"),
t=su("useNavigate"),
n=g.useRef(!1);
return Zc(()=>{
n.current=!0}
),
g.useCallback(async(l,
o={
}
)=>{
Be(n.current,
Xc),
n.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,
{
fromRouteId:t,
...o}
))}
,
[e,
t])}
var Pa={
}
;
function qc(e,
t,
n){
!t&&!Pa[e]&&(Pa[e]=!0,
Be(!1,
n))}
g.memo(Lm);
function Lm({
routes:e,
future:t,
state:n}
){
return Jc(e,
void 0,
n,
t)}
function ci(e){
W(!1,
"A <Route> is only ever to be used as the child of <Routes> element,
 never rendered directly. Please wrap your <Route> in a <Routes>.")}
function zm({
basename:e="/",
children:t=null,
location:n,
navigationType:r="POP",
navigator:l,
static:o=!1}
){
W(!fr(),
"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
let i=e.replace(/^\/*/,
"/"),
u=g.useMemo(()=>({
basename:i,
navigator:l,
static:o,
future:{
}
}
),
[i,
l,
o]);
typeof n=="string"&&(n=vn(n));
let{
pathname:a="/",
search:s="",
hash:h="",
state:v=null,
key:m="default"}
=n,
y=g.useMemo(()=>{
let k=yt(a,
i);
return k==null?null:{
location:{
pathname:k,
search:s,
hash:h,
state:v,
key:m}
,
navigationType:r}
}
,
[i,
a,
s,
h,
v,
m,
r]);
return Be(y!=null,
`<Router basename="${
i}
"> is not able to match the URL "${
a}
${
s}
${
h}
" because it does not start with the basename,
 so the <Router> won't render anything.`),
y==null?null:g.createElement(He.Provider,
{
value:u}
,
g.createElement(dr.Provider,
{
children:t,
value:y}
))}
function Tm({
children:e,
location:t}
){
return ym(di(e),
t)}
function di(e,
t=[]){
let n=[];
return g.Children.forEach(e,
(r,
l)=>{
if(!g.isValidElement(r))return;
let o=[...t,
l];
if(r.type===g.Fragment){
n.push.apply(n,
di(r.props.children,
o));
return}
W(r.type===ci,
`[${
typeof r.type=="string"?r.type:r.type.name}
] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
W(!r.props.index||!r.props.children,
"An index route cannot have child routes.");
let i={
id:r.props.id||o.join("-"),
caseSensitive:r.props.caseSensitive,
element:r.props.element,
Component:r.props.Component,
index:r.props.index,
path:r.props.path,
loader:r.props.loader,
action:r.props.action,
hydrateFallbackElement:r.props.hydrateFallbackElement,
HydrateFallback:r.props.HydrateFallback,
errorElement:r.props.errorElement,
ErrorBoundary:r.props.ErrorBoundary,
hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,
shouldRevalidate:r.props.shouldRevalidate,
handle:r.props.handle,
lazy:r.props.lazy}
;
r.props.children&&(i.children=di(r.props.children,
o)),
n.push(i)}
),
n}
var Kr="get",
Yr="application/x-www-form-urlencoded";
function Dl(e){
return e!=null&&typeof e.tagName=="string"}
function Im(e){
return Dl(e)&&e.tagName.toLowerCase()==="button"}
function Mm(e){
return Dl(e)&&e.tagName.toLowerCase()==="form"}
function Om(e){
return Dl(e)&&e.tagName.toLowerCase()==="input"}
function Dm(e){
return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}
function Fm(e,
t){
return e.button===0&&(!t||t==="_self")&&!Dm(e)}
var Ir=null;
function $m(){
if(Ir===null)try{
new FormData(document.createElement("form"),
0),
Ir=!1}
catch{
Ir=!0}
return Ir}
var Am=new Set(["application/x-www-form-urlencoded",
"multipart/form-data",
"text/plain"]);
function mo(e){
return e!=null&&!Am.has(e)?(Be(!1,
`"${
e}
" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${
Yr}
"`),
null):e}
function Um(e,
t){
let n,
r,
l,
o,
i;
if(Mm(e)){
let u=e.getAttribute("action");
r=u?yt(u,
t):null,
n=e.getAttribute("method")||Kr,
l=mo(e.getAttribute("enctype"))||Yr,
o=new FormData(e)}
else if(Im(e)||Om(e)&&(e.type==="submit"||e.type==="image")){
let u=e.form;
if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
let a=e.getAttribute("formaction")||u.getAttribute("action");
if(r=a?yt(a,
t):null,
n=e.getAttribute("formmethod")||u.getAttribute("method")||Kr,
l=mo(e.getAttribute("formenctype"))||mo(u.getAttribute("enctype"))||Yr,
o=new FormData(u,
e),
!$m()){
let{
name:s,
type:h,
value:v}
=e;
if(h==="image"){
let m=s?`${
s}
.`:"";
o.append(`${
m}
x`,
"0"),
o.append(`${
m}
y`,
"0")}
else s&&o.append(s,
v)}
}
else{
if(Dl(e))throw new Error('Cannot submit element that is not <form>,
 <button>,
 or <input type="submit|image">');
n=Kr,
r=null,
l=Yr,
i=e}
return o&&l==="text/plain"&&(i=o,
o=void 0),
{
action:r,
method:n.toLowerCase(),
encType:l,
formData:o,
body:i}
}
function cu(e,
t){
if(e===!1||e===null||typeof e>"u")throw new Error(t)}
async function Bm(e,
t){
if(e.id in t)return t[e.id];
try{
let n=await import(e.module);
return t[e.id]=n,
n}
catch(n){
return console.error(`Error loading route module \`${
e.module}
\`,
 reloading page...`),
console.error(n),
window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,
window.location.reload(),
new Promise(()=>{
}
)}
}
function Hm(e){
return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}
async function Wm(e,
t,
n){
let r=await Promise.all(e.map(async l=>{
let o=t.routes[l.route.id];
if(o){
let i=await Bm(o,
n);
return i.links?i.links():[]}
return[]}
));
return Ym(r.flat(1).filter(Hm).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{
...l,
rel:"prefetch",
as:"style"}
:{
...l,
rel:"prefetch"}
))}
function _a(e,
t,
n,
r,
l,
o){
let i=(a,
s)=>n[s]?a.route.id!==n[s].route.id:!0,
u=(a,
s)=>{
var h;
return n[s].pathname!==a.pathname||((h=n[s].route.path)==null?void 0:h.endsWith("*"))&&n[s].params["*"]!==a.params["*"]}
;
return o==="assets"?t.filter((a,
s)=>i(a,
s)||u(a,
s)):o==="data"?t.filter((a,
s)=>{
var v;
let h=r.routes[a.route.id];
if(!h||!h.hasLoader)return!1;
if(i(a,
s)||u(a,
s))return!0;
if(a.route.shouldRevalidate){
let m=a.route.shouldRevalidate({
currentUrl:new URL(l.pathname+l.search+l.hash,
window.origin),
currentParams:((v=n[0])==null?void 0:v.params)||{
}
,
nextUrl:new URL(e,
window.origin),
nextParams:a.params,
defaultShouldRevalidate:!0}
);
if(typeof m=="boolean")return m}
return!0}
):[]}
function Vm(e,
t){
return Qm(e.map(n=>{
let r=t.routes[n.route.id];
if(!r)return[];
let l=[r.module];
return r.imports&&(l=l.concat(r.imports)),
l}
).flat(1))}
function Qm(e){
return[...new Set(e)]}
function Km(e){
let t={
}
,
n=Object.keys(e).sort();
for(let r of n)t[r]=e[r];
return t}
function Ym(e,
t){
let n=new Set;
return new Set(t),
e.reduce((r,
l)=>{
let o=JSON.stringify(Km(l));
return n.has(o)||(n.add(o),
r.push({
key:o,
link:l}
)),
r}
,
[])}
function Gm(e){
let t=typeof e=="string"?new URL(e,
typeof window>"u"?"server://singlefetch/":window.location.origin):e;
return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${
t.pathname.replace(/\/$/,
"")}
.data`,
t}
function Xm(){
let e=g.useContext(gn);
return cu(e,
"You must render this element inside a <DataRouterContext.Provider> element"),
e}
function Zm(){
let e=g.useContext(Ol);
return cu(e,
"You must render this element inside a <DataRouterStateContext.Provider> element"),
e}
var du=g.createContext(void 0);
du.displayName="FrameworkContext";
function bc(){
let e=g.useContext(du);
return cu(e,
"You must render this element inside a <HydratedRouter> element"),
e}
function Jm(e,
t){
let n=g.useContext(du),
[r,
l]=g.useState(!1),
[o,
i]=g.useState(!1),
{
onFocus:u,
onBlur:a,
onMouseEnter:s,
onMouseLeave:h,
onTouchStart:v}
=t,
m=g.useRef(null);
g.useEffect(()=>{
if(e==="render"&&i(!0),
e==="viewport"){
let x=d=>{
d.forEach(c=>{
i(c.isIntersecting)}
)}
,
C=new IntersectionObserver(x,
{
threshold:.5}
);
return m.current&&C.observe(m.current),
()=>{
C.disconnect()}
}
}
,
[e]),
g.useEffect(()=>{
if(r){
let x=setTimeout(()=>{
i(!0)}
,
100);
return()=>{
clearTimeout(x)}
}
}
,
[r]);
let y=()=>{
l(!0)}
,
k=()=>{
l(!1),
i(!1)}
;
return n?e!=="intent"?[o,
m,
{
}
]:[o,
m,
{
onFocus:_n(u,
y),
onBlur:_n(a,
k),
onMouseEnter:_n(s,
y),
onMouseLeave:_n(h,
k),
onTouchStart:_n(v,
y)}
]:[!1,
m,
{
}
]}
function _n(e,
t){
return n=>{
e&&e(n),
n.defaultPrevented||t(n)}
}
function qm({
page:e,
...t}
){
let{
router:n}
=Xm(),
r=g.useMemo(()=>Hc(n.routes,
e,
n.basename),
[n.routes,
e,
n.basename]);
return r?g.createElement(eh,
{
page:e,
matches:r,
...t}
):(console.warn(`Tried to prefetch ${
e}
 but no routes matched.`),
null)}
function bm(e){
let{
manifest:t,
routeModules:n}
=bc(),
[r,
l]=g.useState([]);
return g.useEffect(()=>{
let o=!1;
return Wm(e,
t,
n).then(i=>{
o||l(i)}
),
()=>{
o=!0}
}
,
[e,
t,
n]),
r}
function eh({
page:e,
matches:t,
...n}
){
let r=At(),
{
manifest:l,
routeModules:o}
=bc(),
{
loaderData:i,
matches:u}
=Zm(),
a=g.useMemo(()=>_a(e,
t,
u,
l,
r,
"data"),
[e,
t,
u,
l,
r]),
s=g.useMemo(()=>_a(e,
t,
u,
l,
r,
"assets"),
[e,
t,
u,
l,
r]),
h=g.useMemo(()=>{
if(e===r.pathname+r.search+r.hash)return[];
let y=new Set,
k=!1;
if(t.forEach(C=>{
var c;
let d=l.routes[C.route.id];
!d||!d.hasLoader||(!a.some(p=>p.route.id===C.route.id)&&C.route.id in i&&((c=o[C.route.id])!=null&&c.shouldRevalidate)||d.hasClientLoader?k=!0:y.add(C.route.id))}
),
y.size===0)return[];
let x=Gm(e);
return k&&y.size>0&&x.searchParams.set("_routes",
t.filter(C=>y.has(C.route.id)).map(C=>C.route.id).join(",
")),
[x.pathname+x.search]}
,
[i,
r,
l,
a,
t,
e,
o]),
v=g.useMemo(()=>Vm(s,
l),
[s,
l]),
m=bm(s);
return g.createElement(g.Fragment,
null,
h.map(y=>g.createElement("link",
{
key:y,
rel:"prefetch",
as:"fetch",
href:y,
...n}
)),
v.map(y=>g.createElement("link",
{
key:y,
rel:"modulepreload",
href:y,
...n}
)),
m.map(({
key:y,
link:k}
)=>g.createElement("link",
{
key:y,
...k}
)))}
function th(...e){
return t=>{
e.forEach(n=>{
typeof n=="function"?n(t):n!=null&&(n.current=t)}
)}
}
var ed=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";
try{
ed&&(window.__reactRouterVersion="7.0.2")}
catch{
}
function nh({
basename:e,
children:t,
window:n}
){
let r=g.useRef();
r.current==null&&(r.current=Wp({
window:n,
v5Compat:!0}
));
let l=r.current,
[o,
i]=g.useState({
action:l.action,
location:l.location}
),
u=g.useCallback(a=>{
g.startTransition(()=>i(a))}
,
[i]);
return g.useLayoutEffect(()=>l.listen(u),
[l,
u]),
g.createElement(zm,
{
basename:e,
children:t,
location:o.location,
navigationType:o.action,
navigator:l}
)}
var td=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
nd=g.forwardRef(function({
onClick:t,
discover:n="render",
prefetch:r="none",
relative:l,
reloadDocument:o,
replace:i,
state:u,
target:a,
to:s,
preventScrollReset:h,
viewTransition:v,
...m}
,
y){
let{
basename:k}
=g.useContext(He),
x=typeof s=="string"&&td.test(s),
C,
d=!1;
if(typeof s=="string"&&x&&(C=s,
ed))try{
let M=new URL(window.location.href),
L=s.startsWith("//")?new URL(M.protocol+s):new URL(s),
de=yt(L.pathname,
k);
L.origin===M.origin&&de!=null?s=de+L.search+L.hash:d=!0}
catch{
Be(!1,
`<Link to="${
s}
"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}
let c=hm(s,
{
relative:l}
),
[p,
w,
E]=Jm(r,
m),
_=ih(s,
{
replace:i,
state:u,
target:a,
preventScrollReset:h,
relative:l,
viewTransition:v}
);
function P(M){
t&&t(M),
M.defaultPrevented||_(M)}
let R=g.createElement("a",
{
...m,
...E,
href:C||c,
onClick:d||o?t:P,
ref:th(y,
w),
target:a,
"data-discover":!x&&n==="render"?"true":void 0}
);
return p&&!x?g.createElement(g.Fragment,
null,
R,
g.createElement(qm,
{
page:c}
)):R}
);
nd.displayName="Link";
var rh=g.forwardRef(function({
"aria-current":t="page",
caseSensitive:n=!1,
className:r="",
end:l=!1,
style:o,
to:i,
viewTransition:u,
children:a,
...s}
,
h){
let v=pr(i,
{
relative:s.relative}
),
m=At(),
y=g.useContext(Ol),
{
navigator:k,
basename:x}
=g.useContext(He),
C=y!=null&&dh(v)&&u===!0,
d=k.encodeLocation?k.encodeLocation(v).pathname:v.pathname,
c=m.pathname,
p=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;
n||(c=c.toLowerCase(),
p=p?p.toLowerCase():null,
d=d.toLowerCase()),
p&&x&&(p=yt(p,
x)||p);
const w=d!=="/"&&d.endsWith("/")?d.length-1:d.length;
let E=c===d||!l&&c.startsWith(d)&&c.charAt(w)==="/",
_=p!=null&&(p===d||!l&&p.startsWith(d)&&p.charAt(d.length)==="/"),
P={
isActive:E,
isPending:_,
isTransitioning:C}
,
R=E?t:void 0,
M;
typeof r=="function"?M=r(P):M=[r,
E?"active":null,
_?"pending":null,
C?"transitioning":null].filter(Boolean).join(" ");
let L=typeof o=="function"?o(P):o;
return g.createElement(nd,
{
...s,
"aria-current":R,
className:M,
ref:h,
style:L,
to:i,
viewTransition:u}
,
typeof a=="function"?a(P):a)}
);
rh.displayName="NavLink";
var lh=g.forwardRef(({
discover:e="render",
fetcherKey:t,
navigate:n,
reloadDocument:r,
replace:l,
state:o,
method:i=Kr,
action:u,
onSubmit:a,
relative:s,
preventScrollReset:h,
viewTransition:v,
...m}
,
y)=>{
let k=sh(),
x=ch(u,
{
relative:s}
),
C=i.toLowerCase()==="get"?"get":"post",
d=typeof u=="string"&&td.test(u),
c=p=>{
if(a&&a(p),
p.defaultPrevented)return;
p.preventDefault();
let w=p.nativeEvent.submitter,
E=(w==null?void 0:w.getAttribute("formmethod"))||i;
k(w||p.currentTarget,
{
fetcherKey:t,
method:E,
navigate:n,
replace:l,
state:o,
relative:s,
preventScrollReset:h,
viewTransition:v}
)}
;
return g.createElement("form",
{
ref:y,
method:C,
action:x,
onSubmit:r?a:c,
...m,
"data-discover":!d&&e==="render"?"true":void 0}
)}
);
lh.displayName="Form";
function oh(e){
return`${
e}
 must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}
function rd(e){
let t=g.useContext(gn);
return W(t,
oh(e)),
t}
function ih(e,
{
target:t,
replace:n,
state:r,
preventScrollReset:l,
relative:o,
viewTransition:i}
={
}
){
let u=vm(),
a=At(),
s=pr(e,
{
relative:o}
);
return g.useCallback(h=>{
if(Fm(h,
t)){
h.preventDefault();
let v=n!==void 0?n:or(a)===or(s);
u(e,
{
replace:v,
state:r,
preventScrollReset:l,
relative:o,
viewTransition:i}
)}
}
,
[a,
u,
s,
n,
r,
t,
e,
l,
o,
i])}
var uh=0,
ah=()=>`__${
String(++uh)}
__`;
function sh(){
let{
router:e}
=rd("useSubmit"),
{
basename:t}
=g.useContext(He),
n=Pm();
return g.useCallback(async(r,
l={
}
)=>{
let{
action:o,
method:i,
encType:u,
formData:a,
body:s}
=Um(r,
t);
if(l.navigate===!1){
let h=l.fetcherKey||ah();
await e.fetch(h,
n,
l.action||o,
{
preventScrollReset:l.preventScrollReset,
formData:a,
body:s,
formMethod:l.method||i,
formEncType:l.encType||u,
flushSync:l.flushSync}
)}
else await e.navigate(l.action||o,
{
preventScrollReset:l.preventScrollReset,
formData:a,
body:s,
formMethod:l.method||i,
formEncType:l.encType||u,
replace:l.replace,
state:l.state,
fromRouteId:n,
flushSync:l.flushSync,
viewTransition:l.viewTransition}
)}
,
[e,
t,
n])}
function ch(e,
{
relative:t}
={
}
){
let{
basename:n}
=g.useContext(He),
r=g.useContext(et);
W(r,
"useFormAction must be used inside a RouteContext");
let[l]=r.matches.slice(-1),
o={
...pr(e||".",
{
relative:t}
)}
,
i=At();
if(e==null){
o.search=i.search;
let u=new URLSearchParams(o.search),
a=u.getAll("index");
if(a.some(h=>h==="")){
u.delete("index"),
a.filter(v=>v).forEach(v=>u.append("index",
v));
let h=u.toString();
o.search=h?`?${
h}
`:""}
}
return(!e||e===".")&&l.route.index&&(o.search=o.search?o.search.replace(/^\?/,
"?index&"):"?index"),
n!=="/"&&(o.pathname=o.pathname==="/"?n:Ge([n,
o.pathname])),
or(o)}
function dh(e,
t={
}
){
let n=g.useContext(Gc);
W(n!=null,
"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
let{
basename:r}
=rd("useViewTransitionState"),
l=pr(e,
{
relative:t.relative}
);
if(!n.isTransitioning)return!1;
let o=yt(n.currentLocation.pathname,
r)||n.currentLocation.pathname,
i=yt(n.nextLocation.pathname,
r)||n.nextLocation.pathname;
return yl(l.pathname,
i)!=null||yl(l.pathname,
o)!=null}
new TextEncoder;
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=e=>e.replace(/([a-z0-9])([A-Z])/g,
"$1-$2").toLowerCase(),
ld=(...e)=>e.filter((t,
n,
r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ph={
xmlns:"http://www.w3.org/2000/svg",
width:24,
height:24,
viewBox:"0 0 24 24",
fill:"none",
stroke:"currentColor",
strokeWidth:2,
strokeLinecap:"round",
strokeLinejoin:"round"}
;
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=g.forwardRef(({
color:e="currentColor",
size:t=24,
strokeWidth:n=2,
absoluteStrokeWidth:r,
className:l="",
children:o,
iconNode:i,
...u}
,
a)=>g.createElement("svg",
{
ref:a,
...ph,
width:t,
height:t,
stroke:e,
strokeWidth:r?Number(n)*24/Number(t):n,
className:ld("lucide",
l),
...u}
,
[...i.map(([s,
h])=>g.createElement(s,
h)),
...Array.isArray(o)?o:[o]]));
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(e,
t)=>{
const n=g.forwardRef(({
className:r,
...l}
,
o)=>g.createElement(mh,
{
ref:o,
iconNode:t,
className:ld(`lucide-${
fh(e)}
`,
r),
...l}
));
return n.displayName=`${
e}
`,
n}
;
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=St("Globe",
[["circle",
{
cx:"12",
cy:"12",
r:"10",
key:"1mglay"}
],
["path",
{
d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
key:"13o1zl"}
],
["path",
{
d:"M2 12h20",
key:"9i4pu4"}
]]);
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=St("Linkedin",
[["path",
{
d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
key:"c2jq9f"}
],
["rect",
{
width:"4",
height:"12",
x:"2",
y:"9",
key:"mk3on5"}
],
["circle",
{
cx:"4",
cy:"4",
r:"2",
key:"bt5ra8"}
]]);
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=St("Mail",
[["rect",
{
width:"20",
height:"16",
x:"2",
y:"4",
rx:"2",
key:"18n3k1"}
],
["path",
{
d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
key:"1ocrg3"}
]]);
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=St("Menu",
[["line",
{
x1:"4",
x2:"20",
y1:"12",
y2:"12",
key:"1e0a9i"}
],
["line",
{
x1:"4",
x2:"20",
y1:"6",
y2:"6",
key:"1owob3"}
],
["line",
{
x1:"4",
x2:"20",
y1:"18",
y2:"18",
key:"yk5zj1"}
]]);
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=St("Target",
[["circle",
{
cx:"12",
cy:"12",
r:"10",
key:"1mglay"}
],
["circle",
{
cx:"12",
cy:"12",
r:"6",
key:"1vlfrh"}
],
["circle",
{
cx:"12",
cy:"12",
r:"2",
key:"1c9p78"}
]]);
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=St("Twitter",
[["path",
{
d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
key:"pff0z6"}
]]);
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=St("X",
[["path",
{
d:"M18 6 6 18",
key:"1bl5f8"}
],
["path",
{
d:"m6 6 12 12",
key:"d8bk6v"}
]]);
/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=St("Zap",
[["path",
{
d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
key:"1xq2db"}
]]),
kh=()=>{
const[e,
t]=g.useState({
name:"",
email:"",
phone:"",
company:"",
message:""}
),
[n,
r]=g.useState(!1),
[l,
o]=g.useState(""),
i=async u=>{
u.preventDefault(),
r(!0);
try{
await fetch("https://docs.google.com/forms/d/e/1FAIpQLSca2p7yNSmIUP6rLZHoqdR7gfwvwcECxhhgISEujULKBsHpcw/viewform?usp=sf_link",
{
method:"POST",
mode:"no-cors",
headers:{
"Content-Type":"application/x-www-form-urlencoded"}
,
body:new URLSearchParams({
"entry.2015786922":e.name,
"entry.1042595298":e.email,
"entry.1952300250":e.phone,
"entry.1218471565":e.company,
"entry.1508085688":e.message}
)}
),
o("Thanks! We will get back to you soon."),
t({
name:"",
email:"",
phone:"",
company:"",
message:""}
)}
catch{
o("Error submitting form. Please try again.")}
r(!1)}
;
return f.jsx("div",
{
className:"bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto",
children:f.jsxs("form",
{
onSubmit:i,
className:"space-y-6",
children:[f.jsx("div",
{
children:f.jsx("input",
{
type:"text",
placeholder:"Your Name*",
className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
value:e.name,
onChange:u=>t({
...e,
name:u.target.value}
),
required:!0}
)}
),
f.jsx("div",
{
children:f.jsx("input",
{
type:"email",
placeholder:"Email Address*",
className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
value:e.email,
onChange:u=>t({
...e,
email:u.target.value}
),
required:!0}
)}
),
f.jsx("div",
{
children:f.jsx("input",
{
type:"tel",
placeholder:"Phone Number",
className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
value:e.phone,
onChange:u=>t({
...e,
phone:u.target.value}
)}
)}
),
f.jsx("div",
{
children:f.jsx("input",
{
type:"text",
placeholder:"Company Name",
className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
value:e.company,
onChange:u=>t({
...e,
company:u.target.value}
)}
)}
),
f.jsx("div",
{
children:f.jsx("textarea",
{
placeholder:"Your Message*",
rows:"4",
className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
value:e.message,
onChange:u=>t({
...e,
message:u.target.value}
),
required:!0}
)}
),
f.jsx("button",
{
type:"submit",
disabled:n,
className:"w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50",
children:n?"Sending...":"Send Message"}
),
l&&f.jsx("p",
{
className:`text-sm text-center ${
l.includes("Error")?"text-red-600":"text-green-600"}
`,
children:l}
)]}
)}
)}
,
Sh=()=>{
const[e,
t]=g.useState(0),
[n,
r]=g.useState(!1);
g.useEffect(()=>{
const o=()=>{
const i=window.innerHeight,
u=document.documentElement.scrollHeight-i,
a=window.scrollY;
t(a/u*100)}
;
return window.addEventListener("scroll",
o),
()=>window.removeEventListener("scroll",
o)}
,
[]);
const l=()=>{
r(!1)}
;
return f.jsxs("div",
{
className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",
children:[f.jsx("div",
{
className:"fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 z-50",
style:{
width:`${
e}
%`}
}
),
f.jsx("nav",
{
className:"fixed w-full bg-white/70 backdrop-blur-md z-40 border-b border-blue-100",
children:f.jsxs("div",
{
className:"max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative",
children:[f.jsx("div",
{
className:"text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text",
children:"distk"}
),
f.jsx("button",
{
className:"md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors",
onClick:()=>r(!n),
"aria-label":"Toggle menu",
children:n?f.jsx(xh,
{
size:24}
):f.jsx(gh,
{
size:24}
)}
),
f.jsxs("div",
{
className:"hidden md:flex gap-8 text-sm items-center",
children:[f.jsx("a",
{
href:"#services",
className:"hover:text-blue-600 transition-colors",
children:"Services"}
),
f.jsx("a",
{
href:"#ai-solutions",
className:"hover:text-blue-600 transition-colors",
children:"AI Solutions"}
),
f.jsx("a",
{
href:"/dares-ai",
className:"hover:text-blue-600 transition-colors",
children:"DARES AI"}
),
f.jsx("a",
{
href:"#success",
className:"hover:text-blue-600 transition-colors",
children:"Success Stories"}
),
f.jsx("a",
{
href:"#contact",
className:"hover:text-blue-600 transition-colors",
children:"Contact"}
),
f.jsxs("div",
{
className:"flex gap-4",
children:[f.jsx("a",
{
href:"https://www.linkedin.com/company/distk-technologies/?viewAsMember=true",
target:"_blank",
rel:"noopener noreferrer",
className:"hover:text-blue-600 transition-colors",
children:f.jsx(ho,
{
size:20}
)}
),
f.jsx("a",
{
href:"https://twitter.com/distktechnologies",
target:"_blank",
rel:"noopener noreferrer",
className:"hover:text-blue-600 transition-colors",
children:f.jsx(vo,
{
size:20}
)}
)]}
),
f.jsx("button",
{
className:"px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-200",
children:"Contact"}
)]}
),
n&&f.jsx("div",
{
className:"absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-0.5 py-4 px-4 md:hidden",
children:f.jsxs("div",
{
className:"flex flex-col gap-4",
children:[f.jsx("a",
{
href:"#services",
className:"hover:text-blue-600 transition-colors py-2",
onClick:l,
children:"Services"}
),
f.jsx("a",
{
href:"#ai-solutionss",
className:"hover:text-blue-600 transition-colors py-2",
onClick:l,
children:"AI Solutions"}
),
f.jsx("a",
{
href:"/dares-ai",
className:"hover:text-blue-600 transition-colors py-2",
onClick:l,
children:"   DARES AI"}
),
f.jsx("a",
{
href:"#success",
className:"hover:text-blue-600 transition-colors py-2",
onClick:l,
children:"Success Stories"}
),
f.jsx("a",
{
href:"#contact",
className:"hover:text-blue-600 transition-colors py-2",
onClick:l,
children:"Contact"}
),
f.jsxs("div",
{
className:"flex gap-4 py-2",
children:[f.jsx("a",
{
href:"https://www.linkedin.com/company/distk-technologies/?viewAsMember=true",
target:"_blank",
rel:"noopener noreferrer",
className:"hover:text-blue-600 transition-colors",
children:f.jsx(ho,
{
size:20}
)}
),
f.jsx("a",
{
href:"https://twitter.com/distktechnologies",
target:"_blank",
rel:"noopener noreferrer",
className:"hover:text-blue-600 transition-colors",
children:f.jsx(vo,
{
size:20}
)}
)]}
),
f.jsx("button",
{
className:"w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-200",
children:"Contact"}
)]}
)}
)]}
)}
),
f.jsxs("section",
{
className:"min-h-screen pt-20 relative overflow-hidden pb-32",
children:["  ",
f.jsx("div",
{
className:"absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"}
),
f.jsxs("div",
{
className:"relative max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16",
children:[f.jsxs("div",
{
className:"text-center max-w-4xl mx-auto mb-8 md:mb-16",
children:[f.jsx("div",
{
className:"inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6",
children:"For Startups & SMEs"}
),
f.jsx("h1",
{
className:"text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-900 to-purple-900 text-transparent bg-clip-text mb-6 px-4 md:px-0",
children:"Sell Better & Market More Effectively"}
),
f.jsx("p",
{
className:"text-lg md:text-xl text-slate-600 mb-8 px-4 md:px-0",
children:"We help startups and SMEs build and execute end-to-end GTM strategies,
 improve their sales processes,
 and enable effective marketing - driving real revenue growth."}
),
f.jsxs("div",
{
className:"flex flex-col md:flex-row gap-4 justify-center mb-16 px-4 md:px-0",
children:[f.jsx("button",
{
onClick:()=>window.open("https://calendar.app.google/qjPRhJvWUMTNApZJA",
"_blank"),
className:"w-full md:w-auto px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-lg hover:shadow-blue-700/20 transition-all duration-300 transform hover:-translate-y-1",
children:"Schedule a Strategy Call"}
),
f.jsx("button",
{
className:"w-full md:w-auto px-8 py-4 border border-blue-200 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300",
children:"View Our Results"}
)]}
)]}
),
f.jsxs("div",
{
className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4 md:px-0 mb-16",
children:["  ",
[{
number:"20%+",
label:"Revenue Growth"}
,
{
number:"15+",
label:"Clients Enabled"}
,
{
number:"20+",
label:"Teams Trained"}
,
{
number:"3x",
label:"Average ROI"}
].map((o,
i)=>f.jsxs("div",
{
className:"p-6 md:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50 group",
children:[f.jsx("div",
{
className:"font-bold text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform",
children:o.number}
),
f.jsx("div",
{
className:"text-slate-600",
children:o.label}
)]}
,
i))]}
)]}
)]}
),
f.jsxs("section",
{
id:"services",
className:"py-16 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden",
children:[f.jsx("div",
{
className:"absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30"}
),
f.jsxs("div",
{
className:"max-w-7xl mx-auto space-y-8 md:space-y-16 relative",
children:[f.jsxs("div",
{
className:"text-center space-y-4",
children:[f.jsx("h2",
{
className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text",
children:"How We Help You Grow"}
),
f.jsx("p",
{
className:"text-slate-600 max-w-2xl mx-auto px-4",
children:"End-to-end solutions to boost your revenue and market presence"}
)]}
),
f.jsx("div",
{
className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
children:[{
icon:f.jsx(hh,
{
className:"text-blue-600",
size:24}
),
title:"GTM Strategy & Execution",
description:"We build and execute comprehensive go-to-market strategies tailored for your business goals"}
,
{
icon:f.jsx(yh,
{
className:"text-purple-600",
size:24}
),
title:"Sales Team Enablement",
description:"Transform your sales team with our proven methodologies and hands-on training"}
,
{
icon:f.jsx(wh,
{
className:"text-blue-600",
size:24}
),
title:"Marketing Excellence",
description:"Optimize your marketing efforts to generate qualified leads and drive conversions"}
].map((o,
i)=>f.jsxs("div",
{
className:"group p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent",
children:[f.jsx("div",
{
className:"mb-4 transform group-hover:scale-110 transition-transform duration-300",
children:o.icon}
),
f.jsx("h3",
{
className:"text-xl font-semibold mb-2 text-slate-800",
children:o.title}
),
f.jsx("p",
{
className:"text-slate-600",
children:o.description}
)]}
,
i))}
)]}
)]}
),
f.jsxs("section",
{
id:"ai-solutions",
className:"py-16 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden",
children:[f.jsx("div",
{
className:"absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30"}
),
f.jsxs("div",
{
className:"max-w-7xl mx-auto space-y-8 md:space-y-16 relative",
children:[f.jsxs("div",
{
className:"text-center space-y-4",
children:[f.jsx("h2",
{
className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text",
children:"AI-Powered Solutions"}
),
f.jsx("p",
{
className:"text-slate-600 max-w-2xl mx-auto px-4",
children:"Transform your business operations with cutting-edge AI implementations"}
)]}
),
f.jsxs("div",
{
className:"grid grid-cols-1 md:grid-cols-3 gap-8",
children:[f.jsxs("div",
{
className:"group p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent",
children:[f.jsx("div",
{
className:"mb-4 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
children:f.jsx("svg",
{
className:"w-6 h-6 text-blue-600",
fill:"none",
stroke:"currentColor",
viewBox:"0 0 24 24",
children:f.jsx("path",
{
strokeLinecap:"round",
strokeLinejoin:"round",
strokeWidth:"2",
d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}
)}
)}
),
f.jsx("h3",
{
className:"text-xl font-semibold mb-3 text-slate-800",
children:"Marketing Automation"}
),
f.jsx("p",
{
className:"text-slate-600 mb-4",
children:"Leverage AI to transform your marketing efforts and drive better results."}
),
f.jsxs("ul",
{
className:"space-y-2 text-slate-600",
children:[f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-blue-600 mr-2",
children:"•"}
),
"Automated content generation and optimization"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-blue-600 mr-2",
children:"•"}
),
"AI-driven campaign management"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-blue-600 mr-2",
children:"•"}
),
"Personalized customer journey mapping"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-blue-600 mr-2",
children:"•"}
),
"Smart audience segmentation"]}
)]}
)]}
),
f.jsxs("div",
{
className:"group p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent",
children:[f.jsx("div",
{
className:"mb-4 h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
children:f.jsx("svg",
{
className:"w-6 h-6 text-purple-600",
fill:"none",
stroke:"currentColor",
viewBox:"0 0 24 24",
children:f.jsx("path",
{
strokeLinecap:"round",
strokeLinejoin:"round",
strokeWidth:"2",
d:"M13 10V3L4 14h7v7l9-11h-7z"}
)}
)}
),
f.jsx("h3",
{
className:"text-xl font-semibold mb-3 text-slate-800",
children:"Sales Automation"}
),
f.jsx("p",
{
className:"text-slate-600 mb-4",
children:"Enhance your sales processes with AI-powered automation and insights."}
),
f.jsxs("ul",
{
className:"space-y-2 text-slate-600",
children:[f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-purple-600 mr-2",
children:"•"}
),
"Intelligent lead scoring and prioritization"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-purple-600 mr-2",
children:"•"}
),
"Automated follow-up sequences"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-purple-600 mr-2",
children:"•"}
),
"Predictive sales forecasting"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-purple-600 mr-2",
children:"•"}
),
"Smart CRM integration"]}
)]}
)]}
),
f.jsxs("div",
{
className:"group p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent",
children:[f.jsx("div",
{
className:"mb-4 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
children:f.jsx("svg",
{
className:"w-6 h-6 text-blue-600",
fill:"none",
stroke:"currentColor",
viewBox:"0 0 24 24",
children:f.jsx("path",
{
strokeLinecap:"round",
strokeLinejoin:"round",
strokeWidth:"2",
d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}
)}
)}
),
f.jsx("h3",
{
className:"text-xl font-semibold mb-3 text-slate-800",
children:"Agentic Implementation"}
),
f.jsx("p",
{
className:"text-slate-600 mb-4",
children:"Deploy intelligent AI agents tailored to your specific business needs."}
),
f.jsxs("ul",
{
className:"space-y-2 text-slate-600",
children:[f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-blue-600 mr-2",
children:"•"}
),
"Custom AI agent development"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-blue-600 mr-2",
children:"•"}
),
"Autonomous workflow automation"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-blue-600 mr-2",
children:"•"}
),
"Intelligent decision support"]}
),
f.jsxs("li",
{
className:"flex items-start",
children:[f.jsx("span",
{
className:"text-blue-600 mr-2",
children:"•"}
),
"24/7 automated operations"]}
)]}
)]}
)]}
)]}
)]}
),
f.jsxs("section",
{
id:"dares-ai",
className:"py-16 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden",
children:[f.jsx("div",
{
className:"absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-30"}
),
f.jsxs("div",
{
className:"max-w-7xl mx-auto space-y-8 md:space-y-16 relative",
children:[f.jsxs("div",
{
className:"text-center space-y-4",
children:[f.jsx("h2",
{
className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text",
children:"Introducing DARES AI: Your AI Business Partner"}
),
f.jsx("p",
{
className:"text-slate-600 max-w-2xl mx-auto px-4",
children:"Leverage AI to create business roadmaps,
 marketing content,
 branding assets,
 and more with DARES AI."}
)]}
),
f.jsx("div",
{
className:"text-center",
children:f.jsx("button",
{
onClick:()=>window.open("/dares-ai",
"_self"),
className:"px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1",
children:"Try DARES AI Now"}
)}
)]}
)]}
),
f.jsx("section",
{
id:"success",
className:"py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white",
children:f.jsxs("div",
{
className:"max-w-7xl mx-auto space-y-8 md:space-y-16",
children:[f.jsxs("div",
{
className:"text-center space-y-4",
children:[f.jsx("h2",
{
className:"text-3xl md:text-4xl font-bold",
children:"Real Results,
 Real Growth"}
),
f.jsx("p",
{
className:"text-blue-200 max-w-2xl mx-auto px-4",
children:"See how we've helped businesses like yours achieve their goals"}
)]}
),
f.jsx("div",
{
className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
children:[{
client:"Tech Startup",
result:"100% Revenue Growth",
description:"Complete GTM strategy implementation and sales team training"}
,
{
client:"E-commerce SME",
result:"2x Lead Generation",
description:"Marketing optimization and sales process improvement"}
,
{
client:"B2B Service Provider",
result:"30% Conversion Rate",
description:"Sales enablement and team training program"}
].map((o,
i)=>f.jsxs("div",
{
className:"group p-6 md:p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300",
children:[f.jsx("h3",
{
className:"text-xl font-semibold mb-2 text-blue-300",
children:o.client}
),
f.jsx("div",
{
className:"text-2xl font-bold mb-4 text-white",
children:o.result}
),
f.jsx("p",
{
className:"text-blue-200",
children:o.description}
)]}
,
i))}
)]}
)}
),
f.jsx("section",
{
className:"py-16 bg-gray-50",
children:f.jsxs("div",
{
className:"max-w-7xl mx-auto px-4",
children:[f.jsxs("div",
{
className:"text-center mb-12",
children:[f.jsx("h2",
{
className:"text-3xl font-bold mb-4",
children:"Let's Talk"}
),
f.jsx("p",
{
className:"text-gray-600",
children:"We'd love to hear about your project"}
)]}
),
f.jsx(kh,
{
}
)]}
)}
),
f.jsx("section",
{
id:"contact",
className:"py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white",
children:f.jsxs("div",
{
className:"max-w-7xl mx-auto text-center space-y-8",
children:[f.jsx("h2",
{
className:"text-3xl md:text-4xl font-bold",
children:"Ready to Grow Your Business?"}
),
f.jsx("p",
{
className:"text-blue-100 max-w-xl mx-auto px-4",
children:"Let's discuss how we can help you improve your sales and marketing performance"}
),
f.jsx("div",
{
className:"flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 px-4",
children:f.jsxs("a",
{
href:"mailto:connect@distk.in",
className:"flex items-center justify-center gap-2 hover:text-blue-200 transition-colors",
children:[f.jsx(vh,
{
size:20}
),
"connect@distk.in"]}
)}
),
f.jsx("div",
{
className:"pt-8",
children:f.jsx("button",
{
onClick:()=>window.open("https://calendar.app.google/qjPRhJvWUMTNApZJA",
"_blank"),
className:"w-full md:w-auto px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-lg hover:shadow-blue-700/20 transition-all duration-300 transform hover:-translate-y-1",
children:"Schedule a Strategy Call"}
)}
)]}
)}
),
f.jsx("footer",
{
className:"bg-slate-900 text-white py-12",
children:f.jsxs("div",
{
className:"max-w-7xl mx-auto px-4 md:px-6",
children:[f.jsxs("div",
{
className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
children:[f.jsxs("div",
{
children:[f.jsx("div",
{
className:"text-2xl font-semibold mb-4",
children:"distk"}
),
f.jsx("p",
{
className:"text-slate-400",
children:"Enabling better sales and marketing performance for startups and SMEs"}
)]}
),
f.jsxs("div",
{
children:[f.jsx("h3",
{
className:"font-semibold mb-4",
children:"Services"}
),
f.jsxs("ul",
{
className:"space-y-2 text-slate-400",
children:[f.jsx("li",
{
children:"GTM Strategy"}
),
f.jsx("li",
{
children:"Sales Enablement"}
),
f.jsx("li",
{
children:"Marketing Excellence"}
),
f.jsx("li",
{
children:"AI Solutions"}
)]}
)]}
),
f.jsxs("div",
{
children:[f.jsx("h3",
{
className:"font-semibold mb-4",
children:"Company"}
),
f.jsxs("ul",
{
className:"space-y-2 text-slate-400",
children:[f.jsx("li",
{
children:"About Us"}
),
f.jsx("li",
{
children:"Success Stories"}
),
f.jsx("li",
{
children:"Contact"}
)]}
)]}
),
f.jsxs("div",
{
children:[f.jsx("h3",
{
className:"font-semibold mb-4",
children:"Connect"}
),
f.jsxs("div",
{
className:"flex gap-4",
children:[f.jsx("a",
{
href:"https://www.linkedin.com/company/distk-technologies/?viewAsMember=true",
target:"_blank",
rel:"noopener noreferrer",
className:"hover:text-blue-400 transition-colors",
children:f.jsx(ho,
{
size:24}
)}
),
f.jsx("a",
{
href:"https://twitter.com/distktechnologies",
target:"_blank",
rel:"noopener noreferrer",
className:"hover:text-blue-400 transition-colors",
children:f.jsx(vo,
{
size:24}
)}
)]}
)]}
)]}
),
f.jsx("div",
{
className:"border-t border-slate-800 mt-12 pt-8 text-center text-slate-400",
children:f.jsx("p",
{
children:"© 2024 Distk. All rights reserved."}
)}
)]}
)}
)]}
)}
,
Eh=()=>{
const[e,
t]=g.useState(""),
[n,
r]=g.useState(""),
[l,
o]=g.useState(!1),
i=async()=>{
if(!e.trim()){
alert("Please enter your query!");
return}
o(!0),
r("");
try{
const a=await(await fetch("https://<your-firebase-function-url>/api",
{
method:"POST",
headers:{
"Content-Type":"application/json"}
,
body:JSON.stringify({
userInput:e}
)}
)).json();
r(a.reply||"No response generated.")}
catch(u){
r("Error: Unable to fetch response. Please try again later."),
console.error(u)}
finally{
o(!1)}
}
;
return f.jsxs("div",
{
className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6",
children:[f.jsxs("div",
{
className:"max-w-3xl mx-auto text-center py-12",
children:[f.jsx("h1",
{
className:"text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text",
children:"DARES AI: Your AI Business Partner"}
),
f.jsx("p",
{
className:"mt-4 text-lg text-gray-600",
children:"Ask DARES AI to help you with logos,
 business plans,
 marketing content,
 and more!"}
)]}
),
f.jsxs("div",
{
className:"max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg",
children:[f.jsx("textarea",
{
className:"w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
rows:"5",
placeholder:"What do you need help with?",
value:e,
onChange:u=>t(u.target.value)}
),
f.jsx("button",
{
onClick:i,
disabled:l,
className:"mt-4 w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50",
children:l?"Generating...":"Submit"}
),
n&&f.jsxs("div",
{
className:"mt-6 p-4 bg-gray-50 rounded-lg shadow-sm",
children:[f.jsx("h3",
{
className:"text-lg font-semibold text-gray-700",
children:"Response:"}
),
f.jsx("p",
{
className:"mt-2 text-gray-600",
children:n}
)]}
)]}
)]}
)}
;
function Ch(){
return f.jsx(nh,
{
children:f.jsxs(Tm,
{
children:[f.jsx(ci,
{
path:"/",
element:f.jsx(Sh,
{
}
)}
),
f.jsx(ci,
{
path:"/dares-ai",
element:f.jsx(Eh,
{
}
)}
)]}
)}
)}
Bc(document.getElementById("root")).render(f.jsx(g.StrictMode,
{
children:f.jsx(Ch,
{
}
)}
));

