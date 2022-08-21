const readLine = require("readline");

/** Menggunakan ReadLine dari core module readline */
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Satu pertanyaan
// rl.question("Masukkan Nama anda : ", (nama) => {
//   console.log(`Selamat datang kembali, ${nama}`);
//   rl.close();
// });

// Tiga pertanyaan
rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("Masukkan pesan anda : ", (pesan) => {
    rl.question("Masukkan email anda : ", (email) => {
      console.log(
        `Hai ${nama}, anda mengirimkan pesan : ${pesan}, dengan email : ${email}`
      );
      rl.close();
    });
  });
});
