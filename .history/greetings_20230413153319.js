const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");
const errorDisplay = document.querySelector(".error")

let greetIntance = greetingFactory();
let sumCount = 0;

let namesGreeted = {};

function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );
 
  if (!checkedRadioBtnElement || !greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
    greetIntance.setName(greetingVal);
    greetIntance.setLanguage(languageItem);
    greetIntance.callAlert()
    errorDisplay.innerHTML = greetIntance.getAlert()
    errorDisplay.classList.add("message")
    localStorage.setItem("numItem", JSON.stringify(sumCount));
  
  }
  else if (checkedRadioBtnElement && greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
    errorDisplay.classList.remove("message")
    greetIntance.setName(greetingVal);
    greetIntance.setLanguage(languageItem);
    greetIntance.callNameCount();
    greetingDisplay.innerHTML = greetIntance.getLanguage();
    let numGreetings = greetIntance.getNameCount();
    sumCount = numGreetings;
    numCountDisplay.innerHTML = numGreetings;
    errorDisplay.innerHTML = ""
  }
  resetGreeting();
 
}

if (localStorage.getItem("numItem")) {
  sumCount = Number(localStorage.getItem("numItem"));
}
numCountDisplay.innerHTML = sumCount;

function resetGreeting() {
  greetingInput.value = "";
}

function clear() {
  localStorage.clear();
  namesGreeted = {};
  sumCount = 0;
  numCountDisplay.innerHTML = sumCount;
  greetingDisplay.innerHTML = "";
  errorDisplay.innerHTML = ""
  resetGreeting();
  errorDisplay.classList.remove("message")
  const radioBtns = document.querySelector("input[name='language']:checked");
  if (radioBtns) {
    radioBtns.checked = "";
  }
}

greetingBtn.addEventListener("click", greeting);
clearBtn.addEventListener("click", clear);
