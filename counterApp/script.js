
const counter = document.querySelector('.counter');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const changevalue = document.querySelector('.input-cls');
const reset = document.querySelector('.reset-btn');


minusBtn.addEventListener('click', ()=>{

    const count = parseInt(counter.innerText);

    const changeValueVar = parseInt(changevalue.value)

    counter.innerText = count - changeValueVar;



})
plusBtn.addEventListener('click', ()=>{

    let count = parseInt(counter.innerText);

    const changeValueVar = parseInt(changevalue.value)

    counter.innerText = count + changeValueVar;



})

reset.addEventListener('click', ()=>{
    counter.innerText = 0;
})