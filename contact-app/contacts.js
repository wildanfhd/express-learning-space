const fs = require("fs");

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


const simpanContact = (nama, email, nomorHP) => {
  // * Membuat object game yang memiliki properti nama dan noHp yang diambil dari input
  const contact = { nama, email, nomorHP };

  // * Membuat variable untuk membaca file contacts.json
  const filesBuffer = fs.readFileSync(dataPath, "utf-8");

  // * Mengubah string pada file contacts.json menjadi JSON
  const contacts = JSON.parse(filesBuffer);

  // * Cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);

  if(duplikat) {
    console.log("Contact sudah terdaftar, gunakan nama lain");    
    return false;
  } 

  // * Memasukkan object contact yang berisi properti nama dan noHP yang didapat dari input user ke dalam
  contacts.push(contact);

  // * Mengirimkan contacts yang berisi data object contact dan mengubahnya menjadi string dan menuliskannya ke dalam file tujuan yaitu dataPath
  fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 4));

  console.log("Data telah dimasukkan, terima kasih");
};

module.exports = { simpanContact };
