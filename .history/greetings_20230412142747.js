const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");
const checkedRadioBtnElement = document.querySelector(
  "input[name='language']:checked"
);
console.log(checkedRadioBtnElement)
let greetIntance = greetingFactory();
let sumCount = 0

let namesGreeted = {};

function greeting() {
  const greetingVal = greetingInput.value;
  
  if (checkedRadioBtnElement && greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
  
    console.log(languageItem)
    greetIntance.setName(greetingVal);
    greetIntance.setLanguage(languageItem);
    greetIntance.callNameCount();
    greetingDisplay.innerHTML = greetIntance.getLanguage();
    let numGreetings = greetIntance.getNameCount()
    sumCount = numGreetings
    numCountDisplay.innerHTML = numGreetings
  
  }

  if (!checkedRadioBtnElement && !greetingVal) {
    alert("please select language and fill in name your name")
  }
 else if (!greetingVal) {
    alert("please fill in your name")
  } else if (!checkedRadioBtnElement) {
    alert("please select language")
  }

  localStorage.setItem("numItem", JSON.stringify(sumCount));

  resetGreeting();
}


if (localStorage.getItem("numItem")) {
  sumCount = Number(localStorage.getItem("numItem"));
}
numCountDisplay.innerHTML = sumCount

function resetGreeting() {
  greetingInput.value = "";
}

function clear() {
  localStorage.clear();
  namesGreeted = {};
  sumCount = 0;
  numCountDisplay.innerHTML = sumCount;
  greetingDisplay.innerHTML = "";
  
  const radioBtns = document.querySelectorAll("input[type='radio']");
  radioBtns.forEach((radioBtn) => {
    radioBtn.checked = false;
  });
}

greetingBtn.addEventListener("click", greeting);
clearBtn.addEventListener("click", clear);
