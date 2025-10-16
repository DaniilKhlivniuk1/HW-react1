import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ContactsForm } from "./components/ContactsForm";
import { Filter } from "./components/Filter";
import { ContactsTest } from "./components/Contacts";
import { AppStyle } from "./styles/AppStyle";

function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem("contacts");
      if (saved) return JSON.parse(saved);
    } catch (e) {
  
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const number = form.number.value.trim();
    if (!name || !number) return;
    const newContact = { id: nanoid(), name, number };

    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts((prev) => [...prev, newContact]);
    }
    form.reset();
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const searchContact = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppStyle>
      <h1>Phonebook</h1>
      <ContactsForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={searchContact} />
      <ContactsTest contacts={filteredContacts} onDelete={deleteContact} />
    </AppStyle>
  );
}

export default App;
