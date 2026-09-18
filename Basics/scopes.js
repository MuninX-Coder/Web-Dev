{
} // scope


// global scope
// var c = 300 


let a = 300

// block scope 
if (true) {
  let a = 10;  // block scope
  const b = 20; // block scope
//   var c = 30; // functional scope and redeclaration 
console.log("inner", a)
}


// console.log(a); // will acess global a 
// console.log(b);
// console.log(c);


// nested scope
// child function jo parent ka function ka varible ko acces karsaktai
function one (){
    const username = "munin"
    
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    two();
    // console.log(website)

}

// one();



if(true){
    const username = "Munin"
    if(username === "Munin") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username);



// ********************** interesting ****************

// basic function 
function addOne(num){
return num + 1
}
addOne(5)



// function expression  -- uisng function as a varible , cant access before inilization
const addTwo = function(num){
    return num + 2
}
addTwo(5);




