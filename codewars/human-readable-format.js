// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

//   formatDuration(62)    // returns "1 minute and 2 seconds"
//   formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

function formatDuration (seconds) {

  if (seconds === 0) {return 'now';}
  var time = {'year': 0, 'day': 0, 'hour':0, 'minute':0, 'second':0};
  
  while (seconds / 31536000 >= 1) {
    time['year']++;
    seconds -= 31536000;
  }
  while (seconds / 86400 >= 1) {
    time['day']++;
    seconds -= 86400;
  }
  while (seconds / 3600 >= 1) {
    time['hour']++;
    seconds -= 3600;
  }
  while (seconds / 60 >= 1) {
    time['minute']++;
    seconds -= 60;
  }
  while (seconds >= 1) {
    time['second']++;
    seconds -= 1;
  }
  
  var read = [];
  if (time['year']) {read.push(time['year'] > 1 ? time['year'] + ' years' : '1 year');}
  if (time['day']) {read.push(time['day'] > 1 ? time['day'] + ' days' : '1 day');}
  if (time['hour']) {read.push(time['hour'] > 1 ? time['hour'] + ' hours' : '1 hour');}
  if (time['minute']) {read.push(time['minute'] > 1 ? time['minute'] + ' minutes' : '1 minute');}
  if (time['second']) {read.push(time['second'] > 1 ? time['second'] + ' seconds' : '1 second');}
  
  if (read.length === 2){return read[0] + ' and ' + read[1];};
  if (read.length > 1) {read.splice(read.length-1, 0, 'and' );}
  if (read.length === 1) {return read[0];}

  return read.slice(0, read.length-2).join(', ') + ' and ' + read.slice(read.length-1);  
}
