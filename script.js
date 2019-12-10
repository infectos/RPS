let playerScore = 0;
let computerScore = 0;
let numbOfGames = 0;
function computerPlay() {
    let turn = Math.floor(Math.random() * 3);
    if (turn == 0) {
        return 'Rock'
    } else if (turn == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            if (computerSelection == 'Rock') {
                return "Rock - Rock. It's a tie!"
            } else if (computerSelection == 'Paper') {
                computerScore++;
                return "Rock - Paper. You've lost!";
            } else {
                playerScore++;
                return "Rock - Scissors. You've won!";
            }
            break;

        case 'Paper':
            if (computerSelection == 'Rock') {
                playerScore++;
                return "Paper - Rock. You've won!"
            } else if (computerSelection == 'Paper') {
                return "Paper - Paper. It's a tie!";
            } else {
                computerScore++;
                return "Paper - Scissors. You've lost!";
            }
            break;

        case 'Scissors':
            if (computerSelection == 'Rock') {
                computerScore++;
                return "Scissors - Rock. You've lost!"
            } else if (computerSelection == 'Paper') {
                playerScore++;
                return "Scissors - Paper. You've won!";
            } else {
                return "Scissors - Scissors. It's a tie!";
            }
            break;

    }

}

function anouncer(nubmer){
    if (nubmer !== 1) {
        return `${nubmer} games have been played already.`;
    } else {
        return `1 game has been played already.`;
    }
}

const btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(button.id);

        const history = document.querySelector('.log');
        history.innerHTML += playRound(button.id, computerPlay());
        history.innerHTML += "<br></br>";

        const playerPoints = document.querySelector('.playerPoints');
        playerPoints.innerHTML = `${playerScore}`;

        const computerPoints = document.querySelector('.computerPoints');
        computerPoints.innerHTML = `${computerScore}`;
        
        numbOfGames++;
        const totalGames = document.querySelector('.totalGames');
        totalGames.textContent = anouncer(numbOfGames);

    })
})

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', (e) => {

    const history = document.querySelector('.log');
    history.innerHTML = "";

    const playerPoints = document.querySelector('.playerPoints');
    playerPoints.innerHTML = `0`;

    const computerPoints = document.querySelector('.computerPoints');
    computerPoints.innerHTML = `0`;

    numbOfGames=0;
    playerScore=0;
    computerScore=0;

    const totalGames = document.querySelector('.totalGames');
    totalGames.textContent = "You have not played yet.";
});