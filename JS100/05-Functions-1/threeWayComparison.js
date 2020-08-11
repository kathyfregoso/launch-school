function compareByLength(str1,str2) {
  if (str1.length < str2.length) return -1;
  else if (str2.length < str1.length) return 1;
  else return 0;
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));

// this type of comparison is called "three-way comparison", which is often used in sorting algos. to determine the order of the values that are sorted