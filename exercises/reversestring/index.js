// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let rev = '';

    for (let chr of str) {
	rev = chr + rev
    }
    return rev
    // str.split("").reverse().join("")
    // or str.split("").reduce((acc, cur) => cur + acc)
}

reverse('secret');

module.exports = reverse;
