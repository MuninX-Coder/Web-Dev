const coding = ["js", "ruby", "pyhton", "cpp"]

const values = coding.forEach((item)=>{
// console.log(item);
return item
})

console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>{
// return num > 4;
// })
// console.log(newNums);


// const newNums = []

// myNums.forEach((num)=>{
// if(num > 4){
//     newNums.push(num)
// }
// })

// console.log(newNums)



const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    edition: "1st Edition",
    publishDate: "1960-07-11"
  },
  {
    title: "1984",
    genre: "Dystopian",
    edition: "2nd Edition",
    publishDate: "1949-06-08"
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    edition: "3rd Edition",
    publishDate: "1925-04-10"
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    edition: "1st Edition",
    publishDate: "2018-10-16"
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    edition: "75th Anniversary Edition",
    publishDate: "1937-09-21"
  },
  {
    title: "Dune",
    genre: "Science Fiction",
    edition: "Deluxe Edition",
    publishDate: "1965-08-01"
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    edition: "Penguin Classics Edition",
    publishDate: "1813-01-28"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-Fiction / History",
    edition: "1st US Edition",
    publishDate: "2014-09-04"
  },
  {
    title: "The Catcher in the Rye",
    genre: "Literary Fiction",
    edition: "Reissue Edition",
    publishDate: "1951-07-16"
  },
  {
    title: "Thinking, Fast and Slow",
    genre: "Psychology",
    edition: "1st Edition",
    publishDate: "2011-10-25"
  }
];


// const userBooks = books.filter((book)=> book.genre === "Romance")

const userBooks = books.filter((bk) => { 
    
    return bk.edition !== "1st Edition" && bk.genre === "Romance"


})

console.log(userBooks)

