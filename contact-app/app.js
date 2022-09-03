// Import module yargs
const yargs = require("yargs");
const { simpanContact } = require("./contacts");

// Membuat command
yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap", // Keterangan
      demandOption: true, // Apakah wajib diisi atau tidak
      type: "string", // Tipe data yang ingin dimasukkan
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor HP",
      demandOption: true,
      type: "string", // karena angka pertama pada no hp adalah '0', maka tidak bisa kita set typenya ke number
    },
  },
  handler(argv) { 
    // * Memanggil function simpanContact dari contacts.js
    simpanContact(argv.nama, argv.email, argv.noHP);
  },
});

yargs.parse();
