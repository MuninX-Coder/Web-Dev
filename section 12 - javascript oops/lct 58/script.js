// 00PS 
// object oriented programming
// Encapsulation, Ineritance, polymorphism, and abstraction 

// Encapsulation -- just box them around and no one outside ka ko pata hoga
// inheritance -- kuch borrow karna apna parents woh sab sai
// polymorphism --
// abstraction -- 

// this is just a style of writting code

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        return `${this.make} car got started in ${this.year}`
    }
}
// console.log(car.start());

function Person (name, age){
    this.name = name;
    this.age = age;
}
let john = new Person("john", 20);
// console.log(john.age);


// protoypal chain

function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} make sound`
}

Array.prototype.munin = function(){
    return `custom method ${this}`
}

let myArr = [1,3,4,5];
// console.log(myArr.munin());

let myNewArr = [1,3,4,5,6,7];
// console.log(myNewArr.munin());



// how class are created 

class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model = model;
    
    }
    start(){
        return `${this.model} is a car from ${this.make}`
    }


}

// inheritance 

class Car extends Vehicle{
    drive(){
        return `${this.make}: This is an inheritance example`
    }
}

let myCar = new Car("toyota", "corolla")
// console.log(myCar.start());
// console.log(myCar.drive());


let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);




// encapsulation 
// restricting the direct access 

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount();
// console.log(account.balance);  // we cant access undefined

// console.log(account.getBalance());

account.deposit(500);
// console.log(account.getBalance());


// abstraction 

class CoffeMachine{
    start(){
        // call a data base
        // filter vlaue
        return `Starting the machine`  // i care this 
    }
    brewCoffee(){
        // complex calcuation
        return `Brewing coffee`  // i care this
    }
}

let myMachine = new CoffeMachine();
console.log(myMachine.start())
console.log(myMachine.brewCoffee())




// polymorphism
// somethings that can have more that one form 

// class Bird{
//     fly(){
//         return `i am flying`
//     }
// }

// class Penguin extends Bird{
//     fly(){
//         return `penguins cant fly`
//     }
// }

// let bird = new Bird();
// let penguin = new penguin();
// console.log(bird.fly())
// console.log(bird.fly());



// static method 


class Calculator{
    static add (a, b){  // statis are special method whic are only be called by class itself
        return a + b;
    }
}

// let miniCal = new Calculator ()
// console.log(miniCal.add(2,3));

console.log(Calculator.add(2,3));



// getters and setters

class Employee{
    #salary;
    constructor(name, salary){
        if(salary < 0){
            throw new Error ("salary cannot be in negative")
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary(){
        return `you are not allowed to see salary`;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        } else {
            this._salary = value;
        }
    }
}
let emp = new Employee("ALice", -50000)
console.log(emp._salary)
emp.salary = 60000;
