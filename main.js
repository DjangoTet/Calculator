let display = document.getElementById('display');
let num = display.textContent;
let num2;
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
    console.log(num);
    num = '';
    display.textContent = null;
    return false;
  }


/* Finding current operator */
  if (event.target === plusMinus){
    currentOperator = 'plusMinus';
    console.log(currentOperator);
    return false;
  }
  else if (event.target === plus) {
    currentOperator = 'plus';
    console.log(currentOperator);
    return false;
  }
  else if (event.target === minus) {
    currentOperator = 'minus';
    console.log(currentOperator);
    return false;
  }
  else if (event.target === divide) {
    currentOperator = 'divide';
    console.log(currentOperator);
    return false;
  }
  else if (event.target === times) {
    currentOperator = 'times';
    console.log(currentOperator);
    return false;
  }
  else if (event.target === equal) {
    currentOperator = 'equal';
    console.log(currentOperator);
    return false;
  }
  else if (event.target === percent) {
    currentOperator = 'percent';
    console.log(currentOperator);
    return false;
  }

  /*checking for length and then applying the current num" */
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
