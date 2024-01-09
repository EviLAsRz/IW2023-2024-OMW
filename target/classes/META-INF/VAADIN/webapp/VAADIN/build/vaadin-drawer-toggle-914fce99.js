import{i as h,r as c,T as v,d as m,a as Y}from"./indexhtml-0e56a356.js";import{Z as G,K as Z,X as M,_ as A,i as L,E as w,C as g,P as _,h as p,$ as J,a0 as ee,a1 as te,a2 as ie,a3 as oe,a4 as E,a5 as re,A as ne,a6 as se,z as T,B,D as b,V as ae,a7 as I,Y as le,a8 as de,a9 as ue,aa as ce,ab as S,O as he,ac as y,ad as z,ae as D,af as $,ag as F,f as me,ah as pe,ai as _e,c as ve,aj as fe}from"./generated-flow-imports-706c75b0.js";import{p as be}from"./templates-b6af8b49.js";import{R as ge}from"./vaadin-horizontal-layout-acda1c6d.js";const x=h`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;c("vaadin-item",x,{moduleId:"lumo-item"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const P=h`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;c("",P,{moduleId:"lumo-menu-overlay-core"});const ye=h`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,C=[G,P,ye];c("",C,{moduleId:"lumo-menu-overlay"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const R=s=>class extends Z(s){get focused(){return(this._getItems()||[]).find(M)}get _vertical(){return!0}focus(){const e=this._getItems();if(Array.isArray(e)){const t=this._getAvailableIndex(e,0,null,i=>!A(i));t>=0&&e[t].focus()}}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t}=e,i=this._getItems()||[],r=i.indexOf(this.focused);let a,n;const u=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(t)?(n=-u,a=r-u):this.__isNextKey(t)?(n=u,a=r+u):t==="Home"?(n=1,a=0):t==="End"&&(n=-1,a=i.length-1),a=this._getAvailableIndex(i,a,n,d=>!A(d)),a>=0&&(e.preventDefault(),this._focus(a,!0))}__isPrevKey(e){return this._vertical?e==="ArrowUp":e==="ArrowLeft"}__isNextKey(e){return this._vertical?e==="ArrowDown":e==="ArrowRight"}_focus(e,t=!1){const i=this._getItems();this._focusItem(i[e],t)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}_getAvailableIndex(e,t,i,r){const a=e.length;let n=t;for(let l=0;typeof n=="number"&&l<a;l+=1,n+=i||1){n<0?n=a-1:n>=a&&(n=0);const u=e[n];if(!u.hasAttribute("disabled")&&this.__isMatchingItem(u,r))return n}return-1}__isMatchingItem(e,t){return typeof t=="function"?t(e):!0}};c("vaadin-app-layout",h`
    [part='navbar'],
    [part='drawer'] {
      background-color: var(--lumo-base-color);
      background-clip: padding-box;
    }

    [part='navbar'] {
      min-height: var(--lumo-size-xl);
      border-bottom: 1px solid var(--lumo-contrast-10pct);
    }

    [part='navbar'][bottom] {
      border-bottom: none;
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    [part='drawer'] {
      border-inline-end: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer'] {
      border-inline-end: none;
      box-shadow: var(--lumo-box-shadow-s);
    }

    :host([primary-section='navbar']) [part='navbar'] {
      border: none;
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host([primary-section='drawer']:not([overlay])) [part='drawer'] {
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }
  `,{moduleId:"lumo-app-layout"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function K(){if(L){const s=window.innerHeight,e=window.innerWidth>s,t=document.documentElement.clientHeight;e&&t>s?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${t-s}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}K();window.addEventListener("resize",K);const N=document.createElement("template");N.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(N.content);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class we extends w(v(g(_))){static get template(){return p`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-block: var(--vaadin-app-layout-navbar-offset-top) var(--vaadin-app-layout-navbar-offset-bottom);
          padding-inline-start: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'] {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          inset-inline: 0;
          transition: inset-inline-start var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host([primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          inset-inline-start: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          inset-inline: var(--vaadin-app-layout-navbar-offset-left, 0) auto;
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
          display: flex;
          flex-direction: column;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          inset: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          transform: translateX(100%);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host([drawer-opened]:not([overlay])) {
          padding-inline-start: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }

        /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */
        [part='drawer'] ::slotted(vaadin-scroller) {
          flex: 1;
          overscroll-behavior: contain;
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer">
        <slot name="drawer" id="drawerSlot" on-slotchange="_updateDrawerSize"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden>
        <slot id="touchSlot" name="navbar touch-optimized" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__ariaModalController=new J(this,()=>[...this.querySelectorAll('vaadin-drawer-toggle, [slot="drawer"]')]),this.__focusTrapController=new ee(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),te(this,this._afterFirstRender),this._updateTouchOptimizedMode(),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this.__isDrawerAnimating?this.__updateOffsetSizePending=!0:this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded(),this.$.drawer.addEventListener("transitionstart",()=>{this.__isDrawerAnimating=!0}),this.$.drawer.addEventListener("transitionend",()=>{this.__updateOffsetSizePending&&(this.__updateOffsetSizePending=!1,this._updateOffsetSize()),requestAnimationFrame(()=>{this.__isDrawerAnimating=!1})})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(o){["navbar","drawer"].includes(o)||this.set("primarySection","navbar")}__drawerOpenedChanged(o,e){this.overlay&&(o?this.__trapFocusInDrawer():e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(o){o.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const o=this.querySelector("vaadin-drawer-toggle");o&&o.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const o=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;o===0?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),i=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${i.height}px`);const a=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${a.width}px`)}_updateOverlayMode(){const o=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&o&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(o),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const o=this.$.drawer;this.overlay?(o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-label",this.i18n.drawer)):(o.removeAttribute("role"),o.removeAttribute("aria-modal"),o.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(o=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){o();return}this.$.drawer.addEventListener("transitionend",o,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__ariaModalController.close(),this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const o=this.querySelector("vaadin-drawer-toggle");o&&(o.focus(),o.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(o){o.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(o,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),o&&window.addEventListener(o,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(o){o.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(o){return(getComputedStyle(this).getPropertyValue(o)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const o=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(t=>{t.getAttribute("slot").indexOf("touch-optimized")>-1&&(t.__touchOptimized=!0),o&&t.__touchOptimized?t.setAttribute("slot","navbar-bottom"):t.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),this.$.navbarBottom.querySelector("[name=navbar-bottom]").assignedNodes().length===0?this.$.navbarBottom.setAttribute("hidden",""):this.$.navbarBottom.removeAttribute("hidden"),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),ie(this,()=>{this.removeAttribute("no-anim")})}}m(we);const q=h`
  /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
  :host(:hover) {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  :host([role='menuitem'][menu-item-checked]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([aria-haspopup='true'])::after {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-xs);
    content: var(--lumo-icons-angle-right);
    color: var(--lumo-tertiary-text-color);
  }

  :host(:not([dir='rtl'])[aria-haspopup='true'])::after {
    margin-right: calc(var(--lumo-space-m) * -1);
    padding-left: var(--lumo-space-m);
  }

  :host([expanded]) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl'][aria-haspopup='true'])::after {
    content: var(--lumo-icons-angle-left);
    margin-left: calc(var(--lumo-space-m) * -1);
    padding-right: var(--lumo-space-m);
  }
`;c("vaadin-context-menu-item",[x,q],{moduleId:"lumo-context-menu-item"});const O=h`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;c("vaadin-list-box",O,{moduleId:"lumo-list-box"});const V=h`
  :host {
    --_lumo-list-box-item-selected-icon-display: block;
  }

  /* Normal item */
  [part='items'] ::slotted([role='menuitem']) {
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    cursor: default;
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    padding-left: calc(var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
  }

  /* Hovered item */
  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  [part='items'] ::slotted([role='menuitem']:hover:not([disabled])),
  [part='items'] ::slotted([role='menuitem'][expanded]:not([disabled])) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='items'] ::slotted([role='menuitem']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-border-radius-m) / 4);
  }

  /* Focused item */
  @media (pointer: coarse) {
    [part='items'] ::slotted([role='menuitem']:hover:not([expanded]):not([disabled])) {
      background-color: transparent;
    }
  }
`;c("vaadin-context-menu-list-box",[O,V],{moduleId:"lumo-context-menu-list-box"});const H=h`
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;c("vaadin-context-menu-overlay",[C,H],{moduleId:"lumo-context-menu-overlay"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */oe({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(s){this.info.sourceEvent=s;const o=s.composedPath();this.info.sourceEvent.__composedPath=o},touchstart(s){this._setSourceEvent(s),this.info.touchStartCoords={x:s.changedTouches[0].clientX,y:s.changedTouches[0].clientY};const o=s.composedPath()[0]||s.target;this._timerId=setTimeout(()=>{const e=s.changedTouches[0];s.shiftKey||(L&&(this._fired=!0,this.fire(o,e.clientX,e.clientY)),E("tap"))},500)},touchmove(s){const e=this.info.touchStartCoords;(Math.abs(e.x-s.changedTouches[0].clientX)>15||Math.abs(e.y-s.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(s){this._fired&&s.preventDefault(),this._cancelTimer()},contextmenu(s){s.shiftKey||(this._setSourceEvent(s),this.fire(s.target,s.clientX,s.clientY),E("tap"))},fire(s,o,e){const t=this.info.sourceEvent,i=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});i.detail={x:o,y:e,sourceEvent:t},s.dispatchEvent(i),i.defaultPrevented&&t&&t.preventDefault&&t.preventDefault()}});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const W=s=>class extends re(ne(s)){static get properties(){return{parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.restoreFocusOnClose=!0,this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),e.keyCode===38?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let i=e.bottom-t.height;const r=this.parentOverlay;if(r&&r.hasAttribute("bottom-aligned")){const a=getComputedStyle(r);i=i-parseFloat(a.bottom)-parseFloat(a.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:i}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const e=this.$.content,t=getComputedStyle(e);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(t.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(t.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(t.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(t.paddingTop)}px`}}_shouldRestoreFocus(){return this.parentOverlay?!1:super._shouldRestoreFocus()}_deepContains(e){let t=se(this.localName,e);for(;t;){if(t===this)return!0;t=t.parentOverlay}return!1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j=h`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host([right-aligned]),
  :host([end-aligned]) {
    align-items: flex-end;
  }

  :host([bottom-aligned]) {
    justify-content: flex-end;
  }

  [part='overlay'] {
    background-color: #fff;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-context-menu-overlay",[T,j],{moduleId:"vaadin-context-menu-overlay-styles"});class xe extends W(B(b(v(_)))){static get is(){return"vaadin-context-menu-overlay"}static get template(){return p`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}m(xe);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ce{constructor(o,e){this.query=o,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(o){typeof this.callback=="function"&&this.callback(o.matches)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const U=s=>class extends ae(I(s)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Oe extends U(v(b(_))){static get is(){return"vaadin-context-menu-item"}static get template(){return p`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}m(Oe);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ke(s,o){const{scrollLeft:e}=s;return o!=="rtl"?e:s.scrollWidth-s.clientWidth+e}function Ae(s,o,e){o!=="rtl"?s.scrollLeft=e:s.scrollLeft=s.clientWidth-s.scrollWidth+e}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const X=s=>class extends R(s){static get properties(){return{_hasVaadinListMixin:{value:!0},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(e)}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t));const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new le(e,()=>{this._setItems(this._filterItems(de(this)))})}_getItems(){return this.items}_enhanceItems(e,t,i,r){if(!r&&e){this.setAttribute("aria-orientation",t||"vertical"),e.forEach(n=>{t?n.setAttribute("orientation",t):n.removeAttribute("orientation")}),this._setFocusable(i||0);const a=e[i];e.forEach(n=>{n.selected=n===a}),a&&!a.disabled&&this._scrollToItem(i)}}_filterItems(e){return e.filter(t=>t._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let i;t&&!t.disabled&&(i=this.items.indexOf(t))>=0&&(this.selected=i)}_searchKey(e,t){this._searchReset=ue.debounce(this._searchReset,ce.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(r=>this.__isMatchingKey(r))||(this._searchBuf=t.toLowerCase());const i=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,i,1,r=>this.__isMatchingKey(r)&&getComputedStyle(r).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,i=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/u.test(t)&&t.length===1){const r=this._searchKey(i,t);r>=0&&this._focus(r);return}super._onKeyDown(e)}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(i=>{i.tabIndex=i===t?0:-1})}_focus(e){this.items.forEach((t,i)=>{t.focused=i===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e)}_scrollToItem(e){const t=this.items[e];if(!t)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),a=(this.items[e+1]||t).getBoundingClientRect(),n=(this.items[e-1]||t).getBoundingClientRect();let l=0;!this._isRTL&&a[i[1]]>=r[i[1]]||this._isRTL&&a[i[1]]<=r[i[1]]?l=a[i[1]]-r[i[1]]:(!this._isRTL&&n[i[0]]<=r[i[0]]||this._isRTL&&n[i[0]]>=r[i[0]])&&(l=n[i[0]]-r[i[0]]),this._scroll(l)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",i=ke(this._scrollerElement,t)+e;Ae(this._scrollerElement,t,i)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ee extends X(v(b(g(_)))){static get is(){return"vaadin-context-menu-list-box"}static get template(){return p`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}m(Ee);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Me=s=>class extends s{static get properties(){return{items:Array}}get _tagNamePrefix(){return"vaadin-context-menu"}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().some(t=>t.localName===`${this._tagNamePrefix}-overlay`)||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const e=this.$.overlay,t=e.getFirstChild();if(e.parentOverlay){const i=e.parentOverlay.querySelector("[expanded]");i&&i.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t,i){e.items=t._item.children,e.listenOn=t,e.overlayClass=i;const r=this.$.overlay,a=e.$.overlay;a.positionTarget=t,a.noHorizontalOverlap=!0,a._setParentOverlay(r),r.hasAttribute("theme")?e.setAttribute("theme",r.getAttribute("theme")):e.removeAttribute("theme");const n=e.$.overlay.$.content;n.style.minWidth="",t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:t._item.children}}))}__createComponent(e){let t;return e.component instanceof HTMLElement?t=e.component:t=document.createElement(e.component||`${this._tagNamePrefix}-item`),t._hasVaadinItemMixin&&t.setAttribute("role","menuitem"),t.localName==="hr"?t.setAttribute("role","separator"):t.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(t,e,this._theme),t._item=e,e.text&&(t.textContent=e.text),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),e.children&&e.children.length&&(this.__updateExpanded(t,!1),t.setAttribute("aria-haspopup","true")),t}__initListBox(){const e=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&e.setAttribute("theme",this._theme),e.addEventListener("selected-changed",t=>{const{value:i}=t.detail;if(typeof i=="number"){const r=e.items[i]._item;e.selected=null,r.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:r}}))}}),e}__initOverlay(){const e=this.$.overlay;e.$.backdrop.addEventListener("click",()=>{this.close()}),e.addEventListener(S?"click":"mouseover",t=>{this.__showSubMenu(t)}),e.addEventListener("keydown",t=>{const{key:i}=t,r=this.__isRTL,a=i==="ArrowRight",n=i==="ArrowLeft";!r&&a||r&&n||i==="Enter"||i===" "?this.__showSubMenu(t):!r&&n||r&&a||i==="Escape"?(i==="Escape"&&t.stopPropagation(),this.close(),this.listenOn.focus()):i==="Tab"&&this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const e=document.createElement(this.constructor.is);return e._modeless=!0,e.openOn="opensubmenu",e.setAttribute("hidden",""),this.addEventListener("opened-changed",t=>{t.detail.value||this._subMenu.close()}),e.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),e.addEventListener("item-selected",t=>{const{detail:i}=t;this.dispatchEvent(new CustomEvent("item-selected",{detail:i}))}),this.addEventListener("close-all-menus",()=>{this.close()}),this.addEventListener("item-selected",t=>{const i=t.target,r=t.detail.value,a=i.items.indexOf(r);r.keepOpen&&a>-1?(i._overlayElement.requestContentUpdate(),i._listBox._observer.flush(),i._listBox.items[a].focus()):r.keepOpen||this.close()}),e.addEventListener("opened-changed",t=>{if(!t.detail.value){const i=this._listBox.querySelector("[expanded]");i&&this.__updateExpanded(i,!1)}}),e}__showSubMenu(e,t=e.composedPath().find(i=>i.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this.$.overlay.hasAttribute("opening")){requestAnimationFrame(()=>{this.__showSubMenu(e,t)});return}const i=this._subMenu;if(t){const{children:r}=t._item;if(i.items!==r&&i.close(),!this.opened)return;if(r&&r.length){this.__updateExpanded(t,!0);const{overlayClass:a}=this;this.__openSubMenu(i,t,a)}else i.listenOn.focus()}}__itemsRenderer(e,t,{detail:i}){this.__initMenu(e,t);const r=e.querySelector(this.constructor.is);r.closeOn=t.closeOn;const a=e.querySelector(`${this._tagNamePrefix}-list-box`);a.innerHTML="",[...i.children||t.items].forEach(n=>{const l=this.__createComponent(n);a.appendChild(l)})}_setMenuItemTheme(e,t,i){let r=e.getAttribute("theme")||i;t.theme!=null&&(r=Array.isArray(t.theme)?t.theme.join(" "):t.theme),this.__updateTheme(e,r)}__toggleMenuComponentAttribute(e,t,i){i?(e.setAttribute(t,""),e[`__has-${t}`]=!0):e[`__has-${t}`]&&(e.removeAttribute(t),e[`__has-${t}`]=!1)}__initMenu(e,t){if(e.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const i=this.__initListBox();this._listBox=i,e.appendChild(i);const r=this.__initSubMenu();this._subMenu=r,e.appendChild(r),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(e,t){e.setAttribute("aria-expanded",t.toString()),e.toggleAttribute("expanded",t)}__updateTheme(e,t){t?e.setAttribute("theme",t):e.removeAttribute("theme")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Q extends he(g(w(Y(Me(_))))){static get template(){return p`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-context-menu-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        modeless="[[_modeless]]"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      ></vaadin-context-menu-overlay>
    `}static get is(){return"vaadin-context-menu"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_modeless:{type:Boolean},_context:Object,_phone:{type:Boolean},_touch:{type:Boolean,value:S},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened&&this._setOpened(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened=this.opened,this.close()}ready(){super.ready(),this._overlayElement=this.$.overlay,this.addController(new Ce(this._wideMediaQuery,o=>{this._wide=o})),be(this)}_onOverlayOpened(o){this._setOpened(o.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(o,e){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),o&&e&&(this._listen(o,e,this._boundOpen),this._oldListenOn=o,this._oldOpenOn=e)}_touchOrWideChanged(o,e){this._phone=!e&&o}_setListenOnUserSelect(o){this.listenOn.style.webkitTouchCallout=o,this.listenOn.style.webkitUserSelect=o,this.listenOn.style.userSelect=o,document.getSelection().removeAllRanges()}_closeOnChanged(o,e){const t="vaadin-overlay-outside-click",i=this.$.overlay;e&&this._unlisten(i,e,this._boundClose),o?(this._listen(i,o,this._boundClose),i.removeEventListener(t,this._boundPreventDefault)):i.addEventListener(t,this._boundPreventDefault)}_preventDefault(o){o.preventDefault()}_openedChanged(o){o?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=o}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(o,e){if(e){if(o)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),o=this.__itemsRenderer}this.$.overlay.setProperties({owner:this,renderer:o})}close(){this._setOpened(!1)}_contextTarget(o){if(this.selector){const e=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(e,t=>o.composedPath().indexOf(t)>-1)[0]}return o.target}open(o){o&&!this.opened&&(this._context={detail:o.detail,target:this._contextTarget(o)},this._context.target&&(o.preventDefault(),o.stopPropagation(),this.__x=this._getEventCoordinate(o,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(o,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const o=window.pageYOffset-this.__pageYOffset,e=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-e),this.__adjustPosition("right",e),this.__adjustPosition("top",-o),this.__adjustPosition("bottom",o),this.__pageYOffset+=o,this.__pageXOffset+=e}__adjustPosition(o,e){const i=this.$.overlay.style;i[o]=`${(parseInt(i[o])||0)+e}px`}__alignOverlayPosition(){const o=this.$.overlay;if(o.positionTarget)return;const e=o.style;["top","right","bottom","left"].forEach(d=>e.removeProperty(d)),["right-aligned","end-aligned","bottom-aligned"].forEach(d=>o.removeAttribute(d));const{xMax:t,xMin:i,yMax:r}=o.getBoundaries(),a=this.__x,n=this.__y,l=document.documentElement.clientWidth,u=document.documentElement.clientHeight;this.__isRTL?a>l/2||a>i?e.right=`${Math.max(0,l-a)}px`:(e.left=`${a}px`,this._setEndAligned(o)):a<l/2||a<t?e.left=`${a}px`:(e.right=`${Math.max(0,l-a)}px`,this._setEndAligned(o)),n<u/2||n<r?e.top=`${n}px`:(e.bottom=`${Math.max(0,u-n)}px`,o.setAttribute("bottom-aligned",""))}_setEndAligned(o){o.setAttribute("end-aligned",""),this.__isRTL||o.setAttribute("right-aligned","")}_getEventCoordinate(o,e){if(o.detail instanceof Object){if(o.detail[e])return o.detail[e];if(o.detail.sourceEvent)return this._getEventCoordinate(o.detail.sourceEvent,e)}else{const t=`client${e.toUpperCase()}`,i=o.changedTouches?o.changedTouches[0][t]:o[t];if(i===0){const r=o.target.getBoundingClientRect();return e==="x"?r.left:r.top+r.height}return i}}_listen(o,e,t){y[e]?z(o,e,t):o.addEventListener(e,t)}_unlisten(o,e,t){y[e]?D(o,e,t):o.removeEventListener(e,t)}_onGlobalContextMenu(o){o.shiftKey||(o.preventDefault(),this.close())}}m(Q);(function(){function s(n){return window.Vaadin.Flow.tryCatchWrapper(n,"Vaadin Context Menu")}function o(n,l){try{return window.Vaadin.Flow.clients[n].getByNodeId(l)}catch(u){console.error("Could not get node %s from app %s",l,n),console.error(u)}}function e(n,l){n.$connector||(n.$connector={generateItems:s(u=>{const d=t(l,u);n.items=d})})}function t(n,l){const u=o(n,l);if(u)return Array.from(u.children).map(d=>{const f={component:d,checked:d._checked,keepOpen:d._keepOpen,theme:d.__theme};return d._hasVaadinItemMixin&&d._containerNodeId&&(f.children=t(n,d._containerNodeId)),d._item=f,f})}function i(n,l){n._item&&(n._item.checked=l,n._item.keepOpen&&n.toggleAttribute("menu-item-checked",l))}function r(n,l){n._item&&(n._item.keepOpen=l)}function a(n,l){n._item&&(n._item.theme=l)}window.Vaadin.Flow.contextMenuConnector={initLazy(...n){return s(e)(...n)},generateItemsTree(...n){return s(t)(...n)},setChecked(...n){return s(i)(...n)},setKeepOpen(...n){return s(r)(...n)},setTheme(...n){return s(a)(...n)}}})();(function(){function s(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu Target")}function o(e){e.$contextMenuTargetConnector||(e.$contextMenuTargetConnector={openOnHandler:s(function(t){t.preventDefault(),t.stopPropagation(),this.$contextMenuTargetConnector.openEvent=t;let i={};e.getContextMenuBeforeOpenDetail&&(i=e.getContextMenuBeforeOpenDetail(t)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:i}))}),updateOpenOn:s(function(t){this.removeListener(),this.openOnEventType=t,customElements.whenDefined("vaadin-context-menu").then(s(()=>{y[t]?z(e,t,this.openOnHandler):e.addEventListener(t,this.openOnHandler)}))}),removeListener:s(function(){this.openOnEventType&&(y[this.openOnEventType]?D(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:s(function(t){t.open(this.openEvent)}),removeConnector:s(function(){this.removeListener(),e.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...e){return s(o)(...e)}}})();(function(){const s=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Menu Bar")};function o(e,t){if(e.$connector)return;const i=new MutationObserver(r=>{r.some(n=>{const l=n.oldValue,u=n.target.getAttribute(n.attributeName);return l!==u})&&e.$connector.generateItems()});e.$connector={generateItems:s(r=>{if(!e.shadowRoot){setTimeout(()=>e.$connector.generateItems(r));return}r&&(e.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(t,r));let a=e.__generatedItems||[];a.forEach(n=>n.disabled=n.component.disabled),a=a.filter(n=>!n.component.hidden),a.forEach(n=>{i.observe(n.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),e.items=a,e._buttons.forEach(n=>{n.item&&n.item.component&&n.addEventListener("click",l=>{l.composedPath().indexOf(n.item.component)===-1&&(n.item.component.click(),l.stopPropagation())})})})}}window.Vaadin.Flow.menubarConnector={initLazy(...e){return s(o)(...e)}}})();const Le=h`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-menu-bar-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([slot='overflow']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([slot='overflow']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([slot='overflow']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([slot='overflow']) [part='prefix'],
  :host([slot='overflow']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][slot='overflow']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;c("vaadin-menu-bar-button",[$,Le],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-menu-bar-button",h`
    :host {
      flex-shrink: 0;
    }

    :host([slot='overflow']) {
      margin-inline-end: 0;
    }

    [part='label'] ::slotted(vaadin-menu-bar-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class Te extends F{static get is(){return"vaadin-menu-bar-button"}}m(Te);const Be=h`
  [part='content'] {
    display: flex;
    /* tweak to inherit centering from menu bar button */
    align-items: inherit;
    justify-content: inherit;
  }

  [part='content'] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: var(--lumo-space-xs);
    box-sizing: border-box !important;
  }
`;c("vaadin-menu-bar-item",[x,q,Be],{moduleId:"lumo-menu-bar-item"});c("vaadin-menu-bar-list-box",[O,V],{moduleId:"lumo-menu-bar-list-box"});const Ie=h`
  :host(:first-of-type) {
    padding-top: var(--lumo-space-xs);
  }
`;c("vaadin-menu-bar-overlay",[C,H,Ie],{moduleId:"lumo-menu-bar-overlay"});c("vaadin-menu-bar",h`
    :host([has-single-button]) ::slotted(vaadin-menu-bar-button) {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) ::slotted(vaadin-menu-bar-button:first-of-type),
    :host([theme~='end-aligned'][has-single-button]) ::slotted(vaadin-menu-bar-button) {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Se extends U(v(b(_))){static get is(){return"vaadin-menu-bar-item"}static get template(){return p`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem")}}m(Se);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ze extends X(v(b(g(_)))){static get is(){return"vaadin-menu-bar-list-box"}static get template(){return p`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}m(ze);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-menu-bar-overlay",[T,j],{moduleId:"vaadin-menu-bar-overlay-styles"});class De extends W(B(b(v(_)))){static get is(){return"vaadin-menu-bar-overlay"}static get template(){return p`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}m(De);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $e extends Q{static get is(){return"vaadin-menu-bar-submenu"}static get template(){return p`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-menu-bar-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        modeless="[[_modeless]]"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      ></vaadin-menu-bar-overlay>
    `}constructor(){super(),this.openOn="opensubmenu"}get _tagNamePrefix(){return"vaadin-menu-bar"}_openedChanged(o){this.$.overlay.opened=o}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}m($e);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fe=s=>class extends R(ge(I(g(s)))){static get properties(){return{openOnHover:{type:Boolean},_hasOverflow:{type:Boolean,value:!1},_overflow:{type:Object},_container:{type:Object}}}static get observers(){return["_itemsChanged(items, items.splices)","__hasOverflowChanged(_hasOverflow, _overflow)","__i18nChanged(i18n, _overflow)","_menuItemsChanged(items, _overflow, _container, items.splices)"]}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}get focused(){return(this._getItems()||[]).find(M)||this._expandedButton}get _vertical(){return!1}get _observeParent(){return!0}get _buttons(){return Array.from(this.querySelectorAll("vaadin-menu-bar-button"))}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}ready(){super.ready(),this.setAttribute("role","menubar"),this._overflowController=new me(this,"overflow","vaadin-menu-bar-button",{initializer:i=>{i.setAttribute("hidden","");const r=document.createElement("div");r.setAttribute("aria-hidden","true"),r.innerHTML="&centerdot;".repeat(3),i.appendChild(r),this._overflow=i,this._initButtonAttrs(i)}}),this.addController(this._overflowController),this.addEventListener("mousedown",()=>this._hideTooltip()),this.addEventListener("mouseleave",()=>this._hideTooltip()),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),this._subMenu.$.overlay.addEventListener("keydown",this.__boundOnContextMenuKeydown);const t=this.shadowRoot.querySelector('[part="container"]');t.addEventListener("click",this.__onButtonClick.bind(this)),t.addEventListener("mouseover",i=>this._onMouseOver(i)),this._container=t}_getItems(){return this._buttons}disconnectedCallback(){super.disconnectedCallback(),this._hideTooltip(!0)}_onResize(){this.__detectOverflow()}__hasOverflowChanged(e,t){t&&t.toggleAttribute("hidden",!e)}_menuItemsChanged(e,t,i){!t||!i||e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__i18nChanged(e,t){t&&e&&e.moreOptions!==void 0&&(e.moreOptions?t.setAttribute("aria-label",e.moreOptions):t.removeAttribute("aria-label"))}__getOverflowCount(e){return e.item&&e.item.children&&e.item.children.length||0}__restoreButtons(e){e.forEach(t=>{t.disabled=t.item&&t.item.disabled||this.disabled,t.style.visibility="",t.style.position="";const i=t.item&&t.item.component;i instanceof HTMLElement&&i.getAttribute("role")==="menuitem"&&this.__restoreItem(t,i)}),this.__updateOverflow([])}__restoreItem(e,t){e.appendChild(t),t.removeAttribute("role"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-haspopup"),t.removeAttribute("tabindex")}__updateOverflow(e){this._overflow.item={children:e},this._hasOverflow=e.length>0}__setOverflowItems(e,t){const i=this._container;if(i.offsetWidth<i.scrollWidth){this._hasOverflow=!0;const r=this.__isRTL,a=i.getBoundingClientRect().left;let n;for(n=e.length;n>0;n--){const d=e[n-1],f=getComputedStyle(d),k=d.getBoundingClientRect().left-a;if(!r&&k+d.offsetWidth<i.offsetWidth-t.offsetWidth||r&&k>=t.offsetWidth)break;d.disabled=!0,d.style.visibility="hidden",d.style.position="absolute",d.style.width=f.width}const l=e.filter((d,f)=>f>=n).map(d=>d.item);this.__updateOverflow(l);const u=e.slice(0,n);n>0&&!u.some(d=>d.getAttribute("tabindex")==="0")&&this._setTabindex(u[n-1],!0)}}__detectOverflow(){const e=this._overflow,t=this._buttons.filter(n=>n!==e),i=this.__getOverflowCount(e);this.__restoreButtons(t),this.__setOverflowItems(t,e);const r=this.__getOverflowCount(e);i!==r&&this._subMenu.opened&&this._subMenu.close();const a=r===t.length||r===0&&t.length===1;this.toggleAttribute("has-single-button",a)}_removeButtons(){this._buttons.forEach(e=>{e!==this._overflow&&this.removeChild(e)})}_initButton(e){const t=document.createElement("vaadin-menu-bar-button"),i={...e};if(t.item=i,e.component){const r=this.__getComponent(i);i.component=r,r.item=i,t.appendChild(r)}else e.text&&(t.textContent=e.text);return t}_initButtonAttrs(e){e.setAttribute("role","menuitem"),(e===this._overflow||e.item&&e.item.children)&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded","false"))}_setButtonDisabled(e,t){e.disabled=t,e.setAttribute("tabindex",t?"-1":"0")}_setButtonTheme(e,t){let i=t;const r=e.item&&e.item.theme;r!=null&&(i=Array.isArray(r)?r.join(" "):r),i?e.setAttribute("theme",i):e.removeAttribute("theme")}__getComponent(e){const t=e.component;let i;const r=t instanceof HTMLElement;if(r&&t.localName==="vaadin-menu-bar-item"?i=t:(i=document.createElement("vaadin-menu-bar-item"),i.appendChild(r?t:document.createElement(t))),e.text){const a=i.firstChild||i;a.textContent=e.text}return i}__renderButtons(e=[]){this._removeButtons(),e.length!==0&&(e.forEach(t=>{const i=this._initButton(t);this.insertBefore(i,this._overflow),this._setButtonDisabled(i,t.disabled),this._initButtonAttrs(i),this._setButtonTheme(i,this._theme)}),this.__detectOverflow())}_showTooltip(e,t){const i=this._tooltipController.node;i&&i.isConnected&&(i.generator===void 0&&(i.generator=({item:r})=>r&&r.tooltip),this._subMenu.opened||(this._tooltipController.setTarget(e),this._tooltipController.setContext({item:e.item}),i._stateController.open({hover:t,focus:!t})))}_hideTooltip(e){const t=this._tooltipController&&this._tooltipController.node;t&&t._stateController.close(e)}_setExpanded(e,t){e.toggleAttribute("expanded",t),e.toggleAttribute("active",t),e.setAttribute("aria-expanded",t?"true":"false")}_setTabindex(e,t){e.setAttribute("tabindex",t?"0":"-1")}_focusItem(e,t){const i=t&&this.focused===this._expandedButton;i&&this._close(),super._focusItem(e,t),this._buttons.forEach(r=>{this._setTabindex(r,r===e)}),i&&e.item&&e.item.children?this.__openSubMenu(e,!0,{keepFocus:!0}):e===this._overflow?this._hideTooltip():this._showTooltip(e)}_getButtonFromEvent(e){return Array.from(e.composedPath()).find(t=>t.localName==="vaadin-menu-bar-button")}_setFocused(e){if(e){const t=this.querySelector('[tabindex="0"]');t&&this._buttons.forEach(i=>{this._setTabindex(i,i===t),i===t&&i!==this._overflow&&pe()&&this._showTooltip(i)})}else this._hideTooltip()}_onArrowDown(e){e.preventDefault();const t=this._getButtonFromEvent(e);t===this._expandedButton?this._focusFirstItem():this.__openSubMenu(t,!0)}_onArrowUp(e){e.preventDefault();const t=this._getButtonFromEvent(e);t===this._expandedButton?this._focusLastItem():this.__openSubMenu(t,!0,{focusLast:!0})}_onEscape(e){e.composedPath().includes(this._expandedButton)&&this._close(!0),this._hideTooltip(!0)}_onKeyDown(e){switch(e.key){case"ArrowDown":this._onArrowDown(e);break;case"ArrowUp":this._onArrowUp(e);break;default:super._onKeyDown(e);break}}_itemsChanged(){const e=this._subMenu;e&&e.opened&&e.close()}_onMouseOver(e){const t=this._getButtonFromEvent(e);if(!t)this._hideTooltip();else if(t!==this._expandedButton){const i=this._subMenu.opened;t.item.children&&(this.openOnHover||i)?this.__openSubMenu(t,!1):i&&this._close(),t===this._overflow||this.openOnHover&&t.item.children?this._hideTooltip():this._showTooltip(t,!0)}}__onContextMenuKeydown(e){const t=Array.from(e.composedPath()).find(i=>i._item);if(t){const i=t.parentNode;e.keyCode===38&&t===i.items[0]&&this._close(!0),(e.keyCode===37||e.keyCode===39&&!t._item.children)&&(e.stopImmediatePropagation(),this._onKeyDown(e))}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const t=this._getButtonFromEvent(e);t&&this.__openSubMenu(t,!1)}__openSubMenu(e,t,i={}){const r=this._subMenu,a=e.item;if(r.opened&&(this._close(),r.listenOn===e))return;const n=a&&a.children;if(!n||n.length===0){this.__fireItemSelected(a);return}r.items=n,r.listenOn=e;const l=r.$.overlay;l.positionTarget=e,l.noVerticalOverlap=!0,this._expandedButton=e,requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:n}})),this._hideTooltip(!0),this._setExpanded(e,!0)}),this.style.pointerEvents="auto",l.addEventListener("vaadin-overlay-open",()=>{i.focusLast&&this._focusLastItem(),i.keepFocus&&this._focusItem(this._expandedButton,!1),t||l.$.overlay.focus(),l._updatePosition()},{once:!0})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,t=e.items[e.items.length-1];t&&t.focus()}__onItemSelected(e){e.stopPropagation(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(e){const t=this._expandedButton;t&&t.hasAttribute("expanded")&&(this._setExpanded(t,!1),e&&this._focusItem(t,!1),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pe extends Fe(_e(w(v(_)))){static get template(){return p`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      </style>

      <div part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-menu-bar-submenu is-root overlay-class="[[overlayClass]]"></vaadin-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-menu-bar"}static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})},overlayClass:{type:String}}}static get observers(){return["_themeChanged(_theme, _overflow, _container)"]}ready(){super.ready(),this._tooltipController=new ve(this),this._tooltipController.setManual(!0),this.addController(this._tooltipController)}_disabledChanged(o,e){super._disabledChanged(o,e),e!==o&&this.__updateButtonsDisabled(o)}_themeChanged(o,e,t){e&&t&&(this._buttons.forEach(i=>this._setButtonTheme(i,o)),this.__detectOverflow()),o?this._subMenu.setAttribute("theme",o):this._subMenu.removeAttribute("theme")}__updateButtonsDisabled(o){this._buttons.forEach(e=>{e.disabled=o||e.item&&e.item.disabled})}}m(Pe);const Re=h`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }

  :host([slot~='navbar']) {
    color: var(--lumo-secondary-text-color);
  }
`;c("vaadin-drawer-toggle",[$,Re],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-drawer-toggle",h`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: default;
      position: relative;
      outline: none;
      height: 24px;
      width: 24px;
      padding: 4px;
    }

    [part='icon'],
    [part='icon']::after,
    [part='icon']::before {
      position: absolute;
      top: 8px;
      height: 3px;
      width: 24px;
      background-color: #000;
    }

    [part='icon']::after,
    [part='icon']::before {
      content: '';
    }

    [part='icon']::after {
      top: 6px;
    }

    [part='icon']::before {
      top: 12px;
    }
  `,{moduleId:"vaadin-drawer-toggle-styles"});class Ke extends F{static get template(){return p`
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._toggleFallbackIcon(),this.$.slot.addEventListener("slotchange",()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const o=this.$.slot.assignedNodes();this._showFallbackIcon=o.length>0&&o.every(e=>fe(e))}}m(Ke);export{U as I,R as K,X as L,Ce as M,P as a,ke as g,x as i,O as l,C as m};
