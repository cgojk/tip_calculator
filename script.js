"use strict";




const billInput = document.getElementById('bill');
const tipOptions = document.querySelectorAll('.calculator__option');
const numberPeopleInput = document.getElementById('people');
const calculatorResultReset = document.getElementById('reset');
const calculatorResult = document.querySelector('.calculator__result');
const calculatorResultTip = document.querySelector('.calculator__result-tip');
const calculatorResultValue = document.querySelector('.calculator__result-value');
const calculatorError = document.querySelector('.calculator__error');
const peopleError = document.getElementById('people-error');
const calculatorOptionInput= document.querySelector('.calculator__option-input');
const clearAll = document.getElementById('clear-all');




clearAll.addEventListener('click', () => {
  billInput.value = '';
  numberPeopleInput.value = '';
  calculatorOptionInput.value = '';
  billInput.classList.remove('error');
  calculatorError.classList.remove("color:red", "font: var(--font-6)");
  numberPeopleInput.classList.remove('error');
  peopleError.classList.remove("color:red", "font: var(--font-6)");
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
    return optionsPercentage;
  });
}); 

calculatorOptionInput.addEventListener('input', (e) => {
  const percentage = parseFloat(calculatorOptionInput.value.trim());
  console.log(percentage);
  optionsPercentage = percentage;
  return optionsPercentage;
});

let billAmountValue = 0;

 billInput.addEventListener('input', (e) => {
  billAmountValue = parseFloat(billInput.value.trim());
  console.log(billAmountValue);
  return billAmountValue;
});



let numberOfPeople = 0;


numberPeopleInput.addEventListener('input', (e) => {
  numberOfPeople = parseInt(numberPeopleInput.value.trim());
  console.log(numberOfPeople);
  return numberOfPeople;
});


const handleCalculate = (e) => {
  e.preventDefault();
  


// trim values



const billAmountValue = parseFloat(billInput.value.trim());
console.log(billAmountValue);

const numberOfPeople = parseInt(numberPeopleInput.value.trim());
console.log(numberOfPeople);

const OptionsPercentage = parseFloat(optionsPercentage);
console.log(OptionsPercentage);




// validate fields
if (billAmountValue <= 0 || isNaN(billAmountValue)) {

  calculatorError.textContent = 'Please enter a valid bill amount';
  //  billInput.addclassList.add('error');
  calculatorError.style.color = 'red';
  calculatorError.style.fontSize = '14px';
  billInput.classList.add('error');

  console.log(billAmountValue);
  (!isValid );
  console.log(isValid);
}
 
if (numberOfPeople <= 0 || isNaN(numberOfPeople)) {
  peopleError.textContent = 'Please enter a valid number of people';
  peopleError.style.color = 'red';
  peopleError.style.fontSize = '14px';
  console.log(numberOfPeople);
(!isValid);
  console.log(isValid);

}else if (isValid) {
    
    calculation();
  };

     
// function AddInputListeners() {
//   billInput.addEventListener('input', (e) => {
//     calculatorError.classList.remove("color:red", "font: var(--font-6)");
//      billInput.classList.remove('error');
//   });

//   numberPeopleInput.addEventListener('input', (e) => {
//     peopleError.classList.remove("color:red", "font: var(--font-6)");
//      numberPeopleInput.classList.remove('error');
//   });

  
//   } 

  function calculation() {
  const resultTipAmoung = (billAmountValue * OptionsPercentage) / 100;
  const resultTotal = billAmountValue + resultTipAmoung;
  console.log(resultTipAmoung, resultTotal);
   return {resultTipAmoung,
     resultTotal

    
} 





  
    
  }
  const result = calculation();
  
  function displayResults(resultTipAmoung, resultTotal) {
   
    calculatorResultTip.textContent = `$${resultTipAmoung.toFixed(2)}`;
    calculatorResultValue.textContent = `$${resultTotal.toFixed(2)}`;
   
  }

   displayResults(result.resultTipAmoung, result.resultTotal);
  //  calculatorResultReset.disabled = true;
   

};

// const Reset = document.getElementById('reset');
calculatorResultReset.addEventListener('click', handleCalculate)

// AddInputListeners();
     
// function AddInputListeners() {
//   billInput.addEventListener('input', (e) => {
//     calculatorError.classList.remove("color:red", "font: var(--font-6)");
//      billInput.classList.remove('error');
//   });

//   numberPeopleInput.addEventListener('input', (e) => {
//     peopleError.classList.remove("color:red", "font: var(--font-6)");
//      numberPeopleInput.classList.remove('error');
//   });

  
//   }

// funciton to clear the form 





  




// const showError = (message) => {
//   alert(message);
// };


















