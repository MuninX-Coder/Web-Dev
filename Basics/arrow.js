
// this  -- current context ko point kartai, current object, refer kartai
const user = {
    username: "munin",
    price: 999,
    
    welcomeMessage: function(){  // object ka andar function -- method 
        console.log(`${this.username},  welcome to website`);
        console.log(this)
        
    }
}

// user.welcomeMessage(); // yaha tak munin tha
// user.username = "sam" // now change

// user.welcomeMessage(); // now sam ke lye, becuase we used this keyword

console.log(this)  // node environemnt -- empyt 
// brower -- window aaiga 



// function chai(){
//     let username = "munin"
//     console.log(this.username);  // this work on object
    
// }

// chai()


// const chai = function (){
//     let username = "munin"
//     console.log(this.username);
    
// }
// chai()


// arrow function 

const chai = ()=>{
    let username = "munin borah"
    console.log(this);
    
}
// chai();

// explicit 
// const addTwo = (num1, num2) => {
//     return num1 + num2  // must use return keyword
// }  // arrow function

// console.log(addTwo(3,2))


// implicit return 
// reutrn keyword nai chiaye
const add = (num1, num2) => num1 + num2;  // implicit 


const rtOj = (num1 , num2) => {{username : "munin"}}
console.log(rtOj());



const myArray = [2,3,4,6]

// myArray.forEach(()=>{})