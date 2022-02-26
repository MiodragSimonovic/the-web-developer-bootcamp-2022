const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

function randomIntigerFrom0To255() {
    return Math.floor(Math.random() * 256);
}

function changeBackgroundColor() {
    const r = randomIntigerFrom0To255();
    const g = randomIntigerFrom0To255();
    const b = randomIntigerFrom0To255();
    const color = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = color;
    h1.innerText = color;
    const total = r + g + b;
    if (total < 300) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }
}

button.addEventListener("click", changeBackgroundColor);
