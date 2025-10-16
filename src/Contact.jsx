import React from "react";

export function Contact({ id, name, number, onDelete }) {
  return (
    <li key={id}>
      <h4>{name}</h4>
      <p>{number}</p>
      <button type="button" onClick={() => onDelete(id)}>
        D
      </button>
    </li>
  );
}
