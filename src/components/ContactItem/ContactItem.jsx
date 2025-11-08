import { Item, Btn } from "./ContactItem";

const ContactItem = ({ id, name, number, onDelete }) => {
  const handleRemove = () => onDelete(id);

  return (
    <Item>
      <span>
        {name} — {number}
      </span>
      <Btn onClick={handleRemove}>Remove</Btn>
    </Item>
  );
};

export default ContactItem;
