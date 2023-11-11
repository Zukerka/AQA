import { Employee } from "./employee.js";

export class Dev extends Employee {
    #jobType = 'Dev'; 
  
    getJobType() { 
      return `I am a ${this.#jobType}`;
    }; 
  
  }