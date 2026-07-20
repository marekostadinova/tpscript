"use strict";
console.log("test");
console.log("Hello");
const firstName = "Petar";
const age = 21;
const grad = "Kocani";
const isStudent = true;
let city = "Skopje";
console.log(city);
//Nizi
const ocenki = [10, 8, 9];
const studenti = ["Ana", "Marko", "Petar"];
const gradovi = ["Skopje", "Bitola", "Ohrid"];
//Objekti
const user = {
    name: "Nastaha",
    age: 23,
    student: true,
};
const UserOne = {
    name: "Martina",
    age: 25,
    student: true,
};
const UserTwo = {
    name: "Angel",
    age: 42,
    student: false,
};
//Funkcii
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Marija"));
const CourseOne = {
    id: "t 28",
    name: "AI",
    duration: 40,
    description: "Generativna AI",
};
const CourseTwo = {
    id: 15,
    name: "Cyber",
    duration: 50,
    description: "Network",
};
const studentiSemos = [
    { name: "Marijan", prosek: 8, grad: "Kocani" },
    { name: "Vesna", prosek: 8.5, grad: "Berovo" },
    { name: "Marija", prosek: 8, grad: "Stip" },
    { name: "Marija", prosek: 8, grad: "Strumica" },
];
//konstanta ime: od tipot[] = konstanta ime.filter((student:ime na tip)=>student.prosek)
const filtriraniStudenti = studentiSemos.filter((student) => student.prosek >= 6);
const prosekStudenti = studentiSemos.reduce((sum, student) => sum + student.prosek, 0);
const prosecenUspeh = prosekStudenti / filtriraniStudenti.length;
console.log(prosecenUspeh);
