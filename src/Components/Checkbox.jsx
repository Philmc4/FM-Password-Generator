import React from "react";

export default function Checkbox({ id, text, name, checked, handleChange }) {
  return (
    <div className="checkbox-input-container">
      <input
        type="checkbox"
        id={id}
        name={name}
        defaultChecked={checked}
        onChange={handleChange}
        // value={checked}
      />
      <label htmlFor={id} className="text-3 text-my-grey-200 capitalize">
        {text}
      </label>
    </div>
  );
}
