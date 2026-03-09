// call back hell
// dominos se pizza order kar rahe h

function placeOrder(callback) {
  console.log("talking with dominos");

  setTimeout(() => {
    console.log("order placed Successfully");
    callback();
  }, 2000);
}

function preparingOrder(callback) {
  console.log("dominos is preparing your order");
  setTimeout(() => {
    console.log("preparing order is done");
    callback();
  }, 5000);
}
function pickupOrder(callback) {
  console.log("reaching resturent to pickup order");
  setTimeout(() => {
    console.log("order picked up by delivery boy");
    callback();
  }, 3000);
}

function deliverOrder() {
  console.log("delivering on the way");
  setTimeout(() => {
    console.log("order delivered successfully");
  }, 4000);
}
placeOrder(() => {
  preparingOrder(() => {
    pickupOrder(() => {
      deliverOrder(); 
    });
  })
});

// ye he callback hell hai, isme code ko samajhna mushkil hota hai, aur agar error aata hai to usko handle karna bhi mushkil hota hai, isliye hum promises ka use karte hain, jisse code ko samajhna aur handle karna easy ho jata hai.
