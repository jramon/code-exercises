function solution(numbers) {
    const result = [];

    for(let i = 0; i <= numbers.length - 3; i++) {
        const left = numbers[i];
        const mid = numbers[i + 1];
        const right = numbers[i + 2];
        
        console.log(left, mid, right)
        
        if((left > mid && mid < right) || (left < mid && mid > right)) {
           result.push(1) 
        } else result.push(0)
    }
    
    return result;
}
