// How many bees are in the beehive?
// bees can be facing UP, DOWN, LEFT, or RIGHT
// bees can share parts of other bees
// Examples
// Ex1

// bee.bee
// .e..e..
// .b..eeb
// Answer: 5

// Ex2
// bee.bee
// e.e.e.e
// eeb.eeb
// Answer: 8

// Notes
// The hive may be empty or null/None/nil/...
// Python: the hive is passed as a list of lists (not a list of strings)

function howManyBees(hiveRows) {
    if (!hiveRows || !hiveRows.length) return 0

    const hiveColumns = hiveRows[0].map((x, i) => hiveRows.map(row => row[i]))

    return hiveRows.concat(hiveColumns).reduce((bees, arr) => {
        const str = arr.join('')
        const beeCount = str.match(/bee/g)
        const eebCount = str.match(/eeb/g)

        return bees + (beeCount ? beeCount.length : 0) + (eebCount ? eebCount.length : 0)
    }, 0)
}
