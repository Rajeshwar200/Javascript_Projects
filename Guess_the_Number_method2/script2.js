const userInput = document.querySelector('.input-cls');
const submitBtn = document.querySelector('.submit');
const resetBtn = document.querySelector('.reset-btn');

let form = document.querySelector('form');

const message = document.querySelector('.message');
const guessArray = document.querySelector('.guessArray');





    let randomNumber = Math.trunc(Math.random()*100 +1);
    console.log(randomNumber);

    const allGuess = [];

    form.addEventListener('submit', (e)=>{

        e.preventDefault();

        let userInputvalue = parseInt(userInput.value)

        if(randomNumber > userInputvalue){
            message.innerHTML = "Too low";
        }

        else if(randomNumber < userInputvalue){
            message.innerHTML = "Too high";
        }

        else{
            message.innerHTML = "Congrates !! You Guessed it right"
            resetBtn.disabled = false;
            submitBtn.disabled = true;
        }

        allGuess.push(userInputvalue);

        guessArray.innerHTML = `Your Guesses are ${allGuess.join(', ')}`

        form.reset();
    })


    resetBtn.addEventListener('click', ()=>{

       
        message.innerHTML = "";
        guessArray.innerHTML = "";

        resetBtn.disabled = true;
        submitBtn.disabled = false;

    })



