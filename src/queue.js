/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  get size() {
    this.count = this.tail - this.head;
    return this.count;
  }
  enqueue(value) {
    this.storage[this.tail++] = value;
    return this.count;
  }
  dequeue() {
    const removed = this.storage[this.head];
    delete this.storage[this.head];
    if (this.head < this.tail) this.head++;
    return removed;
  }
}

module.exports = Queue;
