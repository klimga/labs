import { workers } from './data/data'
import './components/indexPadre'
import Myprofile, { Attribute } from './components/profile/profile'
class AppContainer extends HTMLElement {
    profiles: Myprofile[] = [];
    constructor(){
        super()
        this.attachShadow ({mode: 'open'});

        const filteredWorkers = workers.filter(user => user.id % 2 === 0);
        
        filteredWorkers.forEach((user) =>{
            const ProfileCard = this.ownerDocument.createElement("custom-profile") as Myprofile;
            ProfileCard.setAttribute(Attribute.name, user.name);
            ProfileCard.setAttribute(Attribute.image, user.image);
            ProfileCard.setAttribute(Attribute.uid, String(user.id));
            ProfileCard.setAttribute(Attribute.age, String(user.age));
            ProfileCard.setAttribute(Attribute.gender, user.gender);
            ProfileCard.setAttribute(Attribute.area, user.jobDetails.area);
            ProfileCard.setAttribute(Attribute.position, user.jobDetails.position);
            ProfileCard.setAttribute(Attribute.timeInCompany, String(user.jobDetails.timeInCompany));
            ProfileCard.setAttribute(Attribute.experience, String(user.jobDetails.experience));  
            this.profiles.push(ProfileCard);
        }); 
    }
    connectedCallback(){
       
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.profiles.forEach((profile)=>{
                this.shadowRoot?.appendChild(profile);

            });
        }

    }
}

customElements.define('app-container', AppContainer)