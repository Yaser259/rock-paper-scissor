const computerPlay = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

let playerScore = 0;
let computerScore = 0;
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    computerScore = playerScore = 0;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerScore += 1;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore += 1;
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter The Choice: ");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  }
  if (playerScore == computerScore) console.log("Its a tie");
  else if (playerScore > computerScore) console.log("player won");
  else console.log("computer won");
};

game();
