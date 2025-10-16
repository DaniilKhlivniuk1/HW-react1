import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0069d9;
  }
`;

export function ContactsForm({ onAdd }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Schreibe dien Freund name, bitte</Label>
      <Input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces"
        required
      />

      <Label htmlFor="tel">Schreibe dien Freund telefonnummer, bitte</Label>
      <Input
        id="tel"
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add Contact</Button>
    </Form>
  );
}