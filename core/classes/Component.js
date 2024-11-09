/**
 * Classe de base permettant de creer des composants
 * à partir d'éléments ne sera pas instancier directement
 */
export default class Component {
    constructor() {
        this.children = []
        this.element = null
    }

    add(child) {
        this.children.push(child)
    }

    render() {
        if (!this.element) {
            this.element = document.createElement('div')
        }

        this.element.innerHTML = ''

        this.children.forEach(child => {
            this.element.appendChild(child.render())
        });

        return this.element
    }

    update() {
        
        this.children.forEach(child => child.update())
    }
}