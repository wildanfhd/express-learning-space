const fs = require("fs");
const readLine = require("readline");
const path = require("path");

// Membuat interface yaitu input untuk mengambil input dari user, dan output untuk menampilkan input dari user
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuat variable untuk menampung path file
const libPath = path.resolve(__dirname, "gamesLibrary.json");

// Membuat pertanyaan
rl.question("Masukkan nama game : ", (nama) => {
  rl.question("Masukkan genre game : ", (genre) => {
    // Membuat object game yang memiliki properti nama dan genre yang diambil dari input
    const game = { nama, genre };

    // Membuat variable untuk membaca file games.json
    const gamesLibrary = fs.readFileSync(libPath, "utf-8");

    // Mengubah string pada file gamesLibrary.json menjadi JSON
    const games = JSON.parse(gamesLibrary);

    // Memasukkan object game yang berisi properti nama dan genre yang didapat dari input user ke dalam
    games.push(game);

    // Mengirimkan games yang berisi data object game dan mengubahnya menjadi string
    fs.writeFileSync(libPath, JSON.stringify(games));

    console.log("Data telah dimasukkan, terima kasih");

    rl.close();
  });
});
