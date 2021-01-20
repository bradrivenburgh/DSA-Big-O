// nth Triangular Number
// Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

// function triangularNumber(num) {
//   // Base Case
//   if (num === 0) {
//     return num;
//   }

//   //Recursive Case
//   return num + triangularNumber(num - 1);
// }

/* 
# Function to find triangular number 
def triangular_series( n ): 
    j = 1
    k = 1
      
    # For each iteration increase j  
    # by 1 and add it into k 
    for i in range(1, n + 1): 
        print(k, end = ' ') 
        j = j + 1 # Increasing j by 1 
          
        # Add value of j into k and update k 
        k = k + j  
*/


function triangularNumber(num) {
  let j = 1;
  let k = 1;

  for (let i = 1; i <= num; i++) {
    console.log(k + " ");
    j += 1;
    k += j;
  }
}

console.log(triangularNumber(9));