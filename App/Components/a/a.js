export class A extends HTMLElement{
    constructor(){
        super();
        this.render();

    }
    render(){
            this.innerHTML = /* html */ `
                <style>
                    @import "./App/Components/a/a.css";
                </style>
                <p>Hola Mundoo</p>
            `
    }
}
customElements.define("aaa", A);