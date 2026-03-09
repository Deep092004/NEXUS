let a=10;
let b=a;
console.log(b);
b=20;
console.log(a);
//primitive data type vs non primitive data type 
//primitive data type : immutable 
//non primitive data type : mutable
//object example

let obj = {
    name: "John",
    age: 30
};
let obj2=obj;
obj2.name="Doe";
console.log(obj.name);//Doe 
console.log(obj2.name);//Doe
