function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    let choice = choices[ran];
    return choice
}

function playRound(playerSelection, computerSelection) {
    const win = "you win!";
    const lose = "you lose!";
    const draw = "it's a draw!";
    let result = win;

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "rock") { 
        if(computerSelection == "paper") {
            result = lose;
        }
        else if(computerSelection=="scissors") {
            result = win;
        }
        else {
            result = draw;
            }
    }
    else if(playerSelection == "paper") {
        if(computerSelection=="paper") {
            result = draw;
        }
        else if(computerSelection=="scissors") {
            result = lose;
        }
        else {
            result = win;
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection=="paper") {
            result = win;
        }
        else if(computerSelection=="draw") {
            result = win;
        }
        else {
            result = lose;
        }
    }
    return result;
}

function game() {
    let myScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("rock, paper or scissors?");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result=="you win!") {
            myScore++;
        }
        else if (result=="you lose!") {
            computerScore++;
        }
        console.log(result);
        console.log("your score:" + myScore + "\ncomputer score:" + computerScore);
    }
    if (myScore > computerScore) {
        console.log("you win!");
    }
    else if (myScore < computerScore) {
        console.log("you lose!");
    }
    else {
        console.log("it's a tie!");
    }
}

game()