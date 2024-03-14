export enum Attribute{
    'uid' = 'uid', 
    'name' = 'name',
    'image' = 'image',
    'age' = 'age',
    'gender' = 'gender',
    'area' = 'area',
    'position' = 'position',
    'timeInCompany' = 'timeInCompany',
    'experience' = 'experience',
}

class profile extends HTMLElement {
    uid?: number;
    name?: string;
    image?: string;
    age?: number;
    gender?: string;
    area?: string;
    position?: string;   
    timeInCompany?: number;
    experience?: number;
    

    constructor() {
        super();
        this.attachShadow({ mode: "open" }); 
    }

    static get observedAttributes() {
        const attrs: Record<Attribute,null> = {
            uid: null,
            name: null,
            image: null,
            age: null,
            gender: null,
            area: null,
            position: null,   
            timeInCompany: null,
            experience: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch(propName){
            case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
             break;

            default:
                this.[propName] = newValue;
             break;
        }
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/customCart/customCart.css">
       
        `;
    }
}

customElements.define('custom-profile', CustomCart);
export default CustomCart;