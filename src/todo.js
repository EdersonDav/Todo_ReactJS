import React, { useState, useEffect } from 'react'
import Item from './components/item'
import './todo.css'
import List from './components/list'
import Form from './components/form'

const TodoItemsLocalStorage = "items_todo"

const Todo = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    let itemsTodo = localStorage.getItem(TodoItemsLocalStorage)
    if (itemsTodo) {
      setItems(JSON.parse(itemsTodo))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TodoItemsLocalStorage, JSON.stringify(items))
  }, [items])

  function onAddItem(item) {

    let newItem = new Item(item)
    setItems([...items, newItem])
  }

  function deleteItem(item) {
    let filteredItems = items.filter(itemFilter => itemFilter.id !== item.id)
    setItems(filteredItems)
  }

  function checked(item) {
    let itemsCheck = items.map(itemCheck => {
      if (itemCheck.id === item.id) {
        itemCheck.done = !itemCheck.done
      }
      return itemCheck
    })
    setItems(itemsCheck)
    console.log(item);
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <Form onAddItem={onAddItem} />
      <List
        deleteItem={deleteItem}
        checked={checked}
        items={items}
      />
    </div>
  )
}
export default Todo