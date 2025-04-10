
const calculate = document.querySelector('#calculate');




calculate.addEventListener('click', function(e){

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(!height || height<0 || isNaN(height)){
        result.innerHTML = 'Please enter a valid number'
        return;
    }
    else if(!weight || weight<0 || isNaN(weight)){
        result.innerHTML = 'Please enter a valid number'
        return;
    }

    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)

        result.innerHTML = `Your BMI is ${bmi}`

        const statement = document.querySelector('#statement');

    if(bmi< 18.6){
        statement.innerHTML = 'Under Weight';
    }
    else if(bmi>=18.6 && bmi<=24.9){
        statement.innerHTML = 'Normal Range'
    }
    else{
        statement.innerHTML = 'Overweight'
    }
        
    }

    


})

