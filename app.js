// Rock Paper scissors
let humanScore = 0;
let computerScore = 0;
let roundsCounter = 0;;

function game(selection) {  
  gameResult(selection);
}

// Generate computer input
function computerInput() {
  var result_computer = ['ROCK', 'PAPER', 'SCISSORS'][
    Math.floor(Math.random() * 3)
  ];
  return result_computer;
}

// Find Game result based on Human selection
function gameResult(human) {
  document.querySelector('#startGame').style.display= "none";
    let result;
    let computer = computerInput();
  // Compile Computer input
console.log("computer " + computer);
console.log("human " + human)
  // compile Result
  switch (computer) {
    case'ROCK':
      if (human === 'ROCK') {
        result = 'DRAW';
        break;
      } else if (human === 'PAPER') {
        result = 'HUMAN';
        break;
      } else if (human === 'SCISSORS') {
        result = 'COMPUTER';
        break;
      }
    case 'PAPER':
      if (human === 'ROCK') {
        result = 'COMPUTER';
        break;
      } else if (human === 'PAPER') {
        result = 'DRAW';
        break;
      } else if (human === 'SCISSORS') {
        result = 'HUMAN';
        break;
      }

    case 'SCISSORS':
      if (human === 'ROCK') {
        result = 'HUMAN';
        break;
      } else if (human === 'PAPER') {
        result = 'COMPUTER';
        break;
      } else if (human === 'SCISSORS') {
        result = 'DRAW';
        break;
      }
  }
console.log("RESULT " + result)
  if (result == 'HUMAN') {
    document.querySelector('.winner').innerHTML = "YOU WIN AGAINST COMPUTER"
    console.log(human + " beats " + computer)
    humanScore++;
  } else if (result == 'COMPUTER') {
    document.querySelector('.winner').innerHTML = "YOU LOSE AGAINST COMPUTER"
    console.log(human + " loses " + computer)
    computerScore++;
  } else {
    document.querySelector('.winner').innerHTML = "THIS ROUND IS A DRAW"
  }

  roundsCounter++;
  updateScores();
  if(roundsCounter === 5) {
    document.querySelector('#scoreDisplay').style.display = "none";
    document.querySelector('#images').style.display = "none";
    document.querySelector('#reset').style.display = "block";
    document.querySelector('#finalText').innerHTML = "Reset to challenge computer again"
    document.querySelector('.winner').innerHTML = "FINAL SCORE IS PLAYER " + humanScore + " AND COMPUTER " + computerScore;  
  }
}

// Update the scores based on game result
function updateScores() {
  document.querySelector('#scoreDisplay').innerHTML = "Score after " + roundsCounter + " games out of 5 is YOU vs COMPUTER: " +
    humanScore + "-" + computerScore;
}

// Reset game scores back to 0
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsCounter = 0;
  updateScores();
  document.querySelector('#reset').style.display = "none";
  document.querySelector('#scoreDisplay').style.display = "none";
  document.querySelector('.bottom-section').style.display = "none";
  document.querySelector('#startGame').style.display= "block";
}

// Start game on clicking lets play
function startGame() {
    document.querySelector('#startGame').style.display = 'none';
    document.querySelector('#game').style.display = 'block';
}