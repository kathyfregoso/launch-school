function greet(lang) {
  switch (lang) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    case 'fr': return 'Salut!';
    case 'MX': return '¿Qué onda?';
    case 'ES': return '¡Buenas!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
};

function extractLanguage(locale) {
  return locale.slice(0,2);
}; // 'es' 'en'

function extractRegion(locale) {
  return locale.slice(3,5); 
}; // 'US' 'MX'

function localGreet(locale) {
  let region = extractRegion(locale);
  let language = extractLanguage(locale);

  if (extractLanguage(locale) === "en" || 
  extractLanguage(locale) === "es") {
    return greet(region);
  } else {
    return greet(language);
  }
};

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('en_MX.UTF-8')); // '¿Qué onda?'
console.log(localGreet('en_ES.UTF-8')); // '¡Buenas!'
console.log(localGreet('de_DE.UTF-8')); // 'Hallo!'
