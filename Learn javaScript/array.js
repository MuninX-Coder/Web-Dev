// 1. what is array 
// array ek data ko rakhne ka tarika hai jisme ham luk multiple data ko ek sequence order mai rakhtai, array ka index hamesa 0 sai start hotai



let students = ["aman", "rahun", "priya", "neah", "arjun"] // this is a array, student ka multipe data ek sath store hai

// in array we can keep any data type of data most of the type

let anyType = [true, 10, "hello", false, null, undefined]  // keeping multiple types of data 

// indexing
// indexing ka use karke ham luk arary mai sai koi v value ko nekaltai jo array mai hotai, ham luk index ka use kartai, index is basically har ek element ka position number

let fruits = ["apple", "banana", "mango"]
//               0   ,   1     ,   2          --- this are array ka index


// elements ko access karna 

console.log(fruits[0])  // array ka first index "apple"

// last index 

// length - 1
// legnth is a property used to find array length

let colors = ["red", "green", "blue", "yellow"]
console.log(colors.length)  // used to find the array ka length
console.log(colors[colors.length - 1]);  // used to find the last index value




// 2. Adding/Removing Elements 
// array ka andar hai elemets add ya remove karna 
// mainly  -- push(), pop(), unshift(), shift()
// yeh sab original array ko direct modify kartai


// push()  -- end mai add kartai, ek array ka end mai value add kartai

let fruit = ["apple", "banana"]
fruit.push("mango"); // mango ek dam last mai add hogeay

// push() original array mai change kartai, mutate kartai, mutate ka mtlb koi existing sizz ko modify/change karna

fruit.push("papaya", "grapes", "orange") // can add multiple elemetns 

// push array ka length return kartai 

let result = fruit.push("peach");
console.log(result);  // array ka total length


// pop() -- end sai value remove kartai 

fruit.pop() // last ka value remove hojagia

let removed = fruit.pop();
console.log(removed);

// pop() removed element ko return kartai


// unshift() -- beginning mai add kartai value
// value ko add kartai ek dam start mai

fruit.unshift("apple");  // apple ek dam start mai add hojagia

console.log(fruit[0]);

// unshift() kya return kartai

let letters = ["B", "C"]
let myResult = letters.unshift("A")  // new array ka length return hoga
console.log(myResult);  



// shift() --- beginning sai remove kartai 
// elements beginign sai remove hotai
letters.shift();
console.log(letters);

// shift() kya return kartai

let shiftReturn = letters.shift();  // removed value return kartai
console.log(shiftReturn);


// 3. forEach()
// forEach() is basically ek array mai looping karna and everytime ek ek karke array mai value melna ok
// forEach() ek array method hai, and iska kaam simple hai array ka har element par ek function execute karna mtlb aray ka har element ke lye ek function run karo idividaully


let names = ["munin", "shuvam", "ravi", "raju"]
names.forEach(function(name){  // names naam ka array mai loop lagao and for each item ek function run karo ,  name -- yeh simply parameter hai, har value iska andar aiga
    console.log(name);
    
})

// yaha mai names aray mai ek foreach loop lagayia and each time ek function ruk horai woh v aarray ka each individual value ke lye 

// callback function -- ek aisa function jo kisi dusra function ko argument ka form mai dya jatai usko commonly callback function boltai

function greet(name){
    console.log("hello", name);
    
}
// someFunction(greet) // here greet is a callback function as, greet function koi dusra function ka argument ka jaise use horai


// forEach() 
// mai multiple value meltai in the form of paramter 

let array = [1,2,3,4,5,6];

array.forEach(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
})

// element -- array ka ek ek value
// index -- woh value konsa index mai hai
// array -- full array


// arrow function ka sath forEach()

let city = ["delhi", "mumbai", "guwahati"]

city.forEach(eachCity => {
    console.log(eachCity);
    
})
// simple and shorter syntax

let numbers = [10,20,30]

let myResultNumber = numbers.forEach(function(number){
    console.log(number)
})
console.log(myResultNumber) // kuch return nai kartai yeh undefined hoga


let product = ["Laptop", "Mouse", "Keyboard"]

product.forEach(function(product){
    console.log("product :", product)
})

let Mynum = [2,4,6]
Mynum.forEach(num =>{
    num = num * 2;
})
console.log(Mynum)



// topic 4 - map()
// map() ek new array return kartai, mtlb array ka har vlaue ke lye ek function chaltai and then last mai ek returned value ko ek new array mai detai

let prices = [100,200,300]

let doublePrice = prices.map(function(num){
    return num * 2;
})
console.log(doublePrice);  // this is new array, original array change nai hotai


let arr = [10,20,30,40,50]
let usedArr = arr.map(function(val, index, array){
return val,index, array;
})
console.log(usedArr);


let myCities = ["Delhi", "Mumbai", "Guwahati"]

let myCityRst = myCities.map(function(city, index){
    return index + ": " + city;
})
console.log(myCityRst);


