function playRound(playerSelection, computerSelection) {
    if (
      playerSelection.toLowerCase() == "rock" &&
      computerSelection == "rock"
    ) {
      const string = "It's a draw";
      return string;
    } else if (
      playerSelection.toLowerCase() == "scissors" &&
      computerSelection == "scissors"
    ) {
      const string = "It's a draw";
      return string;
    } else if (
      playerSelection.toLowerCase() == "paper" &&
      computerSelection == "paper"
    ) {
      const string = "It's a draw";
      return string;
    } else if (
      playerSelection.toLowerCase() == "rock" &&
      computerSelection == "scissors"
    ) {
      const string = "You win! Rock beats Scissors!";
      return string;
    } else if (
      playerSelection.toLowerCase() == "paper" &&
      computerSelection == "rock"
    ) {
      const string = "You win! Paper beats Rock!";
      return string;
    } else if (
      playerSelection.toLowerCase() == "scissors" &&
      computerSelection == "paper"
    ) {
      const string = "You win! Scissors beats Paper!";
      return string;
    } else if (
      playerSelection.toLowerCase() == "rock" &&
      computerSelection == "paper"
    ) {
      const string = "You lose! Paper beats Rock!";
      return string;
    } else if (
      playerSelection.toLowerCase() == "paper" &&
      computerSelection == "scissors"
    ) {
      const string = "You lose! Scissors beats paper!";
      return string;
    } else if (
      playerSelection.toLowerCase() == "scissors" &&
      computerSelection == "rock"
    ) {
      const string = "You lose! Rock beats Scissors!";
      return string;
    }
  }


  function game() {
    let ps = 0,
      cs = 0;
    while (ps <= 5 || cs <= 5) {
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
    }

    if (cs > ps) {
      const string = "You have lost more times :(";
      return string;
    } else {
      const string = "You have won most times!";
      return string;
    }
  }
let final = game();
console.log(final);