// // long way to change background color using javascript

// const red=document.getElementById("red");
// const blue=document.getElementById("blue");
// const orange=document.getElementById("orange");
// const green=document.getElementById("green");
// const purple=document.getElementById("purple");
// red.addEventListener("click",()=>{
//     document.body.style.backgroundColor="red";
// });
// blue.addEventListener("click",()=>{
//     document.body.style.backgroundColor="blue";
// });
// orange.addEventListener("click",()=>{
//     document.body.style.backgroundColor="orange";
// });
// green.addEventListener("click",()=>{
//     document.body.style.backgroundColor="green";
// });
// purple.addEventListener("click",()=>{
//     document.body.style.backgroundColor="purple";
// });

// short way to change background color using javascript

// const colors=["red","blue","orange","green","purple"];
// colors.forEach((color)=>{
//     const button=document.getElementById(color);
//     button.addEventListener("click",()=>{
//         document.body.style.backgroundColor=color;
//     });
// });
//
// very short way to change background color using javascript
// 
const button1=document.querySelectorAll("button");
button1.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        document.body.style.backgroundColor=btn.id;
    });
});