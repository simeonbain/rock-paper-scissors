/* Plays a game that keeps score and reports a winner or loser at 
 * the end */
function game(playerSelection) {

    // Get the computer selection
    const computerSelection = computerPlay(); 
    
    // Play a single round
    const result = playRound(playerSelection, computerSelection);

    // Based on the result show the appropriate message
    if (result === `Draw`) {
        showResult(`It's a draw! ${playerSelection} equals ${computerSelection}`);
    } else if (result === `Player`) {
        showResult(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (result === `Computer`) { 
        showResult(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        showResult(`There was an error and the round could not be completed`);
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

/* Shows the result on the UI */
function showResult(result) {
    resultOutput.textContent = result; 
} 

/* Query selectors */
const buttons = document.querySelectorAll(`button`); 
const resultOutput = document.querySelector(`.result`);

/* Event listeners */
buttons.forEach((button) => {
    button.addEventListener(`click`, () => { game(button.dataset.selection) });
});


