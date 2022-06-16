let display = document.getElementById('display');
let num = display.textContent;
let buttons = document.getElementById('buttons');

/* Operators */
let plusMinus = document.getElementById('plusMinus');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');
let equal = document.getElementById('equal');
let percent = document.getElementById('percent');
let currentOperator;

/* Check that what you are clicking is a button and add it to display if less than 9 characters */
buttons.addEventListener('click', function(event){
  /* Checking if target is not a number */
  if(event.target.className === 'row'){
    return;
  }
  if(event.target.id === 'clear'){
    num = '';
    display.textContent = null;
    return false;
  }


  let numbers = {
    num1: "",
    num2: ""
  };
  console.log(numbers.num1);

/* Finding current operator */
  if (event.target === plusMinus){
    currentOperator = 'plusMinus';
    display.textContent = null;
    return false;
  }
  else if (event.target === plus) {
    currentOperator = 'plus';
    display.textContent = null;
    return false;
  }
  else if (event.target === minus) {
    currentOperator = 'minus';
    display.textContent = null;
    return false;
  }
  else if (event.target === divide) {
    currentOperator = 'divide';
    display.textContent = null;
    return false;
  }
  else if (event.target === times) {
    currentOperator = 'times';
    display.textContent = null;
    return false;
  }
  else if (event.target === equal) {
    currentOperator = 'equal';
    display.textContent = null;
    return false;
  }
  else if (event.target === percent) {
    currentOperator = 'percent';
    display.textContent = null;
    return false;
  }

  /*checking that the length is appropriate and then displaying the current number" */
  if(num.split('').length >= 8){
    display.className = 'nine';
    num += event.target.textContent;
  }
  if (num.split('').length >= 10) {
    return false;
  }
  else{
    num += event.target.textContent;
    display.textContent = num;
  }
})
