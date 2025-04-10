const billAmount = document.querySelector('#billAmount');
const tipPercentage = document.querySelector('#tipPercentage');

const calculateBtn = document.querySelector('#calculate');
const result = document.getElementById('total');


calculateBtn.addEventListener('click', ()=>{

    const bill = parseFloat(billAmount.value);
    const tip = parseFloat(tipPercentage.value);


    if(isNaN(bill) || isNaN(tip)){
        result.innerHTML = `Please enter a valid number`;
        return;
    }


    const tipAmount = (bill*tip)/100;
    const totalAmount = tipAmount + bill;


    result.innerHTML = ` $ ${totalAmount.toFixed(2)}`


})


