const readline = require("readline-sync");

const MAX_SCORE = 3;
const MOVES = ["rock", "paper", "scissors", "lizard", "spock"];

const RPSGame = {
  winCombos: {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  },
  human: createHuman(),
  computer: createComputer(),
  score: { human: 0, computer: 0 },
  humanHistory: createHumanHistory(),
  computerHistory: createCompHistory(),

  displayChoices() {
    return Object.keys(this.winCombos)
      .map((word) => this.firstTwoLetters(word))
      .join(", ");
  },

  firstTwoLetters(word) {
    return word[0].toLowerCase() + word.slice(1);
  },

  displayScoreboard() {
    console.log(
      `human score: ${this.score.human}, computer score: ${this.score.computer}`
    );
  },

  displayWelcomeMessage() {
    console.clear();
    console.log(`Welcome to Rock, Paper, Scissors, Spock, Lizard!`);
    console.log(`First to win ${MAX_SCORE} games is the grand winner!\n`);
  },

  displayGoodbyeMessage() {
    console.log(`Goodbye, thanks for playing Rock, Paper, Scissors!`);
  },

  isHumanWinner() {
    return this.winCombos[this.human.move].includes(this.computer.move);
  },

  isComputerWinner() {
    return this.winCombos[this.computer.move].includes(this.human.move);
  },

  gameOver() {
    return this.score.human === MAX_SCORE || this.score.computer === MAX_SCORE;
  },

  playAgain() {
    if (this.gameOver()) {
      this.finalScoreDisplay();
      this.grandWinner();
      let answer;
      while (true) {
        console.log(`Do you want to play again? (y/n)`);
        answer = readline.question().toLowerCase()[0] || "null";
        if (answer === "y") {
          console.clear();
          return true;
        } else if (answer === "n") {
          console.clear();
          return false;
        }
        console.log(`Invalid response.`);
      }
    }
    return true;
  },

  grandWinner() {
    if (this.score.human === MAX_SCORE) {
      console.log(`Congrats, are the grand winner!!\n`);
    } else if (this.score.computer === MAX_SCORE) {
      console.log(`You lost, the computer is the grand winner!!\n`);
    }
    this.resetHistory();
  },

  finalScoreDisplay() {
    console.log(`Final Score:`);
    console.log(`human: ${this.score.human}, computer: ${this.score.computer}`);

    this.humanHistory.displayHistory();
    this.computerHistory.displayHistory();
  },

  displayWinner() {
    console.clear();
    console.log(
      `Your Choice: ${this.human.move}. Computer Choice: ${this.computer.move}.\n`
    );

    if (this.isHumanWinner() && this.score.human !== MAX_SCORE) {
      console.log(`You win this round!\n`);
    } else if (this.isComputerWinner() && this.score.computer !== MAX_SCORE) {
      console.log("Computer wins this round!\n");
    } else if (
      this.score.computer !== MAX_SCORE &&
      this.score.human !== MAX_SCORE
    ) {
      console.log(`It's a tie this round.\n`);
    }
  },

  updateScores() {
    if (this.isHumanWinner()) {
      this.score.human += 1;
    } else if (this.isComputerWinner()) {
      this.score.computer += 1;
    }
  },

  resetScores() {
    if (this.score.human === MAX_SCORE || this.score.computer === MAX_SCORE) {
      this.score.human = 0;
      this.score.computer = 0;
    }
  },

  resetHistory() {
    this.humanHistory = createHumanHistory();
    this.computerHistory = createCompHistory();
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.resetScores();
      this.displayScoreboard();
      this.human.choose();
      this.computer.choose();
      this.updateScores();
      this.humanHistory.incrementHistory();
      this.computerHistory.incrementHistory();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    console.clear();
    this.displayGoodbyeMessage();
  },
};

function createPlayer() {
  return {
    move: null,
  };
}

function createHistory() {
  return {
    // wins, losses, total
    rock: [0, 0, 0],
    paper: [0, 0, 0],
    scissors: [0, 0, 0],
    spock: [0, 0, 0],
    lizard: [0, 0, 0],
  };
}

function createHumanHistory() {
  let history = createHistory();
  let humanHistory = {
    incrementHistory() {
      this[RPSGame.human.move][2] += 1;
      if (RPSGame.isHumanWinner()) this[RPSGame.human.move][0] += 1;
      else if (RPSGame.isComputerWinner()) this[RPSGame.computer.move][1] += 1;
    },

    displayHistory() {
      console.log(
        `\nYour move history: \n\nrock: ${this.rock[0]} wins, ${this.rock[1]} losses.\npaper: ${this.paper[0]} wins, ${this.paper[1]} losses.\nscissors: ${this.scissors[0]} wins, ${this.scissors[1]} losses.\nlizard: ${this.lizard[0]} wins, ${this.lizard[1]} losses.\nspock: ${this.spock[0]} wins, ${this.spock[1]} losses.\n`
      );
    },
  };

  return Object.assign(history, humanHistory);
}

function createCompHistory() {
  let history = createHistory();
  let compHistory = {
    incrementHistory() {
      this[RPSGame.computer.move][2] += 1;
      if (RPSGame.isHumanWinner()) this[RPSGame.computer.move][1] += 1;
      else if (RPSGame.isComputerWinner()) this[RPSGame.computer.move][0] += 1;
    },

    displayHistory() {
      console.log(
        `The computer's move history:\n\nrock: ${this.rock[0]} wins, ${this.rock[1]} losses.\npaper: ${this.paper[0]} wins, ${this.paper[1]} losses.\nscissors: ${this.scissors[0]} wins, ${this.scissors[1]} losses.\nlizard: ${this.lizard[0]} wins, ${this.lizard[1]} losses.\nspock: ${this.spock[0]} wins, ${this.spock[1]} losses.\n`
      );
    },
  };

  return Object.assign(history, compHistory);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log(`Pick 1 (type first 2 chars): ${RPSGame.displayChoices()}`);
        choice = readline.question().toLowerCase().slice(0, 2) || "null";
        if (MOVES.map((key) => key.slice(0, 2)).includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }
      this.move = MOVES.filter((input) => input.slice(0, 2) === choice)[0];
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    checkIfChoiceWins(choice) {
      let winningChoices = RPSGame.computerHistory[choice][0];
      let totalChoices = RPSGame.computerHistory[choice][2];
      let winPercent = winningChoices / totalChoices;
      return winPercent > 0.5;
    },

    choose() {
      let arrOfChoices = [];
      MOVES.forEach((choice) => {
        arrOfChoices.push(choice);
      });
      let randomIndex = Math.floor(Math.random() * MOVES.length);
      this.move = arrOfChoices[randomIndex];
    },
  };
  return Object.assign(playerObject, computerObject);
}

RPSGame.play();
