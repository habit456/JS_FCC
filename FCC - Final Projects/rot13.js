let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function rot13(str) { // LBH QVQ VG!
    str = str.split('')
    let regX = /[a-zA-Z]/
    for (let i=0; i<str.length; i++) {
        if (regX.test(str[i]) && str[i] !== 'M') {
            str[i] = alphabet[((parseInt(str[i],36)+4)%26)-1];
        } else if (str[i] === 'M') {
            str[i] = 'Z';
        }
    }
    return str.join('');
}
