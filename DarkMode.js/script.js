
const body = document.querySelector('body');
const check = document.querySelector('input[name=checkbox]');

check.addEventListener('change', function(){

    if(this.checked === true){
        body.style.backgroundColor = 'rgb(0, 0, 0)';
        body.style.color = 'rgb(255, 250, 250)'
    }
    else{
       body.style.backgroundColor = 'rgb(255, 250, 250)';
        body.style.color = 'rgb(0, 0, 0)'
    }

})