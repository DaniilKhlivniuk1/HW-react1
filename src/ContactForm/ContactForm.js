import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 6px;
`;

export const Input = styled.input`
  width: 180px;
  height: 30px;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0 8px;
  outline: none;

  &:focus {
    border-color: #666;
  }
`;

export const Btn = styled.button`
  background: #444;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;