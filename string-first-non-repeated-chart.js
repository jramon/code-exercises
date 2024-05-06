// Using a hash map to store the count of each character in the string
function solution(s) {
    const seen = {};
    const nonRepeated = []; // a Set because they don't get repeated lol
    
    for(let i = 0; i < s.length; i++) {
        seen[s.charAt(i)] = (seen[s.charAt(i)] || 0) + 1;
        console.log(seen)
        if(seen[s.charAt(i)] === 1) {
            nonRepeated.push(s.charAt(i));
        } else {
            const toDelete = nonRepeated.indexOf(s.charAt(i));
            
            if(toDelete > -1) { 
                // check for its presence since you might have already removed it, for example during a third instance of the same char
                nonRepeated.splice(toDelete, 1)   
            }
        }

        console.log(nonRepeated)
    }

    return nonRepeated[0] ? nonRepeated[0] : '_';
}

// Using a Map to store the count of each character in the string
function solution(s) {
    const charCount = new Map();
    const nonRepeatedChars = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
        if (charCount.get(char) === 1) {
            nonRepeatedChars.push(char);
        } else {
            const index = nonRepeatedChars.indexOf(char);

            if (index !== -1) {
                nonRepeatedChars.splice(index, 1);
            }
        }
    }

    return nonRepeatedChars.length > 0 ? nonRepeatedChars[0] : '_';
}

console.log(solution("abacabaabacaba")); 