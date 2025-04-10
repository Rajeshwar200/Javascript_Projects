const counter = document.querySelector('.counter');
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')


const userInput = document.querySelector('.input-cls')

const resetBtn = document.querySelector('.reset-btn')



plusBtn.addEventListener('click', function(){

    let count = parseInt(counter.innerText);
    
    let changeValue = parseInt(userInput.value);

    counter.innerText  = count + changeValue;



})
minusBtn.addEventListener('click', function(){

    let count = parseInt(counter.innerText);

    let changeValue = parseInt(userInput.value);

    counter.innerText = count - changeValue;



})

resetBtn.addEventListener('click', function(){

    counter.innerText = 0;

})