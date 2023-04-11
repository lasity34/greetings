
const greetingInput = document.querySelector(".inputName")
const greetingBtn = document.querySelector(".greetBtn")
const greetingDisplay = document.querySelector(".greetingDisplay")


 
function greeting() {

    const greetingVal = greetingInput.value

   
    if(greetingVal) {
        greetingDisplay.innerHTML = `Hello, ${greetingVal}`
        greetingInput.value = ""
    } 

}

greetingBtn.addEventListener("click", greeting)