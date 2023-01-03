let yourScoreText= document.querySelector("#yourScore");
let computerScoreText = document.querySelector("#computerScore");

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

function endGame(winner) {
    const end = document.getElementById("end");
    const h1 = document.createElement("h1");
    if(winner=="You") {
        h1.textContent="you win!";
    }
    else if(winner=="Computer") {
        h1.textContent="you lose!";
    }
    const button = document.createElement("btn");
    button.textContent="Restart";
    button.style.color="white";
    button.style.textAlign="center";
    button.addEventListener("click", ()=> {
        yourScore=0;
        computerScore=0;
        yourScoreText.textContent = "You: " + yourScore;
        computerScoreText.textContent = "Computer: " + computerScore;
        h1.remove();
        button.remove();
    })
    end.appendChild(h1);
    end.appendChild(button);
}

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    if((yourScore < 5) && (computerScore < 5)) {
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
        document.getElementById("yourChoice").src="./images/rock.png";
        let computerChoicePath= "./images/"+computerChoice+".png";
        document.getElementById("computerChoice").src=computerChoicePath;
        if(yourScore==5) {
            endGame("You");
        }
        if(computerScore==5) {
            endGame("Computer");
        }
    }
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    if((yourScore < 5) && (computerScore < 5)) {
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
        document.getElementById("yourChoice").src="./images/paper.png";
        let computerChoicePath= "./images/"+computerChoice+".png";
        document.getElementById("computerChoice").src=computerChoicePath;
        if(yourScore==5) {
            endGame("You");
        }
        if(computerScore==5) {
            endGame("Computer");
        }
    }
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    if((yourScore < 5) && (computerScore < 5)) {
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
        document.getElementById("yourChoice").src="./images/scissors.png";
        let computerChoicePath= "./images/"+computerChoice+".png";
        document.getElementById("computerChoice").src=computerChoicePath;
        if(yourScore==5) {
            endGame("You");
        }
        if(computerScore==5) {
            endGame("Computer");
        }
    }
});