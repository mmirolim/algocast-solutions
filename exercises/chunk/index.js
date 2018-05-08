// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunks = []
    var i = 0
    while (true) {
	chunks.push(array.slice(i, i+size))
	i += size
	if (i >= array.length) {
	    return chunks
	}
    }
    // let chunked = []

    // for (let ch of array) {
    // 	let last = chunked[chunked.length - 1]

    // 	if (!last || last.length == size) {
    // 	    chunked.push([ch])
    // 	} else {
    // 	    last.push(ch)
    // 	}
    // }

    // return chunked
    // let arr = []
    // var i = 0
    // while (true) {
    // 	let ch = []
    // 	for (var j = 0; j < size; j++) {
    // 	    if (i + j < array.length) {
    // 		ch.push(array[i+j])
    // 	    } else {
    // 		if (ch.length > 0) {
    // 		    arr.push(ch)
    // 		}
    // 		return arr
    // 	    }
    // 	}
    // 	i += size
    // 	arr.push(ch)
    // }
}

module.exports = chunk;
