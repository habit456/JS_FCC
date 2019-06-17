function alphaSlice(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let indexStart = alphabet.indexOf(str[0]);
  let indexEnd = indexStart + str.length;
  return alphabet.slice(indexStart,indexEnd);
}

function isAlpha(arr) {
  let reg = /[a-z]/;
  return arr.every(a => reg.test(a));
}

function fearNotLetter(str) {

  let slice = alphaSlice(str);
  str = str.toLowerCase().split("");

  if (!isAlpha(str)) {
    return "Input isn't alpha.";
  } 

  for (let letter of slice) {
    if (!str.includes(letter)) {
      return letter;
    } 
  }

  return undefined;
}

console.log(fearNotLetter("aBCDefGIJK"));