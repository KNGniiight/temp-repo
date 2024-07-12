// --FS MODULE--
// 2 FLAVORS SYNC AND ASYNC
// YOU SHOULD PREFER ONE OVER THE OTHER 

const { readFileSync, writeFileSync } = require('fs');

//read file sync how to read file and what is the encoding 
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'});
console.log('done with this task');
console.log('starting the next one');





