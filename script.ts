console.log("test");
console.log("Hello");
const firstName = "Petar";
const age = 21;
const grad = "Kocani";
const isStudent:boolean=true;

let city = "Skopje";
console.log(city);

//Nizi

const ocenki:number[]=[10,8,9];
const studenti:string[]=["Ana", "Marko", "Petar"];
const gradovi:Array<String> = ["Skopje", "Bitola", "Ohrid"];

//Objekti
const user:{
    name:String;
    age:number;
    student:boolean;
}={
    name :"Nastaha",
    age: 23,
    student:true,

}
//Custom type
type Users={
name:String;
age:number;
student:boolean;
};
const UserOne:Users={
    name:"Martina",
    age:25,
    student:true,
};
const UserTwo:Users={
    name:"Angel",
    age:42,
    student:false,
}
//Funkcii
function add(a:number,b:number):number{
return a+b;
}
 console.log(add(5,3));

 function greet(name:String):String{
    return "Hello " +name;
 }
console.log(greet("Marija"));

//Optional properties

type Course={
    id:number|string;
    name:String;
    duration:number;
    description:string;
};
const CourseOne:Course={
    id:"t 28",
    name:"AI",
    duration:40,
    description:"Generativna AI",
};
const CourseTwo:Course={
    id:15,
    name:"Cyber",
    duration:50,
    description:"Network",
}
//Zadaca
type SemosStudent={
name:String;
prosek:number;
grad:String;
};
const studentiSemos:SemosStudent[]=[
    {name:"Marijan",prosek:8,grad:"Kocani" },
    {name:"Vesna",prosek:8.5,grad:"Berovo" },
    {name:"Marija",prosek:8,grad:"Stip" },
    {name:"Marija",prosek:8,grad:"Strumica" },
      
];
//konstanta ime: od tipot[] = konstanta ime.filter((student:ime na tip)=>student.prosek)
const filtriraniStudenti:SemosStudent[]=studentiSemos.filter((student:SemosStudent)=>student.prosek>=6);
const prosekStudenti =studentiSemos.reduce((sum, student)=>sum+student.prosek,0);
const prosecenUspeh = prosekStudenti/filtriraniStudenti.length;
console.log(prosecenUspeh);