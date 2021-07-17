import './culinary-item.js';

class CulinaryList extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

	set culinaries(culinaries) {
 		this._culinaries = culinaries;
     	this.render();
   	}

	render() {
	    this.shadowDOM.innerHTML = "";
        this._culinaries.forEach(culinary => {
            const culinaryItemElement = document.createElement("culinary-item");
            culinaryItemElement.culinary = culinary;
            this.shadowDOM.appendChild(culinaryItemElement);
        })
	}

	renderError(message) {
        console.log(message);
 		this.shadowDOM.innerHTML = `
            <style>
                .not-found {
                    font-weight: lighter;
                    color: #318fb5;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>`;
        this.shadowDOM.innerHTML += `<h2 class="not-found">${message}</h2>`
	}
}

customElements.define("culinary-list", CulinaryList);