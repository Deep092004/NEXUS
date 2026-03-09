// call back function
function names(fun){
    console.log("Hello Deep");
fun();
}
function greet(){
    console.log("I am  Call Back Function");
}
names(greet); // issi ko bolte hai call back function
//
// example on real life
function fetchdata(){
    console.log("Fetching Data....");   
}
setInterval(fetchdata,2000);// her 2sec m fetchdata function call hoga

