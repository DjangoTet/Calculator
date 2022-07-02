// Data
obj = {
  num1: '',
  num2: '',
  firstEntry: 'true',
  currentOperator: '',
  result: ''
}

// User interface, screen and buttons
let onScreen = document.getElementById('display');
let buttons = document.getElementById('buttons');
let onScreenOperator = document.getElementById('operator');

// Math Operator Buttons
let plusMinus = document.getElementById('plusMinus');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');
let equal = document.getElementById('equal');
let percent = document.getElementById('percent');
let clear = document.getElementById('clear');

buttons.addEventListener('click',function(event){
  // Here screen display space is checked
  if (obj.num1.length >= 7) {
    onScreen.className = 'nine';
  }
  if (obj.num1.length >= 10){
    return obj;
  }
  //Simple math operators are handled here
  if (event.target.className === 'operator'){
    saveOperator();
    return obj;
  }
  if(event.target.className === 'equal'){
    solve(obj.num1, obj.num2);
    obj.firstEntry = 'true';
    return obj;
  }
  // Only actual number clicks are handled, not the parent containers
  if (event.target.className !== 'row' && event.target.className !== 'buttons'){
    switch (obj.firstEntry) {
      case 'true': {
        saveNum1();
      }
        break;
      case 'false': {
        saveNum2();
      }
        break;
    }
  }
});

// More complicated math operators handled here
clear.addEventListener('click', function(){
  reset();
  return obj;
});
plusMinus.addEventListener('click', function () {
  if(obj.num1 === ''){
    return obj;
  }
  if(obj.firstEntry === 'true'){
    console.log('one');
    let num = parseInt(obj.num1);
    num = num * -1;
    obj.num1 = num;
    onScreen.textContent = obj.num1;
  }
  if(obj.firstEntry === 'false'){
    console.log('hey');
    let num = parseInt(obj.num2);
    num = num * -1;
    obj.num2 = num;
    console.log(obj.num2);
    onScreen.textContent = obj.num2;
  }
});
percent.addEventListener('click', function () {
  if (obj.num1 === '') {
    return obj;
  }
  if (obj.firstEntry === 'true') {
    let num = parseInt(obj.num1);
    num = num / 100;
    obj.num1 = num;
    console.log('percent event', obj.num1);
    onScreen.textContent = obj.num1;
  }
  if (obj.firstEntry === 'false') {
    let num = parseInt(obj.num2);
    num = num / 100;
    obj.num2 = num;
    console.log('percent event', obj.num2);
    onScreen.textContent = obj.num2;
  }
  return obj;
});

// Input handling functions
function saveNum1(){
  if(event.target !== plusMinus){
  obj.num1 += event.target.textContent;
  onScreen.textContent = obj.num1;
  return obj;
  }
};
function saveNum2(){
  if (event.target !== plusMinus) {
  obj.num2 += event.target.textContent;
  onScreen.textContent = obj.num2;
  return obj;
  }
};
function saveOperator(){
    if(obj.firstEntry === 'false'){
      solve(obj.num1, obj.num2);
    }
    obj.firstEntry = 'false';
    switch (event.target){
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
};
function solve(num1, num2){
  let newNum1 = parseFloat(obj.num1);
  let newNum2 = parseFloat(obj.num2);
  switch (obj.currentOperator) {
    case 'plusMinus':
      {
        plus_minus(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        onScreen.textContent = obj.num1;
      }
      break;
    case 'plus':
      {
        console.log(typeof newNum1, newNum1);
        console.log(typeof newNum1, newNum2);
        addition(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        onScreen.textContent = obj.num1;
      }
      break;
    case 'minus':
      {
        subtraction(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        onScreen.textContent = obj.num1;
      }
      break;
    case 'divide':
      {
        division(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        onScreen.textContent = obj.num1;
      }
      break;
    case 'times':
      {
        multiplication(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        onScreen.textContent = obj.num1;
      }
      break;
  }
}
function reset() {
  obj.num1 = '';
  obj.num2 = '';
  obj.result = '';
  result = '';
  obj.firstEntry = 'true';
  obj.currentOperator = '';
  onScreen.textContent = '';
  return obj;
}

// Math functions
function addition(x, y) {
  result = x + y;
  obj.result = String(result);
  return result;
}
function subtraction(x, y) {
  result = x - y;
  obj.result = String(result);
  return result;
}
function division(x, y) {
  result = x / y;
  obj.result = String(result);
  return result;
}
function multiplication(x, y) {
  result = x * y;
  obj.result = String(result);
  return result;
}
function percentage(x, y) {
  result = x + y;
  obj.result = String(result);
  return result;
}
