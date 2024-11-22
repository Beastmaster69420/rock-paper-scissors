const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE= "SCISSORS";
const WINNER = "Player Wins"
const LOSER = "Computer Wins";
const DRAW = "Draw";

let gameStarted = false;

const getChoice= () =>{
    const SELECTION = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`,'').toUpperCase();
    if (SELECTION !== ROCK && SELECTION !== PAPER && SELECTION !== SCISSORS){
        alert(`Invalid choice!.We chose ${DEFAULT_CHOICE} instead`);
        return DEFAULT_CHOICE;
    }
    return SELECTION;
}

const getComputerChoice = () =>{
    const random = Math.random();
    if(random < 0.32){
        return PAPER;
    }else if (random < 0.69){
        return ROCK;
    } else {
        return SCISSORS;
    }

}

const getWinner = (cChoice,pChoice) =>{
    if (cChoice === pChoice){
        return DRAW;
    }else if (pChoice === ROCK && cChoice ===SCISSORS ||pChoice === SCISSORS && cChoice === PAPER ||pChoice === PAPER && cChoice === ROCK ){
        return WINNER;
    }else{
        return LOSER;
    }
}

startGameBtn.addEventListener('click', ()=>{
    if (gameStarted){
        return;
    }
    gameStarted = true;
    console.log('Game starting...');
    const playerChoice = getChoice();
    const computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    Result=getWinner(computerChoice, playerChoice);
    let message;
    if (Result===DRAW){
        message=`Your choice was ${playerChoice} and computer chose ${computerChoice} so it was a draw.`;
    }else if(Result===WINNER) {
        message=`Your choice was ${playerChoice} and computer chose ${computerChoice} so you won.`;
    }else{
        message=`Your choice was ${playerChoice} and computer chose ${computerChoice} so you lost.`;
    }
    alert(message);
    gameStarted=false;
});