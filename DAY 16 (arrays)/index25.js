//[Book ID, Title, Author, Genre, Pages, Rating]

const books = [
  [101, "The Alchemist", "Paulo Coelho", "Fiction", 320, 4.7],
  [102, "To Kill a Mockingbird", "Harper Lee", "Classic", 281, 4.8],
  [103, "1984", "George Orwell", "Dystopian", 328, 4.6],
  [104, "Sapiens", "Yuval Noah Harari", "History", 443, 4.9],
  [105, "The Great Gatsby", "F. Scott Fitzgerald", "Classic", 180, 4.5],
  [106, "Atomic Habits", "James Clear", "Self-Help", 320, 4.9],
  [107, "The Catcher in the Rye", "J.D. Salinger", "Classic", 214, 4.3],
  [108, "Harry Potter", "J.K. Rowling", "Fantasy", 410, 4.9],
  [109, "The Power of Habit", "Charles Duhigg", "Self-Help", 371, 4.6],
  [110, "The Hobbit", "J.R.R. Tolkien", "Fantasy", 310, 4.7],
];

// 1. Print all book titles
books.forEach((book)=>console.log(book[1]))

console.log("---------------------------------------");

// 2. Find the total number of books
console.log(books.length)

console.log("---------------------------------------");

// 3. Print details of books in the “Classic” genre
let classicBooks = books.filter((book)=>book[3]=="Classic")
console.log(classicBooks)

console.log("---------------------------------------");

// 4. Print books with a rating higher than 4.7
let highRating = books.filter((book)=>book[5]>4.7)
console.log(highRating)

console.log("---------------------------------------");

// 5. Print details of the book “The Hobbit”
let hobbit = books.find((book)=>book[1]=="The Hobbit")
console.log(hobbit)

console.log("---------------------------------------");

// 6. Sort books based on page count in descending order
let sortPages = books.sort((a,b)=>b[4]-a[4])
console.log(sortPages)

console.log("---------------------------------------");

// 7. Sort books based on ratings in ascending order
let sortRating = books.sort((a,b)=>a[5]-b[5])
console.log(sortRating)


// NOTE:
// [1]=title, [3]=genre, [4]=pages, [5]=rating