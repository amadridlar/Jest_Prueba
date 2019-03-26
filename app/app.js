//Here we test that our functions works propertly
const sum = require('./sum');
const userId = require('./getUserID');
const user = require('./getUser');

console.log(sum(3,2));
console.log(userId());
console.log(user("Johny"));