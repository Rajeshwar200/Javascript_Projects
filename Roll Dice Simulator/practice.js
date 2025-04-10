const diceElem = document.querySelector('.dice');
const buttonElem = document.querySelector('.button');-9

const RollHistory = document.querySelector('#roll-history');

let historyList = [];

buttonElem.addEventListener('click',()=>{

    diceElem.classList.add('roll-animation');
    setTimeout( ()=>{
        diceElem.classList.remove('roll-animation');
        rollDice();

    },1000)

})



function rollDice(){

    let rollResult = Math.floor(Math.random()*6+1);
    let diceFace = getDiceFace(rollResult);
    diceElem.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();

}



function getDiceFace(rollResult){

    switch(rollResult){
        case 1: return '&#9856;'
        break;
        case 2: return '&#9857;'
        break;
        case 3: return '&#9858;'
        break;
        case 4: return '&#9859;'
        break;
        case 5: return '&#9860;'
        break;
        case 6: return '&#9861;'
        break;
    }

}


function updateRollHistory(){

    RollHistory.innerHTML = "";

    for(let i = 0; i<historyList.length;i++){

        let li = document.createElement('li');

        li.innerHTML = `Roll ${i+1}: <span>${getDiceFace(historyList[i])}</span>`

        RollHistory.appendChild(li);


    }


}