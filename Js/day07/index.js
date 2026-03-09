let num1=231; // ye stack me banata h 
let num2= new Number(231);
let num3= new Number(231); // ye memory heap me banata h 
console.log(typeof num1); // "number"
console.log(typeof num2); // "object"
console.log(num1==num2); // true-- yaha pr hum pehle num2 ko number m convert krege then compare karege so its true 231==231 
console.log(num2==num3); // false -- here we compare adress and adress of number so its false  like adress(9000)==adress(6000)
//
let num4=231.68;
console.log(num4.toFixed(1)); // "231.7"
console.log(num4.toFixed(3)); // "231.680"
console.log(num4.toPrecision(2)); // "2.3e+2"
console.log(num4.toExponential(2)); // "2.32e+2"
console.log(typeof num4.toString()); // "231.68"
console.log(num4.valueOf()); // 231.68
//
//MATHS
//
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN10); // 2.302585092994046
// floor and ceil
let num5=5.1;
console.log(Math.floor(num5)); //gives the largest integer less than or equal to 4.7
console.log(Math.ceil(num5)); //gives the smallest integer greater than or equal to 5.1
// random number
console.log(Math.random()); // gives random number between 0 to 1
console.log(Math.floor(Math.random()*10));// gives random number between 0 to 9
console.log(Math.floor(Math.random()*10)+1);// gives random number between 1 to 10
console.log(Math.floor(Math.random()*100)+1);// gives random number between 1 to 100
// FORMULA FOR LIKE WE WANT 0-10,1-11,30-40 ETC..
// Math.floor(Math.random()*(max-min+1))+min
// 0-10
console.log(Math.floor(Math.random()*(10-0+1))+0);
//30-40
console.log(Math.floor(Math.random()*11)+30);
// ludo dice 1-6
console.log(Math.floor(Math.random()*6)+1);
