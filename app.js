// Rock Paper scissors
let humanScore = 0;
let computerScore = 0;
let roundsCounter = 0;

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
    document.querySelector(".winner").innerHTML = "You win against computer";
    console.log(human + " beats " + computer);
    humanScore++;
  } else if (result == "COMPUTER") {
    document.querySelector(".winner").innerHTML = "You lose against computer";
    console.log(human + " loses " + computer);
    computerScore++;
  } else {
    document.querySelector(".winner").innerHTML = "This round is a draw";
  }

  roundsCounter++;
  updateScores();
  if (roundsCounter >= 5) {
    if (humanScore === computerScore) {
      document.querySelector("#scoreDisplay").innerHTML =
        "Final Scores tied, play an extra round to find out winner";
    } else {
      document.querySelector("#scoreDisplay").style.display = "none";
      document.querySelector("#images").style.display = "none";
      document.querySelector("#reset").style.display = "block";
      document.querySelector("#finalText").innerHTML =
        "Reset to challenge computer again";

      if (humanScore > computerScore) {
        document.querySelector(".winner").innerHTML =
          "You won";
      } else {
        document.querySelector(".winner").innerHTML =
          "You Lose";
      }
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
