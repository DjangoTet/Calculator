/* ----- Calculator Project 3.0 -----*/

/* Data */
obj = {
  num1: '',
  num2: '',
  firstEntry: 'true',
  currentOperator: '',
  result: ''
}

/* User Interface */
let onScreen = document.getElementById('display');
let buttons = document.getElementById('buttons');
let onScreenOperator = document.getElementById('operator');

/* Math Operators */
let plusMinus = document.getElementById('plusMinus');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');
let equal = document.getElementById('equal');
let percent = document.getElementById('percent');
let clear = document.getElementById('clear');
let result;

/* Switch to Determine Where Info is Stored */
buttons.addEventListener('click',function(event){
  if (event.target.className === 'operator'){
    console.log('1');
    saveOperator();
  } else if(event.target.className === 'equal'){
    return obj;
  } else{
    console.log('2');
    switch (obj.firstEntry) {
      case 'true': {
        console.log('3');
        saveNum1(event);
        onScreen.textContent = obj.num1;
      }
        break;
      case 'false': {
        console.log('4');
        saveNum2(event);
      }
        break;
    }
  }
});

/* Solve Current Equation */
equal.addEventListener('click', function () {
  if(obj.num2 === ''){
    console.log('5');
    onScreen.textContent = obj.num1;
    reset();
    return obj;
  }
  console.log('6');
  solve();
  onScreen.textContent = obj.num1;
  reset();
});

/* Reset Device */
clear.addEventListener('click', function(){
  if (obj.num2 === '') {
    onScreen.textContent = '';
    reset();
    return obj;
  }
  solve();
  onScreen.textContent = '';
  reset();
});

/* Input Handling Functions */
function saveNum1(){
  console.log('7');
  obj.num1 += event.target.textContent;
};
function saveNum2(){
  console.log('8');
  obj.num2 += event.target.textContent;
  solve();
  obj.num1 = result;
  obj.firstEntry = 'true';
  onScreen.textContent = obj.num2;
  obj.num2 = '';
};
function saveOperator(){
  if(obj.firstEntry === 'true'){
    console.log('9');
    obj.firstEntry = 'false';
    switch (event.target){
      case percent:
        {
          obj.currentOperator = 'percent';
        }
        break;
      case plusMinus:
        {
          obj.currentOperator = 'plusMinus';
        }
        break;
      case plus:
        {
          obj.currentOperator = 'plus';
        }
        break;
      case minus:
        {
          obj.currentOperator = 'minus';
        }
        break;
      case divide:
        {
          obj.currentOperator = 'divide';
        }
        break;
      case times:
        {
          obj.currentOperator = 'times';
        }
        break;
    }
  }
};
function solve(){
  let newNum1 = parseInt(obj.num1);
  let newNum2 = parseInt(obj.num2);
  console.log('10');
  switch (obj.currentOperator) {
    case 'plusMinus':
      {
        plus_minus(newNum1, newNum2);
      }
      break;
    case 'plus':
      {
        addition(newNum1, newNum2);
      }
      break;
    case 'minus':
      {
        subtraction(newNum1, newNum2);
      }
      break;
    case 'divide':
      {
        division(newNum1, newNum2);
      }
      break;
    case 'times':
      {
        multiplication(newNum1, newNum2);
      }
      break;
    case 'percent':
      {
        percentage(newNum1, newNum2);
      }
      break;
  }
}
function reset() {
  console.log('11');
  obj.num1 = '';
  obj.num2 = '';
  obj.result = '';
  result = '';
  obj.firstEntry = 'true';
  obj.currentOperator = '';
  return obj;
}

/* Math Functions */
function plus_minus(num) {
  let result = num * (-1);
  obj.result = result;
  return result
}
function addition(x, y) {
  result = x + y;
  obj.result = result;
  return result;
}
function subtraction(x, y) {
  result = x - y;
  obj.result = result;
  return result;
}
function division(x, y) {
  result = x / y;
  obj.result = result;
  return result;
}
function multiplication(x, y) {
  result = x * y;
  obj.result = result;
  return result;
}
function percentage(x, y) {
  result = x + y;
  obj.result = result;
  return result;
}
