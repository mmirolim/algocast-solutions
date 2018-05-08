// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
	this.data = data
	this.next = next
    }
}

class LinkedList {
    constructor() {
	this.head = null
    }

    insertFirst(val) {
	this.head = new Node(val, this.head)
    }

    getFirst() {
	return this.head
    }

    getLast() {
	let n
	this.walk(function(cur){
	    n = cur
	})
	return n
    }
	
    removeFirst() {
	this.head = this.head ? this.head.next : null
    }

    removeLast() {
	let pr
	this.walk(function(cur,prev) {
	  pr = prev  
	})
	if (pr) {
	    pr.next = null
	} else {
	    // no prev means only head exists
	    this.head = null
	}
    }

    insertLast(val) {
	let last
	this.walk(function(cur,prev) {
	  last = cur
	})
	if (last) {
	    last.next = new Node(val)
	} else {
	    this.head = new Node(val)
	}
    }

    print() {
	let counter = 0
	this.walk(function(cur) {
	    counter++
	    console.log("Counter", counter, "node", cur)
	})
    }
    
    getAt(pos) {
	let nAt = null
	let counter = 0
	this.walk(function(cur) {
	    if (pos == counter) {
		nAt = cur
		// return true to stop walk
		return true
	    }
	    counter++	    
	})

	return nAt
    }

    removeAt(pos) {
	if (pos == 0) {
	    if (this.head) {
		this.head = this.head.next
	    }
	    return
	}

	const prev = this.getAt(pos - 1)
	if (prev) {
	    prev.next = prev.next ? prev.next.next : null
	}
    }

    insertAt(val, pos) {
	if (pos == 0) {
	    this.head = new Node(val,this.head)
	    return
	}

	const prev = this.getAt(pos - 1) || this.getLast()
	prev.next = new Node(val, prev.next)
    }

    forEach(fn) {
	this.walk(fn)
    }

    *[Symbol.iterator]() {
	// TODO for long chaines use prefetching not the whole list
	let cur = this.head
	while (cur) {
	    yield cur
	    cur = cur.next
	}
    }

    
    size() {
	let counter = 0
	this.walk(function() {
	    counter++
	})

	return counter
    }
    // garbage collected
    clear() {
	this.head = null
    }
    
    walk(fn) {
	let cur = this.head
	let prev = null
	while (cur) {
	    if (fn(cur, prev)) {
		return
	    }
	    prev = cur
	    cur = cur.next
	}
    }
    
}

module.exports = { Node, LinkedList };
