const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");

let greetingCount = 0;

function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );

  if (greetingVal) {
    if (checkedRadioBtnElement) {
      const languageItem = checkedRadioBtnElement.value;
      if (languageItem === "english") {
        greetingDisplay.innerHTML = `Hello, ${greetingVal}`;
        greetingInput.value = "";
        greetingCount++;
      } else if (languageItem === "french")
    }
  }

  numCountDisplay.innerHTML = greetingCount;
}

greetingBtn.addEventListener("click", greeting);