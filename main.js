let display = document.getElementById('display');
let result = display.textContent;
let buttons = document.getElementById('buttons');

/* Check that what you are clicking is a button and add it to display if less than 9 characters */
buttons.addEventListener('click', function(event){
  if(event.target.className === 'row'){
    return;
  }
  if(result.split('').length >= 8){
    display.className = 'nine';
    result += event.target.textContent;
    display.textContent = result;
  }
  if (result.split('').length >= 10) {
    console.log('over 10');
  }
  else{
    result += event.target.textContent;
    display.textContent = result;
  }
})