// class App{
//   constructor(){
//     this.billInput = document.getElementById('bill');
//     this.tipOptions = document.querySelectorAll('.calculator__option');
//     this.numberPeopleInput = document.getElementById('people');
//     // this.customTipInput = document.getElementById('calculator__option-input');
//     this.calculatorResultReset = document.querySelector('.calculator__reset');
//     this.tipAmountResult = document.querySelector('.calculator__tip-amount');

//     this.addEventListeners();
      

//   }



//   addEventListeners(){

//     // let billAmount = 0;
//     // let numberOfPeople = 0;
//     // let percentage = 0;

 
  
//        e.preventDefault();
//        let isValid =true;

//       //  trim values

//       const billAmount = parseFloat(this.billInput.value.trim());
//       const numberOfPeople = parseInt(this.numberPeopleInput.value.trim());
//       const percentage = parseFloat(this.customTipInput.value.trim());
      
      

//       let isValid = true;
   
//     // validate fields
//     if (billAmount <= 0) {
//       alert('Please enter a valid bill amount');
//       isValid = false;
//     }
//     if (numberOfPeople < 0 ) {
//       alert('Please enter a valid number of people');
//       isValid = false;
//     }

//     if (isNaN(percentage)) {
//       alert('Please enter a valid tip percentage');
//       isValid = false;
//     }
//      if (isValid){
//       const resultTipAmoung = (billAmount * percentage) / 100;
//       const resultTotal = billAmount + resultTipAmoung;
//       console.log(resultTipAmoung, resultTotal);
//        return resultTipAmoung, resultTotal;
//      }
//     }

//       ) ;

//       // automocally calculate tip when user clicks on tip percentage buttons

//       this.billInput.addEventListener('input', (e) => {
//         const billAmount = parseFloat(this.billInput.value.trim());
//         console.log(billAmount);
//       });

//       this.numberPeopleInput.addEventListener('input', (e) => {
//         const numberOfPeople = parseInt(this.numberPeopleInput.value.trim());
//         console.log(numberOfPeople);
//       });

//       this.tipOptions.forEach(button => {
//         button.addEventListener('click', (e) => {
//           const percentage = parseFloat(e.target.getAttribute('data-tip'));
//           const billAmount = parseFloat(this.billInput.value.trim());
//           const numberOfPeople = parseInt(this.numberPeopleInput.value.trim());

    
//         }   )})
   
   

// }
// }

// new App();








// // // getting the element form the DOM
// // const billInput = document.getElementById('bill');
// // const tipOptions = document.querySelectorAll('.calculator__option');
// // // const tipOptions = document.querySelectorAll('.calculator__option');
// // const numberPeopleInput = document.getElementById('people');
// // const customTipInput = document.getElementById('calculator__option-input');
// // const calculatorResultReset = document.querySelector('.calculator__reset');
// // const tipAmountResult = document.querySelector('.calculator__tip-amount');

// // let billAmount = 0;
// // let numberOfPeople = 0;
// // let percentage = 0;
// // // adding event listeners to the elements

// // // function calculateTip() {
// // //   const billAmount = parseFloat(billInput.value);
// // //   const numberOfPeople = parseInt(numberPeopleInput.value);
// // //  console.log(billAmount, numberOfPeople);
 
 

// // // }


// // // / Add click listeners to all buttons
// // tipOptions.forEach(button => {
// //   button.addEventListener('click', function(e) {
// //     // 1. Control: Which button was clicked?
// //     const percentage = parseFloat(e.target.getAttribute('data-tip'));
// //     // 2. Action: Calculate the tip based on the percentage and bill amount
   
// //        console.log(percentage);
// //        return percentage;
// //   })


// // })
// // billInput.addEventListener('input', function() {
// //  const billAmount = parseFloat(billInput.value);
// //  console.log(billAmount);
// // });

// // numberPeopleInput.addEventListener('input', function() {
// //   const numberOfPeople = parseInt(numberPeopleInput.value);
// //   console.log(numberOfPeople);
// // });


// // //  funciton calculating the tip amount and total per person  
// // function calculateTip(percentage, billAmount, numberOfPeople) {
 
  
  
// // if (billInput.value && numberPeopleInput.value) {
// // //  const resultTipAmoung = (billAmount * percentage) / 100;
// //  const resultTotal = billAmount / numberOfPeople;
// //  console.log( resultTotal);

// // }if (billInput.value && percentage) {
// //   const resultTipAmoung = (billAmount * percentage) / 100;
// //   const resultTotal = billAmount + resultTipAmoung;
// //   console.log(resultTipAmoung, resultTotal);
// //   return resultTipAmoung, resultTotal;
// // }

// // calculatorResultReset.addEventListener('click', function() {
// //   // calculateTip();
// //   const total = parseFloat(totalResult.value );
// //   const tipAmount = parseFloat(tipAmountResult.value);
// //   console.log(total);

// // })
// // }