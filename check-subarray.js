var checkSubarraySum = function(nums, k) {
    let acc = 0;
    let remainders = new Map();
    remainders.set(0, -1);
    
    for(let i = 0; i < nums.length; i++) {
        acc += nums[i];
        acc = acc % k;
            console.log(remainders);
            console.log('Acc before lookup', acc)
        if(remainders.has(acc)) {
                console.log(`i: ${i}, Num: ${nums[i]}, Index: ${i}, Acc: ${acc}`)
                console.log(`${i} - ${remainders.get(acc)}) >= 2`)
            if(i - remainders.get(acc) >= 2) { // 2 = min subarray length
                    console.log(`Conditions met with acc of`, acc)
                return true;
            }
        } else {
            remainders.set(acc, i)
        }
    }
    
    return false
};

// console.log(checkSubarraySum([23,2,4,6,7], 6))
console.log(checkSubarraySum([23,2,6,4,7], 6))