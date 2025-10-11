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
  border: 1px solid #00aeffff;
`;

const Btn = styled.button`
  padding: 5px 10px;
  background-color: grey;
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

  componentDidMount() {
    console.log("ContactForm mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name || prevState.number !== this.state.number) {
      console.log("ContactForm state changed");
    }
  }

  componentWillUnmount() {
    console.log("ContactForm will unmount");
  }

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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          placeholder="Name"
          required
        />
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Number"
          required
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    );
  }
}

export default ContactForm;