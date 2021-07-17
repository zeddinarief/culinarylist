class SearchBar extends HTMLElement {
    constructor(){
      super();
    //   this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
       this.render();
    }
    
    set searchEvent(event) {
       this._keyUpEvent = event;
        this.render();
    }
   
    get value() {
        return this.querySelector("#searchElement").value;
    }
  
    render() {
        this.innerHTML = `
        <style>
        .search-container {
            margin: auto;
            max-width: 800px;
            padding: 10px;
            position: sticky;
            margin-top: 100px;
            top: 0;
            background-color: #b0cac7;
            border-radius: 50px;
            box-shadow: 0 10px 20px 0 #3190b591, 0 0 4px 10px #3190b591;
            z-index: 10;
            transition: top 0.3s;
        }
        
        .search-container > input {
            width: 100%;
            padding: 14px;
            border: 0;
            color: white;
            font-size: 18px;
            font-weight: bold;
            background-color: transparent;
        }
        
        .search-container > input:focus {
            outline: 0;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: #318fb5;
        }
        </style>
        <div id="search-container" class="search-container">
                <input placeholder="Search Food" id="searchElement" type="search">
            </div>
        `;
  
        this.querySelector("#searchElement").addEventListener("keyup", this._keyUpEvent);
    }
  }
   
  customElements.define("search-bar", SearchBar);