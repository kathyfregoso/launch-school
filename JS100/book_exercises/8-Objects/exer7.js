let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(obj, arrOfKeys) {
  let newObj = {};
  if (arrOfKeys) {
    arrOfKeys.forEach((key) => newObj[key] = obj[key]);
    return newObj;
  } else {
    return Object.assign(newObj, obj);
  }
}

let outputObj = copyObj(objToCopy);

console.log(outputObj);