
// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

// For example:

// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'

// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'

// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'
// If the feeling can be formed once - plus one to the answer.

// If the feeling can be formed several times from different letters - plus one to the answer.

// Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe’.

function countFeelings(string, array) {
  let store = {};
  string.split('').map( x => store[x] = store[x] + 1 || 1 );

  let count = 0;
  array.map( x => {
    let wordMap = {}, arr = [];
    x.split('').map( y => wordMap[y] = wordMap[y] + 1 || 1 );
    Object.entries(wordMap).map( x => arr.push(store[x[0]] / x[1]));

    count += Math.min(...arr) > 0 ? 1 : 0;
  });

  return count > 1 ? count + ' feelings.' 
  : count === 1 ? '1 feeling.'
  : '0 feelings.';
}