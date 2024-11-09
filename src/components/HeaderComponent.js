import BaseComponent from '../../core/components/BaseComponent.js';

class HeaderComponent extends BaseComponent {
    connectedCallback() {
        this.shadowRoot.innerHTML = `<header>Header Content <button id="header-btn">Click me</button></header>`;

        this.shadowRoot.querySelector('#header-btn').addEventListener('click', this.handleClick);

        const event = new CustomEvent('header-loaded', {
            detail: { message: 'header has loaded' },
            bubbles: true, // Permet de propager l'événement dans le DOM
        });
        this.dispatchEvent(event);
    }

    handleClick() {
        console.log("Button in header clicked");
    }

    // Méthode appelée lorsque le composant est retiré du DOM
    disconnectedCallback() {
        // Libérer les ressources ou nettoyer les éléments (facultatif ici)
        this.shadowRoot.querySelector('#header-btn').removeEventListener('click', this.handleClick);
        console.log('HeaderComponent has been removed from the DOM.');
    }
}

customElements.define('header-component', HeaderComponent);

export default HeaderComponent;
