// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let dic = str.split('').
	reduce((m, c) => m.has(c) ? m.set(c, m.get(c) + 1): m.set(c, 1), new Map())

    var maxChar = ''
    dic.set(maxChar, -1)
    
    dic.forEach((v, k) => {
	if (v > parseInt(dic.get(maxChar))) {
	    maxChar = k
	}
    })

    return maxChar
}

module.exports = maxChar;
