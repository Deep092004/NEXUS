//Array
// const arr=[19,9,32,4,5,true,"hello"];
// console.log(arr); //display
// console.log(arr.length); //size of array
// console.log(arr[2]); //accessing element
// console.log(arr.at(1)); //accessing element but latest and also take negative index
// // array clone 
// //const newarr=arr; //reference copy --true becuse same refrence 
// const newarr=structuredClone(arr); // colne copy of arr and diferrent reference 
// console.log(newarr==arr); // false because different refrence 
// // push in the last element  -operation
// arr.push(30);
// console.log(arr);
// //pop the last element
// arr.pop();
// console.log(arr);
// //unshift - add element in the satarting
// arr.unshift("deep");
// console.log(arr);
// // shift - remove element from starting
// arr.shift();
// console.log(arr);
//     //delete operatio
//     delete arr[0];
//     console.log(arr);
// delete the element but space is empty and it is hold the space 
//
//slice and splice
// console.log(arr.slice(1,4)); // it will not modify the original array
// console.log(arr); // original array
// console.log(arr.splice(1,3)); // it will modify the original array
// original array m effect hoga 
// console.log(arr); // original array
//splice(starting index, how many element to delete, elements to add)
// arr.splice(1,0,"a","b","c");
// console.log(arr);
// convert array to string
// const str=arr.toString();
// console.log(str);
// console.log(typeof str);
// //join
// console.log(arr.join("*")); // it will join the array with specified character  
//
// concat-- add two or more arrays
let arr1=[2,35,6,11];
let arr2=[9,4,7,3];
// let arr3=arr1.concat(arr2);
// console.log(arr3);
//another way
arr1.push(arr2);
console.log(arr1);
//2d array
let arr2d=[[2,3,4],[2,4,5],[1,3,5]];
// [2,3,4]
// [2,4,5] // 2d array 
// [1,3,5]
console.log(arr2d);
console.log(arr2d[1][2]);
// convert 2d array to 1d array
let newarr=arr2d.flat(Infinity);
console.log(newarr); // convert to 1d array 
//flat() for 2d to 1d array conversion--
// we use flat(2) for 3d to 1d array conversion--
// flat(infinity) no tension ketna bi ho 1d,2d,3d,4d, sb convert to 1d array
let abc=[1,2,4,5,6,4]
console.log(typeof abc); //object
console.log(Array.isArray(abc)); // true -- to check array or not
// end array 



