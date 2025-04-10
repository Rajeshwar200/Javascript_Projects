// !---------CHANGE BACKGROUND COLOR USING HEX CODE VALUES----------

const randomColor = function()
{
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i=0 ; i<6; i++){
        color += hex[parseInt(Math.random()*16)];
    }
    return color;

}

let intervalId;
const startChangingColor = function(){

    function changebgColor(){
        document.body.style.backgroundColor = randomColor();

    }

        intervalId =  setInterval(changebgColor, 2000);

}


const stopChangingColor = function(){

    clearInterval(intervalId);

}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#end').addEventListener('click', stopChangingColor);