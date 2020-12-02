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
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[counter] = new Square();
    }
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(
      `  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}  `
    );
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(
      `  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}  `
    );
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(
      `  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}  `
    );
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter((key) => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  // 2nd arg is array of keys from board's grid ie [1,4,7], from which we count
  // the player's markers
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
  }

  getMarker() {
    return this.marker;
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

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();

    this.board.display();

    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
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
    //STUB
    if (this.isWinner(this.human)) {
      console.log(`You won! Congrats.`);
    } else if (this.isWinner(this.computer)) {
      console.log(`The computer wins! You lose!`);
    } else {
      console.log(`It's a tie!`);
    }
  }

  isWinner(player) {
    return TTTGame.WINNING_ROWS.some((row) => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${validChoices.join(", ")}):`;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log(`Sorry, not a valid choice, try again.`);
      console.log("");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = (Math.floor(9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}

let game = new TTTGame();
game.play();
