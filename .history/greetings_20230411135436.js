const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn")
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");

let numGreetings = 0;

const namesGreeted = {};



function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );



  if (checkedRadioBtnElement || greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
    if (languageItem === "english") {
      greetingDisplay.innerHTML = `Hello, ${greetingVal}`;
    } else if (languageItem === "french") {
      greetingDisplay.innerHTML = `bonjour, ${greetingVal}`;
    } else if (languageItem === "castilian") {
      greetingDisplay.innerHTML = `Saludo, ${greetingVal}`;
    }
  }

  if (namesGreeted[greetingVal] === "undefined") {
    numGreetings++;

    namesGreeted[greetingVal] = 0

    numCountDisplay.innerHTML = numGreetings;
  }
  localStorage.setItem("numItem", JSON.stringify(numGreetings));



  resetGreeting();
}


if (localStorage.getItem("numItem")) {
  numGreetings = Number(localStorage.getItem("numItem"));
}
numCountDisplay.innerHTML = numGreetings;

console.log(numGreetings)

function resetGreeting() {
  greetingInput.value = "";
}

function clear() {
  localStorage.clear()
}


greetingBtn.addEventListener("click", greeting);
greetingBtn.addEventListener("click", clear)