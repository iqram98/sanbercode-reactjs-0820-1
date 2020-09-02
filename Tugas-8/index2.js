var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

function bacaBuku(waktu, books, indeks) {
  if (indeks < books.length) {
    readBooksPromise(waktu, books[indeks])
      .then((result) => {
        if (result > 0) {
          bacaBuku(result, books, indeks + 1);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else {
    console.log("buku habis");
  }
}

bacaBuku(8000, books, 0);
