function getComputerChoice(){
    let possibleChoices = ["rock", "paper", "scissors"];
    let choice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

    return choice;
}

function playRound(playerSelection, computerSelection){
    
    const choices = ['rock', 'paper', 'scissors'];
    const outcomes = {
      rock: { beats: 'scissors', losesTo: 'paper' },
      paper: { beats: 'rock', losesTo: 'scissors' },
      scissors: { beats: 'paper', losesTo: 'rock' }
    };
  
    // Check if the selections are valid
    if (!choices.includes(playerSelection) || !choices.includes(computerSelection)) {
      return 'Invalid selection. Please choose from: rock, paper, or scissors.';
    }
  
    // Determine the winner based on the selections
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (outcomes[playerSelection].beats === computerSelection) {
      return 'Player wins!';
    } else {
      return 'Computer wins!';
    }
}

function game(){

    let nowinner = true;
    let playerScore = 0;
    let computerScore = 0;
    let drawed = 0;
    let total = 0;

    while(nowinner && total<5){
        const playerSelection = prompt("Please choose from: rock, paper, or scissors.");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if(result == 'Player wins!'){
            playerScore++;
        }else if(result == 'Computer wins!'){
            computerScore++;
        }else{
            drawed++;
        }

        total = drawed + playerScore + computerScore;

        if(playerScore == 3 || computerScore == 3){
            nowinner == false;
        }
    }

    if(computerScore > playerScore){
        console.log("YOU LOST!");
    }else if(playerScore>computerScore){
        console.log("YOU WIN!");
    }else{
        console.log("IT WAS A DRAW!");
    }
}

game();