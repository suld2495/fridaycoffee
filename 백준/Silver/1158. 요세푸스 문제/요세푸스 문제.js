const fs = require('fs');
let [N, M] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  shift() {
    const head = this.head;

    this.head = head.next;
    this.length -= 1;

    return head;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return node;
    }

    this.tail.next = node;
    this.tail = node;
    this.length += 1;

    return node;
  }
}

const list = new LinkedList();

for (let i = 1; i <= N; i += 1) {
  list.push(i);
}

const result = [];

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < M - 1; j += 1) {
    const node = list.shift().value;

    list.push(node);
  }

  result.push(list.shift().value);
}

console.log(`<${result.join(', ')}>`);