const template = 'I VERB NOUN.';

let sentence = (verb, noun) => // return keyword can be omitted when there is only 1 statement in the function body, regardless of the num of lines
  template
    .replace('VERB', verb)
    .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

