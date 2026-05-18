console.log("i am second ");

function sum(a,b){
console.log(a+b);
}
function sub(a,b){
console.log(a-b);
}

// module.exports={sum,sub};
//module.exports is empty 
// another way 
//module.exports.sum=sum; 
export default {sum,sub}; // export default is used to export a single value from a module. It can be a function, class, object, or any other JavaScript value. When you use export default, you can import the value without using curly braces {} and you can give it any name you want when importing.