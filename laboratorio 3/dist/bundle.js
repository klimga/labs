(()=>{"use strict";const e=[{id:1,name:"Maria Lopez",image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:32,gender:"Female",jobDetails:{area:"Sales",position:"Sales Manager",timeInCompany:6,experience:8}},{id:2,name:"Emily Johnson",image:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:28,gender:"Female",jobDetails:{area:"Human Resources",position:"HR Specialist",timeInCompany:3,experience:5}},{id:3,name:"John Smith",image:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:35,gender:"Male",jobDetails:{area:"Finance",position:"Financial Analyst",timeInCompany:4,experience:7}},{id:4,name:"Michael Brown",image:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:40,gender:"Male",jobDetails:{area:"IT",position:"Software Developer",timeInCompany:8,experience:12}},{id:5,name:"Sophia Martinez",image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:27,gender:"Female",jobDetails:{area:"Marketing",position:"Marketing Coordinator",timeInCompany:2,experience:4}},{id:6,name:"Isabella Garcia",image:"https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:31,gender:"Female",jobDetails:{area:"Customer Service",position:"Customer Support Specialist",timeInCompany:4,experience:6}},{id:7,name:"William Taylor",image:"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",age:33,gender:"Male",jobDetails:{area:"Operations",position:"Operations Manager",timeInCompany:5,experience:9}},{id:8,name:"Ethan Wilson",image:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:29,gender:"Male",jobDetails:{area:"Research and Development",position:"Research Scientist",timeInCompany:3,experience:5}},{id:9,name:"Olivia Anderson",image:"https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:36,gender:"Female",jobDetails:{area:"Quality Assurance",position:"QA Analyst",timeInCompany:7,experience:10}},{id:10,name:"Emma Brown",image:"https://images.pexels.com/photos/19130891/pexels-photo-19130891/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:30,gender:"Female",jobDetails:{area:"Finance",position:"Financial Advisor",timeInCompany:6,experience:8}},{id:11,name:"James Martinez",image:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:25,gender:"Male",jobDetails:{area:"Sales",position:"Sales Representative",timeInCompany:2,experience:3}},{id:12,name:"Alexander Rodriguez",image:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:38,gender:"Male",jobDetails:{area:"Operations",position:"Operations Analyst",timeInCompany:9,experience:11}},{id:13,name:"Ava Wilson",image:"https://images.pexels.com/photos/14541208/pexels-photo-14541208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:26,gender:"Female",jobDetails:{area:"Marketing",position:"Marketing Manager",timeInCompany:4,experience:6}},{id:14,name:"Mia Perez",image:"https://images.pexels.com/photos/5878568/pexels-photo-5878568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:29,gender:"Female",jobDetails:{area:"Human Resources",position:"HR Manager",timeInCompany:5,experience:7}},{id:15,name:"Daniel Thompson",image:"https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",age:34,gender:"Male",jobDetails:{area:"IT",position:"IT Manager",timeInCompany:7,experience:9}}];var a;!function(e){e.uid="uid",e.name="name",e.image="image",e.age="age",e.gender="gender",e.area="area",e.position="position",e.timeInCompany="timeInCompany",e.experience="experience"}(a||(a={}));class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({uid:null,name:null,image:null,age:null,gender:null,area:null,position:null,timeInCompany:null,experience:null})}connectedCallback(){this.render()}attributeChangedCallback(e,i,t){switch(e){case a.uid:this.uid=t?Number(t):void 0;break;case a.age:this.age=t?Number(t):void 0;break;case a.timeInCompany:this.timeInCompany=t?Number(t):void 0;break;case a.experience:this.experience=t?Number(t):void 0;break;default:this[e]=t}this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <section>\n                <div class= carta>\n                <img src="${this.image}"></img>\n                <H1>The name is: ${this.name}</H1>\n                <p>Your ID is: ${this.uid}</p>\n                <p>The age is: ${this.age}</p>\n                <p>Your gender is: ${this.gender}</p>\n                <p>Your area is ${this.area}</p>\n                <p>Your position ${this.position}</p>\n                <p>Has been  ${this.timeInCompany} with the company for years</p>\n                <p>Has ${this.experience} years of experience</p>\n                </div>\n            </section>\n            \n            `)}}customElements.define("custom-profile",i);class t extends HTMLElement{constructor(){super(),this.profiles=[],this.attachShadow({mode:"open"}),e.filter((e=>e.id%2==0)).forEach((e=>{const i=this.ownerDocument.createElement("custom-profile");i.setAttribute(a.name,e.name),i.setAttribute(a.image,e.image),i.setAttribute(a.uid,String(e.id)),i.setAttribute(a.age,String(e.age)),i.setAttribute(a.gender,e.gender),i.setAttribute(a.area,e.jobDetails.area),i.setAttribute(a.position,e.jobDetails.position),i.setAttribute(a.timeInCompany,String(e.jobDetails.timeInCompany)),i.setAttribute(a.experience,String(e.jobDetails.experience)),this.profiles.push(i)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&this.profiles.forEach((e=>{var a;null===(a=this.shadowRoot)||void 0===a||a.appendChild(e)}))}}customElements.define("app-container",t)})();