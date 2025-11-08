import { useContext } from "react";
import { List } from "./ContactList.js";
import ContactItem from "../ContactItem/ContactItem.jsx";
import { ContactsContext } from "../../context/ContactsContext.jsx";

const ContactList = () => {
  const { visibleContacts, deleteContact } = useContext(ContactsContext);

  return (
    <List>
      {visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={deleteContact}
          />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </List>
  );
};

export default ContactList;