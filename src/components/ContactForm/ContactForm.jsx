import React, { useState, useContext } from "react";
import { Form, Input, Btn } from "./ContactForm";
import { ContactsContext } from "../../context/ContactsContext.jsx";

const ContactForm = () => {
  const { addContact } = useContext(ContactsContext);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    addContact(formData.name, formData.phone);
    setFormData({ name: "", phone: "" });
  };

  return (
    <Form onSubmit={submitForm}>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Only letters, apostrophes, dashes and spaces allowed"
        placeholder="Enter name"
        required
      />
      <Input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInput}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number may include digits, spaces, dashes, and +"
        placeholder="Enter number"
        required
      />
      <Btn type="submit">Save</Btn>
    </Form>
  );
};

export default ContactForm;