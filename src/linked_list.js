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

  // WARM UP
  //works
  // returns the value of the head of the linked list
  headValue() {
    return this.head.value;
  }

  //works
  // returns the value of the tail of the linked list
  tailValue() {
    return this.tail.value;
  }

  //works
  // returns the value of the node that comes after the head
  // no need to traverse because we're just looking at the head and next value
  nextToHead() {
    if (this.head.next === null) {
      return null;
    } else {
      return this.head.next.value;
    }
  }

  // MAIN EXERCISES

  // works
  // returns the NODE stored at the Nth index position of the list
  getNthNode(N) {
    //traverse the list -
    let node = this.head;
    let index = 0;
    while (node && index < N) {
      //get next node
      node = node.next;
      index++;
    }
    //return either the node at the Nth position or null
    if (index === N) {
      return node;
    } else {
      return null;
    }
  }

  //works
  //removes the node assigned to the tail and returns the removed node
  //from slides  with added part of returning the removed node
  removeFromTail() {
    let currentNode = this.head; //current is the first
    let previousNode = null; //empty to accept the current node when it becomes the previous
    // let removedNode = this.tail; // assign the value of the tail to this and return it at the end
    while (currentNode.next !== null) {
      //traverse the linked list whilst assigning current to previous position
      previousNode = currentNode; //if list is 1,2,3,4,5 - 1 goes in here and then - see next
      currentNode = currentNode.next; //current becomes 2
    }

    previousNode.next = null; //update node pointer's value to null so it becomes the tail
    this.tail = previousNode; //update the value of the tail
    return currentNode;
  }

  // adds a node to the head of the list
  addToHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // done - removes the node assigned to the head
  // returns node removed from head
  // done - if only one node - set head and tail to null
  removeFromHead() {
    let currentNode = this.head; //(index 0)
    let newHead = currentNode.next; //temp (index 1 to become index 0)
    while (newHead !== null) {
      this.head = newHead; //moves the element that was "1 to position 0"
      return currentNode;
    }
    this.head = null; //set as null if head is null
    this.tail = null; //set as null if head is null
  }

  //works
  // returns the node that contains the value if found or "No node found"
  findNode(refNodeValue) {
    //traverse the list with a condition
    let node = this.head;
    while (node !== null && node.value !== refNodeValue) {
      //while head (node) exists and doesn't equal what we are looking for
      node = node.next; //keep going
      if (node === null) {
        return "No node found."; //if there is no match
      }
    }
    return node; //if found, return the node
  }

  // works
  // applies a callback to every node in the list
  forEach(fn) {
    let node = this.head;
    while (node !== null) {
      fn(node);
      node = node.next;
    }
  }
  // list includes red 0, yellow 1, blue 2 - want to add orange
  // working - inserts a new node after the reference node
  // working - if new node is inserted after the tail, update the tail
  // working - if refNodeValue not found return "No node found."
  insertAfter(refNodeValue, val) {
    // node to find, what to insert after
    // traverse linked list and find node refNodeValue
    // create new node
    // update node pointers
    let node = this.head; //to cut down on typing and make it easier to read
    let nodeAfter = null; //to be used to set the tail pointer
    let nodeToAdd = new Node(val); //create node with value to be added

    while (node !== null && node.value !== refNodeValue) {
      //while head (node) exists and doesn't equal what we are looking for
      node = node.next; //keep going
      if (node === null) {
        return "No node found."; //if there is no match
      }
    }
    //if found
    if (this.tail === node) {
      //if reNodeValue is the tail and we are adding val as the new tail and need to update the pointer
      nodeToAdd.next = null;
      this.tail = nodeToAdd;
    } else {
      nodeAfter = node.next; //if matches -  2 yellow (0 is red, 1 is waiting, 2 is yellow)
      node.next = nodeToAdd; // 1 is now orange (0 is red, 1 is orange, 2 is yellow)
      node.next.next = nodeAfter;
    }
  }

  // working - remove the node after the reference node
  // working - return the removed node
  // not working - update pointers (tail) if tail was removed
  // working - return "No node found." if reNodeValue does not exist
  //list is yellow, green, blue - find yellow, remove green
  removeAfter(refNodeValue) {
    let node = this.head;
    let toFind = refNodeValue;
    let nodeAfter = null;
    let removedNode = null;

    while (node !== null && node.value !== toFind) {
      //while head (node) exists and doesn't equal what we are looking for
      node = node.next; //keep going
      if (node === null || node === this.tail) {
        return "No node found."; //if there is no match or it is the last node (same difference)
      }
    }
    // if reNodeValue is found

    // if remove final item - not working
    // if(node.value === toFind && node.next.next === null){
    //   removedNode = node.next;
    //   node.next = null;

    // } else {

    nodeAfter = node.next.next; //assign blue as node after
    removedNode = node.next; // take out green (current node next)
    node.next = nodeAfter; // blue becomes node next
    // }
    return removedNode; //return green
  }

  // OPTIONAL

  //merges the current list with a new list, appending the new list after the tail of the current list
  //point list tail to newList head
  mergeAppend(newList) {}

  //merges the current list with a new list, by inserting the new list after the node in the index position.
  //find node in the index position - the node.next points to newList.head
  mergeAfterIndex(newList, index) {}
}

module.exports = LinkedList;
