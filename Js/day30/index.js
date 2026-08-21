
// promisses 


const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=7eca097f3cb44cdf888174835260708&q=London&aqi=yes`);



// promises.then((response)=>{

// //console.log(response);
// const pro2=response.json();
// pro2.then((data)=>{
//     console.log(data);
// })

// })  

//async await
//await
// aycn function k agge lgana hota h tabi await kaam krta h or await ka kaam ye h ki jabtak promise resolve na ho jaye tab tak wait krna hota h 
async function getData(){
    const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=7eca097f3cb44cdf888174835260708&q=London&aqi=yes`);
    const data=await response.json();
    console.log(data);
}