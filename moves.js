/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    const count = {}

	for (const m in moves) {
		count[moves[m]] = ~~count[moves[m]] + 1
	}	

	return ~~count['U'] === ~~count['D'] && ~~count['L'] == ~~count['R']
};

console.log(judgeCircle("UD"))

// "UD"
// "LL"
// "RRDD"
// "LDRRLRUULR"