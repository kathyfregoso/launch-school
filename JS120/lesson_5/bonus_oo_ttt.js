/* eslint-disable max-lines-per-function, max-statements */

let readline = require("readline-sync");

class Square {
  static EMPTY_SQUARE = " ";
  static HUMAN_PIECE = "X";
  static COMPUTER_PIECE = "O";

  constructor(marker = Square.EMPTY_SQUARE) {
    this.marker = marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.EMPTY_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[counter] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(
      `  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}`
    );
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(
      `  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}`
    );
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(
      `  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}`
    );
    console.log("     |     |");
    console.log("");
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter((key) => this.squares[key].isUnused());
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter((key) => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score += 1;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_PIECE);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_PIECE);
  }
}

// orchestration engine:
class TTTGame {
  static MAX_WINS = 3;
  static WINNING_ROWS = [
    ["1", "2", "3"], // top row
    ["4", "5", "6"], // center row
    ["7", "8", "9"], // bottom row
    ["1", "4", "7"], // left column
    ["2", "5", "8"], // middle column
    ["3", "6", "9"], // right column
    ["1", "5", "9"], // diagonal: top-left to bottom-right
    ["3", "5", "7"], // diagonal: top-right to bottom-left
  ];
  static VALID_ANSWERS = ["y", "yes", "n", "no"];

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.firstPlayer = this.human;
  }

  // bonus feature: play again
  play() {
    this.displayWelcomeMessage();
    this.playMatch();
    this.displayGoodbyeMessage();
  }

  playMatch() {
    console.log(
      `First player to win ${TTTGame.MAX_WINS} games wins the match.`
    );

    while (true) {
      this.playOneGame();
      this.updateMatchScore();
      this.displayScore();

      if (this.matchOver()) break;
      if (!this.playAgain()) break;
      this.firstPlayer = this.togglePlayer(this.firstPlayer);
    }

    this.displayMatchResults();
  }

  playOneGame() {
    let currentPlayer = this.goFirst();
    console.clear();
    this.board.reset();
    this.board.display();

    while (true) {
      this.playerMoves(currentPlayer);
      if (this.gameOver()) break;

      this.board.displayWithClear();
      currentPlayer = this.togglePlayer(currentPlayer);
    }

    this.board.displayWithClear();
    this.displayResults();
  }

  playAgain() {
    let answer;

    while (true) {
      answer = readline.question("Play again (y/n)?").toLowerCase().trim();
      if (TTTGame.VALID_ANSWERS.includes(answer)) break;

      console.log("Sorry, not a valid choice.");
      console.log("");
    }

    console.clear();
    return answer[0] === "y";
  }

  displayWelcomeMessage() {
    console.clear();
    console.log(`Welcome to Tic-Tac-Toe!`);
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log(`Bye, thanks for playing!`);
  }

  displayResults() {
    if (this.isRoundWinner(this.human)) {
      console.log(`You won! Congrats.`);
    } else if (this.isRoundWinner(this.computer)) {
      console.log(`The computer wins! You lose!`);
    } else {
      console.log(`It's a tie!`);
    }
  }

  displayScore() {
    // match score
    console.log("");
    let human = this.human.getScore();
    let computer = this.computer.getScore();
    console.log(`You: ${human} || Computer: ${computer}`);
    console.log("");
  }

  displayMatchResults() {
    if (this.human.getScore() > this.computer.getScore()) {
      console.log("");
      console.log(`Congrats, you are the GRAND WINNER!`);
      console.log("");
    } else if (this.human.getScore() < this.computer.getScore()) {
      console.log("");
      console.log(`THE COMPUTER IS THE GRAND WINNER!!`);
      console.log("");
    }
  }

  togglePlayer(player) {
    return player === this.human ? this.computer : this.human;
  }

  playerMoves(currentPlayer) {
    if (currentPlayer === this.human) {
      this.humanMoves();
    } else {
      this.computerMoves();
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = TTTGame.joinOr(validChoices, ", ", "or");
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log(`Sorry, not a valid choice, try again.`);
      console.log("");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = this.offenseComputerMove();
    if (!choice) {
      choice = this.defensiveComputerMove();
    }

    if (!choice) {
      choice = this.pickMiddleSquare();
    }

    if (!choice) {
      choice = this.randomSquareChoice();
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  defensiveComputerMove() {
    return this.findNextSquare(this.human);
  }

  offenseComputerMove() {
    return this.findNextSquare(this.computer);
  }

  findNextSquare(player) {
    for (let index = 0; index < TTTGame.WINNING_ROWS.length; ++index) {
      let line = TTTGame.WINNING_ROWS[index];
      let square = this.nextSquare(line, player);
      if (square) return square;
    }
    return null;
  }

  nextSquare(line, player) {
    if (this.board.countMarkersFor(player, line) === 2) {
      let index = line.findIndex((key) => this.board.isUnusedSquare(key));
      if (index >= 0) return line[index];
    }

    return null;
  }

  pickMiddleSquare() {
    if (this.board.isUnusedSquare("5")) {
      return "5";
    } else {
      return null;
    }
  }

  randomSquareChoice() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = (Math.floor(9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  goFirst() {
    let answer;

    while (true) {
      answer = readline
        .question("Would you like to go first? (y/n)")
        .toLowerCase()
        .trim();
      if (TTTGame.VALID_ANSWERS.includes(answer)) break;

      console.log("Sorry, not a valid choice.");
      console.log("");
    }

    return answer[0] === "y" ? this.human : this.computer;
  }

  someoneWon() {
    return this.isRoundWinner(this.human) || this.isRoundWinner(this.computer);
  }

  isRoundWinner(player) {
    return TTTGame.WINNING_ROWS.some((row) => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  matchOver() {
    return this.isMatchWinner(this.human) || this.isMatchWinner(this.computer);
  }

  isMatchWinner(player) {
    return player.getScore() >= TTTGame.MAX_WINS;
  }

  updateMatchScore() {
    if (this.isRoundWinner(this.human)) {
      this.human.incrementScore();
    } else if (this.isRoundWinner(this.computer)) {
      this.computer.incrementScore();
    }
  }

  static joinOr(choices, punctuate, delimiter) {
    let allButLastChoice = choices.slice(0, choices.length - 1).join(punctuate);

    if (choices.length > 1) {
      return `Choose a square (${allButLastChoice}${punctuate}${delimiter} ${
        choices[choices.length - 1]
      }):`;
    } else if (choices.length === 2) {
      return `Choose a square (${choices[0]} ${delimiter} ${choices[1]}):`;
    } else {
      return `Choose a square ${choices}:`;
    }
  }
}

let game = new TTTGame();
game.play();
