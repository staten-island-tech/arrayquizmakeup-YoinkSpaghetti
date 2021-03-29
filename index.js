const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
for (let x = 0; x < 10; x++) {
  console.log(
    books[x].authorFirst +
      " wrote " +
      books[x].name +
      " in " +
      books[x].publishDate
  );
}
//Sort books from oldest to most recent
bookAge = [
  books[0].publishDate,
  books[1].publishDate,
  books[2].publishDate,
  books[3].publishDate,
  books[4].publishDate,
  books[5].publishDate,
  books[6].publishDate,
  books[7].publishDate,
  books[8].publishDate,
  books[9].publishDate,
];

function bookAgeSort(name) {
  x = 0;
  while (x < name.length) {
    y = 1;
    if (name[x] > name[y]) {
      thing1 = name[y];
      name.splice(y, 1);
      thing1.push;
    }
    y = y + 1;
    if (y >= name.length) {
      x = x + 1;
      y = x + 1;
    }
    if (x >= name.length) {
      console.log(name);
    }
  }
}
bookAgeSort(bookAge);
//sort books alphabetically

//Find who wrote War and Peace
z = 0;
while (z < books.length) {
  if (books[z].name == "War and Peace") {
    console.log(books[z].authorFirst + " wrote " + books[z].name);
    z = books.length + 1;
  } else {
    z = z + 1;
  }
}
//how many books were written before 1900?

//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?
