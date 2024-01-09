import{i as m,r as w,d as P,T as D,a as no,f as ue,g as ao,h as Qt,j as lo,k as co,b as uo,A as j,t as ho,c as po,e as fo,l as ei,D as _o,_ as g}from"./indexhtml-0e56a356.js";/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ti=m`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;w("",ti,{moduleId:"lumo-overlay"});const mo=m`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;w("vaadin-tooltip-overlay",[ti,mo],{moduleId:"lumo-tooltip-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(i,e){return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let go=/(url\()([^)]*)(\))/g,vo=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,he,x;function oe(i,e){if(i&&vo.test(i)||i==="//")return i;if(he===void 0){he=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",he=t.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),he)try{return new URL(i,e).href}catch{return i}return x||(x=document.implementation.createHTMLDocument("temp"),x.base=x.createElement("base"),x.head.appendChild(x.base),x.anchor=x.createElement("a"),x.body.appendChild(x.anchor)),x.base.href=e,x.anchor.href=i,x.anchor.href||i}function ot(i,e){return i.replace(go,function(t,s,o,r){return s+"'"+oe(o.replace(/["']/g,""),e)+"'"+r})}function st(i){return i.substring(0,i.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const bo=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const yo=bo&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const i=new CSSStyleSheet;i.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[i],e.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})();let wo=window.Polymer&&window.Polymer.rootPath||st(document.baseURI||window.location.href),be=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let qe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Co=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ao=window.Polymer&&window.Polymer.legacyOptimizations||!1,Eo=window.Polymer&&window.Polymer.legacyWarnings||!1,xo=window.Polymer&&window.Polymer.syncInitialRender||!1,je=window.Polymer&&window.Polymer.legacyUndefined||!1,Po=window.Polymer&&window.Polymer.orderedComputed||!1,wt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,To=window.Polymer&&window.Polymer.fastDomIf||!1,sa=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let So=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Oo=0;const v=function(i){let e=i.__mixinApplications;e||(e=new WeakMap,i.__mixinApplications=e);let t=Oo++;function s(o){let r=o.__mixinSet;if(r&&r[t])return o;let n=e,a=n.get(o);if(!a){a=i(o),n.set(o,a);let l=Object.create(a.__mixinSet||r||null);l[t]=!0,a.__mixinSet=l}return a}return s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let rt={},ii={};function Ct(i,e){rt[i]=ii[i.toLowerCase()]=e}function At(i){return rt[i]||ii[i.toLowerCase()]}function No(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}class W extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let s=At(e);return s&&t?s.querySelector(t):s}return null}attributeChangedCallback(e,t,s,o){t!==s&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=oe(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=st(t)}return this.__assetpath}register(e){if(e=e||this.id,e){if(qe&&At(e)!==void 0)throw Ct(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Ct(e,this),No(this)}}}W.prototype.modules=rt;customElements.define("dom-module",W);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mo="link[rel=import][type~=css]",Lo="include",Et="shady-unscoped";function oi(i){return W.import(i)}function xt(i){let e=i.body?i.body:i;const t=ot(e.textContent,i.baseURI),s=document.createElement("style");return s.textContent=t,s}function Io(i){const e=i.trim().split(/\s+/),t=[];for(let s=0;s<e.length;s++)t.push(...ko(e[s]));return t}function ko(i){const e=oi(i);if(!e)return console.warn("Could not find style data in module named",i),[];if(e._styles===void 0){const t=[];t.push(...si(e));const s=e.querySelector("template");s&&t.push(...nt(s,e.assetpath)),e._styles=t}return e._styles}function nt(i,e){if(!i._styles){const t=[],s=i.content.querySelectorAll("style");for(let o=0;o<s.length;o++){let r=s[o],n=r.getAttribute(Lo);n&&t.push(...Io(n).filter(function(a,l,d){return d.indexOf(a)===l})),e&&(r.textContent=ot(r.textContent,e)),t.push(r)}i._styles=t}return i._styles}function zo(i){let e=oi(i);return e?si(e):[]}function si(i){const e=[],t=i.querySelectorAll(Mo);for(let s=0;s<t.length;s++){let o=t[s];if(o.import){const r=o.import,n=o.hasAttribute(Et);if(n&&!r._unscopedStyle){const a=xt(r);a.setAttribute(Et,""),r._unscopedStyle=a}else r._style||(r._style=xt(r));e.push(n?r._unscopedStyle:r._style)}}return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const k=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function We(i){return i.indexOf(".")>=0}function R(i){let e=i.indexOf(".");return e===-1?i:i.slice(0,e)}function ri(i,e){return i.indexOf(e+".")===0}function se(i,e){return e.indexOf(i+".")===0}function ye(i,e,t){return e+t.slice(i.length)}function ra(i,e){return i===e||ri(i,e)||se(i,e)}function te(i){if(Array.isArray(i)){let e=[];for(let t=0;t<i.length;t++){let s=i[t].toString().split(".");for(let o=0;o<s.length;o++)e.push(s[o])}return e.join(".")}else return i}function ni(i){return Array.isArray(i)?te(i).split("."):i.toString().split(".")}function E(i,e,t){let s=i,o=ni(e);for(let r=0;r<o.length;r++){if(!s)return;let n=o[r];s=s[n]}return t&&(t.path=o.join(".")),s}function Pt(i,e,t){let s=i,o=ni(e),r=o[o.length-1];if(o.length>1){for(let n=0;n<o.length-1;n++){let a=o[n];if(s=s[a],!s)return}s[r]=t}else s[e]=t;return o.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const we={},Do=/-[a-z]/g,Ro=/([A-Z])/g;function ai(i){return we[i]||(we[i]=i.indexOf("-")<0?i:i.replace(Do,e=>e[1].toUpperCase()))}function xe(i){return we[i]||(we[i]=i.replace(Ro,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Fo=0,li=0,B=[],Ho=0,Ye=!1,di=document.createTextNode("");new window.MutationObserver(Bo).observe(di,{characterData:!0});function Bo(){Ye=!1;const i=B.length;for(let e=0;e<i;e++){let t=B[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}B.splice(0,i),li+=i}const na={after(i){return{run(e){return window.setTimeout(e,i)},cancel(e){window.clearTimeout(e)}}},run(i,e){return window.setTimeout(i,e)},cancel(i){window.clearTimeout(i)}},aa={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},la={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},Vo={run(i){return Ye||(Ye=!0,di.textContent=Ho++),B.push(i),Fo++},cancel(i){const e=i-li;if(e>=0){if(!B[e])throw new Error("invalid async handle: "+i);B[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Uo=Vo,ci=v(i=>{class e extends i{static createProperties(s){const o=this.prototype;for(let r in s)r in o||o._createPropertyAccessor(r)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,o){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,o))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let o=this.__dataAttributes[s];return o||(o=this.constructor.attributeNameForProperty(s),this.__dataAttributes[o]=s),o}_definePropertyAccessor(s,o){Object.defineProperty(this,s,{get(){return this.__data[s]},set:o?function(){}:function(r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,o){this._setPendingProperty(s,o)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,o,r){let n=this.__data[s],a=this._shouldPropertyChange(s,o,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=n),this.__data[s]=o,this.__dataPending[s]=o),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Uo.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,o=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(s,o,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,o,r)),this.__dataCounter--}_shouldPropertiesChange(s,o,r){return!!o}_propertiesChanged(s,o,r){}_shouldPropertyChange(s,o,r){return r!==o&&(r===r||o===o)}attributeChangedCallback(s,o,r,n){o!==r&&this._attributeToProperty(s,r),super.attributeChangedCallback&&super.attributeChangedCallback(s,o,r,n)}_attributeToProperty(s,o,r){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[s]||s;this[a]=this._deserializeValue(o,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,o,r){this.__serializing=!0,r=arguments.length<3?this[s]:r,this._valueToNodeAttribute(this,r,o||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,o,r){const n=this._serializeValue(o);(r==="class"||r==="name"||r==="slot")&&(s=k(s)),n===void 0?s.removeAttribute(r):s.setAttribute(r,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(s){switch(typeof s){case"boolean":return s?"":void 0;default:return s!=null?s.toString():void 0}}_deserializeValue(s,o){switch(o){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ui={};let pe=HTMLElement.prototype;for(;pe;){let i=Object.getOwnPropertyNames(pe);for(let e=0;e<i.length;e++)ui[i[e]]=!0;pe=Object.getPrototypeOf(pe)}const qo=(()=>window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1)();function jo(i,e){if(!ui[e]){let t=i[e];t!==void 0&&(i.__data?i._setPendingProperty(e,t):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[e]=t))}}const Wo=v(i=>{const e=ci(i);class t extends e{static createPropertiesForAttributes(){let o=this.observedAttributes;for(let r=0;r<o.length;r++)this.prototype._createPropertyAccessor(ai(o[r]))}static attributeNameForProperty(o){return xe(o)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(o){for(let r in o)this._setProperty(r,o[r])}_ensureAttribute(o,r){const n=this;n.hasAttribute(o)||this._valueToNodeAttribute(n,r,o)}_serializeValue(o){switch(typeof o){case"object":if(o instanceof Date)return o.toString();if(o){if(qo(o))return o;try{return JSON.stringify(o)}catch{return""}}default:return super._serializeValue(o)}}_deserializeValue(o,r){let n;switch(r){case Object:try{n=JSON.parse(o)}catch{n=o}break;case Array:try{n=JSON.parse(o)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${o}`)}break;case Date:n=isNaN(o)?String(o):Number(o),n=new Date(n);break;default:n=super._deserializeValue(o,r);break}return n}_definePropertyAccessor(o,r){jo(this,o),super._definePropertyAccessor(o,r)}_hasAccessor(o){return this.__dataHasAccessor&&this.__dataHasAccessor[o]}_isPropertyPending(o){return!!(this.__dataPending&&o in this.__dataPending)}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yo={"dom-if":!0,"dom-repeat":!0};let Tt=!1,St=!1;function Go(){if(!Tt){Tt=!0;const i=document.createElement("textarea");i.placeholder="a",St=i.placeholder===i.textContent}return St}function Ko(i){Go()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}const $o=(()=>{const i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,t,s)=>{const o=t.getAttribute(s);if(i&&s.startsWith("on-")){e.setAttribute(s,i.createScript(o,s));return}e.setAttribute(s,o)}})();function Jo(i){let e=i.getAttribute("is");if(e&&Yo[e]){let t=i;for(t.removeAttribute("is"),i=t.ownerDocument.createElement(e),t.parentNode.replaceChild(i,t),i.appendChild(t);t.attributes.length;){const{name:s}=t.attributes[0];$o(i,t,s),t.removeAttribute(s)}}return i}function hi(i,e){let t=e.parentInfo&&hi(i,e.parentInfo);if(t){for(let s=t.firstChild,o=0;s;s=s.nextSibling)if(e.parentIndex===o++)return s}else return i}function Zo(i,e,t,s){s.id&&(e[s.id]=t)}function Xo(i,e,t){if(t.events&&t.events.length)for(let s=0,o=t.events,r;s<o.length&&(r=o[s]);s++)i._addMethodEventListenerToNode(e,r.name,r.value,i)}function Qo(i,e,t,s){t.templateInfo&&(e._templateInfo=t.templateInfo,e._parentTemplateInfo=s)}function es(i,e,t){return i=i._methodHost||i,function(o){i[t]?i[t](o,o.detail):console.warn("listener method `"+t+"` not defined")}}const ts=v(i=>{class e extends i{static _parseTemplate(s,o){if(!s._templateInfo){let r=s._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!o,r.stripWhiteSpace=o&&o.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,r,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,o,r){return this._parseTemplateNode(s.content,o,r)}static _parseTemplateNode(s,o,r){let n=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,o,r)||n:a.localName==="slot"&&(o.hasInsertionPoint=!0),Ko(a),a.firstChild&&this._parseTemplateChildNodes(a,o,r),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,o,r)||n),n||r.noted}static _parseTemplateChildNodes(s,o,r){if(!(s.localName==="script"||s.localName==="style"))for(let n=s.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=Jo(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)n.textContent+=c.textContent,l=c.nextSibling,s.removeChild(c),c=l;if(o.stripWhiteSpace&&!n.textContent.trim()){s.removeChild(n);continue}}let d={parentIndex:a,parentInfo:r};this._parseTemplateNode(n,o,d)&&(d.infoIndex=o.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(s,o,r){let n=s,a=this._parseTemplate(n,o);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,o,r){let n=!1,a=Array.from(s.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(s,o,r,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(s,o,r,n,a){return n.slice(0,3)==="on-"?(s.removeAttribute(n),r.events=r.events||[],r.events.push({name:n.slice(3),value:a}),!0):n==="id"?(r.id=a,!0):!1}static _contentForTemplate(s){let o=s._templateInfo;return o&&o.content||s.content}_stampTemplate(s,o){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),o=o||this.constructor._parseTemplate(s);let r=o.nodeInfoList,n=o.content||s.content,a=document.importNode(n,!0);a.__noInsertionPoint=!o.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let d=0,c=r.length,u;d<c&&(u=r[d]);d++){let h=l[d]=hi(a,u);Zo(this,a.$,h,u),Qo(this,h,u,o),Xo(this,h,u)}return a=a,a}_addMethodEventListenerToNode(s,o,r,n){n=n||s;let a=es(n,o,r);return this._addEventListenerToNode(s,o,a),a}_addEventListenerToNode(s,o,r){s.addEventListener(o,r)}_removeEventListenerFromNode(s,o,r){s.removeEventListener(o,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let re=0;const ne=[],_={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},pi="__computeInfo",is=/[A-Z]/;function Oe(i,e,t){let s=i[e];if(!s)s=i[e]={};else if(!i.hasOwnProperty(e)&&(s=i[e]=Object.create(i[e]),t))for(let o in s){let r=s[o],n=s[o]=Array(r.length);for(let a=0;a<r.length;a++)n[a]=r[a]}return s}function ie(i,e,t,s,o,r){if(e){let n=!1;const a=re++;for(let l in t){let d=o?R(l):l,c=e[d];if(c)for(let u=0,h=c.length,p;u<h&&(p=c[u]);u++)(!p.info||p.info.lastRun!==a)&&(!o||at(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(i,l,t,s,p.info,o,r),n=!0)}return n}return!1}function os(i,e,t,s,o,r,n,a){let l=!1,d=n?R(s):s,c=e[d];if(c)for(let u=0,h=c.length,p;u<h&&(p=c[u]);u++)(!p.info||p.info.lastRun!==t)&&(!n||at(s,p.trigger))&&(p.info&&(p.info.lastRun=t),p.fn(i,s,o,r,p.info,n,a),l=!0);return l}function at(i,e){if(e){let t=e.name;return t==i||!!(e.structured&&ri(t,i))||!!(e.wildcard&&se(t,i))}else return!0}function Ot(i,e,t,s,o){let r=typeof o.method=="string"?i[o.method]:o.method,n=o.property;r?r.call(i,i.__data[n],s[n]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function ss(i,e,t,s,o){let r=i[_.NOTIFY],n,a=re++;for(let d in e)e[d]&&(r&&os(i,r,a,d,t,s,o)||o&&rs(i,d,t))&&(n=!0);let l;n&&(l=i.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function rs(i,e,t){let s=R(e);if(s!==e){let o=xe(s)+"-changed";return fi(i,o,t[e],e),!0}return!1}function fi(i,e,t,s){let o={value:t,queueProperty:!0};s&&(o.path=s),k(i).dispatchEvent(new CustomEvent(e,{detail:o}))}function ns(i,e,t,s,o,r){let a=(r?R(e):e)!=e?e:null,l=a?E(i,a):i.__data[e];a&&l===void 0&&(l=t[e]),fi(i,o.eventName,l,a)}function as(i,e,t,s,o){let r,n=i.detail,a=n&&n.path;a?(s=ye(t,s,a),r=n&&n.value):r=i.currentTarget[t],r=o?!r:r,(!e[_.READ_ONLY]||!e[_.READ_ONLY][s])&&e._setPendingPropertyOrPath(s,r,!0,!!a)&&(!n||!n.queueProperty)&&e._invalidateProperties()}function ls(i,e,t,s,o){let r=i.__data[e];be&&(r=be(r,o.attrName,"attribute",i)),i._propertyToAttribute(e,o.attrName,r)}function ds(i,e,t,s){let o=i[_.COMPUTE];if(o)if(Po){re++;const r=us(i),n=[];for(let l in e)Nt(l,o,n,r,s);let a;for(;a=n.shift();)_i(i,"",e,t,a)&&Nt(a.methodInfo,o,n,r,s);Object.assign(t,i.__dataOld),Object.assign(e,i.__dataPending),i.__dataPending=null}else{let r=e;for(;ie(i,o,r,t,s);)Object.assign(t,i.__dataOld),Object.assign(e,i.__dataPending),r=i.__dataPending,i.__dataPending=null}}const cs=(i,e,t)=>{let s=0,o=e.length-1,r=-1;for(;s<=o;){const n=s+o>>1,a=t.get(e[n].methodInfo)-t.get(i.methodInfo);if(a<0)s=n+1;else if(a>0)o=n-1;else{r=n;break}}r<0&&(r=o+1),e.splice(r,0,i)},Nt=(i,e,t,s,o)=>{const r=o?R(i):i,n=e[r];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==re&&(!o||at(i,l.trigger))&&(l.info.lastRun=re,cs(l.info,t,s))}};function us(i){let e=i.constructor.__orderedComputedDeps;if(!e){e=new Map;const t=i[_.COMPUTE];let{counts:s,ready:o,total:r}=hs(i),n;for(;n=o.shift();){e.set(n,e.size);const a=t[n];a&&a.forEach(l=>{const d=l.info.methodInfo;--r,--s[d]===0&&o.push(d)})}r!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=e}return e}function hs(i){const e=i[pi],t={},s=i[_.COMPUTE],o=[];let r=0;for(let n in e){const a=e[n];r+=t[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in s)e[n]||o.push(n);return{counts:t,ready:o,total:r}}function _i(i,e,t,s,o){let r=Ge(i,e,t,s,o);if(r===ne)return!1;let n=o.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[n]?i._setPendingProperty(n,r,!0):(i[n]=r,!1)}function ps(i,e,t){let s=i.__dataLinkedPaths;if(s){let o;for(let r in s){let n=s[r];se(r,e)?(o=ye(r,n,e),i._setPendingPropertyOrPath(o,t,!0,!0)):se(n,e)&&(o=ye(n,r,e),i._setPendingPropertyOrPath(o,t,!0,!0))}}}function Ne(i,e,t,s,o,r,n){t.bindings=t.bindings||[];let a={kind:s,target:o,parts:r,literal:n,isCompound:r.length!==1};if(t.bindings.push(a),vs(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||xe(o)+"-changed",a.listenerNegate=c}let l=e.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,fs(i,e,a,c,l)}}function fs(i,e,t,s,o){if(!s.literal)if(t.kind==="attribute"&&t.target[0]==="-")console.warn("Cannot set attribute "+t.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,n={index:o,binding:t,part:s,evaluator:i};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=gi(l),l.wildcard=!0),i._addTemplatePropertyEffect(e,l.rootProperty,{fn:_s,info:n,trigger:l})}}}function _s(i,e,t,s,o,r,n){let a=n[o.index],l=o.binding,d=o.part;if(r&&d.source&&e.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=t[e];e=ye(d.source,l.target,e),a._setPendingPropertyOrPath(e,c,!1,!0)&&i._enqueueClient(a)}else{let c=o.evaluator._evaluateBinding(i,d,e,t,s,r);c!==ne&&ms(i,a,l,d,c)}}function ms(i,e,t,s,o){if(o=gs(e,o,t,s),be&&(o=be(o,t.target,t.kind,e)),t.kind=="attribute")i._valueToNodeAttribute(e,o,t.target);else{let r=t.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[_.READ_ONLY]||!e[_.READ_ONLY][r])&&e._setPendingProperty(r,o)&&i._enqueueClient(e):i._setUnmanagedPropertyToNode(e,r,o)}}function gs(i,e,t,s){if(t.isCompound){let o=i.__dataCompoundStorage[t.target];o[s.compoundIndex]=e,e=o.join("")}return t.kind!=="attribute"&&(t.target==="textContent"||t.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(e=e??""),e}function vs(i){return!!i.target&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function bs(i,e){let{nodeList:t,nodeInfoList:s}=e;if(s.length)for(let o=0;o<s.length;o++){let r=s[o],n=t[o],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];ys(n,d),ws(n,i,d)}n.__dataHost=i}}function ys(i,e){if(e.isCompound){let t=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),s=e.parts,o=new Array(s.length);for(let n=0;n<s.length;n++)o[n]=s[n].literal;let r=e.target;t[r]=o,e.literal&&e.kind=="property"&&(r==="className"&&(i=k(i)),i[r]=e.literal)}}function ws(i,e,t){if(t.listenerEvent){let s=t.parts[0];i.addEventListener(t.listenerEvent,function(o){as(o,e,t.target,s.source,s.negate)})}}function Mt(i,e,t,s,o,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let n={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:r};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||i._addPropertyEffect(l.rootProperty,t,{fn:s,info:n,trigger:l});return r&&i._addPropertyEffect(e.methodName,t,{fn:s,info:n}),n}function Ge(i,e,t,s,o){let r=i._methodHost||i,n=r[o.methodName];if(n){let a=i._marshalArgs(o.args,e,t);return a===ne?ne:n.apply(r,a)}else o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const Cs=[],mi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",As="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Es="(?:'(?:[^'\\\\]|\\\\.)*')",xs='(?:"(?:[^"\\\\]|\\\\.)*")',Ps="(?:"+Es+"|"+xs+")",Lt="(?:("+mi+"|"+As+"|"+Ps+")\\s*)",Ts="(?:"+Lt+"(?:,\\s*"+Lt+")*)",Ss="(?:\\(\\s*(?:"+Ts+"?)\\)\\s*)",Os="("+mi+"\\s*"+Ss+"?)",Ns="(\\[\\[|{{)\\s*",Ms="(?:]]|}})",Ls="(?:(!)\\s*)?",Is=Ns+Ls+Os+Ms,It=new RegExp(Is,"g");function kt(i){let e="";for(let t=0;t<i.length;t++){let s=i[t].literal;e+=s||""}return e}function Me(i){let e=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let s={methodName:e[1],static:!0,args:Cs};if(e[2].trim()){let o=e[2].replace(/\\,/g,"&comma;").split(",");return ks(o,s)}else return s}return null}function ks(i,e){return e.args=i.map(function(t){let s=gi(t);return s.literal||(e.static=!1),s},this),e}function gi(i){let e=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),t={name:e,value:"",literal:!1},s=e[0];switch(s==="-"&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':t.value=e.slice(1,-1),t.literal=!0;break;case"#":t.value=Number(e),t.literal=!0;break}return t.literal||(t.rootProperty=R(e),t.structured=We(e),t.structured&&(t.wildcard=e.slice(-2)==".*",t.wildcard&&(t.name=e.slice(0,-2)))),t}function zt(i,e,t){let s=E(i,t);return s===void 0&&(s=e[t]),s}function vi(i,e,t,s){const o={indexSplices:s};je&&!i._overrideLegacyUndefined&&(e.splices=o),i.notifyPath(t+".splices",o),i.notifyPath(t+".length",e.length),je&&!i._overrideLegacyUndefined&&(o.indexSplices=[])}function K(i,e,t,s,o,r){vi(i,e,t,[{index:s,addedCount:o,removed:r,object:e,type:"splice"}])}function zs(i){return i[0].toUpperCase()+i.substring(1)}const Ds=v(i=>{const e=ts(Wo(i));class t extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return _}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if($.length){let o=$[$.length-1];o._enqueueClient(this),this.__dataHost=o}}_initializeProtoProperties(o){this.__data=Object.create(o),this.__dataPending=Object.create(o),this.__dataOld={}}_initializeInstanceProperties(o){let r=this[_.READ_ONLY];for(let n in o)(!r||!r[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=o[n])}_addPropertyEffect(o,r,n){this._createPropertyAccessor(o,r==_.READ_ONLY);let a=Oe(this,r,!0)[o];a||(a=this[r][o]=[]),a.push(n)}_removePropertyEffect(o,r,n){let a=Oe(this,r,!0)[o],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(o,r){let n=this[r];return!!(n&&n[o])}_hasReadOnlyEffect(o){return this._hasPropertyEffect(o,_.READ_ONLY)}_hasNotifyEffect(o){return this._hasPropertyEffect(o,_.NOTIFY)}_hasReflectEffect(o){return this._hasPropertyEffect(o,_.REFLECT)}_hasComputedEffect(o){return this._hasPropertyEffect(o,_.COMPUTE)}_setPendingPropertyOrPath(o,r,n,a){if(a||R(Array.isArray(o)?o[0]:o)!==o){if(!a){let l=E(this,o);if(o=Pt(this,o,r),!o||!super._shouldPropertyChange(o,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(o,r,n))return ps(this,o,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[o])return this._setPendingProperty(o,r,n);this[o]=r}return!1}_setUnmanagedPropertyToNode(o,r,n){(n!==o[r]||typeof n=="object")&&(r==="className"&&(o=k(o)),o[r]=n)}_setPendingProperty(o,r,n){let a=this.__dataHasPaths&&We(o),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(o,r,l[o])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),o in this.__dataOld||(this.__dataOld[o]=this.__data[o]),a?this.__dataTemp[o]=r:this.__data[o]=r,this.__dataPending[o]=r,(a||this[_.NOTIFY]&&this[_.NOTIFY][o])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[o]=n),!0):!1}_setProperty(o,r){this._setPendingProperty(o,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(o){this.__dataPendingClients=this.__dataPendingClients||[],o!==this&&this.__dataPendingClients.push(o)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let o=this.__dataPendingClients;if(o){this.__dataPendingClients=null;for(let r=0;r<o.length;r++){let n=o[r];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(o,r){for(let n in o)(r||!this[_.READ_ONLY]||!this[_.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,o[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(o,r,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ds(this,r,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,n,a),this._flushClients(),ie(this,this[_.REFLECT],r,n,a),ie(this,this[_.OBSERVE],r,n,a),l&&ss(this,l,r,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(o,r,n){this[_.PROPAGATE]&&ie(this,this[_.PROPAGATE],o,r,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,o,r,n)}_runEffectsForTemplate(o,r,n,a){const l=(d,c)=>{ie(this,o.propertyEffects,d,n,c,o.nodeList);for(let u=o.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,d,n,c)};o.runEffects?o.runEffects(l,r,a):l(r,a)}linkPaths(o,r){o=te(o),r=te(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[o]=r}unlinkPaths(o){o=te(o),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[o]}notifySplices(o,r){let n={path:""},a=E(this,o,n);vi(this,a,n.path,r)}get(o,r){return E(r||this,o)}set(o,r,n){n?Pt(n,o,r):(!this[_.READ_ONLY]||!this[_.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,r,!0)&&this._invalidateProperties()}push(o,...r){let n={path:""},a=E(this,o,n),l=a.length,d=a.push(...r);return r.length&&K(this,a,n.path,l,r.length,[]),d}pop(o){let r={path:""},n=E(this,o,r),a=!!n.length,l=n.pop();return a&&K(this,n,r.path,n.length,0,[l]),l}splice(o,r,n,...a){let l={path:""},d=E(this,o,l);r<0?r=d.length-Math.floor(-r):r&&(r=Math.floor(r));let c;return arguments.length===2?c=d.splice(r):c=d.splice(r,n,...a),(a.length||c.length)&&K(this,d,l.path,r,a.length,c),c}shift(o){let r={path:""},n=E(this,o,r),a=!!n.length,l=n.shift();return a&&K(this,n,r.path,0,0,[l]),l}unshift(o,...r){let n={path:""},a=E(this,o,n),l=a.unshift(...r);return r.length&&K(this,a,n.path,0,r.length,[]),l}notifyPath(o,r){let n;if(arguments.length==1){let a={path:""};r=E(this,o,a),n=a.path}else Array.isArray(o)?n=te(o):n=o;this._setPendingPropertyOrPath(n,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(o,r){this._addPropertyEffect(o,_.READ_ONLY),r&&(this["_set"+zs(o)]=function(n){this._setProperty(o,n)})}_createPropertyObserver(o,r,n){let a={property:o,method:r,dynamicFn:!!n};this._addPropertyEffect(o,_.OBSERVE,{fn:Ot,info:a,trigger:{name:o}}),n&&this._addPropertyEffect(r,_.OBSERVE,{fn:Ot,info:a,trigger:{name:r}})}_createMethodObserver(o,r){let n=Me(o);if(!n)throw new Error("Malformed observer expression '"+o+"'");Mt(this,n,_.OBSERVE,Ge,null,r)}_createNotifyingProperty(o){this._addPropertyEffect(o,_.NOTIFY,{fn:ns,info:{eventName:xe(o)+"-changed",property:o}})}_createReflectedProperty(o){let r=this.constructor.attributeNameForProperty(o);r[0]==="-"?console.warn("Property "+o+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(o,_.REFLECT,{fn:ls,info:{attrName:r}})}_createComputedProperty(o,r,n){let a=Me(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=Mt(this,a,_.COMPUTE,_i,o,n);Oe(this,pi)[o]=l}_marshalArgs(o,r,n){const a=this.__data,l=[];for(let d=0,c=o.length;d<c;d++){let{name:u,structured:h,wildcard:p,value:f,literal:C}=o[d];if(!C)if(p){const A=se(u,r),b=zt(a,n,A?r:u);f={path:A?r:u,value:b,base:A?E(a,u):b}}else f=h?zt(a,n,u):a[u];if(je&&!this._overrideLegacyUndefined&&f===void 0&&o.length>1)return ne;l[d]=f}return l}static addPropertyEffect(o,r,n){this.prototype._addPropertyEffect(o,r,n)}static createPropertyObserver(o,r,n){this.prototype._createPropertyObserver(o,r,n)}static createMethodObserver(o,r){this.prototype._createMethodObserver(o,r)}static createNotifyingProperty(o){this.prototype._createNotifyingProperty(o)}static createReadOnlyProperty(o,r){this.prototype._createReadOnlyProperty(o,r)}static createReflectedProperty(o){this.prototype._createReflectedProperty(o)}static createComputedProperty(o,r,n){this.prototype._createComputedProperty(o,r,n)}static bindTemplate(o){return this.prototype._bindTemplate(o)}_bindTemplate(o,r){let n=this.constructor._parseTemplate(o),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(r)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=o._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(o,r,n){let a=o.hostProps=o.hostProps||{};a[r]=!0;let l=o.propertyEffects=o.propertyEffects||{};(l[r]=l[r]||[]).push(n)}_stampTemplate(o,r){r=r||this._bindTemplate(o,!0),$.push(this);let n=super._stampTemplate(o,r);if($.pop(),r.nodeList=n.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=r,bs(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(o){const r=o.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=r;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),r.nextSibling=r.previousSibling=null;let d=r.childNodes;for(let c=0;c<d.length;c++){let u=d[c];k(k(u).parentNode).removeChild(u)}}static _parseTemplateNode(o,r,n){let a=e._parseTemplateNode.call(this,o,r,n);if(o.nodeType===Node.TEXT_NODE){let l=this._parseBindings(o.textContent,r);l&&(o.textContent=kt(l)||" ",Ne(this,r,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(o,r,n,a,l){let d=this._parseBindings(l,r);if(d){let c=a,u="property";is.test(a)?u="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),u="attribute");let h=kt(d);return h&&u=="attribute"&&(a=="class"&&o.hasAttribute("class")&&(h+=" "+o.getAttribute(a)),o.setAttribute(a,h)),u=="attribute"&&c=="disable-upgrade$"&&o.setAttribute(a,""),o.localName==="input"&&c==="value"&&o.setAttribute(c,""),o.removeAttribute(c),u==="property"&&(a=ai(a)),Ne(this,r,n,u,a,d,h),!0}else return e._parseTemplateNodeAttribute.call(this,o,r,n,a,l)}static _parseTemplateNestedTemplate(o,r,n){let a=e._parseTemplateNestedTemplate.call(this,o,r,n);const l=o.parentNode,d=n.templateInfo,c=l.localName==="dom-if",u=l.localName==="dom-repeat";wt&&(c||u)&&(l.removeChild(o),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let h=d.hostProps;if(To&&c)h&&(r.hostProps=Object.assign(r.hostProps||{},h),wt||(n.parentInfo.noted=!0));else{let p="{";for(let f in h){let C=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Ne(this,r,n,"property","_host_"+f,C)}}return a}static _parseBindings(o,r){let n=[],a=0,l;for(;(l=It.exec(o))!==null;){l.index>a&&n.push({literal:o.slice(a,l.index)});let d=l[1][0],c=!!l[2],u=l[3].trim(),h=!1,p="",f=-1;d=="{"&&(f=u.indexOf("::"))>0&&(p=u.substring(f+2),u=u.substring(0,f),h=!0);let C=Me(u),A=[];if(C){let{args:b,methodName:y}=C;for(let Se=0;Se<b.length;Se++){let yt=b[Se];yt.literal||A.push(yt)}let F=r.dynamicFns;(F&&F[y]||C.static)&&(A.push(y),C.dynamicFn=!0)}else A.push(u);n.push({source:u,mode:d,negate:c,customEvent:h,signature:C,dependencies:A,event:p}),a=It.lastIndex}if(a&&a<o.length){let d=o.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(o,r,n,a,l,d){let c;return r.signature?c=Ge(o,n,a,l,r.signature):n!=r.source?c=E(o,r.source):d&&We(n)?c=E(o,n):c=o.__data[n],r.negate&&(c=!c),c}}return t}),$=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Rs(i){const e={};for(let t in i){const s=i[t];e[t]=typeof s=="function"?{type:s}:s}return e}const Fs=v(i=>{const e=ci(i);function t(r){const n=Object.getPrototypeOf(r);return n.prototype instanceof o?n:null}function s(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let n=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(n=Rs(a))}r.__ownProperties=n}return r.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=t(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=s(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=t(this);this.__properties=Object.assign({},n&&n._properties,s(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Hs="3.5.1",Dt=window.ShadyCSS&&window.ShadyCSS.cssBuild,Bs=v(i=>{const e=Fs(Ds(i));function t(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let u=d[c];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=u)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function o(l,d,c,u){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,u)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,u[c.observer]),l._addPropertyToAttributeMap(d)}function r(l,d,c,u){if(!Dt){const h=d.content.querySelectorAll("style"),p=nt(d),f=zo(c),C=d.content.firstElementChild;for(let b=0;b<f.length;b++){let y=f[b];y.textContent=l._processStyleText(y.textContent,u),d.content.insertBefore(y,C)}let A=0;for(let b=0;b<p.length;b++){let y=p[b],F=h[A];F!==y?(y=y.cloneNode(!0),F.parentNode.insertBefore(y,F)):A++,y.textContent=l._processStyleText(y.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),So&&Dt&&yo){const h=d.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function n(l){let d=null;if(l&&(!qe||Co)&&(d=W.import(l,"template"),qe&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends e{static get polymerElementVersion(){return Hs}static _finalizeClass(){e._finalizeClass.call(this);const d=s(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):Ao||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)o(this.prototype,c,d[c],d)}static createObservers(d,c){const u=this.prototype;for(let h=0;h<d.length;h++)u._createMethodObserver(d[h],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=st(d.url);else{const c=W.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=wo,this.importPath=this.constructor.importPath;let d=t(this.constructor);if(d)for(let c in d){let u=d[c];if(this._canApplyPropertyDefault(c)){let h=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(c)?this._setPendingProperty(c,h,!0):this[c]=h}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return ot(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const u=this.importPath,h=u?oe(u):"";r(this,c,d,h),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=k(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),xo&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=oe(this.importPath)),oe(d,c)}static _parseTemplateContent(d,c,u){return c.dynamicFns=c.dynamicFns||this._properties,e._parseTemplateContent.call(this,d,c,u)}static _addTemplatePropertyEffect(d,c,u){return Eo&&!(c in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,d,c,u)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rt=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i});class bi{constructor(e,t){wi(e,t);const s=t.reduce((o,r,n)=>o+yi(r)+e[n+1],e[0]);this.value=s.toString()}toString(){return this.value}}function yi(i){if(i instanceof bi)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function Vs(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof bi)return yi(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}const T=function(e,...t){wi(e,t);const s=document.createElement("template");let o=t.reduce((r,n,a)=>r+Vs(n)+e[a+1],e[0]);return Rt&&(o=Rt.createHTML(o)),s.innerHTML=o,s},wi=(i,e)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||e.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const N=Bs(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const S=[];function Ke(i,e,t=i.getAttribute("dir")){e?i.setAttribute("dir",e):t!=null&&i.removeAttribute("dir")}function $e(){return document.documentElement.getAttribute("dir")}function Us(){const i=$e();S.forEach(e=>{Ke(e,i)})}const qs=new MutationObserver(Us);qs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const lt=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Ke(this,$e(),null))}attributeChangedCallback(t,s,o){if(super.attributeChangedCallback(t,s,o),t!=="dir")return;const r=$e(),n=o===r&&S.indexOf(this)===-1,a=!o&&s&&S.indexOf(this)===-1;n||a?(this.__subscribe(),Ke(this,r,o)):o!==r&&s===r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=S.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,s,o){o==="dir"&&s===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,s,o)}_attributeToProperty(t,s,o){t==="dir"&&!s?this.dir="":super._attributeToProperty(t,s,o)}__subscribe(){S.includes(this)||S.push(this)}__unsubscribe(){S.includes(this)&&S.splice(S.indexOf(this),1)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ce=!1,Ci=[],Ai=[];function Ei(){Ce=!0,requestAnimationFrame(function(){Ce=!1,js(Ci),setTimeout(function(){Ws(Ai)})})}function js(i){for(;i.length;)xi(i.shift())}function Ws(i){for(let e=0,t=i.length;e<t;e++)xi(i.shift())}function xi(i){const e=i[0],t=i[1],s=i[2];try{t.apply(e,s)}catch(o){setTimeout(()=>{throw o})}}function ca(i,e,t){Ce||Ei(),Ci.push([i,e,t])}function Ys(i,e,t){Ce||Ei(),Ai.push([i,e,t])}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pe=i=>i.test(navigator.userAgent),Je=i=>i.test(navigator.platform),Gs=i=>i.test(navigator.vendor),ua=Pe(/Android/u),ha=Pe(/Chrome/u)&&Gs(/Google Inc/u),pa=Pe(/Firefox/u),Ks=Je(/^iPad/u)||Je(/^Mac/u)&&navigator.maxTouchPoints>1,$s=Je(/^iPhone/u),Js=$s||Ks,fa=Pe(/^((?!chrome|android).)*safari/iu),Zs=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let H=new WeakMap,fe=new WeakMap,_e={},Le=0;const Ft=i=>i&&i.nodeType===Node.ELEMENT_NODE,Ie=(...i)=>{console.error(`Error: ${i.join(" ")}. Skip setting aria-hidden.`)},Xs=(i,e)=>Ft(i)?e.map(t=>{if(!Ft(t))return Ie(t,"is not a valid element"),null;let s=t;for(;s&&s!==i;){if(i.contains(s))return t;s=s.getRootNode().host}return Ie(t,"is not contained inside",i),null}).filter(t=>!!t):(Ie(i,"is not a valid element"),[]),Qs=(i,e,t,s)=>{const o=Xs(e,Array.isArray(i)?i:[i]);_e[t]||(_e[t]=new WeakMap);const r=_e[t],n=[],a=new Set,l=new Set(o),d=u=>{if(!u||a.has(u))return;a.add(u);const h=u.assignedSlot;h&&d(h),d(u.parentNode||u.host)};o.forEach(d);const c=u=>{if(!u||l.has(u))return;const h=u.shadowRoot;(h?[...u.children,...h.children]:[...u.children]).forEach(f=>{if(!["template","script","style"].includes(f.localName))if(a.has(f))c(f);else{const C=f.getAttribute(s),A=C!==null&&C!=="false",b=(H.get(f)||0)+1,y=(r.get(f)||0)+1;H.set(f,b),r.set(f,y),n.push(f),b===1&&A&&fe.set(f,!0),y===1&&f.setAttribute(t,"true"),A||f.setAttribute(s,"true")}})};return c(e),a.clear(),Le+=1,()=>{n.forEach(u=>{const h=H.get(u)-1,p=r.get(u)-1;H.set(u,h),r.set(u,p),h||(fe.has(u)?fe.delete(u):u.removeAttribute(s)),p||u.removeAttribute(t)}),Le-=1,Le||(H=new WeakMap,H=new WeakMap,fe=new WeakMap,_e={})}},er=(i,e=document.body,t="data-aria-hidden")=>{const s=Array.from(Array.isArray(i)?i:[i]);return e&&s.push(...Array.from(e.querySelectorAll("[aria-live]"))),Qs(s,e,t,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tr{constructor(e,t){this.host=e,this.callback=typeof t=="function"?t:()=>e}showModal(){const e=this.callback();this.__showOthers=er(e)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let dt=!1;window.addEventListener("keydown",()=>{dt=!0},{capture:!0});window.addEventListener("mousedown",()=>{dt=!1},{capture:!0});function Ze(){let i=document.activeElement||document.body;for(;i.shadowRoot&&i.shadowRoot.activeElement;)i=i.shadowRoot.activeElement;return i}function Pi(){return dt}function Ti(i){const e=i.style;if(e.visibility==="hidden"||e.display==="none")return!0;const t=window.getComputedStyle(i);return t.visibility==="hidden"||t.display==="none"}function ir(i,e){const t=Math.max(i.tabIndex,0),s=Math.max(e.tabIndex,0);return t===0||s===0?s>t:t>s}function or(i,e){const t=[];for(;i.length>0&&e.length>0;)ir(i[0],e[0])?t.push(e.shift()):t.push(i.shift());return t.concat(i,e)}function Xe(i){const e=i.length;if(e<2)return i;const t=Math.ceil(e/2),s=Xe(i.slice(0,t)),o=Xe(i.slice(t));return or(s,o)}function _a(i){return i.offsetParent===null&&i.clientWidth===0&&i.clientHeight===0?!0:Ti(i)}function sr(i){return i.matches('[tabindex="-1"]')?!1:i.matches("input, select, textarea, button, object")?i.matches(":not([disabled])"):i.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function rr(i){return i.getRootNode().activeElement===i}function nr(i){if(!sr(i))return-1;const e=i.getAttribute("tabindex")||0;return Number(e)}function Si(i,e){if(i.nodeType!==Node.ELEMENT_NODE||Ti(i))return!1;const t=i,s=nr(t);let o=s>0;s>=0&&e.push(t);let r=[];return t.localName==="slot"?r=t.assignedNodes({flatten:!0}):r=(t.shadowRoot||t).children,[...r].forEach(n=>{o=Si(n,e)||o}),o}function ar(i){const e=[];return Si(i,e)?Xe(e):e}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lr{saveFocus(e){this.focusNode=e||Ze()}restoreFocus(){const e=this.focusNode;e&&(Ze()===document.body?setTimeout(()=>e.focus()):e.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ke=[];class dr{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return ar(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(rr).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");ke.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,ke.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(ke).pop()&&e.key==="Tab"){e.preventDefault();const t=e.shiftKey;this.__focusNextElement(t)}}__focusNextElement(e=!1){const t=this.__focusableElements,s=e?-1:1,o=this.__focusedElementIndex,r=(t.length+o+s)%t.length,n=t[r];n.focus(),n.localName==="input"&&n.select()}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const le=v(i=>typeof i.prototype.addController=="function"?i:class extends i{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),this.$!==void 0&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cr=i=>class extends le(i){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new tr(this),this.__focusTrapController=new dr(this),this.__focusRestorationController=new lr}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const t=Ze();return t===document.body||this._deepContains(t)}_deepContains(t){if(this.contains(t))return!0;let s=t;const o=t.ownerDocument;for(;s&&s!==o&&s!==this;)s=s.parentNode||s.host;return s===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ge=()=>Array.from(document.body.children).filter(i=>i instanceof HTMLElement&&i._hasOverlayStackMixin&&!i.hasAttribute("closing")).sort((i,e)=>i.__zIndex-e.__zIndex||0),ur=i=>i===ge().pop(),hr=i=>class extends i{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return ur(this)}bringToFront(){let t="";const s=ge().filter(o=>o!==this).pop();s&&(t=s.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),ge().forEach(t=>{t!==this&&(t.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=ge();let s;for(;(s=t.pop())&&!(s!==this&&(s.$.overlay.style.removeProperty("pointer-events"),!s.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pr=i=>class extends cr(hr(i)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Js&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(t){const s=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(s),s.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,o=window.innerWidth>t,r=document.documentElement.clientHeight;o&&r>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${r-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(t,s,o,r){const n=this._oldOwner!==s||this._oldModel!==o;this._oldModel=o,this._oldOwner=s;const a=this._oldRenderer!==t;this._oldRenderer=t;const l=this._oldOpened!==r;this._oldOpened=r,a&&(this.innerHTML="",delete this._$litPart$),r&&t&&(a||l||n)&&this.requestContentUpdate()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(t,s){t?(this._saveFocus(),this._animatedOpening(),Ys(this,()=>{this._trapFocus();const o=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(o)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):s&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this),s=t.getPropertyValue("animation-name");return!(t.getPropertyValue("display")==="none")&&s&&s!=="none"}_enqueueAnimation(t,s){const o=`__${t}Handler`,r=n=>{n&&n.target!==this||(s(),this.removeEventListener("animationend",r),delete this[o])};this[o]=r,this.addEventListener("animationend",r)}_flushAnimation(t){const s=`__${t}Handler`;typeof this[s]=="function"&&this[s]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(t){return this._last}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(t))return;const s=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(s),this.opened&&!s.defaultPrevented&&this.close(t)}_keydownListener(t){if(this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const s=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(s),this.opened&&!s.defaultPrevented&&this.close(t)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function fr(i){const e=[];for(;i;){if(i.nodeType===Node.DOCUMENT_NODE){e.push(i);break}if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(i),i=i.host;continue}if(i.assignedSlot){i=i.assignedSlot;continue}i=i.parentNode}return e}function _r(i){const e=[];let t;return i.localName==="slot"?t=i.assignedElements():(e.push(i),t=[...i.children]),t.forEach(s=>e.push(..._r(s))),e}function mr(i,e){return e?e.closest(i)||mr(i,e.getRootNode().host):null}function ct(i){return i?new Set(i.split(" ")):new Set}function Te(i){return i?[...i].join(" "):""}function ut(i,e,t){const s=ct(i.getAttribute(e));s.add(t),i.setAttribute(e,Te(s))}function Oi(i,e,t){const s=ct(i.getAttribute(e));if(s.delete(t),s.size===0){i.removeAttribute(e);return}i.setAttribute(e,Te(s))}function gr(i){return i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ze={start:"top",end:"bottom"},De={start:"left",end:"right"},Ht=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),vr=i=>class extends i{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=fr(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(t=>{t.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(t=>{t.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(t,s){if(this.__removeUpdatePositionEventListeners(),s&&(s.__overlay=null,Ht.unobserve(s),t&&(this.__addUpdatePositionEventListeners(),s.__overlay=this,Ht.observe(s))),t){const o=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(o[r],10)})),this.setAttribute("dir",o.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(t){this.contains(t.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const t=this.positionTarget.getBoundingClientRect(),s=this.__shouldAlignStartVertically(t);this.style.justifyContent=s?"flex-start":"flex-end";const o=this.__isRTL,r=this.__shouldAlignStartHorizontally(t,o),n=!o&&r||o&&!r;this.style.alignItems=n?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(t,a,this.noVerticalOverlap,ze,this,s),d=this.__calculatePositionInOneDimension(t,a,this.noHorizontalOverlap,De,this,r);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!s),this.toggleAttribute("top-aligned",s),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(t,s){const o=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const r=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!s&&this.horizontalAlign==="start"||s&&this.horizontalAlign==="end";return this.__shouldAlignStart(t,o,r,this.__margins,n,this.noHorizontalOverlap,De)}__shouldAlignStartVertically(t){const s=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const o=Math.min(window.innerHeight,document.documentElement.clientHeight),r=this.verticalAlign==="top";return this.__shouldAlignStart(t,s,o,this.__margins,r,this.noVerticalOverlap,ze)}__shouldAlignStart(t,s,o,r,n,a,l){const d=o-t[a?l.end:l.start]-r[l.end],c=t[a?l.start:l.end]-r[l.start],u=n?d:c,p=u>(n?c:d)||u>s;return n===p}__adjustBottomProperty(t,s,o){let r;if(t===s.end){if(s.end===ze.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(o>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;r=o-a}this.__oldViewportHeight=n}if(s.end===De.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(o>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;r=o-a}this.__oldViewportWidth=n}}return r}__calculatePositionInOneDimension(t,s,o,r,n,a){const l=a?r.start:r.end,d=a?r.end:r.start,c=parseFloat(n.style[l]||getComputedStyle(n)[l]),u=this.__adjustBottomProperty(l,r,c),h=s[a?r.start:r.end]-t[o===a?r.end:r.start],p=u?`${u}px`:`${c+h*(a?-1:1)}px`;return{[l]:p,[d]:""}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const br=m`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])) {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yr=m`
  :host {
    z-index: 1100;
  }

  [part='overlay'] {
    max-width: 40ch;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;w("vaadin-tooltip-overlay",[br,yr],{moduleId:"vaadin-tooltip-overlay-styles"});class wr extends vr(pr(lt(D(N)))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return T`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(t=>{this.style.setProperty(`--vaadin-tooltip-offset-${t}`,e.getPropertyValue(`--vaadin-tooltip-offset-${t}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),s=e.width/2-t.width/2;if(this.style.left){const o=t.left+s;o>0&&(this.style.left=`${o}px`)}if(this.style.right){const o=parseFloat(this.style.right)+s;o>0&&(this.style.right=`${o}px`)}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),s=e.height/2-t.height/2;this.style.top=`${t.top+s}px`}}}}P(wr);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Bt=0,Ni=0;const V=[];let Qe=!1;function Cr(){Qe=!1;const i=V.length;for(let e=0;e<i;e++){const t=V[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}V.splice(0,i),Ni+=i}const Ar={after(i){return{run(e){return window.setTimeout(e,i)},cancel(e){window.clearTimeout(e)}}},run(i,e){return window.setTimeout(i,e)},cancel(i){window.clearTimeout(i)}},wa={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},Er={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},Mi={run(i){Qe||(Qe=!0,queueMicrotask(()=>Cr())),V.push(i);const e=Bt;return Bt+=1,e},cancel(i){const e=i-Ni;if(e>=0){if(!V[e])throw new Error(`invalid async handle: ${i}`);V[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ae=new Set;class Y{static debounce(e,t,s){return e instanceof Y?e._cancelAsync():e=new Y,e.setConfig(t,s),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,ae.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ae.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function xr(i){ae.add(i)}function Pr(){const i=!!ae.size;return ae.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),i}const Ca=()=>{let i;do i=Pr();while(i)},Tr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ve=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Sr(){function i(){return!0}return Li(i)}function Or(){try{return Nr()?!0:Mr()?ve?!Lr():!Sr():!1}catch{return!1}}function Nr(){return localStorage.getItem("vaadin.developmentmode.force")}function Mr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Lr(){return!!(ve&&Object.keys(ve).map(e=>ve[e]).filter(e=>e.productionMode).length>0)}function Li(i,e){if(typeof i!="function")return;const t=Tr.exec(i.toString());if(t)try{i=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return i(e)}window.Vaadin=window.Vaadin||{};const Vt=function(i,e){if(window.Vaadin.developmentMode)return Li(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Or());function Ir(){}const kr=function(){if(typeof Vt=="function")return Vt(Ir)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){kr()};let Re;const Ut=new Set,G=i=>class extends lt(i){static get version(){return"24.2.1"}static finalize(){super.finalize();const{is:t}=this;t&&!Ut.has(t)&&(window.Vaadin.registrations.push(this),Ut.add(t),window.Vaadin.developmentModeCallback&&(Re=Y.debounce(Re,Er,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),xr(Re)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zr=i=>class extends i{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(t,s){if(!s||t===void 0)return;const{classList:o}=s;if(this.__initialClasses||(this.__initialClasses=new Set(o)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));n.length>0&&o.remove(...n)}const r=typeof t=="string"?t.split(" "):[];r.length>0&&o.add(...r),this.__previousClasses=r}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dr{constructor(e,t){this.slot=e,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const e=this.slot.assignedNodes({flatten:!0});let t=[];const s=[],o=[];e.length&&(t=e.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const a=e.indexOf(r);a===-1?s.push(r):a!==n&&o.push(r)}),(t.length||s.length||o.length)&&this.callback({addedNodes:t,movedNodes:o,removedNodes:s}),this._storedNodes=e}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Rr=0;function Ii(){return Rr++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class de extends EventTarget{static generateId(e,t){return`${t||"default"}-${e.localName}-${Ii()}`}constructor(e,t,s,o={}){super();const{initializer:r,multiple:n,observe:a,useUniqueId:l}=o;this.host=e,this.slotName=t,this.tagName=s,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(e,t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(e.length===0){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=e,e.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:e,slotName:t,tagName:s}=this;let o=this.defaultNode;return!o&&s&&(o=document.createElement(s),o instanceof Element&&(t!==""&&o.setAttribute("slot",t),this.node=o,this.defaultNode=o)),o&&e.appendChild(o),o}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&e==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:t}=this;t&&t(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,t=e===""?"slot:not([name])":`slot[name=${e}]`,s=this.host.shadowRoot.querySelector(t);this.__slotObserver=new Dr(s,({addedNodes:o,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],a=o.filter(l=>!gr(l)&&!n.includes(l));r.length&&(this.nodes=n.filter(l=>!r.includes(l)),r.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const U=500;let ki=U,zi=U,Di=U;const J=new Set;let Z=!1,X=null,Q=null;class Fr{constructor(e){this.host=e}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const e=this.host;return e.focusDelay!=null&&e.focusDelay>0?e.focusDelay:ki}get hoverDelay(){const e=this.host;return e.hoverDelay!=null&&e.hoverDelay>0?e.hoverDelay:zi}get hideDelay(){const e=this.host;return e.hideDelay!=null&&e.hideDelay>0?e.hideDelay:Di}get isClosing(){return J.has(this.host)}open(e={immediate:!1}){const{immediate:t,hover:s,focus:o}=e,r=s&&this.hoverDelay>0,n=o&&this.focusDelay>0;!t&&(r||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(e){!e&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),Z&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(e){this.host[this.openedProp]=e}__flushClosingTooltips(){J.forEach(e=>{e._stateController.close(!0),J.delete(e)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),Z=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(e){this._isOpened()||(Z?this.__showTooltip():this.__scheduleWarmUp(e))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){Q&&(clearTimeout(Q),Q=null)}__abortWarmUp(){X&&(clearTimeout(X),X=null)}__scheduleClose(){this._isOpened()&&(J.add(this.host),this.__closeTimeout=setTimeout(()=>{J.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){Q=setTimeout(()=>{Q=null,Z=!1},this.hideDelay)}__scheduleWarmUp(e){const t=e?this.focusDelay:this.hoverDelay;X=setTimeout(()=>{X=null,Z=!0,this.__showTooltip()},t)}}class Hr extends zr(no(G(le(N)))){static get is(){return"vaadin-tooltip"}static get template(){return T`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(e,t)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){ki=e!=null&&e>=0?e:U}static setDefaultHideDelay(e){Di=e!=null&&e>=0?e:U}static setDefaultHoverDelay(e){zi=e!=null&&e>=0?e:U}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Ii()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(t=>this.__onTargetVisibilityChange(t.isIntersecting))},{threshold:0}),this._stateController=new Fr(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new de(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeAriaTarget(e,t){const s=r=>r&&r.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(s):e)?e:t}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computeOpened(e,t,s,o){return o&&(e?t:s)}__computePosition(e,t){return e||t}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__effectiveAriaTargetChanged(e,t){t&&[t].flat().forEach(s=>{Oi(s,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(s=>{ut(s,"aria-describedby",this._uniqueId)})}__autoOpenedChanged(e,t){e?document.addEventListener("keydown",this.__onKeyDown,!0):t&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(e){e&&(this.__setTargetByIdDebouncer=Y.debounce(this.__setTargetByIdDebouncer,Mi,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const t=this.getRootNode().getElementById(e);t?this.target=t:console.warn(`No element with id="${e}" found to show tooltip.`)}__targetChanged(e,t){t&&(t.removeEventListener("mouseenter",this.__onMouseEnter),t.removeEventListener("mouseleave",this.__onMouseLeave),t.removeEventListener("focusin",this.__onFocusin),t.removeEventListener("focusout",this.__onFocusout),t.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(t)),e&&(e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)}))}__onFocusin(e){this.manual||Pi()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const t=this.__isTargetHidden;if(this.__isTargetHidden=!e,t&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,t){this._overlayElement&&(e||t)&&this._overlayElement.requestContentUpdate()}__generatorChanged(e,t,s){e&&((t!==this.__oldTextGenerator||s!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=t,this.__oldContext=s)}__updateSrLabelText(e,t){e&&(e.textContent=t)}}P(Hr);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let qt=0;function Ri(i,e=[],t={}){const s=t.moduleId||`custom-style-module-${qt}`;qt+=1;const o=document.createElement("dom-module");i&&o.setAttribute("theme-for",i);const r=!!(e.length&&t.moduleId),n=[].concat(t.include||[]);n.length===0?o.__allStyles=e:r||(o.__partialStyles=e),o.innerHTML=`
    <template>
      ${n.map(a=>`<style include=${a}></style>`)}
      ${r?`<style>${e.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,o.register(s)}function Br(i){return nt(i.querySelector("template")).map(e=>ao(e.textContent))}function Vr(){const e=W.prototype.modules;return Object.keys(e).map(t=>{const s=e[t],o=s.getAttribute("theme-for");return s.__allStyles||(s.__allStyles=Br(s).concat(s.__partialStyles||[])),{themeFor:o,moduleId:t,styles:s.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:Vr,registerStyles:Ri};ue&&ue.length>0&&(ue.forEach(i=>{Ri(i.themeFor,i.styles,{moduleId:i.moduleId,include:i.include})}),ue.length=0);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur=m`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Qt("sizing-props",Ur);w("vaadin-input-container",m`
    :host {
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qr extends D(lt(N)){static get is(){return"vaadin-input-container"}static get template(){return T`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
            var(--vaadin-input-field-top-start-radius, var(--__border-radius))
            var(--vaadin-input-field-top-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
          --_border-radius: var(--vaadin-input-field-border-radius, 0px);
          --_input-border-width: var(--vaadin-input-field-border-width, 0);
          --_input-border-color: var(--vaadin-input-field-border-color, transparent);
          box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
        }

        :host([dir='rtl']) {
          border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
            var(--vaadin-input-field-top-end-radius, var(--_border-radius))
            var(--vaadin-input-field-top-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}}P(qr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=m`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;Qt("font-icons",jr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fi=m`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;w("",Fi,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=m`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hi=m`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a 
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;w("",Hi,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yr=m`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,ht=[Hi,Fi,Wr,Yr];w("",ht,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */w("vaadin-text-field",ht,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bi extends de{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,this.ariaTarget!==void 0&&(e.ariaTarget=this.ariaTarget),this.context!==void 0&&(e.context=this.context),this.manual!==void 0&&(e.manual=this.manual),this.opened!==void 0&&(e.opened=this.opened),this.position!==void 0&&(e._position=this.position),this.shouldShow!==void 0&&(e.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(e){this.ariaTarget=e;const t=this.node;t&&(t.ariaTarget=e)}setContext(e){this.context=e;const t=this.node;t&&(t.context=e)}setManual(e){this.manual=e;const t=this.node;t&&(t.manual=e)}setOpened(e){this.opened=e;const t=this.node;t&&(t.opened=e)}setPosition(e){this.position=e;const t=this.node;t&&(t._position=e)}setShouldShow(e){this.shouldShow=e;const t=this.node;t&&(t.shouldShow=e)}setTarget(e){this.target=e;const t=this.node;t&&(t.target=e)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr=m`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kr=m`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $r=m`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=[Kr,$r,Gr];/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zr extends de{constructor(e,t){super(e,"input","input",{initializer:(s,o)=>{o.value&&(s.value=o.value),o.type&&s.setAttribute("type",o.type),s.id=this.defaultId,typeof t=="function"&&t(s)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vi=v(i=>class extends i{get _keyboardActive(){return Pi()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ui=v(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qi=i=>class extends Ui(i){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,s){super._disabledChanged(t,s),t?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):s&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&t!==-1&&(this._lastTabIndex=t,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xr=v(i=>class extends Vi(qi(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,s){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):s&&this._removeFocusListeners(s)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_shouldRemoveFocus(t){return t.target===this.focusElement}_disabledChanged(t,s){super._disabledChanged(t,s),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){t!==void 0&&this.focusElement&&(this.focusElement.tabIndex=t,t!==-1&&(this.tabindex=void 0)),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pt=v(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t);break}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fe=new WeakMap;function Qr(i){return Fe.has(i)||Fe.set(i,new Set),Fe.get(i)}function en(i,e){const t=document.createElement("style");t.textContent=i,e===document?document.head.appendChild(t):e.insertBefore(t,e.firstChild)}const tn=v(i=>class extends i{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),s=Qr(t);this.slotStyles.forEach(o=>{s.has(o)||(en(o,t),s.add(o))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ji=v(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=t)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this._inputElementValue=t??"")}_inputElementChanged(t,s){t?this._addInputListeners(t):s&&this._removeInputListeners(s)}_hasInputValueChanged(t,s){(t||s)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const s=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=s.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,s){this._toggleHasValue(this._hasValue),!(t===""&&s===void 0)&&(this.__userInput||this._forwardInputValue(t))}_setHasInputValue(t){const s=t.composedPath()[0];this._hasInputValue=s.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const on=i=>class extends ji(pt(i)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",t=>this._onClearButtonMouseDown(t)),this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(t){t.preventDefault(),Zs||this.inputElement.focus()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&(t.stopPropagation(),this._onClearAction())}_onClearAction(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const He=new Map;function ft(i){return He.has(i)||He.set(i,new WeakMap),He.get(i)}function Wi(i,e){i&&i.removeAttribute(e)}function Yi(i,e){if(!i||!e)return;const t=ft(e);if(t.has(i))return;const s=ct(i.getAttribute(e));t.set(i,new Set(s))}function sn(i,e){if(!i||!e)return;const t=ft(e),s=t.get(i);!s||s.size===0?i.removeAttribute(e):ut(i,e,Te(s)),t.delete(i)}function Be(i,e,t={newId:null,oldId:null,fromUser:!1}){if(!i||!e)return;const{newId:s,oldId:o,fromUser:r}=t,n=ft(e),a=n.get(i);if(!r&&a){o&&a.delete(o),s&&a.add(s);return}r&&(a?s||n.delete(i):Yi(i,e),Wi(i,e)),Oi(i,e,o);const l=s||Te(a);l&&ut(i,e,l)}function rn(i,e){Yi(i,e),Wi(i,e)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nn{constructor(e){this.host=e,this.__required=!1}setTarget(e){this.__target=e,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(e){this.__setAriaRequiredAttribute(e),this.__required=e}setAriaLabel(e){this.__setAriaLabelToAttribute(e),this.__label=e}setLabelId(e,t=!1){const s=t?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(e,s,t),t?this.__labelIdFromUser=e:this.__labelId=e}setErrorId(e){this.__setErrorIdToAriaAttribute(e,this.__errorId),this.__errorId=e}setHelperId(e){this.__setHelperIdToAriaAttribute(e,this.__helperId),this.__helperId=e}__setAriaLabelToAttribute(e){this.__target&&(e?(rn(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",e)):this.__label&&(sn(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(e,t,s){Be(this.__target,"aria-labelledby",{newId:e,oldId:t,fromUser:s})}__setErrorIdToAriaAttribute(e,t){Be(this.__target,"aria-describedby",{newId:e,oldId:t,fromUser:!1})}__setHelperIdToAriaAttribute(e,t){Be(this.__target,"aria-describedby",{newId:e,oldId:t,fromUser:!1})}__setAriaRequiredAttribute(e){this.__target&&(["input","textarea"].includes(this.__target.localName)||(e?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _t extends de{constructor(e,t,s,o={}){super(e,t,s,{...o,useUniqueId:!0})}initCustomNode(e){this.__updateNodeId(e),this.__notifyChange(e)}teardownNode(e){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const e=super.attachDefaultNode();return e&&this.__updateNodeId(e),e}restoreDefaultNode(){}updateDefaultNode(e){this.__notifyChange(e)}observeNode(e){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(t=>{t.forEach(s=>{const o=s.target,r=o===this.node;s.type==="attributes"?r&&this.__updateNodeId(o):(r||o.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(e){return e?e.nodeType===Node.ELEMENT_NODE&&(customElements.get(e.localName)||e.children.length>0)||e.textContent&&e.textContent.trim()!=="":!1}__notifyChange(e){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(e),node:e}}))}__updateNodeId(e){const t=!this.nodes||e===this.nodes[0];e.nodeType===Node.ELEMENT_NODE&&(!this.multiple||t)&&!e.id&&(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class an extends _t{constructor(e){super(e,"error-message","div")}setErrorMessage(e){this.errorMessage=e,this.updateDefaultNode(this.node)}setInvalid(e){this.invalid=e,this.updateDefaultNode(this.node)}initAddedNode(e){e!==this.defaultNode&&this.initCustomNode(e)}initNode(e){this.updateDefaultNode(e)}initCustomNode(e){e.textContent&&!this.errorMessage&&(this.errorMessage=e.textContent.trim()),super.initCustomNode(e)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(e){const{errorMessage:t,invalid:s}=this,o=!!(s&&t&&t.trim()!=="");e&&(e.textContent=o?t:"",e.hidden=!o,o?e.setAttribute("role","alert"):e.removeAttribute("role")),super.updateDefaultNode(e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ln extends _t{constructor(e){super(e,"helper",null)}setHelperText(e){this.helperText=e,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:e}=this;if(e&&e.trim()!==""){this.tagName="div";const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(e){e&&(e.textContent=this.helperText),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dn extends _t{constructor(e){super(e,"label","label")}setLabel(e){this.label=e,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:e}=this;if(e&&e.trim()!==""){const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(e){e&&(e.textContent=this.label),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cn=v(i=>class extends le(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new dn(this),this._labelController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-label",t.detail.hasContent)})}get _labelId(){const t=this._labelNode;return t&&t.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gi=v(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const un=i=>class extends Gi(cn(le(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new nn(this),this._helperController=new ln(this),this._errorController=new an(this),this._errorController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-error-message",t.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",t=>{const{hasContent:s,node:o}=t.detail;this.__labelChanged(s,o)}),this._helperController.addEventListener("slot-content-changed",t=>{const{hasContent:s,node:o}=t.detail;this.toggleAttribute("has-helper",s),this.__helperChanged(s,o)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,s){t?this._fieldAriaController.setHelperId(s.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(t){this._fieldAriaController.setAriaLabel(t)}_accessibleNameRefChanged(t){this._fieldAriaController.setLabelId(t,!0)}__labelChanged(t,s){t?this._fieldAriaController.setLabelId(s.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{if(t){const s=this._errorNode;this._fieldAriaController.setErrorId(s&&s.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hn=v(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((s,o)=>{this._delegateAttribute(s,t[o])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((s,o)=>{this._delegateProperty(s,t[o])})}_delegateAttribute(t,s){this.stateTarget&&(t==="invalid"&&this._delegateAttribute("aria-invalid",s?"true":!1),typeof s=="boolean"?this.stateTarget.toggleAttribute(t,s):s?this.stateTarget.setAttribute(t,s):this.stateTarget.removeAttribute(t))}_delegateProperty(t,s){this.stateTarget&&(this.stateTarget[t]=s)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pn=v(i=>class extends hn(Gi(ji(i))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(s=>this.__isValidConstraint(s))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...s){if(!t)return;const o=this._hasValidConstraints(s),r=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this.validate():r&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return!!t||t===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fn=i=>class extends tn(Xr(pn(un(on(pt(i)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=Y.debounce(this._preventInputDebouncer,Ar.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||t.key.length!==1||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const s=t.clipboardData.getData("text");this.__allowedTextRegExp.test(s)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const s=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(s)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${t}*$`,"u")}catch(s){console.error(s)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _n=i=>class extends fn(i){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_valueChanged(t,s){super._valueChanged(t,s),s!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class mn{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",s=>{this.__initLabel(s.detail.node)}),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gn=i=>class extends _n(i){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Zr(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new mn(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */w("vaadin-text-field",Jr,{moduleId:"vaadin-text-field-styles"});class Ki extends gn(D(G(N))){static get is(){return"vaadin-text-field"}static get template(){return T`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new Bi(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}P(Ki);const $i=m`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;w("vaadin-button",$i,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vn=m`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,bn=i=>i`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yn=!1,wn=i=>i,mt=typeof document.head.style.touchAction=="string",Ae="__polymerGestures",Ve="__polymerGesturesHandled",et="__polymerGesturesTouchAction",jt=25,Wt=5,Cn=2,An=["mousedown","mousemove","mouseup","click"],En=[0,1,4,2],xn=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function gt(i){return An.indexOf(i)>-1}let Ji=!1;(function(){try{const i=Object.defineProperty({},"passive",{get(){Ji=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function Zi(i){if(!(gt(i)||i==="touchend")&&mt&&Ji&&yn)return{passive:!0}}const Pn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Tn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function z(i){const e=i.type;if(!gt(e))return!1;if(e==="mousemove"){let s=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!xn&&(s=En[i.which]||0),!!(s&1)}return(i.button===void 0?0:i.button)===0}function Sn(i){if(i.type==="click"){if(i.detail===0)return!0;const e=M(i);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const t=e.getBoundingClientRect(),s=i.pageX,o=i.pageY;return!(s>=t.left&&s<=t.right&&o>=t.top&&o<=t.bottom)}return!1}const O={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function On(i){let e="auto";const t=Qi(i);for(let s=0,o;s<t.length;s++)if(o=t[s],o[et]){e=o[et];break}return e}function Xi(i,e,t){i.movefn=e,i.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function q(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const Qi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],ce={},I=[];function Nn(i,e){let t=document.elementFromPoint(i,e),s=t;for(;s&&s.shadowRoot&&!window.ShadyDOM;){const o=s;if(s=s.shadowRoot.elementFromPoint(i,e),o===s)break;s&&(t=s)}return t}function M(i){const e=Qi(i);return e.length>0?e[0]:i.target}function eo(i){const e=i.type,s=i.currentTarget[Ae];if(!s)return;const o=s[e];if(!o)return;if(!i[Ve]&&(i[Ve]={},e.startsWith("touch"))){const n=i.changedTouches[0];if(e==="touchstart"&&i.touches.length===1&&(O.touch.id=n.identifier),O.touch.id!==n.identifier)return;mt||(e==="touchstart"||e==="touchmove")&&Mn(i)}const r=i[Ve];if(!r.skip){for(let n=0,a;n<I.length;n++)a=I[n],o[a.name]&&!r[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<I.length;n++)a=I[n],o[a.name]&&!r[a.name]&&(r[a.name]=!0,a[e](i))}}function Mn(i){const e=i.changedTouches[0],t=i.type;if(t==="touchstart")O.touch.x=e.clientX,O.touch.y=e.clientY,O.touch.scrollDecided=!1;else if(t==="touchmove"){if(O.touch.scrollDecided)return;O.touch.scrollDecided=!0;const s=On(i);let o=!1;const r=Math.abs(O.touch.x-e.clientX),n=Math.abs(O.touch.y-e.clientY);i.cancelable&&(s==="none"?o=!0:s==="pan-x"?o=n>r:s==="pan-y"&&(o=r>n)),o?i.preventDefault():Ee("track")}}function Yt(i,e,t){return ce[e]?(Ln(i,e,t),!0):!1}function Va(i,e,t){return ce[e]?(In(i,e,t),!0):!1}function Ln(i,e,t){const s=ce[e],o=s.deps,r=s.name;let n=i[Ae];n||(i[Ae]=n={});for(let a=0,l,d;a<o.length;a++)l=o[a],!(Pn&&gt(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&i.addEventListener(l,eo,Zi(l)),d[r]=(d[r]||0)+1,d._count=(d._count||0)+1);i.addEventListener(e,t),s.touchAction&&zn(i,s.touchAction)}function In(i,e,t){const s=ce[e],o=s.deps,r=s.name,n=i[Ae];if(n)for(let a=0,l,d;a<o.length;a++)l=o[a],d=n[l],d&&d[r]&&(d[r]=(d[r]||1)-1,d._count=(d._count||1)-1,d._count===0&&i.removeEventListener(l,eo,Zi(l)));i.removeEventListener(e,t)}function vt(i){I.push(i),i.emits.forEach(e=>{ce[e]=i})}function kn(i){for(let e=0,t;e<I.length;e++){t=I[e];for(let s=0,o;s<t.emits.length;s++)if(o=t.emits[s],o===i)return t}return null}function zn(i,e){mt&&i instanceof HTMLElement&&Mi.run(()=>{i.style.touchAction=e}),i[et]=e}function bt(i,e,t){const s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=t,wn(i).dispatchEvent(s),s.defaultPrevented){const o=t.preventer||t.sourceEvent;o&&o.preventDefault&&o.preventDefault()}}function Ee(i){const e=kn(i);e.info&&(e.info.prevent=!0)}vt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){q(this.info)},mousedown(i){if(!z(i))return;const e=M(i),t=this,s=r=>{z(r)||(ee("up",e,r),q(t.info))},o=r=>{z(r)&&ee("up",e,r),q(t.info)};Xi(this.info,s,o),ee("down",e,i)},touchstart(i){ee("down",M(i),i.changedTouches[0],i)},touchend(i){ee("up",M(i),i.changedTouches[0],i)}});function ee(i,e,t,s){e&&bt(e,i,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s,prevent(o){return Ee(o)}})}vt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(i){this.moves.length>Cn&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,q(this.info)},mousedown(i){if(!z(i))return;const e=M(i),t=this,s=r=>{const n=r.clientX,a=r.clientY;Gt(t.info,n,a)&&(t.info.state=t.info.started?r.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&Ee("tap"),t.info.addMove({x:n,y:a}),z(r)||(t.info.state="end",q(t.info)),e&&Ue(t.info,e,r),t.info.started=!0)},o=r=>{t.info.started&&s(r),q(t.info)};Xi(this.info,s,o),this.info.x=i.clientX,this.info.y=i.clientY},touchstart(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(i){const e=M(i),t=i.changedTouches[0],s=t.clientX,o=t.clientY;Gt(this.info,s,o)&&(this.info.state==="start"&&Ee("tap"),this.info.addMove({x:s,y:o}),Ue(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend(i){const e=M(i),t=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),Ue(this.info,e,t))}});function Gt(i,e,t){if(i.prevent)return!1;if(i.started)return!0;const s=Math.abs(i.x-e),o=Math.abs(i.y-t);return s>=Wt||o>=Wt}function Ue(i,e,t){if(!e)return;const s=i.moves[i.moves.length-2],o=i.moves[i.moves.length-1],r=o.x-i.x,n=o.y-i.y;let a,l=0;s&&(a=o.x-s.x,l=o.y-s.y),bt(e,"track",{state:i.state,x:t.clientX,y:t.clientY,dx:r,dy:n,ddx:a,ddy:l,sourceEvent:t,hover(){return Nn(t.clientX,t.clientY)}})}vt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(i){z(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click(i){z(i)&&Kt(this.info,i)},touchstart(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(i){Kt(this.info,i.changedTouches[0],i)}});function Kt(i,e,t){const s=Math.abs(e.clientX-i.x),o=Math.abs(e.clientY-i.y),r=M(t||e);!r||Tn[r.localName]&&r.hasAttribute("disabled")||(isNaN(s)||isNaN(o)||s<=jt&&o<=jt||Sn(e))&&(i.prevent||bt(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dn=i=>class extends Ui(pt(i)){get _activeKeys(){return[" "]}ready(){super.ready(),Yt(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),Yt(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",s=>{this._activeKeys.includes(s.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rn=i=>class extends Dn(qi(Vi(i))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),!(t.altKey||t.shiftKey||t.ctrlKey||t.metaKey)&&this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */w("vaadin-button",vn,{moduleId:"vaadin-button-styles"});class to extends Rn(G(D(le(N)))){static get is(){return"vaadin-button"}static get template(){return bn(T)}ready(){super.ready(),this._tooltipController=new Bi(this),this.addController(this._tooltipController)}}P(to);function Fn({currentTarget:i}){i.disabled=i.hasAttribute("disableOnClick")}window.Vaadin.Flow.button={initDisableOnClick:i=>{i.__hasDisableOnClickListener||(i.addEventListener("click",Fn),i.__hasDisableOnClickListener=!0)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hn=m`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;w("vaadin-password-field-button",[$i,Hn],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bn=m`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;w("vaadin-password-field",[ht,Bn],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vn extends to{static get is(){return"vaadin-password-field-button"}static get template(){return T`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `}}P(Vn);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Un=T`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let me;class qn extends Ki{static get is(){return"vaadin-password-field"}static get template(){if(!me){me=super.template.cloneNode(!0);const e=Un.content.querySelector('[part="reveal-button"]');me.content.querySelector('[part="input-field"]').appendChild(e)}return me}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonMouseDown=this._onRevealButtonMouseDown.bind(this),this.__lastChange=""}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new de(this,"reveal","vaadin-password-field-button",{initializer:e=>{e.disabled=this.disabled,e.addEventListener("click",this.__boundRevealButtonClick),e.addEventListener("mousedown",this.__boundRevealButtonMouseDown)}}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_onChange(e){super._onChange(e),this.__lastChange=this.inputElement.value}_shouldSetFocus(e){return e.target===this.inputElement||e.target===this._revealNode}_shouldRemoveFocus(e){return!(e.relatedTarget===this._revealNode||e.relatedTarget===this.inputElement&&e.target===this._revealNode)}_setFocused(e){if(super._setFocused(e),!e)this._setPasswordVisible(!1),this.__lastChange!==this.inputElement.value&&(this.__lastChange=this.inputElement.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})));else{const t=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!t)}}__updateAriaLabel(e){e.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",e.reveal)}__i18nChanged(e){this.__updateAriaLabel(e.base)}_revealButtonHiddenChanged(e){this._toggleRevealHidden(e)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_toggleRevealHidden(e){this._revealNode&&(e?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(e){this._revealNode&&this._revealNode.setAttribute("aria-pressed",e?"true":"false")}_passwordVisibleChanged(e){this._setType(e?"text":"password"),this._updateToggleState(e)}_disabledChanged(e,t){super._disabledChanged(e,t),this._revealNode&&(this._revealNode.disabled=e)}}P(qn);const jn=m`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  ::slotted([slot='submit']) {
    margin-top: var(--lumo-space-l);
    margin-bottom: var(--lumo-space-s);
  }

  ::slotted([slot='forgot-password']) {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;w("vaadin-login-form-wrapper",[lo,co,jn],{moduleId:"lumo-login-form-wrapper"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wn=m`
  :host {
    overflow: hidden;
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='form'] {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  [part='form-title'] {
    margin: 0;
  }

  [part='error-message'] {
    position: relative;
  }
`;/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */w("vaadin-login-form-wrapper",Wn,{moduleId:"vaadin-login-form-wrapper-styles"});class Yn extends D(N){static get template(){return T`
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <slot name="custom-form-area"></slot>

        <slot name="submit"></slot>

        <slot name="forgot-password"></slot>

        <div part="footer">
          <slot name="footer"></slot>
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}static get properties(){return{error:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object}}}}P(Yn);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gn=i=>class extends i{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again.",username:"Username is required",password:"Password is required"}}}},_preventAutoEnable:{type:Boolean,value:!1}}}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kn=i=>class extends Gn(i){static get observers(){return["_errorChanged(error)"]}get _customFields(){return[...this.$.vaadinLoginFormWrapper.children].filter(t=>t.getAttribute("slot")==="custom-form-area"&&t.hasAttribute("name"))}async connectedCallback(){super.connectedCallback(),this.noAutofocus||(await new Promise(requestAnimationFrame),this.$.vaadinLoginUsername.focus())}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){const t=this.$.vaadinLoginUsername,s=this.$.vaadinLoginPassword;if(this.disabled||!(t.validate()&&s.validate()))return;this.error=!1,this.disabled=!0;const o={username:t.value,password:s.value},r=this._customFields;r.length&&(o.custom={},r.forEach(l=>{o.custom[l.name]=l.value}));const n={bubbles:!0,cancelable:!0,detail:o},a=this.dispatchEvent(new CustomEvent("login",n));if(this.action&&a){const l=document.querySelector("meta[name=_csrf_parameter]"),d=document.querySelector("meta[name=_csrf]");l&&d&&(this.$.csrf.name=l.content,this.$.csrf.value=d.content),this.querySelector("form").submit()}}_onFormData(t){const{formData:s}=t;this._customFields.length&&this._customFields.forEach(o=>{s.append(o.name,o.value)})}_handleInputKeydown(t){if(t.key==="Enter"){const{currentTarget:s}=t,o=s.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;s.validate()&&(o.checkValidity()?this.submit():o.focus())}}_handleInputKeyup(t){const s=t.currentTarget;t.key==="Tab"&&s instanceof HTMLInputElement&&s.select()}_onForgotPasswordClick(){this.dispatchEvent(new CustomEvent("forgot-password"))}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $n extends Kn(G(D(N))){static get template(){return T`
      <style>
        vaadin-login-form-wrapper > form > * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper id="vaadinLoginFormWrapper" theme$="[[_theme]]" error="[[error]]" i18n="[[i18n]]">
        <form method="POST" action$="[[action]]" on-formdata="_onFormData" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            error-message="[[i18n.errorMessage.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            error-message="[[i18n.errorMessage.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>
        </form>

        <vaadin-button slot="submit" theme="primary contained submit" on-click="submit" disabled$="[[disabled]]">
          [[i18n.form.submit]]
        </vaadin-button>

        <vaadin-button
          slot="forgot-password"
          theme="tertiary small"
          on-click="_onForgotPasswordClick"
          hidden$="[[noForgotPassword]]"
        >
          [[i18n.form.forgotPassword]]
        </vaadin-button>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}_attachDom(e){this.appendChild(e)}}P($n);const Jn=m`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;w("vaadin-vertical-layout",Jn,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zn extends G(D(N)){static get template(){return T`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}P(Zn);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn={HTML:1,SVG:2},Qn=(i,e)=>e===void 0?(i==null?void 0:i._$litType$)!==void 0:(i==null?void 0:i._$litType$)===e,Ya=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tt extends uo{constructor(e){if(super(e),this.et=j,e.type!==ho.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||e==null)return this.ft=void 0,this.et=e;if(e===po)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}tt.directiveName="unsafeHTML",tt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class it extends tt{}it.directiveName="unsafeSVG",it.resultType=2;const io=fo(it);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function $t(i){let e=j;if(i){const t=i.cloneNode(!0);t.removeAttribute("id"),e=ei`${io(t.outerHTML)}`}return e}function ea(i){return Qn(i,Xn.SVG)||i===j}function ta(i){let e=i==null||i===""?j:i;return ea(e)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),e=j),e}function Ga(i,e){const t=ta(i);_o(t,e)}function Ka(i){return ei`${io(i)}`}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L={},Jt=new Set;function oo(i,e){return(i||"").replace(`${e}:`,"")}function Zt(i){return i?i.split(":")[0]||"vaadin":void 0}function Xt(i,e){i._icons=[...i.querySelectorAll("[id]")].reduce((t,s)=>{const o=oo(s.id,e);return t[o]=s,t},{})}class so extends G(N){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static get attachedIcons(){return Jt}static getIconset(e){return L[e]}static getIconSvg(e,t){const s=t||Zt(e),o=this.getIconset(s);if(!e||!o)return{svg:$t(null)};const r=oo(e,s),n=o._icons[r];return{preserveAspectRatio:n?n.getAttribute("preserveAspectRatio"):null,svg:$t(n),size:o.size,viewBox:n?n.getAttribute("viewBox"):null}}static register(e,t,s){if(!L[e]){const o=document.createElement("vaadin-iconset");o.appendChild(s.content.cloneNode(!0)),L[e]=o,Xt(o,e),o.size=t,o.name=e,o.__nameChanged(e)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:e}=this;L[e]=this,Xt(this,e),this.__updateIcons(e)}__updateIcons(e){Jt.forEach(t=>{e===Zt(t.icon)&&t._applyIcon()})}__nameChanged(e,t){t&&(L[e]=L[t],delete L[t]),e&&this.__updateIcons(e)}}P(so);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ro=document.createElement("template");ro.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;so.register("lumo",1e3,ro);const ia=i=>{const e=[];return i==="a19ffd69f83901415bd1b3396e063331f9d123cc319efbdc6c0e5afee23e26ad"&&e.push(g(()=>import("./chunk-4af346fe3f2933686b75c108b3963fd545a289c3c088b0a7249dff4d4b284509-efe7e6eb.js"),["./chunk-4af346fe3f2933686b75c108b3963fd545a289c3c088b0a7249dff4d4b284509-efe7e6eb.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-details-7754ada4.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="661f25044767ccc721f4fa6e5cab1490fae5e0d2944558aa9e7e6df5df6aa960"&&e.push(g(()=>import("./chunk-e9baa51fc2daa616f41383b2641d88836975ba18ed13d7b6e14c9e10ad79bb60-663ff9f1.js"),["./chunk-e9baa51fc2daa616f41383b2641d88836975ba18ed13d7b6e14c9e10ad79bb60-663ff9f1.js","./vaadin-notification-7a1c2444.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./templates-b6af8b49.js"],import.meta.url)),i==="7035fd0528c1bceb2640fc8dafc89e9a214c4f4116bac7a867c9e81fdaa58874"&&e.push(g(()=>import("./chunk-cba4df2500f683e66dfc34c248f1ecc93e3b96c6a30a688f655f9e50370ebb87-02b5d02d.js"),["./chunk-cba4df2500f683e66dfc34c248f1ecc93e3b96c6a30a688f655f9e50370ebb87-02b5d02d.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="3c3eaa00332e7a7a6c4e78b9e31ec5928f0cecdecc3b8db3202e72fe96a58a2c"&&e.push(g(()=>import("./chunk-a867dc486e7e95b166d0332068dad7d6d955a1086063c1fcc31199b0c21a33a5-fbceaad3.js"),["./chunk-a867dc486e7e95b166d0332068dad7d6d955a1086063c1fcc31199b0c21a33a5-fbceaad3.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="b80176e96d31219b3e8f1c8e5d1c07d981db67f271dfdfd48a045aee5ff5fe75"&&e.push(g(()=>import("./chunk-4ecff20c18f5473f604a8522ccd3aecc36b0c83b93b1e8901e8908293826719c-504e59fb.js"),["./chunk-4ecff20c18f5473f604a8522ccd3aecc36b0c83b93b1e8901e8908293826719c-504e59fb.js","./vaadin-icon-3eb51d31.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-email-field-be9a5af6.js","./vaadin-drawer-toggle-914fce99.js","./templates-b6af8b49.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="fd0e7161c7ab1150b2ff9db6efddf39f7b91cc5b9012c6717a61d574036d47ec"&&e.push(g(()=>import("./chunk-c975f1d4518a279f7e1c5749855da7d943f42b9acd4506191600d49d29aed609-311d9601.js"),["./chunk-c975f1d4518a279f7e1c5749855da7d943f42b9acd4506191600d49d29aed609-311d9601.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-details-7754ada4.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="9e9cf993b4ca7f571bea6fd80b6ebdba412d4bb26f041e43de6bb6c34557cae3"&&e.push(g(()=>import("./chunk-cba4df2500f683e66dfc34c248f1ecc93e3b96c6a30a688f655f9e50370ebb87-02b5d02d.js"),["./chunk-cba4df2500f683e66dfc34c248f1ecc93e3b96c6a30a688f655f9e50370ebb87-02b5d02d.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="50a25f14f175e8663a14145f214037cdf9b556beb0070bfc80457a3e7b3b0779"&&e.push(g(()=>import("./chunk-d4b70f2f6c25cc85f3d806f939ebfb1fa9e52e2834dde791e40701424669b80b-93dc6260.js"),["./chunk-d4b70f2f6c25cc85f3d806f939ebfb1fa9e52e2834dde791e40701424669b80b-93dc6260.js","./vaadin-icon-3eb51d31.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./vaadin-email-field-be9a5af6.js","./vaadin-notification-7a1c2444.js","./templates-b6af8b49.js"],import.meta.url)),i==="23a3438f71518c4ccd0eab104cdd4836122891cadea9cb12a58729ba61a3e257"&&e.push(g(()=>import("./chunk-a867dc486e7e95b166d0332068dad7d6d955a1086063c1fcc31199b0c21a33a5-fbceaad3.js"),["./chunk-a867dc486e7e95b166d0332068dad7d6d955a1086063c1fcc31199b0c21a33a5-fbceaad3.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="ba2f75a8f6e6f7128c297e640bcf5d04cae16e05e92159d86a08eb384007bfb6"&&e.push(g(()=>import("./chunk-4af346fe3f2933686b75c108b3963fd545a289c3c088b0a7249dff4d4b284509-efe7e6eb.js"),["./chunk-4af346fe3f2933686b75c108b3963fd545a289c3c088b0a7249dff4d4b284509-efe7e6eb.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-details-7754ada4.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="762e66a0060897ab407498d1c81dea01b277c89cd6343a3e3f8c2fa37a7e223b"&&e.push(g(()=>import("./chunk-fd02f8c63c9de88459f1b0c74210fe23c328c6de649026194779c94bcfd61f37-6e21926e.js"),["./chunk-fd02f8c63c9de88459f1b0c74210fe23c328c6de649026194779c94bcfd61f37-6e21926e.js","./vaadin-email-field-be9a5af6.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./vaadin-notification-7a1c2444.js","./templates-b6af8b49.js"],import.meta.url)),i==="2760b479c19f15fb63c2d50aa5c1740c0676225eda2a99539641394f49ab5310"&&e.push(g(()=>import("./chunk-f803df643c07aa37eee57a440b68a91abb3cd3408a72bcc573024c04162131e4-0e5409a6.js"),["./chunk-f803df643c07aa37eee57a440b68a91abb3cd3408a72bcc573024c04162131e4-0e5409a6.js","./indexhtml-0e56a356.js","./index-3b391f13.css"],import.meta.url)),i==="d92493688d92860f6b0560d6f4ae160bc282f7a296faa436a439ad9e682af394"&&e.push(g(()=>import("./chunk-a867dc486e7e95b166d0332068dad7d6d955a1086063c1fcc31199b0c21a33a5-fbceaad3.js"),["./chunk-a867dc486e7e95b166d0332068dad7d6d955a1086063c1fcc31199b0c21a33a5-fbceaad3.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="3c6151e84cebde5687adb04961de3b9d23c16fe7779cd55d08e5b34bcc321881"&&e.push(g(()=>import("./chunk-029469820530553e29c73e68b59842ae1f1dbdc99deb87cedb864c65f687f1f4-1d4e9bbc.js"),["./chunk-029469820530553e29c73e68b59842ae1f1dbdc99deb87cedb864c65f687f1f4-1d4e9bbc.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="89d3e567d0bb63814ebb621949ec640f809f025a2cd6d83512b5ffb55d376a0c"&&e.push(g(()=>import("./chunk-cba4df2500f683e66dfc34c248f1ecc93e3b96c6a30a688f655f9e50370ebb87-02b5d02d.js"),["./chunk-cba4df2500f683e66dfc34c248f1ecc93e3b96c6a30a688f655f9e50370ebb87-02b5d02d.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="5165eb60e209df47c330f3e3564d8a5bd1f65748d2b0bf4f4b0b9e054e84a2b9"&&e.push(g(()=>import("./chunk-a867dc486e7e95b166d0332068dad7d6d955a1086063c1fcc31199b0c21a33a5-fbceaad3.js"),["./chunk-a867dc486e7e95b166d0332068dad7d6d955a1086063c1fcc31199b0c21a33a5-fbceaad3.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="e052200d8c2d607cc8b188bdc34183a3b444e6740e61670247f1a334e302ddb1"&&e.push(g(()=>import("./chunk-c86135fb467e4e4f1ec4e823794a04015a12566670e8dd5df015cdd5b365c644-423c6554.js"),["./chunk-c86135fb467e4e4f1ec4e823794a04015a12566670e8dd5df015cdd5b365c644-423c6554.js","./vaadin-drawer-toggle-914fce99.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./templates-b6af8b49.js","./vaadin-horizontal-layout-acda1c6d.js"],import.meta.url)),i==="a989732ce1abc06e2ce3728c984e5080d72e91f006c6f30c2c75ccb6c494f5bf"&&e.push(g(()=>import("./chunk-cba4df2500f683e66dfc34c248f1ecc93e3b96c6a30a688f655f9e50370ebb87-02b5d02d.js"),["./chunk-cba4df2500f683e66dfc34c248f1ecc93e3b96c6a30a688f655f9e50370ebb87-02b5d02d.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),i==="306361d3a8f1d5e0d1856bb10b013d997ec4c85a89c4aa637522c3159a7cc062"&&e.push(g(()=>import("./chunk-bb5b1c96abc44cd96bdde2c0b6f76bf598f235fa5cb94460c1560752b73636c6-c56f4e8c.js"),["./chunk-bb5b1c96abc44cd96bdde2c0b6f76bf598f235fa5cb94460c1560752b73636c6-c56f4e8c.js","./templates-b6af8b49.js","./indexhtml-0e56a356.js","./index-3b391f13.css","./lit-renderer-e4437c10.js","./vaadin-drawer-toggle-914fce99.js","./vaadin-horizontal-layout-acda1c6d.js","./vaadin-details-7754ada4.js","./vaadin-email-field-be9a5af6.js","./vaadin-icon-3eb51d31.js","./vaadin-text-area-bf207078.js","./selectConnector-e0e6d9b2.js","./vaadin-notification-7a1c2444.js"],import.meta.url)),Promise.all(e)};window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.loadOnDemand=ia;const $a=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{tr as $,vr as A,pr as B,le as C,lt as D,G as E,Rn as F,Xr as G,hn as H,so as I,un as J,pt as K,mn as L,Ii as M,dn as N,zr as O,N as P,Be as Q,Kr as R,tn as S,Ki as T,$r as U,Dn as V,_t as W,rr as X,Dr as Y,ti as Z,_a as _,ht as a,dr as a0,ca as a1,Ys as a2,vt as a3,Ee as a4,cr as a5,mr as a6,Vi as a7,_r as a8,Y as a9,ua as aA,ha as aB,aa as aC,Hi as aD,Wr as aE,Fi as aF,ra as aG,ye as aH,zn as aI,er as aJ,$a as aK,Ar as aa,Zs as ab,ce as ac,Yt as ad,Va as ae,$i as af,to as ag,Pi as ah,Ui as ai,gr as aj,Mi as ak,Er as al,wa as am,Ca as an,xr as ao,pn as ap,Gi as aq,ji as ar,fn as as,Zr as at,na as au,ut as av,Oi as aw,cn as ax,qi as ay,pa as az,fa as b,Bi as c,v as d,ta as e,de as f,_n as g,T as h,Js as i,Jr as j,bo as k,Ao as l,Ds as m,Eo as n,To as o,R as p,Vo as q,Ga as r,qe as s,Qn as t,Ka as u,sa as v,k as w,Ya as x,la as y,br as z};
