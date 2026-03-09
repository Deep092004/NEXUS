// //how to create object 
// const obj={
//     0:"zero",
//     1:"one",
//     "":20,
// name:"deepanshu",
// account_balance:5000,
// gender: "male",
// age:21,
// undefined:10,
// null:null,
// }
// // console.log(obj);
// // console.log(obj.name); //accessing value using key
// // console.log(obj["account_balance"]); //accessing value using key anoher way
// // console.log(obj["0"]); //accessing value of key 0
// // console.log(obj[1]);
// // console.log(obj[""]); //accessing value of empty string key
// const arr=[20,30,20];
// //console.log(arr[0],obj[0]);// yaha pr array ko object ki tarah acces kr skte h isleye array ka type object hota h and array is also an object in js
// // console.log(obj.undefined);
// // console.log(obj.null);
// //
// // Second way to create object 
// //
// const person=new Object();// creating object using object constructor now it is empty object 
// // property add
// person.name="deepanshu";
// person.age=21;
// person.gender=`male`;
// // console.log(person);
// //delete property
// // delete person.gender;
// // console.log(person);
// //Modify property or update
// person.name="john";
// // console.log(person);
// //
// // Third way to create object 
// //
// class people{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;

//     }
// }
// let per1=new people("deepanshu",21,"male");
// let per2=new people("jaat",23,"male");
// // console.log(per1,per2);
// //
// let obj1={
//     name:"deep",
//     gender:"male",
//     age:21,
//     account_balance:5000,
// };
// //keyys and values method
// const arr1=Object.keys(obj1);
// //console.log(arr1);// it will return array of keys of object
// const arr2=Object.values(obj1);
//console.log(arr2);// it will return array of values of object
//
// //assign use case imp
// //
// const bj1={a:10,b:20};
// const bj2={c:30,d:40};
// const bj3={e:50,f:60};
// // const newObj=Object.assign({},bj1,bj2,bj3);// it will merge all objects into one object and if there is same key then the last object's value will be taken
// const newObj=Object.assign({},bj1,bj2,bj3);
// console.log(newObj);//its create a copy of all objects into new object  
// //
// //another way to merge objects using spread operator
// //
// const mergobj={...bj1,...bj2,...bj3};
// console.log(mergobj);
// //
// //shalow copy and deep copy
// //
// const originalobj={a:1,b:2};
// //shalow copy
// const shalowcopyobj=originalobj;
// shalowcopyobj.a=10;
// console.log(originalobj,shalowcopyobj);// it will also change original object because both are pointing to same memory location
// //deep copy
// const deepcopyobj=structuredClone(originalobj);
// deepcopyobj.b=20;
// console.log(originalobj,deepcopyobj);// it will not change original object becuase it not on same memory location 
//nested object 
//
// const user={
//     name:"deepanshu",
//     address: {
//         city:"delhi",
//         state:"dl",
//     }
// }
// console.log(user.address.city);
//
//destructuring object 
// let obj={
// name:"deepanshu",
// money:999,
// balence:99912,
// age:21 
// };
// const {name,balence}=obj;// it will create two variables name and balence and assign the values from object to them
// console.log(name,balence);
// //
// // we can also rename the variables 
// const {money:cash,age:aayu}=obj;// it will create variable cash and assign value of money from object to it
// console.log(cash,aayu);
//distructuring nested object 
// const user={
//     name: "deepanshu",
//     age: 21,
//     address:{
//         city: "delhi",
//         pincode: 110091,
//         state: "dl"
//     }
// };
// const {address:{city,pincode}}=user;
// console.log(city,pincode);
//array in object destructuring
// const user1={
//     name: "deepanshu",
//     age: 21,
//     arr:[10,20,30,40],
//     address:{
//         city: "delhi",
//         pincode: 110091,
//         state: "dl"
//     }
// };
// const {arr:[first,second]}=user1;
// console.log(first,second);
//function in object 
const obj={
    name: " jat",
    age:23,
    greet:function(){
        console.log("hello")
    },
};
console.log(obj.greet());// it will return undefined because greet function does not return anything it just console log the value
//prototype inheritance in js
let user1={
    name:"deepanshu",
    age:21,
};
let user2={
    amount:1000,
    money:50
}
user2.__proto__=user1;
let Arr=[1];
console.log(user2.name);// it will search in user2 if not found then it will search in user1
console.log(Arr.__proto__.__proto__==Object.prototype);// true
console.log(Arr.__proto__==Array.prototype);
console.log(Arr.__proto__.__proto__.__proto__==null);