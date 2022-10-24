let playerMatchScore = 0;
let computerMatchScore = 0;
let playerGameScore = 0;
let computerGameScore = 0;

document.getElementById("rock").addEventListener("click", function(event) {
  console.log("clicked rock");
  generateComputerChoice();
  comparison(generateComputerChoice(), this.id);
});

document.getElementById("paper").addEventListener("click", function(event) {
  console.log("clicked paper");
  generateComputerChoice();
  comparison(generateComputerChoice(), this.id);
});

document.getElementById("scissors").addEventListener("click", function(event) {
  console.log("clicked scissors");
  generateComputerChoice();
  comparison(generateComputerChoice(), this.id);
});

function generateComputerChoice() {
  var computerChoice = Math.floor(Math.random()*3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}

var computerChoice2 = generateComputerChoice()
console.log(computerChoice2)

function comparison(computerChoice2, playerChoice) {
    if (computerChoice2 == "rock" && playerChoice == "paper") {
      playerGameScore++
      document.getElementById("playerGameScore").innerHTML = playerGameScore;
      document.getElementById("result").innerHTML = "You won! Your ${playerChoice} beat the computer's ${computerChoice2}.";
    }
    else if (computerChoice2 == "rock" && playerChoice == "scissors") {
      computerGameScore++
      document.getElementById("computerGameScore").innerHTML = computerGameScore;      
      document.getElementById("result").innerHTML = "You lost! The computer's ${computerChoice2} beat your ${playerChoice}";
    }
    else if (computerChoice2 == "paper" && playerChoice == "rock") {
      computerGameScore++
      document.getElementById("computerGameScore").innerHTML = computerGameScore;
      document.getElementById("result").innerHTML = "You lost! The computer's ${computerChoice2} beat your ${playerChoice}";
    }
    else if (computerChoice2 == "paper" && playerChoice == "scissors") {
      playerGameScore++
      document.getElementById("playerGameScore").innerHTML = computerGameScore;
      document.getElementById("result").innerHTML = "You won! Your ${playerChoice} beat the computer's ${computerChoice2}.";
    }
    else if (computerChoice2 == "scissors" && playerChoice == "rock") {
      playerGameScore++
      document.getElementById("playerGameScore").innerHTML = playerGameScore;
      document.getElementById("result").innerHTML = "You won! Your ${playerChoice} beat the computer's ${computerChoice2}.";
    }
    else if (computerChoice2 == "scissors" && playerChoice == "paper") {
      computerGameScore++
      document.getElementById("computerGameScore").innerHTML = playerGameScore;
      document.getElementById("result").innerHTML = "You lost! The computer's ${computerChoice2} beat your ${playerChoice}";
    }
    else if (computerChoice2 === playerChoice) {
      document.getElementById("result").innerHTML = "It's a tie!";  
    }   
} 
