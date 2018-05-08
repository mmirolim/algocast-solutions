// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    for (var i =0; i < str.length/2; i++){
	if (str[i] !== str[str.length-i-1]) {
	    return false
	}
    }
    return true
    // return str.split('').every((el, idx, arr) => {
    // 	return el === arr[arr.length-idx-1]
    // })
    // let rev = str.split('').reduce((a,c) => c + a)
    // return str === rev
}

module.exports = palindrome;
