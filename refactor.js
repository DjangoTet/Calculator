/* Data */
obj = {
  num1:'',
  num2:'',
  firstEntry: 'true',
  currentOperator: ''
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
let firstNum = '';
let secondNum = '';
let result;

buttons.addEventListener('click', function (event) {
  if (event.target.id === 'clear') {
    console.log(obj);
    obj.num1 = '';
    obj.num2 = '';
    obj.firstEntry = 'true';
    obj.currentOperator = '';
    firstNum = '';
    secondNum = '';
    onScreen.textContent = '';
    onScreenOperator.textContent = '';
    return obj;
  }
  if (event.target === plusMinus) {
    onScreenOperator.textContent = decodeEntities('&plusmn;');
    obj.firstEntry = 'false';
    obj.currentOperator = 'plusMinus';
    return obj
  }
  if (event.target === plus) {
    onScreenOperator.textContent = decodeEntities('&plus;');
    obj.firstEntry = 'false';
    obj.currentOperator = 'add';
    return obj
  }
  else if (event.target === minus) {
    onScreenOperator.textContent = decodeEntities('&minus;');
    obj.firstEntry = 'false';
    obj.currentOperator = 'subtract';
    return obj;
  }
  else if (event.target === divide) {
    onScreenOperator.textContent = decodeEntities('&divide;');
    obj.firstEntry = 'false';
    obj.currentOperator = 'divide';
    return obj;
  }
  else if (event.target === times) {
    onScreenOperator.textContent = decodeEntities('&times;');
    obj.firstEntry = 'false';
    obj.currentOperator = 'multiply';
    return obj;
  }
  if (event.target === percent) {
    onScreenOperator.textContent = decodeEntities('&percnt;');
    obj.firstEntry = 'false';
    obj.currentOperator = 'percent';
    return obj
  }


  else if (event.target === equal) {
    if (obj.firstEntry === 'true') {
      return obj;
    } else if (obj.firstEntry === 'false'){
      switch (obj.currentOperator){
        case "plusMinus":
        {
            onScreenOperator.textContent = '&plusmn;';
        }
        break;
        case "add":
          {
          }
          break;
        case "subtract":
          {
          }
          break;
        case "multiply":
          {
          }
          break;
        case "divide":
          {
          }
          break;
        case "percent":
          {
          }
          break;
      }
    }
  }


  else if (event.target === percent) {
    obj.firstEntry = 'false';
    obj.currentOperator = 'percent';
    return obj;
  }
  if (obj.firstEntry === 'true') {
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

console.log(obj);
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
