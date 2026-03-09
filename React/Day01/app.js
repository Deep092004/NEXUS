const element=React.createElement("h1",{},"hello deep");
//   ReactDOM.render(element, document.getElementById("id"));--// old method not use in react 18 or upper version 

// new method in react 18 or upper version
const root=ReactDOM.createRoot(document.getElementById("id"));
root.render(element);

// CDN- content delivery network
