/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  get size() {
    return this.count;
  }
  push(value) {
    this.storage[this.count++] = value;
    return this.count;
  }
  pop() {
    const removed = this.storage[--this.count];
    delete this.storage[this.count];
    if (this.count < 0) {
      this.count = 0;
    }
    return removed;
  }
}

module.exports = Stack;
