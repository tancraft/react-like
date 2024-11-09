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

    }
}

export default HomePage;
