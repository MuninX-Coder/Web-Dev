const book = {  // ek object hai
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    category: "Programming",
    available: true
};

console.log(book);


// constructor function taki bar bar book create karna na pare and evertime we can create differnt book

function Book(title, author, isbn, category) {  // ek constructor function
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.category = category;
    this.available = true;
}

// book ek function hai, function ka padd ek special propety hotai, book.prototypee yeh objec hai so uska andar getinfo naam ka method hai and now every book can access this

Book.prototype.getInfo = function(){
    return `${this.title} by ${this.author}`
}


const book1 = new Book(  
    "Clean Code",
    "Robert C. Martin",
    "9780132350884",
    "Programming"
);

const book2 = new Book(
    "Atomic Habits",
    "James Clear",
    "9780735211292",
    "Self Development"
);

