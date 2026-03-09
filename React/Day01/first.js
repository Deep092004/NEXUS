//create an element through js
// const header1=document.createElement("h1");
// header1.innerText="Hello World";
// header1.style.color="red";
// header1.style.fontSize="50px";
// header1.style.backgroundColor="lightgray";
// //
// const header2=document.createElement("h2");
// header2.innerText="Hello World";
// header2.style.color="blue";
// header2.style.fontSize="40px";
// header2.style.backgroundColor="lightblue";

// const root=document.getElementById("id");
// root.append(header1);
// root.append(header2);
// above code is very lengthy and not reusable
// same works as function
//
// const react = {
//   createElement: function (tag, styles, children) {
//     const element = document.createElement(tag);
//     element.innerText = children;
//     for(let key in styles){
//         element.style[key]=styles[key];
//     }
//     return element;
//   },
// };

// const header1 = react.createElement(
//   "h1",
//   { color: "red", fontSize: "50px", backgroundColor: "lightgray" },
//   "hello deep",
// );
// const header2 = react.createElement(
//   "h2",
//   { color: "blue", fontSize: "40px", backgroundColor: "lightblue" },
//   "hello world",
// );

// const root = document.getElementById("id");
// root.append(header1);
// root.append(header2);


