const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(num) {
  let result = 0,
      numDigits = [];
  while (num) {
      numDigits.push(num % 10);
      num = Math.floor(num / 10);
  }
//   numDigits = String(num).split("").map((num)=>{
//   return Number(num)
// })

console.log(numDigits)
  for (let index = 0; index < numDigits.length; index++) {
      let n = 0;
      for (let i = numDigits.length - 1; i >= 0; i--) {
          if (i !== index) {
              n = n * 10 + numDigits[i];
          }
      }
      result = Math.max(n, result);
  }
console.log(result)
  return result;
}

module.exports = {
  deleteDigit
};
