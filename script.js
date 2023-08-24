const container=document.querySelector('.result');
const player=document.querySelector('#player');
const computer=document.querySelector('#computer');
const round=document.querySelector('#round');
const btn=document.querySelectorAll('button');

btn.forEach((btn) => {
      btn.addEventListener('click',function (e){
       const playerSelection=btn.className;
       game(playerSelection)
       
    })
});

//Function Computer Choice what to play
function getComputerChoice(){
    let array = [ "rock", "papper", "scissors"]
    return array[Math.floor(Math.random()*3)];
}   
//We play a round
function playRound(playerSelection) {
    const computerSelection = 'scissors';
    if(playerSelection == computerSelection){
        return 'Draw';
    }else if ((playerSelection == "rock" && computerSelection == "scissors")||(playerSelection == "papper" && computerSelection == "rock")
    ||(playerSelection == "scissors" && computerSelection == "papper")) {
        return 'Win'
    }else{
        return 'Lose'
    }
}
//Count Points
var playerPoints=0;
var computerPoints=0
function point(result){
    round.textContent=result;
    if (result=='Win') {
        playerPoints++;
        player.textContent=playerPoints;
    } else  if (result==="Lose") {
        computerPoints++
        computer.textContent=computerPoints;
   }
   
}

function game(playerSelection){
    point(playRound(playerSelection))
    console.log(playerPoints, computerPoints)
    if (playerPoints==3) {
        alert('YOU WIN');
    }else if (computerPoints==3) {
        alert('YOU LOSE')
    }

}
//point(playRound(playerSelection));
// console.log("Game Over")Rock-Paper-Scissors