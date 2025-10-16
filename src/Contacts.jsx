import React from "react";
import { Contact } from "./Contact";
import { Contacts } from "../styles/Contacts";

export function ContactsTest({ contacts, onDelete }) {
  return (
    <Contacts>
      <ul>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </Contacts>
  );
}
