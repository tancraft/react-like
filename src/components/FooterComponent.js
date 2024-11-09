import BaseComponent from '../../core/components/BaseComponent.js';

class FooterComponent extends BaseComponent {

    // Méthode appelée lorsque le composant est ajouté au DOM
    connectedCallback() {

        // Ajoute du contenu HTML dans le shadowRoot
        this.shadowRoot.innerHTML = `<footer><button id="footer-btn">Click me</button</footer>`;

        // a noter que les evenement ne sont pas ecouter par l app si il ne s agit pas de custom event
        // Crée un listener spécifique au bouton du footer
        this.shadowRoot.querySelector('#footer-btn').addEventListener('click', this.handleClick);
        const event = new CustomEvent('footer-loaded', {
            detail: { message: 'Footer has loaded' },
            bubbles: true, // Permet de propager l'événement dans le DOM
        });
        this.dispatchEvent(event);
        console.log(this.style)

    }

    handleClick() {
        console.log("Button in footer clicked");
    }

    // Méthode appelée lorsque le composant est retiré du DOM
    disconnectedCallback() {

        // Libérer les ressources ou nettoyer les éléments (facultatif ici)
        this.shadowRoot.querySelector('#footer-btn').removeEventListener('click', this.handleClick);
        console.log('FooterComponent has been removed from the DOM.');
    }
}

// Déclare le composant personnalisé 'footer-component' pour l’utiliser dans le DOM
customElements.define('footer-component', FooterComponent);

export default FooterComponent;
