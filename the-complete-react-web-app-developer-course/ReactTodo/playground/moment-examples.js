var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00a, -> 0
// January 1st 1970 @ 12:01a, -> 60
// December 31st 1969 @ 11:59a, -> -60

var now = moment();
console.log('Current timestamp: ' + now.unix())

var timestamp = 1488799011;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ HH:MM A'));