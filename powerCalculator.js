// Power Calculator

// function powerCalculator(base, exponent) {
//   // Base Case
//   if (exponent < 0) {
//     return "exponent should be >= 0";
//   }
  
//   if (exponent === 0) {
//     return 1;
//   }

//   //Recursive Case
//   return base * powerCalculator(base, (exponent - 1));
// }

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  }

  let answer = base;
  for (let i = 1; i < exponent; i++) {
    answer = answer * base;
  }
  return answer;
}

console.log(powerCalculator(10, 5));