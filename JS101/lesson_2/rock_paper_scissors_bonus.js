// bonus features:

// ROCK PAPER SCISSORS SPOCK LIZARD RULES:
// scissors > paper
// paper > rock
// rock > lizard
// lizard > spock
// spock > scissors
// scissors > lizard
// lizard > paper
// paper > spock
// spock > rock
// rock > scissors

const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const WIN_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

function prompt(message) {
  console.log(`>> ${message}`);
}

function determineWinner(choice, compChoice) {
  if (WIN_COMBOS[choice].includes(compChoice)) {
    prompt(`${choice} beats ${compChoice}`);
    prompt("Congratulations, you beat the computer!");
  } else if (WIN_COMBOS[compChoice].includes(choice)) {
    prompt(`${compChoice} beats ${choice}`);
    prompt("Too bad, you lost.");
  } else if (choice === compChoice) {
    prompt(`It's a tie!`);
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That choice is invalid, try again.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let compChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, the computer chose ${compChoice}.`);

  determineWinner(choice, compChoice);

  prompt("Do you want to play again? (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") {
    console.clear();
    break;
  }
  console.clear();
}
