// call back hell

//call back function

function fetchuser(callback){
console.log("fetching user from database");
setTimeout(function(){
console.log("user fetched"); 
const obj= {
name: "john",
age: 30,
}

callback(obj);

},1000);
}

function greet(name){
    console.log(`hello${name}`);
}

function age(obj){
    console.log(`you are ${obj.age} years old`);
}

fetchuser(greet);
fetchuser(age);


