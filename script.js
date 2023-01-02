let yourScoreText= document.querySelector("#yourScore");
let computerScoreText = document.querySelector("#computerScore");
let yourChoiceText = document.querySelector("#yourChoice");
let computerChoiceText = document.querySelector("#computerChoice");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    let choice = choices[ran];
    return choice
}

const win = "you win!";
const lose = "you lose!";
const draw = "it's a draw!";
let yourScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
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
        else if(computerSelection=="scissors") {
            result = draw;
        }
        else {
            result = lose;
        }
    }
    return result;
}


const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let result = playRound("rock", computerChoice);
    if (result==win) {
        yourScore++;
    }
    else if (result==lose) {
        computerScore++;
    }
    yourScoreText.textContent = "You: " + yourScore;
    computerScoreText.textContent = "Computer: " + computerScore;
    yourChoiceText.textContent = "You chose: rock";
    computerChoiceText.textContent = "Computer chose: " + computerChoice;
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let result = playRound("paper", computerChoice);
    if (result==win) {
        yourScore++;
    }
    else if (result==lose) {
        computerScore++;
    }
    yourScoreText.textContent = "You: " + yourScore;
    computerScoreText.textContent = "Computer: " + computerScore;
    yourChoiceText.textContent = "You chose: paper";
    computerChoiceText.textContent = "Computer chose: " + computerChoice;
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let result = playRound("scissors", computerChoice);
    if (result==win) {
        yourScore++;
    }
    else if (result==lose) {
        computerScore++;
    }
    yourScoreText.textContent = "You: " + yourScore;
    computerScoreText.textContent = "Computer: " + computerScore;
    yourChoiceText.textContent = "You chose: scissors";
    computerChoiceText.textContent = "Computer chose: " + computerChoice;
});