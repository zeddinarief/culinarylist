class CulinaryItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

	set culinary(culinary) {
 		this._culinary = culinary;
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
                        width: 33.3333%;
                    }
                    .culinary-item {
                        padding: 20px;
                        width: 100%;
                    }
                    
                    .image {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 100%;
                        display: block;
                        object-fit: cover;
                    }
                    
                    .content {
                        position: relative;
                        padding-top: 100%;
                        overflow: hidden;
                        border-radius: 10px;
                    }
                    
                    .overlay {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 100%;
                        width: 100%;
                        opacity: 0;
                        transition: .5s ease;
                        background-color: #008CBA;
                        border-radius: 10px;
                    }
                    
                    .content:hover .overlay {
                        opacity: 80%;
                    }
                    
                    .text {
                        color: white;
                        font-size: 20px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                        -ms-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                        text-align: center;
                    }
                    
                    @media screen and (max-width: 860px){
                        :host {
                            width: 50%;
                        }
                    }
                    
                    @media screen and (max-width: 550px){
                        :host {
                            width: 100%;
                        }
                    }
                </style>
                <div class="culinary-item">
                    <div class="content">
                        <img class="image" src="${this._culinary.strMealThumb}" alt="">
                        <div class="overlay">
                            <div class="text">
                                <h4><u>${this._culinary.strMeal}</u></h4>
                                <p>${this._culinary.strCategory}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
	}
}

customElements.define("culinary-item", CulinaryItem);