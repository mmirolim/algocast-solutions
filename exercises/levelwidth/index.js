// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let lvls = [1]
    let arr = [root]

    let counter = root.children.length + 1
    lvls.push(root.children.length)
    
    while (arr.length) {
	if (counter == 0) {
	    counter = arr.length
	    lvls.push(counter)	    
	}
	
	let node = arr.shift()
	counter--
	arr.push(...node.children)
    }

    return lvls
}

module.exports = levelWidth;
