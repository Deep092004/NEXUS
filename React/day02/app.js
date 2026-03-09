const element1=React.createElement("h1",null,"Hello World from React");
const element2=React.createElement("h2",null,"Welcome to React");

// ReactDOM.render(element1,document.getElementById("id"));    // old version sued before react 18 
const root=ReactDOM.createRoot(document.getElementById("id")); // new method in react 18 or upper version
const div=React.createElement("div",null,[element1,element2]);
root.render(div);
 
// JSX html like syntax in js file-- cover in next video






