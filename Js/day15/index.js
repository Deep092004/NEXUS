// for of loop
//
// const arr=[10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }
// let str="Hello World";
// for(let value of str){
//     console.log(value);
// }
//
// don't use for of loop with objects
// const obj={
//     name:"deep",
//     age:22,
//     gender: "female"
// };
// for(let value of obj){
//     console.log(value); // TypeError: obj is not iterable
// }
// 
//for each---> its not return anything
//
//let arr=[10,20,30,40,50];
// sinlge argument : number
// double argument : number,index
// triple argument : number,index,array
//arr.forEachum((num,index,a)=>{ // callback function
//    arr[index]=num+10;
//});
//console.log(arr);   // [20,30,40,50,60]
//
// Filter --->
let arr2=[5,10,15,20,25,30];
let result=arr2.filter((num)=>num%2==0);
console.log(result); // yes or no m anser deta h 
// example 
const student=[{name:"deepanshu",age:21, marks:90},
    {name:"deep1",age:22, marks:99},
    {name:"deepanshi",age:23, marks:92},
    {name:"deep2",age:24, marks:95},
    {name:"deep3",age:25, marks:96},
    {name:"deep4",age:26, marks:98},];
    const result2=student.filter(({marks})=>marks>95);
    console.log(result2); // [{name:"deep1",age:22, marks:99},{name:"deep4",age:26, marks:98}]
//
//Map---->> return modified array
let arr3=[1,2,3,4,5];

const store=arr3.map((num)=>{
    return num*num; // modified value here 
});
console.log(store);
// example-- filter and map together
const arr4=[10,15,20,25,30];
const store2=arr4.filter((num)=>num>15).map((num)=>num*2);
console.log(store2); // [40,50,60]
//
// Reduce--->
// day16---

