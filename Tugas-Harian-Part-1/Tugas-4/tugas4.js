//soal 1
var angka = 2;
console.log('Looping Pertama');
    while(angka<=18){
        angka+=2;
        console.log(angka + ' - i love coding')
    }
console.log('looping Kedua');
    while(angka>=2){
        console.log(angka + ' - I Will Become a Frontend developer');
        angka -=2;
    }

//soal 2
for(var i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 2 ===1){
        console.log(i + " - I Love You Coding")
    }else if(i % 2 ===1){
        console.log(i + " - Santai")
    }else{
        console.log(i + " - Berkualitas")
    }
    
}
//soal 3
var x = '';
for(var i = 0 ;i < 7; i++) {
   for(var j = 0;j < i; j++){
    x += '#'  
   }
   x += '\n';
}
   console.log(x);
   
   

//soal 4
var kalimat ="saya sangat seneng belajar javascript"
var names = kalimat.split(" ")
console.log(names)

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var nama = daftarBuah.sort();
for(var i = 0; i <= 4; i++){
    console.log(nama[i]);
}
