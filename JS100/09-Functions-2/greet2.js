function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ", " + recipient + "!");
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!