// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var caraLiteral = `${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat.toUpperCase()}`;
console.log(caraLiteral);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var konversi = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat);
console.log(konversi);

//soal 3
var kalimat = 'wah javascript itu keren sekali';
var KataPertama = kalimat.substr(0, 3);
var KataKedua;
var KataKetiga;
var KataKeempat;
var KataKelima;
var [KataPertama, KataKedua, KataKetiga, KataKeempat, KataKelima] = kalimat.split(' ');
console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + KataKeempat);
console.log('Kata Kelima: ' + KataKelima);

//soal 4
var nilai = 92;
var grade = "";
if( nilai >= 80) grade="Indeksnya A"
else if ( nilai >= 70 && nilai< 80) grade="indeksnya B"
else if ( nilai >= 60 && nilai< 70) grade="indeksnya c"
else if ( nilai >= 50 && nilai< 60) grade="indeksnya D"
else grade = "indeksnya E" ;

console.log(grade);

//Soal 5
var tanggal = 14;
var bulan = '11';
var tahun = 1993;

// 14 November 1993
var namaBulan = '';

switch (bulan) {
  case 1:
    namaBulan = 'Januari';
    break;
  case 2:
    namaBulan = 'Febuari';
    break;
  case 3:
    namaBulan = 'Maret';
    break;
  case 4:
    namaBulan = 'April';
    break;
  case 5:
    namaBulan = 'Mei';
    break;
  case 6:
    namaBulan = 'Juni';
    break;
  case 7:
    namaBulan = 'Juli';
    break;
  case 8:
    namaBulan = 'Agustus';
    break;
  case 9:
    namaBulan = 'September';
    break;
  case 10:
    namaBulan = 'Oktober';
    break;
  case 11:
    namaBulan = 'November';
    break;
  case 12:
    namaBulan = 'Desember';
    break;

  default:
    namaBulan = 'Januari';
    break;
}

console.log(`${tanggal} ${namaBulan} ${tahun}`);