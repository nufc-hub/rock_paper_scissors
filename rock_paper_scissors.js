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


function game() {// this plays a five round game of rock, paper, scissors
    let playerScore = 0;// playerScore starts at 0
    let computerScore = 0;//computerScore starts at 0

    for (let i = 1; i < 6; i++) { //this gives us five rounds. It is set to 1 so that roundNumber(variable) always starts at round 1.
        let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();/*this is displayed five times, if the user inputs 
                                                                                 a word from the 'choices' array*/
        let computerSelection = getComputerChoice();
        let roundNumber = `Round ${i}`;//this shows what round we just played
        console.log(roundNumber)
        
        let round;/*this incorporates a function that plays one round of the game, due to the while loop, if an invalid answer is input, 
                    you cant proceed to the next round until a valid input is entered*/
        while (true) {
            round = playRound(playerSelection, computerSelection);
            if (round.message != "Please enter rock, paper or scissors.") {
                break;
            }
            console.log("Please try again.");
            playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        } 
        console.log(round.message);

        playerScore += round.playerScore; //this returns the score to playerScore after each round
        computerScore += round.computerScore; ////this returns the score to playerScore after each round
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);//this shows the score at the end of each round
    }
    
//these are the conditions that take place at the end of the fifth round
    if (playerScore > computerScore) {
        return "You win the game.";
    } else if (playerScore === computerScore) {
        return "You draw the game.";
    } else {
        return "You lose the game.";
    }
}

console.log(game())