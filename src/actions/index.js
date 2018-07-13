export const updateMessage = () => {
  return {
    type: 'UPDATE_MESSAGE'
  }
}

export const toggleCategory = id => {
  return {
    type: 'TOGGLE_CATEGORY',
    id
  }
}

export const copyMessage = text => {
  return {
    type: 'COPY_TEXT',
    text
  }
}

export const showCopiedToast = () => {
  return {
    type: 'SHOW_TOAST'
  }
}

export const hideCopiedToast = () => {
  return {
    type: 'HIDE_TOAST'
  }
}