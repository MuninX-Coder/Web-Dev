// 1. prototype kya hai

const car = {
    brand : "toyota"
}

console.log(car.toString()); // car ka prototype mai jake .toString() method ko find out karo
// prototype ek backup object hia jaha js property/method nai melne par search kartai


// prototype is a built-in object that acts as a shared blueprint, enabling objects to inherit properties and methods from one another


// 2. __proto__ kya hai 
// iska help sai basically object ko pata chlatai ki uska prototyp kon hai konsaa object hai

const phone = {
    brand: "Samsung"
}
console.log(phone.__proto__)


const animal = {
    eat () {
        console.log("Eating")
    }
}
const dog = {
    name: "Bruno"
}
dog.__proto__ = animal;

console.log(dog.eat())

console.log(Object.getPrototypeOf(dog)) // just return kartai ki dog ka prototype object konsa hai


// 3. prototype se property method lookup 

// lookup -- how js koi property methos ko dhuntai

const laptop = {
    brand: "Dell"
}

console.log(laptop.toString());

// 1. laptop ke andar dekho
//         ↓
//    mila? → use it
//         ↓ nahi
// 2. laptop ke prototype mein dekho
//         ↓
//    mila? → use it
//         ↓ nahi
// 3. prototype ke prototype mein dekho
//         ↓
//    mila? → use it
//         ↓ nahi
// 4. aage search...
//         ↓
//    null → stop

// this chain is also known as protoype chain



// 4. OWN PROPERTY VS PROTOTYPE PROPERTY

// 1. own property 
// jo property directly object ka andar exist kartai

const book = {
    title : "atomic habit",
    page: 300
}
// yaha title, page book ka khud ka property hai
console.log(book.hasOwnProperty("title"))


// 2. prototype property 

const machine = {
    start(){
        console.log("Machine started")
    }
}

const printer = {
    brand : "HP",
    __proto__: machine
}
console.log(printer.start())

// now printer jo machine ka property use kar parai



// 5. shadowing
// shadowing ka simple meaning agar same naame ka property dono prototype mai hoga then jo apna wala hai usko he use karo 

const parent = {
    role : "Manager"
}

const employee = {
    name : "ravi",
    role : "developer"
}
employee.__proto__ = parent;

console.log(employee.role) // yeh employee object ka khud ka property ko choice karega