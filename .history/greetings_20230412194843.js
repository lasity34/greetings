const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");

let greetIntance = greetingFactory();
let sumCount = 0;

let namesGreeted = {};

function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );
  const languageItem = checkedRadioBtnElement.value || false
  if (checkedRadioBtnElement && greetingVal) {
    

    greetIntance.setName(greetingVal);
    greetIntance.setLanguage(languageItem);
    greetIntance.callNameCount();
    greetingDisplay.innerHTML = greetIntance.getLanguage();
    let numGreetings = greetIntance.getNameCount();
    sumCount = numGreetings;
    numCountDisplay.innerHTML = numGreetings;
   

  }

   greetIntance.setName(greetingVal);
    greetIntance.setLanguage(languageItem);
   greetIntance.callAlert()

  
  

  localStorage.setItem("numItem", JSON.stringify(sumCount));

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

  const radioBtns = document.querySelector("input[name='language']:checked");
  if (radioBtns) {
    radioBtns.checked = ''
  }
}

greetingBtn.addEventListener("click", greeting);
clearBtn.addEventListener("click", clear);
