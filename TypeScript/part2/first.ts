let num:number = 10;
let x = 10;
let money;
money = 100;
// objects in tsc
//inline
let obj1:{name:string,age:number,gender:string}={
name:"John",
age:30,
gender:"male"
}
// another way to create an object is by using type alias

let person :{name:string; age:number; balence:number};

person={
    name:"John",
    age:30,
    balence:1000
}

type personType = {
    name:string;
    age:number;
    balence:number;
}

let c1: personType = {
    name:"John",
    age:30,
    balence:1000
}
// another way to create an object is by using interface

interface admin {
    name: string,
    age: number,
    possition : string
}

let obj2: admin={
name:"John",
age:30,
possition:"manager"
}
// HOMEWORK--->
//interface vs type 
// function 
// class 