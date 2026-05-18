const express = require('express');
const app= express();
app.use(express.json());  // to convert json data into js object
              
// project book store
const Bookstore=[
    { id:1,name:"harry potter",author:"devflux"},
    {id:2,name:"friends",author:"vikash"},
    {id :3,name:"nexus",author:"rohit"},
     {id:4,name:"friends23",author:"vikash3"},
    {id :5,name:"nexus33",author:"rohit3"}
]

app.get("/book",(req,res)=>{
res.send(Bookstore);                                          

})

app.get("/book/:id",(req,res)=>{
  const id=parseInt(req.params.id);
  const book=Bookstore.find(info=>info.id===id)  
res.send(book);
})
app.post("/book",(req,res)=>{
    Bookstore.push(req.body);
    res.send("books saved successfully");
})



















// app.get("/user",(req,res)=>{
//     res.send({name:"jaat",age:23}); 
// })
// //
// app.post("/user",(req,res)=>{
//     console.log(typeof(req.body.age));  // to check the type of age is number or string
//     res.send("data saved successfully"); 
// })

app.listen(3000,()=>{
    console.log("I am listen at port number 3000");
})

// route match honge: app.use 

// app.get app.post app.patch app.put app.delete -->jab tak puri tarah match nahi hota tab tak ye route match nahi hote hai.