
let onScreen = document.getElementById('display');
let buttons = document.getElementById('buttons');
let currentNum = obj.num1;


/* Math Operators */
let plusMinus = document.getElementById('plusMinus');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');
let equal = document.getElementById('equal');
let percent = document.getElementById('percent');
let currentOperator;

buttons.addEventListener('click', function(event){
  if (event.target.className === 'txt' && currentNum.split('').length < 10){
    currentNum += event.target.textContent;
  if (currentNum.split('').length >= 8) {
    display.className = 'nine';
  }
    onScreen.textContent = currentNum;
    return currentNum;
}
});
