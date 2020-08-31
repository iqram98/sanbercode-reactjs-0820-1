// Luas Lingkaran
function luasLingkaran(jari) {
  var luas = 3.14 * jari * jari;
  return luas;
}
console.log("\n--Luas Lingkaran--");
console.log(luasLingkaran(2));

// Luas Segitiga
function luasSegitiga(alas, tinggi) {
  var luas = 0.5 * alas * tinggi;
  return luas;
}
console.log("\n--Luas Segitiga--");
console.log(luasSegitiga(3, 4));

// Luas Persegi
function luasPersegi(sisi) {
  var luas = sisi * sisi;
  return luas;
}

console.log("\n--Luas Persegi--");
console.log(luasPersegi(4));

var daftarAlatTulis = [
  "2. Pensil",
  "5. Penghapus",
  "3. Pulpen",
  "4. Penggaris",
  "1. Buku",
];

daftarAlatTulis.sort();
var x = 0;
while (x < daftarAlatTulis.length) {
  console.log(daftarAlatTulis[x]);
  x++;
}

var pesertaLomba = [
  ["Budi", "Pria", "172 cm"],
  ["Susi", "Wanita", "162 cm"],
  ["Lala", "Wanita", "155 cm"],
  ["Agung", "Pria", "175 cm"],
];

var objPesertaLomba = [
  {
    nama: pesertaLomba[0][0],
    jenisKelamin: pesertaLomba[0][1],
    tinggi: pesertaLomba[0][2],
  },
  {
    nama: pesertaLomba[1][0],
    jenisKelamin: pesertaLomba[1][1],
    tinggi: pesertaLomba[1][2],
  },
  {
    nama: pesertaLomba[2][0],
    jenisKelamin: pesertaLomba[2][1],
    tinggi: pesertaLomba[2][2],
  },
  {
    nama: pesertaLomba[3][0],
    jenisKelamin: pesertaLomba[3][1],
    tinggi: pesertaLomba[3][2],
  },
];

console.log(objPesertaLomba);

var daftarNama = [];

function tambahNama(nama, jenisKelamin) {
  var panggilan;
  if (jenisKelamin == "laki-laki") {
    panggilan = "Bapak";
  } else if ((jenisKelamin = "perempuan")) {
    panggilan = "Ibu";
  }
  daftarNama.push({
    nama: nama,
    jenisKelamin: jenisKelamin,
    panggilan: panggilan,
  });
}

tambahNama("Asep", "laki-laki");
tambahNama("Siti", "perempuan");
tambahNama("Yeni", "perempuan");
tambahNama("Rudi", "laki-laki");
tambahNama("Adit", "laki-laki");

for (let x = 0; x < daftarNama.length; x++) {
  var string =
    x + 1 + ". " + daftarNama[x].panggilan + " " + daftarNama[x].nama;
  console.log(string);
}
