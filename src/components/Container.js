/**
 * exemple de composant utilisant la classe component
 * 
 */
import Component from '../../core/classes/Component.js'
import Element from '../../core/classes/Element.js'

export default class Container extends Component {
    constructor(dataManager, eventManager) {
        super()
        this.dataManager = dataManager

        const myDivElement = new Element('div', {textContent: this.dataManager.get('message')})
        this.add(myDivElement)

        // Bouton qui émet un événement lorsqu'il est cliqué
        const button = new Element('button', {textContent: 'Click me'})
        this.add(button)

        button.render().addEventListener('click', () => {
            eventManager.emit('changeSentence')
        })

        // Mise à jour du texte lorsqu'il y a un changement de données
        this.dataManager.subscribe(data => {
            myDivElement.update(data.message)
            this.update()
        })
    }
}