// Core Module
// File System
const fs = require("fs");
const path = require("path");

// Membuat path untuk menentukan nama file yang akan di write
const writePath = path.resolve(__dirname, "test.txt");
const asyncWritePath = path.resolve(__dirname, "asyncTest.txt");

// Menuliskan string ke file (Synchronous)
try {
  // Jika folder data tidak ada, maka akan terjadi error
  // jika ada, maka file test.txt akan dibuat
  fs.writeFileSync(writePath, "Hello World secara Synchronous");
} catch (error) {
  console.log(error);
}

// Menuliskan string ke file secara Asynchronous
fs.writeFile(asyncWritePath, "Hello World secara Asynchronous", (e) =>
  console.log(e)
);
