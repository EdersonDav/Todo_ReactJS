import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import { TiTrash } from 'react-icons/ti'
import Card from './card'
import { useDispatch } from 'react-redux'
import { deleteItem, checked } from '../actions/listActions'

const ListItem = (props) => {
  const dispatch = useDispatch()
  return (
    <ul>
      <li >
        <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
          <div>
            <button className="ico trash" onClick={() => dispatch(deleteItem(props.item.id))}><TiTrash /></button>
            <button
              className={props.item.done ? "check ico icocheck" : "ico icocheck"}
              onClick={() => { dispatch(checked(props.item.id)) }}>
              <IoIosCheckmark />
            </button>
          </div>
        </Card>
      </li>
    </ul>
  )
}

export default ListItem