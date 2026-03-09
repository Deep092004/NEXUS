"use strict";
//class
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    name;
    age;
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
}
const obj1 = new person("rohit", 20);
const obj2 = new person("mohan", 25);
console.log(obj1);
console.log(obj2);
// public private protected
class customer {
    name;
    age;
    balance;
    constructor(n, a, b) {
        this.name = n;
        this.age = a;
        this.balance = b;
    }
    meet() {
        this.age = this.age + 1;
        return this.age;
    }
}
const p1 = new customer("rohit", 20, 5000);
// console.log(p1);
console.log(p1.name);
console.log(p1.meet()); //error age is private
// console.log(p1.balance);     //error balance is protected
class employee extends customer {
    constructor(n, a, b) {
        super(n, a, b);
    }
    getBalance() {
        return this.balance;
    }
}
const e1 = new employee("mohan", 25, 10000);
console.log(e1.getBalance());
//// GENERIC'S --- 
// function value(a:number|string|number[]):(number|string|number[]){
//     return a;
// }
function value(a) {
    return a; // its a generic function which can take any type of parameter and return the same type of parameter
}
console.log(value(10));
console.log(value("hello"));
console.log(value([1, 3, 45, 6, 7, 8, 9]));
//another way
console.log(value("hello")); // isme humne explicitly type define kar diya hai ki ye function string type ka parameter lega aur string type ka hi return karega
//# sourceMappingURL=class.js.map