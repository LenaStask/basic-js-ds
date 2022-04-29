const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
      if(!this.rootNode) {
          return null;
        }
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if(node.data > data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right  = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootNode, data);

    function searchWithin(node, data){

      if (!node) {
        return false;  
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
          return searchWithin(node.left, data);
      } else {
          return searchWithin(node.right, data);
      }

    }
   
  }

  find(data ) {
      return searchData(this.rootNode, data);
    function searchData(node, data) {
        if (!node) {
            return null;
        }
        if (node.data === data ) {
            return node;
        }
        if (node.data > data) {
            return searchData(node.left, data);
        } else {
              return searchData(node.right, data);
        }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode (node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right  = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
    
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
    
  }

  max() {
    if(!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};