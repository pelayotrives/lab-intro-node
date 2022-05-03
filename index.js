class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    for (let i = 0; i <= this.items.length - 1; i++) {
      if (item > this.items[i]) {
        this.items.splice(i, 0, item);
        break;
      }
    }
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
