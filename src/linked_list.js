/* ----------------------
Note: BEFORE tackling the LinkedList class
below, read the tests in the test file.
---------------------- */

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  // adds a node to the tail of the list
  addToTail(val) {
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
  }

  // removes the node assigned to the tail
  removeFromTail() {
    // create a variable to keep track of the current node
    // loop through all nodes (stop at the second-last
    // node - the one one before the tail)
    // re-assign the tail to that node
  }

  // adds a node to the head of the list
  addToHead(val) {}

  // removes the node assigned to the head
  removeFromHead() {}

  // returns the node that contains the value
  findNode(refNodeValue) {}

  // applies a callback to every node in the list
  forEach(fn) {}

  // inserts a new node after the reference node
  insertAfter(refNodeValue, val) {}

  // deletes the node after the reference node
  deleteAfter(refNodeValue) {}

}

module.exports = LinkedList;
