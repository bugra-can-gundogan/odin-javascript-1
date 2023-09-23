function getComputerChoice(){
    let possibleChoices = ["rock", "paper", "scissors"];
    let choice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

    return choice;
}

function playRound(playerSelection, computerSelection){
    
    document.getElementById('announcement').textContent = `Player selected ${playerSelection}, computer selected ${computerSelection}`

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


const buttons = document.querySelectorAll('.player_selection_btn');

let nowinner = true;
let playerScore = 0;
let computerScore = 0;
let drawed = 0;
let total = 0;

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {

        if(nowinner && total<5){
            const playerSelection = button.getAttribute('selection');
            const computerSelection = getComputerChoice();

            let result = playRound(playerSelection, computerSelection);
            console.log(result);

            if(result == 'Player wins!'){
                playerScore++;
                document.getElementById('announcement2').textContent = "Player wins!";
                document.getElementById('player_score').textContent = playerScore;
            }else if(result == 'Computer wins!'){
                computerScore++;
                document.getElementById('announcement2').textContent = "Computer wins!";
                document.getElementById('computer_score').textContent = computerScore;
            }else{
                drawed++;
                document.getElementById('announcement2').textContent = "No one wins.";
                document.getElementById('drawn_score').textContent = drawed;
            }

            total = drawed + playerScore + computerScore;

            if(playerScore == 3 || computerScore == 3){
                nowinner == false;
            }

            if(nowinner==false || total>=5){
                if(computerScore > playerScore){
                    document.getElementById('announcement2').textContent = "YOU LOST!";
                    console.log("YOU LOST!");
                }else if(playerScore>computerScore){
                    document.getElementById('announcement2').textContent = "YOU WIN!";
                    console.log("YOU WIN!");
                }else{
                    document.getElementById('announcement2').textContent = "IT WAS A DRAW!";
                    console.log("IT WAS A DRAW!");
                }
            }    
        }
    });
  });
