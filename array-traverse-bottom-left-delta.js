
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
            // the usual row update
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