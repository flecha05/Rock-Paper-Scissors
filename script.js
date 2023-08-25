const container=document.querySelector('.result');
const player=document.querySelector('#player');
const computer=document.querySelector('#computer');
const round=document.querySelector('#round');
const btn=document.querySelectorAll('button');

//Player Choose and Star game
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
    const computerSelection = getComputerChoice();
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

const pageModal=document.querySelector('#win_container')
const close=document.querySelector('#close')
const body=document.querySelector('#bodyT')
//Start Playing
function game(playerSelection){
    point(playRound(playerSelection))
    console.log(playerPoints, computerPoints)
    if (playerPoints==3) {
        result();
    }else if (computerPoints==3) {
       result();
    }
}


//Start new Game
function newGame(){
    playerPoints=0;
    player.textContent=playerPoints;
    computerPoints=0;
    computer.textContent=computerPoints;
    round.textContent="Start Game";
}

close.addEventListener('click',()=>{
    pageModal.classList.remove('show');
    body.classList.remove('positioner')
    newGame();
})

const titleResult=document.querySelector('.titleResult')
const textResult=document.querySelector('.textResult')
function result(){
    pageModal.classList.add("show");
    body.classList.add('positioner')
    textResult.innerHTML="You: "+playerPoints+" Computer: "+computerPoints;
    if (playerPoints==3) {
        titleResult.innerHTML="Congratulations you WIN!!";  
    }else if (computerPoints==3) {
        titleResult.innerHTML="Game Over you Lost";  
    }
}
