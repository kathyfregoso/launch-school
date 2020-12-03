let readline = require("readline-sync");

TTTGame.WINNING_ROWS = [
  ["1", "2", "3"], // top row
  ["4", "5", "6"], // center row
  ["7", "8", "9"], // bottom row
  ["1", "4", "7"], // left column
  ["2", "5", "8"], // middle column
  ["3", "6", "9"], // right column
  ["1", "5", "9"], // diagonal: top-left to bottom-right
  ["3", "5", "7"], // diagonal: top-right to bottom-left
];

Square.EMPTY_SQUARE = " ";
Square.HUMAN_PIECE = "X";
Square.COMPUTER_PIECE = "O";

function Square(marker) {
  this.marker = marker || Square.EMPTY_SQUARE;
}

Square.prototype.toString = function () {
  return this.marker;
};

Square.prototype.setMarker = function (marker) {
  this.marker = marker;
};

Square.prototype.isUnused = function () {
  return this.marker === Square.EMPTY_SQUARE;
};

Square.prototype.getMarker = function () {
  return this.marker;
};

function Board(squares = {}) {
  this.squares = squares;

  for (let counter = 1; counter <= 9; counter += 1) {
    this.squares[counter] = new Square();
  }
}

Board.prototype.displayWithClear = function () {
  console.clear();
  console.log("");
  console.log("");
  this.display();
};

Board.prototype.display = function () {
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
};

Board.prototype.markSquareAt = function (key, marker) {
  this.squares[key].setMarker(marker);
};

Board.prototype.isUnusedSquare = function (key) {
  return this.squares[key].isUnused();
};

Board.prototype.unusedSquares = function () {
  let keys = Object.keys(this.squares);
  return keys.filter((key) => this.squares[key].isUnused());
};

Board.prototype.isFull = function () {
  return this.unusedSquares().length === 0;
};

Board.prototype.countMarkersFor = function (player, keys) {
  let markers = keys.filter((key) => {
    return this.squares[key].getMarker() === player.getMarker();
  });

  return markers.length;
};
function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  return this.marker;
};

function Human(marker = Square.HUMAN_PIECE) {
  Player.call(this, marker);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer(marker = Square.COMPUTER_PIECE) {
  Player.call(this, marker);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

function TTTGame(
  board = new Board(),
  human = new Human(),
  computer = new Computer()
) {
  this.board = board;
  this.human = human;
  this.computer = computer;
}

TTTGame.prototype.displayWelcomeMessage = function () {
  console.clear();
  console.log(`Welcome to Tic-Tac-Toe!`);
  console.log("");
};

TTTGame.prototype.displayGoodbyeMessage = function () {
  console.log(`Bye, thanks for playing!`);
};

TTTGame.prototype.displayResults = function () {
  //STUB
  if (this.isWinner(this.human)) {
    console.log(`You won! Congrats.`);
  } else if (this.isWinner(this.computer)) {
    console.log(`The computer wins! You lose!`);
  } else {
    console.log(`It's a tie!`);
  }
};

TTTGame.prototype.isWinner = function (player) {
  return TTTGame.WINNING_ROWS.some((row) => {
    return this.board.countMarkersFor(player, row) === 3;
  });
};

TTTGame.prototype.humanMoves = function () {
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
};

TTTGame.prototype.computerMoves = function () {
  let validChoices = this.board.unusedSquares();
  let choice;

  do {
    choice = (Math.floor(9 * Math.random()) + 1).toString();
  } while (!validChoices.includes(choice));

  this.board.markSquareAt(choice, this.computer.getMarker());
};

TTTGame.prototype.gameOver = function () {
  return this.board.isFull() || this.someoneWon();
};

TTTGame.prototype.someoneWon = function () {
  return this.isWinner(this.human) || this.isWinner(this.computer);
};

TTTGame.prototype.play = function () {
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
};

let game = new TTTGame();
game.play();
