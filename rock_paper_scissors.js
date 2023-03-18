const choices = ["rock", "paper", "scissors"]; //array with three choices
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() { //picks one of the choices in the array at random
    const randomIndex = Math.floor(Math.random() * choices.length );
    return choices[randomIndex]; 
}


function playRound (playerSelection, computerSelection) {//this plays one round of the game
    let roundResult;
  
    if (playerSelection === computerSelection) {
        roundResult = `It's a draw, both players chose ${playerSelection}.`
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundResult = `You win. ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    } else {
        roundResult = `You lose. ${computerSelection} beats ${ playerSelection}`;
        computerScore += 1;
    }
   
    return {message: roundResult, playerScore, computerScore};//This will always return an object even if an invalid input is provided
}

function playGame() {// this is to play a full game of RPS
    const resultBox = document.querySelector('.result');
    if (playerScore === 0 && computerScore === 0) {
        resultBox.textContent = 'Let\'s play!';//this is to display a 'let's play' message when the game starts
    }
    const playerScoreBox = document.getElementById('player-score');//these are the html player score
    const computerScoreBox = document.getElementById('computer-score');//and computer score boxes
    const buttons = document.querySelectorAll('.btn')// the html buttons
    let playerChoice;



    buttons.forEach(button => {//Adds DOM manipulation
        button.addEventListener('click', function(event) {
            playerChoice = event.target.textContent.toLowerCase();/* this gets the text content of the clicked button (rock, paper or scissors),
                                                                     converts it to lowercase, and assigns it to the playerChoice variable.*/
            const computerChoice = getComputerChoice();
            const roundResult = playRound(playerChoice, computerChoice);
            const roundResultMsg = roundResult.message;
            resultBox.textContent = roundResultMsg;//shows the round result
            playerScoreBox.textContent = playerScore;// shows player score
            computerScoreBox.textContent = computerScore;// shows computer score

            if (playerScore === 5) {//this triggers game over
                resultBox.textContent = 'Game over. You have won the game!';
                buttons.forEach(button => button.disabled = true);//this disables the RPS buttons 
            } else if (computerScore === 5) {
                resultBox.textContent = 'Game over. You lose. please try again';
                buttons.forEach(button => button.disabled = true);
            }
        })
    });

    const restartGame = document.querySelector('.restartGame');
    restartGame.addEventListener('click', function(){//this restarts the game
        playerScore = 0;
        computerScore = 0;
        playerScoreBox.textContent = playerScore;
        computerScoreBox.textContent = computerScore;
        resultBox.textContent = 'Let\'s play!'
        buttons.forEach(button => button.disabled = false);//this enables the RPS buttons
    });
}

playGame();