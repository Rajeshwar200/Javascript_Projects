const buttonElem = document.querySelector('#btn-roll');

const diceElem = document.querySelector('#dice') 

const RollHistory = document.getElementById('roll-history');

let historyList = [];

function rollDice(){

    const rollResult = Math.floor(Math.random()*6 +1);
    const diceFace = getDiceFace(rollResult);
    diceElem.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();

}

function updateRollHistory(){

    RollHistory.innerHTML= "";

    for(let i=0; i<historyList.length;i++){

        const listEl = document.createElement('li');
        
        listEl.innerHTML = `Roll ${i+1}: <span>
        ${getDiceFace(historyList[i])}</span>`

        RollHistory.appendChild(listEl)

    }


}


function getDiceFace(rollResult){
    switch(rollResult){
        case 1: 
            return "&#9856;"
            break;
        case 2:
            return "&#9857;"
            break;   
        case 3:
            return "&#9858;"
            break;   
        case 4:
            return "&#9859;"
            break;   
        case 5:
            return "&#9860;"
            break;   
        case 6:
            return "&#9861;"
            break;   
     }
}



buttonElem.addEventListener('click', ()=>{
    diceElem.classList.add('roll-animation');
    setTimeout( ()=>{
        diceElem.classList.remove('roll-animation');
        rollDice();

    },1000)

})