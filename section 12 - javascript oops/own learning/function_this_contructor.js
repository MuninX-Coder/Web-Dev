// 1. what is function 
// function ek block of code hai jisko bar bar use kar saktai

function greet(){  // this is  function with name greet
    console.log("Hello");
}

greet() // this is functin call mtlb function ko call karna

// 2. line by line 

// function -- says this is a function
// greet -- this is functin ka name
// () -- funciton ka parameter yaha atai, mtlb jo sizz function accept karega
// {} -- function ka body iska andar ka code run hotai
// greet() -- function ko call karna

// 4. parameter 
// parameter -- woh value jo function accept kartai 

function myName(name) {  // name -- parameter
    console.log(`Hello ${name}`)
}

myName("Munin");

// 5. multiple parameter 
// we can give multiple parameter

function introduce(name, age){
    console.log(name);
    console.log(age);
    
}
introduce("Munin", 19);

// name --> "Munin"
// age --> 19


// 6. now object ka andar function 

const person = {
    name : "munin",
    greet: function(){
        console.log("Hello");
        
    }
};

person.greet();

// this is a method as the function is inside the object


// 7. now this keyword

const person1 = {
    name : "munin",
    greet: function(){
        console.log("Hello", this.name); // this refers to person1 jo object hai
        
    }
};

person1.greet();

// this.name mai this kya hai
// -- it refer to person1 -- >   this.name == person1.name


// 9   can we call this keyword as the curent object ?
// -- yeh in bgeginnear level 
// but this ka value depend kartai usko how we call it



// 10. example this depends on how its call

// function Person(name, age){
//     this.name = name;
//     this.age = age
// }

// here this is basically the Person 
// this is depended on how the function is been called


// 11. nowmal function call

// person("Munin", 19) // this is nomal function call

// new person("suvam", 34) // this is also different


// 12 constructor function kya hai
// a function hai jo new keyword ka sath use hotai to create object and intilize object isko hi constructor function boltai

// const john = new person("john", 20);

// person yaha mai ek construtor function ka role mai use horai



// 13. what does new keyword does
// const john = new person("john", 20);

// step 1 -  ek empty object create hotai
// step 2 - this ko new object sai connect kartai, avi jo new sai object banai using the new word, woh this sai connect hotai
// step 3 -- constructor code exectue
// step 4 -- object gets return 



// 14. why do we need constructor function 
// without constructor function there will be lots of repetative code ok, so solve this construtor function use hotai

function student(name, rollno){ // function constructor 
    this.name = name;
    this.rollno = rollno;
}

const student1 = new student("Munin", 12); // intances , student 1 is a instanc of student
const student2 = new student("rahul", 34);
const student3 = new student("suvam", 45);


function Car(make, model){  // this is constructor function
    this.make = make;
    this.model = model;
}

let myCar = new Car("toyota", "camry");
let otherCar = new Car("tata", "safari");

console.log(myCar);
console.log(otherCar);




function Tea(type){
    this.type = type;

    this.descibe = function(){
        return `This is a cup of ${this.type}`
    }
}

const lemonTea = new Tea("lemon tea")
const greenTea = new Tea("Green tea");



