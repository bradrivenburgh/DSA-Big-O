/*
function fibonacci(num ) {
  // Base Case
  if (num <= 1) {
    return [0, 1];
  }

  //Recursive Case
  let sequence = fibonacci(num - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
  return sequence;
}

*/

function fibonacci(num) {

  let first = 0;
  let second = 1;
  let fib = 1;

  console.log(first);
  for (let i = 2; i <= num; i++) {
    fib = first + second;
    first = second;
    second = fib;
    console.log(fib)
  }
  return;
}

console.log( fibonacci( 9 ) );
