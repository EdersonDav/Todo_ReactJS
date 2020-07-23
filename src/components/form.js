import React, { useState } from 'react'
import Card from './card'

const Form = (props) => {
  const [text, setText] = useState("")

  function handleTextInput(event) {
    let txt = event.target.value;
    setText(txt)
  }

  function addTodo(event) {
    event.preventDefault()
    if (text) {
      props.onAddItem(text)
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