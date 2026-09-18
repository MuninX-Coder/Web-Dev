// immeditatly invoked function expression (iife)
// direct ruk kardo

(function chai(){   // names iife
    console.log("DB connected");
    
})();
// global scope sai pollution hotai kai bar uss pollution sai bachne ke lye we used iife
// () function ka defination
// () call that functoin

(  (name)=> {  // unname iffe
    console.log(`DB CONNECTED TWO ${name}`);
    
} ) ("munin borah");


