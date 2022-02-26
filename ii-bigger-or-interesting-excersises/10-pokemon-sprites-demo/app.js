// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png  in the time of the creation of this: from 1 to 898 for every pokemon

const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 898; i++) {
    const pokemon = document.createElement("div"); // create div in wich we vrap pokemon image and label
    pokemon.classList.add("pokemon"); // add style from app.css    

    const img = document.createElement("img");
    img.src = `${baseURL}${i}.png`;

    const label = document.createElement("span");
    label.innerText = `#${i}`;

    pokemon.append(img);
    pokemon.append(label);
    container.append(pokemon);
}
