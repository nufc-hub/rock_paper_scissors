let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

function getComputerChoice() {
   
    //create three variables//
   //rock, paper, scissors
    
    const randomIndex = Math.floor(Math.random() * 3 ) + 1;
    //getComputerChoice function//
    //this should pick one of these variables then return one of these three variables randomly//
    //function getComputerChoice(var1, var2, var3) {pick this one or this one or this one}//
    let computerOutput;

    switch (randomIndex) {
        case 1:
            computerOutput = rock;
            break;
        case 2:
            computerOutput = paper;
            break;
        case 3:
            computerOutput = scissors;
            break;
    }
    return computerOutput;
}





function playRound (playerSelection, computerSelection) {
    let roundResult;
    let playerScore = 0;
    let computerScore = 0;
   if (playerSelection === rock && computerSelection === scissors) {
    roundResult = "Rock beats scissors, you win!";
    playerScore = 1;
   } else if (playerSelection === paper && computerSelection === rock) {
    roundResult = "Paper beats rock, you win!";
    playerScore = 1;
   } else if (playerSelection === scissors && computerSelection === paper) {
    roundResult = "Scissors beats paper, you win!";
    playerScore = 1
   } else if (playerSelection === rock && computerSelection === rock) {
    return "Rock and rock, you draw.";
   } else if (playerSelection === paper && computerSelection === paper) {
    return "Paper and Paper, you draw.";
   } else if (playerSelection === scissors && computerSelection === scissors) {
    return "Scissors and scissors, you draw.";
   } else if (playerSelection === rock && computerSelection === paper) {
    roundResult = "You lose, paper beats rock";
    computerScore = 1;
   } else if (playerSelection === paper && computerSelection === scissors) {
    roundResult = "You lose, scissors beats paper.";
    computerScore = 1;
   } else if (playerSelection === scissors && computerSelection === rock) {
    roundResult = "You lose, rock beats scissors.";
    computerScore = 1;
   } else {
    return "Error, something went wrong."
   }

   if (playerScore === 1){
    return {
        playerScore: playerScore,
        computerScore: computerScore,
        message: roundResult + " Your score is now " + playerScore + 
        " and the computer score is now " + computerScore + "."
    };
   } else if (computerScore === 1){
    return {
        playerScore: playerScore,
        computerScore: computerScore,
        message: roundResult + " Your score is now " + playerScore + 
        " and the computer score is now " + computerScore + "."
    };
   } else {
    return {
        playerScore: playerScore,
        computerScore: computerScore,
        message: roundResult + " Your score is still " + playerScore + 
        " and the computer score is still " + computerScore + "."
    };
   }
   
}

let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
let computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection))
