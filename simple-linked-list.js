//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  value = null;
  next = null;
  constructor(value) {
    this.value = value;
  }

  get value() {
    return this.value;
  }

  get next() {
    return this.next;
  }

  set next(element) {
    this.next = element;
  }
}

export class List {
  length = 0;
  head = null;
  constructor(values) {
    if (!Array.isArray(values)) {
      // const type = typeof values;
      // throw new Error(`The List constructor expects an Array.`);
      return;
    }

    values.forEach(value => {
      this.add(new Element(value));
    });
  }

  add(nextValue) {
    if (this.head === null && this.length === 0) {
      this.head = nextValue;
    } else if (this.length !== 0) {
      const old = this.head;
      this.head = nextValue;
      old.previous = this.head;
      this.head.next = old;
    }

    this.length++;
  }

  get length() {
    return this.length;
  }

  get head() {
    return this.head;
  }

  toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  reverse() {
    let reversedList = new List();
    let current = this.head;

    while (current !== null) {
      reversedList.add(new Element(current.value));
      current = current.next;
    }

    return reversedList;
  }
}
