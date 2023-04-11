
const greetingInput = document.querySelector(".inputName")
const greetingBtn = document.querySelector(".greetBtn")
const greetingDisplay = document.querySelector(".greetingDisplay")
const numCountDisplay = document.querySelector(".numCount")

 
function greeting() {

    const greetingVal = greetingInput.value
    let greetingCount = 0
   
    if(greetingVal) {
        greetingDisplay.innerHTML = `Hello, ${greetingVal}`
        greetingInput.value = ""
    } 

}

greetingBtn.addEventListener("click", greeting)