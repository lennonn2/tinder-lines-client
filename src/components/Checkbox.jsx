import React from 'react';
import './Checkbox.css';

export default ({
  id,
  name,
  checked,
  label,
  onClick,
}) => {
  return (
    <label className='cbx-container'>
      <input
        key={id}
        type="checkbox"
        name={id}
        value={id}
        defaultChecked={checked}
        onChange={onClick}
      />
      <span
        className='checkmark'
      ></span>{label}
    </label>
  )
}