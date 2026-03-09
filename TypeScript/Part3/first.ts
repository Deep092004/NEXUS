// interface Person{
//     name: string,
//     age: number,
//     gender: string,
//     aadhar?:number
// }

// const obj:Person={
//     name: "John",
//     age: 30,
//     gender: "male",
// }
// //example
// interface customer{
//     name: string,
//     age:number,
//     blance:number
// }

// const customer1:Partial<customer>={
//     name: "Alice",
//     blance:2000
// }
// //Partial makes all the properties of the type to be optional
// //reqired all the properties of the type to be optional
// // readonly makes all the properties of the type to be readonly no option work here like obj.change name or age
// //
// // array of objects

// interface product{
//     id: number,
//     name: string,
//     price: number}

//     const arr:product[]=[
//         {id:1, name:"laptop", price:1000},
//         {id:2, name:"phone", price:500},
//         {id:3, name:"tablet", price:300}
//     ]

//     // function in ts

//     function greet(a:number):number{
// console.log(a);
// return a+10;
//     }

//    console.log(greet(1));

//    // optional parameter

//    function gate(person?: string){
// console.log(person|| "mohan");
//    }
//    //gate("jaat");
//    gate()

//    // Arrow Function 

// const sum=(a:number,b:number):number=>{
// return a+b;
//    }
//    console.log(sum(9,9))

//    //call back function 

//    function PLaceOrder(order:number,callback:(amount:number)=>void):void{
// const amount = order+10;
// callback(amount);
//    }

// PLaceOrder(10,(amount)=>{
// console.log(amount)
//    })
//    // rest parameter

// function total(...arr:number[]){
// let anser=0;
// arr.forEach((value)=>{
//     anser=anser+value;
//     console.log(anser);
// })
//    }

//    total(2,3,4,5,6,7,8,2,5);
//    // extend

//    interface human{
//     name:string,
//     age:number
//    }
//    interface Teacher extends human{
// salary:string,
// id:number
//    }

//    const obj5:Teacher={
// name:"rohti",
// age: 21,
// salary : "456",
// id : 123

//    }