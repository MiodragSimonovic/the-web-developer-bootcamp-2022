setTimeout(function () { // this is needed for HTML elements to load before prompt

    let maximumNumber = parseInt(prompt("Enter the maximum number:"));
    while (!maximumNumber) { // checking if "maximumNumber" is number"
        maximumNumber = parseInt(prompt("Enter valid number!"));
    }

    const targetNumber = Math.floor(Math.random() * maximumNumber) + 1;
    console.log(targetNumber);

    let guessNumber = prompt("Enter your first guess or enter 'q' to exit the game:");
    let attempts = 1;
    while (parseInt(guessNumber) !== targetNumber) {
        if (guessNumber.toLowerCase().trim() === 'q') {
            break;
        }
        attempts++;
        guessNumber = parseInt(guessNumber);
        if (!guessNumber) {
            guessNumber = prompt("Enter valid number or enter 'q' to exit the game:"); 
        } else if (guessNumber > targetNumber) {
            guessNumber = prompt("Too high! Enter a new guess or enter 'q' to exit the game:");
        } else {
            guessNumber = prompt("Too low! Enter a new guess or enter 'q' to exit the game:");
        }    
    }

    if (guessNumber.toLowerCase().trim() === 'q' && attempts === 2) {
        alert(`You quited the game after ${attempts - 1} guess. Number that you needed to guess was ${targetNumber}.`);
    } else if (guessNumber.toLowerCase().trim() === 'q') {
        alert(`You quited the game after ${attempts - 1} guesses. Number that you needed to guess was ${targetNumber}.`)
    } else if (attempts === 1) {
        alert(`You got it! The number that you looking for was ${targetNumber}. It took you only ${attempts} guess!!!`);
    } else {
        alert(`You got it! The number that you looking for was ${targetNumber}. It took you ${attempts} guesses.`);
    }

}, 200) // end of setTimeout(function ()...
