/* ----------------------
Note: BEFORE tackling the LinkedList class
below, read the tests in the test file.
---------------------- */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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

  // returns the total number of nodes in the list
  getSize() {
    let currentNode = this.head;
    let size = 1;

    while (currentNode !== this.tail) {
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  // removes the node assigned to the tail
  removeFromTail() {}

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

  // remove the node after the reference node
  removeAfter(refNodeValue) {}

}

module.exports = LinkedList;
