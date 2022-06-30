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
  if (obj.num1.length >= 7) {
    onScreen.className = 'nine';
  }
  if (obj.num1.length >= 10){
    return obj;
  }
  if (event.target.className === 'operator'){
    saveOperator();
  } else if(event.target.className === 'equal'){
    return obj;
  } else if (event.target.className === 'row'){
    return obj;
  } else{
    switch (obj.firstEntry) {
      case 'true': {
        saveNum1(event);
        onScreen.textContent = obj.num1;
      }
        break;
      case 'false': {
        saveNum2(event);
      }
        break;
    }
  }
});
/* Solve Current Equation */
equal.addEventListener('click', function () {
  if(obj.num2 === ''){
    onScreen.textContent = obj.num1;
    return obj;
  }
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
  obj.num1 += event.target.textContent;
};
function saveNum2(){
  obj.num2 += event.target.textContent;
  solve();
  obj.num1 = result;
  obj.firstEntry = 'true';
  onScreen.textContent = obj.num2;
  obj.num2 = '';
};
function saveOperator(){
  if(obj.firstEntry === 'true'){
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
  console.log('x', x);
  console.log('y', y);
  console.log('result', result);
  return result
}
function addition(x, y) {
  result = x + y;
  obj.result = result;
  console.log('x', x);
  console.log('y', y);
  console.log('result', result);
  return result;
}
function subtraction(x, y) {
  result = x - y;
  obj.result = result;
  console.log('x', x);
  console.log('y', y);
  console.log('result', result);
  return result;
}
function division(x, y) {
  result = x / y;
  obj.result = result;
  console.log('x', x);
  console.log('y', y);
  console.log('result', result);
  return result;
}
function multiplication(x, y) {
  result = x * y;
  obj.result = result;
  console.log('x', x);
  console.log('y', y);
  console.log('result', result);
  return result;
}
function percentage(x, y) {
  result = x + y;
  obj.result = result;
  console.log('x', x);
  console.log('y', y);
  console.log('result', result);
  return result;
}
