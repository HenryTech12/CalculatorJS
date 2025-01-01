let end = 9;
let firstInput = "";
let secondInput = "";
let op = "";
let num1 = 0;
let num2 = 0;
let result = 0;
let calc_screen = document.getElementById('screen');



  let NUM_VALUES = document.querySelectorAll('#nums');
  NUM_VALUES.forEach((res) => {
        res.addEventListener('click', () => {
          
          if(op !== "" && firstInput !== "") {
            secondInput += res.innerText;
            console.log("first", firstInput);
            console.log("second ", secondInput);
          }
         else {
            console.log(res.innerText);
            firstInput += res.innerText;
          }
          calc_screen.innerText = firstInput + "" + op + "" + secondInput;
      });
  });
  
  let allowNegative1 = false;
  let allowNegative2 = false;
  let OPERATORS = document.querySelectorAll('#operator');
  OPERATORS.forEach((res) => {
     res.addEventListener('click', () => {
        console.log(res.innerText);
        if(op === "" ){
           op = res.innerText;
           console.log("copied");
           if(firstInput === "") {
             firstInput = "-";
             op = "";
           }
        }
        else {
          if(op !== "" && res.innerText === "-") {
             secondInput = "-";
          }
        }
     });
  });
let other = document.querySelectorAll('#others');
other.forEach((OTHER) => {
  OTHER.addEventListener('click', () => {
      switch(OTHER.innerText) {
        case 'AC':
           reset();
        break;
        
      }
  });
});
function compute() {
let EQUALS_TAG = document.getElementById('equals');
if(EQUALS_TAG.innerText === "=") {
  
    switch(op) {
      case '+':
       num1 = parseFloat(firstInput);
       num2 = parseFloat(secondInput);
       result = num1 + num2;
      break;
      case '*':
        num1 = parseFloat(firstInput);
        num2 = parseFloat(secondInput);
        result = num1 * num2;
        break;
      case '-':
        num1 = parseFloat(firstInput);
        num2 = parseFloat(secondInput);
        result = num1 - num2;
        break; 
      case '%':
        num1 = parseFloat(firstInput);
        num2 = parseFloat(secondInput);
        result = num1 % num2;
        break;
      case '/':
        num1 = parseFloat(firstInput);
        num2 = parseFloat(secondInput);
        result = num1 / num2;
        break;
      default:
        console.log('operation not allowed');
   }
   
   if(op !== "") {
      firstInput = result;
   }
   calc_screen.innerText = firstInput; 
   secondInput = "";
   op = "";
   
  }
}
function reset() {
  firstInput = "";
  secondInput = "";
  result = 0;
  num1 = 0;
  num2 = 0;
  op = "";
  calc_screen.innerText = "0";
}
function addDot() {
  let value = document.getElementById('dot');
  if(op === "" && firstInput !== "") {
     if(!(firstInput.includes('.'))) {
       firstInput += ".";
     }
  }
  if(op !== "" && secondInput !== "") {
     if(!(secondInput.includes('.'))) {
       secondInput += '.';
     }
  }
}

function deleteValues() {
  
  let lenF = firstInput.length;
  let calc_resF = "";
  let calc_resS = "";
  let lenS = secondInput.length;
  
  if(op == "") {
    lenF--;
  }
  if(secondInput === "") {
    op = "";
     for(let i = 0; i < lenF; i++) {
         calc_resF += firstInput.charAt(i);
     }
     firstInput = calc_resF;
  }
  else {
    lenS--;
    calc_resF = firstInput;
    for (let j = 0; j < lenS; j++) {
      calc_resS += secondInput.charAt(j);
    }
    secondInput = calc_resS;
  }
 
  if(firstInput === "")  {
     calc_resF += "0";
   }
   calc_screen.innerText = calc_resF+""+op+""+calc_resS;
   
}

let a = 0;
let t_span = document.getElementById('t');
let mc = document.getElementById('mc');
let txt = document.getElementById('showText');
function enableMode() {
  if(a%2 == 0) {
  document.documentElement.style.setProperty('--BODY-BACKGROUND',"white");
  document.documentElement.style.setProperty('--FONT-COLOR', "black");
  document.documentElement.style.setProperty('--BLACK-BTN-COLOR', "whitesmoke");
  t_span.style.background = 'black';
  t_span.style.transform = 'translateX(-30px)';
  a++;
  txt.innerText = "Light Mode";
  }
  else {
    document.documentElement.style.removeProperty('--BODY-BACKGROUND');
    document.documentElement.style.removeProperty('--FONT-COLOR');
    document.documentElement.style.removeProperty('--BLACK-BTN-COLOR');
    t_span.style.background = 'whitesmoke';
    t_span.style.transform = 'translateX(0px)';
    a++;
    txt.innerText = "Dark Mode"
  }
}