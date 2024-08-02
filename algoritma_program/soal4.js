// Ambil input total detik dari pengguna
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan total detik: ', (input) => {
  // Ubah input ke integer
  const totalDetik = parseInt(input);

  // Hitung jumlah jam, menit, dan detik
  const jam = Math.floor(totalDetik / 3600);
  const menit = Math.floor((totalDetik % 3600) / 60);
  const detik = totalDetik % 60;

  // Tampilkan hasil
  console.log(`${jam} jam ${menit} menit ${detik} detik`);

  // Tutup readline
  rl.close();
});
