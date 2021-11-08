
/* Plays a single round of Rock Paper Scissors */
function playRound(playerSelection, computerSelection) {
    // Parse the playerSelection into the expected format
    playerSelection = capitalize(playerSelection);
    
    // Determine if the player won or not
    let playerWon = false; 
    switch (playerSelection) {
        case `Rock`: 
            if (computerSelection === `Scissors`) {
                playerWon = true;  
            }
            break; 
        case `Paper`:
            if (computerSelection === `Rock`) {
                playerWon = true;  
            }
            break; 
        case `Scissors`:
            if (computerSelection === `Paper`) {
                playerWon = true;  
            }
            break; 
    }
    
    // Based on the outcome, return the appropriate message
    if (playerWon) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
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
    return string[0].toUpperCase() + string.slice(1).toLowerCase(); 
}