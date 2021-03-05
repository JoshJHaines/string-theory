/******************
 * YOUR CODE HERE *
 ******************/

function xify(str){
  newStr = ''
  for (letter of str){
    newStr += 'x'
  }
  return newStr
}

function yellingChars(str){
  newStr = ''
  for (letter of str){
    newStr += letter + '!'
  }
  return newStr
}

function indexedChars(str){
  newStr = ''
  for (i = 0; i < str.length; i++){
    newStr += i + str[i]
  }
  return newStr
}

function numberedChars(str){
  newStr = ''
  for (i = 0; i < str.length; i++){
    newStr += `(${i + 1})` + str[i]
  }
  return newStr
}

function exclaim(str){
  newStr = ''
  for (char of str){
    if (char === "?" ||
    char === "."){
      newStr += "!"
    } else {
      newStr += char
    }
  }
  return newStr
}




 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
