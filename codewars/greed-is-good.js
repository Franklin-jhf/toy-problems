// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450

function score(dice) {
    const scoreKey = {
        '1t': 1000,
        '2t': 200,
        '3t': 300,
        '4t': 400,
        '5t': 500,
        '6t': 600,
        '1s': 100,
        '5s': 50,
    }

    const hash = dice.reduce((acc, d) => {
        if (acc[d]) acc[d] += 1
        if (!acc[d]) acc[d] = 1
        return acc
    }, {})

    return Object.keys(hash).reduce((acc, diceValue) => {
        let score = 0
        let rolls = hash[diceValue]

        if (rolls >= 3) {
            score += scoreKey[diceValue + 't']
            rolls -= 3
        }

        if (diceValue == 5 || diceValue == 1) {
            while (rolls > 0) {
                score += scoreKey[diceValue + 's']
                rolls--
            }
        }

        return acc + score
    }, 0)
}
