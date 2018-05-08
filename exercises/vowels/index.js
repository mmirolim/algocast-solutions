// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

var vset = new Set(['a', 'e','i', 'o','u', 'A', 'E', 'I', 'O','U'])
function vowels(str) {
    
    var counter = 0
    for (let ch of str) {
	if (vset.has(ch)) {
	    counter++
	}
    }

    return counter
}

module.exports = vowels;
