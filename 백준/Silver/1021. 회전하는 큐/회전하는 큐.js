const fs = require('fs');
let [[N, M], inputs] = fs.readFileSync('/dev/stdin').toString().split('\n').map((v) => v.split(' ').map(Number));

class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head;
  tail;
  length;

  push(value) {
    const node = new Node(value);

    if (!this.length) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.length += 1;
  }

  pop() {
    const tail = this.tail;
    const prev = this.get(this.length - 1);
    
    this.tail = prev;
    this.tail.next = null;
    this.length -= 1;

    return tail;
  }

  get(index) {
    if (index === 1) return this.head;
    if (index === this.length) return this.tail;

    let node = this.head;

    for (let i = 1; i < index; i += 1) {
      node = node.next;
    }

    return node;
  }

  unShift(value) {
    const node = new Node(value);

    const head = this.head;
    this.head = node;
    this.head.next = head;
    this.length += 1;

    return head;
  }

  shift() {
    const node = this.head;
    this.head = node.next;
    this.length -= 1;

    return node;
  }

  findIndex(value) {
    for (let i = 1; i < this.length + 1; i += 1) {
      const node = this.get(i);
      if (node.value === value) {
        return i; 
      }
    }

    return -1;
  }
}

const linkedList = new LinkedList();

for (let i = 0; i < N; i += 1) {
  linkedList.push(i + 1);
}

let sum = 0;

for (let i = 0; i < M; i += 1) {
  const value = inputs[i];
  const index = linkedList.findIndex(value);
  const lastIndex = linkedList.length - index + 2;

  if (index < lastIndex) {
    for (let i = 1; i < index; i += 1) {
      const node = linkedList.shift();
      linkedList.push(node.value);
    }
  } else {
    for (let i = 1; i < lastIndex; i += 1) {
      const node = linkedList.pop();
      linkedList.unShift(node.value);
    }
  }

  sum += Math.min(index, lastIndex) - 1;
  linkedList.shift();
}

console.log(sum);