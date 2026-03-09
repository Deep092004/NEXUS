//comparison operator
//number to number 
let a=1;
let b=2;
console.log(a==b);//false
// == both are equal
//< less than ,> greater than
//<= less than equal to , >= greater than equal to
let num=10;
let str="10"; // type conversion hoga str to num ka -
console.log(num==str);//true
// ===, first type chk then campare the value 
console.log(num===str);//false
let a3=10;
let b3=10;
console.log(a3===b3);//true
//null==undefined -true
//null===undefined -false
// null only eual to undefined always ==
console.log(null==undefined);//true
console.log(null===undefined);//false
console.log(null==0);//false
console.log(null===0);//false
console.log(undefined==0);//false
console.log(undefined===0);//false
console.log(null>0);//false
console.log(null<0);//fasle
console.log(null>=0);//true
console.log(null<=0);//true
//logical operators
//&& dono shi hone chaye condition
console.log(true && true);//true
let age=18;
let money=420;
console.log(age>=18 && money>=200);//true
// or || only one condition will be true
console.log(age>=18 || money>900);//true
// not !
console.log(!true);//false
// BITWISE OPERATORS
console.log(14 & 11);//10
console.log(14 |11);//15
console.log(14^11);//5
console.log(5<<3);//40    5 multiply by 2^3
console.log(20>>2);//5    20 divide by 2^2