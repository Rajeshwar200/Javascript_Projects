//!------ CHANGE BACKGROUND COLOR USING RGB VALUE




let randomfunction = function(){

    let randomColor1 = parseInt(Math.random()*255);
    let randomColor2 = parseInt(Math.random()*255);
    let randomColor3 = parseInt(Math.random()*255);
    let bgColor = `rgb(${randomColor1},${randomColor2},${randomColor3})`
    document.querySelector('body').style.backgroundColor = bgColor;
}


let colorChange;
 document.querySelector('#start').addEventListener('click', function(){

    colorChange = setInterval(randomfunction, 2000);

})


//!stop Changing random background Colors;

document.querySelector('#end').addEventListener('click', function(){

        clearInterval(colorChange);
})
