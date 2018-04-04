const replace = require('../index');

let str1 = replace('a123456bcefghi', {
    string: '[]',
    regx: /\d/g,
    type: 'append'
});

console.log(str1); //a1[]2[]3[]4[]5[]6[]bcefghi


let str2 = replace('a123456bcefghi', {
    string: '[]',
    regx: /\d/g,
    type: 'replace'
});

console.log(str2); //a[][][][][][]bcefghi

let str3 = replace('a123456bcefghi', {
    string: '[]',
    regx: /\d/g,
    type: 'prepend'
});

console.log(str3); //a[]1[]2[]3[]4[]5[]6bcefghi