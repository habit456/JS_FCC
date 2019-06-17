/*
    romanNumerals
    1     :   'I',
    5     :   'V',
    10    :   'X',
    50    :   'L',
    100   :   'C',
    500   :   'D',
    1000  :   'M'
*/

let processNums = {
    1: function(num) {
        let romOnes = '';
        if (num >= 5 && num !== 9) {
            romOnes = 'V';
            let remainder = num % 5;
            for (let i=0;i<remainder;i++) {
                romOnes += 'I';
            }
        } else if (num === 4) {
            romOnes = 'IV';
        } else if (num === 9) {
            romOnes = 'IX';
        } else {
            for(let i=0;i<num;i++) {
                romOnes += 'I';
            }
        }
        return romOnes;
    },
    2: function(num) {
        let romTens = '';
        if (num >= 50 && num !== 90) {
            romTens = 'L';
            let remainder = num % 50;
            for (let i=0;i<remainder/10;i++) {
                romTens += 'X';
            }
        } else if (num === 40) {
            romTens = 'XL';
        } else if (num === 90) {
            romTens = 'XC';
        } else {
            for(let i=0;i<num/10;i++) {
                romTens += 'X';
            }
        }
        return romTens;
    },
    3: function(num) {
        let romHundreds = '';
        if (num >= 500 && num !== 900) {
            romHundreds = 'D';
            let remainder = num % 500;
            for (let i=0;i<remainder/100;i++) {
                romHundreds += 'C';
            }
        } else if (num === 400) {
            romHundreds = 'CD';
        } else if (num === 900) {
            romHundreds = 'CM';
        } else {
            for(let i=0; i<num/100; i++) {
                romHundreds += 'C';
            }
        }
        return romHundreds;
    },
    4: function(num) {
        let romThousands = '';
        for (let i=0; i<num/1000; i++) {
            romThousands += 'M'
        }
        return romThousands;
    }
};

function convertToRoman(num) {
    num = String(num).split('').reverse();
    let numConvert = [];
    for (let i=0, mult=1; i<num.length; i++) {
        numConvert.push(num[parseInt(i)]*mult);
        mult *= 10;
    }
    for (let i=num.length; i>0; i--) {
        numConvert[i-1] = processNums[i](numConvert[i-1]);
    }
    return numConvert.reverse().join('');
}

console.log(convertToRoman(9));