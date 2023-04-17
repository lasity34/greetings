const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");
const errorDisplay = document.querySelector(".error");

let greetIntance = greetingFactory();
let sumCount = 0;
let namesGreeted = {};

// radio & greeting true & greeting[newName] = 0

function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );
  const radioBol = checkedRadioBtnElement ? true : false;

  greetIntance.setName(greetingVal);
  greetIntance.setRadioValue(radioBol);

  if (!checkedRadioBtnElement || !greetingVal) {
    greetIntance.callAlert();
    errorDisplay.innerHTML = greetIntance.getAlert();
    errorDisplay.classList.add("message");
  } else if (checkedRadioBtnElement && greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
    errorDisplay.innerHTML = "";
    greetIntance.setLanguage(languageItem);
    errorDisplay.classList.remove("message"); 


    greetIntance.callNameError()
    if(greetIntance.getAlert() ) {
      errorDisplay.innerHTML = greetIntance.getAlert();
      errorDisplay.classList.add("message"); 
    }

    greetIntance.callNameCount();
    greetingDisplay.innerHTML = greetIntance.getLanguage();
    let numGreetings = greetIntance.getNameCount();
    sumCount = numGreetings;
    localStorage.setItem("numItem", JSON.stringify(sumCount));
    numCountDisplay.innerHTML = numGreetings;

  
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
  errorDisplay.innerHTML = "";
  resetGreeting();
  errorDisplay.classList.remove("message");
  const radioBtns = document.querySelector("input[name='language']:checked");
  if (radioBtns) {
    radioBtns.checked = "";
  }
}

greetingBtn.addEventListener("click", greeting);
clearBtn.addEventListener("click", clear);
