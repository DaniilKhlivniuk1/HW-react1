import styled from "styled-components";
import { Notification } from "../Notification/Notification.jsx";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
  text-align: center;
`;

const Item = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
  color: #3b2b83ff;
`;

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
          <Item>Positive feedback: {positivePercentage}%</Item>
        </List>
      )}
    </>
  );
};