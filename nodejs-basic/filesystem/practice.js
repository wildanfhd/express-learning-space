const fs = require("fs");
const readLine = require("readline");
const path = require("path");

// Membuat interface yaitu input untuk mengambil input dari user, dan output untuk menampilkan input dari user
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const writePath = path.resolve(__dirname, "isiPesan.txt"); // format txt
const anotherPath = path.resolve(__dirname, "pesan.json");

rl.question("Masukkan pesan anda : ", (pesan) => {
  console.log(pesan);
  fs.writeFileSync(anotherPath, JSON.stringify(pesan)); // JSON.stringify : mengubah string ke dalam bentuk JSON
  rl.close();
});
