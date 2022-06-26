/* ----- Calculator Project 3.0 -----*/

/* Data */
obj = {
  num1: '',
  num2: '',
  firstEntry: true,
  currentOperator: '',
  result: '',
  equal: false
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
    saveOperator();
  } else{
    switch (obj.firstEntry) {
      case true: {
        saveNum1(event);
      }
        break;
      case false: {
        saveNum2(event);
      }
        break;
    }
  }
});

/* Solve Current Equation */
equal.addEventListener('click', function () {
  if(obj.num2 === ''){
    console.log(obj.result);
    return obj;
  }
  solve();
})

/* Input Handling Functions */
function saveNum1(){
  obj.num1 += event.target.textContent;
  console.log(obj.num1);
};

function saveNum2(){
  obj.num2 += event.target.textContent;
  solve();
  obj.num1 = result;
  console.log(obj);
  obj.firstEntry = true;
  obj.num2 = '';
};

function saveOperator(){
  if(obj.firstEntry === true){
    obj.firstEntry = false;
    switch (event.target){
      case percent:
        {
          obj.currentOperator = 'percent';
          console.log('percent');
        }
        break;
      case clear:
        {
          obj.currentOperator = 'clear';
          console.log('clear');
        }
        break;
      case plusMinus:
        {
          obj.currentOperator = 'plusMinus';
          console.log('plusMinus');
        }
        break;
      case plus:
        {
          obj.currentOperator = 'plus';
          console.log('plus');
        }
        break;
      case minus:
        {
          obj.currentOperator = 'minus';
          console.log('minus');
        }
        break;
      case divide:
        {
          obj.currentOperator = 'divide';
          console.log('divide');
        }
        break;
      case times:
        {
          obj.currentOperator = 'times';
          console.log('times');
        }
        break;
    }
  }
};

function solve(){

  let newNum1 = parseInt(obj.num1);
  let newNum2 = parseInt(obj.num2);
  switch (obj.currentOperator) {
    case 'plusMinus':
      {
        plus_minus(newNum1, newNum2);
        console.log(obj.result);
      }
      break;
    case 'plus':
      {
        addition(newNum1, newNum2);
        console.log(obj.result);
      }
      break;
    case 'minus':
      {
        subtraction(newNum1, newNum2);
        console.log(obj.result);
      }
      break;
    case 'divide':
      {
        division(newNum1, newNum2);
        console.log(obj.result);
      }
      break;
    case 'times':
      {
        multiplication(newNum1, newNum2);
        console.log(obj.result);
      }
      break;
    case 'percent':
      {
        percentage(newNum1, newNum2);
        console.log(obj.result);
      }
      break;
  }
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
