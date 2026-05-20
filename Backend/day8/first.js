const express = require('express');
const app= express();
// midleware
// route handler   --
// app.use(route,rh1,rh2,rh3,....)
// middleware: mw,mw,mw,mw,--- Request handler
app.use("/user", (req,res,next)=>{
    console.log("first");
    // res.send("HELLO JI");
    next();
},(req,res,next)=>{
    console.log("second");                   //first and second will be middleware and third will be request handler
    // res.send("i am second");
    next();
},
(req,res,next)=>{
    console.log("third");
    res.send("i am third");
    next();
})       
app.listen(3000,()=>{
    console.log("I am listen at port number 3000");
})
