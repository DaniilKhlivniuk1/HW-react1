import React from "react";
import { Contact } from "./Contact";
import styled from "styled-components";

const ContactsWrapper = styled.div`
  max-width: 500px;
  margin: 20px auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export function ContactsTest({ contacts, onDelete }) {
  return (
    <ContactsWrapper>
      <List>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </List>
    </ContactsWrapper>
  );
}