@bootstrap;

const template = document.createElement('template');

template.innerHTML = `
<style>
 @import "web-components/section/section.css";
</style>
<div>
<div class="container w-100">
  <div class="row">
    <div class="col-6">
    <slot></slot>
    </div>
    <div class="col-6">
    <slot></slot>
    </div>
  </div>
  </div>
`
class Section extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('Component initiated!');
    }

}
    window.customElements.define('site-section', Section);