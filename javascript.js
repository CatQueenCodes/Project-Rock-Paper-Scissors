

const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let compScore = 0;



function computerPlay () {
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result;
}


// step 4 - function that plays 1 round R/P/S, and returns string


startGame();

function playRound (playerSelection, computerSelection) {

  if (playerSelection == "rock") {
      if (computerSelection === "Scissors") {
          playerPoints.textContent = ++playerScore
        roundResults.textContent =  "You win! Rock beats Scissors.";
      }else if(computerSelection === "Paper"){
          computerPoints.textContent = ++compScore
        roundResults.textContent = "You lose! Paper beats rock.";
      }else {
          playerPoints.textContent = ++playerScore
          computerPoints.textContent = ++compScore
        roundResults.textContent = "Tie!"
      }
  }else if (playerSelection === 'paper') {
    if (computerSelection === "Scissors") {
          computerPoints.textContent = ++compScore
        roundResults.textContent = "You lose! Scissors beats Paper!";
      }else if (computerSelection === "Rock") {
          playerPoints.textContent = ++playerScore
        roundResults.textContent = "You win! Paper beats Rock!";
      }else {
          playerPoints.textContent = ++playerScore
          computerPoints.textContent = ++compScore
        roundResults.textContent = "Tie!";
      }
  }else if(playerSelection === "scissors") {
    if (computerSelection === "Rock") {
          computerPoints.textContent = ++compScore
        roundResults.textContent = "You lose! Rock beats Scissors!";
      }else if (computerSelection === "Paper") {
          playerPoints.textContent = ++playerScore
        roundResults.textContent = "You win! Scissors beats Paper!";
      }else {
          playerPoints.textContent = ++playerScore
          computerPoints.textContent = ++compScore
        roundResults.textContent = "Tie!"
      }
  }
 checkWinner();
}

resetGame();

// start game with button selection, playerSelection = button ID




function checkWinner() {
  if (compScore == 5 && playerScore == 5) {
    roundResults.textContent = "The game is a Tie!";
    roundResults.style.color ='blue';
     optionBtn.forEach(button => {
     button.removeEventListener('click', getPlayerChoice);
   });
  }else if (compScore == 5) {
     roundResults.textContent = "You Lost the game to a computer!";
     roundResults.style.color ='red';
      optionBtn.forEach(button => {
      button.removeEventListener('click', getPlayerChoice);
    });
  }else if (playerScore == 5) {
    roundResults.textContent =  "You Win the game!!!!";
    roundResults.style.color ='green';
     optionBtn.forEach(button => {
     button.removeEventListener('click', getPlayerChoice);
   });
  }
}
  
function resetGame() {
  resetBtn.addEventListener('click',() => 
    location.reload());
}
  

function startGame() {
  optionBtn.forEach(button => {
    button.addEventListener('click', getPlayerChoice);
  });
}



function getPlayerChoice(e) {
  playerSelection = (e.target.id)
  playRound(playerSelection, computerPlay());
}

