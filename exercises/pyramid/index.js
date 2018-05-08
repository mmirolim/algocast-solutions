// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0) {
    if (row == n) {
	return
    }

    pyramid(n, row + 1)
    
    let spaces = ' '.repeat(row)
    
    console.log(spaces + '#'.repeat(2*(n - row) -1) + spaces)
}

function pyramidLoop(n) {
    let layer = ' '.repeat(2*n -1).split('')

    for (var i = 0; i < n; i++) {
	let mdl = layer.length/2
	console.log(layer.fill('#', mdl - i, mdl + i + 1).join(''))
    }
    
}

module.exports = pyramid;
