// function countingSheep(num) {
//   // Base Case
//   if (num === 0) {
//     return "All sheep jumped over the fence"
//   }

//   //Recursive Case
//   const string = `${num}: Another sheep jumps over the fence \n`;
//   return string + countingSheep(num - 1);
// }

function countingSheep(num) {
  while (num > 0) {
    console.log(num,": Another sheep jumps over the fence");
    num--;
  }
  console.log("All sheep jumped over the fence");
  return;
}

console.log(countingSheep(3));