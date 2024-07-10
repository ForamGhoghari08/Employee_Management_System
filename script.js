// Base class for User
class User {
  constructor(name) {
    this.name = name;
  }
  getAccess() {
    return `Access for ${this.name}: Self`;
  }
}

// Employee class inheriting User
class Employee extends User {
  constructor(name) {
    super(name);
  }
}

// Manager class inheriting Employee
class Manager extends Employee {
  constructor(name) {
    super(name);
  }
  getAccess() {
    return `Access for ${this.name}: Self, Employees`;
  }
}

// HR class inheriting Manager
class HR extends Manager {
  constructor(name) {
    super(name);
  }
  getAccess() {
    return `Access for ${this.name}: Self, Managers, Employees`;
  }
}

// Owner class inheriting HR
class Owner extends HR {
  constructor(name) {
    super(name);
  }
  getAccess() {
    return `Access for ${this.name}: Everything`;
  }
}

// Creating instances
let employee = new Employee("Rahul");
let manager = new Manager("Jenny");
let hr = new HR("Ketan");
let owner = new Owner("Mehul");

// Displaying access
console.log(employee.getAccess()); // Access for Rahul: Self
console.log(manager.getAccess()); // Access for Jenny: Self, Employees
console.log(hr.getAccess()); // Access for Ketan: Self, Managers, Employees
console.log(owner.getAccess()); // Access for Mehul: Everything
