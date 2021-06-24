// Rock Paper scissors
let humanScore = 0;
let computerScore = 0;
let roundsCounter = 0;
let winnerText;
let displayScoreText;
let finalWinner;
const gameTied = "Final Scores tied, play an extra round to find out winner";
const resetText = "Reset to challenge computer again";

function game(selection) {
  gameResult(selection);
}

// Generate computer input
function computerInput() {
  var result_computer = ["ROCK", "PAPER", "SCISSORS"][
    Math.floor(Math.random() * 3)
  ];
  return result_computer;
}

// Find Game result based on Human selection
function gameResult(human) {
  document.querySelector("#startGame").style.display = "none";
  let result;
  let computer = computerInput();
  // Compile Computer input
  console.log("computer " + computer);
  console.log("human " + human);
  // compile Result
  switch (computer) {
    case "ROCK":
      if (human === "ROCK") {
        result = "DRAW";
        break;
      } else if (human === "PAPER") {
        result = "HUMAN";
        break;
      } else if (human === "SCISSORS") {
        result = "COMPUTER";
        break;
      }
    case "PAPER":
      if (human === "ROCK") {
        result = "COMPUTER";
        break;
      } else if (human === "PAPER") {
        result = "DRAW";
        break;
      } else if (human === "SCISSORS") {
        result = "HUMAN";
        break;
      }

    case "SCISSORS":
      if (human === "ROCK") {
        result = "HUMAN";
        break;
      } else if (human === "PAPER") {
        result = "COMPUTER";
        break;
      } else if (human === "SCISSORS") {
        result = "DRAW";
        break;
      }
  }
  console.log("RESULT " + result);
  
  if (result == "HUMAN") {
    winnerText = "You win against computer";
    humanScore++;
  } else if (result == "COMPUTER") {
    winnerText = "You lose against computer";
    computerScore++;
  } else {
    winnerText = "This round is a draw";
  }
  document.querySelector("#winner").innerHTML = winnerText;

  roundsCounter++;
  updateScores();
  if (roundsCounter >= 5) {
    if (humanScore === computerScore) {
      document.querySelector("#scoreDisplay").innerHTML = tiedScoreText;
    } else {
      document.querySelector("#scoreDisplay").style.display = "none";
      document.querySelector("#images").style.display = "none";
      document.querySelector("#winner").style.display = "none";
      document.querySelector("#reset").style.display = "block";
      document.querySelector("#resetText").innerHTML = resetText;

      if (humanScore > computerScore) {
          finalWinner = "Final result: You won";
      } else {
          finalWinner = "Final result: You Lose";
      }
      document.querySelector("#finalwinner").innerHTML = finalWinner;
    }
  }
}

// Update the scores based on game result
function updateScores() {
  document.querySelector("#scoreDisplay").innerHTML =
    "Score after " +
    roundsCounter +
    " games out of 5 is YOU vs COMPUTER: " +
    humanScore +
    "-" +
    computerScore;
}

// Reset game scores back to 0
function resetGame() {
  document.location.reload();
}

// Start game on clicking lets play
function startGame() {
  document.querySelector("#startGame").style.display = "none";
  document.querySelector("#game").style.display = "block";
}
