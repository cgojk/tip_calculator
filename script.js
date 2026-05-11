"use strict";




const billInput = document.getElementById('bill');
const tipOptions = document.querySelectorAll('.calculator__option');
const numberPeopleInput = document.getElementById('people');
const calculatorResultReset = document.getElementById('reset');
const calculatorResult = document.querySelector('.calculator__result');
const calculatorResultTip = document.querySelector('.calculator__result-tip');
const calculatorResultValue = document.querySelector('.calculator__result-value');
const calculatorError = document.querySelector('.calculator__error');
const peopleError = document.querySelector('.calculator__error-people');
const calculatorOptionInput= document.querySelector('.calculator__option-input');
const clearAll = document.getElementById('clear-all');




clearAll.addEventListener('click', () => {
  billInput.value = '';
  numberPeopleInput.value = '';
  calculatorOptionInput.value = '';
  billInput.classList.remove('error');
  calculatorError.textContent = '';
  peopleError.textContent = '';
  numberPeopleInput.classList.remove('error');
  calculatorResultTip.textContent = '$0.00';
  calculatorResultValue.textContent = '$0.00';
  calculatorOptionInput.classList.remove('error');
  tipOptions.forEach(button => button.classList.remove('active'));
  isValid = true;
});



 let optionsPercentage= 0;
let isValid = true;

tipOptions.forEach(button => {
  button.addEventListener('click', (e) => {
    const percentage = parseFloat(e.target.getAttribute('data-tip'));
    console.log(percentage);
    optionsPercentage = percentage;
   
  });
}); 

calculatorOptionInput.addEventListener('input', (e) => {
  const percentage = parseFloat(calculatorOptionInput.value.trim());
  
  console.log(percentage);
  optionsPercentage = percentage;
 
});

 let billAmountValue = 0;

 billInput.addEventListener('input', (e) => {
  
 billAmountValue = parseFloat(billInput.value.trim());
  calculatorError.textContent = '';
  billInput.classList.remove('error');

 
  console.log(billAmountValue);
  
});



 let numberOfPeople = 0;


numberPeopleInput.addEventListener('input', (e) => {
  numberOfPeople = parseInt(numberPeopleInput.value.trim()) || 0;
  peopleError.textContent = '';
  numberPeopleInput.classList.remove('error');
  console.log(numberOfPeople);
 
});


const handleCalculate = (e) => {
  e.preventDefault();
  


// trim values



const billAmountValue = parseFloat(billInput.value.trim());
console.log(billAmountValue);

const numberOfPeople = parseInt(numberPeopleInput.value.trim())|| 0;
console.log(numberOfPeople);

const OptionsPercentage = parseFloat(optionsPercentage);
console.log(OptionsPercentage);




// validate fields
if (billAmountValue <= 0 || isNaN(billAmountValue)) {
isValid = false;
  calculatorError.textContent = 'Please enter a valid bill amount';
  calculatorError.style.color = 'red';
 calculatorError.style.fontSize = '14px';
  billInput.classList.add('error');


  
  console.log(isValid);
 
}
 
 if (numberOfPeople <0 ) {
    isValid = false;
   peopleError.textContent = 'Please enter a valid number of people';
  peopleError.style.color = 'red';
  peopleError.style.fontSize = '14px';
  numberPeopleInput.classList.add('error');
  

  
  console.log(isValid);


}else if (billAmountValue > 0 && numberOfPeople >= 0 && optionsPercentage >= 0){ 
  
  isValid = true 
    calculation();
  };

     


  function calculation() {
  const resultTipAmount = (billAmountValue * OptionsPercentage) / 100;

  const resultTotal = 
  numberOfPeople>0
    ? (billAmountValue + resultTipAmount) / numberOfPeople
    : billAmountValue + resultTipAmount;
  
  console.log(resultTipAmount, resultTotal);
   return {resultTipAmount,
    resultTotal
   }
 

  }


  const result = calculation();
  
  function displayResults(resultTipAmount, resultTotal) {
   
    calculatorResultTip.textContent = `$${resultTipAmount.toFixed(2)}`;
    calculatorResultValue.textContent = `$${resultTotal.toFixed(2)}`;
   
  }

   displayResults(result.resultTipAmount, result.resultTotal);
  //  calculatorResultReset.disabled = true;
   
}

  

// const Reset = document.getElementById('reset');
calculatorResultReset.addEventListener('click', handleCalculate)
