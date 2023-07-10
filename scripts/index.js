const options = ["rock", "paper", "scissor"];
let computerScore = 0;
let yourScore = 0;

const updateScores = (userChoice) => {
  const randomNumber = Math.floor(Math.random() * options.length);
  const computerChoice = options[randomNumber];
  if (userChoice === computerChoice) {
    setStatus("Tie");
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    yourScore++;
    setStatus("You Win");
  } else {
    computerScore++;
    setStatus("Computer win");
  }
  if (yourScore === 5 || computerScore === 5) {
    setWinner();
    yourScore = 0;
    computerScore = 0;
  }
  document.getElementById("human-score").innerHTML = yourScore;
  document.getElementById("computer-score").innerHTML = computerScore;
};
const setWinner = () => {
  if (computerScore > yourScore) {
    setMessage("Computer Won!");
  } else if (computerScore < yourScore) {
    setMessage("You Won!");
  } else {
    setMessage("Tie!");
  }
};
const setStatus = (message) => {
  document.getElementById("game-status").innerHTML = message;
};
const setMessage = (message) => {
  document.getElementById("win-text").innerHTML = message;
};

document.getElementById("rock").addEventListener("click", () => {
  updateScores("rock");
});
document.getElementById("paper").addEventListener("click", () => {
  updateScores("paper");
});
document.getElementById("scissor").addEventListener("click", () => {
  updateScores("scissor");
});
