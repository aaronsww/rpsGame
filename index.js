const result = document.querySelector('#result');

const content = document.createElement('div');
/* content.classList.add('content'); */

result.appendChild(content);

function computerPlay() {
  var arr = ["rock", "paper", "scissors"];
  var randomans = arr[Math.floor(Math.random() * arr.length)];
  return randomans;
} 

rockbtn.addEventListener('click', () => {
  playRound("rock");
});
paperbtn.addEventListener('click', () => {
  playRound("paper");
});
scissorbtn.addEventListener('click', () => {
  playRound("scissors");
});

let ps = 0,
cs = 0;

function playRound(playerSelection) {

  const computerSelection = computerPlay();
    if (
       playerSelection.toLowerCase() == "rock" && 
      computerSelection == "rock"
    ) {
      content.textContent = "It's a draw";
    } else if (
     playerSelection.toLowerCase() == "scissors" && 
      computerSelection == "scissors"
    ) {
      content.textContent = "It's a draw";
    } 
     else if (
      playerSelection.toLowerCase() == "paper" && 
      computerSelection == "paper"
    ) {
      content.textContent = "It's a draw";
    } else if (
      playerSelection.toLowerCase() == "rock" && 
      computerSelection == "scissors"
    ) {
      content.textContent = "You win! Rock beats Scissors!";
      ps++;
    } else if (
       playerSelection.toLowerCase() == "paper" && 
      computerSelection == "rock"
    ) {
      content.textContent =  "You win! Paper beats Rock!";
      ps++;
    } else if (
       playerSelection.toLowerCase() == "scissors" && 
      computerSelection == "paper"
    ) {
      content.textContent =  "You win! Scissors beats Paper!";
      ps++;
    } else if (
      playerSelection.toLowerCase() == "rock" && 
      computerSelection == "paper"
    ) {
      content.textContent =  "You lose! Paper beats Rock!";
      cs++;
    } else if (
       playerSelection.toLowerCase() == "paper" && 
      computerSelection == "scissors"
    ) {
      content.textContent = "You lose! Scissors beats paper!";
      cs++;
    } else if (
     playerSelection.toLowerCase() == "scissors" && 
      computerSelection == "rock"
    ) {
      content.textContent = "You lose! Rock beats Scissors!";
      cs++;
    } 
  }

function game() {
  if (cs > ps) {
    return "You have lost more times :(";
    
  } else {
    return "You have won most times!";
  }
}

let final = game();
console.log(final);
