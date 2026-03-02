const traverseLibrary = (library) => {
    // requirement states to start from the bottom left item upward, thus row and col assignemt is like this:
    let row = library.length - 1;
    let col = 0; 
    let isGoingUp = true;
    const result = [];

    while(col < library[row].length) { // top condition is the amount of columns
        result.push(library[row][col]); // this runs regardless of the inner conditon because we obviously want to see the whole

        if(isGoingUp) { // the second criteria or condition is the direction, from here on you can do the inner logic...
            row = row - 1;
            // reached the end of the col (from bottom to top)
            if(row === -1) {
                col = col + 1;
                row = 0;
                isGoingUp = false
            }
        } else {
            row = row + 1;
            // reached the end from top to bottom
            if(row === library.length) {
                col = col + 1;
                row = library.length - 1;
                isGoingUp = true;
            }
        }
    }

    return result;
}


function columnTraverseWithDelta(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = rows - 1;
    let col = cols - 1;
    const output = [];
    let index = 0;
    let delta = -1; // delta is always absolute 1 (the size of our movement), in this case starts as negative one because we are moving upwards

    while (index < rows * cols) {
        output[index++] = matrix[row][col];

        // is edge condition 
        if(row + delta < 0 || row + delta === rows) {
            col--; // go left
            delta *= -1; // flip delta
            // notice how we don't update the row when we are in an edge
        } else {
            row += delta;
        }
    }

    return output;
}


const library = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [9, 11, 13, 15]
];

const result = columnTraverseWithDelta(library);
console.log(result);