// Soal 1
console.log("LOOPING PERTAMA");
var x = 2;
while (x <= 20) {
  console.log(x + " - I love coding");
  x += 2;
}
console.log("LOOPING KEDUA");
var x = 20;
while (x >= 2) {
  console.log(x + " - I will become a frontend developer");
  x -= 2;
}

console.log("\n");

// Soal 2
for (var x = 1; x <= 20; x++) {
  if (x % 2 == 1) {
    if (x % 3 == 0) {
      console.log(x + " - I Love Coding");
    } else {
      console.log(x + " - Santai");
    }
  } else {
    console.log(x + " - Berkualitas");
  }
}

console.log("\n");

// Soal 3
var z = "";
for (var x = 1; x <= 7; x++) {
  for (var y = 1; y <= x; y++) {
    z += "#";
  }
  z += "\n";
}
console.log(z);

console.log("\n");

// Soal 4
var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

console.log("\n");

// Soal 5
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
daftarBuah.sort();
for (var x = 0; x < daftarBuah.length; x++) {
  console.log(daftarBuah[x]);
}
