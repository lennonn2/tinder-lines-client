import React from 'react';

export default ({
  id,
  name,
  checked,
  label,
  onClick,
}) => {
  return (
    <div>
      <input
        key={id}
        type="checkbox"
        name={id}
        value={id}
        checked={checked}
        onChange={onClick}
      />{label}
    </div>
  )
}