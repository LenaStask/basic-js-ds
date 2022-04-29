const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.#getList(this.head);
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const node = this.head;
    this.head = node.next;
    return node.value;
  }

  #getList(node) {
    return {
      value: node.value,
      next: node.next ? this.#getList(node.next) : null
    };
  }
}

module.exports = {
  Queue
};
