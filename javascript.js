function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    console.log(randNum)
    
    if (randNum === 1) {
        computerChoice = "Rock";
    } else if (randNum === 2) {
        computerChoice = "Paper";
    } else if (randNum === 3) {
        computerChoice = "Scissor";
    } else {
        computerChoice = "ERROR";
    }

    return computerChoice;

}
let computerChoice;
getComputerChoice();
console.log("The computer has picked " + computerChoice);