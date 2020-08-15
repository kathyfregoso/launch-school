let initGame = () => ({
    level: 1,
    score: 0
  }); // implicitly return object literal, in order to do this you must add parens before the brackets to make sure JS interprets the statement as an obj. literal
  // without parens, the JS engine interprets brackets as a block statement

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);