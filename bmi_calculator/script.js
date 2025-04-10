const form = document.querySelector('form');


form.addEventListener('submit', function(e){

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(!height || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid number this height is ${height}`
    }
    else if(!weight || weight <0 || isNaN(weight)){
         results.innerHTML = `Please enter a valid number this weight is ${weight}`
    }

    else{
        const bmi =  (weight / ((height*height)/10000)).toFixed(2);  
        results.innerHTML = bmi;

        const endpara = document.querySelector('#endpara')

        if(bmi< 18.6){
            endpara.innerHTML = 'Under Weight';
        }
        else if(bmi>=18.6 && bmi<=24.9){
            endpara.innerHTML = 'Normal Range'
        }
        else{
            endpara.innerHTML = 'Overweight'
        }
    }



})
