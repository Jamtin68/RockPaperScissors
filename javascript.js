function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        const computerChoice = Rock;
    } else if (randNum == 2) {
        const computerChoice = Paper;
    } else if (randNum == 3) {
        const computerChoice = Scissor;
    } else {
        const computerChoice = ERROR;
    }
    console.log(`The computer has picked ${computerChoice}`);
}

getComputerChoice();