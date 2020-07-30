import Item from '../components/item'

function addItem(item) {
  let newItem = new Item(item)
  return { type: "ADD_ITEM", payload: item }
}

function deleteItem(id) {
  return { type: "DELETE_ITEM", payload: id }
}

function checked(id) {
  return { type: "CHANGE_DONE", payload: id }
}

export { addItem, deleteItem, checked }