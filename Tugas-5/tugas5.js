// Soal 1
function halo() {
  return "Halo Sanbers!";
}

console.log(halo());

console.log("\n");

// Soal 2
function kalikan(num1, num2) {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log("\n");

// Soal 3
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

console.log("\n");

// Soal 4
var objDaftarPeserta = {
  nama: "Asep",
  "jenis kelamin": "laki-laki",
  hobi: "baca buku",
  "tahun lahir": 1992,
};

console.log("\n");

// Soal 5
var buah = [
  {
    nama: "strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    "ada bijinya": "ada",
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    "ada bijinya": "tidak",
    harga: 5000,
  },
];

console.log(buah[0]);

console.log("\n");

// Soal 6
var dataFilm = [];

function tambahData(nama, durasi, genre, tahun) {
  dataFilm.push({
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  });
}

tambahData("naruto", "24 menit", "action", "2002");
tambahData("one piece", "30 menit", "adventure", "1999");

console.log(dataFilm);
