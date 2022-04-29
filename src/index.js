class Queue {
    constructor () {
      this.queue = {};
      this.tail = 0;
      this.head = 0;
  
    }
  
    getUnderlyingList() {
      this.node ={
          value: this.queue[this.head--],
          next : null,
      }
      return this.node;
    }
  
    enqueue(value) {
      this.queue[this.tail++] = value;
    }
  
    dequeue() {
      let elem = this.queue[this.head];
      delete this.queue[this.head++];
      return elem;
    }
  }

  const queue = new Queue();
   queue.enqueue(5);
   queue.enqueue(8);
   queue.enqueue(9);
    console.log(queue.dequeue());
    
  