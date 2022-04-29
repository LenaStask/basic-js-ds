const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  constructor () {
    this.stack = [];
    return this;
  }

  push(element) {
    this.stack.push(element);
   
  }

  pop() {
    let elem = this.stack.pop();
    return elem;
  }

  peek() {
    return this.stack[this.stack.length-1];
  }
}

module.exports = {
  Stack
};
