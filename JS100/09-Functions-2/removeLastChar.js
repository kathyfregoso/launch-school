function removeLastChar(str) {
  return str.slice(0, str.length-1); // alt: str.substring(0, str.length-1)
};

console.log(removeLastChar('Amazed'));