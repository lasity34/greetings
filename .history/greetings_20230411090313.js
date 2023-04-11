
const greetingInput = document.querySelector(".inputName")
const greetingBtn = document.querySelector(".btn_container")
const greetingDisplay = document.querySelector(".greetingDisplay")


 
function greeting() {

    const greetingVal = greetingInput.value

   
    if(greetingVal) {
        greetingDisplay.innerHTML = `hello, ${greetingVal}`
    } else {
        greetingDisplay.innerHTML = `time to say hello`
    }

}

greetingBtn.addEventListener("click", greeting)