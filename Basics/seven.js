const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num)=>{
// return num + 10
// })

// console.log(newNums)

// scope opne {} use return keyword
// nai tho dont use 

// chainign -- using 2 sai jada method
const newNums = myNums.map((num)=> num * 10).map((num)=> num + 1).filter((num)=> num >= 40)
console.log(newNums)