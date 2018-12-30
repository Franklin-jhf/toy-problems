// A website named "All for Five", sells many products to registered clients that cost all the same (5 dollars, the price is not relevant). Every user receives an alphanumeric id code, like D085. The page tracks all the purchases, that the clients do. For each purchase of a certain client, his/her id user will be registered once.

// You will be given an uncertain number of arrays that contains strings (the id code users). Each array will represent the purchases that the users do in a month. You should find the total number of purchases of the users that have bought in all the given months (the clients that their id code are present in all the arrays). e.g.:

// a1 = ['A042', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042']
// a3 = ['A042', 'A025', 'B004']
// The result will be:

// 'A042'---> 5 times
// 'A025'---> 3 times
// 'B004'---> 3 times
// It may be that not even a single user has purchased in all the months

// a1 = ['A043', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044']
// a3 = ['A041', 'A026', 'B005']
// Even though '0042' is present in two arrays, is not present in all the arrays.

// The function that solves this challenge will be called as:


// The entries of the function and the output for the cases above will be:
// ```python
// a1 = ['A042', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042']
// a3 = ['A042', 'A025', 'B004']
// id_best_users(a1, a2, a3) == [[5, ['A042']], [3, ['A025', 'B004']]]

// a1 = ['A043', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044']
// a3 = ['A041', 'A026', 'B005']
// id_best_users(a1, a2, a3) == []
// As you can see the output will have the total number of purchases in decreasing order. If two users have the same amount of total purchases, they will be sorted by their id user string value.

// More examples will be given in the example tests.

// Features of the Random Tests:

// Low Performance Tests
// maximum amount of users: 200
// maximum number of months: 8
// maximum amount of purchases per month: 100

// High Performance Tests
// maximum amount of users: 90000
// maximum number of months: 12
// maximum amount of purchases per month: 80000
// Enjoy it!!

// inefficient solution
function idBestUsers(...months) {
    const getPurchasesPerUser = month => {
        return month.reduce((acc, user) => {
            if (acc[user]) {
                acc[user]++
            } else {
                acc[user] = 1
            }

            return acc
        }, {})
    }

    const monthlyPurchasesByUser = months.map(month => getPurchasesPerUser(month))

    const monthlyCustomers = monthlyPurchasesByUser.reduce((acc, month, i) => {
        const users = Object.keys(month)
        if (i === 0) return users
        return acc.filter(u => users.includes(u))
    }, [])

    if (!monthlyCustomers.length) return []

    return Object.entries(monthlyCustomers
        .map(c => ([monthlyPurchasesByUser.reduce((acc, month) => month[c] + acc, 0), c]))
        .reduce((acc, [purchases, user]) => {
            if (acc[purchases]) {
                acc[purchases].push(user)
            } else {
                acc[purchases] = [user]
            }

            return acc
        }, {}) )
        .map(([purchases, user]) => [Number(purchases), user.sort()])
        .sort((a, b) => b[0] - a[0])
}

// better solution
function idBestUsers(...months) {
   const customers = {}

    months.forEach((month, i) => {
        month.forEach(customerId => {
            if (!customers[customerId]) customers[customerId] = new Array(months.length).fill(0)
            customers[customerId][i]++
        })
    })

    return Object.entries(Object.entries(customers)
        .filter(([customerId, purchasesByMonth]) => purchasesByMonth.every(Boolean))
        .reduce((acc, [customerId, purchases]) => {
            const purchaseCount = purchases.reduce((acc, c) => acc + c, 0)
            if (!acc[purchaseCount]) acc[purchaseCount] = []
            acc[purchaseCount].push(customerId)
            return acc
        }, {}))
        .sort((a, b) => b[0] - a[0])
        .map(([purchaseCount, customerIds]) => [Number(purchaseCount), customerIds.sort()])
}
