class LaynolElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Laynol was here";
    }
}

customElements.define("x-laynol", LaynolElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<div style="text-align: center; color: black">${this.innerHTML}</div>
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


class ShadowElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-shadow:red 1px 1px">${this.innerHTML}</div>
        `;
    }
}

customElements.define("x-shadow",ShadowElement);