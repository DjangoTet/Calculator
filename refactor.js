/* Data */
obj = {
  num1:'',
  num2:'',
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

let firstNum = '';
let secondNum = '';
let result;

buttons.addEventListener('click', function (event) {
  if (event.target.id === 'clear') {
    clear();
  }else if (event.target === equal) {
    if (obj.firstEntry === 'true') {
      return obj;
    } else if (obj.firstEntry === 'false') {
      resolve();
    }
    return obj;
  }
  else if (event.target === plusMinus) {
    onScreenOperator.textContent = decodeEntities('&plusmn;');
    obj.currentOperator = 'plusMinus';
    catchUp();
    obj.firstEntry = 'false';
    return obj
  } else if (event.target === plus) {
    onScreenOperator.textContent = decodeEntities('&plus;');
    obj.currentOperator = 'add';
    catchUp();
    obj.firstEntry = 'false';
    return obj
  } else if (event.target === minus) {
    onScreenOperator.textContent = decodeEntities('&minus;');
    obj.currentOperator = 'subtract';
    catchUp();
    obj.firstEntry = 'false';
    return obj;
  } else if (event.target === divide) {
    onScreenOperator.textContent = decodeEntities('&divide;');
    obj.currentOperator = 'divide';
    catchUp();
    obj.firstEntry = 'false';
    return obj;
  } else if (event.target === times) {
    onScreenOperator.textContent = decodeEntities('&times;');
    obj.currentOperator = 'multiply';
    catchUp();
    obj.firstEntry = 'false';
    return obj;
  } else if (event.target === percent) {
    onScreenOperator.textContent = decodeEntities('&percnt;');
    obj.currentOperator = 'percent';
    catchUp();
    obj.firstEntry = 'false';
    return obj
  }

  if (obj.firstEntry === 'true') {
    if (event.target.className === 'txt' && firstNum.split('').length < 10) {
      firstNum += event.target.textContent;
      if (firstNum.split('').length >= 8) {
        display.className = 'nine';
      }
      let strToNum = parseInt(firstNum);

      if(obj.num1 === ''){
      obj.num1 = strToNum;
      }else if (obj.num1 !== ''){
        obj.num1 = obj.num1 + strToNum;
      }
      onScreen.textContent = firstNum;
      return obj;
    }
  } else if (obj.firstEntry === 'false') {
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

/* Utility Functions */
var decodeEntities = (function () {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities(str) {
    if (str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();

function clear(){
  obj.num1 = '';
  obj.num2 = '';
  obj.firstEntry = 'true';
  obj.currentOperator = '';
  obj.result;
  firstNum = '';
  secondNum = '';
  onScreen.textContent = '';
  onScreenOperator.textContent = '';
  return obj;
}

function resolve(){
  switch (obj.currentOperator) {
    case "plusMinus":
      {
        plus_minus(obj.num1, obj.num2);
      }
      break;
    case "add":
      {
        addition(obj.num1, obj.num2);
      }
      break;
    case "subtract":
      {
        subtraction(obj.num1, obj.num2);
      }
      break;
    case "multiply":
      {
        multiplication(obj.num1, obj.num2);
      }
      break;
    case "divide":
      {
        division(obj.num1, obj.num2);
      }
      break;
    case "percent":
      {
        percentage(obj.num1, obj.num2);
      }
      break;
  }
  onScreen.textContent = obj.result;
  onScreenOperator.textContent = '';
}

function catchUp(){
  if (obj.num1 !== '' && obj.num2 !== '') {
    resolve()
    obj.firstEntry = 'true';
    obj.num2 = '';
    obj.num1 = obj.result;
    return obj;
  }
}
