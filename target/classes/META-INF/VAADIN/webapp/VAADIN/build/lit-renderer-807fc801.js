import{i as A,r as F,d as Y,T as ee,_ as Fs,D as Ms,x as zs}from"./indexhtml-73f4168d.js";import{i as Ns,a as Ls,g as li,m as Bs,M as No}from"./vaadin-drawer-toggle-7009ef05.js";import{Z as Vs,a as qn,h as J,D as Le,P as U,A as Lo,z as Bo,B as Vo,ak as Fe,al as Hs,am as we,an as qe,a9 as N,ao as Ws,aa as le,b as Ho,M as jn,ap as Wo,O as Yo,C as Cr,aq as Ys,a6 as Gn,K as Uo,ar as qo,ai as Qn,X as jo,ab as zt,j as Kn,as as Go,at as xr,L as Sr,c as Be,E as Ee,au as Nt,av as Xn,aw as Zn,ad as se,d as Us,H as qs,ax as js,G as Qo,V as Gs,w as ae,q as Ko,ah as Qs,a7 as Lt,ay as Ks,i as Ar,az as Xo,aA as ui,a5 as Xs,aB as Zs,aC as ci,aD as Js,aE as ea,J as ta,Y as ra,aF as na,g as ia,v as di,aG as oa,aH as sa,aI as aa,f as Je,a1 as la,aJ as ua}from"./generated-flow-imports-5b2a66d1.js";import{p as Jn,D as Re,O as ca,h as da,t as ha,e as fa,f as Zo,m as _a}from"./templates-830627e2.js";import{R as Jo}from"./vaadin-horizontal-layout-30a33dd3.js";const pa=A`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;F("vaadin-combo-box-item",[Ns,pa],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ma=A`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,ga=A`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,ya=A`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;F("vaadin-combo-box-overlay",[Vs,Ls,ga,ma,ya,A`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});const ba=A`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;F("vaadin-combo-box",[qn,ba],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const va=n=>class extends n{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(e,t,i){e==="hidden"&&i!==null?this.index=void 0:super.attributeChangedCallback(e,t,i)}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,t,i){i===void 0||t===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wa extends va(ee(Le(U))){static get template(){return J`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}Y(wa);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ca=n=>class extends Lo(n){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const e=this._comboBox,t=e&&e.getAttribute("dir");t&&this.setAttribute("dir",t)}_shouldCloseOnOutsideClick(e){const t=e.composedPath();return!t.includes(this.positionTarget)&&!t.includes(this)}_setOverlayWidth(e,t){if(e&&t){const i=this.localName;this.style.setProperty(`--_${i}-default-width`,`${e.clientWidth}px`);const o=getComputedStyle(this._comboBox).getPropertyValue(`--${i}-width`);o===""?this.style.removeProperty(`--${i}-width`):this.style.setProperty(`--${i}-width`,o),this._updatePosition()}}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xa=A`
  #overlay {
    width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;F("vaadin-combo-box-overlay",[Bo,xa],{moduleId:"vaadin-combo-box-overlay-styles"});class Sa extends Ca(Vo(Le(ee(U)))){static get is(){return"vaadin-combo-box-overlay"}static get template(){return J`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="loader"></div>
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}Y(Sa);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Oe(n,r){return n.split(".").reduce((e,t)=>e?e[t]:void 0,r)}/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const hi=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),Ia=hi&&hi[1]>=8,fi=3,Oa={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const n=this._virtualCount;return Math.max(0,n-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(n){n=this._clamp(n,0,this._maxVirtualStart),this._virtualStartVal=n},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(n){n%=this._physicalCount,n<0&&(n=this._physicalCount+n),this._physicalStartVal=n},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(n){this._physicalCountVal=n},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let n=this._firstVisibleIndexVal;if(n==null){let r=this._physicalTop+this._scrollOffset;n=this._iterateItems((e,t)=>{if(r+=this._getPhysicalSizeIncrement(e),r>this._scrollPosition)return t})||0,this._firstVisibleIndexVal=n}return n},get lastVisibleIndex(){let n=this._lastVisibleIndexVal;if(n==null){let r=this._physicalTop+this._scrollOffset;this._iterateItems((e,t)=>{r<this._scrollBottom&&(n=t),r+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=n}return n},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const n=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let r=n-this._scrollPosition;const e=r>=0;if(this._scrollPosition=n,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(r)>this._physicalSize&&this._physicalSize>0){r-=this._scrollOffset;const t=Math.round(r/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(e);e?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,e?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Fe)}},_getReusables(n){let r,e,t;const i=[],o=this._hiddenContentSize*this._ratio,s=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const _=this._physicalBottom+this._scrollOffset,u=this._scrollPosition,p=this._scrollBottom;for(n?(r=this._physicalStart,e=u-d):(r=this._physicalEnd,e=_-p);t=this._getPhysicalSizeIncrement(r),e-=t,!(i.length>=l||e<=o);)if(n){if(a+i.length+1>=this._virtualCount||d+t>=u-this._scrollOffset)break;i.push(r),d+=t,r=(r+1)%l}else{if(s-i.length<=0||d+this._physicalSize-t<=p)break;i.push(r),d-=t,r=r===0?l-1:r-1}return{indexes:i,physicalTop:d-this._scrollOffset}},_update(n,r){if(!(n&&n.length===0||this._physicalCount===0)){if(this._assignModels(n),this._updateMetrics(n),r)for(;r.length;){const e=r.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(n){const e=this._clamp(this._physicalCount+n,fi,this._virtualCount-this._virtualStart)-this._physicalCount;let t=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const i=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-i)/e,t=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||t===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,t)),Hs):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,t),Fe))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const n=this._getReusables(!0);this._physicalTop=n.physicalTop,this._virtualStart+=n.indexes.length,this._physicalStart+=n.indexes.length,this._update(n.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(fi))},_itemsChanged(n){n.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,we))},_iterateItems(n,r){let e,t,i,o;if(arguments.length===2&&r){for(o=0;o<r.length;o++)if(e=r[o],t=this._computeVidx(e),(i=n.call(this,e,t))!=null)return i}else{for(e=this._physicalStart,t=this._virtualStart;e<this._physicalCount;e++,t++)if((i=n.call(this,e,t))!=null)return i;for(e=0;e<this._physicalStart;e++,t++)if((i=n.call(this,e,t))!=null)return i}},_computeVidx(n){return n>=this._physicalStart?this._virtualStart+(n-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+n},_positionItems(){this._adjustScrollPosition();let n=this._physicalTop;this._iterateItems(r=>{this.translate3d(0,`${n}px`,0,this._physicalItems[r]),n+=this._physicalSizes[r]})},_getPhysicalSizeIncrement(n){return this._physicalSizes[n]},_adjustScrollPosition(){const n=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(n!==0){this._physicalTop-=n;const r=this._scrollPosition;!Ia&&r>0&&this._resetScrollPosition(r-n)}},_resetScrollPosition(n){this.scrollTarget&&n>=0&&(this._scrollTop=n,this._scrollPosition=this._scrollTop)},_updateScrollerSize(n){const r=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=r,(n||this._scrollHeight===0||this._scrollPosition>=r-this._physicalSize||Math.abs(r-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${r}px`,this._scrollHeight=r)},scrollToIndex(n){if(typeof n!="number"||n<0||n>this.items.length-1||(qe(),this._physicalCount===0))return;n=this._clamp(n,0,this._virtualCount-1),(!this._isIndexRendered(n)||n>=this._maxVirtualStart)&&(this._virtualStart=n-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let r=this._physicalStart,e=this._virtualStart,t=0;const i=this._hiddenContentSize;for(;e<n&&t<=i;)t+=this._getPhysicalSizeIncrement(r),r=(r+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+t),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},we)},_isIndexRendered(n){return n>=this._virtualStart&&n<=this._virtualEnd},_getPhysicalIndex(n){return(this._physicalStart+(n-this._virtualStart))%this._physicalCount},_clamp(n,r,e){return Math.min(e,Math.max(r,n))},_debounce(n,r,e){this._debouncers||(this._debouncers={}),this._debouncers[n]=N.debounce(this._debouncers[n],e,r.bind(this)),Ws(this._debouncers[n])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pa=1e5,Pr=1e3;class es{constructor({createElements:r,updateElement:e,scrollTarget:t,scrollContainer:i,elementsContainer:o,reorderElements:s}){this.isAttached=!0,this._vidxOffset=0,this.createElements=r,this.updateElement=e,this.scrollTarget=t,this.scrollContainer=i,this.elementsContainer=o||i,this.reorderElements=s,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(r){if(typeof r!="number"||isNaN(r)||this.size===0||!this.scrollTarget.offsetHeight)return;r=this._clamp(r,0,this.size-1);const e=this.__getVisibleElements().length;let t=Math.floor(r/this.size*this._virtualCount);this._virtualCount-t<e?(t=this._virtualCount-(this.size-r),this._vidxOffset=this.size-this._virtualCount):t<e?r<Pr?(t=r,this._vidxOffset=0):(t=Pr,this._vidxOffset=r-t):this._vidxOffset=r-t,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(t),this.adjustedFirstVisibleIndex!==r&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(r)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),qe(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(r=0,e=this.size-1){const t=[];this.__getVisibleElements().forEach(i=>{i.__virtualIndex>=r&&i.__virtualIndex<=e&&(this.__updateElement(i,i.__virtualIndex,!0),t.push(i))}),this.__afterElementsUpdated(t)}_updateMetrics(r){qe();let e=0,t=0;const i=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((s,a)=>{t+=this._physicalSizes[s],this._physicalSizes[s]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[s])),e+=this._physicalSizes[s],this._physicalAverageCount+=this._physicalSizes[s]?1:0},r),this._physicalSize=this._physicalSize+e-t,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((o*i+e)/this._physicalAverageCount))}__getBorderBoxHeight(r){const e=getComputedStyle(r),t=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return t;const i=parseFloat(e.paddingBottom)||0,o=parseFloat(e.paddingTop)||0,s=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return t+i+o+s+a}__updateElement(r,e,t){r.style.paddingTop&&(r.style.paddingTop=""),!this.__preventElementUpdates&&(r.__lastUpdatedIndex!==e||t)&&(this.updateElement(r,e),r.__lastUpdatedIndex=e)}__afterElementsUpdated(r){r.forEach(e=>{const t=e.offsetHeight;if(t===0)e.style.paddingTop=`${this.__placeholderHeight}px`,this.__placeholderClearDebouncer=N.debounce(this.__placeholderClearDebouncer,we,()=>this._resizeHandler());else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const i=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(i.reduce((o,s)=>o+s,0)/i.length)}})}__getIndexScrollOffset(r){const e=this.__getVisibleElements().find(t=>t.__virtualIndex===r);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(r){r!==this.size&&(this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__size=r,this._physicalItems?this._virtualCount=this.items.length:(this._itemsChanged({path:"items"}),this.__preventElementUpdates=!0,qe(),this.__preventElementUpdates=!1),this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),qe())}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(r){this.scrollTarget.scrollTop=r}get items(){return{length:Math.min(this.size,Pa)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const r=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(r["padding-top"],10),this._isRTL=r.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(r){const e=this.createElements(r),t=document.createDocumentFragment();return e.forEach(i=>{i.style.position="absolute",t.appendChild(i),this.__resizeObserver.observe(i)}),this.elementsContainer.appendChild(t),e}_assignModels(r){const e=[];this._iterateItems((t,i)=>{const o=this._physicalItems[t];o.hidden=i>=this.size,o.hidden?delete o.__lastUpdatedIndex:(o.__virtualIndex=i+(this._vidxOffset||0),this.__updateElement(o,o.__virtualIndex),e.push(o))},r),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(r,e,t,i){i.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const r=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=r>=0,t=this._getReusables(!e);t.indexes.length&&(this._physicalTop=t.physicalTop,e?(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length):(this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length),this._resizeHandler())}r&&(this.__fixInvalidItemPositioningDebouncer=N.debounce(this.__fixInvalidItemPositioningDebouncer,le.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=N.debounce(this.__scrollReorderDebouncer,le.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(r)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const r=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,t=this.adjustedFirstVisibleIndex===0,i=this.adjustedLastVisibleIndex===this.size-1;if(r&&!t||e&&!i){const o=e,s=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=s}}__onWheel(r){if(r.ctrlKey||this._hasScrolledAncestor(r.target,r.deltaX,r.deltaY))return;let e=r.deltaY;if(r.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:r.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,r.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=N.debounce(this.__debouncerWheelAnimationFrame,we,()=>{this._wheelAnimationFrame=!1});const t=Math.abs(r.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,r.deltaX,e)?(r.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=r.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=N.debounce(this._debouncerIgnoreNewWheel,le.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&t<=this._previousMomentum||this._ignoreNewWheel?r.preventDefault():t>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=t}_hasScrolledAncestor(r,e,t){if(r===this.scrollTarget||r===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(r,e,t)&&["auto","scroll"].indexOf(getComputedStyle(r).overflow)!==-1)return!0;if(r!==this&&r.parentElement)return this._hasScrolledAncestor(r.parentElement,e,t)}_canScroll(r,e,t){return t>0&&r.scrollTop<r.scrollHeight-r.offsetHeight||t<0&&r.scrollTop>0||e>0&&r.scrollLeft<r.scrollWidth-r.offsetWidth||e<0&&r.scrollLeft>0}_increasePoolIfNeeded(r){if(this._physicalCount>2&&r){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(r,Math.min(100,t)))}else super._increasePoolIfNeeded(r)}_getScrollLineHeight(){const r=document.createElement("div");r.style.fontSize="initial",r.style.display="none",document.body.appendChild(r);const e=window.getComputedStyle(r).fontSize;return document.body.removeChild(r),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(r=>!r.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const r=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),i=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!i)return;const o=i.__virtualIndex-r,s=e.indexOf(i)-o;if(s>0)for(let a=0;a<s;a++)this.elementsContainer.appendChild(e[a]);else if(s<0)for(let a=e.length+s;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(Ho){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(r){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(r)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),t=e*this.size;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset,t=Pr,i=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const o=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=o,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<o&&(this._vidxOffset+=Math.min(o-this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(es.prototype,Oa);class ts{constructor(r){this.__adapter=new es(r)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(r){this.__adapter.size=r}scrollToIndex(r){this.__adapter.scrollToIndex(r)}update(r=0,e=this.size-1){this.__adapter.update(r,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pe=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ta=n=>class extends n{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(t=>parseInt(t,10)).reduce((t,i)=>t+i)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${jn()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new ts({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let i=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),i=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const o=[...this.children].find(d=>!d.hidden&&d.index===this.__virtualizer.lastVisibleIndex);if(!o||e!==o.index)return;const s=o.getBoundingClientRect(),a=this.getBoundingClientRect(),l=s.bottom-a.bottom+this._viewportTotalPaddingBottom;l>0&&(this.scrollTop+=l)}_isItemSelected(e,t,i){return e instanceof Pe?!1:i&&e!==void 0&&t!==void 0?Oe(i,e)===Oe(i,t):e===t}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(e,t){e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const t=document.createElement(`${this.__hostTagName}-item`);return t.addEventListener("click",this.__boundOnItemClick),t.tabIndex="-1",t.style.width="100%",t})}_updateElement(e,t){const i=this.items[t],o=this.focusedIndex,s=this._isItemSelected(i,this.selectedItem,this.itemIdPath);e.setProperties({item:i,index:t,label:this.getItemLabel(i),selected:s,renderer:this.renderer,focused:!this.loading&&o===t}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",t!==void 0?"option":!1),e.setAttribute("aria-selected",s.toString()),e.setAttribute("aria-posinset",t+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),i instanceof Pe&&this.__requestItemByIndex(t)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const t=this.scrollTop===0,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||i&&e.deltaY>0)&&e.preventDefault()})}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ea extends Ta(U){static get is(){return"vaadin-combo-box-scroller"}static get template(){return J`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}Y(Ea);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Da=n=>class extends Wo(n){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Aa=n=>class extends n{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Pe},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{const t=e.detail.index,i=e.detail.currentScrollerPos,o=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(t,o,i)&&t!==void 0){const s=this._getPageForIndex(t);this._shouldLoadPage(s)&&this._loadPage(s)}})}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,i){return i!==0&&e>=i-t&&e<=i+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return t!==void 0?t instanceof Pe:this.size===void 0}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const t={page:e,pageSize:this.pageSize,filter:this.filter},i=(o,s)=>{if(this._pendingRequests[e]!==i)return;const a=this.filteredItems?[...this.filteredItems]:[];a.splice(t.page*t.pageSize,o.length,...o),this.filteredItems=a,!this.opened&&!this._isInputFocused()&&this._commitValue(),s!==void 0&&(this.size=s),delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[e]=i,this.loading=!0,this.dataProvider(t,i)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let i=0;i<e;i++)t[i]=t[i]!==void 0?t[i]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t}),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&t!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const i=this.__getItemIndexByValue(this.filteredItems,t);(i<0||!this._getItemLabel(this.filteredItems[i]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize);Object.entries(this._pendingRequests).forEach(([i,o])=>{parseInt(i)>=t&&o([],e)})}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rs{constructor(r){this.host=r,r.addEventListener("opened-changed",()=>{r.opened||this.__setVirtualKeyboardEnabled(!1)}),r.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),r.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(r){this.host.inputElement&&(this.host.inputElement.inputMode=r?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function _i(n){return n!=null}function pi(n,r){return n.findIndex(e=>e instanceof Pe?!1:r(e))}const ka=n=>class extends Yo(Cr(Ys(Gn(Uo(qo(Qn(n))))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const t=this._nativeInput;t&&(t.autocomplete="off",t.autocapitalize="off",t.setAttribute("role","combobox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-expanded",!!this.opened),t.setAttribute("spellcheck","false"),t.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),Jn(this),this.addController(new rs(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,t,i){super._propertiesChanged(e,t,i),t.filter!==void 0&&this._filterChanged(t.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("opened-changed",t=>{this._overlayOpened=t.detail.value}),this._overlayElement=e}_initScroller(e){const t=`${this._tagNamePrefix}-scroller`,i=this._overlayElement;i.renderer=s=>{s.firstChild||s.appendChild(document.createElement(t))},i.requestContentUpdate();const o=i.querySelector(t);o.owner=e||this,o.getItemLabel=this._getItemLabel.bind(this),o.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=o}_updateScroller(e,t,i,o,s,a,l,d,_){e&&(i&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:i?t:[],opened:i,loading:o,selectedItem:s,itemIdPath:a,focusedIndex:l,renderer:d,theme:_}))}_openedOrItemsChanged(e,t,i){this._overlayOpened=!!(e&&(i||t&&t.length))}_overlayOpenedChanged(e,t){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):t&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,t){t!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&jo(this.inputElement)}_updateActiveDescendant(e){const t=this._nativeInput;if(!t)return;const i=this._getItemElements().find(o=>o.index===e);i?t.setAttribute("aria-activedescendant",i.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(t===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!zt&&this.inputElement&&this.inputElement.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const i=this._nativeInput;i&&(i.setAttribute("aria-expanded",!!e),e?i.setAttribute("aria-controls",this._scroller.id):i.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="Tab"?this._overlayElement.restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let t=e&&this.itemLabelPath?Oe(this.itemLabelPath,e):void 0;return t==null&&(t=e?e.toString():""),t}_getItemValue(e){let t=e&&this.itemValuePath?Oe(this.itemValuePath,e):void 0;return t===void 0&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this.filteredItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this.filteredItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,t){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){const t=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;if(!this.allowCustomValue&&t){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._onClearAction()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("click",()=>{zt&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[...this.filteredItems||[],this.selectedItem],t=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!t){const i=this._inputElementValue;this._lastCustomValue=i;const o=new CustomEvent("custom-value-set",{detail:i,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(o),o.defaultPrevented||(this.value=i)}else!this.allowCustomValue&&!this.opened&&t?this.value=this._getItemValue(t):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(e){const t=this._inputElementValue,i={};this.filter===t?this._filterChanged(this.filter):i.filter=t,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(i.opened=!0),this.setProperties(i)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}}_valueChanged(e,t){e===""&&t===void 0||(_i(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){document.hasFocus()&&this.validate(),this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t}),e?this.filteredItems=e.slice(0):t&&(this.filteredItems=null)}_filteredItemsChanged(e,t){const i=t?t[this._focusedIndex]:null,o=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&o>=0&&(this.selectedItem=e[o]);const s=this.__getItemIndexByValue(e,this._getItemValue(i));s>-1?this._focusedIndex=s:this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,t){return e&&e.filter(o=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(o).toString().toLowerCase().indexOf(t)>-1))}_selectItemForValue(e){const t=this.__getItemIndexByValue(this.filteredItems,e),i=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&i===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,t){return!e||!_i(t)?-1:pi(e,i=>this._getItemValue(i)===t)}__getItemIndexByLabel(e,t){return!e||!t?-1:pi(e,i=>this._getItemLabel(i).toString().toLowerCase()===t.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof Pe)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_setFocused(e){if(super._setFocused(e),!e&&!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}_shouldRemoveFocus(e){return e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`?!1:e.relatedTarget===this._overlayElement?(e.composedPath()[0].focus(),!1):!0}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-combo-box",Kn,{moduleId:"vaadin-combo-box-styles"});class Ra extends Aa(ka(Da(Go(ee(Ee(U)))))){static get is(){return"vaadin-combo-box"}static get template(){return J`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
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
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new xr(this,r=>{this._setInputElement(r),this._setFocusElement(r),this.stateTarget=r,this.ariaTarget=r})),this.addController(new Sr(this.inputElement,this._labelController)),this._tooltipController=new Be(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(r=>!r.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_onClearButtonClick(r){r.stopPropagation(),super._onClearButtonClick(r)}_onHostClick(r){const e=r.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(r)}}Y(Ra);(function(){const n=function(r){return window.Vaadin.Flow.tryCatchWrapper(r,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:r=>n(function(e){if(e.$connector)return;e.$connector={};const t={};let i={},o="";const s=new window.Vaadin.ComboBoxPlaceholder,a=(()=>{let u="",p=!1;return{needsDataCommunicatorReset:()=>p=!0,getLastFilterSentToServer:()=>u,requestData:(b,O,S)=>{const R=O-b,H=S.filter;e.$server.setRequestedRange(b,R,H),u=H,p&&(e.$server.resetDataCommunicator(),p=!1)}}})(),l=(u=Object.keys(t))=>{u.forEach(p=>{t[p]([],e.size),delete t[p];const g=parseInt(p)*e.pageSize,v=g+e.pageSize,w=Math.min(v,e.filteredItems.length);for(let b=g;b<w;b++)e.filteredItems[b]=s})};e.dataProvider=function(u,p){if(u.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(i[0]){_(i[0],u.filter,p);return}else u.filter="";if(u.filter!==o){i={},o=u.filter,this._filterDebouncer=Re.debounce(this._filterDebouncer,Nt.after(500),()=>{if(a.getLastFilterSentToServer()===u.filter&&a.needsDataCommunicatorReset(),u.filter!==o)throw new Error("Expected params.filter to be '"+o+"' but was '"+u.filter+"'");this._filterDebouncer=void 0,l(),e.dataProvider(u,p)});return}if(this._filterDebouncer){t[u.page]=p;return}if(i[u.page])d(u.page,p);else{t[u.page]=p;const v=Math.max(u.pageSize*2,500),w=Object.keys(t).map(S=>parseInt(S)),b=Math.min(...w),O=Math.max(...w);if(w.length*u.pageSize>v)u.page===b?l([String(O)]):l([String(b)]),e.dataProvider(u,p);else if(O-b+1!==w.length)l();else{const S=u.pageSize*b,R=u.pageSize*(O+1);a.requestData(S,R,u)}}},e.$connector.clear=n((u,p)=>{const g=Math.floor(u/e.pageSize),v=Math.ceil(p/e.pageSize);for(let w=g;w<g+v;w++)delete i[w]}),e.$connector.filter=n(function(u,p){return p=p?p.toString().toLowerCase():"",e._getItemLabel(u,e.itemLabelPath).toString().toLowerCase().indexOf(p)>-1}),e.$connector.set=n(function(u,p,g){if(g!=a.getLastFilterSentToServer())return;if(u%e.pageSize!=0)throw"Got new data to index "+u+" which is not aligned with the page size of "+e.pageSize;if(u===0&&p.length===0&&t[0]){i[0]=[];return}const v=u/e.pageSize,w=Math.ceil(p.length/e.pageSize);for(let b=0;b<w;b++){let O=v+b,S=p.slice(b*e.pageSize,(b+1)*e.pageSize);i[O]=S}}),e.$connector.updateData=n(function(u){const p=new Map(u.map(g=>[g.key,g]));e.filteredItems=e.filteredItems.map(g=>p.get(g.key)||g)}),e.$connector.updateSize=n(function(u){e._clientSideFilter||(e.size=u)}),e.$connector.reset=n(function(){l(),i={},e.clearCache()}),e.$connector.confirm=n(function(u,p){if(p!=a.getLastFilterSentToServer())return;let g=Object.getOwnPropertyNames(t);for(let v=0;v<g.length;v++){let w=g[v];i[w]&&d(w,t[w])}e.$server.confirmUpdate(u)});const d=n(function(u,p){let g=i[u];e._clientSideFilter?_(g,e.filter,p):(delete i[u],p(g,e.size))}),_=n(function(u,p,g){let v=u;p&&(v=u.filter(w=>e.$connector.filter(w,p))),g(v,v.length)});e.addEventListener("custom-value-set",n(u=>u.preventDefault()))})(r)}})();window.Vaadin.ComboBoxPlaceholder=Pe;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Me(n){return n.__cells||Array.from(n.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function te(n,r){[...n.children].forEach(r)}function ze(n,r){Me(n).forEach(r),n.__detailsCell&&r(n.__detailsCell)}function ns(n,r,e){let t=1;n.forEach(i=>{t%10===0&&(t+=1),i._order=e+t*r,t+=1})}function Ir(n,r,e){switch(typeof e){case"boolean":n.toggleAttribute(r,e);break;case"string":n.setAttribute(r,e);break;default:n.removeAttribute(r);break}}function Ce(n,r,e){r||r===""?Xn(n,"part",e):Zn(n,"part",e)}function ve(n,r,e){n.forEach(t=>{Ce(t,e,r)})}function Ge(n,r){const e=Me(n);Object.entries(r).forEach(([t,i])=>{Ir(n,t,i);const o=`${t}-row`;Ce(n,i,o),ve(e,`${o}-cell`,i)})}function mi(n,r){const e=Me(n);Object.entries(r).forEach(([t,i])=>{const o=n.getAttribute(t);if(Ir(n,t,i),o){const s=`${t}-${o}-row`;Ce(n,!1,s),ve(e,`${s}-cell`,!1)}if(i){const s=`${t}-${i}-row`;Ce(n,i,s),ve(e,`${s}-cell`,i)}})}function Ie(n,r,e,t,i){Ir(n,r,e),i&&Ce(n,!1,i),Ce(n,e,t||`${r}-cell`)}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const is=n=>class extends n{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},rowHeader:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_bodyContentHidden:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)","_rowHeaderChanged(rowHeader, _cells.*)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),Jn(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>{t.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(t=>{t.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>{t.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>{Ie(t,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||Ie(t,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>{Ie(t,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||Ie(t,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t.value&&t.value.forEach(i=>{i.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,t=>t.toUpperCase())}_reorderStatusChanged(e){const t=this.__previousReorderStatus,i=t?`reorder-${t}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(s=>{Ie(s,"reorder-status",e,o,i)}),this.__previousReorderStatus=e}_resizableChanged(e,t){e===void 0||t===void 0||t&&[t].concat(this._emptyCells).forEach(i=>{if(i){const o=i.querySelector('[part~="resize-handle"]');if(o&&i.removeChild(o),e){const s=document.createElement("div");s.setAttribute("part","resize-handle"),i.appendChild(s)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let t;getComputedStyle(this._grid).direction==="ltr"?e==="start"?t="left":e==="end"&&(t="right"):e==="start"?t="right":e==="end"&&(t="left"),this._allCells.forEach(i=>{i._content.style.textAlign=e,getComputedStyle(i._content).textAlign!==e&&(i._content.style.textAlign=t)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}),this._grid._debouncerHiddenChanged=N.debounce(this._grid._debouncerHiddenChanged,we,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,i){const o=[t._content,this];i&&i.item&&o.push(i),e.apply(this,o)}__renderCellsContent(e,t){this.hidden||!this._grid||t.forEach(i=>{if(!i.parentElement)return;const o=this._grid.__getRowModel(i.parentElement);e&&(i._renderer!==e&&this._clearCellContent(i),i._renderer=e,(o.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,i,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...i){this._renderHeaderCellContent(e,t)}_renderBodyCellsContent(e,t){!t||!e||this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...i){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:i}){this.path&&this.__setTextContent(e,Oe(this.path,i))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(t!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class os extends is(Le(U)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}Y(os);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $a=n=>class extends n{static get properties(){return{width:{type:String,value:"58px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},autoSelect:{type:Boolean,value:!1},dragSelect:{type:Boolean,value:!1},_indeterminate:Boolean,_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(e,t){let i=e.firstElementChild;i||(i=document.createElement("vaadin-checkbox"),i.setAttribute("aria-label","Select All"),i.classList.add("vaadin-grid-select-all-checkbox"),e.appendChild(i),i.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const o=this.__isChecked(this.selectAll,this._indeterminate);i.__rendererChecked=o,i.checked=o,i.hidden=this._selectAllHidden,i.indeterminate=this._indeterminate}_defaultRenderer(e,t,{item:i,selected:o}){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.setAttribute("aria-label","Select Row"),e.appendChild(s),s.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),se(e,"track",this.__onCellTrack.bind(this)),e.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),e.addEventListener("click",this.__onCellClick.bind(this))),s.__item=i,s.__rendererChecked=o,s.checked=o}__onSelectAllCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(this._indeterminate||e.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(e.target.checked?this._selectItem(e.target.__item):this._deselectItem(e.target.__item))}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,e.detail.state==="start"){const i=this._grid._getRenderedRows().find(o=>o.contains(e.currentTarget.assignedSlot));this.__dragSelect=!this._grid._isSelected(i._item),this.__dragStartIndex=i.index,this.__dragStartItem=i._item,this.__dragAutoScroller()}else e.detail.state==="end"&&(this.__dragStartItem&&(this.__dragSelect?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){this.__dragStartIndex!==void 0&&e.preventDefault()}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;const e=this._grid._getRenderedRows(),t=e.find(l=>{const d=l.getBoundingClientRect();return this.__dragCurrentY>=d.top&&this.__dragCurrentY<=d.bottom});let i=t?t.index:void 0;const o=this.__getScrollableArea();this.__dragCurrentY<o.top?i=this._grid._firstVisibleIndex:this.__dragCurrentY>o.bottom&&(i=this._grid._lastVisibleIndex),i!==void 0&&e.forEach(l=>{(i>this.__dragStartIndex&&l.index>=this.__dragStartIndex&&l.index<=i||i<this.__dragStartIndex&&l.index<=this.__dragStartIndex&&l.index>=i)&&(this.__dragSelect?this._selectItem(l._item):this._deselectItem(l._item),this.__dragStartItem=void 0)});const s=o.height*.15,a=10;if(this.__dragDy<0&&this.__dragCurrentY<o.top+s){const l=o.top+s-this.__dragCurrentY,d=Math.min(1,l/s);this._grid.$.table.scrollTop-=d*a}if(this.__dragDy>0&&this.__dragCurrentY>o.bottom-s){const l=this.__dragCurrentY-(o.bottom-s),d=Math.min(1,l/s);this._grid.$.table.scrollTop+=d*a}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),t=this._grid.$.header.getBoundingClientRect(),i=this._grid.$.footer.getBoundingClientRect();return{top:e.top+t.height,bottom:e.bottom-i.height,left:e.left,right:e.right,height:e.height-t.height-i.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__isChecked(e,t){return t||e}};class gi extends $a(os){static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"}}}_defaultHeaderRenderer(r,e){super._defaultHeaderRenderer(r,e);const t=r.firstElementChild;t&&(t.id="selectAllCheckbox")}_selectAll(){this.selectAll=!0,this.$server.selectAll()}_deselectAll(){this.selectAll=!1,this.$server.deselectAll()}_selectItem(r){this._grid.$connector.doSelection([r],!0)}_deselectItem(r){this._grid.$connector.doDeselection([r],!0),this.selectAll=!1}}customElements.define(gi.is,gi);(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(window.Vaadin.__forceApplyMobileDragDrop=!0,Fs(()=>import("./vaadin-mobile-drag-drop-dc77d352.js"),[],import.meta.url));window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.dndConnector={__ondragenterListener:function(n){const r=n.currentTarget.__dropEffect;n.currentTarget.hasAttribute("disabled")||(r&&(n.dataTransfer.dropEffect=r),r&&r!=="none"&&(n.currentTarget.classList.contains("v-drag-over-target")?n.currentTarget["__skip-leave"]=!0:n.currentTarget.classList.add("v-drag-over-target"),n.preventDefault(),n.stopPropagation()))},__ondragoverListener:function(n){if(!n.currentTarget.hasAttribute("disabled")){const r=n.currentTarget.__dropEffect;r&&(n.dataTransfer.dropEffect=r),n.preventDefault(),n.stopPropagation()}},__ondragleaveListener:function(n){n.currentTarget["__skip-leave"]?n.currentTarget["__skip-leave"]=!1:n.currentTarget.classList.remove("v-drag-over-target"),n.stopPropagation()},__ondropListener:function(n){const r=n.currentTarget.__dropEffect;r&&(n.dataTransfer.dropEffect=r),n.currentTarget.classList.remove("v-drag-over-target"),n.preventDefault(),n.stopPropagation()},updateDropTarget:function(n){n.__active?(n.addEventListener("dragenter",this.__ondragenterListener,!1),n.addEventListener("dragover",this.__ondragoverListener,!1),n.addEventListener("dragleave",this.__ondragleaveListener,!1),n.addEventListener("drop",this.__ondropListener,!1)):(n.removeEventListener("dragenter",this.__ondragenterListener,!1),n.removeEventListener("dragover",this.__ondragoverListener,!1),n.removeEventListener("dragleave",this.__ondragleaveListener,!1),n.removeEventListener("drop",this.__ondropListener,!1),n.classList.remove("v-drag-over-target"))},__dragstartListener:function(n){n.stopPropagation(),n.dataTransfer.setData("text/plain",""),n.currentTarget.hasAttribute("disabled")?n.preventDefault():(n.currentTarget.__effectAllowed&&(n.dataTransfer.effectAllowed=n.currentTarget.__effectAllowed),n.currentTarget.classList.add("v-dragged"))},__dragendListener:function(n){n.currentTarget.classList.remove("v-dragged")},updateDragSource:function(n){n.draggable?(n.addEventListener("dragstart",this.__dragstartListener,!1),n.addEventListener("dragend",this.__dragendListener,!1)):(n.removeEventListener("dragstart",this.__dragstartListener,!1),n.removeEventListener("dragend",this.__dragendListener,!1))}};F("vaadin-form-item",A`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fa extends ee(U){static get template(){return J`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(r){return r.ariaTarget||r}__linkLabelToField(r){Xn(this._getFieldAriaTarget(r),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(r){Zn(this._getFieldAriaTarget(r),"aria-labelledby",this.__labelId)}__onLabelClick(){const r=this.__fieldNode;r&&(r.focus(),r.click())}__getValidateFunction(r){return r.validate||r.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const r=this.$.labelSlot.assignedElements()[0];r&&(this.__labelNode=r,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${jn()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const r=this.$.contentSlot.assignedElements();r.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=r.find(t=>!!this.__getValidateFunction(t));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(r){r?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const r=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",r===!1)}}Y(Fa);F("vaadin-checkbox",A`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--_checkbox-size) + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ma=Us(n=>class extends qs(Qn(qo(n))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;this._toggleChecked(t.checked),jo(t)||t.focus()}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const za=n=>class extends js(Ma(Qo(Gs(n)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new xr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Sr(this.inputElement,this._labelController))}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Na=A`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-checkbox",Na,{moduleId:"vaadin-checkbox-styles"});class ss extends za(Ee(ee(U))){static get is(){return"vaadin-checkbox"}static get template(){return J`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Be(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}Y(ss);F("vaadin-grid",A`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-grid",A`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: flex;
      flex-direction: column;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      inset: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      visibility: hidden;
    }

    [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
      transform: translateX(var(--_grid-lazy-columns-start));
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      inset: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }

    @media (forced-colors: active) {
      [part~='selected-row'] [part~='first-column-cell']::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        border: 2px solid;
      }

      [part~='focused-cell']::before {
        outline: 2px solid !important;
        outline-offset: -1px;
      }
    }
  `,{moduleId:"vaadin-grid-styles"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const La=n=>class extends n{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(t=>t.some(i=>i.headerRenderer||i.path||i.header)).length}_a11yGetFooterRowCount(e){return e.filter(t=>t.some(i=>i.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(e===void 0||t===void 0)return;const i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){te(this.$.header,(e,t)=>{e.setAttribute("aria-rowindex",t+1)})}_a11yUpdateFooterRows(){te(this.$.footer,(e,t)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)})}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",!!t),ze(e,i=>{i.setAttribute("aria-selected",!!t)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){ze(e,i=>{i!==t&&i.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&t.localName!=="vaadin-grid-cell-content";)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const as=n=>{if(!n.parentNode)return!1;const e=Array.from(n.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(t=>{const i=t.getAttribute("part");return!(i&&i.includes("body-cell"))}).includes(n);return!n.disabled&&e&&n.offsetParent&&getComputedStyle(n).visibility!=="hidden"},Ba=n=>class extends n{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const o=i._content,s=this.getRootNode().activeElement;!o.contains(s)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){return as(e)}};function $e(n,r){return n.split(".").reduce((e,t)=>e[t],r)}function yi(n,r,e){if(e.length===0)return!1;let t=!0;return n.forEach(({path:i})=>{if(!i||i.indexOf(".")===-1)return;const o=i.replace(/\.[^.]*$/u,"");$e(o,e[0])===void 0&&(console.warn(`Path "${i}" used for ${r} does not exist in all of the items, ${r} is disabled.`),t=!1)}),t}function Bt(n){return[void 0,null].indexOf(n)>=0?"":isNaN(n)?n.toString():n}function bi(n,r){return n=Bt(n),r=Bt(r),n<r?-1:n>r?1:0}function Va(n,r){return n.sort((e,t)=>r.map(i=>i.direction==="asc"?bi($e(i.path,e),$e(i.path,t)):i.direction==="desc"?bi($e(i.path,t),$e(i.path,e)):0).reduce((i,o)=>i!==0?i:o,0))}function Ha(n,r){return n.filter(e=>r.every(t=>{const i=Bt($e(t.path,e)),o=Bt(t.value).toString().toLowerCase();return i.toString().toLowerCase().includes(o)}))}const Wa=n=>(r,e)=>{let t=n?[...n]:[];r.filters&&yi(r.filters,"filtering",t)&&(t=Ha(t,r.filters)),Array.isArray(r.sortOrders)&&r.sortOrders.length&&yi(r.sortOrders,"sorting",t)&&(t=Va(t,r.sortOrders));const i=Math.min(t.length,r.pageSize),o=r.page*i,s=o+i,a=t.slice(o,s);e(a,t.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ya=n=>class extends n{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){const t=Wa(this.items);t.__items=e,this.setProperties({_arrayDataProvider:t,size:e.length,dataProvider:t})}__dataProviderOrItemsChanged(e,t,i){i&&(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):t?this._arrayDataProvider.__items===t?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(t):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):t&&this.__setArrayDataProvider(t))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ua=n=>class extends n{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),se(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),zt||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content||i._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!i||!i.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=i._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const i=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)){const o=this._columnTree.findIndex(_=>_.includes(i)),s=this._getColumnsInOrder(o),a=s.indexOf(this._draggedColumn),l=s.indexOf(i),d=a<l?1:-1;for(let _=a;_!==l;_+=d)this._swapColumnOrders(this._draggedColumn,s[_+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(t=>!t.hidden).sort((t,i)=>t._order-i._order)}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const i=this.shadowRoot.elementFromPoint(e,t);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),i&&i._column)return i}_updateGhostPosition(e,t){const i=this._reorderGhost.getBoundingClientRect(),o=e-i.width/2,s=t-i.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(i.left-o),this._reorderGhost._top=l-(i.top-s),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{t.style[o]=i[o]}),t}_updateOrders(e){e!==void 0&&(e[0].forEach(t=>{t._order=0}),ns(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){te(e.parentNode,i=>{/column/u.test(i.localName)&&this._isSwapAllowed(i,e)&&(i._reorderStatus=t)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,t){if(e&&t){const i=e!==t,o=e.parentElement===t.parentElement,s=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return i&&o&&s}}_isSwappableByPosition(e,t){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),s=i.getBoundingClientRect();return s.left>o.left?t>s.right-o.width:t<s.left+o.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let i=e._column;for(;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qa=n=>class extends n{ready(){super.ready();const e=this.$.scroller;se(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault()),e.addEventListener("mousedown",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault())}_onHeaderTrack(e){const t=e.target;if(t.getAttribute("part")==="resize-handle"){let o=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((u,p)=>u._order-p._order).filter(u=>!u.hidden).pop();const s=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),d=l.find(u=>u._column===o);if(d.offsetWidth){const u=getComputedStyle(d._content),p=10+parseInt(u.paddingLeft)+parseInt(u.paddingRight)+parseInt(u.borderLeftWidth)+parseInt(u.borderRightWidth)+parseInt(u.marginLeft)+parseInt(u.marginRight);let g;const v=d.offsetWidth,w=d.getBoundingClientRect();d.hasAttribute("frozen-to-end")?g=v+(s?a-w.right:w.left-a):g=v+(s?w.left-a:a-w.right),o.width=`${Math.max(p,g)}px`,o.flexGrow=0}l.sort((u,p)=>u._column._order-p._column._order).forEach((u,p,g)=>{p<g.indexOf(d)&&(u._column.width=`${u.offsetWidth}px`,u._column.flexGrow=0)});const _=this._frozenToEndCells[0];if(_&&this.$.table.scrollWidth>this.$.table.offsetWidth){const u=_.getBoundingClientRect(),p=a-(s?u.right:u.left);(s&&p<=0||!s&&p>=0)&&(this.$.table.scrollLeft+=p)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _e=class ls{constructor(r,e,t){this.grid=r,this.parentCache=e,this.parentItem=t,this.itemCaches={},this.items=[],this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return!!(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(r=>this.itemCaches[r].isLoading())[0])}getItemForIndex(r){const{cache:e,scaledIndex:t}=this.getCacheAndIndex(r);return e.items[t]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((r,e)=>{const t=this.itemCaches[e];return t.updateSize(),r+t.effectiveSize},0):0}ensureSubCacheForScaledIndex(r){if(!this.itemCaches[r]){const e=new ls(this.grid,this,this.items[r]);this.itemCaches[r]=e,this.grid._loadPage(0,e)}}getCacheAndIndex(r){let e=r;for(const[t,i]of Object.entries(this.itemCaches)){const o=Number(t);if(e<=o)return{cache:this,scaledIndex:e};if(e<=o+i.effectiveSize)return i.getCacheAndIndex(e-o-1);e-=i.effectiveSize}return{cache:this,scaledIndex:e}}getFlatIndex(r){const e=Math.max(0,Math.min(this.size-1,r));return Object.entries(this.itemCaches).reduce((t,[i,o])=>e>Number(i)?t+o.effectiveSize:t,e)}},ja=n=>class extends n{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new _e(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize}__itemHasChildrenPathChanged(e,t){!t&&e==="children"||this.requestContentUpdate()}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:i,scaledIndex:o}=this._cache.getCacheAndIndex(e),s=i.items[o];s?(this.__updateLoading(t,!1),this._updateItem(t,s),this._isExpanded(s)&&i.ensureSubCacheForScaledIndex(o)):(this.__updateLoading(t,!0),this._loadPage(this._getPageForIndex(o),i))}__updateLoading(e,t){const i=Me(e);Ir(e,"loading",t),ve(i,"loading-row-cell",t)}getItemId(e){return this.itemIdPath?Oe(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const i=t.base||[],o=new Set;return i.forEach(s=>{o.add(this.getItemId(s))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(t=>!this._itemsEqual(t,e)))}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),i=0;for(;t.parentCache;)t=t.parentCache,i+=1;return i}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this.dataProvider(i,(o,s)=>{s!==void 0?t.size=s:i.parentItem&&(t.size=o.length),o.forEach((a,l)=>{const d=e*this.pageSize+l;t.items[d]=a}),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._getRenderedRows().forEach(a=>{const{cache:l,scaledIndex:d}=this._cache.getCacheAndIndex(a.index),_=l.items[d];_&&this._isExpanded(_)&&l.ensureSubCacheForScaledIndex(d)}),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=N.debounce(this._debouncerApplyCachedData,le.after(0),()=>{this._setLoading(!1),this._getRenderedRows().forEach(a=>{this._cache.getItemForIndex(a.index)&&this._getItem(a.index,a)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this._onDataProviderPageLoaded()})}}_onDataProviderPageLoaded(){}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new _e(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){t!==void 0&&e!==t&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){t!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=N.debounce(this._debouncerCheckSize,le.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let i=-1;return t.forEach((o,s)=>{this._itemsEqual(o,e)&&(i=s)}),i}scrollToIndex(...e){let t;for(;t!==(t=this.__getGlobalFlatIndex(e));)this._scrollToFlatIndex(t);(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__getGlobalFlatIndex([e,...t],i=this._cache,o=0){e===1/0&&(e=i.size-1);const s=i.getFlatIndex(e),a=i.itemCaches[e];return a&&a.effectiveSize&&t.length?this.__getGlobalFlatIndex(t,a,o+s+1):o+s}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const He={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},ye={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Ga=!("draggable"in document.createElement("div")),Qa=n=>class extends n{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if(t.localName==="vaadin-grid-cell-content"&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(a)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=a})}const i=t.getBoundingClientRect();Ga?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-i.left,e.clientY-i.top);let o=[t];this._isSelected(t._item)&&(o=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),Ge(t,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-i.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-i.top+10}px`),requestAnimationFrame(()=>{Ge(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const s=new CustomEvent("grid-dragstart",{detail:{draggedItems:o.map(a=>a._item),setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>t.setAttribute("dragstart",a)}});s.originalEvent=e,this.dispatchEvent(s)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let t=e.composedPath().find(i=>i.localName==="tr");if(!this._effectiveSize||this.dropMode===He.ON_GRID)this._dropLocation=ye.EMPTY;else if(!t||t.parentNode!==this.$.items){if(t)return;if(this.dropMode===He.BETWEEN||this.dropMode===He.ON_TOP_OR_BETWEEN)t=Array.from(this.$.items.children).filter(i=>!i.hidden).pop(),this._dropLocation=ye.BELOW;else return}else{const i=t.getBoundingClientRect();if(this._dropLocation=ye.ON_TOP,this.dropMode===He.BETWEEN){const o=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=o?ye.ABOVE:ye.BELOW}else this.dropMode===He.ON_TOP_OR_BETWEEN&&(e.clientY-i.top<i.height/3?this._dropLocation=ye.ABOVE:e.clientY-i.top>i.height/3*2&&(this._dropLocation=ye.BELOW))}if(t&&t.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===ye.EMPTY?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&mi(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,o=t-e+this.__dndAutoScrollThreshold,s=e-i+this.__dndAutoScrollThreshold;let a=0;if(s>0?a=s*2:o>0&&(a=-o*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(i=>{const o=i.getBoundingClientRect();return o.bottom>e&&o.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),te(this.$.items,e=>{mi(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map(t=>Array.from(t.children).filter(i=>!i.hidden&&i.getAttribute("part").indexOf("details-cell")===-1).sort((i,o)=>i._column._order>o._column._order?1:-1).map(i=>i._content.textContent.trim()).filter(i=>i).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){te(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const i=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||i||this.dragFilter&&!this.dragFilter(t),s=!this.dropMode||i||this.dropFilter&&!this.dropFilter(t);ze(e,a=>{o?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),Ge(e,{"drag-disabled":!!o,"drop-disabled":!!s})}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function We(n,r,e){return{index:n,removed:r,addedCount:e}}const us=0,cs=1,kr=2,Rr=3;function Ka(n,r,e,t,i,o){let s=o-i+1,a=e-r+1,l=new Array(s);for(let d=0;d<s;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<s;d++)for(let _=1;_<a;_++)if(ei(n[r+_-1],t[i+d-1]))l[d][_]=l[d-1][_-1];else{let u=l[d-1][_]+1,p=l[d][_-1]+1;l[d][_]=u<p?u:p}return l}function Xa(n){let r=n.length-1,e=n[0].length-1,t=n[r][e],i=[];for(;r>0||e>0;){if(r==0){i.push(kr),e--;continue}if(e==0){i.push(Rr),r--;continue}let o=n[r-1][e-1],s=n[r-1][e],a=n[r][e-1],l;s<a?l=s<o?s:o:l=a<o?a:o,l==o?(o==t?i.push(us):(i.push(cs),t=o),r--,e--):l==s?(i.push(Rr),r--,t=s):(i.push(kr),e--,t=a)}return i.reverse(),i}function Za(n,r,e,t,i,o){let s=0,a=0,l,d=Math.min(e-r,o-i);if(r==0&&i==0&&(s=Ja(n,t,d)),e==n.length&&o==t.length&&(a=el(n,t,d-s)),r+=s,i+=s,e-=a,o-=a,e-r==0&&o-i==0)return[];if(r==e){for(l=We(r,[],0);i<o;)l.removed.push(t[i++]);return[l]}else if(i==o)return[We(r,[],e-r)];let _=Xa(Ka(n,r,e,t,i,o));l=void 0;let u=[],p=r,g=i;for(let v=0;v<_.length;v++)switch(_[v]){case us:l&&(u.push(l),l=void 0),p++,g++;break;case cs:l||(l=We(p,[],0)),l.addedCount++,p++,l.removed.push(t[g]),g++;break;case kr:l||(l=We(p,[],0)),l.addedCount++,p++;break;case Rr:l||(l=We(p,[],0)),l.removed.push(t[g]),g++;break}return l&&u.push(l),u}function Ja(n,r,e){for(let t=0;t<e;t++)if(!ei(n[t],r[t]))return t;return e}function el(n,r,e){let t=n.length,i=r.length,o=0;for(;o<e&&ei(n[--t],r[--i]);)o++;return o}function tl(n,r){return Za(n,0,n.length,r,0,r.length)}function ei(n,r){return n===r}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function De(n){return n.localName==="slot"}let Qe=class{static getFlattenedNodes(n){const r=ae(n);return De(n)?(n=n,r.assignedNodes({flatten:!0})):Array.from(r.childNodes).map(e=>De(e)?(e=e,ae(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(n,r){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=n,this.callback=r,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){De(this._target)?this._listenSlots([this._target]):ae(this._target).children&&(this._listenSlots(ae(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,n=>{this._processMutations(n)}):(this._nativeChildrenObserver=new MutationObserver(n=>{this._processMutations(n)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){De(this._target)?this._unlistenSlots([this._target]):ae(this._target).children&&(this._unlistenSlots(ae(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ko.run(()=>this.flush()))}_processMutations(n){this._processSlotMutations(n),this.flush()}_processSlotMutations(n){if(n)for(let r=0;r<n.length;r++){let e=n[r];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let n={target:this._target,addedNodes:[],removedNodes:[]},r=this.constructor.getFlattenedNodes(this._target),e=tl(r,this._effectiveNodes);for(let i=0,o;i<e.length&&(o=e[i]);i++)for(let s=0,a;s<o.removed.length&&(a=o.removed[s]);s++)n.removedNodes.push(a);for(let i=0,o;i<e.length&&(o=e[i]);i++)for(let s=o.index;s<o.index+o.addedCount;s++)n.addedNodes.push(r[s]);this._effectiveNodes=r;let t=!1;return(n.addedNodes.length||n.removedNodes.length)&&(t=!0,this.callback.call(this._target,n)),t}_listenSlots(n){for(let r=0;r<n.length;r++){let e=n[r];De(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(n){for(let r=0;r<n.length;r++){let e=n[r];De(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ds(n,r){if(!n||!r||n.length!==r.length)return!1;for(let e=0,t=n.length;e<t;e++)if(n[e]instanceof Array&&r[e]instanceof Array){if(!ds(n[e],r[e]))return!1}else if(n[e]!==r[e])return!1;return!0}const rl=n=>class extends n{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(t=>t.localName==="vaadin-grid-column-group")}_getChildColumns(e){return Qe.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(t=>t.localName==="vaadin-grid-column-group"?this._getChildColumns(t):[t]).reduce((t,i)=>t.concat(i),[])}_getColumnTree(){const e=Qe.getFlattenedNodes(this).filter(this._isColumnElement),t=[e];let i=e;for(;this._hasColumnGroups(i);)i=this._flattenColumnGroups(i),t.push(i);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=N.debounce(this.__updateColumnTreeDebouncer,Fe,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();ds(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new Qe(this,e=>{const t=i=>i.filter(this._isColumnElement).length>0;if(t(e.addedNodes)||t(e.removedNodes)){const i=e.removedNodes.flatMap(s=>s._allCells),o=s=>i.filter(a=>a&&a._content.contains(s)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._debounceUpdateColumnTree()}this._debouncerCheckImports=N.debounce(this._debouncerCheckImports,le.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{const t=this.querySelector(e);t&&!(t instanceof U)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((t,i)=>t._column._order-i._column._order).forEach((t,i,o)=>{Ie(t,"first-column",i===0),Ie(t,"last-column",i===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nl=n=>class extends n{getEventContext(e){const t={},i=e.__composedPath||e.composedPath(),o=i[i.indexOf(this.$.table)-3];return o&&(t.section=["body","header","footer","details"].find(s=>o.getAttribute("part").indexOf(s)>-1),o._column&&(t.column=o._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(o.parentElement))),t}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const il=n=>class extends n{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ol=n=>class extends n{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(t=>{const i=this[t];if(e){const o=i&&i.parentElement;this.__isCell(i)?this[t]=o:this.__isCell(o)&&(this[t]=o.parentElement)}else if(!e&&this.__isRow(i)){const o=i.firstElementChild;this[t]=o._focusButton||o}})}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&Zn(t,"part","focused-cell"),e&&Xn(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let i=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(i){this.__isCell(i)&&(o=i,i=i.parentElement);const s=[...i.children].indexOf(o);this._itemsFocusable=this.__getFocusable(t,t.children[s])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let i;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":i="Navigation";break;case"Enter":case"Escape":case"F2":i="Interaction";break;case"Tab":i="Tab";break;case" ":i="Space";break}this._detectInteracting(e),this.interacting&&i!=="Interaction"&&(i=void 0),i&&this[`_on${i}KeyDown`](e,t)}_ensureScrolledToIndex(e){[...this.$.items.children].find(i=>i.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return t&&Oe(this.itemHasChildrenPath,t)&&!this._isExpanded(t)}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,t){e.preventDefault();const i=this._lastVisibleIndex-this._firstVisibleIndex-1,o=this.__isRTL;let s=0,a=0;switch(t){case"ArrowRight":s=o?-1:1;break;case"ArrowLeft":s=o?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?a=-1/0:s=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?a=1/0:s=1/0;break;case"ArrowDown":a=1;break;case"ArrowUp":a=-1;break;case"PageDown":a=i;break;case"PageUp":a=-i;break}const l=e.composedPath().find(p=>this.__isRow(p)),d=e.composedPath().find(p=>this.__isCell(p));if(this.__rowFocusMode&&!l||!this.__rowFocusMode&&!d)return;const _=o?"ArrowLeft":"ArrowRight",u=o?"ArrowRight":"ArrowLeft";if(t===_){if(this.__rowFocusMode){if(this.__isRowExpandable(l)){this.expandItem(l._item);return}this.__rowFocusMode=!1,this._onCellNavigation(l.firstElementChild,0,0);return}}else if(t===u)if(this.__rowFocusMode){if(this.__isRowCollapsible(l)){this.collapseItem(l._item);return}}else{const p=[...l.children].sort((g,v)=>g._order-v._order);if(d===p[0]||this.__isDetailsCell(d)){this.__rowFocusMode=!0,this._onRowNavigation(l,0);return}}this.__rowFocusMode?this._onRowNavigation(l,a):this._onCellNavigation(d,s,a)}_onRowNavigation(e,t){const{dstRow:i}=this.__navigateRows(t,e);i&&i.focus()}__getIndexInGroup(e,t){return e.parentNode===this.$.items?t!==void 0?t:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,t,i){const o=this.__getIndexInGroup(t,this._focusedItemIndex),s=t.parentNode,a=(s===this.$.items?this._effectiveSize:s.children.length)-1;let l=Math.max(0,Math.min(o+e,a));if(s!==this.$.items){if(l>o)for(;l<a&&s.children[l].hidden;)l+=1;else if(l<o)for(;l>0&&s.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:s.children[l]}}let d=!1;if(i){const _=this.__isDetailsCell(i);if(s===this.$.items){const u=t._item,p=this._cache.getItemForIndex(l);_?d=e===0:d=e===1&&this._isDetailsOpened(u)||e===-1&&l!==o&&this._isDetailsOpened(p),d!==_&&(e===1&&d||e===-1&&!d)&&(l=o)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...s.children].find(_=>!_.hidden&&_.index===l),dstIsRowDetails:d}}_onCellNavigation(e,t,i){const o=e.parentNode,{dstRow:s,dstIsRowDetails:a}=this.__navigateRows(i,o,e);if(!s)return;let l=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(p=>p._column===e._column));const d=this.__isDetailsCell(e),_=o.parentNode,u=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(_,u).filter(p=>!p.hidden)[l]._order),a)[...s.children].find(g=>this.__isDetailsCell(g)).focus();else{const p=this.__getIndexInGroup(s,this._focusedItemIndex),g=this._getColumns(_,p).filter(z=>!z.hidden),v=g.map(z=>z._order).sort((z,k)=>z-k),w=v.length-1,b=v.indexOf(v.slice(0).sort((z,k)=>Math.abs(z-this._focusedColumnOrder)-Math.abs(k-this._focusedColumnOrder))[0]),O=i===0&&d?b:Math.max(0,Math.min(b+t,w));O!==b&&(this._focusedColumnOrder=void 0);const R=g.reduce((z,k,Q)=>(z[k._order]=Q,z),{})[v[O]];let H;if(this.$.items.contains(e)){const z=this.$.sizer.children[R];this._lazyColumns&&(this.__isColumnInViewport(z._column)||z.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),H=[...s.children].find(k=>k._column===z._column),this._scrollHorizontallyToCell(H)}else H=s.children[R],this._scrollHorizontallyToCell(H);H.focus()}}_onInteractionKeyDown(e,t){const i=e.composedPath()[0],o=i.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(i.type);let s;switch(t){case"Enter":s=this.interacting?!o:!0;break;case"Escape":s=!1;break;case"F2":s=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==s&&a!==null)if(s){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);t==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=i.indexOf(e);for(o+=t;o>=0&&o<=i.length-1;){let a=i[o];if(a&&!this.__rowFocusMode&&(a=i[o].parentNode),!a||a.hidden)o+=t;else break}let s=i[o];if(s&&s._column&&!this.__isColumnInViewport(s._column)){const a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(s===this._headerFocusable)s=a._headerCell;else if(s===this._itemsFocusable){const l=s._column._cells.indexOf(s);s=a._cells[l]}else s===this._footerFocusable&&(s=a._footerCell)}return s}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t){if(e.stopPropagation(),t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let i=t;const o=this.__isRow(t)?t:t.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex&&this.__isCell(t)){const s=Array.from(o.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);a&&(i=a.children[s])}e.preventDefault(),i.focus()}else e.preventDefault(),t.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],i=this.__isRow(t);(i||!t._content||!t._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(i?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(i?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const i=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",i)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:i,row:o}=this._getGridEventLocation(e);if(!(!i&&!this.__rowFocusMode)){if(this._detectInteracting(e),t&&(i||o))if(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=this.__getFocusable(o,i):this.$.items===t?this._itemsFocusable=this.__getFocusable(o,i):this.$.footer===t&&(this._footerFocusable=this.__getFocusable(o,i)),i){const s=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&s.section==="body",this.__pendingBodyCellFocus||i.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:s}})),this._focusedCell=i._focusButton||i,Qs()&&e.target===i&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some(i=>i.localName==="vaadin-grid-cell-content");this._setInteracting(t),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:t,row:i}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=i.index)}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),i=this.interacting&&t===this._activeRowGroup;e.tabIndex=i?-1:0}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,t){let i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find(o=>o.offsetHeight),i=t?[...t.children].find(o=>!o.hidden):null;t&&i&&(this[`_${e}Focusable`]=this.__getFocusable(t,i))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find(i=>!i.hidden):null;t&&e&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const t=e.getBoundingClientRect(),i=e.parentNode,o=Array.from(i.children).indexOf(e),s=this.$.table.getBoundingClientRect();let a=s.left,l=s.right;for(let d=o-1;d>=0;d--){const _=i.children[d];if(!(_.hasAttribute("hidden")||this.__isDetailsCell(_))&&(_.hasAttribute("frozen")||_.hasAttribute("frozen-to-end"))){a=_.getBoundingClientRect().right;break}}for(let d=o+1;d<i.children.length;d++){const _=i.children[d];if(!(_.hasAttribute("hidden")||this.__isDetailsCell(_))&&(_.hasAttribute("frozen")||_.hasAttribute("frozen-to-end"))){l=_.getBoundingClientRect().left;break}}t.left<a&&(this.$.table.scrollLeft+=Math.round(t.left-a)),t.right>l&&(this.$.table.scrollLeft+=Math.round(t.right-l))}_getGridEventLocation(e){const t=e.composedPath(),i=t.indexOf(this.$.table),o=i>=1?t[i-1]:null,s=i>=2?t[i-2]:null,a=i>=3?t[i-3]:null;return{section:o,row:s,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sl=n=>class extends n{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:t})=>{this._updateDetailsCellHeight(t.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&te(this.$.items,t=>{if(!t.querySelector("[part~=details-cell]")){this._updateRow(t,this._columnTree[this._columnTree.length-1]);const i=this._isDetailsOpened(t._item);this._toggleDetailsCell(t,i)}})}_detailsOpenedItemsChanged(e,t){e.path==="detailsOpenedItems.length"||!e.value||te(this.$.items,i=>{if(i.hasAttribute("details-opened")){this._updateItem(i,i._item);return}t&&this._isDetailsOpened(i._item)&&this._updateItem(i,i._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const i=e.querySelector('[part~="details-cell"]');i&&(i.hidden=!t,!i.hidden&&this.rowDetailsRenderer&&(i._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`))}_updateDetailsCellHeights(){te(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(t=>!this._itemsEqual(t,e)))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Or=document.createElement("div");Or.style.position="fixed";Or.style.clip="rect(0px, 0px, 0px, 0px)";Or.setAttribute("aria-live","polite");document.body.appendChild(Or);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vi={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},al=n=>class extends Jo(n){static get properties(){return{columnRendering:{type:String,value:"eager"},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!Lt(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find(i=>i.index===e);if(t){const i=t.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,s=this.$.header.getBoundingClientRect().bottom;i.bottom>o?this.$.table.scrollTop+=i.bottom-o:i.top<s&&(this.$.table.scrollTop-=s-i.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=N.debounce(this._debounceScrolling,le.after(vi.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=N.debounce(this._debounceColumnContentVisibility,le.after(vi.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!Lt(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree)return;const e=this._getColumnsInOrder();if(!e[0]||!e[0]._sizerCell)return;let t=!1;if(e.forEach(i=>{const o=this._lazyColumns&&!this.__isColumnInViewport(i);i._bodyContentHidden!==o&&(t=!0,i._cells.forEach(s=>{if(s!==i._sizerCell){if(o)s.remove();else if(s.__parentRow){const a=[...s.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(i));s.__parentRow.insertBefore(s,a)}}})),i._bodyContentHidden=o}),t&&this._frozenCellsChanged(),this._lazyColumns){const i=[...e].reverse().find(a=>a.frozen),o=this.__getColumnEnd(i),s=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(s)-o,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:e._sizerCell.offsetLeft+e._sizerCell.offsetWidth>=this._scrollLeft&&e._sizerCell.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){t==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=N.debounce(this._debounceOverflow,we,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const i=li(t,this.getAttribute("dir"));i>0&&(e+=" start"),i<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,s=>s==="start"?"end":"start")),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left");const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=N.debounce(this._debouncerCacheElements,Fe,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=N.debounce(this.__debounceUpdateFrozenColumn,Fe,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,s)=>o._order-s._order);let t,i;for(let o=0;o<e.length;o++){const s=e[o];s._lastFrozen=!1,s._firstFrozenToEnd=!1,i===void 0&&s.frozenToEnd&&!s.hidden&&(i=o),s.frozen&&!s.hidden&&(t=o)}t!==void 0&&(e[t]._lastFrozen=!0),i!==void 0&&(e[i]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,i=Math.max(0,this.$.table.scrollLeft),o=li(this.$.table,this.getAttribute("dir")),s=`translate(${-i}px, 0)`;this.$.header.style.transform=s,this.$.footer.style.transform=s,this.$.items.style.transform=s;const a=this.__isRTL?o+t-e:i,l=`translate(${a}px, 0)`;this._frozenCells.forEach(p=>{p.style.transform=l});const d=this.__isRTL?o:i+t-e,_=`translate(${d}px, 0)`;let u=_;if(this._lazyColumns){const p=this._getColumnsInOrder(),g=[...p].reverse().find(S=>!S.frozenToEnd&&!S._bodyContentHidden),v=this.__getColumnEnd(g),w=p.find(S=>S.frozenToEnd),b=this.__getColumnStart(w);u=`translate(${d+(b-v)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(p=>{this.$.items.contains(p)?p.style.transform=u:p.style.transform=_}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ll=n=>class extends n{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const i=t.base||[],o=new Set;return i.forEach(s=>{o.add(this.getItemId(s))}),o}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let wi="prepend";const ul=n=>class extends n{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>wi},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){wi=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(t=>e.indexOf(t)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,t)=>{e._order=this._sorters.length>1?t:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,t,i){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!i)||this.multiSortOnShiftClick&&t)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(s=>s!==e);this._sorters=e.direction?[e]:[],o.forEach(s=>{s._order=null,s.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cl=n=>class extends n{static get properties(){return{cellClassNameGenerator:Function,cellPartNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){te(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){te(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,t){ze(e,i=>{if(i.__generatedClasses&&i.__generatedClasses.forEach(o=>i.classList.remove(o)),this.cellClassNameGenerator){const o=this.cellClassNameGenerator(i._column,t);i.__generatedClasses=o&&o.split(" ").filter(s=>s.length>0),i.__generatedClasses&&i.__generatedClasses.forEach(s=>i.classList.add(s))}})}_generateCellPartNames(e,t){ze(e,i=>{if(i.__generatedParts&&i.__generatedParts.forEach(o=>{Ce(i,null,o)}),this.cellPartNameGenerator){const o=this.cellPartNameGenerator(i._column,t);i.__generatedParts=o&&o.split(" ").filter(s=>s.length>0),i.__generatedParts&&i.__generatedParts.forEach(s=>{Ce(i,!0,s)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dl=n=>class extends ja(Ya(rl(Ba(al(ll(ul(sl(ol(La(il(Ua(qa(nl(Qa(cl(Ks(n))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Ho},_ios:{type:Boolean,value:Ar},_firefox:{type:Boolean,value:Xo},_android:{type:Boolean,value:ui},_touchDevice:{type:Boolean,value:zt},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const r=this.__getFirstVisibleItem();return r?r.index:void 0}get _lastVisibleIndex(){const r=this.__getLastVisibleItem();return r?r.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(r=>this._isInViewport(r))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(r=>this._isInViewport(r))}_isInViewport(r){const e=this.$.table.getBoundingClientRect(),t=r.getBoundingClientRect(),i=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return t.bottom>e.top+i&&t.top<e.bottom-o}_getRenderedRows(){return Array.from(this.$.items.children).filter(r=>!r.hidden).sort((r,e)=>r.index-e.index)}_getRowContainingNode(r){const e=Xs("vaadin-grid-cell-content",r);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(r,e){const t=this.__getRowModel(e);return this.getItemId(r)===this.getItemId(t.item)}ready(){super.ready(),this.__virtualizer=new ts({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateFooterPositioning(),this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),Jn(this),this._tooltipController=new Be(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(r){if(this.$.items.contains(r)&&r.localName==="td")return{item:r.parentElement._item,column:r._column}}__focusBodyCell({item:r,column:e}){const t=this._getRenderedRows().find(o=>o._item===r),i=t&&[...t.children].find(o=>o._column===e);i&&i.focus()}_focusFirstVisibleRow(){const r=this.__getFirstVisibleItem();this.__rowFocusMode=!0,r.focus()}_effectiveSizeChanged(r,e,t,i){if(e&&t&&i){const o=this.shadowRoot.activeElement,s=this.__getBodyCellCoordinates(o),a=e.size||0;e.size=r,e.update(a-1,a-1),r<a&&e.update(r-1,r-1),s&&o.parentElement.hidden&&this.__focusBodyCell(s),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(r=>r.clientHeight).length}__getIntrinsicWidth(r){return this.__intrinsicWidthCache.has(r)||this.__calculateAndCacheIntrinsicWidths([r]),this.__intrinsicWidthCache.get(r)}__getDistributedWidth(r,e){if(r==null||r===this)return 0;const t=Math.max(this.__getIntrinsicWidth(r),this.__getDistributedWidth((r.assignedSlot||r).parentElement,r));if(!e)return t;const i=r,o=t,s=i._visibleChildColumns.map(_=>this.__getIntrinsicWidth(_)).reduce((_,u)=>_+u,0),a=Math.max(0,o-s),d=this.__getIntrinsicWidth(e)/s*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(r){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(i=>{i.__debounceUpdateHeaderFooterRowVisibility&&i.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,t=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(i=>i.index>=e&&i.index<=t),this.__calculateAndCacheIntrinsicWidths(r),r.forEach(i=>{i.width=`${this.__getDistributedWidth(i)}px`})}__setVisibleCellContentAutoWidth(r,e){r._allCells.filter(t=>this.$.items.contains(t)?this.__viewportRowsCache.includes(t.parentElement):!0).forEach(t=>{t.__measuringAutoWidth=e,t._content.style.width=e?"auto":"",t._content.style.position=e?"absolute":""})}__getAutoWidthCellsMaxWidth(r){return r._allCells.reduce((e,t)=>t.__measuringAutoWidth?Math.max(e,t._content.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(r){r.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),r.forEach(e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)}),r.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(Lt(this)||this._cache.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const r=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(r)}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&!Lt(this)&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(r){const e=[];for(let t=0;t<r;t++){const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(i,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(i)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(t=>t.isConnected&&t.notifyPath&&t.notifyPath("_cells.*",t._cells)),this.__afterCreateScrollerRowsDebouncer=N.debounce(this.__afterCreateScrollerRowsDebouncer,we,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(r,e){const i=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",i);const s=document.createElement(r);s.id=i.replace("-content-","-"),s.setAttribute("role",r==="td"?"gridcell":"columnheader"),!ui&&!Ar&&(s.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),s.addEventListener("mouseleave",()=>{this._hideTooltip()}),s.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",i),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),s.appendChild(l),s._focusButton=l,s.focus=function(){s._focusButton.focus()},l.appendChild(a)}else s.setAttribute("tabindex","-1"),s.appendChild(a);return s._content=o,o.addEventListener("mousedown",()=>{if(Zs){const l=d=>{const _=o.contains(this.getRootNode().activeElement),u=d.composedPath().includes(o);!_&&u&&s.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||s.focus()})}),s}_updateRow(r,e,t="body",i=!1,o=!1){const s=document.createDocumentFragment();ze(r,a=>{a._vacant=!0}),r.innerHTML="",t==="body"&&(r.__cells=[],r.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,d)=>{let _;if(t==="body"){if(a._cells||(a._cells=[]),_=a._cells.find(u=>u._vacant),_||(_=this._createCell("td",a),a._cells.push(_)),_.setAttribute("part","cell body-cell"),_.__parentRow=r,r.__cells.push(_),a._bodyContentHidden||r.appendChild(_),r===this.$.sizer&&(a._sizerCell=_),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const u=this._detailsCells.find(p=>p._vacant)||this._createCell("td");this._detailsCells.indexOf(u)===-1&&this._detailsCells.push(u),u._content.parentElement||s.appendChild(u._content),this._configureDetailsCell(u),r.appendChild(u),r.__detailsCell=u,this._a11ySetRowDetailsCell(r,u),u._vacant=!1}a.notifyPath&&!o&&a.notifyPath("_cells.*",a._cells)}else{const u=t==="header"?"th":"td";i||a.localName==="vaadin-grid-column-group"?(_=a[`_${t}Cell`]||this._createCell(u),_._column=a,r.appendChild(_),a[`_${t}Cell`]=_):(a._emptyCells||(a._emptyCells=[]),_=a._emptyCells.find(p=>p._vacant)||this._createCell(u),_._column=a,r.appendChild(_),a._emptyCells.indexOf(_)===-1&&a._emptyCells.push(_)),_.setAttribute("part",`cell ${t}-cell`)}_._content.parentElement||s.appendChild(_._content),_._vacant=!1,_._column=a}),t!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(r),this.appendChild(s),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(r)}__debounceUpdateHeaderFooterRowVisibility(r){r.__debounceUpdateHeaderFooterRowVisibility=N.debounce(r.__debounceUpdateHeaderFooterRowVisibility,Fe,()=>this.__updateHeaderFooterRowVisibility(r))}__updateHeaderFooterRowVisibility(r){if(!r)return;const e=Array.from(r.children).filter(t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(r.parentElement===this.$.header){if(i.headerRenderer)return!0;if(i.header===null)return!1;if(i.path||i.header!==void 0)return!0}else if(i.footerRenderer)return!0;return!1});r.hidden!==!e.length&&(r.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(r,e){this._preventScrollerRotatingCellFocus(r,e),this._columnTree&&(this._updateRowOrderParts(r,e),this._a11yUpdateRowRowindex(r,e),this._getItem(e,r))}_columnTreeChanged(r){this._renderColumnTree(r),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(r,e=r.index){Ge(r,{first:e===0,last:e===this._effectiveSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(r,{expanded:e,selected:t,detailsOpened:i}){Ge(r,{expanded:e,selected:t,"details-opened":i})}_renderColumnTree(r){for(te(this.$.items,e=>{this._updateRow(e,r[r.length-1],"body",!1,!0);const t=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,t),this._filterDragAndDrop(e,t)});this.$.header.children.length<r.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>r.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);te(this.$.header,(e,t,i)=>{this._updateRow(e,r[t],"header",t===r.length-1);const o=Me(e);ve(o,"first-header-row-cell",t===0),ve(o,"last-header-row-cell",t===i.length-1)}),te(this.$.footer,(e,t,i)=>{this._updateRow(e,r[r.length-1-t],"footer",t===0);const o=Me(e);ve(o,"first-footer-row-cell",t===0),ve(o,"last-footer-row-cell",t===i.length-1)}),this._updateRow(this.$.sizer,r[r.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/u)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(r,e){r._item=e;const t=this.__getRowModel(r);this._toggleDetailsCell(r,t.detailsOpened),this._a11yUpdateRowLevel(r,t.level),this._a11yUpdateRowSelected(r,t.selected),this._updateRowStateParts(r,t),this._generateCellClassNames(r,t),this._generateCellPartNames(r,t),this._filterDragAndDrop(r,t),te(r,i=>{if(i._renderer){const o=i._column||this;i._renderer.call(o,i._content,o,t)}}),this._updateDetailsCellHeight(r),this._a11yUpdateRowExpanded(r,t.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(r){r.animationName.indexOf("vaadin-grid-appear")===0&&(r.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(r){return{index:r.index,item:r._item,level:this._getIndexLevel(r.index),expanded:this._isExpanded(r._item),selected:this._isSelected(r._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(r._item)}}_showTooltip(r){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(r.target),this._tooltipController.setContext(this.getEventContext(r)),e._stateController.open({focus:r.type==="focusin",hover:r.type==="mouseenter"}))}_hideTooltip(r){const e=this._tooltipController.node;e&&e._stateController.close(r)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(r=>{r.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(r,e){this.__virtualizer&&this.__virtualizer.update(r,e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class je extends dl(Ee(ee(Cr(U)))){static get template(){return J`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}Y(je);F("vaadin-grid-sorter",A`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hs=document.createElement("template");hs.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(hs.content);class hl extends ee(Le(U)){static get template(){return J`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(r,e){e!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(r){return r===null?"":r+1}_onClick(r){if(r.defaultPrevented)return;const e=this.getRootNode().activeElement;this!==e&&this.contains(e)||(r.preventDefault(),this._shiftClick=r.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}}Y(hl);(function(){const n=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid")};let r=!1;window.Vaadin.Flow.gridConnector={initLazy:e=>n(function(t){if(t.$connector)return;r||(r=!0,_e.prototype.ensureSubCacheForScaledIndexOriginal=_e.prototype.ensureSubCacheForScaledIndex,_e.prototype.ensureSubCacheForScaledIndex=n(function(c){if(!this.grid.$connector){this.ensureSubCacheForScaledIndexOriginal(c);return}this.grid.$connector.hasCacheForParentKey(this.grid.getItemId(this.items[c]))?this.ensureSubCacheForScaledIndexOriginal(c):this.itemCaches[c]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,c)}),_e.prototype.isLoadingOriginal=_e.prototype.isLoading,_e.prototype.isLoading=n(function(){return this.grid.$connector?this.grid.$connector.hasEnsureSubCacheQueue()||this.isLoadingOriginal():this.isLoadingOriginal()}),_e.prototype.getCacheByKey=n(function(c){for(let f in this.items)if(this.grid.getItemId(this.items[f])===c)return this.itemCaches[f];for(let f of Object.keys(this.itemCaches)){const h=this.itemCaches[f].getCacheByKey(c);if(h)return h}}));const i={},o={},s={},a=50,l=20;let d=[],_,u=[],p;const g=150;let v,w={};const b="null";w[b]=[0,0];const O=["SINGLE","NONE","MULTI"];let S={},R="SINGLE",H=!1;t.size=0,t.itemIdPath="key",t.$connector={},t.$connector.hasCacheForParentKey=n(c=>s[c]!==void 0&&s[c].size!==void 0),t.$connector.hasEnsureSubCacheQueue=n(()=>u.length>0),t.$connector.hasParentRequestQueue=n(()=>d.length>0),t.$connector.hasRootRequestQueue=n(()=>Object.keys(i).length>0||!!v&&v.isActive()),t.$connector.beforeEnsureSubCacheForScaledIndex=n(function(c,f){u.push({cache:c,scaledIndex:f,itemkey:t.getItemId(c.items[f])}),p=Re.debounce(p,ci,()=>{for(;u.length;)t.$connector.flushEnsureSubCache()})}),t.$connector.doSelection=n(function(c,f){R==="NONE"||!c.length||f&&t.hasAttribute("disabled")||(R==="SINGLE"&&(S={}),c.forEach(h=>{h&&(S[h.key]=h,h.selected=!0,f&&t.$server.select(h.key));const m=!t.activeItem||!h||h.key!=t.activeItem.key;!f&&R==="SINGLE"&&m&&(t.activeItem=h)}),t.selectedItems=Object.values(S))}),t.$connector.doDeselection=n(function(c,f){if(R==="NONE"||!c.length||f&&t.hasAttribute("disabled"))return;const h=t.selectedItems.slice();for(;c.length;){const m=c.shift();for(let y=0;y<h.length;y++){const C=h[y];if(m&&m.key===C.key){h.splice(y,1);break}}m&&(delete S[m.key],delete m.selected,f&&t.$server.deselect(m.key))}t.selectedItems=h}),t.__activeItemChanged=n(function(c,f){R=="SINGLE"&&(c?S[c.key]||t.$connector.doSelection([c],!0):f&&S[f.key]&&(t.__deselectDisallowed?t.activeItem=f:t.$connector.doDeselection([f],!0)))}),t._createPropertyObserver("activeItem","__activeItemChanged",!0),t.__activeItemChangedDetails=n(function(c,f){t.__disallowDetailsOnClick||c==null&&f===void 0||(c&&!c.detailsOpened?t.$server.setDetailsVisible(c.key):t.$server.setDetailsVisible(null))}),t._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),t.$connector._getSameLevelPage=n(function(c,f,h){if((f.parentItem?t.getItemId(f.parentItem):b)===c)return t._getPageForIndex(h);const{parentCache:y}=f;if(!y)return null;const C=Object.entries(y.itemCaches).find(([x,E])=>E===f)[0];return this._getSameLevelPage(c,y,C)}),t.$connector.flushEnsureSubCache=n(function(){const c=u.shift();return c?(c.cache.ensureSubCacheForScaledIndexOriginal(c.scaledIndex),!0):!1}),t.$connector.flushParentRequests=n(function(){let c=d.splice(0,l);return c.length?(t.$server.setParentRequestedRanges(c),!0):!1}),t.$connector.beforeParentRequest=n(function(c,f,h){d.push({firstIndex:c,size:f,parentKey:h}),_=Re.debounce(_,Nt.after(a),()=>{for(;d.length;)t.$connector.flushParentRequests()})}),t.$connector.fetchPage=n(function(c,f,h){const m=t._getRenderedRows();let y=m.length>0?m[0].index:0,C=m.length>0?m[m.length-1].index:0,x=C-y,E=Math.max(0,y-x),$=Math.min(C+x,t._effectiveSize),X=f,G=f;for(let ce=E;ce<=$;ce++){const{cache:Xe,scaledIndex:Ze}=t._cache.getCacheAndIndex(ce),xe=t.$connector._getSameLevelPage(h,Xe,Ze);xe!==null&&(X=Math.min(X,xe),G=Math.max(G,xe))}let D=Math.max(0,X),I=h!==b?G:Math.min(G,Math.floor(t.size/t.pageSize)),j=w[h];if(j||(j=[-1,-1]),j[0]!=D||j[1]!=I){j=[D,I],w[h]=j;let ce=I-D+1;c(D*t.pageSize,ce*t.pageSize)}}),t.dataProvider=n(function(c,f){if(c.pageSize!=t.pageSize)throw"Invalid pageSize";let h=c.page;if(c.parentItem){let m=t.getItemId(c.parentItem);o[m]||(o[m]={});let y=t._cache.getCacheByKey(m);s[m]&&s[m][h]&&y?(h=Math.min(h,Math.floor(s[m].size/t.pageSize)),u=[],f(s[m][h],s[m].size)):(o[m][h]=f,t.$connector.fetchPage((C,x)=>t.$connector.beforeParentRequest(C,x,c.parentItem.key),h,m))}else{if(h=Math.min(h,Math.floor(t.size/t.pageSize)),t.size===0){f([],0);return}s[b]&&s[b][h]?f(s[b][h]):(i[h]=f,v=Re.debounce(v,Nt.after(t._hasData?g:0),()=>{t.$connector.fetchPage((m,y)=>t.$server.setRequestedRange(m,y),h,b)}))}});const z=n(function(c,f){f!==void 0&&!H&&t.$server.sortersChanged(t._sorters.map(function(h){return{path:h.path,direction:h.direction}}))});t.$connector.setSorterDirections=n(function(c){H=!0,setTimeout(n(()=>{try{const f=Array.from(t.querySelectorAll("vaadin-grid-sorter"));t._sorters.forEach(h=>{f.includes(h)||f.push(h)}),f.forEach(h=>{c.filter(m=>m.column===h.getAttribute("path"))[0]||(h.direction=null)}),t.multiSortPriority!=="append"&&(c=c.reverse()),c.forEach(({column:h,direction:m})=>{f.forEach(y=>{y.getAttribute("path")===h&&y.direction!==m&&(y.direction=m)})})}finally{H=!1}}))}),t._createPropertyObserver("_previousSorters",z),t._updateItem=n(function(c,f){je.prototype._updateItem.call(t,c,f),c.hidden||Array.from(c.children).forEach(h=>{h._content&&h._content.__templateInstance&&h._content.__templateInstance.children&&Array.from(h._content.__templateInstance.children).forEach(m=>{m._attachRenderedComponentIfAble&&m._attachRenderedComponentIfAble(),m.children&&Array.from(m.children).forEach(y=>{y._attachRenderedComponentIfAble&&y._attachRenderedComponentIfAble()})})}),R===O[1]&&(c.removeAttribute("aria-selected"),Array.from(c.children).forEach(h=>h.removeAttribute("aria-selected")))});const k=n(function(c,f){if(c==null||t.$server.updateExpandedState==null)return;let h=t.getItemId(c);t.$server.updateExpandedState(h,f)});t.expandItem=n(function(c){k(c,!0),je.prototype.expandItem.call(t,c)}),t.collapseItem=n(function(c){k(c,!1),je.prototype.collapseItem.call(t,c)});const Q=function(c){if(!c||!Array.isArray(c))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(c);let f=Array.from(t.detailsOpenedItems),h=!1;for(let m=0;m<c.length;++m){const y=c[m];y&&(y.detailsOpened?t._getItemIndexInArray(y,f)<0&&f.push(y):t._getItemIndexInArray(y,f)>=0&&f.splice(t._getItemIndexInArray(y,f),1),S[y.key]&&(S[y.key]=y,y.selected=!0,h=!0))}t.detailsOpenedItems=f,h&&t.selectedItems.splice(0,t.selectedItems.length,...Object.values(S))},ne=function(c,f){let h;if((f||b)!==b){h=s[f][c];let m=t._cache.getCacheByKey(f);if(m){const y=o[f],C=y&&y[c];ie(c,h,C,m)}}else h=s[b][c],ie(c,h,i[c],t._cache);return h},ie=function(c,f,h,m){if(!h){let y=c*t.pageSize,C=y+t.pageSize;if(f){if(m&&m.items)for(let x=y;x<C;x++)m.items[x]&&(m.items[x]=f[x-y])}else if(m&&m.items)for(let x=y;x<C;x++)delete m.items[x]}},oe=function(){fe(),t.__updateVisibleRows()},fe=function(){t._cache.updateSize(),t._effectiveSize=t._cache.effectiveSize},ue=function(c){if(!c||!t.$||t.$.items.childElementCount===0)return;const f=c.map(m=>m.key),h=t._getRenderedRows().filter(m=>m._item&&f.includes(m._item.key)).map(m=>m.index);h.length>0&&t.__updateVisibleRows(h[0],h[h.length-1])};t.$connector.set=n(function(c,f,h){if(c%t.pageSize!=0)throw"Got new data to index "+c+" which is not aligned with the page size of "+t.pageSize;let m=h||b;const y=c/t.pageSize,C=Math.ceil(f.length/t.pageSize);for(let x=0;x<C;x++){let E=y+x,$=f.slice(x*t.pageSize,(x+1)*t.pageSize);s[m]||(s[m]={}),s[m][E]=$,t.$connector.doSelection($.filter(G=>G.selected)),t.$connector.doDeselection($.filter(G=>!G.selected&&S[G.key]));const X=ne(E,m);X&&(Q(X),ue(X))}});const me=function(c){let f=c.parentUniqueKey||b;if(s[f]){for(let h in s[f])for(let m in s[f][h])if(t.getItemId(s[f][h][m])===t.getItemId(c))return{page:h,index:m,parentKey:f}}return null};t.$connector.updateHierarchicalData=n(function(c){let f=[];for(let m=0;m<c.length;m++){let y=me(c[m]);if(y){s[y.parentKey][y.page][y.index]=c[m];let C=y.parentKey+":"+y.page;f[C]||(f[C]={parentKey:y.parentKey,page:y.page})}}let h=Object.keys(f);for(let m=0;m<h.length;m++){let y=f[h[m]];const C=ne(y.page,y.parentKey);C&&(Q(C),ue(C))}}),t.$connector.updateFlatData=n(function(c){for(let f=0;f<c.length;f++){let h=me(c[f]);if(h){s[h.parentKey][h.page][h.index]=c[f];const m=parseInt(h.page)*t.pageSize+parseInt(h.index);t._cache.items[m]&&(t._cache.items[m]=c[f])}}Q(c),ue(c)}),t.$connector.clearExpanded=n(function(){t.expandedItems=[],u=[],d=[]}),t.$connector.clear=n(function(c,f,h){let m=h||b;if(!s[m]||Object.keys(s[m]).length===0)return;if(c%t.pageSize!=0)throw"Got cleared data for index "+c+" which is not aligned with the page size of "+t.pageSize;let y=Math.floor(c/t.pageSize),C=Math.ceil(f/t.pageSize);for(let $=0;$<C;$++){let X=y+$,G=s[m][X];t.$connector.doDeselection(G.filter(I=>S[I.key])),G.forEach(I=>t.closeItemDetails(I)),delete s[m][X];const D=ne(X,h);D&&Q(D),ue(G)}let x=t._cache;h&&(x=t._cache.getCacheByKey(m));const E=c+C*t.pageSize;for(let $=c;$<E;$++)delete x.items[$],delete x.itemCaches[$];fe()}),t.$connector.reset=n(function(){t.size=0,ge(s),ge(t._cache.items),ge(w),p&&p.cancel(),_&&_.cancel(),v&&v.cancel(),p=void 0,_=void 0,u=[],d=[],oe()});const ge=c=>Object.keys(c).forEach(f=>delete c[f]);t.$connector.updateSize=c=>t.size=c,t.$connector.updateUniqueItemIdPath=c=>t.itemIdPath=c,t.$connector.expandItems=n(function(c){let f=Array.from(t.expandedItems);c.filter(h=>!t._isExpanded(h)).forEach(h=>f.push(h)),t.expandedItems=f}),t.$connector.collapseItems=n(function(c){let f=Array.from(t.expandedItems);c.forEach(h=>{let m=t._getItemIndexInArray(h,f);m>=0&&f.splice(m,1)}),t.expandedItems=f,c.forEach(h=>t.$connector.removeFromQueue(h))}),t.$connector.removeFromQueue=n(function(c){let f=t.getItemId(c);Object.values(o[f]||{}).forEach(h=>h([])),delete o[f],u=u.filter(h=>h.itemkey!==f),d=d.filter(h=>h.parentKey!==f)}),t.$connector.confirmParent=n(function(c,f,h){s[f]||(s[f]={});const m=s[f].size!==h;s[f].size=h,h===0&&(s[f][0]=[]);let y=Object.getOwnPropertyNames(o[f]||{});for(let C=0;C<y.length;C++){let x=y[C],E=w[f]||[0,0];const $=o[f][x];if(s[f]&&s[f][x]||x<E[0]||x>E[1]){delete o[f][x];let X=s[f][x]||new Array(h);$(X,h)}else $&&h===0&&(delete o[f][x],$([],h))}if(m&&y.length===0){const C=t._cache.getCacheByKey(f);C&&(C.size=h),fe()}t.$server.confirmParentUpdate(c,f),t.loading||(t.__confirmParentUpdateDebouncer=Re.debounce(t.__confirmParentUpdateDebouncer,ci,()=>t.__updateVisibleRows()))}),t.$connector.confirm=n(function(c){let f=Object.getOwnPropertyNames(i);for(let h=0;h<f.length;h++){let m=f[h],y=w[b]||[0,0];const C=t.size?Math.ceil(t.size/t.pageSize)-1:0,x=Math.min(y[1],C),E=i[m];s[b]&&s[b][m]||m<y[0]||+m>x?(delete i[m],s[b][m]?E(s[b][m]):(E(new Array(t.pageSize)),t.requestContentUpdate())):E&&t.size===0&&(delete i[m],E([]))}Object.keys(i).length&&delete w[b],t.$server.confirmUpdate(c)}),t.$connector.ensureHierarchy=n(function(){for(let c in s)c!==b&&delete s[c];ge(w),t._cache.itemCaches={},oe()}),t.$connector.setSelectionMode=n(function(c){if((typeof c=="string"||c instanceof String)&&O.indexOf(c)>=0)R=c,S={},t.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),t.$connector.updateMultiSelectable=n(function(){t.$&&(R===O[0]?t.$.table.setAttribute("aria-multiselectable",!1):R===O[1]?t.$.table.removeAttribute("aria-multiselectable"):t.$.table.setAttribute("aria-multiselectable",!0))}),t._createPropertyObserver("isAttached",()=>t.$connector.updateMultiSelectable());const W=c=>f=>{c&&(c(f),c=null)};t.$connector.setHeaderRenderer=n(function(c,f){const{content:h,showSorter:m,sorterPath:y}=f;if(h===null){c.headerRenderer=null;return}c.headerRenderer=W(C=>{C.innerHTML="";let x=C;if(m){const E=document.createElement("vaadin-grid-sorter");E.setAttribute("path",y);const $=h instanceof Node?h.textContent:h;$&&E.setAttribute("aria-label",`Sort by ${$}`),C.appendChild(E),x=E}h instanceof Node?x.appendChild(h):x.textContent=h})}),t.__applySorters=()=>{t._previousSorters=t._mapSorters(),je.prototype.__applySorters.call(t)},t.$connector.setFooterRenderer=n(function(c,f){const{content:h}=f;if(h===null){c.footerRenderer=null;return}c.footerRenderer=W(m=>{m.innerHTML="",h instanceof Node?m.appendChild(h):m.textContent=h})}),t.addEventListener("vaadin-context-menu-before-open",n(function(c){const{key:f,columnId:h}=c.detail;t.$server.updateContextMenuTargetItem(f,h)})),t.getContextMenuBeforeOpenDetail=n(function(c){const f=c.detail.sourceEvent||c,h=t.getEventContext(f),m=h.item&&h.item.key||"",y=h.column&&h.column.id||"";return{key:m,columnId:y}}),t.addEventListener("click",n(c=>K(c,"item-click"))),t.addEventListener("dblclick",n(c=>K(c,"item-double-click"))),t.addEventListener("column-resize",n(c=>{t._getColumnsInOrder().filter(h=>!h.hidden).forEach(h=>{h.dispatchEvent(new CustomEvent("column-drag-resize"))}),t.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:c.detail.resizedColumn._flowId}}))})),t.addEventListener("column-reorder",n(c=>{const f=t._columnTree.slice(0).pop().filter(h=>h._flowId).sort((h,m)=>h._order-m._order).map(h=>h._flowId);t.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:f}}))})),t.addEventListener("cell-focus",n(c=>{const f=t.getEventContext(c);["header","body","footer"].indexOf(f.section)!==-1&&t.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:f.item?f.item.key:null,internalColumnId:f.column?f.column._flowId:null,section:f.section}}))}));function K(c,f){if(c.defaultPrevented)return;const h=c.target;if(as(h)||h instanceof HTMLLabelElement)return;const m=t.getEventContext(c),y=m.section;m.item&&y!=="details"&&(c.itemKey=m.item.key,m.column&&(c.internalColumnId=m.column._flowId),t.dispatchEvent(new CustomEvent(f,{detail:c})))}t.cellClassNameGenerator=n(function(c,f){const h=f.item.style;if(h)return(h.row||"")+" "+(c&&h[c._flowId]||"")}),t.cellPartNameGenerator=n(function(c,f){const h=f.item.part;if(h)return(h.row||"")+" "+(c&&h[c._flowId]||"")}),t.dropFilter=n(c=>c.item&&!c.item.dropDisabled),t.dragFilter=n(c=>c.item&&!c.item.dragDisabled),t.addEventListener("grid-dragstart",n(c=>{t._isSelected(c.detail.draggedItems[0])?(t.__selectionDragData?Object.keys(t.__selectionDragData).forEach(f=>{c.detail.setDragData(f,t.__selectionDragData[f])}):(t.__dragDataTypes||[]).forEach(f=>{c.detail.setDragData(f,c.detail.draggedItems.map(h=>h.dragData[f]).join(`
`))}),t.__selectionDraggedItemsCount>1&&c.detail.setDraggedItemsCount(t.__selectionDraggedItemsCount)):(t.__dragDataTypes||[]).forEach(f=>{c.detail.setDragData(f,c.detail.draggedItems[0].dragData[f])})}))})(e)}})();const fl=A`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;F("vaadin-checkbox-group",[Js,ea,fl],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _l extends ta(Gn(Qn(Ee(ee(U))))){static get is(){return"vaadin-checkbox-group"}static get template(){return J`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        [part='group-field'] {
          display: flex;
          flex-wrap: wrap;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this),this._tooltipController=new Be(this),this._tooltipController.addEventListener("tooltip-changed",r=>{const e=r.detail.node;if(e&&e.isConnected){const t=this.__checkboxes.map(i=>i.inputElement);this._tooltipController.setAriaTarget(t)}else this._tooltipController.setAriaTarget([])})}get __checkboxes(){return this.__filterCheckboxes([...this.children])}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group");const r=this.shadowRoot.querySelector("slot:not([name])");this._observer=new ra(r,({addedNodes:e,removedNodes:t})=>{const i=this.__filterCheckboxes(e),o=this.__filterCheckboxes(t);i.forEach(this.__registerCheckbox),o.forEach(this.__unregisterCheckbox);const s=this.__checkboxes.map(a=>a.inputElement);this._tooltipController.setAriaTarget(s),this.__warnOfCheckboxesWithoutValue(i)}),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(r){return r.filter(e=>e instanceof ss)}__warnOfCheckboxesWithoutValue(r){r.some(t=>{const{value:i}=t;return!t.hasAttribute("value")&&(!i||i==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(r){r.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(r.disabled=!0),r.checked?this.__addCheckboxToValue(r.value):this.value.includes(r.value)&&(r.checked=!0)}__unregisterCheckbox(r){r.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),r.checked&&this.__removeCheckboxFromValue(r.value)}_disabledChanged(r,e){super._disabledChanged(r,e),!(!r&&e===void 0)&&e!==r&&this.__checkboxes.forEach(t=>{t.disabled=r})}__addCheckboxToValue(r){this.value.includes(r)||(this.value=[...this.value,r])}__removeCheckboxFromValue(r){this.value.includes(r)&&(this.value=this.value.filter(e=>e!==r))}__onCheckboxCheckedChanged(r){const e=r.target;e.checked?this.__addCheckboxToValue(e.value):this.__removeCheckboxFromValue(e.value)}__valueChanged(r,e){r.length===0&&e===void 0||(this.toggleAttribute("has-value",r.length>0),this.__checkboxes.forEach(t=>{t.checked=r.includes(t.value)}),e!==void 0&&this.validate())}_shouldRemoveFocus(r){return!this.contains(r.relatedTarget)}_setFocused(r){super._setFocused(r),!r&&document.hasFocus()&&this.validate()}}Y(_l);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pl=A`
  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;F("vaadin-number-field",[qn,na,pl],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ml=n=>class extends ia(n){static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number"),this.__onWheel=this.__onWheel.bind(this)}get slotStyles(){const e=this.localName;return[`
          ${e} input[type="number"]::-webkit-outer-spin-button,
          ${e} input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          ${e} input[type="number"] {
            -moz-appearance: textfield;
          }

          ${e}[dir='rtl'] input[type="number"]::placeholder {
            direction: rtl;
          }

          ${e}[dir='rtl']:not([step-buttons-visible]) input[type="number"]::placeholder {
            text-align: left;
          }
        `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new xr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Sr(this.inputElement,this._labelController))}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("wheel",this.__onWheel)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("wheel",this.__onWheel)}__onWheel(e){this.hasAttribute("focused")&&e.preventDefault()}_onDecreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_onIncreaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}_onDecreaseButtonClick(){this._decreaseValue()}_onIncreaseButtonClick(){this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;const t=this.step||1;let i=parseFloat(this.value);this.value?i<this.min?(e=0,i=this.min):i>this.max&&(e=0,i=this.max):this.min===0&&e<0||this.max===0&&e>0||this.max===0&&this.min===0?(e=0,i=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?i=0:this.min>0?(i=this.min,this.max<0&&e<0&&(i=this.max),e=0):this.max<0&&(i=this.max,e<0?e=0:this._getIncrement(1,i-t)>this.max?i-=2*t:i-=t);const o=this._getIncrement(e,i);(!this.value||e===0||this._incrementIsInsideTheLimits(e,i))&&this._setValue(o)}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){let i=this.step||1,o=this.min||0;const s=Math.max(this._getMultiplier(t),this._getMultiplier(i),this._getMultiplier(o));i*=s,t=Math.round(t*s),o*=s;const a=(t-o)%i;return e>0?(t-a+i)/s:e<0?(t-(a||i))/s:t/s}_getDecimalCount(e){const t=String(e),i=t.indexOf(".");return i===-1?1:t.length-i-1}_getMultiplier(e){if(!isNaN(e))return 10**this._getDecimalCount(e)}_incrementIsInsideTheLimits(e,t){return e<0?this.min==null||this._getIncrement(e,t)>=this.min:e>0?this.max==null||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_isButtonEnabled(e){const t=e*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,i)}_stepChanged(e,t){t&&(t.step=e||"any")}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){e.key==="ArrowUp"?(e.preventDefault(),this._increaseValue()):e.key==="ArrowDown"&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0||t.validity.badInput}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gl=A`
  :host([readonly]) [part$='button'] {
    pointer-events: none;
  }

  [part='decrease-button']::before {
    content: '\\2212';
  }

  [part='increase-button']::before {
    content: '+';
  }

  [part='decrease-button'],
  [part='increase-button'] {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-number-field",[Kn,gl],{moduleId:"vaadin-number-field-styles"});class yl extends ml(ee(Ee(U))){static get is(){return"vaadin-number-field"}static get template(){return J`
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
          <div
            disabled$="[[!_isButtonEnabled(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_onDecreaseButtonClick"
            on-touchend="_onDecreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_isButtonEnabled(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_onIncreaseButtonClick"
            on-touchend="_onIncreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Be(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement)}}Y(yl);const bl=A`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;F("vaadin-date-picker-overlay",[Bs,bl],{moduleId:"lumo-date-picker-overlay"});F("vaadin-date-picker-year",A`
    :host([current]) [part='year-number'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:not([current])) [part='year-number'],
    [part='year-separator'] {
      opacity: var(--_lumo-date-picker-year-opacity, 0.7);
      transition: 0.2s opacity;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '\\2022';
    }
  `,{moduleId:"lumo-date-picker-year"});F("vaadin-date-picker-overlay-content",A`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    ::slotted([slot='months']) {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    ::slotted([slot='years']) {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    ::slotted([slot='years']:hover) {
      --_lumo-date-picker-year-opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO fix this in vaadin-date-picker that it adapts to the width of the year scroller */
    :host([desktop]) ::slotted([slot='months']) {
      right: auto;
    }

    /* Year scroller position indicator */
    ::slotted([slot='years'])::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    [part='toolbar'] ::slotted(vaadin-button) {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='toolbar'],
      ::slotted([slot='months']) {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      ::slotted([slot='years']) {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
        background-color: var(--lumo-shade-5pct);
      }

      :host([years-visible]) ::slotted([slot='months']) {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});F("vaadin-month-calendar",A`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part~='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part~='date'] {
      transition: color 0.1s;
    }

    [part~='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part~='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part~='date'][part~='today'] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part~='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part~='date'][part~='focused']::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part~='date'][part~='focused']::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part~='date']:not(:empty):not([part~='disabled']):not([part~='selected']):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part~='date'][part~='selected'] {
      color: var(--lumo-primary-contrast-color);
    }

    [part~='date'][part~='selected']::before {
      background-color: var(--lumo-primary-color);
    }

    [part~='date'][part~='disabled'] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part~='date']:hover:not([part~='selected'])::before,
      [part~='focused']:not([part~='selected'])::before {
        display: none;
      }

      [part~='date']:not(:empty):not([part~='disabled']):active::before {
        display: block;
      }

      [part~='date'][part~='selected']::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const fs=document.createElement("template");fs.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(fs.content);const vl=A`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;F("vaadin-date-picker",[qn,vl],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wl=A`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-date-picker-overlay",[Bo,wl],{moduleId:"vaadin-date-picker-overlay-styles"});class Cl extends Lo(Vo(Le(ee(U)))){static get is(){return"vaadin-date-picker-overlay"}static get template(){return J`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}Y(Cl);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function xl(n){let r=n.getDay();r===0&&(r=7);const e=4-r,t=new Date(n.getTime()+e*24*3600*1e3),i=new Date(0,0);i.setFullYear(t.getFullYear());const o=t.getTime()-i.getTime(),s=Math.round(o/(24*3600*1e3));return Math.floor(s/7+1)}function pe(n,r){return n instanceof Date&&r instanceof Date&&n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()}function Ke(n,r,e){return(!r||n>=r)&&(!e||n<=e)}function _s(n,r){return r.filter(e=>e!==void 0).reduce((e,t)=>{if(!t)return e;if(!e)return t;const i=Math.abs(n.getTime()-t.getTime()),o=Math.abs(e.getTime()-n.getTime());return i<o?t:e})}function ti(n){return{day:n.getDate(),month:n.getMonth(),year:n.getFullYear()}}function ps(n){const r=new Date,e=new Date(r);return e.setDate(1),e.setMonth(parseInt(n)+r.getMonth()),e}function Sl(n,r,e=0,t=1){if(r>99)throw new Error("The provided year cannot have more than 2 digits.");if(r<0)throw new Error("The provided year cannot be negative.");let i=r+Math.floor(n.getFullYear()/100)*100;return n<new Date(i-50,e,t)?i-=100:n>new Date(i+50,e,t)&&(i+=100),i}function ke(n){const r=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(n);if(!r)return;const e=new Date(0,0);return e.setFullYear(parseInt(r[1],10)),e.setMonth(parseInt(r[2],10)-1),e.setDate(parseInt(r[3],10)),e}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ms=document.createElement("template");ms.innerHTML=`
  <style>
    :host {
      display: block;
      overflow: hidden;
      height: 500px;
    }

    #scroller {
      position: relative;
      height: 100%;
      overflow: auto;
      outline: none;
      margin-right: -40px;
      -webkit-overflow-scrolling: touch;
      overflow-x: hidden;
    }

    #scroller.notouchscroll {
      -webkit-overflow-scrolling: auto;
    }

    #scroller::-webkit-scrollbar {
      display: none;
    }

    .buffer {
      position: absolute;
      width: var(--vaadin-infinite-scroller-buffer-width, 100%);
      box-sizing: border-box;
      padding-right: 40px;
      top: var(--vaadin-infinite-scroller-buffer-offset, 0);
      animation: fadein 0.2s;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  </style>

  <div id="scroller">
    <div class="buffer"></div>
    <div class="buffer"></div>
    <div id="fullHeight"></div>
  </div>
`;class gs extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(ms.content.cloneNode(!0)),this.bufferSize=20,this._initialScroll=5e5,this._initialIndex=0,this._activated=!1}get active(){return this._activated}set active(r){r&&!this._activated&&(this._createPool(),this._activated=!0)}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const r=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,r);const t=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(t)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(r){this._preventScrollEvent=!0,r>this._firstIndex&&r<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(r-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~r,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=r%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}connectedCallback(){this._ready||(this._ready=!0,this.$={},this.shadowRoot.querySelectorAll("[id]").forEach(r=>{this.$[r.id]=r}),this.$.scroller.addEventListener("scroll",()=>this._scroll()),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`,Xo&&(this.$.scroller.tabIndex=-1))}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(r,e){}_finishInit(){this._initDone||(this._buffers.forEach(r=>{[...r.children].forEach(e=>{this._ensureStampedInstance(e._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(r){const e=r?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const r=this.$.scroller.scrollTop;(r<this._bufferHeight||r>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,t=r>this._buffers[1].translateY+e,i=r<this._buffers[0].translateY+e;(t||i)&&(this._translateBuffer(i),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=N.debounce(this._debouncerScrollFinish,le.after(200),()=>{const o=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],o)&&!this._isVisible(this._buffers[1],o)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(r=>{r.style.transform=`translate3d(0, ${r.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=N.debounce(this._debouncerUpdateClones,le.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const r=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let t=0;t<this.bufferSize;t++){const i=document.createElement("div");i.style.height=`${this.itemHeight}px`,i.instance={};const o=`vaadin-infinite-scroller-item-content-${jn()}`,s=document.createElement("slot");s.setAttribute("name",o),s._itemWrapper=i,e.appendChild(s),i.setAttribute("slot",o),this.appendChild(i),this._isVisible(i,r)&&this._ensureStampedInstance(i)}}),requestAnimationFrame(()=>{this._finishInit()})}_ensureStampedInstance(r){if(r.firstElementChild)return;const e=r.instance;r.instance=this._createElement(),r.appendChild(r.instance),Object.keys(e).forEach(t=>{r.instance[t]=e[t]})}_updateClones(r){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=r?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((t,i)=>{if(!t.updated){const o=this._firstIndex+this.bufferSize*i;[...t.children].forEach((s,a)=>{const l=s._itemWrapper;(!r||this._isVisible(l,e))&&this._updateElement(l.instance,o+a)}),t.updated=!0}})}_isVisible(r,e){const t=r.getBoundingClientRect();return t.bottom>e.top&&t.top<e.bottom}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ys=document.createElement("template");ys.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  </style>
`;class Il extends gs{static get is(){return"vaadin-date-picker-month-scroller"}constructor(){super(),this.bufferSize=3,this.shadowRoot.appendChild(ys.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(r,e){r.month=ps(e)}}Y(Il);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bs=document.createElement("template");bs.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;class Ol extends gs{static get is(){return"vaadin-date-picker-year-scroller"}constructor(){super(),this.bufferSize=12,this.shadowRoot.appendChild(bs.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(r,e){r.year=this._yearAfterXYears(e)}_yearAfterXYears(r){const e=new Date,t=new Date(e);return t.setFullYear(parseInt(r)+e.getFullYear()),t.getFullYear()}}Y(Ol);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pl extends ee(U){static get is(){return"vaadin-date-picker-year"}static get template(){return J`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>
      <div part="year-number">[[year]]</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}static get properties(){return{year:{type:String},selectedDate:{type:Object}}}static get observers(){return["__updateSelected(year, selectedDate)"]}__updateSelected(r,e){this.toggleAttribute("selected",e&&e.getFullYear()===r),this.toggleAttribute("current",r===new Date().getFullYear())}}Y(Pl);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Tl=ca(U);class Ci extends Tl{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!di,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let r=0;r<this.__instances.length;r++)this.__detachInstance(r);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),da()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let r=ae(ae(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,r);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const r=this;let e=this.template=r._templateInfo?r:this.querySelector("template");if(!e){let i=new MutationObserver(()=>{if(this.querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return i.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=ha(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(i,o){let s=this.__instances;for(let a=0,l;a<s.length&&(l=s[a]);a++)l.forwardHostProp(i,o)},notifyInstanceProp:function(i,o,s){if(oa(this.as,o)){let a=i[this.itemsIndexAs];o==this.as&&(this.items[a]=s);let l=sa(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,o);this.notifyPath(l,s)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(r){if(typeof r=="string"){let e=r,t=this.__getMethodHost();return function(){return t[e].apply(t,arguments)}}return r}__sortChanged(r){this.__sortFn=this.__functionFromPropertyValue(r),this.items&&this.__debounceRender(this.__render)}__filterChanged(r){this.__filterFn=this.__functionFromPropertyValue(r),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(r){return Math.ceil(1e3/r)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(r){if(this.__sortFn||this.__filterFn){if(!r)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let t=0;t<e.length;t++)r.indexOf(e[t])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(r){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(r.path,r.value)||(r.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(r,e=0){this.__renderDebouncer=Re.debounce(this.__renderDebouncer,e>0?Nt.after(e):Ko,r.bind(this)),fa(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Zo()}__render(){if(!this.__ensureTemplatized())return;let r=this.items||[];const e=this.__sortAndFilterItems(r),t=this.__calculateLimit(e.length);this.__updateInstances(r,t,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!di||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(r){let e=new Array(r.length);for(let t=0;t<r.length;t++)e[t]=t;return this.__filterFn&&(e=e.filter((t,i,o)=>this.__filterFn(r[t],i,o))),this.__sortFn&&e.sort((t,i)=>this.__sortFn(r[t],r[i])),e}__calculateLimit(r){let e=r;const t=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(r,this.initialCount),i=Math.max(e-t,0),this.__chunkCount=i||1):(i=Math.min(Math.max(r-t,0),this.__chunkCount),e=Math.min(t+i,r)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=e<r,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const r=performance.now()-this.__renderStartTime,e=this._targetFrameTime/r;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(r,e,t){const i=this.__itemsIdxToInstIdx={};let o;for(o=0;o<e;o++){let s=this.__instances[o],a=t[o],l=r[a];i[a]=o,s?(s._setPendingProperty(this.as,l),s._setPendingProperty(this.indexAs,o),s._setPendingProperty(this.itemsIndexAs,a),s._flushProperties()):this.__insertInstance(l,o,a)}for(let s=this.__instances.length-1;s>=o;s--)this.__detachAndRemoveInstance(s)}__detachInstance(r){let e=this.__instances[r];const t=ae(e.root);for(let i=0;i<e.children.length;i++){let o=e.children[i];t.appendChild(o)}return e}__attachInstance(r,e){let t=this.__instances[r];e.insertBefore(t.root,this)}__detachAndRemoveInstance(r){this.__detachInstance(r),this.__instances.splice(r,1)}__stampInstance(r,e,t){let i={};return i[this.as]=r,i[this.indexAs]=e,i[this.itemsIndexAs]=t,new this.__ctor(i)}__insertInstance(r,e,t){const i=this.__stampInstance(r,e,t);let o=this.__instances[e+1],s=o?o.children[0]:this;return ae(ae(this).parentNode).insertBefore(i.root,s),this.__instances[e]=i,i}_showHideChildren(r){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(r)}__handleItemPath(r,e){let t=r.slice(6),i=t.indexOf("."),o=i<0?t:t.substring(0,i);if(o==parseInt(o,10)){let s=i<0?"":t.substring(i+1);this.__handleObservedPaths(s);let a=this.__itemsIdxToInstIdx[o],l=this.__instances[a];if(l){let d=this.as+(s?"."+s:"");l._setPendingPropertyOrPath(d,e,!1,!0),l._flushProperties()}return!0}}itemForElement(r){let e=this.modelForElement(r);return e&&e[this.as]}indexForElement(r){let e=this.modelForElement(r);return e&&e[this.indexAs]}modelForElement(r){return _a(this.template,r)}}customElements.define(Ci.is,Ci);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const El=n=>class extends Gn(n){static get properties(){return{month:{type:Object,value:new Date,sync:!0},selectedDate:{type:Object,notify:!0,sync:!0},focusedDate:{type:Object},showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:{type:Boolean},minDate:{type:Date,value:null,sync:!0},maxDate:{type:Date,value:null,sync:!0},disabled:{type:Boolean,reflectToAttribute:!0},_days:{type:Array},_weeks:{type:Array},_notTapping:{type:Boolean}}}static get observers(){return["__focusedDateChanged(focusedDate, _days)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(e=>pe(e.date,this.focusedDate))}ready(){super.ready(),se(this.$.monthGrid,"tap",this._handleTap.bind(this))}_isDisabled(e,t,i){const o=new Date(0,0);o.setFullYear(e.getFullYear()),o.setMonth(e.getMonth()),o.setDate(1);const s=new Date(0,0);return s.setFullYear(e.getFullYear()),s.setMonth(e.getMonth()+1),s.setDate(0),t&&i&&t.getMonth()===i.getMonth()&&t.getMonth()===e.getMonth()&&i.getDate()-t.getDate()>=0?!1:!Ke(o,t,i)&&!Ke(s,t,i)}_getTitle(e,t){if(!(e===void 0||t===void 0))return t.formatTitle(t.monthNames[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(!(e===void 0||t===void 0))return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t){if(e===void 0||t===void 0)return[];const{weekdays:i,weekdaysShort:o,firstDayOfWeek:s}=e,a=this._applyFirstDayOfWeek(o,s);return this._applyFirstDayOfWeek(i,s).map((d,_)=>({weekDay:d,weekDayShort:a[_]}))}__focusedDateChanged(e,t){Array.isArray(t)&&t.some(i=>pe(i,e))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}_showWeekSeparator(e,t){return e&&t&&t.firstDayOfWeek===1}_isToday(e){return pe(new Date,e)}_getDays(e,t){if(e===void 0||t===void 0)return[];const i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==t.firstDayOfWeek;)this._dateAdd(i,-1);const o=[],s=i.getMonth(),a=e.getMonth();for(;i.getMonth()===a||i.getMonth()===s;)o.push(i.getMonth()===a?new Date(i.getTime()):null),this._dateAdd(i,1);return o}_getWeeks(e){return e.reduce((t,i,o)=>(o%7===0&&t.push([]),t[t.length-1].push(i),t),[])}_handleTap(e){!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")&&(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__getWeekNumber(e){const t=e.reduce((i,o)=>!i&&o?o:i);return xl(t)}__getDayAriaLabel(e){if(!e)return"";let t=`${this._getDate(e)} ${this.i18n.monthNames[e.getMonth()]} ${e.getFullYear()}, ${this.i18n.weekdays[e.getDay()]}`;return this._isToday(e)&&(t+=`, ${this.i18n.today}`),t}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dl=A`
  :host {
    display: block;
  }

  #monthGrid {
    width: 100%;
    border-collapse: collapse;
  }

  #days-container tr,
  #weekdays-container tr {
    display: flex;
  }

  [part~='date'] {
    outline: none;
  }

  [part~='disabled'] {
    pointer-events: none;
  }

  [part='week-number'][hidden],
  [part='weekday'][hidden] {
    display: none;
  }

  [part='weekday'],
  [part~='date'] {
    width: calc(100% / 7);
    padding: 0;
    font-weight: normal;
  }

  [part='weekday']:empty,
  [part='week-number'] {
    width: 12.5%;
    flex-shrink: 0;
    padding: 0;
  }

  :host([week-numbers]) [part='weekday']:not(:empty),
  :host([week-numbers]) [part~='date'] {
    width: 12.5%;
  }

  @media (forced-colors: active) {
    [part~='date'][part~='focused'] {
      outline: 1px solid;
    }

    [part~='date'][part~='selected'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-month-calendar",Dl,{moduleId:"vaadin-month-calendar-styles"});class Al extends El(ee(U)){static get template(){return J`
      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th part="weekday" aria-hidden="true" hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n)]]"></th>
            <template is="dom-repeat" items="[[_getWeekDayNames(i18n, showWeekNumbers)]]">
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td part="week-number" aria-hidden="true" hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n)]]">
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part$="[[__getDatePart(item, focusedDate, selectedDate, minDate, maxDate)]]"
                  date="[[item]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{_days:{type:Array,computed:"_getDays(month, i18n, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n)"]}_showWeekNumbersChanged(r,e){r&&e&&e.firstDayOfWeek===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}__getDatePart(r,e,t,i,o){const s=["date"];return this.__isDayDisabled(r,i,o)&&s.push("disabled"),this.__isDayFocused(r,e)&&s.push("focused"),this.__isDaySelected(r,t)&&s.push("selected"),this._isToday(r)&&s.push("today"),s.join(" ")}__isDayFocused(r,e){return pe(r,e)}__isDaySelected(r,e){return pe(r,e)}__getDayAriaSelected(r,e){if(this.__isDaySelected(r,e))return"true"}__isDayDisabled(r,e,t){return!Ke(r,e,t)}__getDayAriaDisabled(r,e,t){if(!(r===void 0||e===void 0||t===void 0)&&this.__isDayDisabled(r,e,t))return"true"}__getDayTabindex(r,e){return this.__isDayFocused(r,e)?"0":"-1"}}Y(Al);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kl=n=>class extends n{static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Object,value:null,sync:!0},focusedDate:{type:Object,notify:!0,observer:"_focusedDateChanged",sync:!0},_focusedMonthDate:Number,initialPosition:{type:Object,observer:"_initialPositionChanged"},_originDate:{type:Object,value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Object,sync:!0},maxDate:{type:Object,sync:!0},label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(e=>e.focusableDateElement).find(Boolean)}_addListeners(){aa(this.$.scrollers,"pan-y"),se(this.$.scrollers,"track",this._track.bind(this)),se(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),se(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),se(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this))}_initControllers(){this.addController(new No(this._desktopMediaQuery,e=>{this._desktopMode=e})),this.addController(new Je(this,"today-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",t=>this.__onTodayButtonKeyDown(t)),se(e,"tap",this._onTodayTap.bind(this)),this._todayButton=e}})),this.addController(new Je(this,"cancel-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",t=>this.__onCancelButtonKeyDown(t)),se(e,"tap",this._cancel.bind(this)),this._cancelButton=e}})),this.__initMonthScroller(),this.__initYearScroller()}reset(){this._closeYearScroller(),this._toggleAnimateClass(!0)}focusCancel(){this._cancelButton.focus()}scrollToDate(e,t){const i=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(e):0;this._scrollToPosition(this._differenceInMonths(e,this._originDate)+i,t),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new Je(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:e=>{e.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),e.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),e.addEventListener("keydown",t=>{this.__onMonthCalendarKeyDown(t)}),e.addEventListener("init-done",()=>{const t=[...this.querySelectorAll("vaadin-month-calendar")];t.forEach(i=>{i.addEventListener("selected-date-changed",o=>{this.selectedDate=o.detail.value})}),this.calendars=t}),this._monthScroller=e}}))}__initYearScroller(){this.addController(new Je(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:e=>{e.setAttribute("aria-hidden","true"),se(e,"tap",t=>{this._onYearTap(t)}),e.addEventListener("custom-scroll",()=>{this._onYearScroll()}),e.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),e.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=e}}))}__updateCancelButton(e,t){e&&(e.textContent=t&&t.cancel)}__updateTodayButton(e,t,i,o){e&&(e.textContent=t&&t.today,e.disabled=!this._isTodayAllowed(i,o))}__updateCalendars(e,t,i,o,s,a,l,d,_){e&&e.length&&e.forEach(u=>{u.i18n=t,u.minDate=i,u.maxDate=o,u.focusedDate=a,u.selectedDate=s,u.showWeekNumbers=l,u.ignoreTaps=d,_?u.setAttribute("theme",_):u.removeAttribute("theme")})}__updateYears(e,t,i){e&&e.length&&e.forEach(o=>{o.selectedDate=t,i?o.setAttribute("theme",i):o.removeAttribute("theme")})}_selectDate(e){this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0}))}_desktopModeChanged(e){this.toggleAttribute("desktop",e)}_focusedDateChanged(e){this.revealDate(e)}revealDate(e,t=!0){if(!e)return;const i=this._differenceInMonths(e,this._originDate);if(this.__useSubMonthScrolling){const d=this._calculateWeekScrollOffset(e);this._scrollToPosition(i+d,t);return}const o=this._monthScroller.position>i,a=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,l=this._monthScroller.position+a-1<i;o?this._scrollToPosition(i,t):l&&this._scrollToPosition(i-a+1,t)}_calculateWeekScrollOffset(e){const t=new Date(0,0);t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(1);let i=0;for(;t.getDate()<e.getDate();)t.setDate(t.getDate()+1),t.getDay()===this.i18n.firstDayOfWeek&&(i+=1);return i/6}_initialPositionChanged(e){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(e)}_repositionYearScroller(){const e=this._monthScroller.position;this._visibleMonthIndex=Math.floor(e),this._yearScroller.position=(e+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=N.debounce(this._debouncer,le.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(e,t,i){return e&&t&&typeof t.formatDate=="function"?t.formatDate(ti(e)):i}_onTodayTap(){const e=new Date;Math.abs(this._monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){const i=(e.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+i*12,!0)}}_scrollToPosition(e,t){if(this._targetPosition!==void 0){this._targetPosition=e;return}if(!t){this._monthScroller.position=e,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=e;let i;this._revealPromise=new Promise(d=>{i=d});const o=(d,_,u,p)=>(d/=p/2,d<1?u/2*d*d+_:(d-=1,-u/2*(d*(d-2)-1)+_));let s=0;const a=this._monthScroller.position,l=d=>{s||(s=d);const _=d-s;if(_<this.scrollDuration){const u=o(_,a,this._targetPosition-a,this.scrollDuration);this._monthScroller.position=u,window.requestAnimationFrame(l)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:a}})),this._monthScroller.position=this._targetPosition,this._targetPosition=void 0,i(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(l)}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)return;Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this._monthScroller.style.transform=`translateX(${e-this._yearScrollerWidth}px)`,this._yearScroller.style.transform=`translateX(${e}px)`)}_yearAfterXMonths(e){return ps(e).getFullYear()}_differenceInMonths(e,t){return(e.getFullYear()-t.getFullYear())*12-t.getMonth()+e.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}__toggleDate(e){pe(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let t=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),t=!0;break;case"ArrowUp":this._moveFocusByDays(-7),t=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),t=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),t=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),t=!0;break;case" ":this.__toggleDate(this.focusedDate),t=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),t=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),t=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),t=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),t=!0;break;case"Tab":this._onTabKeyDown(e,"calendar");break}t&&(e.preventDefault(),e.stopPropagation())}_onTabKeyDown(e,t){switch(e.stopPropagation(),t){case"calendar":e.shiftKey&&(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":e.shiftKey&&(e.preventDefault(),this.focusDateElement());break;case"cancel":e.shiftKey||(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"today")}__onCancelButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const t=this.focusableDateElement;t&&pe(t.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,t.focus())}}async focusDate(e,t){const i=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=i,t||(this._focusedMonthDate=i.getDate()),await this.focusDateElement(!1)}async focusDateElement(e=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(t=>{la(this,()=>{Zo(),t()})}),e&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(_s(e,[this.minDate,this.maxDate]))}_focusAllowedDate(e,t,i){this._dateAllowed(e)?this.focusDate(e,i):this._dateAllowed(this.focusedDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(e,t){const i=new Date(0,0);return i.setFullYear(this.focusedDate.getFullYear()),i.setMonth(this.focusedDate.getMonth()+e),t&&i.setDate(this.focusedDate.getDate()+t),i}_moveFocusByDays(e){const t=this._getDateDiff(0,e);this._focusAllowedDate(t,e,!1)}_moveFocusByMonths(e){const t=this._getDateDiff(e),i=t.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),t.setDate(this._focusedMonthDate),t.getMonth()!==i&&t.setDate(0),this._focusAllowedDate(t,e,!0)}_moveFocusInsideMonth(e,t){const i=new Date(0,0);i.setFullYear(e.getFullYear()),t==="minDate"?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i)?this.focusDate(i):this._dateAllowed(e)?this.focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t=this.minDate,i=this.maxDate){return(!t||e>=t)&&(!i||e<=i)}_isTodayAllowed(e,t){const i=new Date,o=new Date(0,0);return o.setFullYear(i.getFullYear()),o.setMonth(i.getMonth()),o.setDate(i.getDate()),this._dateAllowed(o,e,t)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rl=A`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    outline: none;
  }

  [part='overlay-header'] {
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    align-items: center;
  }

  :host(:not([fullscreen])) [part='overlay-header'] {
    display: none;
  }

  [part='label'] {
    flex-grow: 1;
  }

  [hidden] {
    display: none !important;
  }

  [part='years-toggle-button'] {
    display: flex;
  }

  #scrollers {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  :host([desktop]) ::slotted([slot='months']) {
    right: 50px;
    transform: none !important;
  }

  :host([desktop]) ::slotted([slot='years']) {
    transform: none !important;
  }

  :host(.animate) ::slotted([slot='months']),
  :host(.animate) ::slotted([slot='years']) {
    transition: all 200ms;
  }

  [part='toolbar'] {
    display: flex;
    justify-content: space-between;
    z-index: 2;
    flex-shrink: 0;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-date-picker-overlay-content",Rl,{moduleId:"vaadin-date-picker-overlay-content-styles"});class $l extends kl(Cr(ee(Le(U)))){static get template(){return J`
      <div part="overlay-header" on-touchend="_preventDefault" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers">
        <slot name="months"></slot>
        <slot name="years"></slot>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <slot name="cancel-button"></slot>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}ready(){super.ready(),this.setAttribute("role","dialog"),this._addListeners(),this._initControllers()}}Y($l);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fl=n=>class extends Yo(Cr(Qo(Wo(Uo(n))))){static get properties(){return{_selectedDate:{type:Object,sync:!0},_focusedDate:{type:Object,sync:!0},value:{type:String,notify:!0,value:"",sync:!0},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged",sync:!0},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean,value:!1,sync:!0},_fullscreen:{type:Boolean,value:!1,sync:!0},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,sync:!0,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(e){const t=String(e.year).replace(/\d+/u,i=>"0000".substr(i.length)+i);return[e.month+1,e.day,t].join("/")},parseDate(e){const t=e.split("/"),i=new Date;let o,s=i.getMonth(),a=i.getFullYear();if(t.length===3){if(s=parseInt(t[0])-1,o=parseInt(t[1]),a=parseInt(t[2]),t[2].length<3&&a>=0){const l=this.referenceDate?ke(this.referenceDate):new Date;a=Sl(l,a,s,o)}}else t.length===2?(s=parseInt(t[0])-1,o=parseInt(t[1])):t.length===1&&(o=parseInt(t[0]));if(o!==void 0)return{day:o,month:s,year:a}},formatTitle:(e,t)=>`${e} ${t}`})},min:{type:String,sync:!0},max:{type:String,sync:!0},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)",sync:!0},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)",sync:!0},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:Ar},_focusOverlayOnOpen:Boolean,_overlayContent:{type:Object,sync:!0},_hasInputValue:{type:Boolean}}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n)","_focusedDateChanged(_focusedDate, i18n)","__updateOverlayContent(_overlayContent, i18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this),this._boundOverlayRenderer=this._overlayRenderer.bind(this)}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e,this._hasInputValue=!1}get clearElement(){return null}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){super._onBlur(e),this.opened||(this._selectParsedOrFocusedDate(),document.hasFocus()&&this.validate())}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new No(this._fullscreenMediaQuery,t=>{this._fullscreen=t})),this.addController(new rs(this));const e=this.$.overlay;this._overlayElement=e,e.renderer=this._boundOverlayRenderer,this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}_overlayRenderer(e){if(e.firstChild)return;const t=document.createElement("vaadin-date-picker-overlay-content");e.appendChild(t),this._overlayContent=t,t.addEventListener("close",()=>{this._close()}),t.addEventListener("focus-input",this._focusAndSelect.bind(this)),t.addEventListener("date-tap",i=>{this.__userConfirmedDate=!0,this._selectDate(i.detail.date),this._close()}),t.addEventListener("date-selected",i=>{this.__userConfirmedDate=!!i.detail.date,this._selectDate(i.detail.date)}),t.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),t.addEventListener("focused-date-changed",i=>{this._focusedDate=i.detail.value})}__parseDate(e){if(!this.i18n.parseDate)return;let t=this.i18n.parseDate(e);if(t&&(t=ke(`${t.year}-${t.month+1}-${t.day}`)),t&&!isNaN(t.getTime()))return t}__formatDate(e){if(this.i18n.formatDate)return this.i18n.formatDate(ti(e))}checkValidity(){const e=this._inputElementValue,t=!e||!!this._selectedDate&&e===this.__formatDate(this._selectedDate),i=!this._selectedDate||Ke(this._selectedDate,this._minDate,this._maxDate);let o=!0;return this.inputElement&&(this.inputElement.checkValidity?o=this.inputElement.checkValidity():this.inputElement.validate&&(o=this.inputElement.validate())),t&&i&&o}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldRemoveFocus(e){return!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}__dispatchChange(){this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_selectDate(e){const t=this.value;this._selectedDate=e,t!==this.value&&this.__dispatchChange()}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(e,t,i,o,s,a){return!e||t&&(!a||s)||i&&s||!o.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const t=(_,u="00")=>(u+_).substr((u+_).length-u.length);let i="",o="0000",s=e.getFullYear();s<0?(s=-s,i="-",o="000000"):e.getFullYear()>=1e4&&(i="+",o="000000");const a=i+t(s,o),l=t(e.getMonth()+1),d=t(e.getDate());return[a,l,d].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,t){e===void 0||t===void 0||(this.__keepInputValue||this._applyInputValue(e),this.value=this._formatISO(e),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1)}_focusedDateChanged(e,t){e===void 0||t===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}_valueChanged(e,t){const i=ke(e);if(e&&!i){this.value=t;return}e?pe(this._selectedDate,i)||(this._selectedDate=i,t!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}__updateOverlayContent(e,t,i,o,s,a,l,d){e&&(e.i18n=t,e.label=i,e.minDate=o,e.maxDate=s,e.focusedDate=a,e.selectedDate=l,e.showWeekNumbers=d)}__updateOverlayContentTheme(e,t){e&&(t?e.setAttribute("theme",t):e.removeAttribute("theme"))}__updateOverlayContentFullScreen(e,t){e&&e.toggleAttribute("fullscreen",t)}_onOverlayEscapePress(){this._focusedDate=this._selectedDate,this._close()}_onOverlayOpened(){const e=this._overlayContent;e.reset();const t=this._getInitialPosition();e.initialPosition=t;const i=e.focusedDate||t;e.scrollToDate(i),this._ignoreFocusedDateChange=!0,e.focusedDate=i,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(e.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus();const o=this._nativeInput;this._noInput&&o&&(o.blur(),this._overlayContent.focusDateElement());const s=this._noInput?e:[o,e];this.__showOthers=ua(s)}_getInitialPosition(){const e=ke(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;return e||Ke(t,this._minDate,this._maxDate)?t:_s(t,[this._minDate,this._maxDate])}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputElementValue||"",t=this.__parseDate(e);t?this._selectDate(t):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null),window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),!this.value&&!this._keyboardActive&&this.validate()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(e){this._inputElementValue=e?this.__formatDate(e):""}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_onChange(e){e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this._inputElementValue="",this.value="",this.__dispatchChange()}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&[9].indexOf(e.keyCode)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){const t=this.value;this.opened?this.close():this._selectParsedOrFocusedDate(),t===this.value&&this.validate()}_onEscape(e){if(!this.opened){if(this.clearButtonVisible&&this.value){e.stopPropagation(),this._onClearButtonClick(e);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){if(!this.opened&&this._inputElementValue&&!this.autoOpenDisabled&&this.open(),this._inputElementValue){const e=this.__parseDate(this._inputElementValue);e&&(this._ignoreFocusedDateChange=!0,pe(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}__computeMinOrMaxDate(e){return ke(e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ml=A`
  :host([opened]) {
    pointer-events: auto;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-date-picker",[Kn,Ml],{moduleId:"vaadin-date-picker-styles"});class zl extends Fl(Go(ee(Ee(U)))){static get is(){return"vaadin-date-picker"}static get template(){return J`
      <div class="vaadin-date-picker-container">
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
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new xr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Sr(this.inputElement,this._labelController)),this._tooltipController=new Be(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(e=>!e.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault()),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(r){r.detail.sourceEvent&&r.detail.sourceEvent.composedPath().includes(this)&&r.preventDefault()}_toggle(r){r.stopPropagation(),this.$.overlay.opened?this.close():this.open()}_openedChanged(r){super._openedChanged(r),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}Y(zl);function q(n,r){if(r.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+r.length+" present")}function et(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?et=function(e){return typeof e}:et=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(n)}function Nl(n){return q(1,arguments),n instanceof Date||et(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function tt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tt=function(e){return typeof e}:tt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tt(n)}function Z(n){q(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||tt(n)==="object"&&r==="[object Date]"?new Date(n.getTime()):typeof n=="number"||r==="[object Number]"?new Date(n):((typeof n=="string"||r==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function $r(n){if(q(1,arguments),!Nl(n)&&typeof n!="number")return!1;var r=Z(n);return!isNaN(Number(r))}function re(n){if(n===null||n===!0||n===!1)return NaN;var r=Number(n);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}function Ll(n,r){q(2,arguments);var e=Z(n).getTime(),t=re(r);return new Date(e+t)}function vs(n,r){q(2,arguments);var e=re(r);return Ll(n,-e)}var Bl=864e5;function Vl(n){q(1,arguments);var r=Z(n),e=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var t=r.getTime(),i=e-t;return Math.floor(i/Bl)+1}function Ne(n){q(1,arguments);var r=1,e=Z(n),t=e.getUTCDay(),i=(t<r?7:0)+t-r;return e.setUTCDate(e.getUTCDate()-i),e.setUTCHours(0,0,0,0),e}function ws(n){q(1,arguments);var r=Z(n),e=r.getUTCFullYear(),t=new Date(0);t.setUTCFullYear(e+1,0,4),t.setUTCHours(0,0,0,0);var i=Ne(t),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var s=Ne(o);return r.getTime()>=i.getTime()?e+1:r.getTime()>=s.getTime()?e:e-1}function Hl(n){q(1,arguments);var r=ws(n),e=new Date(0);e.setUTCFullYear(r,0,4),e.setUTCHours(0,0,0,0);var t=Ne(e);return t}var Wl=6048e5;function Cs(n){q(1,arguments);var r=Z(n),e=Ne(r).getTime()-Hl(r).getTime();return Math.round(e/Wl)+1}var Yl={};function Ve(){return Yl}function Te(n,r){var e,t,i,o,s,a,l,d;q(1,arguments);var _=Ve(),u=re((e=(t=(i=(o=r==null?void 0:r.weekStartsOn)!==null&&o!==void 0?o:r==null||(s=r.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:_.weekStartsOn)!==null&&t!==void 0?t:(l=_.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=Z(n),g=p.getUTCDay(),v=(g<u?7:0)+g-u;return p.setUTCDate(p.getUTCDate()-v),p.setUTCHours(0,0,0,0),p}function ri(n,r){var e,t,i,o,s,a,l,d;q(1,arguments);var _=Z(n),u=_.getUTCFullYear(),p=Ve(),g=re((e=(t=(i=(o=r==null?void 0:r.firstWeekContainsDate)!==null&&o!==void 0?o:r==null||(s=r.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:p.firstWeekContainsDate)!==null&&t!==void 0?t:(l=p.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(u+1,0,g),v.setUTCHours(0,0,0,0);var w=Te(v,r),b=new Date(0);b.setUTCFullYear(u,0,g),b.setUTCHours(0,0,0,0);var O=Te(b,r);return _.getTime()>=w.getTime()?u+1:_.getTime()>=O.getTime()?u:u-1}function Ul(n,r){var e,t,i,o,s,a,l,d;q(1,arguments);var _=Ve(),u=re((e=(t=(i=(o=r==null?void 0:r.firstWeekContainsDate)!==null&&o!==void 0?o:r==null||(s=r.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:_.firstWeekContainsDate)!==null&&t!==void 0?t:(l=_.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),p=ri(n,r),g=new Date(0);g.setUTCFullYear(p,0,u),g.setUTCHours(0,0,0,0);var v=Te(g,r);return v}var ql=6048e5;function xs(n,r){q(1,arguments);var e=Z(n),t=Te(e,r).getTime()-Ul(e,r).getTime();return Math.round(t/ql)+1}function T(n,r){for(var e=n<0?"-":"",t=Math.abs(n).toString();t.length<r;)t="0"+t;return e+t}var jl={y:function(r,e){var t=r.getUTCFullYear(),i=t>0?t:1-t;return T(e==="yy"?i%100:i,e.length)},M:function(r,e){var t=r.getUTCMonth();return e==="M"?String(t+1):T(t+1,2)},d:function(r,e){return T(r.getUTCDate(),e.length)},a:function(r,e){var t=r.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(r,e){return T(r.getUTCHours()%12||12,e.length)},H:function(r,e){return T(r.getUTCHours(),e.length)},m:function(r,e){return T(r.getUTCMinutes(),e.length)},s:function(r,e){return T(r.getUTCSeconds(),e.length)},S:function(r,e){var t=e.length,i=r.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,t-3));return T(o,e.length)}};const be=jl;var Ae={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Gl={G:function(r,e,t){var i=r.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){var i=r.getUTCFullYear(),o=i>0?i:1-i;return t.ordinalNumber(o,{unit:"year"})}return be.y(r,e)},Y:function(r,e,t,i){var o=ri(r,i),s=o>0?o:1-o;if(e==="YY"){var a=s%100;return T(a,2)}return e==="Yo"?t.ordinalNumber(s,{unit:"year"}):T(s,e.length)},R:function(r,e){var t=ws(r);return T(t,e.length)},u:function(r,e){var t=r.getUTCFullYear();return T(t,e.length)},Q:function(r,e,t){var i=Math.ceil((r.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return T(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){var i=Math.ceil((r.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return T(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){var i=r.getUTCMonth();switch(e){case"M":case"MM":return be.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){var i=r.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return T(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){var o=xs(r,i);return e==="wo"?t.ordinalNumber(o,{unit:"week"}):T(o,e.length)},I:function(r,e,t){var i=Cs(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):T(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getUTCDate(),{unit:"date"}):be.d(r,e)},D:function(r,e,t){var i=Vl(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):T(i,e.length)},E:function(r,e,t){var i=r.getUTCDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){var o=r.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return T(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(o,{width:"short",context:"formatting"});case"eeee":default:return t.day(o,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){var o=r.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return T(s,e.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(o,{width:"narrow",context:"standalone"});case"cccccc":return t.day(o,{width:"short",context:"standalone"});case"cccc":default:return t.day(o,{width:"wide",context:"standalone"})}},i:function(r,e,t){var i=r.getUTCDay(),o=i===0?7:i;switch(e){case"i":return String(o);case"ii":return T(o,e.length);case"io":return t.ordinalNumber(o,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){var i=r.getUTCHours(),o=i/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(r,e,t){var i=r.getUTCHours(),o;switch(i===12?o=Ae.noon:i===0?o=Ae.midnight:o=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(r,e,t){var i=r.getUTCHours(),o;switch(i>=17?o=Ae.evening:i>=12?o=Ae.afternoon:i>=4?o=Ae.morning:o=Ae.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){var i=r.getUTCHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return be.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getUTCHours(),{unit:"hour"}):be.H(r,e)},K:function(r,e,t){var i=r.getUTCHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):T(i,e.length)},k:function(r,e,t){var i=r.getUTCHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):T(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getUTCMinutes(),{unit:"minute"}):be.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getUTCSeconds(),{unit:"second"}):be.s(r,e)},S:function(r,e){return be.S(r,e)},X:function(r,e,t,i){var o=i._originalDate||r,s=o.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return Si(s);case"XXXX":case"XX":return Se(s);case"XXXXX":case"XXX":default:return Se(s,":")}},x:function(r,e,t,i){var o=i._originalDate||r,s=o.getTimezoneOffset();switch(e){case"x":return Si(s);case"xxxx":case"xx":return Se(s);case"xxxxx":case"xxx":default:return Se(s,":")}},O:function(r,e,t,i){var o=i._originalDate||r,s=o.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+xi(s,":");case"OOOO":default:return"GMT"+Se(s,":")}},z:function(r,e,t,i){var o=i._originalDate||r,s=o.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+xi(s,":");case"zzzz":default:return"GMT"+Se(s,":")}},t:function(r,e,t,i){var o=i._originalDate||r,s=Math.floor(o.getTime()/1e3);return T(s,e.length)},T:function(r,e,t,i){var o=i._originalDate||r,s=o.getTime();return T(s,e.length)}};function xi(n,r){var e=n>0?"-":"+",t=Math.abs(n),i=Math.floor(t/60),o=t%60;if(o===0)return e+String(i);var s=r||"";return e+String(i)+s+T(o,2)}function Si(n,r){if(n%60===0){var e=n>0?"-":"+";return e+T(Math.abs(n)/60,2)}return Se(n,r)}function Se(n,r){var e=r||"",t=n>0?"-":"+",i=Math.abs(n),o=T(Math.floor(i/60),2),s=T(i%60,2);return t+o+e+s}const Ql=Gl;var Ii=function(r,e){switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ss=function(r,e){switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Kl=function(r,e){var t=r.match(/(P+)(p+)?/)||[],i=t[1],o=t[2];if(!o)return Ii(r,e);var s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Ii(i,e)).replace("{{time}}",Ss(o,e))},Xl={p:Ss,P:Kl};const Fr=Xl;function Is(n){var r=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return r.setUTCFullYear(n.getFullYear()),n.getTime()-r.getTime()}var Zl=["D","DD"],Jl=["YY","YYYY"];function Os(n){return Zl.indexOf(n)!==-1}function Ps(n){return Jl.indexOf(n)!==-1}function Vt(n,r,e){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(r,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(r,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(r,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var eu={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},tu=function(r,e,t){var i,o=eu[r];return typeof o=="string"?i=o:e===1?i=o.one:i=o.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};const ru=tu;function Tr(n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.width?String(r.width):n.defaultWidth,t=n.formats[e]||n.formats[n.defaultWidth];return t}}var nu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},iu={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ou={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},su={date:Tr({formats:nu,defaultWidth:"full"}),time:Tr({formats:iu,defaultWidth:"full"}),dateTime:Tr({formats:ou,defaultWidth:"full"})};const au=su;var lu={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},uu=function(r,e,t,i){return lu[r]};const cu=uu;function Ye(n){return function(r,e){var t=e!=null&&e.context?String(e.context):"standalone",i;if(t==="formatting"&&n.formattingValues){var o=n.defaultFormattingWidth||n.defaultWidth,s=e!=null&&e.width?String(e.width):o;i=n.formattingValues[s]||n.formattingValues[o]}else{var a=n.defaultWidth,l=e!=null&&e.width?String(e.width):n.defaultWidth;i=n.values[l]||n.values[a]}var d=n.argumentCallback?n.argumentCallback(r):r;return i[d]}}var du={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},hu={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},fu={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},_u={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},pu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gu=function(r,e){var t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},yu={ordinalNumber:gu,era:Ye({values:du,defaultWidth:"wide"}),quarter:Ye({values:hu,defaultWidth:"wide",argumentCallback:function(r){return r-1}}),month:Ye({values:fu,defaultWidth:"wide"}),day:Ye({values:_u,defaultWidth:"wide"}),dayPeriod:Ye({values:pu,defaultWidth:"wide",formattingValues:mu,defaultFormattingWidth:"wide"})};const bu=yu;function Ue(n){return function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.width,i=t&&n.matchPatterns[t]||n.matchPatterns[n.defaultMatchWidth],o=r.match(i);if(!o)return null;var s=o[0],a=t&&n.parsePatterns[t]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(a)?wu(a,function(u){return u.test(s)}):vu(a,function(u){return u.test(s)}),d;d=n.valueCallback?n.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var _=r.slice(s.length);return{value:d,rest:_}}}function vu(n,r){for(var e in n)if(n.hasOwnProperty(e)&&r(n[e]))return e}function wu(n,r){for(var e=0;e<n.length;e++)if(r(n[e]))return e}function Cu(n){return function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.match(n.matchPattern);if(!t)return null;var i=t[0],o=r.match(n.parsePattern);if(!o)return null;var s=n.valueCallback?n.valueCallback(o[0]):o[0];s=e.valueCallback?e.valueCallback(s):s;var a=r.slice(i.length);return{value:s,rest:a}}}var xu=/^(\d+)(th|st|nd|rd)?/i,Su=/\d+/i,Iu={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ou={any:[/^b/i,/^(a|c)/i]},Pu={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tu={any:[/1/i,/2/i,/3/i,/4/i]},Eu={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Du={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Au={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ku={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ru={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},$u={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Fu={ordinalNumber:Cu({matchPattern:xu,parsePattern:Su,valueCallback:function(r){return parseInt(r,10)}}),era:Ue({matchPatterns:Iu,defaultMatchWidth:"wide",parsePatterns:Ou,defaultParseWidth:"any"}),quarter:Ue({matchPatterns:Pu,defaultMatchWidth:"wide",parsePatterns:Tu,defaultParseWidth:"any",valueCallback:function(r){return r+1}}),month:Ue({matchPatterns:Eu,defaultMatchWidth:"wide",parsePatterns:Du,defaultParseWidth:"any"}),day:Ue({matchPatterns:Au,defaultMatchWidth:"wide",parsePatterns:ku,defaultParseWidth:"any"}),dayPeriod:Ue({matchPatterns:Ru,defaultMatchWidth:"any",parsePatterns:$u,defaultParseWidth:"any"})};const Mu=Fu;var zu={code:"en-US",formatDistance:ru,formatLong:au,formatRelative:cu,localize:bu,match:Mu,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ts=zu;var Nu=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Lu=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bu=/^'([^]*?)'?$/,Vu=/''/g,Hu=/[a-zA-Z]/;function Wu(n,r,e){var t,i,o,s,a,l,d,_,u,p,g,v,w,b,O,S,R,H;q(2,arguments);var z=String(r),k=Ve(),Q=(t=(i=e==null?void 0:e.locale)!==null&&i!==void 0?i:k.locale)!==null&&t!==void 0?t:Ts,ne=re((o=(s=(a=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(d=e.locale)===null||d===void 0||(_=d.options)===null||_===void 0?void 0:_.firstWeekContainsDate)!==null&&a!==void 0?a:k.firstWeekContainsDate)!==null&&s!==void 0?s:(u=k.locale)===null||u===void 0||(p=u.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(ne>=1&&ne<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var ie=re((g=(v=(w=(b=e==null?void 0:e.weekStartsOn)!==null&&b!==void 0?b:e==null||(O=e.locale)===null||O===void 0||(S=O.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&w!==void 0?w:k.weekStartsOn)!==null&&v!==void 0?v:(R=k.locale)===null||R===void 0||(H=R.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&g!==void 0?g:0);if(!(ie>=0&&ie<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Q.localize)throw new RangeError("locale must contain localize property");if(!Q.formatLong)throw new RangeError("locale must contain formatLong property");var oe=Z(n);if(!$r(oe))throw new RangeError("Invalid time value");var fe=Is(oe),ue=vs(oe,fe),me={firstWeekContainsDate:ne,weekStartsOn:ie,locale:Q,_originalDate:oe},ge=z.match(Lu).map(function(W){var K=W[0];if(K==="p"||K==="P"){var c=Fr[K];return c(W,Q.formatLong)}return W}).join("").match(Nu).map(function(W){if(W==="''")return"'";var K=W[0];if(K==="'")return Yu(W);var c=Ql[K];if(c)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Ps(W)&&Vt(W,r,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Os(W)&&Vt(W,r,String(n)),c(ue,W,Q.localize,me);if(K.match(Hu))throw new RangeError("Format string contains an unescaped latin alphabet character `"+K+"`");return W}).join("");return ge}function Yu(n){var r=n.match(Bu);return r?r[1].replace(Vu,"'"):n}function Uu(n,r){if(n==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);return n}function rt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?rt=function(e){return typeof e}:rt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rt(n)}function Es(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Mr(n,r)}function Mr(n,r){return Mr=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Mr(n,r)}function Ds(n){var r=ju();return function(){var t=Ht(n),i;if(r){var o=Ht(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return qu(this,i)}}function qu(n,r){return r&&(rt(r)==="object"||typeof r=="function")?r:zr(n)}function zr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ju(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ht(n){return Ht=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ht(n)}function ni(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Oi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function ii(n,r,e){return r&&Oi(n.prototype,r),e&&Oi(n,e),n}function Nr(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Gu=10,As=function(){function n(){ni(this,n),Nr(this,"subPriority",0)}return ii(n,[{key:"validate",value:function(e,t){return!0}}]),n}(),Qu=function(n){Es(e,n);var r=Ds(e);function e(t,i,o,s,a){var l;return ni(this,e),l=r.call(this),l.value=t,l.validateValue=i,l.setValue=o,l.priority=s,a&&(l.subPriority=a),l}return ii(e,[{key:"validate",value:function(i,o){return this.validateValue(i,this.value,o)}},{key:"set",value:function(i,o,s){return this.setValue(i,o,this.value,s)}}]),e}(As),Ku=function(n){Es(e,n);var r=Ds(e);function e(){var t;ni(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Nr(zr(t),"priority",Gu),Nr(zr(t),"subPriority",-1),t}return ii(e,[{key:"set",value:function(i,o){if(o.timestampIsSet)return i;var s=new Date(0);return s.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),s.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),s}}]),e}(As);function Xu(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Pi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Zu(n,r,e){return r&&Pi(n.prototype,r),e&&Pi(n,e),n}var P=function(){function n(){Xu(this,n)}return Zu(n,[{key:"run",value:function(e,t,i,o){var s=this.parse(e,t,i,o);return s?{setter:new Qu(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}},{key:"validate",value:function(e,t,i){return!0}}]),n}();function nt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?nt=function(e){return typeof e}:nt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nt(n)}function Ju(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Ti(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function ec(n,r,e){return r&&Ti(n.prototype,r),e&&Ti(n,e),n}function tc(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Lr(n,r)}function Lr(n,r){return Lr=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Lr(n,r)}function rc(n){var r=ic();return function(){var t=Wt(n),i;if(r){var o=Wt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return nc(this,i)}}function nc(n,r){return r&&(nt(r)==="object"||typeof r=="function")?r:Br(n)}function Br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ic(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wt(n){return Wt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Wt(n)}function Ei(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var oc=function(n){tc(e,n);var r=rc(e);function e(){var t;Ju(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Ei(Br(t),"priority",140),Ei(Br(t),"incompatibleTokens",["R","u","t","T"]),t}return ec(e,[{key:"parse",value:function(i,o,s){switch(o){case"G":case"GG":case"GGG":return s.era(i,{width:"abbreviated"})||s.era(i,{width:"narrow"});case"GGGGG":return s.era(i,{width:"narrow"});case"GGGG":default:return s.era(i,{width:"wide"})||s.era(i,{width:"abbreviated"})||s.era(i,{width:"narrow"})}}},{key:"set",value:function(i,o,s){return o.era=s,i.setUTCFullYear(s,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(P),sc=6e4,ac=36e5,lc=1e3,B={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},de={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function V(n,r){return n&&{value:r(n.value),rest:n.rest}}function M(n,r){var e=r.match(n);return e?{value:parseInt(e[0],10),rest:r.slice(e[0].length)}:null}function he(n,r){var e=r.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:r.slice(1)};var t=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,o=e[3]?parseInt(e[3],10):0,s=e[5]?parseInt(e[5],10):0;return{value:t*(i*ac+o*sc+s*lc),rest:r.slice(e[0].length)}}function ks(n){return M(B.anyDigitsSigned,n)}function L(n,r){switch(n){case 1:return M(B.singleDigit,r);case 2:return M(B.twoDigits,r);case 3:return M(B.threeDigits,r);case 4:return M(B.fourDigits,r);default:return M(new RegExp("^\\d{1,"+n+"}"),r)}}function Yt(n,r){switch(n){case 1:return M(B.singleDigitSigned,r);case 2:return M(B.twoDigitsSigned,r);case 3:return M(B.threeDigitsSigned,r);case 4:return M(B.fourDigitsSigned,r);default:return M(new RegExp("^-?\\d{1,"+n+"}"),r)}}function oi(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Rs(n,r){var e=r>0,t=e?r:1-r,i;if(t<=50)i=n||100;else{var o=t+50,s=Math.floor(o/100)*100,a=n>=o%100;i=n+s-(a?100:0)}return e?i:1-i}function $s(n){return n%400===0||n%4===0&&n%100!==0}function it(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?it=function(e){return typeof e}:it=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},it(n)}function uc(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Di(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function cc(n,r,e){return r&&Di(n.prototype,r),e&&Di(n,e),n}function dc(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Vr(n,r)}function Vr(n,r){return Vr=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Vr(n,r)}function hc(n){var r=_c();return function(){var t=Ut(n),i;if(r){var o=Ut(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return fc(this,i)}}function fc(n,r){return r&&(it(r)==="object"||typeof r=="function")?r:Hr(n)}function Hr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _c(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ut(n){return Ut=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ut(n)}function Ai(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var pc=function(n){dc(e,n);var r=hc(e);function e(){var t;uc(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Ai(Hr(t),"priority",130),Ai(Hr(t),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),t}return cc(e,[{key:"parse",value:function(i,o,s){var a=function(d){return{year:d,isTwoDigitYear:o==="yy"}};switch(o){case"y":return V(L(4,i),a);case"yo":return V(s.ordinalNumber(i,{unit:"year"}),a);default:return V(L(o.length,i),a)}}},{key:"validate",value:function(i,o){return o.isTwoDigitYear||o.year>0}},{key:"set",value:function(i,o,s){var a=i.getUTCFullYear();if(s.isTwoDigitYear){var l=Rs(s.year,a);return i.setUTCFullYear(l,0,1),i.setUTCHours(0,0,0,0),i}var d=!("era"in o)||o.era===1?s.year:1-s.year;return i.setUTCFullYear(d,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(P);function ot(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ot=function(e){return typeof e}:ot=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(n)}function mc(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function ki(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function gc(n,r,e){return r&&ki(n.prototype,r),e&&ki(n,e),n}function yc(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Wr(n,r)}function Wr(n,r){return Wr=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Wr(n,r)}function bc(n){var r=wc();return function(){var t=qt(n),i;if(r){var o=qt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return vc(this,i)}}function vc(n,r){return r&&(ot(r)==="object"||typeof r=="function")?r:Yr(n)}function Yr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function wc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function qt(n){return qt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},qt(n)}function Ri(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Cc=function(n){yc(e,n);var r=bc(e);function e(){var t;mc(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Ri(Yr(t),"priority",130),Ri(Yr(t),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),t}return gc(e,[{key:"parse",value:function(i,o,s){var a=function(d){return{year:d,isTwoDigitYear:o==="YY"}};switch(o){case"Y":return V(L(4,i),a);case"Yo":return V(s.ordinalNumber(i,{unit:"year"}),a);default:return V(L(o.length,i),a)}}},{key:"validate",value:function(i,o){return o.isTwoDigitYear||o.year>0}},{key:"set",value:function(i,o,s,a){var l=ri(i,a);if(s.isTwoDigitYear){var d=Rs(s.year,l);return i.setUTCFullYear(d,0,a.firstWeekContainsDate),i.setUTCHours(0,0,0,0),Te(i,a)}var _=!("era"in o)||o.era===1?s.year:1-s.year;return i.setUTCFullYear(_,0,a.firstWeekContainsDate),i.setUTCHours(0,0,0,0),Te(i,a)}}]),e}(P);function st(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?st=function(e){return typeof e}:st=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},st(n)}function xc(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function $i(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Sc(n,r,e){return r&&$i(n.prototype,r),e&&$i(n,e),n}function Ic(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Ur(n,r)}function Ur(n,r){return Ur=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Ur(n,r)}function Oc(n){var r=Tc();return function(){var t=jt(n),i;if(r){var o=jt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Pc(this,i)}}function Pc(n,r){return r&&(st(r)==="object"||typeof r=="function")?r:qr(n)}function qr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Tc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function jt(n){return jt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},jt(n)}function Fi(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Ec=function(n){Ic(e,n);var r=Oc(e);function e(){var t;xc(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Fi(qr(t),"priority",130),Fi(qr(t),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),t}return Sc(e,[{key:"parse",value:function(i,o){return Yt(o==="R"?4:o.length,i)}},{key:"set",value:function(i,o,s){var a=new Date(0);return a.setUTCFullYear(s,0,4),a.setUTCHours(0,0,0,0),Ne(a)}}]),e}(P);function at(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?at=function(e){return typeof e}:at=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},at(n)}function Dc(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Mi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Ac(n,r,e){return r&&Mi(n.prototype,r),e&&Mi(n,e),n}function kc(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&jr(n,r)}function jr(n,r){return jr=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},jr(n,r)}function Rc(n){var r=Fc();return function(){var t=Gt(n),i;if(r){var o=Gt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return $c(this,i)}}function $c(n,r){return r&&(at(r)==="object"||typeof r=="function")?r:Gr(n)}function Gr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Fc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Gt(n){return Gt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Gt(n)}function zi(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Mc=function(n){kc(e,n);var r=Rc(e);function e(){var t;Dc(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),zi(Gr(t),"priority",130),zi(Gr(t),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),t}return Ac(e,[{key:"parse",value:function(i,o){return Yt(o==="u"?4:o.length,i)}},{key:"set",value:function(i,o,s){return i.setUTCFullYear(s,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(P);function lt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?lt=function(e){return typeof e}:lt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lt(n)}function zc(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Ni(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Nc(n,r,e){return r&&Ni(n.prototype,r),e&&Ni(n,e),n}function Lc(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Qr(n,r)}function Qr(n,r){return Qr=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Qr(n,r)}function Bc(n){var r=Hc();return function(){var t=Qt(n),i;if(r){var o=Qt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Vc(this,i)}}function Vc(n,r){return r&&(lt(r)==="object"||typeof r=="function")?r:Kr(n)}function Kr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Hc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qt(n){return Qt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Qt(n)}function Li(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Wc=function(n){Lc(e,n);var r=Bc(e);function e(){var t;zc(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Li(Kr(t),"priority",120),Li(Kr(t),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),t}return Nc(e,[{key:"parse",value:function(i,o,s){switch(o){case"Q":case"QQ":return L(o.length,i);case"Qo":return s.ordinalNumber(i,{unit:"quarter"});case"QQQ":return s.quarter(i,{width:"abbreviated",context:"formatting"})||s.quarter(i,{width:"narrow",context:"formatting"});case"QQQQQ":return s.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(i,{width:"wide",context:"formatting"})||s.quarter(i,{width:"abbreviated",context:"formatting"})||s.quarter(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,o){return o>=1&&o<=4}},{key:"set",value:function(i,o,s){return i.setUTCMonth((s-1)*3,1),i.setUTCHours(0,0,0,0),i}}]),e}(P);function ut(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ut=function(e){return typeof e}:ut=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ut(n)}function Yc(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Bi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Uc(n,r,e){return r&&Bi(n.prototype,r),e&&Bi(n,e),n}function qc(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Xr(n,r)}function Xr(n,r){return Xr=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Xr(n,r)}function jc(n){var r=Qc();return function(){var t=Kt(n),i;if(r){var o=Kt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Gc(this,i)}}function Gc(n,r){return r&&(ut(r)==="object"||typeof r=="function")?r:Zr(n)}function Zr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Qc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Kt(n){return Kt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Kt(n)}function Vi(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Kc=function(n){qc(e,n);var r=jc(e);function e(){var t;Yc(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Vi(Zr(t),"priority",120),Vi(Zr(t),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),t}return Uc(e,[{key:"parse",value:function(i,o,s){switch(o){case"q":case"qq":return L(o.length,i);case"qo":return s.ordinalNumber(i,{unit:"quarter"});case"qqq":return s.quarter(i,{width:"abbreviated",context:"standalone"})||s.quarter(i,{width:"narrow",context:"standalone"});case"qqqqq":return s.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(i,{width:"wide",context:"standalone"})||s.quarter(i,{width:"abbreviated",context:"standalone"})||s.quarter(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,o){return o>=1&&o<=4}},{key:"set",value:function(i,o,s){return i.setUTCMonth((s-1)*3,1),i.setUTCHours(0,0,0,0),i}}]),e}(P);function ct(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ct=function(e){return typeof e}:ct=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ct(n)}function Xc(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Hi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Zc(n,r,e){return r&&Hi(n.prototype,r),e&&Hi(n,e),n}function Jc(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Jr(n,r)}function Jr(n,r){return Jr=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Jr(n,r)}function ed(n){var r=rd();return function(){var t=Xt(n),i;if(r){var o=Xt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return td(this,i)}}function td(n,r){return r&&(ct(r)==="object"||typeof r=="function")?r:en(n)}function en(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function rd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xt(n){return Xt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Xt(n)}function Wi(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var nd=function(n){Jc(e,n);var r=ed(e);function e(){var t;Xc(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Wi(en(t),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),Wi(en(t),"priority",110),t}return Zc(e,[{key:"parse",value:function(i,o,s){var a=function(d){return d-1};switch(o){case"M":return V(M(B.month,i),a);case"MM":return V(L(2,i),a);case"Mo":return V(s.ordinalNumber(i,{unit:"month"}),a);case"MMM":return s.month(i,{width:"abbreviated",context:"formatting"})||s.month(i,{width:"narrow",context:"formatting"});case"MMMMM":return s.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(i,{width:"wide",context:"formatting"})||s.month(i,{width:"abbreviated",context:"formatting"})||s.month(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=11}},{key:"set",value:function(i,o,s){return i.setUTCMonth(s,1),i.setUTCHours(0,0,0,0),i}}]),e}(P);function dt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?dt=function(e){return typeof e}:dt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(n)}function id(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Yi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function od(n,r,e){return r&&Yi(n.prototype,r),e&&Yi(n,e),n}function sd(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&tn(n,r)}function tn(n,r){return tn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},tn(n,r)}function ad(n){var r=ud();return function(){var t=Zt(n),i;if(r){var o=Zt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return ld(this,i)}}function ld(n,r){return r&&(dt(r)==="object"||typeof r=="function")?r:rn(n)}function rn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ud(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zt(n){return Zt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Zt(n)}function Ui(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var cd=function(n){sd(e,n);var r=ad(e);function e(){var t;id(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Ui(rn(t),"priority",110),Ui(rn(t),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),t}return od(e,[{key:"parse",value:function(i,o,s){var a=function(d){return d-1};switch(o){case"L":return V(M(B.month,i),a);case"LL":return V(L(2,i),a);case"Lo":return V(s.ordinalNumber(i,{unit:"month"}),a);case"LLL":return s.month(i,{width:"abbreviated",context:"standalone"})||s.month(i,{width:"narrow",context:"standalone"});case"LLLLL":return s.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(i,{width:"wide",context:"standalone"})||s.month(i,{width:"abbreviated",context:"standalone"})||s.month(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=11}},{key:"set",value:function(i,o,s){return i.setUTCMonth(s,1),i.setUTCHours(0,0,0,0),i}}]),e}(P);function dd(n,r,e){q(2,arguments);var t=Z(n),i=re(r),o=xs(t,e)-i;return t.setUTCDate(t.getUTCDate()-o*7),t}function ht(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ht=function(e){return typeof e}:ht=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ht(n)}function hd(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function qi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function fd(n,r,e){return r&&qi(n.prototype,r),e&&qi(n,e),n}function _d(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&nn(n,r)}function nn(n,r){return nn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},nn(n,r)}function pd(n){var r=gd();return function(){var t=Jt(n),i;if(r){var o=Jt(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return md(this,i)}}function md(n,r){return r&&(ht(r)==="object"||typeof r=="function")?r:on(n)}function on(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function gd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Jt(n){return Jt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Jt(n)}function ji(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var yd=function(n){_d(e,n);var r=pd(e);function e(){var t;hd(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),ji(on(t),"priority",100),ji(on(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),t}return fd(e,[{key:"parse",value:function(i,o,s){switch(o){case"w":return M(B.week,i);case"wo":return s.ordinalNumber(i,{unit:"week"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=1&&o<=53}},{key:"set",value:function(i,o,s,a){return Te(dd(i,s,a),a)}}]),e}(P);function bd(n,r){q(2,arguments);var e=Z(n),t=re(r),i=Cs(e)-t;return e.setUTCDate(e.getUTCDate()-i*7),e}function ft(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ft=function(e){return typeof e}:ft=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ft(n)}function vd(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Gi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function wd(n,r,e){return r&&Gi(n.prototype,r),e&&Gi(n,e),n}function Cd(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&sn(n,r)}function sn(n,r){return sn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},sn(n,r)}function xd(n){var r=Id();return function(){var t=er(n),i;if(r){var o=er(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Sd(this,i)}}function Sd(n,r){return r&&(ft(r)==="object"||typeof r=="function")?r:an(n)}function an(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Id(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function er(n){return er=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},er(n)}function Qi(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Od=function(n){Cd(e,n);var r=xd(e);function e(){var t;vd(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Qi(an(t),"priority",100),Qi(an(t),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),t}return wd(e,[{key:"parse",value:function(i,o,s){switch(o){case"I":return M(B.week,i);case"Io":return s.ordinalNumber(i,{unit:"week"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=1&&o<=53}},{key:"set",value:function(i,o,s){return Ne(bd(i,s))}}]),e}(P);function _t(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_t=function(e){return typeof e}:_t=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(n)}function Pd(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Ki(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Td(n,r,e){return r&&Ki(n.prototype,r),e&&Ki(n,e),n}function Ed(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&ln(n,r)}function ln(n,r){return ln=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},ln(n,r)}function Dd(n){var r=kd();return function(){var t=tr(n),i;if(r){var o=tr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Ad(this,i)}}function Ad(n,r){return r&&(_t(r)==="object"||typeof r=="function")?r:pt(n)}function pt(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function kd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tr(n){return tr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},tr(n)}function Er(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Rd=[31,28,31,30,31,30,31,31,30,31,30,31],$d=[31,29,31,30,31,30,31,31,30,31,30,31],Fd=function(n){Ed(e,n);var r=Dd(e);function e(){var t;Pd(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Er(pt(t),"priority",90),Er(pt(t),"subPriority",1),Er(pt(t),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),t}return Td(e,[{key:"parse",value:function(i,o,s){switch(o){case"d":return M(B.date,i);case"do":return s.ordinalNumber(i,{unit:"date"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){var s=i.getUTCFullYear(),a=$s(s),l=i.getUTCMonth();return a?o>=1&&o<=$d[l]:o>=1&&o<=Rd[l]}},{key:"set",value:function(i,o,s){return i.setUTCDate(s),i.setUTCHours(0,0,0,0),i}}]),e}(P);function mt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mt=function(e){return typeof e}:mt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mt(n)}function Md(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Xi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function zd(n,r,e){return r&&Xi(n.prototype,r),e&&Xi(n,e),n}function Nd(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&un(n,r)}function un(n,r){return un=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},un(n,r)}function Ld(n){var r=Vd();return function(){var t=rr(n),i;if(r){var o=rr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Bd(this,i)}}function Bd(n,r){return r&&(mt(r)==="object"||typeof r=="function")?r:gt(n)}function gt(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Vd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rr(n){return rr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},rr(n)}function Dr(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Hd=function(n){Nd(e,n);var r=Ld(e);function e(){var t;Md(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Dr(gt(t),"priority",90),Dr(gt(t),"subpriority",1),Dr(gt(t),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),t}return zd(e,[{key:"parse",value:function(i,o,s){switch(o){case"D":case"DD":return M(B.dayOfYear,i);case"Do":return s.ordinalNumber(i,{unit:"date"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){var s=i.getUTCFullYear(),a=$s(s);return a?o>=1&&o<=366:o>=1&&o<=365}},{key:"set",value:function(i,o,s){return i.setUTCMonth(0,s),i.setUTCHours(0,0,0,0),i}}]),e}(P);function si(n,r,e){var t,i,o,s,a,l,d,_;q(2,arguments);var u=Ve(),p=re((t=(i=(o=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(a=e.locale)===null||a===void 0||(l=a.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&o!==void 0?o:u.weekStartsOn)!==null&&i!==void 0?i:(d=u.locale)===null||d===void 0||(_=d.options)===null||_===void 0?void 0:_.weekStartsOn)!==null&&t!==void 0?t:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=Z(n),v=re(r),w=g.getUTCDay(),b=v%7,O=(b+7)%7,S=(O<p?7:0)+v-w;return g.setUTCDate(g.getUTCDate()+S),g}function yt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?yt=function(e){return typeof e}:yt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yt(n)}function Wd(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Zi(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Yd(n,r,e){return r&&Zi(n.prototype,r),e&&Zi(n,e),n}function Ud(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&cn(n,r)}function cn(n,r){return cn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},cn(n,r)}function qd(n){var r=Gd();return function(){var t=nr(n),i;if(r){var o=nr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return jd(this,i)}}function jd(n,r){return r&&(yt(r)==="object"||typeof r=="function")?r:dn(n)}function dn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Gd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nr(n){return nr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},nr(n)}function Ji(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Qd=function(n){Ud(e,n);var r=qd(e);function e(){var t;Wd(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Ji(dn(t),"priority",90),Ji(dn(t),"incompatibleTokens",["D","i","e","c","t","T"]),t}return Yd(e,[{key:"parse",value:function(i,o,s){switch(o){case"E":case"EE":case"EEE":return s.day(i,{width:"abbreviated",context:"formatting"})||s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"});case"EEEEE":return s.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"});case"EEEE":default:return s.day(i,{width:"wide",context:"formatting"})||s.day(i,{width:"abbreviated",context:"formatting"})||s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=6}},{key:"set",value:function(i,o,s,a){return i=si(i,s,a),i.setUTCHours(0,0,0,0),i}}]),e}(P);function bt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?bt=function(e){return typeof e}:bt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bt(n)}function Kd(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function eo(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Xd(n,r,e){return r&&eo(n.prototype,r),e&&eo(n,e),n}function Zd(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&hn(n,r)}function hn(n,r){return hn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},hn(n,r)}function Jd(n){var r=th();return function(){var t=ir(n),i;if(r){var o=ir(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return eh(this,i)}}function eh(n,r){return r&&(bt(r)==="object"||typeof r=="function")?r:fn(n)}function fn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function th(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ir(n){return ir=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ir(n)}function to(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var rh=function(n){Zd(e,n);var r=Jd(e);function e(){var t;Kd(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),to(fn(t),"priority",90),to(fn(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),t}return Xd(e,[{key:"parse",value:function(i,o,s,a){var l=function(_){var u=Math.floor((_-1)/7)*7;return(_+a.weekStartsOn+6)%7+u};switch(o){case"e":case"ee":return V(L(o.length,i),l);case"eo":return V(s.ordinalNumber(i,{unit:"day"}),l);case"eee":return s.day(i,{width:"abbreviated",context:"formatting"})||s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"});case"eeeee":return s.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"});case"eeee":default:return s.day(i,{width:"wide",context:"formatting"})||s.day(i,{width:"abbreviated",context:"formatting"})||s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=6}},{key:"set",value:function(i,o,s,a){return i=si(i,s,a),i.setUTCHours(0,0,0,0),i}}]),e}(P);function vt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?vt=function(e){return typeof e}:vt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vt(n)}function nh(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function ro(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function ih(n,r,e){return r&&ro(n.prototype,r),e&&ro(n,e),n}function oh(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&_n(n,r)}function _n(n,r){return _n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},_n(n,r)}function sh(n){var r=lh();return function(){var t=or(n),i;if(r){var o=or(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return ah(this,i)}}function ah(n,r){return r&&(vt(r)==="object"||typeof r=="function")?r:pn(n)}function pn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function lh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function or(n){return or=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},or(n)}function no(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var uh=function(n){oh(e,n);var r=sh(e);function e(){var t;nh(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),no(pn(t),"priority",90),no(pn(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),t}return ih(e,[{key:"parse",value:function(i,o,s,a){var l=function(_){var u=Math.floor((_-1)/7)*7;return(_+a.weekStartsOn+6)%7+u};switch(o){case"c":case"cc":return V(L(o.length,i),l);case"co":return V(s.ordinalNumber(i,{unit:"day"}),l);case"ccc":return s.day(i,{width:"abbreviated",context:"standalone"})||s.day(i,{width:"short",context:"standalone"})||s.day(i,{width:"narrow",context:"standalone"});case"ccccc":return s.day(i,{width:"narrow",context:"standalone"});case"cccccc":return s.day(i,{width:"short",context:"standalone"})||s.day(i,{width:"narrow",context:"standalone"});case"cccc":default:return s.day(i,{width:"wide",context:"standalone"})||s.day(i,{width:"abbreviated",context:"standalone"})||s.day(i,{width:"short",context:"standalone"})||s.day(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=6}},{key:"set",value:function(i,o,s,a){return i=si(i,s,a),i.setUTCHours(0,0,0,0),i}}]),e}(P);function ch(n,r){q(2,arguments);var e=re(r);e%7===0&&(e=e-7);var t=1,i=Z(n),o=i.getUTCDay(),s=e%7,a=(s+7)%7,l=(a<t?7:0)+e-o;return i.setUTCDate(i.getUTCDate()+l),i}function wt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wt=function(e){return typeof e}:wt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(n)}function dh(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function io(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function hh(n,r,e){return r&&io(n.prototype,r),e&&io(n,e),n}function fh(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&mn(n,r)}function mn(n,r){return mn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},mn(n,r)}function _h(n){var r=mh();return function(){var t=sr(n),i;if(r){var o=sr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return ph(this,i)}}function ph(n,r){return r&&(wt(r)==="object"||typeof r=="function")?r:gn(n)}function gn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function mh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sr(n){return sr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},sr(n)}function oo(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var gh=function(n){fh(e,n);var r=_h(e);function e(){var t;dh(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),oo(gn(t),"priority",90),oo(gn(t),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),t}return hh(e,[{key:"parse",value:function(i,o,s){var a=function(d){return d===0?7:d};switch(o){case"i":case"ii":return L(o.length,i);case"io":return s.ordinalNumber(i,{unit:"day"});case"iii":return V(s.day(i,{width:"abbreviated",context:"formatting"})||s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"}),a);case"iiiii":return V(s.day(i,{width:"narrow",context:"formatting"}),a);case"iiiiii":return V(s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"}),a);case"iiii":default:return V(s.day(i,{width:"wide",context:"formatting"})||s.day(i,{width:"abbreviated",context:"formatting"})||s.day(i,{width:"short",context:"formatting"})||s.day(i,{width:"narrow",context:"formatting"}),a)}}},{key:"validate",value:function(i,o){return o>=1&&o<=7}},{key:"set",value:function(i,o,s){return i=ch(i,s),i.setUTCHours(0,0,0,0),i}}]),e}(P);function Ct(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ct=function(e){return typeof e}:Ct=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(n)}function yh(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function so(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function bh(n,r,e){return r&&so(n.prototype,r),e&&so(n,e),n}function vh(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&yn(n,r)}function yn(n,r){return yn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},yn(n,r)}function wh(n){var r=xh();return function(){var t=ar(n),i;if(r){var o=ar(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Ch(this,i)}}function Ch(n,r){return r&&(Ct(r)==="object"||typeof r=="function")?r:bn(n)}function bn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function xh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ar(n){return ar=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ar(n)}function ao(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Sh=function(n){vh(e,n);var r=wh(e);function e(){var t;yh(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),ao(bn(t),"priority",80),ao(bn(t),"incompatibleTokens",["b","B","H","k","t","T"]),t}return bh(e,[{key:"parse",value:function(i,o,s){switch(o){case"a":case"aa":case"aaa":return s.dayPeriod(i,{width:"abbreviated",context:"formatting"})||s.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaaa":return s.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(i,{width:"wide",context:"formatting"})||s.dayPeriod(i,{width:"abbreviated",context:"formatting"})||s.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,o,s){return i.setUTCHours(oi(s),0,0,0),i}}]),e}(P);function xt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xt=function(e){return typeof e}:xt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(n)}function Ih(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function lo(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Oh(n,r,e){return r&&lo(n.prototype,r),e&&lo(n,e),n}function Ph(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&vn(n,r)}function vn(n,r){return vn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},vn(n,r)}function Th(n){var r=Dh();return function(){var t=lr(n),i;if(r){var o=lr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Eh(this,i)}}function Eh(n,r){return r&&(xt(r)==="object"||typeof r=="function")?r:wn(n)}function wn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Dh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function lr(n){return lr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},lr(n)}function uo(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Ah=function(n){Ph(e,n);var r=Th(e);function e(){var t;Ih(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),uo(wn(t),"priority",80),uo(wn(t),"incompatibleTokens",["a","B","H","k","t","T"]),t}return Oh(e,[{key:"parse",value:function(i,o,s){switch(o){case"b":case"bb":case"bbb":return s.dayPeriod(i,{width:"abbreviated",context:"formatting"})||s.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbbb":return s.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(i,{width:"wide",context:"formatting"})||s.dayPeriod(i,{width:"abbreviated",context:"formatting"})||s.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,o,s){return i.setUTCHours(oi(s),0,0,0),i}}]),e}(P);function St(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?St=function(e){return typeof e}:St=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},St(n)}function kh(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function co(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Rh(n,r,e){return r&&co(n.prototype,r),e&&co(n,e),n}function $h(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Cn(n,r)}function Cn(n,r){return Cn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Cn(n,r)}function Fh(n){var r=zh();return function(){var t=ur(n),i;if(r){var o=ur(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Mh(this,i)}}function Mh(n,r){return r&&(St(r)==="object"||typeof r=="function")?r:xn(n)}function xn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function zh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ur(n){return ur=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ur(n)}function ho(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Nh=function(n){$h(e,n);var r=Fh(e);function e(){var t;kh(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),ho(xn(t),"priority",80),ho(xn(t),"incompatibleTokens",["a","b","t","T"]),t}return Rh(e,[{key:"parse",value:function(i,o,s){switch(o){case"B":case"BB":case"BBB":return s.dayPeriod(i,{width:"abbreviated",context:"formatting"})||s.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBBB":return s.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(i,{width:"wide",context:"formatting"})||s.dayPeriod(i,{width:"abbreviated",context:"formatting"})||s.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,o,s){return i.setUTCHours(oi(s),0,0,0),i}}]),e}(P);function It(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?It=function(e){return typeof e}:It=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(n)}function Lh(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function fo(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Bh(n,r,e){return r&&fo(n.prototype,r),e&&fo(n,e),n}function Vh(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Sn(n,r)}function Sn(n,r){return Sn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Sn(n,r)}function Hh(n){var r=Yh();return function(){var t=cr(n),i;if(r){var o=cr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Wh(this,i)}}function Wh(n,r){return r&&(It(r)==="object"||typeof r=="function")?r:In(n)}function In(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Yh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cr(n){return cr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},cr(n)}function _o(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Uh=function(n){Vh(e,n);var r=Hh(e);function e(){var t;Lh(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),_o(In(t),"priority",70),_o(In(t),"incompatibleTokens",["H","K","k","t","T"]),t}return Bh(e,[{key:"parse",value:function(i,o,s){switch(o){case"h":return M(B.hour12h,i);case"ho":return s.ordinalNumber(i,{unit:"hour"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=1&&o<=12}},{key:"set",value:function(i,o,s){var a=i.getUTCHours()>=12;return a&&s<12?i.setUTCHours(s+12,0,0,0):!a&&s===12?i.setUTCHours(0,0,0,0):i.setUTCHours(s,0,0,0),i}}]),e}(P);function Ot(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ot=function(e){return typeof e}:Ot=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ot(n)}function qh(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function po(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function jh(n,r,e){return r&&po(n.prototype,r),e&&po(n,e),n}function Gh(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&On(n,r)}function On(n,r){return On=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},On(n,r)}function Qh(n){var r=Xh();return function(){var t=dr(n),i;if(r){var o=dr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Kh(this,i)}}function Kh(n,r){return r&&(Ot(r)==="object"||typeof r=="function")?r:Pn(n)}function Pn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Xh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dr(n){return dr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},dr(n)}function mo(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Zh=function(n){Gh(e,n);var r=Qh(e);function e(){var t;qh(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),mo(Pn(t),"priority",70),mo(Pn(t),"incompatibleTokens",["a","b","h","K","k","t","T"]),t}return jh(e,[{key:"parse",value:function(i,o,s){switch(o){case"H":return M(B.hour23h,i);case"Ho":return s.ordinalNumber(i,{unit:"hour"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=0&&o<=23}},{key:"set",value:function(i,o,s){return i.setUTCHours(s,0,0,0),i}}]),e}(P);function Pt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pt=function(e){return typeof e}:Pt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pt(n)}function Jh(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function go(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function ef(n,r,e){return r&&go(n.prototype,r),e&&go(n,e),n}function tf(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Tn(n,r)}function Tn(n,r){return Tn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Tn(n,r)}function rf(n){var r=of();return function(){var t=hr(n),i;if(r){var o=hr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return nf(this,i)}}function nf(n,r){return r&&(Pt(r)==="object"||typeof r=="function")?r:En(n)}function En(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function of(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hr(n){return hr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},hr(n)}function yo(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var sf=function(n){tf(e,n);var r=rf(e);function e(){var t;Jh(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),yo(En(t),"priority",70),yo(En(t),"incompatibleTokens",["h","H","k","t","T"]),t}return ef(e,[{key:"parse",value:function(i,o,s){switch(o){case"K":return M(B.hour11h,i);case"Ko":return s.ordinalNumber(i,{unit:"hour"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=0&&o<=11}},{key:"set",value:function(i,o,s){var a=i.getUTCHours()>=12;return a&&s<12?i.setUTCHours(s+12,0,0,0):i.setUTCHours(s,0,0,0),i}}]),e}(P);function Tt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Tt=function(e){return typeof e}:Tt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(n)}function af(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function bo(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function lf(n,r,e){return r&&bo(n.prototype,r),e&&bo(n,e),n}function uf(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Dn(n,r)}function Dn(n,r){return Dn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Dn(n,r)}function cf(n){var r=hf();return function(){var t=fr(n),i;if(r){var o=fr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return df(this,i)}}function df(n,r){return r&&(Tt(r)==="object"||typeof r=="function")?r:An(n)}function An(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function hf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fr(n){return fr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},fr(n)}function vo(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var ff=function(n){uf(e,n);var r=cf(e);function e(){var t;af(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),vo(An(t),"priority",70),vo(An(t),"incompatibleTokens",["a","b","h","H","K","t","T"]),t}return lf(e,[{key:"parse",value:function(i,o,s){switch(o){case"k":return M(B.hour24h,i);case"ko":return s.ordinalNumber(i,{unit:"hour"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=1&&o<=24}},{key:"set",value:function(i,o,s){var a=s<=24?s%24:s;return i.setUTCHours(a,0,0,0),i}}]),e}(P);function Et(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Et=function(e){return typeof e}:Et=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(n)}function _f(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function wo(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function pf(n,r,e){return r&&wo(n.prototype,r),e&&wo(n,e),n}function mf(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&kn(n,r)}function kn(n,r){return kn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},kn(n,r)}function gf(n){var r=bf();return function(){var t=_r(n),i;if(r){var o=_r(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return yf(this,i)}}function yf(n,r){return r&&(Et(r)==="object"||typeof r=="function")?r:Rn(n)}function Rn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function bf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _r(n){return _r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_r(n)}function Co(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var vf=function(n){mf(e,n);var r=gf(e);function e(){var t;_f(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Co(Rn(t),"priority",60),Co(Rn(t),"incompatibleTokens",["t","T"]),t}return pf(e,[{key:"parse",value:function(i,o,s){switch(o){case"m":return M(B.minute,i);case"mo":return s.ordinalNumber(i,{unit:"minute"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=0&&o<=59}},{key:"set",value:function(i,o,s){return i.setUTCMinutes(s,0,0),i}}]),e}(P);function Dt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Dt=function(e){return typeof e}:Dt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dt(n)}function wf(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function xo(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Cf(n,r,e){return r&&xo(n.prototype,r),e&&xo(n,e),n}function xf(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&$n(n,r)}function $n(n,r){return $n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},$n(n,r)}function Sf(n){var r=Of();return function(){var t=pr(n),i;if(r){var o=pr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return If(this,i)}}function If(n,r){return r&&(Dt(r)==="object"||typeof r=="function")?r:Fn(n)}function Fn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Of(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pr(n){return pr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},pr(n)}function So(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Pf=function(n){xf(e,n);var r=Sf(e);function e(){var t;wf(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),So(Fn(t),"priority",50),So(Fn(t),"incompatibleTokens",["t","T"]),t}return Cf(e,[{key:"parse",value:function(i,o,s){switch(o){case"s":return M(B.second,i);case"so":return s.ordinalNumber(i,{unit:"second"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=0&&o<=59}},{key:"set",value:function(i,o,s){return i.setUTCSeconds(s,0),i}}]),e}(P);function At(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?At=function(e){return typeof e}:At=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},At(n)}function Tf(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Io(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Ef(n,r,e){return r&&Io(n.prototype,r),e&&Io(n,e),n}function Df(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Mn(n,r)}function Mn(n,r){return Mn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Mn(n,r)}function Af(n){var r=Rf();return function(){var t=mr(n),i;if(r){var o=mr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return kf(this,i)}}function kf(n,r){return r&&(At(r)==="object"||typeof r=="function")?r:zn(n)}function zn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Rf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mr(n){return mr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},mr(n)}function Oo(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var $f=function(n){Df(e,n);var r=Af(e);function e(){var t;Tf(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Oo(zn(t),"priority",30),Oo(zn(t),"incompatibleTokens",["t","T"]),t}return Ef(e,[{key:"parse",value:function(i,o){var s=function(l){return Math.floor(l*Math.pow(10,-o.length+3))};return V(L(o.length,i),s)}},{key:"set",value:function(i,o,s){return i.setUTCMilliseconds(s),i}}]),e}(P);function kt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?kt=function(e){return typeof e}:kt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(n)}function Ff(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Po(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Mf(n,r,e){return r&&Po(n.prototype,r),e&&Po(n,e),n}function zf(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Nn(n,r)}function Nn(n,r){return Nn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Nn(n,r)}function Nf(n){var r=Bf();return function(){var t=gr(n),i;if(r){var o=gr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Lf(this,i)}}function Lf(n,r){return r&&(kt(r)==="object"||typeof r=="function")?r:Ln(n)}function Ln(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Bf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gr(n){return gr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},gr(n)}function To(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Vf=function(n){zf(e,n);var r=Nf(e);function e(){var t;Ff(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),To(Ln(t),"priority",10),To(Ln(t),"incompatibleTokens",["t","T","x"]),t}return Mf(e,[{key:"parse",value:function(i,o){switch(o){case"X":return he(de.basicOptionalMinutes,i);case"XX":return he(de.basic,i);case"XXXX":return he(de.basicOptionalSeconds,i);case"XXXXX":return he(de.extendedOptionalSeconds,i);case"XXX":default:return he(de.extended,i)}}},{key:"set",value:function(i,o,s){return o.timestampIsSet?i:new Date(i.getTime()-s)}}]),e}(P);function Rt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Rt=function(e){return typeof e}:Rt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rt(n)}function Hf(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Eo(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Wf(n,r,e){return r&&Eo(n.prototype,r),e&&Eo(n,e),n}function Yf(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Bn(n,r)}function Bn(n,r){return Bn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Bn(n,r)}function Uf(n){var r=jf();return function(){var t=yr(n),i;if(r){var o=yr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return qf(this,i)}}function qf(n,r){return r&&(Rt(r)==="object"||typeof r=="function")?r:Vn(n)}function Vn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function jf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yr(n){return yr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},yr(n)}function Do(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var Gf=function(n){Yf(e,n);var r=Uf(e);function e(){var t;Hf(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),Do(Vn(t),"priority",10),Do(Vn(t),"incompatibleTokens",["t","T","X"]),t}return Wf(e,[{key:"parse",value:function(i,o){switch(o){case"x":return he(de.basicOptionalMinutes,i);case"xx":return he(de.basic,i);case"xxxx":return he(de.basicOptionalSeconds,i);case"xxxxx":return he(de.extendedOptionalSeconds,i);case"xxx":default:return he(de.extended,i)}}},{key:"set",value:function(i,o,s){return o.timestampIsSet?i:new Date(i.getTime()-s)}}]),e}(P);function $t(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$t=function(e){return typeof e}:$t=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t(n)}function Qf(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Ao(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function Kf(n,r,e){return r&&Ao(n.prototype,r),e&&Ao(n,e),n}function Xf(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Hn(n,r)}function Hn(n,r){return Hn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Hn(n,r)}function Zf(n){var r=e_();return function(){var t=br(n),i;if(r){var o=br(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return Jf(this,i)}}function Jf(n,r){return r&&($t(r)==="object"||typeof r=="function")?r:Wn(n)}function Wn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function e_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function br(n){return br=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},br(n)}function ko(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var t_=function(n){Xf(e,n);var r=Zf(e);function e(){var t;Qf(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),ko(Wn(t),"priority",40),ko(Wn(t),"incompatibleTokens","*"),t}return Kf(e,[{key:"parse",value:function(i){return ks(i)}},{key:"set",value:function(i,o,s){return[new Date(s*1e3),{timestampIsSet:!0}]}}]),e}(P);function Ft(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ft=function(e){return typeof e}:Ft=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(n)}function r_(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Ro(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function n_(n,r,e){return r&&Ro(n.prototype,r),e&&Ro(n,e),n}function i_(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&Yn(n,r)}function Yn(n,r){return Yn=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Yn(n,r)}function o_(n){var r=a_();return function(){var t=vr(n),i;if(r){var o=vr(this).constructor;i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments);return s_(this,i)}}function s_(n,r){return r&&(Ft(r)==="object"||typeof r=="function")?r:Un(n)}function Un(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function a_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vr(n){return vr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},vr(n)}function $o(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var l_=function(n){i_(e,n);var r=o_(e);function e(){var t;r_(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),$o(Un(t),"priority",20),$o(Un(t),"incompatibleTokens","*"),t}return n_(e,[{key:"parse",value:function(i){return ks(i)}},{key:"set",value:function(i,o,s){return[new Date(s),{timestampIsSet:!0}]}}]),e}(P),u_={G:new oc,y:new pc,Y:new Cc,R:new Ec,u:new Mc,Q:new Wc,q:new Kc,M:new nd,L:new cd,w:new yd,I:new Od,d:new Fd,D:new Hd,E:new Qd,e:new rh,c:new uh,i:new gh,a:new Sh,b:new Ah,B:new Nh,h:new Uh,H:new Zh,K:new sf,k:new ff,m:new vf,s:new Pf,S:new $f,X:new Vf,x:new Gf,t:new t_,T:new l_};function Mt(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Mt=function(e){return typeof e}:Mt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt(n)}function Fo(n,r){var e;if(typeof Symbol>"u"||n[Symbol.iterator]==null){if(Array.isArray(n)||(e=c_(n))||r&&n&&typeof n.length=="number"){e&&(n=e);var t=0,i=function(){};return{s:i,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(d){throw d},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,a;return{s:function(){e=n[Symbol.iterator]()},n:function(){var d=e.next();return o=d.done,d},e:function(d){s=!0,a=d},f:function(){try{!o&&e.return!=null&&e.return()}finally{if(s)throw a}}}}function c_(n,r){if(n){if(typeof n=="string")return Mo(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Mo(n,r)}}function Mo(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}var d_=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,h_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,f_=/^'([^]*?)'?$/,__=/''/g,p_=/\S/,m_=/[a-zA-Z]/;function zo(n,r,e,t){var i,o,s,a,l,d,_,u,p,g,v,w,b,O,S,R,H,z;q(3,arguments);var k=String(n),Q=String(r),ne=Ve(),ie=(i=(o=t==null?void 0:t.locale)!==null&&o!==void 0?o:ne.locale)!==null&&i!==void 0?i:Ts;if(!ie.match)throw new RangeError("locale must contain match property");var oe=re((s=(a=(l=(d=t==null?void 0:t.firstWeekContainsDate)!==null&&d!==void 0?d:t==null||(_=t.locale)===null||_===void 0||(u=_.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&l!==void 0?l:ne.firstWeekContainsDate)!==null&&a!==void 0?a:(p=ne.locale)===null||p===void 0||(g=p.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(oe>=1&&oe<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var fe=re((v=(w=(b=(O=t==null?void 0:t.weekStartsOn)!==null&&O!==void 0?O:t==null||(S=t.locale)===null||S===void 0||(R=S.options)===null||R===void 0?void 0:R.weekStartsOn)!==null&&b!==void 0?b:ne.weekStartsOn)!==null&&w!==void 0?w:(H=ne.locale)===null||H===void 0||(z=H.options)===null||z===void 0?void 0:z.weekStartsOn)!==null&&v!==void 0?v:0);if(!(fe>=0&&fe<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(Q==="")return k===""?Z(e):new Date(NaN);var ue={firstWeekContainsDate:oe,weekStartsOn:fe,locale:ie},me=[new Ku],ge=Q.match(h_).map(function(D){var I=D[0];if(I in Fr){var j=Fr[I];return j(D,ie.formatLong)}return D}).join("").match(d_),W=[],K=Fo(ge),c;try{var f=function(){var I=c.value;!(t!=null&&t.useAdditionalWeekYearTokens)&&Ps(I)&&Vt(I,Q,n),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Os(I)&&Vt(I,Q,n);var j=I[0],ce=u_[j];if(ce){var Xe=ce.incompatibleTokens;if(Array.isArray(Xe)){var Ze=W.find(function(ai){return Xe.includes(ai.token)||ai.token===j});if(Ze)throw new RangeError("The format string mustn't contain `".concat(Ze.fullToken,"` and `").concat(I,"` at the same time"))}else if(ce.incompatibleTokens==="*"&&W.length>0)throw new RangeError("The format string mustn't contain `".concat(I,"` and any other token at the same time"));W.push({token:j,fullToken:I});var xe=ce.run(k,I,ie.match,ue);if(!xe)return{v:new Date(NaN)};me.push(xe.setter),k=xe.rest}else{if(j.match(m_))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");if(I==="''"?I="'":j==="'"&&(I=g_(I)),k.indexOf(I)===0)k=k.slice(I.length);else return{v:new Date(NaN)}}};for(K.s();!(c=K.n()).done;){var h=f();if(Mt(h)==="object")return h.v}}catch(D){K.e(D)}finally{K.f()}if(k.length>0&&p_.test(k))return new Date(NaN);var m=me.map(function(D){return D.priority}).sort(function(D,I){return I-D}).filter(function(D,I,j){return j.indexOf(D)===I}).map(function(D){return me.filter(function(I){return I.priority===D}).sort(function(I,j){return j.subPriority-I.subPriority})}).map(function(D){return D[0]}),y=Z(e);if(isNaN(y.getTime()))return new Date(NaN);var C=vs(y,Is(y)),x={},E=Fo(m),$;try{for(E.s();!($=E.n()).done;){var X=$.value;if(!X.validate(C,ue))return new Date(NaN);var G=X.set(C,x,ue);Array.isArray(G)?(C=G[0],Uu(x,G[1])):C=G}}catch(D){E.e(D)}finally{E.f()}return C}function g_(n){return n.match(f_)[1].replace(__,"'")}(function(){const n=function(r){return window.Vaadin.Flow.tryCatchWrapper(r,"Vaadin Date Picker")};window.Vaadin.Flow.datepickerConnector={initLazy:r=>n(function(e){if(e.$connector)return;e.$connector={};const t=function(s){try{new Date().toLocaleDateString(s)}catch{return console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd"}let l=new Date(Date.UTC(1234,4,6)).toLocaleDateString(s,{timeZone:"UTC"});return l=l.replace(/([a-zA-Z]+)/g,"'$1'").replace("06","dd").replace("6","d").replace("05","MM").replace("5","M").replace("1234","yyyy"),l.includes("d")&&l.includes("M")&&l.includes("y")?l:(console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd")},i=n(function(s){if(!s||s.length===0)throw new Error("Array of custom date formats is null or empty");function a(u){if(u.includes("yyyy")&&!u.includes("yyyyy"))return u.replace("yyyy","yy");if(u.includes("YYYY")&&!u.includes("YYYYY"))return u.replace("YYYY","YY")}function l(u){return u.includes("y")?!u.includes("yyy"):u.includes("Y")?!u.includes("YYY"):!1}function d(u){const p=s[0],g=ke(`${u.year}-${u.month+1}-${u.day}`);return Wu(g,p)}function _(u){const p=o();for(let g of s){const v=a(g);if(v){const b=zo(u,v,p);if($r(b)){let O=b.getFullYear();return e.$connector._lastParsedYear&&O===e.$connector._lastParsedYear%100&&(O=e.$connector._lastParsedYear),{day:b.getDate(),month:b.getMonth(),year:O}}}const w=zo(u,g,p);if($r(w)){let b=w.getFullYear();return e.$connector._lastParsedYear&&b%100===e.$connector._lastParsedYear%100&&l(g)?b=e.$connector._lastParsedYear:e.$connector._lastParsedYear=b,{day:w.getDate(),month:w.getMonth(),year:b}}}return e.$connector._lastParsedYear=void 0,!1}return{formatDate:d,parseDate:_}});function o(){const{referenceDate:s}=e.i18n;return s?new Date(s.year,s.month,s.day):new Date}e.$connector.updateI18n=n(function(s,a){const l=a&&a.dateFormats&&a.dateFormats.length>0;a&&a.referenceDate&&(a.referenceDate=ti(new Date(a.referenceDate)));const d=l?a.dateFormats:[t(s)],_=i(d);e.i18n=Object.assign({},e.i18n,a,_)})})(r)}})();F("vaadin-form-layout",A`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class y_ extends Jo(Ee(ee(U))){static get template(){return J`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const r={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(t=>{t.type==="attributes"&&(t.attributeName==="colspan"||t.attributeName==="hidden")&&this._updateLayout()})}),[...this.children].forEach(e=>{this.__mutationObserver.observe(e,r)}),this.__childObserver=new MutationObserver(e=>{const t=[],i=[];e.forEach(o=>{t.push(...this._getObservableNodes(o.addedNodes)),i.push(...this._getObservableNodes(o.removedNodes))}),t.forEach(o=>{this.__mutationObserver.observe(o,r)}),(t.length>0||i.length>0)&&this._updateLayout()}),this.__childObserver.observe(this,{childList:!0})}_getObservableNodes(r){const e=["template","style","dom-repeat","dom-if"];return Array.from(r).filter(t=>t.nodeType===Node.ELEMENT_NODE&&e.indexOf(t.localName.toLowerCase())===-1)}_naturalNumberOrOne(r){return typeof r=="number"&&r>=1&&r<1/0?Math.floor(r):1}_isValidCSSLength(r){return r==="inherit"||r==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${r}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(r,e){try{if(!Array.isArray(r))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(r.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');r.forEach(t=>{if(this._naturalNumberOrOne(t.columns)!==t.columns)throw new Error(`Invalid 'columns' value of ${t.columns}, a natural number is required.`);if(t.minWidth!==void 0&&!this._isValidCSSLength(t.minWidth))throw new Error(`Invalid 'minWidth' value of ${t.minWidth}, a valid CSS length required.`);if(t.labelsPosition!==void 0&&["aside","top"].indexOf(t.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${t.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(t){e&&e!==r?(console.warn(`${t.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${t.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(r){r.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let r;const e="background-position";this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty(e,t.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(r=t)}),this.$.layout.style.removeProperty(e),r&&(this._columnCount=r.columns,this._labelsOnTop=r.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}_updateLayout(){const r=getComputedStyle(this),e=r.getPropertyValue("--vaadin-form-layout-column-spacing"),t=r.direction,i=`margin-${t==="ltr"?"left":"right"}`,o=`margin-${t==="ltr"?"right":"left"}`,s=this.offsetWidth;let a=0;Array.from(this.children).filter(l=>l.localName==="br"||getComputedStyle(l).display!=="none").forEach((l,d,_)=>{if(l.localName==="br"){a=0;return}let u;u=this._naturalNumberOrOne(parseFloat(l.getAttribute("colspan"))),u=Math.min(u,this._columnCount);const p=u/this._columnCount;l.style.width=`calc(${p*99.9}% - ${1-p} * ${e})`,a+u>this._columnCount&&(a=0),a===0?l.style.setProperty(i,"0px"):l.style.removeProperty(i);const g=d+1,v=g<_.length&&_[g].localName==="br";if(a+u===this._columnCount)l.style.setProperty(o,"0px");else if(v){const w=(this._columnCount-a-u)/this._columnCount;l.style.setProperty(o,`calc(${w*s}px + ${w} * ${e})`)}else l.style.removeProperty(o);a=(a+u)%this._columnCount,l.localName==="vaadin-form-item"&&(this._labelsOnTop?l.getAttribute("label-position")!=="top"&&(l.__useLayoutLabelPosition=!0,l.setAttribute("label-position","top")):l.__useLayoutLabelPosition&&(delete l.__useLayoutLabelPosition,l.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}Y(y_);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class b_ extends is(U){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(r,e){r==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(r)&&this._updateFlexAndWidth(),r==="frozen"&&!this.frozen&&(this.frozen=e),r==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),r==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),r==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(r,e){if(e){const t=e.slice(0);if(!r){t.forEach(a=>{a._order=0});return}const i=/(0+)$/u.exec(r).pop().length,o=~~(Math.log(e.length)/Math.LN10)+1,s=10**(i-o);t[0]&&t[0]._order&&t.sort((a,l)=>a._order-l._order),ns(t,s,r)}}_groupReorderStatusChanged(r,e){r===void 0||e===void 0||e.forEach(t=>{t._reorderStatus=r})}_groupResizableChanged(r,e){r===void 0||e===void 0||e.forEach(t=>{t.resizable=r})}_updateVisibleChildColumns(r){this._visibleChildColumns=Array.prototype.filter.call(r,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const r=this._visibleChildColumns.reduce((e,t)=>(e+=` + ${(t.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${r})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(r,e)=>r+e.flexGrow,0))}}__scheduleAutoFreezeWarning(r,e){if(this._grid){const t=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),i=r[0][e]||r[0].hasAttribute(t);r.every(s=>(s[e]||s.hasAttribute(t))===i)||(this._grid.__autoFreezeWarningDebouncer=N.debounce(this._grid.__autoFreezeWarningDebouncer,we,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(r,e){e===void 0||r===void 0||r!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(t=>{t.frozen=r}))}_groupFrozenToEndChanged(r,e){e===void 0||r===void 0||r!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(t=>{t.frozenToEnd=r}))}_groupHiddenChanged(r){(r||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const r=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(r||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(r=>{r.hidden=this.hidden})}_colSpanChanged(r,e,t){e&&(e.setAttribute("colspan",r),this._grid&&this._grid._a11yUpdateCellColspan(e,r)),t&&(t.setAttribute("colspan",r),this._grid&&this._grid._a11yUpdateCellColspan(t,r))}_getChildColumns(r){return Qe.getFlattenedNodes(r).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new Qe(this,r=>{(r.addedNodes.filter(this._isColumnElement).length>0||r.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree())}),this._observer.flush()}_isColumnElement(r){return r.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(r.localName)}}Y(b_);const wr=window;wr.Vaadin=wr.Vaadin||{};wr.Vaadin.setLitRenderer=(n,r,e,t,i,o)=>{const s=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, model, itemKey) => {
      const { item, index } = model;
      ${i.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(Ms,zs,t),a=(l,d,_)=>{const{item:u}=_;l.__litRenderer!==a&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=a);const p={};for(const g in u)g.startsWith(o)&&(p[g.replace(o,"")]=u[g]);s(l,{..._,item:p},u.key)};a.__rendererId=o,n[r]=a};wr.Vaadin.unsetLitRenderer=(n,r,e)=>{var t;((t=n[r])==null?void 0:t.__rendererId)===e&&(n[r]=void 0)};
