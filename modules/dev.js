import { Employee } from "./employee.js";

export class Dev extends Employee {
    #jobType = 'Dev'; 
  
    getJobType() { 
      return `I am a ${this.#jobType}`;
    }; 
  
    static returnArrayOfDevs(...args){
        args = Array.from(args)
        let newArr =[];
        args.map((el) => {
            if (el instanceof Dev){
                newArr.push(el)
            }     
        })
        return newArr;
    }
  }