// reduce

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval;
// }, 0);

const myTotal = myNum.reduce((acc, curr)=> acc+curr, 0)

console.log(myTotal);


const shopingCart = [
    {
        itemNmae: "js course",
        price: 2999 

    },
    {
        itemNmae: "python course",
        price: 999 

    },
    {
        itemNmae: "Mobile dev course",
        price: 5999 

    },
    {
        itemNmae: "Data science",
        price: 12999 

    },
   
]

const totalCartPrice = shopingCart.reduce((acc, item)=>(acc + item.price),0)

console.log(totalCartPrice)