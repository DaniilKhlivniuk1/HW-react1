import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 5px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Filter = ({ value, onChange }) => (
  <Input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Find contacts by name"
  />
);

export default Filter;