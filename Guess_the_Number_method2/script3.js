const userInput = document.querySelector('input');
const submit = document.querySelector('.submit-btn');
const reset =  document.querySelector('.reset-btn');

const form = document.querySelector('form');

const message = document.querySelector('.message');
const guessArray = document.querySelector('.guessArray');



let guess = [];

let randomNumber = Math.floor(Math.random()*100+1);

form.addEventListener('submit', (e)=>{ 
    
    e.preventDefault();

    let userInputvalue = parseInt(userInput.value);


    if(randomNumber < userInputvalue){

        message.innerHTML = 'Your Guess is too HIGH!!'


    }

    else if(randomNumber > userInputvalue){
        message.innerHTML = 'Your Guess is too LOW!!'
    }

    else{

        message.innerHTML = 'Congratulations!! Your Guess is correct.'
        reset.disabled = false;
        submit.disabled = true;


    }

    guess.push(userInputvalue);
    guess;

    guessArray.innerHTML = `Your Guesses are ${guess.join(',')}`


    form.reset();



})


reset.addEventListener('click', (e)=>{

    e.preventDefault();

    guessArray.innerHTML = "";
    message.innerHTML = "";
    reset.disabled = true;
    submit.disabled = false

    randomNumber = Math.floor(Math.random()*100+1);



})