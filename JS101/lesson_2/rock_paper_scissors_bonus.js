// bonus features:
// TBA: best of 5 (keep score of wins)

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
const VALID_ANSWERS = ["y", "yes", "n", "no"];

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

function shorthandChoice(inputChoice) {
  switch (inputChoice) {
    case "r":
      inputChoice = "rock";
      break;
    case "p":
      inputChoice = "paper";
      break;
    case "sc":
      inputChoice = "scissors";
      break;
    case "sp":
      inputChoice = "spock";
      break;
    case "l":
      inputChoice = "lizard";
      break;
  }
  return inputChoice;
}

while (true) {
  prompt("Choose one option:");
  prompt(
    `${VALID_CHOICES.join(", ")}\n(shorthand: 'r', 'p', 'sc', 'l', or 'sp')`
  );
  let choice = readline.question();
  choice = shorthandChoice(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt(
      `Error, type:\n${VALID_CHOICES.join(
        ", "
      )} \nOR \n'r', 'p', 'sc', 'l', or 'sp'`
    );
    choice = readline.question();
    choice = shorthandChoice(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let compChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, the computer chose ${compChoice}.`);

  determineWinner(choice, compChoice);

  prompt("Do you want to play again? (y/n)?");
  let answer = readline.question().toLowerCase();

  while (!VALID_ANSWERS.includes(answer)) {
    prompt('Please enter "yes" (y) or "no" (n).');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") {
    console.clear();
    break;
  }
  console.clear();
}
