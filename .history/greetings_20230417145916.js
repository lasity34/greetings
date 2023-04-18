const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");
const errorDisplay = document.querySelector(".error");

let greetIntance = greetingFactory();

function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );
  

  greetIntance.setName(greetingVal);
  if (!checkedRadioBtnElement || !greetingVal) {
   
   

  } else if (checkedRadioBtnElement && greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
    greetIntance.setLanguage(languageItem);
    errorDisplay.innerHTML = "";
    // greetIntance.callErrorName()
    // if (greetIntance.getAlert === "username already exists") {
    //   errorDisplay.innerHTML = greetIntance.getAlert();
    //   errorDisplay.classList.add("message");
    // }
    greetIntance.callNameCount();
    greetIntance.setLocalStorage();

    numCountDisplay.innerHTML = greetIntance.getNameCount();
    errorDisplay.classList.remove("message");
    greetingInput.value = "";
    greetingDisplay.innerHTML = greetIntance.getLanguage();
  } else {
    errorDisplay.innerHTML = greetIntance.getAlert();
    errorDisplay.classList.add("message");
    const languageItem = checkedRadioBtnElement.value;
    greetIntance.setLanguage(languageItem);
  }
}
greetIntance.getLocalStorage();
numCountDisplay.innerHTML = greetIntance.getNameCount();

function resetGreeting() {
  greetingInput.value = "";
}

function clear() {
  greetIntance.clear();
  resetGreeting();
  greetingDisplay.innerHTML = "";
  numCountDisplay.innerHTML = greetIntance.getNameCount();
  errorDisplay.innerHTML = ""
  errorDisplay.classList.remove("message");
  const radioBtns = document.querySelectorAll(".language");
  radioBtns.forEach((item) => {
    return item.checked = "";
  });
}

greetingBtn.addEventListener("click", greeting);
clearBtn.addEventListener("click", clear);
