const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");
const errorDisplay = document.querySelector(".error");

let greetIntance = greetingFactory();

let namesGreeted = {};

// radio & greeting true & greeting[newName] = 0

function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );

  greetIntance.setName(greetingVal);
  if (!checkedRadioBtnElement || !greetingVal) {
    greetIntance.callAlert();
    errorDisplay.innerHTML = greetIntance.getAlert();
    errorDisplay.classList.add("message");
  } else if (checkedRadioBtnElement && greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
    greetIntance.setLanguage(languageItem);
    errorDisplay.innerHTML = "";
    greetIntance.callNameCount();
    greetIntance.setLocalStorage()
    errorDisplay.classList.remove("message");

    greetIntance.callNameError();
    if (greetIntance.getAlert() === "username already exists") {
      errorDisplay.innerHTML = greetIntance.getAlert();
      errorDisplay.classList.add("message");
    }
 
    greetingDisplay.innerHTML = greetIntance.getLanguage();
   
  }
  resetGreeting();
}

 numCountDisplay.innerHTML = greetIntance.getLocalStorage()

function resetGreeting() {
  greetingInput.value = "";
}

function clear() {
  localStorage.clear();
  namesGreeted = {};

 
  greetingDisplay.innerHTML = "";
  errorDisplay.innerHTML = "";
  resetGreeting();
  errorDisplay.classList.remove("message");
  const radioBtns = document.querySelectorAll(".language");
  radioBtns.forEach((item) => {
    return (item.checked = "");
  });
}

greetingBtn.addEventListener("click", greeting);
clearBtn.addEventListener("click", clear);
