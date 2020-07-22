import React, { useState } from 'react'
import Item from './item'
import './todo.css'
import List from './list'
import Form from './form'

const Todo = () => {
  const [items, setItems] = useState([])
  function onAddItem(item) {

    let newItem = new Item(item)
    setItems([...items, newItem])
  }
  return (
    <div className="container">
      <h1>Todo</h1>
      <Form onAddItem={onAddItem} />
      <List items={items} />
    </div>
  )
}
export default Todo