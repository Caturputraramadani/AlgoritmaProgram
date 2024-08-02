const readline = require('readline');

// Inisialisasi variabel
let nilaiMax = -Infinity;
let jumlahTertinggi = 0;

// Buat interface untuk input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputNilai = (count) => {
  if (count === 10) {
    // Semua nilai sudah diinput, tampilkan hasilnya
    console.log(`Nilai tertinggi: ${nilaiMax}`);
    console.log(`Jumlah siswa dengan nilai tertinggi: ${jumlahTertinggi}`);
    rl.close();
    return;
  }
  
  rl.question(`Masukkan nilai ujian ke-${count + 1}: `, (input) => {
    const nilai = parseInt(input);
    
    // Cek nilai tertinggi
    if (nilai > nilaiMax) {
      nilaiMax = nilai;
      jumlahTertinggi = 1;
    } else if (nilai === nilaiMax) {
      jumlahTertinggi++;
    }
    
    // Input nilai berikutnya
    inputNilai(count + 1);
  });
};

// Mulai proses input nilai
inputNilai(0);
