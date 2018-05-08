// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(a) {
    for (let i = 0; i < a.length; i++) {
	for (let j = 0; j < (a.length -i -1); j++) {
	    if (a[j] > a[j+1]) {
		[a[j+1], a[j]] = [a[j], a[j+1]]
	    }
	}
    }
    return a
}

function selectionSort(a) {
    for (let i = 0; i < a.length; i++) {
	let min = i
	for (let j = i; j < a.length; j++) {
	    if (a[min] > a[j]) {
		min = j
	    }
	}
	if (min != i) {
	    [a[min], a[i]] = [a[i], a[min]]
	}
    }

    return a
}

function mergeSort(a) {
    if (a.length == 1) {
	return a
    }

    return merge(
	mergeSort(a.slice(0,a.length/2)),
	mergeSort(a.slice(a.length/2, a.length))
    )
}

function merge(left, right) {
    let sorted = []
    let max = left.length + right.length

    let li = 0
    let ri = 0
    for (let i = 0; i < max; i++) {
	if (li >= left.length || ri >= right.length) {
	    break
	}
	
	if (left[li] < right[ri]) {
	    sorted.push(left[li])
	    li++
	} else {
	    sorted.push(right[ri])
	    ri++
	}
    }

    for (let i = li; i < left.length; i++){
	sorted.push(left[i])
    }	

   for (let i = ri; i < right.length; i++){
	sorted.push(right[i])
    }	

    return sorted
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
