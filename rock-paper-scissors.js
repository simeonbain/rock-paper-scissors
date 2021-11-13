/* Plays a game that keeps score and reports a winner or loser at 
 * the end */
function game() {

    // Get input from the user 
    let playerSelection = window.prompt(`Enter your choice of Rock, Paper or Scissors`);
    playerSelection = capitalize(playerSelection); // parse it into the expected format

    // Get the computer selection
    const computerSelection = computerPlay(); 
    
    // Play a single round
    const result = playRound(playerSelection, computerSelection);

    // Based on the result, increment the scores and print the appropriate message
    if (result === `Draw`) {
        console.log(`It's a draw! ${playerSelection} equals ${computerSelection}`);
    } else if (result === `Player`) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (result === `Computer`) { 
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log(`There was an error and the round could not be completed`);
    }
}

/* Plays a single round of Rock Paper Scissors.
 * Returns a string representing either the winner or a draw */
function playRound(playerSelection, computerSelection) {
    // First check for a draw
    if (playerSelection === computerSelection) {
        return `Draw`; 
    }

    // If it's not a draw, determine the winner
    switch (playerSelection) {
        case `Rock`: 
            if (computerSelection === `Scissors`) {
                return `Player`; 
            } else {
                return `Computer`;
            }
        case `Paper`:
            if (computerSelection === `Rock`) {
                return `Player`
            } else {
                return `Computer`
            }
        case `Scissors`:
            if (computerSelection === `Paper`) {
                return `Player`
            } else {
                return `Computer`;
            }
        default: 
            return undefined; 
    }
}

/* Randomly return either  `Rock`, `Paper` or `Scissors` */
function computerPlay() {
    switch (getRandomInt(3)) {
        case 0:
            return `Rock`; 
        case 1: 
            return `Paper`;
        case 2: 
            return `Scissors`;
        default: 
            return undefined; 
    }
}

/* Returns a random int in the range [0, max-1] */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* Takes a string as input and returns the capitalized version of it 
 * (first character uppercase, subsequent characters lowercase) */
function capitalize(string) {
    if (string === ``) {
        return string; 
    }  else {
        return string[0].toUpperCase() + string.slice(1).toLowerCase(); 
    }
}

const buttons = document.querySelectorAll(`button`); 
buttons.forEach((button) => {
    button.addEventListener(`click`, () => {
        const playerSelection = capitalize(button.dataset.selection);
        const computerSelection = computerPlay(); 
        console.log(playRound(playerSelection, computerSelection));
    }); 
});