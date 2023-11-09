class LaynolElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Laynol was here";
    }
}

customElements.define("x-laynol", LaynolElement)