  insert(value, index) {
    this.node = {
      value: value,
      next: null,
    };

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current.next;
      i++;
    }
    this.node.next = current;
    current.next = this.node;
    return this.node;
  }