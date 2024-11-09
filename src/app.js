import { App, EventManager, DataManager } from '../core/index.js'
import Navbar from './components/Navbar.js'
import Container from './components/Container.js'

// Initialise les gestionnaires d'événements et de données
const dataManager = new DataManager({ message: 'Hello, world!' })
const eventManager = new EventManager()

// Crée une instance de l'application
const app = new App(document.getElementById('app'))

// Crée les composants
const navbar = new Navbar()
const container = new Container(dataManager, eventManager)

// Ajoute les composants à l'application
app.start(navbar)
app.start(container)

// Gestion de l'événement de clic du bouton dans le Container
eventManager.on('changeSentence', () => {
    const newMessage = dataManager.get('message') === 'Hello, world!'
        ? 'Hello, React-like world!'
        : 'Hello, world!'
    dataManager.set('message', newMessage)
});
