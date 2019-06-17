let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function fearNotLetter(str) {
  let startIndex = alphabet.indexOf(str[0]);
  str = str.split('')
  for (let i=0; i<str.length; i++) {
    if (alphabet[i+startIndex] !== str[i]) {
      return alphabet[i+startIndex]
    }
  }
  return undefined;
}

console.log(fearNotLetter("cdegh"));