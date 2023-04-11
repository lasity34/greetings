
const greetingInput = document.querySelector(".inputName")
const greetingBtn = document.querySelector(".greetBtn")
const greetingDisplay = document.querySelector(".greetingDisplay")
const numCountDisplay = document.querySelector(".numCount")

let greetingCount = 0 

function greeting() {

    const greetingVal = greetingInput.value
    const checkedRadioBtnElement = document.querySelector("input[name='language']:checked")
   
    if (checkedRadioBtnElement) {
       const languageItem = checkedRadioBtnElement.value
    }
    if(greetingVal) {
        greetingDisplay.innerHTML = `Hello, ${greetingVal}`
        greetingInput.value = ""
        greetingCount++
    } 

    numCountDisplay.innerHTML = greetingCount

}

greetingBtn.addEventListener("click", greeting)