function getMatch(array, pattern) {
  return array.filter((el) => pattern.test(el));
}

console.log(getMatch(['laboratory', 'experiment', 'flab', 'Pans Labyrinth', 'elaborate', 'polar bear'], /x/))