import styled from "styled-components";

export const List = styled.ul`
  margin-top: 10px;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 6px;
`;

export const Btn = styled.button`
  background: #f2d0d0ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
