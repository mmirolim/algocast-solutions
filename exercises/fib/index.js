// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

    // if (n < 2) {
    // 	return n
    // }
    
    // let a = 0
    // let b = 1

    // for (let i = 2; i <= n; i++) {
    // 	res = a + b
    // 	a = b
    // 	b = res
    // }

    // return res
    if (n < 2) {
    	return n
    }
    return fib(n-1) + fib(n-2)
}

function memoize(fn) {
    const cache = {}
    return function (...args) {
	if (cache[args]) {
	    return cache[args];
	}

	const res = fn(...args)

	cache[args] = res
	return res
    }
}

fib = memoize(fib)

module.exports = fib;
