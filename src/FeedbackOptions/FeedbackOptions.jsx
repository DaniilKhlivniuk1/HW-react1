import { useContext } from "react";
import { List, Item, Btn } from "./FeedbackOptions";
import { FeedbackContext } from "../../context/FeedbackContext.jsx";

export const FeedbackOptions = ({ options }) => {
  const { countTotalFeedback } = useContext(FeedbackContext);

  return (
    <List>
      {options.map((element, id) => (
        <Item key={id}>
          <Btn onClick={countTotalFeedback}>{element}</Btn>
        </Item>
      ))}
    </List>
  );
};