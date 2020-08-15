function catAge(humanYears) {
  if (humanYears === 0) return 0;
  if (humanYears === 1) return 15;
  if (humanYears === 2) return 24;
  if (humanYears > 2) {
    return (humanYears - 2) * 4 + 24;
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
catAge(15); // 76