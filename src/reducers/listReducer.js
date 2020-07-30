const listReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload]
    case "DELETE_ITEM":
      return status.filter(item => item.id != action.payload)
    case "CHANGE_DONE":
      return status.map(item => {
        if (item.id === action.payload) {
          item.done = !item.done
        }
        return item
      })
    default:
      return status
  }
}

export default listReducers