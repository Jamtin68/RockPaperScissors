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
        p++;
    } else if (playerSelection === "Scissor" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissor") {
        console.log("You lose! " + playerSelection + " is beaten by " +computerSelection);
        c++;
    }  
}

function playerInput(a) {
    //console.log(a);
    playerSelection = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    //console.log(playerSelection);
    return playerSelection;
}

function game(p, c) {
    for (let i = 1; i < 6; i++) {
        getComputerChoice();
        const computerSelection = computerChoice;                 
        console.log("Round " + i);
        console.log("The computer has picked " + computerChoice);
        selection(playerSelection, computerSelection);
        console.log("");
    }
}

function score(p, c) {
    console.log("Your final point tally was " + p + " and the computers was " + c);
    if (p === c) {
       console.log("It is a draw");
    } else if (p > c) {
       console.log("Congratulations! You won");
    } else if (P < c) {
       console.log("Unlucky. You lost");
    }
}


//Input your choice here:

let a = "scissor";

let p=0;
let c=0;
let computerChoice;
let playerSelection;
playerInput(a);
console.log("You picked " + playerSelection);
console.log("- - - - - - - - - - - - - - - - - - -");
game(p, c);
console.log("- - - - - - - - - - - - - - - - - - -");
score(p, c);

