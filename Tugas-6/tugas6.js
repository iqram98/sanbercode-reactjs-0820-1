// Soal 1
console.log("--Soal 1--");
console.log("Luas Lingkaran");

let luasLingkaran = (jari) => console.log(3.14 * jari * jari);
luasLingkaran(4);

console.log("Keliling Lingkaran");
const kelilingLingkaran = (jari) => console.log(3.14 * jari * 2);
kelilingLingkaran(4);

// Soal 2
console.log("\n--Soal 2--");

let kalimat = "";
let menambahkanKata = (kata) => {
  kalimat += `${kata} `;
};

menambahkanKata("saya");
menambahkanKata("adalah");
menambahkanKata("seorang");
menambahkanKata("frontend");
menambahkanKata("developer");
console.log(kalimat);

// Soal 3
console.log("\n--Soal 3--");

const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(firstName + " " + lastName);
      return;
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
