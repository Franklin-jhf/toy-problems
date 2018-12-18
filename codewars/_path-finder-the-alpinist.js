// Task
// You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of location altitudes (ascending or descending).

// Location altitude is defined as an integer number (0-9).

// Path Finder Series:
// #1: can you reach the exit?
// #2: shortest path
// #3: the Alpinist
// #4: where are you?
// #5: there's someone here

// recursive inefficient solution
function pathFinder(ar) {
    const area = ar.split(/\n/)

    const EDGE = area.length - 1

    const getAlt = pos => area[pos[0]][pos[1]]
    const isEqual = (a, b) => a[0] === b[0] && a[1] === b[1]

    const getNextNodes = (node, explored) => {
        const [x, y] = node
        const adjacent = [[1, 0], [-1, 0], [0, -1], [0, 1]]

        return adjacent
            .map(([a, b]) => [x + a, y + b])
            .filter(coord => coord.every(i => (i <= EDGE && i >= 0) && explored.every(e => !isEqual(coord, e))))
    }

    const getPath = (pos = [0, 0], climbRounds = 0, exploredNodes = [], prevAlt) => {
        const currAlt = getAlt(pos)
        const climbed = (prevAlt ? Math.abs(prevAlt - currAlt) : 0) + climbRounds

        if (isEqual(pos, [EDGE, EDGE])) return climbed

        const explored = [...exploredNodes, pos]
        const nextNodes = getNextNodes(pos, explored)
        if (!nextNodes.length) return NaN

        const pathLengths = nextNodes.map(n => getPath(n, climbed, explored, currAlt)).filter(n => !Number.isNaN(n))
        return Math.min(...pathLengths)
    }

    return getPath()
}

// improved solution using modified version of the A* algorithm

function pathFinder(ar) {
    if (ar.length === 1) return 0

    const AREA = ar.split(/\n/),
        EDGE = AREA.length - 1,
        climbedKey = {},
        queue = [[0, 0, 0]], // [climbed, xCoord, yCoord]
        visited = new Set()

    const isValidAndUnvisited = (x, y) =>
        [x, y].every(i => 0 <= i && i <= EDGE) && !visited.has(`${x}:${y}`)

    while (queue.length) {
        queue.sort((a, b) => a[0] - b[0]) // prioritize travel on shorter paths
        let [climbed, x, y] = queue.shift()
        visited.add(`${x}:${y}`)
        for (let [nextX, nextY] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            let adjX = x + nextX, adjY = y + nextY
            if (isValidAndUnvisited(adjX, adjY)) {
                let totalClimbed = Math.abs(AREA[x][y] - AREA[adjX][adjY]) + climbed
                if (totalClimbed >= climbedKey[`${adjX}:${adjY}`]) continue
                climbedKey[`${adjX}:${adjY}`] = totalClimbed
                queue.push([totalClimbed, adjX, adjY])
            }
        }
    }

    return climbedKey[`${EDGE}:${EDGE}`]
}
