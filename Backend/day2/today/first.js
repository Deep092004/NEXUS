// const sum=require("./current/sum");
// const sub=require("./current/sub"); // ye ak acchi habit nahi h kyoki hum sabko alag alag rakhte h to humko pata nahi hota ki konsa file kaha se import karna hai to isliye hum ek index.js file banate h jisme hum sabko export kar dete h aur uske baad us index.js file ko import karte h to hume pata chal jata hai ki konsa file kaha se import karna hai
// const mul=require("./current/mul");
//best way 
const {sum,sub,mul}=require("./current"); // ye ak acchi habit nahi h kyoki hum sabko alag alag rakhte h to humko pata nahi hota ki konsa file kaha se import karna hai to isliye hum ek index.js file banate h jisme hum sabko export kar dete h aur uske baad us index.js file ko import karte h to hume pata chal jata hai ki konsa file kaha se import karna hai 

sum(1,4);
sub(3,1);
mul(2,3);
console.log("hello ji ");