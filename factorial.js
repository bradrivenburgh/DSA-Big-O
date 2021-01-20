// For example, the factorial of 5:  5 * 4 * 3 * 2 * 1 = 120.
/*
function factorial( n ) {
  // Base Case
  if (n === 0 || n === 1) {
    return 1;
  }

  //Recursive Case
  return factorial (n - 1) * n;
}
*/

function factorial(num) {
  let f = num;

  for (let i = num; i > 1; i--) {
    f *= (i - 1);
  }
  return f;
}

console.log(factorial(5));