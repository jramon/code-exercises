function solution(a) {
    const n = a.length;
    
    for(let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1;
        
        for(let i = first; i < last; i++) {
            const offset = i - first;
            const top = a[first][i];
            
            // Move left to top
            a[first][i] = a[last - offset][first];
            
            // Move bottom to left
            a[last - offset][first] = a[last][last - offset];
            
            // Move right to bottom
            a[last][last - offset] = a[i][last];
            
            // Move top to right
            a[i][last] = top;
        }
    }

    console.log(a)
    
    return a;
}

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

solution(a)