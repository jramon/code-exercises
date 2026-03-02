/* 
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ]; 
*/

export const reverseMatrix = matrix => {
    const reversed = [];
    const rows = matrix.length;
    const cols = matrix[0].length;

    for(let i = rows - 1; i >= 0; i--) {
        for(let j = cols - 1; j >= 0; j--) {
            console.log(matrix[i][j])
        }
    }

    return reversed;
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(reverseMatrix(matrix))