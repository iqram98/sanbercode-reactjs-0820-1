// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var gabungKata =
  kataPertama +
  " " +
  kataKedua.charAt(0).toUpperCase() +
  kataKedua.slice(1) +
  " " +
  kataKetiga +
  " " +
  kataKeempat.toUpperCase();

console.log(gabungKata);

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var jumlah =
  parseInt(kataPertama) +
  parseInt(kataKedua) +
  parseInt(kataKetiga) +
  parseInt(kataKeempat);

console.log("Hasil dari penjumlahannya adalah " + jumlah);

// Soal 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// Soal 4
var nilai = 98;

if (nilai >= 80) {
  console.log("Kamu dapat nilai A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Kamu dapat nilai B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Kamu dapat nilai C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("Kamu dapat nilai D");
} else {
  console.log("Kamu dapat nilai E");
}

// Soal 5
var tanggal = 7;
var bulan = 8;
var tahun = 1998;

switch (bulan) {
  case 1:
    console.log(tanggal + " Januari " + tahun);
    break;
  case 2:
    console.log(tanggal + " Februari " + tahun);
    break;
  case 3:
    console.log(tanggal + " Maret " + tahun);
    break;
  case 4:
    console.log(tanggal + " April " + tahun);
    break;
  case 5:
    console.log(tanggal + " Mei " + tahun);
    break;
  case 6:
    console.log(tanggal + " Juni " + tahun);
    break;
  case 7:
    console.log(tanggal + " Juli " + tahun);
    break;
  case 8:
    console.log(tanggal + " Agustus " + tahun);
    break;
  case 9:
    console.log(tanggal + " September " + tahun);
    break;
  case 10:
    console.log(tanggal + " Oktober " + tahun);
    break;
  case 11:
    console.log(tanggal + " November " + tahun);
    break;
  case 12:
    console.log(tanggal + " Desember " + tahun);
    break;
  default:
    console.log("Input Anda Salah");
    break;
}
