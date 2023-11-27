/* 
	438. Find All Anagrams in a String

	Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

	Example 1:

	Input: s = "cbaebabacd", p = "abc"
	Output: [0,6]
	Explanation:
	The substring with start index = 0 is "cba", which is an anagram of "abc".
	The substring with start index = 6 is "bac", which is an anagram of "abc".

	Example 2:

	Input: s = "abab", p = "ab"
	Output: [0,1,2]
	Explanation:
	The substring with start index = 0 is "ab", which is an anagram of "ab".
	The substring with start index = 1 is "ba", which is an anagram of "ab".
	The substring with start index = 2 is "ab", which is an anagram of "ab".

	Constraints:

	1 <= s.length, p.length <= 3 * 104
	s and p consist of lowercase English letters.
*/

const findAllAnagrams = function(s, p = "") {
	let i = 0
	let validIndex = 0
	let aux = p.length
	// TODO build string to hashmap helper
	const auxMap = p.split('').reduce((acc, n) => { 
		return { 
			...acc,
			[n]: ~~acc[n] + 1
		} 
	}, {})
	
	const res = []

	while(i < s.length) {
		let total = 0
		let test = s.slice(i, aux + i)
		let testMap = test.split('').reduce((acc, n) => { 
			return { 
				...acc,
				[n]: ~~acc[n] + 1
			} 
		}, {})

		if(!(aux > test.length)) {
			console.log(auxMap, testMap)
			for(t in testMap) {
				console.log(~~auxMap[t], ~~testMap[t])
				total = ~~auxMap[t] - ~~testMap[t] 
			}

			if(total === 0) {
				res.push(i)	
				console.log(res)
			} else {
				total = 0
			}
		}

		i++
	}

	return res
}

console.log(findAllAnagrams("cbaebabacd", "cab"))
// console.log(findAllAnagrams("abab", "ab"))