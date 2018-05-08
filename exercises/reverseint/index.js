// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var str = n.toString();
    var sign = str[0] === '-' ? '-': ''
    var abs = str
    if (sign == '-') {
	abs = str.slice(1)
    }
    var ret = ''
    for (let chr of abs) {
	ret = chr + ret
    }

    return parseInt(sign + ret)
}

module.exports = reverseInt;
