// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let step = ' '.repeat(n).split('')
    for (var i = 0; i < n; i++) {
	console.log(step.fill('#', 0, i+1).join(''))
    }
}

module.exports = steps;
