let display = document.getElementById('display');
let num = display.textContent;
let buttons = document.getElementById('buttons');

/* Math Operators */
let plusMinus = document.getElementById('plusMinus');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');
let equal = document.getElementById('equal');
let percent = document.getElementById('percent');
let currentOperator;


/*Checking that the user is actually clicking a button. If user clicks the clear button, all content is erased. */

buttons.addEventListener('click', function(event){

  /* - - - - - Handle Operators - - - - - - */

  if (event.target === plus) {
    numbers.second = true;
  }
  else if (event.target === minus) {
    numbers.second = true;
  }
  else if (event.target === divide) {
    numbers.second = true;
  }
  else if (event.target === times) {
    numbers.second = true;
  }
  else if (event.target === percent) {
    numbers.second = true;
  }


/* - - - - - Handle Numbers - - - - - - */

  /* Check that is number */
  let valid = true;
  function validateEvent(event){
    if (event.id === 'clear') {
      num = '';
      display.textContent = null;
      valid = false;
      return false;
    }
    if (event.className === 'row'){
      valid = false;
      return false;
    }
    else{
      valid = true;
    }
  }
  validateEvent(event.target);

  /*Check that number fits screen */
  function numLength(number){
    if (valid === false){
      return false;
    }
    if (number.split('').length >= 8) {
      display.className = 'nine';
    }
    if (number.split('').length >= 10) {
      return false;
    }
    else {
      num += event.target.textContent;
      display.textContent = num;
    }
    return num;
  }
  numLength(num);

})


/* Math Functions */
function plus_minus(num) {
  let result = num * (-1);
  return result
}
function addition(x,y){
  let result = x + y;
  return result;
}
function subtraction(x, y) {
  let result = x - y;
  return result;
}
function division(x, y) {
  let result = x / y;
  return result;
}
function multiplication(x, y) {
  let result = x * y;
  return result;
}
function percentage(x, y) {
  let result = x + y;
  return result;
}
