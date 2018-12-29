// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000
// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

var spiralize = function(size) {
    const grid = new Array(size).fill(0).map(_ => new Array(size).fill(0))

    const dirKey = {
        0: [0, 1],
        1: [1, 0],
        2: [0, -1],
        3: [-1, 0],
    }

    const pointer = {
        pos: [0, 0],
        dir: 0, // 0 -> right, 1 -> down, 2 -> left, 3 -> up
        moveForward() {
            this.pos[0] += dirKey[this.dir][0]
            this.pos[1] += dirKey[this.dir][1]
        },
        changeDir() {
            this.dir = (this.dir + 1) % 4
        },
        markPos() {
            grid[this.pos[0]][this.pos[1]] = 1
        },
    }

    const marksPerTurn = (new Array(size).fill(0)).map((_, i) => i < 3 ? size - 1 : (size - 3) - (2 * Math.floor(((i - 3) / 2))))
    if (size % 2 === 0) {
      marksPerTurn[marksPerTurn.length - 1]++
    } else {
      marksPerTurn.push(marksPerTurn[marksPerTurn.length - 1] - 1)
    }

    marksPerTurn.forEach(marks => {
        for (let i = 0; i < marks; i++) {
            pointer.markPos()
            pointer.moveForward()
        }

        pointer.changeDir()
    })

   return grid
}
