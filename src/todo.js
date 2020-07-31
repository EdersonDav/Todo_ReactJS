import React from 'react'
import './todo.css'
import List from './components/list'
import Form from './components/form'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import listReducer from './reducers/listReducer'

const TodoItemsLocalStorage = "items_todo"

const persisteStates = (state) => {
  localStorage.setItem(TodoItemsLocalStorage, JSON.stringify(state))
}

const loadingTodo = () => {
  const itemActual = localStorage.getItem(TodoItemsLocalStorage)
  if (itemActual) {
    return JSON.parse(itemActual)
  } else {
    return []
  }
}
const store = createStore(listReducer, loadingTodo())

store.subscribe(() => {
  persisteStates(store.getState())
})

const Todo = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <h1>Todo</h1>
        <Form />
        <List
        />
      </Provider>
    </div>
  )
}
export default Todo