import{d as i,E as n,P as r,h as l}from"./generated-flow-imports-706c75b0.js";import{i as h,r as c,d as m,T as p}from"./indexhtml-0e56a356.js";/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const a=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(s=>{s.target.resizables?s.target.resizables.forEach(e=>{e._onResize(s.contentRect)}):s.target._onResize(s.contentRect)})})}),z=i(t=>class extends t{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),a.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,a.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),a.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const o=e.resizables;o&&(o.delete(this),o.size===0&&a.unobserve(e)),this.__parent=null}}_onResize(e){}}),d=h`
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
`;c("vaadin-horizontal-layout",d,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class g extends n(p(r)){static get template(){return l`
      <style>
        :host {
          display: flex;
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
    `}static get is(){return"vaadin-horizontal-layout"}}m(g);export{z as R};
