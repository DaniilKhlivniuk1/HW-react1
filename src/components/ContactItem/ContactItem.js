import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding: 8px 10px;
  background: #eee;
  border: 1px solid #bbb;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  color: #222;
`;

export const Btn = styled.button`
  background: #444;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
