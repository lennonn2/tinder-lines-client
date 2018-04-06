import React from 'react';

let div;

const checkboxes = () => {
  const categories = [...div.children]
    .filter((el) => {
      return el.type === 'checkbox' && el.checked;
    })
    .map((el) => {
      return el.value;
    })
  // return updateStore(categories, 'categories');
}

export default ({}) => {
  return (
    <div onClick={checkboxes} ref={(el) => { div = el }}>
      <input defaultChecked type="checkbox" name="funny" value="funny" />Funny<br/>
      <input defaultChecked type="checkbox" name="cheesy" value="cheesy" />Cheesy<br/>
      <input defaultChecked type="checkbox" name="risky" value="risky" />Risky<br/>
      <input defaultChecked type="checkbox" name="stupid" value="stupid" />Stupid<br/>
      <input defaultChecked type="checkbox" name="pickup" value="pickup" />Pickup Line<br/>
      <input defaultChecked type="checkbox" name="question" value="question" />Question<br/>
    </div>
  )
}