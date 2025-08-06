'use strict'

const array=['spring', 'it', 'cat'];
let result = [];

for (let stringa of array) {
    let lunghezza = stringa.lenght;

    if (lunghezza < 2) result.push('');
    else if (lunghezza === 2 ) result.push(stringa+stringa);
    else if (lunghezza > 2 ) result.push(stringa[0]+stringa[1]+stringa[stringa.length-1]+stringa[stringa.length]);
};
