// Soal 1
console.log("--Soal 1--");

let luasLingkaran = (jari) =>
  console.log(`Luas lingkaran dengan jari-jari 4 adalah ${3.14 * jari * jari}`);
luasLingkaran(4);

const kelilingLingkaran = (jari) =>
  console.log(
    `Keliling lingkaran dengan jari-jari 4 adalah ${3.14 * jari * 2}`
  );
kelilingLingkaran(4);

// Soal 2
console.log("\n--Soal 2--");

let kalimat = "";
let menambhkanKata = (...kata) => {
  kata.forEach((element) => {
    kalimat += `${element} `;
  });
};

menambhkanKata("saya", "adalah", "seorang", "frontend", "developer");
console.log(kalimat);

// Soal 3
console.log("\n--Soal 3--");

const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

//Driver Code
newFunction("William", "Imoh").fullName();

// Soal 4
console.log("\n--Soal 4--");

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation, spell);

// Soal 5
console.log("\n--Soal 5--");

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);
