// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let dicA = stringA.toLowerCase().
	match(/\w/g).reduce((a,c) => a.has(c) ? a.set(c, a.get(c) + 1) : a.set(c,1), new Map());
    let dicB = stringB.toLowerCase().
	match(/\w/g).reduce((a,c) => a.has(c) ? a.set(c, a.get(c) + 1) : a.set(c,1), new Map());

    if (dicA.size !== dicB.size) {
	return false
    }

    for (var [k,v] of dicA.entries()) {
	if (dicB.get(k) !== v) {
	    return false
	}
    }

    return true
}

module.exports = anagrams;
