//if-else
    //let age =32;
// if(age>=18){
//     console.log("you are eligable for vote");
// }
// else{
//     console.log("you are not eligable for vote");
// }
//
//if-else-if-else
//     age1 =45;
// if(age1<18){
//     console.log("KID");
// }
// else if (age1>45){
//     console.log("old");
// }
// else{
//     console.log("young")
// }
//
// multiple condition : switch
// console.log(new Date().getDay());
// switch(new Date().getDay()){
// case 0:
//     console.log("sunday");
//     break;
//     case 1:
//         console.log("monday");
//         break;
//         case 2:
//             console.log("tuesday");
//         break;
//         case 3: 
//         console.log("wednesday");
//         break;
//         case 4:
//             console.log("thursday");
//             break;
//             case 5:
//                 console.log("friday");
//             break;
//             case 6:
//                 console.log("saturday");
//             break;
            
// }
// loops : ak kaam ko baar baar krna 
// for loop
// for(let i=0; i<20; i++ ){
//     console.log("jaat here");
// } 
// sum first n number 
// let sum=0;
// for(let i=1; i<=10; i++){
//     sum+=i;   
// }
// console.log(sum);
//
// nested loop
//12345
//12345
//12345
//12345  print this 
//12345
//12345
// for(j=0; j<6; j++){ 
//     let line=``; 
// for(i=1; i<=5; i++){ 
//     line+=i; 
// }
// console.log(line);
// console.log("")
// }
//scope ke bare m: global,local,block 
//var ko sitemal nhi krna 
// while loop
// let i=1;
// while(i<6){
//     console.log(i);
//         i++;  
// }
//Do while loop
// let i=1;
// let text="";
// do{
//     text+= "i am jaat"+i+"\n";
//     i++;
// }
// while(i<10);
// console.log(text);
// array
// let arr=[10,20,30,40];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
//object
// obj={
//     name: "deepanshu",
//     age: 21,
//     amount : 300
// };
// const key=Object.keys(obj);
//console.log(key);
//[ 'name', 'age', 'amount' ]
// for(let i=0; i<key.length; i++){
//     console.log(obj[key[i]]);
// }

// continue
// advance loop
let obj={
name: "deep",
age: 21,
gender: "male",
city: "jaatland"
};
//for in loop
for( let key in obj){
    console.log(key,obj[key]);
}