import React from "react";
import ReactDOM from "react-dom/client";

// const element1=React.createElement("h1",null,"Hello World from React");
// const element2=React.createElement("h2",null,"Welcome to React");
// react.createelement => react element =>js object => html element
// const newElement=<h1>hello deepanshu from html</h1>
//        bable:                  react                    render 
// JSX => React.createElement()=>react element (js object)=> html element

// ReactDOM.render(element1,document.getElementById("id"));    // old version sued before react 18 
// new method in react 18 or upper version
// const div=React.createElement("div",null,[element1,element2]);
// root.render(div);

 
// JSX (JavaScript XML) : html like syntax in js file-- c

const name="deepanshu"; // js variable bi use kr sakte hai jsx me {name} like
const obj={
    color:"red",
    fontSize:"20px",
    backgroundColor:"yellow"
}

// react element
const newElement=(
    <div>
    <h1 id="id" className="Secomd">hello {name} from html</h1>
    <h2 style={obj}>welcome to react</h2>
    </div>
)
// React Component : it is a function which return react element
// function component
function MyComponent(){
return <h1 id="pk">hello from MyComponent</h1>
};
const newelement2=MyComponent(); // it will return react element

const newElement3=<> {newElement}{newelement2}</>

const root=ReactDOM.createRoot(document.getElementById("id"));

root.render(newElement3);
// root.render(newelement2);





