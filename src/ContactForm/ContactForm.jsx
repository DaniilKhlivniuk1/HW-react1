import { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Btn = styled.button`
  padding: 5px 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          required
        />
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Number"
          required
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    );
  }
}

export default ContactForm;