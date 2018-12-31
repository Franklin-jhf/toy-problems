// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine){
    return peopleInLine.reduce((acc, amount) => {
        if (amount === 25) acc[amount]++

        if (amount === 50) {
            if (acc[25] > 0) {
                acc[25]--
                acc[amount]++
            } else {
                acc.possible = false
            }
        }

        if (amount === 100) {
            if (acc[25] > 0 && acc[50] > 0) {
                acc[25]--
                acc[50]--
                acc[100]++
            } else if (acc[25] > 2) {
                acc[25] -= 3
                acc[100]++
            } else {
                acc.possible = false
            }
        }

        return acc
    }, { 25: 0, 50: 0, 100: 0, possible: true })['possible'] ? 'YES' : 'NO'
}
