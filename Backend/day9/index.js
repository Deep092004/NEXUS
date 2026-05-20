const express = require('express');
const app= express();
// CRUD: CREATE , READ , UPDATE , DELETE
  // database : array
  const FoodMenu=[
{id:1, name:"Pizza", category:"veg", price:250},
{id:2, name:"Burger", category:"non-veg", price:1100},
{id:3, name:"Pasta", category:"non-veg", price:1504}, 
{id:4, name:"Salad", category:"veg", price:800},
{id:5, name:"Soup", category:"veg", price:60},
{id:6, name:"Sandwich", category:"non-veg", price:120}, 
{id:7, name:"rooti", category:"veg", price:200},
{id:8, name:"panner", category:"veg", price:1100},
{id:9, name:"chiken", category:"non-veg", price:1150},
{id:11, name:"makhhan", category:"veg", price:200},
{id:12, name:"rayeta", category:"non-veg", price:100},
{id:13, name:"thanduri rooti", category:"non-veg", price:150},     
{id:14, name:"metha", category:"veg", price:200},
{id:15, name:"mutton", category:"non-veg", price:600},
{id:16, name:"biryani", category:"non-veg", price:1500} 
  ]
  const AddToCard=[];
  //  user ka jo bi food add hoga vo idher jayega 




app.listen(3000,()=>{
    console.log("I am listen at port number 3000");
})
