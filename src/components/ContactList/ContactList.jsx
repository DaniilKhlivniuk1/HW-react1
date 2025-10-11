import React from "react";
import styled from "styled-components";
import ContactItem from "../ContactItem/ContactItem.jsx";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 300px;
`;

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDeleteContact}
      />
    ))}
  </List>
);

export default ContactList;