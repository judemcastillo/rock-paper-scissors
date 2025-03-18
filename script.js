function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
   
    if(choice === 1){
        console.log('Computer choose: rock');
        return 'rock'
    }
    else if(choice === 2){
        console.log('Computer choose: paper');
        return 'paper'
    }
    else {
        console.log('Computer choose: scissors');
        return 'scissors'
    }

}
function getHumanChoice(){
    let humanChoice =  prompt('Enter rock, paper or scissors');
    humanChoice = humanChoice.toLowerCase();
    console.log("You choose: "+humanChoice);
    return humanChoice
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice === computerChoice) {
        console.log('It is a tie');
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
             humanChoice === 'scissors' && computerChoice === 'paper' ||
             humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win');
        humanScore++;
    }
    else {
        console.log('Computer wins');
        computerScore++;
    }
    console.log('Your score is: ' + humanScore + ' Computer score is: ' + computerScore);

    return { humanScore, computerScore };
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection, humanScore, computerScore);
        humanScore = result.humanScore;
        computerScore = result.computerScore;
    }
    console.log('Final Player score is: ' + humanScore);
    console.log('Final Computer score is: ' + computerScore);
    if (humanScore > computerScore) {
        console.log('Human wins');
    }
    else if (humanScore < computerScore) {
        console.log('Computer wins');
    }
    else {
        console.log('It is a tie');
    }
}

playGame();






