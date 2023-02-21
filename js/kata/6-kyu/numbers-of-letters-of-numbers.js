/* If we write out the digits of "60" as English words we get "sixzero"; 
the number of letters in "sixzero" is seven. The number of letters in "seven" is five. 
The number of letters in "five" is four. The number of letters in "four" is four: 
we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word 
(instead of the proper name of the number in English). For example, write 12 as "onetwo" 
(instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
Examples

numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"] */

function numbersOfLetters(integer) {
  let stringInt = integer.toString();
  let pathArr = [];
  let arrayOfStringInts = [];
  let writtenNumberArr = [];
  while (stringInt.length > 1) {
    arrayOfStringInts = stringInt.split('');
    writtenNumberArr = arrayOfStringInts.map(writeOutNumber);
    pathArr.push(writtenNumberArr.join(''));
    stringInt = pathArr[pathArr.length - 1].length.toString();
  };
  do {
    pathArr.push(writeOutNumber(stringInt));
    stringInt = pathArr[pathArr.length - 1].length.toString();
  } while (pathArr[pathArr.length - 1] !== writeOutNumber(stringInt));
  return pathArr;
};
function writeOutNumber(stringNumber) {
  switch (stringNumber) {
    case '0':
      return 'zero';
    case '1':
      return 'one';
    case '2':
      return 'two';
    case '3':
      return 'three';
    case '4':
      return 'four';
    case '5':
      return 'five';
    case '6':
      return 'six';
    case '7':
      return 'seven';
    case '8':
      return 'eight';
    case '9':
      return 'nine';
  };
}
numbersOfLetters(11);
