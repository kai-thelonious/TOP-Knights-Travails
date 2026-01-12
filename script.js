class Node {
    constructor(position, path = []) {
        this.position = position;
        this.path = path;
    }
}

function knightsMoves(start, end) {
    // Initialize the queue
    let queue = [[start, [start]]];

    // Track visited squares
    // Convert to string for comparison
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        let [currentPos, path] = queue.shift();

        // Check if we reached goal
        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`)
            path.forEach(pos => console.log(pos));
            return path;
        }

        // Explore neighbors 
        let moves = getLegalMoves(currentPos);
        for (let move of moves) {
            if (!visited.has(move.toString())) {
                visited.add(move.toString());
                queue.push([move, [...path, move]]);
            }
        }
    }

}

function getLegalMoves(pos) {
    const [x, y] = pos;
    // All 8 possible "L" shapes a knight can make
    const potentialMoves = [
        [x + 2, y + 1], [x + 2, y - 1],
        [x - 2, y + 1], [x - 2, y - 1],
        [x + 1, y + 2], [x + 1, y - 2],
        [x - 1, y + 2], [x - 1, y - 2]
    ];

    // Filter to keep moves inside the 8x8 board
    return potentialMoves.filter(move => 
        move[0] >= 0 && move[0] <= 7 && 
        move[1] >= 0 && move[1] <= 7
    );
}

knightsMoves([0,0], [7,2])


