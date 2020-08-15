function calculateBMI(heightInCm, weightInKg) {
  let heightInMeters = heightInCm / 100;
  let bmi = weightInKg / heightInMeters**2;
  return bmi.toFixed(2); // the Number.prototype.toString() method returns a string representing a numb rounded to a fixed num of decimals
};

console.log(calculateBMI(180, 80)); // "24.69"
