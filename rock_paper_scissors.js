
function getComputerChoice() {
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';
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

console.log(getComputerChoice())



