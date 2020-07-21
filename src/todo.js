import React, { useState } from 'react'
import './todo.css'
import List from './list'
import Form from './form'

const Todo = () => {
  const [items, setItems] = useState([])
  function onAddItem(item) {
    setItems([...items, item])
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