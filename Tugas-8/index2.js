var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

function bacaBuku() {
  readBooksPromise(10000, books[0])
    .then((result) => {
      if (result >= 0) {
        readBooksPromise(result, books[1])
          .then((result) => {
            if (result >= 0) {
              readBooksPromise(result, books[2])
                .then((result) => {
                  if (result >= 0) {
                    console.log("buku habis");
                  }
                })
                .catch((err) => {
                  console.log(err.massage);
                });
            }
          })
          .catch((err) => {
            console.log(err.massage);
          });
      }
    })
    .catch((err) => {
      console.log(err.massage);
    });
}

bacaBuku();
