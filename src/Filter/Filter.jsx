import { useContext } from "react";
import { Input } from "./Filter";
import { ContactsContext } from "../../context/ContactsContext.jsx";

const Filter = () => {
  const { filter, changeFilter } = useContext(ContactsContext);

  return (
    <Input
      type="text"
      value={filter}
      onChange={changeFilter}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;