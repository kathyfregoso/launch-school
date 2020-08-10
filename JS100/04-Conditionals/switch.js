let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// since there are no break keywords, each case, starting at matching case for the animal variable, will be logged:
// 'neigh'
// 'tweet tweet'
//'*cricket*'