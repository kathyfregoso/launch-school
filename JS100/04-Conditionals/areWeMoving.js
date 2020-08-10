let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// in order of precedence, here is how the isMoving variable is evaluated:
// 1. parens: (speed > 0 || acceleration > 0) is true 
// 2. left (of &&) operand: brakingForce < acceleration is true
// 3. logical AND && operator expression: the console logs true because both operands are truthy 

// BONUS question
//  no, we cannot remove the parentheses, because we needed to override the default precedence between the && and || operators for the logic to work as we expect