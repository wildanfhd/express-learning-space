const fs = require("fs");
const path = require("path");

const readPath = path.resolve(__dirname, "test.txt");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca file");
    return;
  }
  console.log(data);
};

const printText = fs.readFileSync(readPath);
console.log(printText);
