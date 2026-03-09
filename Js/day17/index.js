// how the code executes in JS---->
// console.log(y);//Cannot access 'y' before initialization
// console.log(x);//undefined
//var x=10;
// let y=20; 
// hosting--> hosting is called where all the decleriation function moved to the top of their containing scope during compilation phase
//var w;  
//let 0;
// console.log(w);//Cannot access 'y' before initialization
// console.log(o);//undefined
// var w=10;
// let o=20; 
//
// function example
greet();// helloupperse
meet();// not a function
function greet(){
console.log("helloupperse")
}
let meet=function(){
console.log("hellonicchese")
}
