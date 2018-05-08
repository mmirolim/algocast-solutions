// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // return str.split(' ').
// 	reduce((a,c) => a + ' ' + String.fromCharCode(c.charCodeAt(0) - 32) + c.slice(1), '').trimLeft()
    //
    return str.
	replace(/\w+/g,
		(c) => c.charCodeAt(0) >= 97 ? String.fromCharCode(c.charCodeAt(0) - 32) + c.slice(1) : c)     
}

module.exports = capitalize;
