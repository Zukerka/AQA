export class Employee { 
    constructor(id, salary) { 
      this.id = id; 
      this.salary = salary
    }
  
    getJobType() { }; 
  
    static compareSalary(user1, user2) { 
      if (user1.salary > user2.salary) {
        return `User with id ${user1.id} has greater salary`
      } else if (user1.salary < user2.salary) {
        return `User with id ${user2.id} has greater salary`;
      } else { 
        return 'Salaries are equal';
      }
    }
    
  }