/** Urutan prioritas module :
 * 1. Core modules
 * 2. Local modules
 * 3. Third party modules
 */
// const fs = require("fs"); // Core Module
const { cetakPesan, PI, mahasiswa, Hewan } = require("./first"); // Local module
// const moment = require("moment"); // Third party Module / Npm module / node_modules

console.log(cetakPesan("Halo, ini adalah pesan"));
console.log(PI);
console.log(mahasiswa.cetakMhs());

const kucing = new Hewan("Kucing", "Mamalia Karnivora");
console.log(kucing);
