/* 
    Here's the task: you've been given a 2D array consisting of individual cells, each holding a unique integer value. 
    Your goal is to create a function that will traverse this matrix, starting at the bottom-right cell. 
    From there, you'll travel up to the top of the same column, then move left to the next column, and then continue downward from the top of this new column. 
    After reaching the bottom of the column, you again move left and start moving upward. 
    This unique traversal pattern will be performed until all the cells have been visited.
*/

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

/* 
  output:
    [ 12, 8, 4, 3, 7, 11, 10, 6, 2, 1, 5, 9 ]
*/

export const columnTraverse = matrix => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let direction = "UP";
    let currentRowIndex = rows - 1;
    let currentColIndex = cols - 1;
    let index = 0;
    const result = new Array(cols * rows);

    // set moving direction as first criteria
        // set conditon to move to the next column and change direction 
        // make sure currentRowIndex and currentColIndex will provide the correct next result
    // if moving direction has changed, act accordingly :
        // set conditon to move to the next column and change direction
        // make sure currentRowIndex and currentColIndex will provide the correct next result

    for (index; index < rows * cols; index++) {
        result[index] = matrix[currentRowIndex][currentColIndex];
        
        if(direction === "UP") {
            if(currentRowIndex === 0) { 
                currentColIndex = currentColIndex - 1;
                direction = "DOWN"
            } else {
                currentRowIndex = currentRowIndex - 1;
            } 
        } else { // not going up
            if(currentRowIndex === rows - 1) {
                currentColIndex = currentColIndex - 1;
                direction = "UP";
            } else {
                currentRowIndex = currentRowIndex + 1;
            }
        }
    }

    return result;
}

console.log(columnTraverse(matrix))
