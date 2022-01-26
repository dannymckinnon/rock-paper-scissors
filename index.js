// write a function computerPlay that randomly returns rock, paper or scissors
  // make a list of strings
  // generate a random number between 0 and 2
  // return the string at that index

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}


// write a function to play a single round of RPS
  // 2 parameters(case insensitive): player selection and computer selection
  // return a string that declares the winner
// win conditions:
  // rock, scissors
  // paper, rock
  // scissors, paper

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    return `It's a tie, You both chose ${computerSelection}.`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You win, ${playerSelection} beats ${computerSelection}.`;         
  } else {
    return `You lose, ${computerSelection} beats ${playerSelection}.`;
  }
}


// write a game() function to keep track of a 5 round game and reports the winner or loser

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Choose rock, paper, or scissors.');
    
    if (playerSelection.toLowerCase() !== 'rock' &&
      playerSelection.toLowerCase() !== 'paper' &&
      playerSelection.toLowerCase() !== 'scissors') {
        return 'Invalid selection';
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    
    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    } else {
      playerScore++;
      computerScore++;
    }
    console.log(result);
    console.log(`Player score: ${playerScore}  Computer score: ${computerScore}`);
  }

  if (playerScore === computerScore) {
    return 'It\'s a tie';
  } else if (playerScore > computerScore) {
    return `Player wins ${playerScore} to ${computerScore}`;
  } else {
    return `Computer wins ${computerScore} to ${playerScore}`;
  }
}

console.log(game());