// circular queue: collection of objects stored in a buffer (treated like objects connected
// end to end in a circle)

// adding object: object added to the position that immediately follows the
// most recently added object

// removing an object: always removes the object that has been in the queue the longest

// works as long as there are empty spots in the buffer; if it becomes full, adding a new object
// req. getting rid of an existing object; object that has been in queue the longest is discarded
// and replaced by the new object

// write CircularQueue class that implements a circular queue for arbitrary objects
// obtain buffer size w/ an arg provided to the constructor, and provide these methods:
// - enqueue to add an object to the queue
// - dequeue to remove (and return) the oldest object in queue. return null if the queue empty

// none of the values stored in queue are null (null may be used to designate empty spots
// in the buffer)

// solution:

// class CircularQueue {
//   constructor(size) {
//     // buffer with room for N objects
//     // null indicates empty buffer positions (all initialized in constructor)
//     this.buffer = new Array(size).fill(null);
//     // points to next spot where object will be inserted
//     this.nextPosition = 0;
//     // points to oldest object in queue
//     this.oldestPosition = 0;
//   }

//   // tests for null, not jsut falseness (cause queue may contain values like 0, '', false)
//   enqueue(object) {
//     // checks whether it will be adding the object to an empty buffer position or replacing
//     // an object in an occupied position
//     if (this.buffer[this.nextPosition] !== null) {
//       // if occupied, we update the oldestPosition prop to replace the oldest object
//       this.oldestPosition = this.increment(this.nextPosition);
//     }
//     // store the object in the appropriate position
//     this.buffer[this.nextPosition] = object;
//     // increment the nextPosition property
//     this.nextPosition = this.increment(this.nextPosition);
//   }

//   dequeue() {
//     // extracts oldest object to value variable
//     let value = this.buffer[this.oldestPosition];
//     // replaces oldest object with null to indicate position is empty
//     this.buffer[this.oldestPosition] = null;
//     // prevents calling dequeue on an empty queue, and adding objs to that queue
//     // if you don't check for the null value, the 2 props. get out of sync and cause problems
//     if (value !== null) {
//       // then we update oldestPosition property
//       this.oldestPosition = this.increment(this.oldestPosition);
//     }
//     // return the value that was originally in position of oldest value
//     return value;
//   }

//   // increments the position pointer, and wraps around to 0 when necessary
//   increment(position) {
//     // ex (0 + 1) % 3 === 1
//     // ex (1 + 1) % 3 === 2
//     // ex (2 + 1) % 3 === 0
//     return (position + 1) % this.buffer.length;
//   }
// }

// Further exploration:
// simpler solution that uses an Array, and push and shift methods
// array always ordered oldest to newest since new items are always added to the end with push
// take off the oldest item using shift:

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = [];
  }

  enqueue(obj) {
    if (this.items.length >= this.size) {
      this.dequeue();
    }

    this.items.push(obj);
  }

  dequeue() {
    if (this.items.length === 0) return null;
    // shift removes oldest item
    return this.items.shift();
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
