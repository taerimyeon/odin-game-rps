let computerScore = 0
let humanScore = 0
let result
let scores

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissor"]
  const randomChoiceIdx = Math.floor(Math.random() * computerChoice.length)
  return computerChoice[randomChoiceIdx]
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === 'rock' && humanChoice === 'scissor') {
    // Case 1: computerChoice === 'rock', humanChoice === 'scissor' --> computer wins
    computerScore += 1
    return "You lose!"
  } else if (computerChoice === 'rock' && humanChoice === 'paper') {
    // Case 2: computerChoice === 'rock', humanChoice === 'paper' --> human wins
    humanScore += 1
    return "You win!"
  } else if (computerChoice === 'scissor' && humanChoice === 'rock') {
    // Case 3: computerChoice === 'scissor', humanChoice === 'rock' --> human wins
    humanScore += 1
    return "You win!"
  } else if (computerChoice === 'scissor' && humanChoice === 'paper') {
    // Case 4: computerChoice === 'scissor', humanChoice === 'paper' --> computer wins
    computerScore += 1
    return "You lose!"
  } else if (computerChoice === 'paper' && humanChoice === 'rock') {
    // Case 5: computerChoice === 'paper', humanChoice === 'rock' --> computer wins
    computerScore += 1
    return "You lose!"
  } else if (computerChoice === 'paper' && humanChoice === 'scissor') {
    // Case 6: computerChoice === 'paper', humanChoice === 'scissor' --> human wins
    humanScore += 1
    return "You win!"
  } else {
    // Case 7: if computerChoice === humanChoice
    return "Draw!"
  }
}

function handleChoiceButton(event) {
  const targetElement = event.target;
  const choiceString = event.target.id.split("-")[1];
  const spanComputerScore = document.getElementById("computer-score");
  const spanHumanScore = document.getElementById("human-score");
  const spanComputerChoice = document.getElementById("computer-choice");
  const spanHumanChoice = document.getElementById("human-choice");
  const spanGameResult = document.getElementById("game-result");
  targetElement.classList.add("button-clicked");
  setTimeout(() => {
    targetElement.classList.remove("button-clicked");
  }, 200);
  const computerChoice = getComputerChoice();
  spanComputerChoice.textContent = mapChoice(computerChoice);
  spanHumanChoice.textContent = mapChoice(choiceString);
  result = playRound(computerChoice, choiceString);
  console.log(`Result: ${result}\tComputer: ${computerScore}\tHuman: ${humanScore}`)
  spanComputerScore.textContent = computerScore;
  spanHumanScore.textContent = humanScore;
  spanGameResult.textContent = result;
  checkWinner();
}

function handleResetButton() {
  toggleButtonDisplayState();
  computerScore = 0;
  humanScore = 0;
  const spanComputerScore = document.getElementById("computer-score");
  spanComputerScore.textContent = computerScore;
  const spanHumanScore = document.getElementById("human-score");
  spanHumanScore.textContent = humanScore;
  const spanComputerChoice = document.getElementById("computer-choice");
  spanComputerChoice.textContent = "";
  const spanHumanChoice = document.getElementById("human-choice");
  spanHumanChoice.textContent = "";
  const spanGameResult = document.getElementById("game-result");
  spanGameResult.textContent = "";
}

function mapChoice(choice) {
  switch (choice) {
    case "rock":
      return "🪨";
    case "paper":
      return "🗞️";
    case "scissor":
      return "✂️";
  }
}

function toggleButtonDisplayState() {
  const buttonRock = document.getElementById("btn-rock");
  const buttonPaper = document.getElementById("btn-paper");
  const buttonScissor = document.getElementById("btn-scissor");
  const buttonReset = document.getElementById("btn-reset");

  if (buttonReset.classList.contains("hidden")) {
    buttonReset.classList.remove("hidden");
    buttonRock.classList.add("hidden");
    buttonPaper.classList.add("hidden");
    buttonScissor.classList.add("hidden");
  } else {
    buttonReset.classList.add("hidden");
    buttonRock.classList.remove("hidden");
    buttonPaper.classList.remove("hidden");
    buttonScissor.classList.remove("hidden");
  }
}

function checkWinner() {
  if (computerScore === 5 || humanScore === 5) {
    toggleButtonDisplayState();
    const spanGameResult = document.getElementById("game-result");
    if (computerScore > humanScore) {
      spanGameResult.textContent = "Computer wins!";
    } else {
      spanGameResult.textContent = "Human wins!";
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const buttonRock = document.getElementById("btn-rock");
  const buttonPaper = document.getElementById("btn-paper");
  const buttonScissor = document.getElementById("btn-scissor");
  const buttonReset = document.getElementById("btn-reset");

  buttonRock.addEventListener("click", handleChoiceButton);
  buttonPaper.addEventListener("click", handleChoiceButton);
  buttonScissor.addEventListener("click", handleChoiceButton);
  buttonReset.addEventListener("click", handleResetButton)
});
