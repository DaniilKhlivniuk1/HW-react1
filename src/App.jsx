import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";
import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title1 = styled.h1``;
export const Title2 = styled.h2``;

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const saved = localStorage.getItem("contacts");
    if (saved) this.setState({ contacts: JSON.parse(saved) });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (contacts.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), name, number }]
    }));
  };

  deleteContact = (id) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(c => c.id !== id)
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    const { filter } = this.state;

    return (
      <Box>
        <Title1>Phonebook</Title1>
        <ContactForm onAddContact={this.addContact} />
        <Title2>Contacts</Title2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Box>
    );
  }
}

export default App;