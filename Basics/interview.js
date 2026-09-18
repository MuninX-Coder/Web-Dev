// how js code exectue 

// execution context -- jo v js code hai woh kaise run hotai 
// two phases hotai

// 1. global exection context -- this keyword ko refer kardetai, brower this mai window ko refer kartai

// 2. functional execution context


// eval execution context 


// how js code exectue

// js code 
// ---> memeory creation phase (varible woh sab ke lye memoery allocatoe hotai)

// ---> exection phase (exectue hotai)

// eg

let val1 = 10;
let val2 = 5;

function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 =  addNum(10,2)

// how this code will exectue 
// steps 

// 1. global exection hoga -- and this ko refer karega

// 2. memeory phase / creation phase 
// ---> sab varible ko raka jatai
// val1 = undefined
// val2 = undefined
// addNum = defination(function ka )
// result1 = undefined
// result2 = undefined

// 3. exection phase 
// val1 = 10
// val2 = 5

// addNum ---> apna alag exection context (delete v hotai after work done)
//  --- new varible environemnt + exection thread
//  --- now memomry creation phase for addNum function
//  1. val1 = undefined
// 2. val2 = undefined
// 3. total = undefined 

// ---- now exection context 
// 1. num1 = 10
// 2. num2 = 5
// 3. total = 15
// total return to global exection context

 // result1 =15;

 // addNum  --- again new variable environment 
 // again memory phase 
 // again exection phase 

 // result2 = 12;



 // ---- call stack -----

 // 1. global exection context -- first yeh hoga

 // follow lifo principle last in first out
 