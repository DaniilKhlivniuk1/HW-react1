import styled from "styled-components";


export const ButtonLM = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #ff5722; 
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #e64a19; 
  }
`;


const Wrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #673ab7;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export default function Button({ onClick }) {
  return (
    <Wrapper>
      <Title>Search</Title>
      <ButtonLM type="button" onClick={onClick}>
        Load more
      </ButtonLM>
    </Wrapper>
  );
}