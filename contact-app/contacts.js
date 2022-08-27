const fs = require("fs");
const readLine = require("readline");
// ! const path = require("path");

// * Membuat interface yaitu input untuk mengambil input dari user, dan output untuk menampilkan input dari user
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ! Membuat variable untuk menampung path file
// ! const contactsPath = path.resolve(__dirname, "data/contacts.json");
// ! console.log(contactsPath); // Double check untuk path file

// * Membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// * Membuat file contacts.json jika belumm ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// * Membuat function untuk membuat pertanyaan
const buatPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (callback) => {
      resolve(callback);
    });
  });
};

const simpanContact = (nama, email, nomorHP) => {
  // * Membuat object game yang memiliki properti nama dan noHp yang diambil dari input
  const contact = { nama, email, nomorHP };

  // * Membuat variable untuk membaca file contacts.json
  const filesBuffer = fs.readFileSync(dataPath, "utf-8");

  // * Mengubah string pada file contacts.json menjadi JSON
  const contacts = JSON.parse(filesBuffer);

  // * Memasukkan object contact yang berisi properti nama dan noHP yang didapat dari input user ke dalam
  contacts.push(contact);

  // * Mengirimkan contacts yang berisi data object contact dan mengubahnya menjadi string dan menuliskannya ke dalam file tujuan yaitu dataPath
  fs.writeFileSync(dataPath, JSON.stringify(contacts));

  console.log("Data telah dimasukkan, terima kasih");

  rl.close();
};

module.exports = { buatPertanyaan, simpanContact };
