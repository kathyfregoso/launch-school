/* eslint-disable max-lines-per-function, max-statements */
const readline = require("readline-sync");
const shuffle = require("shuffle-array");

class Card {
  static SUIT = ["Hearts", "Diamonds", "Clubs", "Spades"];
  static RANK = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  static CARD_VALUE = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    Jack: 10,
    Queen: 10,
    King: 10,
    Ace: 11,
  };

  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.initializeDeck();
    this.shuffleDeck();
  }

  initializeDeck() {
    Card.SUIT.forEach((suit) => {
      Card.RANK.forEach((rank) => {
        let value = Card.VALUE[rank];
        this.cards.push(new Card(suit, rank, value));
      });
    });
  }

  shuffleDeck() {
    shuffle(this.cards);
  }

  deal() {
    return this.cards.pop();
  }
}

class Participant {
  constructor() {
    this.hand = [];
    this.handValue = 0;
  }

  hit(card) {
    this.addToHand(card);
  }

  isBusted() {
    return this.handValue > 21;
  }

  addToHand(card) {
    this.hand.push(card);
  }

  sumHandValue() {
    let cardValues = this.hand.map((val) => val.value);
    let aces = this.hand.some((val) => val.rank === "Ace");
    this.handValue = cardValues.reduce((acc, curr) => acc + curr);

    if (aces && this.isBusted()) {
      let aceIndex = cardValues.indexOf(11);
      this.handValue = this.splice(aceIndex, 1, 1).reduce(
        (acc, curr) => acc + curr
      );
    }
    return this.handValue;
  }

  resetHand() {
    this.hand = [];
  }

  resetHandValue() {
    this.handValue = 0;
  }
}

class Player extends Participant {
  constructor() {
    super();
    this.dollars = 5;
  }

  zeroDollarsLeft() {
    return this.dollars === 0;
  }

  doublePlayerDollars() {
    return this.dollars === 10;
  }

  awardWinnerDollar(winner) {
    return winner === "Player" ? (this.money += 1) : (this.money -= 1);
  }
}

class Dealer extends Participant {
  constructor() {
    super();
    this.hiddenCard = true;
  }

  hideCard() {
    return this.hiddenCard === true;
  }

  minHitValue() {
    return this.handValue >= 17;
  }
}

class TwentyOneGame {
  constructor() {
    // STUB
    // what state does game need?
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    // STUB
  }

  dealCards() {
    // STUB
  }

  showCards() {
    // STUB
  }

  playerTurn() {
    // STUB
  }

  dealerTurn() {
    // STUB
  }

  displayResult() {
    // STUB
  }

  displayGoodbyeMessage() {
    // STUB
  }
}

let game = new TwentyOneGame();
game.start();
