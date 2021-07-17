class NavBar extends HTMLElement {
	constructor(){
		super();
		this.shadowDOM = this.attachShadow({mode: "open"});
	}

	connectedCallback() {
		this.render();
	}	

	render() {
		this.shadowDOM.innerHTML = `
		<style>
			* {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                text-align: center;
                color: white;
                background-color: #318fb5;
                position: fixed;
                top: 0;
                width: 100%;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                z-index: 100;
                transition: top 0.3s;
            }
            h2 {
                padding: 20px;
            }
		</style>
		<h2>Culinary List</h2>`;
	}
}

customElements.define("nav-bar", NavBar);