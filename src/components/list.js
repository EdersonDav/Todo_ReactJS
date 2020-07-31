import React from 'react'
import ListItem from './listItem.js'
import { useSelector } from 'react-redux'

const List = () => {
  const items = useSelector(state => state)
  return (
    <ul>
      {items.map(item => <ListItem key={item.id} item={item} />
      )}
    </ul>
  )
}

export default List