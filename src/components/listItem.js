import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import { TiTrash } from 'react-icons/ti'
import Card from './card'

const ListItem = (props) => {
  return (
    <ul>
      <li  >
        <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
          <div>
            <button className="ico trash" onClick={() => props.deleteItem(props.item)}><TiTrash /></button>
            <button className={props.item.done ? "check ico icocheck" : "ico icocheck"} onClick={() => { props.checked(props.item) }}><IoIosCheckmark /></button>
          </div>
        </Card>
      </li>
    </ul>
  )
}

export default ListItem