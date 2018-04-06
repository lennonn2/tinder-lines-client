import { createStore, combineReducers } from 'redux';


const configureStore = () => {
  const message = (state = ['Welcome message'], action) => {
    switch(action.type) {
      case 'UPDATE_MESSAGE':
        return action.message;
      default:
        return state;
    }
  }
  
  // add default categories state
  // import initialState from '../state/initialState.js'
  // const categories = (state = initialState.categories, action) =>
  const categories = (state = [], action) => {
    switch(action.type) {
      case 'TOGGLE_CATEGORY':
        return state.map(c => {
          if (c.id === action.id) {
            return {
              ...c,
              checked: !c.checked
            };
          }
        });
      default:
        return state;
    }
  }
  
  const reducers = combineReducers({
    message,
    categories,
  })
  
  return createStore(reducers);
} 

export default configureStore;