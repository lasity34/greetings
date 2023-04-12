const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");
let greetIntance = greetingFactory();
let numGreetings = 0;

let namesGreeted = {};

function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );

  if (checkedRadioBtnElement && greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
    greetIntance.setName(greetingVal);
    greetIntance.setLanguage(languageItem);
    greetingDisplay.innerHTML = greetIntance.getLanguage();
  
    if (namesGreeted[greetingVal] === undefined) {
      numGreetings++;

      namesGreeted[greetingVal] = 0;

      numCountDisplay.innerHTML = numGreetings;
    }
  }

  if (!checkedRadioBtnElement && !greetingVal) {
    alert("please select language and fill in name your name")
  }
 else if (!greetingVal) {
    alert("please fill in your name")
  } else if (!checkedRadioBtnElement) {
    alert("please select language")
  }

  localStorage.setItem("numItem", JSON.stringify(numGreetings));

  resetGreeting();
}


if (localStorage.getItem("numItem")) {
  numGreetings = Number(localStorage.getItem("numItem"));
}
numCountDisplay.innerHTML = numGreetings;

function resetGreeting() {
  greetingInput.value = "";
}

function clear() {
  localStorage.clear();
  namesGreeted = {};
  numGreetings = 0;
  numCountDisplay.innerHTML = numGreetings;
  greetingDisplay = ""
}

greetingBtn.addEventListener("click", greeting);
clearBtn.addEventListener("click", clear);