// return is very importatn in map()
// jitna input melai watan he output aiga 


// TOPIC 5 -- filter()
// filter basically array ka har elemetn ko check kartai and sirip woi element ko new array mai rkahtai jo true hai ya true return kartai

let ages = [12,18,25, 15, 30, 20]

let adults = ages.filter(function(age){
    return age >= 18;
})
console.log(adults);

// new array return kartai, woi array ka value ko return karo jiska value 18 ya usse jada hai

// filter ka length depend kartai, can be same length, differnt, or even empty

let name = ["aman", "riya" ,"kabir"]
let myNameRst = name.filter(function(name, index){
    return index > 0
})
// aman ko chorke baki sab aiga



// Topic 6 --- find() / findIndex()
// array ka condition ka basis mai kuch find out karna

// find() -- actual element
// findIndex() -- element ka index

let scores = [45, 62, 78, 91, 56]
let scoreRst = scores.find(function(score){
    return score > 75;
})
console.log(scoreRst);
// first value return karega jo 75 sai bara hoga, and rest luk ko chor dega


// findIndex()
// same like find used to seaarch but avi uska index 

let posititon = scores.findIndex(function(score){
    return score > 75;
})
console.log(posititon); // return 2 as, 78 is at 2 index

// rest luk ko chor detai

// if kuch v match na kare then undefined return kartai  find()
// -1  if nothings match  findIndex()




// topic 7 ---- some() / every()
// both method check condtion and return result is in boolean

//  some () -- kya kam sai kam ek element satisfy kartai ?
// every () -- kya sab elements conditon satisfy kartai ?

let yourAge = [14,34,53,67]

let rstAge = yourAge.some(function(age){
    return age >= 18;
})
console.log(rstAge); 

// some() ko bass ek mathcing element chiaye



let rstEveryAge = yourAge.every(function(age){
    return age >= 18;
})

console.log(rstEveryAge) 

// every() all elemetn should satisfy the condtion, ek v false tho sab false



// Topic 8 ---- reduce()
// simple sa mtlb hai array ka multiple element ko process karo and ek single final value return karo

let expenses = [100, 250, 150,300]

let total = expenses.reduce(function(accumulator, val){
    return accumulator + expenses;
}, 0) // acc ka initial value

// accumalator -- ok woh vlaue hia jo iteration ka baad result ko carry forward kartai, like here first value hoga 100, fir accumator hoga 100 fir jab accumator + expense karega then woh hgoa 100 + 250 and woh save hoga accumulator mai simple




// Topic 9 ---- sort()
// sort() ka simple ka kaam hai array ka elements ko order karna

let namesList = ["zoya", "aman", "karan", "bhavan"]

namesList.sort();  // a t0 z mai sort hogeya
console.log(namesList);


// sort karna number ko

let myNum = [34,36,23,345,7,435,3434,56,26,6]

let sortMynum = myNum.sort(function(a,b){  // a, b are compartor
    return a - b;
})
console.log(sortMynum);

// it modifies the original value


// revesre ()
// array ka order ko ulta kartai

let queue = ["first","second","third", "forth"]
queue.reverse();
console.log(queue);
// original array ko modify kartai



// Topic 10 --- Array Destructuring
// mtlb simpel hai arrya ka element ko alag alag variable mai nekalna


// normal way 

let coordinates = [25,91]
let latitude = coordinates[0]
let longitude = coordinates[1]

// using Destructuring 
let [latitude1, longitude1] = coordinates;

// yeh index wise jiaga, jo first index ka value hai woh first variable mai store so and so on.

// if value nai hoga then undefined


let value = [10];

let [a,b = 50] = value;   // we can also give default

console.log(a,b);


// use can use rest with destructuring

let usedRest = [10,20,30,40,50]
let [first, second, ...remainig] = usedRest;  // first aur second ka adnar 10, 20 aiga and baki sab ek array mai save hojaiga
console.log(remainig)



// Topic 11 -- spread operator (...)
// simple hai array ka adnar ka element ko ek ek karke bahar expand kardo

let one = [10,20,30]
let two = [...one]  // now two had own value

// combine karna array ko
let morning = ["tea", "breakfast"]
let evening = ["walk", "dinner"]

let routine = [...morning, ...evening] // array ko combine karna
console.log(routine);

// spread deep copy nai kartai, agar agar ka andar object ya nested object hai then spread sirip uder ka ko cpy kartai


// Topic 12 --- Nested arrays & Data Transformation

// nested array -- array ka andar array
// data transformation -- ek data structure ko dusra data structure mai convert karna, like array ko object,  number to boolean


// nested array

let classRoom = [
    ["aman", "raya"],
    ["kabi", "neha"],
    ["arjun", "sara"]
]
console.log(classRoom) // whole array

// how to access the value 
classRoom[1] // outer array
classRoom[1][1] // outer array ka index 1 value
console.log(classRoom[1][1])


// Data tranformation 
// esiting data ko processkarke usko differnt useful form mai convert karna 

