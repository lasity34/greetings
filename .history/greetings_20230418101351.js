const greetingInput = document.querySelector(".inputName");
const greetingBtn = document.querySelector(".greetBtn");
const clearBtn = document.querySelector(".clearBtn");
const greetingDisplay = document.querySelector(".greetingDisplay");
const numCountDisplay = document.querySelector(".numCount");
const errorDisplay = document.querySelector(".error");

let greetIntance = greetingFactory();
let sumCount =  0;

function greeting() {
  const greetingVal = greetingInput.value;
  const checkedRadioBtnElement = document.querySelector(
    "input[name='language']:checked"
  );
  greetIntance.setRadio(checkedRadioBtnElement);
  greetIntance.setName(greetingVal);
  if (!checkedRadioBtnElement || !greetingVal) {
    greetIntance.callAlert();
    errorDisplay.innerHTML = greetIntance.getAlert();
    errorDisplay.classList.add("message");
  } else if (checkedRadioBtnElement && greetingVal) {
    const languageItem = checkedRadioBtnElement.value;
    greetIntance.setLanguage(languageItem);
    errorDisplay.innerHTML = "";
    greetIntance.callErrorMessage();
    errorDisplay.classList.remove("message");
    if (greetIntance.getAlert() === "username already used") {
      errorDisplay.innerHTML = greetIntance.getAlert();
      errorDisplay.classList.add("message");
    }
    greetIntance.callNameCount();
    let numGreetings = greetIntance.getNameCount();
    sumCount = numGreetings;
    greetIntance.setLocalStorage()
    localStorage.setItem("numItem", JSON.stringify(sumCount));
    numCountDisplay.innerHTML = numGreetings;
    greetingInput.value = "";
    greetingDisplay.innerHTML = greetIntance.getLanguage();
  }
}

if (localStorage.getItem("numItem")) {
  greetIntance.getLocalStorage()
  sumCount = Number(localStorage.getItem("numItem"));
}
numCountDisplay.innerHTML = sumCount;


function resetGreeting() {
  greetingInput.value = "";
}

function resetGreetingApp() {
  greetIntance.clear();
  resetGreeting();
  greetingDisplay.innerHTML = "";
  numCountDisplay.innerHTML = greetIntance.getNameCount();

  greetIntance.callAlert();
  greetIntance.innerHTML = greetIntance.getAlert();
  errorDisplay.innerHTML = "";
  errorDisplay.classList.remove("message");
  const radioBtns = document.querySelectorAll(".language");

  for (let i = 0; i < radioBtns.length; i++) {
    radioBtns[i].checked = false;
  }

  location.reload();
}

greetingBtn.addEventListener("click", greeting);
clearBtn.addEventListener("click", resetGreetingApp);
