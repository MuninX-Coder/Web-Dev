// contructor function / mtlb main original wala

function Person(name,age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

// now instances from this constructor function mtlb same copy

let myCar = new Car("toyota", "Camry")
// console.log(myCar) 


let myNewCar = new Car("tata", "safari")
// console.log(myNewCar);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemon tea")
console.log(lemonTea.describe());

let greenTea = new Tea("green tea")
console.log(greenTea.describe())


// prototype function 


function Animal(species){
    this.species = species;   // storing 

}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("DOG")
console.log(dog.sound());

let cat = new Animal("cat")
console.log(cat.sound());



function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyowrd")
    }
    this.name = name;
}

let tea = new Drink("tea")
let conffe = Drink("COffee")