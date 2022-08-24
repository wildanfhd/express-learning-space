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

const pertanyaan1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan nama anda : ", (nama) => {
      resolve(nama);
    });
  });
};

const pertanyaan2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan email anda : ", (email) => {
      resolve(email);
    });
  });
};

const pertanyaan3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan No HP anda : ", (noHP) => {
      resolve(noHP);
    });
  });
};

const main = async () => {
  const nama = await pertanyaan1();
  const email = await pertanyaan2();
  const nomorHP = await pertanyaan3();

  // * Membuat object game yang memiliki properti nama dan noHp yang diambil dari input
  const contact = { nama, email, nomorHP };

  // * Membuat variable untuk membaca file contacts.json
  const filesBuffer = fs.readFileSync(dataPath, "utf-8");

  // * Mengubah string pada file contacts.json menjadi JSON
  const contacts = JSON.parse(filesBuffer);

  // * Memasukkan object contact yang berisi properti nama dan noHP yang didapat dari input user ke dalam
  contacts.push(contact);

  // * Mengirimkan contacts yang berisi data object contact dan mengubahnya menjadi string
  fs.writeFileSync(dataPath, JSON.stringify(contacts));

  console.log("Data telah dimasukkan, terima kasih");

  rl.close();
};

main();
