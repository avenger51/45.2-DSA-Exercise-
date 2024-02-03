class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (val === currentNode.val) {
        return this;
      }

      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    function insertNode(node, val) {
      if (!node) {
        return new Node(val);
      }

      if (val < node.val) {
        node.left = insertNode(node.left, val);
      } else if (val > node.val) {
        node.right = insertNode(node.right, val);
      }

      return node;
    }

    this.root = insertNode(this.root, val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) {
        return currentNode;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!currentNode) {
      return undefined;
    }

    if (val === currentNode.val) {
      return currentNode;
    } else if (val < currentNode.val) {
      return this.findRecursively(val, currentNode.left);
    } else {
      return this.findRecursively(val, currentNode.right);
    }
  }

  /** dfsPreOrder(): Traverse the tree using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visitedNodes = []) {
    if (node) {
      visitedNodes.push(node.val);
      this.dfsPreOrder(node.left, visitedNodes);
      this.dfsPreOrder(node.right, visitedNodes);
    }

    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the tree using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visitedNodes = []) {
    if (node) {
      this.dfsInOrder(node.left, visitedNodes);
      visitedNodes.push(node.val);
      this.dfsInOrder(node.right, visitedNodes);
    }

    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the tree using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visitedNodes = []) {
    if (node) {
      this.dfsPostOrder(node.left, visitedNodes);
      this.dfsPostOrder(node.right, visitedNodes);
      visitedNodes.push(node.val);
    }

    return visitedNodes;
  }

  /** bfs(): Traverse the tree using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visitedNodes = [];
    const queue = [];

    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const currentNode = queue.shift();
      visitedNodes.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return visitedNodes;
  }
}


  /** Further Study!
   * Sorry, I think the previous ones is more than enough for today...
   * EDIT: for whatever reason, jest checks the below despite being commented out
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

//  remove(val) {
//
//  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

//  isBalanced() {
//
//  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

//  findSecondHighest() {
//    
//  }
//}

module.exports = BinarySearchTree;
