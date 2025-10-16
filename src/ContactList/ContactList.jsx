import { Contact } from "./Contact/Contact";
import style from "./ContactList.module.scss";

export function ContactList({ contacts, filter, handleDelete }) {
  const filteredContacts = contacts.filter(el => 
    filter ? el.name.toLowerCase().includes(filter.toLowerCase()) : true
  );

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p className={style.none}>No contacts!</p>
      ) : (
        <ul className={style.contacts}>
          {filteredContacts.map((el, id) => (
            <Contact
              name={el.name}
              number={el.number}
              key={id}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
}