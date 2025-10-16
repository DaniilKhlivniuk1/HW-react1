import React from "react";
import styled from "styled-components";

const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  h4 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
  p {
    margin: 2px 0 0;
    color: #555;
  }
`;

const DeleteBtn = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c82333;
  }
`;

export function Contact({ id, name, number, onDelete }) {
  return (
    <ContactItem>
      <Info>
        <h4>{name}</h4>
        <p>{number}</p>
      </Info>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        ×
      </DeleteBtn>
    </ContactItem>
  );
}