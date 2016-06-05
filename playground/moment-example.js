var moment = require('moment');

var now = moment();

console.log(now.unix() + " " + now.format());