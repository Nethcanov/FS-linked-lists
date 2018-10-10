class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = headValue;
    this.tail = null;
  }

  // adds a node to the tail of the list
  appendToTail(val) {}

  // adds a node to the head of the list
  insertHead(val) {}

  // removes the head node
  removeHead() {}

  // removes the tail node
  removeTail(val) {}

  // returns the node that contains the value
  findNode(val) {}

  // applies a callback to every node in the list
  forEach(callback) {}

  // inserts a new node after the reference node
  insertAfter(refNode, val) {}

  // deletes the node after the reference node
  deleteAfter(refNode) {}

}

module.exports = LinkedList;
