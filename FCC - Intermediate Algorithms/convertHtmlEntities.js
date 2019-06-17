/*
  html[0] : ampersand
  html[1] : less than
  html[2] : greater than
  html[3] : double quotes
  html[4] : apostrophe
*/

let html = [['&','&amp;'],['<','&lt;'],['>','&gt;'],['"','&quot;'],["'",'&apos;']];

function convertHTML(str) {
  str = str.split('');
  for (let i=0; i<html.length; i++) {
    for (let j=0; j<str.length; j++) {
      str[j] = str[j].replace(html[i][0],html[i][1]);
    }
  }
  return str.join('');
}

console.log(convertHTML('Stuff in "quotation marks"'));