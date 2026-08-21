const mongoose = require("mongoose");
async function main(){

await mongoose.connect("mongodb+srv://mrbean0981_db_user:deep123@jaatji.0x2r3je.mongodb.net/Bookstore");
// code likhna shuru kr do                                                                            
// const userSchema = new Schema({
// name: String,
// age:Number,
// city:String,
// gender:String,
// });
// model create karna hai=== collection create karna mena (apni table create karna )
// class bi bol sakte h isee
// const User = mongoose.model("user",userSchema);
// document create karna hai or object create kiya hai 
// const user1 = new User({ 
//     name: "John Doe",
//     age: 30,
//     city: "New York",
//     gender: "Male"
// });     
// await user1.save();
// await User.insertMany([{name:"jaat",age:98,city:"jaatland"},{age:34,gender:"male"}])
// }
}
module.exports=main;