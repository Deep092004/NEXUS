const form = document.querySelector('form');
// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// });
// form.addEventListener('change', (event)=>{
//     console.log(event.target.value);
// });
// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// });

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// });
// form.addEventListener('click', (event)=>{
//     console.log("single click");
// });
// form.addEventListener('dblclick', (event)=>{
//     console.log("double click");
// });
form.addEventListener('submit', (event)=>{
    event.preventDefault();
   const first = document.getElementById('first');
   console.log(first.value);
   const second = document.getElementById('second');
    console.log(second.value);
    const third= document.getElementById('third');
    console.log(third.value);
    const result= document.getElementById('result');
    result.innerText= `${first.value} ${second.value} ${third.value} is a good Boy`;
    document.body.append(result);
    const data = new FormData(form);
    console.log(Array.from(data.keys()));
    console.log(Array.from(data.values()));
});