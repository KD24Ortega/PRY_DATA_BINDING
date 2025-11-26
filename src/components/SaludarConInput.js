import { LitElement, html } from "lit";

export class SaludarConInput extends LitElement {

    static properties = {
        nombre: { type: String },
        imagen: { type: String }
    };

    constructor() {
        super();
        this.nombre = "https://www.shutterstock.com/image-photo/side-view-dark-grey-car-600nw-2569360193.jpg";
        this.imagen = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fcarro&psig=AOvVaw1jCbgTcLAEhKU3XDqoDaki&ust=1764206588234000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICQ9vbTjpEDFQAAAAAdAAAAABAE";
    }
    actualizarNombre(e) {
        this.nombre = e.target.value;
    }

    render() {
        return html `
            <input value="${this.nombre}" @input="${this.actualizarNombre}"> 
                <p>Hola ${this.nombre}</p>
                <img src="${this.nombre}"/>
        `;
    }

    // DOS CAJAS DE TEXTO QUE SUME DOS NUMEROS SIN BOTON con un solo metodo
    

}

customElements.define("saludar-con-input", SaludarConInput);