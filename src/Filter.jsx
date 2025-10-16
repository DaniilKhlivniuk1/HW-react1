import React from "react";

export function Filter({ value, onChange }) {
  return (
    <>
      <h3>Find your contacts by name</h3>
      <input
        type="text"
        name="filter"
        title="Write to search"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
