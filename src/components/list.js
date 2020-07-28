import React from 'react'
import ListItem from './listItem.js'

const List = (props) => {

  return (
    <ul>
      {props.items.map(item => <ListItem key={item.id} checked={props.checked} item={item} deleteItem={props.deleteItem} />
      )}
    </ul>
  )
}

export default List