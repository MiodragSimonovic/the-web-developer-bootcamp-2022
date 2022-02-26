const helloButton = document.querySelector("button#hello");
const goodbyeButton = document.querySelector("button#goodbye");

function consolelogHello() {
    console.log("hello");
}

function consoleLogGoodbye() {
    console.log("goodbye");
}

helloButton.addEventListener("click", consolelogHello);
goodbyeButton.addEventListener("click", consoleLogGoodbye);
