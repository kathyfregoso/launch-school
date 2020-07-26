function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      //break;
    case '113':
      console.log('Product2');
      //break;
    case '142':
      console.log('Product3');
      //break;
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// logs all of the following because the break statements are missing
// 'Product2'
// 'Product3'
// 'Product not found!'