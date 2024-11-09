/**
 * Classe permettant de créer des éléments DOM
 * et d'y ajouter des attributs
 */
export default class Element {
    constructor(tag, options = {}) {
        this.tag = tag
        this.id = options.id || ''
        this.classnames = options.classnames || []
        this.href = options.href || ''
        this.textContent = options.textContent || ''
        this.element = null
    }

    render() {
        if (!this.element) {
            this.element = document.createElement(this.tag)
            this.element.textContent = this.textContent
            this.element.id = this.id
            this.element.className = this.classnames.join(' ')
            if (this.href) {
                this.element.href = this.href
            }
        }
        return this.element
    }

    update(newContent) {
        if (newContent !== undefined) {
            this.textContent = newContent
            if (this.element) {
                this.element.textContent = this.textContent
            }
        }
    }

    addClasses(classes) {
        if (this.element) {
            this.element.classList.add(...classes)
        }
    }

    addAttributes(attributes) {
        if (this.element) {
            Object.keys(attributes).forEach(key => {
                this.element.setAttribute(key, attributes[key])
            })
        }
    }
}