export function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
}
