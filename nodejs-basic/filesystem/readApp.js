const fs = require("fs");
const path = require("path");

const readPath = path.resolve(__dirname, "test.txt");
const asyncReadPath = path.resolve(__dirname, "asyncTest.txt");
console.log(`Sync Path : ${readPath}`);
console.log(`Async Path : ${asyncReadPath}`);

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca file");
    return;
  }
  console.log(data);
};

// Membaca file secara Synchronous
const printText = fs.readFileSync(readPath, "utf-8");
console.log(printText);

// Membaca file secara Asynchronous
fs.readFile(asyncReadPath, "utf-8", fileReadCallback);
