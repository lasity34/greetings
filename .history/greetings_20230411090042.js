
const greetingInput = document.querySelector(".inputName")
const greetingBtn = document.querySelector(".btn_container")
const greetingDisplay = document.querySelector(".greetingDisplay")


 
function greeting() {

    const greetingVal = greetingInput.value

    greetingDisplay.innerHTML = `hello, ${greetingVal}`

}

greetingBtn.addEventListener("click", greeting)