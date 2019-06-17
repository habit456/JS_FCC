let pairs = [['A','T'],['T','A'],['C','G'],['G','C']];

function pairElement(str) {
  let result = [];
  for (let i=0; i<str.length; i++) {
    for (let j=0; j<pairs.length; j++) {
      if (str[i] === pairs[j][0]) {
        result.push(pairs[j]);
      }
    }
  }
  return result;
}

console.log(pairElement("GCG"));