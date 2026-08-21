const express=require("express");
const app=express();
const main=require("./database");
const User =require("./models/user");
app.use(express.json());
// CURD operation : create, update,READ, delete
app.get("/info",async (req,res)=>{
const ans= await User.find({});
res.send(ans);
})
app.post("/info", async (req, res) => {
    try {
        const user1 = new User(req.body);

        const savedUser = await user1.save();

        res.send("savedUser");
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.delete("/info", async (req, res) => {
    
         await User.deleteOne({name:"Deepanshu"})
         res.send("deleted");
});
app.put("/info", async (req, res) =>{
    const user= await User.updateOne({name:"Deepanshu"},{age:45});
    res.send("updated");

});
main()
.then(() => {
    console.log("Connected to DB")
    app.listen(3000,()=>{
    console.log("server is running on port 3000");
})   
}).catch((err) =>console.log(err));

