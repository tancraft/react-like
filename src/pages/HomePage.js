import HeaderComponent from '../components/HeaderComponent.js';
import FooterComponent from '../components/FooterComponent.js';

class HomePage {
    constructor() {
        this.header = new HeaderComponent();
        this.footer = new FooterComponent();
    }

    render() {

        document.body.appendChild(this.header);
        document.body.appendChild(this.footer);

        this.addEvents()
        console.log("homepage loaded")

    }

    addEvents(){
        // Capture de l’événement dans HomePage ou app.js
        window.addEventListener('resize', () => {
            console.log("Window resized");
        });
    }
}

export default HomePage;
