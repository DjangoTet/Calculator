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

  /* Finding current operator and applying the correlated function */
  /*
 if (event.target === plusMinus){
     currentNum = 'y';
   }
 */

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
})

  /* Checking if target is actually a number or just a random click */

  if(event.target.id === 'clear'){
    num = '';
    display.textContent = null;
  }

  /*checking that the number length visually fits the screen before displaying */

  if (num.split('').length >= 8) {
    if (numbers.second === true) {
      display.textContent = '';
      console.log(numbers)
    }
    display.className = 'nine';
    num += event.target.textContent;
    if(numbers.second === false){
      numbers.x = num;
      console.log(numbers)
    }
  }
  if (num.split('').length >= 10) {
    return false;
  }
  else {
    num += event.target.textContent;
    if (numbers.second === true) {
      display.textContent = null;
      num = '';
      numbers.y = num;
      console.log(numbers)
    }
    display.textContent = num;
    if (numbers.second === false) {
      numbers.x = num;
      console.log(numbers)
    }
  }


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

  /* Result
  else if (event.target === equal) {
  }
*/
