const buttons = document.querySelectorAll('button');
const resulEl = document.querySelector('#result');
let userScoreprint = document.querySelector('#user-score');
let computerScoreprint = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
       const result = playRound(button.id, computerplay())

       resulEl.textContent = result
       
        
    })
})


function computerplay(){
    const choices = ['rock','paper','scissor']
    const randomChoice = Math.floor(Math.random()*choices.length);

    return choices[randomChoice];
}


function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        result.innerHTML = 'It\'s a tie';
        return 'It\'s a tie';
    } 

    else if(
        (playerSelection ==='rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')

    ){
        playerScore++;
        userScoreprint.textContent = playerScore;
       
        return 'You win!  ' + playerSelection + ' beats ' + computerSelection;
    }
    else{
        
        computerScore++;
        computerScoreprint.textContent = computerScore;
        return 'You lose!  ' + computerSelection + ' beats ' + playerSelection;
    }

}
