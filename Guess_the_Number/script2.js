const userInput = document.querySelector(".input-cls");
const submit = document.querySelector(".submit");
const previousGuess = document.querySelector('.prevGuess');
const remainingGuess = document.querySelector('.Guessremaining');
const lowOrHigh = document.querySelector('.lowOrHi');
const startAgain = document.querySelector('.wrapper');


let randomNumber = parseInt(Math.random()*100 +1);

const p = document.createElement('p');

let guessArray = [];
let numOfGuess = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click', (e)=>{

        e.preventDefault();

        const guess = parseInt(userInput.value);
        validateGuess(guess);


    })
}


function validateGuess(guess){

    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Your number is less than 1')
    }
    else if(guess>100){
        alert('Your number is greater than 100')
    }
    else{

        guessArray.push(guess);

        if(numOfGuess>10){
            displayGuess(guess);
            displayMessage(`Game over.. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            correctGuess(guess);
        }

    }

}

function correctGuess(guess){

    if(guess === randomNumber){
        displayMessage('Your Guess is correct')
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage('Your Guess is too low');
    }
    else if(guess > randomNumber){
        displayMessage('Your Guess is too high');
    }


}

function displayGuess(guess){

    userInput.value = "";
    previousGuess.innerHTML += `${guess}`
    numOfGuess++;
    remainingGuess.innerHTML = `${10-numOfGuess}`

}

function displayMessage(message){

    lowOrHigh.innerHTML = `<h2>${message}</h2>`

}

function endGame(guess){

    userInput.value="";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
    startAgain.appendChild(p);
    p.style.cursor = 'pointer'
    playGame = false;
    newGame();


}

function newGame(){

    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener('click', function(e){

        randomNumber = Math.floor(Math.random()*100+1);
        guessArray = []
        numOfGuess = 1;
        previousGuess.innerHTML = '';
        remainingGuess.innerHTML = `${10-numOfGuess}`;
        userInput.removeAttribute('disabled');
        startAgain.removeChild(p);

        playGame = true;



    })


}
