/*
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/
const books = [
  { title: "Book1", author: "Author1", year: "2004" },
  { title: "Book2", author: "Author2", year: "2015" },
  { title: "Book3", author: "Author3", year: "2012" },
];

const filterAndCapitalizeAuthors = (book) => {
  return {
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year,
  };
};
const filterAndCapitalizeBooks = books
  .filter((book) => book.year >= 2010)
  .map(filterAndCapitalizeAuthors);

console.log("Original List of Books:", books);
console.log(
  "Filtered and Capitalized Books (Published After 2010):",
  filterAndCapitalizeBooks
);
