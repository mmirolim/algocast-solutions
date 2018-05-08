// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n, m = [], val = 0, x = 0, y = 0) {
    // base case
    if ( m && m.length > 0 && val >= m.length * m.length) {
	return m
    }

    // init matrix
    if (m.length == 0) {
	for (var j = 0; j < n; j++) {
	    let line = []
	    for (var i = 0; i < n; i++) {
		line.push(0)
	    }
	    m.push(line)
	}
    }

    for (var i = x; i < n; i++) {
	val += 1
	m[y][i] = val
    }
    for (var j = x+1; j < n; j++) {
	val += 1
	m[j][n-1] = val
    }
    for (var i = n-2; i >= x; i--) {
	val += 1
	m[n-1][i] = val
    }
    for (var j = n-2; j > y; j--) {
	val += 1
	m[j][x] = val
    }

    return matrix(n - 1, m, val, x + 1, y + 1)
}

module.exports = matrix;
