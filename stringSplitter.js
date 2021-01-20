/* 
function stringSplitter(array, string, delimiter) {
  // Base Case
  if (string.indexOf(delimiter) === -1) {
    array.push(string);
    return array;
  }

  //Recursive Case
  array.push( string.slice( 0, string.indexOf(delimiter) ) );
  string = string.slice( string.indexOf(delimiter) + 1 );

  return stringSplitter( array, string, delimiter );
}
*/

function stringSplitter(string, delimiter) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      array.push( string.slice( 0, i ) );
      string = string.slice(i + 1);
      i = 0;
    }

    if (i === string.length -1) {
      array.push( string );
    }
  }
  return array;
}

console.log(stringSplitter("10/12/2020", "/"));