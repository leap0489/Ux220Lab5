class LaynolElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Laynol was here";
    }
}

customElements.define("x-laynol", LaynolElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>
        `;
    }
}

customElements.define("x-center",CenterElement);

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear",YearElement);


class BlueElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:blue">${this.innerHTML}</div>
        `;
    }
}

customElements.define("x-blue",BlueElement);