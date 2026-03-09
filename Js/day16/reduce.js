// reduce --> hame ak single value ka result deta h array ka ...
arr=[10,20,30,40,50];
//const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0-> accumulator ki initial value);
const result =arr.reduce((acc,curr)=>{ 
acc=acc+curr;
return acc;
},0);
//console.log(result); // Output: 150
//example
let arr1 = ["orange", "apple", "banana", "grape", "kiwi", "orange", "apple", "banana", "grape", "kiwi"];
//final result ek object ke form m hoga
const result1=arr1.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;
    return acc;
},{});
console.log(result1);
// --hasownproperty() explanation
// let obj={
//     name:"abc",
//     age:25
// }
//console.log(obj.hasOwnProperty("name")); //true or false m anser dega agr name present h ki nahi obj m 
//
//SET--->>
// ek aisi collection h jisme unique value store hoti h ...like primary key in dbms
// set: unique value
const set1= new Set([10,20,30,40,50,10,20]);
console.log(set1);
//type of set1; //object
set1.add(60);
set1.add(70);
set1.add("hello");
console.log(set1);
console.log(set1.size);
// you also delete value from set
// has method
const user_id=new Set(["deepanshu___kadyan","deepu_kadyan","deepanshu123","deepu_kadyan"]);
let new_user="deepu_kadyan";
console.log(user_id.has(new_user)); //true or false
// .clear() method empty the set
//let set2=new Set([10,20,30,40,50]);
// convert array into set
// let arrayy=[10,20,30,40,50,10,20,30];
// let set2=new Set(arrayy);
// console.log(set2);
// //set to array
// arrayy=[...set2];
// console.log(arrayy);
//
//union of two sets
//
let setA=new Set([1,2,3,4,5]);
let setB=new Set([4,5,6,7,8]);
let unionSet=new Set([...setA,...setB]);
console.log(unionSet); //{1,2,3,4,5,6,7,8}
//intersection of two sets
//
const result2=new Set([...setA].filter((num)=>setB.has(num)));
console.log(result2); // {4,5}
//
//MAP-->> isme key value pair store hota h ...like object or key can be of any type ...
//key should be unique
const map1=new Map();
//map1.set(Key: value);
map1.set(2,33);
map1.set("name","deepanshu");
map1.set(true,"boolean value");
console.log(map1);