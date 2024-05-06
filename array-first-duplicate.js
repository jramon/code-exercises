const all = ['ramon', 'bar', 'baz', 'foo', 'quz', 'bar'];

const findRepeated = (arr) => {
    let repeated;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            repeated = arr[i] === arr[j] ? arr[j] : undefined;

            if(repeated) {
                return j
            }
        }
    }
};

console.log(findRepeated(all));

