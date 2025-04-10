const userInput = document.querySelector('input');
const form = document.querySelector('form');
const submitbtn = document.querySelector('.submit-btn')
const resetbtn = document.querySelector('.reset-btn')

const message = document.querySelector('.message');

const guessArray = document.querySelector('.guessArray')

    // !---IFFE(Immediately Invoked Function Expression)

    /* IIFE EXAMPLE:-
    
                (function() {
                    console.log("This is an IIFE");
                    })();
                    
                 
       EXAMPLE 2:- 
                (() => {
                    console.log("This is an arrow function IIFE");
                })();          
                            
    
    
    
           Explanation:
                        The function is wrapped in parentheses (function() { ... }), making it an expression.
    
                        The () at the end (...)(); immediately invokes the function.
    
            Benefits:
                        Avoids Global Scope Pollution: Variables inside an IIFE are not accessible outside.
    
                        Encapsulation: Useful for keeping private data safe.
    
                        Useful in Modules and Frameworks: Many JavaScript libraries use IIFE to encapsulate logic.     
                            */



    ;(function () {


        const allGuess = [];

        let randomNumber = Math.round(Math.random() * 100);


        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let userInputvalue = parseInt(userInput.value)

            if (randomNumber > userInputvalue) {
                message.innerHTML = 'Too Low!!'
            }
            else if (randomNumber < userInputvalue) {
                message.innerHTML = 'Too High!!'
            }
            else {
                message.innerHTML = 'Congrates!!'
                resetbtn.disabled = false;
                submitbtn.disabled = true;
            }

            allGuess.push(userInputvalue);
            allGuess

            guessArray.innerHTML = `Your Guesses are : ${allGuess.join(', ')}`;



            form.reset();

        })

        resetbtn.addEventListener('click', () => {

            guessArray.innerText = "";
            message.innerHTML = "";
            resetbtn.disabled = true;
            submitbtn.disabled = false;

            randomNumber = Math.round(Math.random() * 100);

        })
    })
    ()