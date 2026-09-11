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