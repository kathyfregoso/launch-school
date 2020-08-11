function extractRegion(locale) {
  return locale.slice(3,5); // returns new string without mutating original string
}

console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));

// ALTERNATIVE: 
// str.split('.')[0].split('_')[1]
// splits the locale str twice:
// 1. split('.')[0] -> ['en_US']
// 2. split('_')[1] -> ['US']

// 2nd ALTERNATIVE:
// local.substring(3,5) 