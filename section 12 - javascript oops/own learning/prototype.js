// 1. what is prototype 
// prototype is basically ek object jo doosra object ka properties/method ko inherit access par pana using a hidden prototype realtionship


const computer = {
    cpu: 12
}

const lenovo = {
    screen: "HD",
    __proto__: computer  // now this is a prototype realationship
}

console.log(lenovo.cpu) // udefined as, lenovo ka andar cpu naam ka koi property nai hai (before __proto__: computer)

console.log(lenovo.cpu)  // avi access karsakti lenovo jo computer ka proerties ko access kar saktia

// js first lenovo ka andar dhektai kya mera andar cpu hai, no, then dhektia kya yeh protoye hai kisika yes computer so look inside computer ka andar adn value meljatai


// what is __proto__   ?
// iska help sai objectka prototype access/set kya ja saktai

console.log(lenovo.__proto__)  // lenovo ka prototyep computer hai


// .prototype 
// function ka padd ke property hotai expecially constructor function


// modern way object.getPrototypeOf()


console.log(Object.getPrototypeOf(lenovo));  // lenovo ka prototype kaun hai 



// object.setPrototypeOf()
// iska help sai ek object dusra object ka properties ko access karsaktia 

const genericCar = {
    tyres: 4
}
const tesla = {
    driver : "Ai"
}

Object.setPrototypeOf(tesla, genericCar) // now tesla object can acess genericCar ka v properties
console.log(tesla.tyres)  // tesla ka pass actual vlaue tyres nai hai, bass woh genricCar ka properties access kar parai, using prototype chain




const animal = {
    eats: true
}

const dog = {
    bark : true,
    __proto__: animal
}

console.log(dog.bark)
console.log(dog.eats)
console.log(dog.color)  // undefined as koi v object ka andar nai hai

// agar dono mai same properties hoga then apna first wala ka vlaue aiga as js first khud ka scope mai search kartia

console.log(animal.bark)  // undefined as, dog jo animal object ko access kar saktai, animal jo dog ko nai



// PROTOTYPE CHAIN

const livingThing = {
    alive: true,
}

const myAnimal = {
    eats : true,
    __proto__: livingThing
}

const myDog = {
    bark: true,
    __proto__: myAnimal
}

// myDog --> myAnimal --> livingThing sai

console.log(myDog.alive);

// this is a prototype chain khud ka uder dheko fir apna prototype mai fir aur next prototype mai and so on, 


// __proto__
// iska mtlb hotai yeh object ka prototype kkonsa object hai

// dog.__proto__  dog ka prototype konsa object hai


// Object.getPrototypeOf()
// same realationship ko check karne ka ek better standard way

console.log(Object.getPrototypeOf(myDog))  // yeh just check karne mai help kartai kon kisa prototype hai, in this case myDog object ka prototype kon hai thats myAnimal


const eating = {
    eat(){
        return `Eating`;
    }
}

const Bruno = {
    name: "Bruno",
    __proto__: eating
}

const Mimi = {
    name : "Mimi",
    __proto__: eating
}


console.log(Mimi.eat())