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

             case Attribute.age:
                this.age = newValue ? Number(newValue) : undefined;
             break;

             case Attribute.timeInCompany:
                this.timeInCompany = newValue ? Number(newValue) : undefined;
             break; 

             case Attribute.experience:
                this.experience = newValue ? Number(newValue) : undefined;
             break;

            default:
                this[propName] = newValue;
             break;
        }
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <section>
                <div class= carta>
                <img src="${this.image}"></img>
                <H1>The name is: ${this.name}</H1>
                <p>Your ID is: ${this.uid}</p>
                <p>The age is: ${this.age}</p>
                <p>Your gender is: ${this.gender}</p>
                <p>Your area is ${this.area}</p>
                <p>Your position ${this.position}</p>
                <p>Has been  ${this.timeInCompany} with the company for years</p>
                <p>Has ${this.experience} years of experience</p>
                </div>
            </section>
            
            `;
            

        }
     
    }
}

customElements.define('custom-profile', profile);
export default profile;