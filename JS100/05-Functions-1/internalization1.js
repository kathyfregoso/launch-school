function greet(lang) {
  switch (lang) {
    case 'en':
      console.log('Hello!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'es':
      console.log('Hola!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!');
      break;
    default:
      console.log('try again');
  }
};

greet('es');

// if we use return statements in switch statement clauses, we don't need to include additional break statements, because return will immediately exit from the function away