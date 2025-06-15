let currentInput = "";
let firstNumber = "";
let secondNumber = "";
let operator = null;
let history=[];
let index=history.length;
let anotherNumber=1;
let click = 0;


const digits = document.querySelectorAll(".digits-section");
const operations = document.querySelectorAll(".operations");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const backspace = document.getElementById("back-space");
const innerBox = document.querySelector(".inner-box");
const previous = document.getElementById("previous");

// Step 1: Capture digits
digits.forEach((button) => {
  button.addEventListener("click", () => {
    if(button.id !== "clear"){
      console.log(`currentInput: ${currentInput}`);
      currentInput += button.textContent;
      innerBox.innerHTML = `<h2>${currentInput}</h2>`;
      clear.classList.remove("clicked");
      clear.textContent = "C";
      console.log(currentInput);
    }
    anotherNumber=currentInput;
  });
});

// Step 2: Capture operator
operations.forEach((button) => {
  if (button.id !== "equals") {
    button.addEventListener("click", () => {
      operator = button.textContent;
      firstNumber = currentInput;
      currentInput = ""; // Reset for second input
      
      if (anotherNumber!==null){
        firstNumber = anotherNumber;
      }
    });
  }
});

// Step 3: Calculate when = is clicked
equals.addEventListener("click", () => {
  secondNumber = currentInput;
  let result = 0;

  const a = parseFloat(firstNumber);
  const b = parseFloat(secondNumber);

  if (operator === "+") currentInput =result = a + b;
  else if (operator === "-") currentInput=result = a - b;
  else if (operator === "x") currentInput=result = a * b;
  else if (operator === "÷") currentInput=result = a / b;
  else if (operator === "%") currentInput=result = a % b;
  else if (operator === "^") currentInput=result = a ** b;

  innerBox.innerHTML = `<h2>${currentInput}</h2>`;
  history.push(currentInput);
  index=history.length - 1;
  anotherNumber = currentInput;
  currentInput = ""; // Reset after result
});

clear.addEventListener("click", () => {
  if (click >= 1) {
    history = [];
    innerBox.innerHTML = `<h2>${currentInput}</h2>`;
  }
  else{
    currentInput="";
    innerBox.innerHTML = `<h2>${currentInput}</h2>`;
    click+=1;
    clear.classList.add("clicked");
    clear.innerHTML = `<h2>AC</h2>`;
  }
});

backspace.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -3);
  innerBox.innerHTML = `<h2>${currentInput}</h2>`;
});

previous.addEventListener("click", () => {
  if(index!=0){
      innerBox.innerHTML = `<h2>${history[index]}</h2>`;
      index--;
  }
  else{
    innerBox.innerHTML = `<h2>${history[index]}</h2>`;
  }
});

document.addEventListener('keypress', function(event) {
  if(event.key>='0' && event.key<='9'){
    currentInput += event.key;
    innerBox.innerHTML = `<h2>${currentInput}</h2>`;
  }
});