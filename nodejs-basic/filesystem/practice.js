const fs = require("fs");
const readLine = require("readline");
const path = require("path");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const writePath = path.resolve(__dirname, "isiPesan.txt");

rl.question("Masukkan pesan anda : ", (pesan) => {
  console.log(pesan);
  fs.writeFileSync(writePath, pesan);
  rl.close();
});
