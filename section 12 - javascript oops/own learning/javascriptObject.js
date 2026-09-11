// 1. object kya hai 
// object basicaly ek container hai jaha par ham luk realted infromation aur us information par kaam karne walal function ko ek place mai rakhtai 

const person =  {  // this is a object
    name : "Munin",
    age: 19,
    city :"Guwahati"

}
console.log(person);

// 2. object kyu use hotai
// object use hotai taki related information ko ek he contianer mai rakhsaku, ek he place mai in memory

const person2 =  {  // this is a object
    name : "shuvam",
    age: 19,
    city :"Guwahati"

}
// related information ko ek he place mai rakh saktai in this care name, age, city sab perosn2 ka andar hai



// 3. property kya hai 
// object ka andar jo key value pair hotai usko property bolskatia

const myPerson = {
    name: "Munin",
    age : 19
}

// name - > Munin
// age -> 19
// this two are properties

// 4. key and value 

// name -- key
// "Munin" -- value


// 5. adding properties

const fruit = {};
fruit.first = "apple";
fruit.second = "Mango";

console.log(fruit);


// 6. how to access properties 

// dot notaion 
console.log(fruit.first);  // suing . to access

// bracket notation 
console.log(fruit["second"])  // using [] to search

// 7. adding new properties 

fruit.third = "orange";   // on fruit object ek new properlty add hua with value orange


// 8. delete a property 

delete fruit.first;   // first naam ka property delete hogeay from the fruit object


// what is method 
// jab object ka andar koi function hotai tho usko method boltai

const myObj = {
    name : "Munin",
    greet: function (){
        console.log("HELLO");
    }
}

// here name is the property
// and greet is also a property but iska vlaue function hai, so isko method bolega 


// how to call a method 
myObj.greet();  // myObj object ka andar greet function hai usko call karo


// modern method syntax 
const student = {
    name: "Munin",
    greet(){
        console.log(`Hello ${this.name}`)   // current calling object ko refer karrai, mtlb student object ko, mtlb this = student, this.name  means  person.name
    }
}
student.greet();


// object ka adnar object 

const user = {
    name : "Munin",
    address: {
        city : "Guwahati",
        state: "Assam"
    }
};

// ek object hia uska andar aur ek object hai 
console.log(user.address.city)


// object can also  contain array

const arrObj = {
    name : "Munin",
    skills : ["html", "css", "js"] // this is a array inside an object
}
console.log(arrObj.skills);  // whole array access
console.log(arrObj.skills[2]); // access using index value


// objects are reference value
// reference mtlb just address meltai actual value nai melegaa

let newPerson = {
    name : "suvam"
}

const oldPerson = newPerson;   // now boht are pointing to same object, actual vlaue nai melai, so kavi mai v change karo acutal object mai change hoga

oldPerson.name = "Rahul" // now both object mai change hoga


