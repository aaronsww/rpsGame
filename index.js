let ps = 0,
cs = 0;

const result = document.querySelector('#result');
const content = document.createElement('div');
result.appendChild(content);
/* content.classList.add('content'); */
const score = document.querySelector('#score');  
const point = document.createElement('div');
score.appendChild(point);
/*
const scorec = document.querySelector('#scorec');  */
const pointc = document.createElement('div');
score.appendChild(pointc); 
/*
const you = document.querySelector('#you'); */
const final = document.querySelector('#finalResult');
const ycon = document.createElement('div');
final.appendChild(ycon);
/*
const comp = document.querySelector('#comp'); */
const ccon = document.createElement('div');
final.appendChild(ccon);


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
    point.textContent = ps+" - "+cs;
    if(ps == 5){
      ycon.textContent = "You have won most times!";
      const reload = document.querySelector('#reload');
      const reclick = document.createElement('button');
      reclick.textContent = "Play Again";
      reclick.style.cssText = 'font-size: 30px;'
      reclick.addEventListener('click', reloadThePage);
      reload.appendChild(reclick);
    }
    else if(cs == 5){
      ccon.textContent = "You have lost more times.";
      const reload = document.querySelector('#reload');
      const reclick = document.createElement('button');
      reclick.textContent = "Play Again";
      reclick.addEventListener('click', reloadThePage);
      reload.appendChild(reclick);
    }
    addHchoice(playerSelection);
    addCchoice(computerSelection);
  }

function reloadThePage(){
    location.reload();
} 
const human = document.querySelector('#humanChoice');
var img1 = document.createElement("img");
img1.src = "images/qmark.png";  
img1.style.cssText = 'height:300; width:auto';    
humanChoice.appendChild(img1);
function addHchoice(playerSelection){
 
  if(playerSelection== "paper")
    img1.src = "images/papers.png";
  else if(playerSelection=="scissors")
    img1.src = "images/scissor.png"
  else
    img1.src = "images/rock.png"
  human.replaceChild(img1,img1);
}
const computer = document.querySelector('#compChoice');
var img = document.createElement("img");
img.src = "images/qmark.png";
img.style.cssText = 'height:300; width:auto';    
computer.appendChild(img);
function addCchoice(computerSelection){
  
  if(computerSelection== "paper")
    img.src = "images/papers.png";
  else if(computerSelection=="scissors")
    img.src = "images/scissor.png"
  else
    img.src = "images/rock.png"
computer.replaceChild(img,img);
}

