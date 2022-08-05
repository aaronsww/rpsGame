function computerPlay() {
  var arr = ["rock", "paper", "scissors"];
  var randomans = arr[Math.floor(Math.random() * arr.length)];
  return randomans;
}
const computerSelection = computerPlay();

rockbtn.addEventListener('click', () => {
  console.log(playRound("rock",computerSelection));
});
paperbtn.addEventListener('click', () => {
  console.log(playRound("paper",computerSelection));
});
scissorbtn.addEventListener('click', () => {
  console.log(playRound("scissors",computerSelection));
});

function playRound(playerSelection, computerSelection) {
    if (
       playerSelection.toLowerCase() == "rock" && 
      computerSelection == "rock"
    ) {
      return "It's a draw";
    } else if (
     playerSelection.toLowerCase() == "scissors" && 
      computerSelection == "scissors"
    ) {
      return "It's a draw";
    } 
     else if (
      playerSelection.toLowerCase() == "paper" && 
      computerSelection == "paper"
    ) {
      return "It's a draw";
    } else if (
      playerSelection.toLowerCase() == "rock" && 
      computerSelection == "scissors"
    ) {
      return "You win! Rock beats Scissors!";
  
    } else if (
       playerSelection.toLowerCase() == "paper" && 
      computerSelection == "rock"
    ) {
      return  "You win! Paper beats Rock!";
      
    } else if (
       playerSelection.toLowerCase() == "scissors" && 
      computerSelection == "paper"
    ) {
      return  "You win! Scissors beats Paper!";
       
    } else if (
      playerSelection.toLowerCase() == "rock" && 
      computerSelection == "paper"
    ) {
      return  "You lose! Paper beats Rock!";
     
    } else if (
       playerSelection.toLowerCase() == "paper" && 
      computerSelection == "scissors"
    ) {
      return "You lose! Scissors beats paper!";
       
    } else if (
     playerSelection.toLowerCase() == "scissors" && 
      computerSelection == "rock"
    ) {
      return "You lose! Rock beats Scissors!";
       
    } 
  }



/*  function game() {
  let ps = 0,
    cs = 0;
  while (ps <=5 || cs <= 5) {
    function computerPlay() {
      var arr = ["rock", "paper", "scissors"];
      var randomans = arr[Math.floor(Math.random() * arr.length)];
      return randomans;
    }
    const computerSelection = computerPlay();
    const playerSelection = prompt(
      "Enter your choice: Rock, Paper or Scissors"
    );
    
    let a = playRound(playerSelection, computerSelection);
    if (
      a == "You win! Rock beats Scissors!" ||
      a == "You win! Paper beats Rock!" ||
      a == "You win! Scissors beats Paper!"
    ) {
      ps++;
    } else if (
      a == "You lose! Rock beats Scissors!" ||
      a == "You lose! Paper beats Rock!" ||
      a == "You lose! Scissors beats Paper!"
    ) {
      cs++;
    }
    else 
    {
      ps++;
      cs++;
    }
  }

  if (cs > ps) {
    return "You have lost more times :(";
    
  } else {
    return "You have won most times!";
     
  }
}
let final = game();
console.log(final);
*/