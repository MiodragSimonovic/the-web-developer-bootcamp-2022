const h1 = document.querySelector("h1");
const usernameTextInput = document.querySelector("#username");

function elementUpdateAsTypinginOtherElement(inputElement, outputElement) {
    if (inputElement.value == "") {
        outputElement.innerText = "Enter Your Username";
    } else {
        outputElement.innerText = `Welcome, ${inputElement.value}`;
    }    
}

usernameTextInput.addEventListener("input", () => elementUpdateAsTypinginOtherElement(usernameTextInput, h1));
