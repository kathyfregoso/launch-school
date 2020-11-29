// 1 - suppose we have the following classes:

class Game {
  play() {
    return "Start the game!";
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

/* 
What would happen if we added a play method to the Bingo class, keeping in mind that there is 
already a method of this name in the Game class from which the Bingo class inherits? Explain your 
answer. What do we call it when we define a method like this?
*/

/* 
The Bingo subclass would get its "own" play method that overrides the method in the Game superclass,
which means that objects created by Bingo will use that method instead of looking up the 
prototype chain to find it in the Game class. When JS finds a method, it calls it immediately.
When a class redefines a method that a superclass defines, this is called "method overriding".
*/

class Game {
  play() {
    return "Start the game!";
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }

  play() {
    return "Eyes down";
  }
}

let bingo = new Bingo();
bingo.play(); // 'Eyes down'.

// 2

class Greeting {
  greet(string) {
    console.log(string);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye");
  }
}
