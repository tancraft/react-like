class DataManager {
    constructor(initialData = {}) {
        this.data = initialData
        this.listeners = []
    }

    set(key, value) {
        this.data[key] = value
        this.notify()
    }

    get(key) {
        return this.data[key]
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notify() {
        this.listeners.forEach(listener => listener(this.data))
    }
}

class EventManager {
    constructor() {
        this.events = {}
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(listener)
    }

    emit(event, data) {
        if (!this.events[event]) return;
        this.events[event].forEach(listener => listener(data))
    }
}

class Element {
    constructor(tag, content = '') {
        this.tag = tag
        this.content = content
        this.element = null
    }

    render() {
        if (!this.element) {
            this.element = document.createElement(this.tag)
            this.element.textContent = this.content
        }
        return this.element
    }

    update(newContent) {
        if (newContent !== undefined) {
            this.content = newContent
            if (this.element) {
                this.element.textContent = this.content
            }
        }
    }
}

class Component {
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
        })
        return this.element
    }

    update() {
        this.children.forEach(child => child.update())
    }
}

class App {
    constructor(rootElement) {
        this.rootElement = rootElement
        this.mainComponent = null
    }

    start(component) {
        this.mainComponent = component
        this.rootElement.appendChild(this.mainComponent.render())
    }

    update() {
        if (this.mainComponent) {
            this.mainComponent.update()
        }
    }
}

class Container extends Component {
    constructor(dataManager, eventManager) {
        super()
        this.dataManager = dataManager

        const myDivElement = new Element('div', this.dataManager.get('message'));
        this.add(myDivElement)

        // Bouton qui émet un événement lorsqu'il est cliqué
        const button = new Element('button', 'Click me')
        this.add(button)

        button.render().addEventListener('click', () => {
            eventManager.emit('buttonClick')
        })

        // Mise à jour du texte lorsqu'il y a un changement de données
        this.dataManager.subscribe(data => {
            myDivElement.update(data.message)
            this.update()
        })
    }
}

class Navbar extends Component {
    constructor() {
        super()
        
        // Créons quelques éléments de la barre de navigation
        const navTitle = new Element('h1', 'My App')
        const navLink1 = new Element('a', 'Home')
        const navLink2 = new Element('a', 'About')
        
        // Ajoutons ces éléments à la barre de navigation
        this.add(navTitle)
        this.add(navLink1)
        this.add(navLink2)
    }

    render() {
        if (!this.element) {
            this.element = document.createElement('nav') // Utilise un élément `nav` pour la barre de navigation
        }
        this.element.innerHTML = ''; // Efface le contenu précédent
        this.children.forEach(child => {
            const childElement = child.render()
            childElement.style.marginRight = '10px' // Un petit style pour espacer les liens
            this.element.appendChild(childElement)
        })
        return this.element
    }
}


// Initialisation du DataManager avec un message initial
const dataManager = new DataManager({ message: 'Hello, world!' })

// Initialisation du EventManager
const eventManager = new EventManager()

// Création des composants : Navbar et Container
const navbar = new Navbar()
const container = new Container(dataManager, eventManager);

// Création de l'application et ajout des composants
const app = new App(document.getElementById('app'));
app.start(navbar)     // Ajout de la Navbar en premier
app.start(container)   // Ajout du Container en dessous de la Navbar

// Gestion de l'événement de clic du bouton dans le Container
eventManager.on('buttonClick', () => {
    const newMessage = dataManager.get('message') === 'Hello, world!'
        ? 'Hello, React-like world!'
        : 'Hello, world!'
    dataManager.set('message', newMessage)
})


