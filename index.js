class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length=this.items.length;
    
    this.items.sort((a, b)=>{
      return a-b
    })
  }

  get(pos) {
    if(pos>this.length-1) throw new Error('OutOfBounds');
    else return this.items[pos]

  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
