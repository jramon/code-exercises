/*
    Given an integer numRows, return the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

    Example
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

const pascalTriangle = function(numRows) {
    // firs pascal row is always this:
    const pascal = [[1]]
    // generate for our target numRows, excluding the first row, so i = 1
    for(let i = 1; i < numRows; i++) {
        const newRow = [1]; // start our now row definition
        let prev = pascal[i - 1]; // needed to calc the next row

        // build next row, same size as the previous one less the 1's on the sides
        for(let rowIndex = 0; rowIndex < prev.length; rowIndex++) {
            // as long as we have both numbers above our target, 
            // prev[rowIndex] is always present because we start from the same index 
            // so if(prev[rowIndex] && prev[rowIndex + 1])
            if(prev[rowIndex + 1]) {
                // sum the two numbers above our target
                let n = prev[rowIndex] + prev[rowIndex + 1];

                newRow.push(n);
            } 
        }
        // extreme right 1 is always present
        newRow.push(1);
        // apend new row to our triangle
        pascal.push(newRow);
    }

    return pascal;
}

console.log(pascalTriangle(6));