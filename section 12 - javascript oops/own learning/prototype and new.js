// 1. constructor function kya hai
// ek aisa function jo new object create karne ke lye adn first initilize karne ke lye kaam atai

function Animal(name){
    this.name = name;
}

Animal.prototype.eat = function(){
    console.log("Eating...")
}

const dog = new Animal("Bruno")
const cat = new Animal ("Mimi")

// two object created 
// dog -- > name -- > bruno
// cat -- > name --> mimi

console.log(Animal.prototype) // animal ka pass ek special property hotai, and woh ek object hotai

console.log(dog.eat())

// .prototype ko template bolan techniacally kya hia

console.log(typeof Animal.prototype)  // object, so we can keep method on that object same we keep eat method, and then jo new Animal() sai banne wala object hai woh protoype object sai connect ho saktiai 

// Constructor function ka .prototype ek object hota hai jise new se banne wale objects prototype ke roop mein use karte hain.


// 4. multiple object ka benefits 

function Animal(name){
    this.name = name;
}

Animal.prototype.eat = function (){
    console.log(this.name + " is eating")
}

const cow = new Animal("gauri")
const monkey = new Animal("gaza bhai")

console.log(cow.eat())

// eat() ka three copies nai bannai, bass Animal.prototype -- eat() and sab animals Animal sai link hai


// 5. .prototype aur __proto__ 

// Animal.prototype 
// constructor function ka property hai

// dog.__proto__
// dog object ka protype access kartai


function Tea(type){
    this.type = type;
}

Tea.prototype.drink = function(){
    console.log("Drinking " + this.type)
}

const greenTea = new Tea("green")
const masalaTea = new Tea("masala")

console.log(greenTea.__proto__ === Tea.prototype);