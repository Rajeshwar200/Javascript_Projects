const buttonEl = document.querySelectorAll('button');

const inputEl = document.getElementById('result');


for(let i =0 ; i<buttonEl.length; i++){

    buttonEl[i].addEventListener('click', ()=>{
        let buttonvalue = buttonEl[i].textContent


        if(buttonvalue === 'C'){
            clearResult();
        }

        else if(buttonvalue === '='){
            finalresult();
        }
        else{
            takevalue(buttonvalue)
        }
    })


}



function clearResult(){
    inputEl.value = "";
}

function finalresult(){

    inputEl.value = eval(inputEl.value)

}
function takevalue(buttonvalue){

    inputEl.value = inputEl.value + buttonvalue 


}