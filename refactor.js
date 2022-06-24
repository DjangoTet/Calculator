/* Data */
obj = {
  num1:'',
  num2:'',
  firstEntry: 'true'
}

/* User Interface */
let onScreen = document.getElementById('display');
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
let firstNum = '';
let secondNum = '';
let result;

buttons.addEventListener('click', function (event) {
  if (event.target === plus) {
    obj.firstEntry = 'false';
    return obj
  }
  else if (event.target === minus) {
    obj.firstEntry = 'false';
    return obj;
  }
  else if (event.target === divide) {
    obj.firstEntry = 'false';
    return obj;
  }
  else if (event.target === times) {
    obj.firstEntry = 'false';
    return obj;
  }
  else if (event.target === percent) {
    obj.firstEntry = 'false';
    return obj;
  }

  if (obj.firstEntry === 'true') {
    console.log(obj);
    if (event.target.className === 'txt' && firstNum.split('').length < 10) {
      firstNum += event.target.textContent;
      if (firstNum.split('').length >= 8) {
        display.className = 'nine';
      }
      let strToNum = parseInt(firstNum);
      obj.num1 = strToNum;
      onScreen.textContent = firstNum;
      return obj;
    }
  } else if (obj.firstEntry === 'false') {
    console.log(obj);
    if (event.target.className === 'txt' && secondNum.split('').length < 10) {
      secondNum += event.target.textContent;
      if (secondNum.split('').length >= 8) {
        display.className = 'nine';
      }
      let strToNum2 = parseInt(secondNum);
      obj.num2 = strToNum2;
      onScreen.textContent = secondNum;
      return obj;
    }
  }
});

/* Math Functions */
function plus_minus(num) {
  let result = num * (-1);
  return result
}
function addition(x, y) {
  result = x + y;
  console.log(result);
  return result;
}
function subtraction(x, y) {
  result = x - y;
  return result;
}
function division(x, y) {
  result = x / y;
  return result;
}
function multiplication(x, y) {
  result = x * y;
  return result;
}
function percentage(x, y) {
  result = x + y;
  return result;
}
