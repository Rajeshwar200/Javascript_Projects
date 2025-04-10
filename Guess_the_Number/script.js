let randomNumber = parseInt(Math.random()*100 +1);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')

let guessArray = [];
let numOfGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();

        const guess = parseInt(userInput.value);

        validateGuess(guess);

    })
}


function validateGuess(guess){
    // validate the guess if the guess is valid or not

    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('Your number is less than 1')
    }
    else if(guess>100){
        alert('Your number is greater than 100');
    }
    else{
        guessArray.push(guess);

        if(numOfGuess>10){
            displayGuesses(guess);
            displayMessage(`Game over.. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuesses(guess);
            correctGuess(guess)
        }
    }
}

function correctGuess(guess){
    // check the guess if it is correct or not

    if(guess === randomNumber){
        displayMessage(`You guessed it correct.`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Your guess is too low`);

    }
    else if(guess > randomNumber){
        displayMessage(`Your guess if too high`);
    }
}


function displayGuesses(guess){
    // display the guesses and update the ui
    
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numOfGuess++    
    remainingGuess.innerHTML = `${11 - numOfGuess}`
    
}

function displayMessage(message){
    // display message directly
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(guess){

    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    p.style.cursor = 'pointer'
    playGame = false;
    newGame();
}

function newGame(){

     const newGameButton = document.querySelector('#newGame');

     newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 +1);
        guessArray = [];
        numOfGuess = 1;
        guessSlot.innerHTML = '';
        remainingGuess.innerHTML =  `${10- numOfGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);


        playGame = true;
     })

}





