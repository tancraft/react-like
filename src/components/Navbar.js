/**
 * exemple de composant utilisant la classe component
 * 
 */
import Component from '../../core/classes/Component.js'
import Element from '../../core/classes/Element.js'

// export default class Navbar extends Component {
//     constructor() {
//         super();
        
//         // Créons quelques éléments de la barre de navigation
//         const navTitle = new Element('h1', {textContent: 'My App'});

//         const navLink1 = new Element('a', {textContent: 'Home',
//             href: '/'

//         });

//         const navLink2 = new Element('a', {textContent: 'grid',
//             href: 'grid.html'
//         });
//         const navLink3 = new Element('a', {textContent: 'tableau',
//             href: 'tableau.html'
//         });
        
//         // rendu des éléments de la navigation
//         this.add(navTitle);
//         this.add(navLink1);
//         this.add(navLink2);
//         this.add(navLink3);
//     }

//     render() {
//         if (!this.element) {
//             this.element = document.createElement('nav'); // Utilise un élément `nav` pour la barre de navigation
//         }
//         this.element.innerHTML = ''; // Efface le contenu précédent
//         this.children.forEach(child => {
//             const childElement = child.render();
//             childElement.style.marginRight = '10px'; // Un petit style pour espacer les liens
//             this.element.appendChild(childElement);
//         });
//         return this.element;
//     }
// }

export default class Navbar extends Component {
    constructor() {
        super()
        
        // Créons quelques éléments de la barre de navigation
        const navTitle = new Element('h1', {textContent: 'My App'})

        const navLink1 = new Element('a', {textContent: 'Home',
            href: '/'

        })

        const navLink2 = new Element('a', {textContent: 'grid',
            href: 'grid.html'
        })
        const navLink3 = new Element('a', {textContent: 'tableau',
            href: 'tableau.html'
        })
        
        // rendu des éléments de la navigation
        this.add(navTitle)
        this.add(navLink1)
        this.add(navLink2)
        this.add(navLink3)
    }

    render() {
        if (!this.element) {
            this.element = document.createElement('nav') // Utilise un élément `nav` pour la barre de navigation
        }
        this.element.innerHTML = '' // Efface le contenu précédent
        this.children.forEach(child => {
            const childElement = child.render()
            childElement.style.marginRight = '10px' // Un petit style pour espacer les liens
            this.element.appendChild(childElement)
        })
        return this.element
    }
}