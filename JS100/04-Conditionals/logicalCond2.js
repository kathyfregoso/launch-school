if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// the console logs "No..." because the first condition is never true
// the logical AND (&&) operator requires both operands to be truthy for it to be true; so the condition will always be false