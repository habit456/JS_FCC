function translatePigLatin(str) {
  let regex1 = /^[aeiou]/ ;
  let regex2 = /[aeiou]/;
  if (regex1.test(str) === true) {
    return str += 'way';
  } else if (regex1.test(str) === false && regex2.test(str) === true) {
    let beg = str.match(/[^aeiou]+/);
    return str.replace(/[^aeiou]+/,'') + beg + 'ay';
  } else {
    return str + 'ay';
  }
}

console.log(translatePigLatin("dsds"))