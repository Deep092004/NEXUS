const button=document.querySelector("button");
button.addEventListener("click",()=>{
//read the data
const firstNumber = document.getElementById("first");
const number1=Number(firstNumber.value);
const secondNumber = document.getElementById("second");
const number2=Number(secondNumber.value);
//Output the sum
const result=number1+number2;
const output=document.getElementById("result");
output.innerHTML="The Sum Is :" +result;
})