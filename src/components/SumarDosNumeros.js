import { LitElement, html } from "lit";

export class SumarDosNumeros extends LitElement {

    static properties = {
        numero1: { type: Number },
        numero2: { type: Number },
        suma: { type: Number },
        valido: { type: Boolean }
    };

    constructor() {
        super();
        this.numero1 = 10;
        this.numero2 = 40;
        this.suma = this.numero1 + this.numero2;
        this.valido = true;
    }

    sumar(e, propiedad) {
        const valor = e.target.value.toLowerCase();
        
        if (valor === 'e') {
            this.valido = true;
            this[propiedad] = 2.718;
            this.suma = this.numero1 + this.numero2;
        } else if (valor === '' || isNaN(valor)) {
            this.valido = false;
            this.suma = 0;
        } else {
            this.valido = true;
            this[propiedad] = Number(valor);
            this.suma = this.numero1 + this.numero2;
        }
    }

    render() {
        return html`
            <input type="text" .value="${this.numero1}" 
                @input="${(e) => this.sumar(e, 'numero1')}">
            <input type="text" .value="${this.numero2}" 
                @input="${(e) => this.sumar(e, 'numero2')}">
            
            ${this.valido 
                ? html`<p>Suma: ${this.suma}</p>`
                : html`<p>Dato invlido</p>`
            }
        `;
    }
}

customElements.define("sumar-dos-numeros", SumarDosNumeros);