// if

if (true) {
  // run hoga
}
if (false) {
  // nai hoga run
}

const isUserLoggedIn = true;

if (3 != 2) {
  // run hoga
}

// < -- les tahn
// > -- greater than
// <= -- less than or equal
// >= -- greater than or equal
// == -- equal
// !=  -- not equal
// ===  -- strict equal , check type also
// !== -- strict not equal

if (2 == "2") {
  console.log("exected");
}

if (2 === "2") {
}

// const temprature = 41
// if(temprature <= 50){
//     console.log("less than 50");

// } else {

//     console.log("temperature is greater than 50");
// }

// const score = 200

// if (score > 100){
//     const power = "fly"  // block scope
//     console.log(`user power ${power}`);

// }
//   console.log(`user power ${power}`);

// short hand

const balance = 1000;

if (balance < 1000) console.log("test"); // implicit scope ek he line mai

// nesting multipel condition

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}


const userLoggedIn = true;
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){   // && -- both condition must be true
    console.log("allow to buy coursed");
    
}



if(loggedInFromGoogle || loggedInFromEmail){ // || -- ek codition must be true

    console.log("user logged in");
    
}