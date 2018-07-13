import React from 'react';
import { connect } from 'react-redux';

import { toggleCategory } from '../actions';
import Checkbox from './Checkbox.jsx'

import './Checkboxes.css';

const mapStateToProps = ({ categories }) => {
  return {
    categories
  }
}

const Checkboxes = ({ categories, onCheckBoxClick }) => {
  return (
    <div className='checkboxGrid'>
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