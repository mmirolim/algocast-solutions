// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(val) {
	this.data = val
	this.children = []
    }

    add(val) {
	this.children.push(new Node(val))
    }

    remove(val) {
	let childs = []
	for (let node of this.children) {
	    if (node.data !== val) {
		childs.push(node)
	    }
	}
	this.children = childs
    }

}

class Tree {
    constructor() {
	this.root = null
    }

    traverseBF(fn) {
	let queue = [this.root]
	
	while (queue.length > 0) {
	    let n = queue.shift()
	    fn(n)
	    queue.push(...n.children)
	}
    }

    traverseDF(fn, node = null) {
	if (!node) {
	    node = this.root
	}

	fn(node)

	for (let n of node.children) {
	    this.traverseDF(fn, n)
	}
    }
}

module.exports = { Tree, Node };
