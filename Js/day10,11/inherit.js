//prototype inheritance in js
let user1={
    name:"deepanshu",
    age:21,
};
let user2={
    amount:1000,
    money:50
}
user2.__proto__=user1;
let Arr=[1];
console.log(user2.name);// it will search in user2 if not found then it will search in user1
console.log(Arr.__proto__.__proto__==Object.prototype);// true
console.log(Arr.__proto__==Array.prototype);
console.log(Arr.__proto__.__proto__.__proto__==null);