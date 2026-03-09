//function 
function greet(){
    console.log("jaaat")
       console.log("jaaat")
          console.log("jaaat")
}
// greet();
// greet();
// add sum
function add(num1,num2){
  console.log(num1+num2);
 
}
// add(3,7);
//
const fun=function(){
console.log("hello bhai app kese ho btaoo");
console.log("m toh mst hu bhai app btaoo");
return "jaatji"
}
// console.log(fun());
//
//arrow function 
// let fun1=(num1,num2)=>{
// return num1+num2;
// }
// console.log(fun1(3,2));
//
// short way of function or new //imp//
const cube= number=>number*number*number; // (number) ()-not use in single parameter 
console.log(cube(2));
// rest operator 
//
const sum=function(...number){
    //for loop lga kr nikal sakta hu
    console.log(number);
}
sum(1,2,3,3);
sum(1,23,4,5,6,7)
//object in function
let obj = {
    name:"jaat",
    age:32,
     amount:24250
}
function fun3({name,amount}){
    console.log(name,amount);
}
fun3(obj);