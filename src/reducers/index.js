import _ from 'lodash';
import { combineReducers } from 'redux';

import defaultState from '../defaults';

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'UPDATE_MESSAGE':
      const checkedCategories = _(state.categories)
        .filter(c => c.checked)
        .map(c => c.id)
        .value();
      const matchingLines = _(state.lines)
        .filter(line => !_.isEmpty(_.intersection(line.categories, checkedCategories)))
        .value();
      const message = _.isEmpty(matchingLines) ? 'Sorry, no message available' : _.sample(matchingLines).message;
      return {
        ...state,
        message,
      };
    case 'TOGGLE_CATEGORY':
      const categories = state.categories.map(c => {
        if (c.id === action.id) {
          return {
            ...c,
            checked: !c.checked
          };
        }
        return c;
      });
      return {
        ...state,
        categories,
      };
    case 'SET_ALL_LINES':
      return {
        ...state,
        lines: action.lines
      };
    default:
      return state;
  }
}