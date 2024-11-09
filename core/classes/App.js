
export default class App {
    constructor(rootElement) {
        this.rootElement = rootElement
        this.mainComponent = null
    }

    start(component) {
        this.mainComponent = component;
        this.rootElement.appendChild(this.mainComponent.render())
    }

    update() {
        if (this.mainComponent) {
            this.mainComponent.update()
        }
    }
}