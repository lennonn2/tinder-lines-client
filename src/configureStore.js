import { createStore, combineReducers } from 'redux';
import _ from 'lodash';

import reducers from './reducers';
import defaultState from './defaults';
import mockData from './mockData';

const configureStore = () => {
  // const message = (state = ['Welcome message'], action) => {
  //   switch(action.type) {
  //     case 'UPDATE_MESSAGE':
  //       const checkedCategories = _(state.categories)
  //         .filter(c => !c.checked)
  //         .map(c => c.id)
  //         .value();
  //       const matchingLines = _(state.lines)
  //         .filter(line => !_.isEmpty(_.intersection(line.categories, checkedCategories)))
  //         .value();
  //       const message = _.isEmpty(matchingLines) ? 'Sorry, no message available' : _.sample(matchingLines);
  //       return message;
  //     default:
  //       return state;
  //   }
  // }
  
  // const categories = (state = defaultState.categories, action) => {
  //   switch(action.type) {
  //     case 'TOGGLE_CATEGORY':
  //       return state.map(c => {
  //         if (c.id === action.id) {
  //           return {
  //             ...c,
  //             checked: !c.checked
  //           };
  //         }
  //         return c;
  //       });
  //     default:
  //       return state;
  //   }
  // }

  // const lines = (state = [], action) => {
  //   switch(action.type) {
  //     case 'SET_ALL_LINES':
  //       return action.lines;
  //     default:
  //       return state;
  //   }
  // }
  
  // const reducers = combineReducers({
  //   message,
  //   categories,
  //   lines,
  // })
  
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} 

export default configureStore;