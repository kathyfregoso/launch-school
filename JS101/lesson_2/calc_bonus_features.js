//TBD: add language functionality!!

const MESSAGES = require("./calculator_messages.json");
const readline = require("readline-sync");

let calcOn = true;
const LANGUAGE = "en";
let num1;
let num2;
let operation;
let output;
let startOver;
let username;

function prompt(message) {
  console.log(`>> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function messages(message, lang = "es") {
  return MESSAGES[lang][message];
}

prompt(messages("welcome", LANGUAGE));
username = readline.question();

prompt(messages("welcome2", LANGUAGE) + username + "!");

while (calcOn) {
  prompt(messages("firstNumber", LANGUAGE));
  num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt(messages("errorNumber", LANGUAGE));
    num1 = readline.question();
  }

  prompt(messages("secondNumber", LANGUAGE));
  num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt(messages("errorNumber", LANGUAGE));
    num2 = readline.question();
  }

  prompt(messages("operation", LANGUAGE));

  prompt(messages("operationChoices", LANGUAGE));

  operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages("errorOperation", LANGUAGE));
    operation = readline.question();
  }

  switch (operation) {
    case "1":
      output = Number(num1) + Number(num2);
      break;
    case "2":
      output = Number(num1) - Number(num2);
      break;
    case "3":
      output = Number(num1) * Number(num2);
      break;
    case "4":
      output = Number(num1) / Number(num2);
      break;
  }

  prompt(messages("result", LANGUAGE) + output);

  prompt(messages("goAgain", LANGUAGE));
  startOver = readline.question();

  if (startOver[0].toLowerCase() !== "y") {
    calcOn = false;
    prompt(messages("goodBye", LANGUAGE));
  }
}
