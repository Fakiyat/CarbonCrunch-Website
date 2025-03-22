(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function TE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var xd={exports:{}},Ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function bE(){if(lv)return Ol;lv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:l}}return Ol.Fragment=t,Ol.jsx=n,Ol.jsxs=n,Ol}var uv;function AE(){return uv||(uv=1,xd.exports=bE()),xd.exports}var Qt=AE(),yd={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function RE(){if(cv)return oe;cv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function v(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(z,et,St){this.props=z,this.context=et,this.refs=M,this.updater=St||y}S.prototype.isReactComponent={},S.prototype.setState=function(z,et){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,et,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function x(){}x.prototype=S.prototype;function w(z,et,St){this.props=z,this.context=et,this.refs=M,this.updater=St||y}var U=w.prototype=new x;U.constructor=w,E(U,S.prototype),U.isPureReactComponent=!0;var R=Array.isArray,D={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function O(z,et,St,bt,W,ft){return St=ft.ref,{$$typeof:o,type:z,key:et,ref:St!==void 0?St:null,props:ft}}function B(z,et){return O(z.type,et,void 0,void 0,void 0,z.props)}function b(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function A(z){var et={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(St){return et[St]})}var H=/\/+/g;function it(z,et){return typeof z=="object"&&z!==null&&z.key!=null?A(""+z.key):et.toString(36)}function Q(){}function lt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Q,Q):(z.status="pending",z.then(function(et){z.status==="pending"&&(z.status="fulfilled",z.value=et)},function(et){z.status==="pending"&&(z.status="rejected",z.reason=et)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ot(z,et,St,bt,W){var ft=typeof z;(ft==="undefined"||ft==="boolean")&&(z=null);var yt=!1;if(z===null)yt=!0;else switch(ft){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(z.$$typeof){case o:case t:yt=!0;break;case _:return yt=z._init,ot(yt(z._payload),et,St,bt,W)}}if(yt)return W=W(z),yt=bt===""?"."+it(z,0):bt,R(W)?(St="",yt!=null&&(St=yt.replace(H,"$&/")+"/"),ot(W,et,St,"",function(Kt){return Kt})):W!=null&&(b(W)&&(W=B(W,St+(W.key==null||z&&z.key===W.key?"":(""+W.key).replace(H,"$&/")+"/")+yt)),et.push(W)),1;yt=0;var Tt=bt===""?".":bt+":";if(R(z))for(var Rt=0;Rt<z.length;Rt++)bt=z[Rt],ft=Tt+it(bt,Rt),yt+=ot(bt,et,St,ft,W);else if(Rt=v(z),typeof Rt=="function")for(z=Rt.call(z),Rt=0;!(bt=z.next()).done;)bt=bt.value,ft=Tt+it(bt,Rt++),yt+=ot(bt,et,St,ft,W);else if(ft==="object"){if(typeof z.then=="function")return ot(lt(z),et,St,bt,W);throw et=String(z),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return yt}function G(z,et,St){if(z==null)return z;var bt=[],W=0;return ot(z,bt,"","",function(ft){return et.call(St,ft,W++)}),bt}function J(z){if(z._status===-1){var et=z._result;et=et(),et.then(function(St){(z._status===0||z._status===-1)&&(z._status=1,z._result=St)},function(St){(z._status===0||z._status===-1)&&(z._status=2,z._result=St)}),z._status===-1&&(z._status=0,z._result=et)}if(z._status===1)return z._result.default;throw z._result}var X=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function gt(){}return oe.Children={map:G,forEach:function(z,et,St){G(z,function(){et.apply(this,arguments)},St)},count:function(z){var et=0;return G(z,function(){et++}),et},toArray:function(z){return G(z,function(et){return et})||[]},only:function(z){if(!b(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},oe.Component=S,oe.Fragment=n,oe.Profiler=s,oe.PureComponent=w,oe.StrictMode=a,oe.Suspense=d,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(z){return function(){return z.apply(null,arguments)}},oe.cloneElement=function(z,et,St){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var bt=E({},z.props),W=z.key,ft=void 0;if(et!=null)for(yt in et.ref!==void 0&&(ft=void 0),et.key!==void 0&&(W=""+et.key),et)!P.call(et,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&et.ref===void 0||(bt[yt]=et[yt]);var yt=arguments.length-2;if(yt===1)bt.children=St;else if(1<yt){for(var Tt=Array(yt),Rt=0;Rt<yt;Rt++)Tt[Rt]=arguments[Rt+2];bt.children=Tt}return O(z.type,W,void 0,void 0,ft,bt)},oe.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},oe.createElement=function(z,et,St){var bt,W={},ft=null;if(et!=null)for(bt in et.key!==void 0&&(ft=""+et.key),et)P.call(et,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(W[bt]=et[bt]);var yt=arguments.length-2;if(yt===1)W.children=St;else if(1<yt){for(var Tt=Array(yt),Rt=0;Rt<yt;Rt++)Tt[Rt]=arguments[Rt+2];W.children=Tt}if(z&&z.defaultProps)for(bt in yt=z.defaultProps,yt)W[bt]===void 0&&(W[bt]=yt[bt]);return O(z,ft,void 0,void 0,null,W)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(z){return{$$typeof:f,render:z}},oe.isValidElement=b,oe.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:J}},oe.memo=function(z,et){return{$$typeof:p,type:z,compare:et===void 0?null:et}},oe.startTransition=function(z){var et=D.T,St={};D.T=St;try{var bt=z(),W=D.S;W!==null&&W(St,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(gt,X)}catch(ft){X(ft)}finally{D.T=et}},oe.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},oe.use=function(z){return D.H.use(z)},oe.useActionState=function(z,et,St){return D.H.useActionState(z,et,St)},oe.useCallback=function(z,et){return D.H.useCallback(z,et)},oe.useContext=function(z){return D.H.useContext(z)},oe.useDebugValue=function(){},oe.useDeferredValue=function(z,et){return D.H.useDeferredValue(z,et)},oe.useEffect=function(z,et){return D.H.useEffect(z,et)},oe.useId=function(){return D.H.useId()},oe.useImperativeHandle=function(z,et,St){return D.H.useImperativeHandle(z,et,St)},oe.useInsertionEffect=function(z,et){return D.H.useInsertionEffect(z,et)},oe.useLayoutEffect=function(z,et){return D.H.useLayoutEffect(z,et)},oe.useMemo=function(z,et){return D.H.useMemo(z,et)},oe.useOptimistic=function(z,et){return D.H.useOptimistic(z,et)},oe.useReducer=function(z,et,St){return D.H.useReducer(z,et,St)},oe.useRef=function(z){return D.H.useRef(z)},oe.useState=function(z){return D.H.useState(z)},oe.useSyncExternalStore=function(z,et,St){return D.H.useSyncExternalStore(z,et,St)},oe.useTransition=function(){return D.H.useTransition()},oe.version="19.0.0",oe}var fv;function mm(){return fv||(fv=1,yd.exports=RE()),yd.exports}var di=mm();function wE(){return Qt.jsx("nav",{className:"navbar-box",children:Qt.jsxs("div",{className:"navbar-container",children:[Qt.jsxs("div",{className:"navbar-logo",children:[Qt.jsx("img",{src:"./src/images/Company Logo 1.png",alt:"Carbon Crunch logo"}),Qt.jsx("span",{children:"Carboncrunch"})]}),Qt.jsxs("div",{className:"Navbar-links",children:[Qt.jsx("a",{href:"Home",className:"nav-link-active",children:"Home"}),Qt.jsx("a",{href:"",className:"nav-link",children:"Services"}),Qt.jsx("a",{href:"",className:"nav-link",children:"Blog"}),Qt.jsx("a",{href:"",className:"nav-link",children:"About Us"}),Qt.jsx("a",{href:"",className:"nav-link",children:"Conatct"})]}),Qt.jsxs("div",{className:"auth-buttons",children:[Qt.jsx("button",{className:"login-btn",children:" Login"}),Qt.jsx("button",{className:"book-demo-btn",children:" Book Demo"})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _m="174",CE=0,hv=1,DE=2,Fx=1,UE=2,Oa=3,br=0,$n=1,na=2,Sr=0,xo=1,fp=2,dv=3,pv=4,LE=5,ls=100,NE=101,OE=102,PE=103,zE=104,BE=200,FE=201,IE=202,HE=203,hp=204,dp=205,GE=206,VE=207,kE=208,XE=209,WE=210,qE=211,YE=212,jE=213,ZE=214,pp=0,mp=1,_p=2,bo=3,gp=4,vp=5,xp=6,yp=7,Ix=0,KE=1,QE=2,Mr=0,JE=1,$E=2,tT=3,eT=4,nT=5,iT=6,aT=7,Hx=300,Ao=301,Ro=302,Sp=303,Mp=304,hf=306,Ep=1e3,cs=1001,Tp=1002,Yi=1003,rT=1004,gc=1005,aa=1006,Sd=1007,fs=1008,Ha=1009,Gx=1010,Vx=1011,Zl=1012,gm=1013,gs=1014,Ba=1015,iu=1016,vm=1017,xm=1018,wo=1020,kx=35902,Xx=1021,Wx=1022,qi=1023,qx=1024,Yx=1025,yo=1026,Co=1027,jx=1028,ym=1029,Zx=1030,Sm=1031,Mm=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,bp=35840,Ap=35841,Rp=35842,wp=35843,Cp=36196,Dp=37492,Up=37496,Lp=37808,Np=37809,Op=37810,Pp=37811,zp=37812,Bp=37813,Fp=37814,Ip=37815,Hp=37816,Gp=37817,Vp=37818,kp=37819,Xp=37820,Wp=37821,jc=36492,qp=36494,Yp=36495,Kx=36283,jp=36284,Zp=36285,Kp=36286,sT=3200,oT=3201,Qx=0,lT=1,gr="",Oi="srgb",Do="srgb-linear",$c="linear",ze="srgb",to=7680,mv=519,uT=512,cT=513,fT=514,Jx=515,hT=516,dT=517,pT=518,mT=519,_v=35044,gv="300 es",Fa=2e3,tf=2001;class Fo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=Math.PI/180,Qp=180/Math.PI;function au(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function xe(o,t,n){return Math.max(t,Math.min(n,o))}function _T(o,t){return(o%t+t)%t}function Ed(o,t,n){return(1-n)*o+n*t}function Pl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(t=0,n=0){Ce.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*s+t.x,this.y=l*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,n,a,s,l,c,f,d,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,d,p)}set(t,n,a,s,l,c,f,d,p){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=l,_[5]=d,_[6]=a,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],d=a[6],p=a[1],_=a[4],g=a[7],v=a[2],y=a[5],E=a[8],M=s[0],S=s[3],x=s[6],w=s[1],U=s[4],R=s[7],D=s[2],P=s[5],O=s[8];return l[0]=c*M+f*w+d*D,l[3]=c*S+f*U+d*P,l[6]=c*x+f*R+d*O,l[1]=p*M+_*w+g*D,l[4]=p*S+_*U+g*P,l[7]=p*x+_*R+g*O,l[2]=v*M+y*w+E*D,l[5]=v*S+y*U+E*P,l[8]=v*x+y*R+E*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8];return n*c*_-n*f*p-a*l*_+a*f*d+s*l*p-s*c*d}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8],g=_*c-f*p,v=f*d-_*l,y=p*l-c*d,E=n*g+a*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(s*p-_*a)*M,t[2]=(f*a-s*c)*M,t[3]=v*M,t[4]=(_*n-s*d)*M,t[5]=(s*l-f*n)*M,t[6]=y*M,t[7]=(a*d-p*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(a*d,a*p,-a*(d*c+p*f)+c+t,-s*p,s*d,-s*(-p*c+d*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Td.makeScale(t,n)),this}rotate(t){return this.premultiply(Td.makeRotation(-t)),this}translate(t,n){return this.premultiply(Td.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Td=new le;function $x(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ef(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gT(){const o=ef("canvas");return o.style.display="block",o}const vv={};function as(o){o in vv||(vv[o]=!0,console.warn(o))}function vT(o,t,n){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}function xT(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yT(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xv=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yv=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ST(){const o={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===ze&&(s.r=Ia(s.r),s.g=Ia(s.g),s.b=Ia(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===ze&&(s.r=So(s.r),s.g=So(s.g),s.b=So(s.b))),s},fromWorkingColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},toWorkingColorSpace:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gr?$c:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Do]:{primaries:t,whitePoint:a,transfer:$c,toXYZ:xv,fromXYZ:yv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:t,whitePoint:a,transfer:ze,toXYZ:xv,fromXYZ:yv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),o}const we=ST();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function So(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let eo;class MT{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{eo===void 0&&(eo=ef("canvas")),eo.width=t.width,eo.height=t.height;const a=eo.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=eo}return n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ef("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Ia(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ia(n[a]/255)*255):n[a]=Ia(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ET=0;class Em{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=au(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(bd(s[c].image)):l.push(bd(s[c]))}else l=bd(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function bd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?MT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TT=0;class Yn extends Fo{constructor(t=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,a=cs,s=cs,l=aa,c=fs,f=qi,d=Ha,p=Yn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=au(),this.name="",this.source=new Em(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ep:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case Tp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ep:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case Tp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Hx;Yn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,a=0,s=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const d=t.elements,p=d[0],_=d[4],g=d[8],v=d[1],y=d[5],E=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,R=(y+1)/2,D=(x+1)/2,P=(_+v)/4,O=(g+M)/4,B=(E+S)/4;return U>R&&U>D?U<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(U),s=P/a,l=O/a):R>D?R<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(R),a=P/s,l=B/s):D<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(D),a=O/l,s=B/l),this.set(a,s,l,n),this}let w=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(w)<.001&&(w=1),this.x=(S-E)/w,this.y=(g-M)/w,this.z=(v-_)/w,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this.w=xe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this.w=xe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bT extends Fo{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const s={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:aa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const l=new Yn(s,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);l.flipY=!1,l.generateMipmaps=a.generateMipmaps,l.internalFormat=a.internalFormat,this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new Em(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends bT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class ty extends Yn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Yi,this.minFilter=Yi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class AT extends Yn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Yi,this.minFilter=Yi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ru{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,c,f){let d=a[s+0],p=a[s+1],_=a[s+2],g=a[s+3];const v=l[c+0],y=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[n+0]=d,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=M;return}if(g!==M||d!==v||p!==y||_!==E){let S=1-f;const x=d*v+p*y+_*E+g*M,w=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const D=Math.sqrt(U),P=Math.atan2(D,x*w);S=Math.sin(S*P)/D,f=Math.sin(f*P)/D}const R=f*w;if(d=d*S+v*R,p=p*S+y*R,_=_*S+E*R,g=g*S+M*R,S===1-f){const D=1/Math.sqrt(d*d+p*p+_*_+g*g);d*=D,p*=D,_*=D,g*=D}}t[n]=d,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,l,c){const f=a[s],d=a[s+1],p=a[s+2],_=a[s+3],g=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return t[n]=f*E+_*g+d*y-p*v,t[n+1]=d*E+_*v+p*g-f*y,t[n+2]=p*E+_*y+f*v-d*g,t[n+3]=_*E-f*g-d*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,d=Math.sin,p=f(a/2),_=f(s/2),g=f(l/2),v=d(a/2),y=d(s/2),E=d(l/2);switch(c){case"XYZ":this._x=v*_*g+p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g-v*y*E;break;case"YXZ":this._x=v*_*g+p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g+v*y*E;break;case"ZXY":this._x=v*_*g-p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g-v*y*E;break;case"ZYX":this._x=v*_*g-p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g+v*y*E;break;case"YZX":this._x=v*_*g+p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g-v*y*E;break;case"XZY":this._x=v*_*g-p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],d=n[9],p=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-d)*y,this._y=(l-p)*y,this._z=(c-s)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(l-p)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(c-s)/y,this._x=(l+p)/y,this._y=(d+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,c=t._w,f=n._x,d=n._y,p=n._z,_=n._w;return this._x=a*_+c*f+s*p-l*d,this._y=s*_+c*d+l*f-a*p,this._z=l*_+c*p+a*d-s*f,this._w=c*_-a*f-s*d-l*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,l=this._z,c=this._w;let f=c*t._w+a*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=s,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*a+n*this._x,this._y=y*s+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),_=Math.atan2(p,f),g=Math.sin((1-n)*_)/p,v=Math.sin(n*_)/p;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,n=0,a=0){rt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Sv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Sv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,c=t.y,f=t.z,d=t.w,p=2*(c*s-f*a),_=2*(f*n-l*s),g=2*(l*a-c*n);return this.x=n+d*p+c*g-f*_,this.y=a+d*_+f*p-l*g,this.z=s+d*g+l*_-c*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,c=n.x,f=n.y,d=n.z;return this.x=s*d-l*f,this.y=l*c-a*d,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ad.copy(this).projectOnVector(t),this.sub(Ad)}reflect(t){return this.sub(Ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new rt,Sv=new ru;class su{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Vi):Vi.fromBufferAttribute(l,c),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),vc.copy(a.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zl),xc.subVectors(this.max,zl),no.subVectors(t.a,zl),io.subVectors(t.b,zl),ao.subVectors(t.c,zl),cr.subVectors(io,no),fr.subVectors(ao,io),Kr.subVectors(no,ao);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Kr.z,Kr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Kr.z,0,-Kr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Kr.y,Kr.x,0];return!Rd(n,no,io,ao,xc)||(n=[1,0,0,0,1,0,0,0,1],!Rd(n,no,io,ao,xc))?!1:(yc.crossVectors(cr,fr),n=[yc.x,yc.y,yc.z],Rd(n,no,io,ao,xc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ca=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Vi=new rt,vc=new su,no=new rt,io=new rt,ao=new rt,cr=new rt,fr=new rt,Kr=new rt,zl=new rt,xc=new rt,yc=new rt,Qr=new rt;function Rd(o,t,n,a,s){for(let l=0,c=o.length-3;l<=c;l+=3){Qr.fromArray(o,l);const f=s.x*Math.abs(Qr.x)+s.y*Math.abs(Qr.y)+s.z*Math.abs(Qr.z),d=t.dot(Qr),p=n.dot(Qr),_=a.dot(Qr);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>f)return!1}return!0}const RT=new su,Bl=new rt,wd=new rt;class ou{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):RT.setFromPoints(t).getCenter(a);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bl.subVectors(t,this.center);const n=Bl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Bl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bl.copy(t.center).add(wd)),this.expandByPoint(Bl.copy(t.center).sub(wd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Da=new rt,Cd=new rt,Sc=new rt,hr=new rt,Dd=new rt,Mc=new rt,Ud=new rt;class Tm{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){Cd.copy(t).add(n).multiplyScalar(.5),Sc.copy(n).sub(t).normalize(),hr.copy(this.origin).sub(Cd);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Sc),f=hr.dot(this.direction),d=-hr.dot(Sc),p=hr.lengthSq(),_=Math.abs(1-c*c);let g,v,y,E;if(_>0)if(g=c*d-f,v=c*f-d,E=l*_,g>=0)if(v>=-E)if(v<=E){const M=1/_;g*=M,v*=M,y=g*(g+c*v+2*f)+v*(c*g+v+2*d)+p}else v=l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;else v=-l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+p):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+p):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+p);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Cd).addScaledVector(Sc,v),y}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const a=Da.dot(this.direction),s=Da.dot(Da)-a*a,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,d=a+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,c,f,d;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,s=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,s=(t.min.x-v.x)*p),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),a>d||f>s)||((f>a||a!==a)&&(a=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,a,s,l){Dd.subVectors(n,t),Mc.subVectors(a,t),Ud.crossVectors(Dd,Mc);let c=this.direction.dot(Ud),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;hr.subVectors(this.origin,t);const d=f*this.direction.dot(Mc.crossVectors(hr,Mc));if(d<0)return null;const p=f*this.direction.dot(Dd.cross(hr));if(p<0||d+p>c)return null;const _=-f*hr.dot(Ud);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,n,a,s,l,c,f,d,p,_,g,v,y,E,M,S){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,d,p,_,g,v,y,E,M,S)}set(t,n,a,s,l,c,f,d,p,_,g,v,y,E,M,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/ro.setFromMatrixColumn(t,0).length(),l=1/ro.setFromMatrixColumn(t,1).length(),c=1/ro.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),d=Math.cos(s),p=Math.sin(s),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,y=c*g,E=f*_,M=f*g;n[0]=d*_,n[4]=-d*g,n[8]=p,n[1]=y+E*p,n[5]=v-M*p,n[9]=-f*d,n[2]=M-v*p,n[6]=E+y*p,n[10]=c*d}else if(t.order==="YXZ"){const v=d*_,y=d*g,E=p*_,M=p*g;n[0]=v+M*f,n[4]=E*f-y,n[8]=c*p,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=y*f-E,n[6]=M+v*f,n[10]=c*d}else if(t.order==="ZXY"){const v=d*_,y=d*g,E=p*_,M=p*g;n[0]=v-M*f,n[4]=-c*g,n[8]=E+y*f,n[1]=y+E*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*p,n[6]=f,n[10]=c*d}else if(t.order==="ZYX"){const v=c*_,y=c*g,E=f*_,M=f*g;n[0]=d*_,n[4]=E*p-y,n[8]=v*p+M,n[1]=d*g,n[5]=M*p+v,n[9]=y*p-E,n[2]=-p,n[6]=f*d,n[10]=c*d}else if(t.order==="YZX"){const v=c*d,y=c*p,E=f*d,M=f*p;n[0]=d*_,n[4]=M-v*g,n[8]=E*g+y,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-p*_,n[6]=y*g+E,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*d,y=c*p,E=f*d,M=f*p;n[0]=d*_,n[4]=-g,n[8]=p*_,n[1]=v*g+M,n[5]=c*_,n[9]=y*g-E,n[2]=E*g-y,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wT,t,CT)}lookAt(t,n,a){const s=this.elements;return fi.subVectors(t,n),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),dr.crossVectors(a,fi),dr.lengthSq()===0&&(Math.abs(a.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),dr.crossVectors(a,fi)),dr.normalize(),Ec.crossVectors(fi,dr),s[0]=dr.x,s[4]=Ec.x,s[8]=fi.x,s[1]=dr.y,s[5]=Ec.y,s[9]=fi.y,s[2]=dr.z,s[6]=Ec.z,s[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],d=a[8],p=a[12],_=a[1],g=a[5],v=a[9],y=a[13],E=a[2],M=a[6],S=a[10],x=a[14],w=a[3],U=a[7],R=a[11],D=a[15],P=s[0],O=s[4],B=s[8],b=s[12],A=s[1],H=s[5],it=s[9],Q=s[13],lt=s[2],ot=s[6],G=s[10],J=s[14],X=s[3],gt=s[7],z=s[11],et=s[15];return l[0]=c*P+f*A+d*lt+p*X,l[4]=c*O+f*H+d*ot+p*gt,l[8]=c*B+f*it+d*G+p*z,l[12]=c*b+f*Q+d*J+p*et,l[1]=_*P+g*A+v*lt+y*X,l[5]=_*O+g*H+v*ot+y*gt,l[9]=_*B+g*it+v*G+y*z,l[13]=_*b+g*Q+v*J+y*et,l[2]=E*P+M*A+S*lt+x*X,l[6]=E*O+M*H+S*ot+x*gt,l[10]=E*B+M*it+S*G+x*z,l[14]=E*b+M*Q+S*J+x*et,l[3]=w*P+U*A+R*lt+D*X,l[7]=w*O+U*H+R*ot+D*gt,l[11]=w*B+U*it+R*G+D*z,l[15]=w*b+U*Q+R*J+D*et,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],c=t[1],f=t[5],d=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],E=t[3],M=t[7],S=t[11],x=t[15];return E*(+l*d*g-s*p*g-l*f*v+a*p*v+s*f*y-a*d*y)+M*(+n*d*y-n*p*v+l*c*v-s*c*y+s*p*_-l*d*_)+S*(+n*p*g-n*f*y-l*c*g+a*c*y+l*f*_-a*p*_)+x*(-s*f*_-n*d*g+n*f*v+s*c*g-a*c*v+a*d*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],E=t[12],M=t[13],S=t[14],x=t[15],w=g*S*p-M*v*p+M*d*y-f*S*y-g*d*x+f*v*x,U=E*v*p-_*S*p-E*d*y+c*S*y+_*d*x-c*v*x,R=_*M*p-E*g*p+E*f*y-c*M*y-_*f*x+c*g*x,D=E*g*d-_*M*d-E*f*v+c*M*v+_*f*S-c*g*S,P=n*w+a*U+s*R+l*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return t[0]=w*O,t[1]=(M*v*l-g*S*l-M*s*y+a*S*y+g*s*x-a*v*x)*O,t[2]=(f*S*l-M*d*l+M*s*p-a*S*p-f*s*x+a*d*x)*O,t[3]=(g*d*l-f*v*l-g*s*p+a*v*p+f*s*y-a*d*y)*O,t[4]=U*O,t[5]=(_*S*l-E*v*l+E*s*y-n*S*y-_*s*x+n*v*x)*O,t[6]=(E*d*l-c*S*l-E*s*p+n*S*p+c*s*x-n*d*x)*O,t[7]=(c*v*l-_*d*l+_*s*p-n*v*p-c*s*y+n*d*y)*O,t[8]=R*O,t[9]=(E*g*l-_*M*l-E*a*y+n*M*y+_*a*x-n*g*x)*O,t[10]=(c*M*l-E*f*l+E*a*p-n*M*p-c*a*x+n*f*x)*O,t[11]=(_*f*l-c*g*l-_*a*p+n*g*p+c*a*y-n*f*y)*O,t[12]=D*O,t[13]=(_*M*s-E*g*s+E*a*v-n*M*v-_*a*S+n*g*S)*O,t[14]=(E*f*s-c*M*s-E*a*d+n*M*d+c*a*S-n*f*S)*O,t[15]=(c*g*s-_*f*s+_*a*d-n*g*d-c*a*v+n*f*v)*O,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=t.x,f=t.y,d=t.z,p=l*c,_=l*f;return this.set(p*c+a,p*f-s*d,p*d+s*f,0,p*f+s*d,_*f+a,_*d-s*c,0,p*d-s*f,_*d+s*c,l*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,c){return this.set(1,a,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,d=n._w,p=l+l,_=c+c,g=f+f,v=l*p,y=l*_,E=l*g,M=c*_,S=c*g,x=f*g,w=d*p,U=d*_,R=d*g,D=a.x,P=a.y,O=a.z;return s[0]=(1-(M+x))*D,s[1]=(y+R)*D,s[2]=(E-U)*D,s[3]=0,s[4]=(y-R)*P,s[5]=(1-(v+x))*P,s[6]=(S+w)*P,s[7]=0,s[8]=(E+U)*O,s[9]=(S-w)*O,s[10]=(1-(v+M))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let l=ro.set(s[0],s[1],s[2]).length();const c=ro.set(s[4],s[5],s[6]).length(),f=ro.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],ki.copy(this);const p=1/l,_=1/c,g=1/f;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=_,ki.elements[5]*=_,ki.elements[6]*=_,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,n.setFromRotationMatrix(ki),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,s,l,c,f=Fa){const d=this.elements,p=2*l/(n-t),_=2*l/(a-s),g=(n+t)/(n-t),v=(a+s)/(a-s);let y,E;if(f===Fa)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===tf)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,l,c,f=Fa){const d=this.elements,p=1/(n-t),_=1/(a-s),g=1/(c-l),v=(n+t)*p,y=(a+s)*_;let E,M;if(f===Fa)E=(c+l)*g,M=-2*g;else if(f===tf)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ro=new rt,ki=new Xe,wT=new rt(0,0,0),CT=new rt(1,1,1),dr=new rt,Ec=new rt,fi=new rt,Mv=new Xe,Ev=new ru;class ca{constructor(t=0,n=0,a=0,s=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],d=s[1],p=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Mv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Ev.setFromEuler(this),this.setFromQuaternion(Ev,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class ey{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DT=0;const Tv=new rt,so=new ru,Ua=new Xe,Tc=new rt,Fl=new rt,UT=new rt,LT=new ru,bv=new rt(1,0,0),Av=new rt(0,1,0),Rv=new rt(0,0,1),wv={type:"added"},NT={type:"removed"},oo={type:"childadded",child:null},Ld={type:"childremoved",child:null};class En extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=au(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new rt,n=new ca,a=new ru,s=new rt(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new le}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ey,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return so.setFromAxisAngle(t,n),this.quaternion.multiply(so),this}rotateOnWorldAxis(t,n){return so.setFromAxisAngle(t,n),this.quaternion.premultiply(so),this}rotateX(t){return this.rotateOnAxis(bv,t)}rotateY(t){return this.rotateOnAxis(Av,t)}rotateZ(t){return this.rotateOnAxis(Rv,t)}translateOnAxis(t,n){return Tv.copy(t).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(bv,t)}translateY(t){return this.translateOnAxis(Av,t)}translateZ(t){return this.translateOnAxis(Rv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Tc.copy(t):Tc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(Fl,Tc,this.up):Ua.lookAt(Tc,Fl,this.up),this.quaternion.setFromRotationMatrix(Ua),s&&(Ua.extractRotation(s.matrixWorld),so.setFromRotationMatrix(Ua),this.quaternion.premultiply(so.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wv),oo.child=t,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(NT),Ld.child=t,this.dispatchEvent(Ld),Ld.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wv),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fl,t,UT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fl,LT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const g=d[p];l(t.shapes,g)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(t.animations,d))}}if(n){const f=c(t.geometries),d=c(t.materials),p=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=s,a;function c(f){const d=[];for(const p in f){const _=f[p];delete _.metadata,d.push(_)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}En.DEFAULT_UP=new rt(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new rt,La=new rt,Nd=new rt,Na=new rt,lo=new rt,uo=new rt,Cv=new rt,Od=new rt,Pd=new rt,zd=new rt,Bd=new $e,Fd=new $e,Id=new $e;class Wi{constructor(t=new rt,n=new rt,a=new rt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Xi.subVectors(t,n),s.cross(Xi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){Xi.subVectors(s,n),La.subVectors(a,n),Nd.subVectors(t,n);const c=Xi.dot(Xi),f=Xi.dot(La),d=Xi.dot(Nd),p=La.dot(La),_=La.dot(Nd),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(p*d-f*_)*v,E=(c*_-f*d)*v;return l.set(1-y-E,E,y)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,n,a,s,l,c,f,d){return this.getBarycoord(t,n,a,s,Na)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Na.x),d.addScaledVector(c,Na.y),d.addScaledVector(f,Na.z),d)}static getInterpolatedAttribute(t,n,a,s,l,c){return Bd.setScalar(0),Fd.setScalar(0),Id.setScalar(0),Bd.fromBufferAttribute(t,n),Fd.fromBufferAttribute(t,a),Id.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Bd,l.x),c.addScaledVector(Fd,l.y),c.addScaledVector(Id,l.z),c}static isFrontFacing(t,n,a,s){return Xi.subVectors(a,n),La.subVectors(t,n),Xi.cross(La).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Xi.cross(La).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Wi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return Wi.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return Wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let c,f;lo.subVectors(s,a),uo.subVectors(l,a),Od.subVectors(t,a);const d=lo.dot(Od),p=uo.dot(Od);if(d<=0&&p<=0)return n.copy(a);Pd.subVectors(t,s);const _=lo.dot(Pd),g=uo.dot(Pd);if(_>=0&&g<=_)return n.copy(s);const v=d*g-_*p;if(v<=0&&d>=0&&_<=0)return c=d/(d-_),n.copy(a).addScaledVector(lo,c);zd.subVectors(t,l);const y=lo.dot(zd),E=uo.dot(zd);if(E>=0&&y<=E)return n.copy(l);const M=y*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(a).addScaledVector(uo,f);const S=_*E-y*g;if(S<=0&&g-_>=0&&y-E>=0)return Cv.subVectors(l,s),f=(g-_)/(g-_+(y-E)),n.copy(s).addScaledVector(Cv,f);const x=1/(S+M+v);return c=M*x,f=v*x,n.copy(a).addScaledVector(lo,c).addScaledVector(uo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ny={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Hd(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Me{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,n),this}setRGB(t,n,a,s=we.workingColorSpace){return this.r=t,this.g=n,this.b=a,we.toWorkingColorSpace(this,s),this}setHSL(t,n,a,s=we.workingColorSpace){if(t=_T(t,1),n=xe(n,0,1),a=xe(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Hd(c,l,t+1/3),this.g=Hd(c,l,t),this.b=Hd(c,l,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,n=Oi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Oi){const a=ny[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return we.fromWorkingColorSpace(On.copy(this),t),Math.round(xe(On.r*255,0,255))*65536+Math.round(xe(On.g*255,0,255))*256+Math.round(xe(On.b*255,0,255))}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.fromWorkingColorSpace(On.copy(this),n);const a=On.r,s=On.g,l=On.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let d,p;const _=(f+c)/2;if(f===c)d=0,p=0;else{const g=c-f;switch(p=_<=.5?g/(c+f):g/(2-c-f),c){case a:d=(s-l)/g+(s<l?6:0);break;case s:d=(l-a)/g+2;break;case l:d=(a-s)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=_,t}getRGB(t,n=we.workingColorSpace){return we.fromWorkingColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Oi){we.fromWorkingColorSpace(On.copy(this),t);const n=On.r,a=On.g,s=On.b;return t!==Oi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(pr),this.setHSL(pr.h+t,pr.s+n,pr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(pr),t.getHSL(bc);const a=Ed(pr.h,bc.h,n),s=Ed(pr.s,bc.s,n),l=Ed(pr.l,bc.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Me;Me.NAMES=ny;let OT=0;class ys extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=au(),this.name="",this.type="Material",this.blending=xo,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hp,this.blendDst=dp,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(a.blending=this.blending),this.side!==br&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==hp&&(a.blendSrc=this.blendSrc),this.blendDst!==dp&&(a.blendDst=this.blendDst),this.blendEquation!==ls&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(a.stencilFail=this.stencilFail),this.stencilZFail!==to&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class iy extends ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=Ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new rt,Ac=new Ce;let PT=0;class vi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=_v,this.updateRanges=[],this.gpuType=Ba,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ac.fromBufferAttribute(this,n),Ac.applyMatrix3(t),this.setXY(n,Ac.x,Ac.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyMatrix3(t),this.setXYZ(n,on.x,on.y,on.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(t),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(t),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.transformDirection(t),this.setXYZ(n,on.x,on.y,on.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Pl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Pl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Pl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Pl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Pl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),s=Jn(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_v&&(t.usage=this.usage),t}}class ay extends vi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class ry extends vi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class oa extends vi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let zT=0;const Li=new Xe,Gd=new En,co=new rt,hi=new su,Il=new su,Mn=new rt;class zi extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=au(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($x(t)?ry:ay)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new le().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,n,a){return Li.makeTranslation(t,n,a),this.applyMatrix4(Li),this}scale(t,n,a){return Li.makeScale(t,n,a),this.applyMatrix4(Li),this}lookAt(t){return Gd.lookAt(t),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new oa(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new su);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];hi.setFromBufferAttribute(l),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const a=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Il.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(hi.min,Il.min),hi.expandByPoint(Mn),Mn.addVectors(hi.max,Il.max),hi.expandByPoint(Mn)):(hi.expandByPoint(Il.min),hi.expandByPoint(Il.max))}hi.getCenter(a);let s=0;for(let l=0,c=t.count;l<c;l++)Mn.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(Mn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],d=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)Mn.fromBufferAttribute(f,p),d&&(co.fromBufferAttribute(t,p),Mn.add(co)),s=Math.max(s,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let B=0;B<a.count;B++)f[B]=new rt,d[B]=new rt;const p=new rt,_=new rt,g=new rt,v=new Ce,y=new Ce,E=new Ce,M=new rt,S=new rt;function x(B,b,A){p.fromBufferAttribute(a,B),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,A),v.fromBufferAttribute(l,B),y.fromBufferAttribute(l,b),E.fromBufferAttribute(l,A),_.sub(p),g.sub(p),y.sub(v),E.sub(v);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(M.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(H),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(H),f[B].add(M),f[b].add(M),f[A].add(M),d[B].add(S),d[b].add(S),d[A].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let B=0,b=w.length;B<b;++B){const A=w[B],H=A.start,it=A.count;for(let Q=H,lt=H+it;Q<lt;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const U=new rt,R=new rt,D=new rt,P=new rt;function O(B){D.fromBufferAttribute(s,B),P.copy(D);const b=f[B];U.copy(b),U.sub(D.multiplyScalar(D.dot(b))).normalize(),R.crossVectors(P,b);const H=R.dot(d[B])<0?-1:1;c.setXYZW(B,U.x,U.y,U.z,H)}for(let B=0,b=w.length;B<b;++B){const A=w[B],H=A.start,it=A.count;for(let Q=H,lt=H+it;Q<lt;Q+=3)O(t.getX(Q+0)),O(t.getX(Q+1)),O(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const s=new rt,l=new rt,c=new rt,f=new rt,d=new rt,p=new rt,_=new rt,g=new rt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),f.fromBufferAttribute(a,E),d.fromBufferAttribute(a,M),p.fromBufferAttribute(a,S),f.add(_),d.add(_),p.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Mn.fromBufferAttribute(t,n),Mn.normalize(),t.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(f,d){const p=f.array,_=f.itemSize,g=f.normalized,v=new p.constructor(d.length*_);let y=0,E=0;for(let M=0,S=d.length;M<S;M++){f.isInterleavedBufferAttribute?y=d[M]*f.data.stride+f.offset:y=d[M]*_;for(let x=0;x<_;x++)v[E++]=p[y++]}return new vi(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,a=this.index.array,s=this.attributes;for(const f in s){const d=s[f],p=t(d,a);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,a);d.push(y)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const s={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(s[d]=_,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const s=t.attributes;for(const p in s){const _=s[p];this.setAttribute(p,_.clone(n))}const l=t.morphAttributes;for(const p in l){const _=[],g=l[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let p=0,_=c.length;p<_;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dv=new Xe,Jr=new Tm,Rc=new ou,Uv=new rt,wc=new rt,Cc=new rt,Dc=new rt,Vd=new rt,Uc=new rt,Lv=new rt,Lc=new rt;class ra extends En{constructor(t=new zi,n=new iy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){Uc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const _=f[d],g=l[d];_!==0&&(Vd.fromBufferAttribute(g,t),c?Uc.addScaledVector(Vd,_):Uc.addScaledVector(Vd.sub(n),_))}n.add(Uc)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Rc.copy(a.boundingSphere),Rc.applyMatrix4(l),Jr.copy(t.ray).recast(t.near),!(Rc.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Rc,Uv)===null||Jr.origin.distanceToSquared(Uv)>(t.far-t.near)**2))&&(Dv.copy(l).invert(),Jr.copy(t.ray).applyMatrix4(Dv),!(a.boundingBox!==null&&Jr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Jr)))}_computeIntersections(t,n,a){let s;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],w=Math.max(S.start,y.start),U=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=w,D=U;R<D;R+=3){const P=f.getX(R),O=f.getX(R+1),B=f.getX(R+2);s=Nc(this,x,t,a,p,_,g,P,O,B),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const w=f.getX(S),U=f.getX(S+1),R=f.getX(S+2);s=Nc(this,c,t,a,p,_,g,w,U,R),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],w=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=w,D=U;R<D;R+=3){const P=R,O=R+1,B=R+2;s=Nc(this,x,t,a,p,_,g,P,O,B),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const w=S,U=S+1,R=S+2;s=Nc(this,c,t,a,p,_,g,w,U,R),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function BT(o,t,n,a,s,l,c,f){let d;if(t.side===$n?d=a.intersectTriangle(c,l,s,!0,f):d=a.intersectTriangle(s,l,c,t.side===br,f),d===null)return null;Lc.copy(f),Lc.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(Lc);return p<n.near||p>n.far?null:{distance:p,point:Lc.clone(),object:o}}function Nc(o,t,n,a,s,l,c,f,d,p){o.getVertexPosition(f,wc),o.getVertexPosition(d,Cc),o.getVertexPosition(p,Dc);const _=BT(o,t,n,a,wc,Cc,Dc,Lv);if(_){const g=new rt;Wi.getBarycoord(Lv,wc,Cc,Dc,g),s&&(_.uv=Wi.getInterpolatedAttribute(s,f,d,p,g,new Ce)),l&&(_.uv1=Wi.getInterpolatedAttribute(l,f,d,p,g,new Ce)),c&&(_.normal=Wi.getInterpolatedAttribute(c,f,d,p,g,new rt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new rt,materialIndex:0};Wi.getNormal(wc,Cc,Dc,v.normal),_.face=v,_.barycoord=g}return _}class lu extends zi{constructor(t=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],_=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,t,c,l,0),E("z","y","x",1,-1,a,n,-t,c,l,1),E("x","z","y",1,1,t,a,n,s,c,2),E("x","z","y",1,-1,t,a,-n,s,c,3),E("x","y","z",1,-1,t,n,a,s,l,4),E("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(d),this.setAttribute("position",new oa(p,3)),this.setAttribute("normal",new oa(_,3)),this.setAttribute("uv",new oa(g,2));function E(M,S,x,w,U,R,D,P,O,B,b){const A=R/O,H=D/B,it=R/2,Q=D/2,lt=P/2,ot=O+1,G=B+1;let J=0,X=0;const gt=new rt;for(let z=0;z<G;z++){const et=z*H-Q;for(let St=0;St<ot;St++){const bt=St*A-it;gt[M]=bt*w,gt[S]=et*U,gt[x]=lt,p.push(gt.x,gt.y,gt.z),gt[M]=0,gt[S]=0,gt[x]=P>0?1:-1,_.push(gt.x,gt.y,gt.z),g.push(St/O),g.push(1-z/B),J+=1}}for(let z=0;z<B;z++)for(let et=0;et<O;et++){const St=v+et+ot*z,bt=v+et+ot*(z+1),W=v+(et+1)+ot*(z+1),ft=v+(et+1)+ot*z;d.push(St,bt,ft),d.push(bt,W,ft),X+=6}f.addGroup(y,X,b),y+=X,v+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Uo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Wn(o){const t={};for(let n=0;n<o.length;n++){const a=Uo(o[n]);for(const s in a)t[s]=a[s]}return t}function FT(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function sy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const IT={clone:Uo,merge:Wn};var HT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HT,this.fragmentShader=GT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Uo(t.uniforms),this.uniformsGroups=FT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class oy extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Fa}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new rt,Nv=new Ce,Ov=new Ce;class mi extends oy{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Qp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Md*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qp*2*Math.atan(Math.tan(Md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-t/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(mr.x,mr.y).multiplyScalar(-t/mr.z)}getViewSize(t,n){return this.getViewBounds(t,Nv,Ov),n.subVectors(Ov,Nv)}setViewOffset(t,n,a,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Md*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*s/d,n-=c.offsetY*a/p,s*=c.width/d,a*=c.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fo=-90,ho=1;class VT extends En{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mi(fo,ho,t,n);s.layers=this.layers,this.add(s);const l=new mi(fo,ho,t,n);l.layers=this.layers,this.add(l);const c=new mi(fo,ho,t,n);c.layers=this.layers,this.add(c);const f=new mi(fo,ho,t,n);f.layers=this.layers,this.add(f);const d=new mi(fo,ho,t,n);d.layers=this.layers,this.add(d);const p=new mi(fo,ho,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,d]=n;for(const p of n)this.remove(p);if(t===Fa)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===tf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,l),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,d),t.setRenderTarget(a,4,s),t.render(n,p),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class ly extends Yn{constructor(t,n,a,s,l,c,f,d,p,_){t=t!==void 0?t:[],n=n!==void 0?n:Ao,super(t,n,a,s,l,c,f,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kT extends vs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new ly(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:aa}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new lu(5,5,5),l=new Ar({name:"CubemapFromEquirect",uniforms:Uo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:$n,blending:Sr});l.uniforms.tEquirect.value=n;const c=new ra(s,l),f=n.minFilter;return n.minFilter===fs&&(n.minFilter=aa),new VT(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n,a,s){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(l)}}class Oc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XT={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){c=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,a),x=this._getHandJoint(p,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(XT)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Oc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class uy extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xd=new rt,WT=new rt,qT=new le;class rs{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=Xd.subVectors(a,n).cross(WT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Xd),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||qT.getNormalMatrix(t),s=this.coplanarPoint(Xd).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new ou,Pc=new rt;class bm{constructor(t=new rs,n=new rs,a=new rs,s=new rs,l=new rs,c=new rs){this.planes=[t,n,a,s,l,c]}set(t,n,a,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Fa){const a=this.planes,s=t.elements,l=s[0],c=s[1],f=s[2],d=s[3],p=s[4],_=s[5],g=s[6],v=s[7],y=s[8],E=s[9],M=s[10],S=s[11],x=s[12],w=s[13],U=s[14],R=s[15];if(a[0].setComponents(d-l,v-p,S-y,R-x).normalize(),a[1].setComponents(d+l,v+p,S+y,R+x).normalize(),a[2].setComponents(d+c,v+_,S+E,R+w).normalize(),a[3].setComponents(d-c,v-_,S-E,R-w).normalize(),a[4].setComponents(d-f,v-g,S-M,R-U).normalize(),n===Fa)a[5].setComponents(d+f,v+g,S+M,R+U).normalize();else if(n===tf)a[5].setComponents(f,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(t){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(t.matrixWorld),this.intersectsSphere($r)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(Pc.x=s.normal.x>0?t.max.x:t.min.x,Pc.y=s.normal.y>0?t.max.y:t.min.y,Pc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cy extends ys{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nf=new rt,af=new rt,Pv=new Xe,Hl=new Tm,zc=new ou,Wd=new rt,zv=new rt;class YT extends En{constructor(t=new zi,n=new cy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let s=1,l=n.count;s<l;s++)nf.fromBufferAttribute(n,s-1),af.fromBufferAttribute(n,s),a[s]=a[s-1],a[s]+=nf.distanceTo(af);t.setAttribute("lineDistance",new oa(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),zc.copy(a.boundingSphere),zc.applyMatrix4(s),zc.radius+=l,t.ray.intersectsSphere(zc)===!1)return;Pv.copy(s).invert(),Hl.copy(t.ray).applyMatrix4(Pv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const y=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let M=y,S=E-1;M<S;M+=p){const x=_.getX(M),w=_.getX(M+1),U=Bc(this,t,Hl,d,x,w,M);U&&n.push(U)}if(this.isLineLoop){const M=_.getX(E-1),S=_.getX(y),x=Bc(this,t,Hl,d,M,S,E-1);x&&n.push(x)}}else{const y=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let M=y,S=E-1;M<S;M+=p){const x=Bc(this,t,Hl,d,M,M+1,M);x&&n.push(x)}if(this.isLineLoop){const M=Bc(this,t,Hl,d,E-1,y,E-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Bc(o,t,n,a,s,l,c){const f=o.geometry.attributes.position;if(nf.fromBufferAttribute(f,s),af.fromBufferAttribute(f,l),n.distanceSqToSegment(nf,af,Wd,zv)>a)return;Wd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Wd);if(!(p<t.near||p>t.far))return{distance:p,point:zv.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const Bv=new rt,Fv=new rt;class jT extends YT{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let s=0,l=n.count;s<l;s+=2)Bv.fromBufferAttribute(n,s),Fv.fromBufferAttribute(n,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+Bv.distanceTo(Fv);t.setAttribute("lineDistance",new oa(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Am extends ys{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Iv=new Xe,Jp=new Tm,Fc=new ou,Ic=new rt;class fy extends En{constructor(t=new zi,n=new Am){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Fc.copy(a.boundingSphere),Fc.applyMatrix4(s),Fc.radius+=l,t.ray.intersectsSphere(Fc)===!1)return;Iv.copy(s).invert(),Jp.copy(t.ray).applyMatrix4(Iv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=a.index,g=a.attributes.position;if(p!==null){const v=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let E=v,M=y;E<M;E++){const S=p.getX(E);Ic.fromBufferAttribute(g,S),Hv(Ic,S,d,s,t,n,this)}}else{const v=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let E=v,M=y;E<M;E++)Ic.fromBufferAttribute(g,E),Hv(Ic,E,d,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Hv(o,t,n,a,s,l,c){const f=Jp.distanceSqToPoint(o);if(f<n){const d=new rt;Jp.closestPointToPoint(o,d),d.applyMatrix4(a);const p=s.ray.origin.distanceTo(d);if(p<s.near||p>s.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class ZT extends Yn{constructor(t,n,a,s,l,c,f,d,p){super(t,n,a,s,l,c,f,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hy extends Yn{constructor(t,n,a,s,l,c,f,d,p,_=yo){if(_!==yo&&_!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&_===yo&&(a=gs),a===void 0&&_===Co&&(a=wo),super(null,s,l,c,f,d,_,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=f!==void 0?f:Yi,this.minFilter=d!==void 0?d:Yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Em(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uu extends zi{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(a),d=Math.floor(s),p=f+1,_=d+1,g=t/f,v=n/d,y=[],E=[],M=[],S=[];for(let x=0;x<_;x++){const w=x*v-c;for(let U=0;U<p;U++){const R=U*g-l;E.push(R,-w,0),M.push(0,0,1),S.push(U/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let w=0;w<f;w++){const U=w+p*x,R=w+p*(x+1),D=w+1+p*(x+1),P=w+1+p*x;y.push(U,R,P),y.push(R,D,P)}this.setIndex(y),this.setAttribute("position",new oa(E,3)),this.setAttribute("normal",new oa(M,3)),this.setAttribute("uv",new oa(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.width,t.height,t.widthSegments,t.heightSegments)}}class KT extends ys{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qx,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class QT extends ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JT extends ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dy extends En{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const qd=new Xe,Gv=new rt,Vv=new rt;class $T{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bm,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Gv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gv),Vv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Vv),n.updateMatrixWorld(),qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(qd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class py extends oy{constructor(t=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=s+n,d=s-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,d=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class t1 extends $T{constructor(){super(new py(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kv extends dy{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new t1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class my extends dy{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class e1 extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Xv(o,t,n,a){const s=n1(a);switch(n){case Xx:return o*t;case qx:return o*t;case Yx:return o*t*2;case jx:return o*t/s.components*s.byteLength;case ym:return o*t/s.components*s.byteLength;case Zx:return o*t*2/s.components*s.byteLength;case Sm:return o*t*2/s.components*s.byteLength;case Wx:return o*t*3/s.components*s.byteLength;case qi:return o*t*4/s.components*s.byteLength;case Mm:return o*t*4/s.components*s.byteLength;case Xc:case Wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case qc:case Yc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ap:case wp:return Math.max(o,16)*Math.max(t,8)/4;case bp:case Rp:return Math.max(o,8)*Math.max(t,8)/2;case Cp:case Dp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Up:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Lp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Np:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Op:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Pp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case zp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Fp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ip:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case kp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Xp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Wp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case jc:case qp:case Yp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Kx:case jp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Zp:case Kp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function n1(o){switch(o){case Ha:case Gx:return{byteLength:1,components:1};case Zl:case Vx:case iu:return{byteLength:2,components:1};case vm:case xm:return{byteLength:2,components:4};case gs:case gm:case Ba:return{byteLength:4,components:1};case kx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_m}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_m);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _y(){let o=null,t=!1,n=null,a=null;function s(l,c){n(l,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function i1(o){const t=new WeakMap;function n(f,d){const p=f.array,_=f.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,d,p){const _=d.array,g=d.updateRanges;if(o.bindBuffer(p,f),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],M=g[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const M=g[y];o.bufferSubData(p,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:s,remove:l,update:c}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,R1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",P1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ib=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,db=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ab=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:a1,alphahash_pars_fragment:r1,alphamap_fragment:s1,alphamap_pars_fragment:o1,alphatest_fragment:l1,alphatest_pars_fragment:u1,aomap_fragment:c1,aomap_pars_fragment:f1,batching_pars_vertex:h1,batching_vertex:d1,begin_vertex:p1,beginnormal_vertex:m1,bsdfs:_1,iridescence_fragment:g1,bumpmap_pars_fragment:v1,clipping_planes_fragment:x1,clipping_planes_pars_fragment:y1,clipping_planes_pars_vertex:S1,clipping_planes_vertex:M1,color_fragment:E1,color_pars_fragment:T1,color_pars_vertex:b1,color_vertex:A1,common:R1,cube_uv_reflection_fragment:w1,defaultnormal_vertex:C1,displacementmap_pars_vertex:D1,displacementmap_vertex:U1,emissivemap_fragment:L1,emissivemap_pars_fragment:N1,colorspace_fragment:O1,colorspace_pars_fragment:P1,envmap_fragment:z1,envmap_common_pars_fragment:B1,envmap_pars_fragment:F1,envmap_pars_vertex:I1,envmap_physical_pars_fragment:K1,envmap_vertex:H1,fog_vertex:G1,fog_pars_vertex:V1,fog_fragment:k1,fog_pars_fragment:X1,gradientmap_pars_fragment:W1,lightmap_pars_fragment:q1,lights_lambert_fragment:Y1,lights_lambert_pars_fragment:j1,lights_pars_begin:Z1,lights_toon_fragment:Q1,lights_toon_pars_fragment:J1,lights_phong_fragment:$1,lights_phong_pars_fragment:tb,lights_physical_fragment:eb,lights_physical_pars_fragment:nb,lights_fragment_begin:ib,lights_fragment_maps:ab,lights_fragment_end:rb,logdepthbuf_fragment:sb,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:lb,logdepthbuf_vertex:ub,map_fragment:cb,map_pars_fragment:fb,map_particle_fragment:hb,map_particle_pars_fragment:db,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphinstance_vertex:_b,morphcolor_vertex:gb,morphnormal_vertex:vb,morphtarget_pars_vertex:xb,morphtarget_vertex:yb,normal_fragment_begin:Sb,normal_fragment_maps:Mb,normal_pars_fragment:Eb,normal_pars_vertex:Tb,normal_vertex:bb,normalmap_pars_fragment:Ab,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:wb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:Db,opaque_fragment:Ub,packing:Lb,premultiplied_alpha_fragment:Nb,project_vertex:Ob,dithering_fragment:Pb,dithering_pars_fragment:zb,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:Fb,shadowmap_pars_fragment:Ib,shadowmap_pars_vertex:Hb,shadowmap_vertex:Gb,shadowmask_pars_fragment:Vb,skinbase_vertex:kb,skinning_pars_vertex:Xb,skinning_vertex:Wb,skinnormal_vertex:qb,specularmap_fragment:Yb,specularmap_pars_fragment:jb,tonemapping_fragment:Zb,tonemapping_pars_fragment:Kb,transmission_fragment:Qb,transmission_pars_fragment:Jb,uv_pars_fragment:$b,uv_pars_vertex:tA,uv_vertex:eA,worldpos_vertex:nA,background_vert:iA,background_frag:aA,backgroundCube_vert:rA,backgroundCube_frag:sA,cube_vert:oA,cube_frag:lA,depth_vert:uA,depth_frag:cA,distanceRGBA_vert:fA,distanceRGBA_frag:hA,equirect_vert:dA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:_A,meshbasic_vert:gA,meshbasic_frag:vA,meshlambert_vert:xA,meshlambert_frag:yA,meshmatcap_vert:SA,meshmatcap_frag:MA,meshnormal_vert:EA,meshnormal_frag:TA,meshphong_vert:bA,meshphong_frag:AA,meshphysical_vert:RA,meshphysical_frag:wA,meshtoon_vert:CA,meshtoon_frag:DA,points_vert:UA,points_frag:LA,shadow_vert:NA,shadow_frag:OA,sprite_vert:PA,sprite_frag:zA},Ut={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ea={basic:{uniforms:Wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Me(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Wn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Wn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Me(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Wn([Ut.points,Ut.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Wn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Wn([Ut.common,Ut.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Wn([Ut.sprite,Ut.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Wn([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Wn([Ut.lights,Ut.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ea.physical={uniforms:Wn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Hc={r:0,b:0,g:0},ts=new ca,BA=new Xe;function FA(o,t,n,a,s,l,c){const f=new Me(0);let d=l===!0?0:1,p,_,g=null,v=0,y=null;function E(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?n:t).get(R)),R}function M(U){let R=!1;const D=E(U);D===null?x(f,d):D&&D.isColor&&(x(D,1),R=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,R){const D=E(R);D&&(D.isCubeTexture||D.mapping===hf)?(_===void 0&&(_=new ra(new lu(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:Uo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),ts.copy(R.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(ts)),_.material.toneMapped=we.getTransfer(D.colorSpace)!==ze,(g!==D||v!==D.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=D,v=D.version,y=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new ra(new uu(2,2),new Ar({name:"BackgroundMaterial",uniforms:Uo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=we.getTransfer(D.colorSpace)!==ze,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||v!==D.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=D,v=D.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,R){U.getRGB(Hc,sy(o)),a.buffers.color.setClear(Hc.r,Hc.g,Hc.b,R,c)}function w(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,R=1){f.set(U),d=R,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,x(f,d)},render:M,addToRenderList:S,dispose:w}}function IA(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let l=s,c=!1;function f(A,H,it,Q,lt){let ot=!1;const G=g(Q,it,H);l!==G&&(l=G,p(l.object)),ot=y(A,Q,it,lt),ot&&E(A,Q,it,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(ot||c)&&(c=!1,R(A,H,it,Q),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function d(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function g(A,H,it){const Q=it.wireframe===!0;let lt=a[A.id];lt===void 0&&(lt={},a[A.id]=lt);let ot=lt[H.id];ot===void 0&&(ot={},lt[H.id]=ot);let G=ot[Q];return G===void 0&&(G=v(d()),ot[Q]=G),G}function v(A){const H=[],it=[],Q=[];for(let lt=0;lt<n;lt++)H[lt]=0,it[lt]=0,Q[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:it,attributeDivisors:Q,object:A,attributes:{},index:null}}function y(A,H,it,Q){const lt=l.attributes,ot=H.attributes;let G=0;const J=it.getAttributes();for(const X in J)if(J[X].location>=0){const z=lt[X];let et=ot[X];if(et===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(et=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(et=A.instanceColor)),z===void 0||z.attribute!==et||et&&z.data!==et.data)return!0;G++}return l.attributesNum!==G||l.index!==Q}function E(A,H,it,Q){const lt={},ot=H.attributes;let G=0;const J=it.getAttributes();for(const X in J)if(J[X].location>=0){let z=ot[X];z===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));const et={};et.attribute=z,z&&z.data&&(et.data=z.data),lt[X]=et,G++}l.attributes=lt,l.attributesNum=G,l.index=Q}function M(){const A=l.newAttributes;for(let H=0,it=A.length;H<it;H++)A[H]=0}function S(A){x(A,0)}function x(A,H){const it=l.newAttributes,Q=l.enabledAttributes,lt=l.attributeDivisors;it[A]=1,Q[A]===0&&(o.enableVertexAttribArray(A),Q[A]=1),lt[A]!==H&&(o.vertexAttribDivisor(A,H),lt[A]=H)}function w(){const A=l.newAttributes,H=l.enabledAttributes;for(let it=0,Q=H.length;it<Q;it++)H[it]!==A[it]&&(o.disableVertexAttribArray(it),H[it]=0)}function U(A,H,it,Q,lt,ot,G){G===!0?o.vertexAttribIPointer(A,H,it,lt,ot):o.vertexAttribPointer(A,H,it,Q,lt,ot)}function R(A,H,it,Q){M();const lt=Q.attributes,ot=it.getAttributes(),G=H.defaultAttributeValues;for(const J in ot){const X=ot[J];if(X.location>=0){let gt=lt[J];if(gt===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(gt=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(gt=A.instanceColor)),gt!==void 0){const z=gt.normalized,et=gt.itemSize,St=t.get(gt);if(St===void 0)continue;const bt=St.buffer,W=St.type,ft=St.bytesPerElement,yt=W===o.INT||W===o.UNSIGNED_INT||gt.gpuType===gm;if(gt.isInterleavedBufferAttribute){const Tt=gt.data,Rt=Tt.stride,Kt=gt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<X.locationSize;Pt++)x(X.location+Pt,Tt.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<X.locationSize;Pt++)S(X.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let Pt=0;Pt<X.locationSize;Pt++)U(X.location+Pt,et/X.locationSize,W,z,Rt*ft,(Kt+et/X.locationSize*Pt)*ft,yt)}else{if(gt.isInstancedBufferAttribute){for(let Tt=0;Tt<X.locationSize;Tt++)x(X.location+Tt,gt.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Tt=0;Tt<X.locationSize;Tt++)S(X.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let Tt=0;Tt<X.locationSize;Tt++)U(X.location+Tt,et/X.locationSize,W,z,et*ft,et/X.locationSize*Tt*ft,yt)}}else if(G!==void 0){const z=G[J];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(X.location,z);break;case 3:o.vertexAttrib3fv(X.location,z);break;case 4:o.vertexAttrib4fv(X.location,z);break;default:o.vertexAttrib1fv(X.location,z)}}}}w()}function D(){B();for(const A in a){const H=a[A];for(const it in H){const Q=H[it];for(const lt in Q)_(Q[lt].object),delete Q[lt];delete H[it]}delete a[A]}}function P(A){if(a[A.id]===void 0)return;const H=a[A.id];for(const it in H){const Q=H[it];for(const lt in Q)_(Q[lt].object),delete Q[lt];delete H[it]}delete a[A.id]}function O(A){for(const H in a){const it=a[H];if(it[A.id]===void 0)continue;const Q=it[A.id];for(const lt in Q)_(Q[lt].object),delete Q[lt];delete it[A.id]}}function B(){b(),c=!0,l!==s&&(l=s,p(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:B,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:S,disableUnusedAttributes:w}}function HA(o,t,n){let a;function s(p){a=p}function l(p,_){o.drawArrays(a,p,_),n.update(_,a,1)}function c(p,_,g){g!==0&&(o.drawArraysInstanced(a,p,_,g),n.update(_,a,g))}function f(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];n.update(y,a,1)}function d(p,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)c(p[E],_[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,_,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=_[M]*v[M];n.update(E,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function GA(o,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==qi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const B=O===iu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ha&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ba&&!B)}function d(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=d(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=E>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:D,maxSamples:P}}function VA(o){const t=this;let n=null,a=0,s=!1,l=!1;const c=new rs,f=new le,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||s;return s=v,a=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||E===null||E.length===0||l&&!S)l?_(null):p();else{const w=l?0:a,U=w*4;let R=x.clippingState||null;d.value=R,R=_(E,v,U,y);for(let D=0;D!==U;++D)R[D]=n[D];x.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const x=y+M*4,w=v.matrixWorldInverse;f.getNormalMatrix(w),(S===null||S.length<x)&&(S=new Float32Array(x));for(let U=0,R=y;U!==M;++U,R+=4)c.copy(g[U]).applyMatrix4(w,f),c.normal.toArray(S,R),S[R+3]=c.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function kA(o){let t=new WeakMap;function n(c,f){return f===Sp?c.mapping=Ao:f===Mp&&(c.mapping=Ro),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Sp||f===Mp)if(t.has(c)){const d=t.get(c).texture;return n(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new kT(d.height);return p.fromEquirectangularTexture(o,c),t.set(c,p),c.addEventListener("dispose",s),n(p.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const _o=4,Wv=[.125,.215,.35,.446,.526,.582],us=20,Yd=new py,qv=new Me;let jd=null,Zd=0,Kd=0,Qd=!1;const ss=(1+Math.sqrt(5))/2,po=1/ss,Yv=[new rt(-ss,po,0),new rt(ss,po,0),new rt(-po,0,ss),new rt(po,0,ss),new rt(0,ss,-po),new rt(0,ss,po),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],XA=new rt;class jv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=XA}=l;jd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,s,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jd,Zd,Kd),this._renderer.xr.enabled=Qd,t.scissorTest=!1,Gc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ao||t.mapping===Ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:aa,minFilter:aa,generateMipmaps:!1,type:iu,format:qi,colorSpace:Do,depthBuffer:!1},s=Zv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WA(l)),this._blurMaterial=qA(l,t,n)}return s}_compileMaterial(t){const n=new ra(this._lodPlanes[0],t);this._renderer.compile(n,Yd)}_sceneToCubeUV(t,n,a,s,l){const d=new mi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(qv),g.toneMapping=Mr,g.autoClear=!1;const E=new iy({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),M=new ra(new lu,E);let S=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,S=!0):(E.color.copy(qv),S=!0);for(let w=0;w<6;w++){const U=w%3;U===0?(d.up.set(0,p[w],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+_[w],l.y,l.z)):U===1?(d.up.set(0,0,p[w]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+_[w],l.z)):(d.up.set(0,p[w],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+_[w]));const R=this._cubeSize;Gc(s,U*R,w>2?R:0,R,R),g.setRenderTarget(s),S&&g.render(M,d),g.render(t,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=x}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Ao||t.mapping===Ro;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new ra(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;Gc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(c,Yd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Yv[(s-l-1)%Yv.length];this._blur(t,l-1,l,c,f)}n.autoClear=a}_blur(t,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",l),this._halfBlur(c,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new ra(this._lodPlanes[s],p),v=p.uniforms,y=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*us-1),M=l/E,S=isFinite(l)?1+Math.floor(_*M):us;S>us&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${us}`);const x=[];let w=0;for(let O=0;O<us;++O){const B=O/M,b=Math.exp(-B*B/2);x.push(b),O===0?w+=b:O<S&&(w+=2*b)}for(let O=0;O<x.length;O++)x[O]=x[O]/w;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-a;const R=this._sizeLods[s],D=3*R*(s>U-_o?s-U+_o:0),P=4*(this._cubeSize-R);Gc(n,D,P,3*R,2*R),d.setRenderTarget(n),d.render(g,Yd)}}function WA(o){const t=[],n=[],a=[];let s=o;const l=o-_o+1+Wv.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);n.push(f);let d=1/f;c>o-_o?d=Wv[c-o+_o-1]:c===0&&(d=0),a.push(d);const p=1/(f-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,M=3,S=2,x=1,w=new Float32Array(M*E*y),U=new Float32Array(S*E*y),R=new Float32Array(x*E*y);for(let P=0;P<y;P++){const O=P%3*2/3-1,B=P>2?0:-1,b=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];w.set(b,M*E*P),U.set(v,S*E*P);const A=[P,P,P,P,P,P];R.set(A,x*E*P)}const D=new zi;D.setAttribute("position",new vi(w,M)),D.setAttribute("uv",new vi(U,S)),D.setAttribute("faceIndex",new vi(R,x)),t.push(D),s>_o&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Zv(o,t,n){const a=new vs(o,t,n);return a.texture.mapping=hf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Gc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function qA(o,t,n){const a=new Float32Array(us),s=new rt(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Kv(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Qv(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Rm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function YA(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===Sp||d===Mp,_=d===Ao||d===Ro;if(p||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new jv(o)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&s(y)?(n===null&&(n=new jv(o)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function jA(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&as("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function ZA(o,t,n,a){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete s[v.id];const y=l.get(v);y&&(t.remove(y),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function d(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,E=g.attributes.position;let M=0;if(y!==null){const w=y.array;M=y.version;for(let U=0,R=w.length;U<R;U+=3){const D=w[U+0],P=w[U+1],O=w[U+2];v.push(D,P,P,O,O,D)}}else if(E!==void 0){const w=E.array;M=E.version;for(let U=0,R=w.length/3-1;U<R;U+=3){const D=U+0,P=U+1,O=U+2;v.push(D,P,P,O,O,D)}}else return;const S=new($x(v)?ry:ay)(v,1);S.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,S)}function _(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:_}}function KA(o,t,n){let a;function s(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,y){o.drawElements(a,y,l,v*c),n.update(y,a,1)}function p(v,y,E){E!==0&&(o.drawElementsInstanced(a,y,l,v*c,E),n.update(y,a,E))}function _(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,l,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,a,1)}function g(v,y,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,l,v,0,M,0,E);let x=0;for(let w=0;w<E;w++)x+=y[w]*M[w];n.update(x,a,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function QA(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function JA(o,t,n){const a=new WeakMap,s=new $e;function l(c,f,d){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let A=function(){B.dispose(),a.delete(f),f.removeEventListener("dispose",A)};var y=A;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),M===!0&&(R=2),S===!0&&(R=3);let D=f.attributes.position.count*R,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const O=new Float32Array(D*P*4*g),B=new ty(O,D,P,g);B.type=Ba,B.needsUpdate=!0;const b=R*4;for(let H=0;H<g;H++){const it=x[H],Q=w[H],lt=U[H],ot=D*P*4*H;for(let G=0;G<it.count;G++){const J=G*b;E===!0&&(s.fromBufferAttribute(it,G),O[ot+J+0]=s.x,O[ot+J+1]=s.y,O[ot+J+2]=s.z,O[ot+J+3]=0),M===!0&&(s.fromBufferAttribute(Q,G),O[ot+J+4]=s.x,O[ot+J+5]=s.y,O[ot+J+6]=s.z,O[ot+J+7]=0),S===!0&&(s.fromBufferAttribute(lt,G),O[ot+J+8]=s.x,O[ot+J+9]=s.y,O[ot+J+10]=s.z,O[ot+J+11]=lt.itemSize===4?s.w:1)}}v={count:g,texture:B,size:new Ce(D,P)},a.set(f,v),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const M=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function $A(o,t,n,a){let s=new WeakMap;function l(d){const p=a.render.frame,_=d.geometry,g=t.get(d,_);if(s.get(g)!==p&&(t.update(g),s.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==p&&(v.update(),s.set(v,p))}return g}function c(){s=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:c}}const gy=new Yn,Jv=new hy(1,1),vy=new ty,xy=new AT,yy=new ly,$v=[],tx=[],ex=new Float32Array(16),nx=new Float32Array(9),ix=new Float32Array(4);function Io(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let l=$v[s];if(l===void 0&&(l=new Float32Array(s),$v[s]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function _n(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function gn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function df(o,t){let n=tx[t];n===void 0&&(n=new Int32Array(t),tx[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function tR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function eR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;o.uniform2fv(this.addr,t),gn(n,t)}}function nR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;o.uniform3fv(this.addr,t),gn(n,t)}}function iR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;o.uniform4fv(this.addr,t),gn(n,t)}}function aR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(_n(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(_n(n,a))return;ix.set(a),o.uniformMatrix2fv(this.addr,!1,ix),gn(n,a)}}function rR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(_n(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(_n(n,a))return;nx.set(a),o.uniformMatrix3fv(this.addr,!1,nx),gn(n,a)}}function sR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(_n(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(_n(n,a))return;ex.set(a),o.uniformMatrix4fv(this.addr,!1,ex),gn(n,a)}}function oR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function lR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;o.uniform2iv(this.addr,t),gn(n,t)}}function uR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;o.uniform3iv(this.addr,t),gn(n,t)}}function cR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;o.uniform4iv(this.addr,t),gn(n,t)}}function fR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function hR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;o.uniform2uiv(this.addr,t),gn(n,t)}}function dR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;o.uniform3uiv(this.addr,t),gn(n,t)}}function pR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;o.uniform4uiv(this.addr,t),gn(n,t)}}function mR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Jv.compareFunction=Jx,l=Jv):l=gy,n.setTexture2D(t||l,s)}function _R(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||xy,s)}function gR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||yy,s)}function vR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||vy,s)}function xR(o){switch(o){case 5126:return tR;case 35664:return eR;case 35665:return nR;case 35666:return iR;case 35674:return aR;case 35675:return rR;case 35676:return sR;case 5124:case 35670:return oR;case 35667:case 35671:return lR;case 35668:case 35672:return uR;case 35669:case 35673:return cR;case 5125:return fR;case 36294:return hR;case 36295:return dR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return gR;case 36289:case 36303:case 36311:case 36292:return vR}}function yR(o,t){o.uniform1fv(this.addr,t)}function SR(o,t){const n=Io(t,this.size,2);o.uniform2fv(this.addr,n)}function MR(o,t){const n=Io(t,this.size,3);o.uniform3fv(this.addr,n)}function ER(o,t){const n=Io(t,this.size,4);o.uniform4fv(this.addr,n)}function TR(o,t){const n=Io(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function bR(o,t){const n=Io(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function AR(o,t){const n=Io(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function RR(o,t){o.uniform1iv(this.addr,t)}function wR(o,t){o.uniform2iv(this.addr,t)}function CR(o,t){o.uniform3iv(this.addr,t)}function DR(o,t){o.uniform4iv(this.addr,t)}function UR(o,t){o.uniform1uiv(this.addr,t)}function LR(o,t){o.uniform2uiv(this.addr,t)}function NR(o,t){o.uniform3uiv(this.addr,t)}function OR(o,t){o.uniform4uiv(this.addr,t)}function PR(o,t,n){const a=this.cache,s=t.length,l=df(n,s);_n(a,l)||(o.uniform1iv(this.addr,l),gn(a,l));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||gy,l[c])}function zR(o,t,n){const a=this.cache,s=t.length,l=df(n,s);_n(a,l)||(o.uniform1iv(this.addr,l),gn(a,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||xy,l[c])}function BR(o,t,n){const a=this.cache,s=t.length,l=df(n,s);_n(a,l)||(o.uniform1iv(this.addr,l),gn(a,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||yy,l[c])}function FR(o,t,n){const a=this.cache,s=t.length,l=df(n,s);_n(a,l)||(o.uniform1iv(this.addr,l),gn(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||vy,l[c])}function IR(o){switch(o){case 5126:return yR;case 35664:return SR;case 35665:return MR;case 35666:return ER;case 35674:return TR;case 35675:return bR;case 35676:return AR;case 5124:case 35670:return RR;case 35667:case 35671:return wR;case 35668:case 35672:return CR;case 35669:case 35673:return DR;case 5125:return UR;case 36294:return LR;case 36295:return NR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return PR;case 35679:case 36299:case 36307:return zR;case 35680:case 36300:case 36308:case 36293:return BR;case 36289:case 36303:case 36311:case 36292:return FR}}class HR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=xR(n.type)}}class GR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IR(n.type)}}class VR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function ax(o,t){o.seq.push(t),o.map[t.id]=t}function kR(o,t,n){const a=o.name,s=a.length;for(Jd.lastIndex=0;;){const l=Jd.exec(a),c=Jd.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===s){ax(n,p===void 0?new HR(f,o,t):new GR(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new VR(f),ax(n,g)),n=g}}}class Zc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const l=t.getActiveUniform(n,s),c=t.getUniformLocation(n,l.name);kR(l,c,this)}}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function rx(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const XR=37297;let WR=0;function qR(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const sx=new le;function YR(o){we._getMatrix(sx,we.workingColorSpace,o);const t=`mat3( ${sx.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(o)){case $c:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ox(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),s=o.getShaderInfoLog(t).trim();if(a&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+s+`

`+qR(o.getShaderSource(t),c)}else return s}function jR(o,t){const n=YR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ZR(o,t){let n;switch(t){case JE:n="Linear";break;case $E:n="Reinhard";break;case tT:n="Cineon";break;case eT:n="ACESFilmic";break;case iT:n="AgX";break;case aT:n="Neutral";break;case nT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vc=new rt;function KR(){we.getLuminanceCoefficients(Vc);const o=Vc.x.toFixed(4),t=Vc.y.toFixed(4),n=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kl).join(`
`)}function JR(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function $R(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function kl(o){return o!==""}function lx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ux(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function $p(o){return o.replace(tw,nw)}const ew=new Map;function nw(o,t){let n=ue[t];if(n===void 0){const a=ew.get(t);if(a!==void 0)n=ue[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return $p(n)}const iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cx(o){return o.replace(iw,aw)}function aw(o,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function fx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Fx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===UE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Oa&&(t="SHADOWMAP_TYPE_VSM"),t}function sw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ao:case Ro:t="ENVMAP_TYPE_CUBE";break;case hf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ow(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ro:t="ENVMAP_MODE_REFRACTION";break}return t}function lw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ix:t="ENVMAP_BLENDING_MULTIPLY";break;case KE:t="ENVMAP_BLENDING_MIX";break;case QE:t="ENVMAP_BLENDING_ADD";break}return t}function uw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function cw(o,t,n,a){const s=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=rw(n),p=sw(n),_=ow(n),g=lw(n),v=uw(n),y=QR(n),E=JR(l),M=s.createProgram();let S,x,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(kl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(kl).join(`
`),x.length>0&&(x+=`
`)):(S=[fx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kl).join(`
`),x=[fx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?ue.tonemapping_pars_fragment:"",n.toneMapping!==Mr?ZR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,jR("linearToOutputTexel",n.outputColorSpace),KR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(kl).join(`
`)),c=$p(c),c=lx(c,n),c=ux(c,n),f=$p(f),f=lx(f,n),f=ux(f,n),c=cx(c),f=cx(f),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=w+S+c,R=w+x+f,D=rx(s,s.VERTEX_SHADER,U),P=rx(s,s.FRAGMENT_SHADER,R);s.attachShader(M,D),s.attachShader(M,P),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function O(H){if(o.debug.checkShaderErrors){const it=s.getProgramInfoLog(M).trim(),Q=s.getShaderInfoLog(D).trim(),lt=s.getShaderInfoLog(P).trim();let ot=!0,G=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,D,P);else{const J=ox(s,D,"vertex"),X=ox(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+it+`
`+J+`
`+X)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(Q===""||lt==="")&&(G=!1);G&&(H.diagnostics={runnable:ot,programLog:it,vertexShader:{log:Q,prefix:S},fragmentShader:{log:lt,prefix:x}})}s.deleteShader(D),s.deleteShader(P),B=new Zc(s,M),b=$R(s,M)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(M,XR)),A},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=P,this}let fw=0;class hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new dw(t),n.set(t,a)),a}}class dw{constructor(t){this.id=fw++,this.code=t,this.usedTimes=0}}function pw(o,t,n,a,s,l,c){const f=new ey,d=new hw,p=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function S(b,A,H,it,Q){const lt=it.fog,ot=Q.geometry,G=b.isMeshStandardMaterial?it.environment:null,J=(b.isMeshStandardMaterial?n:t).get(b.envMap||G),X=J&&J.mapping===hf?J.image.height:null,gt=E[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const z=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,et=z!==void 0?z.length:0;let St=0;ot.morphAttributes.position!==void 0&&(St=1),ot.morphAttributes.normal!==void 0&&(St=2),ot.morphAttributes.color!==void 0&&(St=3);let bt,W,ft,yt;if(gt){const Te=ea[gt];bt=Te.vertexShader,W=Te.fragmentShader}else bt=b.vertexShader,W=b.fragmentShader,d.update(b),ft=d.getVertexShaderID(b),yt=d.getFragmentShaderID(b);const Tt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Kt=Q.isInstancedMesh===!0,Pt=Q.isBatchedMesh===!0,Ee=!!b.map,De=!!b.matcap,ae=!!J,V=!!b.aoMap,bn=!!b.lightMap,se=!!b.bumpMap,fe=!!b.normalMap,kt=!!b.displacementMap,Ue=!!b.emissiveMap,Xt=!!b.metalnessMap,F=!!b.roughnessMap,C=b.anisotropy>0,at=b.clearcoat>0,dt=b.dispersion>0,xt=b.iridescence>0,pt=b.sheen>0,Ht=b.transmission>0,Ct=C&&!!b.anisotropyMap,zt=at&&!!b.clearcoatMap,pe=at&&!!b.clearcoatNormalMap,Et=at&&!!b.clearcoatRoughnessMap,Bt=xt&&!!b.iridescenceMap,Zt=xt&&!!b.iridescenceThicknessMap,Gt=pt&&!!b.sheenColorMap,Ft=pt&&!!b.sheenRoughnessMap,re=!!b.specularMap,Yt=!!b.specularColorMap,Le=!!b.specularIntensityMap,Y=Ht&&!!b.transmissionMap,Lt=Ht&&!!b.thicknessMap,ut=!!b.gradientMap,_t=!!b.alphaMap,wt=b.alphaTest>0,Dt=!!b.alphaHash,$t=!!b.extensions;let Ve=Mr;b.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ve=o.toneMapping);const cn={shaderID:gt,shaderType:b.type,shaderName:b.name,vertexShader:bt,fragmentShader:W,defines:b.defines,customVertexShaderID:ft,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&Q._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&Q.instanceColor!==null,instancingMorph:Kt&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Do,alphaToCoverage:!!b.alphaToCoverage,map:Ee,matcap:De,envMap:ae,envMapMode:ae&&J.mapping,envMapCubeUVHeight:X,aoMap:V,lightMap:bn,bumpMap:se,normalMap:fe,displacementMap:v&&kt,emissiveMap:Ue,normalMapObjectSpace:fe&&b.normalMapType===lT,normalMapTangentSpace:fe&&b.normalMapType===Qx,metalnessMap:Xt,roughnessMap:F,anisotropy:C,anisotropyMap:Ct,clearcoat:at,clearcoatMap:zt,clearcoatNormalMap:pe,clearcoatRoughnessMap:Et,dispersion:dt,iridescence:xt,iridescenceMap:Bt,iridescenceThicknessMap:Zt,sheen:pt,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:re,specularColorMap:Yt,specularIntensityMap:Le,transmission:Ht,transmissionMap:Y,thicknessMap:Lt,gradientMap:ut,opaque:b.transparent===!1&&b.blending===xo&&b.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Dt,combine:b.combine,mapUv:Ee&&M(b.map.channel),aoMapUv:V&&M(b.aoMap.channel),lightMapUv:bn&&M(b.lightMap.channel),bumpMapUv:se&&M(b.bumpMap.channel),normalMapUv:fe&&M(b.normalMap.channel),displacementMapUv:kt&&M(b.displacementMap.channel),emissiveMapUv:Ue&&M(b.emissiveMap.channel),metalnessMapUv:Xt&&M(b.metalnessMap.channel),roughnessMapUv:F&&M(b.roughnessMap.channel),anisotropyMapUv:Ct&&M(b.anisotropyMap.channel),clearcoatMapUv:zt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&M(b.sheenRoughnessMap.channel),specularMapUv:re&&M(b.specularMap.channel),specularColorMapUv:Yt&&M(b.specularColorMap.channel),specularIntensityMapUv:Le&&M(b.specularIntensityMap.channel),transmissionMapUv:Y&&M(b.transmissionMap.channel),thicknessMapUv:Lt&&M(b.thicknessMap.channel),alphaMapUv:_t&&M(b.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(fe||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ot.attributes.uv&&(Ee||_t),fog:!!lt,useFog:b.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Rt,skinning:Q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:St,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===na,flipSided:b.side===$n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$t&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&b.extensions.multiDraw===!0||Pt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return cn.vertexUv1s=p.has(1),cn.vertexUv2s=p.has(2),cn.vertexUv3s=p.has(3),p.clear(),cn}function x(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)A.push(H),A.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(w(A,b),U(A,b),A.push(o.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function w(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function U(b,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const A=E[b.type];let H;if(A){const it=ea[A];H=IT.clone(it.uniforms)}else H=b.uniforms;return H}function D(b,A){let H;for(let it=0,Q=_.length;it<Q;it++){const lt=_[it];if(lt.cacheKey===A){H=lt,++H.usedTimes;break}}return H===void 0&&(H=new cw(o,A,b,l),_.push(H)),H}function P(b){if(--b.usedTimes===0){const A=_.indexOf(b);_[A]=_[_.length-1],_.pop(),b.destroy()}}function O(b){d.remove(b)}function B(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:D,releaseProgram:P,releaseShaderCache:O,programs:_,dispose:B}}function mw(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,d){o.get(c)[f]=d}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function _w(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function hx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function dx(){const o=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,y,E,M,S){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=S),t++,x}function f(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?a.push(x):y.transparent===!0?s.push(x):n.push(x)}function d(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?a.unshift(x):y.transparent===!0?s.unshift(x):n.unshift(x)}function p(g,v){n.length>1&&n.sort(g||_w),a.length>1&&a.sort(v||hx),s.length>1&&s.sort(v||hx)}function _(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:f,unshift:d,finish:_,sort:p}}function gw(){let o=new WeakMap;function t(a,s){const l=o.get(a);let c;return l===void 0?(c=new dx,o.set(a,[c])):s>=l.length?(c=new dx,l.push(c)):c=l[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function vw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new Me};break;case"SpotLight":n={position:new rt,direction:new rt,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[t.id]=n,n}}}function xw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let yw=0;function Sw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Mw(o){const t=new vw,n=xw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new rt);const s=new rt,l=new Xe,c=new Xe;function f(p){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,w=0,U=0,R=0,D=0,P=0,O=0;p.sort(Sw);for(let b=0,A=p.length;b<A;b++){const H=p[b],it=H.color,Q=H.intensity,lt=H.distance,ot=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=it.r*Q,g+=it.g*Q,v+=it.b*Q;else if(H.isLightProbe){for(let G=0;G<9;G++)a.probe[G].addScaledVector(H.sh.coefficients[G],Q);O++}else if(H.isDirectionalLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const J=H.shadow,X=n.get(H);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,a.directionalShadow[y]=X,a.directionalShadowMap[y]=ot,a.directionalShadowMatrix[y]=H.shadow.matrix,w++}a.directional[y]=G,y++}else if(H.isSpotLight){const G=t.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy(it).multiplyScalar(Q),G.distance=lt,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,a.spot[M]=G;const J=H.shadow;if(H.map&&(a.spotLightMap[D]=H.map,D++,J.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[M]=J.matrix,H.castShadow){const X=n.get(H);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,a.spotShadow[M]=X,a.spotShadowMap[M]=ot,R++}M++}else if(H.isRectAreaLight){const G=t.get(H);G.color.copy(it).multiplyScalar(Q),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=G,S++}else if(H.isPointLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),G.distance=H.distance,G.decay=H.decay,H.castShadow){const J=H.shadow,X=n.get(H);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,a.pointShadow[E]=X,a.pointShadowMap[E]=ot,a.pointShadowMatrix[E]=H.shadow.matrix,U++}a.point[E]=G,E++}else if(H.isHemisphereLight){const G=t.get(H);G.skyColor.copy(H.color).multiplyScalar(Q),G.groundColor.copy(H.groundColor).multiplyScalar(Q),a.hemi[x]=G,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ut.LTC_FLOAT_1,a.rectAreaLTC2=Ut.LTC_FLOAT_2):(a.rectAreaLTC1=Ut.LTC_HALF_1,a.rectAreaLTC2=Ut.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const B=a.hash;(B.directionalLength!==y||B.pointLength!==E||B.spotLength!==M||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==w||B.numPointShadows!==U||B.numSpotShadows!==R||B.numSpotMaps!==D||B.numLightProbes!==O)&&(a.directional.length=y,a.spot.length=M,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=R+D-P,a.spotLightMap.length=D,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=O,B.directionalLength=y,B.pointLength=E,B.spotLength=M,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=w,B.numPointShadows=U,B.numSpotShadows=R,B.numSpotMaps=D,B.numLightProbes=O,a.version=yw++)}function d(p,_){let g=0,v=0,y=0,E=0,M=0;const S=_.matrixWorldInverse;for(let x=0,w=p.length;x<w;x++){const U=p[x];if(U.isDirectionalLight){const R=a.directional[g];R.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),g++}else if(U.isSpotLight){const R=a.spot[y];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const R=a.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),c.identity(),l.copy(U.matrixWorld),l.premultiply(S),c.extractRotation(l),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(U.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const R=a.hemi[M];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(S),M++}}}return{setup:f,setupView:d,state:a}}function px(o){const t=new Mw(o),n=[],a=[];function s(_){p.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function d(_){t.setupView(n,_)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function Ew(o){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new px(o),t.set(s,[f])):l>=c.length?(f=new px(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Aw(o,t,n){let a=new bm;const s=new Ce,l=new Ce,c=new $e,f=new QT({depthPacking:oT}),d=new JT,p={},_=n.maxTextureSize,g={[br]:$n,[$n]:br,[na]:na},v=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Tw,fragmentShader:bw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ra(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fx;let x=this.type;this.render=function(P,O,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const b=o.getRenderTarget(),A=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),it=o.state;it.setBlending(Sr),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const Q=x!==Oa&&this.type===Oa,lt=x===Oa&&this.type!==Oa;for(let ot=0,G=P.length;ot<G;ot++){const J=P[ot],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const gt=X.getFrameExtents();if(s.multiply(gt),l.copy(X.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(l.x=Math.floor(_/gt.x),s.x=l.x*gt.x,X.mapSize.x=l.x),s.y>_&&(l.y=Math.floor(_/gt.y),s.y=l.y*gt.y,X.mapSize.y=l.y)),X.map===null||Q===!0||lt===!0){const et=this.type!==Oa?{minFilter:Yi,magFilter:Yi}:{};X.map!==null&&X.map.dispose(),X.map=new vs(s.x,s.y,et),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const z=X.getViewportCount();for(let et=0;et<z;et++){const St=X.getViewport(et);c.set(l.x*St.x,l.y*St.y,l.x*St.z,l.y*St.w),it.viewport(c),X.updateMatrices(J,et),a=X.getFrustum(),R(O,B,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Oa&&w(X,B),X.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,A,H)};function w(P,O){const B=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vs(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(O,null,B,v,M,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(O,null,B,y,M,null)}function U(P,O,B,b){let A=null;const H=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)A=H;else if(A=B.isPointLight===!0?d:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const it=A.uuid,Q=O.uuid;let lt=p[it];lt===void 0&&(lt={},p[it]=lt);let ot=lt[Q];ot===void 0&&(ot=A.clone(),lt[Q]=ot,O.addEventListener("dispose",D)),A=ot}if(A.visible=O.visible,A.wireframe=O.wireframe,b===Oa?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:g[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const it=o.properties.get(A);it.light=B}return A}function R(P,O,B,b,A){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Oa)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const Q=t.update(P),lt=P.material;if(Array.isArray(lt)){const ot=Q.groups;for(let G=0,J=ot.length;G<J;G++){const X=ot[G],gt=lt[X.materialIndex];if(gt&&gt.visible){const z=U(P,gt,b,A);P.onBeforeShadow(o,P,O,B,Q,z,X),o.renderBufferDirect(B,null,Q,z,P,X),P.onAfterShadow(o,P,O,B,Q,z,X)}}}else if(lt.visible){const ot=U(P,lt,b,A);P.onBeforeShadow(o,P,O,B,Q,ot,null),o.renderBufferDirect(B,null,Q,ot,P,null),P.onAfterShadow(o,P,O,B,Q,ot,null)}}const it=P.children;for(let Q=0,lt=it.length;Q<lt;Q++)R(it[Q],O,B,b,A)}function D(P){P.target.removeEventListener("dispose",D);for(const B in p){const b=p[B],A=P.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const Rw={[pp]:mp,[_p]:xp,[gp]:yp,[bo]:vp,[mp]:pp,[xp]:_p,[yp]:gp,[vp]:bo};function ww(o,t){function n(){let Y=!1;const Lt=new $e;let ut=null;const _t=new $e(0,0,0,0);return{setMask:function(wt){ut!==wt&&!Y&&(o.colorMask(wt,wt,wt,wt),ut=wt)},setLocked:function(wt){Y=wt},setClear:function(wt,Dt,$t,Ve,cn){cn===!0&&(wt*=Ve,Dt*=Ve,$t*=Ve),Lt.set(wt,Dt,$t,Ve),_t.equals(Lt)===!1&&(o.clearColor(wt,Dt,$t,Ve),_t.copy(Lt))},reset:function(){Y=!1,ut=null,_t.set(-1,0,0,0)}}}function a(){let Y=!1,Lt=!1,ut=null,_t=null,wt=null;return{setReversed:function(Dt){if(Lt!==Dt){const $t=t.get("EXT_clip_control");Lt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Ve=wt;wt=null,this.setClear(Ve)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Tt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Dt){ut!==Dt&&!Y&&(o.depthMask(Dt),ut=Dt)},setFunc:function(Dt){if(Lt&&(Dt=Rw[Dt]),_t!==Dt){switch(Dt){case pp:o.depthFunc(o.NEVER);break;case mp:o.depthFunc(o.ALWAYS);break;case _p:o.depthFunc(o.LESS);break;case bo:o.depthFunc(o.LEQUAL);break;case gp:o.depthFunc(o.EQUAL);break;case vp:o.depthFunc(o.GEQUAL);break;case xp:o.depthFunc(o.GREATER);break;case yp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){Y=Dt},setClear:function(Dt){wt!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),wt=Dt)},reset:function(){Y=!1,ut=null,_t=null,wt=null,Lt=!1}}}function s(){let Y=!1,Lt=null,ut=null,_t=null,wt=null,Dt=null,$t=null,Ve=null,cn=null;return{setTest:function(Te){Y||(Te?Tt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!Y&&(o.stencilMask(Te),Lt=Te)},setFunc:function(Te,In,Hn){(ut!==Te||_t!==In||wt!==Hn)&&(o.stencilFunc(Te,In,Hn),ut=Te,_t=In,wt=Hn)},setOp:function(Te,In,Hn){(Dt!==Te||$t!==In||Ve!==Hn)&&(o.stencilOp(Te,In,Hn),Dt=Te,$t=In,Ve=Hn)},setLocked:function(Te){Y=Te},setClear:function(Te){cn!==Te&&(o.clearStencil(Te),cn=Te)},reset:function(){Y=!1,Lt=null,ut=null,_t=null,wt=null,Dt=null,$t=null,Ve=null,cn=null}}}const l=new n,c=new a,f=new s,d=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,w=null,U=null,R=null,D=null,P=null,O=new Me(0,0,0),B=0,b=!1,A=null,H=null,it=null,Q=null,lt=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=J>=2);let gt=null,z={};const et=o.getParameter(o.SCISSOR_BOX),St=o.getParameter(o.VIEWPORT),bt=new $e().fromArray(et),W=new $e().fromArray(St);function ft(Y,Lt,ut,_t){const wt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(Y,Dt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ut;$t++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Lt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return Dt}const yt={};yt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Tt(o.DEPTH_TEST),c.setFunc(bo),se(!1),fe(hv),Tt(o.CULL_FACE),V(Sr);function Tt(Y){_[Y]!==!0&&(o.enable(Y),_[Y]=!0)}function Rt(Y){_[Y]!==!1&&(o.disable(Y),_[Y]=!1)}function Kt(Y,Lt){return g[Y]!==Lt?(o.bindFramebuffer(Y,Lt),g[Y]=Lt,Y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),Y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(Y,Lt){let ut=y,_t=!1;if(Y){ut=v.get(Lt),ut===void 0&&(ut=[],v.set(Lt,ut));const wt=Y.textures;if(ut.length!==wt.length||ut[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=wt.length;Dt<$t;Dt++)ut[Dt]=o.COLOR_ATTACHMENT0+Dt;ut.length=wt.length,_t=!0}}else ut[0]!==o.BACK&&(ut[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ut)}function Ee(Y){return E!==Y?(o.useProgram(Y),E=Y,!0):!1}const De={[ls]:o.FUNC_ADD,[NE]:o.FUNC_SUBTRACT,[OE]:o.FUNC_REVERSE_SUBTRACT};De[PE]=o.MIN,De[zE]=o.MAX;const ae={[BE]:o.ZERO,[FE]:o.ONE,[IE]:o.SRC_COLOR,[hp]:o.SRC_ALPHA,[WE]:o.SRC_ALPHA_SATURATE,[kE]:o.DST_COLOR,[GE]:o.DST_ALPHA,[HE]:o.ONE_MINUS_SRC_COLOR,[dp]:o.ONE_MINUS_SRC_ALPHA,[XE]:o.ONE_MINUS_DST_COLOR,[VE]:o.ONE_MINUS_DST_ALPHA,[qE]:o.CONSTANT_COLOR,[YE]:o.ONE_MINUS_CONSTANT_COLOR,[jE]:o.CONSTANT_ALPHA,[ZE]:o.ONE_MINUS_CONSTANT_ALPHA};function V(Y,Lt,ut,_t,wt,Dt,$t,Ve,cn,Te){if(Y===Sr){M===!0&&(Rt(o.BLEND),M=!1);return}if(M===!1&&(Tt(o.BLEND),M=!0),Y!==LE){if(Y!==S||Te!==b){if((x!==ls||R!==ls)&&(o.blendEquation(o.FUNC_ADD),x=ls,R=ls),Te)switch(Y){case xo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fp:o.blendFunc(o.ONE,o.ONE);break;case dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case xo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}w=null,U=null,D=null,P=null,O.set(0,0,0),B=0,S=Y,b=Te}return}wt=wt||Lt,Dt=Dt||ut,$t=$t||_t,(Lt!==x||wt!==R)&&(o.blendEquationSeparate(De[Lt],De[wt]),x=Lt,R=wt),(ut!==w||_t!==U||Dt!==D||$t!==P)&&(o.blendFuncSeparate(ae[ut],ae[_t],ae[Dt],ae[$t]),w=ut,U=_t,D=Dt,P=$t),(Ve.equals(O)===!1||cn!==B)&&(o.blendColor(Ve.r,Ve.g,Ve.b,cn),O.copy(Ve),B=cn),S=Y,b=!1}function bn(Y,Lt){Y.side===na?Rt(o.CULL_FACE):Tt(o.CULL_FACE);let ut=Y.side===$n;Lt&&(ut=!ut),se(ut),Y.blending===xo&&Y.transparent===!1?V(Sr):V(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const _t=Y.stencilWrite;f.setTest(_t),_t&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ue(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(Y){A!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),A=Y)}function fe(Y){Y!==CE?(Tt(o.CULL_FACE),Y!==H&&(Y===hv?o.cullFace(o.BACK):Y===DE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),H=Y}function kt(Y){Y!==it&&(G&&o.lineWidth(Y),it=Y)}function Ue(Y,Lt,ut){Y?(Tt(o.POLYGON_OFFSET_FILL),(Q!==Lt||lt!==ut)&&(o.polygonOffset(Lt,ut),Q=Lt,lt=ut)):Rt(o.POLYGON_OFFSET_FILL)}function Xt(Y){Y?Tt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function F(Y){Y===void 0&&(Y=o.TEXTURE0+ot-1),gt!==Y&&(o.activeTexture(Y),gt=Y)}function C(Y,Lt,ut){ut===void 0&&(gt===null?ut=o.TEXTURE0+ot-1:ut=gt);let _t=z[ut];_t===void 0&&(_t={type:void 0,texture:void 0},z[ut]=_t),(_t.type!==Y||_t.texture!==Lt)&&(gt!==ut&&(o.activeTexture(ut),gt=ut),o.bindTexture(Y,Lt||yt[Y]),_t.type=Y,_t.texture=Lt)}function at(){const Y=z[gt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function dt(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ht(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pe(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Zt(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(Y){bt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),bt.copy(Y))}function Ft(Y){W.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),W.copy(Y))}function re(Y,Lt){let ut=p.get(Lt);ut===void 0&&(ut=new WeakMap,p.set(Lt,ut));let _t=ut.get(Y);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,Y.name),ut.set(Y,_t))}function Yt(Y,Lt){const _t=p.get(Lt).get(Y);d.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,Y.__bindingPointIndex),d.set(Lt,_t))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},gt=null,z={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,w=null,U=null,R=null,D=null,P=null,O=new Me(0,0,0),B=0,b=!1,A=null,H=null,it=null,Q=null,lt=null,bt.set(0,0,o.canvas.width,o.canvas.height),W.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Tt,disable:Rt,bindFramebuffer:Kt,drawBuffers:Pt,useProgram:Ee,setBlending:V,setMaterial:bn,setFlipSided:se,setCullFace:fe,setLineWidth:kt,setPolygonOffset:Ue,setScissorTest:Xt,activeTexture:F,bindTexture:C,unbindTexture:at,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:Bt,texImage3D:Zt,updateUBOMapping:re,uniformBlockBinding:Yt,texStorage2D:pe,texStorage3D:Et,texSubImage2D:pt,texSubImage3D:Ht,compressedTexSubImage2D:Ct,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:Le}}function Cw(o,t,n,a,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,C){return y?new OffscreenCanvas(F,C):ef("canvas")}function M(F,C,at){let dt=1;const xt=Xt(F);if((xt.width>at||xt.height>at)&&(dt=at/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const pt=Math.floor(dt*xt.width),Ht=Math.floor(dt*xt.height);g===void 0&&(g=E(pt,Ht));const Ct=C?E(pt,Ht):g;return Ct.width=pt,Ct.height=Ht,Ct.getContext("2d").drawImage(F,0,0,pt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+pt+"x"+Ht+")."),Ct}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),F;return F}function S(F){return F.generateMipmaps}function x(F){o.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(F,C,at,dt,xt=!1){if(F!==null){if(o[F]!==void 0)return o[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let pt=C;if(C===o.RED&&(at===o.FLOAT&&(pt=o.R32F),at===o.HALF_FLOAT&&(pt=o.R16F),at===o.UNSIGNED_BYTE&&(pt=o.R8)),C===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(pt=o.R8UI),at===o.UNSIGNED_SHORT&&(pt=o.R16UI),at===o.UNSIGNED_INT&&(pt=o.R32UI),at===o.BYTE&&(pt=o.R8I),at===o.SHORT&&(pt=o.R16I),at===o.INT&&(pt=o.R32I)),C===o.RG&&(at===o.FLOAT&&(pt=o.RG32F),at===o.HALF_FLOAT&&(pt=o.RG16F),at===o.UNSIGNED_BYTE&&(pt=o.RG8)),C===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(pt=o.RG8UI),at===o.UNSIGNED_SHORT&&(pt=o.RG16UI),at===o.UNSIGNED_INT&&(pt=o.RG32UI),at===o.BYTE&&(pt=o.RG8I),at===o.SHORT&&(pt=o.RG16I),at===o.INT&&(pt=o.RG32I)),C===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),at===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),at===o.UNSIGNED_INT&&(pt=o.RGB32UI),at===o.BYTE&&(pt=o.RGB8I),at===o.SHORT&&(pt=o.RGB16I),at===o.INT&&(pt=o.RGB32I)),C===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),at===o.UNSIGNED_INT&&(pt=o.RGBA32UI),at===o.BYTE&&(pt=o.RGBA8I),at===o.SHORT&&(pt=o.RGBA16I),at===o.INT&&(pt=o.RGBA32I)),C===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),C===o.RGBA){const Ht=xt?$c:we.getTransfer(dt);at===o.FLOAT&&(pt=o.RGBA32F),at===o.HALF_FLOAT&&(pt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(pt=Ht===ze?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function R(F,C){let at;return F?C===null||C===gs||C===wo?at=o.DEPTH24_STENCIL8:C===Ba?at=o.DEPTH32F_STENCIL8:C===Zl&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===gs||C===wo?at=o.DEPTH_COMPONENT24:C===Ba?at=o.DEPTH_COMPONENT32F:C===Zl&&(at=o.DEPTH_COMPONENT16),at}function D(F,C){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Yi&&F.minFilter!==aa?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function P(F){const C=F.target;C.removeEventListener("dispose",P),B(C),C.isVideoTexture&&_.delete(C)}function O(F){const C=F.target;C.removeEventListener("dispose",O),A(C)}function B(F){const C=a.get(F);if(C.__webglInit===void 0)return;const at=F.source,dt=v.get(at);if(dt){const xt=dt[C.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&b(F),Object.keys(dt).length===0&&v.delete(at)}a.remove(F)}function b(F){const C=a.get(F);o.deleteTexture(C.__webglTexture);const at=F.source,dt=v.get(at);delete dt[C.__cacheKey],c.memory.textures--}function A(F){const C=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(C.__webglFramebuffer[dt]))for(let xt=0;xt<C.__webglFramebuffer[dt].length;xt++)o.deleteFramebuffer(C.__webglFramebuffer[dt][xt]);else o.deleteFramebuffer(C.__webglFramebuffer[dt]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[dt])}else{if(Array.isArray(C.__webglFramebuffer))for(let dt=0;dt<C.__webglFramebuffer.length;dt++)o.deleteFramebuffer(C.__webglFramebuffer[dt]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let dt=0;dt<C.__webglColorRenderbuffer.length;dt++)C.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[dt]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const at=F.textures;for(let dt=0,xt=at.length;dt<xt;dt++){const pt=a.get(at[dt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),c.memory.textures--),a.remove(at[dt])}a.remove(F)}let H=0;function it(){H=0}function Q(){const F=H;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),H+=1,F}function lt(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function ot(F,C){const at=a.get(F);if(F.isVideoTexture&&kt(F),F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){const dt=F.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(at,F,C);return}}n.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+C)}function G(F,C){const at=a.get(F);if(F.version>0&&at.__version!==F.version){W(at,F,C);return}n.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+C)}function J(F,C){const at=a.get(F);if(F.version>0&&at.__version!==F.version){W(at,F,C);return}n.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+C)}function X(F,C){const at=a.get(F);if(F.version>0&&at.__version!==F.version){ft(at,F,C);return}n.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+C)}const gt={[Ep]:o.REPEAT,[cs]:o.CLAMP_TO_EDGE,[Tp]:o.MIRRORED_REPEAT},z={[Yi]:o.NEAREST,[rT]:o.NEAREST_MIPMAP_NEAREST,[gc]:o.NEAREST_MIPMAP_LINEAR,[aa]:o.LINEAR,[Sd]:o.LINEAR_MIPMAP_NEAREST,[fs]:o.LINEAR_MIPMAP_LINEAR},et={[uT]:o.NEVER,[mT]:o.ALWAYS,[cT]:o.LESS,[Jx]:o.LEQUAL,[fT]:o.EQUAL,[pT]:o.GEQUAL,[hT]:o.GREATER,[dT]:o.NOTEQUAL};function St(F,C){if(C.type===Ba&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===aa||C.magFilter===Sd||C.magFilter===gc||C.magFilter===fs||C.minFilter===aa||C.minFilter===Sd||C.minFilter===gc||C.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,gt[C.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,gt[C.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,gt[C.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,z[C.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,et[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Yi||C.minFilter!==gc&&C.minFilter!==fs||C.type===Ba&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||a.get(C).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");o.texParameterf(F,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),a.get(C).__currentAnisotropy=C.anisotropy}}}function bt(F,C){let at=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",P));const dt=C.source;let xt=v.get(dt);xt===void 0&&(xt={},v.set(dt,xt));const pt=lt(C);if(pt!==F.__cacheKey){xt[pt]===void 0&&(xt[pt]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,at=!0),xt[pt].usedTimes++;const Ht=xt[F.__cacheKey];Ht!==void 0&&(xt[F.__cacheKey].usedTimes--,Ht.usedTimes===0&&b(C)),F.__cacheKey=pt,F.__webglTexture=xt[pt].texture}return at}function W(F,C,at){let dt=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(dt=o.TEXTURE_3D);const xt=bt(F,C),pt=C.source;n.bindTexture(dt,F.__webglTexture,o.TEXTURE0+at);const Ht=a.get(pt);if(pt.version!==Ht.__version||xt===!0){n.activeTexture(o.TEXTURE0+at);const Ct=we.getPrimaries(we.workingColorSpace),zt=C.colorSpace===gr?null:we.getPrimaries(C.colorSpace),pe=C.colorSpace===gr||Ct===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Et=M(C.image,!1,s.maxTextureSize);Et=Ue(C,Et);const Bt=l.convert(C.format,C.colorSpace),Zt=l.convert(C.type);let Gt=U(C.internalFormat,Bt,Zt,C.colorSpace,C.isVideoTexture);St(dt,C);let Ft;const re=C.mipmaps,Yt=C.isVideoTexture!==!0,Le=Ht.__version===void 0||xt===!0,Y=pt.dataReady,Lt=D(C,Et);if(C.isDepthTexture)Gt=R(C.format===Co,C.type),Le&&(Yt?n.texStorage2D(o.TEXTURE_2D,1,Gt,Et.width,Et.height):n.texImage2D(o.TEXTURE_2D,0,Gt,Et.width,Et.height,0,Bt,Zt,null));else if(C.isDataTexture)if(re.length>0){Yt&&Le&&n.texStorage2D(o.TEXTURE_2D,Lt,Gt,re[0].width,re[0].height);for(let ut=0,_t=re.length;ut<_t;ut++)Ft=re[ut],Yt?Y&&n.texSubImage2D(o.TEXTURE_2D,ut,0,0,Ft.width,Ft.height,Bt,Zt,Ft.data):n.texImage2D(o.TEXTURE_2D,ut,Gt,Ft.width,Ft.height,0,Bt,Zt,Ft.data);C.generateMipmaps=!1}else Yt?(Le&&n.texStorage2D(o.TEXTURE_2D,Lt,Gt,Et.width,Et.height),Y&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Et.width,Et.height,Bt,Zt,Et.data)):n.texImage2D(o.TEXTURE_2D,0,Gt,Et.width,Et.height,0,Bt,Zt,Et.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Yt&&Le&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,re[0].width,re[0].height,Et.depth);for(let ut=0,_t=re.length;ut<_t;ut++)if(Ft=re[ut],C.format!==qi)if(Bt!==null)if(Yt){if(Y)if(C.layerUpdates.size>0){const wt=Xv(Ft.width,Ft.height,C.format,C.type);for(const Dt of C.layerUpdates){const $t=Ft.data.subarray(Dt*wt/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*wt/Ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,Dt,Ft.width,Ft.height,1,Bt,$t)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,Ft.width,Ft.height,Et.depth,Bt,Ft.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ut,Gt,Ft.width,Ft.height,Et.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?Y&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,Ft.width,Ft.height,Et.depth,Bt,Zt,Ft.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ut,Gt,Ft.width,Ft.height,Et.depth,0,Bt,Zt,Ft.data)}else{Yt&&Le&&n.texStorage2D(o.TEXTURE_2D,Lt,Gt,re[0].width,re[0].height);for(let ut=0,_t=re.length;ut<_t;ut++)Ft=re[ut],C.format!==qi?Bt!==null?Yt?Y&&n.compressedTexSubImage2D(o.TEXTURE_2D,ut,0,0,Ft.width,Ft.height,Bt,Ft.data):n.compressedTexImage2D(o.TEXTURE_2D,ut,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Y&&n.texSubImage2D(o.TEXTURE_2D,ut,0,0,Ft.width,Ft.height,Bt,Zt,Ft.data):n.texImage2D(o.TEXTURE_2D,ut,Gt,Ft.width,Ft.height,0,Bt,Zt,Ft.data)}else if(C.isDataArrayTexture)if(Yt){if(Le&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,Et.width,Et.height,Et.depth),Y)if(C.layerUpdates.size>0){const ut=Xv(Et.width,Et.height,C.format,C.type);for(const _t of C.layerUpdates){const wt=Et.data.subarray(_t*ut/Et.data.BYTES_PER_ELEMENT,(_t+1)*ut/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Bt,Zt,wt)}C.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Bt,Zt,Et.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Et.width,Et.height,Et.depth,0,Bt,Zt,Et.data);else if(C.isData3DTexture)Yt?(Le&&n.texStorage3D(o.TEXTURE_3D,Lt,Gt,Et.width,Et.height,Et.depth),Y&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Bt,Zt,Et.data)):n.texImage3D(o.TEXTURE_3D,0,Gt,Et.width,Et.height,Et.depth,0,Bt,Zt,Et.data);else if(C.isFramebufferTexture){if(Le)if(Yt)n.texStorage2D(o.TEXTURE_2D,Lt,Gt,Et.width,Et.height);else{let ut=Et.width,_t=Et.height;for(let wt=0;wt<Lt;wt++)n.texImage2D(o.TEXTURE_2D,wt,Gt,ut,_t,0,Bt,Zt,null),ut>>=1,_t>>=1}}else if(re.length>0){if(Yt&&Le){const ut=Xt(re[0]);n.texStorage2D(o.TEXTURE_2D,Lt,Gt,ut.width,ut.height)}for(let ut=0,_t=re.length;ut<_t;ut++)Ft=re[ut],Yt?Y&&n.texSubImage2D(o.TEXTURE_2D,ut,0,0,Bt,Zt,Ft):n.texImage2D(o.TEXTURE_2D,ut,Gt,Bt,Zt,Ft);C.generateMipmaps=!1}else if(Yt){if(Le){const ut=Xt(Et);n.texStorage2D(o.TEXTURE_2D,Lt,Gt,ut.width,ut.height)}Y&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Zt,Et)}else n.texImage2D(o.TEXTURE_2D,0,Gt,Bt,Zt,Et);S(C)&&x(dt),Ht.__version=pt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function ft(F,C,at){if(C.image.length!==6)return;const dt=bt(F,C),xt=C.source;n.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+at);const pt=a.get(xt);if(xt.version!==pt.__version||dt===!0){n.activeTexture(o.TEXTURE0+at);const Ht=we.getPrimaries(we.workingColorSpace),Ct=C.colorSpace===gr?null:we.getPrimaries(C.colorSpace),zt=C.colorSpace===gr||Ht===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const pe=C.isCompressedTexture||C.image[0].isCompressedTexture,Et=C.image[0]&&C.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!pe&&!Et?Bt[_t]=M(C.image[_t],!0,s.maxCubemapSize):Bt[_t]=Et?C.image[_t].image:C.image[_t],Bt[_t]=Ue(C,Bt[_t]);const Zt=Bt[0],Gt=l.convert(C.format,C.colorSpace),Ft=l.convert(C.type),re=U(C.internalFormat,Gt,Ft,C.colorSpace),Yt=C.isVideoTexture!==!0,Le=pt.__version===void 0||dt===!0,Y=xt.dataReady;let Lt=D(C,Zt);St(o.TEXTURE_CUBE_MAP,C);let ut;if(pe){Yt&&Le&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){ut=Bt[_t].mipmaps;for(let wt=0;wt<ut.length;wt++){const Dt=ut[wt];C.format!==qi?Gt!==null?Yt?Y&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Dt.width,Dt.height,Gt,Dt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,re,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,re,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(ut=C.mipmaps,Yt&&Le){ut.length>0&&Lt++;const _t=Xt(Bt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){Yt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Gt,Ft,Bt[_t].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Bt[_t].width,Bt[_t].height,0,Gt,Ft,Bt[_t].data);for(let wt=0;wt<ut.length;wt++){const $t=ut[wt].image[_t].image;Yt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,$t.width,$t.height,Gt,Ft,$t.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,re,$t.width,$t.height,0,Gt,Ft,$t.data)}}else{Yt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Ft,Bt[_t]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Gt,Ft,Bt[_t]);for(let wt=0;wt<ut.length;wt++){const Dt=ut[wt];Yt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Gt,Ft,Dt.image[_t]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,re,Gt,Ft,Dt.image[_t])}}}S(C)&&x(o.TEXTURE_CUBE_MAP),pt.__version=xt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function yt(F,C,at,dt,xt,pt){const Ht=l.convert(at.format,at.colorSpace),Ct=l.convert(at.type),zt=U(at.internalFormat,Ht,Ct,at.colorSpace),pe=a.get(C),Et=a.get(at);if(Et.__renderTarget=C,!pe.__hasExternalTextures){const Bt=Math.max(1,C.width>>pt),Zt=Math.max(1,C.height>>pt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?n.texImage3D(xt,pt,zt,Bt,Zt,C.depth,0,Ht,Ct,null):n.texImage2D(xt,pt,zt,Bt,Zt,0,Ht,Ct,null)}n.bindFramebuffer(o.FRAMEBUFFER,F),fe(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,xt,Et.__webglTexture,0,se(C)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,xt,Et.__webglTexture,pt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(F,C,at){if(o.bindRenderbuffer(o.RENDERBUFFER,F),C.depthBuffer){const dt=C.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,pt=R(C.stencilBuffer,xt),Ht=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=se(C);fe(C)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,pt,C.width,C.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,pt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,pt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,F)}else{const dt=C.textures;for(let xt=0;xt<dt.length;xt++){const pt=dt[xt],Ht=l.convert(pt.format,pt.colorSpace),Ct=l.convert(pt.type),zt=U(pt.internalFormat,Ht,Ct,pt.colorSpace),pe=se(C);at&&fe(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,zt,C.width,C.height):fe(C)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,zt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,zt,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=a.get(C.depthTexture);dt.__renderTarget=C,(!dt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ot(C.depthTexture,0);const xt=dt.__webglTexture,pt=se(C);if(C.depthTexture.format===yo)fe(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(C.depthTexture.format===Co)fe(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Kt(F){const C=a.get(F),at=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const dt=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),dt){const xt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),C.__depthDisposeCallback=xt}C.__boundDepthTexture=dt}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Rt(C.__webglFramebuffer,F)}else if(at){C.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[dt]),C.__webglDepthbuffer[dt]===void 0)C.__webglDepthbuffer[dt]=o.createRenderbuffer(),Tt(C.__webglDepthbuffer[dt],F,!1);else{const xt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=C.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,pt)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),Tt(C.__webglDepthbuffer,F,!1);else{const dt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,xt)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(F,C,at){const dt=a.get(F);C!==void 0&&yt(dt.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Kt(F)}function Ee(F){const C=F.texture,at=a.get(F),dt=a.get(C);F.addEventListener("dispose",O);const xt=F.textures,pt=F.isWebGLCubeRenderTarget===!0,Ht=xt.length>1;if(Ht||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=C.version,c.memory.textures++),pt){at.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(C.mipmaps&&C.mipmaps.length>0){at.__webglFramebuffer[Ct]=[];for(let zt=0;zt<C.mipmaps.length;zt++)at.__webglFramebuffer[Ct][zt]=o.createFramebuffer()}else at.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ct=0;Ct<C.mipmaps.length;Ct++)at.__webglFramebuffer[Ct]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let Ct=0,zt=xt.length;Ct<zt;Ct++){const pe=a.get(xt[Ct]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),c.memory.textures++)}if(F.samples>0&&fe(F)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const zt=xt[Ct];at.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Ct]);const pe=l.convert(zt.format,zt.colorSpace),Et=l.convert(zt.type),Bt=U(zt.internalFormat,pe,Et,zt.colorSpace,F.isXRRenderTarget===!0),Zt=se(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Bt,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,at.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(at.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){n.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),St(o.TEXTURE_CUBE_MAP,C);for(let Ct=0;Ct<6;Ct++)if(C.mipmaps&&C.mipmaps.length>0)for(let zt=0;zt<C.mipmaps.length;zt++)yt(at.__webglFramebuffer[Ct][zt],F,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,zt);else yt(at.__webglFramebuffer[Ct],F,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(C)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ht){for(let Ct=0,zt=xt.length;Ct<zt;Ct++){const pe=xt[Ct],Et=a.get(pe);n.bindTexture(o.TEXTURE_2D,Et.__webglTexture),St(o.TEXTURE_2D,pe),yt(at.__webglFramebuffer,F,pe,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,0),S(pe)&&x(o.TEXTURE_2D)}n.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ct=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ct,dt.__webglTexture),St(Ct,C),C.mipmaps&&C.mipmaps.length>0)for(let zt=0;zt<C.mipmaps.length;zt++)yt(at.__webglFramebuffer[zt],F,C,o.COLOR_ATTACHMENT0,Ct,zt);else yt(at.__webglFramebuffer,F,C,o.COLOR_ATTACHMENT0,Ct,0);S(C)&&x(Ct),n.unbindTexture()}F.depthBuffer&&Kt(F)}function De(F){const C=F.textures;for(let at=0,dt=C.length;at<dt;at++){const xt=C[at];if(S(xt)){const pt=w(F),Ht=a.get(xt).__webglTexture;n.bindTexture(pt,Ht),x(pt),n.unbindTexture()}}}const ae=[],V=[];function bn(F){if(F.samples>0){if(fe(F)===!1){const C=F.textures,at=F.width,dt=F.height;let xt=o.COLOR_BUFFER_BIT;const pt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=a.get(F),Ct=C.length>1;if(Ct)for(let zt=0;zt<C.length;zt++)n.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<C.length;zt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const pe=a.get(C[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,at,dt,0,0,at,dt,xt,o.NEAREST),d===!0&&(ae.length=0,V.length=0,ae.push(o.COLOR_ATTACHMENT0+zt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ae.push(pt),V.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,V)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let zt=0;zt<C.length;zt++){n.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const pe=a.get(C[zt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,pe,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const C=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function se(F){return Math.min(s.maxSamples,F.samples)}function fe(F){const C=a.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function kt(F){const C=c.render.frame;_.get(F)!==C&&(_.set(F,C),F.update())}function Ue(F,C){const at=F.colorSpace,dt=F.format,xt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||at!==Do&&at!==gr&&(we.getTransfer(at)===ze?(dt!==qi||xt!==Ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),C}function Xt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=it,this.setTexture2D=ot,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=Pt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=fe}function Dw(o,t){function n(a,s=gr){let l;const c=we.getTransfer(s);if(a===Ha)return o.UNSIGNED_BYTE;if(a===vm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===xm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===kx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Gx)return o.BYTE;if(a===Vx)return o.SHORT;if(a===Zl)return o.UNSIGNED_SHORT;if(a===gm)return o.INT;if(a===gs)return o.UNSIGNED_INT;if(a===Ba)return o.FLOAT;if(a===iu)return o.HALF_FLOAT;if(a===Xx)return o.ALPHA;if(a===Wx)return o.RGB;if(a===qi)return o.RGBA;if(a===qx)return o.LUMINANCE;if(a===Yx)return o.LUMINANCE_ALPHA;if(a===yo)return o.DEPTH_COMPONENT;if(a===Co)return o.DEPTH_STENCIL;if(a===jx)return o.RED;if(a===ym)return o.RED_INTEGER;if(a===Zx)return o.RG;if(a===Sm)return o.RG_INTEGER;if(a===Mm)return o.RGBA_INTEGER;if(a===Xc||a===Wc||a===qc||a===Yc)if(c===ze)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Xc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Wc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===qc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Yc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Xc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Wc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===qc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Yc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===bp||a===Ap||a===Rp||a===wp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===bp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ap)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Rp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===wp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cp||a===Dp||a===Up)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Cp||a===Dp)return c===ze?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Up)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Lp||a===Np||a===Op||a===Pp||a===zp||a===Bp||a===Fp||a===Ip||a===Hp||a===Gp||a===Vp||a===kp||a===Xp||a===Wp)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Lp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Np)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Op)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Pp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===zp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Bp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Fp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ip)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Gp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Vp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===kp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Xp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Wp)return c===ze?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===jc||a===qp||a===Yp)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===jc)return c===ze?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===qp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Yp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Kx||a===jp||a===Zp||a===Kp)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===jc)return l.COMPRESSED_RED_RGTC1_EXT;if(a===jp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Zp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Kp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===wo?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const s=new Yn,l=t.properties.get(s);l.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ar({vertexShader:Uw,fragmentShader:Lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ra(new uu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ow extends Fo{constructor(t,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",d=1,p=null,_=null,g=null,v=null,y=null,E=null;const M=new Nw,S=n.getContextAttributes();let x=null,w=null;const U=[],R=[],D=new Ce;let P=null;const O=new mi;O.viewport=new $e;const B=new mi;B.viewport=new $e;const b=[O,B],A=new e1;let H=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ft=U[W];return ft===void 0&&(ft=new kd,U[W]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(W){let ft=U[W];return ft===void 0&&(ft=new kd,U[W]=ft),ft.getGripSpace()},this.getHand=function(W){let ft=U[W];return ft===void 0&&(ft=new kd,U[W]=ft),ft.getHandSpace()};function Q(W){const ft=R.indexOf(W.inputSource);if(ft===-1)return;const yt=U[ft];yt!==void 0&&(yt.update(W.inputSource,W.frame,p||c),yt.dispatchEvent({type:W.type,data:W.inputSource}))}function lt(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",ot);for(let W=0;W<U.length;W++){const ft=R[W];ft!==null&&(R[W]=null,U[W].disconnect(ft))}H=null,it=null,M.reset(),t.setRenderTarget(x),y=null,v=null,g=null,s=null,w=null,bt.stop(),a.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){l=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){f=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",ot),S.xrCompatible!==!0&&await n.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Tt=null,Rt=null;S.depth&&(Rt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=S.stencil?Co:yo,Tt=S.stencil?wo:gs);const Kt={colorFormat:n.RGBA8,depthFormat:Rt,scaleFactor:l};g=new XRWebGLBinding(s,n),v=g.createProjectionLayer(Kt),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),w=new vs(v.textureWidth,v.textureHeight,{format:qi,type:Ha,depthTexture:new hy(v.textureWidth,v.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,yt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),w=new vs(y.framebufferWidth,y.framebufferHeight,{format:qi,type:Ha,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await s.requestReferenceSpace(f),bt.setContext(s),bt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ot(W){for(let ft=0;ft<W.removed.length;ft++){const yt=W.removed[ft],Tt=R.indexOf(yt);Tt>=0&&(R[Tt]=null,U[Tt].disconnect(yt))}for(let ft=0;ft<W.added.length;ft++){const yt=W.added[ft];let Tt=R.indexOf(yt);if(Tt===-1){for(let Kt=0;Kt<U.length;Kt++)if(Kt>=R.length){R.push(yt),Tt=Kt;break}else if(R[Kt]===null){R[Kt]=yt,Tt=Kt;break}if(Tt===-1)break}const Rt=U[Tt];Rt&&Rt.connect(yt)}}const G=new rt,J=new rt;function X(W,ft,yt){G.setFromMatrixPosition(ft.matrixWorld),J.setFromMatrixPosition(yt.matrixWorld);const Tt=G.distanceTo(J),Rt=ft.projectionMatrix.elements,Kt=yt.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),Ee=Rt[14]/(Rt[10]+1),De=(Rt[9]+1)/Rt[5],ae=(Rt[9]-1)/Rt[5],V=(Rt[8]-1)/Rt[0],bn=(Kt[8]+1)/Kt[0],se=Pt*V,fe=Pt*bn,kt=Tt/(-V+bn),Ue=kt*-V;if(ft.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ue),W.translateZ(kt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Rt[10]===-1)W.projectionMatrix.copy(ft.projectionMatrix),W.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Xt=Pt+kt,F=Ee+kt,C=se-Ue,at=fe+(Tt-Ue),dt=De*Ee/F*Xt,xt=ae*Ee/F*Xt;W.projectionMatrix.makePerspective(C,at,dt,xt,Xt,F),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function gt(W,ft){ft===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ft.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ft=W.near,yt=W.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),A.near=B.near=O.near=ft,A.far=B.far=O.far=yt,(H!==A.near||it!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,it=A.far),O.layers.mask=W.layers.mask|2,B.layers.mask=W.layers.mask|4,A.layers.mask=O.layers.mask|B.layers.mask;const Tt=W.parent,Rt=A.cameras;gt(A,Tt);for(let Kt=0;Kt<Rt.length;Kt++)gt(Rt[Kt],Tt);Rt.length===2?X(A,O,B):A.projectionMatrix.copy(O.projectionMatrix),z(W,A,Tt)};function z(W,ft,yt){yt===null?W.matrix.copy(ft.matrixWorld):(W.matrix.copy(yt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ft.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ft.projectionMatrix),W.projectionMatrixInverse.copy(ft.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Qp*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(W){d=W,v!==null&&(v.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let et=null;function St(W,ft){if(_=ft.getViewerPose(p||c),E=ft,_!==null){const yt=_.views;y!==null&&(t.setRenderTargetFramebuffer(w,y.framebuffer),t.setRenderTarget(w));let Tt=!1;yt.length!==A.cameras.length&&(A.cameras.length=0,Tt=!0);for(let Pt=0;Pt<yt.length;Pt++){const Ee=yt[Pt];let De=null;if(y!==null)De=y.getViewport(Ee);else{const V=g.getViewSubImage(v,Ee);De=V.viewport,Pt===0&&(t.setRenderTargetTextures(w,V.colorTexture,v.ignoreDepthValues?void 0:V.depthStencilTexture),t.setRenderTarget(w))}let ae=b[Pt];ae===void 0&&(ae=new mi,ae.layers.enable(Pt),ae.viewport=new $e,b[Pt]=ae),ae.matrix.fromArray(Ee.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ee.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(De.x,De.y,De.width,De.height),Pt===0&&(A.matrix.copy(ae.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Tt===!0&&A.cameras.push(ae)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){const Pt=g.getDepthInformation(yt[0]);Pt&&Pt.isValid&&Pt.texture&&M.init(t,Pt,s.renderState)}}for(let yt=0;yt<U.length;yt++){const Tt=R[yt],Rt=U[yt];Tt!==null&&Rt!==void 0&&Rt.update(Tt,ft,p||c)}et&&et(W,ft),ft.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ft}),E=null}const bt=new _y;bt.setAnimationLoop(St),this.setAnimationLoop=function(W){et=W},this.dispose=function(){}}}const es=new ca,Pw=new Xe;function zw(o,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,sy(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,w,U,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),_(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,R)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,w,U):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===$n&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===$n&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const w=t.get(x),U=w.envMap,R=w.envMapRotation;U&&(S.envMap.value=U,es.copy(R),es.x*=-1,es.y*=-1,es.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),S.envMapRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(es)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,w,U){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*w,S.scale.value=U*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,w){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const w=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function Bw(o,t,n,a){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,U){const R=U.program;a.uniformBlockBinding(w,R)}function p(w,U){let R=s[w.id];R===void 0&&(E(w),R=_(w),s[w.id]=R,w.addEventListener("dispose",S));const D=U.program;a.updateUBOMapping(w,D);const P=t.render.frame;l[w.id]!==P&&(v(w),l[w.id]=P)}function _(w){const U=g();w.__bindingPointIndex=U;const R=o.createBuffer(),D=w.__size,P=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,D,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,R),R}function g(){for(let w=0;w<f;w++)if(c.indexOf(w)===-1)return c.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const U=s[w.id],R=w.uniforms,D=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let P=0,O=R.length;P<O;P++){const B=Array.isArray(R[P])?R[P]:[R[P]];for(let b=0,A=B.length;b<A;b++){const H=B[b];if(y(H,P,b,D)===!0){const it=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let ot=0;ot<Q.length;ot++){const G=Q[ot],J=M(G);typeof G=="number"||typeof G=="boolean"?(H.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,it+lt,H.__data)):G.isMatrix3?(H.__data[0]=G.elements[0],H.__data[1]=G.elements[1],H.__data[2]=G.elements[2],H.__data[3]=0,H.__data[4]=G.elements[3],H.__data[5]=G.elements[4],H.__data[6]=G.elements[5],H.__data[7]=0,H.__data[8]=G.elements[6],H.__data[9]=G.elements[7],H.__data[10]=G.elements[8],H.__data[11]=0):(G.toArray(H.__data,lt),lt+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(w,U,R,D){const P=w.value,O=U+"_"+R;if(D[O]===void 0)return typeof P=="number"||typeof P=="boolean"?D[O]=P:D[O]=P.clone(),!0;{const B=D[O];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return D[O]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function E(w){const U=w.uniforms;let R=0;const D=16;for(let O=0,B=U.length;O<B;O++){const b=Array.isArray(U[O])?U[O]:[U[O]];for(let A=0,H=b.length;A<H;A++){const it=b[A],Q=Array.isArray(it.value)?it.value:[it.value];for(let lt=0,ot=Q.length;lt<ot;lt++){const G=Q[lt],J=M(G),X=R%D,gt=X%J.boundary,z=X+gt;R+=gt,z!==0&&D-z<J.storage&&(R+=D-z),it.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=R,R+=J.storage}}}const P=R%D;return P>0&&(R+=D-P),w.__size=R,w.__cache={},this}function M(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),U}function S(w){const U=w.target;U.removeEventListener("dispose",S);const R=c.indexOf(U.__bindingPointIndex);c.splice(R,1),o.deleteBuffer(s[U.id]),delete s[U.id],delete l[U.id]}function x(){for(const w in s)o.deleteBuffer(s[w]);c=[],s={},l={}}return{bind:d,update:p,dispose:x}}class Sy{constructor(t={}){const{canvas:n=gT(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const w=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oi,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let D=!1,P=0,O=0,B=null,b=-1,A=null;const H=new $e,it=new $e;let Q=null;const lt=new Me(0);let ot=0,G=n.width,J=n.height,X=1,gt=null,z=null;const et=new $e(0,0,G,J),St=new $e(0,0,G,J);let bt=!1;const W=new bm;let ft=!1,yt=!1;this.transmissionResolutionScale=1;const Tt=new Xe,Rt=new Xe,Kt=new rt,Pt=new $e,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function ae(){return B===null?X:1}let V=a;function bn(N,j){return n.getContext(N,j)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_m}`),n.addEventListener("webglcontextlost",_t,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",Dt,!1),V===null){const j="webgl2";if(V=bn(j,N),V===null)throw bn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let se,fe,kt,Ue,Xt,F,C,at,dt,xt,pt,Ht,Ct,zt,pe,Et,Bt,Zt,Gt,Ft,re,Yt,Le,Y;function Lt(){se=new jA(V),se.init(),Yt=new Dw(V,se),fe=new GA(V,se,t,Yt),kt=new ww(V,se),fe.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),Ue=new QA(V),Xt=new mw,F=new Cw(V,se,kt,Xt,fe,Yt,Ue),C=new kA(R),at=new YA(R),dt=new i1(V),Le=new IA(V,dt),xt=new ZA(V,dt,Ue,Le),pt=new $A(V,xt,dt,Ue),Gt=new JA(V,fe,F),Et=new VA(Xt),Ht=new pw(R,C,at,se,fe,Le,Et),Ct=new zw(R,Xt),zt=new gw,pe=new Ew(se),Zt=new FA(R,C,at,kt,pt,y,d),Bt=new Aw(R,pt,fe),Y=new Bw(V,Ue,fe,kt),Ft=new HA(V,se,Ue),re=new KA(V,se,Ue),Ue.programs=Ht.programs,R.capabilities=fe,R.extensions=se,R.properties=Xt,R.renderLists=zt,R.shadowMap=Bt,R.state=kt,R.info=Ue}Lt();const ut=new Ow(R,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=se.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=se.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(N){N!==void 0&&(X=N,this.setSize(G,J,!1))},this.getSize=function(N){return N.set(G,J)},this.setSize=function(N,j,nt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=N,J=j,n.width=Math.floor(N*X),n.height=Math.floor(j*X),nt===!0&&(n.style.width=N+"px",n.style.height=j+"px"),this.setViewport(0,0,N,j)},this.getDrawingBufferSize=function(N){return N.set(G*X,J*X).floor()},this.setDrawingBufferSize=function(N,j,nt){G=N,J=j,X=nt,n.width=Math.floor(N*nt),n.height=Math.floor(j*nt),this.setViewport(0,0,N,j)},this.getCurrentViewport=function(N){return N.copy(H)},this.getViewport=function(N){return N.copy(et)},this.setViewport=function(N,j,nt,$){N.isVector4?et.set(N.x,N.y,N.z,N.w):et.set(N,j,nt,$),kt.viewport(H.copy(et).multiplyScalar(X).round())},this.getScissor=function(N){return N.copy(St)},this.setScissor=function(N,j,nt,$){N.isVector4?St.set(N.x,N.y,N.z,N.w):St.set(N,j,nt,$),kt.scissor(it.copy(St).multiplyScalar(X).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(N){kt.setScissorTest(bt=N)},this.setOpaqueSort=function(N){gt=N},this.setTransparentSort=function(N){z=N},this.getClearColor=function(N){return N.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(N=!0,j=!0,nt=!0){let $=0;if(N){let Z=!1;if(B!==null){const Mt=B.texture.format;Z=Mt===Mm||Mt===Sm||Mt===ym}if(Z){const Mt=B.texture.type,At=Mt===Ha||Mt===gs||Mt===Zl||Mt===wo||Mt===vm||Mt===xm,Ot=Zt.getClearColor(),Nt=Zt.getClearAlpha(),te=Ot.r,ee=Ot.g,qt=Ot.b;At?(E[0]=te,E[1]=ee,E[2]=qt,E[3]=Nt,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=te,M[1]=ee,M[2]=qt,M[3]=Nt,V.clearBufferiv(V.COLOR,0,M))}else $|=V.COLOR_BUFFER_BIT}j&&($|=V.DEPTH_BUFFER_BIT),nt&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",Dt,!1),Zt.dispose(),zt.dispose(),pe.dispose(),Xt.dispose(),C.dispose(),at.dispose(),pt.dispose(),Le.dispose(),Y.dispose(),Ht.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",fu),ut.removeEventListener("sessionend",Ho),ji.stop()};function _t(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const N=Ue.autoReset,j=Bt.enabled,nt=Bt.autoUpdate,$=Bt.needsUpdate,Z=Bt.type;Lt(),Ue.autoReset=N,Bt.enabled=j,Bt.autoUpdate=nt,Bt.needsUpdate=$,Bt.type=Z}function Dt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function $t(N){const j=N.target;j.removeEventListener("dispose",$t),Ve(j)}function Ve(N){cn(N),Xt.remove(N)}function cn(N){const j=Xt.get(N).programs;j!==void 0&&(j.forEach(function(nt){Ht.releaseProgram(nt)}),N.isShaderMaterial&&Ht.releaseShaderCache(N))}this.renderBufferDirect=function(N,j,nt,$,Z,Mt){j===null&&(j=Ee);const At=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=gf(N,j,nt,$,Z);kt.setMaterial($,At);let Nt=nt.index,te=1;if($.wireframe===!0){if(Nt=xt.getWireframeAttribute(nt),Nt===void 0)return;te=2}const ee=nt.drawRange,qt=nt.attributes.position;let me=ee.start*te,_e=(ee.start+ee.count)*te;Mt!==null&&(me=Math.max(me,Mt.start*te),_e=Math.min(_e,(Mt.start+Mt.count)*te)),Nt!==null?(me=Math.max(me,0),_e=Math.min(_e,Nt.count)):qt!=null&&(me=Math.max(me,0),_e=Math.min(_e,qt.count));const Ge=_e-me;if(Ge<0||Ge===1/0)return;Le.setup(Z,$,Ot,nt,Nt);let be,ne=Ft;if(Nt!==null&&(be=dt.get(Nt),ne=re,ne.setIndex(be)),Z.isMesh)$.wireframe===!0?(kt.setLineWidth($.wireframeLinewidth*ae()),ne.setMode(V.LINES)):ne.setMode(V.TRIANGLES);else if(Z.isLine){let jt=$.linewidth;jt===void 0&&(jt=1),kt.setLineWidth(jt*ae()),Z.isLineSegments?ne.setMode(V.LINES):Z.isLineLoop?ne.setMode(V.LINE_LOOP):ne.setMode(V.LINE_STRIP)}else Z.isPoints?ne.setMode(V.POINTS):Z.isSprite&&ne.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ne.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const jt=Z._multiDrawStarts,dn=Z._multiDrawCounts,ge=Z._multiDrawCount,jn=Nt?dt.get(Nt).bytesPerElement:1,Bi=Xt.get($).currentProgram.getUniforms();for(let Gn=0;Gn<ge;Gn++)Bi.setValue(V,"_gl_DrawID",Gn),ne.render(jt[Gn]/jn,dn[Gn])}else if(Z.isInstancedMesh)ne.renderInstances(me,Ge,Z.count);else if(nt.isInstancedBufferGeometry){const jt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,dn=Math.min(nt.instanceCount,jt);ne.renderInstances(me,Ge,dn)}else ne.render(me,Ge)};function Te(N,j,nt){N.transparent===!0&&N.side===na&&N.forceSinglePass===!1?(N.side=$n,N.needsUpdate=!0,hn(N,j,nt),N.side=br,N.needsUpdate=!0,hn(N,j,nt),N.side=na):hn(N,j,nt)}this.compile=function(N,j,nt=null){nt===null&&(nt=N),x=pe.get(nt),x.init(j),U.push(x),nt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),N!==nt&&N.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const $=new Set;return N.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Mt=Z.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const Ot=Mt[At];Te(Ot,nt,Z),$.add(Ot)}else Te(Mt,nt,Z),$.add(Mt)}),x=U.pop(),$},this.compileAsync=function(N,j,nt=null){const $=this.compile(N,j,nt);return new Promise(Z=>{function Mt(){if($.forEach(function(At){Xt.get(At).currentProgram.isReady()&&$.delete(At)}),$.size===0){Z(N);return}setTimeout(Mt,10)}se.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let In=null;function Hn(N){In&&In(N)}function fu(){ji.stop()}function Ho(){ji.start()}const ji=new _y;ji.setAnimationLoop(Hn),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(N){In=N,ut.setAnimationLoop(N),N===null?ji.stop():ji.start()},ut.addEventListener("sessionstart",fu),ut.addEventListener("sessionend",Ho),this.render=function(N,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),N.isScene===!0&&N.onBeforeRender(R,N,j,B),x=pe.get(N,U.length),x.init(j),U.push(x),Rt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,ft=Et.init(this.clippingPlanes,yt),S=zt.get(N,w.length),S.init(),w.push(S),ut.enabled===!0&&ut.isPresenting===!0){const Mt=R.xr.getDepthSensingMesh();Mt!==null&&Ms(Mt,j,-1/0,R.sortObjects)}Ms(N,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(gt,z),De=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,De&&Zt.addToRenderList(S,N),this.info.render.frame++,ft===!0&&Et.beginShadows();const nt=x.state.shadowsArray;Bt.render(nt,N,j),ft===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=S.opaque,Z=S.transmissive;if(x.setupLights(),j.isArrayCamera){const Mt=j.cameras;if(Z.length>0)for(let At=0,Ot=Mt.length;At<Ot;At++){const Nt=Mt[At];hu($,Z,N,Nt)}De&&Zt.render(N);for(let At=0,Ot=Mt.length;At<Ot;At++){const Nt=Mt[At];Go(S,N,Nt,Nt.viewport)}}else Z.length>0&&hu($,Z,N,j),De&&Zt.render(N),Go(S,N,j);B!==null&&O===0&&(F.updateMultisampleRenderTarget(B),F.updateRenderTargetMipmap(B)),N.isScene===!0&&N.onAfterRender(R,N,j),Le.resetDefaultState(),b=-1,A=null,U.pop(),U.length>0?(x=U[U.length-1],ft===!0&&Et.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Ms(N,j,nt,$){if(N.visible===!1)return;if(N.layers.test(j.layers)){if(N.isGroup)nt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(j);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||W.intersectsSprite(N)){$&&Pt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Rt);const At=pt.update(N),Ot=N.material;Ot.visible&&S.push(N,At,Ot,nt,Pt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||W.intersectsObject(N))){const At=pt.update(N),Ot=N.material;if($&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Pt.copy(N.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Pt.copy(At.boundingSphere.center)),Pt.applyMatrix4(N.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=At.groups;for(let te=0,ee=Nt.length;te<ee;te++){const qt=Nt[te],me=Ot[qt.materialIndex];me&&me.visible&&S.push(N,At,me,nt,Pt.z,qt)}}else Ot.visible&&S.push(N,At,Ot,nt,Pt.z,null)}}const Mt=N.children;for(let At=0,Ot=Mt.length;At<Ot;At++)Ms(Mt[At],j,nt,$)}function Go(N,j,nt,$){const Z=N.opaque,Mt=N.transmissive,At=N.transparent;x.setupLightsView(nt),ft===!0&&Et.setGlobalState(R.clippingPlanes,nt),$&&kt.viewport(H.copy($)),Z.length>0&&ri(Z,j,nt),Mt.length>0&&ri(Mt,j,nt),At.length>0&&ri(At,j,nt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function hu(N,j,nt,$){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new vs(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?iu:Ha,minFilter:fs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Mt=x.state.transmissionRenderTarget[$.id],At=$.viewport||H;Mt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);const Ot=R.getRenderTarget();R.setRenderTarget(Mt),R.getClearColor(lt),ot=R.getClearAlpha(),ot<1&&R.setClearColor(16777215,.5),R.clear(),De&&Zt.render(nt);const Nt=R.toneMapping;R.toneMapping=Mr;const te=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),ft===!0&&Et.setGlobalState(R.clippingPlanes,$),ri(N,nt,$),F.updateMultisampleRenderTarget(Mt),F.updateRenderTargetMipmap(Mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let qt=0,me=j.length;qt<me;qt++){const _e=j[qt],Ge=_e.object,be=_e.geometry,ne=_e.material,jt=_e.group;if(ne.side===na&&Ge.layers.test($.layers)){const dn=ne.side;ne.side=$n,ne.needsUpdate=!0,fn(Ge,nt,$,be,ne,jt),ne.side=dn,ne.needsUpdate=!0,ee=!0}}ee===!0&&(F.updateMultisampleRenderTarget(Mt),F.updateRenderTargetMipmap(Mt))}R.setRenderTarget(Ot),R.setClearColor(lt,ot),te!==void 0&&($.viewport=te),R.toneMapping=Nt}function ri(N,j,nt){const $=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Mt=N.length;Z<Mt;Z++){const At=N[Z],Ot=At.object,Nt=At.geometry,te=$===null?At.material:$,ee=At.group;Ot.layers.test(nt.layers)&&fn(Ot,j,nt,Nt,te,ee)}}function fn(N,j,nt,$,Z,Mt){N.onBeforeRender(R,j,nt,$,Z,Mt),N.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Z.onBeforeRender(R,j,nt,$,N,Mt),Z.transparent===!0&&Z.side===na&&Z.forceSinglePass===!1?(Z.side=$n,Z.needsUpdate=!0,R.renderBufferDirect(nt,j,$,Z,N,Mt),Z.side=br,Z.needsUpdate=!0,R.renderBufferDirect(nt,j,$,Z,N,Mt),Z.side=na):R.renderBufferDirect(nt,j,$,Z,N,Mt),N.onAfterRender(R,j,nt,$,Z,Mt)}function hn(N,j,nt){j.isScene!==!0&&(j=Ee);const $=Xt.get(N),Z=x.state.lights,Mt=x.state.shadowsArray,At=Z.state.version,Ot=Ht.getParameters(N,Z.state,Mt,j,nt),Nt=Ht.getProgramCacheKey(Ot);let te=$.programs;$.environment=N.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(N.isMeshStandardMaterial?at:C).get(N.envMap||$.environment),$.envMapRotation=$.environment!==null&&N.envMap===null?j.environmentRotation:N.envMapRotation,te===void 0&&(N.addEventListener("dispose",$t),te=new Map,$.programs=te);let ee=te.get(Nt);if(ee!==void 0){if($.currentProgram===ee&&$.lightsStateVersion===At)return Es(N,Ot),ee}else Ot.uniforms=Ht.getUniforms(N),N.onBeforeCompile(Ot,R),ee=Ht.acquireProgram(Ot,Nt),te.set(Nt,ee),$.uniforms=Ot.uniforms;const qt=$.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(qt.clippingPlanes=Et.uniform),Es(N,Ot),$.needsLights=du(N),$.lightsStateVersion=At,$.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=ee,$.uniformsList=null,ee}function ha(N){if(N.uniformsList===null){const j=N.currentProgram.getUniforms();N.uniformsList=Zc.seqWithValue(j.seq,N.uniforms)}return N.uniformsList}function Es(N,j){const nt=Xt.get(N);nt.outputColorSpace=j.outputColorSpace,nt.batching=j.batching,nt.batchingColor=j.batchingColor,nt.instancing=j.instancing,nt.instancingColor=j.instancingColor,nt.instancingMorph=j.instancingMorph,nt.skinning=j.skinning,nt.morphTargets=j.morphTargets,nt.morphNormals=j.morphNormals,nt.morphColors=j.morphColors,nt.morphTargetsCount=j.morphTargetsCount,nt.numClippingPlanes=j.numClippingPlanes,nt.numIntersection=j.numClipIntersection,nt.vertexAlphas=j.vertexAlphas,nt.vertexTangents=j.vertexTangents,nt.toneMapping=j.toneMapping}function gf(N,j,nt,$,Z){j.isScene!==!0&&(j=Ee),F.resetTextureUnits();const Mt=j.fog,At=$.isMeshStandardMaterial?j.environment:null,Ot=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Do,Nt=($.isMeshStandardMaterial?at:C).get($.envMap||At),te=$.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ee=!!nt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qt=!!nt.morphAttributes.position,me=!!nt.morphAttributes.normal,_e=!!nt.morphAttributes.color;let Ge=Mr;$.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ge=R.toneMapping);const be=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ne=be!==void 0?be.length:0,jt=Xt.get($),dn=x.state.lights;if(ft===!0&&(yt===!0||N!==A)){const Ze=N===A&&$.id===b;Et.setState($,N,Ze)}let ge=!1;$.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==dn.state.version||jt.outputColorSpace!==Ot||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Nt||$.fog===!0&&jt.fog!==Mt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Et.numPlanes||jt.numIntersection!==Et.numIntersection)||jt.vertexAlphas!==te||jt.vertexTangents!==ee||jt.morphTargets!==qt||jt.morphNormals!==me||jt.morphColors!==_e||jt.toneMapping!==Ge||jt.morphTargetsCount!==ne)&&(ge=!0):(ge=!0,jt.__version=$.version);let jn=jt.currentProgram;ge===!0&&(jn=hn($,j,Z));let Bi=!1,Gn=!1,vn=!1;const Ne=jn.getUniforms(),Vn=jt.uniforms;if(kt.useProgram(jn.program)&&(Bi=!0,Gn=!0,vn=!0),$.id!==b&&(b=$.id,Gn=!0),Bi||A!==N){kt.buffers.depth.getReversed()?(Tt.copy(N.projectionMatrix),xT(Tt),yT(Tt),Ne.setValue(V,"projectionMatrix",Tt)):Ne.setValue(V,"projectionMatrix",N.projectionMatrix),Ne.setValue(V,"viewMatrix",N.matrixWorldInverse);const An=Ne.map.cameraPosition;An!==void 0&&An.setValue(V,Kt.setFromMatrixPosition(N.matrixWorld)),fe.logarithmicDepthBuffer&&Ne.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ne.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),A!==N&&(A=N,Gn=!0,vn=!0)}if(Z.isSkinnedMesh){Ne.setOptional(V,Z,"bindMatrix"),Ne.setOptional(V,Z,"bindMatrixInverse");const Ze=Z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ne.setValue(V,"boneTexture",Ze.boneTexture,F))}Z.isBatchedMesh&&(Ne.setOptional(V,Z,"batchingTexture"),Ne.setValue(V,"batchingTexture",Z._matricesTexture,F),Ne.setOptional(V,Z,"batchingIdTexture"),Ne.setValue(V,"batchingIdTexture",Z._indirectTexture,F),Ne.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ne.setValue(V,"batchingColorTexture",Z._colorsTexture,F));const Un=nt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Gt.update(Z,nt,jn),(Gn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,Ne.setValue(V,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Vn.envMap.value=Nt,Vn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(Vn.envMapIntensity.value=j.environmentIntensity),Gn&&(Ne.setValue(V,"toneMappingExposure",R.toneMappingExposure),jt.needsLights&&vf(Vn,vn),Mt&&$.fog===!0&&Ct.refreshFogUniforms(Vn,Mt),Ct.refreshMaterialUniforms(Vn,$,X,J,x.state.transmissionRenderTarget[N.id]),Zc.upload(V,ha(jt),Vn,F)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Zc.upload(V,ha(jt),Vn,F),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ne.setValue(V,"center",Z.center),Ne.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Ne.setValue(V,"normalMatrix",Z.normalMatrix),Ne.setValue(V,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ze=$.uniformsGroups;for(let An=0,Ts=Ze.length;An<Ts;An++){const Zn=Ze[An];Y.update(Zn,jn),Y.bind(Zn,jn)}}return jn}function vf(N,j){N.ambientLightColor.needsUpdate=j,N.lightProbe.needsUpdate=j,N.directionalLights.needsUpdate=j,N.directionalLightShadows.needsUpdate=j,N.pointLights.needsUpdate=j,N.pointLightShadows.needsUpdate=j,N.spotLights.needsUpdate=j,N.spotLightShadows.needsUpdate=j,N.rectAreaLights.needsUpdate=j,N.hemisphereLights.needsUpdate=j}function du(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(N,j,nt){Xt.get(N.texture).__webglTexture=j,Xt.get(N.depthTexture).__webglTexture=nt;const $=Xt.get(N);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=nt===void 0,$.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,j){const nt=Xt.get(N);nt.__webglFramebuffer=j,nt.__useDefaultFramebuffer=j===void 0};const Dr=V.createFramebuffer();this.setRenderTarget=function(N,j=0,nt=0){B=N,P=j,O=nt;let $=!0,Z=null,Mt=!1,At=!1;if(N){const Nt=Xt.get(N);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),$=!1;else if(Nt.__webglFramebuffer===void 0)F.setupRenderTarget(N);else if(Nt.__hasExternalTextures)F.rebindTextures(N,Xt.get(N.texture).__webglTexture,Xt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const qt=N.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&Xt.has(qt)&&(N.width!==qt.image.width||N.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(N)}}const te=N.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(At=!0);const ee=Xt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ee[j])?Z=ee[j][nt]:Z=ee[j],Mt=!0):N.samples>0&&F.useMultisampledRTT(N)===!1?Z=Xt.get(N).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[nt]:Z=ee,H.copy(N.viewport),it.copy(N.scissor),Q=N.scissorTest}else H.copy(et).multiplyScalar(X).floor(),it.copy(St).multiplyScalar(X).floor(),Q=bt;if(nt!==0&&(Z=Dr),kt.bindFramebuffer(V.FRAMEBUFFER,Z)&&$&&kt.drawBuffers(N,Z),kt.viewport(H),kt.scissor(it),kt.setScissorTest(Q),Mt){const Nt=Xt.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,nt)}else if(At){const Nt=Xt.get(N.texture),te=j;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nt.__webglTexture,nt,te)}else if(N!==null&&nt!==0){const Nt=Xt.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,nt)}b=-1},this.readRenderTargetPixels=function(N,j,nt,$,Z,Mt,At){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&At!==void 0&&(Ot=Ot[At]),Ot){kt.bindFramebuffer(V.FRAMEBUFFER,Ot);try{const Nt=N.texture,te=Nt.format,ee=Nt.type;if(!fe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=N.width-$&&nt>=0&&nt<=N.height-Z&&V.readPixels(j,nt,$,Z,Yt.convert(te),Yt.convert(ee),Mt)}finally{const Nt=B!==null?Xt.get(B).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(N,j,nt,$,Z,Mt,At){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&At!==void 0&&(Ot=Ot[At]),Ot){const Nt=N.texture,te=Nt.format,ee=Nt.type;if(!fe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=N.width-$&&nt>=0&&nt<=N.height-Z){kt.bindFramebuffer(V.FRAMEBUFFER,Ot);const qt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,qt),V.bufferData(V.PIXEL_PACK_BUFFER,Mt.byteLength,V.STREAM_READ),V.readPixels(j,nt,$,Z,Yt.convert(te),Yt.convert(ee),0);const me=B!==null?Xt.get(B).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,me);const _e=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await vT(V,_e,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,qt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Mt),V.deleteBuffer(qt),V.deleteSync(_e),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,j=null,nt=0){N.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,N=arguments[1]);const $=Math.pow(2,-nt),Z=Math.floor(N.image.width*$),Mt=Math.floor(N.image.height*$),At=j!==null?j.x:0,Ot=j!==null?j.y:0;F.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,nt,0,0,At,Ot,Z,Mt),kt.unbindTexture()};const Vo=V.createFramebuffer(),da=V.createFramebuffer();this.copyTextureToTexture=function(N,j,nt=null,$=null,Z=0,Mt=null){N.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,N=arguments[1],j=arguments[2],Mt=arguments[3]||0,nt=null),Mt===null&&(Z!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Z,Z=0):Mt=0);let At,Ot,Nt,te,ee,qt,me,_e,Ge;const be=N.isCompressedTexture?N.mipmaps[Mt]:N.image;if(nt!==null)At=nt.max.x-nt.min.x,Ot=nt.max.y-nt.min.y,Nt=nt.isBox3?nt.max.z-nt.min.z:1,te=nt.min.x,ee=nt.min.y,qt=nt.isBox3?nt.min.z:0;else{const Un=Math.pow(2,-Z);At=Math.floor(be.width*Un),Ot=Math.floor(be.height*Un),N.isDataArrayTexture?Nt=be.depth:N.isData3DTexture?Nt=Math.floor(be.depth*Un):Nt=1,te=0,ee=0,qt=0}$!==null?(me=$.x,_e=$.y,Ge=$.z):(me=0,_e=0,Ge=0);const ne=Yt.convert(j.format),jt=Yt.convert(j.type);let dn;j.isData3DTexture?(F.setTexture3D(j,0),dn=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(F.setTexture2DArray(j,0),dn=V.TEXTURE_2D_ARRAY):(F.setTexture2D(j,0),dn=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const ge=V.getParameter(V.UNPACK_ROW_LENGTH),jn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bi=V.getParameter(V.UNPACK_SKIP_PIXELS),Gn=V.getParameter(V.UNPACK_SKIP_ROWS),vn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,be.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,be.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,te),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const Ne=N.isDataArrayTexture||N.isData3DTexture,Vn=j.isDataArrayTexture||j.isData3DTexture;if(N.isDepthTexture){const Un=Xt.get(N),Ze=Xt.get(j),An=Xt.get(Un.__renderTarget),Ts=Xt.get(Ze.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,An.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Zn=0;Zn<Nt;Zn++)Ne&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xt.get(N).__webglTexture,Z,qt+Zn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xt.get(j).__webglTexture,Mt,Ge+Zn)),V.blitFramebuffer(te,ee,At,Ot,me,_e,At,Ot,V.DEPTH_BUFFER_BIT,V.NEAREST);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||N.isRenderTargetTexture||Xt.has(N)){const Un=Xt.get(N),Ze=Xt.get(j);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Vo),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,da);for(let An=0;An<Nt;An++)Ne?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Un.__webglTexture,Z,qt+An):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Un.__webglTexture,Z),Vn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ze.__webglTexture,Mt,Ge+An):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ze.__webglTexture,Mt),Z!==0?V.blitFramebuffer(te,ee,At,Ot,me,_e,At,Ot,V.COLOR_BUFFER_BIT,V.NEAREST):Vn?V.copyTexSubImage3D(dn,Mt,me,_e,Ge+An,te,ee,At,Ot):V.copyTexSubImage2D(dn,Mt,me,_e,te,ee,At,Ot);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Vn?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(dn,Mt,me,_e,Ge,At,Ot,Nt,ne,jt,be.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(dn,Mt,me,_e,Ge,At,Ot,Nt,ne,be.data):V.texSubImage3D(dn,Mt,me,_e,Ge,At,Ot,Nt,ne,jt,be):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Mt,me,_e,At,Ot,ne,jt,be.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Mt,me,_e,be.width,be.height,ne,be.data):V.texSubImage2D(V.TEXTURE_2D,Mt,me,_e,At,Ot,ne,jt,be);V.pixelStorei(V.UNPACK_ROW_LENGTH,ge),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Gn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,vn),Mt===0&&j.generateMipmaps&&V.generateMipmap(dn),kt.unbindTexture()},this.copyTextureToTexture3D=function(N,j,nt=null,$=null,Z=0){return N.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,$=arguments[1]||null,N=arguments[2],j=arguments[3],Z=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,j,nt,$,Z)},this.initRenderTarget=function(N){Xt.get(N).__webglFramebuffer===void 0&&F.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?F.setTextureCube(N,0):N.isData3DTexture?F.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?F.setTexture2DArray(N,0):F.setTexture2D(N,0),kt.unbindTexture()},this.resetState=function(){P=0,O=0,B=null,kt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}const Fw=()=>{const o=di.useRef(null);return di.useEffect(()=>{if(!o.current)return;const t=new uy,n=new mi(65,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=10;const a=new Sy({alpha:!0,antialias:!0});a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(0,0),o.current.appendChild(a.domElement);const s=Math.min(100,Math.floor(window.innerWidth/20)),l=new zi,c=new Am({color:45088,size:.2,transparent:!0,opacity:.7,blending:fp}),f=new Float32Array(s*3),d=[];for(let D=0;D<s;D++){const P=D*3;f[P]=(Math.random()-.5)*window.innerWidth*.05,f[P+1]=(Math.random()-.5)*window.innerHeight*.05,f[P+2]=(Math.random()-.5)*5,d.push({x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.005})}l.setAttribute("position",new vi(f,2));const p=new fy(l,c);t.add(p);const _=new cy({color:45088,transparent:!0,opacity:.2}),g=new zi,v=[],y=new jT(g,_);t.add(y);const E=new my(16777215,.3);t.add(E);const M=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",M);const S=new Ce;let x=0,w=0;const U=D=>{S.x=D.clientX/window.innerWidth*2-1,S.y=-(D.clientY/window.innerHeight)*2+1,x=D.clientX-window.innerWidth/2,w=D.clientY-window.innerHeight/2};window.addEventListener("mousemove",U);const R=()=>{requestAnimationFrame(R);const D=l.attributes.position.array;for(let P=0;P<s;P++){const O=P*3;D[O]+=d[P].x,D[O+1]+=d[P].y,D[O+2]+=d[P].z,D[O]>10&&(D[O]=-10),D[O]<-10&&(D[O]=10),D[O+1]>5&&(D[O+1]=-5),D[O+1]<-5&&(D[O+1]=5),D[O+2]>5&&(D[O+2]=-5),D[O+2]<-5&&(D[O+2]=5)}l.attributes.position.needsUpdate=!0,n.position.x+=(x*1e-4-n.position.x)*.05,n.position.y+=(-w*1e-4-n.position.y)*.05,n.lookAt(t.position),v.length=0;for(let P=0;P<s;P++){const O=P*3,B=new rt(D[O],D[O+1],D[O+2]);for(let b=P+1;b<s;b++){const A=b*3,H=new rt(D[A],D[A+1],D[A+2]);B.distanceTo(H)<3&&(v.push(B.x,B.y,B.z),v.push(H.x,H.y,H.z))}}g.setAttribute("position",new oa(v,3)),a.render(t,n)};return R(),()=>{window.removeEventListener("resize",M),window.removeEventListener("mousemove",U),o.current&&o.current.removeChild(a.domElement),l.dispose(),c.dispose(),g.dispose(),_.dispose(),a.dispose()}},[]),Qt.jsx("div",{ref:o,className:"hero-background"})},Iw=()=>Qt.jsxs("section",{className:"hero-main",children:[Qt.jsx(Fw,{}),Qt.jsxs("div",{className:"hero-container",children:[Qt.jsxs("div",{className:"colored-bar",children:[Qt.jsx("img",{src:"./src/images/Text.png",alt:"hand-icon"}),Qt.jsx("span",{className:"colored-text",children:" Let's have a tour "})]}),Qt.jsxs("div",{className:"hero-content",children:[Qt.jsxs("h1",{className:"hero-heading",children:["Streamline Your Sustainability Reporting With",Qt.jsx("span",{className:"highlight",children:" CARBON CRUNCH"})]}),Qt.jsxs("p",{className:"hero-subheading",children:[Qt.jsx("span",{className:"highlight",children:"90% "})," With Accurate Carbon Calculations Trusted by Industry Leaders"]}),Qt.jsxs("div",{className:"hero-btn",children:[Qt.jsx("button",{className:"calculator-btn",children:" Free Calculator"}),Qt.jsx("button",{className:"book-demo-btn",children:" Book Demo"})]})]})]})]});function Pa(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function My(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lo={duration:.5,overwrite:!1,delay:0},wm,Dn,ke,la=1e8,Bn=1/la,tm=Math.PI*2,Hw=tm/4,Gw=0,Ey=Math.sqrt,Vw=Math.cos,kw=Math.sin,Tn=function(t){return typeof t=="string"},tn=function(t){return typeof t=="function"},Ga=function(t){return typeof t=="number"},Cm=function(t){return typeof t>"u"},fa=function(t){return typeof t=="object"},ti=function(t){return t!==!1},Dm=function(){return typeof window<"u"},kc=function(t){return tn(t)||Tn(t)},Ty=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,em=/(?:-?\.?\d|\.)+/gi,by=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$d=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ay=/[+-]=-?[.\d]+/,Ry=/[^,'"\[\]\s]+/gi,Xw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ye,ta,nm,Um,yi={},rf={},wy,Cy=function(t){return(rf=No(t,yi))&&ai},Lm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Kl=function(t,n){return!n&&console.warn(t)},Dy=function(t,n){return t&&(yi[t]=n)&&rf&&(rf[t]=n)||yi},Ql=function(){return 0},Ww={suppressEvents:!0,isStart:!0,kill:!1},Kc={suppressEvents:!0,kill:!1},qw={suppressEvents:!0},Nm={},Er=[],im={},Uy,pi={},tp={},mx=30,Qc=[],Om="",Pm=function(t){var n=t[0],a,s;if(fa(n)||tn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=Qc.length;s--&&!Qc[s].targetTest(n););a=Qc[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new eS(t[s],a)))||t.splice(s,1);return t},ds=function(t){return t._gsap||Pm(Pi(t))[0]._gsap},Ly=function(t,n,a){return(a=t[n])&&tn(a)?t[n]():Cm(a)&&t.getAttribute&&t.getAttribute(n)||a},ei=function(t,n){return(t=t.split(",")).forEach(n)||t},nn=function(t){return Math.round(t*1e5)/1e5||0},un=function(t){return Math.round(t*1e7)/1e7||0},Mo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},Yw=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},sf=function(){var t=Er.length,n=Er.slice(0),a,s;for(im={},Er.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Ny=function(t,n,a,s){Er.length&&!Dn&&sf(),t.render(n,a,Dn&&n<0&&(t._initted||t._startAt)),Er.length&&!Dn&&sf()},Oy=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(Ry).length<2?n:Tn(t)?t.trim():t},Py=function(t){return t},Si=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},jw=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},No=function(t,n){for(var a in n)t[a]=n[a];return t},_x=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=fa(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},of=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},ql=function(t){var n=t.parent||Ye,a=t.keyframes?jw(Fn(t.keyframes)):Si;if(ti(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},Zw=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},zy=function(t,n,a,s,l){var c=t[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},pf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},Rr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ps=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},Kw=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},am=function(t,n,a,s){return t._startAt&&(Dn?t._startAt.revert(Kc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},Qw=function o(t){return!t||t._ts&&o(t.parent)},gx=function(t){return t._repeat?Oo(t._tTime,t=t.duration()+t._rDelay)*t:0},Oo=function(t,n){var a=Math.floor(t=un(t/n));return t&&a===t?a-1:a},lf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},mf=function(t){return t._end=un(t._start+(t._tDur/Math.abs(t._ts||t._rts||Bn)||0))},_f=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=un(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),mf(t),a._dirty||ps(a,t)),t},By=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=lf(t.rawTime(),n),(!n._dur||cu(0,n.totalDuration(),a)-n._tTime>Bn)&&n.render(a,!0)),ps(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-1e-8}},ia=function(t,n,a,s){return n.parent&&Rr(n),n._start=un((Ga(a)?a:a||t!==Ye?Ni(t,a,n):t._time)+n._delay),n._end=un(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),zy(t,n,"_first","_last",t._sort?"_start":0),rm(n)||(t._recent=n),s||By(t,n),t._ts<0&&_f(t,t._tTime),t},Fy=function(t,n){return(yi.ScrollTrigger||Lm("scrollTrigger",n))&&yi.ScrollTrigger.create(n,t)},Iy=function(t,n,a,s,l){if(Bm(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!Dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Uy!==_i.frame)return Er.push(t),t._lazy=[l,s],1},Jw=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},rm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},$w=function(t,n,a,s){var l=t.ratio,c=n<0||!n&&(!t._start&&Jw(t)&&!(!t._initted&&rm(t))||(t._ts<0||t._dp._ts<0)&&!rm(t))?0:1,f=t._rDelay,d=0,p,_,g;if(f&&t._repeat&&(d=cu(0,t._tDur,n),_=Oo(d,f),t._yoyo&&_&1&&(c=1-c),_!==Oo(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Dn||s||t._zTime===Bn||!n&&t._zTime){if(!t._initted&&Iy(t,n,s,a,d))return;for(g=t._zTime,t._zTime=n||(a?Bn:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=d,p=t._pt;p;)p.r(c,p.d),p=p._next;n<0&&am(t,n,a,!0),t._onUpdate&&!a&&gi(t,"onUpdate"),d&&t._repeat&&!a&&t.parent&&gi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Rr(t,1),!a&&!Dn&&(gi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},tC=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Po=function(t,n,a,s){var l=t._repeat,c=un(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:un(c*(l+1)+t._rDelay*l):c,f>0&&!s&&_f(t,t._tTime=t._tDur*f),t.parent&&mf(t),a||ps(t.parent,t),t},vx=function(t){return t instanceof qn?ps(t):Po(t,t._dur)},eC={_start:0,endTime:Ql,totalDuration:Ql},Ni=function o(t,n,a){var s=t.labels,l=t._recent||eC,c=t.duration()>=la?l.endTime(!1):t._dur,f,d,p;return Tn(n)&&(isNaN(n)||n in s)?(d=n.charAt(0),p=n.substr(-1)==="%",f=n.indexOf("="),d==="<"||d===">"?(f>=0&&(n=n.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(p?(f<0?l:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(d=parseFloat(n.charAt(f-1)+n.substr(f+1)),p&&a&&(d=d/100*(Fn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+d:c+d)):n==null?c:+n},Yl=function(t,n,a){var s=Ga(n[1]),l=(s?2:1)+(t<2?0:1),c=n[l],f,d;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,d=a;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=ti(d.vars.inherit)&&d.parent;c.immediateRender=ti(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new ln(n[0],c,n[l+1])},Cr=function(t,n){return t||t===0?n(t):n},cu=function(t,n,a){return a<t?t:a>n?n:a},zn=function(t,n){return!Tn(t)||!(n=Xw.exec(t))?"":n[1]},nC=function(t,n,a){return Cr(a,function(s){return cu(t,n,s)})},sm=[].slice,Hy=function(t,n){return t&&fa(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&fa(t[0]))&&!t.nodeType&&t!==ta},iC=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var l;return Tn(s)&&!n||Hy(s,1)?(l=a).push.apply(l,Pi(s)):a.push(s)})||a},Pi=function(t,n,a){return ke&&!n&&ke.selector?ke.selector(t):Tn(t)&&!a&&(nm||!zo())?sm.call((n||Um).querySelectorAll(t),0):Fn(t)?iC(t,a):Hy(t)?sm.call(t,0):t?[t]:[]},om=function(t){return t=Pi(t)[0]||Kl("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Pi(n,a.querySelectorAll?a:a===t?Kl("Invalid scope")||Um.createElement("div"):t)}},Gy=function(t){return t.sort(function(){return .5-Math.random()})},Vy=function(t){if(tn(t))return t;var n=fa(t)?t:{each:t},a=ms(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,d=isNaN(s)||f,p=n.axis,_=s,g=s;return Tn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&d&&(_=s[0],g=s[1]),function(v,y,E){var M=(E||n).length,S=c[M],x,w,U,R,D,P,O,B,b;if(!S){if(b=n.grid==="auto"?0:(n.grid||[1,la])[1],!b){for(O=-1e8;O<(O=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=c[M]=[],x=d?Math.min(b,M)*_-.5:s%b,w=b===la?0:d?M*g/b-.5:s/b|0,O=0,B=la,P=0;P<M;P++)U=P%b-x,R=w-(P/b|0),S[P]=D=p?Math.abs(p==="y"?R:U):Ey(U*U+R*R),D>O&&(O=D),D<B&&(B=D);s==="random"&&Gy(S),S.max=O-B,S.min=B,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:p?p==="y"?M/b:b:Math.max(b,M/b))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=zn(n.amount||n.each)||0,a=a&&M<0?Jy(a):a}return M=(S[v]-S.min)/S.max||0,un(S.b+(a?a(M):M)*S.v)+S.u}},lm=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=un(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Ga(a)?0:zn(a))}},ky=function(t,n){var a=Fn(t),s,l;return!a&&fa(t)&&(s=a=t.radius||la,t.values?(t=Pi(t.values),(l=!Ga(t[0]))&&(s*=s)):t=lm(t.increment)),Cr(n,a?tn(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),p=la,_=0,g=t.length,v,y;g--;)l?(v=t[g].x-f,y=t[g].y-d,v=v*v+y*y):v=Math.abs(t[g]-f),v<p&&(p=v,_=g);return _=!s||p<=s?t[_]:c,l||_===c||Ga(c)?_:_+zn(c)}:lm(t))},Xy=function(t,n,a,s){return Cr(Fn(t)?!n:a===!0?!!(a=0):!s,function(){return Fn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},aC=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(l,c){return c(l)},s)}},rC=function(t,n){return function(a){return t(parseFloat(a))+(n||zn(a))}},sC=function(t,n,a){return qy(t,n,0,1,a)},Wy=function(t,n,a){return Cr(a,function(s){return t[~~n(s)]})},oC=function o(t,n,a){var s=n-t;return Fn(t)?Wy(t,o(0,t.length),n):Cr(a,function(l){return(s+(l-t)%s)%s+t})},lC=function o(t,n,a){var s=n-t,l=s*2;return Fn(t)?Wy(t,o(0,t.length-1),n):Cr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},Jl=function(t){for(var n=0,a="",s,l,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",l=t.substr(s+7,c-s-7).match(f?Ry:em),a+=t.substr(n,s-n)+Xy(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},qy=function(t,n,a,s,l){var c=n-t,f=s-a;return Cr(l,function(d){return a+((d-t)/c*f||0)})},uC=function o(t,n,a,s){var l=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!l){var c=Tn(t),f={},d,p,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Fn(t)&&!Fn(n)){for(_=[],g=t.length,v=g-2,p=1;p<g;p++)_.push(o(t[p-1],t[p]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return _[M](E-M)},a=n}else s||(t=No(Fn(t)?[]:{},t));if(!_){for(d in n)zm.call(f,t,d,"get",n[d]);l=function(E){return Hm(E,f)||(c?t.p:t)}}}return Cr(a,l)},xx=function(t,n,a){var s=t.labels,l=la,c,f,d;for(c in s)f=s[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},gi=function(t,n,a){var s=t.vars,l=s[n],c=ke,f=t._ctx,d,p,_;if(l)return d=s[n+"Params"],p=s.callbackScope||t,a&&Er.length&&sf(),f&&(ke=f),_=d?l.apply(p,d):l.call(p),ke=c,_},Xl=function(t){return Rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Dn),t.progress()<1&&gi(t,"onInterrupt"),t},vo,Yy=[],jy=function(t){if(t)if(t=!t.name&&t.default||t,Dm()||t.headless){var n=t.name,a=tn(t),s=n&&!a&&t.init?function(){this._props=[]}:t,l={init:Ql,render:Hm,add:zm,kill:bC,modifier:TC,rawVars:0},c={targetTest:0,get:0,getSetter:Im,aliases:{},register:0};if(zo(),t!==s){if(pi[n])return;Si(s,Si(of(t,l),c)),No(s.prototype,No(l,of(t,c))),pi[s.prop=n]=s,t.targetTest&&(Qc.push(s),Nm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Dy(n,s),t.register&&t.register(ai,s,ni)}else Yy.push(t)},Fe=255,Wl={aqua:[0,Fe,Fe],lime:[0,Fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Fe],navy:[0,0,128],white:[Fe,Fe,Fe],olive:[128,128,0],yellow:[Fe,Fe,0],orange:[Fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Fe,0,0],pink:[Fe,192,203],cyan:[0,Fe,Fe],transparent:[Fe,Fe,Fe,0]},ep=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*Fe+.5|0},Zy=function(t,n,a){var s=t?Ga(t)?[t>>16,t>>8&Fe,t&Fe]:0:Wl.black,l,c,f,d,p,_,g,v,y,E;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Wl[t])s=Wl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Fe,s&Fe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Fe,t&Fe]}else if(t.substr(0,3)==="hsl"){if(s=E=t.match(em),!n)d=+s[0]%360/360,p=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(p+1):_+p-_*p,l=_*2-c,s.length>3&&(s[3]*=1),s[0]=ep(d+1/3,l,c),s[1]=ep(d,l,c),s[2]=ep(d-1/3,l,c);else if(~t.indexOf("="))return s=t.match(by),a&&s.length<4&&(s[3]=1),s}else s=t.match(em)||Wl.transparent;s=s.map(Number)}return n&&!E&&(l=s[0]/Fe,c=s[1]/Fe,f=s[2]/Fe,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?d=p=0:(y=g-v,p=_>.5?y/(2-g-v):y/(g+v),d=g===l?(c-f)/y+(c<f?6:0):g===c?(f-l)/y+2:(l-c)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(p*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},Ky=function(t){var n=[],a=[],s=-1;return t.split(Tr).forEach(function(l){var c=l.match(go)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},yx=function(t,n,a){var s="",l=(t+s).match(Tr),c=n?"hsla(":"rgba(",f=0,d,p,_,g;if(!l)return t;if(l=l.map(function(v){return(v=Zy(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=Ky(t),d=a.c,d.join(s)!==_.c.join(s)))for(p=t.replace(Tr,"1").split(go),g=p.length-1;f<g;f++)s+=p[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!p)for(p=t.split(Tr),g=p.length-1;f<g;f++)s+=p[f]+l[f];return s+p[g]},Tr=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Wl)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),cC=/hsl[a]?\(/,Qy=function(t){var n=t.join(" "),a;if(Tr.lastIndex=0,Tr.test(n))return a=cC.test(n),t[1]=yx(t[1],a),t[0]=yx(t[0],a,Ky(t[1])),!0},$l,_i=function(){var o=Date.now,t=500,n=33,a=o(),s=a,l=1e3/240,c=l,f=[],d,p,_,g,v,y,E=function M(S){var x=o()-s,w=S===!0,U,R,D,P;if((x>t||x<0)&&(a+=x-n),s+=x,D=s-a,U=D-c,(U>0||w)&&(P=++g.frame,v=D-g.time*1e3,g.time=D=D/1e3,c+=U+(U>=l?4:l-U),R=1),w||(d=p(M)),R)for(y=0;y<f.length;y++)f[y](D,v,P,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){wy&&(!nm&&Dm()&&(ta=nm=window,Um=ta.document||{},yi.gsap=ai,(ta.gsapVersions||(ta.gsapVersions=[])).push(ai.version),Cy(rf||ta.GreenSockGlobals||!ta.gsap&&ta||{}),Yy.forEach(jy)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=_||function(S){return setTimeout(S,c-g.time*1e3+1|0)},$l=1,E(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(d),$l=0,p=Ql},lagSmoothing:function(S,x){t=S||1/0,n=Math.min(x||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,x,w){var U=x?function(R,D,P,O){S(R,D,P,O),g.remove(U)}:S;return g.remove(S),f[w?"unshift":"push"](U),zo(),U},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},g}(),zo=function(){return!$l&&_i.wake()},ye={},fC=/^[\d.\-M][\d.\-,\s]/,hC=/["']/g,dC=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],l=1,c=a.length,f,d,p;l<c;l++)d=a[l],f=l!==c-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),n[s]=isNaN(p)?p.replace(hC,"").trim():+p,s=d.substr(f+1).trim();return n},pC=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},mC=function(t){var n=(t+"").split("("),a=ye[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[dC(n[1])]:pC(t).split(",").map(Oy)):ye._CE&&fC.test(t)?ye._CE("",t):a},Jy=function(t){return function(n){return 1-t(1-n)}},$y=function o(t,n){for(var a=t._first,s;a;)a instanceof qn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},ms=function(t,n){return t&&(tn(t)?t:ye[t]||mC(t))||n},Ss=function(t,n,a,s){a===void 0&&(a=function(d){return 1-n(1-d)}),s===void 0&&(s=function(d){return d<.5?n(d*2)/2:1-n((1-d)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:s},c;return ei(t,function(f){ye[f]=yi[f]=l,ye[c=f.toLowerCase()]=a;for(var d in l)ye[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=ye[f+"."+d]=l[d]}),l},tS=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},np=function o(t,n,a){var s=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/tm*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*kw((_-c)*l)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:tS(f);return l=tm/l,d.config=function(p,_){return o(t,p,_)},d},ip=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:tS(a);return s.config=function(l){return o(t,l)},s};ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Ss(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});ye.Linear.easeNone=ye.none=ye.Linear.easeIn;Ss("Elastic",np("in"),np("out"),np());(function(o,t){var n=1/t,a=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Ss("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Ss("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ss("Circ",function(o){return-(Ey(1-o*o)-1)});Ss("Sine",function(o){return o===1?1:-Vw(o*Hw)+1});Ss("Back",ip("in"),ip("out"),ip());ye.SteppedEase=ye.steps=yi.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),l=n?1:0,c=1-Bn;return function(f){return((s*cu(0,c,f)|0)+l)*a}}};Lo.ease=ye["quad.out"];ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Om+=o+","+o+"Params,"});var eS=function(t,n){this.id=Gw++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Ly,this.set=n?n.getSetter:Im},tu=function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Po(this,+n.duration,1,1),this.data=n.data,ke&&(this._ctx=ke,ke.data.push(this)),$l||_i.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Po(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(zo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(_f(this,a),!l._dp||l.parent||By(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ia(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Bn||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Ny(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+gx(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+gx(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?Oo(this._tTime,l)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?lf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-1e-8?0:this._rts,this.totalTime(cu(-Math.abs(this._delay),this._tDur,l),s!==!1),mf(this),Kw(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bn&&(this._tTime-=Bn)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ia(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ti(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=qw);var s=Dn;return Dn=a,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Dn=s,this},t.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,vx(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,vx(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Ni(this,a),ti(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ti(s)),this._dur||(this._zTime=-1e-8),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-Bn)},t.eventCallback=function(a,s,l){var c=this.vars;return arguments.length>1?(s?(c[a]=s,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this;return new Promise(function(l){var c=tn(a)?a:Py,f=function(){var p=s.then;s.then=null,tn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),l(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){Xl(this)},o}();Si(tu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var qn=function(o){My(t,o);function t(a,s){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ti(a.sortChildren),Ye&&ia(a.parent||Ye,Pa(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&Fy(Pa(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,c){return Yl(0,arguments,this),this},n.from=function(s,l,c){return Yl(1,arguments,this),this},n.fromTo=function(s,l,c,f){return Yl(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,ql(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new ln(s,l,Ni(this,c),1),this},n.call=function(s,l,c){return ia(this,ln.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,d,p,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=_,c.parent=this,new ln(s,c,Ni(this,d)),this},n.staggerFrom=function(s,l,c,f,d,p,_){return c.runBackwards=1,ql(c).immediateRender=ti(c.immediateRender),this.staggerTo(s,l,c,f,d,p,_)},n.staggerFromTo=function(s,l,c,f,d,p,_,g){return f.startAt=c,ql(f).immediateRender=ti(f.immediateRender),this.staggerTo(s,l,f,d,p,_,g)},n.render=function(s,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,_=s<=0?0:un(s),g=this._zTime<0!=s<0&&(this._initted||!p),v,y,E,M,S,x,w,U,R,D,P,O;if(this!==Ye&&_>d&&s>=0&&(_=d),_!==this._tTime||c||g){if(f!==this._time&&p&&(_+=this._time-f,s+=this._time-f),v=_,R=this._start,U=this._ts,x=!U,g&&(p||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,S=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(v=un(_%S),_===d?(M=this._repeat,v=p):(D=un(_/S),M=~~D,M&&M===D&&(v=p,M--),v>p&&(v=p)),D=Oo(this._tTime,S),!f&&this._tTime&&D!==M&&this._tTime-D*S-this._dur<=0&&(D=M),P&&M&1&&(v=p-v,O=1),M!==D&&!this._lock){var B=P&&D&1,b=B===(P&&M&1);if(M<D&&(B=!B),f=B?0:_%p?p:_,this._lock=1,this.render(f||(O?0:un(M*S)),l,!p)._lock=0,this._tTime=_,!l&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,b&&(this._lock=2,f=B?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;$y(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=tC(this,un(f),un(v)),w&&(_-=v-(v=w._start))),this._tTime=_,this._time=v,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&v&&!l&&!M&&(gi(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||v>=y._start)&&y._ts&&w!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){w=0,E&&(_+=this._zTime=-1e-8);break}}y=E}else{y=this._last;for(var A=s<0?s:v;y;){if(E=y._prev,(y._act||A<=y._end)&&y._ts&&w!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(A-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(A-y._start)*y._ts,l,c||Dn&&(y._initted||y._startAt)),v!==this._time||!this._ts&&!x){w=0,E&&(_+=this._zTime=A?-1e-8:Bn);break}}y=E}}if(w&&!l&&(this.pause(),w.render(v>=f?0:-1e-8)._zTime=v>=f?1:-1,this._ts))return this._start=R,mf(this),this.render(s,l,c);this._onUpdate&&!l&&gi(this,"onUpdate",!0),(_===d&&this._tTime>=this.totalDuration()||!_&&f)&&(R===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(_===d&&this._ts>0||!_&&this._ts<0)&&Rr(this,1),!l&&!(s<0&&!f)&&(_||f||!d)&&(gi(this,_===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if(Ga(l)||(l=Ni(this,l,s)),!(s instanceof tu)){if(Fn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Tn(s))return this.addLabel(s,l);if(tn(s))s=ln.delayedCall(0,s);else return this}return this!==s?ia(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-1e8);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof ln?l&&d.push(p):(c&&d.push(p),s&&d.push.apply(d,p.getChildren(!0,l,c)))),p=p._next;return d},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return Tn(s)?this.removeLabel(s):tn(s)?this.killTweensOf(s):(s.parent===this&&pf(this,s),s===this._recent&&(this._recent=this._last),ps(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(_i.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Ni(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=ln.delayedCall(0,l||Ql,c);return f.data="isPause",this._hasPause=1,ia(this,f,Ni(this,s))},n.removePause=function(s){var l=this._first;for(s=Ni(this,s);l;)l._start===s&&l.data==="isPause"&&Rr(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),d=f.length;d--;)vr!==f[d]&&f[d].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=Pi(s),d=this._first,p=Ga(l),_;d;)d instanceof ln?Yw(d._targets,f)&&(p?(!vr||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(_=d.getTweensOf(f,l)).length&&c.push.apply(c,_),d=d._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Ni(c,s),d=l,p=d.startAt,_=d.onStart,g=d.onStartParams,v=d.immediateRender,y,E=ln.to(c,Si({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||Bn,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());E._dur!==S&&Po(E,S,0,1).render(E._time,!0,!0),y=1}_&&_.apply(E,g||[])}},l));return v?E.render(0):E},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,Si({startAt:{time:Ni(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),xx(this,Ni(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),xx(this,Ni(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Bn)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,d=this.labels,p;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(p in d)d[p]>=c&&(d[p]+=s);return ps(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ps(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,d=la,p,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,ia(c,f,_-f._delay,1)._lock=0):d=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=p;Po(c,c===Ye&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Ye._ts&&(Ny(Ye,lf(s,Ye)),Uy=_i.frame),_i.frame>=mx){mx+=xi.autoSleep||120;var l=Ye._first;if((!l||!l._ts)&&xi.autoSleep&&_i._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||_i.sleep()}}},t}(tu);Si(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var _C=function(t,n,a,s,l,c,f){var d=new ni(this._pt,t,n,0,1,oS,null,l),p=0,_=0,g,v,y,E,M,S,x,w;for(d.b=a,d.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=Jl(s)),c&&(w=[a,s],c(w,t,n),a=w[0],s=w[1]),v=a.match($d)||[];g=$d.exec(s);)E=g[0],M=s.substring(p,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==v[_++]&&(S=parseFloat(v[_-1])||0,d._pt={_next:d._pt,p:M||_===1?M:",",s:S,c:E.charAt(1)==="="?Mo(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},p=$d.lastIndex);return d.c=p<s.length?s.substring(p,s.length):"",d.fp=f,(Ay.test(s)||x)&&(d.e=0),this._pt=d,d},zm=function(t,n,a,s,l,c,f,d,p,_){tn(s)&&(s=s(l||0,t,c));var g=t[n],v=a!=="get"?a:tn(g)?p?t[n.indexOf("set")||!tn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](p):t[n]():g,y=tn(g)?p?SC:rS:Fm,E;if(Tn(s)&&(~s.indexOf("random(")&&(s=Jl(s)),s.charAt(1)==="="&&(E=Mo(v,s)+(zn(v)||0),(E||E===0)&&(s=E))),!_||v!==s||um)return!isNaN(v*s)&&s!==""?(E=new ni(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?EC:sS,0,y),p&&(E.fp=p),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(n in t)&&Lm(n,s),_C.call(this,t,n,v,s,y,d||xi.stringFilter,p))},gC=function(t,n,a,s,l){if(tn(t)&&(t=jl(t,l,n,a,s)),!fa(t)||t.style&&t.nodeType||Fn(t)||Ty(t))return Tn(t)?jl(t,l,n,a,s):t;var c={},f;for(f in t)c[f]=jl(t[f],l,n,a,s);return c},nS=function(t,n,a,s,l,c){var f,d,p,_;if(pi[t]&&(f=new pi[t]).init(l,f.rawVars?n[t]:gC(n[t],s,l,c,a),a,s,c)!==!1&&(a._pt=d=new ni(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==vo))for(p=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)p[f._props[_]]=d;return f},vr,um,Bm=function o(t,n,a){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,d=s.lazy,p=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,E=t._dur,M=t._startAt,S=t._targets,x=t.parent,w=x&&x.data==="nested"?x.vars.targets:S,U=t._overwrite==="auto"&&!wm,R=t.timeline,D,P,O,B,b,A,H,it,Q,lt,ot,G,J;if(R&&(!v||!l)&&(l="none"),t._ease=ms(l,Lo.ease),t._yEase=g?Jy(ms(g===!0?l:g,Lo.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!R&&!!s.runBackwards,!R||v&&!s.stagger){if(it=S[0]?ds(S[0]).harness:0,G=it&&s[it.prop],D=of(s,Nm),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!y?M.render(-1,!0):M.revert(_&&E?Kc:Ww),M._lazy=0),c){if(Rr(t._startAt=ln.set(S,Si({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ti(d),startAt:null,delay:0,onUpdate:p&&function(){return gi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Dn||!f&&!y)&&t._startAt.revert(Kc),f&&E&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&E&&!M){if(n&&(f=!1),O=Si({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ti(d),immediateRender:f,stagger:0,parent:x},D),G&&(O[it.prop]=G),Rr(t._startAt=ln.set(S,O)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Dn?t._startAt.revert(Kc):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Bn,Bn);else if(!n)return}for(t._pt=t._ptCache=0,d=E&&ti(d)||d&&!E,P=0;P<S.length;P++){if(b=S[P],H=b._gsap||Pm(S)[P]._gsap,t._ptLookup[P]=lt={},im[H.id]&&Er.length&&sf(),ot=w===S?P:w.indexOf(b),it&&(Q=new it).init(b,G||D,t,ot,w)!==!1&&(t._pt=B=new ni(t._pt,b,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(X){lt[X]=B}),Q.priority&&(A=1)),!it||G)for(O in D)pi[O]&&(Q=nS(O,D,t,ot,b,w))?Q.priority&&(A=1):lt[O]=B=zm.call(t,b,O,"get",D[O],ot,w,0,s.stringFilter);t._op&&t._op[P]&&t.kill(b,t._op[P]),U&&t._pt&&(vr=t,Ye.killTweensOf(b,lt,t.globalTime(n)),J=!t.parent,vr=0),t._pt&&d&&(im[H.id]=1)}A&&lS(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!J,v&&n<=0&&R.render(la,!0,!0)},vC=function(t,n,a,s,l,c,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,y;if(!p)for(p=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return um=1,t.vars[n]="+=0",Bm(t,f),um=0,d?Kl(n+" not eligible for reset"):1;p.push(_)}for(y=p.length;y--;)g=p[y],_=g._pt||g,_.s=(s||s===0)&&!l?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=nn(a)+zn(g.e)),g.b&&(g.b=_.s+zn(g.b))},xC=function(t,n){var a=t[0]?ds(t[0]).harness:0,s=a&&a.aliases,l,c,f,d;if(!s)return n;l=No({},n);for(c in s)if(c in l)for(d=s[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},yC=function(t,n,a,s){var l=n.ease||s||"power1.inOut",c,f;if(Fn(n))f=a[t]||(a[t]=[]),n.forEach(function(d,p){return f.push({t:p/(n.length-1)*100,v:d,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},jl=function(t,n,a,s,l){return tn(t)?t.call(n,a,s,l):Tn(t)&&~t.indexOf("random(")?Jl(t):t},iS=Om+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",aS={};ei(iS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return aS[o]=1});var ln=function(o){My(t,o);function t(a,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:ql(s))||this;var d=f.vars,p=d.duration,_=d.delay,g=d.immediateRender,v=d.stagger,y=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,x=d.yoyoEase,w=s.parent||Ye,U=(Fn(a)||Ty(a)?Ga(a[0]):"length"in s)?[a]:Pi(a),R,D,P,O,B,b,A,H;if(f._targets=U.length?Pm(U):Kl("GSAP target "+a+" not found. https://gsap.com",!xi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,E||v||kc(p)||kc(_)){if(s=f.vars,R=f.timeline=new qn({data:"nested",defaults:M||{},targets:w&&w.data==="nested"?w.vars.targets:U}),R.kill(),R.parent=R._dp=Pa(f),R._start=0,v||kc(p)||kc(_)){if(O=U.length,A=v&&Vy(v),fa(v))for(B in v)~iS.indexOf(B)&&(H||(H={}),H[B]=v[B]);for(D=0;D<O;D++)P=of(s,aS),P.stagger=0,x&&(P.yoyoEase=x),H&&No(P,H),b=U[D],P.duration=+jl(p,Pa(f),D,b,U),P.delay=(+jl(_,Pa(f),D,b,U)||0)-f._delay,!v&&O===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),R.to(b,P,A?A(D,b,U):0),R._ease=ye.none;R.duration()?p=_=0:f.timeline=0}else if(E){ql(Si(R.vars.defaults,{ease:"none"})),R._ease=ms(E.ease||s.ease||"none");var it=0,Q,lt,ot;if(Fn(E))E.forEach(function(G){return R.to(U,G,">")}),R.duration();else{P={};for(B in E)B==="ease"||B==="easeEach"||yC(B,E[B],P,E.easeEach);for(B in P)for(Q=P[B].sort(function(G,J){return G.t-J.t}),it=0,D=0;D<Q.length;D++)lt=Q[D],ot={ease:lt.e,duration:(lt.t-(D?Q[D-1].t:0))/100*p},ot[B]=lt.v,R.to(U,ot,it),it+=ot.duration;R.duration()<p&&R.to({},{duration:p-R.duration()})}}p||f.duration(p=R.duration())}else f.timeline=0;return y===!0&&!wm&&(vr=Pa(f),Ye.killTweensOf(U),vr=0),ia(w,Pa(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!p&&!E&&f._start===un(w._time)&&ti(g)&&Qw(Pa(f))&&w.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-_)||0)),S&&Fy(Pa(f),S),f}var n=t.prototype;return n.render=function(s,l,c){var f=this._time,d=this._tDur,p=this._dur,_=s<0,g=s>d-Bn&&!_?d:s<Bn?0:s,v,y,E,M,S,x,w,U,R;if(!p)$w(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,U=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+s,l,c);if(v=un(g%M),g===d?(E=this._repeat,v=p):(S=un(g/M),E=~~S,E&&E===S?(v=p,E--):v>p&&(v=p)),x=this._yoyo&&E&1,x&&(R=this._yEase,v=p-v),S=Oo(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(U&&this._yEase&&$y(U,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(un(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(Iy(this,_?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(p!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(R||this._ease)(v/p),this._from&&(this.ratio=w=1-w),v&&!f&&!l&&!E&&(gi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(w,y.d),y=y._next;U&&U.render(s<0?s:U._dur*U._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(_&&am(this,s,l,c),gi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&gi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&am(this,s,!0,!0),(s||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Rr(this,1),!l&&!(_&&!f)&&(g||f||x)&&(gi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,d){$l||_i.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Bm(this,p),_=this._ease(p/this._dur),vC(this,s,l,c,f,_,p,d)?this.resetTo(s,l,c,f,1):(_f(this,0),this.parent||zy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Xl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,vr&&vr.vars.overwrite!==!0)._first||Xl(this),this.parent&&c!==this.timeline.totalDuration()&&Po(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=s?Pi(s):f,p=this._ptLookup,_=this._pt,g,v,y,E,M,S,x;if((!l||l==="all")&&Zw(f,d))return l==="all"&&(this._pt=0),Xl(this);for(g=this._op=this._op||[],l!=="all"&&(Tn(l)&&(M={},ei(l,function(w){return M[w]=1}),l=M),l=xC(f,l)),x=f.length;x--;)if(~d.indexOf(f[x])){v=p[x],l==="all"?(g[x]=l,E=v,y={}):(y=g[x]=g[x]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&pf(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&_&&Xl(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return Yl(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return Yl(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return Ye.killTweensOf(s,l,c)},t}(tu);Si(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ei("staggerTo,staggerFrom,staggerFromTo",function(o){ln[o]=function(){var t=new qn,n=sm.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var Fm=function(t,n,a){return t[n]=a},rS=function(t,n,a){return t[n](a)},SC=function(t,n,a,s){return t[n](s.fp,a)},MC=function(t,n,a){return t.setAttribute(n,a)},Im=function(t,n){return tn(t[n])?rS:Cm(t[n])&&t.setAttribute?MC:Fm},sS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},EC=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},oS=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Hm=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},TC=function(t,n,a,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,n,a),l=c},bC=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?pf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},AC=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},lS=function(t){for(var n=t._pt,a,s,l,c;n;){for(a=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=l},ni=function(){function o(n,a,s,l,c,f,d,p,_){this.t=a,this.s=l,this.c=c,this.p=s,this.r=f||sS,this.d=d||this,this.set=p||Fm,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=AC,this.m=a,this.mt=l,this.tween=s},o}();ei(Om+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Nm[o]=1});yi.TweenMax=yi.TweenLite=ln;yi.TimelineLite=yi.TimelineMax=qn;Ye=new qn({sortChildren:!1,defaults:Lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xi.stringFilter=Qy;var _s=[],Jc={},RC=[],Sx=0,wC=0,ap=function(t){return(Jc[t]||RC).map(function(n){return n()})},cm=function(){var t=Date.now(),n=[];t-Sx>2&&(ap("matchMediaInit"),_s.forEach(function(a){var s=a.queries,l=a.conditions,c,f,d,p;for(f in s)c=ta.matchMedia(s[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,p=1);p&&(a.revert(),d&&n.push(a))}),ap("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),Sx=t,ap("matchMedia"))},uS=function(){function o(n,a){this.selector=a&&om(a),this.data=[],this._r=[],this.isReverted=!1,this.id=wC++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,l){tn(a)&&(l=s,s=a,a=tn);var c=this,f=function(){var p=ke,_=c.selector,g;return p&&p!==c&&p.data.push(c),l&&(c.selector=om(l)),ke=c,g=s.apply(c,arguments),tn(g)&&c._r.push(g),ke=p,c.selector=_,c.isReverted=!1,g};return c.last=f,a===tn?f(c,function(d){return c.add(null,d)}):a?c[a]=f:f},t.ignore=function(a){var s=ke;ke=null,a(this),ke=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof ln&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var l=this;if(a?function(){for(var f=l.getTweens(),d=l.data.length,p;d--;)p=l.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),d=l.data.length;d--;)p=l.data[d],p instanceof qn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof ln)&&p.revert&&p.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=_s.length;c--;)_s[c].id===this.id&&_s.splice(c,1)},t.revert=function(a){this.kill(a||{})},o}(),CC=function(){function o(n){this.contexts=[],this.scope=n,ke&&ke.data.push(this)}var t=o.prototype;return t.add=function(a,s,l){fa(a)||(a={matches:a});var c=new uS(0,l||this.scope),f=c.conditions={},d,p,_;ke&&!c.selector&&(c.selector=ke.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(p in a)p==="all"?_=1:(d=ta.matchMedia(a[p]),d&&(_s.indexOf(c)<0&&_s.push(c),(f[p]=d.matches)&&(_=1),d.addListener?d.addListener(cm):d.addEventListener("change",cm)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o}(),uf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return jy(s)})},timeline:function(t){return new qn(t)},getTweensOf:function(t,n){return Ye.getTweensOf(t,n)},getProperty:function(t,n,a,s){Tn(t)&&(t=Pi(t)[0]);var l=ds(t||{}).get,c=a?Py:Oy;return a==="native"&&(a=""),t&&(n?c((pi[n]&&pi[n].get||l)(t,n,a,s)):function(f,d,p){return c((pi[f]&&pi[f].get||l)(t,f,d,p))})},quickSetter:function(t,n,a){if(t=Pi(t),t.length>1){var s=t.map(function(_){return ai.quickSetter(_,n,a)}),l=s.length;return function(_){for(var g=l;g--;)s[g](_)}}t=t[0]||{};var c=pi[n],f=ds(t),d=f.harness&&(f.harness.aliases||{})[n]||n,p=c?function(_){var g=new c;vo._pt=0,g.init(t,a?_+a:_,vo,0,[t]),g.render(1,g),vo._pt&&Hm(1,vo)}:f.set(t,d);return c?p:function(_){return p(t,d,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,l=ai.to(t,Si((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(d,p,_){return l.resetTo(n,d,p,_)};return c.tween=l,c},isTweening:function(t){return Ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ms(t.ease,Lo.ease)),_x(Lo,t||{})},config:function(t){return _x(xi,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!pi[f]&&!yi[f]&&Kl(n+" effect requires "+f+" plugin.")}),tp[n]=function(f,d,p){return a(Pi(f),Si(d||{},l),p)},c&&(qn.prototype[n]=function(f,d,p){return this.add(tp[n](f,fa(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,n){ye[t]=ms(n)},parseEase:function(t,n){return arguments.length?ms(t,n):ye},getById:function(t){return Ye.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new qn(t),s,l;for(a.smoothChildTiming=ti(t.smoothChildTiming),Ye.remove(a),a._dp=0,a._time=a._tTime=Ye._time,s=Ye._first;s;)l=s._next,(n||!(!s._dur&&s instanceof ln&&s.vars.onComplete===s._targets[0]))&&ia(a,s,s._start-s._delay),s=l;return ia(Ye,a,0),a},context:function(t,n){return t?new uS(t,n):ke},matchMedia:function(t){return new CC(t)},matchMediaRefresh:function(){return _s.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||cm()},addEventListener:function(t,n){var a=Jc[t]||(Jc[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Jc[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:oC,wrapYoyo:lC,distribute:Vy,random:Xy,snap:ky,normalize:sC,getUnit:zn,clamp:nC,splitColor:Zy,toArray:Pi,selector:om,mapRange:qy,pipe:aC,unitize:rC,interpolate:uC,shuffle:Gy},install:Cy,effects:tp,ticker:_i,updateRoot:qn.updateRoot,plugins:pi,globalTimeline:Ye,core:{PropTween:ni,globals:Dy,Tween:ln,Timeline:qn,Animation:tu,getCache:ds,_removeLinkedListItem:pf,reverting:function(){return Dn},context:function(t){return t&&ke&&(ke.data.push(t),t._ctx=ke),ke},suppressOverwrites:function(t){return wm=t}}};ei("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return uf[o]=ln[o]});_i.add(qn.updateRoot);vo=uf.to({},{duration:0});var DC=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},UC=function(t,n){var a=t._targets,s,l,c;for(s in n)for(l=a.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=DC(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[l],s))},rp=function(t,n){return{name:t,rawVars:1,init:function(s,l,c){c._onInit=function(f){var d,p;if(Tn(l)&&(d={},ei(l,function(_){return d[_]=1}),l=d),n){d={};for(p in l)d[p]=n(l[p]);l=d}UC(f,l)}}}},ai=uf.registerPlugin({name:"attr",init:function(t,n,a,s,l){var c,f,d;this.tween=a;for(c in n)d=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(d||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)Dn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},rp("roundProps",lm),rp("modifiers"),rp("snap",ky))||uf;ln.version=qn.version=ai.version="3.12.7";wy=1;Dm()&&zo();ye.Power0;ye.Power1;ye.Power2;ye.Power3;ye.Power4;ye.Linear;ye.Quad;ye.Cubic;ye.Quart;ye.Quint;ye.Strong;ye.Elastic;ye.Back;ye.SteppedEase;ye.Bounce;ye.Sine;ye.Expo;ye.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mx,xr,Eo,Gm,hs,Ex,Vm,LC=function(){return typeof window<"u"},Va={},os=180/Math.PI,To=Math.PI/180,mo=Math.atan2,Tx=1e8,km=/([A-Z])/g,NC=/(left|right|width|margin|padding|x)/i,OC=/[\s,\(]\S/,sa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},PC=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},zC=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},BC=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},cS=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},fS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},FC=function(t,n,a){return t.style[n]=a},IC=function(t,n,a){return t.style.setProperty(n,a)},HC=function(t,n,a){return t._gsap[n]=a},GC=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},VC=function(t,n,a,s,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},kC=function(t,n,a,s,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},je="transform",ii=je+"Origin",XC=function o(t,n){var a=this,s=this.target,l=s.style,c=s._gsap;if(t in Va&&l){if(this.tfm=this.tfm||{},t!=="transform")t=sa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=za(s,f)}):this.tfm[t]=c.x?c[t]:za(s,t),t===ii&&(this.tfm.zOrigin=c.zOrigin);else return sa.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(je)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ii,n,"")),t=je}(l||n)&&this.props.push(t,n,l[t])},hS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},WC=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(km,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=Vm(),(!l||!l.isStart)&&!a[je]&&(hS(a),s.zOrigin&&a[ii]&&(a[ii]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},dS=function(t,n){var a={target:t,props:[],revert:WC,save:XC};return t._gsap||ai.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},pS,hm=function(t,n){var a=xr.createElementNS?xr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xr.createElement(t);return a&&a.style?a:xr.createElement(t)},ua=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(km,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Bo(n)||n,1)||""},bx="O,Moz,ms,Ms,Webkit".split(","),Bo=function(t,n,a){var s=n||hs,l=s.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(bx[c]+t in l););return c<0?null:(c===3?"ms":c>=0?bx[c]:"")+t},dm=function(){LC()&&window.document&&(Mx=window,xr=Mx.document,Eo=xr.documentElement,hs=hm("div")||{style:{}},hm("div"),je=Bo(je),ii=je+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pS=!!Bo("perspective"),Vm=ai.core.reverting,Gm=1)},Ax=function(t){var n=t.ownerSVGElement,a=hm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",a.appendChild(s),Eo.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),Eo.removeChild(a),l},Rx=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},mS=function(t){var n,a;try{n=t.getBBox()}catch{n=Ax(t),a=1}return n&&(n.width||n.height)||a||(n=Ax(t)),n&&!n.width&&!n.x&&!n.y?{x:+Rx(t,["x","cx","x1"])||0,y:+Rx(t,["y","cy","y1"])||0,width:0,height:0}:n},_S=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&mS(t))},xs=function(t,n){if(n){var a=t.style,s;n in Va&&n!==ii&&(n=je),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(km,"-$1").toLowerCase())):a.removeAttribute(n)}},yr=function(t,n,a,s,l,c){var f=new ni(t._pt,n,a,0,1,c?fS:cS);return t._pt=f,f.b=s,f.e=l,t._props.push(a),f},wx={deg:1,rad:1,turn:1},qC={grid:1,flex:1},wr=function o(t,n,a,s){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=hs.style,d=NC.test(n),p=t.tagName.toLowerCase()==="svg",_=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=s==="px",y=s==="%",E,M,S,x;if(s===c||!l||wx[s]||wx[c])return l;if(c!=="px"&&!v&&(l=o(t,n,a,"px")),x=t.getCTM&&_S(t),(y||c==="%")&&(Va[n]||~n.indexOf("adius")))return E=x?t.getBBox()[d?"width":"height"]:t[_],nn(y?l/E*g:l/100*E);if(f[d?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===xr||!M.appendChild)&&(M=xr.body),S=M._gsap,S&&y&&S.width&&d&&S.time===_i.time&&!S.uncache)return nn(l/S.width*g);if(y&&(n==="height"||n==="width")){var w=t.style[n];t.style[n]=g+s,E=t[_],w?t.style[n]=w:xs(t,n)}else(y||c==="%")&&!qC[ua(M,"display")]&&(f.position=ua(t,"position")),M===t&&(f.position="static"),M.appendChild(hs),E=hs[_],M.removeChild(hs),f.position="absolute";return d&&y&&(S=ds(M),S.time=_i.time,S.width=M[_]),nn(v?E*l/g:E&&l?g/E*l:0)},za=function(t,n,a,s){var l;return Gm||dm(),n in sa&&n!=="transform"&&(n=sa[n],~n.indexOf(",")&&(n=n.split(",")[0])),Va[n]&&n!=="transform"?(l=nu(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:ff(ua(t,ii))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=cf[n]&&cf[n](t,n,a)||ua(t,n)||Ly(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?wr(t,n,l,a)+a:l},YC=function(t,n,a,s){if(!a||a==="none"){var l=Bo(n,t,1),c=l&&ua(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=ua(t,"borderTopColor"))}var f=new ni(this._pt,t.style,n,0,1,oS),d=0,p=0,_,g,v,y,E,M,S,x,w,U,R,D;if(f.b=a,f.e=s,a+="",s+="",s==="auto"&&(M=t.style[n],t.style[n]=s,s=ua(t,n)||s,M?t.style[n]=M:xs(t,n)),_=[a,s],Qy(_),a=_[0],s=_[1],v=a.match(go)||[],D=s.match(go)||[],D.length){for(;g=go.exec(s);)S=g[0],w=s.substring(d,g.index),E?E=(E+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(E=1),S!==(M=v[p++]||"")&&(y=parseFloat(M)||0,R=M.substr((y+"").length),S.charAt(1)==="="&&(S=Mo(y,S)+R),x=parseFloat(S),U=S.substr((x+"").length),d=go.lastIndex-U.length,U||(U=U||xi.units[n]||R,d===s.length&&(s+=U,f.e+=U)),R!==U&&(y=wr(t,n,M,U)||0),f._pt={_next:f._pt,p:w||p===1?w:",",s:y,c:x-y,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=d<s.length?s.substring(d,s.length):""}else f.r=n==="display"&&s==="none"?fS:cS;return Ay.test(s)&&(f.e=0),this._pt=f,f},Cx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jC=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=Cx[a]||a,n[1]=Cx[s]||s,n.join(" ")},ZC=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,l=n.u,c=a._gsap,f,d,p;if(l==="all"||l===!0)s.cssText="",d=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],Va[f]&&(d=1,f=f==="transformOrigin"?ii:je),xs(a,f);d&&(xs(a,je),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",nu(a,1),c.uncache=1,hS(s)))}},cf={clearProps:function(t,n,a,s,l){if(l.data!=="isFromStart"){var c=t._pt=new ni(t._pt,n,a,0,0,ZC);return c.u=s,c.pr=-10,c.tween=l,t._props.push(a),1}}},eu=[1,0,0,1,0,0],gS={},vS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Dx=function(t){var n=ua(t,je);return vS(n)?eu:n.substr(7).match(by).map(nn)},Xm=function(t,n){var a=t._gsap||ds(t),s=t.style,l=Dx(t),c,f,d,p;return a.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?eu:l):(l===eu&&!t.offsetParent&&t!==Eo&&!a.svg&&(d=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Eo.appendChild(t)),l=Dx(t),d?s.display=d:xs(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Eo.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},pm=function(t,n,a,s,l,c){var f=t._gsap,d=l||Xm(t,!0),p=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=d[0],E=d[1],M=d[2],S=d[3],x=d[4],w=d[5],U=n.split(" "),R=parseFloat(U[0])||0,D=parseFloat(U[1])||0,P,O,B,b;a?d!==eu&&(O=y*S-E*M)&&(B=R*(S/O)+D*(-M/O)+(M*w-S*x)/O,b=R*(-E/O)+D*(y/O)-(y*w-E*x)/O,R=B,D=b):(P=mS(t),R=P.x+(~U[0].indexOf("%")?R/100*P.width:R),D=P.y+(~(U[1]||U[0]).indexOf("%")?D/100*P.height:D)),s||s!==!1&&f.smooth?(x=R-p,w=D-_,f.xOffset=g+(x*y+w*M)-x,f.yOffset=v+(x*E+w*S)-w):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=D,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ii]="0px 0px",c&&(yr(c,f,"xOrigin",p,R),yr(c,f,"yOrigin",_,D),yr(c,f,"xOffset",g,f.xOffset),yr(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",R+" "+D)},nu=function(t,n){var a=t._gsap||new eS(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,l=a.scaleX<0,c="px",f="deg",d=getComputedStyle(t),p=ua(t,ii)||"0",_,g,v,y,E,M,S,x,w,U,R,D,P,O,B,b,A,H,it,Q,lt,ot,G,J,X,gt,z,et,St,bt,W,ft;return _=g=v=M=S=x=w=U=R=0,y=E=1,a.svg=!!(t.getCTM&&_S(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[je]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[je]!=="none"?d[je]:"")),s.scale=s.rotate=s.translate="none"),O=Xm(t,a.svg),a.svg&&(a.uncache?(X=t.getBBox(),p=a.xOrigin-X.x+"px "+(a.yOrigin-X.y)+"px",J=""):J=!n&&t.getAttribute("data-svg-origin"),pm(t,J||p,!!J||a.originIsAbsolute,a.smooth!==!1,O)),D=a.xOrigin||0,P=a.yOrigin||0,O!==eu&&(H=O[0],it=O[1],Q=O[2],lt=O[3],_=ot=O[4],g=G=O[5],O.length===6?(y=Math.sqrt(H*H+it*it),E=Math.sqrt(lt*lt+Q*Q),M=H||it?mo(it,H)*os:0,w=Q||lt?mo(Q,lt)*os+M:0,w&&(E*=Math.abs(Math.cos(w*To))),a.svg&&(_-=D-(D*H+P*Q),g-=P-(D*it+P*lt))):(ft=O[6],bt=O[7],z=O[8],et=O[9],St=O[10],W=O[11],_=O[12],g=O[13],v=O[14],B=mo(ft,St),S=B*os,B&&(b=Math.cos(-B),A=Math.sin(-B),J=ot*b+z*A,X=G*b+et*A,gt=ft*b+St*A,z=ot*-A+z*b,et=G*-A+et*b,St=ft*-A+St*b,W=bt*-A+W*b,ot=J,G=X,ft=gt),B=mo(-Q,St),x=B*os,B&&(b=Math.cos(-B),A=Math.sin(-B),J=H*b-z*A,X=it*b-et*A,gt=Q*b-St*A,W=lt*A+W*b,H=J,it=X,Q=gt),B=mo(it,H),M=B*os,B&&(b=Math.cos(B),A=Math.sin(B),J=H*b+it*A,X=ot*b+G*A,it=it*b-H*A,G=G*b-ot*A,H=J,ot=X),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=nn(Math.sqrt(H*H+it*it+Q*Q)),E=nn(Math.sqrt(G*G+ft*ft)),B=mo(ot,G),w=Math.abs(B)>2e-4?B*os:0,R=W?1/(W<0?-W:W):0),a.svg&&(J=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!vS(ua(t,je)),J&&t.setAttribute("transform",J))),Math.abs(w)>90&&Math.abs(w)<270&&(l?(y*=-1,w+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,w+=w<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=nn(y),a.scaleY=nn(E),a.rotation=nn(M)+f,a.rotationX=nn(S)+f,a.rotationY=nn(x)+f,a.skewX=w+f,a.skewY=U+f,a.transformPerspective=R+c,(a.zOrigin=parseFloat(p.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ii]=ff(p)),a.xOffset=a.yOffset=0,a.force3D=xi.force3D,a.renderTransform=a.svg?QC:pS?xS:KC,a.uncache=0,a},ff=function(t){return(t=t.split(" "))[0]+" "+t[1]},sp=function(t,n,a){var s=zn(n);return nn(parseFloat(n)+parseFloat(wr(t,"x",a+"px",s)))+s},KC=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,xS(t,n)},ns="0deg",Gl="0px",is=") ",xS=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,d=a.z,p=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,y=a.skewY,E=a.scaleX,M=a.scaleY,S=a.transformPerspective,x=a.force3D,w=a.target,U=a.zOrigin,R="",D=x==="auto"&&t&&t!==1||x===!0;if(U&&(g!==ns||_!==ns)){var P=parseFloat(_)*To,O=Math.sin(P),B=Math.cos(P),b;P=parseFloat(g)*To,b=Math.cos(P),c=sp(w,c,O*b*-U),f=sp(w,f,-Math.sin(P)*-U),d=sp(w,d,B*b*-U+U)}S!==Gl&&(R+="perspective("+S+is),(s||l)&&(R+="translate("+s+"%, "+l+"%) "),(D||c!==Gl||f!==Gl||d!==Gl)&&(R+=d!==Gl||D?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+is),p!==ns&&(R+="rotate("+p+is),_!==ns&&(R+="rotateY("+_+is),g!==ns&&(R+="rotateX("+g+is),(v!==ns||y!==ns)&&(R+="skew("+v+", "+y+is),(E!==1||M!==1)&&(R+="scale("+E+", "+M+is),w.style[je]=R||"translate(0, 0)"},QC=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,d=a.rotation,p=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,y=a.target,E=a.xOrigin,M=a.yOrigin,S=a.xOffset,x=a.yOffset,w=a.forceCSS,U=parseFloat(c),R=parseFloat(f),D,P,O,B,b;d=parseFloat(d),p=parseFloat(p),_=parseFloat(_),_&&(_=parseFloat(_),p+=_,d+=_),d||p?(d*=To,p*=To,D=Math.cos(d)*g,P=Math.sin(d)*g,O=Math.sin(d-p)*-v,B=Math.cos(d-p)*v,p&&(_*=To,b=Math.tan(p-_),b=Math.sqrt(1+b*b),O*=b,B*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),D*=b,P*=b)),D=nn(D),P=nn(P),O=nn(O),B=nn(B)):(D=g,B=v,P=O=0),(U&&!~(c+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(U=wr(y,"x",c,"px"),R=wr(y,"y",f,"px")),(E||M||S||x)&&(U=nn(U+E-(E*D+M*O)+S),R=nn(R+M-(E*P+M*B)+x)),(s||l)&&(b=y.getBBox(),U=nn(U+s/100*b.width),R=nn(R+l/100*b.height)),b="matrix("+D+","+P+","+O+","+B+","+U+","+R+")",y.setAttribute("transform",b),w&&(y.style[je]=b)},JC=function(t,n,a,s,l){var c=360,f=Tn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?os:1),p=d-s,_=s+p+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-360)),g==="cw"&&p<0?p=(p+c*Tx)%c-~~(p/c)*c:g==="ccw"&&p>0&&(p=(p-c*Tx)%c-~~(p/c)*c)),t._pt=v=new ni(t._pt,n,a,s,p,PC),v.e=_,v.u="deg",t._props.push(a),v},Ux=function(t,n){for(var a in n)t[a]=n[a];return t},$C=function(t,n,a){var s=Ux({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,d,p,_,g,v,y,E;s.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),c[je]=n,f=nu(a,1),xs(a,je),a.setAttribute("transform",p)):(p=getComputedStyle(a)[je],c[je]=n,f=nu(a,1),c[je]=p);for(d in Va)p=s[d],_=f[d],p!==_&&l.indexOf(d)<0&&(y=zn(p),E=zn(_),g=y!==E?wr(a,d,p,E):parseFloat(p),v=parseFloat(_),t._pt=new ni(t._pt,f,d,g,v-g,fm),t._pt.u=E||0,t._props.push(d));Ux(f,s)};ei("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",l="Left",c=(t<3?[n,a,s,l]:[n+l,n+a,s+a,s+l]).map(function(f){return t<2?o+f:"border"+f+o});cf[t>1?"border"+o:o]=function(f,d,p,_,g){var v,y;if(arguments.length<4)return v=c.map(function(E){return za(f,E,p)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},c.forEach(function(E,M){return y[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,y,g)}});var yS={name:"css",register:dm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,l){var c=this._props,f=t.style,d=a.vars.startAt,p,_,g,v,y,E,M,S,x,w,U,R,D,P,O,B;Gm||dm(),this.styles=this.styles||dS(t),B=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(pi[M]&&nS(M,n,a,s,t,l)))){if(y=typeof _,E=cf[M],y==="function"&&(_=_.call(a,s,t,l),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=Jl(_)),E)E(this,t,M,_,a)&&(O=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Tr.lastIndex=0,Tr.test(p)||(S=zn(p),x=zn(_)),x?S!==x&&(p=wr(t,M,p,x)+x):S&&(_+=S),this.add(f,"setProperty",p,_,s,l,0,0,M),c.push(M),B.push(M,0,f[M]);else if(y!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(a,s,t,l):d[M],Tn(p)&&~p.indexOf("random(")&&(p=Jl(p)),zn(p+"")||p==="auto"||(p+=xi.units[M]||zn(za(t,M))||""),(p+"").charAt(1)==="="&&(p=za(t,M))):p=za(t,M),v=parseFloat(p),w=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),w&&(_=_.substr(2)),g=parseFloat(_),M in sa&&(M==="autoAlpha"&&(v===1&&za(t,"visibility")==="hidden"&&g&&(v=0),B.push("visibility",0,f.visibility),yr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=sa[M],~M.indexOf(",")&&(M=M.split(",")[0]))),U=M in Va,U){if(this.styles.save(M),R||(D=t._gsap,D.renderTransform&&!n.parseTransform||nu(t,n.parseTransform),P=n.smoothOrigin!==!1&&D.smooth,R=this._pt=new ni(this._pt,f,je,0,1,D.renderTransform,D,0,-1),R.dep=1),M==="scale")this._pt=new ni(this._pt,D,"scaleY",D.scaleY,(w?Mo(D.scaleY,w+g):g)-D.scaleY||0,fm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){B.push(ii,0,f[ii]),_=jC(_),D.svg?pm(t,_,0,P,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==D.zOrigin&&yr(this,D,"zOrigin",D.zOrigin,x),yr(this,f,M,ff(p),ff(_)));continue}else if(M==="svgOrigin"){pm(t,_,1,P,0,this);continue}else if(M in gS){JC(this,D,M,v,w?Mo(v,w+_):_);continue}else if(M==="smoothOrigin"){yr(this,D,"smooth",D.smooth,_);continue}else if(M==="force3D"){D[M]=_;continue}else if(M==="transform"){$C(this,_,t);continue}}else M in f||(M=Bo(M)||M);if(U||(g||g===0)&&(v||v===0)&&!OC.test(_)&&M in f)S=(p+"").substr((v+"").length),g||(g=0),x=zn(_)||(M in xi.units?xi.units[M]:S),S!==x&&(v=wr(t,M,p,x)),this._pt=new ni(this._pt,U?D:f,M,v,(w?Mo(v,w+g):g)-v,!U&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?BC:fm),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=p,this._pt.r=zC);else if(M in f)YC.call(this,t,M,p,w?w+_:_);else if(M in t)this.add(t,M,p||t[M],w?w+_:_,s,l);else if(M!=="parseTransform"){Lm(M,_);continue}U||(M in f?B.push(M,0,f[M]):typeof t[M]=="function"?B.push(M,2,t[M]()):B.push(M,1,p||t[M])),c.push(M)}}O&&lS(this)},render:function(t,n){if(n.tween._time||!Vm())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:za,aliases:sa,getSetter:function(t,n,a){var s=sa[n];return s&&s.indexOf(",")<0&&(n=s),n in Va&&n!==ii&&(t._gsap.x||za(t,"x"))?a&&Ex===a?n==="scale"?GC:HC:(Ex=a||{})&&(n==="scale"?VC:kC):t.style&&!Cm(t.style[n])?FC:~n.indexOf("-")?IC:Im(t,n)},core:{_removeProperty:xs,_getMatrix:Xm}};ai.utils.checkPrefix=Bo;ai.core.getStyleSaver=dS;(function(o,t,n,a){var s=ei(o+","+t+","+n,function(l){Va[l]=1});ei(t,function(l){xi.units[l]="deg",gS[l]=1}),sa[s[13]]=o+","+t,ei(a,function(l){var c=l.split(":");sa[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){xi.units[o]="px"});ai.registerPlugin(yS);var _r=ai.registerPlugin(yS)||ai;_r.core.Tween;const t2=({number:o,color:t,text:n})=>Qt.jsxs("div",{className:`cards ${t}`,children:[Qt.jsxs("div",{className:"cards-number",children:[" ",o]}),Qt.jsxs("div",{className:"cards-text",children:[" ",n]})]}),e2=()=>{const o=di.useRef(null),t=di.useRef(null),[n,a]=di.useState(0),[s,l]=di.useState(!1),c=[{number:"3X",text:"ESG High Performers Deliver A Higher Total Shareholder Return",color:"green"},{number:"98%",text:"Of CEOs Agree Sustainability Is Their Responsibility",color:"dark"},{number:"18%",text:"Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050",color:"dark"},{number:"37%",text:"Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track",color:"green"}],f=di.useRef(null),d=di.useRef(null),p=di.useRef(null),_=di.useRef([]),g=di.useRef(null);di.useEffect(()=>{if(!o.current)return;const w=new uy;f.current=w;const U=o.current.clientWidth/o.current.clientHeight,R=new mi(60,U,.1,1e3);R.position.z=700,d.current=R;const D=new Sy({antialias:!0,alpha:!0,canvas:t.current});D.setSize(o.current.clientWidth,o.current.clientHeight),D.setClearColor(16777215,0),D.physicallyCorrectLights=!0,D.outputEncoding=void 0,p.current=D;const P=new my(16777215,1);w.add(P);const O=new kv(16777215,1);O.position.set(1,1,2),w.add(O);const B=new kv(16777215,.8);B.position.set(-1,-1,2),w.add(B),v(),y(),x();const b=()=>{if(!o.current||!d.current||!p.current)return;const A=o.current.clientWidth,H=o.current.clientHeight;d.current.aspect=A/H,d.current.updateProjectionMatrix(),p.current.setSize(A,H)};return window.addEventListener("resize",b),()=>{for(window.removeEventListener("resize",b),g.current&&cancelAnimationFrame(g.current),p.current&&p.current.dispose(),_.current.forEach(A=>{A.geometry&&A.geometry.dispose(),A.material&&A.material.dispose(),A.parent&&A.parent.remove(A)});w.children.length>0;){const A=w.children[0];w.remove(A)}}},[]),di.useEffect(()=>{const w=U=>{if(!o.current||_.current.length===0)return;const R=o.current.getBoundingClientRect(),D=(U.clientX-R.left)/R.width*2-1,P=-((U.clientY-R.top)/R.height)*2+1;_.current.forEach(O=>{_r.to(O.rotation,{x:P*.1,y:D*.1,duration:1})})};return window.addEventListener("mousemove",w),()=>{window.removeEventListener("mousemove",w)}},[]);const v=()=>{_.current=c.map((R,D)=>{const P=R.color==="green"?"#00b020":"#333333",O=document.createElement("canvas");O.width=700,O.height=400;const B=O.getContext("2d");B.fillStyle=P,B.fillRect(0,0,700,400),B.fillStyle="rgba(116, 255, 24, 0.6)";for(let J=0;J<100;J++){const X=Math.random()*700,gt=Math.random()*400,z=Math.random()*5+2;B.beginPath(),B.arc(X,gt,z,0,Math.PI*2),B.fill()}B.fillStyle="white",B.font="bold 100px Inter, sans-serif",B.textAlign="center",B.fillText(R.number,700/2,400/3),B.font="bold 22px Inter, sans-serif",B.textAlign="center";const b=R.text.split(" ");let A="",H=400/2;const it=28;for(let J=0;J<b.length;J++){const X=A+b[J]+" ";B.measureText(X).width>640&&J>0?(B.fillText(A,700/2,H),A=b[J]+" ",H+=it):A=X}B.fillText(A,700/2,H);const Q=new ZT(O),lt=new uu(700,400),ot=new KT({map:Q,side:na,roughness:.1,metalness:.2,emissiveIntensity:0,emissive:new Me(16777215)}),G=new ra(lt,ot);return G.position.x=(D-n)*300,G.position.y=0,G.position.z=-Math.abs(D-n)*200,G.rotation.y=(D-n)*.3,G.scale.set(Math.abs(D-n)<.5?1:.8,Math.abs(D-n)<.5?1:.8,Math.abs(D-n)<.5?1:.8),G.userData={index:D,originalPosition:new rt(G.position.x,G.position.y,G.position.z)},f.current.add(G),G}),E()},y=()=>{const w=new zi,U=1e4,R=new Float32Array(U*2),D=new Float32Array(U*2);for(let B=0;B<U*2;B+=2){const b=(Math.random()-.5)*2e3,A=(Math.random()-.5)*2e3,H=(Math.random()-.5)*2e3;R[B]=b,R[B+1]=A,R[B+2]=H,D[B]=.7+Math.random()*.3,D[B+1]=.9+Math.random()*.9,D[B+2]=.7+Math.random()*.3}w.setAttribute("position",new vi(R,3)),w.setAttribute("color",new vi(D,3));const P=new Am({size:2,vertexColors:!0,transparent:!0,opacity:.7,color:45088}),O=new fy(w,P);O.name="particles",f.current.add(O)},E=()=>{_.current.forEach((w,U)=>{const R=U-n;_r.to(w.position,{x:R*700,y:0,z:-Math.abs(R)*100,duration:.7,ease:"power2.inOut"}),_r.to(w.rotation,{y:R*.3,duration:1,ease:"power2.inOut"}),_r.to(w.scale,{x:Math.abs(R)<.5?1:.8,y:Math.abs(R)<.5?1:.8,z:Math.abs(R)<.5?1:.8,duration:1,ease:"power2.inOut"}),_r.to(w.material,{opacity:Math.abs(R)<2?1:.3,transparent:!0,duration:1})})},M=()=>{s||(l(!0),_.current[n]?_r.to(_.current[n].position,{x:30,duration:.2,ease:"power1.out",yoyo:!0,repeat:1,onComplete:()=>{a(w=>(w-1+c.length)%c.length),setTimeout(()=>{E(),l(!1)},50)}}):(a(w=>(w-1+c.length)%c.length),setTimeout(()=>{E(),l(!1)},50)))},S=()=>{s||(l(!0),_.current[n]?_r.to(_.current[n].position,{x:-30,duration:.2,ease:"power1.out",yoyo:!0,repeat:1,onComplete:()=>{a(w=>(w+1)%c.length),setTimeout(()=>{E(),l(!1)},60)}}):(a(w=>(w+1)%c.length),setTimeout(()=>{E(),l(!1)},50)))},x=()=>{if(!f.current||!d.current||!p.current)return;g.current=requestAnimationFrame(x);const w=f.current.getObjectByName("particles");w&&(w.rotation.x+=3e-4,w.rotation.y+=5e-4),_.current.forEach(U=>{U.position.y=Math.sin(Date.now()*.001+U.userData.index)*10}),p.current.render(f.current,d.current)};return Qt.jsx("div",{className:"threejs-card-section",children:Qt.jsxs("div",{className:"threejs-card-container",ref:o,children:[Qt.jsx("canvas",{ref:t,className:"threejs-canvas"}),Qt.jsx("div",{className:"card-nav-overlay left",onClick:M,children:Qt.jsx("div",{className:"overlay-arrow",children:Qt.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Qt.jsx("path",{d:"M15 18L9 12L15 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),Qt.jsx("div",{className:"card-nav-overlay right",onClick:S,children:Qt.jsx("div",{className:"overlay-arrow",children:Qt.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Qt.jsx("path",{d:"M9 18L15 12L9 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),Qt.jsx("div",{className:"mobile-cards-container",children:c.map((w,U)=>Qt.jsx("div",{className:`mobile-card ${U===n?"active":""}`,children:Qt.jsx(t2,{number:w.number,text:w.text,color:w.color})},U))})]})})};function n2(){return Qt.jsx("div",{className:"app",children:Qt.jsxs("div",{className:"content",children:[Qt.jsx(wE,{}),Qt.jsx(Iw,{}),Qt.jsx(e2,{})]})})}var op={exports:{}},Vl={},lp={exports:{}},up={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx;function i2(){return Lx||(Lx=1,function(o){function t(G,J){var X=G.length;G.push(J);t:for(;0<X;){var gt=X-1>>>1,z=G[gt];if(0<s(z,J))G[gt]=J,G[X]=z,X=gt;else break t}}function n(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var J=G[0],X=G.pop();if(X!==J){G[0]=X;t:for(var gt=0,z=G.length,et=z>>>1;gt<et;){var St=2*(gt+1)-1,bt=G[St],W=St+1,ft=G[W];if(0>s(bt,X))W<z&&0>s(ft,bt)?(G[gt]=ft,G[W]=X,gt=W):(G[gt]=bt,G[St]=X,gt=St);else if(W<z&&0>s(ft,X))G[gt]=ft,G[W]=X,gt=W;else break t}}return J}function s(G,J){var X=G.sortIndex-J.sortIndex;return X!==0?X:G.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],p=[],_=1,g=null,v=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function U(G){for(var J=n(p);J!==null;){if(J.callback===null)a(p);else if(J.startTime<=G)a(p),J.sortIndex=J.expirationTime,t(d,J);else break;J=n(p)}}function R(G){if(M=!1,U(G),!E)if(n(d)!==null)E=!0,lt();else{var J=n(p);J!==null&&ot(R,J.startTime-G)}}var D=!1,P=-1,O=5,B=-1;function b(){return!(o.unstable_now()-B<O)}function A(){if(D){var G=o.unstable_now();B=G;var J=!0;try{t:{E=!1,M&&(M=!1,x(P),P=-1),y=!0;var X=v;try{e:{for(U(G),g=n(d);g!==null&&!(g.expirationTime>G&&b());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,v=g.priorityLevel;var z=gt(g.expirationTime<=G);if(G=o.unstable_now(),typeof z=="function"){g.callback=z,U(G),J=!0;break e}g===n(d)&&a(d),U(G)}else a(d);g=n(d)}if(g!==null)J=!0;else{var et=n(p);et!==null&&ot(R,et.startTime-G),J=!1}}break t}finally{g=null,v=X,y=!1}J=void 0}}finally{J?H():D=!1}}}var H;if(typeof w=="function")H=function(){w(A)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Q=it.port2;it.port1.onmessage=A,H=function(){Q.postMessage(null)}}else H=function(){S(A,0)};function lt(){D||(D=!0,H())}function ot(G,J){P=S(function(){G(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){E||y||(E=!0,lt())},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return n(d)},o.unstable_next=function(G){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var X=v;v=J;try{return G()}finally{v=X}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,J){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var X=v;v=G;try{return J()}finally{v=X}},o.unstable_scheduleCallback=function(G,J,X){var gt=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?gt+X:gt):X=gt,G){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=X+z,G={id:_++,callback:J,priorityLevel:G,startTime:X,expirationTime:z,sortIndex:-1},X>gt?(G.sortIndex=X,t(p,G),n(d)===null&&G===n(p)&&(M?(x(P),P=-1):M=!0,ot(R,X-gt))):(G.sortIndex=z,t(d,G),E||y||(E=!0,lt())),G},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(G){var J=v;return function(){var X=v;v=J;try{return G.apply(this,arguments)}finally{v=X}}}}(up)),up}var Nx;function a2(){return Nx||(Nx=1,lp.exports=i2()),lp.exports}var cp={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox;function r2(){if(Ox)return Pn;Ox=1;var o=mm();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:d,containerInfo:p,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Pn.createPortal=function(d,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,_)},Pn.flushSync=function(d){var p=c.T,_=a.p;try{if(c.T=null,a.p=2,d)return d()}finally{c.T=p,a.p=_,a.d.f()}},Pn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Pn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Pn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Pn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin);a.d.L(d,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(d,p){if(typeof d=="string")if(p){var _=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Pn.requestFormReset=function(d){a.d.r(d)},Pn.unstable_batchedUpdates=function(d,p){return d(p)},Pn.useFormState=function(d,p,_){return c.H.useFormState(d,p,_)},Pn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Pn.version="19.0.0",Pn}var Px;function s2(){if(Px)return cp.exports;Px=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),cp.exports=r2(),cp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zx;function o2(){if(zx)return Vl;zx=1;var o=a2(),t=mm(),n=s2();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),R=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var O=Symbol.for("react.client.reference");function B(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===O?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case d:return"Fragment";case f:return"Portal";case _:return"Profiler";case p:return"StrictMode";case M:return"Suspense";case S:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case E:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return i=e.displayName||null,i!==null?i:B(e.type)||"Memo";case w:i=e._payload,e=e._init;try{return B(e(i))}catch{}}return null}var b=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,H,it;function Q(e){if(H===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);H=i&&i[1]||"",it=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+it}var lt=!1;function ot(e,i){if(!e||lt)return"";lt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var st=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){st=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),T=m[0],L=m[1];if(T&&L){var I=T.split(`
`),q=L.split(`
`);for(h=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(u===I.length||h===q.length)for(u=I.length-1,h=q.length-1;1<=u&&0<=h&&I[u]!==q[h];)h--;for(;1<=u&&0<=h;u--,h--)if(I[u]!==q[h]){if(u!==1||h!==1)do if(u--,h--,0>h||I[u]!==q[h]){var ht=`
`+I[u].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=u&&0<=h);break}}}finally{lt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Q(r):""}function G(e){switch(e.tag){case 26:case 27:case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 15:return e=ot(e.type,!1),e;case 11:return e=ot(e.type.render,!1),e;case 1:return e=ot(e.type,!0),e;default:return""}}function J(e){try{var i="";do i+=G(e),e=e.return;while(e);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function X(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function gt(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function z(e){if(X(e)!==e)throw Error(a(188))}function et(e){var i=e.alternate;if(!i){if(i=X(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,u=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){r=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return z(h),e;if(m===u)return z(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==u.return)r=h,u=m;else{for(var T=!1,L=h.child;L;){if(L===r){T=!0,r=h,u=m;break}if(L===u){T=!0,u=h,r=m;break}L=L.sibling}if(!T){for(L=m.child;L;){if(L===r){T=!0,r=m,u=h;break}if(L===u){T=!0,u=m,r=h;break}L=L.sibling}if(!T)throw Error(a(189))}}if(r.alternate!==u)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function St(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=St(e),i!==null)return i;e=e.sibling}return null}var bt=Array.isArray,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function Rt(e){return{current:e}}function Kt(e){0>Tt||(e.current=yt[Tt],yt[Tt]=null,Tt--)}function Pt(e,i){Tt++,yt[Tt]=e.current,e.current=i}var Ee=Rt(null),De=Rt(null),ae=Rt(null),V=Rt(null);function bn(e,i){switch(Pt(ae,i),Pt(De,e),Pt(Ee,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?B0(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=B0(e),i=F0(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}Kt(Ee),Pt(Ee,i)}function se(){Kt(Ee),Kt(De),Kt(ae)}function fe(e){e.memoizedState!==null&&Pt(V,e);var i=Ee.current,r=F0(i,e.type);i!==r&&(Pt(De,e),Pt(Ee,r))}function kt(e){De.current===e&&(Kt(Ee),Kt(De)),V.current===e&&(Kt(V),Cl._currentValue=ft)}var Ue=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,C=o.unstable_shouldYield,at=o.unstable_requestPaint,dt=o.unstable_now,xt=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,zt=o.unstable_LowPriority,pe=o.unstable_IdlePriority,Et=o.log,Bt=o.unstable_setDisableYieldValue,Zt=null,Gt=null;function Ft(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Zt,e,void 0,(e.current.flags&128)===128)}catch{}}function re(e){if(typeof Et=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Zt,e)}catch{}}var Yt=Math.clz32?Math.clz32:Lt,Le=Math.log,Y=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(Le(e)/Y|0)|0}var ut=128,_t=4194304;function wt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,i){var r=e.pendingLanes;if(r===0)return 0;var u=0,h=e.suspendedLanes,m=e.pingedLanes,T=e.warmLanes;e=e.finishedLanes!==0;var L=r&134217727;return L!==0?(r=L&~h,r!==0?u=wt(r):(m&=L,m!==0?u=wt(m):e||(T=L&~T,T!==0&&(u=wt(T))))):(L=r&~h,L!==0?u=wt(L):m!==0?u=wt(m):e||(T=r&~T,T!==0&&(u=wt(T)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,T=i&-i,h>=T||h===32&&(T&4194176)!==0)?i:u}function $t(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ve(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var e=ut;return ut<<=1,(ut&4194176)===0&&(ut=128),e}function Te(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function In(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Hn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fu(e,i,r,u,h,m){var T=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var L=e.entanglements,I=e.expirationTimes,q=e.hiddenUpdates;for(r=T&~r;0<r;){var ht=31-Yt(r),vt=1<<ht;L[ht]=0,I[ht]=-1;var st=q[ht];if(st!==null)for(q[ht]=null,ht=0;ht<st.length;ht++){var ct=st[ht];ct!==null&&(ct.lane&=-536870913)}r&=~vt}u!==0&&Ho(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~i))}function Ho(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Yt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|r&4194218}function ji(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var u=31-Yt(r),h=1<<u;h&i|e[u]&i&&(e[u]|=i),r&=~h}}function Ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Go(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:nv(e.type))}function hu(e,i){var r=W.p;try{return W.p=e,i()}finally{W.p=r}}var ri=Math.random().toString(36).slice(2),fn="__reactFiber$"+ri,hn="__reactProps$"+ri,ha="__reactContainer$"+ri,Es="__reactEvents$"+ri,gf="__reactListeners$"+ri,vf="__reactHandles$"+ri,du="__reactResources$"+ri,Dr="__reactMarker$"+ri;function Vo(e){delete e[fn],delete e[hn],delete e[Es],delete e[gf],delete e[vf]}function da(e){var i=e[fn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ha]||r[fn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=G0(e);e!==null;){if(r=e[fn])return r;e=G0(e)}return i}e=r,r=e.parentNode}return null}function N(e){if(e=e[fn]||e[ha]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function j(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function nt(e){var i=e[du];return i||(i=e[du]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function $(e){e[Dr]=!0}var Z=new Set,Mt={};function At(e,i){Ot(e,i),Ot(e+"Capture",i)}function Ot(e,i){for(Mt[e]=i,e=0;e<i.length;e++)Z.add(i[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},qt={};function me(e){return Ue.call(qt,e)?!0:Ue.call(ee,e)?!1:te.test(e)?qt[e]=!0:(ee[e]=!0,!1)}function _e(e,i,r){if(me(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Ge(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function be(e,i,r,u){if(u===null)e.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+u)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function dn(e){var i=jt(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),u=""+e[i];if(!e.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var h=r.get,m=r.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(e,i,{enumerable:r.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ge(e){e._valueTracker||(e._valueTracker=dn(e))}function jn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),u="";return e&&(u=jt(e)?e.checked?"true":"false":e.value),e=u,e!==r?(i.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gn=/[\n"\\]/g;function vn(e){return e.replace(Gn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ne(e,i,r,u,h,m,T,L){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ne(i)):e.value!==""+ne(i)&&(e.value=""+ne(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?Un(e,T,ne(i)):r!=null?Un(e,T,ne(r)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?e.name=""+ne(L):e.removeAttribute("name")}function Vn(e,i,r,u,h,m,T,L){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;r=r!=null?""+ne(r):"",i=i!=null?""+ne(i):r,L||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=L?e.checked:!!u,e.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function Un(e,i,r){i==="number"&&Bi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Ze(e,i,r,u){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&u&&(e[r].defaultSelected=!0)}else{for(r=""+ne(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function An(e,i,r){if(i!=null&&(i=""+ne(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+ne(r):""}function Ts(e,i,r,u){if(i==null){if(u!=null){if(r!=null)throw Error(a(92));if(bt(u)){if(1<u.length)throw Error(a(93));u=u[0]}r=u}r==null&&(r=""),i=r}r=ne(i),e.defaultValue=r,u=e.textContent,u===r&&u!==""&&u!==null&&(e.value=u)}function Zn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var SS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wm(e,i,r){var u=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,r):typeof r!="number"||r===0||SS.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function qm(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&r[h]!==u&&Wm(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&Wm(e,m,i[m])}function xf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var MS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ES=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pu(e){return ES.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yf=null;function Sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,As=null;function Ym(e){var i=N(e);if(i&&(e=i.stateNode)){var r=e[hn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ne(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+vn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var u=r[i];if(u!==e&&u.form===e.form){var h=u[hn]||null;if(!h)throw Error(a(90));Ne(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)u=r[i],u.form===e.form&&jn(u)}break t;case"textarea":An(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Ze(e,!!r.multiple,i,!1)}}}var Mf=!1;function jm(e,i,r){if(Mf)return e(i,r);Mf=!0;try{var u=e(i);return u}finally{if(Mf=!1,(bs!==null||As!==null)&&(Qu(),bs&&(i=bs,e=As,As=bs=null,Ym(i),e)))for(i=0;i<e.length;i++)Ym(e[i])}}function ko(e,i){var r=e.stateNode;if(r===null)return null;var u=r[hn]||null;if(u===null)return null;r=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Ef=!1;if(Nt)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Ef=!1}var ka=null,Tf=null,mu=null;function Zm(){if(mu)return mu;var e,i=Tf,r=i.length,u,h="value"in ka?ka.value:ka.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var T=r-e;for(u=1;u<=T&&i[r-u]===h[m-u];u++);return mu=h.slice(e,1<u?1-u:void 0)}function _u(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function gu(){return!0}function Km(){return!1}function Kn(e){function i(r,u,h,m,T){this._reactName=r,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(r=e[L],this[L]=r?r(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?gu:Km,this.isPropagationStopped=Km,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=gu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=gu)},persist:function(){},isPersistent:gu}),i}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=Kn(Ur),Wo=A({},Ur,{view:0,detail:0}),TS=Kn(Wo),bf,Af,qo,xu=A({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qo&&(qo&&e.type==="mousemove"?(bf=e.screenX-qo.screenX,Af=e.screenY-qo.screenY):Af=bf=0,qo=e),bf)},movementY:function(e){return"movementY"in e?e.movementY:Af}}),Qm=Kn(xu),bS=A({},xu,{dataTransfer:0}),AS=Kn(bS),RS=A({},Wo,{relatedTarget:0}),Rf=Kn(RS),wS=A({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),CS=Kn(wS),DS=A({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),US=Kn(DS),LS=A({},Ur,{data:0}),Jm=Kn(LS),NS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=PS[e])?!!i[e]:!1}function wf(){return zS}var BS=A({},Wo,{key:function(e){if(e.key){var i=NS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=_u(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?OS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(e){return e.type==="keypress"?_u(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_u(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),FS=Kn(BS),IS=A({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=Kn(IS),HS=A({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),GS=Kn(HS),VS=A({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=Kn(VS),XS=A({},xu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=Kn(XS),qS=A({},Ur,{newState:0,oldState:0}),YS=Kn(qS),jS=[9,13,27,32],Cf=Nt&&"CompositionEvent"in window,Yo=null;Nt&&"documentMode"in document&&(Yo=document.documentMode);var ZS=Nt&&"TextEvent"in window&&!Yo,t_=Nt&&(!Cf||Yo&&8<Yo&&11>=Yo),e_=" ",n_=!1;function i_(e,i){switch(e){case"keyup":return jS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rs=!1;function KS(e,i){switch(e){case"compositionend":return a_(i);case"keypress":return i.which!==32?null:(n_=!0,e_);case"textInput":return e=i.data,e===e_&&n_?null:e;default:return null}}function QS(e,i){if(Rs)return e==="compositionend"||!Cf&&i_(e,i)?(e=Zm(),mu=Tf=ka=null,Rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return t_&&i.locale!=="ko"?null:i.data;default:return null}}var JS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!JS[e.type]:i==="textarea"}function s_(e,i,r,u){bs?As?As.push(u):As=[u]:bs=u,i=nc(i,"onChange"),0<i.length&&(r=new vu("onChange","change",null,r,u),e.push({event:r,listeners:i}))}var jo=null,Zo=null;function $S(e){L0(e,0)}function yu(e){var i=j(e);if(jn(i))return e}function o_(e,i){if(e==="change")return i}var l_=!1;if(Nt){var Df;if(Nt){var Uf="oninput"in document;if(!Uf){var u_=document.createElement("div");u_.setAttribute("oninput","return;"),Uf=typeof u_.oninput=="function"}Df=Uf}else Df=!1;l_=Df&&(!document.documentMode||9<document.documentMode)}function c_(){jo&&(jo.detachEvent("onpropertychange",f_),Zo=jo=null)}function f_(e){if(e.propertyName==="value"&&yu(Zo)){var i=[];s_(i,Zo,e,Sf(e)),jm($S,i)}}function tM(e,i,r){e==="focusin"?(c_(),jo=i,Zo=r,jo.attachEvent("onpropertychange",f_)):e==="focusout"&&c_()}function eM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yu(Zo)}function nM(e,i){if(e==="click")return yu(i)}function iM(e,i){if(e==="input"||e==="change")return yu(i)}function aM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var si=typeof Object.is=="function"?Object.is:aM;function Ko(e,i){if(si(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),u=Object.keys(i);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var h=r[u];if(!Ue.call(i,h)||!si(e[h],i[h]))return!1}return!0}function h_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function d_(e,i){var r=h_(e);e=0;for(var u;r;){if(r.nodeType===3){if(u=e+r.textContent.length,e<=i&&u>=i)return{node:r,offset:i-e};e=u}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=h_(r)}}function p_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?p_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function m_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Bi(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Bi(e.document)}return i}function Lf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function rM(e,i){var r=m_(i);i=e.focusedElem;var u=e.selectionRange;if(r!==i&&i&&i.ownerDocument&&p_(i.ownerDocument.documentElement,i)){if(u!==null&&Lf(i)){if(e=u.start,r=u.end,r===void 0&&(r=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(r,i.value.length);else if(r=(e=i.ownerDocument||document)&&e.defaultView||window,r.getSelection){r=r.getSelection();var h=i.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!r.extend&&m>u&&(h=u,u=m,m=h),h=d_(i,m);var T=d_(i,u);h&&T&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==T.node||r.focusOffset!==T.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),r.removeAllRanges(),m>u?(r.addRange(e),r.extend(T.node,T.offset)):(e.setEnd(T.node,T.offset),r.addRange(e)))}}for(e=[],r=i;r=r.parentNode;)r.nodeType===1&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)r=e[i],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var sM=Nt&&"documentMode"in document&&11>=document.documentMode,ws=null,Nf=null,Qo=null,Of=!1;function __(e,i,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Of||ws==null||ws!==Bi(u)||(u=ws,"selectionStart"in u&&Lf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Qo&&Ko(Qo,u)||(Qo=u,u=nc(Nf,"onSelect"),0<u.length&&(i=new vu("onSelect","select",null,i,r),e.push({event:i,listeners:u}),i.target=ws)))}function Lr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Cs={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionrun:Lr("Transition","TransitionRun"),transitionstart:Lr("Transition","TransitionStart"),transitioncancel:Lr("Transition","TransitionCancel"),transitionend:Lr("Transition","TransitionEnd")},Pf={},g_={};Nt&&(g_=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Nr(e){if(Pf[e])return Pf[e];if(!Cs[e])return e;var i=Cs[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in g_)return Pf[e]=i[r];return e}var v_=Nr("animationend"),x_=Nr("animationiteration"),y_=Nr("animationstart"),oM=Nr("transitionrun"),lM=Nr("transitionstart"),uM=Nr("transitioncancel"),S_=Nr("transitionend"),M_=new Map,E_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Fi(e,i){M_.set(e,i),At(i,[e])}var Mi=[],Ds=0,zf=0;function Su(){for(var e=Ds,i=zf=Ds=0;i<e;){var r=Mi[i];Mi[i++]=null;var u=Mi[i];Mi[i++]=null;var h=Mi[i];Mi[i++]=null;var m=Mi[i];if(Mi[i++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}m!==0&&T_(r,h,m)}}function Mu(e,i,r,u){Mi[Ds++]=e,Mi[Ds++]=i,Mi[Ds++]=r,Mi[Ds++]=u,zf|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function Bf(e,i,r,u){return Mu(e,i,r,u),Eu(e)}function Xa(e,i){return Mu(e,null,null,i),Eu(e)}function T_(e,i,r){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,u=m.alternate,u!==null&&(u.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;h&&i!==null&&e.tag===3&&(m=e.stateNode,h=31-Yt(r),m=m.hiddenUpdates,e=m[h],e===null?m[h]=[i]:e.push(i),i.lane=r|536870912)}function Eu(e){if(50<Ml)throw Ml=0,kh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Us={},b_=new WeakMap;function Ei(e,i){if(typeof e=="object"&&e!==null){var r=b_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:J(i)},b_.set(e,i),i)}return{value:e,source:i,stack:J(i)}}var Ls=[],Ns=0,Tu=null,bu=0,Ti=[],bi=0,Or=null,pa=1,ma="";function Pr(e,i){Ls[Ns++]=bu,Ls[Ns++]=Tu,Tu=e,bu=i}function A_(e,i,r){Ti[bi++]=pa,Ti[bi++]=ma,Ti[bi++]=Or,Or=e;var u=pa;e=ma;var h=32-Yt(u)-1;u&=~(1<<h),r+=1;var m=32-Yt(i)+h;if(30<m){var T=h-h%5;m=(u&(1<<T)-1).toString(32),u>>=T,h-=T,pa=1<<32-Yt(i)+h|r<<h|u,ma=m+e}else pa=1<<m|r<<h|u,ma=e}function Ff(e){e.return!==null&&(Pr(e,1),A_(e,1,0))}function If(e){for(;e===Tu;)Tu=Ls[--Ns],Ls[Ns]=null,bu=Ls[--Ns],Ls[Ns]=null;for(;e===Or;)Or=Ti[--bi],Ti[bi]=null,ma=Ti[--bi],Ti[bi]=null,pa=Ti[--bi],Ti[bi]=null}var kn=null,Rn=null,Ae=!1,Ii=null,Zi=!1,Hf=Error(a(519));function zr(e){var i=Error(a(418,""));throw tl(Ei(i,e)),Hf}function R_(e){var i=e.stateNode,r=e.type,u=e.memoizedProps;switch(i[fn]=e,i[hn]=u,r){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(r=0;r<Tl.length;r++)ve(Tl[r],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":ve("invalid",i),Vn(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ge(i);break;case"select":ve("invalid",i);break;case"textarea":ve("invalid",i),Ts(i,u.value,u.defaultValue,u.children),ge(i)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||u.suppressHydrationWarning===!0||z0(i.textContent,r)?(u.popover!=null&&(ve("beforetoggle",i),ve("toggle",i)),u.onScroll!=null&&ve("scroll",i),u.onScrollEnd!=null&&ve("scrollend",i),u.onClick!=null&&(i.onclick=ic),i=!0):i=!1,i||zr(e)}function w_(e){for(kn=e.return;kn;)switch(kn.tag){case 3:case 27:Zi=!0;return;case 5:case 13:Zi=!1;return;default:kn=kn.return}}function Jo(e){if(e!==kn)return!1;if(!Ae)return w_(e),Ae=!0,!1;var i=!1,r;if((r=e.tag!==3&&e.tag!==27)&&((r=e.tag===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||sd(e.type,e.memoizedProps)),r=!r),r&&(i=!0),i&&Rn&&zr(e),w_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(i===0){Rn=Gi(e.nextSibling);break t}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;e=e.nextSibling}Rn=null}}else Rn=kn?Gi(e.stateNode.nextSibling):null;return!0}function $o(){Rn=kn=null,Ae=!1}function tl(e){Ii===null?Ii=[e]:Ii.push(e)}var el=Error(a(460)),C_=Error(a(474)),Gf={then:function(){}};function D_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Au(){}function U_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Au,Au),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===el?Error(a(483)):e;default:if(typeof i.status=="string")i.then(Au,Au);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===el?Error(a(483)):e}throw nl=i,el}}var nl=null;function L_(){if(nl===null)throw Error(a(459));var e=nl;return nl=null,e}var Os=null,il=0;function Ru(e){var i=il;return il+=1,Os===null&&(Os=[]),U_(Os,e,i)}function al(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function wu(e,i){throw i.$$typeof===l?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function N_(e){var i=e._init;return i(e._payload)}function O_(e){function i(K,k){if(e){var tt=K.deletions;tt===null?(K.deletions=[k],K.flags|=16):tt.push(k)}}function r(K,k){if(!e)return null;for(;k!==null;)i(K,k),k=k.sibling;return null}function u(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function h(K,k){return K=nr(K,k),K.index=0,K.sibling=null,K}function m(K,k,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<k?(K.flags|=33554434,k):tt):(K.flags|=33554434,k)):(K.flags|=1048576,k)}function T(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function L(K,k,tt,mt){return k===null||k.tag!==6?(k=Ph(tt,K.mode,mt),k.return=K,k):(k=h(k,tt),k.return=K,k)}function I(K,k,tt,mt){var It=tt.type;return It===d?ht(K,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===w&&N_(It)===k.type)?(k=h(k,tt.props),al(k,tt),k.return=K,k):(k=qu(tt.type,tt.key,tt.props,null,K.mode,mt),al(k,tt),k.return=K,k)}function q(K,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=zh(tt,K.mode,mt),k.return=K,k):(k=h(k,tt.children||[]),k.return=K,k)}function ht(K,k,tt,mt,It){return k===null||k.tag!==7?(k=qr(tt,K.mode,mt,It),k.return=K,k):(k=h(k,tt),k.return=K,k)}function vt(K,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ph(""+k,K.mode,tt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case c:return tt=qu(k.type,k.key,k.props,null,K.mode,tt),al(tt,k),tt.return=K,tt;case f:return k=zh(k,K.mode,tt),k.return=K,k;case w:var mt=k._init;return k=mt(k._payload),vt(K,k,tt)}if(bt(k)||P(k))return k=qr(k,K.mode,tt,null),k.return=K,k;if(typeof k.then=="function")return vt(K,Ru(k),tt);if(k.$$typeof===y)return vt(K,ku(K,k),tt);wu(K,k)}return null}function st(K,k,tt,mt){var It=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return It!==null?null:L(K,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case c:return tt.key===It?I(K,k,tt,mt):null;case f:return tt.key===It?q(K,k,tt,mt):null;case w:return It=tt._init,tt=It(tt._payload),st(K,k,tt,mt)}if(bt(tt)||P(tt))return It!==null?null:ht(K,k,tt,mt,null);if(typeof tt.then=="function")return st(K,k,Ru(tt),mt);if(tt.$$typeof===y)return st(K,k,ku(K,tt),mt);wu(K,tt)}return null}function ct(K,k,tt,mt,It){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(tt)||null,L(k,K,""+mt,It);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case c:return K=K.get(mt.key===null?tt:mt.key)||null,I(k,K,mt,It);case f:return K=K.get(mt.key===null?tt:mt.key)||null,q(k,K,mt,It);case w:var he=mt._init;return mt=he(mt._payload),ct(K,k,tt,mt,It)}if(bt(mt)||P(mt))return K=K.get(tt)||null,ht(k,K,mt,It,null);if(typeof mt.then=="function")return ct(K,k,tt,Ru(mt),It);if(mt.$$typeof===y)return ct(K,k,tt,ku(k,mt),It);wu(k,mt)}return null}function Vt(K,k,tt,mt){for(var It=null,he=null,Wt=k,Jt=k=0,Sn=null;Wt!==null&&Jt<tt.length;Jt++){Wt.index>Jt?(Sn=Wt,Wt=null):Sn=Wt.sibling;var Re=st(K,Wt,tt[Jt],mt);if(Re===null){Wt===null&&(Wt=Sn);break}e&&Wt&&Re.alternate===null&&i(K,Wt),k=m(Re,k,Jt),he===null?It=Re:he.sibling=Re,he=Re,Wt=Sn}if(Jt===tt.length)return r(K,Wt),Ae&&Pr(K,Jt),It;if(Wt===null){for(;Jt<tt.length;Jt++)Wt=vt(K,tt[Jt],mt),Wt!==null&&(k=m(Wt,k,Jt),he===null?It=Wt:he.sibling=Wt,he=Wt);return Ae&&Pr(K,Jt),It}for(Wt=u(Wt);Jt<tt.length;Jt++)Sn=ct(Wt,K,Jt,tt[Jt],mt),Sn!==null&&(e&&Sn.alternate!==null&&Wt.delete(Sn.key===null?Jt:Sn.key),k=m(Sn,k,Jt),he===null?It=Sn:he.sibling=Sn,he=Sn);return e&&Wt.forEach(function(ur){return i(K,ur)}),Ae&&Pr(K,Jt),It}function ie(K,k,tt,mt){if(tt==null)throw Error(a(151));for(var It=null,he=null,Wt=k,Jt=k=0,Sn=null,Re=tt.next();Wt!==null&&!Re.done;Jt++,Re=tt.next()){Wt.index>Jt?(Sn=Wt,Wt=null):Sn=Wt.sibling;var ur=st(K,Wt,Re.value,mt);if(ur===null){Wt===null&&(Wt=Sn);break}e&&Wt&&ur.alternate===null&&i(K,Wt),k=m(ur,k,Jt),he===null?It=ur:he.sibling=ur,he=ur,Wt=Sn}if(Re.done)return r(K,Wt),Ae&&Pr(K,Jt),It;if(Wt===null){for(;!Re.done;Jt++,Re=tt.next())Re=vt(K,Re.value,mt),Re!==null&&(k=m(Re,k,Jt),he===null?It=Re:he.sibling=Re,he=Re);return Ae&&Pr(K,Jt),It}for(Wt=u(Wt);!Re.done;Jt++,Re=tt.next())Re=ct(Wt,K,Jt,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&Wt.delete(Re.key===null?Jt:Re.key),k=m(Re,k,Jt),he===null?It=Re:he.sibling=Re,he=Re);return e&&Wt.forEach(function(EE){return i(K,EE)}),Ae&&Pr(K,Jt),It}function Je(K,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===d&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case c:t:{for(var It=tt.key;k!==null;){if(k.key===It){if(It=tt.type,It===d){if(k.tag===7){r(K,k.sibling),mt=h(k,tt.props.children),mt.return=K,K=mt;break t}}else if(k.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===w&&N_(It)===k.type){r(K,k.sibling),mt=h(k,tt.props),al(mt,tt),mt.return=K,K=mt;break t}r(K,k);break}else i(K,k);k=k.sibling}tt.type===d?(mt=qr(tt.props.children,K.mode,mt,tt.key),mt.return=K,K=mt):(mt=qu(tt.type,tt.key,tt.props,null,K.mode,mt),al(mt,tt),mt.return=K,K=mt)}return T(K);case f:t:{for(It=tt.key;k!==null;){if(k.key===It)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){r(K,k.sibling),mt=h(k,tt.children||[]),mt.return=K,K=mt;break t}else{r(K,k);break}else i(K,k);k=k.sibling}mt=zh(tt,K.mode,mt),mt.return=K,K=mt}return T(K);case w:return It=tt._init,tt=It(tt._payload),Je(K,k,tt,mt)}if(bt(tt))return Vt(K,k,tt,mt);if(P(tt)){if(It=P(tt),typeof It!="function")throw Error(a(150));return tt=It.call(tt),ie(K,k,tt,mt)}if(typeof tt.then=="function")return Je(K,k,Ru(tt),mt);if(tt.$$typeof===y)return Je(K,k,ku(K,tt),mt);wu(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(r(K,k.sibling),mt=h(k,tt),mt.return=K,K=mt):(r(K,k),mt=Ph(tt,K.mode,mt),mt.return=K,K=mt),T(K)):r(K,k)}return function(K,k,tt,mt){try{il=0;var It=Je(K,k,tt,mt);return Os=null,It}catch(Wt){if(Wt===el)throw Wt;var he=Ci(29,Wt,null,K.mode);return he.lanes=mt,he.return=K,he}finally{}}}var Br=O_(!0),P_=O_(!1),Ps=Rt(null),Cu=Rt(0);function z_(e,i){e=Aa,Pt(Cu,e),Pt(Ps,i),Aa=e|i.baseLanes}function Vf(){Pt(Cu,Aa),Pt(Ps,Ps.current)}function kf(){Aa=Cu.current,Kt(Ps),Kt(Cu)}var Ai=Rt(null),Ki=null;function Wa(e){var i=e.alternate;Pt(pn,pn.current&1),Pt(Ai,e),Ki===null&&(i===null||Ps.current!==null||i.memoizedState!==null)&&(Ki=e)}function B_(e){if(e.tag===22){if(Pt(pn,pn.current),Pt(Ai,e),Ki===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ki=e)}}else qa()}function qa(){Pt(pn,pn.current),Pt(Ai,Ai.current)}function _a(e){Kt(Ai),Ki===e&&(Ki=null),Kt(pn)}var pn=Rt(0);function Du(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var cM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},fM=o.unstable_scheduleCallback,hM=o.unstable_NormalPriority,mn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new cM,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&fM(hM,function(){e.controller.abort()})}var sl=null,Wf=0,zs=0,Bs=null;function dM(e,i){if(sl===null){var r=sl=[];Wf=0,zs=Qh(),Bs={status:"pending",value:void 0,then:function(u){r.push(u)}}}return Wf++,i.then(F_,F_),i}function F_(){if(--Wf===0&&sl!==null){Bs!==null&&(Bs.status="fulfilled");var e=sl;sl=null,zs=0,Bs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function pM(e,i){var r=[],u={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),u}var I_=b.S;b.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&dM(e,i),I_!==null&&I_(e,i)};var Fr=Rt(null);function qf(){var e=Fr.current;return e!==null?e:Ie.pooledCache}function Uu(e,i){i===null?Pt(Fr,Fr.current):Pt(Fr,i.pool)}function H_(){var e=qf();return e===null?null:{parent:mn._currentValue,pool:e}}var Ya=0,ce=null,Oe=null,an=null,Lu=!1,Fs=!1,Ir=!1,Nu=0,ol=0,Is=null,mM=0;function en(){throw Error(a(321))}function Yf(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!si(e[r],i[r]))return!1;return!0}function jf(e,i,r,u,h,m){return Ya=m,ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,b.H=e===null||e.memoizedState===null?Hr:ja,Ir=!1,m=r(u,h),Ir=!1,Fs&&(m=V_(i,r,u,h)),G_(e),m}function G_(e){b.H=Qi;var i=Oe!==null&&Oe.next!==null;if(Ya=0,an=Oe=ce=null,Lu=!1,ol=0,Is=null,i)throw Error(a(300));e===null||xn||(e=e.dependencies,e!==null&&Vu(e)&&(xn=!0))}function V_(e,i,r,u){ce=e;var h=0;do{if(Fs&&(Is=null),ol=0,Fs=!1,25<=h)throw Error(a(301));if(h+=1,an=Oe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}b.H=Gr,m=i(r,u)}while(Fs);return m}function _M(){var e=b.H,i=e.useState()[0];return i=typeof i.then=="function"?ll(i):i,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ce.flags|=1024),i}function Zf(){var e=Nu!==0;return Nu=0,e}function Kf(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Qf(e){if(Lu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Lu=!1}Ya=0,an=Oe=ce=null,Fs=!1,ol=Nu=0,Is=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ce.memoizedState=an=e:an=an.next=e,an}function rn(){if(Oe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var i=an===null?ce.memoizedState:an.next;if(i!==null)an=i,Oe=e;else{if(e===null)throw ce.alternate===null?Error(a(467)):Error(a(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},an===null?ce.memoizedState=an=e:an=an.next=e}return an}var Ou;Ou=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ll(e){var i=ol;return ol+=1,Is===null&&(Is=[]),e=U_(Is,e,i),i=ce,(an===null?i.memoizedState:an.next)===null&&(i=i.alternate,b.H=i===null||i.memoizedState===null?Hr:ja),e}function Pu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===y)return Ln(e)}throw Error(a(438,String(e)))}function Jf(e){var i=null,r=ce.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var u=ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Ou(),ce.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),u=0;u<e;u++)r[u]=R;return i.index++,r}function ga(e,i){return typeof i=="function"?i(e):i}function zu(e){var i=rn();return $f(i,Oe,e)}function $f(e,i,r){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=r;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var L=T=null,I=null,q=i,ht=!1;do{var vt=q.lane&-536870913;if(vt!==q.lane?(Se&vt)===vt:(Ya&vt)===vt){var st=q.revertLane;if(st===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),vt===zs&&(ht=!0);else if((Ya&st)===st){q=q.next,st===zs&&(ht=!0);continue}else vt={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(L=I=vt,T=m):I=I.next=vt,ce.lanes|=st,ir|=st;vt=q.action,Ir&&r(m,vt),m=q.hasEagerState?q.eagerState:r(m,vt)}else st={lane:vt,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(L=I=st,T=m):I=I.next=st,ce.lanes|=vt,ir|=vt;q=q.next}while(q!==null&&q!==i);if(I===null?T=m:I.next=L,!si(m,e.memoizedState)&&(xn=!0,ht&&(r=Bs,r!==null)))throw r;e.memoizedState=m,e.baseState=T,e.baseQueue=I,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function th(e){var i=rn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var u=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var T=h=h.next;do m=e(m,T.action),T=T.next;while(T!==h);si(m,i.memoizedState)||(xn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,u]}function k_(e,i,r){var u=ce,h=rn(),m=Ae;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var T=!si((Oe||h).memoizedState,r);if(T&&(h.memoizedState=r,xn=!0),h=h.queue,ih(q_.bind(null,u,h,e),[e]),h.getSnapshot!==i||T||an!==null&&an.memoizedState.tag&1){if(u.flags|=2048,Hs(9,W_.bind(null,u,h,r,i),{destroy:void 0},null),Ie===null)throw Error(a(349));m||(Ya&60)!==0||X_(u,i,r)}return r}function X_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ce.updateQueue,i===null?(i=Ou(),ce.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function W_(e,i,r,u){i.value=r,i.getSnapshot=u,Y_(i)&&j_(e)}function q_(e,i,r){return r(function(){Y_(i)&&j_(e)})}function Y_(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!si(e,r)}catch{return!0}}function j_(e){var i=Xa(e,2);i!==null&&Xn(i,e,2)}function eh(e){var i=Qn();if(typeof e=="function"){var r=e;if(e=r(),Ir){re(!0);try{r()}finally{re(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},i}function Z_(e,i,r,u){return e.baseState=r,$f(e,Oe,typeof u=="function"?u:ga)}function gM(e,i,r,u,h){if(Iu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};b.T!==null?r(!0):m.isTransition=!1,u(m),r=i.pending,r===null?(m.next=i.pending=m,K_(i,m)):(m.next=r.next,i.pending=r.next=m)}}function K_(e,i){var r=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=b.T,T={};b.T=T;try{var L=r(h,u),I=b.S;I!==null&&I(T,L),Q_(e,i,L)}catch(q){nh(e,i,q)}finally{b.T=m}}else try{m=r(h,u),Q_(e,i,m)}catch(q){nh(e,i,q)}}function Q_(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){J_(e,i,u)},function(u){return nh(e,i,u)}):J_(e,i,r)}function J_(e,i,r){i.status="fulfilled",i.value=r,$_(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,K_(e,r)))}function nh(e,i,r){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=r,$_(i),i=i.next;while(i!==u)}e.action=null}function $_(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function tg(e,i){return i}function eg(e,i){if(Ae){var r=Ie.formState;if(r!==null){t:{var u=ce;if(Ae){if(Rn){e:{for(var h=Rn,m=Zi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Gi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Rn=Gi(h.nextSibling),u=h.data==="F!";break t}}zr(u)}u=!1}u&&(i=r[0])}}return r=Qn(),r.memoizedState=r.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tg,lastRenderedState:i},r.queue=u,r=xg.bind(null,ce,u),u.dispatch=r,u=eh(!1),m=lh.bind(null,ce,!1,u.queue),u=Qn(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,r=gM.bind(null,ce,h,m,r),h.dispatch=r,u.memoizedState=e,[i,r,!1]}function ng(e){var i=rn();return ig(i,Oe,e)}function ig(e,i,r){i=$f(e,i,tg)[0],e=zu(ga)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?ll(i):i;var u=rn(),h=u.queue,m=h.dispatch;return r!==u.memoizedState&&(ce.flags|=2048,Hs(9,vM.bind(null,h,r),{destroy:void 0},null)),[i,m,e]}function vM(e,i){e.action=i}function ag(e){var i=rn(),r=Oe;if(r!==null)return ig(i,r,e);rn(),i=i.memoizedState,r=rn();var u=r.queue.dispatch;return r.memoizedState=e,[i,u,!1]}function Hs(e,i,r,u){return e={tag:e,create:i,inst:r,deps:u,next:null},i=ce.updateQueue,i===null&&(i=Ou(),ce.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(u=r.next,r.next=e,e.next=u,i.lastEffect=e),e}function rg(){return rn().memoizedState}function Bu(e,i,r,u){var h=Qn();ce.flags|=e,h.memoizedState=Hs(1|i,r,{destroy:void 0},u===void 0?null:u)}function Fu(e,i,r,u){var h=rn();u=u===void 0?null:u;var m=h.memoizedState.inst;Oe!==null&&u!==null&&Yf(u,Oe.memoizedState.deps)?h.memoizedState=Hs(i,r,m,u):(ce.flags|=e,h.memoizedState=Hs(1|i,r,m,u))}function sg(e,i){Bu(8390656,8,e,i)}function ih(e,i){Fu(2048,8,e,i)}function og(e,i){return Fu(4,2,e,i)}function lg(e,i){return Fu(4,4,e,i)}function ug(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function cg(e,i,r){r=r!=null?r.concat([e]):null,Fu(4,4,ug.bind(null,i,e),r)}function ah(){}function fg(e,i){var r=rn();i=i===void 0?null:i;var u=r.memoizedState;return i!==null&&Yf(i,u[1])?u[0]:(r.memoizedState=[e,i],e)}function hg(e,i){var r=rn();i=i===void 0?null:i;var u=r.memoizedState;if(i!==null&&Yf(i,u[1]))return u[0];if(u=e(),Ir){re(!0);try{e()}finally{re(!1)}}return r.memoizedState=[u,i],u}function rh(e,i,r){return r===void 0||(Ya&1073741824)!==0?e.memoizedState=i:(e.memoizedState=r,e=p0(),ce.lanes|=e,ir|=e,r)}function dg(e,i,r,u){return si(r,i)?r:Ps.current!==null?(e=rh(e,r,u),si(e,i)||(xn=!0),e):(Ya&42)===0?(xn=!0,e.memoizedState=r):(e=p0(),ce.lanes|=e,ir|=e,i)}function pg(e,i,r,u,h){var m=W.p;W.p=m!==0&&8>m?m:8;var T=b.T,L={};b.T=L,lh(e,!1,i,r);try{var I=h(),q=b.S;if(q!==null&&q(L,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=pM(I,u);ul(e,i,ht,ci(e))}else ul(e,i,u,ci(e))}catch(vt){ul(e,i,{then:function(){},status:"rejected",reason:vt},ci())}finally{W.p=m,b.T=T}}function xM(){}function sh(e,i,r,u){if(e.tag!==5)throw Error(a(476));var h=mg(e).queue;pg(e,h,i,ft,r===null?xM:function(){return _g(e),r(u)})}function mg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:ft},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function _g(e){var i=mg(e).next.queue;ul(e,i,{},ci())}function oh(){return Ln(Cl)}function gg(){return rn().memoizedState}function vg(){return rn().memoizedState}function yM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=ci();e=Qa(r);var u=Ja(i,e,r);u!==null&&(Xn(u,i,r),hl(u,i,r)),i={cache:Xf()},e.payload=i;return}i=i.return}}function SM(e,i,r){var u=ci();r={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Iu(e)?yg(i,r):(r=Bf(e,i,r,u),r!==null&&(Xn(r,e,u),Sg(r,i,u)))}function xg(e,i,r){var u=ci();ul(e,i,r,u)}function ul(e,i,r,u){var h={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))yg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,L=m(T,r);if(h.hasEagerState=!0,h.eagerState=L,si(L,T))return Mu(e,i,h,0),Ie===null&&Su(),!1}catch{}finally{}if(r=Bf(e,i,h,u),r!==null)return Xn(r,e,u),Sg(r,i,u),!0}return!1}function lh(e,i,r,u){if(u={lane:2,revertLane:Qh(),action:u,hasEagerState:!1,eagerState:null,next:null},Iu(e)){if(i)throw Error(a(479))}else i=Bf(e,r,u,2),i!==null&&Xn(i,e,2)}function Iu(e){var i=e.alternate;return e===ce||i!==null&&i===ce}function yg(e,i){Fs=Lu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Sg(e,i,r){if((r&4194176)!==0){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,ji(e,r)}}var Qi={readContext:Ln,use:Pu,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en};Qi.useCacheRefresh=en,Qi.useMemoCache=en,Qi.useHostTransitionStatus=en,Qi.useFormState=en,Qi.useActionState=en,Qi.useOptimistic=en;var Hr={readContext:Ln,use:Pu,useCallback:function(e,i){return Qn().memoizedState=[e,i===void 0?null:i],e},useContext:Ln,useEffect:sg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Bu(4194308,4,ug.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Bu(4194308,4,e,i)},useInsertionEffect:function(e,i){Bu(4,2,e,i)},useMemo:function(e,i){var r=Qn();i=i===void 0?null:i;var u=e();if(Ir){re(!0);try{e()}finally{re(!1)}}return r.memoizedState=[u,i],u},useReducer:function(e,i,r){var u=Qn();if(r!==void 0){var h=r(i);if(Ir){re(!0);try{r(i)}finally{re(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=SM.bind(null,ce,e),[u.memoizedState,e]},useRef:function(e){var i=Qn();return e={current:e},i.memoizedState=e},useState:function(e){e=eh(e);var i=e.queue,r=xg.bind(null,ce,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:ah,useDeferredValue:function(e,i){var r=Qn();return rh(r,e,i)},useTransition:function(){var e=eh(!1);return e=pg.bind(null,ce,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var u=ce,h=Qn();if(Ae){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Ie===null)throw Error(a(349));(Se&60)!==0||X_(u,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,sg(q_.bind(null,u,m,e),[e]),u.flags|=2048,Hs(9,W_.bind(null,u,m,r,i),{destroy:void 0},null),r},useId:function(){var e=Qn(),i=Ie.identifierPrefix;if(Ae){var r=ma,u=pa;r=(u&~(1<<32-Yt(u)-1)).toString(32)+r,i=":"+i+"R"+r,r=Nu++,0<r&&(i+="H"+r.toString(32)),i+=":"}else r=mM++,i=":"+i+"r"+r.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return Qn().memoizedState=yM.bind(null,ce)}};Hr.useMemoCache=Jf,Hr.useHostTransitionStatus=oh,Hr.useFormState=eg,Hr.useActionState=eg,Hr.useOptimistic=function(e){var i=Qn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=lh.bind(null,ce,!0,r),r.dispatch=i,[e,i]};var ja={readContext:Ln,use:Pu,useCallback:fg,useContext:Ln,useEffect:ih,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:zu,useRef:rg,useState:function(){return zu(ga)},useDebugValue:ah,useDeferredValue:function(e,i){var r=rn();return dg(r,Oe.memoizedState,e,i)},useTransition:function(){var e=zu(ga)[0],i=rn().memoizedState;return[typeof e=="boolean"?e:ll(e),i]},useSyncExternalStore:k_,useId:gg};ja.useCacheRefresh=vg,ja.useMemoCache=Jf,ja.useHostTransitionStatus=oh,ja.useFormState=ng,ja.useActionState=ng,ja.useOptimistic=function(e,i){var r=rn();return Z_(r,Oe,e,i)};var Gr={readContext:Ln,use:Pu,useCallback:fg,useContext:Ln,useEffect:ih,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:th,useRef:rg,useState:function(){return th(ga)},useDebugValue:ah,useDeferredValue:function(e,i){var r=rn();return Oe===null?rh(r,e,i):dg(r,Oe.memoizedState,e,i)},useTransition:function(){var e=th(ga)[0],i=rn().memoizedState;return[typeof e=="boolean"?e:ll(e),i]},useSyncExternalStore:k_,useId:gg};Gr.useCacheRefresh=vg,Gr.useMemoCache=Jf,Gr.useHostTransitionStatus=oh,Gr.useFormState=ag,Gr.useActionState=ag,Gr.useOptimistic=function(e,i){var r=rn();return Oe!==null?Z_(r,Oe,e,i):(r.baseState=e,[e,r.queue.dispatch])};function uh(e,i,r,u){i=e.memoizedState,r=r(u,i),r=r==null?i:A({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ch={isMounted:function(e){return(e=e._reactInternals)?X(e)===e:!1},enqueueSetState:function(e,i,r){e=e._reactInternals;var u=ci(),h=Qa(u);h.payload=i,r!=null&&(h.callback=r),i=Ja(e,h,u),i!==null&&(Xn(i,e,u),hl(i,e,u))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var u=ci(),h=Qa(u);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Ja(e,h,u),i!==null&&(Xn(i,e,u),hl(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=ci(),u=Qa(r);u.tag=2,i!=null&&(u.callback=i),i=Ja(e,u,r),i!==null&&(Xn(i,e,r),hl(i,e,r))}};function Mg(e,i,r,u,h,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,T):i.prototype&&i.prototype.isPureReactComponent?!Ko(r,u)||!Ko(h,m):!0}function Eg(e,i,r,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,u),i.state!==e&&ch.enqueueReplaceState(i,i.state,null)}function Vr(e,i){var r=i;if("ref"in i){r={};for(var u in i)u!=="ref"&&(r[u]=i[u])}if(e=e.defaultProps){r===i&&(r=A({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}var Hu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Tg(e){Hu(e)}function bg(e){console.error(e)}function Ag(e){Hu(e)}function Gu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Rg(e,i,r){try{var u=e.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function fh(e,i,r){return r=Qa(r),r.tag=3,r.payload={element:null},r.callback=function(){Gu(e,i)},r}function wg(e){return e=Qa(e),e.tag=3,e}function Cg(e,i,r,u){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){Rg(i,r,u)}}var T=r.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Rg(i,r,u),typeof h!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var L=u.stack;this.componentDidCatch(u.value,{componentStack:L!==null?L:""})})}function MM(e,i,r,u,h){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=r.alternate,i!==null&&fl(i,r,h,!0),r=Ai.current,r!==null){switch(r.tag){case 13:return Ki===null?qh():r.alternate===null&&Qe===0&&(Qe=3),r.flags&=-257,r.flags|=65536,r.lanes=h,u===Gf?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([u]):i.add(u),jh(e,u,h)),!1;case 22:return r.flags|=65536,u===Gf?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([u]):r.add(u)),jh(e,u,h)),!1}throw Error(a(435,r.tag))}return jh(e,u,h),qh(),!1}if(Ae)return i=Ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==Hf&&(e=Error(a(422),{cause:u}),tl(Ei(e,r)))):(u!==Hf&&(i=Error(a(423),{cause:u}),tl(Ei(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Ei(u,r),h=fh(e.stateNode,u,h),Ah(e,h),Qe!==4&&(Qe=2)),!1;var m=Error(a(520),{cause:u});if(m=Ei(m,r),yl===null?yl=[m]:yl.push(m),Qe!==4&&(Qe=2),i===null)return!0;u=Ei(u,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=fh(r.stateNode,u,e),Ah(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ar===null||!ar.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=wg(h),Cg(h,e,r,u),Ah(r,h),!1}r=r.return}while(r!==null);return!1}var Dg=Error(a(461)),xn=!1;function wn(e,i,r,u){i.child=e===null?P_(i,null,r,u):Br(i,e.child,r,u)}function Ug(e,i,r,u,h){r=r.render;var m=i.ref;if("ref"in u){var T={};for(var L in u)L!=="ref"&&(T[L]=u[L])}else T=u;return Xr(i),u=jf(e,i,r,T,m,h),L=Zf(),e!==null&&!xn?(Kf(e,i,h),va(e,i,h)):(Ae&&L&&Ff(i),i.flags|=1,wn(e,i,u,h),i.child)}function Lg(e,i,r,u,h){if(e===null){var m=r.type;return typeof m=="function"&&!Oh(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Ng(e,i,m,u,h)):(e=qu(r.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!yh(e,h)){var T=m.memoizedProps;if(r=r.compare,r=r!==null?r:Ko,r(T,u)&&e.ref===i.ref)return va(e,i,h)}return i.flags|=1,e=nr(m,u),e.ref=i.ref,e.return=i,i.child=e}function Ng(e,i,r,u,h){if(e!==null){var m=e.memoizedProps;if(Ko(m,u)&&e.ref===i.ref)if(xn=!1,i.pendingProps=u=m,yh(e,h))(e.flags&131072)!==0&&(xn=!0);else return i.lanes=e.lanes,va(e,i,h)}return hh(e,i,r,u,h)}function Og(e,i,r){var u=i.pendingProps,h=u.children,m=(i.stateNode._pendingVisibility&2)!==0,T=e!==null?e.memoizedState:null;if(cl(e,i),u.mode==="hidden"||m){if((i.flags&128)!==0){if(u=T!==null?T.baseLanes|r:r,e!==null){for(h=i.child=e.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;i.childLanes=m&~u}else i.childLanes=0,i.child=null;return Pg(e,i,u,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uu(i,T!==null?T.cachePool:null),T!==null?z_(i,T):Vf(),B_(i);else return i.lanes=i.childLanes=536870912,Pg(e,i,T!==null?T.baseLanes|r:r,r)}else T!==null?(Uu(i,T.cachePool),z_(i,T),qa(),i.memoizedState=null):(e!==null&&Uu(i,null),Vf(),qa());return wn(e,i,h,r),i.child}function Pg(e,i,r,u){var h=qf();return h=h===null?null:{parent:mn._currentValue,pool:h},i.memoizedState={baseLanes:r,cachePool:h},e!==null&&Uu(i,null),Vf(),B_(i),e!==null&&fl(e,i,u,!0),null}function cl(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=2097664)}}function hh(e,i,r,u,h){return Xr(i),r=jf(e,i,r,u,void 0,h),u=Zf(),e!==null&&!xn?(Kf(e,i,h),va(e,i,h)):(Ae&&u&&Ff(i),i.flags|=1,wn(e,i,r,h),i.child)}function zg(e,i,r,u,h,m){return Xr(i),i.updateQueue=null,r=V_(i,u,r,h),G_(e),u=Zf(),e!==null&&!xn?(Kf(e,i,m),va(e,i,m)):(Ae&&u&&Ff(i),i.flags|=1,wn(e,i,r,m),i.child)}function Bg(e,i,r,u,h){if(Xr(i),i.stateNode===null){var m=Us,T=r.contextType;typeof T=="object"&&T!==null&&(m=Ln(T)),m=new r(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=ch,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},Th(i),T=r.contextType,m.context=typeof T=="object"&&T!==null?Ln(T):Us,m.state=i.memoizedState,T=r.getDerivedStateFromProps,typeof T=="function"&&(uh(i,r,T,u),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&ch.enqueueReplaceState(m,m.state,null),pl(i,u,m,h),dl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var L=i.memoizedProps,I=Vr(r,L);m.props=I;var q=m.context,ht=r.contextType;T=Us,typeof ht=="object"&&ht!==null&&(T=Ln(ht));var vt=r.getDerivedStateFromProps;ht=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L||q!==T)&&Eg(i,m,u,T),Ka=!1;var st=i.memoizedState;m.state=st,pl(i,u,m,h),dl(),q=i.memoizedState,L||st!==q||Ka?(typeof vt=="function"&&(uh(i,r,vt,u),q=i.memoizedState),(I=Ka||Mg(i,r,I,u,st,q,T))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=q),m.props=u,m.state=q,m.context=T,u=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,bh(e,i),T=i.memoizedProps,ht=Vr(r,T),m.props=ht,vt=i.pendingProps,st=m.context,q=r.contextType,I=Us,typeof q=="object"&&q!==null&&(I=Ln(q)),L=r.getDerivedStateFromProps,(q=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==vt||st!==I)&&Eg(i,m,u,I),Ka=!1,st=i.memoizedState,m.state=st,pl(i,u,m,h),dl();var ct=i.memoizedState;T!==vt||st!==ct||Ka||e!==null&&e.dependencies!==null&&Vu(e.dependencies)?(typeof L=="function"&&(uh(i,r,L,u),ct=i.memoizedState),(ht=Ka||Mg(i,r,ht,u,st,ct,I)||e!==null&&e.dependencies!==null&&Vu(e.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ct,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ct,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ct),m.props=u,m.state=ct,m.context=I,u=ht):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,cl(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=Br(i,e.child,null,h),i.child=Br(i,null,r,h)):wn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=va(e,i,h),e}function Fg(e,i,r,u){return $o(),i.flags|=256,wn(e,i,r,u),i.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function ph(e){return{baseLanes:e,cachePool:H_()}}function mh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Di),e}function Ig(e,i,r){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ae){if(h?Wa(i):qa(),Ae){var L=Rn,I;if(I=L){t:{for(I=L,L=Zi;I.nodeType!==8;){if(!L){L=null;break t}if(I=Gi(I.nextSibling),I===null){L=null;break t}}L=I}L!==null?(i.memoizedState={dehydrated:L,treeContext:Or!==null?{id:pa,overflow:ma}:null,retryLane:536870912},I=Ci(18,null,null,0),I.stateNode=L,I.return=i,i.child=I,kn=i,Rn=null,I=!0):I=!1}I||zr(i)}if(L=i.memoizedState,L!==null&&(L=L.dehydrated,L!==null))return L.data==="$!"?i.lanes=16:i.lanes=536870912,null;_a(i)}return L=u.children,u=u.fallback,h?(qa(),h=i.mode,L=gh({mode:"hidden",children:L},h),u=qr(u,h,r,null),L.return=i,u.return=i,L.sibling=u,i.child=L,h=i.child,h.memoizedState=ph(r),h.childLanes=mh(e,T,r),i.memoizedState=dh,u):(Wa(i),_h(i,L))}if(I=e.memoizedState,I!==null&&(L=I.dehydrated,L!==null)){if(m)i.flags&256?(Wa(i),i.flags&=-257,i=vh(e,i,r)):i.memoizedState!==null?(qa(),i.child=e.child,i.flags|=128,i=null):(qa(),h=u.fallback,L=i.mode,u=gh({mode:"visible",children:u.children},L),h=qr(h,L,r,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,Br(i,e.child,null,r),u=i.child,u.memoizedState=ph(r),u.childLanes=mh(e,T,r),i.memoizedState=dh,i=h);else if(Wa(i),L.data==="$!"){if(T=L.nextSibling&&L.nextSibling.dataset,T)var q=T.dgst;T=q,u=Error(a(419)),u.stack="",u.digest=T,tl({value:u,source:null,stack:null}),i=vh(e,i,r)}else if(xn||fl(e,i,r,!1),T=(r&e.childLanes)!==0,xn||T){if(T=Ie,T!==null){if(u=r&-r,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(T.suspendedLanes|r))!==0?0:u,u!==0&&u!==I.retryLane)throw I.retryLane=u,Xa(e,u),Xn(T,e,u),Dg}L.data==="$?"||qh(),i=vh(e,i,r)}else L.data==="$?"?(i.flags|=128,i.child=e.child,i=BM.bind(null,e),L._reactRetry=i,i=null):(e=I.treeContext,Rn=Gi(L.nextSibling),kn=i,Ae=!0,Ii=null,Zi=!1,e!==null&&(Ti[bi++]=pa,Ti[bi++]=ma,Ti[bi++]=Or,pa=e.id,ma=e.overflow,Or=i),i=_h(i,u.children),i.flags|=4096);return i}return h?(qa(),h=u.fallback,L=i.mode,I=e.child,q=I.sibling,u=nr(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&31457280,q!==null?h=nr(q,h):(h=qr(h,L,r,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,L=e.child.memoizedState,L===null?L=ph(r):(I=L.cachePool,I!==null?(q=mn._currentValue,I=I.parent!==q?{parent:q,pool:q}:I):I=H_(),L={baseLanes:L.baseLanes|r,cachePool:I}),h.memoizedState=L,h.childLanes=mh(e,T,r),i.memoizedState=dh,u):(Wa(i),r=e.child,e=r.sibling,r=nr(r,{mode:"visible",children:u.children}),r.return=i,r.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=r,i.memoizedState=null,r)}function _h(e,i){return i=gh({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function gh(e,i){return f0(e,i,0,null)}function vh(e,i,r){return Br(i,e.child,null,r),e=_h(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Hg(e,i,r){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),Mh(e.return,i,r)}function xh(e,i,r,u,h){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=r,m.tailMode=h)}function Gg(e,i,r){var u=i.pendingProps,h=u.revealOrder,m=u.tail;if(wn(e,i,u.children,r),u=pn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hg(e,r,i);else if(e.tag===19)Hg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(Pt(pn,u),h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Du(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),xh(i,!1,h,r,m);break;case"backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Du(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}xh(i,!0,r,null,m);break;case"together":xh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function va(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ir|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(fl(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=nr(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=nr(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function yh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Vu(e)))}function EM(e,i,r){switch(i.tag){case 3:bn(i,i.stateNode.containerInfo),Za(i,mn,e.memoizedState.cache),$o();break;case 27:case 5:fe(i);break;case 4:bn(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(Wa(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Ig(e,i,r):(Wa(i),e=va(e,i,r),e!==null?e.sibling:null);Wa(i);break;case 19:var h=(e.flags&128)!==0;if(u=(r&i.childLanes)!==0,u||(fl(e,i,r,!1),u=(r&i.childLanes)!==0),h){if(u)return Gg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Pt(pn,pn.current),u)break;return null;case 22:case 23:return i.lanes=0,Og(e,i,r);case 24:Za(i,mn,e.memoizedState.cache)}return va(e,i,r)}function Vg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)xn=!0;else{if(!yh(e,r)&&(i.flags&128)===0)return xn=!1,EM(e,i,r);xn=(e.flags&131072)!==0}else xn=!1,Ae&&(i.flags&1048576)!==0&&A_(i,bu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var u=i.elementType,h=u._init;if(u=h(u._payload),i.type=u,typeof u=="function")Oh(u)?(e=Vr(u,e),i.tag=1,i=Bg(null,i,u,e,r)):(i.tag=0,i=hh(null,i,u,e,r));else{if(u!=null){if(h=u.$$typeof,h===E){i.tag=11,i=Ug(null,i,u,e,r);break t}else if(h===x){i.tag=14,i=Lg(null,i,u,e,r);break t}}throw i=B(u)||u,Error(a(306,i,""))}}return i;case 0:return hh(e,i,i.type,i.pendingProps,r);case 1:return u=i.type,h=Vr(u,i.pendingProps),Bg(e,i,u,h,r);case 3:t:{if(bn(i,i.stateNode.containerInfo),e===null)throw Error(a(387));var m=i.pendingProps;h=i.memoizedState,u=h.element,bh(e,i),pl(i,m,null,r);var T=i.memoizedState;if(m=T.cache,Za(i,mn,m),m!==h.cache&&Eh(i,[mn],r,!0),dl(),m=T.element,h.isDehydrated)if(h={element:m,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Fg(e,i,m,r);break t}else if(m!==u){u=Ei(Error(a(424)),i),tl(u),i=Fg(e,i,m,r);break t}else for(Rn=Gi(i.stateNode.containerInfo.firstChild),kn=i,Ae=!0,Ii=null,Zi=!0,r=P_(i,null,m,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($o(),m===u){i=va(e,i,r);break t}wn(e,i,m,r)}i=i.child}return i;case 26:return cl(e,i),e===null?(r=W0(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ae||(r=i.type,e=i.pendingProps,u=ac(ae.current).createElement(r),u[fn]=i,u[hn]=e,Cn(u,r,e),$(u),i.stateNode=u):i.memoizedState=W0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return fe(i),e===null&&Ae&&(u=i.stateNode=V0(i.type,i.pendingProps,ae.current),kn=i,Zi=!0,Rn=Gi(u.firstChild)),u=i.pendingProps.children,e!==null||Ae?wn(e,i,u,r):i.child=Br(i,null,u,r),cl(e,i),i.child;case 5:return e===null&&Ae&&((h=u=Rn)&&(u=$M(u,i.type,i.pendingProps,Zi),u!==null?(i.stateNode=u,kn=i,Rn=Gi(u.firstChild),Zi=!1,h=!0):h=!1),h||zr(i)),fe(i),h=i.type,m=i.pendingProps,T=e!==null?e.memoizedProps:null,u=m.children,sd(h,m)?u=null:T!==null&&sd(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=jf(e,i,_M,null,null,r),Cl._currentValue=h),cl(e,i),wn(e,i,u,r),i.child;case 6:return e===null&&Ae&&((e=r=Rn)&&(r=tE(r,i.pendingProps,Zi),r!==null?(i.stateNode=r,kn=i,Rn=null,e=!0):e=!1),e||zr(i)),null;case 13:return Ig(e,i,r);case 4:return bn(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=Br(i,null,u,r):wn(e,i,u,r),i.child;case 11:return Ug(e,i,i.type,i.pendingProps,r);case 7:return wn(e,i,i.pendingProps,r),i.child;case 8:return wn(e,i,i.pendingProps.children,r),i.child;case 12:return wn(e,i,i.pendingProps.children,r),i.child;case 10:return u=i.pendingProps,Za(i,i.type,u.value),wn(e,i,u.children,r),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,Xr(i),h=Ln(h),u=u(h),i.flags|=1,wn(e,i,u,r),i.child;case 14:return Lg(e,i,i.type,i.pendingProps,r);case 15:return Ng(e,i,i.type,i.pendingProps,r);case 19:return Gg(e,i,r);case 22:return Og(e,i,r);case 24:return Xr(i),u=Ln(mn),e===null?(h=qf(),h===null&&(h=Ie,m=Xf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:u,cache:h},Th(i),Za(i,mn,h)):((e.lanes&r)!==0&&(bh(e,i),pl(i,null,null,r),dl()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Za(i,mn,u)):(u=m.cache,Za(i,mn,u),u!==h.cache&&Eh(i,[mn],r,!0))),wn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}var Sh=Rt(null),kr=null,xa=null;function Za(e,i,r){Pt(Sh,i._currentValue),i._currentValue=r}function ya(e){e._currentValue=Sh.current,Kt(Sh)}function Mh(e,i,r){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===r)break;e=e.return}}function Eh(e,i,r,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var L=m;m=h;for(var I=0;I<i.length;I++)if(L.context===i[I]){m.lanes|=r,L=m.alternate,L!==null&&(L.lanes|=r),Mh(m.return,r,e),u||(T=null);break t}m=L.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(a(341));T.lanes|=r,m=T.alternate,m!==null&&(m.lanes|=r),Mh(T,r,e),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===e){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function fl(e,i,r,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var L=h.type;si(h.pendingProps.value,T.value)||(e!==null?e.push(L):e=[L])}}else if(h===V.current){if(T=h.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Cl):e=[Cl])}h=h.return}e!==null&&Eh(i,e,r,u),i.flags|=262144}function Vu(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xr(e){kr=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return kg(kr,e)}function ku(e,i){return kr===null&&Xr(e),kg(e,i)}function kg(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},xa===null){if(e===null)throw Error(a(308));xa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else xa=xa.next=i;return r}var Ka=!1;function Th(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,i,r){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(qe&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Eu(e),T_(e,null,r),i}return Mu(e,u,i,r),Eu(e)}function hl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194176)!==0)){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,ji(e,r)}}function Ah(e,i){var r=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var T={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Rh=!1;function dl(){if(Rh){var e=Bs;if(e!==null)throw e}}function pl(e,i,r,u){Rh=!1;var h=e.updateQueue;Ka=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var I=L,q=I.next;I.next=null,T===null?m=q:T.next=q,T=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,L=ht.lastBaseUpdate,L!==T&&(L===null?ht.firstBaseUpdate=q:L.next=q,ht.lastBaseUpdate=I))}if(m!==null){var vt=h.baseState;T=0,ht=q=I=null,L=m;do{var st=L.lane&-536870913,ct=st!==L.lane;if(ct?(Se&st)===st:(u&st)===st){st!==0&&st===zs&&(Rh=!0),ht!==null&&(ht=ht.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var Vt=e,ie=L;st=i;var Je=r;switch(ie.tag){case 1:if(Vt=ie.payload,typeof Vt=="function"){vt=Vt.call(Je,vt,st);break t}vt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ie.payload,st=typeof Vt=="function"?Vt.call(Je,vt,st):Vt,st==null)break t;vt=A({},vt,st);break t;case 2:Ka=!0}}st=L.callback,st!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=h.callbacks,ct===null?h.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ht===null?(q=ht=ct,I=vt):ht=ht.next=ct,T|=st;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;ct=L,L=ct.next,ct.next=null,h.lastBaseUpdate=ct,h.shared.pending=null}}while(!0);ht===null&&(I=vt),h.baseState=I,h.firstBaseUpdate=q,h.lastBaseUpdate=ht,m===null&&(h.shared.lanes=0),ir|=T,e.lanes=T,e.memoizedState=vt}}function Xg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Wg(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Xg(r[e],i)}function ml(e,i){try{var r=i.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){u=void 0;var m=r.create,T=r.inst;u=m(),T.destroy=u}r=r.next}while(r!==h)}}catch(L){Be(i,i.return,L)}}function $a(e,i,r){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var T=u.inst,L=T.destroy;if(L!==void 0){T.destroy=void 0,h=i;var I=r;try{L()}catch(q){Be(h,I,q)}}}u=u.next}while(u!==m)}}catch(q){Be(i,i.return,q)}}function qg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{Wg(i,r)}catch(u){Be(e,e.return,u)}}}function Yg(e,i,r){r.props=Vr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(u){Be(e,i,u)}}function Wr(e,i){try{var r=e.ref;if(r!==null){var u=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=u;break;default:h=u}typeof r=="function"?e.refCleanup=r(h):r.current=h}}catch(m){Be(e,i,m)}}function oi(e,i){var r=e.ref,u=e.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(h){Be(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Be(e,i,h)}else r.current=null}function jg(e){var i=e.type,r=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break t;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(h){Be(e,e.return,h)}}function Zg(e,i,r){try{var u=e.stateNode;jM(u,e.type,r,i),u[hn]=i}catch(h){Be(e,e.return,h)}}function Kg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function wh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Kg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ch(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?r.nodeType===8?r.parentNode.insertBefore(e,i):r.insertBefore(e,i):(r.nodeType===8?(i=r.parentNode,i.insertBefore(e,r)):(i=r,i.appendChild(e)),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ic));else if(u!==4&&u!==27&&(e=e.child,e!==null))for(Ch(e,i,r),e=e.sibling;e!==null;)Ch(e,i,r),e=e.sibling}function Xu(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(u!==4&&u!==27&&(e=e.child,e!==null))for(Xu(e,i,r),e=e.sibling;e!==null;)Xu(e,i,r),e=e.sibling}var Sa=!1,Ke=!1,Dh=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,yn=null,Jg=!1;function TM(e,i){if(e=e.containerInfo,ad=cc,e=m_(e),Lf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var T=0,L=-1,I=-1,q=0,ht=0,vt=e,st=null;e:for(;;){for(var ct;vt!==r||h!==0&&vt.nodeType!==3||(L=T+h),vt!==m||u!==0&&vt.nodeType!==3||(I=T+u),vt.nodeType===3&&(T+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)st=vt,vt=ct;for(;;){if(vt===e)break e;if(st===r&&++q===h&&(L=T),st===m&&++ht===u&&(I=T),(ct=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=ct}r=L===-1||I===-1?null:{start:L,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(rd={focusedElem:e,selectionRange:r},cc=!1,yn=i;yn!==null;)if(i=yn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,yn=e;else for(;yn!==null;){switch(i=yn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,u=r.stateNode;try{var Vt=Vr(r.type,h,r.elementType===r.type);e=u.getSnapshotBeforeUpdate(Vt,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Be(r,r.return,ie)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)ud(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,yn=e;break}yn=i.return}return Vt=Jg,Jg=!1,Vt}function $g(e,i,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Ea(e,r),u&4&&ml(5,r);break;case 1:if(Ea(e,r),u&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(L){Be(r,r.return,L)}else{var h=Vr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(L){Be(r,r.return,L)}}u&64&&qg(r),u&512&&Wr(r,r.return);break;case 3:if(Ea(e,r),u&64&&(u=r.updateQueue,u!==null)){if(e=null,r.child!==null)switch(r.child.tag){case 27:case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}try{Wg(u,e)}catch(L){Be(r,r.return,L)}}break;case 26:Ea(e,r),u&512&&Wr(r,r.return);break;case 27:case 5:Ea(e,r),i===null&&u&4&&jg(r),u&512&&Wr(r,r.return);break;case 12:Ea(e,r);break;case 13:Ea(e,r),u&4&&n0(e,r);break;case 22:if(h=r.memoizedState!==null||Sa,!h){i=i!==null&&i.memoizedState!==null||Ke;var m=Sa,T=Ke;Sa=h,(Ke=i)&&!T?tr(e,r,(r.subtreeFlags&8772)!==0):Ea(e,r),Sa=m,Ke=T}u&512&&(r.memoizedProps.mode==="manual"?Wr(r,r.return):oi(r,r.return));break;default:Ea(e,r)}}function t0(e){var i=e.alternate;i!==null&&(e.alternate=null,t0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Vo(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,li=!1;function Ma(e,i,r){for(r=r.child;r!==null;)e0(e,i,r),r=r.sibling}function e0(e,i,r){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Zt,r)}catch{}switch(r.tag){case 26:Ke||oi(r,i),Ma(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ke||oi(r,i);var u=sn,h=li;for(sn=r.stateNode,Ma(e,i,r),r=r.stateNode,i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Vo(r),sn=u,li=h;break;case 5:Ke||oi(r,i);case 6:h=sn;var m=li;if(sn=null,Ma(e,i,r),sn=h,li=m,sn!==null)if(li)try{e=sn,u=r.stateNode,e.nodeType===8?e.parentNode.removeChild(u):e.removeChild(u)}catch(T){Be(r,i,T)}else try{sn.removeChild(r.stateNode)}catch(T){Be(r,i,T)}break;case 18:sn!==null&&(li?(i=sn,r=r.stateNode,i.nodeType===8?ld(i.parentNode,r):i.nodeType===1&&ld(i,r),Nl(i)):ld(sn,r.stateNode));break;case 4:u=sn,h=li,sn=r.stateNode.containerInfo,li=!0,Ma(e,i,r),sn=u,li=h;break;case 0:case 11:case 14:case 15:Ke||$a(2,r,i),Ke||$a(4,r,i),Ma(e,i,r);break;case 1:Ke||(oi(r,i),u=r.stateNode,typeof u.componentWillUnmount=="function"&&Yg(r,i,u)),Ma(e,i,r);break;case 21:Ma(e,i,r);break;case 22:Ke||oi(r,i),Ke=(u=Ke)||r.memoizedState!==null,Ma(e,i,r),Ke=u;break;default:Ma(e,i,r)}}function n0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nl(e)}catch(r){Be(i,i.return,r)}}function bM(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Qg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Qg),i;default:throw Error(a(435,e.tag))}}function Uh(e,i){var r=bM(e);i.forEach(function(u){var h=FM.bind(null,e,u);r.has(u)||(r.add(u),u.then(h,h))})}function Ri(e,i){var r=i.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],m=e,T=i,L=T;t:for(;L!==null;){switch(L.tag){case 27:case 5:sn=L.stateNode,li=!1;break t;case 3:sn=L.stateNode.containerInfo,li=!0;break t;case 4:sn=L.stateNode.containerInfo,li=!0;break t}L=L.return}if(sn===null)throw Error(a(160));e0(m,T,h),sn=null,li=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)i0(i,e),i=i.sibling}var Hi=null;function i0(e,i){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ri(i,e),wi(e),u&4&&($a(3,e,e.return),ml(3,e),$a(5,e,e.return));break;case 1:Ri(i,e),wi(e),u&512&&(Ke||r===null||oi(r,r.return)),u&64&&Sa&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var h=Hi;if(Ri(i,e),wi(e),u&512&&(Ke||r===null||oi(r,r.return)),u&4){var m=r!==null?r.memoizedState:null;if(u=e.memoizedState,r===null)if(u===null)if(e.stateNode===null){t:{u=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Dr]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Cn(m,u,r),m[fn]=e,$(m),u=m;break t;case"link":var T=j0("link","href",h).get(u+(r.href||""));if(T){for(var L=0;L<T.length;L++)if(m=T[L],m.getAttribute("href")===(r.href==null?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){T.splice(L,1);break e}}m=h.createElement(u),Cn(m,u,r),h.head.appendChild(m);break;case"meta":if(T=j0("meta","content",h).get(u+(r.content||""))){for(L=0;L<T.length;L++)if(m=T[L],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){T.splice(L,1);break e}}m=h.createElement(u),Cn(m,u,r),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[fn]=e,$(m),u=m}e.stateNode=u}else Z0(h,e.type,e.stateNode);else e.stateNode=Y0(h,u,e.memoizedProps);else m!==u?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,u===null?Z0(h,e.type,e.stateNode):Y0(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&Zg(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(u&4&&e.alternate===null){h=e.stateNode,m=e.memoizedProps;try{for(var I=h.firstChild;I;){var q=I.nextSibling,ht=I.nodeName;I[Dr]||ht==="HEAD"||ht==="BODY"||ht==="SCRIPT"||ht==="STYLE"||ht==="LINK"&&I.rel.toLowerCase()==="stylesheet"||h.removeChild(I),I=q}for(var vt=e.type,st=h.attributes;st.length;)h.removeAttributeNode(st[0]);Cn(h,vt,m),h[fn]=e,h[hn]=m}catch(Vt){Be(e,e.return,Vt)}}case 5:if(Ri(i,e),wi(e),u&512&&(Ke||r===null||oi(r,r.return)),e.flags&32){h=e.stateNode;try{Zn(h,"")}catch(Vt){Be(e,e.return,Vt)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,Zg(e,h,r!==null?r.memoizedProps:h)),u&1024&&(Dh=!0);break;case 6:if(Ri(i,e),wi(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,r=e.stateNode;try{r.nodeValue=u}catch(Vt){Be(e,e.return,Vt)}}break;case 3:if(oc=null,h=Hi,Hi=rc(i.containerInfo),Ri(i,e),Hi=h,wi(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Nl(i.containerInfo)}catch(Vt){Be(e,e.return,Vt)}Dh&&(Dh=!1,a0(e));break;case 4:u=Hi,Hi=rc(e.stateNode.containerInfo),Ri(i,e),wi(e),Hi=u;break;case 12:Ri(i,e),wi(e);break;case 13:Ri(i,e),wi(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Hh=dt()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Uh(e,u)));break;case 22:if(u&512&&(Ke||r===null||oi(r,r.return)),I=e.memoizedState!==null,q=r!==null&&r.memoizedState!==null,ht=Sa,vt=Ke,Sa=ht||I,Ke=vt||q,Ri(i,e),Ke=vt,Sa=ht,wi(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,u&8192&&(i._visibility=I?i._visibility&-2:i._visibility|1,I&&(i=Sa||Ke,r===null||q||i||Gs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(r=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(r===null){q=r=i;try{if(h=q.stateNode,I)m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{T=q.stateNode,L=q.memoizedProps.style;var ct=L!=null&&L.hasOwnProperty("display")?L.display:null;T.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Vt){Be(q,q.return,Vt)}}}else if(i.tag===6){if(r===null){q=i;try{q.stateNode.nodeValue=I?"":q.memoizedProps}catch(Vt){Be(q,q.return,Vt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,Uh(e,r))));break;case 19:Ri(i,e),wi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Uh(e,u)));break;case 21:break;default:Ri(i,e),wi(e)}}function wi(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var r=e.return;r!==null;){if(Kg(r)){var u=r;break t}r=r.return}throw Error(a(160))}switch(u.tag){case 27:var h=u.stateNode,m=wh(e);Xu(e,m,h);break;case 5:var T=u.stateNode;u.flags&32&&(Zn(T,""),u.flags&=-33);var L=wh(e);Xu(e,L,T);break;case 3:case 4:var I=u.stateNode.containerInfo,q=wh(e);Ch(e,q,I);break;default:throw Error(a(161))}}}catch(ht){Be(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function a0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;a0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ea(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)$g(e,i.alternate,i),i=i.sibling}function Gs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:$a(4,i,i.return),Gs(i);break;case 1:oi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Yg(i,i.return,r),Gs(i);break;case 26:case 27:case 5:oi(i,i.return),Gs(i);break;case 22:oi(i,i.return),i.memoizedState===null&&Gs(i);break;default:Gs(i)}e=e.sibling}}function tr(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,T=m.flags;switch(m.tag){case 0:case 11:case 15:tr(h,m,r),ml(4,m);break;case 1:if(tr(h,m,r),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){Be(u,u.return,q)}if(u=m,h=u.updateQueue,h!==null){var L=u.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Xg(I[h],L)}catch(q){Be(u,u.return,q)}}r&&T&64&&qg(m),Wr(m,m.return);break;case 26:case 27:case 5:tr(h,m,r),r&&u===null&&T&4&&jg(m),Wr(m,m.return);break;case 12:tr(h,m,r);break;case 13:tr(h,m,r),r&&T&4&&n0(h,m);break;case 22:m.memoizedState===null&&tr(h,m,r),Wr(m,m.return);break;default:tr(h,m,r)}i=i.sibling}}function Lh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&rl(r))}function Nh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&rl(e))}function er(e,i,r,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)r0(e,i,r,u),i=i.sibling}function r0(e,i,r,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:er(e,i,r,u),h&2048&&ml(9,i);break;case 3:er(e,i,r,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&rl(e)));break;case 12:if(h&2048){er(e,i,r,u),e=i.stateNode;try{var m=i.memoizedProps,T=m.id,L=m.onPostCommit;typeof L=="function"&&L(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Be(i,i.return,I)}}else er(e,i,r,u);break;case 23:break;case 22:m=i.stateNode,i.memoizedState!==null?m._visibility&4?er(e,i,r,u):_l(e,i):m._visibility&4?er(e,i,r,u):(m._visibility|=4,Vs(e,i,r,u,(i.subtreeFlags&10256)!==0)),h&2048&&Lh(i.alternate,i);break;case 24:er(e,i,r,u),h&2048&&Nh(i.alternate,i);break;default:er(e,i,r,u)}}function Vs(e,i,r,u,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,T=i,L=r,I=u,q=T.flags;switch(T.tag){case 0:case 11:case 15:Vs(m,T,L,I,h),ml(8,T);break;case 23:break;case 22:var ht=T.stateNode;T.memoizedState!==null?ht._visibility&4?Vs(m,T,L,I,h):_l(m,T):(ht._visibility|=4,Vs(m,T,L,I,h)),h&&q&2048&&Lh(T.alternate,T);break;case 24:Vs(m,T,L,I,h),h&&q&2048&&Nh(T.alternate,T);break;default:Vs(m,T,L,I,h)}i=i.sibling}}function _l(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,u=i,h=u.flags;switch(u.tag){case 22:_l(r,u),h&2048&&Lh(u.alternate,u);break;case 24:_l(r,u),h&2048&&Nh(u.alternate,u);break;default:_l(r,u)}i=i.sibling}}var gl=8192;function ks(e){if(e.subtreeFlags&gl)for(e=e.child;e!==null;)s0(e),e=e.sibling}function s0(e){switch(e.tag){case 26:ks(e),e.flags&gl&&e.memoizedState!==null&&dE(Hi,e.memoizedState,e.memoizedProps);break;case 5:ks(e);break;case 3:case 4:var i=Hi;Hi=rc(e.stateNode.containerInfo),ks(e),Hi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=gl,gl=16777216,ks(e),gl=i):ks(e));break;default:ks(e)}}function o0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function vl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];yn=u,u0(u,e)}o0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l0(e),e=e.sibling}function l0(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&$a(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,Wu(e)):vl(e);break;default:vl(e)}}function Wu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];yn=u,u0(u,e)}o0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:$a(8,i,i.return),Wu(i);break;case 22:r=i.stateNode,r._visibility&4&&(r._visibility&=-5,Wu(i));break;default:Wu(i)}e=e.sibling}}function u0(e,i){for(;yn!==null;){var r=yn;switch(r.tag){case 0:case 11:case 15:$a(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:rl(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,yn=u;else t:for(r=e;yn!==null;){u=yn;var h=u.sibling,m=u.return;if(t0(u),u===r){yn=null;break t}if(h!==null){h.return=m,yn=h;break t}yn=m}}}function AM(e,i,r,u){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(e,i,r,u){return new AM(e,i,r,u)}function Oh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nr(e,i){var r=e.alternate;return r===null?(r=Ci(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&31457280,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function c0(e,i){e.flags&=31457282;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function qu(e,i,r,u,h,m){var T=0;if(u=e,typeof e=="function")Oh(e)&&(T=1);else if(typeof e=="string")T=fE(e,r,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case d:return qr(r.children,h,m,i);case p:T=8,h|=24;break;case _:return e=Ci(12,r,i,h|2),e.elementType=_,e.lanes=m,e;case M:return e=Ci(13,r,i,h),e.elementType=M,e.lanes=m,e;case S:return e=Ci(19,r,i,h),e.elementType=S,e.lanes=m,e;case U:return f0(r,h,m,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case y:T=10;break t;case v:T=9;break t;case E:T=11;break t;case x:T=14;break t;case w:T=16,u=null;break t}T=29,r=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=Ci(T,r,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function qr(e,i,r,u){return e=Ci(7,e,u,i),e.lanes=r,e}function f0(e,i,r,u){e=Ci(22,e,u,i),e.elementType=U,e.lanes=r;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=h._current;if(m===null)throw Error(a(456));if((h._pendingVisibility&2)===0){var T=Xa(m,2);T!==null&&(h._pendingVisibility|=2,Xn(T,m,2))}},attach:function(){var m=h._current;if(m===null)throw Error(a(456));if((h._pendingVisibility&2)!==0){var T=Xa(m,2);T!==null&&(h._pendingVisibility&=-3,Xn(T,m,2))}}};return e.stateNode=h,e}function Ph(e,i,r){return e=Ci(6,e,null,i),e.lanes=r,e}function zh(e,i,r){return i=Ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function Ta(e){e.flags|=4}function h0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(i)){if(i=Ai.current,i!==null&&((Se&4194176)===Se?Ki!==null:(Se&62914560)!==Se&&(Se&536870912)===0||i!==Ki))throw nl=Gf,C_;e.flags|=8192}}function Yu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Te():536870912,e.lanes|=i,Ws|=i)}function xl(e,i){if(!Ae)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function We(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,u=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags&31457280,u|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=r,i}function RM(e,i,r){var u=i.pendingProps;switch(If(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(i),null;case 1:return We(i),null;case 3:return r=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),ya(mn),se(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jo(i)?Ta(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ii!==null&&(Xh(Ii),Ii=null))),We(i),null;case 26:return r=i.memoizedState,e===null?(Ta(i),r!==null?(We(i),h0(i,r)):(We(i),i.flags&=-16777217)):r?r!==e.memoizedState?(Ta(i),We(i),h0(i,r)):(We(i),i.flags&=-16777217):(e.memoizedProps!==u&&Ta(i),We(i),i.flags&=-16777217),null;case 27:kt(i),r=ae.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Ta(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return We(i),null}e=Ee.current,Jo(i)?R_(i):(e=V0(h,u,r),i.stateNode=e,Ta(i))}return We(i),null;case 5:if(kt(i),r=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Ta(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return We(i),null}if(e=Ee.current,Jo(i))R_(i);else{switch(h=ac(ae.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?h.createElement(r,{is:u.is}):h.createElement(r)}}e[fn]=i,e[hn]=u;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Cn(e,r,u),r){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ta(i)}}return We(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Ta(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=ae.current,Jo(i)){if(e=i.stateNode,r=i.memoizedProps,u=null,h=kn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[fn]=i,e=!!(e.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||z0(e.nodeValue,r)),e||zr(i)}else e=ac(e).createTextNode(u),e[fn]=i,i.stateNode=e}return We(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Jo(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[fn]=i}else $o(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;We(i),h=!1}else Ii!==null&&(Xh(Ii),Ii=null),h=!0;if(!h)return i.flags&256?(_a(i),i):(_a(i),null)}if(_a(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=u!==null,e=e!==null&&e.memoizedState!==null,r){u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)}return r!==e&&r&&(i.child.flags|=8192),Yu(i,i.updateQueue),We(i),null;case 4:return se(),e===null&&ed(i.stateNode.containerInfo),We(i),null;case 10:return ya(i.type),We(i),null;case 19:if(Kt(pn),h=i.memoizedState,h===null)return We(i),null;if(u=(i.flags&128)!==0,m=h.rendering,m===null)if(u)xl(h,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Du(e),m!==null){for(i.flags|=128,xl(h,!1),e=m.updateQueue,i.updateQueue=e,Yu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)c0(r,e),r=r.sibling;return Pt(pn,pn.current&1|2),i.child}e=e.sibling}h.tail!==null&&dt()>ju&&(i.flags|=128,u=!0,xl(h,!1),i.lanes=4194304)}else{if(!u)if(e=Du(m),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,Yu(i,e),xl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ae)return We(i),null}else 2*dt()-h.renderingStartTime>ju&&r!==536870912&&(i.flags|=128,u=!0,xl(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(e=h.last,e!==null?e.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=dt(),i.sibling=null,e=pn.current,Pt(pn,u?e&1|2:e&1),i):(We(i),null);case 22:case 23:return _a(i),kf(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(r&536870912)!==0&&(i.flags&128)===0&&(We(i),i.subtreeFlags&6&&(i.flags|=8192)):We(i),r=i.updateQueue,r!==null&&Yu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==r&&(i.flags|=2048),e!==null&&Kt(Fr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ya(mn),We(i),null;case 25:return null}throw Error(a(156,i.tag))}function wM(e,i){switch(If(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ya(mn),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return kt(i),null;case 13:if(_a(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));$o()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Kt(pn),null;case 4:return se(),null;case 10:return ya(i.type),null;case 22:case 23:return _a(i),kf(),e!==null&&Kt(Fr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ya(mn),null;case 25:return null;default:return null}}function d0(e,i){switch(If(i),i.tag){case 3:ya(mn),se();break;case 26:case 27:case 5:kt(i);break;case 4:se();break;case 13:_a(i);break;case 19:Kt(pn);break;case 10:ya(i.type);break;case 22:case 23:_a(i),kf(),e!==null&&Kt(Fr);break;case 24:ya(mn)}}var CM={getCacheForType:function(e){var i=Ln(mn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r}},DM=typeof WeakMap=="function"?WeakMap:Map,qe=0,Ie=null,de=null,Se=0,He=0,ui=null,ba=!1,Xs=!1,Bh=!1,Aa=0,Qe=0,ir=0,Yr=0,Fh=0,Di=0,Ws=0,yl=null,Ji=null,Ih=!1,Hh=0,ju=1/0,Zu=null,ar=null,Ku=!1,jr=null,Sl=0,Gh=0,Vh=null,Ml=0,kh=null;function ci(){if((qe&2)!==0&&Se!==0)return Se&-Se;if(b.T!==null){var e=zs;return e!==0?e:Qh()}return Go()}function p0(){Di===0&&(Di=(Se&536870912)===0||Ae?cn():536870912);var e=Ai.current;return e!==null&&(e.flags|=32),Di}function Xn(e,i,r){(e===Ie&&He===2||e.cancelPendingCommit!==null)&&(qs(e,0),Ra(e,Se,Di,!1)),Hn(e,r),((qe&2)===0||e!==Ie)&&(e===Ie&&((qe&2)===0&&(Yr|=r),Qe===4&&Ra(e,Se,Di,!1)),$i(e))}function m0(e,i,r){if((qe&6)!==0)throw Error(a(327));var u=!r&&(i&60)===0&&(i&e.expiredLanes)===0||$t(e,i),h=u?NM(e,i):Yh(e,i,!0),m=u;do{if(h===0){Xs&&!u&&Ra(e,i,0,!1);break}else if(h===6)Ra(e,i,0,!ba);else{if(r=e.current.alternate,m&&!UM(r)){h=Yh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var L=e;h=yl;var I=L.current.memoizedState.isDehydrated;if(I&&(qs(L,T).flags|=256),T=Yh(L,T,!1),T!==2){if(Bh&&!I){L.errorRecoveryDisabledLanes|=m,Yr|=m,h=4;break t}m=Ji,Ji=h,m!==null&&Xh(m)}h=T}if(m=!1,h!==2)continue}}if(h===1){qs(e,0),Ra(e,i,0,!0);break}t:{switch(u=e,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194176)===i){Ra(u,i,Di,!ba);break t}break;case 2:Ji=null;break;case 3:case 5:break;default:throw Error(a(329))}if(u.finishedWork=r,u.finishedLanes=i,(i&62914560)===i&&(m=Hh+300-dt(),10<m)){if(Ra(u,i,Di,!ba),Dt(u,0)!==0)break t;u.timeoutHandle=I0(_0.bind(null,u,r,Ji,Zu,Ih,i,Di,Yr,Ws,ba,2,-0,0),m);break t}_0(u,r,Ji,Zu,Ih,i,Di,Yr,Ws,ba,0,-0,0)}}break}while(!0);$i(e)}function Xh(e){Ji===null?Ji=e:Ji.push.apply(Ji,e)}function _0(e,i,r,u,h,m,T,L,I,q,ht,vt,st){var ct=i.subtreeFlags;if((ct&8192||(ct&16785408)===16785408)&&(wl={stylesheets:null,count:0,unsuspend:hE},s0(i),i=pE(),i!==null)){e.cancelPendingCommit=i(E0.bind(null,e,r,u,h,T,L,I,1,vt,st)),Ra(e,m,T,!q);return}E0(e,r,u,h,T,L,I,ht,vt,st)}function UM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var h=r[u],m=h.getSnapshot;h=h.value;try{if(!si(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ra(e,i,r,u){i&=~Fh,i&=~Yr,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-Yt(h),T=1<<m;u[m]=-1,h&=~T}r!==0&&Ho(e,r,i)}function Qu(){return(qe&6)===0?(El(0),!1):!0}function Wh(){if(de!==null){if(He===0)var e=de.return;else e=de,xa=kr=null,Qf(e),Os=null,il=0,e=de;for(;e!==null;)d0(e.alternate,e),e=e.return;de=null}}function qs(e,i){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,KM(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Wh(),Ie=e,de=r=nr(e.current,null),Se=i,He=0,ui=null,ba=!1,Xs=$t(e,i),Bh=!1,Ws=Di=Fh=Yr=ir=Qe=0,Ji=yl=null,Ih=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Yt(u),m=1<<h;i|=e[h],u&=~m}return Aa=i,Su(),r}function g0(e,i){ce=null,b.H=Qi,i===el?(i=L_(),He=3):i===C_?(i=L_(),He=4):He=i===Dg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ui=i,de===null&&(Qe=1,Gu(e,Ei(i,e.current)))}function v0(){var e=b.H;return b.H=Qi,e===null?Qi:e}function x0(){var e=b.A;return b.A=CM,e}function qh(){Qe=4,ba||(Se&4194176)!==Se&&Ai.current!==null||(Xs=!0),(ir&134217727)===0&&(Yr&134217727)===0||Ie===null||Ra(Ie,Se,Di,!1)}function Yh(e,i,r){var u=qe;qe|=2;var h=v0(),m=x0();(Ie!==e||Se!==i)&&(Zu=null,qs(e,i)),i=!1;var T=Qe;t:do try{if(He!==0&&de!==null){var L=de,I=ui;switch(He){case 8:Wh(),T=6;break t;case 3:case 2:case 6:Ai.current===null&&(i=!0);var q=He;if(He=0,ui=null,Ys(e,L,I,q),r&&Xs){T=0;break t}break;default:q=He,He=0,ui=null,Ys(e,L,I,q)}}LM(),T=Qe;break}catch(ht){g0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,xa=kr=null,qe=u,b.H=h,b.A=m,de===null&&(Ie=null,Se=0,Su()),T}function LM(){for(;de!==null;)y0(de)}function NM(e,i){var r=qe;qe|=2;var u=v0(),h=x0();Ie!==e||Se!==i?(Zu=null,ju=dt()+500,qs(e,i)):Xs=$t(e,i);t:do try{if(He!==0&&de!==null){i=de;var m=ui;e:switch(He){case 1:He=0,ui=null,Ys(e,i,m,1);break;case 2:if(D_(m)){He=0,ui=null,S0(i);break}i=function(){He===2&&Ie===e&&(He=7),$i(e)},m.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:D_(m)?(He=0,ui=null,S0(i)):(He=0,ui=null,Ys(e,i,m,7));break;case 5:var T=null;switch(de.tag){case 26:T=de.memoizedState;case 5:case 27:var L=de;if(!T||K0(T)){He=0,ui=null;var I=L.sibling;if(I!==null)de=I;else{var q=L.return;q!==null?(de=q,Ju(q)):de=null}break e}}He=0,ui=null,Ys(e,i,m,5);break;case 6:He=0,ui=null,Ys(e,i,m,6);break;case 8:Wh(),Qe=6;break t;default:throw Error(a(462))}}OM();break}catch(ht){g0(e,ht)}while(!0);return xa=kr=null,b.H=u,b.A=h,qe=r,de!==null?0:(Ie=null,Se=0,Su(),Qe)}function OM(){for(;de!==null&&!C();)y0(de)}function y0(e){var i=Vg(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,i===null?Ju(e):de=i}function S0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=zg(r,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=zg(r,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:Qf(i);default:d0(r,i),i=de=c0(i,Aa),i=Vg(r,i,Aa)}e.memoizedProps=e.pendingProps,i===null?Ju(e):de=i}function Ys(e,i,r,u){xa=kr=null,Qf(i),Os=null,il=0;var h=i.return;try{if(MM(e,h,i,r,Se)){Qe=1,Gu(e,Ei(r,e.current)),de=null;return}}catch(m){if(h!==null)throw de=h,m;Qe=1,Gu(e,Ei(r,e.current)),de=null;return}i.flags&32768?(Ae||u===1?e=!0:Xs||(Se&536870912)!==0?e=!1:(ba=e=!0,(u===2||u===3||u===6)&&(u=Ai.current,u!==null&&u.tag===13&&(u.flags|=16384))),M0(i,e)):Ju(i)}function Ju(e){var i=e;do{if((i.flags&32768)!==0){M0(i,ba);return}e=i.return;var r=RM(i.alternate,i,Aa);if(r!==null){de=r;return}if(i=i.sibling,i!==null){de=i;return}de=i=e}while(i!==null);Qe===0&&(Qe=5)}function M0(e,i){do{var r=wM(e.alternate,e);if(r!==null){r.flags&=32767,de=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){de=e;return}de=e=r}while(e!==null);Qe=6,de=null}function E0(e,i,r,u,h,m,T,L,I,q){var ht=b.T,vt=W.p;try{W.p=2,b.T=null,PM(e,i,r,u,vt,h,m,T,L,I,q)}finally{b.T=ht,W.p=vt}}function PM(e,i,r,u,h,m,T,L){do js();while(jr!==null);if((qe&6)!==0)throw Error(a(327));var I=e.finishedWork;if(u=e.finishedLanes,I===null)return null;if(e.finishedWork=null,e.finishedLanes=0,I===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var q=I.lanes|I.childLanes;if(q|=zf,fu(e,u,q,m,T,L),e===Ie&&(de=Ie=null,Se=0),(I.subtreeFlags&10256)===0&&(I.flags&10256)===0||Ku||(Ku=!0,Gh=q,Vh=r,IM(Ct,function(){return js(),null})),r=(I.flags&15990)!==0,(I.subtreeFlags&15990)!==0||r?(r=b.T,b.T=null,m=W.p,W.p=2,T=qe,qe|=4,TM(e,I),i0(I,e),rM(rd,e.containerInfo),cc=!!ad,rd=ad=null,e.current=I,$g(e,I.alternate,I),at(),qe=T,W.p=m,b.T=r):e.current=I,Ku?(Ku=!1,jr=e,Sl=u):T0(e,q),q=e.pendingLanes,q===0&&(ar=null),Ft(I.stateNode),$i(e),i!==null)for(h=e.onRecoverableError,I=0;I<i.length;I++)q=i[I],h(q.value,{componentStack:q.stack});return(Sl&3)!==0&&js(),q=e.pendingLanes,(u&4194218)!==0&&(q&42)!==0?e===kh?Ml++:(Ml=0,kh=e):Ml=0,El(0),null}function T0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,rl(i)))}function js(){if(jr!==null){var e=jr,i=Gh;Gh=0;var r=Ms(Sl),u=b.T,h=W.p;try{if(W.p=32>r?32:r,b.T=null,jr===null)var m=!1;else{r=Vh,Vh=null;var T=jr,L=Sl;if(jr=null,Sl=0,(qe&6)!==0)throw Error(a(331));var I=qe;if(qe|=4,l0(T.current),r0(T,T.current,L,r),qe=I,El(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Zt,T)}catch{}m=!0}return m}finally{W.p=h,b.T=u,T0(e,i)}}return!1}function b0(e,i,r){i=Ei(r,i),i=fh(e.stateNode,i,2),e=Ja(e,i,2),e!==null&&(Hn(e,2),$i(e))}function Be(e,i,r){if(e.tag===3)b0(e,e,r);else for(;i!==null;){if(i.tag===3){b0(i,e,r);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){e=Ei(r,e),r=wg(2),u=Ja(i,r,2),u!==null&&(Cg(r,u,i,e),Hn(u,2),$i(u));break}}i=i.return}}function jh(e,i,r){var u=e.pingCache;if(u===null){u=e.pingCache=new DM;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(r)||(Bh=!0,h.add(r),e=zM.bind(null,e,i,r),i.then(e,e))}function zM(e,i,r){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ie===e&&(Se&r)===r&&(Qe===4||Qe===3&&(Se&62914560)===Se&&300>dt()-Hh?(qe&2)===0&&qs(e,0):Fh|=r,Ws===Se&&(Ws=0)),$i(e)}function A0(e,i){i===0&&(i=Te()),e=Xa(e,i),e!==null&&(Hn(e,i),$i(e))}function BM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),A0(e,r)}function FM(e,i){var r=0;switch(e.tag){case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),A0(e,r)}function IM(e,i){return Xt(e,i)}var $u=null,Zs=null,Zh=!1,tc=!1,Kh=!1,Zr=0;function $i(e){e!==Zs&&e.next===null&&(Zs===null?$u=Zs=e:Zs=Zs.next=e),tc=!0,Zh||(Zh=!0,GM(HM))}function El(e,i){if(!Kh&&tc){Kh=!0;do for(var r=!1,u=$u;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var T=u.suspendedLanes,L=u.pingedLanes;m=(1<<31-Yt(42|e)+1)-1,m&=h&~(T&~L),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(r=!0,C0(u,m))}else m=Se,m=Dt(u,u===Ie?m:0),(m&3)===0||$t(u,m)||(r=!0,C0(u,m));u=u.next}while(r);Kh=!1}}function HM(){tc=Zh=!1;var e=0;Zr!==0&&(ZM()&&(e=Zr),Zr=0);for(var i=dt(),r=null,u=$u;u!==null;){var h=u.next,m=R0(u,i);m===0?(u.next=null,r===null?$u=h:r.next=h,h===null&&(Zs=r)):(r=u,(e!==0||(m&3)!==0)&&(tc=!0)),u=h}El(e)}function R0(e,i){for(var r=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-Yt(m),L=1<<T,I=h[T];I===-1?((L&r)===0||(L&u)!==0)&&(h[T]=Ve(L,i)):I<=i&&(e.expiredLanes|=L),m&=~L}if(i=Ie,r=Se,r=Dt(e,e===i?r:0),u=e.callbackNode,r===0||e===i&&He===2||e.cancelPendingCommit!==null)return u!==null&&u!==null&&F(u),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||$t(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(u!==null&&F(u),Ms(r)){case 2:case 8:r=Ht;break;case 32:r=Ct;break;case 268435456:r=pe;break;default:r=Ct}return u=w0.bind(null,e),r=Xt(r,u),e.callbackPriority=i,e.callbackNode=r,i}return u!==null&&u!==null&&F(u),e.callbackPriority=2,e.callbackNode=null,2}function w0(e,i){var r=e.callbackNode;if(js()&&e.callbackNode!==r)return null;var u=Se;return u=Dt(e,e===Ie?u:0),u===0?null:(m0(e,u,i),R0(e,dt()),e.callbackNode!=null&&e.callbackNode===r?w0.bind(null,e):null)}function C0(e,i){if(js())return null;m0(e,i,!0)}function GM(e){QM(function(){(qe&6)!==0?Xt(pt,e):e()})}function Qh(){return Zr===0&&(Zr=cn()),Zr}function D0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pu(""+e)}function U0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function VM(e,i,r,u,h){if(i==="submit"&&r&&r.stateNode===h){var m=D0((h[hn]||null).action),T=u.submitter;T&&(i=(i=T[hn]||null)?D0(i.formAction):T.getAttribute("formAction"),i!==null&&(m=i,T=null));var L=new vu("action","action",null,u,h);e.push({event:L,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Zr!==0){var I=T?U0(h,T):new FormData(h);sh(r,{pending:!0,data:I,method:h.method,action:m},null,I)}}else typeof m=="function"&&(L.preventDefault(),I=T?U0(h,T):new FormData(h),sh(r,{pending:!0,data:I,method:h.method,action:m},m,I))},currentTarget:h}]})}}for(var Jh=0;Jh<E_.length;Jh++){var $h=E_[Jh],kM=$h.toLowerCase(),XM=$h[0].toUpperCase()+$h.slice(1);Fi(kM,"on"+XM)}Fi(v_,"onAnimationEnd"),Fi(x_,"onAnimationIteration"),Fi(y_,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(oM,"onTransitionRun"),Fi(lM,"onTransitionStart"),Fi(uM,"onTransitionCancel"),Fi(S_,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function L0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var u=e[r],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var T=u.length-1;0<=T;T--){var L=u[T],I=L.instance,q=L.currentTarget;if(L=L.listener,I!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=q;try{m(h)}catch(ht){Hu(ht)}h.currentTarget=null,m=I}else for(T=0;T<u.length;T++){if(L=u[T],I=L.instance,q=L.currentTarget,L=L.listener,I!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=q;try{m(h)}catch(ht){Hu(ht)}h.currentTarget=null,m=I}}}}function ve(e,i){var r=i[Es];r===void 0&&(r=i[Es]=new Set);var u=e+"__bubble";r.has(u)||(N0(i,e,2,!1),r.add(u))}function td(e,i,r){var u=0;i&&(u|=4),N0(r,e,u,i)}var ec="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[ec]){e[ec]=!0,Z.forEach(function(r){r!=="selectionchange"&&(WM.has(r)||td(r,!1,e),td(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ec]||(i[ec]=!0,td("selectionchange",!1,i))}}function N0(e,i,r,u){switch(nv(i)){case 2:var h=gE;break;case 8:h=vE;break;default:h=pd}r=h.bind(null,i,r,e),h=void 0,!Ef||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function nd(e,i,r,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var L=u.stateNode.containerInfo;if(L===h||L.nodeType===8&&L.parentNode===h)break;if(T===4)for(T=u.return;T!==null;){var I=T.tag;if((I===3||I===4)&&(I=T.stateNode.containerInfo,I===h||I.nodeType===8&&I.parentNode===h))return;T=T.return}for(;L!==null;){if(T=da(L),T===null)return;if(I=T.tag,I===5||I===6||I===26||I===27){u=m=T;continue t}L=L.parentNode}}u=u.return}jm(function(){var q=m,ht=Sf(r),vt=[];t:{var st=M_.get(e);if(st!==void 0){var ct=vu,Vt=e;switch(e){case"keypress":if(_u(r)===0)break t;case"keydown":case"keyup":ct=FS;break;case"focusin":Vt="focus",ct=Rf;break;case"focusout":Vt="blur",ct=Rf;break;case"beforeblur":case"afterblur":ct=Rf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=AS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=GS;break;case v_:case x_:case y_:ct=CS;break;case S_:ct=kS;break;case"scroll":case"scrollend":ct=TS;break;case"wheel":ct=WS;break;case"copy":case"cut":case"paste":ct=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=$m;break;case"toggle":case"beforetoggle":ct=YS}var ie=(i&4)!==0,Je=!ie&&(e==="scroll"||e==="scrollend"),K=ie?st!==null?st+"Capture":null:st;ie=[];for(var k=q,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||K===null||(mt=ko(k,K),mt!=null&&ie.push(bl(k,mt,tt))),Je)break;k=k.return}0<ie.length&&(st=new ct(st,Vt,null,r,ht),vt.push({event:st,listeners:ie}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",st&&r!==yf&&(Vt=r.relatedTarget||r.fromElement)&&(da(Vt)||Vt[ha]))break t;if((ct||st)&&(st=ht.window===ht?ht:(st=ht.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(Vt=r.relatedTarget||r.toElement,ct=q,Vt=Vt?da(Vt):null,Vt!==null&&(Je=X(Vt),ie=Vt.tag,Vt!==Je||ie!==5&&ie!==27&&ie!==6)&&(Vt=null)):(ct=null,Vt=q),ct!==Vt)){if(ie=Qm,mt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ie=$m,mt="onPointerLeave",K="onPointerEnter",k="pointer"),Je=ct==null?st:j(ct),tt=Vt==null?st:j(Vt),st=new ie(mt,k+"leave",ct,r,ht),st.target=Je,st.relatedTarget=tt,mt=null,da(ht)===q&&(ie=new ie(K,k+"enter",Vt,r,ht),ie.target=tt,ie.relatedTarget=Je,mt=ie),Je=mt,ct&&Vt)e:{for(ie=ct,K=Vt,k=0,tt=ie;tt;tt=Ks(tt))k++;for(tt=0,mt=K;mt;mt=Ks(mt))tt++;for(;0<k-tt;)ie=Ks(ie),k--;for(;0<tt-k;)K=Ks(K),tt--;for(;k--;){if(ie===K||K!==null&&ie===K.alternate)break e;ie=Ks(ie),K=Ks(K)}ie=null}else ie=null;ct!==null&&O0(vt,st,ct,ie,!1),Vt!==null&&Je!==null&&O0(vt,Je,Vt,ie,!0)}}t:{if(st=q?j(q):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var It=o_;else if(r_(st))if(l_)It=iM;else{It=eM;var he=tM}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?q&&xf(q.elementType)&&(It=o_):It=nM;if(It&&(It=It(e,q))){s_(vt,It,r,ht);break t}he&&he(e,st,q),e==="focusout"&&q&&st.type==="number"&&q.memoizedProps.value!=null&&Un(st,"number",st.value)}switch(he=q?j(q):window,e){case"focusin":(r_(he)||he.contentEditable==="true")&&(ws=he,Nf=q,Qo=null);break;case"focusout":Qo=Nf=ws=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,__(vt,r,ht);break;case"selectionchange":if(sM)break;case"keydown":case"keyup":__(vt,r,ht)}var Wt;if(Cf)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Rs?i_(e,r)&&(Jt="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Jt="onCompositionStart");Jt&&(t_&&r.locale!=="ko"&&(Rs||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Rs&&(Wt=Zm()):(ka=ht,Tf="value"in ka?ka.value:ka.textContent,Rs=!0)),he=nc(q,Jt),0<he.length&&(Jt=new Jm(Jt,e,null,r,ht),vt.push({event:Jt,listeners:he}),Wt?Jt.data=Wt:(Wt=a_(r),Wt!==null&&(Jt.data=Wt)))),(Wt=ZS?KS(e,r):QS(e,r))&&(Jt=nc(q,"onBeforeInput"),0<Jt.length&&(he=new Jm("onBeforeInput","beforeinput",null,r,ht),vt.push({event:he,listeners:Jt}),he.data=Wt)),VM(vt,e,q,r,ht)}L0(vt,i)})}function bl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function nc(e,i){for(var r=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=ko(e,r),h!=null&&u.unshift(bl(e,h,m)),h=ko(e,i),h!=null&&u.push(bl(e,h,m))),e=e.return}return u}function Ks(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function O0(e,i,r,u,h){for(var m=i._reactName,T=[];r!==null&&r!==u;){var L=r,I=L.alternate,q=L.stateNode;if(L=L.tag,I!==null&&I===u)break;L!==5&&L!==26&&L!==27||q===null||(I=q,h?(q=ko(r,m),q!=null&&T.unshift(bl(r,q,I))):h||(q=ko(r,m),q!=null&&T.push(bl(r,q,I)))),r=r.return}T.length!==0&&e.push({event:i,listeners:T})}var qM=/\r\n?/g,YM=/\u0000|\uFFFD/g;function P0(e){return(typeof e=="string"?e:""+e).replace(qM,`
`).replace(YM,"")}function z0(e,i){return i=P0(i),P0(e)===i}function ic(){}function Pe(e,i,r,u,h,m){switch(r){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Zn(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Zn(e,""+u);break;case"className":Ge(e,"class",u);break;case"tabIndex":Ge(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(e,r,u);break;case"style":qm(e,u,m);break;case"data":if(i!=="object"){Ge(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=pu(""+u),e.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Pe(e,i,"name",h.name,h,null),Pe(e,i,"formEncType",h.formEncType,h,null),Pe(e,i,"formMethod",h.formMethod,h,null),Pe(e,i,"formTarget",h.formTarget,h,null)):(Pe(e,i,"encType",h.encType,h,null),Pe(e,i,"method",h.method,h,null),Pe(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=pu(""+u),e.setAttribute(r,u);break;case"onClick":u!=null&&(e.onclick=ic);break;case"onScroll":u!=null&&ve("scroll",e);break;case"onScrollEnd":u!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}r=pu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""+u):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":u===!0?e.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,u):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(r,u):e.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(r):e.setAttribute(r,u);break;case"popover":ve("beforetoggle",e),ve("toggle",e),_e(e,"popover",u);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":_e(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=MS.get(r)||r,_e(e,r,u))}}function id(e,i,r,u,h,m){switch(r){case"style":qm(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof u=="string"?Zn(e,u):(typeof u=="number"||typeof u=="bigint")&&Zn(e,""+u);break;case"onScroll":u!=null&&ve("scroll",e);break;case"onScrollEnd":u!=null&&ve("scrollend",e);break;case"onClick":u!=null&&(e.onclick=ic);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[hn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,u,h);break t}r in e?e[r]=u:u===!0?e.setAttribute(r,""):_e(e,r,u)}}}function Cn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var u=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var T=r[m];if(T!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(e,i,m,T,r,null)}}h&&Pe(e,i,"srcSet",r.srcSet,r,null),u&&Pe(e,i,"src",r.src,r,null);return;case"input":ve("invalid",e);var L=m=T=h=null,I=null,q=null;for(u in r)if(r.hasOwnProperty(u)){var ht=r[u];if(ht!=null)switch(u){case"name":h=ht;break;case"type":T=ht;break;case"checked":I=ht;break;case"defaultChecked":q=ht;break;case"value":m=ht;break;case"defaultValue":L=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:Pe(e,i,u,ht,r,null)}}Vn(e,m,L,I,q,T,h,!1),ge(e);return;case"select":ve("invalid",e),u=T=m=null;for(h in r)if(r.hasOwnProperty(h)&&(L=r[h],L!=null))switch(h){case"value":m=L;break;case"defaultValue":T=L;break;case"multiple":u=L;default:Pe(e,i,h,L,r,null)}i=m,r=T,e.multiple=!!u,i!=null?Ze(e,!!u,i,!1):r!=null&&Ze(e,!!u,r,!0);return;case"textarea":ve("invalid",e),m=h=u=null;for(T in r)if(r.hasOwnProperty(T)&&(L=r[T],L!=null))switch(T){case"value":u=L;break;case"defaultValue":h=L;break;case"children":m=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:Pe(e,i,T,L,r,null)}Ts(e,u,h,m),ge(e);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(u=r[I],u!=null))switch(I){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Pe(e,i,I,u,r,null)}return;case"dialog":ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(u=0;u<Tl.length;u++)ve(Tl[u],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in r)if(r.hasOwnProperty(q)&&(u=r[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(e,i,q,u,r,null)}return;default:if(xf(i)){for(ht in r)r.hasOwnProperty(ht)&&(u=r[ht],u!==void 0&&id(e,i,ht,u,r,void 0));return}}for(L in r)r.hasOwnProperty(L)&&(u=r[L],u!=null&&Pe(e,i,L,u,r,null))}function jM(e,i,r,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,L=null,I=null,q=null,ht=null;for(ct in r){var vt=r[ct];if(r.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=vt;default:u.hasOwnProperty(ct)||Pe(e,i,ct,null,u,vt)}}for(var st in u){var ct=u[st];if(vt=r[st],u.hasOwnProperty(st)&&(ct!=null||vt!=null))switch(st){case"type":m=ct;break;case"name":h=ct;break;case"checked":q=ct;break;case"defaultChecked":ht=ct;break;case"value":T=ct;break;case"defaultValue":L=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==vt&&Pe(e,i,st,ct,u,vt)}}Ne(e,T,L,I,q,ht,m,h);return;case"select":ct=T=L=st=null;for(m in r)if(I=r[m],r.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":ct=I;default:u.hasOwnProperty(m)||Pe(e,i,m,null,u,I)}for(h in u)if(m=u[h],I=r[h],u.hasOwnProperty(h)&&(m!=null||I!=null))switch(h){case"value":st=m;break;case"defaultValue":L=m;break;case"multiple":T=m;default:m!==I&&Pe(e,i,h,m,u,I)}i=L,r=T,u=ct,st!=null?Ze(e,!!r,st,!1):!!u!=!!r&&(i!=null?Ze(e,!!r,i,!0):Ze(e,!!r,r?[]:"",!1));return;case"textarea":ct=st=null;for(L in r)if(h=r[L],r.hasOwnProperty(L)&&h!=null&&!u.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:Pe(e,i,L,null,u,h)}for(T in u)if(h=u[T],m=r[T],u.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":st=h;break;case"defaultValue":ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Pe(e,i,T,h,u,m)}An(e,st,ct);return;case"option":for(var Vt in r)if(st=r[Vt],r.hasOwnProperty(Vt)&&st!=null&&!u.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Pe(e,i,Vt,null,u,st)}for(I in u)if(st=u[I],ct=r[I],u.hasOwnProperty(I)&&st!==ct&&(st!=null||ct!=null))switch(I){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Pe(e,i,I,st,u,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in r)st=r[ie],r.hasOwnProperty(ie)&&st!=null&&!u.hasOwnProperty(ie)&&Pe(e,i,ie,null,u,st);for(q in u)if(st=u[q],ct=r[q],u.hasOwnProperty(q)&&st!==ct&&(st!=null||ct!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:Pe(e,i,q,st,u,ct)}return;default:if(xf(i)){for(var Je in r)st=r[Je],r.hasOwnProperty(Je)&&st!==void 0&&!u.hasOwnProperty(Je)&&id(e,i,Je,void 0,u,st);for(ht in u)st=u[ht],ct=r[ht],!u.hasOwnProperty(ht)||st===ct||st===void 0&&ct===void 0||id(e,i,ht,st,u,ct);return}}for(var K in r)st=r[K],r.hasOwnProperty(K)&&st!=null&&!u.hasOwnProperty(K)&&Pe(e,i,K,null,u,st);for(vt in u)st=u[vt],ct=r[vt],!u.hasOwnProperty(vt)||st===ct||st==null&&ct==null||Pe(e,i,vt,st,u,ct)}var ad=null,rd=null;function ac(e){return e.nodeType===9?e:e.ownerDocument}function B0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function sd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var od=null;function ZM(){var e=window.event;return e&&e.type==="popstate"?e===od?!1:(od=e,!0):(od=null,!1)}var I0=typeof setTimeout=="function"?setTimeout:void 0,KM=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(e){return H0.resolve(null).then(e).catch(JM)}:I0;function JM(e){setTimeout(function(){throw e})}function ld(e,i){var r=i,u=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"){if(u===0){e.removeChild(h),Nl(i);return}u--}else r!=="$"&&r!=="$?"&&r!=="$!"||u++;r=h}while(r);Nl(i)}function ud(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ud(r),Vo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function $M(e,i,r,u){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Dr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Gi(e.nextSibling),e===null)break}return null}function tE(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Gi(e.nextSibling),e===null))return null;return e}function Gi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function G0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return e;i--}else r==="/$"&&i++}e=e.previousSibling}return null}function V0(e,i,r){switch(i=ac(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var Ui=new Map,k0=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var wa=W.d;W.d={f:eE,r:nE,D:iE,C:aE,L:rE,m:sE,X:lE,S:oE,M:uE};function eE(){var e=wa.f(),i=Qu();return e||i}function nE(e){var i=N(e);i!==null&&i.tag===5&&i.type==="form"?_g(i):wa.r(e)}var Qs=typeof document>"u"?null:document;function X0(e,i,r){var u=Qs;if(u&&typeof i=="string"&&i){var h=vn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),k0.has(h)||(k0.add(h),e={rel:e,crossOrigin:r,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Cn(i,"link",e),$(i),u.head.appendChild(i)))}}function iE(e){wa.D(e),X0("dns-prefetch",e,null)}function aE(e,i){wa.C(e,i),X0("preconnect",e,i)}function rE(e,i,r){wa.L(e,i,r);var u=Qs;if(u&&e&&i){var h='link[rel="preload"][as="'+vn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+vn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+vn(r.imageSizes)+'"]')):h+='[href="'+vn(e)+'"]';var m=h;switch(i){case"style":m=Js(e);break;case"script":m=$s(e)}Ui.has(m)||(e=A({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Ui.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(Al(m))||i==="script"&&u.querySelector(Rl(m))||(i=u.createElement("link"),Cn(i,"link",e),$(i),u.head.appendChild(i)))}}function sE(e,i){wa.m(e,i);var r=Qs;if(r&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+vn(u)+'"][href="'+vn(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=$s(e)}if(!Ui.has(m)&&(e=A({rel:"modulepreload",href:e},i),Ui.set(m,e),r.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Rl(m)))return}u=r.createElement("link"),Cn(u,"link",e),$(u),r.head.appendChild(u)}}}function oE(e,i,r){wa.S(e,i,r);var u=Qs;if(u&&e){var h=nt(u).hoistableStyles,m=Js(e);i=i||"default";var T=h.get(m);if(!T){var L={loading:0,preload:null};if(T=u.querySelector(Al(m)))L.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Ui.get(m))&&cd(e,r);var I=T=u.createElement("link");$(I),Cn(I,"link",e),I._p=new Promise(function(q,ht){I.onload=q,I.onerror=ht}),I.addEventListener("load",function(){L.loading|=1}),I.addEventListener("error",function(){L.loading|=2}),L.loading|=4,sc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:L},h.set(m,T)}}}function lE(e,i){wa.X(e,i);var r=Qs;if(r&&e){var u=nt(r).hoistableScripts,h=$s(e),m=u.get(h);m||(m=r.querySelector(Rl(h)),m||(e=A({src:e,async:!0},i),(i=Ui.get(h))&&fd(e,i),m=r.createElement("script"),$(m),Cn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function uE(e,i){wa.M(e,i);var r=Qs;if(r&&e){var u=nt(r).hoistableScripts,h=$s(e),m=u.get(h);m||(m=r.querySelector(Rl(h)),m||(e=A({src:e,async:!0,type:"module"},i),(i=Ui.get(h))&&fd(e,i),m=r.createElement("script"),$(m),Cn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function W0(e,i,r,u){var h=(h=ae.current)?rc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Js(r.href),r=nt(h).hoistableStyles,u=r.get(i),u||(u={type:"style",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Js(r.href);var m=nt(h).hoistableStyles,T=m.get(e);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=h.querySelector(Al(e)))&&!m._p&&(T.instance=m,T.state.loading=5),Ui.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ui.set(e,r),m||cE(h,e,r,T.state))),i&&u===null)throw Error(a(528,""));return T}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$s(r),r=nt(h).hoistableScripts,u=r.get(i),u||(u={type:"script",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Js(e){return'href="'+vn(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function q0(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function cE(e,i,r,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Cn(i,"link",r),$(i),e.head.appendChild(i))}function $s(e){return'[src="'+vn(e)+'"]'}function Rl(e){return"script[async]"+e}function Y0(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+vn(r.href)+'"]');if(u)return i.instance=u,$(u),u;var h=A({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),$(u),Cn(u,"style",h),sc(u,r.precedence,e),i.instance=u;case"stylesheet":h=Js(r.href);var m=e.querySelector(Al(h));if(m)return i.state.loading|=4,i.instance=m,$(m),m;u=q0(r),(h=Ui.get(h))&&cd(u,h),m=(e.ownerDocument||e).createElement("link"),$(m);var T=m;return T._p=new Promise(function(L,I){T.onload=L,T.onerror=I}),Cn(m,"link",u),i.state.loading|=4,sc(m,r.precedence,e),i.instance=m;case"script":return m=$s(r.src),(h=e.querySelector(Rl(m)))?(i.instance=h,$(h),h):(u=r,(h=Ui.get(m))&&(u=A({},r),fd(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),$(h),Cn(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,sc(u,r.precedence,e));return i.instance}function sc(e,i,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,T=0;T<u.length;T++){var L=u[T];if(L.dataset.precedence===i)m=L;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var oc=null;function j0(e,i,r){if(oc===null){var u=new Map,h=oc=new Map;h.set(r,u)}else h=oc,u=h.get(r),u||(u=new Map,h.set(r,u));if(u.has(e))return u;for(u.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Dr]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(i)||"";T=e+T;var L=u.get(T);L?L.push(m):u.set(T,[m])}}return u}function Z0(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function fE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var wl=null;function hE(){}function dE(e,i,r){if(wl===null)throw Error(a(475));var u=wl;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Js(r.href),m=e.querySelector(Al(h));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=lc.bind(u),e.then(u,u)),i.state.loading|=4,i.instance=m,$(m);return}m=e.ownerDocument||e,r=q0(r),(h=Ui.get(h))&&cd(r,h),m=m.createElement("link"),$(m);var T=m;T._p=new Promise(function(L,I){T.onload=L,T.onerror=I}),Cn(m,"link",r),i.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=lc.bind(u),e.addEventListener("load",i),e.addEventListener("error",i))}}function pE(){if(wl===null)throw Error(a(475));var e=wl;return e.stylesheets&&e.count===0&&hd(e,e.stylesheets),0<e.count?function(i){var r=setTimeout(function(){if(e.stylesheets&&hd(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)hd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function hd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,i.forEach(mE,e),uc=null,lc.call(e))}function mE(e,i){if(!(i.state.loading&4)){var r=uc.get(e);if(r)var u=r.get(null);else{r=new Map,uc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(r.set(T.dataset.precedence,T),u=T)}u&&r.set(null,u)}h=i.instance,T=h.getAttribute("data-precedence"),m=r.get(T)||u,m===u&&r.set(null,h),r.set(T,h),this.count++,u=lc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Cl={$$typeof:y,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function _E(e,i,r,u,h,m,T,L){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=In(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.hiddenUpdates=In(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.incompleteTransitions=new Map}function Q0(e,i,r,u,h,m,T,L,I,q,ht,vt){return e=new _E(e,i,r,T,L,I,q,vt),i=1,m===!0&&(i|=24),m=Ci(3,null,null,i),e.current=m,m.stateNode=e,i=Xf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:r,cache:i},Th(m),e}function J0(e){return e?(e=Us,e):Us}function $0(e,i,r,u,h,m){h=J0(h),u.context===null?u.context=h:u.pendingContext=h,u=Qa(i),u.payload={element:r},m=m===void 0?null:m,m!==null&&(u.callback=m),r=Ja(e,u,i),r!==null&&(Xn(r,e,i),hl(r,e,i))}function tv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function dd(e,i){tv(e,i),(e=e.alternate)&&tv(e,i)}function ev(e){if(e.tag===13){var i=Xa(e,67108864);i!==null&&Xn(i,e,67108864),dd(e,67108864)}}var cc=!0;function gE(e,i,r,u){var h=b.T;b.T=null;var m=W.p;try{W.p=2,pd(e,i,r,u)}finally{W.p=m,b.T=h}}function vE(e,i,r,u){var h=b.T;b.T=null;var m=W.p;try{W.p=8,pd(e,i,r,u)}finally{W.p=m,b.T=h}}function pd(e,i,r,u){if(cc){var h=md(u);if(h===null)nd(e,i,u,fc,r),iv(e,u);else if(yE(h,e,i,r,u))u.stopPropagation();else if(iv(e,u),i&4&&-1<xE.indexOf(e)){for(;h!==null;){var m=N(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=wt(m.pendingLanes);if(T!==0){var L=m;for(L.pendingLanes|=2,L.entangledLanes|=2;T;){var I=1<<31-Yt(T);L.entanglements[1]|=I,T&=~I}$i(m),(qe&6)===0&&(ju=dt()+500,El(0))}}break;case 13:L=Xa(m,2),L!==null&&Xn(L,m,2),Qu(),dd(m,2)}if(m=md(u),m===null&&nd(e,i,u,fc,r),m===h)break;h=m}h!==null&&u.stopPropagation()}else nd(e,i,u,null,r)}}function md(e){return e=Sf(e),_d(e)}var fc=null;function _d(e){if(fc=null,e=da(e),e!==null){var i=X(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=gt(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return fc=e,null}function nv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case pt:return 2;case Ht:return 8;case Ct:case zt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var gd=!1,rr=null,sr=null,or=null,Dl=new Map,Ul=new Map,lr=[],xE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iv(e,i){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(i.pointerId)}}function Ll(e,i,r,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=N(i),i!==null&&ev(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function yE(e,i,r,u,h){switch(i){case"focusin":return rr=Ll(rr,e,i,r,u,h),!0;case"dragenter":return sr=Ll(sr,e,i,r,u,h),!0;case"mouseover":return or=Ll(or,e,i,r,u,h),!0;case"pointerover":var m=h.pointerId;return Dl.set(m,Ll(Dl.get(m)||null,e,i,r,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Ul.set(m,Ll(Ul.get(m)||null,e,i,r,u,h)),!0}return!1}function av(e){var i=da(e.target);if(i!==null){var r=X(i);if(r!==null){if(i=r.tag,i===13){if(i=gt(r),i!==null){e.blockedOn=i,hu(e.priority,function(){if(r.tag===13){var u=ci(),h=Xa(r,u);h!==null&&Xn(h,r,u),dd(r,u)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=md(e.nativeEvent);if(r===null){r=e.nativeEvent;var u=new r.constructor(r.type,r);yf=u,r.target.dispatchEvent(u),yf=null}else return i=N(r),i!==null&&ev(i),e.blockedOn=r,!1;i.shift()}return!0}function rv(e,i,r){hc(e)&&r.delete(i)}function SE(){gd=!1,rr!==null&&hc(rr)&&(rr=null),sr!==null&&hc(sr)&&(sr=null),or!==null&&hc(or)&&(or=null),Dl.forEach(rv),Ul.forEach(rv)}function dc(e,i){e.blockedOn===i&&(e.blockedOn=null,gd||(gd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,SE)))}var pc=null;function sv(e){pc!==e&&(pc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var i=0;i<e.length;i+=3){var r=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(_d(u||r)===null)continue;break}var m=N(r);m!==null&&(e.splice(i,3),i-=3,sh(m,{pending:!0,data:h,method:r.method,action:u},u,h))}}))}function Nl(e){function i(I){return dc(I,e)}rr!==null&&dc(rr,e),sr!==null&&dc(sr,e),or!==null&&dc(or,e),Dl.forEach(i),Ul.forEach(i);for(var r=0;r<lr.length;r++){var u=lr[r];u.blockedOn===e&&(u.blockedOn=null)}for(;0<lr.length&&(r=lr[0],r.blockedOn===null);)av(r),r.blockedOn===null&&lr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var h=r[u],m=r[u+1],T=h[hn]||null;if(typeof m=="function")T||sv(r);else if(T){var L=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[hn]||null)L=T.formAction;else if(_d(h)!==null)continue}else L=T.action;typeof L=="function"?r[u+1]=L:(r.splice(u,3),u-=3),sv(r)}}}function vd(e){this._internalRoot=e}mc.prototype.render=vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,u=ci();$0(r,u,e,i,null,null)},mc.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&js(),$0(e.current,2,null,e,null,null),Qu(),i[ha]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Go();e={blockedOn:null,target:e,priority:i};for(var r=0;r<lr.length&&i!==0&&i<lr[r].priority;r++);lr.splice(r,0,e),r===0&&av(e)}};var ov=t.version;if(ov!=="19.0.0")throw Error(a(527,ov,"19.0.0"));W.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=et(i),e=e!==null?St(e):null,e=e===null?null:e.stateNode,e};var ME={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:da,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Zt=_c.inject(ME),Gt=_c}catch{}}return Vl.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,u="",h=Tg,m=bg,T=Ag,L=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(L=i.unstable_transitionCallbacks)),i=Q0(e,1,!1,null,null,r,u,h,m,T,L,null),e[ha]=i.current,ed(e.nodeType===8?e.parentNode:e),new vd(i)},Vl.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var u=!1,h="",m=Tg,T=bg,L=Ag,I=null,q=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(T=r.onCaughtError),r.onRecoverableError!==void 0&&(L=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(I=r.unstable_transitionCallbacks),r.formState!==void 0&&(q=r.formState)),i=Q0(e,1,!0,i,r??null,u,h,m,T,L,I,q),i.context=J0(null),r=i.current,u=ci(),h=Qa(u),h.callback=null,Ja(r,h,u),i.current.lanes=u,Hn(i,u),$i(i),e[ha]=i.current,ed(e),new mc(i)},Vl.version="19.0.0",Vl}var Bx;function l2(){if(Bx)return op.exports;Bx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),op.exports=o2(),op.exports}var u2=l2();const c2=TE(u2);c2.createRoot(document.getElementById("root")).render(Qt.jsx(n2,{}));
