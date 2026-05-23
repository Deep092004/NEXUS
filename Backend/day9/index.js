const express = require("express");
const app = express();
app.use(express.json());
// project online food booking system banani hai jisme admin food menu me item add karega aur user usme se apne pasand ka item add to card karega or delete bhi kar sakta hai card se
// CRUD: CREATE , READ , UPDATE , DELETE
// database : array
const FoodMenu = [
  { id: 1, name: "Pizza", category: "veg", price: 250 },
  { id: 2, name: "Burger", category: "non-veg", price: 1100 },
  { id: 3, name: "Pasta", category: "non-veg", price: 1504 },
  { id: 4, name: "Salad", category: "veg", price: 800 },
  { id: 5, name: "Soup", category: "veg", price: 60 },
  { id: 6, name: "Sandwich", category: "non-veg", price: 120 },
  { id: 7, name: "rooti", category: "veg", price: 200 },
  { id: 8, name: "panner", category: "veg", price: 1100 },
  { id: 9, name: "chiken", category: "non-veg", price: 1150 },
  { id: 11, name: "makhhan", category: "veg", price: 200 },
  { id: 12, name: "rayeta", category: "non-veg", price: 100 },
  { id: 13, name: "thanduri rooti", category: "non-veg", price: 150 },
  { id: 14, name: "metha", category: "veg", price: 200 },
  { id: 15, name: "mutton", category: "non-veg", price: 600 },
  { id: 16, name: "biryani", category: "non-veg", price: 1500 },
];
const AddToCard = [];
//  user ka jo bi food add hoga vo idher jayega

app.get("/food", (req, res) => {
  res.send(FoodMenu);
});
// authenticate admin here middleware
app.use("/admin", (req, res, next) => {
  // authentication karna padega ki kya ye admin hi hai ya nahi
  // dummy code for authentication
  const token = "abcdf";
  const Access = token === "abcdf" ? 1 : 0;
  if (!Access) {
    res.status(403).send("You are not authorized to access admin route");
  }
  next();
});
app.post("/admin", (req, res) => {
  // add item in food menu
  // authentication karna padega ki kya ye admin hi hai ya nahi
  // dummy code for authentication
  // const token="abcdf"
  // const Access=token==="abcdf"? 1:0;
  // if(Access){ no need because we are using middleware for authentication
  // add item to food menu
  FoodMenu.push(req.body);
  res.status(201).send("Item added successfully in food menu");
  // } else{
  //     res.status(402).send("You are not authorized to add item in food menu");
  // }
});
app.delete("/admin/:id", (req, res) => {
  // add item in food menu
  // authentication karna padega ki kya ye admin hi hai ya nahi
  // dummy code for authentication
  // const token="abcdf"
  // const Access =token==="abcdf"? 1:0;
  // if (Access){ // no need because we are using middleware for authentication
  // delete item from food menu
  const id = parseInt(req.params.id);
  const index = FoodMenu.findIndex(item => item.id === id);
  if (index !== -1) {
    FoodMenu.splice(index, 1);
    res.send("Item deleted successfully");
  } else {
    res.status(404).send("Item not found");
  }
  // }
  // else {
  // res.status(403).send("You are not authorized to delete item from food menu");
  // }
});
app.patch("/admin", (req, res) => {       // update item in food menu
  // add item in food menu
  // authentication karna padega ki kya ye admin hi hai ya nahi
  // dummy code for authentication
  // const token="abcdf"
  // const Access=token==="abcdf"? 1:0;
  // if(Access){  no need because we are using middleware for authentication
  // update item in food menu
  const id = req.body.id;
  const fooddata = FoodMenu.find(item => item.id === id);
  if (fooddata) {
    if (req.body.name) {
      fooddata.name = req.body.name;
    }
    if (req.body.category) {
      fooddata.category = req.body.category;
    }
    if (req.body.price) {
      fooddata.price = req.body.price; 
    }
    res.send("Item updated successfully in food menu");
  } else {
    res.status(404).send("Item not found in food menu");
  }

  // }
  // else{
  //     res.status(403).send("You are not authorized to update item in food menu");
  // }
});

// user admin se food menu dekhega aur usme se apne pasand ka item add to card karega or delete bhi kar sakta hai card se
app.post("/user/:id", (req, res) => {
const userId = parseInt(req.params.id);
const fooditem=FoodMenu.find(item=>item.id===userId);
if(fooditem){
AddToCard.push(fooditem);
res.status(201).send("Item added successfully in card");
}
else{
res.status(404).send("Item not found");
}




})
app.delete("/user/:id",(req,res)=>{
  const userId=parseInt(req.params.id);
  const index=AddToCard.findIndex(item=>item.id===userId);
if(index!==-1){
  AddToCard.splice(index,1);
  res.status(200).send("Item deleted successfully from card");
}
else{
  res.status(404).send("Item not found in card");
}
})
app.get("/user",(req,res)=>{
if (AddToCard.length===0){
  res.status(404).send("No item in card");
}
else{
  res.send(AddToCard);
}
})
// error handling
app.get("/dummy",(req,res)=>{
  try{
// JSON.parse('{"invalid json": "10"}')
throw new Error("BROKEN")
res.send("This is dummy route");
  }
catch(err){
    res.status(400).send("Invalid JSON "+err);
  } 
})
//
//
app.listen(3000, () => {
  console.log("I am listen at port number 3000");
});


// now project end point is ready we can test it using postman or any other api testing tool