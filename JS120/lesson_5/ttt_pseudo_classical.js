let readline = require("readline-sync");

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
