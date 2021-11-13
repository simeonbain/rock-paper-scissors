/* Global variables */ 
let playerScore = 0; 
let computerScore = 0; 
const winningScore = 5; 

/* Plays a game that keeps score and reports a winner or loser at 
 * the end */
function playGame(playerSelection) {

    // Get the computer selection
    const computerSelection = computerPlay(); 
    
    // Play a single round
    const result = playRound(playerSelection, computerSelection);

    // Based on the result, increment the scores show the appropriate message
    if (result === `Draw`) {
        showResult(`${playerSelection} equals ${computerSelection}`);
    } else if (result === `Player`) {
        showResult(`${playerSelection} beats ${computerSelection}`);
        playerScore++; 
    } else if (result === `Computer`) { 
        showResult(`${computerSelection} beats ${playerSelection}`);
        computerScore++; 
    } else {
        showResult(`There was an error and the round could not be completed`);
    }

    // Show the score
    showScore(playerScore, computerScore);

    // End the game after winning score is reached
    if (playerScore >= winningScore) {
        endGame(); 
    } else if (computerScore >= winningScore) {
        endGame(); 
    } else {
        // keep playing
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

/* Shows the score on the UI */ 
function showScore(playerScore, computerScore) {
    playerScoreOutput.textContent = `Your score: ${playerScore}`; 
    computerScoreOutput.textContent = `Computer score: ${computerScore}`;
}

/* Shows the reset button on the UI and hides the selection buttons */
function showReset() {
    resetButton.hidden = false; 
    selectionButtons.forEach((button) => button.hidden = true); 
}

/* Ends the game and shows the overall winner and a reset button on the UI */ 
function endGame() {
    if (playerScore > computerScore) {
        showResult(`${resultOutput.textContent}. 
            You won, you were the first to ${winningScore}!` );
    } else if (computerScore > playerScore) {
        showResult(`${resultOutput.textContent}. 
            You lost, the computer was the first to ${winningScore}!`);
    } else {
        showResult(`${resultOutput.textContent}. It was a draw`); 
    }

    // show reset button 
    showReset(); 
}

/* Resets the game to the initial state */ 
function resetGame() {
    playerScore = 0; 
    computerScore = 0; 
    showResult(``);
    showScore(0, 0);
    selectionButtons.forEach((button) => {button.hidden = false}); 
    resetButton.hidden = true;
}

/* Elements */
const selectionButtons = document.querySelectorAll(`.selection`); 
const resultOutput = document.querySelector(`.result`);
const playerScoreOutput = document.querySelector(`.playerScore`);
const computerScoreOutput = document.querySelector(`.computerScore`);
const resetButton = document.querySelector(`.reset`); 

/* Event listeners */
selectionButtons.forEach((button) => {
    button.addEventListener(`click`, () => playGame(button.dataset.selection));
});
resetButton.addEventListener(`click`, () => resetGame());
