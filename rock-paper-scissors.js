
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
