import React from 'react'
import { TiTrash } from 'react-icons/ti'

const List = (props) => {
  return (
    <ul>
      {props.items.map(item =>
        <li key={item.id}>
          {item.text}
          <button onClick={() => props.deleteItem(item)}><TiTrash /></button>
        </li>
      )}
    </ul>
  )
}

export default List