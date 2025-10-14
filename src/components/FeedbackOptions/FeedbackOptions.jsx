import { List, Item, Btn } from "./FeedbackOptions";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((element, id) => (
        <Item key={id}>
          <Btn onClick={onLeaveFeedback}>{element}</Btn>
        </Item>
      ))}
    </List>
  );
};
