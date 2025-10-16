import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  max-width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export function Filter({ value, onChange }) {
  return (
    <FilterWrapper>
      <Title>Find your contacts by name</Title>
      <Input
        type="text"
        name="filter"
        title="Write to search"
        value={value}
        onChange={onChange}
        placeholder="Type a name..."
      />
    </FilterWrapper>
  );
}