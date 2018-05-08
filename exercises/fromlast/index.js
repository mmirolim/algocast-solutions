// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.getFirst()
    let delta = list.getFirst()

    while (n > 0) {
	delta = delta.next
	n--
    }

    while (delta.next) {
	slow = slow.next
	delta = delta.next
    }

    return slow
    
    // let last = list.getLast()

    // let node = list.getFirst()

    // while(node.next) {
    // 	let next = node
    // 	for (let i = 0; i < n; i++) {
    // 	    next = next.next
    // 	}

    // 	if (next == last) {
    // 	    return node
    // 	}
    // 	node = node.next
    // }
    
    // return node
}

module.exports = fromLast;
