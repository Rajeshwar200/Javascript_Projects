const counter = document.querySelector('.counter');
const decrement = document.querySelector('.minus-btn')
const increment = document.querySelector('.plus-btn')
const userInput = document.querySelector('.input-cls')
const reset = document.querySelector('.reset-btn')


function changeoutput(operator){

    let count = parseInt(counter.innerText);

    let changeValue = parseInt(userInput.value);

    if(operator === '-'){
        counter.innerText = count  -  changeValue
    }else{
        counter.innerText = count  +  changeValue
    }

}

decrement.addEventListener('click', (e)=>{
    e.preventDefault();

    changeoutput('-');

})

increment.addEventListener('click', (e)=>{
    e.preventDefault();

    changeoutput('+')

})

reset.addEventListener('click', ()=>{

    counter.innerText = '0';
    userInput.value = '1';
})