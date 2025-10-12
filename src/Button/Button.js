import { ButtonLM } from "./Button";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #ff6f61; /* мягкий кораллово-розовый */
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const ButtonLMStyled = styled(ButtonLM)`
  background-color: #00bfa6; /* бирюзовый */
  color: #fff;
  &:hover,
  &:focus {
    background-color: #009e8a;
  }
`;

export default function Button({ onClick }) {
  return (
    <Wrapper>
      <Title>Search</Title>
      <ButtonLMStyled type="button" onClick={onClick}>
        Load more
      </ButtonLMStyled>
    </Wrapper>
  );
}