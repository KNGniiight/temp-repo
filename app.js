//npm global command
//npm --version 

//local dependancy
//npm i <packagename>

//global dependency
//npm install -g
//sudo npm install -g <packagename>

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const flatItems = _.flattenDeep(items);

console.log(flatItems);