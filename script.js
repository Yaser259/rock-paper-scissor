let player = 0;
let computer = 0;
const choices = ["rock", "paper", "scissors"];

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", playerPlay);
});

const result = document.querySelector("#result");

const won = document.querySelector("#won");

function playerPlay(e) {
  let playerSelection = e.target.innerText;
  game(playerSelection.toLowerCase());
}

function game(playerSelection) {
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

function computerPlay() {
  const choice = Math.floor(Math.random() * 10) % choices.length;
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === choices[0] && computerSelection === choices[0]) ||
    (playerSelection === choices[1] && computerSelection === choices[1]) ||
    (playerSelection === choices[2] && computerSelection === choices[2])
  ) {
    result.innerText = `It's a Tie`;
  } else if (
    (playerSelection === choices[0] && computerSelection === choices[1]) ||
    (playerSelection === choices[1] && computerSelection === choices[2]) ||
    (playerSelection === choices[2] && computerSelection === choices[0])
  ) {
    computer += 1;
    computerScore.innerText = computer;
    result.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    if (computer === 5) {
      computerScore.innerText = 0;
      playerScore.innerText = 0;
      won.innerText = `Computer won the match`;
    }
  } else if (
    (playerSelection === choices[0] && computerSelection === choices[2]) ||
    (playerSelection === choices[1] && computerSelection === choices[0]) ||
    (playerSelection === choices[2] && computerSelection === choices[1])
  ) {
    player += 1;
    playerScore.innerText = player;
    result.innerText = `You Won! ${playerSelection} beats ${computerSelection}`;
    if (player === 5) {
      computerScore.innerText = 0;
      playerScore.innerText = 0;
      won.innerText = `Player won the match`;
    }
  }
}
