import React from 'react';

export default function Input({ title, buttonLabel, setValue, newItem, addItem }) {

  return (
    <div className="content">
      <h3>{title}</h3>
      <input
        type="text"
        className="add-input"
        onChange={setValue}
        value={newItem}
        autoFocus />
      <div className="button" onClick={addItem}>{buttonLabel}</div>
    </div>
  )

}