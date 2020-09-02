var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

function bacaBooks(waktu, books, indeks = 0) {
  if (indeks < books.length) {
    readBooks(waktu, books[indeks], function (sisa) {
      if (sisa > 0) {
        bacaBooks(sisa, books, indeks + 1);
      }
    });
  } else {
    console.log("buku habis");
  }
}

bacaBooks(10000, books);
