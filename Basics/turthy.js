const userEmail = "m@gmail.com"

if (userEmail){
    console.log("got user email");
    
} else {
    console.log("dont have user email");
    
}

// falsy value --- false, "", 0, -0, 0n, null, undefined NaN

// truthy value -- falsy value ko chorke joo hia woh sab truthy vlue hai 
// "0"  -- also true, 
// "false"
// " "  -- truth value
// {}
// []
// function(){} --emptyfuction also truthy value


// if(userEmail.length === 0) {
//     console.log("empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}



// nullish coalescine operator ??: null undefined 

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 30 ?? 15
console.log(val1);


// ternary operator 
// codition ? true : false 

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") 