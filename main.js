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

// Math operator buttons on the calculator
let plusMinus = document.getElementById('plusMinus');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');
let equal = document.getElementById('equal');
let percent = document.getElementById('percent');
let clear = document.getElementById('clear');

// Something was clicked on the calculator
buttons.addEventListener('click',function(event){
  // Here remaining screen space is checked
  if (obj.num1.length >= 7) {
    onScreen.className = 'nine';
  }

  //Simple math operators are handled here
  if (event.target.className === 'operator'){
    if(obj.currentOperator){
      saveOperator();
      return obj;
    }
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
    let num = parseInt(obj.num1);
    num = num * -1;
    obj.num1 = num;
    onScreen.textContent = obj.num1;
  }
  if(obj.firstEntry === 'false'){
    let num = parseInt(obj.num2);
    num = num * -1;
    obj.num2 = num;
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
    onScreen.textContent = obj.num1;
  }
  if (obj.firstEntry === 'false') {
    let num = parseInt(obj.num2);
    num = num / 100;
    obj.num2 = num;
    onScreen.textContent = obj.num2;
  }
  return obj;
});

//Saving user input to the data obj
function saveNum1(){
if(event.target !== plusMinus){
  if (obj.num1.length + 1 > 10) {
    return obj;
  }
  obj.num1 += event.target.textContent;
  onScreen.textContent = obj.num1;
  return obj;
  }
};
function saveNum2(){
if (event.target !== plusMinus) {
  if (obj.num2.length + 1 > 10) {
    console.log('hey');
    return obj;
  }
  obj.num2 += event.target.textContent;
  onScreen.textContent = obj.num2;
  return obj;
  }
};

//saveOperator will be the point where input switches from num1 to num2
function saveOperator(){
    if(obj.firstEntry === 'false'){
      if(obj.num1 && obj.num2){
      solve(obj.num1, obj.num2);
      }
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
        if (String(result).length > 10) {
          onScreen.textContent = obj.num1.toExponential(2);
        } else {
          onScreen.textContent = obj.num1;
        }
      }
      break;
    case 'plus':
      {
        addition(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        if (String(result).length > 10) {
          onScreen.textContent = obj.num1.toExponential(2);
        } else {
          onScreen.textContent = obj.num1;
        }
      }
      break;
    case 'minus':
      {
        subtraction(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        if (String(result).length > 10) {
          onScreen.textContent = obj.num1.toExponential(2);
        } else {
          onScreen.textContent = obj.num1;
        }
      }
      break;
    case 'divide':
      {
        division(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        if (String(result).length > 10) {
          onScreen.textContent = obj.num1.toExponential(2);
        } else {
          onScreen.textContent = obj.num1;
        }
      }
      break;
    case 'times':
      {
        multiplication(newNum1, newNum2);
        obj.num1 = result;
        obj.num2 = '';
        if(String(result).length > 10){
          onScreen.textContent = obj.num1.toExponential(2);
        } else{
        onScreen.textContent = obj.num1;
        }
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
  if (result % 1 != 0) {
    result = (Math.floor(100 * result) / 100).toFixed(3);
  }
  obj.result = String(result);
  return result;
}
function subtraction(x, y) {
  result = x - y;
  if (result % 1 != 0) {
    result = (Math.floor(100 * result) / 100).toFixed(3);
  }
  obj.result = String(result);
  return result;
}
function division(x, y) {
  result = x / y;
  if (result % 1 != 0) {
    result = (Math.floor(100 * result) / 100).toFixed(3);
  }
  obj.result = String(result);
  return result;
}
function multiplication(x, y) {
  result = x * y;
  if (result % 1 != 0) {
    result = (Math.floor(100 * result) / 100).toFixed(3);
  }
  obj.result = String(result);
  return result;
}
function percentage(x, y) {
  result = x + y;
  if (result % 1 != 0) {
    result = (Math.floor(100 * result) / 100).toFixed(3);
  }
  obj.result = String(result);
  return result;
}
