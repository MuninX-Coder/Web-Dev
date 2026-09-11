// prototypes  
// protopyes means extra properties extra funtionalities in any given data type

let computer = {
    cpu: 32
}
let lenovo = {
    screen: "HD",
    __proto__: computer      // basically lenovo now can access all the properties of computer object
}
let tomHardWare = {}

// console.log(`lenevo`, lenovo.__proto__);

let genericCar = {
    tyres : 4
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)  // now tesla can acess all the generaic car ka properties

console.log(`tesla`,Object.getPrototypeOf(tesla))  // now tesla can access propertype of genericCar



