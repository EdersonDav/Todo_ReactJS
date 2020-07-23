class Item {
  static handleId = 0;
  constructor(text) {
    this.id = Item.handleId++
    this.text = text
    this.done = false
  }
}

export default Item