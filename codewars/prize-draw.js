// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number n. An array of random weights is linked to the firstnames and each n is multiplied by its corresponding weight to get what they call a winning number.

// Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1]

// PAUL -> n = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54 The weight associated with PAUL is 2 so Paul's winning number is 54 * 2 = 108.

// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// #Task:

// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// #Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1] n: 4

// The function should return: PauL

// Note:
// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".

// See Examples Test Cases for more examples.

function rank(st, we, n) {
    if (!st) return 'No participants'
    const stArr = st.split(',')
    if (n > stArr.length) return 'Not enough participants'

    const getSum = str => str.length + str.toLowerCase().split('').reduce((acc, c) => acc + c.charCodeAt(0) - 96, 0)
    const weightedScores = stArr.map((name, i) => getSum(name) * we[i])

    const sortedArr = stArr.slice()
    sortedArr.sort((a, b) => {
        const diff = weightedScores[stArr.indexOf(b)] - weightedScores[stArr.indexOf(a)]
        if (diff === 0) return [a, b].sort()[0] === b
        return diff
    })

    return sortedArr[n - 1]
}
