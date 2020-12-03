let readline = require("readline-sync");

let Square = {
  EMPTY_SQUARE: " ",
  HUMAN_PIECE: "X",
  COMPUTER_PIECE: "O",

  init(marker = Square.EMPTY_SQUARE) {
    this.marker = marker;
    return this;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  toString() {
    return this.marker;
  },

  isUnused() {
    return this.marker === Square.EMPTY_SQUARE;
  },

  getMarker() {
    return this.marker;
  },
};

let Board = {
  init() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[counter] = Object.create(Square).init();
    }
    return this;
  },

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
  },

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  },

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter((key) => this.squares[key].isUnused());
  },

  isFull() {
    return this.unusedSquares().length === 0;
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter((key) => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  },

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  },
};

const PlayerPrototype = {
  initialize(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  },
};

let Human = Object.create(PlayerPrototype);

Human.init = function () {
  return this.initialize(Square.HUMAN_PIECE);
};

let Computer = Object.create(PlayerPrototype);

Computer.init = function () {
  return this.initialize(Square.COMPUTER_PIECE);
};

let TTTGame = {
  WINNING_ROWS: [
    ["1", "2", "3"], // top row
    ["4", "5", "6"], // center row
    ["7", "8", "9"], // bottom row
    ["1", "4", "7"], // left column
    ["2", "5", "8"], // middle column
    ["3", "6", "9"], // right column
    ["1", "5", "9"], // diagonal: top-left to bottom-right
    ["3", "5", "7"], // diagonal: top-right to bottom-left
  ],

  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    return this;
  },

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
  },

  displayWelcomeMessage() {
    console.clear();
    console.log(`Welcome to Tic-Tac-Toe!`);
    console.log("");
  },

  displayGoodbyeMessage() {
    console.log(`Bye, thanks for playing!`);
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log(`You won! Congrats.`);
    } else if (this.isWinner(this.computer)) {
      console.log(`The computer wins! You lose!`);
    } else {
      console.log(`It's a tie!`);
    }
  },

  isWinner(player) {
    return TTTGame.WINNING_ROWS.some((row) => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  },

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
  },

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = (Math.floor(9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  },

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },
};

let game = Object.create(TTTGame).init();
console.log(game);
game.play();
