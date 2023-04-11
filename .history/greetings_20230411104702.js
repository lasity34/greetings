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
        greetingInput.value = "";
        numGreetings++;
      } else if (languageItem === "french") {
        greetingDisplay.innerHTML = `bonjour, ${greetingVal}`;
        greetingInput.value = "";
        numGreetings++;
      } else if (languageItem === "castilian") {
        greetingDisplay.innerHTML = `Saludo, ${greetingVal}`;
        greetingInput.value = "";
        numGreetings++;
      }
    }
  

  numCountDisplay.innerHTML = numGreetings;
}

greetingBtn.addEventListener("click", greeting);
