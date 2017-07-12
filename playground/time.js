var moment = require('moment');

// var date = moment();
//
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));


//6:01 am no padded hours (06), padded mins (01)
var date = moment();
console.log(date.format('h:mm a'));
