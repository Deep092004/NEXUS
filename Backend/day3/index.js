const a=1;
const b= "hello ji";
console.log(b);

function add(x,y){
    return x+y;
}   
setTimeout(()=>{
    console.log("set timeout is called");
},5000);

console.log(a);
console.log(add(2,3));
