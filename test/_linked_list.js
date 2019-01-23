const { expect } = require('chai');
const LinkedList = require('../src/linked_list');

let linkedList = null;

describe('LinkedList', () => {
  beforeEach(() => {
    linkedList = new LinkedList(1);
  });

  describe('The addToTail method', () => {
    it('should add a new node to the tail', () => {
      linkedList.addToTail(2);
      expect(linkedList.head.next.value).to.equal(2);
      expect(linkedList.tail.value).to.equal(2);
    });
  });
  describe('The getSize method', () => {
    it('should calculate the total number of nodes in the list', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      expect(linkedList.getSize()).to.equal(5);
    });
  });
  describe('The removeFromTail method', () => {
    it('should remove the tail from the linked list', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.removeFromTail();
      expect(linkedList.tail.value).to.equal(2);
      expect(linkedList.tail.next).to.equal(null);
    });
    xit('should return the node that was removed', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      expect(linkedList.removeFromTail().value).to.equal(3);
    });
  });
  describe("The addToHead method", () => {
    it("should add a new node to the head", () => {
      linkedList.addToHead(0);
      expect(linkedList.head.value).to.equal(0);
      expect(linkedList.head.next.value).to.equal(1);
      expect(linkedList.tail.value).to.equal(1);
    });
  });
  describe('The removeFromHead method', () => {
    it('should remove the head from the linked list', () => {
      linkedList.addToHead(0);
      linkedList.removeFromHead();
      expect(linkedList.head.value).to.equal(1);
    });
    xit('should return the node that was removed', () => {
      linkedList.addToHead(0);
      expect(linkedList.removeFromHead().value).to.equal(0);
    });
    xit('should set the head & tail to null if the linked list only contains one node', () => {
      linkedList.removeFromHead();
      expect(linkedList.head).to.equal(null);
      expect(linkedList.tail).to.equal(null);
    });
  });
  describe('The findNode method', () => {
    it('should return the node that matches the value', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      expect(linkedList.findNode(3)).to.equal(linkedList.head.next.next);
    });
    xit('should return "No node found." if the refNodeValue does not exist', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      expect(linkedList.findNode(7)).to.equal("No node found.");
    });
  });
  describe('The forEach method', () => {
    it('should apply a callback to every node in the method', () => {
      let listItems = [];
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      linkedList.forEach(e => listItems.push(e.value));
      expect(listItems).to.deep.equal([1, 2, 3, 4]);
    });
  });
  describe('The insertAfter method', () => {
    it('should insert a node after the refNode value', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(4);
      linkedList.insertAfter(2, 3)
      expect(linkedList.head.next.value).to.equal(2);
      expect(linkedList.head.next.next.value).to.equal(3);
      expect(linkedList.head.next.next.next.value).to.equal(4);
    });
    xit('should update the tail if the node is inserted after the current tail', () => {
      linkedList.addToTail(2);
      linkedList.insertAfter(2, 3)
      expect(linkedList.tail.value).to.equal(3);
    });
    xit('should return "No node found." if the refNodeValue does not exist', () => {
      expect(linkedList.insertAfter(9, 3)).to.equal("No node found.");
    });
  });
  describe('The removeAfter method', () => {
    it('should remove the node after the refNode value', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      linkedList.removeAfter(2);
      expect(linkedList.head.next.value).to.equal(2);
      expect(linkedList.head.next.next.value).to.equal(4);
    });
    xit('should return the node that was removed', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      expect(linkedList.removeAfter(2).value).to.equal(3);
    });
    xit('should update the tail if the node removed was the tail', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.removeAfter(2);
      expect(linkedList.tail.value).to.equal(2);
    });
    xit('should return "No node found." if the refNodeValue does not exist', () => {
      expect(linkedList.removeAfter(9)).to.equal("No node found.");
    });
  });  
});
