// primitive data types 
//const num1= 2;
//num1=30;
//console.log(num1); //2
// non primitive data types 
const obj1={
    name1:"daap",
    age:20
}
obj1.age=50; // we can change the properties of the object 
//console.log(obj1); //{ name1: 'daap', age: 50 } 
let obj2={
    name2: "raam",
    id : 202
};
//obj1=obj2; // we cannot change the reference of the object here
//console.log(obj1); // error
// STRING STARTING HERE----
let str1="deepanshu singh kadyan";
let str2='hello deepanshu';        //string etne tareke se likh sakte h 
let str3=`MY NAME is Deepanshu`; // this one is used most..
//console.log(str1,str2,str3);
//
let price=80;
console.log(`the price of the item is ${price} get is fast `); // template literals
// string concatination
 let s1=`hello`;
 let s2=`world`;
 console.log(s1+" "+s2); //helloworld
console.log(s1.length); // musut know property length
let p2=`"this is my book"`;
console.log(p2); // here we can use double quotes inside backticks and print is 
// escape character
console.log("deepanshu . \nkadyan"); //for next line use \n 
console.log("deepanshu . \\nkadyan");// for printing \ use double \\
//
let name1="deepanshu";
console.log(name1[0]); // accesing the character at index 0 etc..
console.log(name1.charAt(1)); //another way to access the character 
// changing case 
//uppercase and lowercase
console.log(name1.toUpperCase()); //DEEPANSHU --NO CHANGE IN ORIGINAL STRING 
console.log(name1.toLowerCase()); //deepanshu
//
let hero="Hello Coder Army Coder";
console.log(hero.indexOf("Coder")); //6 -- first occurence
console.log(hero.lastIndexOf("Coder")); //18 -- last occurence
console.log(hero.indexOf("z")); //-1 -- not found
// slicing and substring the string 
let message="Hello Deepanshu welcome to the javascript world ";
console.log(message.slice(0,5)); //Hello 
//slice with negative indices 
console.log(message.slice(-6,-1)); //world
console.log(message.substring(6,16)); //Deepanshu
//replace method 
let str10="hello ji kese ho app ji";
console.log(str10.replace("ji","bhai"));
// here all the methods are not changing the original string 
console.log(str10.replaceAll("ji","bhai"));
// here we can change all the string
//SPLIT METHOD
let str11=" money, honey, sunny, funny";
console.log(str11.split(",")); // this converts string to array bassed
//trim for removing spaces in starting and ending of the string
let str12="    hello world   ";
console.log(str12.trim());  //hello world
//NEW WAY TO CREATE STRING 
let lateststring= new String("deepanshu singh");
console.log(lateststring); // [String: 'deepanshu singh']
console.log(typeof lateststring); //object
///endd