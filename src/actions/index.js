export const updateMessage = () => {
  return {
    type: 'UPDATE_MESSAGE'
  }
}

export const toggleCategory = (id) => {
  return {
    type: 'TOGGLE_CATEGORY',
    id
  }
}