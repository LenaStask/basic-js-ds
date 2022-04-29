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

  const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.peek());