// Reverse String
// function reverseString(string) {
//   // Base Case
//   if (string.length === 0) {
//     return string;
//   }

//   //Recursive Case
//   return string[string.length - 1] + 
//     reverseString( string.slice( 0, (string.length - 1) ) );
// }

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i]
  }
  return newString;
}

console.log(reverseString("thinkful"));