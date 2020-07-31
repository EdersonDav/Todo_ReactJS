import React, { useState } from 'react'
import Card from './card'
import { addItem } from '../actions/listActions'
import { useDispatch } from 'react-redux'

const Form = (props) => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  function handleTextInput(event) {
    let txt = event.target.value;
    setText(txt)
  }

  function addTodo(event) {
    event.preventDefault()
    if (text) {
      dispatch(addItem(text))
      setText("")
    }
  }

  return (
    <form >
      <Card>
        <input onChange={handleTextInput} value={text} type="text" />
        <button onClick={addTodo} className="btnAdd">Add</button>
      </Card>
    </form>
  )
}

export default Form