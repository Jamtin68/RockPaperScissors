function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    //console.log(randNum)
    
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

function selection(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It is a draw! You both picked " + playerSelection);
    } else if (playerSelection === "Scissor" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Scissor") {
        console.log("You win! " + playerSelection + " beats " +computerSelection);
    } else if (playerSelection === "Scissor" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissor") {
        console.log("You lose! " + playerSelection + " is beaten by " +computerSelection);
    }  
}

function playerInput(a) {
    //console.log(a);
    playerSelection = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    //console.log(playerSelection);
    return playerSelection;

}


//Input your choice here:

let a = "sciSsor";


let computerChoice;
getComputerChoice();
const computerSelection = computerChoice;
let playerSelection; 
playerInput(a);
//console.log(playerSelection);
console.log("The computer has picked " + computerChoice);
selection(playerSelection, computerSelection);  