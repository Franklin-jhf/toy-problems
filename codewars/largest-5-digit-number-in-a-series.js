// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 digits.

// Complete the solution so that it returns the largest five digit number found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

function solution(digits){
  var r = 0;
  for (i = 0; i < digits.length - 4; i++) {
    r = Math.max(r, parseInt(digits.substr(i,5),10));
  }
  return r;
}