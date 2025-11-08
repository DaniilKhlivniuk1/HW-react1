import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding: 8px 10px;
  background: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 16px;
  color: #222;
`;

export const Btn = styled.button`
  background: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;