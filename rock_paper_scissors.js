const choices = ["rock", "paper", "scissors"]; //array with three choices

function getComputerChoice() { //picks one of the choices in the array at random
    const randomIndex = Math.floor(Math.random() * choices.length );
    return choices[randomIndex]; 
}


function playRound (playerSelection, computerSelection) {//this plays one round of the game
    let roundResult;
    let playerScore = 0;
    let computerScore = 0;
    
   if (!choices.includes(playerSelection)) {
    roundResult = "Please enter rock, paper or scissors."
   } else if (playerSelection === computerSelection) {
    roundResult = `It's a draw, both players chose ${playerSelection}.`
   } else if (
   (playerSelection === 'rock' && computerSelection === 'scissors') ||
   (playerSelection === 'paper' && computerSelection === 'rock') ||
   (playerSelection === 'scissors' && computerSelection === 'paper')
   ) {
    roundResult = `You win. ${playerSelection} beats ${computerSelection}`;
    playerScore = 1;
   } else {
    roundResult = `You lose. ${computerSelection} beats ${ playerSelection}`;
    computerScore = 1;
   }
   
   return {message: roundResult, playerScore, computerScore};//This will always return an object even if an invalid input is provided

   }
   
   let roundResultMsg;
   const resultBox = document.querySelector('.result');

   let buttons = document.querySelectorAll('.btn');
   buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const playerChoice = event.target.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);
        roundResultMsg = roundResult.message;

        resultBox.textContent = roundResultMsg;
    })
   });