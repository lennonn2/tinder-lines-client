import React from 'react';
import { connect } from 'react-redux';

import { toggleCategory } from '../actions';
import Checkbox from './Checkbox.jsx'

let div;

const checkboxes = (el) => {

  const categories = [...div.children]
    .filter((el) => {
      return el.type === 'checkbox' && el.checked;
    })
    .map((el) => {
      return el.value;
    })
  // return updateStore(categories, 'categories');
}

const mapStateToProps = ({ categories }) => {
  return {
    categories
  }
}

const Checkboxes = ({ categories, onCheckBoxClick }) => {
  return (
    <div>
      {categories.map(category =>
        <Checkbox
          key={category.id}
          type="checkbox"
          id={category.id}
          checked={category.checked}
          label={category.value}
          onClick={() => onCheckBoxClick(category.id)}
        />
      )}
    </div>
  )
}

export default connect(mapStateToProps, { onCheckBoxClick: toggleCategory })(Checkboxes);