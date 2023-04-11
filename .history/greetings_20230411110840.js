const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");

let numGreetings = 0;

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
  numGreetings++;

  localStorage["numItem"] = numGreetings;

  if (localStorage["numItem"]) {
    numGreetings = Number(localStorage["numItem"])
    numCountDisplay.innerHTML = numGreetings;
  }

  resetGreeting();

  
}

function resetGreeting() {
  greetingInput.value = "";
}

greetingBtn.addEventListener("click", greeting);
