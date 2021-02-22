// soal 1
const hitungLuasDiameter = (diameter) =>{
const pi = 22 / 7;
const radius = diameter / 2;
const luas = pi * Math.pow(radius, 2);
return luas;
}
console.log(hitungLuasDiameter(14));

const hitungLuasjari2 = (radius) =>{
    const pi = 22 / 7;
    const rumus = diameter / 2;
    const luas = pi * 2 * r
    return luas;
    }
    console.log(hitungLuasDiameter(7));

//soal 2
let kalimat = ""

const Tambah = (str) => {
    kalimat = `${kalimat} ${str}`
}

Tambah("saya")
Tambah("adalah")
Tambah("seorang")
Tambah("frontend")
Tambah("devloper")

console.log(kalimat)
console.log()

//soal 3
const newFunction = (firstname, lastname) => {
    return {
    firstname,
    lastname,
    fullname: () => {
        console.log(firstname + " " + lastname)
        }
    }
}
newFunction("william", "imoh").fullname()
console.log

//soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocard",
    spell: "vimulus renderus!!!",
}
    const { firstName, lastName, destination, occupation, spell } = newObject
    console.log(firstName, lastName, destination, occupation, spell)
    console.log

//soal 5

const west = ["will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brain", "Noel", "Maggie"]

const combained = [...west, ...east]

console.log(combained)