// WRITE YOUR CODE IN HERE:

const container = document.querySelector("div#container");

for (let i = 0; i < 100; i++) {
    const buttonHey = document.createElement("button");
    buttonHey.innerText = "Hey!";
    container.appendChild(buttonHey); // better solution is "container.append(buttonHey);" but the append method is not supported by Udemy code editor
}
