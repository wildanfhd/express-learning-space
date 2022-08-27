// * Mengimport function yang dibutuhkan
const { buatPertanyaan, simpanContact } = require("./contacts");

// * Main
const main = async () => {
  const nama = await buatPertanyaan("Masukkan nama anda : ");
  const email = await buatPertanyaan("Masukkan email anda : ");
  const nomorHP = await buatPertanyaan("Masukkan No HP anda : ");

  simpanContact(nama, email, nomorHP);
};

main();
