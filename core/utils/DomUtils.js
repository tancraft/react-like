// DOMUtils.js

// Fonction pour créer un élément HTML avec des attributs
export function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
}



// // Fonction pour émettre un événement personnalisé
// export function dispatchCustomEvent(target, eventName, detail = {}, options = {}) {
//     const event = new CustomEvent(eventName, {
//         detail,
//         bubbles: true,
//         composed: true,
//         ...options
//     });
//     target.dispatchEvent(event);
// }

// // Fonction pour ajouter un listener d'événement personnalisé et retourner une fonction pour nettoyer
// export function addCustomEventListener(target, eventName, handler, options = {}) {
//     target.addEventListener(eventName, handler, options);
//     return () => target.removeEventListener(eventName, handler, options);
// }

// // Fonction pour déléguer un événement à un élément enfant correspondant au sélecteur
// export function addDelegatedEventListener(target, eventType, selector, handler) {
//     const listener = (event) => {
//         if (event.target.matches(selector)) {
//             handler(event);
//         }
//     };
//     target.addEventListener(eventType, listener);
//     return () => target.removeEventListener(eventType, listener);
// }

