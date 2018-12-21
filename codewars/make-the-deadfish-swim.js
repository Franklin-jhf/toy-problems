// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data){ // super ugly impractical one liner
  return data.split('').filter(l => 'idso'.includes(l)).reduce((acc, l) => l === 'o' ? [acc[0], ...acc.slice(1), acc[0]] : [{'i': acc[0] + 1, 'd': acc[0] - 1, 's': acc[0] ** 2}[l], ...acc.slice(1)], [0]).slice(1)
}
