import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  width: 180px;
  height: 30px;
  border: 1px solid #aaa;
  border-radius: 6px;
  padding: 0 8px;
`;

export const Btn = styled.button`
  background: #555;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
