//10 --> 5 -->16
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (!this.head) {
      this.head = {
        value: value,
        next: null,
      };
      return this.head;
    }
    this.node = {
      value: value,
      next: null,
    };
    this.tail.next = this.node;
    this.tail = this.node;
    this.length++;
    return this.node;
  }

  prepend(value) {
    this.node = {
      value: value,
      next: null,
    };
    this.node.next = this.head;
    this.head = this.node;
    this.length++;
    return this;
  }

  insert(value, index) {
    this.node = {
      value: value,
      next: null,
    };

    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (index >= this.length) {
      this.append(value);
      return this;
    }

    let i = 0;
    let current = this.head;
    let previous = null;
    while (i < index && current !== null) {
      previous = current;
      current = current.next;
      i++;
    }
    previous.next = this.node;
    this.node.next = current;
    this.length++;
    return this.node;
  }

  remove(index) {
    if (index < 0) {
      return;
    }
    if (index > this.length) {
      return;
    }
    let i = 0;
    let previous = null;
    let current = this.head;
    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    previous.next = current.next;
    return this;
  }

  prinList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value + ",");
      currentNode = currentNode.next;
    }
    return;
  }
}
let newL = new LinkedList(10);
newL.append(5);
newL.append(12);
newL.append(13);
newL.append(14);
// console.log(newL);
// console.log(newL.head);
// console.log(newL.head.next);
// console.log(newL.head.next.next);

// console.log("========= prepend =========");
newL.prepend(20);
newL.prepend(22);
// console.log(newL.head);
// console.log(newL.head.next);

//console.log("========= insert =========");
newL.insert(50, 2);
//console.log("========= remove  =========");
newL.remove(2);
console.log("========= print test =========");
newL.prinList();
