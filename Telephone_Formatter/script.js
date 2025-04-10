const input = document.querySelector('input');

let preValue = '';
let firstThreenum = '';

input.addEventListener('input', (e) => {
    
    const userInputvalue = e.target.value

    if(/\d+$/g.test(userInputvalue)){
        input.value = userInputvalue
    }
    else{
        input.value = userInputvalue.substring(0,userInputvalue.length-1)
    }




    if(userInputvalue.length === 4  && preValue.length<userInputvalue.length){
        firstThreenum = userInputvalue.substring(0,3)

        input.value = `+(${firstThreenum}) - ${userInputvalue[userInputvalue.length-1]}`
    }
    else if(userInputvalue.length === 9  && preValue.length>userInputvalue.length){
        input.value = firstThreenum
    }

  


    preValue = userInputvalue
    console.log(userInputvalue);

})