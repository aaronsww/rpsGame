const result = document.querySelector('#result');
const content = document.createElement('div');
result.appendChild(content);
/* content.classList.add('content'); */
const score = document.querySelector('#score');  
const point = document.createElement('div');
score.appendChild(point);
/*
const scorec = document.querySelector('#scorec'); */
const pointc = document.createElement('div');
score.appendChild(pointc);
/*
const you = document.querySelector('#you'); */
const ycon = document.createElement('div');
score.appendChild(ycon);
/*
const comp = document.querySelector('#comp'); */
const ccon = document.createElement('div');
score.appendChild(ccon);


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
    } else {
      content.textContent = "You lose! Rock beats Scissors!";
      cs++;
    } 
    point.textContent = "Your score="+ps;
    pointc.textContent = "Computer's score="+cs;
    if(ps == 5){
      ycon.textContent = "You have won most times!";
      const reload = document.querySelector('#reload');
      const reclick = document.createElement('button');
      reclick.textContent = "Play Again";
      reclick.addEventListener('click', reloadThePage);
      reload.appendChild(reclick);
    }
    else if(cs == 5){
      ccon.textContent = "You have lost more times :(";
      const reload = document.querySelector('#reload');
      const reclick = document.createElement('button');
      reclick.textContent = "Play Again";
      reclick.addEventListener('click', reloadThePage);
      reload.appendChild(reclick);
    }
  }

function reloadThePage(){
    location.reload();
} 


/* function game() {
  if (cs == 5) {
    return "You have lost more times :(";
    
  } else if(ps == 5){
    return "You have won most times!";
  }
} 

let final = game();
console.log(final);
*/