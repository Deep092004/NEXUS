const express = require('express');
const app= express();

// "/about"
// "/contact"
// "/detail" 
// "/"
// important note: agar humne "/" ko sabse pehle likha to ye sabse pehle match hoga aur ye hi response dega to isliye "/" ko humne sabse nichee rakha hai taki ye tabhi match ho jab baaki sare route match na ho
//? char become Optional 
// + char can be repeated multiple times
// * char any number of character can arrive 

app.use("/about/:id",(req,res)=>{
    console.log(req.params);
res.send({"name":"deepanshu","lastname":"singh","age":"20","caste":"jaat"});
})

// app.use("/contact",(req,res)=>{
//     res.send("i am in contact page");
// })
// app.use("/detail",(req,res)=>{
//     res.send("i am in detail page");
// })
// app.use("/",(req,res)=>{
//     res.send("i am in home page"); // isko samesha nichee rakhege kyoki ye sabse pehle match hoga to ye hi response dega aur nichee wale response nahi milega
// })



app.listen(4000,()=>{
    console.log("I am listen at port number 4000");
})