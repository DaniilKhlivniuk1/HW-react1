import { List, Item } from "./Statistics.js";
import { Notification } from "../Notification/Notification.jsx";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <List>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>Positive feedback: {positivePercentage}</Item>
        </List>
      )}
    </>
  );
};