class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Logic to run when component is added to the DOM
    }

    disconnectedCallback() {
        // Logic to run when component is removed from the DOM
    }
}

customElements.define('base-component', BaseComponent);

export default BaseComponent;
