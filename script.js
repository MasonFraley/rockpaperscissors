let playerGameScore = 0;
let computerGameScore = 0;

document.getElementById("rock").addEventListener("click", function(event) {
  generateComputerChoice();
  comparison(this.id);
});

document.getElementById("paper").addEventListener("click", function(event) {
  generateComputerChoice();
  comparison(this.id);
});

document.getElementById("scissors").addEventListener("click", function(event) {
  generateComputerChoice();
  comparison(this.id);
});

function generateComputerChoice() {
  var computerChoice = Math.floor(Math.random()*3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}

function comparison(playerChoice) {
  var computerChoice2 = generateComputerChoice()
  if ((computerChoice2 == "rock" && playerChoice == "paper") || (computerChoice2 == "paper" && playerChoice == "scissors") || (computerChoice2 == "scissors" && playerChoice == "rock")) {
    playerGameScore++
    document.getElementById("playerGameScore").innerHTML = playerGameScore;
    document.getElementById("result").innerHTML = `You won! Your ${playerChoice} beat the computer\'s ${computerChoice2}.`;
  }
  else if ((computerChoice2 == "rock" && playerChoice == "scissors") || (computerChoice2 == "paper" && playerChoice == "rock") || (computerChoice2 == "scissors" && playerChoice == "paper")) {
    computerGameScore++
    document.getElementById("computerGameScore").innerHTML = computerGameScore;      
    document.getElementById("result").innerHTML = `You lost! The computer\'s ${computerChoice2} beat your ${playerChoice}`;
  }
  else if (computerChoice2 === playerChoice) {
    document.getElementById("result").innerHTML = `It\'s a tie! You both chose ${playerChoice}!`;
  }   
} 

