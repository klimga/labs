import productStyles from './product.css';

export enum Attribute {
	'image' = 'image',
    'tittle' = 'tittle',
    'price' = 'price',
    'description' = 'description',
    'category' = 'category',
    'rating' = 'rating'
}

class Product extends HTMLElement {
	image?: string;
    tittle?: string;
    price?: string;
    description?: string;
    category?: string;
    rating?: string;
	constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
    }



    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
			image: null, 
			tittle: null, 
			price: null, 
			description: null, 
			category: null, 
			rating: null,
        };
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
             
                this[propName] = newValue;
                break;
        }
     
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ''
			
			const css = this.ownerDocument.createElement("style")
			css.innerHTML = productStyles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML +=`
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
			<section class="card">
				<img src"${this.image}"
				<div class="info">
					<h1>"${this.tittle}"</h1>
					<p>"${this.price}"</p>
					<p>"${this.description}"</p>
					<p>"${this.category}"</p>
					<p>"${this.rating}" <i class='bx bxs-star'></i></p>
				</div>
			</section>
			
			`;
    
            
    	}
	}
}

export default Product;
customElements.define('product-card', Product);