const userRock = document.querySelector('#rock');
const userPaper = document.querySelector('#paper');
const userScissors = document.querySelector('#scissors');
const resultRound = document.getElementById('result');
const userChoice = document.querySelector('#user_choice');
const computerChoice = document.getElementById('computer_choice');
const reset = document.getElementById('reset');
const userScoreDisplay = document.querySelector('#userScore');
const computerScoreDisplay = document.querySelector('#computerScore');

let humanScore = 0;
let computerScore = 0;

userRock.onclick = () => getHumanChoice('Rock');
userPaper.onclick = () => getHumanChoice('Paper');
userScissors.onclick = () =>getHumanChoice('Scissors');
reset.onclick = () =>resetGame();

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
   
    if(choice === 1){
        computerChoice.innerText = 'Computer choose: Rock';
        return 'rock'
    }
    else if(choice === 2){
        computerChoice.innerText = 'Computer choose: Paper';
        return 'paper'
    }
    else {
        computerChoice.innerText = 'Computer choose: Scissors';
        return 'scissors'
    }

}
function getHumanChoice(choices){
    

    const humanSelection = choices.toLowerCase();
    userChoice.innerText = "You choose: "+choices;    
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection, humanScore, computerScore);

    humanScore = result.humanScore;
    computerScore = result.computerScore;
    userScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;
    return 
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice === computerChoice) {
        console.log('It is a tie!');
        resultRound.innerText = 'It is a tie!';
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
             humanChoice === 'scissors' && computerChoice === 'paper' ||
             humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win');
        resultRound.innerText = 'You Win!';
        humanScore++;
    }
    else {
        console.log('Computer wins');
        resultRound.innerText = 'Computer Wins!';
        computerScore++;
    }
    console.log('Your score is: ' + humanScore + ' Computer score is: ' + computerScore);

    return { humanScore, computerScore };
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    userChoice.innerText = 'You choose: ';
    computerChoice.innerText = 'Computer choose: ';
    resultRound.textContent = '';
    userScoreDisplay.innerText = '0';
    computerScoreDisplay.innerText = '0';
}

/*function playGame() {
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
*/



/*

const userChoiceDisplay = document.querySelector('.user_choice h3');
const computerChoiceDisplay = document.querySelector('.computer_choice h3');
const resultDisplay = document.querySelector('.result');
const userScoreDisplay = document.querySelector('.score h3:nth-of-type(2)');
const computerScoreDisplay = document.querySelector('.score h3:nth-of-type(3)');

let userScore = 0;
let computerScore = 0;

const choices = ['Rock', 'Paper', 'Scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('Rock'));
document.getElementById('paper').addEventListener('click', () => playGame('Paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('Scissors'));
document.getElementById('reset').addEventListener('click', resetGame);

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    userChoiceDisplay.textContent = `You choose: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer choose: ${computerChoice}`;

    const result = getResult(userChoice, computerChoice);
    resultDisplay.textContent = result;

    updateScores(result);
}

function getResult(user, computer) {
    if (user === computer) {
        return "It's a draw!";
    }
    if (
        (user === 'Rock' && computer === 'Scissors') ||
        (user === 'Paper' && computer === 'Rock') ||
        (user === 'Scissors' && computer === 'Paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function updateScores(result) {
    if (result === "You win!") {
        userScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }

    userScoreDisplay.textContent = `You: ${userScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userChoiceDisplay.textContent = 'You choose: ';
    computerChoiceDisplay.textContent = 'Computer choose: ';
    resultDisplay.textContent = '';
    userScoreDisplay.textContent = 'You: 0';
    computerScoreDisplay.textContent = 'Computer: 0';
}
*/







