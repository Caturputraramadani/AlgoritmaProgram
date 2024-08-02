const totalDetik = 3600;
let jam, menit, detik, sisadetik; // Deklarasi variabel sisadetik

if (totalDetik >= 3600) {
  jam = Math.floor(totalDetik / 3600);
  sisadetik = totalDetik % 3600;
} else {
  jam = 0;
  sisadetik = totalDetik;
}

if (sisadetik >= 60) {
  menit = Math.floor(sisadetik / 60);
  detik = sisadetik % 60;
} else {
  menit = 0;
  detik = sisadetik;
}

console.log(`Jam: ${jam}, Menit: ${menit}, Detik: ${detik}`);
