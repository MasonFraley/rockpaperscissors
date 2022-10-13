let playerMatchScore = 0;
let computerMatchScore = 0;
let playerGameScore = 0;
let computerGameScore = 0;
let gameWinner = 0;

const choice1 = document.getElementById("rock");
console.log(choice1);

const choice2 = document.getElementById("paper");
console.log(choice2);

const choice3 = document.getElementById("scissors");
console.log(choice3);

choice1.addEventListener("click", function(event) {
    console.log("clicked rock")
})

choice2.addEventListener("click", function(event) {
    console.log("clicked paper")
})

choice3.addEventListener("click", function(event) {
    console.log("clicked scissors")
})

function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random()*(4-1)+1);
}

console.log(getRandomInt());

const computerChoice = getRandomInt();

var tie;
const playerWinGame = playerGameScore ++;
const computerWinGam = computerGameScore ++;

function comparison() {
  if ((computerChoice == 1) && (playerChoice == choice2)) {
    return(playerWinGame)}
  else if ((computerChoice == 1) && (playerChoice == choice3)) {
    return(computerWinGame)}
  else if ((computerChoice == 2) && (playerChoice == choice1)) {
    return(computerWinGame)}
  else if ((computerChoice == 2) && (playerChoice == choice3)) {
    return(computerWinGame)}
  else if ((computerChoice == 3) && (playerChoice == choice1)) {
    return(playerWinGame)}
  else if ((computerChoice == 3) && (playerChoice == choice2)) {
    return(playerWinGame)}   
  else if ((computerChoice == 2) && (playerChoice == choice2)) {
    return(tie)}
  else if ((computerChoice == 1) && (playerChoice == choice1)) {
    return(tie)}
  else if ((computerChoice == 3) && (playerChoice == choice3)) {
    return(tie)}
}  

console.log(comparison)

function postComputerScore() {
    computerGameScore = document.getElementById("computerGameScore").innerHTML
}

function postPlayerScore() {
    playerGameScore = document.getElementById("playerGameScore").innerHTML
}