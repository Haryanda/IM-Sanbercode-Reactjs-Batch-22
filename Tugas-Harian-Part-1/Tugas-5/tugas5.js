//soal 1
function myFunction (){
    return "Halo Sanbers !"
}
console.log(myFunction()) 
console.log()

//soal 2
function Kalikan(x, y){
    return x * y
}
 var num1 = 12
 var num2 = 4 

 var hasilnya = Kalikan(num1, num2)
 console.log(hasilnya)
 console.log()

 //soal 3
function perkenalan(name, age, address, hobby){
    var kalimat = "nama saya " + name + ", umur saya" + age + "tahun, alamat saya di" + address + ", dan saya punya hobby" + hobby + "!"
    return kalimat
}

var name = "Harry"
var age = "27"
var address = "jalan jati bunder"
var hobby = "futsal"

var kenal = perkenalan(name, age, address, hobby)
console.log(kenal)
console.log

//soal 4
var arraydaftar = ["asep", "laki-laki", "baca buku", 1992]

var object = {
    nama: arraydaftar[0],
    jeniskelamin: arraydaftar[1],
    hobi: arraydaftar[2],
    tahunlahir: arraydaftar[3]
}
console.log(object)
console.log()

//soal 5

var buahBuah = [
    {
        nama: "strobery",
        warna: "merah",
        adaBijinya: false,
        harga: 800
    },
    {
        nama: "jeruk",
        warna: "orange",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "semangka",
        warna: "Hijau dan Merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "pisang",
        warna: "kuning",
        adaBijinya: false,
        harga: 5000
    }
]
console.log(buahBuah[0])
console.log()

//soal 6
var dataFilm = []

function tambahDataFilm(nama, durasi, genre, tahun){
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun,
    })
}

tambahDataFilm("LOTR", "2 jam", "Action", "1999")
tambahDataFilm("Avenger", "2 jam", "Action", "2019")
tambahDataFilm("Spidermen", "2 jam", "Action", "2004")
tambahDataFilm("juon", "2 jam", "Horor", "2003")

console.log(dataFilm)
console.log()
