import { LitElement, html, css } from "lit";

export class HolaMundo extends LitElement {

    nombre = "Kevin David";
    apellido = "Ortega Jara";

    //Paradigmas de concatenacion

    nombresCompletos = this.nombre + " " + this.apellido;

    nombresComp = `${this.nombre} ${this.apellido}`;

    nomComp = `${this.nombre + " " + this.apellido}`;

    render() {
        return html `
        
            <h1>Hola Mundo desde LitElement</h1>
            <p>Hola ${this.nombresCompletos}</p>
        `;
    }
}

customElements.define("hola-mundo", HolaMundo);