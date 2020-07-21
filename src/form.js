import React, { useState } from 'react'

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
      <input onChange={handleTextInput} value={text} type="text" />
      <button onClick={addTodo}>Add</button>
    </form>
  )
}

export default Form