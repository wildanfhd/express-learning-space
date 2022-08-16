function cetakPesan(message) {
  return `Ini adalah pesan : ${message}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Jamal",
  prodi: "Informatika",
  cetakMhs: () => {
    return `Ini ${mahasiswa.nama} dari prodi ${mahasiswa.prodi}`;
  },
};

class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;

    console.log(this.nama);
    console.log(this.jenis);
  }
}

module.exports = { cetakPesan, PI, mahasiswa, Hewan };
