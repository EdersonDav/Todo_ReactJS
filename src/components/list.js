import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import { TiTrash } from 'react-icons/ti'
import Card from './card'

const List = (props) => {

  return (
    <ul>
      {props.items.map(item =>
        <li key={item.id} >
          <Card className={item.done ? "done item" : "item"}>
            {item.text}
            <div>
              <button className="ico trash" onClick={() => props.deleteItem(item)}><TiTrash /></button>
              <button className={item.done ? "check ico icocheck" : "ico icocheck"} onClick={() => { props.checked(item) }}><IoIosCheckmark /></button>
            </div>
          </Card>
        </li>
      )}
    </ul>
  )
}

export default List