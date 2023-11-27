/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const seen = {};

    if(s.length !== t.length) {
        return false
    }
    
    for(let i = 0; i < s.length; i++) {
        let si = s.charAt(i)

        seen[si] = ~~seen[si] + 1
    }

    for(let i = 0; i < t.length; i++) {
        let ti = t.charAt(i);

        seen[ti] = ~~seen[ti] - 1

        console.log(seen)

        if(seen[ti] === -1) {
            return false
        }
    }
    
    return true
};

console.log(isAnagram("anagraz", "nagaram"));
