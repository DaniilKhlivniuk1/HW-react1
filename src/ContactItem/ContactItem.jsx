import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Btn = styled.button`
  padding: 3px 8px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const ContactItem = ({ id, name, number, onDelete }) => (
  <Item>
    {name}: {number}
    <Btn onClick={() => onDelete(id)}>Delete</Btn>
  </Item>
);

export default ContactItem;