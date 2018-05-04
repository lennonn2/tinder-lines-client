import _ from 'lodash';

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
      let message;
      if (_.isEmpty(matchingLines)) {
        message = {
          id: 0,
          lines: [{
            index: 0,
            text: ['Sorry, no message available'],
          }]
        };
      } else {
        const randomMessage = _.sample(matchingLines);
        message = {
          id: randomMessage.lineId,
          lines: randomMessage.messages
        };
      }
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