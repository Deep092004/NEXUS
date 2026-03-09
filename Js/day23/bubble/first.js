const grandParent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
//
//event bubbling and event capturing
////addEventListener(first_event, callback, capture)
child.addEventListener("click",()=>{
console.log("child clicked");
},false)
parent.addEventListener("click",()=>{
console.log("parent clicked");
},false)
grandParent.addEventListener("click",()=>{
console.log("grandParent clicked");
},false)
//false for bubbling
//true for capturing